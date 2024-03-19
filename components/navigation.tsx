'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from '../styles/navigation.module.css';

export default function Navigation() {
    const path = usePathname();
    
    return (
        <nav className={styles.nav}>
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
        </nav>
    )
}