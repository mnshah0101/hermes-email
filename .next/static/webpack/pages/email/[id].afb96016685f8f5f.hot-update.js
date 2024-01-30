"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/email/[id]",{

/***/ "./src/components/DragDrop.js":
/*!************************************!*\
  !*** ./src/components/DragDrop.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionTitle */ \"./src/components/SectionTitle.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst serviceData = [\n    {\n        id: 1,\n        imageUrl: \"https://ci3.googleusercontent.com/meips/ADKq_NZoNSsoeca5R2ZpTjzU_Hqc43Te1lWRCPqEyKFsR4hpWr-Z3yQ0bj0_as8Qrs6r8tlw7rIh5UsZ-ScBTfj2KplVDdSHoLYw3aVpTfjVokSIbnP3aWd6jCnXkvAv=s0-d-e1-ft#https://news.bundesliga.com/imgproxy/img/2041575200/xavi_wittz_600.jpg\",\n        desc: \"Subplots abound when RB Leipzig host Bundesliga leaders Bayer Leverkusen in Matchday 18's headline fixture on Saturday. Can Leipzig get back on track? Will Leverkusen stay unbeaten? Who will win out between respective December Rookie and Player of the Month winners Xavi and Florian Wirtz? You do not want to miss it!\"\n    }\n];\nconst DragDrop = ()=>{\n    _s();\n    const [services, setServices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(serviceData);\n    const [editServiceId, setEditServiceId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const addNewBox = ()=>{\n        const newId = services.length + 1;\n        const newService = {\n            id: newId,\n            imageUrl: \"\",\n            desc: \"Description of new service.\"\n        };\n        setServices([\n            ...services,\n            newService\n        ]);\n    };\n    const deleteService = (id)=>{\n        setServices(services.filter((service)=>service.id !== id));\n    };\n    const handleServiceUpdate = (id, field, value)=>{\n        setServices(services.map((service)=>{\n            if (service.id === id) {\n                return {\n                    ...service,\n                    [field]: value\n                };\n            }\n            return service;\n        }));\n    };\n    const handleImageUpload = async (e)=>{\n        const buffer_url = URL.createObjectURL(e.target.files[0]);\n        //send buffer_irl to editEmail api\n        const response = await fetch(\"/api/addImage\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                image: buffer_url\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        console.log(data);\n    };\n    const toggleEditMode = (id)=>{\n        setEditServiceId(editServiceId === id ? null : id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"services\",\n        className: \"section services-section bg-gray\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SectionTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    heading: \"Your Newsletter\",\n                    subHeading: \"Services\"\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row gy-4\",\n                    children: services.map((service)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-12 centered-col\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"feature-box-01\",\n                                style: {\n                                    textAlign: \"center\",\n                                    height: \"568px\",\n                                    position: \"relative\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>deleteService(service.id),\n                                        style: {\n                                            position: \"absolute\",\n                                            top: \"10px\",\n                                            right: \"10px\",\n                                            border: \"none\",\n                                            background: \"none\",\n                                            cursor: \"pointer\",\n                                            fontSize: \"20px\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            width: \"16\",\n                                            height: \"16\",\n                                            fill: \"currentColor\",\n                                            className: \"bi bi-trash\",\n                                            viewBox: \"0 0 16 16\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    d: \"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 5\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    d: \"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 5\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 3\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    service.imageUrl != \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: service.imageUrl,\n                                        alt: service.name,\n                                        style: {\n                                            width: \"600px\",\n                                            height: \"300px\",\n                                            objectFit: \"cover\",\n                                            display: \"block\",\n                                            margin: \"0 auto\"\n                                        },\n                                        className: \"image-full\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 45\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                        className: \"form\",\n                                        action: \"\",\n                                        method: \"POST\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"file\",\n                                                onChange: (e)=>handleImageUpload(e)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                                lineNumber: 108,\n                                                columnNumber: 3\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Click Here To  Upload Your Image\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                                lineNumber: 109,\n                                                columnNumber: 3\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"feature-content\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                contentEditable: true,\n                                                onBlur: (e)=>handleServiceUpdate(service.id, \"name\", e.target.innerText),\n                                                style: {\n                                                    paddingTop: \"20px\"\n                                                },\n                                                children: service.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                                lineNumber: 114,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                contentEditable: true,\n                                                onBlur: (e)=>handleServiceUpdate(service.id, \"desc\", e.target.innerText),\n                                                style: {\n                                                    paddingTop: \"10px\"\n                                                },\n                                                children: service.desc\n                                            }, void 0, false, {\n                                                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                                lineNumber: 121,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                        lineNumber: 113,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, undefined)\n                        }, service.id, false, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        textAlign: \"center\",\n                        marginTop: \"20px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: addNewBox,\n                        className: \"px-btn px-btn-theme\",\n                        children: \"Add New Box\"\n                    }, void 0, false, {\n                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                        lineNumber: 134,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                    lineNumber: 133,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DragDrop, \"CQqNUl0NSFWnqTG0vxnBLIT1RZ8=\");\n_c = DragDrop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DragDrop);\nvar _c;\n$RefreshReg$(_c, \"DragDrop\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRDQUNMYyxPQUFPOzRDQUNQWixRQUFROzRDQUNScUIsV0FBVzs0Q0FDWEMsU0FBUzs0Q0FDVEMsUUFBUTt3Q0FDVjt3Q0FDQTdCLFdBQVU7Ozs7O2tFQUdWLDhEQUFDOEI7d0NBQUs5QixXQUFVO3dDQUFPK0IsUUFBTzt3Q0FBRzNDLFFBQU87OzBEQUN4RCw4REFBQ3RCO2dEQUFNa0UsTUFBSztnREFBT0MsVUFBVSxDQUFDckQsSUFBTUQsa0JBQWtCQzs7Ozs7OzBEQUN0RCw4REFBQ3NEOzBEQUFFOzs7Ozs7Ozs7Ozs7a0RBSVcsOERBQUNqQzt3Q0FBSUQsV0FBVTs7MERBQ2IsOERBQUNtQztnREFDQ0MsZUFBZTtnREFDZkMsUUFBUSxDQUFDekQsSUFBTUwsb0JBQW9CRCxRQUFRaEIsRUFBRSxFQUFFLFFBQVFzQixFQUFFSSxNQUFNLENBQUNzRCxTQUFTO2dEQUN6RWxDLE9BQU87b0RBQUVtQyxZQUFZO2dEQUFPOzBEQUUzQmpFLFFBQVFvRCxJQUFJOzs7Ozs7MERBRWYsOERBQUNRO2dEQUNDRSxlQUFlO2dEQUNmQyxRQUFRLENBQUN6RCxJQUFNTCxvQkFBb0JELFFBQVFoQixFQUFFLEVBQUUsUUFBUXNCLEVBQUVJLE1BQU0sQ0FBQ3NELFNBQVM7Z0RBQ3pFbEMsT0FBTztvREFBRW1DLFlBQVk7Z0RBQU87MERBRTNCakUsUUFBUWQsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQXJEcUJjLFFBQVFoQixFQUFFOzs7Ozs7Ozs7OzhCQTREeEQsOERBQUMyQztvQkFBSUcsT0FBTzt3QkFBRUMsV0FBVzt3QkFBVW1DLFdBQVc7b0JBQU87OEJBQ25ELDRFQUFDaEM7d0JBQ0NDLFNBQVN6Qzt3QkFDVGdDLFdBQVU7a0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQXBJTXZDO0tBQUFBO0FBdUlOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RyYWdEcm9wLmpzPzM2NzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi9TZWN0aW9uVGl0bGVcIjtcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXG5jb25zdCBzZXJ2aWNlRGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGltYWdlVXJsOiBcImh0dHBzOi8vY2kzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9tZWlwcy9BREtxX05ab05Tc29lY2E1UjJacFRqelVfSHFjNDNUZTFsV1JDUHFFeUtGc1I0aHBXci1aM3lRMGJqMF9hczhRcnM2cjh0bHc3ckloNVVzWi1TY0JUZmoyS3BsVkRkU0hvTFl3M2FWcFRmalZva1NJYm5QM2FXZDZqQ25Ya3ZBdj1zMC1kLWUxLWZ0I2h0dHBzOi8vbmV3cy5idW5kZXNsaWdhLmNvbS9pbWdwcm94eS9pbWcvMjA0MTU3NTIwMC94YXZpX3dpdHR6XzYwMC5qcGdcIiwgLy8gVXBkYXRlIHdpdGggYWN0dWFsIGltYWdlIHBhdGhcbiAgICBkZXNjOiBcIlN1YnBsb3RzIGFib3VuZCB3aGVuIFJCIExlaXB6aWcgaG9zdCBCdW5kZXNsaWdhIGxlYWRlcnMgQmF5ZXIgTGV2ZXJrdXNlbiBpbiBNYXRjaGRheSAxOCdzIGhlYWRsaW5lIGZpeHR1cmUgb24gU2F0dXJkYXkuIENhbiBMZWlwemlnIGdldCBiYWNrIG9uIHRyYWNrPyBXaWxsIExldmVya3VzZW4gc3RheSB1bmJlYXRlbj8gV2hvIHdpbGwgd2luIG91dCBiZXR3ZWVuIHJlc3BlY3RpdmUgRGVjZW1iZXIgUm9va2llIGFuZCBQbGF5ZXIgb2YgdGhlIE1vbnRoIHdpbm5lcnMgWGF2aSBhbmQgRmxvcmlhbiBXaXJ0ej8gWW91IGRvIG5vdCB3YW50IHRvIG1pc3MgaXQhXCJcbiAgfSxcbiAgLy8gLi4uIG90aGVyIHNlcnZpY2VzXG5dO1xuXG5jb25zdCBEcmFnRHJvcCA9ICgpID0+IHtcbiAgY29uc3QgW3NlcnZpY2VzLCBzZXRTZXJ2aWNlc10gPSB1c2VTdGF0ZShzZXJ2aWNlRGF0YSk7XG4gIGNvbnN0IFtlZGl0U2VydmljZUlkLCBzZXRFZGl0U2VydmljZUlkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IGFkZE5ld0JveCA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdJZCA9IHNlcnZpY2VzLmxlbmd0aCArIDE7XG4gICAgY29uc3QgbmV3U2VydmljZSA9IHtcbiAgICAgIGlkOiBuZXdJZCxcbiAgICAgIGltYWdlVXJsOiBcIlwiLCAvLyBQcm92aWRlIGEgZGVmYXVsdCBpbWFnZSBwYXRoXG4gICAgICBkZXNjOiBcIkRlc2NyaXB0aW9uIG9mIG5ldyBzZXJ2aWNlLlwiLFxuICAgIH07XG4gICAgc2V0U2VydmljZXMoWy4uLnNlcnZpY2VzLCBuZXdTZXJ2aWNlXSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlU2VydmljZSA9IChpZCkgPT4ge1xuICAgIHNldFNlcnZpY2VzKHNlcnZpY2VzLmZpbHRlcihzZXJ2aWNlID0+IHNlcnZpY2UuaWQgIT09IGlkKSk7XG4gIH07XG4gIFxuXG5cbiAgY29uc3QgaGFuZGxlU2VydmljZVVwZGF0ZSA9IChpZCwgZmllbGQsIHZhbHVlKSA9PiB7XG4gICAgc2V0U2VydmljZXMoc2VydmljZXMubWFwKHNlcnZpY2UgPT4ge1xuICAgICAgaWYgKHNlcnZpY2UuaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnNlcnZpY2UsIFtmaWVsZF06IHZhbHVlIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VydmljZTtcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VVcGxvYWQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGNvbnN0IGJ1ZmZlcl91cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAvL3NlbmQgYnVmZmVyX2lybCB0byBlZGl0RW1haWwgYXBpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvYWRkSW1hZ2VcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtpbWFnZTogYnVmZmVyX3VybH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9XG5cbiAgICAgIFxuICB9XG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKGRhdGEpXG4gIFxuXG5cbiAgICBcbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZUVkaXRNb2RlID0gKGlkKSA9PiB7XG4gICAgc2V0RWRpdFNlcnZpY2VJZChlZGl0U2VydmljZUlkID09PSBpZCA/IG51bGwgOiBpZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cInNlcnZpY2VzXCIgY2xhc3NOYW1lPVwic2VjdGlvbiBzZXJ2aWNlcy1zZWN0aW9uIGJnLWdyYXlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxTZWN0aW9uVGl0bGUgaGVhZGluZz17XCJZb3VyIE5ld3NsZXR0ZXJcIn0gc3ViSGVhZGluZz17XCJTZXJ2aWNlc1wifSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBneS00XCI+XG4gICAgICAgICAge3NlcnZpY2VzLm1hcCgoc2VydmljZSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY2VudGVyZWQtY29sXCIga2V5PXtzZXJ2aWNlLmlkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlLWJveC0wMVwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGhlaWdodDogJzU2OHB4JywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgIDxidXR0b24gXG4gIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVNlcnZpY2Uoc2VydmljZS5pZCl9XG4gIHN0eWxlPXt7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMTBweCcsXG4gICAgcmlnaHQ6ICcxMHB4JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgZm9udFNpemU6ICcyMHB4JyxcbiAgfX1cbj5cbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzTmFtZT1cImJpIGJpLXRyYXNoXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgIDxwYXRoIGQ9XCJNNS41IDUuNUEuNS41IDAgMCAxIDYgNnY2YS41LjUgMCAwIDEtMSAwVjZhLjUuNSAwIDAgMSAuNS0uNW0yLjUgMGEuNS41IDAgMCAxIC41LjV2NmEuNS41IDAgMCAxLTEgMFY2YS41LjUgMCAwIDEgLjUtLjVtMyAuNWEuNS41IDAgMCAwLTEgMHY2YS41LjUgMCAwIDAgMSAwelwiLz5cbiAgICA8cGF0aCBkPVwiTTE0LjUgM2ExIDEgMCAwIDEtMSAxSDEzdjlhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWNGgtLjVhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTFINmExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDEgMWgzLjVhMSAxIDAgMCAxIDEgMXpNNC4xMTggNCA0IDQuMDU5VjEzYTEgMSAwIDAgMCAxIDFoNmExIDEgMCAwIDAgMS0xVjQuMDU5TDExLjg4MiA0ek0yLjUgM2gxMVYyaC0xMXpcIi8+XG4gIDwvc3ZnPlxuPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7c2VydmljZS5pbWFnZVVybCAhPSBcIlwiID8gICg8aW1nIFxuICAgICAgICAgICAgICAgICAgc3JjPXtzZXJ2aWNlLmltYWdlVXJsfSBcbiAgICAgICAgICAgICAgICAgIGFsdD17c2VydmljZS5uYW1lfSBcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzYwMHB4JywgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzMwMHB4JywgXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJ1xuICAgICAgICAgICAgICAgICAgfX0gXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZS1mdWxsXCJcbiAgICAgICAgICAgICAgICAvPikgOiAoXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm1cIiBhY3Rpb249XCJcIiBtZXRob2Q9XCJQT1NUXCI+XG4gIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW1hZ2VVcGxvYWQoZSl9IC8gPiBcbiAgPHA+Q2xpY2sgSGVyZSBUbyAgVXBsb2FkIFlvdXIgSW1hZ2U8L3A+XG48L2Zvcm0+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50RWRpdGFibGVcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoZSkgPT4gaGFuZGxlU2VydmljZVVwZGF0ZShzZXJ2aWNlLmlkLCAnbmFtZScsIGUudGFyZ2V0LmlubmVyVGV4dCl9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcyMHB4JyB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c2VydmljZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eyhlKSA9PiBoYW5kbGVTZXJ2aWNlVXBkYXRlKHNlcnZpY2UuaWQsICdkZXNjJywgZS50YXJnZXQuaW5uZXJUZXh0KX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzEwcHgnIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlLmRlc2N9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpblRvcDogJzIwcHgnIH19PlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBvbkNsaWNrPXthZGROZXdCb3h9IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtYnRuIHB4LWJ0bi10aGVtZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkIE5ldyBCb3hcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IERyYWdEcm9wOyJdLCJuYW1lcyI6WyJTZWN0aW9uVGl0bGUiLCJ1c2VTdGF0ZSIsInNlcnZpY2VEYXRhIiwiaWQiLCJpbWFnZVVybCIsImRlc2MiLCJEcmFnRHJvcCIsInNlcnZpY2VzIiwic2V0U2VydmljZXMiLCJlZGl0U2VydmljZUlkIiwic2V0RWRpdFNlcnZpY2VJZCIsImlucHV0Iiwic2V0SW5wdXQiLCJhZGROZXdCb3giLCJuZXdJZCIsImxlbmd0aCIsIm5ld1NlcnZpY2UiLCJkZWxldGVTZXJ2aWNlIiwiZmlsdGVyIiwic2VydmljZSIsImhhbmRsZVNlcnZpY2VVcGRhdGUiLCJmaWVsZCIsInZhbHVlIiwibWFwIiwiaGFuZGxlSW1hZ2VVcGxvYWQiLCJlIiwiYnVmZmVyX3VybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInRhcmdldCIsImZpbGVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaW1hZ2UiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlRWRpdE1vZGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaGVhZGluZyIsInN1YkhlYWRpbmciLCJzdHlsZSIsInRleHRBbGlnbiIsImhlaWdodCIsInBvc2l0aW9uIiwiYnV0dG9uIiwib25DbGljayIsInRvcCIsInJpZ2h0IiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsImN1cnNvciIsImZvbnRTaXplIiwic3ZnIiwieG1sbnMiLCJ3aWR0aCIsImZpbGwiLCJ2aWV3Qm94IiwicGF0aCIsImQiLCJpbWciLCJzcmMiLCJhbHQiLCJuYW1lIiwib2JqZWN0Rml0IiwiZGlzcGxheSIsIm1hcmdpbiIsImZvcm0iLCJhY3Rpb24iLCJ0eXBlIiwib25DaGFuZ2UiLCJwIiwiaDUiLCJjb250ZW50RWRpdGFibGUiLCJvbkJsdXIiLCJpbm5lclRleHQiLCJwYWRkaW5nVG9wIiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DragDrop.js\n"));

/***/ })

});