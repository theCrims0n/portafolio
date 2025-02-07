import type { Metadata } from "next";
import "./globals.css";
import '@fontsource-variable/onest';

export const metadata: Metadata = {
  title: "Portafolio Miguel Angel Salomon - Desarrollador de software.",
  description: "Portafolio sobre mi experiencia profesional, disfruta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  className="scroll-smooth">
      <body
        className={`antialiased `}>
        {children}
      </body>
    </html>
  );
}
