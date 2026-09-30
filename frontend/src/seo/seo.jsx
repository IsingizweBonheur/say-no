import { Helmet } from "react-helmet-async";
import logo from "../assets/logo.png";

export default function SEO({
  title = "Club Anti-Drugs | Drug Abuse Prevention in Rwanda",
  description = "Club Anti-Drugs promotes drug abuse prevention, awareness, education, and healthy choices among young people and communities in Rwanda.",
  keywords =
    "Club Anti-Drugs, drug abuse prevention Rwanda, drug awareness Rwanda, drug prevention, youth drug prevention, drug-free Rwanda, drug abuse awareness",
  url = "https://clubantidrugs.rw/",
  type = "website",
}) {
  const siteName = "Club Anti-Drugs";

  return (
    <Helmet>
      {/* ================================
          BASIC SEO
      ================================= */}

      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords}
      />

      <meta
        name="author"
        content={siteName}
      />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <meta
        name="googlebot"
        content="index, follow"
      />

      <meta
        name="bingbot"
        content="index, follow"
      />

      {/* Canonical */}
      <link
        rel="canonical"
        href={url}
      />

      {/* Language */}
      <meta
        httpEquiv="content-language"
        content="en"
      />

      {/* ================================
          OPEN GRAPH
      ================================= */}

      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:image"
        content={logo}
      />

      <meta
        property="og:image:alt"
        content={`${siteName} logo`}
      />

      <meta
        property="og:url"
        content={url}
      />

      <meta
        property="og:site_name"
        content={siteName}
      />

      <meta
        property="og:locale"
        content="en_RW"
      />

      {/* ================================
          TWITTER / X
      ================================= */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={logo}
      />

      <meta
        name="twitter:image:alt"
        content={`${siteName} logo`}
      />

      {/* ================================
          MOBILE / BROWSER
      ================================= */}

      <meta
        name="theme-color"
        content="#ffffff"
      />

      <meta
        name="apple-mobile-web-app-title"
        content={siteName}
      />

      {/* ================================
          REFERRER
      ================================= */}

      <meta
        name="referrer"
        content="strict-origin-when-cross-origin"
      />

      {/* ================================
          ORGANIZATION STRUCTURED DATA
      ================================= */}

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteName,
          url: "https://clubantidrugs.rw/",
          logo: logo,
          description:
            "Club Anti-Drugs promotes drug abuse prevention, awareness, education, and healthy choices among young people and communities in Rwanda.",
          areaServed: {
            "@type": "Country",
            name: "Rwanda",
          },
          knowsAbout: [
            "Drug abuse prevention",
            "Drug awareness",
            "Drug prevention",
            "Youth education",
            "Healthy lifestyles",
          ],
        })}
      </script>

      {/* ================================
          WEBSITE STRUCTURED DATA
      ================================= */}

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteName,
          url: "https://clubantidrugs.rw/",
          description: description,
          inLanguage: "en",
        })}
      </script>
    </Helmet>
  );
}
