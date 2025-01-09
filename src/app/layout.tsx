import LayoutBody from "@/_components/LayoutBody";
import "./globals.css";
import MainHeader from "@/_components/MainHeader";
import localFont from "next/font/local";
import { AnimateLayoutProvider } from "@/_components/AnimateLayoutProvider";

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
    <html lang="en">
      <body className={pretendard.className}>
        <AnimateLayoutProvider>
          <LayoutBody>
            <MainHeader />
            {children}
          </LayoutBody>
        </AnimateLayoutProvider>
      </body>
    </html>
  );
}
