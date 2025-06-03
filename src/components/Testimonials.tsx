import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anders Berg",
    role: "IT-Sjef",
    company: "Nordic Bank",
    content:
      "Tvela har gjennomført omfattende sikkerhetsvurderinger av våre systemer og identifisert kritiske sårbarheter vi ikke var klar over. Deres ekspertise og profesjonalitet er imponerende.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Maria Hansen",
    role: "Sikkerhetssjef",
    company: "TechCorp AS",
    content:
      "Deres penetrasjonstesting og sikkerhetsvurderinger har vært uvurderlige for vår sikkerhetsstrategi. Vi føler oss nå mye bedre forberedt mot digitale trusler.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Erik Nilsen",
    role: "CTO",
    company: "Innovate Solutions",
    content:
      "Tvela's sikkerhetsopplæring har transformert hvordan våre ansatte håndterer sensitive data. Deres tilnærming til cybersikkerhet er både omfattende og praktisk.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
  },
];

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id='testimonials' className='py-20 bg-navy-950 text-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-emerald-400'>
            Kundeerfaringer
          </h2>
          <div className='w-20 h-1 bg-emerald-500 mx-auto mb-6'></div>
          <p className='text-xl text-gray-300'>
            Hva våre kunder sier om våre sikkerhetstjenester.
          </p>
        </div>

        <div className='relative max-w-4xl mx-auto'>
          <div className='relative overflow-hidden bg-white rounded-xl shadow-lg p-8 md:p-12'>
            <Quote
              className='absolute text-emerald-100 top-6 left-6'
              size={60}
            />

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10'>
              <div className='md:col-span-1 flex justify-center'>
                <div className='relative'>
                  <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-50'>
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white'>
                    <Quote size={16} />
                  </div>
                </div>
              </div>

              <div className='md:col-span-2'>
                <div className='mb-6'>
                  <p className='text-lg text-gray-700 italic'>
                    "{testimonials[currentTestimonial].content}"
                  </p>
                </div>
                <div>
                  <h4 className='text-xl font-bold text-navy-900'>
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className='text-gray-600'>
                    {testimonials[currentTestimonial].role},{" "}
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center mt-8 space-x-4'>
            <button
              onClick={prevTestimonial}
              className='w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-navy-700 hover:text-emerald-600 transition-colors'
              aria-label='Previous testimonial'>
              <ChevronLeft size={24} />
            </button>
            <div className='flex items-center space-x-2'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentTestimonial === index
                      ? "bg-emerald-500 scale-125"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}></button>
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className='w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-navy-700 hover:text-emerald-600 transition-colors'
              aria-label='Next testimonial'>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
