import FadeIn from './FadeIn';
import { usePortfolio } from '../hooks/usePortfolio';

export default function EducationSection() {
  const { education = [] } = usePortfolio();

  if (!education.length) return null;

  return (
    <section
      id="education"
      className="scroll-mt-20 flex flex-col px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase leading-none tracking-tight text-center w-full mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#D7E2EA' }}
        >
          Education
        </h2>
      </FadeIn>

      <div className="flex flex-col w-full items-center max-w-4xl mx-auto">
        {education.map((edu, i) => (
          <FadeIn
            key={i}
            delay={i * 0.1}
            y={30}
            className="flex flex-col items-center w-full"
          >
            {i > 0 && (
              <div
                className="w-full"
                style={{ borderTop: '1px solid rgba(215, 226, 234, 0.2)' }}
              />
            )}
            <div className="py-8 sm:py-10 md:py-12 w-full">
              <div className="flex flex-col gap-2 sm:gap-4">
                <h3
                  className="font-black uppercase tracking-tight"
                  style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', color: '#D7E2EA' }}
                >
                  {edu.degree}
                </h3>
                <p
                  className="font-semibold uppercase"
                  style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.3rem)', color: '#D7E2EA', opacity: 0.9 }}
                >
                  {edu.institution}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                  <p
                    className="font-light uppercase tracking-wide"
                    style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1rem)', color: '#D7E2EA', opacity: 0.7 }}
                  >
                    📍 {edu.location}
                  </p>
                  <p
                    className="font-light uppercase tracking-wide"
                    style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1rem)', color: '#D7E2EA', opacity: 0.7 }}
                  >
                    📅 {edu.period}
                  </p>
                  {edu.CGPA && (
                    <p
                      className="font-light uppercase tracking-wide"
                      style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1rem)', color: '#D7E2EA', opacity: 0.7 }}
                    >
                      🎯 CGPA: {edu.CGPA}
                    </p>
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
