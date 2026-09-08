import { Compass, GraduationCap } from "lucide-react";

const notes = [
  { icon: Compass, label: "Travel keeps my perspective wide." },
  { icon: GraduationCap, label: "Academics keep the discipline switched on." },
];

export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__grid">
        <div className="about-me__copy">
          <div className="about-me__eyebrow">Software engineer</div>
          <div className="about-me__text">
            <p>
              I am a{" "}
              <span className="text-cust-red font-semibold">Software Engineer</span>{" "}
              with a strong interest in technologies and ideas. I enjoy building
              user-friendly, end-to-end applications and solving technical
              challenges, constantly seeking opportunities to grow and refine my
              skills.
            </p>
            <p>
              Beyond tech, I am passionate about{" "}
              <span className="text-blue-400 font-semibold">music</span>,{" "}
              <span className="text-blue-400 font-semibold">sports</span>, and{" "}
              <span className="text-blue-400 font-semibold">Photo & Videography</span>,
              which fuel my creativity and teamwork. Traveling expands my
              horizons, while my commitment to academics keeps pushing me
              forward.
            </p>
            <p>
              These diverse experiences make me stay balanced, adaptable, and
              ready to embrace EVERYTHING.
            </p>
          </div>

          <div className="about-me__notes" aria-label="Personal focus notes">
            {notes.map(({ icon: Icon, label }) => (
              <div key={label} className="about-me__note">
                <Icon size={18} strokeWidth={2.2} aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-me__portrait">
          <img
            src="assets/profilex.jpg"
            alt="About Me"
          />
          <div className="about-me__portrait-badge">
            <span>Currently</span>
            <strong>AI Native Full Stack Dev</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
