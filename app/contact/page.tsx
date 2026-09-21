export default function Contact() {
  return (
    <main className="contact-page">

      {}
      <section className="contact-intro">
        <p className="small-heading">GET IN TOUCH</p>

        <h1>Let&apos;s Connect.</h1>

        <p>
          Have a project, internship opportunity, or just want to say hello?
          Feel free to reach out. I&apos;d love to connect with you.
        </p>
      </section>

      {/* Contact Information */}
      <section className="contact-container">

        {/* Email */}
        <div className="contact-card">
          <span className="contact-icon">✉</span>

          <div>
            <h2>Email</h2>

            <p>your-email@gmail.com</p>

            <a href="mailto:your-email@gmail.com">
              Send an Email →
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="contact-card">
          <span className="contact-icon">☎</span>

          <div>
            <h2>Phone</h2>

            <p>+91 XXXXX XXXXX</p>

            <a href="tel:+91XXXXXXXXXX">
              Call Me →
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="contact-card">
          <span className="contact-icon">in</span>

          <div>
            <h2>LinkedIn</h2>

            <p>Connect with me professionally</p>

            <a
              href="https://www.linkedin.com/in/your-profile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View LinkedIn →
            </a>
          </div>
        </div>

        </section>

      {/* Closing message */}
      <section className="contact-bottom">
        <h2>Let&apos;s build something together.</h2>

        <p>
          I&apos;m always open to learning, collaborating, and working on
          interesting ideas.
        </p>
      </section>

    </main>
  );
}