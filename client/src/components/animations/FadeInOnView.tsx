import { motion } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function FadeInOnView({ children, className = "" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default FadeInOnView;
