webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../urls */ "./urls.js");
var _this = undefined,
    _jsxFileName = "G:\\Projects\\EVA-Web\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Home = function Home() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "SVGS Works",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }));
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./urls.js":
/*!*****************!*\
  !*** ./urls.js ***!
  \*****************/
/*! exports provided: MODELS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODELS", function() { return MODELS; });
var MODELS = [{
  title: 'Classification',
  url: './classify.html',
  code: '.'
}, {
  title: 'Face Align',
  url: './face_align.html',
  code: ''
}, {
  title: 'Face Recognisation',
  url: './face_recognisation.html',
  code: ''
}, {
  title: 'Generative Adversial Network',
  url: './gan.html',
  code: ''
}, {
  title: 'Human Pose Estimation',
  url: './hpe.html',
  code: ''
}, {
  title: 'Face_Swap',
  url: './face_swap.html',
  code: ' '
}, {
  title: 'Variational AutoEncoders',
  url: './vae.html',
  code: ""
}, {
  title: 'Super Resolution GAN',
  url: './srgan.html',
  code: ""
}, {
  title: 'Sentiment Analysis',
  url: './sentimenatal_analysis.html',
  code: ''
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3VybHMuanMiXSwibmFtZXMiOlsiSG9tZSIsIk1PREVMUyIsInRpdGxlIiwidXJsIiwiY29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0MsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxTQUNYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQU0sU0FBSyxFQUFDLFlBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FEVztBQUFBLENBQWI7O0tBQU1BLEk7QUFVU0EsbUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkQ7QUFBQTtBQUFPLElBQU1DLE1BQU0sR0FBRSxDQUNyQjtBQUFDQyxPQUFLLEVBQUcsZ0JBQVQ7QUFBMkJDLEtBQUcsRUFBRyxpQkFBakM7QUFBb0RDLE1BQUksRUFBRztBQUEzRCxDQURxQixFQUVyQjtBQUFDRixPQUFLLEVBQUcsWUFBVDtBQUF1QkMsS0FBRyxFQUFFLG1CQUE1QjtBQUFrREMsTUFBSSxFQUFHO0FBQXpELENBRnFCLEVBR3JCO0FBQUVGLE9BQUssRUFBRyxvQkFBVjtBQUFnQ0MsS0FBRyxFQUFHLDJCQUF0QztBQUFtRUMsTUFBSSxFQUFHO0FBQTFFLENBSHFCLEVBSXJCO0FBQUNGLE9BQUssRUFBRSw4QkFBUjtBQUF3Q0MsS0FBRyxFQUFJLFlBQS9DO0FBQTZEQyxNQUFJLEVBQUc7QUFBcEUsQ0FKcUIsRUFLckI7QUFBQ0YsT0FBSyxFQUFHLHVCQUFUO0FBQWtDQyxLQUFHLEVBQUksWUFBekM7QUFBdURDLE1BQUksRUFBRztBQUE5RCxDQUxxQixFQU1yQjtBQUFDRixPQUFLLEVBQUcsV0FBVDtBQUFzQkMsS0FBRyxFQUFHLGtCQUE1QjtBQUFnREMsTUFBSSxFQUFHO0FBQXZELENBTnFCLEVBT3JCO0FBQUNGLE9BQUssRUFBRywwQkFBVDtBQUFzQ0MsS0FBRyxFQUFHLFlBQTVDO0FBQTJEQyxNQUFJLEVBQUc7QUFBbEUsQ0FQcUIsRUFRckI7QUFBQ0YsT0FBSyxFQUFFLHNCQUFSO0FBQWlDQyxLQUFHLEVBQUksY0FBeEM7QUFBd0RDLE1BQUksRUFBRztBQUEvRCxDQVJxQixFQVNyQjtBQUFDRixPQUFLLEVBQUcsb0JBQVQ7QUFBK0JDLEtBQUcsRUFBRyw4QkFBckM7QUFBcUVDLE1BQUksRUFBRztBQUE1RSxDQVRxQixDQUFkIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ1YmEwOTAyYTUxNjhiZWVmNzQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL2hlYWQnXG5pbXBvcnQgQ3VzdG9tTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2JztcbmltcG9ydCBNb2RlbHMgZnJvbSAnLi4vdXJscyc7XG5cblxuIGNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gICA8ZGl2PlxuICAgICA8SGVhZCB0aXRsZT1cIlNWR1MgV29ya3NcIiAvPlxuICAgICA8Q3VzdG9tTmF2YmFyIC8+XG4gICAgIFxuXG4gICBcbiAgIDwvZGl2PlxuIClcblxuIGV4cG9ydCBkZWZhdWx0IEhvbWVcblxuXG4iLCJleHBvcnQgY29uc3QgTU9ERUxTID1bIFxyXG57dGl0bGUgOiAnQ2xhc3NpZmljYXRpb24nLCB1cmwgOiAnLi9jbGFzc2lmeS5odG1sJywgY29kZSA6ICcuJ30sXHJcbnt0aXRsZSA6ICdGYWNlIEFsaWduJywgdXJsOiAnLi9mYWNlX2FsaWduLmh0bWwnLCAgY29kZSA6ICcnfSxcclxueyB0aXRsZSA6ICdGYWNlIFJlY29nbmlzYXRpb24nLCB1cmwgOiAnLi9mYWNlX3JlY29nbmlzYXRpb24uaHRtbCcsIGNvZGUgOiAnJ30sXHJcbnt0aXRsZTogJ0dlbmVyYXRpdmUgQWR2ZXJzaWFsIE5ldHdvcmsnLCB1cmwgOiAgJy4vZ2FuLmh0bWwnLCBjb2RlIDogJyd9LFxyXG57dGl0bGUgOiAnSHVtYW4gUG9zZSBFc3RpbWF0aW9uJywgdXJsIDogICcuL2hwZS5odG1sJywgY29kZSA6ICcnfSxcclxue3RpdGxlIDogJ0ZhY2VfU3dhcCcsIHVybCA6ICcuL2ZhY2Vfc3dhcC5odG1sJywgY29kZSA6ICcgJ30sIFxyXG57dGl0bGUgOiAnVmFyaWF0aW9uYWwgQXV0b0VuY29kZXJzJyAsIHVybCA6ICcuL3ZhZS5odG1sJyAsIGNvZGUgOiBcIlwifSxcclxue3RpdGxlIDonU3VwZXIgUmVzb2x1dGlvbiBHQU4nLCAgdXJsIDogICcuL3NyZ2FuLmh0bWwnLCBjb2RlIDogXCJcIn0sXHJcbnt0aXRsZSA6ICdTZW50aW1lbnQgQW5hbHlzaXMnLCB1cmwgOiAnLi9zZW50aW1lbmF0YWxfYW5hbHlzaXMuaHRtbCcsIGNvZGUgOiAnJ31cclxuXVxyXG4iXSwic291cmNlUm9vdCI6IiJ9