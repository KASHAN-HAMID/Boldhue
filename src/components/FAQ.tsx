
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What services does BoldHue offer?',
      answer: 'We specialize in web development, graphic design, and UI/UX design. Our services include custom website development, e-commerce solutions, brand identity design, logo creation, mobile app design, and comprehensive digital strategy consulting.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications or comprehensive branding projects may take 6-12 weeks. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! We work with businesses of all sizes, from startups and small businesses to large corporations. We tailor our services and pricing to meet the specific needs and budgets of each client.'
    },
    {
      question: 'What is your design process?',
      answer: 'Our process includes: 1) Discovery and consultation, 2) Research and strategy, 3) Concept development, 4) Design and development, 5) Testing and refinement, 6) Launch and delivery, 7) Ongoing support and maintenance.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer various support packages including website maintenance, updates, hosting support, and technical assistance. We believe in building long-term relationships with our clients.'
    },
    {
      question: 'Can you help with SEO and digital marketing?',
      answer: 'Yes, we provide SEO optimization as part of our web development services and offer digital strategy consulting to help improve your online presence and reach your target audience effectively.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern, industry-standard technologies including React, Node.js, HTML5, CSS3, JavaScript, and various CMS platforms. We always choose the best technology stack for each specific project.'
    },
    {
      question: 'How do you handle revisions and feedback?',
      answer: 'We include a specific number of revision rounds in our project proposals. We encourage regular feedback throughout the process and use collaborative tools to ensure clear communication and efficient revision handling.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers. Find everything you need to know about working with BoldHue.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
