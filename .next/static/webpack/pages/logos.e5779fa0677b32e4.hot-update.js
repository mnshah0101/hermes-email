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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionTitle */ \"./src/components/SectionTitle.js\");\n/* harmony import */ var react_csv_importer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-csv-importer */ \"./node_modules/react-csv-importer/dist/index.js\");\n/* harmony import */ var react_csv_importer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_csv_importer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Logo = ()=>{\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const { update } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    async function handleUpload(e) {\n        if (e.target.files.length > 0) setFile(URL.createObjectURL(e.target.files[0]));\n        const imageData = new FormData();\n        imageData.append(\"logo\", e.target.files[0]);\n        imageData.append(\"id\", session.user.id);\n        let data = await fetch(\"http://localhost:4000/api/logo_upload\", {\n            method: \"POST\",\n            body: imageData\n        });\n        if (data.status == 200) {\n            data = await data.json();\n        } else {\n            setError(\"There was an error uploading your logo. Please try again.\");\n            setSuccess(\"\");\n            return;\n        }\n        let res = await fetch(\"/api/logo\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                logo: data.image_destination,\n                id: session.user.id\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        if (res.status == 200) {\n            session.user.logo = data.image_destination;\n            update(session.user, false);\n            setError(\"\");\n            setSuccess(\"Logo successfully uploaded.\");\n        } else {\n            setError(\"There was an error uploading your logo. Please try again.\");\n            setSuccess(\"\");\n            return;\n        }\n    }\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (status == \"unauthenticated\") {\n            router.push(\"/login\");\n            return;\n        }\n        if (session) {\n            setFile(session.user.logo);\n        }\n    }, [\n        status\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"skill\",\n        className: \"section experience-section\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SectionTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            heading: \"Upload Logo\",\n                            subHeading: \"Logo\",\n                            text: \"Upload your logo as a png to render on your emails\"\n                        }, void 0, false, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                    lineNumber: 88,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row mt-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-group\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"image_upload\",\n                                    className: \"h3 my-3\",\n                                    children: \"Add Image:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    accept: \"image/*\",\n                                    className: \"form-control\",\n                                    id: \"image_upload\",\n                                    type: \"file\",\n                                    onChange: handleUpload\n                                }, void 0, false, {\n                                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                    lineNumber: 94,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"mt-4 mb-4\",\n                            children: \"Current Logo\"\n                        }, void 0, false, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: file,\n                                className: \"img-fluid\",\n                                style: {\n                                    maxWidth: \"10%\",\n                                    height: \"auto\"\n                                },\n                                alt: \"Current Logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-danger\",\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-success\",\n                            children: success\n                        }, void 0, false, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                            lineNumber: 109,\n                            columnNumber: 12\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n            lineNumber: 87,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Logo.js\",\n        lineNumber: 86,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Logo, \"va8BuysOQGVyu1n6tA6MV5WQUu8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Logo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo);\nvar _c;\n$RefreshReg$(_c, \"Logo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ1c7NEJBQUdYLFdBQVU7c0NBQVk7Ozs7OztzQ0FDMUIsOERBQUNDOzRCQUFJRCxXQUFVO3NDQUNiLDRFQUFDWTtnQ0FBSUMsS0FBSzdDO2dDQUFNZ0MsV0FBVTtnQ0FBWWMsT0FBTztvQ0FBQ0MsVUFBVTtvQ0FBT0MsUUFBUTtnQ0FBTTtnQ0FBR0MsS0FBSTs7Ozs7Ozs7Ozs7c0NBRXRGLDhEQUFDQzs0QkFBS2xCLFdBQVU7c0NBQWU3Qjs7Ozs7O3NDQUM5Qiw4REFBQytDOzRCQUFLbEIsV0FBVTtzQ0FBZ0IzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0M7R0F0R01UOztRQUc4QkosdURBQVVBO1FBRWZBLHVEQUFVQTtRQW9EeEJFLGtEQUFTQTs7O0tBekRwQkU7QUF1R04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9nby5qcz9iZDIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSBcIi4vU2VjdGlvblRpdGxlXCI7XG5pbXBvcnQgeyBJbXBvcnRlciwgSW1wb3J0ZXJGaWVsZCB9IGZyb20gJ3JlYWN0LWNzdi1pbXBvcnRlcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgc2V0IH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cblxuXG5cblxuY29uc3QgTG9nbyA9ICgpID0+IHtcblxuXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKClcbiAgICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKCk7XG4gICAgICAgICAgICBjb25zdCB7IHVwZGF0ZSB9ID0gdXNlU2Vzc2lvbigpO1xuICAgICAgICAgICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICAgICAgICAgIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cbiAgICAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVVcGxvYWQoZSkge1xuICAgICAgICBpZihlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKVxuICAgICAgICBzZXRGaWxlKFVSTC5jcmVhdGVPYmplY3RVUkwoZS50YXJnZXQuZmlsZXNbMF0pKTtcbiAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICBpbWFnZURhdGEuYXBwZW5kKCdsb2dvJywgZS50YXJnZXQuZmlsZXNbMF0pXG4gICAgICAgICAgaW1hZ2VEYXRhLmFwcGVuZCgnaWQnLCBzZXNzaW9uLnVzZXIuaWQpXG5cbiAgICAgIGxldCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvbG9nb191cGxvYWQnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBpbWFnZURhdGFcbiAgICAgIH0pXG4gICAgICBpZihkYXRhLnN0YXR1cyA9PSAyMDApe1xuICAgICAgZGF0YSA9IGF3YWl0IGRhdGEuanNvbigpXG4gICAgICB9ZWxzZXtcbiAgICAgICAgc2V0RXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgdXBsb2FkaW5nIHlvdXIgbG9nby4gUGxlYXNlIHRyeSBhZ2Fpbi5cIilcbiAgICAgIHNldFN1Y2Nlc3MoXCJcIilcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cblxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2xvZ28nLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7bG9nbzogZGF0YS5pbWFnZV9kZXN0aW5hdGlvbiwgaWQ6IHNlc3Npb24udXNlci5pZH0pLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZihyZXMuc3RhdHVzID09IDIwMCl7XG5cbiAgICAgIHNlc3Npb24udXNlci5sb2dvID0gZGF0YS5pbWFnZV9kZXN0aW5hdGlvbjtcblxuICAgICAgdXBkYXRlKHNlc3Npb24udXNlciwgZmFsc2UpO1xuICAgICAgc2V0RXJyb3IoXCJcIilcbiAgICAgIHNldFN1Y2Nlc3MoXCJMb2dvIHN1Y2Nlc3NmdWxseSB1cGxvYWRlZC5cIilcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIHNldEVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIHVwbG9hZGluZyB5b3VyIGxvZ28uIFBsZWFzZSB0cnkgYWdhaW4uXCIpXG4gICAgICAgIHNldFN1Y2Nlc3MoXCJcIilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG5cbiAgICB9XG5cblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGlmIChzdGF0dXMgPT0gXCJ1bmF1dGhlbnRpY2F0ZWRcIikge1xuICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIilcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYoc2Vzc2lvbil7XG4gICAgICBzZXRGaWxlKHNlc3Npb24udXNlci5sb2dvKVxuICAgIH1cbn0sIFtzdGF0dXNdKSAgICBcblxuXG5cbiByZXR1cm4gKFxuICA8c2VjdGlvbiBpZD1cInNraWxsXCIgY2xhc3NOYW1lPVwic2VjdGlvbiBleHBlcmllbmNlLXNlY3Rpb25cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICA8U2VjdGlvblRpdGxlIGhlYWRpbmc9XCJVcGxvYWQgTG9nb1wiIHN1YkhlYWRpbmc9XCJMb2dvXCIgdGV4dD1cIlVwbG9hZCB5b3VyIGxvZ28gYXMgYSBwbmcgdG8gcmVuZGVyIG9uIHlvdXIgZW1haWxzXCIgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VfdXBsb2FkXCIgY2xhc3NOYW1lPVwiaDMgbXktM1wiPkFkZCBJbWFnZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGFjY2VwdD1cImltYWdlLypcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImltYWdlX3VwbG9hZFwiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZVVwbG9hZH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC00IG1iLTRcIj5DdXJyZW50IExvZ288L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ZpbGV9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHN0eWxlPXt7bWF4V2lkdGg6IFwiMTAlXCIsIGhlaWdodDogXCJhdXRvXCJ9fSBhbHQ9XCJDdXJyZW50IExvZ29cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9yfTwvc3Bhbj5cbiAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zdWNjZXNzXCI+e3N1Y2Nlc3N9PC9zcGFuPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbik7XG59XG5leHBvcnQgZGVmYXVsdCBMb2dvO1xuIl0sIm5hbWVzIjpbIlNlY3Rpb25UaXRsZSIsIkltcG9ydGVyIiwiSW1wb3J0ZXJGaWVsZCIsInVzZVN0YXRlIiwidXNlU2Vzc2lvbiIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInNldCIsIkxvZ28iLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsImZpbGUiLCJzZXRGaWxlIiwidXBkYXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiaGFuZGxlVXBsb2FkIiwiZSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaW1hZ2VEYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ1c2VyIiwiaWQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJqc29uIiwicmVzIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvZ28iLCJpbWFnZV9kZXN0aW5hdGlvbiIsImhlYWRlcnMiLCJyb3V0ZXIiLCJwdXNoIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImhlYWRpbmciLCJzdWJIZWFkaW5nIiwidGV4dCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiYWNjZXB0IiwidHlwZSIsIm9uQ2hhbmdlIiwiaDMiLCJpbWciLCJzcmMiLCJzdHlsZSIsIm1heFdpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Logo.js\n"));

/***/ })

});