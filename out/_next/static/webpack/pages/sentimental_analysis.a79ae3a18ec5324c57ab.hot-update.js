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
  }, "Predict Sentiment!")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 18
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-md-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 18
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: 12,
    lg: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
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
      lineNumber: 134,
      columnNumber: 26
    }
  }, results['Status'] == 0 ? __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 104
    }
  }, results['Message']) : __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 144
    }
  }, "Sentiment of the review is  ", __jsx("strong", {
    style: {
      color: results['data'] > 0.6 ? 'green' : results['data'] < 0.4 ? 'red' : 'orange'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 180
    }
  }, results['data'] > 0.6 ? 'Positive' : results['data'] < 0.4 ? 'Negative' : 'Neutral'))))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZW50aW1lbnQtY29tcG8uanMiXSwibmFtZXMiOlsiU2VudGltZW50IiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJwb3N0IiwidXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsInNob3dMb2FkaW5nIiwic2V0U2hvd0xvYWRpbmciLCJ1cGxvYWRQZXJjZW50YWdlIiwic2V0VXBsb2FkUGVyY2VudGFnZSIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwicmVjb2duaXNlIiwiU0VOVElNRU5UQUxfQU5BTFlTSVNfRU5EUE9JTlQiLCJjcm9zc0RvbWFpbiIsImRhdGEiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRUaW1lb3V0Iiwib25UZXh0IiwiZSIsInRhcmdldCIsInZhbHVlIiwidGV4dEFsaWduIiwiUm93IiwibGVuZ3RoIiwiT2JqZWN0IiwiZW50cmllcyIsImNvbnN0cnVjdG9yIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFZQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBRXBCQyw4Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLElBQXZCLENBQTRCLGNBQTVCLElBQThDLGtCQUE5QztBQUNBSCw4Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLElBQXZCLENBQTRCLFFBQTVCLElBQXdDLGtCQUF4Qzs7QUFIb0Isa0JBSUtDLHNEQUFRLENBQUMsRUFBRCxDQUpiO0FBQUEsTUFJWkMsSUFKWTtBQUFBLE1BSU5DLE9BSk07O0FBQUEsbUJBTW1CRixzREFBUSxDQUFDLEtBQUQsQ0FOM0I7QUFBQSxNQU1aRyxXQU5ZO0FBQUEsTUFNQ0MsY0FORDs7QUFBQSxtQkFPNkJKLHNEQUFRLENBQUMsQ0FBRCxDQVByQztBQUFBLE1BT1pLLGdCQVBZO0FBQUEsTUFPTUMsbUJBUE47O0FBQUEsbUJBUVdOLHNEQUFRLENBQUMsRUFBRCxDQVJuQjtBQUFBLE1BUVpPLE9BUlk7QUFBQSxNQVFIQyxVQVJHOztBQVVuQixNQUFNQyxTQUFTO0FBQUEsZ01BQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR1ZMLDRCQUFjLENBQUMsSUFBRCxDQUFkLENBSFUsQ0FNVjs7QUFOVTtBQUFBLHFCQU9ZUiw0Q0FBSyxDQUFDRyxJQUFOLFdBQ2ZXLDRFQURlLEdBRWxCO0FBQUMsd0JBQVNUO0FBQVYsZUFGa0IsRUFHbEI7QUFDSVUsMkJBQVcsRUFBRTtBQURqQixlQUhrQixDQVBaOztBQUFBO0FBT0pKLHNCQVBJO0FBZVZDLHdCQUFVLENBQUNELFFBQU8sQ0FBQ0ssSUFBVCxDQUFWO0FBZlU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFrQlZKLHdCQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FLLG1CQUFLLENBQUNDLElBQUksQ0FBQ0MsU0FBTCxhQUFELENBQUw7O0FBbkJVO0FBeUJkO0FBQ0FYLDRCQUFjLENBQUMsS0FBRCxDQUFkLENBMUJjLENBNEJkOztBQUNBWSx3QkFBVSxDQUFDLFlBQU07QUFDYlYsbUNBQW1CLENBQUMsQ0FBRCxDQUFuQjtBQUNILGVBRlMsRUFFUCxJQUZPLENBQVY7O0FBN0JjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVRHLFNBQVM7QUFBQTtBQUFBO0FBQUEsS0FBZjs7QUFrQ0EsTUFBTVEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ2xCLFFBQUdBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFaLEVBQWtCO0FBQ2pCbEIsYUFBTyxDQUFDZ0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUNBO0FBRUosR0FMRDs7QUFPQSxTQUNFLG1FQUVFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVBO0FBQUksU0FBSyxFQUFJO0FBQUNDLGVBQVMsRUFBQztBQUFYLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGQSxFQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIQSxFQUlBO0FBQUssU0FBSyxFQUFJO0FBQUNBLGVBQVMsRUFBQztBQUFYLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJKQUFILENBRE4sQ0FKQSxFQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSQSxFQVVFLE1BQUMsbURBQUQ7QUFBTSxhQUFTLEVBQUMsMkJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDVSxNQUFDLHNEQUFEO0FBQ0ksV0FBTyxFQUFDLE1BRFo7QUFFSSxhQUFTLEVBQUMsTUFGZDtBQUdJLFVBQU0sRUFBRSxDQUFDbEIsV0FIYjtBQUlJLFlBQVEsTUFKWjtBQUtJLFNBQUssTUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0ksTUFBQyx1REFBRDtBQUNJLE1BQUUsRUFBQyxNQURQO0FBRUksYUFBUyxFQUFDLE1BRmQ7QUFHSSxRQUFJLEVBQUMsSUFIVDtBQUlJLFFBQUksRUFBQyxRQUpUO0FBS0ksbUJBQVksTUFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBYU8sR0FiUCxlQURWLENBVkYsRUE0QkUsTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBSSxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFVyxNQUFDLG9EQUFELENBQU0sS0FBTjtBQUFZLE1BQUUsRUFBRW1CLG1EQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUpKLENBREosRUFPSSxNQUFDLG9EQUFELENBQU0sT0FBTjtBQUFjLFFBQUksRUFBQyxNQUFuQjtBQUEwQixZQUFRLEVBQUlMLE1BQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQUZYLEVBZUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZILEVBZ0JHLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFDSSxXQUFPLEVBQUMsTUFEWjtBQUVJLGFBQVMsRUFBQyxtQkFGZDtBQUdJLFFBQUksRUFBQyxJQUhUO0FBSUksV0FBTyxFQUFFO0FBQUEsYUFBTVIsU0FBUyxFQUFmO0FBQUEsS0FKYjtBQUtJLFlBQVEsRUFBRVIsSUFBSSxDQUFDc0IsTUFBTCxHQUFjLENBTDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosQ0FoQkgsRUEyQkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCSCxFQTRCRyxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVLLEVBQUVDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlbEIsT0FBZixFQUF3QmdCLE1BQXhCLEtBQW1DLENBQW5DLElBQXdDaEIsT0FBTyxDQUFDbUIsV0FBUixLQUF3QkYsTUFBbEUsS0FFRCxNQUFDLHFEQUFEO0FBQU8sU0FBSyxFQUFJO0FBQUNILGVBQVMsRUFBQztBQUFYLEtBQWhCO0FBQXVDLFdBQU8sRUFBQyxNQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVEZCxPQUFPLENBQUMsUUFBRCxDQUFQLElBQW1CLENBQW5CLEdBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU0EsT0FBTyxDQUFDLFNBQUQsQ0FBaEIsQ0FBdkIsR0FBK0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FBb0M7QUFBUSxTQUFLLEVBQUk7QUFBRW9CLFdBQUssRUFBSXBCLE9BQU8sQ0FBQyxNQUFELENBQVAsR0FBa0IsR0FBbEIsR0FBd0IsT0FBeEIsR0FBa0NBLE9BQU8sQ0FBQyxNQUFELENBQVAsR0FBa0IsR0FBbEIsR0FBd0IsS0FBeEIsR0FBZ0M7QUFBN0UsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEyR0EsT0FBTyxDQUFDLE1BQUQsQ0FBUCxHQUFrQixHQUFsQixHQUF3QixVQUF4QixHQUFxQ0EsT0FBTyxDQUFDLE1BQUQsQ0FBUCxHQUFrQixHQUFsQixHQUF3QixVQUF4QixHQUFxQyxTQUFyTCxDQUFwQyxDQUF0SCxDQUpKLENBREosQ0E1QkgsQ0FERCxDQUZGLENBNUJGLENBRkYsQ0FERjtBQXdGSixDQTNJRDs7R0FBTVosUzs7S0FBQUEsUztBQTZJV0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VudGltZW50YWxfYW5hbHlzaXMuYTc5YWUzYTE4ZWM1MzI0YzU3YWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1NFTlRJTUVOVEFMX0FOQUxZU0lTX0VORFBPSU5UIH0gZnJvbSBcIi4uL2FwaV9lbmRwb2ludHNcIjtcclxuaW1wb3J0IHtcclxuICAgIENvbnRhaW5lcixcclxuICAgIEZvcm0sXHJcbiAgICBSb3csXHJcbiAgICBDb2wsXHJcbiAgICBCdXR0b24sXHJcbiAgICBTcGlubmVyLFxyXG4gICAgVG9hc3QsXHJcbiAgICBQcm9ncmVzc0JhcixcclxuICAgIEltYWdlLFxyXG4gICAgQWxlcnRcclxufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmNvbnN0IFNlbnRpbWVudCA9ICgpID0+IHtcclxuXHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFtcIkFjY2VwdFwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xyXG4gICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgXHJcbiAgICAgY29uc3QgW3Nob3dMb2FkaW5nLCBzZXRTaG93TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgY29uc3QgW3VwbG9hZFBlcmNlbnRhZ2UsIHNldFVwbG9hZFBlcmNlbnRhZ2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgICAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoe30pO1xyXG4gXHJcbiAgICAgY29uc3QgcmVjb2duaXNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBzZXRTaG93TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgIFxyXG4gXHJcbiAgICAgICAgICAgICAvLyByZXF1ZXN0IHJlY29nbmlzYXRpb24gZnJvbSBlbmQtcG9pbnRcclxuICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgIGAke1NFTlRJTUVOVEFMX0FOQUxZU0lTX0VORFBPSU5UfWAsXHJcbiAgICAgICAgICAgICAgICAgeydkYXRhJyA6IHRleHR9LFxyXG4gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgY3Jvc3NEb21haW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBzZXRSZXN1bHRzKHJlc3VsdHMuZGF0YSk7XHJcbiAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICBcclxuICAgICAgICAgICAgIHNldFJlc3VsdHMoe30pO1xyXG4gICAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgIC8vIHdlIGFyZSBkb25lLCBub3cgdHVybiBvZmYgdGhlIGxvYWRpbmcgYW5kIHByb2dyZXNzIGJhclxyXG4gICAgICAgICBzZXRTaG93TG9hZGluZyhmYWxzZSk7XHJcbiBcclxuICAgICAgICAgLy8gcmVzZXQgdGhlIHN0YXRlc1xyXG4gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgIHNldFVwbG9hZFBlcmNlbnRhZ2UoMCk7XHJcbiAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgIH07XHJcbiBcclxuICAgICBjb25zdCBvblRleHQgPSAoZSkgPT4ge1xyXG4gICAgICAgICBpZihlLnRhcmdldC52YWx1ZSl7XHJcbiAgICAgICAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICB9O1xyXG4gXHJcbiAgICAgcmV0dXJuIChcclxuICAgICAgIDw+XHJcbiAgICAgIFxyXG4gICAgICAgICA8Q29udGFpbmVyPlxyXG4gICBcclxuICAgICAgICAgPGgxIHN0eWxlID0ge3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlNlbnRpbWVudGFsIEFuYXlzaXM8L2gxPlxyXG4gICAgICAgICA8YnIvPlxyXG4gICAgICAgICA8ZGl2IHN0eWxlID0ge3t0ZXh0QWxpZ246J2NlbnRlcid9fSA+XHJcbiAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+VGhpcyBpcyBhIHNlbnRpbWVudCBhbmFseXNpcyBtb2RlbCB0cmFpbmVkIG9uIHRoZSBJTURiIHJldmlld3MgZGF0YXNldC4gVGhlIG1vZGVsIGNhbiBwcmVkaWN0IHdoZXRoZXIgYSBnaXZlbiBtb3ZpZSByZXZpZXcgaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmUuPC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGJyLz5cclxuICAgICAgICAgXHJcbiAgICAgICAgICAgPFJvdyAgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17IXNob3dMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249XCJncm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuLi5cclxuICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiID5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgIDxDb2wgeHMgPSB7Nn0+XHJcbiAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkVudGVyIE1vdmllIFJldmlldzwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JdCBzaG91bGQgYmUgYXRsZWFzdCA1IGxldHRlciB3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2UgPSB7b25UZXh0fSAvPlxyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIHNoYWRvdy1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVjb2duaXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGV4dC5sZW5ndGggPCA2IH1cclxuICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgUHJlZGljdCBTZW50aW1lbnQhXHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBsZz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHshKE9iamVjdC5lbnRyaWVzKHJlc3VsdHMpLmxlbmd0aCA9PT0gMCAmJiByZXN1bHRzLmNvbnN0cnVjdG9yID09PSBPYmplY3QpICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHN0eWxlID0ge3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19ICB2YXJpYW50PSdkYXJrJz57cmVzdWx0c1snU3RhdHVzJ109PTAgPyA8c3Ryb25nPntyZXN1bHRzWydNZXNzYWdlJ119PC9zdHJvbmc+IDogPHN0cm9uZz5TZW50aW1lbnQgb2YgdGhlIHJldmlldyBpcyAgPHN0cm9uZyBzdHlsZSA9IHt7IGNvbG9yICA6IHJlc3VsdHNbJ2RhdGEnXSA+IDAuNiA/ICdncmVlbicgOiByZXN1bHRzWydkYXRhJ10gPCAwLjQgPyAncmVkJyA6ICdvcmFuZ2UnIH19PntyZXN1bHRzWydkYXRhJ10gPiAwLjYgPyAnUG9zaXRpdmUnIDogcmVzdWx0c1snZGF0YSddIDwgMC40ID8gJ05lZ2F0aXZlJyA6ICdOZXV0cmFsJ308L3N0cm9uZz48L3N0cm9uZz59PC9BbGVydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgPC8+XHJcbiAgICAgKTtcclxuICBcclxuICAgICBcclxuICAgXHJcbiAgIFxyXG4gXHJcbiBcclxuXHJcbn1cclxuICAgIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFNlbnRpbWVudCJdLCJzb3VyY2VSb290IjoiIn0=