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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionTitle */ \"./src/components/SectionTitle.js\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst serviceData = [\n    {\n        id: 1,\n        imageUrl: \"https://ci3.googleusercontent.com/meips/ADKq_NZoNSsoeca5R2ZpTjzU_Hqc43Te1lWRCPqEyKFsR4hpWr-Z3yQ0bj0_as8Qrs6r8tlw7rIh5UsZ-ScBTfj2KplVDdSHoLYw3aVpTfjVokSIbnP3aWd6jCnXkvAv=s0-d-e1-ft#https://news.bundesliga.com/imgproxy/img/2041575200/xavi_wittz_600.jpg\",\n        desc: \"Subplots abound when RB Leipzig host Bundesliga leaders Bayer Leverkusen in Matchday 18's headline fixture on Saturday. Can Leipzig get back on track? Will Leverkusen stay unbeaten? Who will win out between respective December Rookie and Player of the Month winners Xavi and Florian Wirtz? You do not want to miss it!\"\n    }\n];\nconst override = {\n    \"position\": \"fixde\",\n    \"top\": \"50%\",\n    \"left\": \"50%\",\n    \"margin\": \"auto\",\n    \"borderColor\": \"red\",\n    zIndex: 9999\n};\nconst DragDrop = ()=>{\n    _s();\n    const [services, setServices] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(serviceData);\n    const [editServiceId, setEditServiceId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const changeLoading = ()=>{\n        if (loading) {\n            document.getElementById(\"puffloader\").style.display = \"block\";\n            setLoading(false);\n        } else {\n            setLoading(true);\n        }\n    };\n    const addNewBox = ()=>{\n        const newId = services.length + 1;\n        const newService = {\n            id: newId,\n            imageUrl: \"\",\n            desc: \"Description of new service.\"\n        };\n        setServices([\n            ...services,\n            newService\n        ]);\n    };\n    const deleteService = (id)=>{\n        setServices(services.filter((service)=>service.id !== id));\n    };\n    const handleServiceUpdate = (id, field, value)=>{\n        setServices(services.map((service)=>{\n            if (service.id === id) {\n                return {\n                    ...service,\n                    [field]: value\n                };\n            }\n            return service;\n        }));\n    };\n    const handleImageUpload = async (e, id)=>{\n        try {\n            changeLoading();\n            const file = e.target.files[0]; // getting a hold of the uploaded file\n            // make image a data uri from the file and set it to a const image\n            const image = await new Promise((resolve, reject)=>{\n                let reader = new FileReader();\n                reader.onload = (e)=>resolve(e.target.result);\n                reader.onerror = reject;\n                reader.readAsDataURL(file);\n            });\n            // send buffer_url to editEmail api\n            const response = await fetch(\"/api/addImage\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    image: image\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const data = await response.json();\n            if (response.status === 200) {\n                changeLoading();\n                handleServiceUpdate(id, \"imageUrl\", data.image_destination);\n            }\n        } catch (err) {\n            console.log(\"there was an error\");\n            console.log(err);\n            changeLoading();\n        }\n    };\n    const toggleEditMode = (id)=>{\n        setEditServiceId(editServiceId === id ? null : id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_3__.PuffLoader, {\n                id: \"puffloader\",\n                cssOverride: override,\n                color: \"#36d7b7\"\n            }, void 0, false, {\n                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                lineNumber: 107,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"services\",\n                className: \"section services-section bg-gray\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SectionTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            heading: \"Your Newsletter\",\n                            subHeading: \"Services\"\n                        }, void 0, false, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                            lineNumber: 114,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"row gy-4\",\n                            children: services.map((service)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-12 centered-col\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"feature-box-01\",\n                                        style: {\n                                            textAlign: \"center\",\n                                            height: \"568px\",\n                                            position: \"relative\"\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>deleteService(service.id),\n                                                style: {\n                                                    position: \"absolute\",\n                                                    top: \"10px\",\n                                                    right: \"10px\",\n                                                    border: \"none\",\n                                                    background: \"none\",\n                                                    cursor: \"pointer\",\n                                                    fontSize: \"20px\"\n                                                },\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                                    width: \"16\",\n                                                    height: \"16\",\n                                                    fill: \"currentColor\",\n                                                    className: \"bi bi-trash\",\n                                                    viewBox: \"0 0 16 16\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                            d: \"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                                            lineNumber: 132,\n                                                            columnNumber: 5\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                            d: \"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                                            lineNumber: 133,\n                                                            columnNumber: 5\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                                    lineNumber: 131,\n                                                    columnNumber: 3\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                                lineNumber: 119,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            service.imageUrl != \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: service.imageUrl,\n                                                alt: service.name,\n                                                style: {\n                                                    width: \"600px\",\n                                                    height: \"300px\",\n                                                    objectFit: \"cover\",\n                                                    display: \"block\",\n                                                    margin: \"0 auto\"\n                                                },\n                                                className: \"image-full\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                                lineNumber: 138,\n                                                columnNumber: 45\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"form\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        type: \"file\",\n                                                        onChange: (e)=>handleImageUpload(e, service.id)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                                        lineNumber: 152,\n                                                        columnNumber: 3\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: \"Click Here To  Upload Your Image\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                                        lineNumber: 153,\n                                                        columnNumber: 3\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                                lineNumber: 151,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"feature-content\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                        contentEditable: true,\n                                                        onBlur: (e)=>handleServiceUpdate(service.id, \"name\", e.target.innerText),\n                                                        style: {\n                                                            paddingTop: \"20px\"\n                                                        },\n                                                        children: service.name\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                                        lineNumber: 158,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        contentEditable: true,\n                                                        onBlur: (e)=>handleServiceUpdate(service.id, \"desc\", e.target.innerText),\n                                                        style: {\n                                                            paddingTop: \"10px\"\n                                                        },\n                                                        children: service.desc\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                                        lineNumber: 165,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                                lineNumber: 157,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, service.id, false, {\n                                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                            lineNumber: 115,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                textAlign: \"center\",\n                                marginTop: \"20px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: addNewBox,\n                                className: \"px-btn px-btn-theme\",\n                                children: \"Add New Box\"\n                            }, void 0, false, {\n                                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                                lineNumber: 178,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                            lineNumber: 177,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                    lineNumber: 113,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/moksh/Desktop/Hermes/hermes-email/src/components/DragDrop.js\",\n                lineNumber: 109,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(DragDrop, \"fKRo+RRxqbKGXPYnQlmYolsguCE=\");\n_c = DragDrop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DragDrop);\nvar _c;\n$RefreshReg$(_c, \"DragDrop\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFJVyw4REFBQzlCO2dEQUFJRCxXQUFVOztrRUFDYiw4REFBQ2dDO3dEQUNDQyxlQUFlO3dEQUNmQyxRQUFRLENBQUNsRSxJQUFNTCxvQkFBb0JELFFBQVF2QixFQUFFLEVBQUUsUUFBUTZCLEVBQUVFLE1BQU0sQ0FBQ2lFLFNBQVM7d0RBQ3pFakYsT0FBTzs0REFBRWtGLFlBQVk7d0RBQU87a0VBRTNCMUUsUUFBUStELElBQUk7Ozs7OztrRUFFZiw4REFBQ007d0RBQ0NFLGVBQWU7d0RBQ2ZDLFFBQVEsQ0FBQ2xFLElBQU1MLG9CQUFvQkQsUUFBUXZCLEVBQUUsRUFBRSxRQUFRNkIsRUFBRUUsTUFBTSxDQUFDaUUsU0FBUzt3REFDekVqRixPQUFPOzREQUFFa0YsWUFBWTt3REFBTztrRUFFM0IxRSxRQUFRckIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQXJEcUJxQixRQUFRdkIsRUFBRTs7Ozs7Ozs7OztzQ0E0RHhELDhEQUFDOEQ7NEJBQUkvQyxPQUFPO2dDQUFFa0QsV0FBVztnQ0FBVWlDLFdBQVc7NEJBQU87c0NBQ25ELDRFQUFDOUI7Z0NBQ0NDLFNBQVNwRDtnQ0FDVDRDLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFYO0dBdEtNeEQ7S0FBQUE7QUF5S04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRHJhZ0Ryb3AuanM/MzY3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gXCIuL1NlY3Rpb25UaXRsZVwiO1xuaW1wb3J0IHsgUHVmZkxvYWRlciB9IGZyb20gXCJyZWFjdC1zcGlubmVyc1wiO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcbmNvbnN0IHNlcnZpY2VEYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9jaTMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL21laXBzL0FES3FfTlpvTlNzb2VjYTVSMlpwVGp6VV9IcWM0M1RlMWxXUkNQcUV5S0ZzUjRocFdyLVozeVEwYmowX2FzOFFyczZyOHRsdzdySWg1VXNaLVNjQlRmajJLcGxWRGRTSG9MWXczYVZwVGZqVm9rU0liblAzYVdkNmpDblhrdkF2PXMwLWQtZTEtZnQjaHR0cHM6Ly9uZXdzLmJ1bmRlc2xpZ2EuY29tL2ltZ3Byb3h5L2ltZy8yMDQxNTc1MjAwL3hhdmlfd2l0dHpfNjAwLmpwZ1wiLCAvLyBVcGRhdGUgd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgIGRlc2M6IFwiU3VicGxvdHMgYWJvdW5kIHdoZW4gUkIgTGVpcHppZyBob3N0IEJ1bmRlc2xpZ2EgbGVhZGVycyBCYXllciBMZXZlcmt1c2VuIGluIE1hdGNoZGF5IDE4J3MgaGVhZGxpbmUgZml4dHVyZSBvbiBTYXR1cmRheS4gQ2FuIExlaXB6aWcgZ2V0IGJhY2sgb24gdHJhY2s/IFdpbGwgTGV2ZXJrdXNlbiBzdGF5IHVuYmVhdGVuPyBXaG8gd2lsbCB3aW4gb3V0IGJldHdlZW4gcmVzcGVjdGl2ZSBEZWNlbWJlciBSb29raWUgYW5kIFBsYXllciBvZiB0aGUgTW9udGggd2lubmVycyBYYXZpIGFuZCBGbG9yaWFuIFdpcnR6PyBZb3UgZG8gbm90IHdhbnQgdG8gbWlzcyBpdCFcIlxuICB9LFxuICAvLyAuLi4gb3RoZXIgc2VydmljZXNcbl07XG5cbmNvbnN0IG92ZXJyaWRlID0ge1xuICBcInBvc2l0aW9uXCI6IFwiZml4ZGVcIixcbiAgXCJ0b3BcIjogXCI1MCVcIixcbiAgXCJsZWZ0XCI6IFwiNTAlXCIsXG5cbiAgXCJtYXJnaW5cIjogXCJhdXRvXCIsXG4gIFwiYm9yZGVyQ29sb3JcIjogXCJyZWRcIixcbiAgekluZGV4OiA5OTk5XG59O1xuXG5jb25zdCBEcmFnRHJvcCA9ICgpID0+IHtcbiAgY29uc3QgW3NlcnZpY2VzLCBzZXRTZXJ2aWNlc10gPSB1c2VTdGF0ZShzZXJ2aWNlRGF0YSk7XG4gIGNvbnN0IFtlZGl0U2VydmljZUlkLCBzZXRFZGl0U2VydmljZUlkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgY2hhbmdlTG9hZGluZyA9ICgpID0+IHtcbiAgICBpZihsb2FkaW5nKXtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHVmZmxvYWRlclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIH1cbiAgfVxuXG5cblxuICBjb25zdCBhZGROZXdCb3ggPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3SWQgPSBzZXJ2aWNlcy5sZW5ndGggKyAxO1xuICAgIGNvbnN0IG5ld1NlcnZpY2UgPSB7XG4gICAgICBpZDogbmV3SWQsXG4gICAgICBpbWFnZVVybDogXCJcIiwgLy8gUHJvdmlkZSBhIGRlZmF1bHQgaW1hZ2UgcGF0aFxuICAgICAgZGVzYzogXCJEZXNjcmlwdGlvbiBvZiBuZXcgc2VydmljZS5cIixcbiAgICB9O1xuICAgIHNldFNlcnZpY2VzKFsuLi5zZXJ2aWNlcywgbmV3U2VydmljZV0pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVNlcnZpY2UgPSAoaWQpID0+IHtcbiAgICBzZXRTZXJ2aWNlcyhzZXJ2aWNlcy5maWx0ZXIoc2VydmljZSA9PiBzZXJ2aWNlLmlkICE9PSBpZCkpO1xuICB9O1xuICBcblxuXG4gIGNvbnN0IGhhbmRsZVNlcnZpY2VVcGRhdGUgPSAoaWQsIGZpZWxkLCB2YWx1ZSkgPT4ge1xuICAgIHNldFNlcnZpY2VzKHNlcnZpY2VzLm1hcChzZXJ2aWNlID0+IHtcbiAgICAgIGlmIChzZXJ2aWNlLmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4geyAuLi5zZXJ2aWNlLCBbZmllbGRdOiB2YWx1ZSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlcnZpY2U7XG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUltYWdlVXBsb2FkID0gYXN5bmMgKGUsIGlkKSA9PiB7XG4gICAgdHJ5e1xuICAgIGNoYW5nZUxvYWRpbmcoKVxuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTsgLy8gZ2V0dGluZyBhIGhvbGQgb2YgdGhlIHVwbG9hZGVkIGZpbGVcblxuICAgIC8vIG1ha2UgaW1hZ2UgYSBkYXRhIHVyaSBmcm9tIHRoZSBmaWxlIGFuZCBzZXQgaXQgdG8gYSBjb25zdCBpbWFnZVxuICAgIGNvbnN0IGltYWdlID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiByZXNvbHZlKGUudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9KTtcblxuICAgIC8vIHNlbmQgYnVmZmVyX3VybCB0byBlZGl0RW1haWwgYXBpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvYWRkSW1hZ2VcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7aW1hZ2U6IGltYWdlfSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNoYW5nZUxvYWRpbmcoKVxuICAgICAgaGFuZGxlU2VydmljZVVwZGF0ZShpZCwgJ2ltYWdlVXJsJywgZGF0YS5pbWFnZV9kZXN0aW5hdGlvbik7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhcInRoZXJlIHdhcyBhbiBlcnJvclwiKVxuICAgIGNvbnNvbGUubG9nKGVycilcbiAgICBjaGFuZ2VMb2FkaW5nKClcbiAgfVxuICAgIFxufVxuXG4gIGNvbnN0IHRvZ2dsZUVkaXRNb2RlID0gKGlkKSA9PiB7XG4gICAgc2V0RWRpdFNlcnZpY2VJZChlZGl0U2VydmljZUlkID09PSBpZCA/IG51bGwgOiBpZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICA8UHVmZkxvYWRlciBpZD1cInB1ZmZsb2FkZXJcIiBjc3NPdmVycmlkZT17b3ZlcnJpZGV9IGNvbG9yPVwiIzM2ZDdiN1wiIC8+XG4gICAgXG4gICAgPHNlY3Rpb24gaWQ9XCJzZXJ2aWNlc1wiIGNsYXNzTmFtZT1cInNlY3Rpb24gc2VydmljZXMtc2VjdGlvbiBiZy1ncmF5XCI+XG4gICAgICAgICAgICAgXG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPFNlY3Rpb25UaXRsZSBoZWFkaW5nPXtcIllvdXIgTmV3c2xldHRlclwifSBzdWJIZWFkaW5nPXtcIlNlcnZpY2VzXCJ9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGd5LTRcIj5cbiAgICAgICAgICB7c2VydmljZXMubWFwKChzZXJ2aWNlKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjZW50ZXJlZC1jb2xcIiBrZXk9e3NlcnZpY2UuaWR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmUtYm94LTAxXCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgaGVpZ2h0OiAnNTY4cHgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgb25DbGljaz17KCkgPT4gZGVsZXRlU2VydmljZShzZXJ2aWNlLmlkKX1cbiAgc3R5bGU9e3tcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcxMHB4JyxcbiAgICByaWdodDogJzEwcHgnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBmb250U2l6ZTogJzIwcHgnLFxuICB9fVxuPlxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3NOYW1lPVwiYmkgYmktdHJhc2hcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgPHBhdGggZD1cIk01LjUgNS41QS41LjUgMCAwIDEgNiA2djZhLjUuNSAwIDAgMS0xIDBWNmEuNS41IDAgMCAxIC41LS41bTIuNSAwYS41LjUgMCAwIDEgLjUuNXY2YS41LjUgMCAwIDEtMSAwVjZhLjUuNSAwIDAgMSAuNS0uNW0zIC41YS41LjUgMCAwIDAtMSAwdjZhLjUuNSAwIDAgMCAxIDB6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMTQuNSAzYTEgMSAwIDAgMS0xIDFIMTN2OWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlY0aC0uNWExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMUg2YTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxaDMuNWExIDEgMCAwIDEgMSAxek00LjExOCA0IDQgNC4wNTlWMTNhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTFWNC4wNTlMMTEuODgyIDR6TTIuNSAzaDExVjJoLTExelwiLz5cbiAgPC9zdmc+XG48L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHtzZXJ2aWNlLmltYWdlVXJsICE9IFwiXCIgPyAgKDxpbWcgXG4gICAgICAgICAgICAgICAgICBzcmM9e3NlcnZpY2UuaW1hZ2VVcmx9IFxuICAgICAgICAgICAgICAgICAgYWx0PXtzZXJ2aWNlLm5hbWV9IFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNjAwcHgnLCBcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzAwcHgnLCBcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nXG4gICAgICAgICAgICAgICAgICB9fSBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlLWZ1bGxcIlxuICAgICAgICAgICAgICAgIC8+KSA6IChcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCIgPlxuICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUltYWdlVXBsb2FkKGUsIHNlcnZpY2UuaWQpfSAvID4gXG4gIDxwPkNsaWNrIEhlcmUgVG8gIFVwbG9hZCBZb3VyIEltYWdlPC9wPlxuPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxoNVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50RWRpdGFibGVcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoZSkgPT4gaGFuZGxlU2VydmljZVVwZGF0ZShzZXJ2aWNlLmlkLCAnbmFtZScsIGUudGFyZ2V0LmlubmVyVGV4dCl9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcyMHB4JyB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c2VydmljZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRFZGl0YWJsZVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eyhlKSA9PiBoYW5kbGVTZXJ2aWNlVXBkYXRlKHNlcnZpY2UuaWQsICdkZXNjJywgZS50YXJnZXQuaW5uZXJUZXh0KX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzEwcHgnIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlLmRlc2N9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpblRvcDogJzIwcHgnIH19PlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBvbkNsaWNrPXthZGROZXdCb3h9IFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtYnRuIHB4LWJ0bi10aGVtZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkIE5ldyBCb3hcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IERyYWdEcm9wOyJdLCJuYW1lcyI6WyJTZWN0aW9uVGl0bGUiLCJQdWZmTG9hZGVyIiwidXNlU3RhdGUiLCJzZXJ2aWNlRGF0YSIsImlkIiwiaW1hZ2VVcmwiLCJkZXNjIiwib3ZlcnJpZGUiLCJ6SW5kZXgiLCJEcmFnRHJvcCIsInNlcnZpY2VzIiwic2V0U2VydmljZXMiLCJlZGl0U2VydmljZUlkIiwic2V0RWRpdFNlcnZpY2VJZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY2hhbmdlTG9hZGluZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRpc3BsYXkiLCJhZGROZXdCb3giLCJuZXdJZCIsImxlbmd0aCIsIm5ld1NlcnZpY2UiLCJkZWxldGVTZXJ2aWNlIiwiZmlsdGVyIiwic2VydmljZSIsImhhbmRsZVNlcnZpY2VVcGRhdGUiLCJmaWVsZCIsInZhbHVlIiwibWFwIiwiaGFuZGxlSW1hZ2VVcGxvYWQiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiaW1hZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwicmVhZEFzRGF0YVVSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsInN0YXR1cyIsImltYWdlX2Rlc3RpbmF0aW9uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInRvZ2dsZUVkaXRNb2RlIiwiY3NzT3ZlcnJpZGUiLCJjb2xvciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoZWFkaW5nIiwic3ViSGVhZGluZyIsInRleHRBbGlnbiIsImhlaWdodCIsInBvc2l0aW9uIiwiYnV0dG9uIiwib25DbGljayIsInRvcCIsInJpZ2h0IiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsImN1cnNvciIsImZvbnRTaXplIiwic3ZnIiwieG1sbnMiLCJ3aWR0aCIsImZpbGwiLCJ2aWV3Qm94IiwicGF0aCIsImQiLCJpbWciLCJzcmMiLCJhbHQiLCJuYW1lIiwib2JqZWN0Rml0IiwibWFyZ2luIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwIiwiaDUiLCJjb250ZW50RWRpdGFibGUiLCJvbkJsdXIiLCJpbm5lclRleHQiLCJwYWRkaW5nVG9wIiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DragDrop.js\n"));

/***/ })

});