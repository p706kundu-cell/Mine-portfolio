export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold">
          POOJA<span className="text-purple-500">.</span>
        </h2>

        <div className="flex gap-8 text-sm text-gray-300">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </nav>


      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6"
      >
        <p className="text-purple-400 mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Pooja Kundu
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl text-gray-400">
          Java Developer & Problem Solver
        </h2>

        <p className="max-w-2xl mt-6 text-gray-400 leading-7">
          I build practical software projects using Java, Spring Boot,
          web technologies and databases. I enjoy learning new technologies
          and turning ideas into working applications.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="#projects"
            className="rounded-full bg-purple-600 px-6 py-3 font-medium hover:bg-purple-700 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-gray-700 px-6 py-3 font-medium hover:bg-gray-900 transition"
          >
            Contact Me
          </a>
        </div>
      </section>


      {/* ABOUT SECTION */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-24"
      >
        <p className="text-purple-400 mb-2">
          About Me
        </p>
        <p className="text-gray-400 leading-8 max-w-3xl">
          I'm a developer focused on building my skills in Java,
          problem solving and backend development. I enjoy creating
          projects that solve real-world problems while continuously
          improving my understanding of software development.
        </p>
      </section>
            {/* SKILLS SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-purple-400 mb-2">
          Skills
        </p>
        <h2 className="text-4xl font-bold mb-10">
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-gray-800 rounded-xl p-5 hover:border-purple-500 transition">
            Java
          </div>
          <div className="border border-gray-800 rounded-xl p-5 hover:border-purple-500 transition">
            Python
          </div>
          <div className="border border-gray-800 rounded-xl p-5 hover:border-purple-500 transition">
            JavaScript
          </div>
          <div className="border border-gray-800 rounded-xl p-5 hover:border-purple-500 transition">
            Next.js
          </div>
          <div className="border border-gray-800 rounded-xl p-5 hover:border-purple-500 transition">
            HTML & CSS
          </div>
          
          <div className="border border-gray-800 rounded-xl p-5 hover:border-purple-500 transition">
            REST APIs
          </div>
        </div>
      </section>
  {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-10">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* PROJECT 2 */}
          <div className="border border-gray-800 rounded-2xl p-6 hover:border-purple-500 transition">

            <p className="text-sm text-purple-400 mb-3">
              Python • AI • FastAPI
            </p>
            <h3 className="text-2xl font-semibold mb-3">
              InterviewPilot AI
            </h3>
            <p className="text-gray-400 leading-7">
              An AI-powered interview platform that generates
              adaptive interview questions and provides feedback
              based on the candidate's responses.
            </p>
          </div>
      <div className="border border-gray-800 rounded-2xl p-6 hover:border-purple-500 transition">

            <p className="text-sm text-purple-400 mb-3">
              Python • Streamlit • Machine Learning
            </p>

            <h3 className="text-2xl font-semibold mb-3">
              Smart Stock Advisor
            </h3>

            <p className="text-gray-400 leading-7">
              A data-driven application that analyzes market
              information and presents stock insights through
              an interactive interface.
            </p>

          </div>
          {}
          <div className="border border-gray-800 rounded-2xl p-6 hover:border-purple-500 transition">

            <p className="text-sm text-purple-400 mb-3">
              HTML • CSS • JavaScript
            </p>

            <h3 className="text-2xl font-semibold mb-3">
              Personal Portfolio
            </h3>
            <p className="text-gray-400 leading-7">
              A responsive developer portfolio that shows my
              skills, projects and experience.
            </p>

          </div>

        </div>
      </section>
      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-24 text-center"
      >

        <p className="text-purple-400 mb-2">
          Get In Touch
        </p>

        <h2 className="text-4xl font-bold">
          Let's Connect
        </h2>

        <p className="text-gray-400 mt-5">
          Interested in working together or discussing a project?
        </p>

        <a
          href="mailto:your-email@example.com"
          className="inline-block mt-8 rounded-full bg-purple-600 px-7 py-3 hover:bg-purple-700 transition"
        >
          Email Me
        </a>
        <br />
      <a
          href="Pooja"
          className="inline-block mt-8 rounded-full bg-purple-600 px-7 py-3 hover:bg-purple-700 transition"
        >
          Name
        </a>
       </section>
       <br />
       <a
          href="1234567890"
          className="inline-block mt-8 rounded-full bg-purple-600 px-7 py-3 hover:bg-purple-700 transition"
        >
          Contact
        </a>
        <br />
      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 Pooja Kundu. Built with Next.js.
      </footer>

    </main>
  );
}