import { MemoryCache, type ICache } from "./cache";

class IsrService implements ICache<Response> {
  constructor(private cache: ICache<Response>) {}

  get(key: string): Response | undefined {
    const result = this.cache.get(key);
    if (!result) {
      return undefined;
    }
    // Clone the response so that we don't modify the original.
    return result.clone();
  }

  set(key: string, value: Response, ttl: number): void {
    // Clone the response so that we don't modify the original.
    this.cache.set(key, value.clone(), ttl);
  }

  del(key: string): void {
    this.cache.del(key);
  }
}

const cache = new MemoryCache<Response>();
export const isr = new IsrService(cache);

/**
 * Invalidate a the cache for a given key
 */
export function invalidate(key: string) {
  isr.del(key);
}
