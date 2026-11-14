import { seedTypes } from "./seedTypes.mjs";
import { seedBusinesses } from "./seedBusiness.mjs";

async function seedAll() {
  await seedTypes();
  await seedBusinesses();
  console.log("✅ Sembrado completado.");
}

seedAll().catch((error) => {
  console.error("❌ Error durante el sembrado:", error);
  process.exitCode = 1;
});
