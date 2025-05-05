import { axios } from "@/lib/axios";

export async function getPagesBySlug(slug: string) {
  try {
    const response = await axios.get(`/api/pages`, {
      params: {
        where: {
          slug: {
            equals: slug,
          },
        },
      },
    });

    const posts = response.data.docs;

    if (posts.length > 0) {
      return posts[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getHeader() {
  const res = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/globals/header-footer`,
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYLOAD_API_KEY}`,
      },
      cache: "no-store",
    }
  );

  const data = await res.json();

  // Extract header block from layout
  const headerBlock = data.layout?.find(
    (block) => block.blockType === "header"
  );

  return headerBlock || null;
}

export async function getFooter() {
  const res = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/globals/header-footer`,
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYLOAD_API_KEY}`,
      },
      cache: "no-store",
    }
  );

  const data = await res.json();

  // Extract header block from layout
  const headerBlock = data.layout?.find(
    (block) => block.blockType === "footer"
  );

  return headerBlock || null;
}
