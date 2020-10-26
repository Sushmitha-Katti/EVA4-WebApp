webpackHotUpdate_N_E("pages/sentimental_analysis",{

/***/ "./components/sentiment-compo.js":
/*!***************************************!*\
  !*** ./components/sentiment-compo.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_endpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api_endpoints */ "./api_endpoints.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");



var _this = undefined,
    _jsxFileName = "G:\\Projects\\EVA-Web\\components\\sentiment-compo.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Sentiment = function Sentiment() {
  _s();

  axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers.post["Content-Type"] = "application/json";
  axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers.post["Accept"] = "application/json";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      text = _useState[0],
      setText = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showLoading = _useState2[0],
      setShowLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      uploadPercentage = _useState3[0],
      setUploadPercentage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      results = _useState4[0],
      setResults = _useState4[1];

  var recognise = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _results;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setShowLoading(true); // request recognisation from end-point

              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(_api_endpoints__WEBPACK_IMPORTED_MODULE_4__["SENTIMENTAL_ANALYSIS_ENDPOINT"]), {
                'data': text
              }, {
                crossDomain: true
              });

            case 4:
              _results = _context.sent;
              setResults(_results.data);
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              setResults({});
              alert(JSON.stringify(_context.t0));

            case 12:
              // we are done, now turn off the loading and progress bar
              setShowLoading(false); // reset the states

              setTimeout(function () {
                setUploadPercentage(0);
              }, 5000);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function recognise() {
      return _ref.apply(this, arguments);
    };
  }();

  var onText = function onText(e) {
    if (e.target.value) {
      setText(e.target.value);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 10
    }
  }, __jsx("h1", {
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 10
    }
  }, "Sentimental Anaysis"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 10
    }
  }), __jsx("div", {
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 10
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 16
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, "This is a sentiment analysis model trained on the IMDb reviews dataset. The model can predict whether a given movie review is positive or negative."))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 10
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-md-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: 4,
    lg: 4,
    className: "mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 22
    }
  }, !(Object.entries(results).length === 0 && results.constructor === Object) && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
    style: {
      textAlign: "center"
    },
    variant: "dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 26
    }
  }, results['Status'] == 0 ? __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 104
    }
  }, results['Message']) : __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 144
    }
  }, "It is  ", results['Predicted_Class'])))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-md-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 12
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "dark",
    className: "mt-5",
    hidden: !showLoading,
    disabled: true,
    block: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 22
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
    as: "span",
    animation: "grow",
    size: "sm",
    role: "status",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 26
    }
  }), " ", "Loading...")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-md-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 12
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 14
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 26
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 30
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 34
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 38
    }
  }, "Enter Movie Review")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 34
    }
  }, "It should be atleast 5 letter word")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
    type: "text",
    onChange: onText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 30
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 18
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 18
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "dark",
    className: "mx-auto shadow-lg",
    size: "lg",
    onClick: function onClick() {
      return recognise();
    },
    disabled: text.length < 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 22
    }
  }, "Predict Sentiment!")))))));
};

_s(Sentiment, "WY+/O7TBK0I2LdWOAIxmHfKvSiE=");

_c = Sentiment;
/* harmony default export */ __webpack_exports__["default"] = (Sentiment);

var _c;

$RefreshReg$(_c, "Sentiment");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZW50aW1lbnQtY29tcG8uanMiXSwibmFtZXMiOlsiU2VudGltZW50IiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJwb3N0IiwidXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsInNob3dMb2FkaW5nIiwic2V0U2hvd0xvYWRpbmciLCJ1cGxvYWRQZXJjZW50YWdlIiwic2V0VXBsb2FkUGVyY2VudGFnZSIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwicmVjb2duaXNlIiwiU0VOVElNRU5UQUxfQU5BTFlTSVNfRU5EUE9JTlQiLCJjcm9zc0RvbWFpbiIsImRhdGEiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRUaW1lb3V0Iiwib25UZXh0IiwiZSIsInRhcmdldCIsInZhbHVlIiwidGV4dEFsaWduIiwiT2JqZWN0IiwiZW50cmllcyIsImxlbmd0aCIsImNvbnN0cnVjdG9yIiwiUm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBWUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUVwQkMsOENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxJQUF2QixDQUE0QixjQUE1QixJQUE4QyxrQkFBOUM7QUFDQUgsOENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxJQUF2QixDQUE0QixRQUE1QixJQUF3QyxrQkFBeEM7O0FBSG9CLGtCQUlLQyxzREFBUSxDQUFDLEVBQUQsQ0FKYjtBQUFBLE1BSVpDLElBSlk7QUFBQSxNQUlOQyxPQUpNOztBQUFBLG1CQU1tQkYsc0RBQVEsQ0FBQyxLQUFELENBTjNCO0FBQUEsTUFNWkcsV0FOWTtBQUFBLE1BTUNDLGNBTkQ7O0FBQUEsbUJBTzZCSixzREFBUSxDQUFDLENBQUQsQ0FQckM7QUFBQSxNQU9aSyxnQkFQWTtBQUFBLE1BT01DLG1C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QUEsMENBSkosQ0FESixFQU9JLE1BQUMsb0RBQUQsQ0FBTSxPQUFOO0FBQWMsUUFBSSxFQUFDLE1BQW5CO0FBQTBCLFlBQVEsRUFBSVQsTUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLENBRlgsRUFlRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkgsRUFnQkcsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUNJLFdBQU8sRUFBQyxNQURaO0FBRUksYUFBUyxFQUFDLG1CQUZkO0FBR0ksUUFBSSxFQUFDLElBSFQ7QUFJSSxXQUFPLEVBQUU7QUFBQSxhQUFNUixTQUFTLEVBQWY7QUFBQSxLQUpiO0FBS0ksWUFBUSxFQUFFUixJQUFJLENBQUN1QixNQUFMLEdBQWMsQ0FMNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixDQWhCSCxDQURELENBRkYsQ0FwQ0YsQ0FGRixDQURGO0FBc0ZKLENBeklEOztHQUFNN0IsUzs7S0FBQUEsUztBQTJJV0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VudGltZW50YWxfYW5hbHlzaXMuMjBkYTNhMzZkZGQzOWM2MjcwOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1NFTlRJTUVOVEFMX0FOQUxZU0lTX0VORFBPSU5UIH0gZnJvbSBcIi4uL2FwaV9lbmRwb2ludHNcIjtcclxuaW1wb3J0IHtcclxuICAgIENvbnRhaW5lcixcclxuICAgIEZvcm0sXHJcbiAgICBSb3csXHJcbiAgICBDb2wsXHJcbiAgICBCdXR0b24sXHJcbiAgICBTcGlubmVyLFxyXG4gICAgVG9hc3QsXHJcbiAgICBQcm9ncmVzc0JhcixcclxuICAgIEltYWdlLFxyXG4gICAgQWxlcnRcclxufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmNvbnN0IFNlbnRpbWVudCA9ICgpID0+IHtcclxuXHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFtcIkFjY2VwdFwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xyXG4gICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgXHJcbiAgICAgY29uc3QgW3Nob3dMb2FkaW5nLCBzZXRTaG93TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgY29uc3QgW3VwbG9hZFBlcmNlbnRhZ2UsIHNldFVwbG9hZFBlcmNlbnRhZ2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgICAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoe30pO1xyXG4gXHJcbiAgICAgY29uc3QgcmVjb2duaXNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBzZXRTaG93TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgIFxyXG4gXHJcbiAgICAgICAgICAgICAvLyByZXF1ZXN0IHJlY29nbmlzYXRpb24gZnJvbSBlbmQtcG9pbnRcclxuICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgIGAke1NFTlRJTUVOVEFMX0FOQUxZU0lTX0VORFBPSU5UfWAsXHJcbiAgICAgICAgICAgICAgICAgeydkYXRhJyA6IHRleHR9LFxyXG4gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgY3Jvc3NEb21haW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBzZXRSZXN1bHRzKHJlc3VsdHMuZGF0YSk7XHJcbiAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICBcclxuICAgICAgICAgICAgIHNldFJlc3VsdHMoe30pO1xyXG4gICAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgIC8vIHdlIGFyZSBkb25lLCBub3cgdHVybiBvZmYgdGhlIGxvYWRpbmcgYW5kIHByb2dyZXNzIGJhclxyXG4gICAgICAgICBzZXRTaG93TG9hZGluZyhmYWxzZSk7XHJcbiBcclxuICAgICAgICAgLy8gcmVzZXQgdGhlIHN0YXRlc1xyXG4gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgIHNldFVwbG9hZFBlcmNlbnRhZ2UoMCk7XHJcbiAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgIH07XHJcbiBcclxuICAgICBjb25zdCBvblRleHQgPSAoZSkgPT4ge1xyXG4gICAgICAgICBpZihlLnRhcmdldC52YWx1ZSl7XHJcbiAgICAgICAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICB9O1xyXG4gXHJcbiAgICAgcmV0dXJuIChcclxuICAgICAgIDw+XHJcbiAgICAgIFxyXG4gICAgICAgICA8Q29udGFpbmVyPlxyXG4gICBcclxuICAgICAgICAgPGgxIHN0eWxlID0ge3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlNlbnRpbWVudGFsIEFuYXlzaXM8L2gxPlxyXG4gICAgICAgICA8YnIvPlxyXG4gICAgICAgICA8ZGl2IHN0eWxlID0ge3t0ZXh0QWxpZ246J2NlbnRlcid9fSA+XHJcbiAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+VGhpcyBpcyBhIHNlbnRpbWVudCBhbmFseXNpcyBtb2RlbCB0cmFpbmVkIG9uIHRoZSBJTURiIHJldmlld3MgZGF0YXNldC4gVGhlIG1vZGVsIGNhbiBwcmVkaWN0IHdoZXRoZXIgYSBnaXZlbiBtb3ZpZSByZXZpZXcgaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmUuPC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGJyLz5cclxuICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezR9IGxnPXs0fSBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgeyEoT2JqZWN0LmVudHJpZXMocmVzdWx0cykubGVuZ3RoID09PSAwICYmIHJlc3VsdHMuY29uc3RydWN0b3IgPT09IE9iamVjdCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgc3R5bGUgPSB7e3RleHRBbGlnbjpcImNlbnRlclwifX0gIHZhcmlhbnQ9J2RhcmsnPntyZXN1bHRzWydTdGF0dXMnXT09MCA/IDxzdHJvbmc+e3Jlc3VsdHNbJ01lc3NhZ2UnXX08L3N0cm9uZz4gOiA8c3Ryb25nPkl0IGlzICB7cmVzdWx0c1snUHJlZGljdGVkX0NsYXNzJ119PC9zdHJvbmc+fTwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICA8Um93ICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXshc2hvd0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tcclxuICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImdyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy4uLlxyXG4gICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCIgPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPENvbCB4cyA9IHs2fT5cclxuICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RW50ZXIgTW92aWUgUmV2aWV3PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkl0IHNob3VsZCBiZSBhdGxlYXN0IDUgbGV0dGVyIHdvcmQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBvbkNoYW5nZSA9IHtvblRleHR9IC8+XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gc2hhZG93LWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZWNvZ25pc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0ZXh0Lmxlbmd0aCA8IDYgfVxyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBQcmVkaWN0IFNlbnRpbWVudCFcclxuICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICA8Lz5cclxuICAgICApO1xyXG4gIFxyXG4gICAgIFxyXG4gICBcclxuICAgXHJcbiBcclxuIFxyXG5cclxufVxyXG4gICAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgU2VudGltZW50Il0sInNvdXJjZVJvb3QiOiIifQ==