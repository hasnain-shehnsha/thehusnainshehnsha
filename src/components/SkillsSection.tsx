import FadeIn from './FadeIn';
import { usePortfolio } from '../hooks/usePortfolio';

export default function SkillsSection() {
  const { skills } = usePortfolio();

  if (!skills?.categories?.length) return null;

  return (
    <section
      id="skills"
      className="scroll-mt-20 flex flex-col px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase leading-none tracking-tight text-center w-full mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#D7E2EA' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 w-full max-w-6xl mx-auto">
        {skills.categories.map((category, i) => (
          <FadeIn
            key={i}
            delay={i * 0.1}
            y={30}
            className="flex flex-col"
          >
            <div
              className="rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col gap-6 h-full"
              style={{
                backgroundColor: '#111111',
                border: '1px solid rgba(215, 226, 234, 0.1)',
              }}
            >
              <h3
                className="font-black uppercase tracking-tight"
                style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#00D9FF' }}
              >
                {category.name}
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.items.map((skill, j) => (
                  <FadeIn
                    key={j}
                    delay={0.05 * j}
                    y={10}
                  >
                    <span
                      className="px-4 py-2 rounded-full font-medium uppercase tracking-wide inline-block whitespace-nowrap"
                      style={{
                        fontSize: 'clamp(0.75rem, 1vw, 0.95rem)',
                        backgroundColor: 'rgba(0, 217, 255, 0.1)',
                        color: '#00D9FF',
                        border: '1px solid rgba(0, 217, 255, 0.3)',
                      }}
                    >
                      {skill}
                    </span>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Skills Summary Stats */}
      <FadeIn delay={0.6} y={30} className="mt-16 sm:mt-20 md:mt-28 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <p
              className="font-black tracking-tight"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                color: '#00D9FF',
              }}
            >
              {skills.categories.length}+
            </p>
            <p
              className="text-[#D7E2EA]/60 font-light uppercase tracking-wide mt-2"
              style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1rem)' }}
            >
              Skill Categories
            </p>
          </div>

          <div className="text-center">
            <p
              className="font-black tracking-tight"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                color: '#00D9FF',
              }}
            >
              {skills.categories.reduce((acc, cat) => acc + cat.items.length, 0)}+
            </p>
            <p
              className="text-[#D7E2EA]/60 font-light uppercase tracking-wide mt-2"
              style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1rem)' }}
            >
              Technologies
            </p>
          </div>

          <div className="text-center">
            <p
              className="font-black tracking-tight"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                color: '#A78BFA',
              }}
            >
              AI/ML
            </p>
            <p
              className="text-[#D7E2EA]/60 font-light uppercase tracking-wide mt-2"
              style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1rem)' }}
            >
              Specialization
            </p>
          </div>

          <div className="text-center">
            <p
              className="font-black tracking-tight"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                color: '#00D9FF',
              }}
            >
              Full Stack
            </p>
            <p
              className="text-[#D7E2EA]/60 font-light uppercase tracking-wide mt-2"
              style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1rem)' }}
            >
              Capable
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
