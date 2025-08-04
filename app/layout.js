import "./globals.css";
import "../public/font/stylesheet.css"
import Header from "./Header/page";
import Footer from "./Footer/page";
import TopButton from "./components/TopButton"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Header />
        <main>{children}</main>
        <TopButton />
        <Footer />
      </body>
    </html>
  );
}

