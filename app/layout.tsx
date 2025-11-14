import '@/app/ui/global.css';
import { inter } from 'app/ui/fonts'
// importing global style in my aplication

// layout.tsx is the main element

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* using this sintax every children will inherit the font's classname ( style ) */}
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
