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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/models/User */ \"(api)/./src/models/User.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n // Import bcrypt library\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"Sign in with Email\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (credentials == null) return null;\n                const { email, password } = credentials;\n                let user = null;\n                let client = null;\n                try {\n                    client = await mongodb__WEBPACK_IMPORTED_MODULE_3__.MongoClient.connect(\"mongodb://127.0.0.1:27017/hermes-email\", {\n                        useNewUrlParser: true,\n                        useUnifiedTopology: true\n                    });\n                    const users = client.db().collection(\"users\");\n                    user = await users.findOne({\n                        email: email\n                    });\n                } catch (err) {\n                    console.log(err);\n                }\n                if (!user) {\n                    throw new Error(\"Invalid Email\");\n                }\n                console.log(user);\n                const isMatch = await bcryptjs__WEBPACK_IMPORTED_MODULE_4___default().compare(password, user.password);\n                if (!isMatch) {\n                    throw new Error(\"Invalid Password\");\n                }\n                return user;\n            }\n        })\n    ],\n    secret: \"secret\",\n    callbacks: {\n        async jwt ({ token, user, trigger, session }) {\n            if (trigger === \"update\") {\n                token.username = session.user.username;\n                token.email = session.user.email;\n                token.id = session.user.id;\n                token.key = session.user.key;\n                token.org = session.user.organization;\n                token.org_email = session.user.organization_email;\n                token.corporation_password = session.user.corporation_password;\n                return token;\n            }\n            if (user) {\n                token.id = user._id.toString(); // Convert ObjectID to string\n                token.username = user.username;\n                token.email = user.email;\n                token.key = user.key;\n                token.org = user.organization;\n                token.org_email = user.org_email;\n                token.corporation_password = user.corporation_password;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token?.id) {\n                session.user = {\n                    id: token.id,\n                    username: token.username,\n                    email: token.email,\n                    key: token.key,\n                    organization: token.org,\n                    organization_email: token.org_email,\n                    corporation_password: token.corporation_password\n                };\n            }\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDaUM7QUFDN0I7QUFDQztBQUNSLENBQUMsd0JBQXdCO0FBS3ZELGlFQUFlQSxnREFBUUEsQ0FBQztJQUN0QkssV0FBVztRQUNUSixzRUFBbUJBLENBQUM7WUFDbEJLLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBTztnQkFDdENDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUd6QixJQUFJQSxlQUFlLE1BQU0sT0FBTztnQkFDaEMsTUFBTSxFQUFFQyxLQUFLLEVBQUVHLFFBQVEsRUFBRSxHQUFHSjtnQkFFNUIsSUFBSU0sT0FBTztnQkFDWCxJQUFJQyxTQUFTO2dCQUViLElBQUc7b0JBQ0RBLFNBQVMsTUFBTVgsZ0RBQVdBLENBQUNZLE9BQU8sQ0FBQywwQ0FBMkM7d0JBQUVDLGlCQUFpQjt3QkFBTUMsb0JBQW9CO29CQUFLO29CQUNoSSxNQUFNQyxRQUFTSixPQUFPSyxFQUFFLEdBQUdDLFVBQVUsQ0FBQztvQkFDdENQLE9BQU8sTUFBTUssTUFBTUcsT0FBTyxDQUFDO3dCQUNqQmIsT0FBTUE7b0JBQ1Y7Z0JBQ1IsRUFDQSxPQUFNYyxLQUFJO29CQUNSQyxRQUFRQyxHQUFHLENBQUNGO2dCQUNkO2dCQUdBLElBQUksQ0FBQ1QsTUFBTTtvQkFDVCxNQUFNLElBQUlZLE1BQU07Z0JBQ2xCO2dCQUVBRixRQUFRQyxHQUFHLENBQUNYO2dCQUNaLE1BQU1hLFVBQVcsTUFBTXRCLHVEQUFjLENBQUNPLFVBQVVFLEtBQUtGLFFBQVE7Z0JBQzdELElBQUksQ0FBQ2UsU0FBUztvQkFFWixNQUFNLElBQUlELE1BQU07Z0JBQ2xCO2dCQUtBLE9BQU9aO1lBQ1Q7UUFDRjtLQUNEO0lBQ0RlLFFBQVE7SUFDUkMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFbEIsSUFBSSxFQUFFbUIsT0FBTyxFQUFFQyxPQUFPLEVBQUU7WUFDekMsSUFBR0QsWUFBVSxVQUFTO2dCQUNwQkQsTUFBTUcsUUFBUSxHQUFHRCxRQUFRcEIsSUFBSSxDQUFDcUIsUUFBUTtnQkFDdENILE1BQU12QixLQUFLLEdBQUd5QixRQUFRcEIsSUFBSSxDQUFDTCxLQUFLO2dCQUNoQ3VCLE1BQU1JLEVBQUUsR0FBR0YsUUFBUXBCLElBQUksQ0FBQ3NCLEVBQUU7Z0JBQzFCSixNQUFNSyxHQUFHLEdBQUdILFFBQVFwQixJQUFJLENBQUN1QixHQUFHO2dCQUM1QkwsTUFBTU0sR0FBRyxHQUFHSixRQUFRcEIsSUFBSSxDQUFDeUIsWUFBWTtnQkFDckNQLE1BQU1RLFNBQVMsR0FBR04sUUFBUXBCLElBQUksQ0FBQzJCLGtCQUFrQjtnQkFDakRULE1BQU1VLG9CQUFvQixHQUFHUixRQUFRcEIsSUFBSSxDQUFDNEIsb0JBQW9CO2dCQUM5RCxPQUFPVjtZQUNUO1lBQ0EsSUFBSWxCLE1BQU07Z0JBQ1JrQixNQUFNSSxFQUFFLEdBQUd0QixLQUFLNkIsR0FBRyxDQUFDQyxRQUFRLElBQUksNkJBQTZCO2dCQUM3RFosTUFBTUcsUUFBUSxHQUFHckIsS0FBS3FCLFFBQVE7Z0JBQzlCSCxNQUFNdkIsS0FBSyxHQUFHSyxLQUFLTCxLQUFLO2dCQUN4QnVCLE1BQU1LLEdBQUcsR0FBR3ZCLEtBQUt1QixHQUFHO2dCQUNwQkwsTUFBTU0sR0FBRyxHQUFHeEIsS0FBS3lCLFlBQVk7Z0JBQzdCUCxNQUFNUSxTQUFTLEdBQUcxQixLQUFLMEIsU0FBUztnQkFDaENSLE1BQU1VLG9CQUFvQixHQUFHNUIsS0FBSzRCLG9CQUFvQjtZQUN4RDtZQUNBLE9BQU9WO1FBQ1Q7UUFDQSxNQUFNRSxTQUFRLEVBQUVBLE9BQU8sRUFBRUYsS0FBSyxFQUFFO1lBQzlCLElBQUlBLE9BQU9JLElBQUk7Z0JBQ2JGLFFBQVFwQixJQUFJLEdBQUc7b0JBQUVzQixJQUFJSixNQUFNSSxFQUFFO29CQUFFRCxVQUFVSCxNQUFNRyxRQUFRO29CQUFFMUIsT0FBT3VCLE1BQU12QixLQUFLO29CQUFFNEIsS0FBS0wsTUFBTUssR0FBRztvQkFBRUUsY0FBY1AsTUFBTU0sR0FBRztvQkFBRUcsb0JBQW9CVCxNQUFNUSxTQUFTO29CQUFFRSxzQkFBc0JWLE1BQU1VLG9CQUFvQjtnQkFBQTtZQUM3TTtZQUNBLE9BQU9SO1FBQ1Q7SUFFRjtBQUVGLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlcm1lcy1lbWFpbC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBVc2VyIGZyb20gXCJAL3NyYy9tb2RlbHMvVXNlclwiO1xuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7IC8vIEltcG9ydCBiY3J5cHQgbGlicmFyeVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJTaWduIGluIHdpdGggRW1haWxcIixcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBcbiAgICBcbiAgICAgICAgaWYgKGNyZWRlbnRpYWxzID09IG51bGwpIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gY3JlZGVudGlhbHM7XG5cbiAgICAgICAgbGV0IHVzZXIgPSBudWxsO1xuICAgICAgICBsZXQgY2xpZW50ID0gbnVsbDtcblxuICAgICAgICB0cnl7XG4gICAgICAgICAgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYjovLzEyNy4wLjAuMToyNzAxNy9oZXJtZXMtZW1haWwnLCAgeyB1c2VOZXdVcmxQYXJzZXI6IHRydWUsIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSB9KVxuICAgICAgICAgIGNvbnN0IHVzZXJzID0gIGNsaWVudC5kYigpLmNvbGxlY3Rpb24oJ3VzZXJzJyk7XG4gICAgICAgICAgdXNlciA9IGF3YWl0IHVzZXJzLmZpbmRPbmUoe1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDplbWFpbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9XG4gICAgICBcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIEVtYWlsXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2codXNlcilcbiAgICAgICAgY29uc3QgaXNNYXRjaCA9ICBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XG4gICAgICAgIGlmICghaXNNYXRjaCkge1xuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBQYXNzd29yZFwiKTtcbiAgICAgICAgfVxuXG4gXG5cblxuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHNlY3JldDogXCJzZWNyZXRcIixcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIsIHRyaWdnZXIsIHNlc3Npb24gfSkge1xuICAgICAgaWYodHJpZ2dlcj09PVwidXBkYXRlXCIpe1xuICAgICAgICB0b2tlbi51c2VybmFtZSA9IHNlc3Npb24udXNlci51c2VybmFtZTtcbiAgICAgICAgdG9rZW4uZW1haWwgPSBzZXNzaW9uLnVzZXIuZW1haWw7XG4gICAgICAgIHRva2VuLmlkID0gc2Vzc2lvbi51c2VyLmlkO1xuICAgICAgICB0b2tlbi5rZXkgPSBzZXNzaW9uLnVzZXIua2V5O1xuICAgICAgICB0b2tlbi5vcmcgPSBzZXNzaW9uLnVzZXIub3JnYW5pemF0aW9uO1xuICAgICAgICB0b2tlbi5vcmdfZW1haWwgPSBzZXNzaW9uLnVzZXIub3JnYW5pemF0aW9uX2VtYWlsO1xuICAgICAgICB0b2tlbi5jb3Jwb3JhdGlvbl9wYXNzd29yZCA9IHNlc3Npb24udXNlci5jb3Jwb3JhdGlvbl9wYXNzd29yZDtcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgfVxuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLl9pZC50b1N0cmluZygpOyAvLyBDb252ZXJ0IE9iamVjdElEIHRvIHN0cmluZ1xuICAgICAgICB0b2tlbi51c2VybmFtZSA9IHVzZXIudXNlcm5hbWU7XG4gICAgICAgIHRva2VuLmVtYWlsID0gdXNlci5lbWFpbDtcbiAgICAgICAgdG9rZW4ua2V5ID0gdXNlci5rZXk7XG4gICAgICAgIHRva2VuLm9yZyA9IHVzZXIub3JnYW5pemF0aW9uO1xuICAgICAgICB0b2tlbi5vcmdfZW1haWwgPSB1c2VyLm9yZ19lbWFpbDtcbiAgICAgICAgdG9rZW4uY29ycG9yYXRpb25fcGFzc3dvcmQgPSB1c2VyLmNvcnBvcmF0aW9uX3Bhc3N3b3JkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmICh0b2tlbj8uaWQpIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyID0geyBpZDogdG9rZW4uaWQsIHVzZXJuYW1lOiB0b2tlbi51c2VybmFtZSwgZW1haWw6IHRva2VuLmVtYWlsLCBrZXk6IHRva2VuLmtleSwgb3JnYW5pemF0aW9uOiB0b2tlbi5vcmcsIG9yZ2FuaXphdGlvbl9lbWFpbDogdG9rZW4ub3JnX2VtYWlsLCBjb3Jwb3JhdGlvbl9wYXNzd29yZDogdG9rZW4uY29ycG9yYXRpb25fcGFzc3dvcmR9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfVxuICAgIFxuICB9XG4gICAgXG59KTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiVXNlciIsIk1vbmdvQ2xpZW50IiwiYmNyeXB0IiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJjbGllbnQiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlcnMiLCJkYiIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwiaXNNYXRjaCIsImNvbXBhcmUiLCJzZWNyZXQiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInRyaWdnZXIiLCJzZXNzaW9uIiwidXNlcm5hbWUiLCJpZCIsImtleSIsIm9yZyIsIm9yZ2FuaXphdGlvbiIsIm9yZ19lbWFpbCIsIm9yZ2FuaXphdGlvbl9lbWFpbCIsImNvcnBvcmF0aW9uX3Bhc3N3b3JkIiwiX2lkIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n // Import mongoose library\n // Import bcrypt library\nconst Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema); // Create a Schema\n//create a match function for the email\nconst UserSchema = new Schema({\n    username: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true,\n        unique: false\n    },\n    key: {\n        type: String,\n        required: false,\n        unique: false\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: false\n    },\n    org_email: {\n        type: String,\n        required: false,\n        unique: false\n    },\n    organization: {\n        type: String,\n        required: false,\n        unique: false\n    },\n    user_emails: [\n        {\n            type: String\n        }\n    ],\n    corporation_password: {\n        type: String,\n        required: false,\n        unique: false,\n        default: \"\"\n    }\n});\nUserSchema.methods.matchPassword = async function(enteredPassword) {\n    return await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(enteredPassword, this.password);\n};\nlet UserModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema); // Create a User model\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel); // Export the User model\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0MsQ0FBQywwQkFBMEI7QUFDN0IsQ0FBQyx3QkFBd0I7QUFDdkQsTUFBTUUsU0FBU0Ysd0RBQWUsRUFBRSxrQkFBa0I7QUFHbEQsdUNBQXVDO0FBR3ZDLE1BQU1HLGFBQWEsSUFBSUQsT0FBTztJQUMxQkUsVUFBVTtRQUNOQyxNQUFLQztRQUNMQyxVQUFVO1FBQ1ZDLFFBQVE7SUFDWjtJQUNBQyxVQUFVO1FBQ05KLE1BQUtDO1FBQ0xDLFVBQVU7UUFDVkMsUUFBUTtJQUNaO0lBQ0FFLEtBQUk7UUFDQUwsTUFBS0M7UUFDTEMsVUFBVTtRQUNWQyxRQUFRO0lBQ1o7SUFDQUcsT0FBTztRQUNITixNQUFLQztRQUNMQyxVQUFVO1FBQ1ZDLFFBQVE7SUFDWjtJQUNBSSxXQUFXO1FBQ1BQLE1BQUtDO1FBQ0xDLFVBQVU7UUFDVkMsUUFBUTtJQUNaO0lBQ0FLLGNBQWM7UUFDVlIsTUFBS0M7UUFDTEMsVUFBVTtRQUNWQyxRQUFRO0lBQ1o7SUFDQU0sYUFBWTtRQUNSO1lBQ0lULE1BQUtDO1FBQ1Q7S0FDSDtJQUNEUyxzQkFBc0I7UUFDbEJWLE1BQUtDO1FBQ0xDLFVBQVU7UUFDVkMsUUFBUTtRQUNSUSxTQUFTO0lBQ2I7QUFFSjtBQUVBYixXQUFXYyxPQUFPLENBQUNDLGFBQWEsR0FBRyxlQUFnQkMsZUFBZTtJQUM5RCxPQUFPLE1BQU1sQix1REFBYyxDQUFDa0IsaUJBQWlCLElBQUksQ0FBQ1YsUUFBUTtBQUMxRDtBQUdKLElBQUlZLFlBQVlyQix3REFBZSxDQUFDdUIsSUFBSSxJQUFHdkIscURBQWMsQ0FBQyxRQUFRRyxhQUFhLHNCQUFzQjtBQUNqRyxpRUFBZWtCLFNBQVNBLEVBQUMsQ0FBQyx3QkFBd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZXJtZXMtZW1haWwvLi9zcmMvbW9kZWxzL1VzZXIuanM/N2QwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnOyAvLyBJbXBvcnQgbW9uZ29vc2UgbGlicmFyeVxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7IC8vIEltcG9ydCBiY3J5cHQgbGlicmFyeVxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hOyAvLyBDcmVhdGUgYSBTY2hlbWFcblxuXG4vL2NyZWF0ZSBhIG1hdGNoIGZ1bmN0aW9uIGZvciB0aGUgZW1haWxcblxuXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7IC8vIENyZWF0ZSBhIFVzZXJTY2hlbWFcbiAgICB1c2VybmFtZToge1xuICAgICAgICB0eXBlOlN0cmluZywgXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB1bmlxdWU6IHRydWVcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICAgIHR5cGU6U3RyaW5nLCBcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHVuaXF1ZTogZmFsc2VcbiAgICB9LFxuICAgIGtleTp7XG4gICAgICAgIHR5cGU6U3RyaW5nLCBcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICB1bmlxdWU6IGZhbHNlXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOlN0cmluZywgXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB1bmlxdWU6IGZhbHNlXG4gICAgfSxcbiAgICBvcmdfZW1haWw6IHtcbiAgICAgICAgdHlwZTpTdHJpbmcsIFxuICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgIHVuaXF1ZTogZmFsc2VcbiAgICB9LFxuICAgIG9yZ2FuaXphdGlvbjoge1xuICAgICAgICB0eXBlOlN0cmluZywgXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgdW5pcXVlOiBmYWxzZVxuICAgIH0sXG4gICAgdXNlcl9lbWFpbHM6W1xuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOlN0cmluZ1xuICAgICAgICB9XG4gICAgXSxcbiAgICBjb3Jwb3JhdGlvbl9wYXNzd29yZDoge1xuICAgICAgICB0eXBlOlN0cmluZywgXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgdW5pcXVlOiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH0gICBcbiAgICBcbn0pO1xuXG5Vc2VyU2NoZW1hLm1ldGhvZHMubWF0Y2hQYXNzd29yZCA9IGFzeW5jIGZ1bmN0aW9uIChlbnRlcmVkUGFzc3dvcmQpIHtcbiAgICByZXR1cm4gYXdhaXQgYmNyeXB0LmNvbXBhcmUoZW50ZXJlZFBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkKTtcbiAgICB9XG4gICAgXG5cbmxldCBVc2VyTW9kZWwgPSBtb25nb29zZS5tb2RlbHMuVXNlcnx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgVXNlclNjaGVtYSk7IC8vIENyZWF0ZSBhIFVzZXIgbW9kZWxcbmV4cG9ydCBkZWZhdWx0IFVzZXJNb2RlbDsgLy8gRXhwb3J0IHRoZSBVc2VyIG1vZGVsXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJiY3J5cHQiLCJTY2hlbWEiLCJVc2VyU2NoZW1hIiwidXNlcm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJwYXNzd29yZCIsImtleSIsImVtYWlsIiwib3JnX2VtYWlsIiwib3JnYW5pemF0aW9uIiwidXNlcl9lbWFpbHMiLCJjb3Jwb3JhdGlvbl9wYXNzd29yZCIsImRlZmF1bHQiLCJtZXRob2RzIiwibWF0Y2hQYXNzd29yZCIsImVudGVyZWRQYXNzd29yZCIsImNvbXBhcmUiLCJVc2VyTW9kZWwiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/models/User.js\n");

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