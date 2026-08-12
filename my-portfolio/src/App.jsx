import "./App.css";
import profileImage from "./assets/profile.jpeg";

function App() {
  // =========================================================
  // SKILLS
  // =========================================================

  const skills = [
    {
      category: "Programming",
      items: ["Python", "JavaScript", "C++", "SQL"],
    },
    {
      category: "AI & Machine Learning",
      items: [
        "Machine Learning",
        "Scikit-learn",
        "TensorFlow",
        "Keras",
      ],
    },
    {
      category: "Computer Vision",
      items: [
        "OpenCV",
        "Face Recognition",
        "DeepFace",
        "Image Processing",
      ],
    },
    {
      category: "Web Development",
      items: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "FastAPI",
      ],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "SQLite"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Jupyter"],
    },
  ];

  // =========================================================
  // PROJECTS
  // =========================================================

  const projects = [
    {
      category: "AI / Machine Learning",
      title: "AI-Powered Student Feedback Analyzer",
      description:
        "An intelligent platform that analyzes student feedback and provides useful insights to help educators understand student opinions and improve learning experiences.",
      technologies: [
        "Python",
        "Machine Learning",
        "React",
      ],
    },

    {
      category: "Computer Vision",
      title: "Smart Attendance & Emotion Detection",
      description:
        "A computer vision system combining face recognition, attendance management, and emotion detection to create a smarter classroom solution.",
      technologies: [
        "Python",
        "OpenCV",
        "DeepFace",
      ],
    },

    {
      category: "IoT / AI",
      title: "Smart Water Tank Automation",
      description:
        "An intelligent monitoring system designed to monitor industrial water levels and water quality and provide real-time information through a web dashboard.",
      technologies: [
        "IoT",
        "FastAPI",
        "Machine Learning",
      ],
    },

    {
      category: "AI / Agriculture",
      title: "Crop Prevention & Animal Intrusion Detection",
      description:
        "An intelligent system designed to detect animal intrusion and help protect agricultural crops using automated detection techniques.",
      technologies: [
        "AI",
        "Computer Vision",
        "IoT",
      ],
    },
  ];

  // =========================================================
  // ACHIEVEMENTS
  // FEATURED ACHIEVEMENT FIRST
  // =========================================================

  const achievements = [
    {
      featured: true,
      year: "2025",
      icon: "⭐",
      category: "Google Student Ambassador Program",
      title: "Google Student Ambassador — Certificate of Completion",
      organization:
        "Google Student Ambassador Program • Rajarambapu Institute of Technology",
      description:
        "Successfully completed the Google Student Ambassador Program, demonstrating dedication, consistency, and a strong commitment to learning and growth.",
      details: "31 December 2025",
    },

    {
      featured: false,
      rank: "1st",
      medal: "🥇",
      year: "2024",
      category: "AI / ML Competition",
      title: "1st Rank — Solution Sprint",
      organization:
        "Department of Artificial Intelligence & Machine Learning • BSIET",
      description:
        "Secured 1st Rank in the Solution Sprint competition organized by the Department of Artificial Intelligence & Machine Learning at B.S.I.E.T., Kolhapur.",
      details: "BSIET, Kolhapur",
    },

    {
      featured: false,
      rank: "2nd",
      medal: "🥈",
      year: "2025",
      category: "Technical Competition",
      title: "2nd Prize — Project Arena",
      organization:
        "TechNova'25 • Government Polytechnic Kolhapur",
      description:
        "Secured 2nd Prize in Project Arena at TechNova'25, organized by the Information Technology Students' Association (ITSA).",
      details: "21 March 2025",
    },

    {
      featured: false,
      rank: "3rd",
      medal: "🥉",
      year: "2026",
      category: "Research Competition",
      title: "3rd Rank — INNOVISTA 2K26",
      organization:
        "Rajarambapu Institute of Technology",
      description:
        "Secured 3rd Rank in the Student Research Paper / Case Study Presentation Contest under the UG/PG category at INNOVISTA 2K26.",
      details: "30 January 2026",
    },

    {
      featured: false,
      medal: "📄",
      year: "2024",
      category: "Paper Presentation",
      title: "Paper Presentation — Impulse 2K24",
      organization:
        "Dr. Bapuji Salunkhe Institute of Engineering & Technology",
      description:
        "Participated in the Paper Presentation event at Impulse 2K24 and received a Certificate of Appreciation.",
      details: "24 February 2024",
    },
  ];

  // =========================================================
  // INTERNSHIPS
  // =========================================================

  const internships = [
    {
      period: "April — June 2026",
      title: "Zero Trust Cloud Security Virtual Intern",
      company:
        "AICTE – EduSkills Virtual Internship",
      location: "Supported by Zscaler",
      type: "8-Week Virtual Internship",
      grade: "O",
      description:
        "Successfully completed an 8-week Zero Trust Cloud Security Virtual Internship during April–June 2026 through the AICTE–EduSkills Virtual Internship program.",
      technologies: [
        "Cloud Security",
        "Zero Trust",
        "Cybersecurity",
        "Zscaler",
        "AICTE",
        "EduSkills",
      ],
    },

    {
      period: "03 June — 13 July 2024",
      title: "Intern Web Developer",
      company:
        "iGAP Technologies Private Limited",
      location: "Kolhapur",
      type: "Industry Internship",
      grade: "",
      description:
        "Successfully completed an internship as an Intern Web Developer at iGAP Technologies Private Limited. Worked on assigned projects and tasks while gaining practical experience in web development.",
      technologies: [
        "Web Development",
        "Frontend Development",
        "JavaScript",
        "Project Development",
      ],
    },
  ];

  // =========================================================
  // RESEARCH PUBLICATIONS
  // YEAR-WISE
  // =========================================================

  const researchPapers = [
    {
      year: "2025",
      title: "A Review Paper on AI Virtual Assistants",
      journal:
        "International Journal for Research in Applied Science & Engineering Technology (IJRASET)",
      description:
        "A review paper exploring Artificial Intelligence based virtual assistants, their technologies, applications, capabilities, and role in intelligent human-computer interaction.",
      volume: "Volume 13, Issue III",
      date: "March 2025",
      paperId: "IJRASET67688",
      type: "Published Research Paper",
    },

    {
      year: "2025",
      title: "A Review Paper on AI in Cyber Security",
      journal:
        "International Journal of Innovative Research in Technology (IJIRT)",
      description:
        "A review paper examining the application of Artificial Intelligence in cybersecurity, including intelligent threat detection, security automation, and AI-driven approaches to cyber defense.",
      volume: "Volume 11, Issue 10",
      date: "March 2025",
      paperId: "Registration ID 173638",
      type: "Published Research Paper",
      link: "https://ijirt.org/Article?manuscript=173638",
    },

    {
      year: "2024",
      title: "A Review Paper on Li-Fi Technology",
      journal:
        "Journal of Artificial Neural Networks and Learning System",
      description:
        "A review paper studying Li-Fi technology, its working principles, applications, advantages, limitations, and potential as a high-speed wireless communication technology.",
      volume: "Volume 1, Issue 3",
      date: "2024",
      paperId: "e-ISSN: 3048-6629",
      type: "Published Research Paper",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070b14] text-white">

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#070b14]/90 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a
            href="#home"
            className="text-xl font-bold tracking-tight"
          >
            VK<span className="text-blue-500">.</span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">

            <a href="#about" className="text-sm text-gray-300 transition hover:text-white">
              About
            </a>

            <a href="#skills" className="text-sm text-gray-300 transition hover:text-white">
              Skills
            </a>

            <a href="#projects" className="text-sm text-gray-300 transition hover:text-white">
              Projects
            </a>

            <a href="#experience" className="text-sm text-gray-300 transition hover:text-white">
              Experience
            </a>

            <a href="#achievements" className="text-sm text-gray-300 transition hover:text-white">
              Achievements
            </a>

            <a href="#research" className="text-sm text-gray-300 transition hover:text-white">
              Research
            </a>

            <a href="#contact" className="text-sm text-gray-300 transition hover:text-white">
              Contact
            </a>

          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-5 py-2 text-sm transition hover:border-blue-500 hover:bg-blue-500/10"
          >
            Let's Talk
          </a>

        </div>

      </nav>


      {/* =====================================================
          MAIN
      ====================================================== */}

      <main>

        {/* ===================================================
            HERO
        ==================================================== */}

        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
        >

          <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

          <div className="mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">

            <div>

              <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                AI / ML ENGINEER
              </p>

              <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">

                Building

                <br />

                <span className="text-blue-500">
                  Intelligent
                </span>

                <br />

                Solutions.

              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
                I build intelligent applications using Artificial
                Intelligence, Machine Learning, Computer Vision,
                and modern web technologies.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="#projects"
                  className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-blue-500 hover:text-white"
                >
                  View Projects

                  <span className="text-lg transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-6 py-3 font-medium transition hover:border-blue-500 hover:bg-blue-500/10"
                >
                  Contact Me
                </a>

              </div>

              <div className="mt-10 flex items-center gap-5">

                <a
                  href="https://github.com/vinayak0927"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  GitHub
                </a>

                <span className="text-gray-700">
                  /
                </span>

                <a
                  href="https://www.linkedin.com/in/vinayak-kumbhar-a3b9422b9"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  LinkedIn
                </a>

              </div>

            </div>


            {/* PROFILE CARD */}

            <div className="relative hidden justify-center md:flex">

              <div className="relative h-[500px] w-[370px]">

                <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-sm" />

                <div className="absolute inset-5 overflow-hidden rounded-[1.5rem] border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent">

                  <div className="relative h-[350px] w-full overflow-hidden">

                    <img
                      src={profileImage}
                      alt="Vinayak Kumbhar"
                      className="h-full w-full object-cover object-top"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent" />

                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">

                    <h2 className="text-2xl font-semibold">
                      Vinayak Kumbhar
                    </h2>

                    <p className="mt-2 text-gray-400">
                      AI/ML Engineer
                    </p>

                  </div>

                </div>

                <div className="absolute -right-6 top-20 rounded-2xl border border-white/10 bg-[#151b28]/90 px-5 py-3 shadow-xl backdrop-blur-xl">

                  <p className="text-xs text-gray-400">
                    Focus
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    AI + ML
                  </p>

                </div>

                <div className="absolute -left-7 bottom-24 rounded-2xl border border-white/10 bg-[#151b28]/90 px-5 py-3 shadow-xl backdrop-blur-xl">

                  <p className="text-xs text-gray-400">
                    Stack
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    Python • React
                  </p>

                </div>

                <div className="absolute -right-5 bottom-10 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs text-blue-300 backdrop-blur-xl">
                  Machine Learning
                </div>

              </div>

            </div>

          </div>

          <a
            href="#about"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 transition hover:text-white"
            aria-label="Scroll to About"
          >
            <span className="inline-block animate-bounce text-xl">
              ↓
            </span>
          </a>

        </section>


        {/* ===================================================
            ABOUT
        ==================================================== */}

        <section
          id="about"
          className="px-6 py-32"
        >

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">

              <div>

                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                  01 — About
                </p>

                <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">

                  Turning ideas into

                  <span className="text-blue-500">
                    {" "}intelligent systems.
                  </span>

                </h2>

              </div>

              <div>

                <p className="text-lg leading-8 text-gray-400">
                  I am a Computer Science engineering student
                  specializing in Artificial Intelligence and
                  Machine Learning, with a strong interest in
                  building practical technology that solves
                  real-world problems.
                </p>

                <p className="mt-6 text-lg leading-8 text-gray-400">
                  My work combines Machine Learning, Computer
                  Vision, Python, and modern web development.
                  I enjoy taking an idea from a problem statement
                  through model development and finally into a
                  usable application.
                </p>

                <p className="mt-6 text-lg leading-8 text-gray-400">
                  I have worked on AI-powered applications,
                  computer vision systems, intelligent automation,
                  published research, technical competitions,
                  internships, and student technology programs.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            SKILLS
        ==================================================== */}

        <section
          id="skills"
          className="border-y border-white/5 bg-white/[0.015] px-6 py-32"
        >

          <div className="mx-auto max-w-7xl">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              02 — Skills
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              My technical toolkit.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              A combination of AI/ML expertise and software
              engineering skills that allows me to build
              complete intelligent applications.
            </p>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {skills.map((skill) => (

                <div
                  key={skill.category}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/[0.03]"
                >

                  <div className="flex items-center justify-between">

                    <h3 className="text-lg font-semibold">
                      {skill.category}
                    </h3>

                    <span className="text-blue-500 transition group-hover:translate-x-1">
                      →
                    </span>

                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {skill.items.map((item) => (

                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-sm text-gray-400"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ===================================================
            PROJECTS
        ==================================================== */}

        <section
          id="projects"
          className="px-6 py-32"
        >

          <div className="mx-auto max-w-7xl">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              03 — Projects
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Featured Projects
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Selected projects where I have applied AI,
              Machine Learning, Computer Vision, and modern
              software development.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">

              {projects.map((project) => (

                <div
                  key={project.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/30"
                >

                  <p className="text-sm text-blue-400">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.technologies.map((technology) => (

                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                      >
                        {technology}
                      </span>

                    ))}

                  </div>

                  <div className="mt-7 text-sm font-medium text-gray-400 transition group-hover:text-blue-400">
                    Featured Project →
                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ===================================================
            EXPERIENCE
        ==================================================== */}

        <section
          id="experience"
          className="border-y border-white/5 bg-white/[0.015] px-6 py-32"
        >

          <div className="mx-auto max-w-7xl">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              04 — Experience
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Internships & Experience
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Practical experience across cloud security and
              web development.
            </p>

            <div className="relative mt-16">

              <div className="absolute left-[11px] top-2 hidden h-[calc(100%-20px)] w-px bg-white/10 md:block" />

              <div className="space-y-10">

                {internships.map((internship) => (

                  <div
                    key={internship.title}
                    className="relative md:pl-12"
                  >

                    <div className="absolute left-0 top-8 hidden h-6 w-6 items-center justify-center rounded-full border border-blue-500/50 bg-[#070b14] md:flex">

                      <div className="h-2 w-2 rounded-full bg-blue-500" />

                    </div>

                    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:border-blue-500/40 hover:bg-blue-500/[0.03]">

                      <div className="flex flex-col justify-between gap-6 p-8 md:flex-row md:p-10">

                        <div>

                          <p className="text-sm font-medium uppercase tracking-wider text-blue-400">
                            {internship.period}
                          </p>

                          <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                            {internship.title}
                          </h3>

                          <p className="mt-2 text-gray-400">
                            {internship.company}
                          </p>

                          <p className="mt-1 text-sm text-gray-500">
                            {internship.location}
                          </p>

                        </div>

                        {internship.grade ? (

                          <div className="h-fit rounded-2xl border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-center">

                            <p className="text-xs uppercase tracking-wider text-blue-300">
                              Grade
                            </p>

                            <p className="mt-1 text-2xl font-bold text-blue-400">
                              {internship.grade}
                            </p>

                            <p className="text-xs text-gray-400">
                              Outstanding
                            </p>

                          </div>

                        ) : (

                          <div className="h-fit rounded-full border border-white/10 px-5 py-2 text-sm text-gray-400">
                            {internship.type}
                          </div>

                        )}

                      </div>

                      <div className="border-t border-white/5 px-8 py-7 md:px-10">

                        <p className="leading-7 text-gray-400">
                          {internship.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">

                          {internship.technologies.map((item) => (

                            <span
                              key={item}
                              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                            >
                              {item}
                            </span>

                          ))}

                        </div>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            ACHIEVEMENTS
        ==================================================== */}

        <section
          id="achievements"
          className="px-6 py-32"
        >

          <div className="mx-auto max-w-7xl">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              05 — Achievements
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Achievements & Recognition
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
              Selected recognitions, technical competition results,
              student programs, and academic achievements.
            </p>


            {/* =================================================
                FEATURED GOOGLE ACHIEVEMENT
            ================================================== */}

            <div className="mt-14 overflow-hidden rounded-[2rem] border border-blue-500/30 bg-gradient-to-br from-blue-500/[0.12] via-white/[0.03] to-transparent p-8 shadow-2xl shadow-blue-500/5 md:p-10">

              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

                <div className="flex items-start gap-5">

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10 text-3xl">
                    ⭐
                  </div>

                  <div>

                    <div className="flex flex-wrap items-center gap-3">

                      <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-blue-300">
                        Featured Achievement
                      </span>

                      <span className="text-sm text-gray-500">
                        2025
                      </span>

                    </div>

                    <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                      Google Student Ambassador Program
                    </h3>

                    <p className="mt-2 text-blue-400">
                      Certificate of Completion
                    </p>

                    <p className="mt-5 max-w-3xl leading-7 text-gray-400">
                      Successfully completed the Google Student
                      Ambassador Program, demonstrating dedication,
                      consistency, and a strong commitment to learning
                      and growth.
                    </p>

                    <p className="mt-5 text-sm text-gray-500">
                      Rajarambapu Institute of Technology •
                      Completed 31 December 2025
                    </p>

                  </div>

                </div>

                <div className="shrink-0 rounded-2xl border border-white/10 bg-[#0b1220]/80 px-6 py-5 text-center">

                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Recognition
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    Google
                  </p>

                  <p className="text-sm text-gray-400">
                    Student Ambassador
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                OTHER ACHIEVEMENTS
            ================================================== */}

            <h3 className="mt-16 text-2xl font-semibold">
              Competition & Academic Achievements
            </h3>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              {achievements
                .filter((achievement) => !achievement.featured)
                .map((achievement) => (

                  <div
                    key={achievement.title}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-blue-500/[0.03]"
                  >

                    <div className="absolute right-6 top-5 text-6xl font-bold text-white/[0.035]">
                      {achievement.year}
                    </div>

                    <div className="relative">

                      <div className="flex items-center gap-3">

                        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl">
                          {achievement.medal}
                        </span>

                        <div>

                          <p className="text-sm font-medium uppercase tracking-wider text-blue-400">
                            {achievement.category}
                          </p>

                          <p className="mt-1 text-xs text-gray-500">
                            {achievement.year}
                          </p>

                        </div>

                      </div>

                      <h4 className="mt-6 text-2xl font-semibold leading-tight">
                        {achievement.title}
                      </h4>

                      <p className="mt-3 text-sm font-medium text-gray-500">
                        {achievement.organization}
                      </p>

                      <p className="mt-5 leading-7 text-gray-400">
                        {achievement.description}
                      </p>

                      <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-gray-400">
                        {achievement.details}
                      </div>

                    </div>

                  </div>

                ))}

            </div>


            {/* ACHIEVEMENT SUMMARY */}

            <div className="mt-10 grid gap-5 md:grid-cols-3">

              <div className="group rounded-3xl border border-yellow-500/20 bg-yellow-500/[0.03] p-7 text-center transition hover:-translate-y-1">

                <p className="text-5xl">
                  🥇
                </p>

                <p className="mt-3 text-4xl font-bold text-blue-400">
                  1st
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Solution Sprint
                </p>

                <p className="mt-1 text-xs text-gray-600">
                  BSIET • 2024
                </p>

              </div>


              <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center transition hover:-translate-y-1">

                <p className="text-5xl">
                  🥈
                </p>

                <p className="mt-3 text-4xl font-bold text-blue-400">
                  2nd
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Project Arena
                </p>

                <p className="mt-1 text-xs text-gray-600">
                  TechNova'25
                </p>

              </div>


              <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center transition hover:-translate-y-1">

                <p className="text-5xl">
                  🥉
                </p>

                <p className="mt-3 text-4xl font-bold text-blue-400">
                  3rd
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  INNOVISTA 2K26
                </p>

                <p className="mt-1 text-xs text-gray-600">
                  Research Presentation
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            RESEARCH
        ==================================================== */}

        <section
          id="research"
          className="border-y border-white/5 bg-white/[0.015] px-6 py-32"
        >

          <div className="mx-auto max-w-7xl">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              06 — Research
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Research & Publications
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
              Published research work covering Artificial
              Intelligence, Cybersecurity, Virtual Assistants,
              and Li-Fi communication technologies.
            </p>


            {/* =================================================
                2025
            ================================================== */}

            <div className="mt-16">

              <div className="mb-7 flex items-center gap-4">

                <h3 className="text-3xl font-bold">
                  2025
                </h3>

                <div className="h-px flex-1 bg-white/10" />

                <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs text-blue-300">
                  2 Publications
                </span>

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                {researchPapers
                  .filter((paper) => paper.year === "2025")
                  .map((paper) => (

                    <div
                      key={paper.title}
                      className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-blue-500/[0.03]"
                    >

                      <div className="flex items-start justify-between gap-4">

                        <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300">
                          Published
                        </span>

                        <span className="text-sm text-gray-500">
                          {paper.date}
                        </span>

                      </div>

                      <h4 className="mt-6 text-2xl font-semibold leading-tight">
                        {paper.title}
                      </h4>

                      <p className="mt-4 text-sm font-medium leading-6 text-blue-400">
                        {paper.journal}
                      </p>

                      <p className="mt-5 leading-7 text-gray-400">
                        {paper.description}
                      </p>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2">

                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">

                          <p className="text-xs uppercase tracking-wider text-gray-600">
                            Publication
                          </p>

                          <p className="mt-1 text-sm text-gray-300">
                            {paper.volume}
                          </p>

                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">

                          <p className="text-xs uppercase tracking-wider text-gray-600">
                            ID
                          </p>

                          <p className="mt-1 text-sm text-gray-300">
                            {paper.paperId}
                          </p>

                        </div>

                      </div>

                      {paper.link && (

                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-blue-400"
                        >
                          View Publication
                          <span>↗</span>
                        </a>

                      )}

                    </div>

                  ))}

              </div>

            </div>


            {/* =================================================
                2024
            ================================================== */}

            <div className="mt-16">

              <div className="mb-7 flex items-center gap-4">

                <h3 className="text-3xl font-bold">
                  2024
                </h3>

                <div className="h-px flex-1 bg-white/10" />

                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-gray-400">
                  1 Publication
                </span>

              </div>

              <div className="grid gap-6">

                {researchPapers
                  .filter((paper) => paper.year === "2024")
                  .map((paper) => (

                    <div
                      key={paper.title}
                      className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/[0.03] md:p-10"
                    >

                      <div className="flex flex-col justify-between gap-6 md:flex-row">

                        <div className="max-w-4xl">

                          <div className="flex flex-wrap items-center gap-3">

                            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300">
                              Published
                            </span>

                            <span className="text-sm text-gray-500">
                              {paper.date}
                            </span>

                          </div>

                          <h4 className="mt-6 text-2xl font-semibold sm:text-3xl">
                            {paper.title}
                          </h4>

                          <p className="mt-4 text-sm font-medium leading-6 text-blue-400">
                            {paper.journal}
                          </p>

                          <p className="mt-5 max-w-3xl leading-7 text-gray-400">
                            {paper.description}
                          </p>

                          <div className="mt-7 flex flex-wrap gap-3">

                            <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-gray-400">
                              {paper.volume}
                            </span>

                            <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-gray-400">
                              {paper.paperId}
                            </span>

                          </div>

                        </div>

                        <div className="hidden h-24 w-24 shrink-0 items-center justify-center rounded-3xl border border-blue-500/20 bg-blue-500/10 md:flex">

                          <span className="text-4xl">
                            📄
                          </span>

                        </div>

                      </div>

                    </div>

                  ))}

              </div>

            </div>


            {/* RESEARCH SUMMARY */}

            <div className="mt-12 grid gap-5 sm:grid-cols-3">

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

                <p className="text-4xl font-bold text-blue-400">
                  3
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Published Research Papers
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

                <p className="text-4xl font-bold text-blue-400">
                  2
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Publications in 2025
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

                <p className="text-4xl font-bold text-blue-400">
                  2+
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Years of Research Work
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            CONTACT
        ==================================================== */}

        <section
          id="contact"
          className="px-6 py-32"
        >

          <div className="mx-auto max-w-7xl">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              07 — Contact
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Let's build something.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Have a project, opportunity, or idea? I'd love to
              connect and discuss how we can turn it into something
              meaningful.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://github.com/vinayak0927"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-7 py-3 font-medium transition hover:border-blue-500 hover:bg-blue-500/10"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/vinayak-kumbhar-a3b9422b9"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-7 py-3 font-medium transition hover:border-blue-500 hover:bg-blue-500/10"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-white/10 px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 Vinayak Kumbhar. All rights reserved.
          </p>

          <p>
            Built with React
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;