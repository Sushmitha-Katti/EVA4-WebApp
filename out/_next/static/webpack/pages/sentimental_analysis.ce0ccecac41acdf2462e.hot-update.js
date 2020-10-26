webpackHotUpdate_N_E("pages/sentimental_analysis",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");



var _this = undefined,
    _jsxFileName = "G:\\Projects\\EVA-Web\\components\\nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\nmargin: 1% 2%;\n.navbar{\n    background: linear-gradient(90deg,rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%,rgba(0,212,255,1) 100% );\n   \n  }\n\n.nav-elements{\n \n\n  a{\n    font-weight:bold;\n   \n  }\n}\n.navbar-collapse{\n  justify-content: center;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var CLASSIFICATION = './classify.html';
var FACE_ALIGN = './face_align.html';
var FACE_RECOGNISATION = './face_recognisation.html';
var GAN = './gan.html';
var HUMAN_POSE_ESTIMATION = './hpe.html';
var FACE_SWAP = './face_swap.html';
var VAE = './vae.html';
var SRGAN = './srgan.html';
var SENTI = './sentimenatal_analysis.html';

var NavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
_c = NavWrapper;

var CustomNavbar = function CustomNavbar(props) {
  var _jsx;

  return __jsx(NavWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 1
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"], (_jsx = {
    collapseOnSelect: true,
    expand: "lg",
    bg: "dark",
    variant: "dark"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "expand", "lg"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "navbar"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "sticky", "top"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 1
  }), _jsx), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"].Brand, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 3
    }
  }, "SVGS"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"].Toggle, {
    "aria-controls": "responsive-navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 3
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"].Collapse, {
    id: "responsive-navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
    className: "mr-auto nav-elements ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: CLASSIFICATION,
    active: props.active == 'classify' ? true : false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, "Classification"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"], {
    title: "Face",
    id: "collasible-nav-dropdown",
    active: props.active == 'face' ? true : false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"].Item, {
    href: FACE_ALIGN,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Face Alignment"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"].Item, {
    href: FACE_RECOGNISATION,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "Face Recognisation"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"].Item, {
    href: FACE_SWAP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Face Swap")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: HUMAN_POSE_ESTIMATION,
    active: props.active == 'hpe' ? true : false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, "HPE"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: GAN,
    active: props.active == 'gan' ? true : false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, "GAN"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: VAE,
    active: props.active == 'vae' ? true : false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, "VAE"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: SRGAN,
    active: props.active == 'srgan' ? true : false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, "SRGan"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: Senti,
    active: props.active == 'sa' ? true : false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "Sentiment Analysis")))));
};

_c2 = CustomNavbar;
/* harmony default export */ __webpack_exports__["default"] = (CustomNavbar);

var _c, _c2;

