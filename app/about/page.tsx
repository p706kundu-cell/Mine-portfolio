export default function About() {
  return (
    <main className="about-page">

      {/* Intro */}
      <section className="about-intro">
        <p className="small-heading">ABOUT ME</p>

        <h1>Who I Am.</h1>

        <p>
          Hi, I&apos;m Pooja Kundu, a developer passionate about Java,
          web development, and problem solving. I enjoy building projects
          that help me learn new technologies and improve my development skills.
        </p>
      </section>


      {/* Skills */}
      <section className="about-section">

        <div className="section-title">
          <p className="small-heading">MY SKILLS</p>
          <h2>What I Work With.</h2>
        </div>

        <div className="skills-container">

          <div className="skill-card">
            <span className="skill-icon">☕</span>
            <h3>Java</h3>
            <p>Core Java, OOP, problem solving and application development.</p>
          </div>

          <div className="skill-card">
            <span className="skill-icon">🌐</span>
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript and modern web development.</p>
          </div>

          <div className="skill-card">
            <span className="skill-icon">⚛</span>
            <h3>Next.js</h3>
            <p>Building modern and responsive websites using Next.js.</p>
          </div>

          <div className="skill-card">
            <span className="skill-icon">⌘</span>
            <h3>Git & GitHub</h3>
            <p>Version control, repositories and project collaboration.</p>
          </div>

        </div>

      </section>


      {/* Developer Journey */}
      <section className="about-bottom">

        <p className="small-heading">MY JOURNEY</p>

        <h2>Always Learning. Always Building.</h2>

        <p>
          I&apos;m continuously learning new technologies, solving coding
          problems, and building projects that strengthen my development
          skills. My goal is to grow as a developer by turning ideas into
          real-world applications.
        </p>

      </section>

    </main>
  );
}