import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/extras/ThemeProvider";

const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "700"], // Using 700 weight
  style: "normal", // Using normal style
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turbo Shop",
  description:
    "We specialize in turbocharger rebuilding, replacement, upgrades, and new turbochargers.",
  icons: "/logo-only.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${chakraPetch.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
