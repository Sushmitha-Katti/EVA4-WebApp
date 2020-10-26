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

  axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers.post["Content-Type"] = "multipart/form-data";
  axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers.post["Accept"] = "application/json";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      file = _useState[0],
      setFile = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("Please select an image"),
      fileName = _useState2[0],
      setFileName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      showLoading = _useState3[0],
      setShowLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      uploadPercentage = _useState4[0],
      setUploadPercentage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      results = _useState5[0],
      setResults = _useState5[1];

  var recognise = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var formData, _results;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setShowLoading(true);
              formData = new FormData();
              formData.append("file", file); // request recognisation from end-point

              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(_api_endpoints__WEBPACK_IMPORTED_MODULE_4__["SENTIMENTAL_ANALYSIS_ENDPOINT"]), formData, {
                crossDomain: true
              });

            case 6:
              _results = _context.sent;
              setResults(_results.data);
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              setResults({});
              alert(JSON.stringify(_context.t0));

            case 14:
              // we are done, now turn off the loading and progress bar
              setShowLoading(false); // reset the states

              setTimeout(function () {
                setUploadPercentage(0);
              }, 5000);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function recognise() {
      return _ref.apply(this, arguments);
    };
  }();

  var onText = function onText(e) {
    console.log(e.target);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 10
    }
  }, __jsx("h1", {
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 10
    }
  }, "Sentimental Anaysis"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 10
    }
  }), __jsx("div", {
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 10
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 16
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, "This is a sentiment analysis model trained on the IMDb reviews dataset. The model can predict whether a given movie review is positive or negative."))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 10
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-md-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: 4,
    lg: 4,
    className: "mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
      lineNumber: 82,
      columnNumber: 26
    }
  }, results['Status'] == 0 ? __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 104
    }
  }, results['Message']) : __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 144
    }
  }, "It is  ", results['Predicted_Class'])))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-md-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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
      lineNumber: 87,
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
      lineNumber: 94,
      columnNumber: 26
    }
  }), " ", "Loading...")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-md-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 12
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 14
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 26
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 30
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 34
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 38
    }
  }, "Enter Movie Review"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
    type: "text",
    onChange: onText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 30
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 18
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "mx-auto",
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 22
    }
  }, file.name && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: URL.createObjectURL(file),
    style: {
      width: "200px"
    },
    className: "mx-auto mt-5",
    rounded: true,
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 30
    }
  }))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 18
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 18
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "dark",
    className: "mx-auto shadow-lg",
    size: "lg",
    onClick: function onClick() {
      return recognise();
    },
    disabled: file.name === undefined,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 22
    }
  }, "Predict Sentiment!")))))));
};

