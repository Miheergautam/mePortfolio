/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  GripHorizontal,
} from "lucide-react";

const vibrate = () => {
  if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    navigator.vibrate(10);
  }
};

export default function ProjectCarousel({ projects, category }) {
  const viewportRef = useRef(null);
  const cardRefs = useRef([]);
  const activeIndexRef = useRef(0);
  const animationFrameRef = useRef(null);
  const dragRef = useRef({
    active: false,
    moved: false,
    startX: 0,
    startScrollLeft: 0,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const selectProject = useCallback((index, withHaptic = true) => {
    if (index === activeIndexRef.current) return;

    activeIndexRef.current = index;
    setActiveIndex(index);
    if (withHaptic) vibrate();
  }, []);

  const getNearestIndex = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return 0;

    const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;

    return cardRefs.current.reduce(
      (nearest, card, index) => {
        if (!card) return nearest;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(viewportCenter - cardCenter);

        return distance < nearest.distance ? { index, distance } : nearest;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY }
    ).index;
  }, []);

  const syncCenteredProject = useCallback(() => {
    selectProject(getNearestIndex());
  }, [getNearestIndex, selectProject]);

  const handleScroll = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(syncCenteredProject);
  };

  const centerProject = useCallback((index, behavior = "smooth") => {
    const viewport = viewportRef.current;
    const card = cardRefs.current[index];
    if (!viewport || !card) return;

    const left = card.offsetLeft - (viewport.clientWidth - card.offsetWidth) / 2;
    viewport.scrollTo({ left, behavior });
  }, []);

  const scrollToProject = useCallback(
    (index) => {
      if (!projects.length) return;

      const nextIndex = Math.min(Math.max(index, 0), projects.length - 1);
      centerProject(nextIndex);
    },
    [centerProject, projects.length]
  );

  useEffect(() => {
    activeIndexRef.current = 0;
    setActiveIndex(0);
    viewportRef.current?.scrollTo({ left: 0, behavior: "auto" });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [projects]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToProject(activeIndexRef.current + 1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToProject(activeIndexRef.current - 1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      scrollToProject(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      scrollToProject(projects.length - 1);
    }
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === "touch" || event.button !== 0) return;

    dragRef.current = {
      active: true,
      moved: false,
      startX: event.clientX,
      startScrollLeft: event.currentTarget.scrollLeft,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event) => {
    if (!dragRef.current.active) return;

    const distance = event.clientX - dragRef.current.startX;
    if (Math.abs(distance) > 4) dragRef.current.moved = true;
    event.currentTarget.scrollLeft = dragRef.current.startScrollLeft - distance;
  };

  const handlePointerUp = (event) => {
    if (!dragRef.current.active) return;

    dragRef.current.active = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);

    const nearestIndex = getNearestIndex();
    selectProject(nearestIndex);
    centerProject(nearestIndex);
  };

  const handleCardClick = (index) => {
    if (dragRef.current.moved) {
      dragRef.current.moved = false;
      return;
    }

    scrollToProject(index);
  };

  const activeProject = projects[activeIndex];
  const hasMultipleProjects = projects.length > 1;

  if (!activeProject) return null;

  return (
    <div className="project-carousel" aria-label={`${category} projects`}>
      <div
        ref={viewportRef}
        className={`project-carousel__viewport ${isDragging ? "is-dragging" : ""}`}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        role="region"
        aria-roledescription="carousel"
        aria-label={`${category} project carousel`}
        tabIndex={0}
      >
        {projects.map((project, index) => {
          const position =
            index === activeIndex
              ? "active"
              : index < activeIndex
                ? "before"
                : "after";

          return (
            <article
              key={project.title}
              ref={(card) => {
                cardRefs.current[index] = card;
              }}
              className="project-carousel__card"
              data-position={position}
              aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => handleCardClick(index)}
            >
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="project-carousel__image"
                draggable="false"
              />
              <div className="project-carousel__shade" />
              <span className="project-carousel__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="project-carousel__card-title">
                <span>{project.title}</span>
                <ExternalLink aria-hidden="true" size={18} strokeWidth={1.8} />
              </div>
            </article>
          );
        })}
      </div>

      <div className="project-carousel__controls">
        <button
          type="button"
          className="project-carousel__arrow"
          onClick={() => scrollToProject(activeIndex - 1)}
          disabled={!hasMultipleProjects || activeIndex === 0}
          aria-label="Previous project"
          title="Previous project"
        >
          <ChevronLeft aria-hidden="true" size={22} />
        </button>

        <div className="project-carousel__progress" aria-hidden="true">
          {projects.map((project, index) => (
            <span
              key={project.title}
              className={index === activeIndex ? "is-active" : ""}
            />
          ))}
        </div>

        <button
          type="button"
          className="project-carousel__arrow"
          onClick={() => scrollToProject(activeIndex + 1)}
          disabled={!hasMultipleProjects || activeIndex === projects.length - 1}
          aria-label="Next project"
          title="Next project"
        >
          <ChevronRight aria-hidden="true" size={22} />
        </button>
      </div>

      <section
        key={activeProject.title}
        className="project-carousel__details"
        aria-live="polite"
      >
        <div className="project-carousel__details-copy">
          <div className="project-carousel__eyebrow">
            <GripHorizontal aria-hidden="true" size={20} />
            <span className="project-carousel__portfolio-type">{category}</span>
            <span aria-hidden="true">/</span>
            <span className="project-carousel__tag">{activeProject.tag}</span>
            <span aria-hidden="true">/</span>
            <span>
              {String(activeIndex + 1).padStart(2, "0")} of{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>
          <h3>{activeProject.title}</h3>
          <p>{activeProject.description}</p>
        </div>

        <div className="project-carousel__links">
          <a
            href={activeProject.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${activeProject.title}`}
          >
            <ExternalLink aria-hidden="true" size={18} />
            <span>View project</span>
          </a>
          {activeProject.githubLink && (
            <a
              href={activeProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${activeProject.title} on GitHub`}
            >
              <Github aria-hidden="true" size={19} />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
