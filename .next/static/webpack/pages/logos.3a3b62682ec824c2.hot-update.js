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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionTitle */ \"./src/components/SectionTitle.js\");\n/* harmony import */ var react_csv_importer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-csv-importer */ \"./node_modules/react-csv-importer/dist/index.js\");\n/* harmony import */ var react_csv_importer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_csv_importer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Logo = ()=>{\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const { update } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    async function handleUpload(e) {\n        if (e.target.files.length > 0) setFile(URL.createObjectURL(e.target.files[0]));\n        const imageData = new FormData();\n        imageData.append(\"logo\", e.target.files[0]);\n        imageData.append(\"id\", session.user.id);\n        let data = await fetch(\"http://localhost:4000/api/logo_upload\", {\n            method: \"POST\",\n            body: imageData\n        });\n        if (data.status == 200) {\n            data = await data.json();\n        } else {\n            setError(\"There was an error uploading your logo. Please try again.\");\n            return;\n        }\n        let res = await fetch(\"/api/logo\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                logo: data.image_destination,\n                id: session.user.id\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        if (res.status == 200) {\n            session.user.logo = data.image_destination;\n            update(session.user, false);\n        } else {\n            setError(\"There was an error uploading your logo. Please try again.\");\n            return;\n        }\n    }\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (status == \"unauthenticated\") {\n            router.push(\"/login\");\n            return;\n        }\n        if (session) {\n            setFile(session.user.logo);\n        }\n    }, [\n        status\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"skill\",\n        className: \"section experience-section\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SectionTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            heading: \"Upload Logo\",\n                            subHeading: \"Logo\",\n                            text: \"Upload your logo as a png to render on your emails\"\n                        }, void 0, false, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                    lineNumber: 82,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row mt-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-group\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"image_upload\",\n                                    className: \"h3 my-3\",\n                                    children: \"Add Image:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"form-control\",\n                                    id: \"image_upload\",\n                                    type: \"file\",\n                                    onChange: handleUpload\n                                }, void 0, false, {\n                                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                    lineNumber: 88,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"mt-4 mb-4\",\n                            children: \"Current Logo\"\n                        }, void 0, false, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: file,\n                                className: \"img-fluid\",\n                                style: {\n                                    maxWidth: \"10%\",\n                                    height: \"auto\"\n                                },\n                                alt: \"Current Logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n            lineNumber: 81,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n        lineNumber: 80,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Logo, \"va8BuysOQGVyu1n6tA6MV5WQUu8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Logo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo);\nvar _c;\n$RefreshReg$(_c, \"Logo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNXO2dDQUFJQyxLQUFLNUM7Z0NBQU1nQyxXQUFVO2dDQUFZYSxPQUFPO29DQUFDQyxVQUFVO29DQUFPQyxRQUFRO2dDQUFNO2dDQUFHQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhHO0dBOUZNcEQ7O1FBRzhCSCx1REFBVUE7UUFFZkEsdURBQVVBO1FBK0N4QkUsa0RBQVNBOzs7S0FwRHBCQztBQStGTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Mb2dvLmpzP2JkMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi9TZWN0aW9uVGl0bGVcIjtcbmltcG9ydCB7IEltcG9ydGVyLCBJbXBvcnRlckZpZWxkIH0gZnJvbSAncmVhY3QtY3N2LWltcG9ydGVyJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuXG5cblxuY29uc3QgTG9nbyA9ICgpID0+IHtcblxuXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKClcbiAgICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKCk7XG4gICAgICAgICAgICBjb25zdCB7IHVwZGF0ZSB9ID0gdXNlU2Vzc2lvbigpO1xuICAgICAgICAgICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICAgICAgICAgIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cbiAgICAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVVcGxvYWQoZSkge1xuICAgICAgICBpZihlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKVxuICAgICAgICBzZXRGaWxlKFVSTC5jcmVhdGVPYmplY3RVUkwoZS50YXJnZXQuZmlsZXNbMF0pKTtcbiAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICBpbWFnZURhdGEuYXBwZW5kKCdsb2dvJywgZS50YXJnZXQuZmlsZXNbMF0pXG4gICAgICAgICAgaW1hZ2VEYXRhLmFwcGVuZCgnaWQnLCBzZXNzaW9uLnVzZXIuaWQpXG5cbiAgICAgIGxldCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvbG9nb191cGxvYWQnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBpbWFnZURhdGFcbiAgICAgIH0pXG4gICAgICBpZihkYXRhLnN0YXR1cyA9PSAyMDApe1xuICAgICAgZGF0YSA9IGF3YWl0IGRhdGEuanNvbigpXG4gICAgICB9ZWxzZXtcbiAgICAgICAgc2V0RXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgdXBsb2FkaW5nIHlvdXIgbG9nby4gUGxlYXNlIHRyeSBhZ2Fpbi5cIilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG5cbiAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9sb2dvJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2xvZ286IGRhdGEuaW1hZ2VfZGVzdGluYXRpb24sIGlkOiBzZXNzaW9uLnVzZXIuaWR9KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYocmVzLnN0YXR1cyA9PSAyMDApe1xuXG4gICAgICBzZXNzaW9uLnVzZXIubG9nbyA9IGRhdGEuaW1hZ2VfZGVzdGluYXRpb247XG5cbiAgICAgIHVwZGF0ZShzZXNzaW9uLnVzZXIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHNldEVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIHVwbG9hZGluZyB5b3VyIGxvZ28uIFBsZWFzZSB0cnkgYWdhaW4uXCIpXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuXG4gICAgfVxuXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBpZiAoc3RhdHVzID09IFwidW5hdXRoZW50aWNhdGVkXCIpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKHNlc3Npb24pe1xuICAgICAgc2V0RmlsZShzZXNzaW9uLnVzZXIubG9nbylcbiAgICB9XG59LCBbc3RhdHVzXSkgICAgXG5cblxuXG4gcmV0dXJuIChcbiAgPHNlY3Rpb24gaWQ9XCJza2lsbFwiIGNsYXNzTmFtZT1cInNlY3Rpb24gZXhwZXJpZW5jZS1zZWN0aW9uXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgPFNlY3Rpb25UaXRsZSBoZWFkaW5nPVwiVXBsb2FkIExvZ29cIiBzdWJIZWFkaW5nPVwiTG9nb1wiIHRleHQ9XCJVcGxvYWQgeW91ciBsb2dvIGFzIGEgcG5nIHRvIHJlbmRlciBvbiB5b3VyIGVtYWlsc1wiICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlX3VwbG9hZFwiIGNsYXNzTmFtZT1cImgzIG15LTNcIj5BZGQgSW1hZ2U6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImltYWdlX3VwbG9hZFwiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZVVwbG9hZH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC00IG1iLTRcIj5DdXJyZW50IExvZ288L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ZpbGV9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHN0eWxlPXt7bWF4V2lkdGg6IFwiMTAlXCIsIGhlaWdodDogXCJhdXRvXCJ9fSBhbHQ9XCJDdXJyZW50IExvZ29cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4pO1xufVxuZXhwb3J0IGRlZmF1bHQgTG9nbztcbiJdLCJuYW1lcyI6WyJTZWN0aW9uVGl0bGUiLCJJbXBvcnRlciIsIkltcG9ydGVyRmllbGQiLCJ1c2VTdGF0ZSIsInVzZVNlc3Npb24iLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJMb2dvIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJmaWxlIiwic2V0RmlsZSIsInVwZGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImhhbmRsZVVwbG9hZCIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImltYWdlRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidXNlciIsImlkIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwianNvbiIsInJlcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2dvIiwiaW1hZ2VfZGVzdGluYXRpb24iLCJoZWFkZXJzIiwicm91dGVyIiwicHVzaCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoZWFkaW5nIiwic3ViSGVhZGluZyIsInRleHQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImgzIiwiaW1nIiwic3JjIiwic3R5bGUiLCJtYXhXaWR0aCIsImhlaWdodCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Logo.js\n"));

/***/ })

});