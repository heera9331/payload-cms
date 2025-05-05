import { GlobalConfig } from "payload";
import Header from "./blocks/header";
import Footer from "./blocks/footer";

export const HeaderFooterGlobal: GlobalConfig = {
  slug: "header-footer",
  access: {
    read: () => true,
  },
  fields: [
    {
      access: {
        read: () => true,
      },

      name: "layout",
      type: "blocks",
      blocks: [Header, Footer],
    },
  ],
};
