"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create",{

/***/ "./src/components/Create.js":
/*!**********************************!*\
  !*** ./src/components/Create.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionTitle */ \"./src/components/SectionTitle.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"./node_modules/react-quill/dist/quill.snow.css\");\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(_c = ()=>__webpack_require__.e(/*! import() */ \"node_modules_react-quill_lib_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-quill */ \"./node_modules/react-quill/lib/index.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"../src/components/Create.js -> \" + \"react-quill\"\n        ]\n    },\n    ssr: false\n});\n_c1 = ReactQuill;\n\nconst Create = ()=>{\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const { error, setError } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function handleInput(input) {\n        setValue(input);\n        console.log(input);\n    }\n    async function InputSubmit() {\n        //make create_button text say \"loading\" while this is happening\n        setError(\"\");\n        document.getElementById(\"create_button\").innerHTML = \"Loading...\";\n        document.getElementById(\"create_button\").disabled = true;\n        let id = session.user.id;\n        const res = await fetch(\"/api/createEmail\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                value,\n                id\n            })\n        });\n        const json = await res.json();\n        let email_id = json.email_id;\n        if (email_id == undefined || res.status != 200) {\n            document.getElementById(\"create_button\").innerHTML = \"Create\";\n            document.getElementById(\"create_button\").disabled = false;\n            setError(\"There was an error creating your newsletter. Please try again.\");\n            return;\n        }\n        router.push(\"/email/\".concat(email_id));\n        document.getElementById(\"create_button\").innerHTML = \"Create\";\n        document.getElementById(\"create_button\").disabled = false;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (status == \"unauthenticated\") {\n            router.push(\"/login\");\n            return;\n        }\n    }, [\n        status,\n        value\n    ]);\n    var toolbarOptions = [\n        [\n            \"bold\",\n            \"italic\",\n            \"underline\",\n            \"strike\"\n        ],\n        [\n            \"blockquote\",\n            \"code-block\",\n            \"image\"\n        ],\n        [\n            {\n                \"header\": 1\n            },\n            {\n                \"header\": 2\n            }\n        ],\n        [\n            {\n                \"list\": \"ordered\"\n            },\n            {\n                \"list\": \"bullet\"\n            }\n        ],\n        [\n            {\n                \"script\": \"sub\"\n            },\n            {\n                \"script\": \"super\"\n            }\n        ],\n        [\n            {\n                \"indent\": \"-1\"\n            },\n            {\n                \"indent\": \"+1\"\n            }\n        ],\n        [\n            {\n                \"direction\": \"rtl\"\n            }\n        ],\n        [\n            {\n                \"size\": [\n                    \"small\",\n                    false,\n                    \"large\",\n                    \"huge\"\n                ]\n            }\n        ],\n        [\n            {\n                \"header\": [\n                    1,\n                    2,\n                    3,\n                    4,\n                    5,\n                    6,\n                    false\n                ]\n            }\n        ],\n        [\n            {\n                \"color\": []\n            },\n            {\n                \"background\": []\n            }\n        ],\n        [\n            {\n                \"font\": []\n            }\n        ],\n        [\n            {\n                \"align\": []\n            }\n        ],\n        [\n            \"clean\"\n        ] // remove formatting button\n    ];\n    const override = \"\\n  display: block;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  margin: auto;\\n\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"skill\",\n        className: \"section experience-section\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SectionTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            heading: \"Create Your Newsletter\",\n                            subHeading: \"Newsletter\",\n                            text: \"Prompt our AI with details about your business and what kind of things you want your newsletter to be about.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Create.js\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Create.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Create.js\",\n                    lineNumber: 113,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"form-control my-3\",\n                        value: value,\n                        onChange: (e)=>handleInput(e.target.value),\n                        rows: \"10\",\n                        cols: \"50\",\n                        placeholder: \"Write your newsletter prompt.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Create.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Create.js\",\n                    lineNumber: 120,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_7__.PuffLoader, {\n                    cssOverride: override,\n                    color: \"#36d7b7\"\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Create.js\",\n                    lineNumber: 125,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    id: \"create_button\",\n                    onClick: InputSubmit,\n                    className: \"form-control btn-lg px-btn px-btn-theme2\",\n                    children: \" Create \"\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Create.js\",\n                    lineNumber: 128,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-danger\",\n                    children: error\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Create.js\",\n                    lineNumber: 130,\n                    columnNumber: 15\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Create.js\",\n            lineNumber: 112,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Create.js\",\n        lineNumber: 111,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Create, \"2aDmgyGMZu5z859GjQ4QedqxVyk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c2 = Create;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Create);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ReactQuill$dynamic\");\n$RefreshReg$(_c1, \"ReactQuill\");\n$RefreshReg$(_c2, \"Create\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBQUM7Z0JBQUUsU0FBUyxFQUFFO1lBQUM7U0FBRTtRQUVqQjtZQUFDO1NBQVEsQ0FBeUMsMkJBQTJCO0tBQzlFO0lBQ0QsTUFBTUMsV0FBWTtJQVlqQixxQkFDQyw4REFBQ0M7UUFBUWYsSUFBRztRQUFRZ0IsV0FBVTtrQkFDNUIsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUM5QyxxREFBWUE7NEJBQUNnRCxTQUFROzRCQUF5QkMsWUFBVzs0QkFBYUMsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLaEYsOERBQUNIO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDSzt3QkFBU0wsV0FBVTt3QkFBb0JuQyxPQUFPQTt3QkFBT3lDLFVBQVUsQ0FBQ0MsSUFBTWhDLFlBQVlnQyxFQUFFQyxNQUFNLENBQUMzQyxLQUFLO3dCQUFHNEMsTUFBSzt3QkFBS0MsTUFBSzt3QkFBS0MsYUFBWTs7Ozs7Ozs7Ozs7OEJBSTVILDhEQUFDbkQsc0RBQVVBO29CQUFDb0QsYUFBYWQ7b0JBQVVlLE9BQU07Ozs7Ozs4QkFHM0MsOERBQUNDO29CQUFPOUIsSUFBRztvQkFBZ0IrQixTQUFTcEM7b0JBQWFxQixXQUFVOzhCQUEyQzs7Ozs7OzhCQUV0Ryw4REFBQ2dCO29CQUFFaEIsV0FBVTs4QkFBZTNCOzs7Ozs7Ozs7Ozs7Ozs7OztBQVExQztHQXpITVQ7O1FBR2VOLGtEQUFTQTtRQUNVRix1REFBVUE7OztNQUo1Q1E7QUEwSE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3JlYXRlLmpzPzQ0N2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi9TZWN0aW9uVGl0bGVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgeyBQdWZmTG9hZGVyIH0gZnJvbSBcInJlYWN0LXNwaW5uZXJzXCI7XG5pbXBvcnQgeyAgQ1NTUHJvcGVydGllcyB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1xdWlsbFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xuaW1wb3J0ICdyZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzJztcblxuXG5cblxuXG5jb25zdCBDcmVhdGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICAgIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKVxuICAgICAgY29uc3QgeyBlcnJvciwgc2V0RXJyb3J9ID0gdXNlU3RhdGUoXCJcIilcbiAgICAgICAgXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVJbnB1dChpbnB1dCkge1xuICAgIHNldFZhbHVlKGlucHV0KTtcbiAgICBjb25zb2xlLmxvZyhpbnB1dClcbiAgICBcbn1cblxuYXN5bmMgZnVuY3Rpb24gSW5wdXRTdWJtaXQoKXtcbiAgLy9tYWtlIGNyZWF0ZV9idXR0b24gdGV4dCBzYXkgXCJsb2FkaW5nXCIgd2hpbGUgdGhpcyBpcyBoYXBwZW5pbmdcbiAgc2V0RXJyb3IoXCJcIilcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVfYnV0dG9uXCIpLmlubmVySFRNTCA9IFwiTG9hZGluZy4uLlwiXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlX2J1dHRvblwiKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgbGV0IGlkID0gc2Vzc2lvbi51c2VyLmlkO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2NyZWF0ZUVtYWlsJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB2YWx1ZSwgaWQgfSksXG4gICAgfSlcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGxldCBlbWFpbF9pZCA9IGpzb24uZW1haWxfaWRcbiAgICBpZihlbWFpbF9pZCA9PSB1bmRlZmluZWQgfHwgcmVzLnN0YXR1cyAhPSAyMDApe1xuICAgICAgXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZV9idXR0b25cIikuaW5uZXJIVE1MID0gXCJDcmVhdGVcIlxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZV9idXR0b25cIikuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHNldEVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIGNyZWF0aW5nIHlvdXIgbmV3c2xldHRlci4gUGxlYXNlIHRyeSBhZ2Fpbi5cIilcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgICBcblxuICAgIHJvdXRlci5wdXNoKGAvZW1haWwvJHtlbWFpbF9pZH1gKVxuICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZV9idXR0b25cIikuaW5uZXJIVE1MID0gXCJDcmVhdGVcIlxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZV9idXR0b25cIikuZGlzYWJsZWQgPSBmYWxzZTtcblxuICBcblxuICAgIFxuXG5cbn1cblxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgaWYgKHN0YXR1cyA9PSBcInVuYXV0aGVudGljYXRlZFwiKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxuICAgICAgcmV0dXJuO1xuXG5cbiAgICB9XG5cbiBcbn0sIFtzdGF0dXMsIHZhbHVlXSkgICAgXG5cbnZhciB0b29sYmFyT3B0aW9ucyA9IFtcbiAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJ10sICAgICAgICAvLyB0b2dnbGVkIGJ1dHRvbnNcbiAgWydibG9ja3F1b3RlJywgJ2NvZGUtYmxvY2snLCAnaW1hZ2UnXSxcblxuICBbeyAnaGVhZGVyJzogMSB9LCB7ICdoZWFkZXInOiAyIH1dLCAgICAgICAgICAgICAgIC8vIGN1c3RvbSBidXR0b24gdmFsdWVzXG4gIFt7ICdsaXN0JzogJ29yZGVyZWQnfSwgeyAnbGlzdCc6ICdidWxsZXQnIH1dLFxuICBbeyAnc2NyaXB0JzogJ3N1Yid9LCB7ICdzY3JpcHQnOiAnc3VwZXInIH1dLCAgICAgIC8vIHN1cGVyc2NyaXB0L3N1YnNjcmlwdFxuICBbeyAnaW5kZW50JzogJy0xJ30sIHsgJ2luZGVudCc6ICcrMScgfV0sICAgICAgICAgIC8vIG91dGRlbnQvaW5kZW50XG4gIFt7ICdkaXJlY3Rpb24nOiAncnRsJyB9XSwgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGV4dCBkaXJlY3Rpb25cblxuICBbeyAnc2l6ZSc6IFsnc21hbGwnLCBmYWxzZSwgJ2xhcmdlJywgJ2h1Z2UnXSB9XSwgIC8vIGN1c3RvbSBkcm9wZG93blxuICBbeyAnaGVhZGVyJzogWzEsIDIsIDMsIDQsIDUsIDYsIGZhbHNlXSB9XSxcblxuICBbeyAnY29sb3InOiBbXSB9LCB7ICdiYWNrZ3JvdW5kJzogW10gfV0sICAgICAgICAgIC8vIGRyb3Bkb3duIHdpdGggZGVmYXVsdHMgZnJvbSB0aGVtZVxuICBbeyAnZm9udCc6IFtdIH1dLFxuICBbeyAnYWxpZ24nOiBbXSB9XSxcblxuICBbJ2NsZWFuJ10gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBmb3JtYXR0aW5nIGJ1dHRvblxuXTtcbmNvbnN0IG92ZXJyaWRlID0gYFxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbmA7XG5cblxuXG4gcmV0dXJuIChcbiAgPHNlY3Rpb24gaWQ9XCJza2lsbFwiIGNsYXNzTmFtZT1cInNlY3Rpb24gZXhwZXJpZW5jZS1zZWN0aW9uXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgPFNlY3Rpb25UaXRsZSBoZWFkaW5nPVwiQ3JlYXRlIFlvdXIgTmV3c2xldHRlclwiIHN1YkhlYWRpbmc9XCJOZXdzbGV0dGVyXCIgdGV4dD1cIlByb21wdCBvdXIgQUkgd2l0aCBkZXRhaWxzIGFib3V0IHlvdXIgYnVzaW5lc3MgYW5kIHdoYXQga2luZCBvZiB0aGluZ3MgeW91IHdhbnQgeW91ciBuZXdzbGV0dGVyIHRvIGJlIGFib3V0LlwiICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbXktM1wiIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dChlLnRhcmdldC52YWx1ZSl9IHJvd3M9XCIxMFwiIGNvbHM9XCI1MFwiIHBsYWNlaG9sZGVyPVwiV3JpdGUgeW91ciBuZXdzbGV0dGVyIHByb21wdC5cIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPFB1ZmZMb2FkZXIgY3NzT3ZlcnJpZGU9e292ZXJyaWRlfSBjb2xvcj1cIiMzNmQ3YjdcIiAvPlxuXG5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNyZWF0ZV9idXR0b25cIiBvbkNsaWNrPXtJbnB1dFN1Ym1pdH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGJ0bi1sZyBweC1idG4gcHgtYnRuLXRoZW1lMlwiPiBDcmVhdGUgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3J9PC9wPlxuXG5cbiAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgPC9zZWN0aW9uPlxuKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZTtcbiJdLCJuYW1lcyI6WyJTZWN0aW9uVGl0bGUiLCJ1c2VTdGF0ZSIsInVzZVNlc3Npb24iLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJkeW5hbWljIiwiUHVmZkxvYWRlciIsIkNTU1Byb3BlcnRpZXMiLCJSZWFjdFF1aWxsIiwic3NyIiwiQ3JlYXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImltYWdlcyIsInNldEltYWdlcyIsInJvdXRlciIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZUlucHV0IiwiaW5wdXQiLCJjb25zb2xlIiwibG9nIiwiSW5wdXRTdWJtaXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiZGlzYWJsZWQiLCJpZCIsInVzZXIiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJlbWFpbF9pZCIsInVuZGVmaW5lZCIsInB1c2giLCJ0b29sYmFyT3B0aW9ucyIsIm92ZXJyaWRlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImhlYWRpbmciLCJzdWJIZWFkaW5nIiwidGV4dCIsInRleHRhcmVhIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwicm93cyIsImNvbHMiLCJwbGFjZWhvbGRlciIsImNzc092ZXJyaWRlIiwiY29sb3IiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Create.js\n"));

/***/ })

});