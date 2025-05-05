import { Block } from "payload";

const Footer: Block = {
  slug: "footer",
  fields: [
    {
      name: "footerText",
      type: "text",
      required: true,
    },
    {
      name: "socialLinks",
      type: "array",
      fields: [
        {
          name: "platform",
          type: "text",
        },
        {
          name: "url",
          type: "text",
        },
      ],
    },
  ],
};

export default Footer;
