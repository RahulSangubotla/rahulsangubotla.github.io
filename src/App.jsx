import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar'; // New Import
import {
  Home,
  User,
  Briefcase,
  Code2,
  Mail,
  Github,
  ExternalLink,
  Terminal,
  MapPin,
  Cpu,
  Sun,
  Moon,
  Laptop
} from 'lucide-react';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [typedName, setTypedName] = useState('');

  const resume = {
    name: "Rahul Sangubotla",
    role: "AI/ML Engineer & Full Stack Developer",
    username: "RahulSangubotla", // Added for the calendar
    contact: {
      email: "rahultech.me@gmail.com",
      location: "Hyderabad, IN",
      phone: "+91 6303337374",
      github: "https://github.com/RahulSangubotla"
    },
    // ... rest of your resume object remains the same
    skills: {
      languages: ["Python", "Java", "C", "R"],
      frameworks: ["TensorFlow", "PyTorch", "React", "Spring Boot", "Node.js"],
      tools: ["Linux", "Docker", "Git", "AWS", "Vim"]
    },
    experience: [
      {
        company: "Townhall",
        role: "AI/ML Intern",
        date: "Jul 2025 - Present",
        location: "Hyderabad",
        desc: [
          "Optimized marketing systems by implementing Retrieval-Augmented Generation (RAG) pipelines.",
          "Automated content synthesis reducing manual workload by 40%."
        ],
        tags: ["RAG", "Python", "LLMs", "LangChain"]
      },
      {
        company: "Audience Street",
        role: "Full Stack Intern",
        date: "Jan 2025 - Mar 2025",
        location: "Remote",
        desc: [
          "Architected and deployed a full-stack MERN web application.",
          "Managed database schemas and REST API integration for high-traffic endpoints."
        ],
        tags: ["React", "Node.js", "MongoDB", "Express"]
      }
    ],
    projects: [
      {
        title: "Handwriting Generation (GANs)",
        desc: "Generates realistic Hindi/Telugu handwriting using GANs.",
        tech: "Python, PyTorch"
      },
      {
        title: "HTR SSL Engine",
        desc: "Self-Supervised Learning model for handwriting recognition.",
        tech: "CV, Transformers"
      },
      {
        title: "Medicine Receipt OCR",
        desc: "CNN-based prescription analysis & medicine recommender.",
        tech: "CNN, NLTK"
      },
      {
        title: "Auto Grader NLP",
        desc: "Essay grading system using BiLSTM and DistilBERT.",
        tech: "NLP, BERT"
      }
    ]
  };

  // ... (Your existing useEffects and handlers)
  useEffect(() => {
    document.title = "Rahul Sangubotla | AI/ML Engineer";
  }, []);

  useEffect(() => {
    if (loading) return;
    const text = resume.name;
    let index = 0;
    let timeoutId;
    const typeWriter = () => {
      setTypedName(text.slice(0, index));
      index++;
      if (index <= text.length) {
        timeoutId = setTimeout(typeWriter, 100);
      }
    };
    const startTimeout = setTimeout(typeWriter, 500);
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(startTimeout);
    };
  }, [loading]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-[#050505]' : 'bg-gray-50';
  const textColor = isDark ? 'text-gray-300' : 'text-gray-700';
  const headingColor = isDark ? 'text-white' : 'text-gray-900';
  const cardBg = isDark ? 'bg-[#0a0a0a]' : 'bg-white';
  const cardBorder = isDark ? 'border-[#1f1f1f]' : 'border-gray-200';
  const accentColor = 'text-[#00d2be]';
  const accentBg = 'bg-[#00d2be]';

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center font-mono ${isDark ? 'bg-[#050505]' : 'bg-white'} text-[#00d2be]`}>
        <div className="text-xl animate-pulse">
          <span className={isDark ? "text-gray-500" : "text-gray-400"}>./</span>initializing_profile
        </div>
      </div>
    );
  }

  return (
    <>
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          @keyframes hard-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
          .cursor-blink { animation: hard-blink 1s infinite; }
        `}
      </style>

      <div className={`min-h-screen ${bgColor} ${textColor} font-mono selection:bg-[#00d2be] selection:text-black pb-32 transition-colors duration-300 no-scrollbar`}>

        {/* Nav and Hero sections... (unchanged) */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <nav className={`${isDark ? 'bg-[#121212]/80 border-[#1f1f1f]' : 'bg-white/80 border-gray-200'} backdrop-blur-md border rounded-full px-6 py-3 flex items-center gap-6 shadow-2xl shadow-[#00d2be]/5`}>
            <a href="#home" className={`hover:text-[#00d2be] transition-all hover:-translate-y-1 p-2 rounded-full ${isDark ? 'text-gray-400 hover:bg-white/5' : 'text-gray-500 hover:bg-black/5'}`}><Home size={20} /></a>
            <a href="#experience" className={`hover:text-[#00d2be] transition-all hover:-translate-y-1 p-2 rounded-full ${isDark ? 'text-gray-400 hover:bg-white/5' : 'text-gray-500 hover:bg-black/5'}`}><Briefcase size={20} /></a>
            <a href="#projects" className={`hover:text-[#00d2be] transition-all hover:-translate-y-1 p-2 rounded-full ${isDark ? 'text-gray-400 hover:bg-white/5' : 'text-gray-500 hover:bg-black/5'}`}><Code2 size={20} /></a>
            <a href="#skills" className={`hover:text-[#00d2be] transition-all hover:-translate-y-1 p-2 rounded-full ${isDark ? 'text-gray-400 hover:bg-white/5' : 'text-gray-500 hover:bg-black/5'}`}><User size={20} /></a>
            <div className={`w-[1px] h-6 ${isDark ? 'bg-[#333]' : 'bg-gray-300'}`}></div>
            <a href="#contact" className={`hover:text-[#00d2be] transition-all hover:-translate-y-1 p-2 rounded-full ${isDark ? 'text-gray-400 hover:bg-white/5' : 'text-gray-500 hover:bg-black/5'}`}><Mail size={20} /></a>
            <button onClick={toggleTheme} className={`hover:text-[#00d2be] transition-all hover:-translate-y-1 p-2 rounded-full ${isDark ? 'text-gray-400 hover:bg-white/5' : 'text-gray-500 hover:bg-black/5'}`}>
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
        </div>

        <main className="max-w-4xl mx-auto px-6 pt-24">
          {/* Hero, Experience, Projects, Skills sections... (unchanged) */}
          <section id="home" className="min-h-[60vh] flex flex-col justify-center mb-24">
            <div className="space-y-6">
              <h1 className={`text-5xl md:text-7xl font-bold ${headingColor} tracking-tight h-[1.2em]`}>
                {typedName}<span className={`inline-block ml-1 text-[#00d2be] cursor-blink`}>_</span>
              </h1>
              <h2 className={`text-2xl md:text-4xl font-bold ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{resume.role}</h2>
              <p className={`max-w-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} text-lg leading-relaxed`}>
                I build intelligent systems and scalable web applications. Specialized in <span className={headingColor}>Python</span>, <span className={headingColor}>Java</span>, and modern web technologies.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#contact" className={`${accentBg} text-black font-bold px-6 py-3 rounded hover:opacity-90 transition-all flex items-center gap-2`}><Mail size={18} /> Contact Me</a>
                <a href={resume.contact.github} target="_blank" rel="noreferrer" className={`flex items-center gap-2 border px-6 py-3 transition-all rounded ${isDark ? 'border-[#333] text-gray-400 hover:text-white hover:border-white' : 'border-gray-300 text-gray-600 hover:text-black hover:border-black'}`}><Github size={18} /> GitHub</a>
              </div>
            </div>
          </section>

          {/* ... [Experience & Projects Sections] ... */}
          {/* (Kept your original logic here) */}
          <section id="experience" className="mb-32 scroll-mt-24">
            <h3 className={`text-2xl font-bold ${headingColor} mb-12 flex items-center gap-2`}><span className={accentColor}>&gt;</span> Experience</h3>
            <div className="flex flex-col gap-10">
              {resume.experience.map((job, idx) => (
                <div key={idx} className={`group flex flex-col md:flex-row gap-6 p-6 rounded-2xl ${cardBg} border ${cardBorder} hover:border-[#00d2be]/30 transition-all shadow-sm`}>
                  <div className={`hidden md:flex h-12 w-12 rounded-lg border items-center justify-center shrink-0 transition-colors ${isDark ? 'bg-[#151515] border-[#333] group-hover:border-[#00d2be]' : 'bg-gray-100 border-gray-200'}`}><Briefcase size={20} className={accentColor} /></div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <div>
                        <h4 className={`text-xl font-bold ${headingColor} group-hover:text-[#00d2be] transition-colors`}>{job.role}</h4>
                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} font-medium`}>{job.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 mt-2 md:mt-0">
                        <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'} font-medium flex items-center gap-1`}>{job.date}</span>
                        <span className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'} flex items-center gap-1`}><MapPin size={12} /> {job.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4 mt-3">{job.tags.map(tag => (<span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#00d2be]/10 text-[#00d2be] border border-[#00d2be]/20">{tag}</span>))}</div>
                    <ul className={`list-disc list-outside ml-4 space-y-2 text-sm leading-relaxed ${isDark ? 'text-gray-400 marker:text-[#333]' : 'text-gray-600 marker:text-gray-300'}`}>{job.desc.map((point, i) => (<li key={i}>{point}</li>))}</ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="mb-32 scroll-mt-24">
            <h3 className={`text-2xl font-bold ${headingColor} mb-8 flex items-center gap-2`}><span className={accentColor}>&gt;</span> Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resume.projects.map((project, idx) => (
                <div key={idx} className={`${cardBg} p-6 rounded-xl border ${cardBorder} hover:border-[#00d2be] group transition-all shadow-sm`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-2 rounded-lg ${accentColor} ${isDark ? 'bg-[#151515]' : 'bg-gray-100'}`}><Code2 size={24} /></div>
                    <div className="flex gap-3">
                      <a href={resume.contact.github} target="_blank" rel="noreferrer"><Github size={18} className={`${isDark ? 'text-gray-600 hover:text-white' : 'text-gray-400 hover:text-black'} cursor-pointer transition-colors`} /></a>
                      <ExternalLink size={18} className={`${isDark ? 'text-gray-600 hover:text-white' : 'text-gray-400 hover:text-black'} cursor-pointer transition-colors`} />
                    </div>
                  </div>
                  <h4 className={`text-lg font-bold ${headingColor} mb-2 group-hover:text-[#00d2be] transition-colors`}>{project.title}</h4>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mb-4 leading-relaxed h-10`}>{project.desc}</p>
                  <div className="flex flex-wrap gap-2">{project.tech.split(', ').map((t, i) => (<span key={i} className="text-xs text-gray-500 font-mono">#{t}</span>))}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="mb-16 scroll-mt-24">
            <h3 className={`text-2xl font-bold ${headingColor} mb-8 flex items-center gap-2`}><Terminal className={accentColor} size={24} /> Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                  I am a final year student at GRIET (9.3 CGPA) bridging the gap between <span className={accentColor}>complex AI models</span> and <span className={accentColor}>user-friendly interfaces</span>. My daily driver is Linux (Arch) optimized with Vim.
                </p>
              </div>
              <div className={`${cardBg} border ${cardBorder} rounded-xl p-6 hover:border-[#00d2be]/30 transition-colors shadow-sm`}>
                <div className="space-y-6">
                  <div>
                    <div className={`text-xs font-bold ${accentColor} uppercase mb-3 tracking-wider flex items-center gap-2`}><Code2 size={12} /> Languages</div>
                    <div className="flex flex-wrap gap-2">{resume.skills.languages.map(s => (<span key={s} className={`text-sm px-3 py-1 rounded border ${isDark ? 'text-gray-300 bg-[#151515] border-[#222]' : 'text-gray-700 bg-gray-100 border-gray-200'}`}>{s}</span>))}</div>
                  </div>
                  <div>
                    <div className={`text-xs font-bold ${accentColor} uppercase mb-3 tracking-wider flex items-center gap-2`}><Cpu size={12} /> Frameworks</div>
                    <div className="flex flex-wrap gap-2">{resume.skills.frameworks.map(s => (<span key={s} className={`text-sm px-3 py-1 rounded border ${isDark ? 'text-gray-300 bg-[#151515] border-[#222]' : 'text-gray-700 bg-gray-100 border-gray-200'}`}>{s}</span>))}</div>
                  </div>
                  <div>
                    <div className={`text-xs font-bold ${accentColor} uppercase mb-3 tracking-wider flex items-center gap-2`}><Terminal size={12} /> Tools</div>
                    <div className="flex flex-wrap gap-2">{resume.skills.tools.map(s => (<span key={s} className={`text-sm px-3 py-1 rounded border ${isDark ? 'text-gray-300 bg-[#151515] border-[#222]' : 'text-gray-700 bg-gray-100 border-gray-200'}`}>{s}</span>))}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- PERFECT FIT GITHUB VIEW --- */}
          <section className="mb-32 scroll-mt-24">
            <h3 className={`text-2xl font-bold ${headingColor} mb-8 flex items-center gap-2`}>
              <Github className={accentColor} size={24} />
              Code Activity
            </h3>

            <div className={`flex flex-col`}>
              {/* Removed 'justify-center' and 'overflow-hidden' from the wrapper 
      to allow the component to define its own natural width.
    */}
              <div className="w-full">
                <GitHubCalendar
                  username={resume.username}
                  // 12 is the perfect size to fill a max-w-4xl container without scrolling
                  blockSize={12}
                  blockMargin={4}
                  fontSize={12}
                  colorScheme={isDark ? 'dark' : 'light'}
                  showWeekdayLabels={false}
                  hideTotalCount={false}
                  hideColorLegend={false}
                  labels={{
                    totalCount: "{{count}} contributions in the last year",
                  }}
                  theme={{
                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                  }}
                />
              </div>
            </div>
          </section>

          {/* Contact / Footer Section */}
          <section id="contact" className={`py-20 text-center border-t ${isDark ? 'border-[#1f1f1f]' : 'border-gray-200'}`}>
            <h3 className={`text-4xl font-bold ${headingColor} mb-6`}>Let's work together</h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8 max-w-lg mx-auto`}>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href={`mailto:${resume.contact.email}`} className={`${accentBg} inline-flex items-center gap-2 text-black font-bold px-8 py-4 rounded-full hover:opacity-90 transition-all`}>
              <Mail size={18} /> Say Hello
            </a>
            <div className="mt-20 text-sm text-gray-500">
              <p>Designed & Built by Rahul Sangubotla</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default App;