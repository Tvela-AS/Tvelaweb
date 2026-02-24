import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, Users } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    try {
      await emailjs.sendForm(
        "service_z2wrtgs",
        "template_khy9o8p",
        formRef.current!,
        "x7ShLsT8YfhgSL0no"
      );

      setStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-navy-950 text-white relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-emerald-400"
          >
            Kontakt oss
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Vi samarbeider med daglig leder, styre, HR og advokat i saker som
            berører IT, sikkerhet eller digital gransking. Ta gjerne kontakt
            for en diskret og uforpliktende dialog.
          </p>
        </div>

        <div className="flex flex-col items-center mb-12">
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <span className="flex items-center gap-2">
              <Users size={18} className="text-emerald-400" />
              Daglig leder
            </span>
            <span className="flex items-center gap-2">
              <Users size={18} className="text-emerald-400" />
              Styre
            </span>
            <span className="flex items-center gap-2">
              <Users size={18} className="text-emerald-400" />
              HR
            </span>
            <span className="flex items-center gap-2">
              <Users size={18} className="text-emerald-400" />
              Advokat
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">
              Ta kontakt
            </h3>
            <p className="text-gray-300 mb-8">
              Send en melding eller ring oss. Vi behandler alle henvendelser
              diskret og profesjonelt.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-white">E-post</p>
                  <a
                    href="mailto:hei@tvela.no"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    hei@tvela.no
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-white">Telefon</p>
                  <a
                    href="tel:+4795961415"
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    +47 959 61 415
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-white">Adresse</p>
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
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
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
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                  placeholder="Ditt navn"
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
                  placeholder="din.epost@eksempel.no"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
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
                  placeholder="Kort beskrivelse av henvendelsen..."
                />
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className={`w-full bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  status.submitting
                    ? "opacity-50 cursor-not-allowed"
                    : ""
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
                    <span>Send melding</span>
                  </>
                )}
              </button>

              {status.submitted && (
                <p className="text-emerald-400 text-center text-sm">
                  Takk for din melding. Vi vil kontakte deg snart.
                </p>
              )}

              {status.error && (
                <p className="text-red-400 text-center text-sm">
                  Noe gikk galt. Vennligst prøv igjen eller kontakt oss på e-post
                  eller telefon.
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
