import { Block } from "payload";

const Hero: Block = {
  slug: "hero",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "link",
      type: "group",
      fields: [
        {
          name: "label",
          type: "text",
        },
        {
          name: "url",
          type: "text",
        },
      ],
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default Hero;
