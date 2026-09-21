import { useEffect, useRef, useState } from "react";
import "./App.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaStar, FaBullhorn, FaGraduationCap, FaMedal, FaTrophy, FaCreditCard, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const skills = {
  "Languages": [
    "Python", "R", "Java", "JavaScript", "SQL", "HTML/CSS"
  ],
  "Data & AI": [
    "pandas", "NumPy", "scikit-learn", "TensorFlow", "Matplotlib",
    "Plotly", "Power BI", "Tableau", "NLP", "LLMs"
  ],
  "Databases & Development": [
    "PostgreSQL", "MySQL", "React", "Node.js", "FastAPI",
    "Prefect", "Git/GitHub", "Jupyter Notebook"
  ],
};

const competitions = [
  {
    title: "Infineon AI Supply Chain Case Competition",
    result: "2nd of 63 Teams | $2000 Prize",
    period: "June 2026 – July 2026",
    image: "/infineon.jpg",
    points: [
      "Built a full-stack AI supply-chain control tower combining LLM-based disruption detection, route optimisation and automated communications, identifying alternate routes that protected €4.53M (78%) of at-risk shipment value.",
      "Engineered a Python web-scraping and NLP pipeline to structure live disruption events and map them to affected shipments, supporting monitoring of a corridor carrying 82.8% of shipment value.",
      "Pitched the solution to 200+ Infineon staff and regional directors.",
    ],
  },
  {
    title: "PwC Whole Leadership Award 2026 Consulting Pitch",
    result: "Winner | $1000 Prize",
    period: "June 2026",
    image: "/pwc.jpg",
    points: [
      "Advised a simulated client on implementing an AI chatbot to potentially reduce staff workload by up to 60% across 800 daily calls, defining rollout, performance monitoring and training measures to target 90%+ accuracy.",
    ],
  },
  {
    title: "NUS Tax Competition Debate Round",
    result: "2nd of 52 Teams | $300 Prize",
    period: "May 2026",
    image: "/nustax.jpg",
    points: [
      "Debated AI, employment and corporate tax policy in Singapore before judges from PwC, EY and Deloitte.",
    ],
  },
];

const projects = [
  {
    title: "Agentic AI Career Planning Platform for Undergraduates",
    image: "/career-platform.png",
    points: [
      "Developed an agentic AI career-planning platform using LangGraph, Amazon Bedrock and AWS to generate personalised career roadmaps from student profiles and target roles, cutting search time by 70% in user testing.",

      "Built backend APIs and a multi-agent recommendation workflow that retrieves, ranks and returns relevant hackathons and projects from NUSMods, Devpost and GitHub to the frontend."
    ],
    tags: ["LangGraph", "Amazon Bedrock", "AWS", "Multi-Agent Systems", "Python", "APIs"],
  },
  {
    title: "Causal Uplift Modelling for Targeted Marketing",
    image: "/uplift-marketing.png",
    points: [
      "Evaluated the effectiveness of a retail marketing campaign through a randomised A/B test, finding promotions increased purchase conversion by 5.5% versus control.",

      "Trained and tested S-/T-/X-Learner uplift models to identify promotion-responsive customers, boosting incremental purchases by 99.4% versus random targeting."
    ],
    tags: ["Python", "Causal Inference", "A/B Testing", "Uplift Modelling", "Machine Learning"],
  },
  {
    title: "Payment Fraud Detection & Decisioning Data Science Project",
    icon: <FaCreditCard />,
    points: [
      "Co-designed a real-time fraud decisioning system for Accept, Review or Block decisions under 300–400 ms latency and analyst-capacity constraints.",

      "Built fraud-risk signals using Python, SQL and PostgreSQL, identifying a transaction fingerprint with 3.26x higher observed fraud rate than its broader comparison group on a chronological holdout."
    ],
    tags: ["Python", "SQL", "PostgreSQL", "Fraud Detection", "Real-time Systems"],
  },
  {
    title: "Heart Disease Regression Statistical Report",
    image: "/heart.png",
    points: [
      "Built and compared Logistic Regression, KNN, Decision Tree, and Naive Bayes models on healthcare data.",

      "Applied ROC/AUC analysis, confusion matrices, and hypothesis testing to evaluate model performance.",

      "Identified trade-offs between sensitivity and precision for medical prediction tasks."
    ],
    tags: ["Python", "Statistics", "Machine Learning", "ROC/AUC", "KNN", "Logistic Regression", "Decison Trees"],
  },
  {
    title: "Graduate Singapore Statistical Report",
    image: "/grads.png",
    points: [
      "Investigated the key factors influencing whether students would apply for a job using survey response data.",

      "Used logistic regression to model application likelihood and interpret the relative influence of different predictors.",

      "Applied Cramer's V to identify redundant survey questions and support a more streamlined survey design.",

      "Analysed patterns behind survey non-completion to understand possible friction points in the response process."
    ],
    tags: ["R", "Logistic Regression", "Survey Analytics", "EDA"],
  },
];