$RefreshReg$(_c, "NavWrapper");
$RefreshReg$(_c2, "CustomNavbar");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiQ0xBU1NJRklDQVRJT04iLCJGQUNFX0FMSUdOIiwiRkFDRV9SRUNPR05JU0FUSU9OIiwiR0FOIiwiSFVNQU5fUE9TRV9FU1RJTUFUSU9OIiwiRkFDRV9TV0FQIiwiVkFFIiwiU1JHQU4iLCJTRU5USSIsIk5hdldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJDdXN0b21OYXZiYXIiLCJwcm9wcyIsImFjdGl2ZSIsIlNlbnRpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHLGlCQUF2QjtBQUNBLElBQU1DLFVBQVUsR0FBRyxtQkFBbkI7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRywyQkFBM0I7QUFDQSxJQUFNQyxHQUFHLEdBQUcsWUFBWjtBQUNBLElBQU1DLHFCQUFxQixHQUFHLFlBQTlCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLGtCQUFsQjtBQUNBLElBQU1DLEdBQUcsR0FBRyxZQUFaO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLGNBQWQ7QUFDQSxJQUFNQyxLQUFLLEdBQUcsOEJBQWQ7QUFFQTtBQU1BLElBQU1DLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBaEI7S0FBTUYsVTs7QUFzQk4sSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRDtBQUFBOztBQUFBLFNBQ3JCLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUEsTUFBQyxzREFBRDtBQUFRLG9CQUFnQixNQUF4QjtBQUF5QixVQUFNLEVBQUMsSUFBaEM7QUFBcUMsTUFBRSxFQUFDLE1BQXhDO0FBQStDLFdBQU8sRUFBQztBQUF2RCwrR0FBcUUsSUFBckUsZ0hBQXFGLFFBQXJGLDZHQUFxRyxLQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0UsTUFB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YW5hbHlzaXMuY2UwY2NlY2FjNDFhY2RmMjQ2MmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IENMQVNTSUZJQ0FUSU9OID0gJy4vY2xhc3NpZnkuaHRtbCdcbmNvbnN0IEZBQ0VfQUxJR04gPSAnLi9mYWNlX2FsaWduLmh0bWwnXG5jb25zdCBGQUNFX1JFQ09HTklTQVRJT04gPSAnLi9mYWNlX3JlY29nbmlzYXRpb24uaHRtbCdcbmNvbnN0IEdBTiA9ICcuL2dhbi5odG1sJ1xuY29uc3QgSFVNQU5fUE9TRV9FU1RJTUFUSU9OID0gJy4vaHBlLmh0bWwnXG5jb25zdCBGQUNFX1NXQVAgPSAnLi9mYWNlX3N3YXAuaHRtbCdcbmNvbnN0IFZBRSA9ICcuL3ZhZS5odG1sJ1xuY29uc3QgU1JHQU4gPSAnLi9zcmdhbi5odG1sJ1xuY29uc3QgU0VOVEkgPSAnLi9zZW50aW1lbmF0YWxfYW5hbHlzaXMuaHRtbCdcblxuaW1wb3J0IHtcbiAgTmF2YmFyLFxuICBOYXZEcm9wZG93bixcbiAgTmF2XG59IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuY29uc3QgTmF2V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5tYXJnaW46IDElIDIlO1xuLm5hdmJhcntcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcscmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoOSw5LDEyMSwxKSAzNSUscmdiYSgwLDIxMiwyNTUsMSkgMTAwJSApO1xuICAgXG4gIH1cblxuLm5hdi1lbGVtZW50c3tcbiBcblxuICBhe1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICBcbiAgfVxufVxuLm5hdmJhci1jb2xsYXBzZXtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5gO1xuXG5cblxuY29uc3QgQ3VzdG9tTmF2YmFyID0gKHByb3BzKSA9PiAoXG48TmF2V3JhcHBlcj5cblxuPE5hdmJhciBjb2xsYXBzZU9uU2VsZWN0IGV4cGFuZD1cImxnXCIgYmc9XCJkYXJrXCIgdmFyaWFudD1cImRhcmtcIiBleHBhbmQ9XCJsZ1wiIGNsYXNzTmFtZSA9J25hdmJhcicgc3RpY2t5PVwidG9wXCIgPlxuICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCI+U1ZHUzwvTmF2YmFyLkJyYW5kPlxuICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwicmVzcG9uc2l2ZS1uYXZiYXItbmF2XCIgLz5cbiAgPE5hdmJhci5Db2xsYXBzZSBpZD1cInJlc3BvbnNpdmUtbmF2YmFyLW5hdlwiPlxuICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0byBuYXYtZWxlbWVudHMgXCI+XG4gICAgICA8TmF2LkxpbmsgaHJlZj17Q0xBU1NJRklDQVRJT059IGFjdGl2ZSA9IHtwcm9wcy5hY3RpdmUgPT0gJ2NsYXNzaWZ5Jz8gdHJ1ZTogZmFsc2V9PkNsYXNzaWZpY2F0aW9uPC9OYXYuTGluaz5cbiAgICAgIFxuICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPVwiRmFjZVwiIGlkPVwiY29sbGFzaWJsZS1uYXYtZHJvcGRvd25cIiBhY3RpdmUgPSAge3Byb3BzLmFjdGl2ZSA9PSAnZmFjZSc/IHRydWU6IGZhbHNlfT5cbiAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj17RkFDRV9BTElHTn0gPkZhY2UgQWxpZ25tZW50PC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPXtGQUNFX1JFQ09HTklTQVRJT059ID5GYWNlIFJlY29nbmlzYXRpb248L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9e0ZBQ0VfU1dBUH0gPkZhY2UgU3dhcDwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICA8TmF2LkxpbmsgaHJlZj17SFVNQU5fUE9TRV9FU1RJTUFUSU9OfSBhY3RpdmUgPSB7cHJvcHMuYWN0aXZlID09ICdocGUnPyB0cnVlOiBmYWxzZX0+SFBFPC9OYXYuTGluaz5cbiAgICAgIDxOYXYuTGluayBocmVmPXtHQU59IGFjdGl2ZSA9IHtwcm9wcy5hY3RpdmUgPT0gJ2dhbic/IHRydWU6IGZhbHNlfT5HQU48L05hdi5MaW5rPlxuICAgICAgPE5hdi5MaW5rIGhyZWY9e1ZBRX0gYWN0aXZlID0ge3Byb3BzLmFjdGl2ZSA9PSAndmFlJz8gdHJ1ZTogZmFsc2V9PlZBRTwvTmF2Lkxpbms+XG4gICAgICA8TmF2LkxpbmsgaHJlZj17U1JHQU59IGFjdGl2ZSA9IHtwcm9wcy5hY3RpdmUgPT0gJ3NyZ2FuJz8gdHJ1ZTogZmFsc2V9PlNSR2FuPC9OYXYuTGluaz5cbiAgICAgIDxOYXYuTGluayBocmVmPXtTZW50aX0gYWN0aXZlID0ge3Byb3BzLmFjdGl2ZSA9PSAnc2EnPyB0cnVlOiBmYWxzZX0+U2VudGltZW50IEFuYWx5c2lzPC9OYXYuTGluaz5cbiAgICAgIFxuICAgIDwvTmF2PlxuICAgIFxuICA8L05hdmJhci5Db2xsYXBzZT5cbjwvTmF2YmFyPlxuPC9OYXZXcmFwcGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21OYXZiYXJcbiJdLCJzb3VyY2VSb290IjoiIn0=