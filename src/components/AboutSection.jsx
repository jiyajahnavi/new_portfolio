import { BrainCircuit, Bot, Workflow, Cloud, ServerCog } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About <span className="text-primary"> Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              ML Enthusiast | Web Developer 
            </h3>

            <p className="text-muted-foreground">
              Hi, I am Jiya Jahnavi, a Computer Science and Engineering student at Amity University, aspiring to become a Data Scientist. My passion for programming comes from the belief that with the right logic and tools, I can make a computer do almost anything.
            </p>

            <p className="text-muted-foreground">
             I am currently exploring the fields of Machine Learning and Data Science, while also honing my skills as a Web Developer — building responsive, interactive, and modern websites. I focus on writing clean, scalable code and love working on real-world projects that make an impact.
            </p>
            <p className="text-muted-foreground">
I am also proud to be a Google Arcade Facilitator of Cohort 2, where I help others dive into cloud technologies and future-ready skills. Through this, I’m strengthening my knowledge in cloud, networking, AI agents, and team collaboration.
</p>
            

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
          >
            Download CV
          </a>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.1 }}
            className="grid grid-cols-1 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="gradient-border p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Google Arcade Facilitator</h4>
                  <p className="text-muted-foreground">
                   Completed the Google Arcade Facilitator Program Cohort 2, gaining hands-on experience in cloud technologies, networking, and AI tools while supporting peer learning.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Deloitte Technology Job Simulation </h4>
                  <p className="text-muted-foreground">
                   Completed Deloitte Technology Job Simulation on Forage, gaining practical insight into tech consulting and data analysis.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Udemy: Python for ML</h4>
                  <p className="text-muted-foreground">
                   Completed Udemy's Python for Machine Learning course covering Python basics, data handling, and ML with scikit-learn.
                  </p>
                </div>
              </div>
            </motion.div>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
};
