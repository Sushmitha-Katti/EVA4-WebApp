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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRleHRBbGlnbiIsIk1PREVMUyIsIm1hcCIsIm1vZGVsIiwidGl0bGUiLCJ1cmwiLCJtYXJnaW5SaWdodCIsIndlYnNpdGUiLCJ3aWR0aCIsImNvZGUiLCJtYXJnaW5MZWZ0IiwiZ2l0aHViIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVlDLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsU0FDWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFNLFNBQUssRUFBQyxZQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxTQUFLLEVBQUk7QUFBQ0MsZUFBUyxFQUFDO0FBQVgsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFETCxFQUVLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGTCxFQUdLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBSEwsRUFJSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkwsQ0FEQSxFQVFHLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVPQyw0Q0FBTSxDQUFDQyxHQUFQLENBQVcsVUFBQUMsS0FBSztBQUFBLFdBQ2pCLE1BQUMsbURBQUQ7QUFBSyxRQUFFLEVBQUcsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvREFBRDtBQUFNLGVBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUUsTUFBQyxvREFBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBY0EsS0FBSyxDQUFDQyxLQUFwQixNQURGLEVBRUUsTUFBQyxvREFBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVOLE1BQUMsc0RBQUQ7QUFBUSxhQUFPLEVBQUMsY0FBaEI7QUFBK0IsVUFBSSxFQUFDLElBQXBDO0FBQXlDLFVBQUksRUFBRUQsS0FBSyxDQUFDRSxHQUFyRDtBQUEwRCxXQUFLLEVBQUk7QUFBQ0MsbUJBQVcsRUFBRztBQUFmLE9BQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMkY7QUFBSyxTQUFHLEVBQUlDLDBEQUFaO0FBQXFCLFdBQUssRUFBSTtBQUFDQyxhQUFLLEVBQUUsTUFBUjtBQUN4SEYsbUJBQVcsRUFBRTtBQUQyRyxPQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTNGLFVBRk0sRUFJTCxNQUFDLHNEQUFEO0FBQVEsYUFBTyxFQUFDLGNBQWhCO0FBQStCLFVBQUksRUFBQyxJQUFwQztBQUF5QyxVQUFJLEVBQUVILEtBQUssQ0FBQ00sSUFBckQ7QUFBMkQsV0FBSyxFQUFJO0FBQUNDLGtCQUFVLEVBQUc7QUFBZCxPQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTJGO0FBQUssU0FBRyxFQUFJQyx5REFBWjtBQUFvQixXQUFLLEVBQUk7QUFBQ0gsYUFBSyxFQUFFLE1BQVI7QUFDeEhGLG1CQUFXLEVBQUU7QUFEMkcsT0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUEzRixTQUpLLENBRkYsQ0FGRixDQURGLEVBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFoQkEsQ0FEaUI7QUFBQSxHQUFoQixDQUZQLENBUkgsQ0FKRixDQURXO0FBQUEsQ0FBYjs7S0FBTVAsSTtBQTRDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDg1N2NiMTgwOGExMzYxM2U5N2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCdcbmltcG9ydCBDdXN0b21OYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYnO1xuaW1wb3J0IHtNT0RFTFN9IGZyb20gJy4uL3VybHMnO1xuaW1wb3J0IGdpdGh1YiBmcm9tICcuLi9zdGF0aWMvZ2l0aHViLnN2Zyc7XG5pbXBvcnQgd2Vic2l0ZSBmcm9tICcuLi9zdGF0aWMvbmV0d29yay5zdmcnO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBGb3JtLFxuICBSb3csXG4gIENvbCxcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQ29sdW1uc1xuICBcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5cbiBjb25zdCBIb21lID0gKCkgPT4gKFxuICAgPGRpdj5cbiAgICAgPEhlYWQgdGl0bGU9XCJTVkdTIFdvcmtzXCIgLz5cbiAgICAgPEN1c3RvbU5hdmJhciAvPlxuICAgICA8YnIvPlxuICAgICA8Q29udGFpbmVyPlxuICAgICA8ZGl2IHN0eWxlID0ge3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxuICAgICAgICAgIDxoMT5XZWxjb21lIHRvIFNWR1MgV29ya3MgPC9oMT5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxwPlRha2UgYSBsb29rIGF0IG91ciB2YXJpb3VzIGRlcGxveWVkIG1vZGVsczwvcD5cbiAgICAgICAgICA8YnIvPlxuICAgICAgPC9kaXY+XG4gICAgIFxuICAgICAgICA8Um93PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHtNT0RFTFMubWFwKG1vZGVsID0+IFxuICAgICAgICAgICAgICA8Q29sIG1kID0gJzQnPlxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT4ge21vZGVsLnRpdGxlfSA8L0NhcmQuVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1pbmZvXCIgc2l6ZT1cInNtXCIgaHJlZj17bW9kZWwudXJsfSBzdHlsZSA9IHt7bWFyZ2luUmlnaHQgOiAnMnJlbSd9fT48aW1nIHNyYyA9IHt3ZWJzaXRlfSBzdHlsZSA9IHt7d2lkdGg6ICcyMHB4JyxcbiAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCd9fS8+TW9kZWw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiIHNpemU9XCJzbVwiIGhyZWY9e21vZGVsLmNvZGV9IHN0eWxlID0ge3ttYXJnaW5MZWZ0IDogJzJyZW0nfX0+PGltZyBzcmMgPSB7Z2l0aHVifSBzdHlsZSA9IHt7d2lkdGg6ICcyMHB4JyxcbiAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCd9fS8+Q29kZTwvQnV0dG9uPiBcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIFxuICAgICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cblxuICAgXG4gICA8L2Rpdj5cbiApXG5cbiBleHBvcnQgZGVmYXVsdCBIb21lXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==