_s(Sentiment, "8OMzZzVFdcOC99epuGTgjmcHxJQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZW50aW1lbnQtY29tcG8uanMiXSwibmFtZXMiOlsiU2VudGltZW50IiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJwb3N0IiwidXNlU3RhdGUiLCJmaWxlIiwic2V0RmlsZSIsImZpbGVOYW1lIiwic2V0RmlsZU5hbWUiLCJzaG93TG9hZGluZyIsInNldFNob3dMb2FkaW5nIiwidXBsb2FkUGVyY2VudGFnZSIsInNldFVwbG9hZFBlcmNlbnRhZ2UiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsInJlY29nbmlzZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJTRU5USU1FTlRBTF9BTkFMWVNJU19FTkRQT0lOVCIsImNyb3NzRG9tYWluIiwiZGF0YSIsImFsZXJ0IiwiSlNPTiIsInN0cmluZ2lmeSIsInNldFRpbWVvdXQiLCJvblRleHQiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInRleHRBbGlnbiIsIk9iamVjdCIsImVudHJpZXMiLCJsZW5ndGgiLCJjb25zdHJ1Y3RvciIsIlJvdyIsIm5hbWUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ3aWR0aCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQVlBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFFcEJDLDhDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsSUFBdkIsQ0FBNEIsY0FBNUIsSUFBOEMscUJBQTlDO0FBQ0FILDhDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsSUFBdkIsQ0FBNEIsUUFBNUIsSUFBd0Msa0JBQXhDOztBQUhvQixrQkFJS0Msc0RBQVEsQ0FBQyxFQUFELENBSmI7QUFBQSxNQUlaQyxJQUpZO0FBQUEsTUFJTkMsT0FKTTs7QUFBQSxtQkFLYUYsc0RBQVEs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QUFLSSxZQUFRLEVBQUVWLElBQUksQ0FBQ2dDLElBQUwsS0FBY0ksU0FMNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixDQTNCSCxDQURELENBRkYsQ0FwQ0YsQ0FGRixDQURGO0FBaUdKLENBbEpEOztHQUFNMUMsUzs7S0FBQUEsUztBQW9KV0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VudGltZW50YWxfYW5hbHlzaXMuNjM3OTk1YTBmMTQ2MTM1OGUyNTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1NFTlRJTUVOVEFMX0FOQUxZU0lTX0VORFBPSU5UIH0gZnJvbSBcIi4uL2FwaV9lbmRwb2ludHNcIjtcclxuaW1wb3J0IHtcclxuICAgIENvbnRhaW5lcixcclxuICAgIEZvcm0sXHJcbiAgICBSb3csXHJcbiAgICBDb2wsXHJcbiAgICBCdXR0b24sXHJcbiAgICBTcGlubmVyLFxyXG4gICAgVG9hc3QsXHJcbiAgICBQcm9ncmVzc0JhcixcclxuICAgIEltYWdlLFxyXG4gICAgQWxlcnRcclxufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmNvbnN0IFNlbnRpbWVudCA9ICgpID0+IHtcclxuXHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbXCJDb250ZW50LVR5cGVcIl0gPSBcIm11bHRpcGFydC9mb3JtLWRhdGFcIjtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFtcIkFjY2VwdFwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xyXG4gICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgIGNvbnN0IFtmaWxlTmFtZSwgc2V0RmlsZU5hbWVdID0gdXNlU3RhdGUoXCJQbGVhc2Ugc2VsZWN0IGFuIGltYWdlXCIpO1xyXG4gICAgIGNvbnN0IFtzaG93TG9hZGluZywgc2V0U2hvd0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgIGNvbnN0IFt1cGxvYWRQZXJjZW50YWdlLCBzZXRVcGxvYWRQZXJjZW50YWdlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKHt9KTtcclxuIFxyXG4gICAgIGNvbnN0IHJlY29nbmlzZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgc2V0U2hvd0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuIFxyXG4gICAgICAgICAgICAgLy8gcmVxdWVzdCByZWNvZ25pc2F0aW9uIGZyb20gZW5kLXBvaW50XHJcbiAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgICBgJHtTRU5USU1FTlRBTF9BTkFMWVNJU19FTkRQT0lOVH1gLFxyXG4gICAgICAgICAgICAgICAgIGZvcm1EYXRhLFxyXG4gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgY3Jvc3NEb21haW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgc2V0UmVzdWx0cyhyZXN1bHRzLmRhdGEpO1xyXG4gICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgXHJcbiAgICAgICAgICAgICBzZXRSZXN1bHRzKHt9KTtcclxuICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGUpKTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAvLyB3ZSBhcmUgZG9uZSwgbm93IHR1cm4gb2ZmIHRoZSBsb2FkaW5nIGFuZCBwcm9ncmVzcyBiYXJcclxuICAgICAgICAgc2V0U2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gXHJcbiAgICAgICAgIC8vIHJlc2V0IHRoZSBzdGF0ZXNcclxuICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICBzZXRVcGxvYWRQZXJjZW50YWdlKDApO1xyXG4gICAgICAgICB9LCA1MDAwKTtcclxuICAgICB9O1xyXG4gXHJcbiAgICAgY29uc3Qgb25UZXh0ID0gKGUpID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgICAgICAgIFxyXG4gICAgIH07XHJcbiBcclxuICAgICByZXR1cm4gKFxyXG4gICAgICAgPD5cclxuICAgICAgXHJcbiAgICAgICAgIDxDb250YWluZXI+XHJcbiAgIFxyXG4gICAgICAgICA8aDEgc3R5bGUgPSB7e3RleHRBbGlnbjpcImNlbnRlclwifX0+U2VudGltZW50YWwgQW5heXNpczwvaDE+XHJcbiAgICAgICAgIDxici8+XHJcbiAgICAgICAgIDxkaXYgc3R5bGUgPSB7e3RleHRBbGlnbjonY2VudGVyJ319ID5cclxuICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5UaGlzIGlzIGEgc2VudGltZW50IGFuYWx5c2lzIG1vZGVsIHRyYWluZWQgb24gdGhlIElNRGIgcmV2aWV3cyBkYXRhc2V0LiBUaGUgbW9kZWwgY2FuIHByZWRpY3Qgd2hldGhlciBhIGdpdmVuIG1vdmllIHJldmlldyBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZS48L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8YnIvPlxyXG4gICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17NH0gbGc9ezR9IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7IShPYmplY3QuZW50cmllcyhyZXN1bHRzKS5sZW5ndGggPT09IDAgJiYgcmVzdWx0cy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCBzdHlsZSA9IHt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fSAgdmFyaWFudD0nZGFyayc+e3Jlc3VsdHNbJ1N0YXR1cyddPT0wID8gPHN0cm9uZz57cmVzdWx0c1snTWVzc2FnZSddfTwvc3Ryb25nPiA6IDxzdHJvbmc+SXQgaXMgIHtyZXN1bHRzWydQcmVkaWN0ZWRfQ2xhc3MnXX08L3N0cm9uZz59PC9BbGVydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgIDxSb3cgIGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49eyFzaG93TG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwiZ3Jvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8Q29sIHhzID0gezZ9PlxyXG4gICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FbnRlciBNb3ZpZSBSZXZpZXc8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlID0ge29uVGV4dH0gLz5cclxuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxDb2wgIGNsYXNzTmFtZT1cIm14LWF1dG9cIiBzdHlsZSA9IHt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsZS5uYW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gbXQtNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIHNoYWRvdy1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVjb2duaXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZmlsZS5uYW1lID09PSB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFByZWRpY3QgU2VudGltZW50IVxyXG4gICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICBcclxuICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgIDwvPlxyXG4gICAgICk7XHJcbiAgXHJcbiAgICAgXHJcbiAgIFxyXG4gICBcclxuIFxyXG4gXHJcblxyXG59XHJcbiAgICBcclxuICBleHBvcnQgZGVmYXVsdCBTZW50aW1lbnQiXSwic291cmNlUm9vdCI6IiJ9