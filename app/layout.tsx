import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Adithya Nair | Python Developer",
  description: "Cloud Automation Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}