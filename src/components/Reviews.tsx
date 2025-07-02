
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Reviews = () => {
  const reviews = [
 {
  name: 'The Vision Consultants',
  position: 'CEO, TechStart Inc.',
  image: '/v.jpg',
  rating: 5,
  review: 'BoldHue transformed our digital presence completely. Their attention to detail and creative approach exceeded our expectations. The website they built for us has significantly improved our conversion rates.'
}
,
    {
      name: 'Study Time Consultants',
      position: 'Founder, GreenLeaf Organics',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      review: 'Working with BoldHue was an absolute pleasure. They delivered a stunning e-commerce platform that perfectly represents our brand. The UI/UX design is intuitive and our customers love it.'
    },
    {
      name: 'V Study Abroad Consultants',
      position: 'Marketing Director, FitLife',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      review: 'The graphic design work BoldHue created for our marketing campaigns was outstanding. They truly understand how to create visuals that resonate with our target audience and drive engagement.'
    },
    {
      name: 'Hilal Pizza Points ',
      position: 'CTO, DataFlow Solutions',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      review: 'BoldHue\'s technical expertise is impressive. They built a complex web application for us with seamless functionality. Their communication throughout the project was excellent.'
    },
    {
      name: 'Cenphix',
      position: 'Owner, Artisan Boutique',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      review: 'The team at BoldHue created a beautiful online store that perfectly captures the essence of our brand. The design is elegant and the shopping experience is smooth and enjoyable.'
    },
    {
      name: 'HBAF',
      position: 'Product Manager, InnovateLab',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      review: 'BoldHue delivered exceptional UI/UX design for our mobile app. Their user-centered approach resulted in a 40% increase in user engagement. Highly recommended!'
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Reviews</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with BoldHue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.position}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic">{review.review}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
