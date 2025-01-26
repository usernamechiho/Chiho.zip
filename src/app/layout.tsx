import "./globals.css";

import localFont from "next/font/local";

import { MainHeader } from "./_components";
import AnimatedPageContent from "./_components/AnimatedPageContent";
import LayoutBody from "./_components/LayoutBody";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={pretendard.className}>
        <LayoutBody>
          <MainHeader />

          <AnimatedPageContent>{children}</AnimatedPageContent>
        </LayoutBody>
      </body>
    </html>
  );
}
