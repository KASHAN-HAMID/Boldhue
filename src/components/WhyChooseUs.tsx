
import React from 'react';
import { Award, Clock, Users, Zap, Shield, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Proven Excellence',
      description: 'Award-winning designs and development with a track record of successful projects across various industries.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect deadlines and deliver projects on time without compromising on quality or attention to detail.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our skilled professionals bring years of experience in design, development, and digital strategy.'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'We use the latest tools and technologies to ensure your project stays ahead of the competition.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality checks ensure every project meets the highest standards of excellence.'
    },
    {
      icon: Heart,
      title: 'Client-Focused Approach',
      description: 'Your success is our priority. We work closely with you to understand and exceed your expectations.'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BoldHue?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another design agency. Here's what sets us apart and makes us the right choice for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <reason.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their digital presence with BoldHue. 
            Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-sm text-muted-foreground">
              ✓ Free consultation
            </div>
            <div className="text-sm text-muted-foreground">
              ✓ Custom solutions
            </div>
            <div className="text-sm text-muted-foreground">
              ✓ 24/7 support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
