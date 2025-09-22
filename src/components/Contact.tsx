import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    try {
      await emailjs.sendForm(
        'service_z2wrtgs', // Replace with your EmailJS service ID
        'template_khy9o8p', // Replace with your EmailJS template ID
        formRef.current!,
        'x7ShLsT8YfhgSL0no' // Replace with your EmailJS public key
      );

      setStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <section id="contact" className="py-20 bg-navy-950 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-400">
            Kontakt Oss for Sikkerhetsvurdering
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            La oss diskutere hvordan vi kan hjelpe deg med å sikre din IT-infrastruktur mot cybertrusler
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-red-400">
              Få Sikkerhetsvurdering
            </h3>
            <p className="text-gray-300 mb-8">
              Fortell oss om dine sikkerhetsbehov, og vi vil hjelpe deg med å identifisere og
              sikre sårbarheter i din IT-infrastruktur. Vi tilbyr omfattende penetrasjonstester,
              sikkerhetsauditer og sårbarhetsanalyser.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="text-red-400 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-white">E-post</h4>
                  <a
                    href="mailto:hei@tvela.no"
                    className="text-gray-300 hover:text-red-400 transition-colors"
                  >
                    hei@tvela.no
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-red-400 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-white">Telefon</h4>
                  <a
                    href="tel:+4795961415"
                    className="text-gray-300 hover:text-red-400 transition-colors"
                  >
                    +47 959 61 415
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-red-400 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-white">Adresse</h4>
                  <p className="text-gray-300">
                    Tvela AS<br />
                    Jernbanevegen 6<br />
                    2900 Fagernes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy-800/50 p-8 rounded-xl border border-white/10">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Navn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                  placeholder="Ditt navn"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-post
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                  placeholder="din.epost@eksempel.no"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Melding
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white resize-none"
                  placeholder="Fortell oss om dine sikkerhetsbehov..."
                />
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className={`w-full bg-red-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                  status.submitting
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-red-600 hover:scale-105'
                }`}
              >
                {status.submitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sender...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Melding</span>
                  </>
                )}
              </button>

              {status.submitted && (
                <p className="text-red-400 text-center">
                  Takk for din melding! Vi vil kontakte deg snart for å diskutere sikkerhetsvurderingen.
                </p>
              )}

              {status.error && (
                <p className="text-red-400 text-center">
                  Beklager, det oppstod en feil. Vennligst prøv igjen senere.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
