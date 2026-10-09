import type { Locale } from "./i18n";

type Block = { id: string; title: string; text: string };

/**
 * Informativa sulla privacy di ForeverMeta (10/10/2026), un blocco per trattamento. Contatto: la casella della squadra
 * di OriginsMeta finché ForeverMeta non ha una casella sul suo dominio (da cambiare qui quando c'è).
 */
const CONTACT = "staff@originsmeta.com";

export const privacyText: Record<Locale, Block[]> = {
  en: [
    {
      id: "who",
      title: "Who handles your data",
      text: `ForeverMeta is an unofficial fan site run by the team behind OriginsMeta. Data controller: Pierluigi Cella, ${CONTACT}. You can ask at any time which data we hold about you and have it deleted.`,
    },
    {
      id: "hosting",
      title: "Hosting and visit statistics",
      text: "The site is hosted on Vercel, which keeps the usual server logs (IP address, user agent, requested page) for security and performance, and measures visits with Vercel Web Analytics, an aggregate measurement without cookies that does not identify you.",
    },
    {
      id: "accounts",
      title: "Accounts",
      text: `If you create an account (sign-in with Discord or with an email link), we store on Supabase (servers in Ireland, EU) your email, username, avatar and, with Discord, your Discord ID. Your email is never public. A session cookie keeps you signed in. Write to ${CONTACT} to delete your account and everything linked to it.`,
    },
    {
      id: "cookies",
      title: "Cookies",
      text: "The site only sets technical cookies, and only after you sign in (the Supabase session, names starting with sb-). Your cookie choice is saved in your browser's local storage. Google Analytics, when active, starts only if you click “Accept all”, with advertising storage and personalisation turned off; withdrawing consent switches it off and deletes its cookies. No advertising, no profiling.",
    },
    {
      id: "links",
      title: "Links to other sites",
      text: "Links to Blizzard, YouTube and other official sources open in a new tab: those sites have their own privacy policies.",
    },
  ],
  it: [
    {
      id: "who",
      title: "Chi tratta i tuoi dati",
      text: `ForeverMeta è un sito fan non ufficiale gestito dalla squadra di OriginsMeta. Titolare del trattamento: Pierluigi Cella, ${CONTACT}. Puoi chiedere in qualsiasi momento quali dati abbiamo su di te e farli cancellare.`,
    },
    {
      id: "hosting",
      title: "Hosting e statistiche delle visite",
      text: "Il sito è ospitato su Vercel, che conserva i normali log del server (indirizzo IP, user agent, pagina richiesta) per sicurezza e prestazioni, e misura le visite con Vercel Web Analytics, una misurazione aggregata senza cookie che non ti identifica.",
    },
    {
      id: "accounts",
      title: "Account",
      text: `Se crei un account (accesso con Discord o con un link via email), conserviamo su Supabase (server in Irlanda, UE) email, nome utente, avatar e, con Discord, il tuo ID Discord. L'email non è mai pubblica. Un cookie di sessione ti tiene connesso. Scrivi a ${CONTACT} per cancellare l'account e tutto ciò che vi è collegato.`,
    },
    {
      id: "cookies",
      title: "Cookie",
      text: "Il sito imposta solo cookie tecnici, e solo dopo l'accesso (la sessione di Supabase, con nomi che iniziano con sb-). La tua scelta sui cookie è salvata nella memoria locale del browser. Google Analytics, quando è attivo, parte solo se premi “Accetta tutto”, con archiviazione e personalizzazione pubblicitaria spente; ritirare il consenso lo spegne e ne cancella i cookie. Niente pubblicità, niente profilazione.",
    },
    {
      id: "links",
      title: "Link ad altri siti",
      text: "I link a Blizzard, YouTube e alle altre fonti ufficiali si aprono in una nuova scheda: quei siti hanno le loro informative.",
    },
  ],
  es: [
    {
      id: "who",
      title: "Quién trata tus datos",
      text: `ForeverMeta es un sitio fan no oficial gestionado por el equipo de OriginsMeta. Responsable del tratamiento: Pierluigi Cella, ${CONTACT}. Puedes preguntar en cualquier momento qué datos tenemos sobre ti y pedir que se borren.`,
    },
    {
      id: "hosting",
      title: "Alojamiento y estadísticas de visitas",
      text: "El sitio está alojado en Vercel, que guarda los registros habituales del servidor (dirección IP, user agent, página solicitada) por seguridad y rendimiento, y mide las visitas con Vercel Web Analytics, una medición agregada sin cookies que no te identifica.",
    },
    {
      id: "accounts",
      title: "Cuentas",
      text: `Si creas una cuenta (inicio de sesión con Discord o con un enlace por correo), guardamos en Supabase (servidores en Irlanda, UE) tu correo, nombre de usuario, avatar y, con Discord, tu ID de Discord. Tu correo nunca es público. Una cookie de sesión mantiene la sesión iniciada. Escribe a ${CONTACT} para borrar tu cuenta y todo lo que esté vinculado a ella.`,
    },
    {
      id: "cookies",
      title: "Cookies",
      text: "El sitio solo usa cookies técnicas, y solo después de iniciar sesión (la sesión de Supabase, con nombres que empiezan por sb-). Tu elección sobre las cookies se guarda en el almacenamiento local del navegador. Google Analytics, cuando está activo, solo se carga si pulsas «Aceptar todo», con el almacenamiento y la personalización publicitaria desactivados; retirar el consentimiento lo desactiva y borra sus cookies. Sin publicidad ni perfiles.",
    },
    {
      id: "links",
      title: "Enlaces a otros sitios",
      text: "Los enlaces a Blizzard, YouTube y otras fuentes oficiales se abren en una pestaña nueva: esos sitios tienen sus propias políticas de privacidad.",
    },
  ],
};
