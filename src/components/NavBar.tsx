'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();

    return (
        <nav style={{
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border)',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            height: 'var(--nav-height)',
            gap: '32px',
        }}>
            <span style={{ fontWeight: 600, fontSize: '15px', color: 'var(--accent)', letterSpacing: '-0.02em' }}>
                Post Office
            </span>
            <div style={{ display: 'flex', gap: '4px' }}>
                <NavLink href="/" label="Home" active={pathname === '/'} />
                <NavLink href="/json" label="JSON Formatter" active={pathname === '/json'} />
                <NavLink href="/api" label="API Tester" active={pathname === '/api'} />
            </div>
        </nav>
    );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
    return (
        <Link href={href} className={`nav-link ${active ? 'active' : ''}`} aria-current={active ? 'page' : undefined}>
            {label}
        </Link>
    );
}
