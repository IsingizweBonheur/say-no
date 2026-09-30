import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Club Anti-Drugs | Drug Abuse Prevention in Rwanda",
  description = "Club Anti-Drugs promotes drug abuse prevention, awareness, education, and healthy choices among young people and communities in Rwanda.",
  keywords =
    "Club Anti-Drugs, drug abuse prevention Rwanda, drug awareness Rwanda, drug prevention, youth drug prevention, drug-free Rwanda, drug abuse awareness",
  image = "https://clubantidrugs.rw/og-image.png",
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

      {/* Canonical URL */}
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
        content={image}
      />

      <meta
        property="og:image:alt"
        content={title}
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

      <meta
        property="og:image:width"
        content="1200"
      />

      <meta
        property="og:image:height"
        content="630"
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
        content={image}
      />

      <meta
        name="twitter:image:alt"
        content={title}
      />

      {/* ================================
          MOBILE / BROWSER
      ================================= */}

      <meta
        name="theme-color"
        content="#ffffff"
      />

      <meta
        name="apple-mobile-web-app-capable"
        content="yes"
      />

      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="default"
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
          FAVICON
      ================================= */}

      <link
        rel="icon"
        type="image/png"
        href="/favicon.png"
      />

      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png"
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
          logo: "https://clubantidrugs.rw/logo.png",
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
