import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactCompiler: true,
};

const withNextIntl = createNextIntlPlugin('./src/i18n/requests.ts');

export default withNextIntl(nextConfig);
