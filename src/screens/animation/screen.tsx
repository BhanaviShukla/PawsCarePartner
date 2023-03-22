import React from 'react';
import { Star } from '@screens/animation/components/star';
import { NumbersAnimated } from '@screens/animation/components/numbers-animated';

export function AnimationExampleScreen() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '60px',
        flex: 1
      }}
    >
      <NumbersAnimated />
      <Star />
    </div>
  );
}
