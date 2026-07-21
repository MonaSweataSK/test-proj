import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

const DUMMY_PROJECTS = [
  {
    title: "Quantum-DB",
    description: "A globally distributed, ultra-low latency key-value store optimized for edge computing.",
    tags: ["RUST", "WASM", "GRPC"],
    repoLink: "https://github.com",
  },
  {
    title: "Aether UI",
    description: "Design system for enterprise-grade developer tools with accessibility at its core.",
    tags: ["REACT", "STYLED", "STORYBOOK"],
    repoLink: "https://github.com",
  }
];

const DUMMY_EXPERIENCE = [
  {
    role: "Senior Cloud Architect",
    company: "Nebula Systems",
    period: "2022 — Present",
    achievements: [
      "Led migration of legacy monolith to serverless AWS architecture.",
      "Improved system uptime from 98.5% to 99.99%.",
    ]
  },
  {
    role: "Full Stack Developer",
    company: "DevFlow Inc.",
    period: "2020 — 2022",
    achievements: [
      "Developed a real-time collaborative code editor.",
      "Scaled API to handle 5M+ requests per day.",
    ]
  }
];

const DUMMY_SKILLS = [
  {
    title: "System Architecture",
    description: "Designing resilient microservices and distributed systems with AWS & Kubernetes.",
    iconColor: "text-[#32FFCE]",
    iconBg: "bg-[#32FFCE]/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
    ),
    tags: ["DOCKER", "TERRAFORM", "GOLANG"]
  },
  {
    title: "Frontend Engineering",
    description: "Crafting pixel-perfect, accessible interfaces using React and Framer Motion.",
    iconColor: "text-[#8b9cf6]",
    iconBg: "bg-[#8b9cf6]/10",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
    ),
    tags: ["NEXT.JS", "TYPESCRIPT", "THREE.JS"]
  }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-[#070f1a]">
      {/* Hero Section */}
      <section className="w-full py-24 lg:py-32 xl:py-40 flex justify-center items-center text-white border-b border-[#1d283a]">
        <div className="container px-4 md:px-6 flex flex-col items-start text-left space-y-8 max-w-5xl mx-auto">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#32FFCE] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#32FFCE]"></span>
            </span>
            Available for projects
          </div>

          <div className="space-y-4 max-w-[900px]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              Engineering <span className="text-[#32FFCE]">Scalable</span><br />
              Digital Architectures
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-[650px] leading-relaxed pt-2">
              Full-stack engineer specializing in high-performance
              cloud ecosystems and meticulous UI engineering. Transforming
              complex requirements into elegant, efficient systems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-[400px] pt-4">
            <Link
              href="/projects"
              className="inline-flex h-12 sm:h-14 items-center justify-center rounded bg-[#32FFCE] px-8 text-sm font-bold text-[#070f1a] transition-all hover:bg-[#32FFCE]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#32FFCE] w-full"
            >
              View Portfolio
            </Link>
            <a
              href="/resume.pdf"
              className="inline-flex h-12 sm:h-14 items-center justify-center rounded border border-[#1d283a] bg-transparent px-8 text-sm font-bold text-white transition-all hover:bg-white/5 hover:border-gray-500 focus-visible:outline-none focus-visible:ring-2 w-full"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Skills / Technical Expertise Section */}
      <section className="w-full py-20 lg:py-24 text-white border-b border-[#1d283a]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="space-y-12">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#32FFCE] uppercase">Competencies</p>
              <h2 className="text-3xl font-bold tracking-tight text-white font-serif">Technical Expertise</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DUMMY_SKILLS.map((skillGroup, index) => (
                <div key={index} className="bg-[#111a27] p-6 sm:p-8 rounded border border-[#1d283a] shadow-sm flex flex-col gap-4 hover:border-[#32FFCE]/30 transition-all">
                  <div className={`w-12 h-12 rounded flex items-center justify-center ${skillGroup.iconBg} ${skillGroup.iconColor} mb-2`}>
                    {skillGroup.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{skillGroup.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {skillGroup.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skillGroup.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-[#070f1a] border border-[#1d283a] text-gray-300 text-[10px] font-bold uppercase tracking-wider rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="w-full py-20 lg:py-24 text-white border-b border-[#1d283a]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="space-y-12">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#32FFCE] uppercase">Journey</p>
              <h2 className="text-3xl font-bold tracking-tight text-white">Experience</h2>
            </div>

            <div className="border-l border-[#1d283a]/70 ml-2 space-y-12 pt-2">
              {DUMMY_EXPERIENCE.map((job, index) => (
                <div key={index} className="relative pl-8">
                  {/* Timeline Marker */}
                  <div className={`absolute -left-[0.55rem] top-1.5 flex items-center justify-center w-4 h-4 rounded-full border-2 bg-[#070f1a] ${index === 0 ? 'border-[#32FFCE]' : 'border-[#1d283a]'}`}>
                    {index === 0 && <div className="w-1.5 h-1.5 rounded-full bg-[#32FFCE]"></div>}
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col mb-4 gap-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-sm font-bold text-[#32FFCE]">{job.period}</span>
                      <span className="text-gray-600 text-xs hidden sm:inline-block">•</span>
                      <h3 className="font-bold text-white text-lg sm:text-xl w-full sm:w-auto">{job.role}</h3>
                    </div>
                    <div className="text-sm font-semibold text-[#32FFCE]">{job.company}</div>
                  </div>
                  
                  <ul className="space-y-3 mt-4 text-sm text-gray-400 leading-relaxed">
                    {job.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-gray-500 mt-1.5 text-[8px]">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="w-full py-20 lg:py-24 text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="flex flex-col items-center md:items-start justify-between md:flex-row mb-12 gap-6">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#32FFCE] uppercase">Selected Work</p>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Projects</h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#32FFCE] hover:bg-[#32FFCE]/10 transition-colors border border-[#1d283a] rounded-md px-6 py-2.5"
            >
              View All Experiments
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {DUMMY_PROJECTS.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 lg:py-24 text-[#070f1a]">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="bg-[#32FFCE] rounded-3xl p-12 md:p-20 flex flex-col items-center text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ready to build the<br className="hidden sm:block" /> future?
            </h2>
            <p className="text-lg md:text-xl font-medium max-w-[600px]">
              Let's collaborate on your next technical challenge.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#070f1a] text-[#32FFCE] px-8 py-4 rounded text-xs font-bold tracking-[0.15em] uppercase hover:bg-black transition-colors mt-4"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
