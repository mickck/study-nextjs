import Link from "next/link";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  let name = "Kim";
  return (
    <html lang="en" className={nunito.className}>
      <body>
        <div className="main-wrapper">
          <header className="header">
            <div className="header-left">
              <h1 className="title">Tomato Fresh</h1>
              <p className="title-sub">by {name}</p>
            </div>
            <div className="header-right">
              <Link href="/">Home</Link>
              <Link href="/list">List</Link>
              <Link href="/cart">Cart</Link>
            </div>
          </header>

          {children}
        </div>
        <footer className="footer">
          <h4 className="title">Tomato Fresh Footer</h4>
          <p>by {name} | Portfolio</p>
        </footer>
      </body>
    </html>
  );
}
