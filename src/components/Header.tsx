
'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { usePathname } from "next/navigation"
import { routes } from "@/models/route-pages"
import {MenuIcon} from "@/components/icons/MenuIcon";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const pathName = usePathname();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                buttonRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setShowMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image src="/logo.png" alt="Logo" width={140} height={80} />
                </Link>

                <nav className="hidden md:flex font-semibold items-center space-x-6">
                    {routes.map((route) => (
                        <Link
                            key={route.label}
                            href={route.path}
                            className={`hover:text-orange ${pathName === route.path ? 'text-gray-dark' : 'text-blue'}`}>
                            {route.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu */}
                <button
                    ref={buttonRef}
                    className="md:hidden"
                    onClick={() => setShowMenu(!showMenu)}>
                    <div className='flex size-10 text-orange'>
                        <MenuIcon cssBlock='text-blue' />
                    </div>
                </button>
            </div>

            {/* Mobile Dropdown */}
            {showMenu && (
                <div
                    ref={menuRef}
                    className="md:hidden flex flex-col text-right bg-white border-t border-gray-200 px-4 py-2 space-y-2">
                    {routes.map((route) => (
                        <Link
                            key={route.label}
                            href={route.path}
                            className={`${pathName === route.path ? 'text-orange' : 'text-blue'}`}
                            onClick={() => setShowMenu(false)}>
                            {route.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}