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
/* harmony import */ var _static_github_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/github.svg */ "./static/github.svg");
/* harmony import */ var _static_github_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_github_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_network_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/network.svg */ "./static/network.svg");
/* harmony import */ var _static_network_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_network_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _this = undefined,
    _jsxFileName = "G:\\Projects\\EVA-Web\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Home = function Home() {
  return __jsx("div", {
    style: {
      background: '#f7f9fb'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "SVGS Works",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 6
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }, __jsx("div", {
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 6
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Welcome to SVGS Works "), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Take a look at our various deployed models"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, _urls__WEBPACK_IMPORTED_MODULE_4__["MODELS"].map(function (model) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
      md: "4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Title, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }, " ", model.title, " "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Text, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 23
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      variant: "outline-info",
      size: "sm",
      href: model.url,
      style: {
        marginRight: '2rem'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: _static_network_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
      style: {
        width: '20px',
        marginRight: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 106
      }
    }), "Model"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      variant: "outline-info",
      size: "sm",
      href: model.code,
      style: {
        marginLeft: '2rem'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 16
      }
    }, __jsx("img", {
      src: _static_github_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
      style: {
        width: '20px',
        marginRight: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 107
      }
    }), "Code")))), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    }));
  }))));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImJhY2tncm91bmQiLCJ0ZXh0QWxpZ24iLCJNT0RFTFMiLCJtYXAiLCJtb2RlbCIsInRpdGxlIiwidXJsIiwibWFyZ2luUmlnaHQiLCJ3ZWJzaXRlIiwid2lkdGgiLCJjb2RlIiwibWFyZ2luTGVmdCIsImdpdGh1YiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFZQyxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQ1g7QUFBSyxTQUFLLEVBQUk7QUFBQ0MsZ0JBQVUsRUFBRztBQUFkLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTSxTQUFLLEVBQUMsWUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssU0FBSyxFQUFJO0FBQUNDLGVBQVMsRUFBQztBQUFYLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREwsRUFFSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkwsRUFHSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQUhMLEVBSUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpMLENBREEsRUFRRyxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFT0MsNENBQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUFDLEtBQUs7QUFBQSxXQUNqQixNQUFDLG1EQUFEO0FBQUssUUFBRSxFQUFHLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQ7QUFBTSxlQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVFLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG9EQUFELENBQU0sS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQWNBLEtBQUssQ0FBQ0MsS0FBcEIsTUFERixFQUVFLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFTixNQUFDLHNEQUFEO0FBQVEsYUFBTyxFQUFDLGNBQWhCO0FBQStCLFVBQUksRUFBQyxJQUFwQztBQUF5QyxVQUFJLEVBQUVELEtBQUssQ0FBQ0UsR0FBckQ7QUFBMEQsV0FBSyxFQUFJO0FBQUNDLG1CQUFXLEVBQUc7QUFBZixPQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTJGO0FBQUssU0FBRyxFQUFJQywwREFBWjtBQUFxQixXQUFLLEVBQUk7QUFBQ0MsYUFBSyxFQUFFLE1BQVI7QUFDeEhGLG1CQUFXLEVBQUU7QUFEMkcsT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUEzRixVQUZNLEVBSUwsTUFBQyxzREFBRDtBQUFRLGFBQU8sRUFBQyxjQUFoQjtBQUErQixVQUFJLEVBQUMsSUFBcEM7QUFBeUMsVUFBSSxFQUFFSCxLQUFLLENBQUNNLElBQXJEO0FBQTJELFdBQUssRUFBSTtBQUFDQyxrQkFBVSxFQUFHO0FBQWQsT0FBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEyRjtBQUFLLFNBQUcsRUFBSUMseURBQVo7QUFBb0IsV0FBSyxFQUFJO0FBQUNILGFBQUssRUFBRSxNQUFSO0FBQ3hIRixtQkFBVyxFQUFFO0FBRDJHLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBM0YsU0FKSyxDQUZGLENBRkYsQ0FERixFQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BaEJBLENBRGlCO0FBQUEsR0FBaEIsQ0FGUCxDQVJILENBSkYsQ0FEVztBQUFBLENBQWI7O0tBQU1SLEk7QUE0Q1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU4ZjQ3Y2RjYTZiNDBjZTcxMDAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL2hlYWQnXG5pbXBvcnQgQ3VzdG9tTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2JztcbmltcG9ydCB7TU9ERUxTfSBmcm9tICcuLi91cmxzJztcbmltcG9ydCBnaXRodWIgZnJvbSAnLi4vc3RhdGljL2dpdGh1Yi5zdmcnO1xuaW1wb3J0IHdlYnNpdGUgZnJvbSAnLi4vc3RhdGljL25ldHdvcmsuc3ZnJztcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgRm9ybSxcbiAgUm93LFxuICBDb2wsXG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZENvbHVtbnNcbiAgXG59IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuXG4gY29uc3QgSG9tZSA9ICgpID0+IChcbiAgIDxkaXYgc3R5bGUgPSB7e2JhY2tncm91bmQgOiAnI2Y3ZjlmYid9fT5cbiAgICAgPEhlYWQgdGl0bGU9XCJTVkdTIFdvcmtzXCIgLz5cbiAgICAgPEN1c3RvbU5hdmJhciAvPlxuICAgICA8YnIvPlxuICAgICA8Q29udGFpbmVyPlxuICAgICA8ZGl2IHN0eWxlID0ge3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxuICAgICAgICAgIDxoMT5XZWxjb21lIHRvIFNWR1MgV29ya3MgPC9oMT5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxwPlRha2UgYSBsb29rIGF0IG91ciB2YXJpb3VzIGRlcGxveWVkIG1vZGVsczwvcD5cbiAgICAgICAgICA8YnIvPlxuICAgICAgPC9kaXY+XG4gICAgIFxuICAgICAgICA8Um93PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHtNT0RFTFMubWFwKG1vZGVsID0+IFxuICAgICAgICAgICAgICA8Q29sIG1kID0gJzQnPlxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+IHttb2RlbC50aXRsZX0gPC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiIHNpemU9XCJzbVwiIGhyZWY9e21vZGVsLnVybH0gc3R5bGUgPSB7e21hcmdpblJpZ2h0IDogJzJyZW0nfX0+PGltZyBzcmMgPSB7d2Vic2l0ZX0gc3R5bGUgPSB7e3dpZHRoOiAnMjBweCcsXG4gICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzEwcHgnfX0vPk1vZGVsPC9CdXR0b24+XG4gICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIiBzaXplPVwic21cIiBocmVmPXttb2RlbC5jb2RlfSBzdHlsZSA9IHt7bWFyZ2luTGVmdCA6ICcycmVtJ319PjxpbWcgc3JjID0ge2dpdGh1Yn0gc3R5bGUgPSB7e3dpZHRoOiAnMjBweCcsXG4gICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzEwcHgnfX0vPkNvZGU8L0J1dHRvbj4gXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XG4gICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICBcbiAgICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG5cbiAgIFxuICAgPC9kaXY+XG4gKVxuXG4gZXhwb3J0IGRlZmF1bHQgSG9tZVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=