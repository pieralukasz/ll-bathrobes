import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { categories } from "~/server/db/schema";

export const categoryRouter = createTRPCRouter({
  // Create route with input validation, using `publicProcedure`
  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(categories).values({
        name: input.name,
      });
    }),

  // Protected getLatest route, which requires authentication
  getLatest: publicProcedure.query(async ({ ctx }) => {
    const category = await ctx.db.query.categories.findFirst({
      orderBy: (categories, { desc }) => [desc(categories.createdAt)],
    });

    return category ?? null;
  }),
});
