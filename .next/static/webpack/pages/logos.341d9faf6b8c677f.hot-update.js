"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/logos",{

/***/ "./src/components/Logo.js":
/*!********************************!*\
  !*** ./src/components/Logo.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionTitle */ \"./src/components/SectionTitle.js\");\n/* harmony import */ var react_csv_importer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-csv-importer */ \"./node_modules/react-csv-importer/dist/index.js\");\n/* harmony import */ var react_csv_importer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_csv_importer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Logo = ()=>{\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const { update } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    async function handleUpload(e) {\n        if (e.target.files.length > 0) setFile(URL.createObjectURL(e.target.files[0]));\n        const imageData = new FormData();\n        imageData.append(\"logo\", e.target.files[0]);\n        imageData.append(\"id\", session.user.id);\n        let data = await fetch(\"http://localhost:4000/api/logo_upload\", {\n            method: \"POST\",\n            body: imageData\n        });\n        if (data.status == 200) {\n            data = await data.json();\n        } else {\n            return;\n        }\n        await fetch(\"/api/logo\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                logo: data.image_destination,\n                id: session.user.id\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        session.user.logo = data.image_destination;\n        update(session.user, false);\n    }\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (status == \"unauthenticated\") {\n            router.push(\"/login\");\n            return;\n        }\n        if (session) {\n            setFile(session.user.logo);\n        }\n    }, [\n        status\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"skill\",\n        className: \"section experience-section\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SectionTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            heading: \"Upload Logo\",\n                            subHeading: \"Logo\",\n                            text: \"Upload your logo as a png to render on your emails\"\n                        }, void 0, false, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                    lineNumber: 72,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row mt-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-group\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"image_upload\",\n                                    className: \"h3 my-3\",\n                                    children: \"Add Image:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"form-control\",\n                                    id: \"image_upload\",\n                                    type: \"file\",\n                                    onChange: handleUpload\n                                }, void 0, false, {\n                                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                    lineNumber: 78,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"mt-4 mb-4\",\n                            children: \"Current Logo\"\n                        }, void 0, false, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: file,\n                                className: \"img-fluid\",\n                                style: {\n                                    maxWidth: \"10%\",\n                                    height: \"auto\"\n                                },\n                                alt: \"Current Logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n            lineNumber: 71,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n        lineNumber: 70,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Logo, \"ISgBq2boZy/B2wFdZeiXNqw0jdI=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Logo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo);\nvar _c;\n$RefreshReg$(_c, \"Logo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9nby5qcz9iZDIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSBcIi4vU2VjdGlvblRpdGxlXCI7XG5pbXBvcnQgeyBJbXBvcnRlciwgSW1wb3J0ZXJGaWVsZCB9IGZyb20gJ3JlYWN0LWNzdi1pbXBvcnRlcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5cblxuXG5cbmNvbnN0IExvZ28gPSAoKSA9PiB7XG5cblxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpXG4gICAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgeyB1cGRhdGUgfSA9IHVzZVNlc3Npb24oKTtcblxuXG4gICAgICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlVXBsb2FkKGUpIHtcbiAgICAgICAgaWYoZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMClcbiAgICAgICAgc2V0RmlsZShVUkwuY3JlYXRlT2JqZWN0VVJMKGUudGFyZ2V0LmZpbGVzWzBdKSk7XG4gICAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgaW1hZ2VEYXRhLmFwcGVuZCgnbG9nbycsIGUudGFyZ2V0LmZpbGVzWzBdKVxuICAgICAgICAgIGltYWdlRGF0YS5hcHBlbmQoJ2lkJywgc2Vzc2lvbi51c2VyLmlkKVxuXG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL2xvZ29fdXBsb2FkJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogaW1hZ2VEYXRhXG4gICAgICB9KVxuICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gMjAwKXtcbiAgICAgIGRhdGEgPSBhd2FpdCBkYXRhLmpzb24oKVxuICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuXG4gICAgICBhd2FpdCBmZXRjaCgnL2FwaS9sb2dvJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2xvZ286IGRhdGEuaW1hZ2VfZGVzdGluYXRpb24sIGlkOiBzZXNzaW9uLnVzZXIuaWR9KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgc2Vzc2lvbi51c2VyLmxvZ28gPSBkYXRhLmltYWdlX2Rlc3RpbmF0aW9uO1xuXG4gICAgICB1cGRhdGUoc2Vzc2lvbi51c2VyLCBmYWxzZSk7XG5cblxuICAgIH1cblxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgaWYgKHN0YXR1cyA9PSBcInVuYXV0aGVudGljYXRlZFwiKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZihzZXNzaW9uKXtcbiAgICAgIHNldEZpbGUoc2Vzc2lvbi51c2VyLmxvZ28pXG4gICAgfVxufSwgW3N0YXR1c10pICAgIFxuXG5cblxuIHJldHVybiAoXG4gIDxzZWN0aW9uIGlkPVwic2tpbGxcIiBjbGFzc05hbWU9XCJzZWN0aW9uIGV4cGVyaWVuY2Utc2VjdGlvblwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgIDxTZWN0aW9uVGl0bGUgaGVhZGluZz1cIlVwbG9hZCBMb2dvXCIgc3ViSGVhZGluZz1cIkxvZ29cIiB0ZXh0PVwiVXBsb2FkIHlvdXIgbG9nbyBhcyBhIHBuZyB0byByZW5kZXIgb24geW91ciBlbWFpbHNcIiAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZV91cGxvYWRcIiBjbGFzc05hbWU9XCJoMyBteS0zXCI+QWRkIEltYWdlOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbWFnZV91cGxvYWRcIiB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVVcGxvYWR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtNCBtYi00XCI+Q3VycmVudCBMb2dvPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtmaWxlfSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzdHlsZT17e21heFdpZHRoOiBcIjEwJVwiLCBoZWlnaHQ6IFwiYXV0b1wifX0gYWx0PVwiQ3VycmVudCBMb2dvXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuKTtcbn1cbmV4cG9ydCBkZWZhdWx0IExvZ287XG4iXSwibmFtZXMiOlsiU2VjdGlvblRpdGxlIiwiSW1wb3J0ZXIiLCJJbXBvcnRlckZpZWxkIiwidXNlU3RhdGUiLCJ1c2VTZXNzaW9uIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTG9nbyIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwiZmlsZSIsInNldEZpbGUiLCJ1cGRhdGUiLCJoYW5kbGVVcGxvYWQiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJpbWFnZURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVzZXIiLCJpZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwibG9nbyIsImltYWdlX2Rlc3RpbmF0aW9uIiwiaGVhZGVycyIsInJvdXRlciIsInB1c2giLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaGVhZGluZyIsInN1YkhlYWRpbmciLCJ0ZXh0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJoMyIsImltZyIsInNyYyIsInN0eWxlIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Logo.js\n"));

/***/ })

});