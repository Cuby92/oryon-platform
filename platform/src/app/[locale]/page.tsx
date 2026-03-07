import styles from "./page.module.css";
import { useTranslations } from 'next-intl';
import { routing } from '../../i18n/routing';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className={styles.page}>
      <h1>{t('Welcome')}</h1>
    </div>
  );
}
