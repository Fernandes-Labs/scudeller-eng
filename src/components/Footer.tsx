// import { FacebookIcon } from "./icons/FacebookIcon";
// import { InstagramIcon } from "./icons/InstagramIcon";
// import { YoutubeIcon } from "./icons/YoutubeIcon";
import { Links } from "@/enums/links";

export default function Footer() {
    return (
        <footer className="bg-blue text-white py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

                <div className="flex flex-col gap-2 text-normal text-center md:text-left">
                    <a href={Links.WHATSAPP_URL_CONTATO} target="_blank">📞 {Links.WHATSAPP_CONTATO}</a>
                    <a href={`mailto:${Links.EMAIL_CONTATO}`} target="_blank">✉️ {Links.EMAIL_CONTATO}</a>
                </div>
            </div>

            <div className="text-normal text-center mt-4 text-xs text-white/80">
                © {new Date().getFullYear()} Scudeller Engenharia.
            </div>
        </footer>

    )
}
