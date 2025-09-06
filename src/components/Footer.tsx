// import { FacebookIcon } from "./icons/FacebookIcon";
// import { InstagramIcon } from "./icons/InstagramIcon";
// import { YoutubeIcon } from "./icons/YoutubeIcon";
import { Links } from "@/enums/links";

export default function Footer() {
    return (
        <footer className="bg-blue text-white py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

                <div className="flex flex-col gap-2 text-normal text-center md:text-left">
                    <a href={`https://api.whatsapp.com/send?phone=${Links.WHATSAPP_SANITIZED_CONTATO}`} target="_blank">📞 {Links.WHATSAPP_CONTATO}</a>
                    <a href={`mailto:${Links.EMAIL_CONTATO}`} target="_blank">✉️ {Links.EMAIL_CONTATO}</a>
                </div>

                <div className="flex gap-6 lg:gap-8">
                    {/*<a href={Links.INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram">*/}
                    {/*    <InstagramIcon cssBlock="size-5 lg:size-7 hover:text-white/80" />*/}
                    {/*</a>*/}
                    {/*<a href={Links.FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook">*/}
                    {/*    <FacebookIcon cssBlock="size-5 lg:size-7 hover:text-white/80" />*/}
                    {/*</a>*/}
                    {/*<a href={Links.YOUTUBE} target="_blank" rel="noopener noreferrer" aria-label="YouTube">*/}
                    {/*    <YoutubeIcon cssBlock="size-6 lg:size-8 hover:text-white/80" />*/}
                    {/*</a>*/}
                </div>
            </div>

            <div className="text-normal text-center mt-4 text-xs text-white/80">
                © {new Date().getFullYear()} Scudeller Engenharia.
            </div>
        </footer>

    )
}
