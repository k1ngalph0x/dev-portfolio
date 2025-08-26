import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  Download,
  Play,
  Code2,
  Coffee,
  MapPin,
  Calendar,
  Sparkles,
  Zap,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Server,
  Shield,
} from "lucide-react";

const PortfolioMonotone = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [terminalText, setTerminalText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [magicParticles, setMagicParticles] = useState([]);

  const fullTerminalText =
    "npx create-awesome-developer shashankintouch@gmail.com:~$ ";

  useEffect(() => {
    const particles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 4 + Math.random() * 2,
    }));
    setMagicParticles(particles);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullTerminalText.length) {
        setTerminalText(fullTerminalText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setIsLoaded(true), 500);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isLoaded]);

  const technologies = {
    frontend: [
      { name: "React", icon: "⚛️" },
      { name: "Flutter", icon: "🦋" },
      { name: "JavaScript", icon: "⚡" },
      { name: "TypeScript", icon: "💎" },
      { name: "HTML/CSS", icon: "🎨" },
      { name: "Redux", icon: "🔄" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "FastAPI", icon: "⚡" },
      { name: "Express", icon: "🚀" },
      { name: "GraphQL", icon: "💫" },
      { name: "REST APIs", icon: "🔗" },
    ],
    mobile: [
      { name: "Flutter", icon: "📱" },
      { name: "Dart", icon: "🎯" },
      { name: "React Native", icon: "📲" },
      { name: "iOS", icon: "🍎" },
      { name: "Android", icon: "🤖" },
      { name: "PWA", icon: "🌐" },
    ],
    cloud: [
      { name: "AWS", icon: "☁️" },
      { name: "Azure", icon: "🌌" },
      { name: "Firebase", icon: "🔥" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "⚙️" },
      { name: "Serverless", icon: "⚡" },
    ],
    database: [
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis", icon: "💎" },
      { name: "Firestore", icon: "🔥" },
      { name: "SQLite", icon: "💾" },
      { name: "DynamoDB", icon: "⚡" },
    ],
    tools: [
      { name: "Git", icon: "🌿" },
      { name: "VS Code", icon: "💻" },
      { name: "Figma", icon: "🎨" },
      { name: "Postman", icon: "📮" },
      { name: "Webpack", icon: "📦" },
      { name: "Jest", icon: "🧪" },
    ],
  };

  const experiences = [
    {
      company: "Utah Tech Labs",
      position: "Software Engineer",
      duration: "May 2024 — Present",
      location: "Remote",
      highlights: [
        "Developed backend APIs and database architecture for a social job-posting platform, implementing real-time job listings, applicant tracking systems, and secure payment processing for in-app purchases",
        "Optimized REST APIs and database queries to support scalable job search and user management features, reducing response times and improving overall system performance",
        "Delivered end-to-end product lifecycle — from backend architecture and cloud deployment to mobile frontend  — maintaining 4.5+ star rating across app stores",
      ],
      techs: ["Python", "FastAPI", "Postgres", "AWS", "Flutter"],
    },
    {
      company: "Ekahastra",
      position: "Software Engineer",
      duration: "Jul 2023 — Dec 2023",
      location: "India",
      highlights: [
        "Designed and built backend services for a construction project management platform, enabling project estimation, tracking, and collaboration features that improved completion rates by 25%",
        "Developed a secure payment tracking system with history, disputes, revenue analytics, and customer management, improving financial transparency for clients.",
        "Implemented authentication, role-based access control, and end-to-end encryption strengthening data protection and compliance.",
      ],
      techs: ["Flutter", "Firebase", "AWS", "Python", "FastAPI"],
    },
    {
      company: "Atos",
      position: "Full Stack Developer",
      duration: "Jan 2022 — May 2023",
      location: "India",
      highlights: [
        "Contributed to development and maintenance of high-volume payment application serving 5M+ users, working on bug fixes and feature updates",
        "Developed REST APIs using Node.js and React.js frontend components, implementing database queries and performance optimizations",
        "Assisted with DevOps processes including deploying security certificates and integrating automated security scanning into CI/CD pipeline",
      ],
      techs: ["Node.js", "React", "MongoDB", "DevOps", "CI/CD"],
    },
  ];

  const projects = [
    {
      title: "StudySense.ai",
      description:
        "AI-powered study platform with personalized tutoring, progress analytics, and subscription management system",
      techs: ["Python", "OpenAI API", "FastAPI", "PostgreSQL", "Stripe", "AWS"],
      link: "https://studysense.ai/",
      featured: true,
      emoji: "🧠",
    },
    {
      title: "Hair for Hire",
      description:
        "Job marketplace backend with dual user roles, subscription management, and secure payment processing",
      techs: ["Node.js", "MongoDB", "REST APIs", "AWS", "Payment Integration"],
      link: "https://play.google.com/store/apps/details?id=com.haridresser.hairDresser&hl=en",
      featured: true,
      emoji: "💼",
    },
    {
      title: "CFB Team Fantasy",
      description:
        "Fantasy sports platform with real-time scoring algorithms, league management, and user analytics",
      techs: ["Node.js", "Firebase", "Real-time APIs", "Algorithm Design"],
      link: "https://play.google.com/store/apps/details?id=com.cfbfantasy.cfb_fantasy&hl=en_IN",
      featured: false,
      emoji: "🏈",
    },
  ];

  const navItems = [
    { id: "about", label: "01. About", href: "#about" },
    { id: "tech", label: "02. Technologies", href: "#tech" },
    { id: "experience", label: "03. Experience", href: "#experience" },
    { id: "work", label: "04. Work", href: "#work" },
    { id: "contact", label: "05. Contact", href: "#contact" },
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="font-mono text-slate-200 text-xl">
          <span>{terminalText}</span>
          <span
            className={`${
              showCursor ? "opacity-100" : "opacity-0"
            } transition-opacity`}
          >
            |
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen relative overflow-hidden">
      {magicParticles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-1 h-1 bg-ocean-400/20 rounded-full pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            transform: `translate(${mousePosition.x * 0.01}px, ${
              mousePosition.y * 0.01
            }px)`,
          }}
        />
      ))}

      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-ocean-400 font-mono text-lg font-bold">SJ</div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`font-mono text-sm transition-colors hover:text-ocean-400 ${
                  activeSection === item.id
                    ? "text-ocean-400"
                    : "text-slate-400"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:shashankintouch@gmail.com"
            className="border border-ocean-400 text-ocean-400 px-4 py-2 rounded font-mono text-sm hover:bg-ocean-400/10 transition-colors"
          >
            Say Hello
          </a>
        </div>
      </nav>

      <div className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center space-y-6 z-40">
        <div className="flex flex-col space-y-4">
          <a
            href="https://github.com/k1ngalph0x"
            className="text-slate-400 hover:text-ocean-400 hover:-translate-y-1 transition-all"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/shashank-j-81075b191"
            className="text-slate-400 hover:text-ocean-400 hover:-translate-y-1 transition-all"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:shashankintouch@gmail.com"
            className="text-slate-400 hover:text-ocean-400 hover:-translate-y-1 transition-all"
          >
            <Mail size={20} />
          </a>
        </div>
        <div className="w-px h-24 bg-slate-600"></div>
      </div>

      <div className="fixed right-6 bottom-0 hidden lg:flex flex-col items-center space-y-6 z-40">
        <div className="transform rotate-90 font-mono text-slate-400 hover:text-ocean-400 transition-colors cursor-pointer">
          <a href="mailto:shashankintouch@gmail.com">
            shashankintouch@gmail.com
          </a>
        </div>
        <div className="w-px h-24 bg-slate-600"></div>
      </div>

      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${
                mousePosition.y * 0.5
              }px)`,
            }}
          >
            <div className="font-mono text-ocean-400 text-lg mb-6">
              Hi, my name is
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-200 mb-4">
              Shashank J.
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8">
              I build things for mobile & web.
            </h2>
            {/* <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-12">
              I'm a software engineer specializing in building exceptional
              digital experiences. Currently, I'm focused on building
              accessible, human-centered mobile applications at{" "}
              <span className="text-ocean-400 hover:underline">
                Utah Tech Labs
              </span>
              .
            </p> */}
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-12">
              I'm a software engineer specializing in building exceptional
              digital experiences. Currently, I'm focused on building
              accessible, human-centered applications with modern backend and
              cloud technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="border border-ocean-400 text-ocean-400 px-8 py-4 rounded font-mono hover:bg-ocean-400/10 transition-all group"
              >
                Check out my work!
                <ChevronRight
                  className="inline ml-2 group-hover:translate-x-1 transition-transform"
                  size={16}
                />
              </a>
              <a
                href="mailto:shashankintouch@gmail.com"
                className="bg-ocean-400 text-slate-900 px-8 py-4 rounded font-mono hover:bg-ocean-300 transition-colors"
              >
                Let's collaborate
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-200 mb-8">
                <span className="font-mono text-ocean-400 text-xl">01. </span>
                About Me
              </h2>

              <div className="space-y-6 text-slate-400 leading-relaxed">
                <p>
                  Hello! I'm Shashank, and I enjoy creating things that live on
                  the internet and in your pocket. My interest in mobile
                  development started back in college when I decided to try
                  building custom Android ROMs — turns out hacking together
                  custom bootloaders taught me a lot about software engineering!
                </p>

                <p>
                  Fast-forward to today, and I've had the privilege of working
                  at a <span className="text-ocean-400">remote startup</span>, a{" "}
                  <span className="text-ocean-400">large corporation</span>, and
                  a <span className="text-ocean-400">consulting company</span>.
                  My main focus these days is building accessible, inclusive
                  products and digital experiences for a variety of clients.
                </p>

                {/* <p>
                  I also recently received an{" "}
                  <span className="text-ocean-400">Accolade Award</span> from
                  Utah Tech Labs for showing extra commitment, efforts, and
                  outstanding customer service.
                </p> */}

                <p>
                  I particularly enjoy solving complex technical challenges -
                  whether it's optimizing API performance, designing scalable
                  database schemas, or integrating AI services like OpenAI into
                  production applications.
                </p>
                <p>
                  Here are a few technologies I've been working with recently:
                </p>

                <div className="grid grid-cols-2 gap-2 font-mono text-sm mt-4">
                  {[
                    "Python",
                    "Node.js",
                    "JavaScript (ES6+)",
                    "Dart",
                    "React",
                    "AWS/Firebase",
                    "Flutter",
                    "Docker",
                  ].map((tech) => (
                    <div key={tech} className="flex items-center">
                      <span className="text-ocean-400 mr-2">▹</span>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="relative z-10 bg-ocean-400/10 border border-ocean-400/20 rounded p-8">
                <div className="text-center space-y-4">
                  {/* <div className="w-32 h-32 mx-auto bg-gradient-to-br from-ocean-400 to-blue-500 rounded-full flex items-center justify-center text-slate-900 text-4xl font-bold">
                    SJ
                  </div> */}
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-ocean-400 to-blue-500 rounded-full flex items-center justify-center text-slate-200 text-5xl font-extrabold shadow-lg shadow-blue-500/30">
                    SJ
                  </div>

                  <div className="space-y-2">
                    <div className="text-slate-200 font-semibold">
                      Kingston Engineering College
                    </div>
                    <div className="text-slate-400">
                      B.Tech Information Technology
                    </div>
                    <div className="text-ocean-400 font-mono">• 2016-2020</div>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-slate-400">
                    <MapPin size={14} />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 border border-ocean-400 rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="tech" className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-200 mb-12">
            <span className="font-mono text-ocean-400 text-xl">02. </span>
            Technologies I Use
          </h2>

          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-slate-200 mb-8">
              Skills Overview
            </h3>

            <div className="space-y-6">
              {Object.entries(technologies).map(([category, techs]) => (
                <div key={category}>
                  <h4 className="text-ocean-400 font-mono text-sm mb-3 flex items-center">
                    <span className="mr-2">
                      {category === "frontend"
                        ? "🎨"
                        : category === "backend"
                        ? "⚙️"
                        : category === "mobile"
                        ? "📱"
                        : category === "cloud"
                        ? "☁️"
                        : category === "database"
                        ? "🗄️"
                        : "🛠️"}
                    </span>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech.name}
                        className="font-mono text-sm bg-slate-800 text-ocean-400 px-3 py-2 rounded hover:bg-slate-700 hover:text-ocean-300 transition-all duration-300 cursor-default"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-600">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-ocean-400 font-mono text-sm mb-3">
                    Primary Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Flutter", "Node.js", "MongoDB", "Firebase"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="font-mono text-xs bg-ocean-400/20 text-ocean-300 px-3 py-1 rounded border border-ocean-400/30"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="text-ocean-400 font-mono text-sm mb-3">
                    Currently Learning
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Kubernetes", "GraphQL", "TypeScript"].map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded border border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-ocean-400 font-mono text-sm mb-3">
                    Experience Level
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "3+ years Full Stack",
                      "2+ years Mobile",
                      "1+ year Cloud",
                    ].map((exp) => (
                      <span
                        key={exp}
                        className="font-mono text-xs bg-slate-700/50 text-slate-400 px-3 py-1 rounded"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-200 mb-12">
            <span className="font-mono text-ocean-400 text-xl">03. </span>Where
            I've Worked
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <div className="border-l border-slate-700 pl-8 hover:border-ocean-400/50 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-200 group-hover:text-ocean-400 transition-colors">
                        {exp.position}{" "}
                        <span className="text-ocean-400">@ {exp.company}</span>
                      </h3>
                      <div className="text-slate-400 font-mono text-sm">
                        {exp.duration}
                      </div>
                    </div>
                    <div className="text-slate-400 text-sm mt-2 lg:mt-0">
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-slate-400 flex items-start">
                        <span className="text-ocean-400 mr-3 mt-1">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.techs.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs bg-slate-800 text-ocean-400 px-3 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-200 mb-12">
            <span className="font-mono text-ocean-400 text-xl">04. </span>Some
            Things I've Built
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded hover:bg-slate-700 transition-colors group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-ocean-400 text-4xl">{project.emoji}</div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-ocean-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <h4 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-ocean-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {project.techs.map((tech) => (
                    <span key={tech} className="text-slate-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="font-mono text-ocean-400 text-lg mb-4">
            05. What's Next?
          </div>
          <h2 className="text-4xl font-bold text-slate-200 mb-8">
            Get In Touch
          </h2>
          <p className="text-slate-400 leading-relaxed mb-12">
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <a
              href="mailto:shashankintouch@gmail.com"
              className="inline-block border border-ocean-400 text-ocean-400 px-8 py-4 rounded font-mono hover:bg-ocean-400/10 transition-all"
            >
              Say Hello
            </a>
            {/* 
            <div className="flex justify-center space-x-6 text-slate-400">
              <a
                href="tel:+919787240444"
                className="hover:text-ocean-400 transition-colors font-mono text-sm"
              >
                +91 9787240444
              </a>
              <span>•</span>
              <span className="font-mono text-sm">Chennai, India</span>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <div className="font-mono text-slate-500 text-sm">
          Built with ❤️ by Shashank J
        </div>
        {/* <div className="mt-2 text-xs text-slate-600">
          🏆 Accolade Award Winner - Utah Tech Labs
        </div> */}
      </footer>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-tech {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioMonotone;
