// components/ui/Text.tsx

import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
};

export default function Text({
  children,
  className = "",
}: TextProps) {
  return (
    <p
      className={`
        text-base
        leading-7
        text-neutral-600
        ${className}
      `}
    >
      {children}
    </p>
  );
}