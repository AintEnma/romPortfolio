import { memo } from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-light">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            
          </div>
          <div className="md:w-1/2 text-left">
            <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
            <div className="w-16 h-1 bg-primary mb-6"></div>
            <p className="text-lg text-black leading-relaxed">
              I am Rom Denielle Navarro, a fourth-year BSIT student with a deep passion for technology and web development. My journey in IT has empowered me to create impactful projects, embrace continuous learning, and adapt to emerging technologies. I take pleasure in developing projects that assist others and highlight my skills. My aspiration is to become a professional developer capable of delivering practical solutions that truly make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
