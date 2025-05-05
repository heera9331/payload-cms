import { Block } from "payload";

const Gallary: Block = {
  slug: "gallery",
  fields: [
    {
      name: "images",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "caption",
          type: "text",
        },
      ],
    },
  ],
};

export default Gallary;
