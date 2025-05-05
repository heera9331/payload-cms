import { Block } from "payload";

const CTA: Block = {
  slug: "cta",
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "subheading", type: "textarea" },
    {
      name: "button",
      type: "group",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "url", type: "text", required: true },
      ],
    },
  ],
};

export default CTA;
