// Immagini del sito dal pacco ufficiale "World of Warcraft Forever Reveal" (Blizzard Press Center, archiviato su Drive in
// OriginsMeta\30_ForeverMeta\10_Materiale_Blizzard). Decisione di Pierluigi del 10/10/2026: "con le grafiche di wow, ho
// scaricato il pacchetto apposta, sfruttiamolo". Nel repository (pubblico) vanno solo versioni ridotte per il web, mai gli
// originali: WebP, 16:9 per le copertine, 21:9 per la testata, 1200×630 per i social. Credito "© Blizzard Entertainment,
// Inc." sotto ogni immagine nelle pagine. I loghi del pacco non si usano (mai nell'identità del sito).
// Uso: node scripts/media-from-press-kit.mjs [cartella del pacco]
import { mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const kit = process.argv[2] ?? "G:/Il mio Drive/OriginsMeta/30_ForeverMeta/10_Materiale_Blizzard/WoW_Forever_Reveal_2026-10-10";
const out = "public/media";
mkdirSync(out, { recursive: true });

const S = "World of Warcraft Forever Reveal Screenshots";
const C = "World of Warcraft Forever Launch Cinematic Stills";
const K = "World of Warcraft Forever Reveal Faction Key Art";

/** [file del pacco, nome nel sito, larghezza, altezza, posizione del ritaglio] */
const jobs = [
  // testata della home e immagine social di riserva
  [`${C}/WoW_Forever_Cinematic_Still_4.jpeg`, "hero-sky-isles.webp", 2400, 1000, "centre"],
  [`${K}/WoW_Forever_Announce_Key_Art_-_Alliance.jpg`, "og-forever.jpg", 1200, 630, "centre"],
  // copertine delle guide (16:9)
  [`${K}/WoW_Forever_Announce_Key_Art_-_Alliance.jpg`, "cover-what-is.webp", 1600, 900, "centre"],
  [`${C}/WoW_Forever_Cinematic_Still_1.jpeg`, "cover-release-date.webp", 1600, 900, "centre"],
  [`${K}/WoW_Forever_Announce_Key_Art_-_Horde.jpg`, "cover-rulesets.webp", 1600, 900, "centre"],
  [`${S}/WoW_Forever_SCENIC_Announce_Race_Class_NewCombos_054.png`, "cover-races-classes.webp", 1600, 900, "centre"],
  [`${C}/WoW_Forever_Cinematic_Still_6.jpeg`, "cover-legacy.webp", 1600, 900, "centre"],
  [`${S}/WoW_Forever_SCENIC_Announce_Camping_Players_063.jpg`, "cover-camping.webp", 1600, 900, "centre"],
  [`${S}/WoW_Forever_Announce_Skyborne_Customization_096.jpg`, "cover-editions.webp", 1600, 900, "centre"],
  [`${S}/WoW_Camelot_Announce_Zones_Riverglades_037.jpg`, "cover-zones.webp", 1600, 900, "centre"],
  // copertine delle news
  [`${S}/WoW_Forever_Announce_Dungeon_Dalaran_073.jpg`, "news-dalaran.webp", 1600, 900, "centre"],
  [`${S}/WoW_Forever_Announce_BG_DarkspearIslands_093.jpg`, "news-darkspear-pvp.webp", 1600, 900, "centre"],
  [`${S}/WoW_Forever_SCENIC_Announce_Skyborne_Customization_061.png`, "news-skyborne.webp", 1600, 900, "centre"],
  // altre immagini per la home e le pagine
  [`${S}/WoW_Camelot_Announce_Zones_Zephras_047.jpg`, "zephras.webp", 1600, 900, "centre"],
  [`${S}/WoW_Forever_Announce_Raid_Hyjal_085.jpg`, "hyjal.webp", 1600, 900, "centre"],
  [`${S}/WoW_Forever_Announce_BG_DarkspearIslands_090.jpg`, "darkspear.webp", 1600, 900, "centre"],
];

for (const [src, name, width, height, position] of jobs) {
  const path = join(kit, src);
  if (!existsSync(path)) {
    console.log(`manca: ${src}`);
    continue;
  }
  const img = sharp(path).resize({ width, height, fit: "cover", position });
  const file = join(out, name);
  if (name.endsWith(".jpg")) await img.jpeg({ quality: 82, mozjpeg: true }).toFile(file);
  else await img.webp({ quality: 78 }).toFile(file);
  console.log(`${name}`);
}
