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
    name: "Lillian Randby",
    role: "Daglig Leder",
    company: "Satch Valdres",
    content:
      "Vi har benyttet Tvela med utvikling av hjemmesiden vår og produktbilder. Vi er svært fornøyd med resultatet og de er alltid raskt tilgjengelig dersom vi ønsker forandringer. Anbefales veldig!",
    image:
      "https://g.acdn.no/obscura/API/dynamic/r1/ece5/tr_1200_1200_s_f/0000/vald/2023/11/10/10/lillianrandby-22.jpg?chk=EC772E",
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
    <section id='testimonials' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-navy-900'>
            Referansekunder
          </h2>
          <div className='w-20 h-1 bg-emerald-500 mx-auto mb-6'></div>
          <p className='text-xl text-gray-600'>
            Hva har tidligere kunder sagt om samarbeidet med oss..
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
