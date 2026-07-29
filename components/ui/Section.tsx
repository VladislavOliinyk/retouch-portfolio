// components/ui/Section.tsx

import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`
        py-2
        lg:py-0
        ${className}
      `}
    >
      {children}
    </section>
  );
}