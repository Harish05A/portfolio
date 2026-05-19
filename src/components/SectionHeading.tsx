import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p
          className="section-subtitle"
          style={{
            margin: align === "center" ? "0.5rem auto 0" : "0.5rem 0 0",
            textAlign: align === "center" ? "center" : "left",
          }}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 flex ${align === "center" ? "justify-center" : "justify-start"}`}
      >
        <div
          className="h-1 w-16 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, var(--color-accent), var(--color-accent-light))",
          }}
        />
      </div>
    </motion.div>
  );
}
