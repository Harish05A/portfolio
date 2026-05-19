import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiOutlineDocumentArrowDown, HiOutlineEnvelope } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { personalInfo } from "../data/portfolio";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient blobs */}
      <div
        className="blob w-[500px] h-[500px] -top-40 -left-40"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
      <div
        className="blob w-[400px] h-[400px] -bottom-32 -right-32"
        style={{ backgroundColor: "var(--color-accent-light)" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="section-container relative z-10 text-center"
      >
        {/* Status badge */}
        <motion.div variants={fadeInUp} className="mb-10">
          <span
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              color: "var(--text-secondary)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]"
          style={{ color: "var(--text-primary)" }}
        >
          Hi, I'm{" "}
          <span className="gradient-text">Harish</span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          variants={fadeInUp}
          className="mt-8 text-lg sm:text-xl md:text-2xl font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          <TypeAnimation
            sequence={personalInfo.typingStrings.flatMap((s) => [s, 2000])}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            cursor={true}
          />
        </motion.div>

        {/* Summary */}
        <motion.p
          variants={fadeInUp}
          className="mt-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {personalInfo.summary.split(".")[0]}.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href={`/${personalInfo.resumeFileName}`}
            download
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))",
              boxShadow: "0 4px 20px rgba(99, 102, 241, 0.3)",
            }}
          >
            <HiOutlineDocumentArrowDown size={18} />
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            <HiOutlineEnvelope size={18} />
            Contact Me
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            <FaGithub size={18} />
            View Projects
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeInUp}
          className="mt-20 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
            style={{ border: "2px solid var(--border-color)" }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

