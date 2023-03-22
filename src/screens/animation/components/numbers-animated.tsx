import { animated, config, useSpring } from '@react-spring/web';
import React, { useState } from 'react';

export function NumbersAnimated() {
  const [flip, setFlip] = useState(false);
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number: 1,
    delay: 200,
    config: config.molasses,
    onRest: () => setFlip(!flip)
  });
  return <animated.div>{number.to((n) => n.toFixed(2))}</animated.div>;
}
