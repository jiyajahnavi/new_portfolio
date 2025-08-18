import { useState } from "react";
import {
  BarChart,
  Brain,
  Bot,
  ServerCog,
  DatabaseZap,
  Database,
  Cloud,
  Settings2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const categoryIcons = {
  "Data Analysis": <BarChart size={20} className="mr-2 text-primary" />,
  "Programming Language": <Brain size={20} className="mr-2 text-primary" />,
  "Frontend": <Bot size={20} className="mr-2 text-primary" />,
  "Backend": <DatabaseZap size={20} className="mr-2 text-primary" />,
  Databases: <Database size={20} className="mr-2 text-primary" />,
  ML: <Cloud size={20} className="mr-2 text-primary" />,
  Tools: <Settings2 size={20} className="mr-2 text-primary" />,
};

const skills = [
  { name: "Statistics & Probability", level: 85, category: "Data Analysis" },
  { name: "Tableau", level: 85, category: "Data Analysis" },
  { name: "Power BI", level: 78, category: "Data Analysis" },
  { name: "Pandas / NumPy", level: 90, category: "Data Analysis" },
  { name: "Matplotlib / Seaborn", level: 85, category: "Data Analysis" },

  { name: "Scikit-learn", level: 90, category: "ML" },
  { name: "PyTorch / TensorFlow", level: 70, category: "ML" },

  { name: "HTML", level: 90, category: "Frontend" },
  { name: "CSS", level: 90, category: "Frontend" },
  { name: "Javascript", level: 90, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 80, category: "Frontend" },
  { name: "Bootstrap", level: 85, category: "Frontend" },

  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express.js", level: 80, category: "Backend" },

  { name: "Python", level: 80, category: "Programming Language" },
  { name: "Java", level: 85, category: "Programming Language" },
  { name: "C++", level: 75, category: "Programming Language" },
  { name: "C", level: 70, category: "Programming Language" },
  { name: "Javascript", level: 75, category: "Programming Language" },
  { name: "Typescript", level: 70, category: "Programming Language" },

  { name: "MongoDB", level: 80, category: "Dastabases" },
  { name: "MySQL", level: 85, category: "Databases" },

  { name: "Git & GitHub", level: 100, category: "Tools" },
  { name: "VS Code / Cursor", level: 100, category: "Tools" },
  { name: "PyCharm", level: 85, category: "Tools" },
  { name: "Notion (Docs / Planning)", level: 100, category: "Tools" },
];

const categories = [
  "All",
  "Data Analysis",
  "ML",
  "Frontend",
  "Backend",  
  "Databases",
  "Tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-2 flex items-center">
                {categoryIcons[skill.category]}
                <h3 className="font-semibold text-base">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
