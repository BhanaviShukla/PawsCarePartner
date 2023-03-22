import styles from '../styles/Home.module.css';
import { OneColumnLayout } from '@layout/one-column-layout';
import { BaseLink } from '@components/base/link';
import React from 'react';
import { Seo } from '@components/base/seo';
import { useAppTranslation } from '@hooks/use-app-translation';

function Home() {
  const trans = useAppTranslation('home-page');

  return (
    <OneColumnLayout mainClassName={styles.flexCentered}>
      <Seo title='Create Next App' description='Home page' />

      <p className={styles.description}>{trans('header')}</p>

      <div className={styles.grid}>
        <BaseLink testId='animation-example-link' href='/animation/example' className={styles.card}>
          <h2>Animation &rarr;</h2>
          <p>Find Implementation of @react-spring/web </p>
        </BaseLink>

        <BaseLink testId='form-redux-example-link' href='/form-redux/example' className={styles.card}>
          <h2>Form with Redux &rarr;</h2>
          <p>Form Implementation with Redux and form validation using @react-hook-form </p>
        </BaseLink>

        <BaseLink testId='http-example-link' href='/http/example' className={styles.card}>
          <h2>REST API &rarr;</h2>
          <p>REST API calls using @swr </p>
        </BaseLink>

        <BaseLink testId='http-ssr-example-link' href='/http-ssr/example' className={styles.card}>
          <h2>REST API SSR &rarr;</h2>
          <p>REST API calls using @swr with SSR </p>
        </BaseLink>
      </div>
    </OneColumnLayout>
  );
}

export default Home;
