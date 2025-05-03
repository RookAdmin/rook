import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Create and export the client
export const client1 = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID_1,
  dataset: import.meta.env.VITE_SANITY_DATASET_2,
  apiVersion: "2024-03-20",
  useCdn: true,
});

export const client2 = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID_2,
  dataset: import.meta.env.VITE_SANITY_DATASET_2,
  apiVersion: "2024-03-20",
  useCdn: true,
});

export const client3 = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID_3,
    dataset: import.meta.env.VITE_SANITY_DATASET_3,
    apiVersion: "2024-03-20",
    useCdn: true,
  });

  export const client4 = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID_4,
    dataset: import.meta.env.VITE_SANITY_DATASET_4,
    apiVersion: "2024-03-20",
    useCdn: true,
  });

// Create the image URL builder with the client
const builder1 = imageUrlBuilder(client1);
const builder2 = imageUrlBuilder(client2);
const builder3 = imageUrlBuilder(client3);
const builder4 = imageUrlBuilder(client4);

export function urlForClient1(source: any) {
  return builder1.image(source);
}

export function urlForClient2(source: any) {
  return builder2.image(source);
}

export function urlForClient3(source: any) {
    return builder3.image(source);
  }

  export function urlForClient4(source: any) {
    return builder4.image(source);
  }
