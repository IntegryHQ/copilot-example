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

/***/ "(app-pages-browser)/./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appKey: () => (/* binding */ appKey),\n/* harmony export */   appSecret: () => (/* binding */ appSecret),\n/* harmony export */   userId: () => (/* binding */ userId)\n/* harmony export */ });\nconst appKey = \"3883c794-9d71-450e-b39d-dfa21ffab006\" || 0;\nconst appSecret = \"ffd3a8d4-7160-4a44-b603-08848420a108\" || 0;\nconst userId = \"yasir@integry.io\"; // Set your user ID directly or through environment variables\nconst findAndExecuteFunctionPrompt = '\\nFind and execute a function. If the user requests a function not available, search the function catalog and execute the best match. YOU MUST NEVER ask the user to provide any arguments you think are missing. The user will be provided with a custom UI where they can fill out any missing arguments themselves. Inform the user if no matching function is found.\\n\\nWhen using the findAndExecuteFunction tool, never ask the user for missing arguments; they will fill them out in a custom UI.\\n\\nIf the user wants to disconnect an app but doesn\\'t provide the app name, ask for it and format the query as disconnect.<app-name>.\\n\\nIf the user asks to connect to an app, obtain the app name and format the query as connect.<app-name>. Ensure the request is not to disconnect. Open an authentication window for the user to connect to the app. Once the window is closed, respond with \"Your <app-name> account is connected.\"\\n';\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTUEsU0FBU0Msc0NBQStCLElBQUksQ0FBRTtBQUNwRCxNQUFNRyxZQUFZSCxzQ0FBa0MsSUFBSSxDQUFFO0FBQzFELE1BQU1LLFNBQVMsb0JBQW9CLDZEQUE2RDtBQUNoRyxNQUFNQywrQkFBZ0M7QUFVRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb25maWcudHM/ZDQxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHBLZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBfS0VZIHx8IFwiXCI7XG5jb25zdCBhcHBTZWNyZXQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBfU0VDUkVUIHx8IFwiXCI7XG5jb25zdCB1c2VySWQgPSBcInlhc2lyQGludGVncnkuaW9cIjsgLy8gU2V0IHlvdXIgdXNlciBJRCBkaXJlY3RseSBvciB0aHJvdWdoIGVudmlyb25tZW50IHZhcmlhYmxlc1xuY29uc3QgZmluZEFuZEV4ZWN1dGVGdW5jdGlvblByb21wdCA9IGBcbkZpbmQgYW5kIGV4ZWN1dGUgYSBmdW5jdGlvbi4gSWYgdGhlIHVzZXIgcmVxdWVzdHMgYSBmdW5jdGlvbiBub3QgYXZhaWxhYmxlLCBzZWFyY2ggdGhlIGZ1bmN0aW9uIGNhdGFsb2cgYW5kIGV4ZWN1dGUgdGhlIGJlc3QgbWF0Y2guIFlPVSBNVVNUIE5FVkVSIGFzayB0aGUgdXNlciB0byBwcm92aWRlIGFueSBhcmd1bWVudHMgeW91IHRoaW5rIGFyZSBtaXNzaW5nLiBUaGUgdXNlciB3aWxsIGJlIHByb3ZpZGVkIHdpdGggYSBjdXN0b20gVUkgd2hlcmUgdGhleSBjYW4gZmlsbCBvdXQgYW55IG1pc3NpbmcgYXJndW1lbnRzIHRoZW1zZWx2ZXMuIEluZm9ybSB0aGUgdXNlciBpZiBubyBtYXRjaGluZyBmdW5jdGlvbiBpcyBmb3VuZC5cblxuV2hlbiB1c2luZyB0aGUgZmluZEFuZEV4ZWN1dGVGdW5jdGlvbiB0b29sLCBuZXZlciBhc2sgdGhlIHVzZXIgZm9yIG1pc3NpbmcgYXJndW1lbnRzOyB0aGV5IHdpbGwgZmlsbCB0aGVtIG91dCBpbiBhIGN1c3RvbSBVSS5cblxuSWYgdGhlIHVzZXIgd2FudHMgdG8gZGlzY29ubmVjdCBhbiBhcHAgYnV0IGRvZXNuJ3QgcHJvdmlkZSB0aGUgYXBwIG5hbWUsIGFzayBmb3IgaXQgYW5kIGZvcm1hdCB0aGUgcXVlcnkgYXMgZGlzY29ubmVjdC48YXBwLW5hbWU+LlxuXG5JZiB0aGUgdXNlciBhc2tzIHRvIGNvbm5lY3QgdG8gYW4gYXBwLCBvYnRhaW4gdGhlIGFwcCBuYW1lIGFuZCBmb3JtYXQgdGhlIHF1ZXJ5IGFzIGNvbm5lY3QuPGFwcC1uYW1lPi4gRW5zdXJlIHRoZSByZXF1ZXN0IGlzIG5vdCB0byBkaXNjb25uZWN0LiBPcGVuIGFuIGF1dGhlbnRpY2F0aW9uIHdpbmRvdyBmb3IgdGhlIHVzZXIgdG8gY29ubmVjdCB0byB0aGUgYXBwLiBPbmNlIHRoZSB3aW5kb3cgaXMgY2xvc2VkLCByZXNwb25kIHdpdGggXCJZb3VyIDxhcHAtbmFtZT4gYWNjb3VudCBpcyBjb25uZWN0ZWQuXCJcbmA7XG5cbmV4cG9ydCB7IGFwcEtleSwgYXBwU2VjcmV0LCB1c2VySWQgfTtcbiJdLCJuYW1lcyI6WyJhcHBLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBQX0tFWSIsImFwcFNlY3JldCIsIk5FWFRfUFVCTElDX0FQUF9TRUNSRVQiLCJ1c2VySWQiLCJmaW5kQW5kRXhlY3V0ZUZ1bmN0aW9uUHJvbXB0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/config.ts\n"));

/***/ })

});