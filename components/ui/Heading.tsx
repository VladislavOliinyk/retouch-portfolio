// components/ui/Heading.tsx

import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export default function Heading({
  children,
  className = "",
}: HeadingProps) {
  return (
    <h1
      className={`
        text-5xl
        md:text-6xl
        lg:text-7xl
        font-medium
        tracking-[-0.05em]
        leading-none
        ${className}
      `}
    >
      {children}
    </h1>
  );
}