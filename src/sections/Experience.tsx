import { motion } from "framer-motion";
import {
  HiOutlineBriefcase,
  HiOutlineTrophy,
  HiOutlineCodeBracketSquare,
} from "react-icons/hi2";
import { experience, achievements } from "../data/portfolio";
import { fadeInUp, staggerContainer } from "../utils/animations";
import SectionHeading from "../components/SectionHeading";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "../utils/ThemeContext";

export default function Experience() {
  const { theme } = useTheme();

  return (
    <section id="experience">
      <div className="section-container">
        <SectionHeading
          title="Experience & Achievements"
          subtitle="Professional experience, awards, and contributions that define my journey."
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <HiOutlineBriefcase
                size={22}
                style={{ color: "var(--color-accent)" }}
              />
              <h3
                className="text-lg font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Professional Experience
              </h3>
            </div>

            <div className="relative pl-10 space-y-10">
              {/* Timeline line */}
              <div
                className="absolute left-[13px] top-2 bottom-2 w-0.5"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--color-accent), transparent)",
                }}
              />

              {experience.map((exp, i) => (
                <motion.div key={i} variants={fadeInUp} className="relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-10 top-5 w-3.5 h-3.5 rounded-full border-2 z-10"
                    style={{
                      borderColor: "var(--color-accent)",
                      backgroundColor: "var(--bg-primary)",
                    }}
                  />

                  <div className="glass-card p-7">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <h4
                        className="font-bold text-base"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {exp.role}
                      </h4>
                      <span
                        className="text-xs font-semibold px-3 py-1.5 rounded-full shrink-0 self-start"
                        style={{
                          backgroundColor: "var(--color-accent)",
                          color: "white",
                          fontFamily: "var(--font-mono)",
                          opacity: 0.85,
                        }}
                      >
                        {exp.duration}
                      </span>
                    </div>
                    <p
                      className="text-sm font-semibold mb-4"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {exp.company}
                    </p>
                    <ul className="space-y-3">
                      {exp.points.map((point, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{
                              backgroundColor: "var(--color-accent)",
                            }}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <HiOutlineTrophy
                size={22}
                style={{ color: "var(--color-accent)" }}
              />
              <h3
                className="text-lg font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Awards & Achievements
              </h3>
            </div>

            <div className="space-y-6">
              {achievements.map((ach, i) => (
                <motion.div key={i} variants={fadeInUp} className="glass-card p-7">
                  <div className="flex items-start gap-4">
                    <div
                      className="mt-0.5 p-2 rounded-lg shrink-0"
                      style={{
                        background:
                          ach.type === "award"
                            ? "linear-gradient(135deg, #f59e0b, #d97706)"
                            : "linear-gradient(135deg, var(--color-accent), var(--color-accent-light))",
                      }}
                    >
                      {ach.type === "award" ? (
                        <HiOutlineTrophy size={16} color="white" />
                      ) : (
                        <HiOutlineCodeBracketSquare size={16} color="white" />
                      )}
                    </div>
                    <div>
                      <h4
                        className="font-bold text-sm"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {ach.title}
                      </h4>
                      <p
                        className="mt-1.5 text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {ach.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* GitHub Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <HiOutlineCodeBracketSquare
              size={22}
              style={{ color: "var(--color-accent)" }}
            />
            <h3
              className="text-lg font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              GitHub Contributions
            </h3>
          </div>
          <div className="glass-card p-8 overflow-x-auto flex justify-center">
            <GitHubCalendar
              username="Harish05A"
              colorScheme={theme === "dark" ? "dark" : "light"}
              fontSize={12}
              blockSize={12}
              blockMargin={4}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
