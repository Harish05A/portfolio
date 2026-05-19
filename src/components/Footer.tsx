import { personalInfo } from "../data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 pt-12 pb-24 md:pb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-lg font-bold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              <span className="gradient-text">&lt;</span>
              Harish
              <span className="gradient-text"> /&gt;</span>
            </a>
            <p
              className="text-sm mt-1"
              style={{ color: "var(--text-secondary)" }}
            >
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl transition-all duration-200 hover:scale-110"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                color: "var(--text-secondary)",
              }}
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl transition-all duration-200 hover:scale-110"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                color: "var(--text-secondary)",
              }}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl transition-all duration-200 hover:scale-110"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                color: "var(--text-secondary)",
              }}
              aria-label="Email"
            >
              <HiOutlineEnvelope size={18} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-8 pt-6 border-t text-center text-sm"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--text-muted)",
          }}
        >
          © {year} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
