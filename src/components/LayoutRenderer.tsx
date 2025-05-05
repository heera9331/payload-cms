// components/LayoutRenderer.tsx
import React from "react";
import CTA from "@/components/CTA";
import PostsBlock from "@/components/PostsBlock";
import GalleryBlock from "@/components/GalleryBlock";
import TestimonialBlock from "@/components/TestimonialBlock";

export default function LayoutRenderer({ layout }: { layout: any[] }) {
  if (!layout) {
    return "Blocks not added";
  }

  return (
    <>
      {layout?.map((block) => {
        switch (block.blockType) {
          case "postsBlock":
            console.log(block);
            return <PostsBlock key={block.id} {...block} />;

          case "gallery":
            return <GalleryBlock key={block.id} {...block} />;

          case "testimonial":
            return <TestimonialBlock key={block.id} {...block} />;

          case "cta":
            return <CTA key={block.id} {...block} />;

          default:
            return null;
        }
      })}
    </>
  );
}
