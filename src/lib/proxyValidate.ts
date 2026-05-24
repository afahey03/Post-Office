const BLOCKED_HOSTNAMES = new Set([
    'localhost',
    '127.0.0.1',
    '0.0.0.0',
    '[::1]',
    '::1',
    '::',
]);

function isPrivateIpv4(host: string): boolean {
    const parts = host.split('.').map(Number);
    if (parts.length !== 4 || parts.some((n) => Number.isNaN(n))) return false;
    const [a, b] = parts;
    if (a === 10) return true;
    if (a === 127) return true;
    if (a === 0) return true;
    if (a === 100 && b >= 64 && b <= 127) return true;
    if (a === 169 && b === 254) return true;
    if (a === 172 && b >= 16 && b <= 31) return true;
    if (a === 192 && b === 168) return true;
    if (a === 198 && (b === 18 || b === 19)) return true;
    if (a >= 224) return true;
    return false;
}

function isPrivateIpv6(host: string): boolean {
    const normalized = host.toLowerCase().replace(/^\[/, '').replace(/\]$/, '');
    if (normalized === '::1' || normalized === '::') return true;
    if (normalized.startsWith('fc') || normalized.startsWith('fd')) return true;
    if (normalized.startsWith('fe8') || normalized.startsWith('fe9') || normalized.startsWith('fea') || normalized.startsWith('feb')) {
        return true;
    }
    return false;
}

export function assertProxyTargetAllowed(targetUrl: string): URL {
    let parsed: URL;
    try {
        parsed = new URL(targetUrl);
    } catch {
        throw new Error('Invalid target URL');
    }

    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
        throw new Error('Only http and https URLs are allowed');
    }

    const host = parsed.hostname.toLowerCase();
    if (
        BLOCKED_HOSTNAMES.has(host) ||
        host.endsWith('.localhost') ||
        host.endsWith('.local') ||
        host.endsWith('.internal')
    ) {
        throw new Error('Requests to localhost are not allowed');
    }

    if (isPrivateIpv4(host) || isPrivateIpv6(host)) {
        throw new Error('Requests to private networks are not allowed');
    }

    return parsed;
}

export const PROXY_MAX_BODY_BYTES = 1024 * 1024;
export const PROXY_TIMEOUT_MS = 30_000;
export const PROXY_MIN_TIMEOUT_MS = 1_000;
export const PROXY_MAX_TIMEOUT_MS = 120_000;

export function clampProxyTimeoutMs(value: number | undefined): number {
    if (!value || !Number.isFinite(value)) return PROXY_TIMEOUT_MS;
    return Math.max(PROXY_MIN_TIMEOUT_MS, Math.min(PROXY_MAX_TIMEOUT_MS, Math.round(value)));
}
