export interface ButtonProps {
    id: string;
    text: string;
    url?: string;
    cssBlock?: string;
    submitForm?: boolean;
    externalLink?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

export function Button({ id, url, text, cssBlock, submitForm = false, externalLink = false, disabled = false, onClick }: ButtonProps) {
    const Element = url ? 'a' : 'button';

    return (
        <Element
            id={id}
            href={url}
            onClick={onClick}
            rel={externalLink ? 'noopener noreferrer' : ''}
            type={submitForm ? 'submit' : 'button'}
            disabled={disabled}
            target={externalLink ? '_blank' : ''}
            className={`text-center text-white bg-orange px-6 py-3 rounded-full hover:bg-blue hover:cursor-pointer transition ${cssBlock}`}>
            <span className={`text-white font-semibold`}>
                {text}
            </span>
        </Element>
    );
}