"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ComponentProps, ElementType, ReactNode } from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delay?: number;
} & Omit<ComponentProps<T>, "as" | "children" | "className">;

export function Reveal<T extends ElementType = "div">({
  as,
  children,
  className,
  delay = 0,
  ...props
}: RevealProps<T>) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion.create((as || "div") as ElementType);

  if (prefersReducedMotion) {
    const StaticComponent = (as || "div") as ElementType;
    return (
      <StaticComponent className={className} {...props}>
        {children}
      </StaticComponent>
    );
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </Component>
  );
}
