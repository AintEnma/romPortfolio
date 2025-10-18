
import { memo } from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A web application built with React and Tailwind CSS featuring modern UI components.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'Mobile responsive e-commerce site with payment integration and user authentication.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      link: '#'
    },
    {
      title: 'Project 3',
      description: 'Data visualization dashboard using Chart.js and Node.js backend for analytics.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
      link: '#'
    },
    {
      title: 'Project 4',
      description: 'Portfolio website with animations and interactive elements built from scratch.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black text-center mb-12 font-serif">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                <p className="text-black mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block bg-primary text-black px-6 py-2 rounded-full font-semibold hover:bg-accent transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Projects);
