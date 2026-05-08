import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "53dzg6zi",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  apiVersion: "2026-05-08",
  useCdn: true,
});
