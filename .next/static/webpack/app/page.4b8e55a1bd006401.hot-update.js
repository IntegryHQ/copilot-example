"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _copilotkit_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @copilotkit/react-core */ \"(app-pages-browser)/./node_modules/@copilotkit/react-core/dist/chunk-2MPUQRAY.mjs\");\n/* harmony import */ var _copilotkit_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @copilotkit/react-core */ \"(app-pages-browser)/./node_modules/@copilotkit/react-core/dist/chunk-DCTJZ742.mjs\");\n/* harmony import */ var _copilotkit_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @copilotkit/react-core */ \"(app-pages-browser)/./node_modules/@copilotkit/react-core/dist/chunk-RYDEG77L.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _integry_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @integry/sdk */ \"(app-pages-browser)/./node_modules/@integry/sdk/dist/esm/index.csm.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"(app-pages-browser)/./src/config.ts\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ \"(app-pages-browser)/./src/helpers.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    useIntegryCopilotKitIntegration();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center min-h-screen\",\n        children: \"Integry Marketplace\"\n    }, void 0, false, {\n        fileName: \"/Users/yasir/integry/devwork/copilot-kit/copilot-example/src/app/page.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"pNnxDWKybuAfXNlD39xU39vzQ+Y=\", false, function() {\n    return [\n        useIntegryCopilotKitIntegration\n    ];\n});\n_c = Home;\nfunction useIntegryCopilotKitIntegration() {\n    _s1();\n    const generalContext = (0,_copilotkit_react_core__WEBPACK_IMPORTED_MODULE_5__.useCopilotContext)();\n    const messagesContext = (0,_copilotkit_react_core__WEBPACK_IMPORTED_MODULE_6__.useCopilotMessagesContext)();\n    const context = {\n        ...generalContext,\n        ...messagesContext\n    };\n    const [integry, setIntegry] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [hash, setHash] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        /**\n     * Initializing the Integry SDK object inside useEffect\n     */ _integry_sdk__WEBPACK_IMPORTED_MODULE_2__.Helpers.getAuthHash(_config__WEBPACK_IMPORTED_MODULE_3__.userId, _config__WEBPACK_IMPORTED_MODULE_3__.appSecret).then((hash)=>{\n            const integry = new _integry_sdk__WEBPACK_IMPORTED_MODULE_2__.IntegryJS({\n                appKey: _config__WEBPACK_IMPORTED_MODULE_3__.appKey,\n                hash,\n                user: {\n                    userId: _config__WEBPACK_IMPORTED_MODULE_3__.userId,\n                    apiKey: \"\"\n                }\n            });\n            setHash(hash);\n            setIntegry(integry);\n        }).catch((error)=>{\n            console.error(\"Error fetching auth hash:\", error);\n        });\n    }, []);\n    (0,_copilotkit_react_core__WEBPACK_IMPORTED_MODULE_7__.useCopilotAction)({\n        name: \"findAndExecuteFunction\",\n        description: _config__WEBPACK_IMPORTED_MODULE_3__.findAndExecuteFunctionPrompt,\n        parameters: [\n            {\n                name: \"query\",\n                description: \"The query to search for a function\",\n                type: \"string\"\n            }\n        ],\n        handler: async ()=>{},\n        renderAndWait: (param)=>{\n            let { args, handler, status } = param;\n            if (status === \"inProgress\") {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"/Users/yasir/integry/devwork/copilot-kit/copilot-example/src/app/page.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 16\n                }, this);\n            } else if (status === \"executing\") {\n                if (integry === null) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Failed to initialize Integry SDK.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yasir/integry/devwork/copilot-kit/copilot-example/src/app/page.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 18\n                    }, this);\n                }\n                const intent = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getIntent)(args.query);\n                let appName = \"\";\n                try {\n                    appName = args.query.split(\".\")[1];\n                } catch (e) {\n                    appName = \"\";\n                }\n                switch(intent){\n                    case \"disconnect\":\n                        integry.isConnected(appName).then((authorization_id)=>{\n                            if (authorization_id) {\n                                integry.disconnect(authorization_id).then((response)=>{\n                                    handler(response);\n                                });\n                            } else {\n                                handler(\"Already disconnected.\");\n                            }\n                        });\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Disconnecting \",\n                                appName,\n                                \"...\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/yasir/integry/devwork/copilot-kit/copilot-example/src/app/page.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 20\n                        }, this);\n                    case \"connect\":\n                        const appName1 = args.query.split(\".\")[1];\n                        integry.isConnected(appName1).then((authorization_id)=>{\n                            if (authorization_id) {\n                                handler(\"Already connected.\");\n                            } else {\n                                integry.connect(appName1).then((response)=>{\n                                    handler(\"Connected successfully.\");\n                                });\n                            }\n                        });\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Connecting \",\n                                appName1,\n                                \"...\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/yasir/integry/devwork/copilot-kit/copilot-example/src/app/page.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 20\n                        }, this);\n                }\n                if (args.query.includes(\"disconnect\") && args.query.split(\".\")[1] && args.query.split(\".\").length === 2) {\n                    const appName = args.query.split(\".\")[1];\n                    integry.isConnected(appName).then((authorization_id)=>{\n                        if (authorization_id) {\n                            integry.disconnect(authorization_id).then((response)=>{\n                                handler(response);\n                            });\n                        } else {\n                            handler(\"Already disconnected.\");\n                        }\n                    });\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Disconnecting \",\n                            appName,\n                            \"...\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yasir/integry/devwork/copilot-kit/copilot-example/src/app/page.tsx\",\n                        lineNumber: 137,\n                        columnNumber: 18\n                    }, this);\n                } else if (args.query.includes(\"connect\") && args.query.split(\".\")[1] && args.query.split(\".\").length === 2) {\n                    const appName = args.query.split(\".\")[1];\n                    integry.isConnected(appName).then((authorization_id)=>{\n                        if (authorization_id) {\n                            handler(\"Already connected.\");\n                        } else {\n                            integry.connect(appName).then((response)=>{\n                                handler(\"Connected successfully.\");\n                            });\n                        }\n                    });\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Connecting \",\n                            appName,\n                            \"...\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yasir/integry/devwork/copilot-kit/copilot-example/src/app/page.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 18\n                    }, this);\n                }\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.predictFunction)(_config__WEBPACK_IMPORTED_MODULE_3__.appKey, hash, _config__WEBPACK_IMPORTED_MODULE_3__.userId, true, true, args.query).then((data)=>{\n                    if (data.functions.length === 0) {\n                        handler(\"No appropriate function found.\");\n                        return;\n                    }\n                    integry.isConnected(data.functions[0].meta.app.name).then((authorization_id)=>{\n                        /**\n                 * returns the authorization_id if the app is connected\n                 * otherwise returns false\n                 */ if (authorization_id) {\n                            (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.renderFunctionUI)(integry, data.functions[0], handler);\n                        } else {\n                            integry.connect(data.functions[0].meta.app.name).then((response)=>{\n                                (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.renderFunctionUI)(integry, data.functions[0], handler);\n                            });\n                        }\n                    });\n                }).catch((error)=>{\n                    // Handle any errors from the fetchFunctions call\n                    console.error(\"Fetch failed:\", error);\n                });\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Setting this up for you...\"\n                }, void 0, false, {\n                    fileName: \"/Users/yasir/integry/devwork/copilot-kit/copilot-example/src/app/page.tsx\",\n                    lineNumber: 186,\n                    columnNumber: 16\n                }, this);\n            }\n        }\n    });\n}\n_s1(useIntegryCopilotKitIntegration, \"fxZIoXPsHFZiFGbuRUFGZOg2240=\", false, function() {\n    return [\n        _copilotkit_react_core__WEBPACK_IMPORTED_MODULE_5__.useCopilotContext,\n        _copilotkit_react_core__WEBPACK_IMPORTED_MODULE_6__.useCopilotMessagesContext,\n        _copilotkit_react_core__WEBPACK_IMPORTED_MODULE_7__.useCopilotAction\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkNBQU1BLEVBQUVnQixNQUFNZCwyQ0FBTUEsRUFBRSxNQUFNLE1BQU02QixLQUFLRyxLQUFLLEVBQ3pEZixJQUFJLENBQUMsQ0FBQzBCO29CQUNMLElBQUlBLEtBQUtDLFNBQVMsQ0FBQ0YsTUFBTSxLQUFLLEdBQUc7d0JBQy9CZixRQUFRO3dCQUNSO29CQUNGO29CQUNBZixRQUNHd0IsV0FBVyxDQUFDTyxLQUFLQyxTQUFTLENBQUMsRUFBRSxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ3ZCLElBQUksRUFDM0NOLElBQUksQ0FBQyxDQUFDb0I7d0JBQ0w7OztpQkFHQyxHQUNELElBQUlBLGtCQUFrQjs0QkFDcEJuQywwREFBZ0JBLENBQUNVLFNBQVMrQixLQUFLQyxTQUFTLENBQUMsRUFBRSxFQUFFakI7d0JBQy9DLE9BQU87NEJBQ0xmLFFBQ0c0QixPQUFPLENBQUNHLEtBQUtDLFNBQVMsQ0FBQyxFQUFFLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDdkIsSUFBSSxFQUN2Q04sSUFBSSxDQUFDLENBQUNzQjtnQ0FDTHJDLDBEQUFnQkEsQ0FBQ1UsU0FBUytCLEtBQUtDLFNBQVMsQ0FBQyxFQUFFLEVBQUVqQjs0QkFDL0M7d0JBQ0o7b0JBQ0Y7Z0JBQ0osR0FDQ1AsS0FBSyxDQUFDLENBQUNDO29CQUNOLGlEQUFpRDtvQkFDakRDLFFBQVFELEtBQUssQ0FBQyxpQkFBaUJBO2dCQUNqQztnQkFFRixxQkFBTyw4REFBQ2Q7OEJBQUk7Ozs7OztZQUNkO1FBQ0Y7SUFDRjtBQUNGO0lBaktTRDs7UUFDZ0JkLHFFQUFpQkE7UUFDaEJDLDZFQUF5QkE7UUE0QmpERixvRUFBZ0JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQge1xuICB1c2VDb3BpbG90QWN0aW9uLFxuICBleHRyYWN0LFxuICB1c2VDb3BpbG90Q29udGV4dCxcbiAgdXNlQ29waWxvdE1lc3NhZ2VzQ29udGV4dCxcbn0gZnJvbSBcIkBjb3BpbG90a2l0L3JlYWN0LWNvcmVcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEludGVncnlKUywgSGVscGVycyB9IGZyb20gXCJAaW50ZWdyeS9zZGtcIjtcbmltcG9ydCB7XG4gIGFwcEtleSxcbiAgYXBwU2VjcmV0LFxuICB1c2VySWQsXG4gIGZpbmRBbmRFeGVjdXRlRnVuY3Rpb25Qcm9tcHQsXG59IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IEZpbmRBbmRFeGVjdXRlRnVuY3Rpb25BcmdzIH0gZnJvbSBcIi4uL3R5cGVzL3R5cGVzXCI7XG5pbXBvcnQgeyByZW5kZXJGdW5jdGlvblVJLCBwcmVkaWN0RnVuY3Rpb24sIGdldEludGVudCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHVzZUludGVncnlDb3BpbG90S2l0SW50ZWdyYXRpb24oKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlblwiPlxuICAgICAgSW50ZWdyeSBNYXJrZXRwbGFjZVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiB1c2VJbnRlZ3J5Q29waWxvdEtpdEludGVncmF0aW9uKCkge1xuICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHVzZUNvcGlsb3RDb250ZXh0KCk7XG4gIGNvbnN0IG1lc3NhZ2VzQ29udGV4dCA9IHVzZUNvcGlsb3RNZXNzYWdlc0NvbnRleHQoKTtcbiAgY29uc3QgY29udGV4dCA9IHsgLi4uZ2VuZXJhbENvbnRleHQsIC4uLm1lc3NhZ2VzQ29udGV4dCB9O1xuXG4gIGNvbnN0IFtpbnRlZ3J5LCBzZXRJbnRlZ3J5XSA9IHVzZVN0YXRlPEludGVncnlKUyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaGFzaCwgc2V0SGFzaF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemluZyB0aGUgSW50ZWdyeSBTREsgb2JqZWN0IGluc2lkZSB1c2VFZmZlY3RcbiAgICAgKi9cbiAgICBIZWxwZXJzLmdldEF1dGhIYXNoKHVzZXJJZCwgYXBwU2VjcmV0KVxuICAgICAgLnRoZW4oKGhhc2g6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBpbnRlZ3J5ID0gbmV3IEludGVncnlKUyh7XG4gICAgICAgICAgYXBwS2V5LFxuICAgICAgICAgIGhhc2gsXG4gICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgICAgICBhcGlLZXk6IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHNldEhhc2goaGFzaCk7XG4gICAgICAgIHNldEludGVncnkoaW50ZWdyeSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBhdXRoIGhhc2g6XCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgdXNlQ29waWxvdEFjdGlvbih7XG4gICAgbmFtZTogXCJmaW5kQW5kRXhlY3V0ZUZ1bmN0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IGZpbmRBbmRFeGVjdXRlRnVuY3Rpb25Qcm9tcHQsXG4gICAgcGFyYW1ldGVyczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcInF1ZXJ5XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBxdWVyeSB0byBzZWFyY2ggZm9yIGEgZnVuY3Rpb25cIixcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7fSxcbiAgICByZW5kZXJBbmRXYWl0OiAoe1xuICAgICAgYXJncyxcbiAgICAgIGhhbmRsZXIsXG4gICAgICBzdGF0dXMsXG4gICAgfToge1xuICAgICAgYXJnczogRmluZEFuZEV4ZWN1dGVGdW5jdGlvbkFyZ3M7XG4gICAgICBoYW5kbGVyOiAocmVzcG9uc2U/OiBhbnkpID0+IHZvaWQ7XG4gICAgICBzdGF0dXM6IHN0cmluZztcbiAgICB9KSA9PiB7XG4gICAgICBpZiAoc3RhdHVzID09PSBcImluUHJvZ3Jlc3NcIikge1xuICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IFwiZXhlY3V0aW5nXCIpIHtcbiAgICAgICAgaWYgKGludGVncnkgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gPGRpdj5GYWlsZWQgdG8gaW5pdGlhbGl6ZSBJbnRlZ3J5IFNESy48L2Rpdj47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbnRlbnQgPSBnZXRJbnRlbnQoYXJncy5xdWVyeSk7XG4gICAgICAgIGxldCBhcHBOYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGFwcE5hbWUgPSBhcmdzLnF1ZXJ5LnNwbGl0KFwiLlwiKVsxXTtcbiAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgICAgYXBwTmFtZSA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGludGVudCkge1xuICAgICAgICAgIGNhc2UgXCJkaXNjb25uZWN0XCI6XG4gICAgICAgICAgICBpbnRlZ3J5LmlzQ29ubmVjdGVkKGFwcE5hbWUpLnRoZW4oKGF1dGhvcml6YXRpb25faWQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICBpZiAoYXV0aG9yaXphdGlvbl9pZCkge1xuICAgICAgICAgICAgICAgIGludGVncnkuZGlzY29ubmVjdChhdXRob3JpemF0aW9uX2lkKS50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKFwiQWxyZWFkeSBkaXNjb25uZWN0ZWQuXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIDxkaXY+RGlzY29ubmVjdGluZyB7YXBwTmFtZX0uLi48L2Rpdj47XG4gICAgICAgICAgY2FzZSBcImNvbm5lY3RcIjpcbiAgICAgICAgICAgIGNvbnN0IGFwcE5hbWUgPSBhcmdzLnF1ZXJ5LnNwbGl0KFwiLlwiKVsxXTtcbiAgICAgICAgICAgIGludGVncnkuaXNDb25uZWN0ZWQoYXBwTmFtZSkudGhlbigoYXV0aG9yaXphdGlvbl9pZDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChhdXRob3JpemF0aW9uX2lkKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihcIkFscmVhZHkgY29ubmVjdGVkLlwiKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnRlZ3J5LmNvbm5lY3QoYXBwTmFtZSkudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaGFuZGxlcihcIkNvbm5lY3RlZCBzdWNjZXNzZnVsbHkuXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIDxkaXY+Q29ubmVjdGluZyB7YXBwTmFtZX0uLi48L2Rpdj47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGFyZ3MucXVlcnkuaW5jbHVkZXMoXCJkaXNjb25uZWN0XCIpICYmXG4gICAgICAgICAgYXJncy5xdWVyeS5zcGxpdChcIi5cIilbMV0gJiZcbiAgICAgICAgICBhcmdzLnF1ZXJ5LnNwbGl0KFwiLlwiKS5sZW5ndGggPT09IDJcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXBwTmFtZSA9IGFyZ3MucXVlcnkuc3BsaXQoXCIuXCIpWzFdO1xuICAgICAgICAgIGludGVncnkuaXNDb25uZWN0ZWQoYXBwTmFtZSkudGhlbigoYXV0aG9yaXphdGlvbl9pZDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXV0aG9yaXphdGlvbl9pZCkge1xuICAgICAgICAgICAgICBpbnRlZ3J5LmRpc2Nvbm5lY3QoYXV0aG9yaXphdGlvbl9pZCkudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIocmVzcG9uc2UpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGhhbmRsZXIoXCJBbHJlYWR5IGRpc2Nvbm5lY3RlZC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gPGRpdj5EaXNjb25uZWN0aW5nIHthcHBOYW1lfS4uLjwvZGl2PjtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBhcmdzLnF1ZXJ5LmluY2x1ZGVzKFwiY29ubmVjdFwiKSAmJlxuICAgICAgICAgIGFyZ3MucXVlcnkuc3BsaXQoXCIuXCIpWzFdICYmXG4gICAgICAgICAgYXJncy5xdWVyeS5zcGxpdChcIi5cIikubGVuZ3RoID09PSAyXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFwcE5hbWUgPSBhcmdzLnF1ZXJ5LnNwbGl0KFwiLlwiKVsxXTtcbiAgICAgICAgICBpbnRlZ3J5LmlzQ29ubmVjdGVkKGFwcE5hbWUpLnRoZW4oKGF1dGhvcml6YXRpb25faWQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgaWYgKGF1dGhvcml6YXRpb25faWQpIHtcbiAgICAgICAgICAgICAgaGFuZGxlcihcIkFscmVhZHkgY29ubmVjdGVkLlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGludGVncnkuY29ubmVjdChhcHBOYW1lKS50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihcIkNvbm5lY3RlZCBzdWNjZXNzZnVsbHkuXCIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiA8ZGl2PkNvbm5lY3Rpbmcge2FwcE5hbWV9Li4uPC9kaXY+O1xuICAgICAgICB9XG5cbiAgICAgICAgcHJlZGljdEZ1bmN0aW9uKGFwcEtleSwgaGFzaCwgdXNlcklkLCB0cnVlLCB0cnVlLCBhcmdzLnF1ZXJ5KVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YS5mdW5jdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIGhhbmRsZXIoXCJObyBhcHByb3ByaWF0ZSBmdW5jdGlvbiBmb3VuZC5cIik7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGludGVncnlcbiAgICAgICAgICAgICAgLmlzQ29ubmVjdGVkKGRhdGEuZnVuY3Rpb25zWzBdLm1ldGEuYXBwLm5hbWUpXG4gICAgICAgICAgICAgIC50aGVuKChhdXRob3JpemF0aW9uX2lkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiByZXR1cm5zIHRoZSBhdXRob3JpemF0aW9uX2lkIGlmIHRoZSBhcHAgaXMgY29ubmVjdGVkXG4gICAgICAgICAgICAgICAgICogb3RoZXJ3aXNlIHJldHVybnMgZmFsc2VcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZiAoYXV0aG9yaXphdGlvbl9pZCkge1xuICAgICAgICAgICAgICAgICAgcmVuZGVyRnVuY3Rpb25VSShpbnRlZ3J5LCBkYXRhLmZ1bmN0aW9uc1swXSwgaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGludGVncnlcbiAgICAgICAgICAgICAgICAgICAgLmNvbm5lY3QoZGF0YS5mdW5jdGlvbnNbMF0ubWV0YS5hcHAubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXJGdW5jdGlvblVJKGludGVncnksIGRhdGEuZnVuY3Rpb25zWzBdLCBoYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBhbnkgZXJyb3JzIGZyb20gdGhlIGZldGNoRnVuY3Rpb25zIGNhbGxcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGZXRjaCBmYWlsZWQ6XCIsIGVycm9yKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gPGRpdj5TZXR0aW5nIHRoaXMgdXAgZm9yIHlvdS4uLjwvZGl2PjtcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDb3BpbG90QWN0aW9uIiwidXNlQ29waWxvdENvbnRleHQiLCJ1c2VDb3BpbG90TWVzc2FnZXNDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbnRlZ3J5SlMiLCJIZWxwZXJzIiwiYXBwS2V5IiwiYXBwU2VjcmV0IiwidXNlcklkIiwiZmluZEFuZEV4ZWN1dGVGdW5jdGlvblByb21wdCIsInJlbmRlckZ1bmN0aW9uVUkiLCJwcmVkaWN0RnVuY3Rpb24iLCJnZXRJbnRlbnQiLCJIb21lIiwidXNlSW50ZWdyeUNvcGlsb3RLaXRJbnRlZ3JhdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImdlbmVyYWxDb250ZXh0IiwibWVzc2FnZXNDb250ZXh0IiwiY29udGV4dCIsImludGVncnkiLCJzZXRJbnRlZ3J5IiwiaGFzaCIsInNldEhhc2giLCJnZXRBdXRoSGFzaCIsInRoZW4iLCJ1c2VyIiwiYXBpS2V5IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwYXJhbWV0ZXJzIiwidHlwZSIsImhhbmRsZXIiLCJyZW5kZXJBbmRXYWl0IiwiYXJncyIsInN0YXR1cyIsImludGVudCIsInF1ZXJ5IiwiYXBwTmFtZSIsInNwbGl0IiwiZSIsImlzQ29ubmVjdGVkIiwiYXV0aG9yaXphdGlvbl9pZCIsImRpc2Nvbm5lY3QiLCJyZXNwb25zZSIsImNvbm5lY3QiLCJpbmNsdWRlcyIsImxlbmd0aCIsImRhdGEiLCJmdW5jdGlvbnMiLCJtZXRhIiwiYXBwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});