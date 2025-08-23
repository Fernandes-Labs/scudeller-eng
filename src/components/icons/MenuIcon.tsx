export interface IconProps {
    cssBlock?: string
}

export function MenuIcon({ cssBlock }: IconProps) {
    return (
        <svg className={cssBlock} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier"></g>
            <g id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor">
                </path>
            </g>
        </svg>
    )
}