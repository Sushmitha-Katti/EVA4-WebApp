webpackHotUpdate_N_E("pages/index",{

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
    href: "./index.html",
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
    href: SENTI,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiQ0xBU1NJRklDQVRJT04iLCJGQUNFX0FMSUdOIiwiRkFDRV9SRUNPR05JU0FUSU9OIiwiR0FOIiwiSFVNQU5fUE9TRV9FU1RJTUFUSU9OIiwiRkFDRV9TV0FQIiwiVkFFIiwiU1JHQU4iLCJTRU5USSIsIk5hdldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJDdXN0b21OYXZiYXIiLCJwcm9wcyIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBRyxpQkFBdkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsbUJBQW5CO0FBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsMkJBQTNCO0FBQ0EsSUFBTUMsR0FBRyxHQUFHLFlBQVo7QUFDQSxJQUFNQyxxQkFBcUIsR0FBRyxZQUE5QjtBQUNBLElBQU1DLFNBQVMsR0FBRyxrQkFBbEI7QUFDQSxJQUFNQyxHQUFHLEdBQUcsWUFBWjtBQUNBLElBQU1DLEtBQUssR0FBRyxjQUFkO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLDhCQUFkO0FBRUE7QUFNQSxJQUFNQyxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWhCO0tBQU1GLFU7O0FBc0JOLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQ7QUFBQTs7QUFBQSxTQUNyQixNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVBLE1BQUMsc0RBQUQ7QUFBUSxvQkFBZ0IsTUFBeEI7QUFBeUIsVUFBTSxFQUFDLElBQWhDO0FBQXFDLE1BQUUsRUFBQyxNQUF4QztBQUErQyxXQUFPLEVBQUM7QUFBdkQsK0dBQXFFLElBQXJFLGdIQUFxRixRQUFyRiw2R0FBcUcsS0FBckc7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNFLE1BQUMsc0RBQUQs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YTFjMGNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBDTEFTU0lGSUNBVElPTiA9ICcuL2NsYXNzaWZ5Lmh0bWwnXG5jb25zdCBGQUNFX0FMSUdOID0gJy4vZmFjZV9hbGlnbi5odG1sJ1xuY29uc3QgRkFDRV9SRUNPR05JU0FUSU9OID0gJy4vZmFjZV9yZWNvZ25pc2F0aW9uLmh0bWwnXG5jb25zdCBHQU4gPSAnLi9nYW4uaHRtbCdcbmNvbnN0IEhVTUFOX1BPU0VfRVNUSU1BVElPTiA9ICcuL2hwZS5odG1sJ1xuY29uc3QgRkFDRV9TV0FQID0gJy4vZmFjZV9zd2FwLmh0bWwnXG5jb25zdCBWQUUgPSAnLi92YWUuaHRtbCdcbmNvbnN0IFNSR0FOID0gJy4vc3JnYW4uaHRtbCdcbmNvbnN0IFNFTlRJID0gJy4vc2VudGltZW5hdGFsX2FuYWx5c2lzLmh0bWwnXG5cbmltcG9ydCB7XG4gIE5hdmJhcixcbiAgTmF2RHJvcGRvd24sXG4gIE5hdlxufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmNvbnN0IE5hdldyYXBwZXIgPSBzdHlsZWQuZGl2YFxubWFyZ2luOiAxJSAyJTtcbi5uYXZiYXJ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDksOSwxMjEsMSkgMzUlLHJnYmEoMCwyMTIsMjU1LDEpIDEwMCUgKTtcbiAgIFxuICB9XG5cbi5uYXYtZWxlbWVudHN7XG4gXG5cbiAgYXtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgXG4gIH1cbn1cbi5uYXZiYXItY29sbGFwc2V7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuYDtcblxuXG5cbmNvbnN0IEN1c3RvbU5hdmJhciA9IChwcm9wcykgPT4gKFxuPE5hdldyYXBwZXI+XG5cbjxOYXZiYXIgY29sbGFwc2VPblNlbGVjdCBleHBhbmQ9XCJsZ1wiIGJnPVwiZGFya1wiIHZhcmlhbnQ9XCJkYXJrXCIgZXhwYW5kPVwibGdcIiBjbGFzc05hbWUgPSduYXZiYXInIHN0aWNreT1cInRvcFwiID5cbiAgPE5hdmJhci5CcmFuZCBocmVmPVwiLi9pbmRleC5odG1sXCI+U1ZHUzwvTmF2YmFyLkJyYW5kPlxuICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwicmVzcG9uc2l2ZS1uYXZiYXItbmF2XCIgLz5cbiAgPE5hdmJhci5Db2xsYXBzZSBpZD1cInJlc3BvbnNpdmUtbmF2YmFyLW5hdlwiPlxuICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0byBuYXYtZWxlbWVudHMgXCI+XG4gICAgICA8TmF2LkxpbmsgaHJlZj17Q0xBU1NJRklDQVRJT059IGFjdGl2ZSA9IHtwcm9wcy5hY3RpdmUgPT0gJ2NsYXNzaWZ5Jz8gdHJ1ZTogZmFsc2V9PkNsYXNzaWZpY2F0aW9uPC9OYXYuTGluaz5cbiAgICAgIFxuICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPVwiRmFjZVwiIGlkPVwiY29sbGFzaWJsZS1uYXYtZHJvcGRvd25cIiBhY3RpdmUgPSAge3Byb3BzLmFjdGl2ZSA9PSAnZmFjZSc/IHRydWU6IGZhbHNlfT5cbiAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj17RkFDRV9BTElHTn0gPkZhY2UgQWxpZ25tZW50PC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPXtGQUNFX1JFQ09HTklTQVRJT059ID5GYWNlIFJlY29nbmlzYXRpb248L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9e0ZBQ0VfU1dBUH0gPkZhY2UgU3dhcDwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICA8TmF2LkxpbmsgaHJlZj17SFVNQU5fUE9TRV9FU1RJTUFUSU9OfSBhY3RpdmUgPSB7cHJvcHMuYWN0aXZlID09ICdocGUnPyB0cnVlOiBmYWxzZX0+SFBFPC9OYXYuTGluaz5cbiAgICAgIDxOYXYuTGluayBocmVmPXtHQU59IGFjdGl2ZSA9IHtwcm9wcy5hY3RpdmUgPT0gJ2dhbic/IHRydWU6IGZhbHNlfT5HQU48L05hdi5MaW5rPlxuICAgICAgPE5hdi5MaW5rIGhyZWY9e1ZBRX0gYWN0aXZlID0ge3Byb3BzLmFjdGl2ZSA9PSAndmFlJz8gdHJ1ZTogZmFsc2V9PlZBRTwvTmF2Lkxpbms+XG4gICAgICA8TmF2LkxpbmsgaHJlZj17U1JHQU59IGFjdGl2ZSA9IHtwcm9wcy5hY3RpdmUgPT0gJ3NyZ2FuJz8gdHJ1ZTogZmFsc2V9PlNSR2FuPC9OYXYuTGluaz5cbiAgICAgIDxOYXYuTGluayBocmVmPXtTRU5USX0gYWN0aXZlID0ge3Byb3BzLmFjdGl2ZSA9PSAnc2EnPyB0cnVlOiBmYWxzZX0+U2VudGltZW50IEFuYWx5c2lzPC9OYXYuTGluaz5cbiAgICAgIFxuICAgIDwvTmF2PlxuICAgIFxuICA8L05hdmJhci5Db2xsYXBzZT5cbjwvTmF2YmFyPlxuPC9OYXZXcmFwcGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21OYXZiYXJcbiJdLCJzb3VyY2VSb290IjoiIn0=