import type { Locale } from "@/lib/i18n";
import type { Faq } from "./faq";

/**
 * Le risposte di /faq nelle tre lingue (stessi `id`, stesso ordine), scritte dai fatti delle fonti ufficiali raccolti il
 * 10/10/2026; ogni risposta porta alla guida che spiega di più.
 */
export const faqEntries: Record<Locale, Faq[]> = {
  en: [
    {
      id: "what-is",
      q: "What is World of Warcraft: Forever?",
      a: "A new World of Warcraft game from the team behind WoW Classic, set in a reimagined Azeroth with revamped gameplay and a level cap of 60. It adds the Skyborne race, new zones, nine dungeons, two raids, the Legacy System and Camping.",
      links: [{ path: "/guides/what-is-wow-forever", label: "What WoW Forever is" }],
    },
    {
      id: "release-date",
      q: "When does WoW Forever come out?",
      a: "On 4 November 2026 at 3:00 p.m. PST, which is midnight between 4 and 5 November in Central Europe. The beta runs until 21 October.",
      links: [
        { path: "/guides/wow-forever-release-date", label: "Release date and times" },
        { path: "/calendar", label: "Calendar" },
      ],
    },
    {
      id: "price",
      q: "Do I have to buy WoW Forever?",
      a: "No: it is included in a World of Warcraft Subscription or Game Time. The Skyborne Heroic Pack, Skyborne Epic Pack and Warcraft Forever Collection are optional upgrades (€29.99, €59.99 and €79.99 on the official shop on 10 October 2026).",
      links: [{ path: "/guides/wow-forever-editions-prices", label: "Editions and prices" }],
    },
    {
      id: "skyborne-access",
      q: "Can I play the Skyborne without paying for an upgrade?",
      a: "No. According to the official shop, the Skyborne race and their starting zone, Zephras Isle, require the Skyborne Heroic Pack or a higher edition.",
      links: [{ path: "/guides/wow-forever-races-classes", label: "Races and classes" }],
    },
    {
      id: "languages",
      q: "Which languages is WoW Forever in?",
      a: "The official shop lists English, Spanish (Spain and Latin America), Brazilian Portuguese, German, French, Russian, Korean and Traditional Chinese. Italian is not on the list.",
      links: [{ path: "/glossary", label: "Glossary in three languages" }],
    },
    {
      id: "beta",
      q: "How do I get into the beta?",
      a: "By invitation through the opt-in, or with the Skyborne Epic Pack or the Warcraft Forever Collection, which include beta access. The beta ends on 21 October 2026.",
      links: [{ path: "/guides/wow-forever-release-date", label: "Dates of the beta" }],
    },
    {
      id: "rulesets",
      q: "Can I change ruleset later?",
      a: "No: each ruleset is its own ecosystem and you need a new character to play on another one. The only exception is a Hardcore character who dies, which can move to another ruleset.",
      links: [{ path: "/guides/wow-forever-rulesets", label: "The four rulesets" }],
    },
    {
      id: "platforms",
      q: "Which platforms is WoW Forever on?",
      a: "PC and Mac, according to Blizzard's press fact sheet, with official gamepad support.",
      links: [{ path: "/guides/what-is-wow-forever", label: "What WoW Forever is" }],
    },
  ],
  it: [
    {
      id: "what-is",
      q: "Che cos'è World of Warcraft: Forever?",
      a: "Un nuovo gioco di World of Warcraft fatto dal team di WoW Classic, ambientato in un'Azeroth reimmaginata, con il gioco rinnovato e il livello massimo a 60. Aggiunge la razza Skyborne, zone nuove, nove dungeon, due incursioni, il Legacy System e il Camping.",
      links: [{ path: "/guides/what-is-wow-forever", label: "Che cos'è WoW Forever" }],
    },
    {
      id: "release-date",
      q: "Quando esce WoW Forever?",
      a: "Il 4 novembre 2026 alle 15:00 PST, cioè a mezzanotte fra il 4 e il 5 novembre in Italia. La beta dura fino al 21 ottobre.",
      links: [
        { path: "/guides/wow-forever-release-date", label: "Data di uscita e orari" },
        { path: "/calendar", label: "Calendario" },
      ],
    },
    {
      id: "price",
      q: "WoW Forever va comprato?",
      a: "No: è incluso nell'abbonamento a World of Warcraft o nel tempo di gioco. Pacchetto Heroic Skyborne, Pacchetto Epic Skyborne e Warcraft Forever Collection sono edizioni facoltative (29,99 €, 59,99 € e 79,99 € sul negozio ufficiale il 10 ottobre 2026).",
      links: [{ path: "/guides/wow-forever-editions-prices", label: "Edizioni e prezzi" }],
    },
    {
      id: "skyborne-access",
      q: "Posso giocare gli Skyborne senza pagare un'edizione?",
      a: "No. Secondo il negozio ufficiale, la razza Skyborne e la sua zona di partenza, Zephras Isle, richiedono il Pacchetto Heroic Skyborne o un'edizione superiore.",
      links: [{ path: "/guides/wow-forever-races-classes", label: "Razze e classi" }],
    },
    {
      id: "languages",
      q: "WoW Forever è in italiano?",
      a: "No. Il negozio ufficiale elenca inglese, spagnolo (Spagna e America Latina), portoghese brasiliano, tedesco, francese, russo, coreano e cinese tradizionale: l'italiano non c'è. Per questo il nostro glossario mette accanto i nomi inglesi e la loro spiegazione in italiano.",
      links: [{ path: "/glossary", label: "Glossario in tre lingue" }],
    },
    {
      id: "beta",
      q: "Come si entra nella beta?",
      a: "Su invito, iscrivendosi all'opt-in, oppure con il Pacchetto Epic Skyborne o la Warcraft Forever Collection, che includono l'accesso alla beta. La beta finisce il 21 ottobre 2026.",
      links: [{ path: "/guides/wow-forever-release-date", label: "Le date della beta" }],
    },
    {
      id: "rulesets",
      q: "Posso cambiare set di regole dopo?",
      a: "No: ogni set di regole è un mondo a sé e per giocare in un altro serve un personaggio nuovo. L'unica eccezione è un personaggio Hardcore che muore, che può trasferirsi in un altro set di regole.",
      links: [{ path: "/guides/wow-forever-rulesets", label: "I quattro set di regole" }],
    },
    {
      id: "platforms",
      q: "Su che piattaforme esce WoW Forever?",
      a: "PC e Mac, secondo la scheda di Blizzard per la stampa, con il supporto ufficiale al gamepad.",
      links: [{ path: "/guides/what-is-wow-forever", label: "Che cos'è WoW Forever" }],
    },
  ],
  es: [
    {
      id: "what-is",
      q: "¿Qué es World of Warcraft: Forever?",
      a: "Un nuevo juego de World of Warcraft del equipo de WoW Classic, ambientado en una Azeroth reinventada, con una jugabilidad renovada y el nivel máximo en 60. Añade la raza de los célicos, zonas nuevas, nueve mazmorras, dos bandas, el sistema de legado y la acampada.",
      links: [{ path: "/guides/what-is-wow-forever", label: "Qué es WoW Forever" }],
    },
    {
      id: "release-date",
      q: "¿Cuándo sale WoW Forever?",
      a: "El 4 de noviembre de 2026 a las 15:00 PST, es decir, a medianoche entre el 4 y el 5 de noviembre en España. La beta dura hasta el 21 de octubre.",
      links: [
        { path: "/guides/wow-forever-release-date", label: "Fecha de lanzamiento y horarios" },
        { path: "/calendar", label: "Calendario" },
      ],
    },
    {
      id: "price",
      q: "¿Hay que comprar WoW Forever?",
      a: "No: está incluido en la suscripción a World of Warcraft o en el tiempo de juego. El Pack Heroic de los célicos, el Pack Epic de los célicos y la Warcraft Forever Collection son ediciones opcionales (29,99 €, 59,99 € y 79,99 € en la tienda oficial el 10 de octubre de 2026).",
      links: [{ path: "/guides/wow-forever-editions-prices", label: "Ediciones y precios" }],
    },
    {
      id: "skyborne-access",
      q: "¿Puedo jugar con los célicos sin pagar una edición?",
      a: "No. Según la tienda oficial, la raza de los célicos (cielonato en Latinoamérica) y su zona inicial, la Isla de Zephras, requieren el Pack Heroic de los célicos o una edición superior.",
      links: [{ path: "/guides/wow-forever-races-classes", label: "Razas y clases" }],
    },
    {
      id: "languages",
      q: "¿WoW Forever está en español?",
      a: "Sí, en dos versiones: español de España y de América Latina, con nombres distintos para muchas cosas. La tienda oficial también incluye inglés, portugués de Brasil, alemán, francés, ruso, coreano y chino tradicional, pero no italiano.",
      links: [{ path: "/glossary", label: "Glosario en tres idiomas" }],
    },
    {
      id: "beta",
      q: "¿Cómo se entra en la beta?",
      a: "Por invitación, apuntándote en el opt-in, o con el Pack Epic de los célicos o la Warcraft Forever Collection, que incluyen el acceso a la beta. La beta termina el 21 de octubre de 2026.",
      links: [{ path: "/guides/wow-forever-release-date", label: "Las fechas de la beta" }],
    },
    {
      id: "rulesets",
      q: "¿Puedo cambiar de conjunto de reglas más tarde?",
      a: "No: cada conjunto de reglas es un mundo aparte y para jugar en otro necesitas un personaje nuevo. La única excepción es un personaje Hardcore que muere, que puede trasladarse a otro conjunto de reglas.",
      links: [{ path: "/guides/wow-forever-rulesets", label: "Los cuatro conjuntos de reglas" }],
    },
    {
      id: "platforms",
      q: "¿En qué plataformas sale WoW Forever?",
      a: "PC y Mac, según la ficha de prensa de Blizzard, con soporte oficial para mando.",
      links: [{ path: "/guides/what-is-wow-forever", label: "Qué es WoW Forever" }],
    },
  ],
};
