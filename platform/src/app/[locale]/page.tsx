import styles from "./page.module.css";
import { useTranslations } from 'next-intl';
import { routing } from '../../i18n/routing';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Locale } from '@/i18n/types';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
{ params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  const t = await getTranslations({ locale, namespace: 'HomePage.metadata'});
  return {
    title: t('title'),
    description: t('description')
  }
}

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className={styles.page}>
      <h1>{t('Welcome')}</h1>
    </div>
  );
}
