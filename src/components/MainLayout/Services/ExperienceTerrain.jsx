/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import * as THREE from "three";

const TERRAIN_WIDTH = 12;
const TERRAIN_DEPTH = 6.4;
const X_SEGMENTS = 72;
const Z_SEGMENTS = 42;

const careerStops = [
  { x: -5, z: 0.35 },
  { x: -2.7, z: 0.05 },
  { x: -0.45, z: 0.3 },
  { x: 1.8, z: -0.05 },
  { x: 4.85, z: -0.25 },
];

function gaussian(x, z, centerX, centerZ, height, spread) {
  const distance = (x - centerX) ** 2 + (z - centerZ) ** 2;
  return height * Math.exp(-distance / (2 * spread ** 2));
}

function terrainHeight(x, z) {
  return (
    -0.32 +
    Math.sin(x * 1.15 + z * 0.6) * 0.08 +
    Math.cos(z * 1.7 - x * 0.28) * 0.06 +
    gaussian(x, z, -5, 0.35, 0.9, 0.9) +
    gaussian(x, z, -2.65, 0, 2.55, 1.08) +
    gaussian(x, z, 1.75, -0.1, 2.9, 0.98) +
    gaussian(x, z, 4.85, -0.2, 3.45, 0.82) -
    gaussian(x, z, 3.12, -0.08, 2.35, 0.52)
  );
}

