import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineMapPin,
  HiOutlineSparkles,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";
import { personalInfo, education } from "../data/portfolio";
import { staggerContainer, slideInLeft, slideInRight } from "../utils/animations";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  const interests = [
    { icon: HiOutlineRocketLaunch, text: "Mobile App Development" },
    { icon: HiOutlineSparkles, text: "AI & Machine Learning" },
    { icon: HiOutlineAcademicCap, text: "Software Engineering" },
  ];

  return (
    <section id="about" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="section-container">
        <SectionHeading
          title="About Me"
          subtitle="A brief introduction to who I am, what drives me, and what I'm building."
        />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Summary & Education */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={slideInLeft}>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {personalInfo.summary}
              </p>
            </motion.div>

            {/* Education */}
            <motion.div variants={slideInLeft} className="mt-10">
              <h3
                className="text-lg font-bold mb-6 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <HiOutlineAcademicCap
                  size={22}
                  style={{ color: "var(--color-accent)" }}
                />
                Education
              </h3>
              <div className="space-y-5">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="glass-card p-7"
                  >
                  <h4
                    className="font-semibold text-base"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {edu.degree}
                  </h4>
                  <p
                    className="text-sm mt-1 font-medium"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {edu.institution}
                  </p>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {edu.duration}
                  </p>
                  <p
                    className="text-sm mt-4 italic"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    "{edu.tagline}"
                  </p>
                </div>
              ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Info cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            {/* Location */}
            <motion.div variants={slideInRight} className="glass-card p-7">
              <div className="flex items-center gap-4">
                <div
                  className="p-2.5 rounded-xl shrink-0"
                  style={{
                    backgroundColor: "rgba(99, 102, 241, 0.15)",
                  }}
                >
                  <HiOutlineMapPin
                    size={22}
                    style={{ color: "var(--color-accent)" }}
                  />
                </div>
                <div>
                  <p
                    className="text-xs font-medium uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Location
                  </p>
                  <p
                    className="font-semibold mt-0.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={slideInRight} className="glass-card p-7">
              <h3
                className="text-lg font-bold mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                Interests & Focus Areas
              </h3>
              <div className="space-y-4">
                {interests.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl transition-colors duration-200"
                    style={{ backgroundColor: "var(--bg-primary)" }}
                  >
                    <item.icon
                      size={20}
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick facts */}
            <motion.div variants={slideInRight} className="glass-card p-7">
              <h3
                className="text-lg font-bold mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                What Drives Me
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                I thrive at the intersection of design and engineering — 
                building software that's not only functional but also 
                delightful to use. Whether it's architecting scalable 
                mobile apps or training ML models, I bring a 
                problem-solving mindset and a passion for continuous learning.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
