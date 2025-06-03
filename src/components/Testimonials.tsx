import React from "react";
import { Star } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Vi har benyttet Tvela med utvikling av hjemmesiden vår og noen produktbilder. Vi er svært fornøyd med resultatet og de er alltid raskt tilgjengelig dersom vi ønsker forandringer. Anbefales veldig!",
      author: "Lillian Randby",
      role: "Innehaver, Valdres Hundesalong",
      rating: 5,
      image: "/img/lillian.jpg"
    },
    
  ];

  return (
    <section className="py-20 bg-navy-950 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-400">
            Hva Våre Kunder Sier
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Vi er stolte av å ha hjulpet mange bedrifter med å realisere deres digitale visjoner
          </p>
        </div>

        <div className={`grid gap-8 ${
          testimonials.length === 1 
            ? 'grid-cols-1 max-w-2xl mx-auto' 
            : testimonials.length === 2 
              ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-navy-800/50 p-8 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-colors"
            >
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-emerald-500/50">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                    <Star size={16} className="fill-white" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="font-bold text-white text-lg">{testimonial.author}</h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-emerald-400 fill-emerald-400"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
