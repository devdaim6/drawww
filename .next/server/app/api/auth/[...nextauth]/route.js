"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2Fmedia%2Fgrub%2FDeveloper%2FNextJS%2FExCalidraw%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmedia%2Fgrub%2FDeveloper%2FNextJS%2FExCalidraw&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2Fmedia%2Fgrub%2FDeveloper%2FNextJS%2FExCalidraw%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmedia%2Fgrub%2FDeveloper%2FNextJS%2FExCalidraw&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _media_grub_Developer_NextJS_ExCalidraw_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/media/grub/Developer/NextJS/ExCalidraw/app/api/auth/[...nextauth]/route.js\",\n    nextConfigOutput,\n    userland: _media_grub_Developer_NextJS_ExCalidraw_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj0lMkZtZWRpYSUyRmdydWIlMkZEZXZlbG9wZXIlMkZOZXh0SlMlMkZFeENhbGlkcmF3JTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZtZWRpYSUyRmdydWIlMkZEZXZlbG9wZXIlMkZOZXh0SlMlMkZFeENhbGlkcmF3JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzJCO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLz81OGJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9tZWRpYS9ncnViL0RldmVsb3Blci9OZXh0SlMvRXhDYWxpZHJhdy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvbWVkaWEvZ3J1Yi9EZXZlbG9wZXIvTmV4dEpTL0V4Q2FsaWRyYXcvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2Fmedia%2Fgrub%2FDeveloper%2FNextJS%2FExCalidraw%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmedia%2Fgrub%2FDeveloper%2FNextJS%2FExCalidraw&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/user */ \"(rsc)/./models/user.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            authorize: async (credentials)=>{\n                const { username, password } = credentials;\n                try {\n                    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n                    const user = await _models_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n                        username\n                    });\n                    if (!user) {\n                        return null; // User not found\n                    }\n                    const passwordsMatch = await bcryptjs__WEBPACK_IMPORTED_MODULE_4___default().compare(password, user.password);\n                    console.log(passwordsMatch);\n                    if (!passwordsMatch) {\n                        return null; // Passwords do not match\n                    }\n                    user.isloggedin = true;\n                    user.lastLoggedInTime = new Date();\n                    await user.save();\n                    // Return only necessary properties of the user\n                    return {\n                        name: user?.name,\n                        email: user?.email\n                    };\n                } catch (error) {\n                    console.log(\"Error: \", error);\n                    return null; // An error occurred during authentication\n                }\n            }\n        })\n    ],\n    session: {\n        maxAge: 24 * 60 * 60\n    },\n    callbacks: {\n        async session (session) {\n            const sessionUser = await _models_user__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n                email: session?.session?.user?.email\n            });\n            if (sessionUser) {\n                session.session.user.username = sessionUser?.username;\n                session.session.user.image = sessionUser?.image;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/user/login\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_2___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0w7QUFDQTtBQUNpQztBQUNwQztBQUV2QixNQUFNSyxjQUFjO0lBQ3pCQyxXQUFXO1FBQ1RILDJFQUFtQkEsQ0FBQztZQUNsQkksTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxVQUFVO29CQUFFQyxPQUFPO29CQUFZQyxNQUFNO2dCQUFPO2dCQUM1Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBRSxXQUFXLE9BQU9MO2dCQUNoQixNQUFNLEVBQUVDLFFBQVEsRUFBRUcsUUFBUSxFQUFFLEdBQUdKO2dCQUMvQixJQUFJO29CQUNGLE1BQU1SLG1EQUFjQTtvQkFDcEIsTUFBTWMsT0FBTyxNQUFNYixvREFBSUEsQ0FBQ2MsT0FBTyxDQUFDO3dCQUFFTjtvQkFBUztvQkFFM0MsSUFBSSxDQUFDSyxNQUFNO3dCQUNULE9BQU8sTUFBTSxpQkFBaUI7b0JBQ2hDO29CQUVBLE1BQU1FLGlCQUFpQixNQUFNWix1REFBYyxDQUFDUSxVQUFVRSxLQUFLRixRQUFRO29CQUNuRU0sUUFBUUMsR0FBRyxDQUFDSDtvQkFFWixJQUFJLENBQUNBLGdCQUFnQjt3QkFDbkIsT0FBTyxNQUFNLHlCQUF5QjtvQkFDeEM7b0JBRUFGLEtBQUtNLFVBQVUsR0FBRztvQkFDbEJOLEtBQUtPLGdCQUFnQixHQUFHLElBQUlDO29CQUM1QixNQUFNUixLQUFLUyxJQUFJO29CQUdmLCtDQUErQztvQkFDL0MsT0FBTzt3QkFBRWhCLE1BQU1PLE1BQU1QO3dCQUFNaUIsT0FBT1YsTUFBTVU7b0JBQU07Z0JBQ2hELEVBQUUsT0FBT0MsT0FBTztvQkFDZFAsUUFBUUMsR0FBRyxDQUFDLFdBQVdNO29CQUN2QixPQUFPLE1BQU0sMENBQTBDO2dCQUN6RDtZQUNGO1FBQ0Y7S0FDRDtJQUNEQyxTQUFTO1FBQ1BDLFFBQVEsS0FBSyxLQUFLO0lBQ3BCO0lBQ0FDLFdBQVc7UUFDVCxNQUFNRixTQUFRQSxPQUFPO1lBQ25CLE1BQU1HLGNBQWMsTUFBTTVCLG9EQUFJQSxDQUFDYyxPQUFPLENBQUM7Z0JBQUVTLE9BQU9FLFNBQVNBLFNBQVNaLE1BQU1VO1lBQU07WUFDOUUsSUFBSUssYUFBYTtnQkFDZkgsUUFBUUEsT0FBTyxDQUFDWixJQUFJLENBQUNMLFFBQVEsR0FBR29CLGFBQWFwQjtnQkFDN0NpQixRQUFRQSxPQUFPLENBQUNaLElBQUksQ0FBQ2dCLEtBQUssR0FBR0QsYUFBYUM7WUFDNUM7WUFDQSxPQUFPSjtRQUNUO0lBQ0Y7SUFDQUssT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0FBQ3JDLEVBQUU7QUFFRixNQUFNQyxVQUFVbkMsZ0RBQVFBLENBQUNHO0FBRWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/ZGExYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdE1vbmdvREIgZnJvbSBcIkAvbGliL2RiXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCJAL21vZGVscy91c2VyXCI7XHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgbmFtZTogXCJjcmVkZW50aWFsc1wiLFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIlVzZXJuYW1lXCIsIHR5cGU6IFwidGV4dFwiIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGF1dGhvcml6ZTogYXN5bmMgKGNyZWRlbnRpYWxzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGNyZWRlbnRpYWxzO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBhd2FpdCBjb25uZWN0TW9uZ29EQigpO1xyXG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IHVzZXJuYW1lIH0pO1xyXG5cclxuICAgICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gVXNlciBub3QgZm91bmRcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCBwYXNzd29yZHNNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHBhc3N3b3Jkc01hdGNoKVxyXG5cclxuICAgICAgICAgIGlmICghcGFzc3dvcmRzTWF0Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIFBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB1c2VyLmlzbG9nZ2VkaW4gPSB0cnVlO1xyXG4gICAgICAgICAgdXNlci5sYXN0TG9nZ2VkSW5UaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgIGF3YWl0IHVzZXIuc2F2ZSgpO1xyXG5cclxuXHJcbiAgICAgICAgICAvLyBSZXR1cm4gb25seSBuZWNlc3NhcnkgcHJvcGVydGllcyBvZiB0aGUgdXNlclxyXG4gICAgICAgICAgcmV0dXJuIHsgbmFtZTogdXNlcj8ubmFtZSwgZW1haWw6IHVzZXI/LmVtYWlsIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIsIGVycm9yKTtcclxuICAgICAgICAgIHJldHVybiBudWxsOyAvLyBBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgYXV0aGVudGljYXRpb25cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHNlc3Npb246IHtcclxuICAgIG1heEFnZTogMjQgKiA2MCAqIDYwLCAvLyAyNCBob3Vyc1xyXG4gIH0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBzZXNzaW9uKHNlc3Npb24pIHtcclxuICAgICAgY29uc3Qgc2Vzc2lvblVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogc2Vzc2lvbj8uc2Vzc2lvbj8udXNlcj8uZW1haWwgfSk7XHJcbiAgICAgIGlmIChzZXNzaW9uVXNlcikge1xyXG4gICAgICAgIHNlc3Npb24uc2Vzc2lvbi51c2VyLnVzZXJuYW1lID0gc2Vzc2lvblVzZXI/LnVzZXJuYW1lO1xyXG4gICAgICAgIHNlc3Npb24uc2Vzc2lvbi51c2VyLmltYWdlID0gc2Vzc2lvblVzZXI/LmltYWdlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIHBhZ2VzOiB7XHJcbiAgICBzaWduSW46IFwiL3VzZXIvbG9naW5cIixcclxuICB9LFxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcclxuXHJcbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTsiXSwibmFtZXMiOlsiY29ubmVjdE1vbmdvREIiLCJVc2VyIiwiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJ1c2VybmFtZSIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRPbmUiLCJwYXNzd29yZHNNYXRjaCIsImNvbXBhcmUiLCJjb25zb2xlIiwibG9nIiwiaXNsb2dnZWRpbiIsImxhc3RMb2dnZWRJblRpbWUiLCJEYXRlIiwic2F2ZSIsImVtYWlsIiwiZXJyb3IiLCJzZXNzaW9uIiwibWF4QWdlIiwiY2FsbGJhY2tzIiwic2Vzc2lvblVzZXIiLCJpbWFnZSIsInBhZ2VzIiwic2lnbkluIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectToDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI, {\n            dbName: \"drawww\",\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log(\"Database connected successfully!\");\n    } catch (error) {\n        console.error(\"Error connecting to the database:\", error.message);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWM7SUFDbEIsSUFBSTtRQUNGLE1BQU1ELHVEQUFnQixDQUFDRyxRQUFRQyxHQUFHLENBQUNDLFNBQVMsRUFBRTtZQUM1Q0MsUUFBUTtZQUNSQyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN0QjtRQUNBQyxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9DLE9BQU87UUFDZEYsUUFBUUUsS0FBSyxDQUFDLHFDQUFxQ0EsTUFBTUMsT0FBTztJQUNsRTtBQUNGO0FBRUEsaUVBQWVYLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9saWIvZGIuanM/M2RjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBjb25uZWN0VG9EQiA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkksIHtcclxuICAgICAgZGJOYW1lOiBcImRyYXd3d1wiLFxyXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSBjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gdGhlIGRhdGFiYXNlOlwiLCBlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0VG9EQjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0VG9EQiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwiZGJOYW1lIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.js\n");

