import { Block } from "payload";

const Posts: Block = {
  slug: "postsBlock",
  labels: {
    singular: "Posts Block",
    plural: "Posts Blocks",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: false,
    },
    {
      name: "selectedPosts",
      type: "relationship",
      relationTo: "posts",
      hasMany: true,
      required: true,
    },
    {
      name: "layoutStyle",
      type: "select",
      options: [
        {
          label: "Grid",
          value: "grid",
        },
        {
          label: "Slider",
          value: "slider",
        },
        {
          label: "List",
          value: "list",
        },
      ],
      defaultValue: "grid",
      required: false,
    },
  ],
};

export default Posts;
