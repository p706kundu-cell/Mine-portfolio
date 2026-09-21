export default function Projects() {
  return (
    <main className="projects-page">

      {/* Intro */}
      <section className="projects-intro">
        <p className="small-heading">MY WORK</p>

        <h1>Projects I&apos;ve Built.</h1>
   </section>


      {/* Projects */}
      <section className="projects-container">
              <div className="project-card">

            <div className="project-number">01</div>

          <div className="project-content">

            <p className="project-type">AI • FASTAPI</p>

            <h2>InterviewPilot AI</h2>

            <p>
              An AI-powered interview platform that generates adaptive
              interview questions and provides feedback based on the
              interview experience.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>FastAPI</span>
              <span>OpenAI</span>
              <span>AI</span>
            </div>

          </div>

        </div>
        {}
        <div className="project-card">

          <div className="project-number">02</div>

          <div className="project-content">

            <p className="project-type">MACHINE LEARNING</p>

            <h2>Smart Stock Advisor</h2>

            <p>
              A stock analysis application that uses financial data,
              technical indicators, and machine learning to analyze
              stock market trends.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>Streamlit</span>
              <span>Machine Learning</span>
              <span>yfinance</span>
            </div>

          </div>

        </div>
        {}
        <div className="project-card">

          <div className="project-number">03</div>

          <div className="project-content">

            <p className="project-type">WEB DEVELOPMENT</p>

            <h2>Personal Portfolio</h2>

            <p>
              A personal developer portfolio created to showcase my
              projects, skills, development journey, and contact details.
            </p>

            <div className="project-tags">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>CSS</span>
              <span>GitHub</span>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}