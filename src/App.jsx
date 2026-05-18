import "./App.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const skills = {
  "Programming & Tools": [
    "Python", "R", "SQL",
    "Streamlit", "Prefect Server", "Git", "GitHub"
  ],
  "Web Development":[
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js"
  ],
  "Data & Visualisation": [
    "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn",
    "Plotly", "GeoPandas", "Power BI", "Tableau", "Excel"
  ],
  "Statistics & ML": [
    "Data Analysis", "Linear Regression", "Logistic Regression",
    "KNN", "Decision Trees", "Naive Bayes", "Machine Learning"
  ],
};

const projects = [
  {
    title: "Allrecipes Exploratory Data Analysis",
    text: "Performed exploratory analysis on a large-scale recipes dataset, studying preparation time, ingredients, nutritional values, and user ratings to uncover recipe engagement trends.",
    tags: ["Python", "Pandas", "EDA", "Visualisation"],
  },
  {
    title: "Heart Disease Statistical Report",
    text: "Built and compared Logistic Regression, KNN, Decision Tree, and Naive Bayes models on healthcare data. Used hypothesis testing, ROC/AUC, and confusion matrix analysis to optimise true positive detection.",
    tags: ["Python", "Statistics", "Machine Learning", "ROC/AUC"],
  },
  {
    title: "Graduate Singapore Statistical Report",
    text: "Analysed 2,500+ survey responses using EDA, Cramer’s V, logistic regression, coefficients, and odds ratios to identify predictors of survey completion and employer attractiveness.",
    tags: ["R", "Logistic Regression", "Survey Analytics", "EDA"],
  },
];

const experience = [
  {
    title: "Data Science and Analytics Intern",
    company: "Seagate Technologies",
    logo: "/seagate.jpg",
    period: "May 2026 – Present",
    text: "Working with manufacturing and automation datasets to analyse cassette movement, factory-floor events, and operational metrics. Built Python-based workflows for log parsing, event correlation, and automation monitoring support.",
  },
  {
    title: "Information Communications Specialist",
    company: "Singapore Armed Forces",
    logo: "/saf.jpg",
    period: "Aug 2022 – Nov 2023",
    text: "Managed IP addressing and communication network configurations during battalion-level exercises involving over 500 servicemen. Worked with ST Engineering to support communication system upgrades and reliability improvements.",
  },
];

const leadership = [
  {
    title: "Welfare Director",
    org: "NUS Faculty of Science Club",
    image: "/welfare.jpg",
    text: "Elected with over 70% of votes cast. Led a subcommittee of 18 members overseeing welfare initiatives for 5,500+ students while increasing cash sponsorships by over 50%.",
  },
  {
    title: "Team Leader",
    org: "NUS Datathon",
    image: "/datathon.JPG",
    text: "Led a healthcare analytics project involving statistical analysis, hypothesis testing, machine learning model comparison, and insight presentation for heart disease prediction.",
  },
  {
    title: "NUS Ambassador",
    org: "Malaysia Sustainability Exchange",
    image:"/malaysia.JPG",
    text: "Represented RVRC in an overseas sustainability exchange with UMS and UiTM, facilitating discussions on Singapore’s sustainability practices and regional environmental challenges.",
  },
  {
    title: "Events' Head",
    org: "Ridge View Residential College",
    image: "/rvrc.jpg",
    text: "Directed a subcommittee of 6 in planning and executing over 10 residential and sustainability-focused events for more than 60 students.",
  },
];

const awards = [
  "Claire Chiang Student Outstanding Leadership Award",
  "A' level Oral Presentation Excellence Award",
  "6 Distinctions in the GCE O' Level Examination",
  "NTUC Care (Education Awards) 2025 for Academic Excellence",
  "Silver Bayonet Award for graduating second in cohort in Specialist Cadet School",
];

function App() {
  return (
    <div className="page">
      <nav className="navbar">
        <a href="#home" className="logo">
          <span>A</span> Aaron Tan
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#leadership">Leadership</a>
          <a href="#awards">Awards</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="resume-btn" href="/resume.pdf" download>
          Download Resume
        </a>
      </nav>

      <header id="home" className="hero fade-in">
        <div className="hero-text">
          <p className="eyebrow">DATA SCIENTIST</p>
          <h1>
            <span>Data scientist</span> passionate about driving business
            optimisation.
          </h1>
          <p className="hook">
            I turn data into decisions; making sure that the right people understand
            and act on it.
          </p>

          <div className="hero-buttons">
            <a href="/resume.pdf" download className="primary-btn">
              Download Resume
            </a>

            <a
              href="mailto:aaronchungah@gmail.com"
              className="secondary-btn"
            >
              <FaEnvelope />
              Get In Touch
            </a>
          </div>

          <div className="socials">
            <a
              href="https://github.com/aaronchungah"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nusaaron"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>

          </div>

        <div className="hero-image">
          <img src="/profile.png" alt="Aaron Tan" />
        </div>
      </header>

      <section id="about" className="about-banner">
        <div className="team-bg"></div>

        <div className="about-content">
          <div>
            <h2>About Me</h2>
            <p>
            I specialise in transforming raw data into actionable insights. I enjoy working with complex datasets and translating them into clear, meaningful findings that support informed decision-making.
            <p>

            </p>
            Beyond technical analysis, one of my key strengths lies in communication. I love presenting insights, engaging stakeholders, and conveying analytical findings in a way that is both accessible and impactful.
            </p>
          </div>

          <div className="contact-card">
            <p><strong>Email</strong><br />aaronchungah@gmail.com</p>
            <p><strong>Location</strong><br />Singapore</p>
            <p>
              <strong>Open to</strong><br />
              Data Science / Analytics / Product Management / Consulting
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Technical Skills</h2>

        <div className="skills-box">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-row" key={category}>
              <h3>{category}</h3>
              <div className="skill-tags">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="grid three">
          {projects.map((project) => (
            <div className="card" key={project.title}>
              <div className="icon">▣</div>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
  <h2>Work Experience</h2>

  <div className="timeline">
    {experience.map((item) => (
      <div className="timeline-item" key={item.title}>

        <div className="experience-header">

          <img
            src={item.logo}
            alt={item.company}
            className="company-logo"
          />

          <div className="experience-info">

            <h3>{item.title}</h3>

            <p className="meta company-name">
              {item.company}
            </p>

            <p className="meta period">
              {item.period}
            </p>

          </div>
        </div>

        <p>{item.text}</p>

      </div>
    ))}
  </div>
</section>

      <section id="leadership" className="section">
        <h2>Leadership</h2>
        <p className="section-subtitle">
          Strong leadership and communication help me translate complex insights
          into action and drive impact with teams.
        </p>

        <div className="grid two">
          {leadership.map((item) => (
            <div className="card leadership-card" key={item.title}>
              <img
                src={item.image}
                alt={item.title}
                className="leadership-image"
              />

              <h3>{item.title}</h3>
              <p className="meta">{item.org}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="awards" className="section">
        <h2>Awards</h2>

        <div className="grid five">
          {awards.map((award) => (
            <div className="award-card" key={award}>
              <div className="award-icon">☆</div>
              <p>{award}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="cta">
        <div>
          <h2>Let’s work together</h2>
          <p>
            I’m open to opportunities in data science, analytics, product
            management, and consulting.
          </p>
        </div>

        <a href="mailto:aaronchungah@gmail.com" className="primary-btn">
          Email Me
        </a>
      </section>

      <footer>
        <p>© 2026 Aaron Tan. All rights reserved.</p>
        <p>Built with React and deployed on Vercel.</p>
      </footer>
    </div>
  );
}

export default App;