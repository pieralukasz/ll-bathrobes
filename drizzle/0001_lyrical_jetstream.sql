ALTER TABLE "ll-bathrobes_categories" DROP CONSTRAINT "ll-bathrobes_categories_name_unique";--> statement-breakpoint
ALTER TABLE "ll-bathrobes_products" DROP CONSTRAINT "ll-bathrobes_products_ean_unique";--> statement-breakpoint
ALTER TABLE "ll-bathrobes_categories" ADD COLUMN "created_at" timestamp with time zone NOT NULL;--> statement-breakpoint
ALTER TABLE "ll-bathrobes_categories" ADD COLUMN "updated_at" timestamp with time zone;