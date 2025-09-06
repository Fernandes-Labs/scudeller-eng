// import {getIcon} from "@/utils/getIcons";

export interface ButtonProps {
    emoji: string;
    url?: string;
    text: string;
    cssBlock?: string;
    submitForm?: boolean;
    externalLink?: boolean;
}

export function IconButton({ emoji, url, text, cssBlock, submitForm = false, externalLink = false }: ButtonProps) {
    const Element = url ? 'a' : 'button';

    return (
        <Element
            href={url}
            rel={externalLink ? 'noopener noreferrer' : ''}
            type={submitForm ? 'submit' : 'button'}
            target={externalLink ? '_blank' : ''}
            className={`flex gap-4 text-center text-white px-4 py-2 items-center lg:px-6 lg:py-3 rounded-full hover:cursor-pointer transition ${cssBlock}`}>
                <p className="size-6">{emoji}</p>
                <span className={`text-white font-semibold text-sm lg:text-normal`}>
                    {text}
                </span>
        </Element>
    );
}