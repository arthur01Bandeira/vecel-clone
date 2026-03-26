import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Vercel Clone",
  description: "Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}