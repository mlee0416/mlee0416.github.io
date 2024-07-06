import { ERoutes } from "./types/routes/routeTypes";
/**
 * Public routes accessible to the public
 * Routes do not require authentication
 * @type {string[]}
 */

export const PUBLIC_ROUTES = [ERoutes.PUBLIC_ROOT, ERoutes.AUTH_ERROR];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */

export const AUTH_ROUTES = [
  ERoutes.LOGIN,
  ERoutes.REGISTER,
  ERoutes.AUTH_ERROR,
];

/**
 * Prefix for API authentication routes
 * routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const API_AUTH_PREFIX = ERoutes.AUTH_PREFIX;

/**
 * Default redirect path after logging in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = ERoutes.SETTINGS;
