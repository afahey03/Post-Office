import Link from 'next/link';

export default function Home() {
    return (
        <div className="tool-shell" style={{ display: 'grid', placeItems: 'center', padding: '24px' }}>
            <div
                style={{
                    width: 'min(760px, 100%)',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '24px',
                }}
            >
                <h1 style={{ fontSize: '28px', lineHeight: 1.2, marginBottom: '10px' }}>Post Office</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '22px', lineHeight: 1.6 }}>
                    Quick tools for formatting JSON and testing HTTP APIs.
                </p>

                <div className="split-2">
                    <Link
                        href="/json"
                        style={{
                            display: 'block',
                            textDecoration: 'none',
                            color: 'inherit',
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border)',
                            borderRadius: '10px',
                            padding: '16px',
                        }}
                    >
                        <div style={{ fontWeight: 600, marginBottom: '6px' }}>JSON Formatter</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.5 }}>
                            Format, validate, minify, and copy JSON with syntax highlighting.
                        </div>
                    </Link>

                    <Link
                        href="/api"
                        style={{
                            display: 'block',
                            textDecoration: 'none',
                            color: 'inherit',
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border)',
                            borderRadius: '10px',
                            padding: '16px',
                        }}
                    >
                        <div style={{ fontWeight: 600, marginBottom: '6px' }}>API Tester</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.5 }}>
                            Send requests with params, headers, auth, and inspect responses.
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
