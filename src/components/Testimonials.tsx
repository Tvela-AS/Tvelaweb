import React from "react";
import { Star } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Tvela AS utførte en omfattende penetrasjonstest av vår IT-infrastruktur. De avdekket kritiske sårbarheter vi ikke visste eksisterte og ga oss konkrete anbefalinger for forbedring. Profesjonell og grundig jobb!",
      author: "Erik Hansen",
      role: "IT-sjef, Finansbank AS",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Vår e-handelsplattform ble testet grundig av Tvela. De identifiserte sikkerhetshull i betalingssystemet vårt som kunne ha kostet oss millioner. Nå føler vi oss trygge på at kundene våre er beskyttet.",
      author: "Maria Johansen",
      role: "Sikkerhetssjef, TechStore Norge",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Social engineering-testen Tvela utførte viste oss hvor sårbare vi var for phishing-angrep. Takket være deres opplæring og anbefalinger har vi redusert risikoen betydelig.",
      author: "Lars Andersen",
      role: "HR-direktør, Innovate AS",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-400">
            Hva Våre Sikkerhetskunder Sier
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Vi er stolte av å ha hjulpet mange bedrifter med å sikre deres IT-infrastruktur mot cybertrusler
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
              className="bg-navy-800/50 p-8 rounded-xl border border-white/10 hover:border-red-500/50 transition-colors"
            >
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-red-500/50">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">
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
                    className="text-red-400 fill-red-400"
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
