import "./App.css";

function App() {
  return (
    <>
      <nav>
        <h2>Ziyuan</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#skills">Skills</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <h1>Hi, I am Ziyuan</h1>
          <p>Student | Data Analyst | Aspiring Consultant</p>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>
            I am interested in data analytics, consulting, and solving
            real-world problems with technology.
          </p>
        </section>

        <section id="skills">
  <h2>Skills</h2>

        <div className="skills">
          <span>Python</span>
          <span>SQL</span>
          <span>React</span>
          <span>Data Analysis</span>
          <span>Machine Learning</span>
          <span>Excel</span>
        </div>
      </section>

        <section id="projects">
          <h2>Projects</h2>

          <div className="card">
            <h3>Heart Disease Prediction</h3>
            <p>
              Built machine learning models to predict heart disease and
              compared performance using ROC/AUC and true positive rate.
            </p>
          </div>

          <div className="card">
            <h3>Survey Analytics Project</h3>
            <p>
              Analysed over 2,500 survey responses to uncover patterns and
              insights.
            </p>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: your.email@example.com</p>
          <p>LinkedIn: linkedin.com/in/yourprofile</p>
          <p>GitHub: github.com/yourusername</p>
        </section>
      </main>
    </>
  );
}

export default App;