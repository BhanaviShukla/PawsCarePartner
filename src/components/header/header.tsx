import styles from '@styles/Home.module.css';
import { BaseLink } from '@components/base/link';
import { useRouter } from 'next/router';
import { useAppTranslation } from '@hooks/use-app-translation';

export function Header() {
  const { pathname, query } = useRouter();
  const trans = useAppTranslation();

  return (
    <header className='flex items-center justify-between bg-cyan-500 p-3'>
      <BaseLink testId='welcome-header-link' href='/'>
        <h1 className={styles.title}>{trans('page_title', '')}</h1>
      </BaseLink>
      <div>
        <BaseLink
          testId={'locale-to-arabic'}
          href={{
            pathname,
            query
          }}
          locale='ar'
          className='mx-1.5 rounded border p-1.5'
        >
          {trans('ar_button')}
        </BaseLink>
        <BaseLink
          testId={'locale-to-english'}
          href={{
            pathname,
            query
          }}
          locale='en'
          className='mx-1.5 rounded border p-1.5'
        >
          {trans('en_button')}
        </BaseLink>
      </div>
    </header>
  );
}
