
import React from 'react';
import { Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi BoldHue Team! 👋\n\nI'm interested in your services. Could you help me with:\n\n• Web Development\n• Graphic Design\n• UI/UX Design\n• Project Consultation\n• Other Services\n\nI'd love to discuss my project requirements. When would be a good time to talk?`
    );
    window.open(`https://wa.me/923090667720?text=${message}`, '_blank');
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      action: () => window.open('mailto:ahmedsaleem522188@gmail.com'),
      color: 'text-red-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick response guaranteed',
      action: handleWhatsApp,
      color: 'text-green-500'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Follow our creative journey',
      action: () => window.open('https://www.instagram.com/boldhue.pk?igsh=dHp3N3o3cjNvcHAw', '_blank'),
      color: 'text-pink-500'
    },
    {
      icon: Facebook,
      title: 'Facebook',
      description: 'Connect with us on Facebook',
      action: () => window.open('https://www.facebook.com/share/19Yjny5b46/', '_blank'),
      color: 'text-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={method.action}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <method.icon className={`h-6 w-6 ${method.color}`} />
                </div>
                <h3 className="font-semibold mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Create Something Extraordinary
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you need a stunning website, eye-catching graphics, or intuitive UI/UX design, 
            we're here to help you achieve your goals and exceed your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={handleWhatsApp}
              className="group"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start WhatsApp Chat
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('mailto:ahmedsaleem522188@gmail.com')}
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
