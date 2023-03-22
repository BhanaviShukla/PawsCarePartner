import React from 'react';
import { OneColumnLayout } from '@layout/one-column-layout';
import { FormReduxExampleScreen } from '@screens/form-redux/screen';
import { Seo } from '@components/base/seo';

export default function Example() {
  return (
    <OneColumnLayout>
      <Seo title='Form Example' description='Form redux examples' />
      <FormReduxExampleScreen />
    </OneColumnLayout>
  );
}