function createTerrainGeometry() {
  const positions = [];
  const indices = [];

  for (let zIndex = 0; zIndex <= Z_SEGMENTS; zIndex += 1) {
    const z = (zIndex / Z_SEGMENTS - 0.5) * TERRAIN_DEPTH;
    for (let xIndex = 0; xIndex <= X_SEGMENTS; xIndex += 1) {
      const x = (xIndex / X_SEGMENTS - 0.5) * TERRAIN_WIDTH;
      positions.push(x, terrainHeight(x, z), z);
    }
  }

  for (let zIndex = 0; zIndex < Z_SEGMENTS; zIndex += 1) {
    for (let xIndex = 0; xIndex < X_SEGMENTS; xIndex += 1) {
      const topLeft = zIndex * (X_SEGMENTS + 1) + xIndex;
      const topRight = topLeft + 1;
      const bottomLeft = (zIndex + 1) * (X_SEGMENTS + 1) + xIndex;
      const bottomRight = bottomLeft + 1;
      indices.push(topLeft, bottomLeft, topRight, topRight, bottomLeft, bottomRight);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function edgeIntersection(start, end, level) {
  const startDelta = start.y - level;
  const endDelta = end.y - level;
  if (startDelta * endDelta >= 0) return null;
  const amount = startDelta / (startDelta - endDelta);
  return new THREE.Vector3(
    THREE.MathUtils.lerp(start.x, end.x, amount),
    level + 0.018,
    THREE.MathUtils.lerp(start.z, end.z, amount),
  );
}

function addTriangleContour(points, level, start, middle, end) {
  const intersections = [
    edgeIntersection(start, middle, level),
    edgeIntersection(middle, end, level),
    edgeIntersection(end, start, level),
  ].filter(Boolean);

  if (intersections.length === 2) {
    points.push(...intersections[0].toArray(), ...intersections[1].toArray());
  }
}

function createContourGroup() {
  const group = new THREE.Group();
  const levels = Array.from({ length: 13 }, (_, index) => -0.35 + index * 0.31);
  const xStep = TERRAIN_WIDTH / X_SEGMENTS;
  const zStep = TERRAIN_DEPTH / Z_SEGMENTS;

  levels.forEach((level, levelIndex) => {
    const points = [];

    for (let zIndex = 0; zIndex < Z_SEGMENTS; zIndex += 1) {
      const z = -TERRAIN_DEPTH / 2 + zIndex * zStep;
      for (let xIndex = 0; xIndex < X_SEGMENTS; xIndex += 1) {
        const x = -TERRAIN_WIDTH / 2 + xIndex * xStep;
        const topLeft = new THREE.Vector3(x, terrainHeight(x, z), z);
        const topRight = new THREE.Vector3(x + xStep, terrainHeight(x + xStep, z), z);
        const bottomLeft = new THREE.Vector3(x, terrainHeight(x, z + zStep), z + zStep);
        const bottomRight = new THREE.Vector3(
          x + xStep,
          terrainHeight(x + xStep, z + zStep),
          z + zStep,
        );

        addTriangleContour(points, level, topLeft, bottomLeft, topRight);
        addTriangleContour(points, level, topRight, bottomLeft, bottomRight);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    const isCoralContour = levelIndex % 4 === 2;
    const material = new THREE.LineBasicMaterial({
      color: isCoralContour ? 0xeb6061 : 0xf5f5f5,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    material.userData.targetOpacity = isCoralContour ? 0.78 : 0.34;
    group.add(new THREE.LineSegments(geometry, material));
  });

  return group;
}

function createRoute() {
  const pit = { x: 3.12, z: -0.08 };
  const routeCoordinates = [...careerStops.slice(0, 4), pit, careerStops[4]];
  const points = routeCoordinates.map(({ x, z }) =>
    new THREE.Vector3(x, terrainHeight(x, z) + 0.1, z),
  );
  const curve = new THREE.CatmullRomCurve3(points, false, "centripetal", 0.35);
  const geometry = new THREE.TubeGeometry(curve, 120, 0.035, 7, false);
  const material = new THREE.MeshBasicMaterial({
    color: 0xeb6061,
    transparent: true,
    opacity: 0.95,
  });
  return new THREE.Mesh(geometry, material);
}

function createMarker(stop) {
  const group = new THREE.Group();
  const height = terrainHeight(stop.x, stop.z);
  group.position.set(stop.x, height + 0.08, stop.z);

  const stemMaterial = new THREE.MeshBasicMaterial({ color: 0xeb6061 });
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.42, 6), stemMaterial);
  stem.position.y = 0.21;
  group.add(stem);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.105, 0.025, 7, 22),
    new THREE.MeshBasicMaterial({ color: 0xf5f5f5 }),
  );
  ring.position.y = 0.44;
  ring.rotation.x = Math.PI / 2;
  group.add(ring);

  const anchor = new THREE.Object3D();
  anchor.position.y = 0.46;
  group.add(anchor);
  group.userData.anchor = anchor;
  return group;
}

export default function ExperienceTerrain({ reduceMotion }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x171717);
    scene.fog = new THREE.Fog(0x171717, 12, 22);

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    const baseCamera = new THREE.Vector3(0, 6.9, 9.5);
    camera.position.copy(baseCamera);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.className = "experience-terrain__canvas";
    renderer.domElement.setAttribute("aria-hidden", "true");
    container.prepend(renderer.domElement);

    const terrainGroup = new THREE.Group();
    terrainGroup.rotation.x = -0.03;
    scene.add(terrainGroup);

    const terrainGeometry = createTerrainGeometry();
    const terrainMaterial = new THREE.MeshStandardMaterial({
      color: 0x211d1e,
      roughness: 0.92,
      metalness: 0.02,
      flatShading: true,
    });
    const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
    terrainGroup.add(terrain);

    const contourGroup = createContourGroup();
    terrainGroup.add(contourGroup);

    const route = createRoute();
    terrainGroup.add(route);

    const markers = careerStops.map((stop) => createMarker(stop));
    markers.forEach((marker) => terrainGroup.add(marker));

    scene.add(new THREE.HemisphereLight(0xf5f5f5, 0x120d0e, 1.35));
    const keyLight = new THREE.DirectionalLight(0xeb6061, 2.4);
    keyLight.position.set(-4, 7, 5);
    scene.add(keyLight);
    const rimLight = new THREE.DirectionalLight(0xf5f5f5, 1.15);
    rimLight.position.set(5, 4, -3);
    scene.add(rimLight);

    const pointer = { x: 0, y: 0 };
    const projected = new THREE.Vector3();
    const worldPosition = new THREE.Vector3();
    const lookTarget = new THREE.Vector3(0, 0.65, 0);
    let frameId;
    let startTime = performance.now();

    const resize = () => {
      const width = Math.max(container.clientWidth, 1);
      const height = Math.max(container.clientHeight, 1);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      baseCamera.z = camera.aspect < 1.45 ? 14 : camera.aspect < 1.7 ? 11 : 9.5;
      camera.position.z = baseCamera.z;
      camera.updateProjectionMatrix();
    };

    const updatePins = () => {
      const stage = container.parentElement;
      markers.forEach((marker, index) => {
        marker.userData.anchor.getWorldPosition(worldPosition);
        projected.copy(worldPosition).project(camera);
        const pin = stage?.querySelector(`[data-experience-index="${index}"]`);
        if (!pin) return;
        pin.style.left = `${(projected.x * 0.5 + 0.5) * container.clientWidth}px`;
        pin.style.top = `${(-projected.y * 0.5 + 0.5) * container.clientHeight}px`;
      });
    };

    const render = (time) => {
      const elapsed = Math.min((time - startTime) / 1400, 1);
      const reveal = reduceMotion ? 1 : 1 - (1 - elapsed) ** 3;
      terrainGroup.scale.y = THREE.MathUtils.lerp(0.16, 1, reveal);
      contourGroup.children.forEach((line) => {
        line.material.opacity = line.material.userData.targetOpacity * reveal;
      });
      route.material.opacity = THREE.MathUtils.lerp(0, 0.95, Math.max(0, (reveal - 0.38) / 0.62));

      camera.position.x = THREE.MathUtils.lerp(camera.position.x, baseCamera.x + pointer.x * 0.42, 0.035);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, baseCamera.y - pointer.y * 0.18, 0.035);
      camera.lookAt(lookTarget);
      updatePins();
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(render);
    };

    const handlePointerMove = (event) => {
      if (reduceMotion) return;
      const bounds = container.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };

    const handlePointerLeave = () => {
      pointer.x = 0;
      pointer.y = 0;
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", handlePointerLeave);
    resize();
    startTime = performance.now();
    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
      scene.traverse((object) => {
        object.geometry?.dispose();
        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose());
        } else {
          object.material?.dispose();
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [reduceMotion]);

  return <div ref={containerRef} className="experience-terrain" />;
}
