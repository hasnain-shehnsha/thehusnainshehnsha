import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <main style={{ backgroundColor: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
