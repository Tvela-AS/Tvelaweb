import React, { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import SectionFrame from "./ui/SectionFrame";

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
    } catch {
      setStatus({ submitting: false, submitted: false, error: true });
    }
  };

  const fieldClass =
    "w-full border border-white/10 bg-ink-950 px-4 py-3 text-parchment-50 placeholder:text-parchment-400/50 focus:border-brass-400/50 focus:outline-none focus:ring-1 focus:ring-brass-400/40";

  return (
    <SectionFrame id="contact" labelledBy="contact-heading" className="bg-ink-950">
      <div className="mb-14 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brass-400">
          Henvendelse
        </p>
        <h2
          id="contact-heading"
          className="mb-4 text-3xl font-semibold text-parchment-50 md:text-4xl"
        >
          Kontakt oss
        </h2>
        <p className="text-lg leading-relaxed text-parchment-200/85">
          Ta kontakt for en fortrolig samtale. Oppgi så lite eller så mye du
          ønsker. Vi deler ikke henvendelsen med uvedkommende.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 font-serif text-2xl text-parchment-50">
            Send en fortrolig henvendelse
          </h3>
          <p className="mb-10 leading-relaxed text-parchment-200/80">
            Kort beskrivelse holder. Vi avklarer resten sammen. Skriv til{" "}
            <a href="mailto:hei@tvela.no" className="text-brass-300 hover:text-brass-200">
              hei@tvela.no
            </a>{" "}
            eller ring{" "}
            <a href="tel:+4795961415" className="text-brass-300 hover:text-brass-200">
              +47 959 61 415
            </a>
            .
          </p>

          <address className="not-italic space-y-5 text-parchment-200/85">
            <div className="flex gap-3">
              <Mail size={18} className="mt-1 text-brass-400" aria-hidden="true" />
              <div>
                <p className="text-sm text-parchment-400">E-post</p>
                <a href="mailto:hei@tvela.no" className="hover:text-brass-300">
                  hei@tvela.no
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone size={18} className="mt-1 text-brass-400" aria-hidden="true" />
              <div>
                <p className="text-sm text-parchment-400">Telefon</p>
                <a href="tel:+4795961415" className="hover:text-brass-300">
                  +47 959 61 415
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin size={18} className="mt-1 text-brass-400" aria-hidden="true" />
              <div>
                <p className="text-sm text-parchment-400">Adresse</p>
                <p>
                  Tvela AS
                  <br />
                  Valdresvegen 6
                  <br />
                  2900 Fagernes
                </p>
              </div>
            </div>
          </address>
        </div>

        <div className="border border-white/10 bg-ink-900/50 p-8">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5"
            aria-label="Fortrolig henvendelse"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-parchment-200">
                Navn
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={fieldClass}
                placeholder="Navn"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-parchment-200">
                E-post
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={fieldClass}
                placeholder="din.epost@eksempel.no"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-parchment-200">
                Melding
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${fieldClass} resize-none`}
                placeholder="Kort beskrivelse holder."
              />
            </div>
            <button
              type="submit"
              disabled={status.submitting}
              className={`inline-flex w-full items-center justify-center gap-2 bg-brass-500 py-3 font-medium text-ink-950 ${
                status.submitting ? "cursor-not-allowed opacity-50" : "hover:bg-brass-400"
              }`}
            >
              {status.submitting ? (
                "Sender..."
              ) : (
                <>
                  <Send size={18} aria-hidden="true" />
                  Send henvendelse
                </>
              )}
            </button>
            {status.submitted && (
              <p className="text-center text-brass-300" role="status">
                Takk. Vi tar kontakt så snart vi kan.
              </p>
            )}
            {status.error && (
              <p className="text-center text-red-400" role="alert">
                Noe gikk galt. Prøv igjen, eller send e-post direkte.
              </p>
            )}
          </form>
        </div>
      </div>
    </SectionFrame>
  );
};

export default Contact;
