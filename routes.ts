// An Array of routes that are public and do not require authentication.
// All other routes will be protected and require authentication.
// @type {string[]}

export const publicRoutes = [
    "/"
];

// Used for authentication
// These routes will redirect users to /settings

export const authRoutes = [
    "/auth/login",
    "/auth/register",
];

/*
 * Prefixes for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/*
 * The default redirect path after a successful login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";