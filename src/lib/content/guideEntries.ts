import type { GuideEntry } from "./guides";
import { guide as whatIs } from "./guideTexts/what-is-wow-forever";
import { guide as releaseDate } from "./guideTexts/wow-forever-release-date";
import { guide as rulesets } from "./guideTexts/wow-forever-rulesets";
import { guide as racesClasses } from "./guideTexts/wow-forever-races-classes";
import { guide as legacy } from "./guideTexts/wow-forever-legacy-system";
import { guide as camping } from "./guideTexts/wow-forever-camping-professions";
import { guide as editions } from "./guideTexts/wow-forever-editions-prices";
import { guide as world } from "./guideTexts/wow-forever-zones-dungeons-raids";

/** Le guide di ForeverMeta, una per file in guideTexts/, in inglese, italiano e spagnolo, ognuna con le sue fonti ufficiali. */
export const guideEntries: GuideEntry[] = [whatIs, releaseDate, rulesets, racesClasses, legacy, camping, editions, world];
