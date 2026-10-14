import React from "react";

type Props = {
  id: string;
  labelledBy: string;
  children: React.ReactNode;
  className?: string;
};

const SectionFrame: React.FC<Props> = ({
  id,
  labelledBy,
  children,
  className = "",
}) => {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative scroll-mt-24 overflow-hidden py-20 lg:py-24 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-white bg-[length:32px_32px] opacity-[0.35]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass-400/35 to-transparent" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionFrame;
