import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-400">
            Kontakt Oss
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            La oss diskutere hvordan vi kan hjelpe deg med å realisere dine digitale prosjekter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-emerald-400">
              Start et prosjekt
            </h3>
            <p className="text-gray-300 mb-8">
              Fortell oss om ditt prosjekt, og vi vil hjelpe deg med å finne den beste løsningen
              for dine behov. Vi tilbyr skreddersydde systemer og applikasjoner som driver
              forretningsutvikling.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="text-emerald-400 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-white">E-post</h4>
                  <a
                    href="mailto:kontakt@tvela.no"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    hei@tvela.no
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-emerald-400 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-white">Telefon</h4>
                  <a
                    href="tel:+4799999999"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    +47 959 61 415
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-emerald-400 mt-1" size={20} />
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
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Navn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  E-post
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Beskjed
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
              >
                Send Melding
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
