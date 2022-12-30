import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
export default function App({ Component, pageProps }: AppProps) {
  console.log("called");

  return (
    <>
      <DefaultSeo
        themeColor="#e50914"
        title="IMovies"
        description="Watch Imovies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more."
        canonical="https://www.imovies.ie/"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.imovies.ie/",
          siteName: "IMovies",
        }}
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: "Imovies",
          },
          {
            name: "application-name",
            content: "Imovies",
          },
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge; chrome=1",
          },
          {
            httpEquiv: "content-type",
            content: "en",
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1, maximum-scale=1",
          },
        ]}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
