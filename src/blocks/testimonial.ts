import { Block } from "payload";

const Testimonial: Block = {
  slug: "testimonial",
  fields: [
    {
      name: "testimonials",
      type: "array",
      fields: [
        { name: "quote", type: "textarea", required: true },
        { name: "author", type: "text", required: true },
        { name: "position", type: "text" },
        {
          name: "photo",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};

export default Testimonial;
