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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2F%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2F%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/auth/[...nextauth].js */ \"(api)/./pages/api/auth/[...nextauth].js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/[...nextauth]\",\n        pathname: \"/api/auth/[...nextauth]\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTJGYXBpJTJGYXV0aCUyRiU1Qi4uLm5leHRhdXRoJTVELmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQzhEO0FBQzlEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyx3REFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsd0RBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVybWVzLWVtYWlsLz82YTc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsIFwiZGVmYXVsdFwiKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2F%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/models/User */ \"(api)/./src/models/User.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n // Import bcrypt library\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"Sign in with Email\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (credentials == null) return null;\n                const { email, password } = credentials;\n                let user = null;\n                let client = null;\n                try {\n                    client = await mongodb__WEBPACK_IMPORTED_MODULE_3__.MongoClient.connect(\"mongodb://127.0.0.1:27017/hermes-email\", {\n                        useNewUrlParser: true,\n                        useUnifiedTopology: true\n                    });\n                    const users = client.db().collection(\"users\");\n                    user = await users.findOne({\n                        email: email\n                    });\n                } catch (err) {\n                    console.log(err);\n                }\n                if (!user) {\n                    throw new Error(\"Invalid Email\");\n                }\n                console.log(user);\n                const isMatch = await bcryptjs__WEBPACK_IMPORTED_MODULE_4___default().compare(password, user.password);\n                if (!isMatch) {\n                    throw new Error(\"Invalid Password\");\n                }\n                return user;\n            }\n        })\n    ],\n    secret: \"secret\",\n    callbacks: {\n        async jwt ({ token, user, trigger, session }) {\n            if (trigger === \"update\") {\n                token.username = session.username;\n                token.email = session.email;\n                token.id = session.id;\n                token.key = session.key;\n                token.org = session.organization;\n                token.org_email = session.org_email;\n                token.corporation_password = session.corporation_password;\n                token.service = session.service;\n                return token;\n            }\n            if (user) {\n                token.id = user._id.toString(); // Convert ObjectID to string\n                token.username = user.username;\n                token.email = user.email;\n                token.key = user.key;\n                token.org = user.organization;\n                token.org_email = user.org_email;\n                token.corporation_password = user.corporation_password;\n                token.service = user.service;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token?.id) {\n                session.user = {\n                    id: token.id,\n                    username: token.username,\n                    email: token.email,\n                    key: token.key,\n                    organization: token.org,\n                    org_email: token.org_email,\n                    corporation_password: token.corporation_password,\n                    service: token.service\n                };\n            }\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDaUM7QUFDN0I7QUFDQztBQUNSLENBQUMsd0JBQXdCO0FBS3ZELGlFQUFlQSxnREFBUUEsQ0FBQztJQUN0QkssV0FBVztRQUNUSixzRUFBbUJBLENBQUM7WUFDbEJLLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBTztnQkFDdENDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUd6QixJQUFJQSxlQUFlLE1BQU0sT0FBTztnQkFDaEMsTUFBTSxFQUFFQyxLQUFLLEVBQUVHLFFBQVEsRUFBRSxHQUFHSjtnQkFFNUIsSUFBSU0sT0FBTztnQkFDWCxJQUFJQyxTQUFTO2dCQUViLElBQUc7b0JBQ0RBLFNBQVMsTUFBTVgsZ0RBQVdBLENBQUNZLE9BQU8sQ0FBQywwQ0FBMkM7d0JBQUVDLGlCQUFpQjt3QkFBTUMsb0JBQW9CO29CQUFLO29CQUNoSSxNQUFNQyxRQUFTSixPQUFPSyxFQUFFLEdBQUdDLFVBQVUsQ0FBQztvQkFDdENQLE9BQU8sTUFBTUssTUFBTUcsT0FBTyxDQUFDO3dCQUNqQmIsT0FBTUE7b0JBQ1Y7Z0JBQ1IsRUFDQSxPQUFNYyxLQUFJO29CQUNSQyxRQUFRQyxHQUFHLENBQUNGO2dCQUNkO2dCQUdBLElBQUksQ0FBQ1QsTUFBTTtvQkFDVCxNQUFNLElBQUlZLE1BQU07Z0JBQ2xCO2dCQUVBRixRQUFRQyxHQUFHLENBQUNYO2dCQUNaLE1BQU1hLFVBQVcsTUFBTXRCLHVEQUFjLENBQUNPLFVBQVVFLEtBQUtGLFFBQVE7Z0JBQzdELElBQUksQ0FBQ2UsU0FBUztvQkFFWixNQUFNLElBQUlELE1BQU07Z0JBQ2xCO2dCQUtBLE9BQU9aO1lBQ1Q7UUFDRjtLQUNEO0lBQ0RlLFFBQVE7SUFDUkMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFbEIsSUFBSSxFQUFFbUIsT0FBTyxFQUFFQyxPQUFPLEVBQUU7WUFDekMsSUFBR0QsWUFBVSxVQUFTO2dCQUNwQkQsTUFBTUcsUUFBUSxHQUFHRCxRQUFRQyxRQUFRO2dCQUNqQ0gsTUFBTXZCLEtBQUssR0FBR3lCLFFBQVF6QixLQUFLO2dCQUMzQnVCLE1BQU1JLEVBQUUsR0FBR0YsUUFBUUUsRUFBRTtnQkFDckJKLE1BQU1LLEdBQUcsR0FBR0gsUUFBUUcsR0FBRztnQkFDdkJMLE1BQU1NLEdBQUcsR0FBR0osUUFBUUssWUFBWTtnQkFDaENQLE1BQU1RLFNBQVMsR0FBR04sUUFBUU0sU0FBUztnQkFDbkNSLE1BQU1TLG9CQUFvQixHQUFHUCxRQUFRTyxvQkFBb0I7Z0JBQ3pEVCxNQUFNVSxPQUFPLEdBQUdSLFFBQVFRLE9BQU87Z0JBQy9CLE9BQU9WO1lBQ1Q7WUFDQSxJQUFJbEIsTUFBTTtnQkFDUmtCLE1BQU1JLEVBQUUsR0FBR3RCLEtBQUs2QixHQUFHLENBQUNDLFFBQVEsSUFBSSw2QkFBNkI7Z0JBQzdEWixNQUFNRyxRQUFRLEdBQUdyQixLQUFLcUIsUUFBUTtnQkFDOUJILE1BQU12QixLQUFLLEdBQUdLLEtBQUtMLEtBQUs7Z0JBQ3hCdUIsTUFBTUssR0FBRyxHQUFHdkIsS0FBS3VCLEdBQUc7Z0JBQ3BCTCxNQUFNTSxHQUFHLEdBQUd4QixLQUFLeUIsWUFBWTtnQkFDN0JQLE1BQU1RLFNBQVMsR0FBRzFCLEtBQUswQixTQUFTO2dCQUNoQ1IsTUFBTVMsb0JBQW9CLEdBQUczQixLQUFLMkIsb0JBQW9CO2dCQUN0RFQsTUFBTVUsT0FBTyxHQUFHNUIsS0FBSzRCLE9BQU87WUFDOUI7WUFDQSxPQUFPVjtRQUNUO1FBQ0EsTUFBTUUsU0FBUSxFQUFFQSxPQUFPLEVBQUVGLEtBQUssRUFBRTtZQUM5QixJQUFJQSxPQUFPSSxJQUFJO2dCQUNiRixRQUFRcEIsSUFBSSxHQUFHO29CQUFFc0IsSUFBSUosTUFBTUksRUFBRTtvQkFBRUQsVUFBVUgsTUFBTUcsUUFBUTtvQkFBRTFCLE9BQU91QixNQUFNdkIsS0FBSztvQkFBRTRCLEtBQUtMLE1BQU1LLEdBQUc7b0JBQUVFLGNBQWNQLE1BQU1NLEdBQUc7b0JBQUVFLFdBQVdSLE1BQU1RLFNBQVM7b0JBQUVDLHNCQUFzQlQsTUFBTVMsb0JBQW9CO29CQUFFQyxTQUFTVixNQUFNVSxPQUFPO2dCQUFBO1lBQzVOO1lBQ0EsT0FBT1I7UUFDVDtJQUVGO0FBRUYsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVybWVzLWVtYWlsLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIkAvc3JjL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJzsgLy8gSW1wb3J0IGJjcnlwdCBsaWJyYXJ5XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcIlNpZ24gaW4gd2l0aCBFbWFpbFwiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIFxuICAgIFxuICAgICAgICBpZiAoY3JlZGVudGlhbHMgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBjcmVkZW50aWFscztcblxuICAgICAgICBsZXQgdXNlciA9IG51bGw7XG4gICAgICAgIGxldCBjbGllbnQgPSBudWxsO1xuXG4gICAgICAgIHRyeXtcbiAgICAgICAgICBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiOi8vMTI3LjAuMC4xOjI3MDE3L2hlcm1lcy1lbWFpbCcsICB7IHVzZU5ld1VybFBhcnNlcjogdHJ1ZSwgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlIH0pXG4gICAgICAgICAgY29uc3QgdXNlcnMgPSAgY2xpZW50LmRiKCkuY29sbGVjdGlvbigndXNlcnMnKTtcbiAgICAgICAgICB1c2VyID0gYXdhaXQgdXNlcnMuZmluZE9uZSh7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOmVtYWlsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyKXtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH1cbiAgICAgIFxuXG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgRW1haWxcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKVxuICAgICAgICBjb25zdCBpc01hdGNoID0gIGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcbiAgICAgICAgaWYgKCFpc01hdGNoKSB7XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFBhc3N3b3JkXCIpO1xuICAgICAgICB9XG5cbiBcblxuXG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgc2VjcmV0OiBcInNlY3JldFwiLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciwgdHJpZ2dlciwgc2Vzc2lvbiB9KSB7XG4gICAgICBpZih0cmlnZ2VyPT09XCJ1cGRhdGVcIil7XG4gICAgICAgIHRva2VuLnVzZXJuYW1lID0gc2Vzc2lvbi51c2VybmFtZTtcbiAgICAgICAgdG9rZW4uZW1haWwgPSBzZXNzaW9uLmVtYWlsO1xuICAgICAgICB0b2tlbi5pZCA9IHNlc3Npb24uaWQ7XG4gICAgICAgIHRva2VuLmtleSA9IHNlc3Npb24ua2V5O1xuICAgICAgICB0b2tlbi5vcmcgPSBzZXNzaW9uLm9yZ2FuaXphdGlvbjtcbiAgICAgICAgdG9rZW4ub3JnX2VtYWlsID0gc2Vzc2lvbi5vcmdfZW1haWw7XG4gICAgICAgIHRva2VuLmNvcnBvcmF0aW9uX3Bhc3N3b3JkID0gc2Vzc2lvbi5jb3Jwb3JhdGlvbl9wYXNzd29yZDtcbiAgICAgICAgdG9rZW4uc2VydmljZSA9IHNlc3Npb24uc2VydmljZTtcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgfVxuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLl9pZC50b1N0cmluZygpOyAvLyBDb252ZXJ0IE9iamVjdElEIHRvIHN0cmluZ1xuICAgICAgICB0b2tlbi51c2VybmFtZSA9IHVzZXIudXNlcm5hbWU7XG4gICAgICAgIHRva2VuLmVtYWlsID0gdXNlci5lbWFpbDtcbiAgICAgICAgdG9rZW4ua2V5ID0gdXNlci5rZXk7XG4gICAgICAgIHRva2VuLm9yZyA9IHVzZXIub3JnYW5pemF0aW9uO1xuICAgICAgICB0b2tlbi5vcmdfZW1haWwgPSB1c2VyLm9yZ19lbWFpbDtcbiAgICAgICAgdG9rZW4uY29ycG9yYXRpb25fcGFzc3dvcmQgPSB1c2VyLmNvcnBvcmF0aW9uX3Bhc3N3b3JkO1xuICAgICAgICB0b2tlbi5zZXJ2aWNlID0gdXNlci5zZXJ2aWNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmICh0b2tlbj8uaWQpIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyID0geyBpZDogdG9rZW4uaWQsIHVzZXJuYW1lOiB0b2tlbi51c2VybmFtZSwgZW1haWw6IHRva2VuLmVtYWlsLCBrZXk6IHRva2VuLmtleSwgb3JnYW5pemF0aW9uOiB0b2tlbi5vcmcsIG9yZ19lbWFpbDogdG9rZW4ub3JnX2VtYWlsLCBjb3Jwb3JhdGlvbl9wYXNzd29yZDogdG9rZW4uY29ycG9yYXRpb25fcGFzc3dvcmQsIHNlcnZpY2U6IHRva2VuLnNlcnZpY2V9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfVxuICAgIFxuICB9XG4gICAgXG59KTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiVXNlciIsIk1vbmdvQ2xpZW50IiwiYmNyeXB0IiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJjbGllbnQiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlcnMiLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwiaXNNYXRjaCIsImNvbXBhcmUiLCJzZWNyZXQiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInRyaWdnZXIiLCJzZXNzaW9uIiwidXNlcm5hbWUiLCJpZCIsImtleSIsIm9yZyIsIm9yZ2FuaXphdGlvbiIsIm9yZ19lbWFpbCIsImNvcnBvcmF0aW9uX3Bhc3N3b3JkIiwic2VydmljZSIsIl9pZCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n // Import mongoose library\n // Import bcrypt library\nconst Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema); // Create a Schema\nlet serviceValues = [\n    \"1und1\",\n    \"AOL\",\n    \"DebugMail.io\",\n    \"DynectEmail\",\n    \"FastMail\",\n    \"GandiMail\",\n    \"Gmail\",\n    \"Godaddy\",\n    \"GodaddyAsia\",\n    \"GodaddyEurope\",\n    \"hot.ee\",\n    \"Hotmail\",\n    \"iCloud\",\n    \"mail.ee\",\n    \"Mail.ru\",\n    \"Mailgun\",\n    \"Mailjet\",\n    \"Mandrill\",\n    \"Naver\",\n    \"Postmark\",\n    \"QQ\",\n    \"QQex\",\n    \"SendCloud\",\n    \"SendGrid\",\n    \"SES\",\n    \"Sparkpost\",\n    \"Yahoo\",\n    \"Yandex\",\n    \"Zoho\",\n    \"\"\n];\n//create a match function for the email\nconst UserSchema = new Schema({\n    username: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true,\n        unique: false\n    },\n    key: {\n        type: String,\n        required: false,\n        unique: false\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: false\n    },\n    org_email: {\n        type: String,\n        required: false,\n        unique: false\n    },\n    organization: {\n        type: String,\n        required: false,\n        unique: false\n    },\n    user_emails: [\n        {\n            type: String\n        }\n    ],\n    corporation_password: {\n        type: String,\n        required: false,\n        unique: false,\n        default: \"\"\n    },\n    service: {\n        type: String,\n        enum: serviceValues,\n        default: \"\"\n    }\n});\nUserSchema.methods.matchPassword = async function(enteredPassword) {\n    return await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(enteredPassword, this.password);\n};\nlet UserModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema); // Create a User model\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel); // Export the User model\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0MsQ0FBQywwQkFBMEI7QUFDN0IsQ0FBQyx3QkFBd0I7QUFDdkQsTUFBTUUsU0FBU0Ysd0RBQWUsRUFBRSxrQkFBa0I7QUFFbEQsSUFBSUcsZ0JBQWdCO0lBQ2hCO0lBQVM7SUFBTztJQUFnQjtJQUFlO0lBQVk7SUFDM0Q7SUFBUztJQUFXO0lBQWU7SUFBaUI7SUFBVTtJQUM5RDtJQUFVO0lBQVc7SUFBVztJQUFXO0lBQVc7SUFBWTtJQUNsRTtJQUFZO0lBQU07SUFBUTtJQUFhO0lBQVk7SUFBTztJQUMxRDtJQUFTO0lBQVU7SUFBUTtDQUM5QjtBQUVELHVDQUF1QztBQUd2QyxNQUFNQyxhQUFhLElBQUlGLE9BQU87SUFDMUJHLFVBQVU7UUFDTkMsTUFBS0M7UUFDTEMsVUFBVTtRQUNWQyxRQUFRO0lBQ1o7SUFDQUMsVUFBVTtRQUNOSixNQUFLQztRQUNMQyxVQUFVO1FBQ1ZDLFFBQVE7SUFDWjtJQUNBRSxLQUFJO1FBQ0FMLE1BQUtDO1FBQ0xDLFVBQVU7UUFDVkMsUUFBUTtJQUNaO0lBQ0FHLE9BQU87UUFDSE4sTUFBS0M7UUFDTEMsVUFBVTtRQUNWQyxRQUFRO0lBQ1o7SUFDQUksV0FBVztRQUNQUCxNQUFLQztRQUNMQyxVQUFVO1FBQ1ZDLFFBQVE7SUFDWjtJQUNBSyxjQUFjO1FBQ1ZSLE1BQUtDO1FBQ0xDLFVBQVU7UUFDVkMsUUFBUTtJQUNaO0lBQ0FNLGFBQVk7UUFDUjtZQUNJVCxNQUFLQztRQUNUO0tBQ0g7SUFDRFMsc0JBQXNCO1FBQ2xCVixNQUFLQztRQUNMQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUlEsU0FBUztJQUNiO0lBQ0RDLFNBQVM7UUFDSlosTUFBTUM7UUFDTlksTUFBTWhCO1FBQ05jLFNBQVM7SUFDYjtBQUdKO0FBRUFiLFdBQVdnQixPQUFPLENBQUNDLGFBQWEsR0FBRyxlQUFnQkMsZUFBZTtJQUM5RCxPQUFPLE1BQU1yQix1REFBYyxDQUFDcUIsaUJBQWlCLElBQUksQ0FBQ1osUUFBUTtBQUMxRDtBQUdKLElBQUljLFlBQVl4Qix3REFBZSxDQUFDMEIsSUFBSSxJQUFHMUIscURBQWMsQ0FBQyxRQUFRSSxhQUFhLHNCQUFzQjtBQUNqRyxpRUFBZW9CLFNBQVNBLEVBQUMsQ0FBQyx3QkFBd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZXJtZXMtZW1haWwvLi9zcmMvbW9kZWxzL1VzZXIuanM/N2QwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnOyAvLyBJbXBvcnQgbW9uZ29vc2UgbGlicmFyeVxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7IC8vIEltcG9ydCBiY3J5cHQgbGlicmFyeVxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hOyAvLyBDcmVhdGUgYSBTY2hlbWFcblxubGV0IHNlcnZpY2VWYWx1ZXMgPSBbXG4gICAgXCIxdW5kMVwiLCBcIkFPTFwiLCBcIkRlYnVnTWFpbC5pb1wiLCBcIkR5bmVjdEVtYWlsXCIsIFwiRmFzdE1haWxcIiwgXCJHYW5kaU1haWxcIiwgXG4gICAgXCJHbWFpbFwiLCBcIkdvZGFkZHlcIiwgXCJHb2RhZGR5QXNpYVwiLCBcIkdvZGFkZHlFdXJvcGVcIiwgXCJob3QuZWVcIiwgXCJIb3RtYWlsXCIsIFxuICAgIFwiaUNsb3VkXCIsIFwibWFpbC5lZVwiLCBcIk1haWwucnVcIiwgXCJNYWlsZ3VuXCIsIFwiTWFpbGpldFwiLCBcIk1hbmRyaWxsXCIsIFwiTmF2ZXJcIiwgXG4gICAgXCJQb3N0bWFya1wiLCBcIlFRXCIsIFwiUVFleFwiLCBcIlNlbmRDbG91ZFwiLCBcIlNlbmRHcmlkXCIsIFwiU0VTXCIsIFwiU3Bhcmtwb3N0XCIsIFxuICAgIFwiWWFob29cIiwgXCJZYW5kZXhcIiwgXCJab2hvXCIsICcnXG5dO1xuXG4vL2NyZWF0ZSBhIG1hdGNoIGZ1bmN0aW9uIGZvciB0aGUgZW1haWxcblxuXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7IC8vIENyZWF0ZSBhIFVzZXJTY2hlbWFcbiAgICB1c2VybmFtZToge1xuICAgICAgICB0eXBlOlN0cmluZywgXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB1bmlxdWU6IHRydWVcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICAgIHR5cGU6U3RyaW5nLCBcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHVuaXF1ZTogZmFsc2VcbiAgICB9LFxuICAgIGtleTp7XG4gICAgICAgIHR5cGU6U3RyaW5nLCBcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICB1bmlxdWU6IGZhbHNlXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOlN0cmluZywgXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB1bmlxdWU6IGZhbHNlXG4gICAgfSxcbiAgICBvcmdfZW1haWw6IHtcbiAgICAgICAgdHlwZTpTdHJpbmcsIFxuICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgIHVuaXF1ZTogZmFsc2VcbiAgICB9LFxuICAgIG9yZ2FuaXphdGlvbjoge1xuICAgICAgICB0eXBlOlN0cmluZywgXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgdW5pcXVlOiBmYWxzZVxuICAgIH0sXG4gICAgdXNlcl9lbWFpbHM6W1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOlN0cmluZ1xuICAgICAgICB9XG4gICAgXSxcbiAgICBjb3Jwb3JhdGlvbl9wYXNzd29yZDoge1xuICAgICAgICB0eXBlOlN0cmluZywgXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgdW5pcXVlOiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH0sXG4gICBzZXJ2aWNlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZW51bTogc2VydmljZVZhbHVlcyxcbiAgICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH1cbiAgICBcbiAgICBcbn0pO1xuXG5Vc2VyU2NoZW1hLm1ldGhvZHMubWF0Y2hQYXNzd29yZCA9IGFzeW5jIGZ1bmN0aW9uIChlbnRlcmVkUGFzc3dvcmQpIHtcbiAgICByZXR1cm4gYXdhaXQgYmNyeXB0LmNvbXBhcmUoZW50ZXJlZFBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkKTtcbiAgICB9XG4gICAgXG5cbmxldCBVc2VyTW9kZWwgPSBtb25nb29zZS5tb2RlbHMuVXNlcnx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgVXNlclNjaGVtYSk7IC8vIENyZWF0ZSBhIFVzZXIgbW9kZWxcbmV4cG9ydCBkZWZhdWx0IFVzZXJNb2RlbDsgLy8gRXhwb3J0IHRoZSBVc2VyIG1vZGVsXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJiY3J5cHQiLCJTY2hlbWEiLCJzZXJ2aWNlVmFsdWVzIiwiVXNlclNjaGVtYSIsInVzZXJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwicGFzc3dvcmQiLCJrZXkiLCJlbWFpbCIsIm9yZ19lbWFpbCIsIm9yZ2FuaXphdGlvbiIsInVzZXJfZW1haWxzIiwiY29ycG9yYXRpb25fcGFzc3dvcmQiLCJkZWZhdWx0Iiwic2VydmljZSIsImVudW0iLCJtZXRob2RzIiwibWF0Y2hQYXNzd29yZCIsImVudGVyZWRQYXNzd29yZCIsImNvbXBhcmUiLCJVc2VyTW9kZWwiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/models/User.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fauth%2F%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();