
import React from 'react';
import { Code, Palette, Smartphone, Globe, Lightbulb, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Node.js, and more.',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Development', 'Performance Optimization']
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creative visual solutions that communicate your brand message effectively and memorably.',
      features: ['Logo Design', 'Brand Identity', 'Print Design', 'Digital Graphics']
    },
    {
      icon: Smartphone,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and engaging digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    },
    {
      icon: Globe,
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategies to help your business thrive in the online world.',
      features: ['SEO Optimization', 'Social Media Strategy', 'Content Planning', 'Analytics Setup']
    },
    {
      icon: Lightbulb,
      title: 'Brand Consulting',
      description: 'Strategic brand guidance to help you stand out in a competitive marketplace.',
      features: ['Brand Analysis', 'Market Research', 'Positioning Strategy', 'Brand Guidelines']
    },
    {
      icon: Zap,
      title: 'Digital Innovation',
      description: 'Cutting-edge solutions using the latest technologies and design trends.',
      features: ['AI Integration', 'Progressive Web Apps', 'Motion Design', 'Interactive Experiences']
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
