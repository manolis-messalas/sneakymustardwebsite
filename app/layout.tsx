import "../styles/global.css";
// import { DefaultSeo } from "next-seo";

const DEFAULT_SEO = {
  title: "Sneaky Mustard",
  description: "Official website of Sneaky Mustard – Explore band's music, merch, tour dates, announcements, media and more",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sneakymustard.com/",
    title: "Sneaky Mustard",
    description: "Official website of Sneaky Mustard – Explore band's music, merch, tour dates, announcements, media and more",
    images: [
      {
        url: "/images/SM_Logo_5-09.jpg",
        width: 1200,
        height: 630,
        alt: "Sneaky Mustard",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*<DefaultSeo {...DEFAULT_SEO} />*/}
      <body className="bg-black text-white">
        <main>{children}</main>
      </body>
    </html>
  );
}
