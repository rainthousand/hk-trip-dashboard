import { readFile } from "node:fs/promises";

const [html, css, js] = await Promise.all([
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../styles.css", import.meta.url), "utf8"),
  readFile(new URL("../app.js", import.meta.url), "utf8")
]);

const required = ["days", "photos", "tasks", "guide"];
for (const id of required) {
  if (!html.includes(`id="${id}"`)) throw new Error(`Missing section: ${id}`);
}
if (!js.includes('id: "1006"')) throw new Error("Five-day itinerary data is incomplete");
if (!html.includes("Club SIM 套餐与续期")) throw new Error("Club SIM section is missing");
if (!html.includes("HSBC One")) throw new Error("HSBC guide is missing");
if (!css.includes("@media (max-width: 540px)")) throw new Error("Mobile styles are missing");
console.log("OK: structure, itinerary, research modules and responsive styles are present.");
