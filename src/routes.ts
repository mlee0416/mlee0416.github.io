/**
 * Public routes accessible to the public
 * Routes do not require authentication
 * @type {string[]}
 */

export const PUBLIC_ROUTES = ["/"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */

export const AUTH_ROUTES = ["/auth/login", "/auth/register"];

/**
 * Prefix for API authentication routes
 * routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const API_AUTH_PREFIX = "/api/auth";

/**
 * Default redirect path after logging in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
