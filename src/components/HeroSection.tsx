import Navbar from './Navbar';
import SocialLinks from './SocialLinks';
import FadeIn from './FadeIn';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen scroll-mt-20 flex flex-col overflow-hidden relative pb-20">
      <div className="flex flex-col px-5 sm:px-8 md:px-10 relative z-0">
        <FadeIn delay={0} y={-40} className="mb-12 sm:mb-16 md:mb-20">
          <Navbar />
        </FadeIn>

        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          {/* Left Content */}
          <div className="flex flex-col items-start justify-center w-full lg:w-1/2">
            <FadeIn delay={0.15} y={40} className="overflow-hidden">
              <p
                className="text-[#D7E2EA] font-light uppercase tracking-wider mb-4"
                style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)' }}
              >
                &gt; Hi, I&apos;m
              </p>
              <h1
                className="hero-heading font-black uppercase leading-tight tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 10vw, 4.5rem)', lineHeight: '1' }}
              >
                Husnain<br />Shehnsha
              </h1>
              <p
                className="text-[#D7E2EA]/70 font-semibold uppercase tracking-wider mt-3"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)' }}
              >
                ML/AI Engineer
              </p>
            </FadeIn>

            <FadeIn delay={0.25} y={20} className="mt-6 sm:mt-8">
              <p
                className="text-[#D7E2EA] font-light leading-relaxed max-w-[500px]"
                style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)' }}
              >
                Building intelligent solutions using Machine Learning and Artificial Intelligence. Specialized in RAG systems, LLMs, and generative AI applications.
              </p>
            </FadeIn>

            <FadeIn delay={0.35} y={20} className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="#contact"
                className="px-8 py-3 sm:px-10 sm:py-4 bg-[#D7E2EA] text-[#0C0C0C] font-semibold uppercase tracking-wider rounded-lg hover:opacity-90 transition-all duration-300"
                style={{ fontSize: 'clamp(0.85rem, 1vw, 1rem)' }}
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 sm:px-10 sm:py-4 bg-transparent border-2 border-[#D7E2EA] text-[#D7E2EA] font-semibold uppercase tracking-wider rounded-lg hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all duration-300"
                style={{ fontSize: 'clamp(0.85rem, 1vw, 1rem)' }}
              >
                View Projects
              </a>
            </FadeIn>

            <div className="mt-12 sm:mt-16">
              <FadeIn delay={0.5} y={20}>
                <SocialLinks />
              </FadeIn>
            </div>
          </div>

          {/* Right Animated Element */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <FadeIn delay={0.6} y={30}>
              <style>{`
                @keyframes spin-slow {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                @keyframes spin-fast {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(-360deg); }
                }
                @keyframes pulse-scale {
                  0%, 100% { transform: scale(1); opacity: 0.3; }
                  50% { transform: scale(1.2); opacity: 0.6; }
                }
                @keyframes orbit {
                  from { transform: rotate(0deg) translateX(80px) rotate(0deg); }
                  to { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
                }
                @keyframes float-up {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-15px); }
                }
                @keyframes glow-pulse {
                  0%, 100% { filter: drop-shadow(0 0 10px rgba(0, 217, 255, 0.5)); }
                  50% { filter: drop-shadow(0 0 25px rgba(167, 139, 250, 0.8)); }
                }
                
                .outer-ring { animation: spin-slow 25s linear infinite; }
                .middle-ring { animation: spin-fast 18s linear infinite; }
                .inner-ring { animation: spin-slow 12s linear infinite; }
                .core-icon { animation: float-up 3s ease-in-out infinite, glow-pulse 4s ease-in-out infinite; }
                .orbit-dot-1 { animation: orbit 8s linear infinite; }
                .orbit-dot-2 { animation: orbit 10s linear infinite reverse; }
                .pulse-ring { animation: pulse-scale 2.5s ease-in-out infinite; }
              `}</style>
              
              <div className="relative w-[280px] sm:w-[350px] md:w-[400px] h-[280px] sm:h-[350px] md:h-[400px]">
                {/* Pulsing background ring */}
                <svg className="pulse-ring absolute inset-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="95" fill="none" stroke="#00D9FF" strokeWidth="1" opacity="0.3" />
                </svg>

                {/* Outer rotating ring */}
                <svg className="outer-ring absolute inset-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="grad-outer" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#00D9FF', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#A78BFA', stopOpacity: 0.7 }} />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="95" fill="none" stroke="url(#grad-outer)" strokeWidth="2" />
                  {/* Dots on outer ring */}
                  <circle cx="100" cy="10" r="3" fill="#00D9FF" />
                  <circle cx="190" cy="100" r="3" fill="#A78BFA" />
                  <circle cx="100" cy="190" r="3" fill="#00D9FF" />
                </svg>

                {/* Middle rotating ring */}
                <svg className="middle-ring absolute inset-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="grad-middle" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#A78BFA', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#00D9FF', stopOpacity: 0.6 }} />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="70" fill="none" stroke="url(#grad-middle)" strokeWidth="1.5" strokeDasharray="5,5" />
                </svg>

                {/* Inner rotating ring */}
                <svg className="inner-ring absolute inset-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="50" fill="none" stroke="#00D9FF" strokeWidth="1" opacity="0.4" />
                  <circle cx="100" cy="100" r="45" fill="none" stroke="#A78BFA" strokeWidth="0.5" opacity="0.5" />
                </svg>

                {/* Orbiting particles */}
                <div className="orbit-dot-1 absolute inset-0">
                  <div className="absolute w-2 h-2 bg-cyan-400 rounded-full" style={{top: '10px', left: '50%', transform: 'translateX(-50%)', boxShadow: '0 0 8px #00D9FF'}} />
                </div>
                <div className="orbit-dot-2 absolute inset-0">
                  <div className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full" style={{bottom: '10px', right: '10px', boxShadow: '0 0 6px #A78BFA'}} />
                </div>

                {/* Center core icon */}
                <div className="core-icon absolute inset-0 flex items-center justify-center">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="chip-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#00D9FF' }} />
                        <stop offset="100%" style={{ stopColor: '#A78BFA' }} />
                      </linearGradient>
                    </defs>
                    
                    {/* Main chip body */}
                    <rect x="25" y="25" width="50" height="50" rx="6" fill="none" stroke="url(#chip-grad)" strokeWidth="2" />
                    
                    {/* Center circle */}
                    <circle cx="50" cy="50" r="10" fill="url(#chip-grad)" opacity="0.8" />
                    
                    {/* Corner squares */}
                    <rect x="18" y="18" width="6" height="6" fill="#00D9FF" opacity="0.6" />
                    <rect x="76" y="18" width="6" height="6" fill="#A78BFA" opacity="0.6" />
                    <rect x="18" y="76" width="6" height="6" fill="#A78BFA" opacity="0.6" />
                    <rect x="76" y="76" width="6" height="6" fill="#00D9FF" opacity="0.6" />
                    
                    {/* Connection lines */}
                    <line x1="50" y1="17" x2="50" y2="8" stroke="#00D9FF" strokeWidth="1.5" opacity="0.7" />
                    <line x1="50" y1="83" x2="50" y2="92" stroke="#00D9FF" strokeWidth="1.5" opacity="0.7" />
                    <line x1="17" y1="50" x2="8" y2="50" stroke="#A78BFA" strokeWidth="1.5" opacity="0.7" />
                    <line x1="83" y1="50" x2="92" y2="50" stroke="#A78BFA" strokeWidth="1.5" opacity="0.7" />
                    
                    {/* Data flow indicators */}
                    <circle cx="35" cy="50" r="2" fill="#00D9FF" opacity="0.7" />
                    <circle cx="65" cy="50" r="2" fill="#A78BFA" opacity="0.7" />
                    <circle cx="50" cy="35" r="2" fill="#A78BFA" opacity="0.7" />
                    <circle cx="50" cy="65" r="2" fill="#00D9FF" opacity="0.7" />
                  </svg>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
