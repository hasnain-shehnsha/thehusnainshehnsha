import { useRef } from 'react';
import FadeIn from './FadeIn';
import { usePortfolio } from '../hooks/usePortfolio';
import aniadImg from '../assets/img/aniad-project.png';
import researchImg from '../assets/img/research-project.png';
import aiTutorImg from '../assets/img/ai-tutor-project.png';
import weatherImg from '../assets/img/weather-project.png';
import recruiterImg from '../assets/img/ai-recruiter-project.png';
import trialMatchImg from '../assets/img/trialmatch-project.png';


export default function ProjectsSection() {
  const { projects } = usePortfolio();
  
  // Map project IDs to imported images
  const imageMap: { [key: string]: string } = {
    'aniad-text-animation': aniadImg,
    'research-assistant-chatbot': researchImg,
    'ai-tutor-rag': aiTutorImg,
    'weather-expert-system': weatherImg,
    'ai-recruiter-vapi': recruiterImg,
    'trialmatch': trialMatchImg,
  };

  const orderedProjects = [...projects].sort((a, b) => Number(Boolean(b.highlight)) - Number(Boolean(a.highlight)));

  return (
    <section
      id="projects"
      className="scroll-mt-20 flex flex-col px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase leading-none tracking-tight text-center w-full mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#D7E2EA' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 w-full max-w-7xl mx-auto">
        {orderedProjects.map((project, index) => (
          <FadeIn
            key={project.id}
            delay={index * 0.1}
            y={30}
            className="flex flex-col h-full"
          >
            <div
              className="rounded-2xl overflow-hidden flex flex-col h-full group"
              style={{
                backgroundColor: '#111111',
                border: '1px solid rgba(215, 226, 234, 0.1)',
              }}
            >
              {/* Project Image */}
              <div className="relative w-full h-[250px] sm:h-[280px] overflow-hidden bg-gradient-to-br from-[#00D9FF]/10 to-[#A78BFA]/10">
                <img
                  src={imageMap[project.id] || project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.highlight && (
                  <div
                    className="absolute top-3 right-3 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{ backgroundColor: '#00D9FF', color: '#0C0C0C' }}
                  >
                    Featured
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="flex flex-col gap-3 sm:gap-4 p-6 sm:p-7 md:p-8 flex-1">
                {/* Project Number and Year */}
                <div className="flex justify-between items-start">
                  <span
                    className="font-black tracking-tight"
                    style={{ fontSize: '2.5rem', color: '#00D9FF', opacity: 0.3 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#D7E2EA', opacity: 0.6 }}
                  >
                    {project.year}
                  </span>
                </div>

                {/* Title and Subtitle */}
                <div className="mt-2">
                  <h3
                    className="font-black uppercase tracking-tight leading-tight"
                    style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#D7E2EA' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="font-light uppercase tracking-wide mt-2"
                    style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)', color: '#00D9FF' }}
                  >
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p
                  className="font-light leading-relaxed flex-1"
                  style={{ fontSize: 'clamp(0.85rem, 1vw, 1rem)', color: '#D7E2EA', opacity: 0.75 }}
                >
                  {project.description}
                </p>

                {/* Role */}
                <div>
                  <p
                    className="font-semibold uppercase tracking-wider"
                    style={{ fontSize: 'clamp(0.8rem, 0.95vw, 0.95rem)', color: '#A78BFA' }}
                  >
                    Role: {project.role}
                  </p>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full font-medium uppercase tracking-wider inline-block whitespace-nowrap"
                      style={{
                        fontSize: 'clamp(0.7rem, 0.9vw, 0.85rem)',
                        backgroundColor: 'rgba(0, 217, 255, 0.1)',
                        color: '#00D9FF',
                        border: '1px solid rgba(0, 217, 255, 0.3)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4 pt-4" style={{ borderTop: '1px solid rgba(215, 226, 234, 0.1)' }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 rounded-lg font-semibold uppercase tracking-wider text-center transition-all duration-300"
                      style={{
                        fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
                        backgroundColor: 'rgba(0, 217, 255, 0.2)',
                        color: '#00D9FF',
                        border: '1px solid rgba(0, 217, 255, 0.5)',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.3)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 217, 255, 0.2)';
                      }}
                    >
                      GitHub
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 rounded-lg font-semibold uppercase tracking-wider text-center transition-all duration-300"
                      style={{
                        fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
                        backgroundColor: '#00D9FF',
                        color: '#0C0C0C',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.opacity = '0.8';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
