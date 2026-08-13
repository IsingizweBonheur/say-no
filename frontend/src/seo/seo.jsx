import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Say No to Drug | Drug Abuse Prevention",
  description = "Say No to Drug is an awareness initiative dedicated to preventing drug abuse, educating communities, and promoting healthy, drug-free lives.",
  keywords =
    "Say No to Drug, drug abuse prevention, drug awareness, drug prevention, Rwanda, drug-free community",
  image = "https://antidrug.com/og-image.png",
  url = "https://antidrug.com/",
}) {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Say No to Drug" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Mobile */}
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
}