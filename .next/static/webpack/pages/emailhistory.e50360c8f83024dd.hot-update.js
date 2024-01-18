"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/emailhistory",{

/***/ "./src/components/History.js":
/*!***********************************!*\
  !*** ./src/components/History.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionTitle */ \"./src/components/SectionTitle.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Portfolio = ()=>{\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const [emails, setEmails] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{\n        if (!session) return;\n        let user_id = session.user.id;\n        const portfolioData = await fetch(\"/api/getEmails\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                user_id\n            })\n        });\n        const json = await portfolioData.json();\n        setEmails(json.data);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"work\",\n        className: \"section work-section bg-gray\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SectionTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    heading: \"Email History\",\n                    subHeading: \"Drafts\"\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/History.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row g-4 lightbox-gallery\",\n                    children: emails.map((portfolio)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-sm-6 col-lg-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"portfolio-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"portfolio-img\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: portfolio.image,\n                                            className: \"gallery-link\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: portfolio.image,\n                                                alt: \"image\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/History.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/History.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/History.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"portfolio-info\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                children: portfolio.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/History.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: portfolio.subtitle\n                                            }, void 0, false, {\n                                                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/History.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: portfolio.image,\n                                                className: \"gallery-link\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"fas fa-arrow-right\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/History.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/History.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/History.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/History.js\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, undefined)\n                        }, portfolio.id, false, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/History.js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/History.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/History.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/History.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Portfolio, \"1huhLXZlIGJv7u6A5z1PrRo9LUM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Portfolio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IaXN0b3J5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEM7QUFDVDtBQUNZO0FBQ1g7QUFJbEMsTUFBTUksWUFBWTs7SUFDZCxNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRUMsTUFBTSxFQUFFLEdBQUdMLDJEQUFVQTtJQUM1QyxNQUFNLENBQUVNLFFBQVFDLFVBQVcsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUl4Q0UsZ0RBQVNBLENBQUM7UUFDTixJQUFJLENBQUNHLFNBQVM7UUFDWCxJQUFJSSxVQUFVSixRQUFRSyxJQUFJLENBQUNDLEVBQUU7UUFDaEMsTUFBTUMsZ0JBQWdCLE1BQU1DLE1BQU0sa0JBQWtCO1lBQ3JEQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0wsZ0JBQWdCO1lBQ3BCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRVQ7WUFBUTtRQUNuQztRQUNBLE1BQU1VLE9BQU8sTUFBTVAsY0FBY08sSUFBSTtRQUNyQ1gsVUFBVVcsS0FBS2YsSUFBSTtJQUNsQjtJQUtILHFCQUNFLDhEQUFDZ0I7UUFBUVQsSUFBRztRQUFPVSxXQUFVO2tCQUMzQiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUN0QixxREFBWUE7b0JBQUN3QixTQUFTO29CQUFpQkMsWUFBWTs7Ozs7OzhCQUNwRCw4REFBQ0Y7b0JBQUlELFdBQVU7OEJBQ1pkLE9BQU9rQixHQUFHLENBQUMsQ0FBQ0MsMEJBQ1gsOERBQUNKOzRCQUFJRCxXQUFVO3NDQUNiLDRFQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNDO3dDQUFJRCxXQUFVO2tEQUNiLDRFQUFDTTs0Q0FBRUMsTUFBTUYsVUFBVUcsS0FBSzs0Q0FBRVIsV0FBVTtzREFDbEMsNEVBQUNTO2dEQUFJQyxLQUFLTCxVQUFVRyxLQUFLO2dEQUFFRyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7O2tEQUduQyw4REFBQ1Y7d0NBQUlELFdBQVU7OzBEQUNiLDhEQUFDWTswREFBSVAsVUFBVVEsS0FBSzs7Ozs7OzBEQUNwQiw4REFBQ0M7MERBQU1ULFVBQVVVLFFBQVE7Ozs7OzswREFDekIsOERBQUNUO2dEQUFFQyxNQUFNRixVQUFVRyxLQUFLO2dEQUFFUixXQUFVOzBEQUNsQyw0RUFBQ2dCO29EQUFFaEIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBWG1CSyxVQUFVZixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQmhFO0dBbERNUjs7UUFDZ0NGLHVEQUFVQTs7O0tBRDFDRTtBQW1ETiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IaXN0b3J5LmpzPzQzODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi9TZWN0aW9uVGl0bGVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5cblxuY29uc3QgUG9ydGZvbGlvID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKClcbiAgICBjb25zdCBbIGVtYWlscywgc2V0RW1haWxzIF0gPSB1c2VTdGF0ZShbXSlcblxuXG5cbiAgICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICAgICAgIGlmICghc2Vzc2lvbikgcmV0dXJuO1xuICAgICAgICAgICAgbGV0IHVzZXJfaWQgPSBzZXNzaW9uLnVzZXIuaWQ7XG4gICAgICAgICBjb25zdCBwb3J0Zm9saW9EYXRhID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2V0RW1haWxzJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VyX2lkIH0pLFxuICAgIH0pXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHBvcnRmb2xpb0RhdGEuanNvbigpXG4gICAgc2V0RW1haWxzKGpzb24uZGF0YSlcbiAgICAgfSlcbiAgIFxuXG5cbiAgIFxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwid29ya1wiIGNsYXNzTmFtZT1cInNlY3Rpb24gd29yay1zZWN0aW9uIGJnLWdyYXlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxTZWN0aW9uVGl0bGUgaGVhZGluZz17XCJFbWFpbCBIaXN0b3J5XCJ9IHN1YkhlYWRpbmc9e1wiRHJhZnRzXCJ9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGctNCBsaWdodGJveC1nYWxsZXJ5XCI+XG4gICAgICAgICAge2VtYWlscy5tYXAoKHBvcnRmb2xpbykgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2wtbGctNFwiIGtleT17cG9ydGZvbGlvLmlkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tYm94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8taW1nXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3J0Zm9saW8uaW1hZ2V9IGNsYXNzTmFtZT1cImdhbGxlcnktbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9ydGZvbGlvLmltYWdlfSBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgPGg2Pntwb3J0Zm9saW8udGl0bGV9PC9oNj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3J0Zm9saW8uc3VidGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cG9ydGZvbGlvLmltYWdlfSBjbGFzc05hbWU9XCJnYWxsZXJ5LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXJpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvO1xuIl0sIm5hbWVzIjpbIlNlY3Rpb25UaXRsZSIsInVzZVN0YXRlIiwidXNlU2Vzc2lvbiIsInVzZUVmZmVjdCIsIlBvcnRmb2xpbyIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwiZW1haWxzIiwic2V0RW1haWxzIiwidXNlcl9pZCIsInVzZXIiLCJpZCIsInBvcnRmb2xpb0RhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaGVhZGluZyIsInN1YkhlYWRpbmciLCJtYXAiLCJwb3J0Zm9saW8iLCJhIiwiaHJlZiIsImltYWdlIiwiaW1nIiwic3JjIiwiYWx0IiwiaDYiLCJ0aXRsZSIsInNwYW4iLCJzdWJ0aXRsZSIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/History.js\n"));

/***/ })

});