import type { Metadata } from "next";
import "../globals.css";
import '@fontsource-variable/onest';
import React from "react";
import { TranslationsProvider } from '@neiderruiz/translate-files/next-js'
import i18nConfig from "../../../i18nConfig";
import { resourse } from "../dictonaries";

export const metadata: Metadata = {
  title: "Portafolio Miguel Angel Salomon - Desarrollador de software.",
  description: "Portafolio sobre mi experiencia profesional, disfruta.",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}

export default async function RootLayout({
  children,
  params
}: Readonly<Props>) {

  const { locale } = await params;
  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`antialiased `}>
        <TranslationsProvider fallbackLng={i18nConfig.locales} locale={locale} resources={resourse}>
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}