import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction], scale: 0.98 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-14 border-b-4 border-brand-dark pb-6 pt-4 relative group">
      {subtitle && (
        <h3 className="inline-block bg-brand-green px-3 py-1 font-bold text-brand-dark text-[12px] uppercase tracking-widest border-2 border-brand-dark shadow-brutal mb-4 transform -rotate-1 group-hover:rotate-0 transition-transform">
          {subtitle} {title}
        </h3>
      )}
      <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase text-brand-dark">
        {title}
      </h2>
    </div>
  );
}
