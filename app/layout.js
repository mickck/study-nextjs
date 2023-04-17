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
        <header className="header">
          <div className="header-left">
            <h1 className="title">Tomato Fresh</h1>
            <p className="title-sub">by {name}</p>
          </div>
          <div className="header-right">
            <Link href="/">Home</Link>
            &nbsp;
            <Link href="/list">List</Link>
          </div>
        </header>

        {children}

        <footer className="footer">
          <h4 className="title">Tomato Fresh Footer</h4>
          <p className="title-sub">by {name} | Portfolio</p>
        </footer>
      </body>
    </html>
  );
}
