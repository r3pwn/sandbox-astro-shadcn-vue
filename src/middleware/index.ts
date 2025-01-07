import { sequence } from "astro:middleware";
import isrCache from "./isr-cache";

export const onRequest = sequence(isrCache);
