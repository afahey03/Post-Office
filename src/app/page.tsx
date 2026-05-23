import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Home() {
    return (
        <div className="tool-shell home-shell">
            <div className="home-card">
                <h1 className="home-title">Post Office</h1>
                <p className="home-subtitle">
                    Quick tools for formatting JSON and testing HTTP APIs.
                </p>

                <div className="home-grid">
                    <Link href="/json" className="home-link-card">
                        <div className="home-link-title">JSON Formatter</div>
                        <div className="home-link-copy">
                            Format, validate, minify, and copy JSON with syntax highlighting.
                        </div>
                    </Link>

                    <Link href="/api" className="home-link-card">
                        <div className="home-link-title">API Tester</div>
                        <div className="home-link-copy">
                            Send requests with params, headers, auth, and inspect responses.
                        </div>
                    </Link>
                </div>

                <section className="home-contact" aria-label="Contact">
                    <div className="home-contact-links">
                        <a
                            href="https://www.linkedin.com/in/aidanfahey"
                            target="_blank"
                            rel="noreferrer"
                            className="home-contact-link linkedin-link"
                            aria-label="LinkedIn"
                        >
                            <svg className="linkedin-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6A2.5 2.5 0 0 1 0 3.5 2.5 2.5 0 0 1 2.49 1 2.5 2.5 0 0 1 4.98 3.5ZM.5 8h4V23h-4V8Zm7 0h3.8v2h.1c.5-.95 1.85-2.2 3.8-2.2 4.07 0 4.82 2.68 4.82 6.16V23h-4v-7.66c0-1.83-.03-4.18-2.55-4.18-2.55 0-2.94 2-2.94 4.05V23h-4V8Z" />
                            </svg>
                        </a>
                        <a href="mailto:afahey2003@yahoo.com" className="home-contact-link" aria-label="Email">
                            <Mail size={16} aria-hidden />
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
