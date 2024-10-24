import { TypeAnimation } from 'react-type-animation';

type WrapperItems = 'p' | 'div' | 'span' | 'strong' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b';

interface TypingProps {
  steps: (string | number)[];
  speed?: any;
  repeat?: boolean;
  wrapper?: WrapperItems;
}

export const Typing = (props: TypingProps) => {
  const { steps, speed = 80, repeat, wrapper = 'span' } = props;

  return (
    <TypeAnimation
      sequence={steps}
      speed={speed}
      wrapper={wrapper}
      repeat={repeat ? Infinity : 1}
      cursor={false}
    />
  );
};
