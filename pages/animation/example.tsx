import React from 'react';
import { OneColumnLayout } from '@layout/one-column-layout';
import { AnimationExampleScreen } from '@screens/animation/screen';
import { Seo } from '@components/base/seo';

export default function Example() {
  return (
    <OneColumnLayout>
      <Seo title='Animation Example' description='animation examples' />

      <AnimationExampleScreen />
    </OneColumnLayout>
  );
}
