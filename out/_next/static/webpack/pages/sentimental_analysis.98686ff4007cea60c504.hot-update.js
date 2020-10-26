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





var NavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
_c = NavWrapper;

var CustomNavbar = function CustomNavbar(props) {
  var _jsx;

  return __jsx(NavWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 1
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"], (_jsx = {
    collapseOnSelect: true,
    expand: "lg",
    bg: "dark",
    variant: "dark"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "expand", "lg"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "navbar"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "sticky", "top"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 1
  }), _jsx), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"].Brand, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 3
    }
  }, "SVGS"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"].Toggle, {
    "aria-controls": "responsive-navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 3
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"].Collapse, {
    id: "responsive-navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 3
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
    className: "mr-auto nav-elements ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: CLASSIFICATION,
    active: props.active == 'classify' ? true : false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "Classification"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"], {
    title: "Face",
    id: "collasible-nav-dropdown",
    active: props.active == 'face' ? true : false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"].Item, {
    href: FACE_ALIGN,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "Face Alignment"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"].Item, {
    href: FACE_RECOGNISATION,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "Face Recognisation"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NavDropdown"].Item, {
    href: FACE_SWAP,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Face Swap")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: HUMAN_POSE_ESTIMATION,
    active: props.active == 'hpe' ? true : false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, "HPE"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: GAN,
    active: props.active == 'gan' ? true : false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, "GAN"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: VAE,
    active: props.active == 'vae' ? true : false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, "VAE"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: SRGAN,
    active: props.active == 'srgan' ? true : false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, "SRGan"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"].Link, {
    href: SENTI,
    active: props.active == 'sa' ? true : false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2V3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkN1c3RvbU5hdmJhciIsInByb3BzIiwiQ0xBU1NJRklDQVRJT04iLCJhY3RpdmUiLCJGQUNFX0FMSUdOIiwiRkFDRV9SRUNPR05JU0FUSU9OIiwiRkFDRV9TV0FQIiwiSFVNQU5fUE9TRV9FU1RJTUFUSU9OIiwiR0FOIiwiVkFFIiwiU1JHQU4iLCJTRU5USSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBTUEsSUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFoQjtLQUFNRixVOztBQXNCTixJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFEO0FBQUE7O0FBQUEsU0FDckIsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQSxNQUFDLHNEQUFEO0FBQVEsb0JBQWdCLE1BQXhCO0FBQXlCLFVBQU0sRUFBQyxJQUFoQztBQUFxQyxNQUFFLEVBQUMsTUFBeEM7QUFBK0MsV0FBTyxFQUFDO0FBQXZELCtHQUFxRSxJQUFyRSxnSEFBcUYsUUFBckYsNkdBQXFHLEtBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRSxNQUFDLHNEQUFELENBQVEsS0FBUjtBQUFjLFFBQUksRUFBQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRSxNQUFDLHNEQUFELENBQVEsTUFBUjtBQUFlLHFCQUFjLHVCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLHNEQUFELENBQVEsUUFBUjtBQUFpQixNQUFFLEVBQUMsdUJBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFELENBQUssSUFBTDtBQUFVLFFBQUksRUFBRUMsY0FBaEI7QUFBZ0MsVUFBTSxFQUFJRCxLQUFLLENBQUNFLE1BQU4sSUFBZ0IsVUFBaEIsR0FBNEIsSUFBNUIsR0FBa0MsS0FBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUdFLE1BQUMsMkRBQUQ7QUFBYSxTQUFLLEVBQUMsTUFBbkI7QUFBMEIsTUFBRSxFQUFDLHlCQUE3QjtBQUF1RCxVQUFNLEVBQUtGLEtBQUssQ0FBQ0UsTUFBTixJQUFnQixNQUFoQixHQUF3QixJQUF4QixHQUE4QixLQUFoRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRCxDQUFhLElBQWI7QUFBa0IsUUFBSSxFQUFFQyxVQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUUsTUFBQywyREFBRCxDQUFhLElBQWI7QUFBa0IsUUFBSSxFQUFFQyxrQkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRixFQUdFLE1BQUMsMkRBQUQsQ0FBYSxJQUFiO0FBQWtCLFFBQUksRUFBRUMsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixDQUhGLEVBUUUsTUFBQyxtREFBRCxDQUFLLElBQUw7QUFBVSxRQUFJLEVBQUVDLHFCQUFoQjtBQUF1QyxVQUFNLEVBQUlOLEtBQUssQ0FBQ0UsTUFBTixJQUFnQixLQUFoQixHQUF1QixJQUF2QixHQUE2QixLQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBUkYsRUFTRSxNQUFDLG1EQUFELENBQUssSUFBTDtBQUFVLFFBQUksRUFBRUssR0FBaEI7QUFBcUIsVUFBTSxFQUFJUCxLQUFLLENBQUNFLE1BQU4sSUFBZ0IsS0FBaEIsR0FBdUIsSUFBdkIsR0FBNkIsS0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVRGLEVBVUUsTUFBQyxtREFBRCxDQUFLLElBQUw7QUFBVSxRQUFJLEVBQUVNLEdBQWhCO0FBQXFCLFVBQU0sRUFBSVIsS0FBSyxDQUFDRSxNQUFOLElBQWdCLEtBQWhCLEdBQXVCLElBQXZCLEdBQTZCLEtBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FWRixFQVdFLE1BQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsUUFBSSxFQUFFTyxLQUFoQjtBQUF1QixVQUFNLEVBQUlULEtBQUssQ0FBQ0UsTUFBTixJQUFnQixPQUFoQixHQUF5QixJQUF6QixHQUErQixLQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEYsRUFZRSxNQUFDLG1EQUFELENBQUssSUFBTDtBQUFVLFFBQUksRUFBRVEsS0FBaEI7QUFBdUIsVUFBTSxFQUFJVixLQUFLLENBQUNFLE1BQU4sSUFBZ0IsSUFBaEIsR0FBc0IsSUFBdEIsR0FBNEIsS0FBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFaRixDQURGLENBSEYsQ0FGQSxDQURxQjtBQUFBLENBQXJCOztNQUFNSCxZO0FBNEJTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZW50aW1lbnRhbF9hbmFseXNpcy45ODY4NmZmNDAwN2NlYTYwYzUwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuXG5cbmltcG9ydCB7XG4gIE5hdmJhcixcbiAgTmF2RHJvcGRvd24sXG4gIE5hdlxufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmNvbnN0IE5hdldyYXBwZXIgPSBzdHlsZWQuZGl2YFxubWFyZ2luOiAxJSAyJTtcbi5uYXZiYXJ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDksOSwxMjEsMSkgMzUlLHJnYmEoMCwyMTIsMjU1LDEpIDEwMCUgKTtcbiAgIFxuICB9XG5cbi5uYXYtZWxlbWVudHN7XG4gXG5cbiAgYXtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgXG4gIH1cbn1cbi5uYXZiYXItY29sbGFwc2V7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuYDtcblxuXG5cbmNvbnN0IEN1c3RvbU5hdmJhciA9IChwcm9wcykgPT4gKFxuPE5hdldyYXBwZXI+XG5cbjxOYXZiYXIgY29sbGFwc2VPblNlbGVjdCBleHBhbmQ9XCJsZ1wiIGJnPVwiZGFya1wiIHZhcmlhbnQ9XCJkYXJrXCIgZXhwYW5kPVwibGdcIiBjbGFzc05hbWUgPSduYXZiYXInIHN0aWNreT1cInRvcFwiID5cbiAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiPlNWR1M8L05hdmJhci5CcmFuZD5cbiAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cInJlc3BvbnNpdmUtbmF2YmFyLW5hdlwiIC8+XG4gIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJyZXNwb25zaXZlLW5hdmJhci1uYXZcIj5cbiAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG8gbmF2LWVsZW1lbnRzIFwiPlxuICAgICAgPE5hdi5MaW5rIGhyZWY9e0NMQVNTSUZJQ0FUSU9OfSBhY3RpdmUgPSB7cHJvcHMuYWN0aXZlID09ICdjbGFzc2lmeSc/IHRydWU6IGZhbHNlfT5DbGFzc2lmaWNhdGlvbjwvTmF2Lkxpbms+XG4gICAgICBcbiAgICAgIDxOYXZEcm9wZG93biB0aXRsZT1cIkZhY2VcIiBpZD1cImNvbGxhc2libGUtbmF2LWRyb3Bkb3duXCIgYWN0aXZlID0gIHtwcm9wcy5hY3RpdmUgPT0gJ2ZhY2UnPyB0cnVlOiBmYWxzZX0+XG4gICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9e0ZBQ0VfQUxJR059ID5GYWNlIEFsaWdubWVudDwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj17RkFDRV9SRUNPR05JU0FUSU9OfSA+RmFjZSBSZWNvZ25pc2F0aW9uPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPXtGQUNFX1NXQVB9ID5GYWNlIFN3YXA8L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICA8L05hdkRyb3Bkb3duPlxuICAgICAgPE5hdi5MaW5rIGhyZWY9e0hVTUFOX1BPU0VfRVNUSU1BVElPTn0gYWN0aXZlID0ge3Byb3BzLmFjdGl2ZSA9PSAnaHBlJz8gdHJ1ZTogZmFsc2V9PkhQRTwvTmF2Lkxpbms+XG4gICAgICA8TmF2LkxpbmsgaHJlZj17R0FOfSBhY3RpdmUgPSB7cHJvcHMuYWN0aXZlID09ICdnYW4nPyB0cnVlOiBmYWxzZX0+R0FOPC9OYXYuTGluaz5cbiAgICAgIDxOYXYuTGluayBocmVmPXtWQUV9IGFjdGl2ZSA9IHtwcm9wcy5hY3RpdmUgPT0gJ3ZhZSc/IHRydWU6IGZhbHNlfT5WQUU8L05hdi5MaW5rPlxuICAgICAgPE5hdi5MaW5rIGhyZWY9e1NSR0FOfSBhY3RpdmUgPSB7cHJvcHMuYWN0aXZlID09ICdzcmdhbic/IHRydWU6IGZhbHNlfT5TUkdhbjwvTmF2Lkxpbms+XG4gICAgICA8TmF2LkxpbmsgaHJlZj17U0VOVEl9IGFjdGl2ZSA9IHtwcm9wcy5hY3RpdmUgPT0gJ3NhJz8gdHJ1ZTogZmFsc2V9PlNlbnRpbWVudCBBbmFseXNpczwvTmF2Lkxpbms+XG4gICAgICBcbiAgICA8L05hdj5cbiAgICBcbiAgPC9OYXZiYXIuQ29sbGFwc2U+XG48L05hdmJhcj5cbjwvTmF2V3JhcHBlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tTmF2YmFyXG4iXSwic291cmNlUm9vdCI6IiJ9