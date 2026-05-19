import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { projects } from "../data/portfolio";
import type { Project } from "../data/portfolio";
import { fadeInUp, staggerContainer } from "../utils/animations";
import SectionHeading from "../components/SectionHeading";

type FilterType = "all" | "mobile" | "ml";

const filters: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Mobile", value: "mobile" },
  { label: "AI / ML", value: "ml" },
];

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      variants={fadeInUp}
      className="glass-card overflow-hidden flex flex-col"
    >
      {/* Gradient header bar */}
      <div
        className="h-1.5 w-full"
        style={{
          background:
            "linear-gradient(90deg, var(--color-accent), var(--color-accent-light))",
        }}
      />

      <div className="p-8 flex-1 flex flex-col">
        {/* Title */}
        <h3
          className="text-lg font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="mt-3 text-sm leading-relaxed flex-1"
          style={{ color: "var(--text-secondary)" }}
        >
          {expanded ? project.longDescription : project.description}
        </p>

        {/* Features (expanded) */}
        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 space-y-1.5 overflow-hidden"
            >
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  />
                  {feature}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-xs font-medium self-start transition-colors duration-200"
          style={{ color: "var(--color-accent)" }}
        >
          {expanded ? "Show less" : "Show more →"}
        </button>

        {/* Tech tags */}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-xs font-medium"
              style={{
                backgroundColor: "var(--code-bg)",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 pt-5 flex gap-4" style={{ borderTop: "1px solid var(--border-color)" }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              <FaGithub size={15} />
              Source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--color-accent)" }}
            >
              <HiOutlineArrowTopRightOnSquare size={15} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="section-container">
        <SectionHeading
          title="Projects"
          subtitle="A selection of projects I've designed, developed, and shipped."
        />

        {/* Filter tabs */}
        <div className="flex justify-center gap-4 mt-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className="relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={{
                color:
                  activeFilter === f.value
                    ? "white"
                    : "var(--text-primary)",
                backgroundColor:
                  activeFilter === f.value
                    ? "var(--color-accent)"
                    : "var(--bg-card)",
                border: `1.5px solid ${
                  activeFilter === f.value
                    ? "var(--color-accent)"
                    : "var(--border-color)"
                }`,
                boxShadow: activeFilter === f.value
                  ? "0 4px 12px rgba(99,102,241,0.35)"
                  : "none",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
