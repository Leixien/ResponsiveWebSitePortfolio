import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionTransitionProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const SectionTransition = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '',
}: SectionTransitionProps) => {
  
  const getDirectionAnimation = () => {
    switch(direction) {
      case 'up':
        return { y: 50 };
      case 'down':
        return { y: -50 };
      case 'left':
        return { x: 50 };
      case 'right':
        return { x: -50 };
      default:
        return { y: 50 };
    }
  };
  
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...getDirectionAnimation()
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: delay / 10,
        ease: "easeOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition;