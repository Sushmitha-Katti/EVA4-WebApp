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
      variant: "outline-secondary",
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
        columnNumber: 111
      }
    }), "Model"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      variant: "outline-secondary",
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
        columnNumber: 112
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

/***/ }),

/***/ "./static/network.svg":
/*!****************************!*\
  !*** ./static/network.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTM3OS4zMDIgMjI3LjUzOWMtMjUuNTMzLTIuMTk1LTQ2LjU0MS0yMC40NjktNTIuNzk4LTQ0LjYzMmgtNTUuNTA0djE0Ni4xODdoMTAyLjc4NmM1LjkzNS0zMi44MDkgNy44NS02Ny4yNzggNS41MTYtMTAxLjU1NXoiLz48cGF0aCBkPSJtMzg0LjQ3IDEzOC4wMzdjLTE2LjQ3IDAtMjkuODcgMTMuMzk5LTI5Ljg3IDI5Ljg3IDAgMTYuNDcgMTMuMzk5IDI5Ljg2OSAyOS44NyAyOS44NjlzMjkuODctMTMuMzk5IDI5Ljg3LTI5Ljg2OWMwLTE2LjQ3MS0xMy40LTI5Ljg3LTI5Ljg3LTI5Ljg3eiIvPjxjaXJjbGUgY3g9IjEyNi4wOTIiIGN5PSIzNDUuMDc4IiByPSI0NS4xMTEiLz48cGF0aCBkPSJtMjQxIDBjLTM0LjIzOSAyMy41MjgtNjIuMDc3IDYzLjE5OC04MS4yOTYgMTA5LjEzMi01LjgxMyAxMy44OTUtMTAuNzQ4IDI4LjU2NS0xNC43ODggNDMuNzc1aDk2LjA4NHoiLz48cGF0aCBkPSJtMTMxLjk3OCAyNzAuMjE5YzMzLjI5MyAyLjU5NiA2MC41NTQgMjYuOTc2IDY3LjQ5NyA1OC44NzVoNDEuNTI1di0xNDYuMTg3aC0xMDIuNzU3Yy01LjEwNyAyOC4yNDQtNy4yNTcgNTcuNzctNi4yNjUgODcuMzEyeiIvPjxwYXRoIGQ9Im0yNDEgNTEydi0xNTIuOTA3aC00MS4xMjhjLTQuMTgzIDIyLjA2NS0xOC4wNCA0MC43MzUtMzYuOTg2IDUxLjQyOSAxOC43MjkgNDIuNzMxIDQ0LjkwOSA3OS4wODMgNzguMTE0IDEwMS40Nzh6Ii8+PHBhdGggZD0ibTI3MSA1MTJjMzUuODk0LTI0LjYzNSA2NC42NDYtNjYuNTI0IDgzLjkyOS0xMTUuNjE1IDQuNzA1LTExLjk3NyA4Ljc3Mi0yNC40NDkgMTIuMTg5LTM3LjI5MmgtOTYuMTE4eiIvPjxwYXRoIGQ9Im0zODIuODUyIDQwNy4zNTRjLTE0Ljg5NyAzNy45MjQtMzUuMDY1IDcwLjE1NC01OS42MTkgOTUuNzA2IDc0Ljk4OS0yMC4zNiAxMzYuMjkzLTczLjkzNyAxNjcuMTQxLTE0My45NjZoLTkyLjMxN2MtNC4wNzggMTYuNjc4LTkuMTUgMzIuODQ0LTE1LjIwNSA0OC4yNnoiLz48cGF0aCBkPSJtMTI2LjA5MiA0MjAuMTg5Yy0zNi42MjYgMC02Ny4xOTQtMjYuMzU3LTczLjc4LTYxLjA5NmgtMzAuNjg2YzMwLjcyOSA2OS43NTggOTEuNjc3IDEyMy4xOTQgMTY2LjI3MSAxNDMuNzMxLTIxLjc3MS0yMi41ODItMzkuNzM0LTUwLjMyNy01My43MTktODMuMDc3LTIuNjU4LjI4Ni01LjM1NC40NDItOC4wODYuNDQyeiIvPjxwYXRoIGQ9Im00MDkuMDI2IDIyMi40ODdjMi42ODEgMzUuODUuOTk3IDcyLjAwMS00LjgwNCAxMDYuNjA3aDk3LjE3MWM2Ljg4OS0yMy4xNjQgMTAuNjA3LTQ3LjY5MyAxMC42MDctNzMuMDk0cy0zLjcxOC00OS45My0xMC42MDctNzMuMDkzaC01OC45NTdjLTQuNTc3IDE3LjY3NC0xNy4wNTEgMzIuMTkxLTMzLjQxIDM5LjU4eiIvPjxwYXRoIGQ9Im0xMDIuMDg3IDI3My45MjNjLTEuMjEyLTMwLjY4My43Ni02MS40MzMgNS43MjEtOTEuMDE2aC05Ny4yMDFjLTYuODg5IDIzLjE2My0xMC42MDcgNDcuNjkyLTEwLjYwNyA3My4wOTNzMy43MTggNDkuOTMgMTAuNjA3IDczLjA5NGg0Mi4xMDNjNS42MzEtMjUuODc0IDI0LjYzMS00Ni43OTkgNDkuMzc3LTU1LjE3MXoiLz48cGF0aCBkPSJtMzg0LjE1NiAxMDguMDQ1Yy4xMDUtLjAwMS4yMDktLjAwOC4zMTQtLjAwOCAyNy44MzQgMCA1MS4yOTEgMTkuMDkzIDU3Ljk2NiA0NC44N2g0Ny45MzljLTMwLjg1Mi03MC4wMzYtOTIuMTY0LTEyMy42MTgtMTY3LjE2NC0xNDMuOTcyIDUuNzY1IDYuMDA0IDExLjMwMyAxMi4zOCAxNi41OTMgMTkuMTM1IDE3Ljk5MiAyMi45NzIgMzIuODc3IDQ5LjgzNyA0NC4zNTIgNzkuOTc1eiIvPjxwYXRoIGQ9Im0yNzEgMHYxNTIuOTA3aDU1LjUwNGM0LjEwNy0xNS44NjIgMTQuNTc4LTI5LjE4IDI4LjUwNS0zNy4wODktMTQuODA2LTM3Ljc5Ny00MC40NDEtODYuMDQ1LTg0LjAwOS0xMTUuODE4eiIvPjxwYXRoIGQ9Im0xMzIuMDI5IDk3LjU1MmMxNC41NzQtMzQuODM0IDMzLjc1Ny02NC42NjggNTYuNzY4LTg4LjYyLTc1LjAwMyAyMC4zNTQtMTM2LjMxOSA3My45MzYtMTY3LjE3MiAxNDMuOTc1aDkyLjMzOGM0LjcxMy0xOS4zIDEwLjc1NC0zNy44NzggMTguMDY2LTU1LjM1NXoiLz48L2c+PC9zdmc+"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0YXRpYy9uZXR3b3JrLnN2ZyJdLCJuYW1lcyI6WyJIb21lIiwidGV4dEFsaWduIiwiTU9ERUxTIiwibWFwIiwibW9kZWwiLCJ0aXRsZSIsInVybCIsIm1hcmdpblJpZ2h0Iiwid2Vic2l0ZSIsIndpZHRoIiwiY29kZSIsIm1hcmdpbkxlZnQiLCJnaXRodWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWUMsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxTQUNYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQU0sU0FBSyxFQUFDLFlBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLFNBQUssRUFBSTtBQUFDQyxlQUFTLEVBQUM7QUFBWCxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURMLEVBRUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZMLEVBR0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFITCxFQUlLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKTCxDQURBLEVBUUcsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRU9DLDRDQUFNLENBQUNDLEdBQVAsQ0FBVyxVQUFBQyxLQUFLO0FBQUEsV0FDakIsTUFBQyxtREFBRDtBQUFLLFFBQUUsRUFBRyxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG9EQUFEO0FBQU0sZUFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFRSxNQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFjQSxLQUFLLENBQUNDLEtBQXBCLE1BREYsRUFFRSxNQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRU4sTUFBQyxzREFBRDtBQUFRLGFBQU8sRUFBQyxtQkFBaEI7QUFBb0MsVUFBSSxFQUFDLElBQXpDO0FBQThDLFVBQUksRUFBRUQsS0FBSyxDQUFDRSxHQUExRDtBQUErRCxXQUFLLEVBQUk7QUFBQ0MsbUJBQVcsRUFBRztBQUFmLE9BQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0c7QUFBSyxTQUFHLEVBQUlDLDBEQUFaO0FBQXFCLFdBQUssRUFBSTtBQUFDQyxhQUFLLEVBQUUsTUFBUjtBQUM3SEYsbUJBQVcsRUFBRTtBQURnSCxPQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWhHLFVBRk0sRUFJTCxNQUFDLHNEQUFEO0FBQVEsYUFBTyxFQUFDLG1CQUFoQjtBQUFvQyxVQUFJLEVBQUMsSUFBekM7QUFBOEMsVUFBSSxFQUFFSCxLQUFLLENBQUNNLElBQTFEO0FBQWdFLFdBQUssRUFBSTtBQUFDQyxrQkFBVSxFQUFHO0FBQWQsT0FBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnRztBQUFLLFNBQUcsRUFBSUMseURBQVo7QUFBb0IsV0FBSyxFQUFJO0FBQUNILGFBQUssRUFBRSxNQUFSO0FBQzdIRixtQkFBVyxFQUFFO0FBRGdILE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBaEcsU0FKSyxDQUZGLENBRkYsQ0FERixFQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BaEJBLENBRGlCO0FBQUEsR0FBaEIsQ0FGUCxDQVJILENBSkYsQ0FEVztBQUFBLENBQWI7O0tBQU1QLEk7QUE0Q1NBLG1FQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREQscUNBQXFDLDQzRiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMWJhNzUxZTNlNDVhNDk4NWU1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkJ1xuaW1wb3J0IEN1c3RvbU5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdic7XG5pbXBvcnQge01PREVMU30gZnJvbSAnLi4vdXJscyc7XG5pbXBvcnQgZ2l0aHViIGZyb20gJy4uL3N0YXRpYy9naXRodWIuc3ZnJztcbmltcG9ydCB3ZWJzaXRlIGZyb20gJy4uL3N0YXRpYy9uZXR3b3JrLnN2Zyc7XG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIEZvcm0sXG4gIFJvdyxcbiAgQ29sLFxuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRDb2x1bW5zXG4gIFxufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cblxuIGNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gICA8ZGl2PlxuICAgICA8SGVhZCB0aXRsZT1cIlNWR1MgV29ya3NcIiAvPlxuICAgICA8Q3VzdG9tTmF2YmFyIC8+XG4gICAgIDxici8+XG4gICAgIDxDb250YWluZXI+XG4gICAgIDxkaXYgc3R5bGUgPSB7e3RleHRBbGlnbjpcImNlbnRlclwifX0+XG4gICAgICAgICAgPGgxPldlbGNvbWUgdG8gU1ZHUyBXb3JrcyA8L2gxPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPHA+VGFrZSBhIGxvb2sgYXQgb3VyIHZhcmlvdXMgZGVwbG95ZWQgbW9kZWxzPC9wPlxuICAgICAgICAgIDxici8+XG4gICAgICA8L2Rpdj5cbiAgICAgXG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAge01PREVMUy5tYXAobW9kZWwgPT4gXG4gICAgICAgICAgICAgIDxDb2wgbWQgPSAnNCc+XG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPiB7bW9kZWwudGl0bGV9IDwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXNlY29uZGFyeVwiIHNpemU9XCJzbVwiIGhyZWY9e21vZGVsLnVybH0gc3R5bGUgPSB7e21hcmdpblJpZ2h0IDogJzJyZW0nfX0+PGltZyBzcmMgPSB7d2Vic2l0ZX0gc3R5bGUgPSB7e3dpZHRoOiAnMjBweCcsXG4gICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzEwcHgnfX0vPk1vZGVsPC9CdXR0b24+XG4gICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXNlY29uZGFyeVwiIHNpemU9XCJzbVwiIGhyZWY9e21vZGVsLmNvZGV9IHN0eWxlID0ge3ttYXJnaW5MZWZ0IDogJzJyZW0nfX0+PGltZyBzcmMgPSB7Z2l0aHVifSBzdHlsZSA9IHt7d2lkdGg6ICcyMHB4JyxcbiAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCd9fS8+Q29kZTwvQnV0dG9uPiBcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIFxuICAgICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cblxuICAgXG4gICA8L2Rpdj5cbiApXG5cbiBleHBvcnQgZGVmYXVsdCBIb21lXG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QnBaRDBpUTJGd1lWOHhJaUJsYm1GaWJHVXRZbUZqYTJkeWIzVnVaRDBpYm1WM0lEQWdNQ0ExTVRJZ05URXlJaUJvWldsbmFIUTlJalV4TWlJZ2RtbGxkMEp2ZUQwaU1DQXdJRFV4TWlBMU1USWlJSGRwWkhSb1BTSTFNVElpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEdjK1BIQmhkR2dnWkQwaWJUTTNPUzR6TURJZ01qSTNMalV6T1dNdE1qVXVOVE16TFRJdU1UazFMVFEyTGpVME1TMHlNQzQwTmprdE5USXVOems0TFRRMExqWXpNbWd0TlRVdU5UQTBkakUwTmk0eE9EZG9NVEF5TGpjNE5tTTFMamt6TlMwek1pNDRNRGtnTnk0NE5TMDJOeTR5TnpnZ05TNDFNVFl0TVRBeExqVTFOWG9pTHo0OGNHRjBhQ0JrUFNKdE16ZzBMalEzSURFek9DNHdNemRqTFRFMkxqUTNJREF0TWprdU9EY2dNVE11TXprNUxUSTVMamczSURJNUxqZzNJREFnTVRZdU5EY2dNVE11TXprNUlESTVMamcyT1NBeU9TNDROeUF5T1M0NE5qbHpNamt1T0RjdE1UTXVNems1SURJNUxqZzNMVEk1TGpnMk9XTXdMVEUyTGpRM01TMHhNeTQwTFRJNUxqZzNMVEk1TGpnM0xUSTVMamczZWlJdlBqeGphWEpqYkdVZ1kzZzlJakV5Tmk0d09USWlJR041UFNJek5EVXVNRGM0SWlCeVBTSTBOUzR4TVRFaUx6NDhjR0YwYUNCa1BTSnRNalF4SURCakxUTTBMakl6T1NBeU15NDFNamd0TmpJdU1EYzNJRFl6TGpFNU9DMDRNUzR5T1RZZ01UQTVMakV6TWkwMUxqZ3hNeUF4TXk0NE9UVXRNVEF1TnpRNElESTRMalUyTlMweE5DNDNPRGdnTkRNdU56YzFhRGsyTGpBNE5Ib2lMejQ4Y0dGMGFDQmtQU0p0TVRNeExqazNPQ0F5TnpBdU1qRTVZek16TGpJNU15QXlMalU1TmlBMk1DNDFOVFFnTWpZdU9UYzJJRFkzTGpRNU55QTFPQzQ0TnpWb05ERXVOVEkxZGkweE5EWXVNVGczYUMweE1ESXVOelUzWXkwMUxqRXdOeUF5T0M0eU5EUXROeTR5TlRjZ05UY3VOemN0Tmk0eU5qVWdPRGN1TXpFeWVpSXZQanh3WVhSb0lHUTlJbTB5TkRFZ05URXlkaTB4TlRJdU9UQTNhQzAwTVM0eE1qaGpMVFF1TVRneklESXlMakEyTlMweE9DNHdOQ0EwTUM0M016VXRNell1T1RnMklEVXhMalF5T1NBeE9DNDNNamtnTkRJdU56TXhJRFEwTGprd09TQTNPUzR3T0RNZ056Z3VNVEUwSURFd01TNDBOemg2SWk4K1BIQmhkR2dnWkQwaWJUSTNNU0ExTVRKak16VXVPRGswTFRJMExqWXpOU0EyTkM0Mk5EWXROall1TlRJMElEZ3pMamt5T1MweE1UVXVOakUxSURRdU56QTFMVEV4TGprM055QTRMamMzTWkweU5DNDBORGtnTVRJdU1UZzVMVE0zTGpJNU1tZ3RPVFl1TVRFNGVpSXZQanh3WVhSb0lHUTlJbTB6T0RJdU9EVXlJRFF3Tnk0ek5UUmpMVEUwTGpnNU55QXpOeTQ1TWpRdE16VXVNRFkxSURjd0xqRTFOQzAxT1M0Mk1Ua2dPVFV1TnpBMklEYzBMams0T1MweU1DNHpOaUF4TXpZdU1qa3pMVGN6TGprek55QXhOamN1TVRReExURTBNeTQ1Tmpab0xUa3lMak14TjJNdE5DNHdOemdnTVRZdU5qYzRMVGt1TVRVZ016SXVPRFEwTFRFMUxqSXdOU0EwT0M0eU5ub2lMejQ4Y0dGMGFDQmtQU0p0TVRJMkxqQTVNaUEwTWpBdU1UZzVZeTB6Tmk0Mk1qWWdNQzAyTnk0eE9UUXRNall1TXpVM0xUY3pMamM0TFRZeExqQTVObWd0TXpBdU5qZzJZek13TGpjeU9TQTJPUzQzTlRnZ09URXVOamMzSURFeU15NHhPVFFnTVRZMkxqSTNNU0F4TkRNdU56TXhMVEl4TGpjM01TMHlNaTQxT0RJdE16a3VOek0wTFRVd0xqTXlOeTAxTXk0M01Ua3RPRE11TURjM0xUSXVOalU0TGpJNE5pMDFMak0xTkM0ME5ESXRPQzR3T0RZdU5EUXllaUl2UGp4d1lYUm9JR1E5SW0wME1Ea3VNREkySURJeU1pNDBPRGRqTWk0Mk9ERWdNelV1T0RVdU9UazNJRGN5TGpBd01TMDBMamd3TkNBeE1EWXVOakEzYURrM0xqRTNNV00yTGpnNE9TMHlNeTR4TmpRZ01UQXVOakEzTFRRM0xqWTVNeUF4TUM0Mk1EY3ROek11TURrMGN5MHpMamN4T0MwME9TNDVNeTB4TUM0Mk1EY3ROek11TURremFDMDFPQzQ1TlRkakxUUXVOVGMzSURFM0xqWTNOQzB4Tnk0d05URWdNekl1TVRreExUTXpMalF4SURNNUxqVTRlaUl2UGp4d1lYUm9JR1E5SW0weE1ESXVNRGczSURJM015NDVNak5qTFRFdU1qRXlMVE13TGpZNE15NDNOaTAyTVM0ME16TWdOUzQzTWpFdE9URXVNREUyYUMwNU55NHlNREZqTFRZdU9EZzVJREl6TGpFMk15MHhNQzQyTURjZ05EY3VOamt5TFRFd0xqWXdOeUEzTXk0d09UTnpNeTQzTVRnZ05Ea3VPVE1nTVRBdU5qQTNJRGN6TGpBNU5HZzBNaTR4TUROak5TNDJNekV0TWpVdU9EYzBJREkwTGpZek1TMDBOaTQzT1RrZ05Ea3VNemMzTFRVMUxqRTNNWG9pTHo0OGNHRjBhQ0JrUFNKdE16ZzBMakUxTmlBeE1EZ3VNRFExWXk0eE1EVXRMakF3TVM0eU1Ea3RMakF3T0M0ek1UUXRMakF3T0NBeU55NDRNelFnTUNBMU1TNHlPVEVnTVRrdU1Ea3pJRFUzTGprMk5pQTBOQzQ0TjJnME55NDVNemxqTFRNd0xqZzFNaTAzTUM0d016WXRPVEl1TVRZMExURXlNeTQyTVRndE1UWTNMakUyTkMweE5ETXVPVGN5SURVdU56WTFJRFl1TURBMElERXhMak13TXlBeE1pNHpPQ0F4Tmk0MU9UTWdNVGt1TVRNMUlERTNMams1TWlBeU1pNDVOeklnTXpJdU9EYzNJRFE1TGpnek55QTBOQzR6TlRJZ056a3VPVGMxZWlJdlBqeHdZWFJvSUdROUltMHlOekVnTUhZeE5USXVPVEEzYURVMUxqVXdOR00wTGpFd055MHhOUzQ0TmpJZ01UUXVOVGM0TFRJNUxqRTRJREk0TGpVd05TMHpOeTR3T0RrdE1UUXVPREEyTFRNM0xqYzVOeTAwTUM0ME5ERXRPRFl1TURRMUxUZzBMakF3T1MweE1UVXVPREU0ZWlJdlBqeHdZWFJvSUdROUltMHhNekl1TURJNUlEazNMalUxTW1NeE5DNDFOelF0TXpRdU9ETTBJRE16TGpjMU55MDJOQzQyTmpnZ05UWXVOelk0TFRnNExqWXlMVGMxTGpBd015QXlNQzR6TlRRdE1UTTJMak14T1NBM015NDVNell0TVRZM0xqRTNNaUF4TkRNdU9UYzFhRGt5TGpNek9HTTBMamN4TXkweE9TNHpJREV3TGpjMU5DMHpOeTQ0TnpnZ01UZ3VNRFkyTFRVMUxqTTFOWG9pTHo0OEwyYytQQzl6ZG1jK1wiIl0sInNvdXJjZVJvb3QiOiIifQ==