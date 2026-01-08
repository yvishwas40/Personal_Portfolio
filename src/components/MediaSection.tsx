import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { mediaEvents } from "@/data/portfolioData";
import { Mic, Newspaper, Users2, Presentation } from "lucide-react";

const typeConfig = {
  talk: { icon: Mic, color: "text-primary", bg: "bg-primary/10" },
  media: { icon: Newspaper, color: "text-accent", bg: "bg-accent/10" },
  panel: { icon: Users2, color: "text-green-400", bg: "bg-green-400/10" },
  workshop: { icon: Presentation, color: "text-yellow-400", bg: "bg-yellow-400/10" },
};

const MediaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="media" className="py-24 relative bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Spotlight</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Media & <span className="text-gradient">Events</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Speaking engagements, media features, and community events.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {mediaEvents.map((event, index) => {
              const config = typeConfig[event.type as keyof typeof typeConfig];
              const Icon = config.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex items-start gap-6 mb-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1.5 translate-y-4 ring-4 ring-background" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      className="glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${config.bg} flex-shrink-0`}>
                          <Icon className={`w-5 h-5 ${config.color}`} />
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">{event.date}</span>
                          <h3 className="font-display text-lg font-semibold mt-1">
                            {event.title}
                          </h3>
                          <p className="text-sm text-primary font-medium mb-2">
                            {event.event}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
