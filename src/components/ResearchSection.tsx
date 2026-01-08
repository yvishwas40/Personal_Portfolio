import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { research } from "@/data/portfolioData";
import { FileText, Quote, ExternalLink } from "lucide-react";

const ResearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Publications</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Research & <span className="text-gradient">Papers</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Academic contributions and published research in AI, systems, and emerging technologies.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {research.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                {/* Decorative Quote */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="w-24 h-24" />
                </div>

                <div className="relative flex flex-col md:flex-row md:items-start gap-4">
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: -5, scale: 1.05 }}
                  >
                    <FileText className="w-6 h-6 text-accent" />
                  </motion.div>

                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="font-display text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {paper.title}
                    </h3>

                    {/* Publication & Year */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-sm text-primary font-medium">
                        {paper.publication}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{paper.year}</span>
                      <span className="text-muted-foreground">•</span>
                    </div>

                    {/* Abstract */}
                    <p className="text-muted-foreground text-sm mb-4">
                      {paper.abstract}
                    </p>

                    {/* Link */}
                    <motion.a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                      whileHover={{ x: 5 }}
                    >
                      link <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
