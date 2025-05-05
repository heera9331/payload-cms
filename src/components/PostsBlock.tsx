"use client";

import React from "react";

export default function PostsBlock({
  heading,
  selectedPosts,
  layoutStyle,
}: any) {
  return (
    <section className="my-12">
      {heading && <h2 className="text-2xl font-bold mb-6">{heading}</h2>}
      <div
        className={`grid gap-6 ${layoutStyle === "grid" ? "grid-cols-3" : "grid-cols-1"}`}
      >
        {selectedPosts?.map((post: any) => {
          console.log(post);

          return (
            <div
              key={post.id || post._id}
              className="border p-4 rounded-xl shadow-md"
            >
              <div className="flex flex-col gap-2">
                <img src={post?.featuredImage?.url} alt="" className="rounded-md shadow-md h-[250px] object-cover" />
                <a href="#">
                  <h3 className="font-semibold text-2xl font-semibold">
                    {post?.title}
                  </h3>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
