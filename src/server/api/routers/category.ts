import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { categories } from "~/server/db/schema";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const categoryRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(categories).values({
        name: input.name,
      });
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    await sleep(5000);
    const category = await ctx.db.query.categories.findFirst({
      orderBy: (categories, { desc }) => [desc(categories.createdAt)],
    });

    return category ?? null;
  }),
});
