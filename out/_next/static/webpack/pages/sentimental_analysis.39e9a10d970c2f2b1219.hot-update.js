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
      lineNumber: 80,
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
      lineNumber: 81,
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
      lineNumber: 88,
      columnNumber: 26
    }
  }), " ", "Loading...")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-md-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 12
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 14
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 26
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 30
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 34
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 38
    }
  }, "Enter Movie Review")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 34
    }
  }, "It should be atleast 5 letter word")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
    type: "text",
    onChange: onText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 30
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 18
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 118,
      columnNumber: 22
    }
  }, "Predict Sentiment!")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-md-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 18
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: 4,
    lg: 4,
    className: "mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
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
      lineNumber: 133,
      columnNumber: 26
    }
  }, results['Status'] == 0 ? __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 104
    }
  }, results['Message']) : __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 144
    }
  }, "Sentiment of the review is  ", results['data'] > 0.6 ? 'Postive' : results['data'] < 4.5 ? 'Negative' : 'Neutral')))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZW50aW1lbnQtY29tcG8uanMiXSwibmFtZXMiOlsiU2VudGltZW50IiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJwb3N0IiwidXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsInNob3dMb2FkaW5nIiwic2V0U2hvd0xvYWRpbmciLCJ1cGxvYWRQZXJjZW50YWdlIiwic2V0VXBsb2FkUGVyY2VudGFnZSIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwicmVjb2duaXNlIiwiU0VOVElNRU5UQUxfQU5BTFlTSVNfRU5EUE9JTlQiLCJjcm9zc0RvbWFpbiIsImRhdGEiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRUaW1lb3V0Iiwib25UZXh0IiwiZSIsInRhcmdldCIsInZhbHVlIiwidGV4dEFsaWduIiwiUm93IiwibGVuZ3RoIiwiT2JqZWN0IiwiZW50cmllcyIsImNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBWUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUVwQkMsOENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxJQUF2QixDQUE0QixjQUE1QixJQUE4QyxrQkFBOUM7QUFDQUgsOENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxJQUF2QixDQUE0QixRQUE1QixJQUF3QyxrQkFBeEM7O0FBSG9CLGtCQUlLQyxzREFBUSxDQUFDLEVBQUQsQ0FKYjtBQUFBLE1BSVpDLElBSlk7QUFBQSxNQUlOQyxPQUpNOztBQUFBLG1CQU1tQkYsc0RBQVEsQ0FBQyxLQUFELENBTjNCO0FBQUEsTUFNWkcsV0FOWTtBQUFBLE1BTUNDLGNBTkQ7O0FBQUEsbUJBTzZCSixzREFBUSxDQUFDLENBQUQsQ0FQckM7QUFBQSxNQU9aSyxnQkFQWTtBQUFBLE1BT01DLG1CQVBOOztBQUFBLG1CQVFXTixzREFBUSxDQUFDLEVBQUQsQ0FSbkI7QUFBQSxNQVFaTyxPQVJZO0FBQUEsTUFRSEMsVUFSRzs7QUFVbkIsTUFBTUMsU0FBUztBQUFBLGdNQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdWTCw0QkFBYyxDQUFDLElBQUQsQ0FBZCxDQUhVLENBTVY7O0FBTlU7QUFBQSxxQkFPWVIsNENBQUssQ0FBQ0csSUFBTixXQUNmVyw0RUFEZSxHQUVsQjtBQUFDLHdCQUFTVDtBQUFWLGVBRmtCLEVBR2xCO0FBQ0lVLDJCQUFXLEVBQUU7QUFEakIsZUFIa0IsQ0FQWjs7QUFBQTtBQU9KSixzQkFQSTtBQWVWQyx3QkFBVSxDQUFDRCxRQUFPLENBQUNLLElBQVQsQ0FBVjtBQWZVO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBa0JWSix3QkFBVSxDQUFDLEVBQUQsQ0FBVjtBQUNBSyxtQkFBSyxDQUFDQyxJQUFJLENBQUNDLFNBQUwsYUFBRCxDQUFMOztBQW5CVTtBQXlCZDtBQUNBWCw0QkFBYyxDQUFDLEtBQUQsQ0FBZCxDQTFCYyxDQTRCZDs7QUFDQVksd0JBQVUsQ0FBQyxZQUFNO0FBQ2JWLG1DQUFtQixDQUFDLENBQUQsQ0FBbkI7QUFDSCxlQUZTLEVBRVAsSUFGTyxDQUFWOztBQTdCYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFURyxTQUFTO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBa0NBLE1BQU1RLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLENBQUQsRUFBTztBQUNsQixRQUFHQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBWixFQUFrQjtBQUNqQmxCLGFBQU8sQ0FBQ2dCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVA7QUFDQTtBQUVKLEdBTEQ7O0FBT0EsU0FDRSxtRUFFRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQTtBQUFJLFNBQUssRUFBSTtBQUFDQyxlQUFTLEVBQUM7QUFBWCxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkEsRUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEEsRUFJQTtBQUFLLFNBQUssRUFBSTtBQUFDQSxlQUFTLEVBQUM7QUFBWCxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwySkFBSCxDQUROLENBSkEsRUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkEsRUFVRSxNQUFDLG1EQUFEO0FBQU0sYUFBUyxFQUFDLDJCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1UsTUFBQyxzREFBRDtBQUNJLFdBQU8sRUFBQyxNQURaO0FBRUksYUFBUyxFQUFDLE1BRmQ7QUFHSSxVQUFNLEVBQUUsQ0FBQ2xCLFdBSGI7QUFJSSxZQUFRLE1BSlo7QUFLSSxTQUFLLE1BTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9JLE1BQUMsdURBQUQ7QUFDSSxNQUFFLEVBQUMsTUFEUDtBQUVJLGFBQVMsRUFBQyxNQUZkO0FBR0ksUUFBSSxFQUFDLElBSFQ7QUFJSSxRQUFJLEVBQUMsUUFKVDtBQUtJLG1CQUFZLE1BTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQWFPLEdBYlAsZUFEVixDQVZGLEVBNEJFLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUksQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVcsTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBWSxNQUFFLEVBQUVtQixtREFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixDQURKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FKSixDQURKLEVBT0ksTUFBQyxvREFBRCxDQUFNLE9BQU47QUFBYyxRQUFJLEVBQUMsTUFBbkI7QUFBMEIsWUFBUSxFQUFJTCxNQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosQ0FGWCxFQWVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmSCxFQWdCRyxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQ0ksV0FBTyxFQUFDLE1BRFo7QUFFSSxhQUFTLEVBQUMsbUJBRmQ7QUFHSSxRQUFJLEVBQUMsSUFIVDtBQUlJLFdBQU8sRUFBRTtBQUFBLGFBQU1SLFNBQVMsRUFBZjtBQUFBLEtBSmI7QUFLSSxZQUFRLEVBQUVSLElBQUksQ0FBQ3NCLE1BQUwsR0FBYyxDQUw1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLENBaEJILEVBMkJHLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRSxDQUFoQjtBQUFtQixhQUFTLEVBQUMsU0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVLLEVBQUVDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlbEIsT0FBZixFQUF3QmdCLE1BQXhCLEtBQW1DLENBQW5DLElBQXdDaEIsT0FBTyxDQUFDbUIsV0FBUixLQUF3QkYsTUFBbEUsS0FFRCxNQUFDLHFEQUFEO0FBQU8sU0FBSyxFQUFJO0FBQUNILGVBQVMsRUFBQztBQUFYLEtBQWhCO0FBQXVDLFdBQU8sRUFBQyxNQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVEZCxPQUFPLENBQUMsUUFBRCxDQUFQLElBQW1CLENBQW5CLEdBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU0EsT0FBTyxDQUFDLFNBQUQsQ0FBaEIsQ0FBdkIsR0FBK0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FBcUNBLE9BQU8sQ0FBQyxNQUFELENBQVAsR0FBa0IsR0FBbEIsR0FBd0IsU0FBeEIsR0FBb0NBLE9BQU8sQ0FBQyxNQUFELENBQVAsR0FBa0IsR0FBbEIsR0FBd0IsVUFBeEIsR0FBcUMsU0FBOUcsQ0FBdEgsQ0FKSixDQURKLENBM0JILENBREQsQ0FGRixDQTVCRixDQUZGLENBREY7QUF1RkosQ0ExSUQ7O0dBQU1aLFM7O0tBQUFBLFM7QUE0SVdBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlbnRpbWVudGFsX2FuYWx5c2lzLjM5ZTlhMTBkOTcwYzJmMmIxMjE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtTRU5USU1FTlRBTF9BTkFMWVNJU19FTkRQT0lOVCB9IGZyb20gXCIuLi9hcGlfZW5kcG9pbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBDb250YWluZXIsXHJcbiAgICBGb3JtLFxyXG4gICAgUm93LFxyXG4gICAgQ29sLFxyXG4gICAgQnV0dG9uLFxyXG4gICAgU3Bpbm5lcixcclxuICAgIFRvYXN0LFxyXG4gICAgUHJvZ3Jlc3NCYXIsXHJcbiAgICBJbWFnZSxcclxuICAgIEFsZXJ0XHJcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5jb25zdCBTZW50aW1lbnQgPSAoKSA9PiB7XHJcblxyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0W1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbXCJBY2NlcHRcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcclxuICAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIFxyXG4gICAgIGNvbnN0IFtzaG93TG9hZGluZywgc2V0U2hvd0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgIGNvbnN0IFt1cGxvYWRQZXJjZW50YWdlLCBzZXRVcGxvYWRQZXJjZW50YWdlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKHt9KTtcclxuIFxyXG4gICAgIGNvbnN0IHJlY29nbmlzZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgc2V0U2hvd0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICBcclxuIFxyXG4gICAgICAgICAgICAgLy8gcmVxdWVzdCByZWNvZ25pc2F0aW9uIGZyb20gZW5kLXBvaW50XHJcbiAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgICBgJHtTRU5USU1FTlRBTF9BTkFMWVNJU19FTkRQT0lOVH1gLFxyXG4gICAgICAgICAgICAgICAgIHsnZGF0YScgOiB0ZXh0fSxcclxuICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNyb3NzRG9tYWluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgc2V0UmVzdWx0cyhyZXN1bHRzLmRhdGEpO1xyXG4gICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgXHJcbiAgICAgICAgICAgICBzZXRSZXN1bHRzKHt9KTtcclxuICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGUpKTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAvLyB3ZSBhcmUgZG9uZSwgbm93IHR1cm4gb2ZmIHRoZSBsb2FkaW5nIGFuZCBwcm9ncmVzcyBiYXJcclxuICAgICAgICAgc2V0U2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gXHJcbiAgICAgICAgIC8vIHJlc2V0IHRoZSBzdGF0ZXNcclxuICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICBzZXRVcGxvYWRQZXJjZW50YWdlKDApO1xyXG4gICAgICAgICB9LCA1MDAwKTtcclxuICAgICB9O1xyXG4gXHJcbiAgICAgY29uc3Qgb25UZXh0ID0gKGUpID0+IHtcclxuICAgICAgICAgaWYoZS50YXJnZXQudmFsdWUpe1xyXG4gICAgICAgICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgfTtcclxuIFxyXG4gICAgIHJldHVybiAoXHJcbiAgICAgICA8PlxyXG4gICAgICBcclxuICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgXHJcbiAgICAgICAgIDxoMSBzdHlsZSA9IHt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5TZW50aW1lbnRhbCBBbmF5c2lzPC9oMT5cclxuICAgICAgICAgPGJyLz5cclxuICAgICAgICAgPGRpdiBzdHlsZSA9IHt7dGV4dEFsaWduOidjZW50ZXInfX0gPlxyXG4gICAgICAgICAgICAgICA8cD48c3Ryb25nPlRoaXMgaXMgYSBzZW50aW1lbnQgYW5hbHlzaXMgbW9kZWwgdHJhaW5lZCBvbiB0aGUgSU1EYiByZXZpZXdzIGRhdGFzZXQuIFRoZSBtb2RlbCBjYW4gcHJlZGljdCB3aGV0aGVyIGEgZ2l2ZW4gbW92aWUgcmV2aWV3IGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlLjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxici8+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgIDxSb3cgIGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49eyFzaG93TG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwiZ3Jvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8Q29sIHhzID0gezZ9PlxyXG4gICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FbnRlciBNb3ZpZSBSZXZpZXc8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SXQgc2hvdWxkIGJlIGF0bGVhc3QgNSBsZXR0ZXIgd29yZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlID0ge29uVGV4dH0gLz5cclxuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBzaGFkb3ctbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlY29nbmlzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RleHQubGVuZ3RoIDwgNiB9XHJcbiAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFByZWRpY3QgU2VudGltZW50IVxyXG4gICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17NH0gbGc9ezR9IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7IShPYmplY3QuZW50cmllcyhyZXN1bHRzKS5sZW5ndGggPT09IDAgJiYgcmVzdWx0cy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCBzdHlsZSA9IHt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fSAgdmFyaWFudD0nZGFyayc+e3Jlc3VsdHNbJ1N0YXR1cyddPT0wID8gPHN0cm9uZz57cmVzdWx0c1snTWVzc2FnZSddfTwvc3Ryb25nPiA6IDxzdHJvbmc+U2VudGltZW50IG9mIHRoZSByZXZpZXcgaXMgIHtyZXN1bHRzWydkYXRhJ10gPiAwLjYgPyAnUG9zdGl2ZScgOiByZXN1bHRzWydkYXRhJ10gPCA0LjUgPyAnTmVnYXRpdmUnIDogJ05ldXRyYWwnfTwvc3Ryb25nPn08L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICA8Lz5cclxuICAgICApO1xyXG4gIFxyXG4gICAgIFxyXG4gICBcclxuICAgXHJcbiBcclxuIFxyXG5cclxufVxyXG4gICAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgU2VudGltZW50Il0sInNvdXJjZVJvb3QiOiIifQ==