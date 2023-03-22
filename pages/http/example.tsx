import React from 'react';
import { OneColumnLayout } from '@layout/one-column-layout';
import { HttpExampleScreen } from '@screens/http/http-example-screen';
import { Seo } from '@components/base/seo';

export default function Example() {
  return (
    <OneColumnLayout>
      <Seo title='Apis Example' description='HTTP examples' />
      <HttpExampleScreen />
    </OneColumnLayout>
  );
}
