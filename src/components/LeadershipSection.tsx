import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { leadershipRoles } from "@/data/portfolioData";
import { Users, Award, Code, Trophy } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Award,
  Code,
  Trophy,
};

const LeadershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="py-24 relative bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Experience</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Leadership <span className="text-gradient">Roles</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Positions where I've led teams, built communities, and created impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {leadershipRoles.map((role, index) => {
            const Icon = iconMap[role.icon] || Users;
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                  {/* Background Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                  
                  <div className="relative">
                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>

                    {/* Role & Organization */}
                    <h3 className="font-display text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                      {role.role}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-2">
                      {role.organization}
                    </p>

                    {/* Duration */}
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground mb-4">
                      {role.duration}
                    </span>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm">
                      {role.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
