'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();
    
    return (
        <div>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                    {path === '/' && ' V'}
                </li>
                <li>
                    <Link href='/about-us'>About us</Link>
                    {path === '/about-us' && ' V'}
                </li>
            </ul>
        </div>
    )
}