const experience = [
  {
    title: "Digital, Cloud & Data Consulting Intern (Incoming)",
    company: "PricewaterhouseCoopers (PwC) Consulting",
    logo: "/pwc-logo.png",
    period: "December 2026 – January 2027",
    duration: "2 months",
    points: []
  },
  {
    title: "Data Science and Analytics Intern",
    company: "Seagate Technologies",
    logo: "/seagate.jpg",
    period: "May 2026 – Present",
    duration: "7 months",
    points: [
    "Analysed manufacturing and automation datasets to identify process optimisation opportunities.",
    "Investigated operational variables affecting automation efficiency and system performance.",
    "Built dashboards to provide engineers with real-time feedback and monitoring support.",
    "Used Python to parse log files, correlate events, and support data-driven improvement initiatives.",
    "Presented optimisation insights to engineers and stakeholders to support adoption."
  ]
  },
  {
    title: "Information Communications Specialist",
    company: "Singapore Armed Forces",
    logo: "/saf.jpg",
    period: "Aug 2022 – Nov 2023",
    duration: "1 year 3 months",
    points: [
    "Managed IP addressing and communication network configurations during large-scale battalion exercises involving over 500 servicemen.",
    "Supported communication system upgrades and reliability improvements in collaboration with engineering teams.",
    "Maintained stable connectivity across multiple military communication devices and operational systems."
  ]
  },
];

const leadership = [
  {
    title: "Welfare Director",
    org: "NUS Faculty of Science Club",
    image: "/welfare.jpg",
    text: "Elected with over 70% of votes cast. Led a subcommittee of 18 members overseeing welfare initiatives for 5,500+ students while increasing cash sponsorships by over 50% through negotiations and pitch meetings.",
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
    text: "Represented RVRC in an overseas sustainability exchange with University Malaysia Sabah (UMS) and Universiti Teknologi MARA (UiTM), facilitating discussions on Singapore’s sustainability practices and regional environmental challenges.",
  },
  {
    title: "Events' Head",
    org: "Ridge View Residential College",
    image: "/rvrc.jpg",
    text: "Directed a subcommittee of 6 in planning and executing over 10 residential and sustainability-focused events for more than 60 students.",
  },
];

const awards = [
  {
  title: "Claire Chiang Student Outstanding Leadership Award",
  icon: <FaStar />
  },

  {
  title: "A' level Oral Presentation Excellence Award",
  icon: <FaBullhorn />
  },

  {
  title: "6 Distinctions in the GCE O' Level Examination",
  icon: <FaGraduationCap />
  },

  {
  title: "NTUC Care (Education Awards) 2025 for Academic Excellence",
  icon: <FaMedal />
  },

  {
  title: "Silver Bayonet Award",
  description: "Awarded for graduating second in my cohort in Specialist Cadet School.",
  icon: <FaMedal />
  }
];

