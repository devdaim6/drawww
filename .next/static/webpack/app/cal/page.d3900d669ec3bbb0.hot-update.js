"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cal/page",{

/***/ "(app-pages-browser)/./app/cal/page.jsx":
/*!**************************!*\
  !*** ./app/cal/page.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Calculator = ()=>{\n    _s();\n    const [numberOne, setNumberOne] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [operation, setOperation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [numberTwo, setNumberTwo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleNumberInput = (event)=>{\n        if (event.key === \"Enter\" || event.target.value === \"=\") {\n            // Calculate the result\n            let resultValue;\n            switch(operation){\n                case \"+\":\n                    resultValue = parseFloat(numberOne) + parseFloat(numberTwo);\n                    break;\n                case \"-\":\n                    resultValue = parseFloat(numberOne) - parseFloat(numberTwo);\n                    break;\n                case \"*\":\n                    resultValue = parseFloat(numberOne) * parseFloat(numberTwo);\n                    break;\n                case \"/\":\n                    if (parseFloat(numberTwo) === 0) {\n                        setResult(\"Cannot divide by zero\");\n                        return;\n                    }\n                    resultValue = parseFloat(numberOne) / parseFloat(numberTwo);\n                    break;\n                default:\n                    return;\n            }\n            setResult(resultValue.toFixed(2));\n            setNumberOne(\"\");\n            setNumberTwo(\"\");\n            setOperation(\"\");\n        } else {\n            setNumberOne((prevNumberOne)=>prevNumberOne + event.target.value);\n        }\n        setNumberTwo(\"\");\n    };\n    const handleOperationClick = (event)=>{\n        setOperation(event.target.value);\n        if (numberTwo !== \"\") {\n            // Calculate the result\n            let resultValue;\n            switch(operation){\n                case \"+\":\n                    resultValue = parseFloat(numberOne) + parseFloat(numberTwo);\n                    break;\n                case \"-\":\n                    resultValue = parseFloat(numberOne) - parseFloat(numberTwo);\n                    break;\n                case \"*\":\n                    resultValue = parseFloat(numberOne) * parseFloat(numberTwo);\n                    break;\n                case \"/\":\n                    if (parseFloat(numberTwo) === 0) {\n                        setResult(\"Cannot divide by zero\");\n                        return;\n                    }\n                    resultValue = parseFloat(numberOne) / parseFloat(numberTwo);\n                    break;\n                default:\n                    return;\n            }\n            setResult(resultValue.toFixed(2));\n            setNumberOne(\"\");\n            setNumberTwo(\"\");\n            setOperation(\"\");\n        }\n    };\n    const handleClearClick = ()=>{\n        setNumberOne(\"\");\n        setOperation(\"\");\n        setNumberTwo(\"\");\n        setResult(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen flex flex-col items-center justify-center bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"calculator max-w-xs bg-white rounded shadow p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"display mb-4 text-3xl bg-gray-200 p-2 text-right text-gray-800\",\n                    children: result\n                }, void 0, false, {\n                    fileName: \"/media/grub/Developer/NextJS/ExCalidraw/app/cal/page.jsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"buttons grid grid-cols-4 gap-2\",\n                    children: [\n                        [\n                            7,\n                            8,\n                            9,\n                            \"/\"\n                        ].map((value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleNumberInput,\n                                value: value,\n                                className: \"btn\",\n                                children: value\n                            }, value, false, {\n                                fileName: \"/media/grub/Developer/NextJS/ExCalidraw/app/cal/page.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, undefined)),\n                        [\n                            4,\n                            5,\n                            6,\n                            \"*\"\n                        ].map((value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleNumberInput,\n                                value: value,\n                                className: \"btn\",\n                                children: value\n                            }, value, false, {\n                                fileName: \"/media/grub/Developer/NextJS/ExCalidraw/app/cal/page.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, undefined)),\n                        [\n                            1,\n                            2,\n                            3,\n                            \"+\"\n                        ].map((value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleNumberInput,\n                                value: value,\n                                className: \"btn\",\n                                children: value\n                            }, value, false, {\n                                fileName: \"/media/grub/Developer/NextJS/ExCalidraw/app/cal/page.jsx\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleClearClick,\n                            className: \"btn btn-danger col-span-2\",\n                            children: \"C\"\n                        }, void 0, false, {\n                            fileName: \"/media/grub/Developer/NextJS/ExCalidraw/app/cal/page.jsx\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, undefined),\n                        [\n                            0,\n                            \".\",\n                            \"=\"\n                        ].map((value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onKeyUp: handleNumberInput,\n                                onClick: handleOperationClick,\n                                value: value,\n                                className: \"btn\".concat(value === \"=\" ? \" col-span-4 btn-equal\" : \"\"),\n                                children: value\n                            }, value, false, {\n                                fileName: \"/media/grub/Developer/NextJS/ExCalidraw/app/cal/page.jsx\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleOperationClick,\n                            value: \"-\",\n                            className: \"btn-op\",\n                            children: \"-\"\n                        }, void 0, false, {\n                            fileName: \"/media/grub/Developer/NextJS/ExCalidraw/app/cal/page.jsx\",\n                            lineNumber: 137,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/media/grub/Developer/NextJS/ExCalidraw/app/cal/page.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/media/grub/Developer/NextJS/ExCalidraw/app/cal/page.jsx\",\n            lineNumber: 85,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/media/grub/Developer/NextJS/ExCalidraw/app/cal/page.jsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Calculator, \"rgi+duWtv0tDTeGAQFuuf3Xc6Hw=\");\n_c = Calculator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\nvar _c;\n$RefreshReg$(_c, \"Calculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVDQyxTQUFTZjtnQ0FDVEksT0FBT0E7Z0NBQ1BRLFdBQVU7MENBRVRSOytCQUxJQTs7Ozs7c0NBUVQsOERBQUNVOzRCQUNDQyxTQUFTTDs0QkFDVEUsV0FBVTtzQ0FDWDs7Ozs7O3dCQUdBOzRCQUFDOzRCQUFHOzRCQUFLO3lCQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDVCxzQkFDbEIsOERBQUNVO2dDQUVDRSxTQUFTaEI7Z0NBQ1RlLFNBQVNOO2dDQUNUTCxPQUFPQTtnQ0FDUFEsV0FBVyxNQUFtRCxPQUE3Q1IsVUFBVSxNQUFNLDBCQUEwQjswQ0FFMURBOytCQU5JQTs7Ozs7c0NBU1QsOERBQUNVOzRCQUNDQyxTQUFTTjs0QkFDVEwsT0FBTTs0QkFDTlEsV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQWhKTXJCO0tBQUFBO0FBa0pOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jYWwvcGFnZS5qc3g/MjNjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENhbGN1bGF0b3IgPSAoKSA9PiB7XG4gIGNvbnN0IFtudW1iZXJPbmUsIHNldE51bWJlck9uZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW29wZXJhdGlvbiwgc2V0T3BlcmF0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbnVtYmVyVHdvLCBzZXROdW1iZXJUd29dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVOdW1iZXJJbnB1dCA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgfHwgZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnPScpIHtcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcmVzdWx0XG4gICAgICBsZXQgcmVzdWx0VmFsdWU7XG4gICAgICBzd2l0Y2ggKG9wZXJhdGlvbikge1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICByZXN1bHRWYWx1ZSA9IHBhcnNlRmxvYXQobnVtYmVyT25lKSArIHBhcnNlRmxvYXQobnVtYmVyVHdvKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgcmVzdWx0VmFsdWUgPSBwYXJzZUZsb2F0KG51bWJlck9uZSkgLSBwYXJzZUZsb2F0KG51bWJlclR3byk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgIHJlc3VsdFZhbHVlID0gcGFyc2VGbG9hdChudW1iZXJPbmUpICogcGFyc2VGbG9hdChudW1iZXJUd28pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICBpZiAocGFyc2VGbG9hdChudW1iZXJUd28pID09PSAwKSB7XG4gICAgICAgICAgICBzZXRSZXN1bHQoJ0Nhbm5vdCBkaXZpZGUgYnkgemVybycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXN1bHRWYWx1ZSA9IHBhcnNlRmxvYXQobnVtYmVyT25lKSAvIHBhcnNlRmxvYXQobnVtYmVyVHdvKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZXRSZXN1bHQocmVzdWx0VmFsdWUudG9GaXhlZCgyKSk7XG4gICAgICBzZXROdW1iZXJPbmUoJycpO1xuICAgICAgc2V0TnVtYmVyVHdvKCcnKTtcbiAgICAgIHNldE9wZXJhdGlvbignJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE51bWJlck9uZSgocHJldk51bWJlck9uZSkgPT4gcHJldk51bWJlck9uZSArIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICAgIHNldE51bWJlclR3bygnJyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlT3BlcmF0aW9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRPcGVyYXRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAobnVtYmVyVHdvICE9PSAnJykge1xuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSByZXN1bHRcbiAgICAgIGxldCByZXN1bHRWYWx1ZTtcbiAgICAgIHN3aXRjaCAob3BlcmF0aW9uKSB7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgIHJlc3VsdFZhbHVlID0gcGFyc2VGbG9hdChudW1iZXJPbmUpICsgcGFyc2VGbG9hdChudW1iZXJUd28pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICByZXN1bHRWYWx1ZSA9IHBhcnNlRmxvYXQobnVtYmVyT25lKSAtIHBhcnNlRmxvYXQobnVtYmVyVHdvKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgcmVzdWx0VmFsdWUgPSBwYXJzZUZsb2F0KG51bWJlck9uZSkgKiBwYXJzZUZsb2F0KG51bWJlclR3byk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgIGlmIChwYXJzZUZsb2F0KG51bWJlclR3bykgPT09IDApIHtcbiAgICAgICAgICAgIHNldFJlc3VsdCgnQ2Fubm90IGRpdmlkZSBieSB6ZXJvJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3VsdFZhbHVlID0gcGFyc2VGbG9hdChudW1iZXJPbmUpIC8gcGFyc2VGbG9hdChudW1iZXJUd28pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNldFJlc3VsdChyZXN1bHRWYWx1ZS50b0ZpeGVkKDIpKTtcbiAgICAgIHNldE51bWJlck9uZSgnJyk7XG4gICAgICBzZXROdW1iZXJUd28oJycpO1xuICAgICAgc2V0T3BlcmF0aW9uKCcnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xlYXJDbGljayA9ICgpID0+IHtcbiAgICBzZXROdW1iZXJPbmUoJycpO1xuICAgIHNldE9wZXJhdGlvbignJyk7XG4gICAgc2V0TnVtYmVyVHdvKCcnKTtcbiAgICBzZXRSZXN1bHQoMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktMTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGN1bGF0b3IgbWF4LXcteHMgYmctd2hpdGUgcm91bmRlZCBzaGFkb3cgcC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheSBtYi00IHRleHQtM3hsIGJnLWdyYXktMjAwIHAtMiB0ZXh0LXJpZ2h0IHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgICB7cmVzdWx0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zIGdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTJcIj5cbiAgICAgICAgICB7WzcsIDgsIDksICcvJ10ubWFwKCh2YWx1ZSkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e3ZhbHVlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOdW1iZXJJbnB1dH1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7WzQsIDUsIDYsICcqJ10ubWFwKCh2YWx1ZSkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e3ZhbHVlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOdW1iZXJJbnB1dH1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7WzEsIDIsIDMsICcrJ10ubWFwKCh2YWx1ZSkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e3ZhbHVlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOdW1iZXJJbnB1dH1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGVhckNsaWNrfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgY29sLXNwYW4tMlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtbMCwgJy4nLCAnPSddLm1hcCgodmFsdWUpID0+IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAga2V5PXt2YWx1ZX1cbiAgICAgICAgICAgICAgb25LZXlVcD17aGFuZGxlTnVtYmVySW5wdXR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZXJhdGlvbkNsaWNrfVxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biR7dmFsdWUgPT09ICc9JyA/ICcgY29sLXNwYW4tNCBidG4tZXF1YWwnIDogJyd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT3BlcmF0aW9uQ2xpY2t9XG4gICAgICAgICAgICB2YWx1ZT1cIi1cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLW9wXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICAtXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ2FsY3VsYXRvciIsIm51bWJlck9uZSIsInNldE51bWJlck9uZSIsIm9wZXJhdGlvbiIsInNldE9wZXJhdGlvbiIsIm51bWJlclR3byIsInNldE51bWJlclR3byIsInJlc3VsdCIsInNldFJlc3VsdCIsImhhbmRsZU51bWJlcklucHV0IiwiZXZlbnQiLCJrZXkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlc3VsdFZhbHVlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJwcmV2TnVtYmVyT25lIiwiaGFuZGxlT3BlcmF0aW9uQ2xpY2siLCJoYW5kbGVDbGVhckNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiYnV0dG9uIiwib25DbGljayIsIm9uS2V5VXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/cal/page.jsx\n"));

/***/ })

});