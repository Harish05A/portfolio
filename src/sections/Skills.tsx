import { motion } from "framer-motion";
import { skillCategories } from "../data/portfolio";
import { fadeInUp, staggerContainer } from "../utils/animations";
import SectionHeading from "../components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-container">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I work with to build robust, scalable software solutions."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              className="glass-card p-8"
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="p-2.5 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-accent), var(--color-accent-light))",
                  }}
                >
                  <category.icon size={20} color="white" />
                </div>
                <h3
                  className="font-bold text-base"
                  style={{ color: "var(--text-primary)" }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill.name} className="skill-badge">
                    <skill.icon size={14} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
