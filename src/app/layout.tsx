import LayoutBody from "@/_components/LayoutBody";
import "./globals.css";
import MainHeader from "@/_components/MainHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutBody>
          <MainHeader />
          {children}
        </LayoutBody>
      </body>
    </html>
  );
}
