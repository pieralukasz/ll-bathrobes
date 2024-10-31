import { db } from ".";
import { products } from "./schema";
import { syncXMLWithDBDrizzle } from "./utils";

async function seed() {
  await db.delete(products);

  await syncXMLWithDBDrizzle();

  console.log("Database has been seeded 🌱");
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
