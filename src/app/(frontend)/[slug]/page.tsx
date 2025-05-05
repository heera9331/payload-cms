import type { Metadata } from "next";
import configPromise from "@payload-config";
import { getPayload, type RequiredDataFromCollectionSlug } from "payload";
import React, { cache } from "react";
import { draftMode } from "next/headers";
import { RichText } from "@payloadcms/richtext-lexical/react";
import "../../app.style.css";
import LayoutRenderer from "@/components/LayoutRenderer";

type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

const Page = async ({ params: paramsPromise }: Args) => {
  const payload = await getPayload({ config: configPromise });
  const pages = await payload.find({
    collection: "pages",
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  });

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== "home";
    })
    .map(({ slug }) => {
      return { slug };
    });

  const { slug = "home" } = await paramsPromise;
  const url = "/" + slug;
  // const page = await getPagesBySlug(slug);

  const page = await queryPageBySlug({
    slug,
  });

  const { title, content } = page;

  return (
    <main className="mx-auto max-w-7xl">
      <div>
        <h1 className="page-title font-bold underline text-3xl py-2">
          {title}
        </h1>
      </div>
      {/* Render Rich Text Content */}
      <section>
        <div className="no-tailwind prose prose-lg dark:prose-invert max-w-none">
          <RichText data={content} />
        </div>
      </section>

      <section>
        <LayoutRenderer layout={page?.layout} />
      </section>
    </main>
  );
};

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: "pages",
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});

export default Page;
