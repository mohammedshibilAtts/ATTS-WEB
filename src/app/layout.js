import Navbar from '@/components/common/navbar/navbar';
import './globals.css';
import Footer from '@/components/common/footer/footer';
import { Unbounded, Merriweather_Sans } from "next/font/google";

// Specify subsets explicitly
const raleway = Unbounded({
  variable: "--display-font",
  subsets: ["latin", "latin-ext"], // Specify subsets
});

const merriweather = Merriweather_Sans({
  variable: "--body-font",
  subsets: ["latin", "latin-ext"], // Specify subsets
});

export default function RootLayout({ children }) {
  return (
    <html className={`${raleway.variable} ${merriweather.variable}`}>
      <body>
        <Navbar />
        <main className="flex flex-col items-center justify-center bg-white">
          <div className="w-full big:flex flex-col big:justify-center big:items-center big:container">
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
