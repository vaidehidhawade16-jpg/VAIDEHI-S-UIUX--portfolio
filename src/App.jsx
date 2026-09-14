import React, { useState, useEffect } from 'react'
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  User,
  Layers,
  Compass,
  Search,
  CheckCircle2,
  Mail,
  Layout,
  HeartHandshake,
  Lightbulb,
  Target,
  Cpu,
  Eye,
  X,
  Menu,
  Send,
  MapPin,
  Clock
} from 'lucide-react'
import './App.css'

// Custom Brand Icons
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  )
}

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  )
}

function FigmaIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
    </svg>
  )
}

export default function App() {
  const [activeNav, setActiveNav] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeProjectFilter, setActiveProjectFilter] = useState('All')
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: 'Project Inquiry', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [activeProcessTab, setActiveProcessTab] = useState(0)

  // Track scroll position for navbar highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'process', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const skillsData = [
    { name: 'UX Research', category: 'Research', icon: Search, desc: 'Qualitative & quantitative discovery to validate real human needs.' },
    { name: 'User Research', category: 'Research', icon: User, desc: 'Contextual inquiry, generative research, and audience segmentation.' },
    { name: 'User Interviews', category: 'Research', icon: HeartHandshake, desc: 'Moderated 1:1 sessions uncovering underlying motivations & pain points.' },
    { name: 'Usability Testing', category: 'Research', icon: Eye, desc: 'Evaluative testing, SUS scoring, and task completion benchmarking.' },
    { name: 'User Personas', category: 'Strategy', icon: Target, desc: 'Data-driven archetypes representing core user mindsets and behaviors.' },
    { name: 'Journey Mapping', category: 'Strategy', icon: Compass, desc: 'End-to-end touchpoint mapping highlighting friction and opportunity zones.' },
    { name: 'Wireframing', category: 'Design', icon: Layout, desc: 'Rapid low-fidelity exploration to validate structural hierarchy.' },
    { name: 'Prototyping', category: 'Design', icon: Cpu, desc: 'Interactive, testable prototypes ranging from paper to high-fidelity.' },
    { name: 'UI Design', category: 'Design', icon: Sparkles, desc: 'Visual craft, balanced typography, color harmony, and accessible contrast.' },
    { name: 'Interaction Design', category: 'Design', icon: Layers, desc: 'Micro-animations, state transitions, and intuitive feedback loops.' },
    { name: 'Figma', category: 'Tools', icon: FigmaIcon, desc: 'Advanced auto-layout, variable modes, design systems, and components.' },
  ]

  const projectsData = [
    {
      id: 'healthtrack',
      title: 'HealthTrack — Chronic Care & Wellness Companion',
      subtitle: 'Empowering patients to manage daily routines with zero cognitive friction.',
      category: 'Mobile Apps',
      tags: ['UX Research', 'Mobile UI', 'User Interviews', 'Usability Testing'],
      impact: '+42% Daily Adherence',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      borderColor: 'border-emerald-500/30',
      badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      description:
        'A patient-centered mobile application designed to simplify complex treatment regimens for individuals managing chronic conditions through empathetic UI and smart reminders.',
      challenge:
        'Patients frequently missed medications and struggled with dense, confusing clinical interfaces that caused high anxiety and treatment drop-off.',
      researchInsights: [
        'Conducted 12 in-depth user interviews with patients and caregivers.',
        'Identified that 68% of drop-offs were caused by cognitive overload during morning routines.',
        'Created 2 distinct personas (Active Professional vs. Senior Care Dependent).',
      ],
      solution:
        'Streamlined check-ins into 3-second micro-interactions, integrated visual pill identification, and created calm, non-alarmist notification architecture.',
      deliverables: ['User Personas', 'Empathy Maps', 'Wireframe Sprints', 'High-Fidelity Figma Prototype', 'Design System'],
      metrics: [
        { label: 'Task Success Rate', value: '94%' },
        { label: 'Time-to-Log Habit', value: '2.8 sec' },
        { label: 'SUS Usability Score', value: '88 / 100' },
      ],
    },
    {
      id: 'finflow',
      title: 'FinFlow — Intelligent Wealth & Investment Dashboard',
      subtitle: 'Demystifying multi-asset portfolios for modern retail investors.',
      category: 'Web & SaaS',
      tags: ['SaaS Web App', 'Design System', 'Data Visualization', 'Wireframing'],
      impact: '+65% User Engagement',
      gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
      borderColor: 'border-purple-500/30',
      badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
      description:
        'A comprehensive SaaS financial workspace designed to transform complex financial data into actionable, easy-to-digest insights with modular widgets.',
      challenge:
        'Retail investors were overwhelmed by cluttered charts, hidden fee structures, and fragmented accounts across multiple platforms.',
      researchInsights: [
        'Surveyed 140+ investors to identify visual hierarchy preferences for financial metrics.',
        'Card sorting exercises revealed a demand for customizable widget dashboards.',
        'Heuristic evaluation uncovered critical navigation bottlenecks in transaction histories.',
      ],
      solution:
        'Architected a modular component-driven dashboard with customizable view modes, progressive disclosure for deep analytics, and accessible WCAG AAA contrast.',
      deliverables: ['Information Architecture', 'Low-Fi Wireframes', 'Interactive Figma Prototype', 'Figma Token Design System'],
      metrics: [
        { label: 'Session Duration', value: '+4.5 mins' },
        { label: 'Chart Comprehension', value: '+52%' },
        { label: 'Feature Discovery', value: '89%' },
      ],
    },
    {
      id: 'ecoshop',
      title: 'EcoShop — Sustainable E-Commerce & Carbon Checkout',
      subtitle: 'Redesigning the e-commerce purchase flow for eco-conscious shoppers.',
      category: 'UX Research',
      tags: ['E-Commerce', 'Checkout UX', 'Journey Mapping', 'A/B Testing'],
      impact: '28% Cart Abandonment Reduction',
      gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
      borderColor: 'border-amber-500/30',
      badgeColor: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      description:
        'An end-to-end e-commerce experience redesign focusing on transparent sustainability scoring, carbon-neutral shipping choices, and frictionless one-page checkout.',
      challenge:
        'High drop-off during checkout and skepticism regarding sustainability claims ("greenwashing") prevented users from completing purchases.',
      researchInsights: [
        'Conducted 8 moderated usability tests with unmoderated tree testing.',
        'Found that clear, verified eco-badges increased trust by 47% at the point of purchase.',
        'Journey maps revealed 4 redundant form fields causing checkout fatigue.',
      ],
      solution:
        'Redesigned the checkout flow into an accordion layout with instant carbon offset calculations and transparent product lifecycle transparency badges.',
      deliverables: ['Customer Journey Map', 'Service Blueprint', 'Interactive Prototype', 'A/B Test Variant Specs'],
      metrics: [
        { label: 'Checkout Conversion', value: '+22.4%' },
        { label: 'Trust Rating', value: '4.9 / 5.0' },
        { label: 'Carbon Offset Opt-In', value: '61%' },
      ],
    },
    {
      id: 'learnsphere',
      title: 'LearnSphere — Accessible EdTech Platform',
      subtitle: 'Inclusive learning pathways tailored for neurodivergent & visual learners.',
      category: 'Mobile Apps',
      tags: ['EdTech', 'Accessibility', 'Interaction Design', 'Prototyping'],
      impact: 'WCAG 2.1 AA Compliant',
      gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
      borderColor: 'border-blue-500/30',
      badgeColor: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
      description:
        'An adaptive mobile learning app built from the ground up with accessibility, micro-learning pacing, and multi-sensory feedback loops.',
      challenge:
        'Traditional digital courses fail students who require customizable typography, pacing controls, and distraction-free focus modes.',
      researchInsights: [
        'Interviews with educators and neurodivergent learners across 3 academic institutions.',
        'Identified need for dyslexic-friendly fonts, high-contrast modes, and audio-visual dual tracking.',
        'Analyzed cognitive load patterns during long video modules.',
      ],
      solution:
        'Introduced "Focus Mode" with adjustable content velocity, bite-sized visual summaries, and keyboard-first accessibility navigation.',
      deliverables: ['Accessibility Audit', 'Task Flow Diagrams', 'High-Fidelity Mockups', 'Micro-interaction Specs'],
      metrics: [
        { label: 'Course Completion', value: '+35%' },
        { label: 'Accessibility Score', value: '99 / 100' },
        { label: 'Daily Active Streak', value: '4.7x' },
      ],
    },
  ]

  const designProcessSteps = [
    {
      step: '01',
      name: 'Research',
      tagline: 'Empathize & Discover',
      desc: 'Deep-diving into user psychology, pain points, and business context before touching a single pixel.',
      activities: ['Stakeholder Interviews', 'User Interviews & Surveys', 'Competitive Benchmarking', 'Contextual Inquiry'],
      deliverables: 'Research Insights Report, User Quotes, Problem Statements',
      icon: Search,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      step: '02',
      name: 'Define',
      tagline: 'Synthesize & Frame',
      desc: 'Translating qualitative and quantitative findings into actionable personas and journey maps.',
      activities: ['Affinity Mapping', 'User Persona Development', 'Customer Journey Mapping', 'Information Architecture (IA)'],
      deliverables: 'Personas, Journey Maps, User Flows, Site Maps',
      icon: Target,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      step: '03',
      name: 'Ideate',
      tagline: 'Explore & Structure',
      desc: 'Brainstorming creative possibilities, sketching low-fidelity concepts, and validating hierarchy.',
      activities: ['Crazy 8s Sketching', 'Low-Fidelity Wireframes', 'Content Hierarchy', 'Rapid Feedback Rounds'],
      deliverables: 'Paper Sketches, Lo-Fi Wireframes, Conceptual Flows',
      icon: Lightbulb,
      color: 'from-blue-500 to-teal-500',
    },
    {
      step: '04',
      name: 'Design',
      tagline: 'Craft & Prototype',
      desc: 'Transforming validated wireframes into refined, accessible, pixel-perfect interfaces with robust design systems.',
      activities: ['High-Fidelity UI in Figma', 'Design System Architecture', 'Micro-interactions', 'Interactive Prototypes'],
      deliverables: 'Component Libraries, Responsive Mockups, Clickable Prototypes',
      icon: Layout,
      color: 'from-teal-500 to-emerald-500',
    },
    {
      step: '05',
      name: 'Test',
      tagline: 'Evaluate & Iterate',
      desc: 'Validating solutions with real users to identify edge cases, measure usability metrics, and polish the experience.',
      activities: ['Moderated Usability Testing', 'Heuristic Evaluation', 'Task Completion Analysis', 'Design Handoff'],
      deliverables: 'Usability Audit, Polish Changelog, Dev Handoff Specs',
      icon: Eye,
      color: 'from-emerald-500 to-purple-500',
    },
  ]

  const filteredProjects =
    activeProjectFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeProjectFilter || p.tags.includes(activeProjectFilter))

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setContactForm({ name: '', email: '', subject: 'Project Inquiry', message: '' })
    }, 4500)
  }

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 flex flex-col selection:bg-purple-500/30 selection:text-purple-200">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-600/15 blur-[140px] rounded-full"></div>
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-teal-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute inset-0 grid-pattern opacity-40"></div>
      </div>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-40 w-full glass-panel border-b border-white/5 backdrop-blur-xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/25 group-hover:scale-105 transition-transform">
              VD
            </div>
            <div>
              <div className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-purple-300 transition-colors">
                Vaidehi Dhawade
              </div>
              <div className="text-xs text-purple-400 font-medium tracking-wide">
                UI/UX Designer & UX Researcher
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Work' },
              { id: 'process', label: 'Process' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeNav === item.id
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel border-b border-white/10 px-6 py-5 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Work & Case Studies' },
              { id: 'process', label: 'Design Process' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-300 hover:text-purple-400 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow">
        {/* 1. Hero Section */}
        <section id="home" className="relative pt-20 pb-28 md:pt-32 md:pb-36 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md animate-float">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for UI/UX & UX Research Roles</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
                Hi, I'm <span className="gradient-text">Vaidehi Dhawade</span>
              </h1>

              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-200/90 mb-6 flex items-center justify-center gap-3 flex-wrap">
                <span>UI/UX Designer</span>
                <span className="text-purple-400">•</span>
                <span>UX Researcher</span>
              </div>

              {/* Strong Professional Introduction */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
                Designing intuitive, research-backed digital products that bridge human psychology,
                frictionless user flows, and modern visual aesthetics. I turn complex user problems into
                delightful, accessible experiences.
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
                <a
                  href="#projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all text-base"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-purple-400/40 hover:-translate-y-0.5 transition-all text-base backdrop-blur-md"
                >
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>Contact Me</span>
                </a>
              </div>

              {/* Key Quick Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-8 border-t border-white/10">
                {[
                  { value: '4+', label: 'In-Depth Case Studies', icon: Layers },
                  { value: '15+', label: 'User Research Studies', icon: Search },
                  { value: '30+', label: 'Wireframes & Prototypes', icon: Layout },
                  { value: '100%', label: 'Human-Centered Focus', icon: HeartHandshake },
                ].map((stat, idx) => (
                  <div key={idx} className="glass-card rounded-2xl p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1 gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. About Me Section */}
        <section id="about" className="py-24 relative border-t border-white/5 bg-slate-950/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <User className="w-3.5 h-3.5" />
                <span>About Me</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Empathy Meets Pixel-Perfect Craft
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Bio Card */}
              <div className="lg:col-span-6 space-y-6">
                <div className="glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Passionate about understanding the <span className="text-purple-400">"Why"</span> behind human behavior.
                  </h3>
                  <div className="space-y-4 text-slate-300 leading-relaxed text-base">
                    <p>
                      Hello! I'm <strong className="text-white">Vaidehi Dhawade</strong>, a UI/UX Designer and UX Researcher dedicated to transforming complex challenges into meaningful, seamless digital journeys.
                    </p>
                    <p>
                      My core passion lies at the intersection of <strong className="text-purple-300">user research</strong>, cognitive behavior, and interactive visual design. I believe that great design isn’t just how an interface looks, but how effortlessly it allows real people to achieve their goals.
                    </p>
                    <p>
                      Whether it's conducting in-depth user interviews, structuring complex information architecture, or crafting scalable design systems in Figma, I bring a structured yet empathetic methodology to every phase of the product lifecycle.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span>Based in Mumbai, India (Open to Remote Worldwide)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: 3 Core Pillars */}
              <div className="lg:col-span-6 space-y-4">
                {[
                  {
                    title: 'Behavioral UX Research',
                    desc: 'Uncovering root motivations and mental models through qualitative interviews, contextual inquiry, and usability testing.',
                    icon: Search,
                    tag: 'Discovery',
                  },
                  {
                    title: 'Iterative Wireframing & Prototyping',
                    desc: 'Rapidly translating research insights into testable low- and high-fidelity prototypes to validate assumptions before engineering.',
                    icon: Layout,
                    tag: 'Structure',
                  },
                  {
                    title: 'Design Systems & UI Craft',
                    desc: 'Creating scalable, WCAG-accessible components, micro-interactions, and visual harmony that elevate brand perception.',
                    icon: Sparkles,
                    tag: 'Craft',
                  },
                ].map((pillar, idx) => {
                  const Icon = pillar.icon
                  return (
                    <div key={idx} className="glass-card rounded-2xl p-6 border border-white/5 hover:border-purple-500/30 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-lg font-bold text-white">{pillar.title}</h4>
                            <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-purple-300 border border-white/10">
                              {pillar.tag}
                            </span>
                          </div>
                          <p className="text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Skills Section */}
        <section id="skills" className="py-24 relative border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>Skills & Expertise</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                My Core Toolkit & Disciplines
              </h2>
              <p className="text-slate-400 max-w-xl text-base">
                A balanced blend of qualitative discovery, strategic architecture, and modern visual design execution.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {skillsData.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <div
                    key={index}
                    className="glass-card rounded-2xl p-6 border border-white/5 hover:border-purple-500/40 group relative overflow-hidden transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-200">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
                        {skill.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 4. Selected Projects / Case Studies */}
        <section id="projects" className="py-24 relative border-t border-white/5 bg-slate-950/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Selected Work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Featured Case Studies
              </h2>
              <p className="text-slate-400 max-w-xl text-base mb-8">
                Explore how I approach user problems from initial generative research to interactive, high-fidelity prototypes.
              </p>

              {/* Filter Tabs */}
              <div className="inline-flex items-center gap-2 p-1.5 rounded-full glass-panel border border-white/10">
                {['All', 'UX Research', 'Mobile Apps', 'Web & SaaS'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveProjectFilter(filter)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      activeProjectFilter === filter
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/40 flex flex-col group transition-all duration-300"
                >
                  {/* Card Visual Header with Simulated UI Preview */}
                  <div className={`h-56 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between border-b border-white/5 relative overflow-hidden`}>
                    <div className="flex items-center justify-between z-10">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${project.badgeColor} backdrop-blur-md`}>
                        {project.category}
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md">
                        {project.impact}
                      </span>
                    </div>

                    {/* Aesthetic Wireframe / UI Preview Mockup Illustration */}
                    <div className="relative z-10 mt-auto">
                      <div className="glass-panel p-3.5 rounded-xl border border-white/15 shadow-2xl backdrop-blur-md transform group-hover:scale-[1.02] transition-transform">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
                          <div className="text-[11px] text-slate-300 font-mono ml-2 truncate">
                            {project.title.split('—')[0].trim()} • Design Prototype
                          </div>
                        </div>
                        <div className="h-1.5 w-3/4 bg-white/20 rounded mb-1.5"></div>
                        <div className="h-1.5 w-1/2 bg-white/10 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-7 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Tag Badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button to Open Modal */}
                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="w-full py-3 px-4 rounded-xl bg-white/[0.05] hover:bg-purple-600 hover:text-white border border-white/10 hover:border-purple-500 font-semibold text-sm text-slate-200 flex items-center justify-center gap-2 transition-all group-hover:bg-purple-600/90 group-hover:text-white cursor-pointer"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Modal */}
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="glass-panel border border-white/15 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 md:p-10 relative shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
                  {selectedCaseStudy.category} • {selectedCaseStudy.impact}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
                  {selectedCaseStudy.title}
                </h2>
                <p className="text-base text-purple-200/90 font-medium">
                  {selectedCaseStudy.subtitle}
                </p>
              </div>

              {/* Key Metrics Bar */}
              <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                {selectedCaseStudy.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl sm:text-2xl font-extrabold text-purple-300 gradient-text">
                      {metric.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-400 font-medium">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Deep-Dive Sections */}
              <div className="space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
                <div>
                  <h4 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-purple-400" />
                    <span>The Problem & Challenge</span>
                  </h4>
                  <p className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
                    <Search className="w-5 h-5 text-indigo-400" />
                    <span>UX Research & Insights</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedCaseStudy.researchInsights.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-teal-400" />
                    <span>The Proposed Solution & Impact</span>
                  </h4>
                  <p className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                    {selectedCaseStudy.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
                    <Layers className="w-5 h-5 text-purple-400" />
                    <span>Key Deliverables</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudy.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs sm:text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Detailed Figma specs and full research documentation available upon request.
                </span>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 5. My Design Process Section */}
        <section id="process" className="py-24 relative border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Compass className="w-3.5 h-3.5" />
                <span>Methodology</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                My 5-Step Design Process
              </h2>
              <p className="text-slate-400 max-w-2xl text-base">
                A structured, non-linear framework driven by empathy, rapid iteration, and measurable validation.
              </p>

              {/* Process Flow Badge */}
              <div className="mt-8 flex items-center justify-center flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-300">
                {['Research', 'Define', 'Ideate', 'Design', 'Test'].map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span
                      onClick={() => setActiveProcessTab(idx)}
                      className={`cursor-pointer px-3.5 py-1.5 rounded-full border transition-all ${
                        activeProcessTab === idx
                          ? 'bg-purple-600/30 text-purple-200 border-purple-400/50 shadow-md'
                          : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {step}
                    </span>
                    {idx < 4 && <span className="text-purple-400 font-bold">→</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Interactive Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {designProcessSteps.map((step, idx) => {
                const IconComponent = step.icon
                const isActive = activeProcessTab === idx
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveProcessTab(idx)}
                    className={`cursor-pointer glass-card rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                      isActive
                        ? 'border-purple-500/50 bg-purple-950/20 shadow-xl shadow-purple-500/10 -translate-y-1'
                        : 'border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-purple-400">
                          {step.step}
                        </span>
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${step.color} text-white`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-1">
                        {step.name}
                      </h3>
                      <div className="text-xs font-medium text-purple-300 mb-3">
                        {step.tagline}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        {step.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5 space-y-2">
                      <div className="text-[11px] font-semibold text-slate-300">Deliverables:</div>
                      <div className="text-[11px] text-slate-400 leading-tight">
                        {step.deliverables}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 6. Contact Section */}
        <section id="contact" className="py-24 relative border-t border-white/5 bg-slate-950/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Mail className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Let's Build Something Meaningful
              </h2>
              <p className="text-slate-400 max-w-xl text-base">
                Whether you have an upcoming project, a full-time opportunity, or just want to talk about UX research & design, my inbox is always open.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Direct Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6">
                  <h3 className="text-2xl font-bold text-white">
                    Contact Information
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    I am actively open to UI/UX Design and UX Research roles, internships, freelance contracts, and collaborative design projects.
                  </p>

                  <div className="space-y-4 pt-2">
                    <a
                      href="mailto:vaidehidhawade16@gmail.com"
                      className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.03] hover:bg-purple-500/10 border border-white/5 hover:border-purple-500/30 transition-all text-slate-200 group"
                    >
                      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-300 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Email Me</div>
                        <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                          vaidehidhawade16@gmail.com
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.03] hover:bg-purple-500/10 border border-white/5 hover:border-purple-500/30 transition-all text-slate-200 group"
                    >
                      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-300 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                        <LinkedinIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Connect on LinkedIn</div>
                        <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                          linkedin.com/in/vaidehidhawade
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://github.com/vaidehidhawade16-jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.03] hover:bg-purple-500/10 border border-white/5 hover:border-purple-500/30 transition-all text-slate-200 group"
                    >
                      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-300 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                        <GithubIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">GitHub Profile</div>
                        <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                          github.com/vaidehidhawade16-jpg
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span>Typical response time: within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="glass-card rounded-3xl p-8 border border-white/10 relative">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Send a Message
                  </h3>

                  {formSubmitted ? (
                    <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-in fade-in zoom-in-95 duration-200">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                      <p className="text-sm text-slate-300">
                        Thank you for reaching out, Vaidehi will review your message and reply shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            Your Name
                          </label>
                          <input
                            type="text"
                            required
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            placeholder="e.g. Alex Morgan"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            Your Email
                          </label>
                          <input
                            type="email"
                            required
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            placeholder="e.g. alex@company.com"
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Subject / Inquiry Type
                        </label>
                        <select
                          value={contactForm.subject}
                          onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#141622] border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                        >
                          <option value="Full-time Opportunity">Full-time Opportunity</option>
                          <option value="Freelance UX/UI Project">Freelance UX/UI Project</option>
                          <option value="UX Research Consultation">UX Research Consultation</option>
                          <option value="General Collaboration">General Collaboration</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Your Message
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          placeholder="Tell me about your project, goals, or role..."
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 7. Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 bg-black/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white text-xs">
                VD
              </div>
              <div>
                <span className="font-bold text-white">Vaidehi Dhawade</span>
                <span className="text-xs text-slate-400 ml-2">© {new Date().getFullYear()} All rights reserved.</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors">Case Studies</a>
              <a href="#process" className="hover:text-purple-400 transition-colors">Process</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:vaidehidhawade16@gmail.com"
                className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/vaidehidhawade16-jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
