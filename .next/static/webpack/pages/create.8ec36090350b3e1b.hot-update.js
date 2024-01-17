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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionTitle */ \"./src/components/SectionTitle.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"./node_modules/react-quill/dist/quill.snow.css\");\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(_c = ()=>__webpack_require__.e(/*! import() */ \"node_modules_react-quill_lib_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-quill */ \"./node_modules/react-quill/lib/index.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"../src/components/Create.js -> \" + \"react-quill\"\n        ]\n    },\n    ssr: false\n});\n_c1 = ReactQuill;\n\nconst Create = ()=>{\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const { error, setError } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function handleInput(input) {\n        setValue(input);\n        console.log(input);\n    }\n    async function InputSubmit() {\n        //make create_button text say \"loading\" while this is happening\n        setError(\"\");\n        document.getElementById(\"create_button\").innerHTML = \"Loading...\";\n        document.getElementById(\"create_button\").disabled = true;\n        let id = session.user.id;\n        const res = await fetch(\"/api/createEmail\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                value,\n                id\n            })\n        });\n        const json = await res.json();\n        let email_id = json.email_id;\n        if (email_id == undefined || res.status != 200) {\n            document.getElementById(\"create_button\").innerHTML = \"Create\";\n            document.getElementById(\"create_button\").disabled = false;\n            setError(\"There was an error creating your newsletter. Please try again.\");\n            return;\n        }\n        router.push(\"/email/\".concat(email_id));\n        document.getElementById(\"create_button\").innerHTML = \"Create\";\n        document.getElementById(\"create_button\").disabled = false;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (status == \"unauthenticated\") {\n            router.push(\"/login\");\n            return;\n        }\n    }, [\n        status,\n        value\n    ]);\n    var toolbarOptions = [\n        [\n            \"bold\",\n            \"italic\",\n            \"underline\",\n            \"strike\"\n        ],\n        [\n            \"blockquote\",\n            \"code-block\",\n            \"image\"\n        ],\n        [\n            {\n                \"header\": 1\n            },\n            {\n                \"header\": 2\n            }\n        ],\n        [\n            {\n                \"list\": \"ordered\"\n            },\n            {\n                \"list\": \"bullet\"\n            }\n        ],\n        [\n            {\n                \"script\": \"sub\"\n            },\n            {\n                \"script\": \"super\"\n            }\n        ],\n        [\n            {\n                \"indent\": \"-1\"\n            },\n            {\n                \"indent\": \"+1\"\n            }\n        ],\n        [\n            {\n                \"direction\": \"rtl\"\n            }\n        ],\n        [\n            {\n                \"size\": [\n                    \"small\",\n                    false,\n                    \"large\",\n                    \"huge\"\n                ]\n            }\n        ],\n        [\n            {\n                \"header\": [\n                    1,\n                    2,\n                    3,\n                    4,\n                    5,\n                    6,\n                    false\n                ]\n            }\n        ],\n        [\n            {\n                \"color\": []\n            },\n            {\n                \"background\": []\n            }\n        ],\n        [\n            {\n                \"font\": []\n            }\n        ],\n        [\n            {\n                \"align\": []\n            }\n        ],\n        [\n            \"clean\"\n        ] // remove formatting button\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"skill\",\n        className: \"section experience-section\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SectionTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            heading: \"Create Your Newsletter\",\n                            subHeading: \"Newsletter\",\n                            text: \"Prompt our AI with details about your business and what kind of things you want your newsletter to be about.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Create.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Create.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Create.js\",\n                    lineNumber: 103,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"form-control my-3\",\n                        value: value,\n                        onChange: (e)=>handleInput(e.target.value),\n                        rows: \"10\",\n                        cols: \"50\",\n                        placeholder: \"Write your newsletter prompt.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Create.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Create.js\",\n                    lineNumber: 109,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    id: \"create_button\",\n                    onClick: InputSubmit,\n                    className: \"form-control btn-lg px-btn px-btn-theme2\",\n                    children: \" Create \"\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Create.js\",\n                    lineNumber: 116,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-danger\",\n                    children: error\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Create.js\",\n                    lineNumber: 118,\n                    columnNumber: 15\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Create.js\",\n            lineNumber: 102,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/Create.js\",\n        lineNumber: 101,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Create, \"2aDmgyGMZu5z859GjQ4QedqxVyk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c2 = Create;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Create);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ReactQuill$dynamic\");\n$RefreshReg$(_c1, \"ReactQuill\");\n$RefreshReg$(_c2, \"Create\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBRSxTQUFTLEVBQUU7WUFBQztTQUFFO1FBRWpCO1lBQUM7U0FBUSxDQUF5QywyQkFBMkI7S0FDOUU7SUFJQSxxQkFDQyw4REFBQ0M7UUFBUWQsSUFBRztRQUFRZSxXQUFVO2tCQUM1Qiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQzVDLHFEQUFZQTs0QkFBQzhDLFNBQVE7NEJBQXlCQyxZQUFXOzRCQUFhQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUloRiw4REFBQ0g7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNLO3dCQUFTTCxXQUFVO3dCQUFvQmxDLE9BQU9BO3dCQUFPd0MsVUFBVSxDQUFDQyxJQUFNL0IsWUFBWStCLEVBQUVDLE1BQU0sQ0FBQzFDLEtBQUs7d0JBQUcyQyxNQUFLO3dCQUFLQyxNQUFLO3dCQUFLQyxhQUFZOzs7Ozs7Ozs7Ozs4QkFNOUgsOERBQUNDO29CQUFPM0IsSUFBRztvQkFBZ0I0QixTQUFTakM7b0JBQWFvQixXQUFVOzhCQUEyQzs7Ozs7OzhCQUV0Ryw4REFBQ2M7b0JBQUVkLFdBQVU7OEJBQWUxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRMUM7R0E5R01UOztRQUdlTCxrREFBU0E7UUFDVUYsdURBQVVBOzs7TUFKNUNPO0FBK0dOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZS5qcz80NDdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSBcIi4vU2VjdGlvblRpdGxlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHsgUHVmZkxvYWRlciB9IGZyb20gXCJyZWFjdC1zcGlubmVyc1wiO1xuXG5jb25zdCBSZWFjdFF1aWxsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1xdWlsbFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xuaW1wb3J0ICdyZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzJztcblxuXG5cblxuXG5jb25zdCBDcmVhdGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICAgIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKVxuICAgICAgY29uc3QgeyBlcnJvciwgc2V0RXJyb3J9ID0gdXNlU3RhdGUoXCJcIilcbiAgICAgICAgXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVJbnB1dChpbnB1dCkge1xuICAgIHNldFZhbHVlKGlucHV0KTtcbiAgICBjb25zb2xlLmxvZyhpbnB1dClcbiAgICBcbn1cblxuYXN5bmMgZnVuY3Rpb24gSW5wdXRTdWJtaXQoKXtcbiAgLy9tYWtlIGNyZWF0ZV9idXR0b24gdGV4dCBzYXkgXCJsb2FkaW5nXCIgd2hpbGUgdGhpcyBpcyBoYXBwZW5pbmdcbiAgc2V0RXJyb3IoXCJcIilcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVfYnV0dG9uXCIpLmlubmVySFRNTCA9IFwiTG9hZGluZy4uLlwiXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlX2J1dHRvblwiKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgbGV0IGlkID0gc2Vzc2lvbi51c2VyLmlkO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2NyZWF0ZUVtYWlsJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB2YWx1ZSwgaWQgfSksXG4gICAgfSlcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGxldCBlbWFpbF9pZCA9IGpzb24uZW1haWxfaWRcbiAgICBpZihlbWFpbF9pZCA9PSB1bmRlZmluZWQgfHwgcmVzLnN0YXR1cyAhPSAyMDApe1xuICAgICAgXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZV9idXR0b25cIikuaW5uZXJIVE1MID0gXCJDcmVhdGVcIlxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZV9idXR0b25cIikuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHNldEVycm9yKFwiVGhlcmUgd2FzIGFuIGVycm9yIGNyZWF0aW5nIHlvdXIgbmV3c2xldHRlci4gUGxlYXNlIHRyeSBhZ2Fpbi5cIilcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgICBcblxuICAgIHJvdXRlci5wdXNoKGAvZW1haWwvJHtlbWFpbF9pZH1gKVxuICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZV9idXR0b25cIikuaW5uZXJIVE1MID0gXCJDcmVhdGVcIlxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZV9idXR0b25cIikuZGlzYWJsZWQgPSBmYWxzZTtcblxuICBcblxuICAgIFxuXG5cbn1cblxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgaWYgKHN0YXR1cyA9PSBcInVuYXV0aGVudGljYXRlZFwiKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxuICAgICAgcmV0dXJuO1xuXG5cbiAgICB9XG5cbiBcbn0sIFtzdGF0dXMsIHZhbHVlXSkgICAgXG5cbnZhciB0b29sYmFyT3B0aW9ucyA9IFtcbiAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJ10sICAgICAgICAvLyB0b2dnbGVkIGJ1dHRvbnNcbiAgWydibG9ja3F1b3RlJywgJ2NvZGUtYmxvY2snLCAnaW1hZ2UnXSxcblxuICBbeyAnaGVhZGVyJzogMSB9LCB7ICdoZWFkZXInOiAyIH1dLCAgICAgICAgICAgICAgIC8vIGN1c3RvbSBidXR0b24gdmFsdWVzXG4gIFt7ICdsaXN0JzogJ29yZGVyZWQnfSwgeyAnbGlzdCc6ICdidWxsZXQnIH1dLFxuICBbeyAnc2NyaXB0JzogJ3N1Yid9LCB7ICdzY3JpcHQnOiAnc3VwZXInIH1dLCAgICAgIC8vIHN1cGVyc2NyaXB0L3N1YnNjcmlwdFxuICBbeyAnaW5kZW50JzogJy0xJ30sIHsgJ2luZGVudCc6ICcrMScgfV0sICAgICAgICAgIC8vIG91dGRlbnQvaW5kZW50XG4gIFt7ICdkaXJlY3Rpb24nOiAncnRsJyB9XSwgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGV4dCBkaXJlY3Rpb25cblxuICBbeyAnc2l6ZSc6IFsnc21hbGwnLCBmYWxzZSwgJ2xhcmdlJywgJ2h1Z2UnXSB9XSwgIC8vIGN1c3RvbSBkcm9wZG93blxuICBbeyAnaGVhZGVyJzogWzEsIDIsIDMsIDQsIDUsIDYsIGZhbHNlXSB9XSxcblxuICBbeyAnY29sb3InOiBbXSB9LCB7ICdiYWNrZ3JvdW5kJzogW10gfV0sICAgICAgICAgIC8vIGRyb3Bkb3duIHdpdGggZGVmYXVsdHMgZnJvbSB0aGVtZVxuICBbeyAnZm9udCc6IFtdIH1dLFxuICBbeyAnYWxpZ24nOiBbXSB9XSxcblxuICBbJ2NsZWFuJ10gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBmb3JtYXR0aW5nIGJ1dHRvblxuXTtcblxuXG5cbiByZXR1cm4gKFxuICA8c2VjdGlvbiBpZD1cInNraWxsXCIgY2xhc3NOYW1lPVwic2VjdGlvbiBleHBlcmllbmNlLXNlY3Rpb25cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICA8U2VjdGlvblRpdGxlIGhlYWRpbmc9XCJDcmVhdGUgWW91ciBOZXdzbGV0dGVyXCIgc3ViSGVhZGluZz1cIk5ld3NsZXR0ZXJcIiB0ZXh0PVwiUHJvbXB0IG91ciBBSSB3aXRoIGRldGFpbHMgYWJvdXQgeW91ciBidXNpbmVzcyBhbmQgd2hhdCBraW5kIG9mIHRoaW5ncyB5b3Ugd2FudCB5b3VyIG5ld3NsZXR0ZXIgdG8gYmUgYWJvdXQuXCIgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbXktM1wiIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnB1dChlLnRhcmdldC52YWx1ZSl9IHJvd3M9XCIxMFwiIGNvbHM9XCI1MFwiIHBsYWNlaG9sZGVyPVwiV3JpdGUgeW91ciBuZXdzbGV0dGVyIHByb21wdC5cIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIFxuXG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjcmVhdGVfYnV0dG9uXCIgb25DbGljaz17SW5wdXRTdWJtaXR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBidG4tbGcgcHgtYnRuIHB4LWJ0bi10aGVtZTJcIj4gQ3JlYXRlIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9yfTwvcD5cblxuXG4gICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgXG4gIDwvc2VjdGlvbj5cbik7XG59XG5leHBvcnQgZGVmYXVsdCBDcmVhdGU7XG4iXSwibmFtZXMiOlsiU2VjdGlvblRpdGxlIiwidXNlU3RhdGUiLCJ1c2VTZXNzaW9uIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZHluYW1pYyIsIlB1ZmZMb2FkZXIiLCJSZWFjdFF1aWxsIiwic3NyIiwiQ3JlYXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImltYWdlcyIsInNldEltYWdlcyIsInJvdXRlciIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZUlucHV0IiwiaW5wdXQiLCJjb25zb2xlIiwibG9nIiwiSW5wdXRTdWJtaXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiZGlzYWJsZWQiLCJpZCIsInVzZXIiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJlbWFpbF9pZCIsInVuZGVmaW5lZCIsInB1c2giLCJ0b29sYmFyT3B0aW9ucyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoZWFkaW5nIiwic3ViSGVhZGluZyIsInRleHQiLCJ0ZXh0YXJlYSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInJvd3MiLCJjb2xzIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Create.js\n"));

/***/ })

});