function App() {
  const projectsRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = projectsRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateScrollState();

    const el = projectsRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollProjects = (direction) => {
    const el = projectsRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <div className="page">
      <nav className="navbar">
        <a href="#home" className="logo">
          <span>A</span> Aaron Tan
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#competitions">Competitions</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#leadership">Leadership</a>
          <a href="#awards">Awards</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="resume-btn" href="/Aaron_Tan_resume.pdf" download>
          Download Resume
        </a>
      </nav>

      <header id="home" className="hero fade-in">
        <div className="hero-text">
          <p className="eyebrow">DATA SCIENTIST</p>
          <h1>
            <span>Data scientist</span> who can sell the story behind the
            numbers.
          </h1>
          <div className="hero-buttons">
            <a href="/Aaron_Tan_resume.pdf" download className="primary-btn">
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

        <div className="about-inner">
          <h2>About Me</h2>

          <div className="about-content">
            <div>
              <p className="hook highlight about-highlight">
                <FaTrophy />
                3 x Case Competition Winner
              </p>

              <p>
                I'm a Data Scientist by training, but I specialise in driving change.
              </p>

              <p>
                With experience developing diverse technical solutions and pitching them to industry professionals, I bridge technology and business to ensure solutions are not just built, but successfully implemented and adopted.
              </p>
            </div>

            <div className="contact-card">
              <p><strong>Email</strong><br />aaronchungah@gmail.com</p>
              <p><strong>Location</strong><br />Singapore</p>
              <p>
                <strong>Open to</strong><br />
                Data Science / Analytics / Software Engineering / AI Engineering / Product Management / Consulting
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="competitions" className="section">
        <h2>Case Competition Wins</h2>

        <div className="competitions-grid">
          {competitions.map((comp) => (
            <div className="competition-card" key={comp.title}>

              <div className="competition-image-wrapper">
                <img
                  src={comp.image}
                  alt={comp.title}
                  className="competition-image"
                />
              </div>

              <div className="competition-content">

                <span className="competition-badge">{comp.result}</span>

                <h3>{comp.title}</h3>
                <p className="period">{comp.period}</p>

                <details className="competition-details">
                  <summary>View details</summary>
                  <ul className="competition-points">
                    {comp.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </details>

              </div>

            </div>
          ))}
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
        <p className="scroll-hint">
          Scroll to explore
          <FaChevronRight className="scroll-hint-arrow" />
        </p>

        <div className="projects-reel">
          {canScrollLeft && (
            <button
              type="button"
              className="reel-arrow reel-arrow-left"
              aria-label="Scroll projects left"
              onClick={() => scrollProjects(-1)}
            >
              <FaChevronLeft />
            </button>
          )}

          <div
            className={`projects-list ${canScrollRight ? "fade-right" : ""}`}
            ref={projectsRef}
          >
          {projects.map((project) => (
            <div className="project-card" key={project.title}>

              <div className="project-image-wrapper">
                {project.icon ? (
                  <div className="project-icon">{project.icon}</div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                )}
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <ul className="project-points">
                  {project.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

          </div>

          {canScrollRight && (
            <button
              type="button"
              className="reel-arrow reel-arrow-right"
              aria-label="Scroll projects right"
              onClick={() => scrollProjects(1)}
            >
              <FaChevronRight />
            </button>
          )}
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
              <span className="duration"> · {item.duration}</span>
            </p>

          </div>
        </div>

        {item.points.length > 0 && (
          <ul className="experience-points">
            {item.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}

      </div>
    ))}
  </div>
</section>

      <section id="leadership" className="section">
        <h2>Leadership</h2>

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
            <div className="award-card" key={award.title}>

              <div className="award-icon">
                {award.icon}
              </div>

              <h3>{award.title}</h3>
              
              
              {award.description && (
                <p className="award-description">
                  {award.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="cta">
        <div>
          <h2>Let’s work together</h2>
          <p>
            Feel free to reach out to me about projects relating to Data Science & Analytics, Product
            Management, and Consulting!
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