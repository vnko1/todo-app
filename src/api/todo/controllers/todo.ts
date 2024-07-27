/**
 * todo controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::todo.todo",
  ({ strapi }) => ({
    async find(ctx) {
      console.log(await super.find(ctx));
      return await super.find(ctx);
    },
  })
);
