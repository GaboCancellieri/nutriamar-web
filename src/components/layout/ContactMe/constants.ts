import { FEATHER_ICONS, FONT_AWESOME } from "@constants/icons";
import { ContactLinkType } from "./types";

export const CONTACT_ME_TITLE = `PODES ENCONTRARME O CONTACTARME: `;

export const CONTACT_ME_LINKS: ContactLinkType[] = [
  {
    title: `Instagram`,
    iconId: `FaInstagram`,
    iconDesign: FONT_AWESOME,
    url: `https://www.instagram.com/lanutri.delsur/`,
  },
  {
    title: `Tik Tok`,
    iconId: `FaTiktok`,
    iconDesign: FONT_AWESOME,
    url: `https://www.tiktok.com/@lanutri.delsur`,
  },
  {
    title: `Kwai`,
    iconId: `FiVideo`,
    iconDesign: FEATHER_ICONS,
    url: `http://m.kwai-pro.com/user/150000176629349?fid=150000176629349&cc=share_copylink&language=es-us&share_did=ANDROID_f6a814865d357024&share_id=ANDROID_f6a814865d357024_1627483852646&timestamp=1627483852646&shareEnter=1&short_key=2B3Bw5CR`,
  },
  {
    title: `Whatsapp`,
    iconId: `FaWhatsapp`,
    iconDesign: FONT_AWESOME,
    url: `https://api.whatsapp.com/send?phone=542994238887`,
  },
  {
    title: `Email`,
    iconId: `FaRegEnvelope`,
    iconDesign: FONT_AWESOME,
    url: `mailto:sofia.daniela.perez@gmail.com`,
  },
];
