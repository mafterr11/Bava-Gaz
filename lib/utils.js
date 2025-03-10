import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "BAVA GAZ CONSTRUCT - Lider în Instalații de Gaze Naturale",
  description = "Descoperiți excelența și siguranța în instalații de gaze naturale cu BAVA GAZ CONSTRUCT. Oferim soluții complete pentru extinderi, branșamente și întreținerea instalațiilor de gaze, dar si multe altele.",
  keywords = "BAVA GAZ CONSTRUCT, instalații gaze naturale, extinderi rețea gaze, branșamente gaze, verificări gaze, revizii centrale termice, consultanță tehnică, gaze România",
  image = "/logo.png",
  icons = "/logo.png",
} = {}) {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      site: "https://bavagazconstruct.ro/",
      description,
      images: [image],
      creator: "@myriad-tech",
    },
    icons,
    metadataBase: new URL("https://bavagazconstruct.ro/"),
  };
}
