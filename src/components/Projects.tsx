import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
  github?: string;
};

const ImageModal = ({ imageSrc, onClose }: { imageSrc: string; onClose: () => void }) => {
  // ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative">
        <img src={imageSrc} alt="Preview" className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg" />
        <button
          onClick={onClose}
          className="absolute top-[-10px] right-[-10px] bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl shadow"
        >
          ×
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: 'ShopCo E-Commerce Store',
      category: 'Web Development',
      image: '/ecomerce.jpeg',
      description: 'Fully functional e-commerce store with product filtering, cart system, and modern UI.',
      link: 'https://ecommerce-shopco-backend.vercel.app/',
      github: 'https://github.com/your-username/shopco',
    },
    {
      title: 'Ahmed’s Portfolio',
      category: 'Web Development',
      image: '/portfolio.jpg',
      description: 'Personal portfolio showcasing UI/UX, frontend development, and animations.',
      link: 'https://ahmeds-portfolio-ten.vercel.app/',
      github: 'https://github.com/your-username/ahmed-portfolio',
    },
    {
      title: 'Creative Agency Website',
      category: 'Web Development',
      image: '/slc.jpeg',
      description: 'Clean, elegant design for a creative agency with animated transitions and responsive layout.',
      link: 'https://creative-henna.vercel.app/',
      github: 'https://github.com/your-username/creative-agency',
    },
    {
      title: 'Social Media Post Designs',
      category: 'Graphic Design',
      image: '/post.jpg',
      description: 'A collection of custom social media posts for brands and events, optimized for engagement.',
    },
    {
      title: 'Logo Design Collection',
      category: 'Graphic Design',
      image: '/logo.jpg',
      description: 'Creative and minimalistic logo designs crafted for various startups and businesses.',
    },
    {
      title: 'Posters & Flyer Designs',
      category: 'Graphic Design',
      image: '/flyer.jpg',
      description: 'Eye-catching posters and flyers designed for promotions, events, and product launches.',
    }
  ];

  const handleViewClick = (project: Project) => {
    if (project.link) {
      window.open(project.link, '_blank');
    } else {
      setModalImage(project.image); // open image in modal
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto max-h-60 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" onClick={() => handleViewClick(project)}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  {project.github && (
                    <Button size="sm" variant="secondary" onClick={() => window.open(project.github!, '_blank')}>
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImage && <ImageModal imageSrc={modalImage} onClose={() => setModalImage(null)} />}
    </section>
  );
};

export default Projects;
