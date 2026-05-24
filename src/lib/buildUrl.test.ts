import { describe, expect, it } from 'vitest';
import { buildUrlWithParams } from './buildUrl';

describe('buildUrlWithParams', () => {
    it('returns empty for blank url', () => {
        expect(buildUrlWithParams('  ', [])).toBe('');
    });

    it('appends query params', () => {
        const result = buildUrlWithParams('https://api.test/items', [
            { key: 'q', value: 'hello', enabled: true },
        ]);
        expect(result).toBe('https://api.test/items?q=hello');
    });

    it('ignores disabled or empty keys', () => {
        const result = buildUrlWithParams('https://api.test/items', [
            { key: 'a', value: '1', enabled: false },
            { key: '', value: 'x', enabled: true },
        ]);
        expect(result).toBe('https://api.test/items');
    });

    it('preserves malformed base and appends params safely', () => {
        const result = buildUrlWithParams('::bad-url::', [{ key: 'q', value: 'test', enabled: true }]);
        expect(result).toBe('::bad-url::?q=test');
    });

    it('replaces existing key values', () => {
        const result = buildUrlWithParams('https://api.test/items?limit=10', [{ key: 'limit', value: '20', enabled: true }]);
        expect(result).toBe('https://api.test/items?limit=20');
    });
});
