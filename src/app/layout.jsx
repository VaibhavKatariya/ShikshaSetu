import "./globals.css";

export const metadata = {
  title: "Async Crew",
  description: "Learning Dashboard.",
  creator: "Team Async Crew"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
