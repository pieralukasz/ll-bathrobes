CREATE TABLE IF NOT EXISTS "ll-bathrobes_category" (
	"id" integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "ll-bathrobes_category_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(256),
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	CONSTRAINT "ll-bathrobes_category_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ll-bathrobes_product" (
	"id" integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "ll-bathrobes_product_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(256),
	"color" varchar(50),
	"size" varchar(50),
	"quantity" integer,
	"available" boolean DEFAULT true NOT NULL,
	"ean" varchar(50),
	"category_id" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	CONSTRAINT "ll-bathrobes_product_ean_unique" UNIQUE("ean")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ll-bathrobes_product" ADD CONSTRAINT "ll-bathrobes_product_category_id_ll-bathrobes_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."ll-bathrobes_category"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;