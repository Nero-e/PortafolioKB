import { forwardRef } from 'react';

export const Greeting = forwardRef<HTMLParagraphElement, React.ComponentProps<'p'>>(
  function Greeting(props, ref) {
    return (
      <p ref={ref} className="text-2xl/3xl font-bold text-tekgelet" {...props}>
        {/* 👋  */}
        ¡Hola!, Soy-
      </p>
    );
  }
);
