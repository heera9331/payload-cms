import CTA from "@/blocks/cta";
import Footer from "@/blocks/footer";
import Gallary from "@/blocks/gallary";
import Header from "@/blocks/header";
import Hero from "@/blocks/hero";
import Testimonial from "@/blocks/testimonial";
import Posts from "@/blocks/posts";
import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig<"pages"> = {
  slug: "pages",
  access: {
    read: () => true,
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ["title", "slug", "updatedAt"],
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      label: "Slug",
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      label: "Content",
      name: "content",
      type: "richText",
    },
    {
      name: "layout",
      type: "blocks",
      blocks: [Header, Footer, CTA, Gallary, Testimonial, Hero, Posts],
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
  ],
  hooks: {},
  versions: {
    drafts: {
      autosave: {
        interval: 1000, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
};
