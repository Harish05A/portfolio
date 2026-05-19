import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolio";
import { staggerContainer, slideInLeft, slideInRight } from "../utils/animations";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: HiOutlineEnvelope,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: HiOutlinePhone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: HiOutlineMapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
    },
  ];

  const socials = [
    {
      icon: FaGithub,
      label: "GitHub",
      value: "Harish05A",
      href: personalInfo.github,
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Harish A",
      href: personalInfo.linkedin,
    },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Build mailto link with form data
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="section-container">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind, a question, or just want to say hello? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-14">
          {/* Contact info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={i}
                variants={slideInLeft}
                href={item.href}
                className="glass-card p-5 flex items-center gap-4 group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-accent), var(--color-accent-light))",
                  }}
                >
                  <item.icon size={18} color="white" />
                </div>
                <div>
                  <p
                    className="text-xs font-medium uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            <motion.div variants={slideInLeft} className="pt-4">
              <p
                className="text-xs font-medium uppercase tracking-wider mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Social Profiles
              </p>
              <div className="flex gap-4">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-3 transition-all duration-200 hover:scale-110"
                    aria-label={s.label}
                  >
                    <s.icon
                      size={20}
                      style={{ color: "var(--text-secondary)" }}
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 sm:p-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium uppercase tracking-wider mb-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      border: "1px solid var(--border-color)",
                      color: "var(--text-primary)",
                      // @ts-expect-error CSS variable
                      "--tw-ring-color": "var(--color-accent)",
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium uppercase tracking-wider mb-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      border: "1px solid var(--border-color)",
                      color: "var(--text-primary)",
                      // @ts-expect-error CSS variable
                      "--tw-ring-color": "var(--color-accent)",
                    }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-medium uppercase tracking-wider mb-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                    // @ts-expect-error CSS variable
                    "--tw-ring-color": "var(--color-accent)",
                  }}
                  placeholder="What's this about?"
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium uppercase tracking-wider mb-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none focus:ring-2"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                    // @ts-expect-error CSS variable
                    "--tw-ring-color": "var(--color-accent)",
                  }}
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))",
                  boxShadow: "0 4px 20px rgba(99, 102, 241, 0.3)",
                }}
              >
                <HiOutlinePaperAirplane size={16} />
                {submitted ? "Message Sent! ✓" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
