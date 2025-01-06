import LayoutBody from "@/_components/LayoutBody";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutBody>{children}</LayoutBody>
      </body>
    </html>
  );
}
