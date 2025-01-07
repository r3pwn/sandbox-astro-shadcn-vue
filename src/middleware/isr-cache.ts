import type { APIContext, MiddlewareHandler } from "astro";
import { isr } from "@/services/isr.ts";

const shouldSkipCache = (req: APIContext) => {
  // Skip the cache if the request is not a GET request.
  if (req.request.method !== "GET") {
    return true;
  }
};

const requestHandler: MiddlewareHandler = async (req, next) => {
  const key = req.url.pathname;

  let ttl: undefined | number;
  req.locals.cache = (seconds: number = 60) => (ttl = seconds);

  if (shouldSkipCache(req)) {
    return next();
  }

  const cachedResponse = isr.get(key);
  if (cachedResponse) {
    return cachedResponse;
  }

  const response = await next();

  if (ttl !== undefined) {
    isr.set(key, response, ttl);
  }

  return response;
};

export default requestHandler;
