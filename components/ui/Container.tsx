// components/ui/Container.tsx

import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        w-full
        max-w-[1680px]
        mx-auto
        px-6
        sm:px-8
        lg:px-12
        xl:px-16
        ${className}
      `}
    >
      {children}
    </div>
  );
}