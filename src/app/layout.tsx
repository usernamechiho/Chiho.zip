import LayoutBody from "@/_components/LayoutBody";
import LayoutHeader from "../_components/LayoutHeader";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutHeader />
        <LayoutBody>{children}</LayoutBody>
      </body>
    </html>
  );
}