/***/ }),

/***/ "(rsc)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: String,\n    email: {\n        type: String,\n        unique: [\n            true,\n            \"Email is Already Taken\"\n        ]\n    },\n    username: {\n        type: String,\n        unique: [\n            true,\n            \"Username is Already Taken\"\n        ]\n    },\n    password: String,\n    image: String,\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    isloggedin: {\n        type: Boolean,\n        default: false\n    },\n    lastLoggedInTime: {\n        type: Date\n    },\n    role: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxNQUFNQztJQUNOQyxPQUFPO1FBQUVDLE1BQU1GO1FBQVFHLFFBQVE7WUFBQztZQUFNO1NBQXlCO0lBQUM7SUFDaEVDLFVBQVU7UUFBRUYsTUFBTUY7UUFBUUcsUUFBUTtZQUFDO1lBQU07U0FBNEI7SUFBQztJQUN0RUUsVUFBVUw7SUFDVk0sT0FBT047SUFDUE8sWUFBWTtRQUFFTCxNQUFNTTtRQUFTQyxTQUFTO0lBQU07SUFDNUNDLFlBQVk7UUFDVlIsTUFBTU07UUFDTkMsU0FBUztJQUNYO0lBQ0FFLGtCQUFrQjtRQUNoQlQsTUFBTVU7SUFDUjtJQUNBQyxNQUFNO1FBQUVYLE1BQU1GO0lBQU87QUFDdkIsR0FDRTtJQUFFYyxZQUFZO0FBQUs7QUFHckIsTUFBTUMsT0FBT25CLHdEQUFlLENBQUNtQixJQUFJLElBQUluQixxREFBYyxDQUFDLFFBQVFDO0FBRTVELGlFQUFla0IsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL21vZGVscy91c2VyLmpzPzY1OTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIG5hbWU6IFN0cmluZyxcclxuICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHVuaXF1ZTogW3RydWUsIFwiRW1haWwgaXMgQWxyZWFkeSBUYWtlblwiXSB9LFxyXG4gIHVzZXJuYW1lOiB7IHR5cGU6IFN0cmluZywgdW5pcXVlOiBbdHJ1ZSwgXCJVc2VybmFtZSBpcyBBbHJlYWR5IFRha2VuXCJdIH0sXHJcbiAgcGFzc3dvcmQ6IFN0cmluZyxcclxuICBpbWFnZTogU3RyaW5nLFxyXG4gIGlzVmVyaWZpZWQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcclxuICBpc2xvZ2dlZGluOiB7XHJcbiAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgfSxcclxuICBsYXN0TG9nZ2VkSW5UaW1lOiB7XHJcbiAgICB0eXBlOiBEYXRlLFxyXG4gIH0sXHJcbiAgcm9sZTogeyB0eXBlOiBTdHJpbmcgfVxyXG59LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9KTtcclxuXHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIFVzZXJTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJTdHJpbmciLCJlbWFpbCIsInR5cGUiLCJ1bmlxdWUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaW1hZ2UiLCJpc1ZlcmlmaWVkIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJpc2xvZ2dlZGluIiwibGFzdExvZ2dlZEluVGltZSIsIkRhdGUiLCJyb2xlIiwidGltZXN0YW1wcyIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/bcryptjs","vendor-chunks/preact","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2Fmedia%2Fgrub%2FDeveloper%2FNextJS%2FExCalidraw%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmedia%2Fgrub%2FDeveloper%2FNextJS%2FExCalidraw&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();