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





var faceReco = function faceReco() {
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

_s(faceReco, "8OMzZzVFdcOC99epuGTgjmcHxJQ=");

/* harmony default export */ __webpack_exports__["default"] = (faceReco);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZW50aW1lbnQtY29tcG8uanMiXSwibmFtZXMiOlsiZmFjZVJlY28iLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsInBvc3QiLCJ1c2VTdGF0ZSIsImZpbGUiLCJzZXRGaWxlIiwiZmlsZU5hbWUiLCJzZXRGaWxlTmFtZSIsInNob3dMb2FkaW5nIiwic2V0U2hvd0xvYWRpbmciLCJ1cGxvYWRQZXJjZW50YWdlIiwic2V0VXBsb2FkUGVyY2VudGFnZSIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwicmVjb2duaXNlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIlNFTlRJTUVOVEFMX0FOQUxZU0lTX0VORFBPSU5UIiwiY3Jvc3NEb21haW4iLCJkYXRhIiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0VGltZW91dCIsIm9uVGV4dCIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidGV4dEFsaWduIiwiT2JqZWN0IiwiZW50cmllcyIsImxlbmd0aCIsImNvbnN0cnVjdG9yIiwiUm93IiwibmFtZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpZHRoIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBWUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUVuQkMsOENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxJQUF2QixDQUE0QixjQUE1QixJQUE4QyxxQkFBOUM7QUFDQUgsOENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxJQUF2QixDQUE0QixRQUE1QixJQUF3QyxrQkFBeEM7O0FBSG1CLGtCQUlNQyxzREFBUSxDQUFDLEVBQUQsQ0FKZDtBQUFBLE1BSVhDLElBSlc7QUFBQSxNQUlMQyxPQUpLOztBQUFBLG1CQUtjRixzREFBUSxDQUFDLHdCQUFELENBTHRCO0FBQUEsTUFLWEcsUUFMVztBQUFBLE1BS0RDLFdBTEM7O0FBQUEsbUJBTW9CSixzREFBUSxDQUFDLEtBQUQsQ0FONUI7QUFBQSxNQU1YSyxXQU5XO0FBQUEsTUFNRUMsY0FORjs7QUFBQSxtQkFPOEJOLHNEQUFRLENBQUMsQ0FBRCxDQVB0QztBQUFBLE1BT1hPLGdCQVBXO0FBQUEsTUFPT0MsbUJBUFA7O0FBQUEsbUJBUVlSLHNEQUFRLENBQUMsRUFBRCxDQVJwQjtBQUFBLE1BUVhTLE9BUlc7QUFBQSxNQVFGQyxVQVJFOztBQVVsQixNQUFNQyxTQUFTO0FBQUEsZ01BQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR1ZMLDRCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ01NLHNCQUpJLEdBSU8sSUFBSUMsUUFBSixFQUpQO0FBS1ZELHNCQUFRLENBQUNFLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0JiLElBQXhCLEVBTFUsQ0FPVjs7QUFQVTtBQUFBLHFCQVFZTCw0Q0FBSyxDQUFDRyxJQUFOLFdBQ2ZnQiw0RUFEZSxHQUVsQkgsUUFGa0IsRUFHbEI7QUFDSUksMkJBQVcsRUFBRTtBQURqQixlQUhrQixDQVJaOztBQUFBO0FBUUpQLHNCQVJJO0FBZ0JWQyx3QkFBVSxDQUFDRCxRQUFPLENBQUNRLElBQVQsQ0FBVjtBQWhCVTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQW1CVlAsd0JBQVUsQ0FBQyxFQUFELENBQVY7QUFDQVEsbUJBQUssQ0FBQ0MsSUFBSSxDQUFDQyxTQUFMLGFBQUQsQ0FBTDs7QUFwQlU7QUF5QmQ7QUFDQWQsNEJBQWMsQ0FBQyxLQUFELENBQWQsQ0ExQmMsQ0E0QmQ7O0FBQ0FlLHdCQUFVLENBQUMsWUFBTTtBQUNiYixtQ0FBbUIsQ0FBQyxDQUFELENBQW5CO0FBQ0gsZUFGUyxFQUVQLElBRk8sQ0FBVjs7QUE3QmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVEcsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQWtDQSxNQUFNVyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxDQUFELEVBQU87QUFDbEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFDLENBQUNHLE1BQWQ7QUFFSCxHQUhEOztBQUtBLFNBQ0UsbUVBRUUsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUE7QUFBSSxTQUFLLEVBQUk7QUFBQ0MsZUFBUyxFQUFDO0FBQVgsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZBLEVBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhBLEVBSUE7QUFBSyxTQUFLLEVBQUk7QUFBQ0EsZUFBUyxFQUFDO0FBQVgsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkpBQUgsQ0FETixDQUpBLEVBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJBLEVBU0EsTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1ksTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQVksTUFBRSxFQUFFLENBQWhCO0FBQW1CLGFBQVMsRUFBQyxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUssRUFBRUMsTUFBTSxDQUFDQyxPQUFQLENBQWVwQixPQUFmLEVBQXdCcUIsTUFBeEIsS0FBbUMsQ0FBbkMsSUFBd0NyQixPQUFPLENBQUNzQixXQUFSLEtBQXdCSCxNQUFsRSxLQUVELE1BQUMscURBQUQ7QUFBTyxTQUFLLEVBQUk7QUFBQ0QsZUFBUyxFQUFDO0FBQVgsS0FBaEI7QUFBdUMsV0FBTyxFQUFDLE1BQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdURsQixPQUFPLENBQUMsUUFBRCxDQUFQLElBQW1CLENBQW5CLEdBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU0EsT0FBTyxDQUFDLFNBQUQsQ0FBaEIsQ0FBdkIsR0FBK0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBZ0JBLE9BQU8sQ0FBQyxpQkFBRCxDQUF2QixDQUF0SCxDQUpKLENBRFosQ0FUQSxFQWtCRSxNQUFDLG1EQUFEO0FBQU0sYUFBUyxFQUFDLDJCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1UsTUFBQyxzREFBRDtBQUNJLFdBQU8sRUFBQyxNQURaO0FBRUksYUFBUyxFQUFDLE1BRmQ7QUFHSSxVQUFNLEVBQUUsQ0FBQ0osV0FIYjtBQUlJLFlBQVEsTUFKWjtBQUtJLFNBQUssTUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0ksTUFBQyx1REFBRDtBQUNJLE1BQUUsRUFBQyxNQURQO0FBRUksYUFBUyxFQUFDLE1BRmQ7QUFHSSxRQUFJLEVBQUMsSUFIVDtBQUlJLFFBQUksRUFBQyxRQUpUO0FBS0ksbUJBQVksTUFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBYU8sR0FiUCxlQURWLENBbEJGLEVBb0NFLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUksQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVcsTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBWSxNQUFFLEVBQUUyQixtREFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixDQURKLENBREosRUFNSSxNQUFDLG9EQUFELENBQU0sT0FBTjtBQUFjLFFBQUksRUFBQyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FGWCxFQWFHLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBMEIsU0FBSyxFQUFJO0FBQUNMLGVBQVMsRUFBQztBQUFYLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSzFCLElBQUksQ0FBQ2dDLElBQUwsSUFDRyxNQUFDLHFEQUFEO0FBQ0ksT0FBRyxFQUFFQyxHQUFHLENBQUNDLGVBQUosQ0FBb0JsQyxJQUFwQixDQURUO0FBRUksU0FBSyxFQUFFO0FBQUVtQyxXQUFLLEVBQUU7QUFBVCxLQUZYO0FBR0ksYUFBUyxFQUFDLGNBSGQ7QUFJSSxXQUFPLE1BSlg7QUFLSSxTQUFLLE1BTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZSLENBREosQ0FiSCxFQTBCRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUJILEVBMkJHLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFDSSxXQUFPLEVBQUMsTUFEWjtBQUVJLGFBQVMsRUFBQyxtQkFGZDtBQUdJLFFBQUksRUFBQyxJQUhUO0FBSUksV0FBTyxFQUFFO0FBQUEsYUFBTXpCLFNBQVMsRUFBZjtBQUFBLEtBSmI7QUFLSSxZQUFRLEVBQUVWLElBQUksQ0FBQ2dDLElBQUwsS0FBY0ksU0FMNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixDQTNCSCxDQURELENBRkYsQ0FwQ0YsQ0FGRixDQURGO0FBaUdKLENBbEpEOztHQUFNMUMsUTs7QUFvSldBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlbnRpbWVudGFsX2FuYWx5c2lzLmJhNzEwMWYzNDM5OGY1YjcxNzQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtTRU5USU1FTlRBTF9BTkFMWVNJU19FTkRQT0lOVCB9IGZyb20gXCIuLi9hcGlfZW5kcG9pbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBDb250YWluZXIsXHJcbiAgICBGb3JtLFxyXG4gICAgUm93LFxyXG4gICAgQ29sLFxyXG4gICAgQnV0dG9uLFxyXG4gICAgU3Bpbm5lcixcclxuICAgIFRvYXN0LFxyXG4gICAgUHJvZ3Jlc3NCYXIsXHJcbiAgICBJbWFnZSxcclxuICAgIEFsZXJ0XHJcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5jb25zdCBmYWNlUmVjbyA9ICgpID0+IHtcclxuXHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbXCJDb250ZW50LVR5cGVcIl0gPSBcIm11bHRpcGFydC9mb3JtLWRhdGFcIjtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFtcIkFjY2VwdFwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xyXG4gICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgIGNvbnN0IFtmaWxlTmFtZSwgc2V0RmlsZU5hbWVdID0gdXNlU3RhdGUoXCJQbGVhc2Ugc2VsZWN0IGFuIGltYWdlXCIpO1xyXG4gICAgIGNvbnN0IFtzaG93TG9hZGluZywgc2V0U2hvd0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgIGNvbnN0IFt1cGxvYWRQZXJjZW50YWdlLCBzZXRVcGxvYWRQZXJjZW50YWdlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKHt9KTtcclxuIFxyXG4gICAgIGNvbnN0IHJlY29nbmlzZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgc2V0U2hvd0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuIFxyXG4gICAgICAgICAgICAgLy8gcmVxdWVzdCByZWNvZ25pc2F0aW9uIGZyb20gZW5kLXBvaW50XHJcbiAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgICBgJHtTRU5USU1FTlRBTF9BTkFMWVNJU19FTkRQT0lOVH1gLFxyXG4gICAgICAgICAgICAgICAgIGZvcm1EYXRhLFxyXG4gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgY3Jvc3NEb21haW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgc2V0UmVzdWx0cyhyZXN1bHRzLmRhdGEpO1xyXG4gICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgXHJcbiAgICAgICAgICAgICBzZXRSZXN1bHRzKHt9KTtcclxuICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGUpKTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAvLyB3ZSBhcmUgZG9uZSwgbm93IHR1cm4gb2ZmIHRoZSBsb2FkaW5nIGFuZCBwcm9ncmVzcyBiYXJcclxuICAgICAgICAgc2V0U2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gXHJcbiAgICAgICAgIC8vIHJlc2V0IHRoZSBzdGF0ZXNcclxuICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICBzZXRVcGxvYWRQZXJjZW50YWdlKDApO1xyXG4gICAgICAgICB9LCA1MDAwKTtcclxuICAgICB9O1xyXG4gXHJcbiAgICAgY29uc3Qgb25UZXh0ID0gKGUpID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgICAgICAgIFxyXG4gICAgIH07XHJcbiBcclxuICAgICByZXR1cm4gKFxyXG4gICAgICAgPD5cclxuICAgICAgXHJcbiAgICAgICAgIDxDb250YWluZXI+XHJcbiAgIFxyXG4gICAgICAgICA8aDEgc3R5bGUgPSB7e3RleHRBbGlnbjpcImNlbnRlclwifX0+U2VudGltZW50YWwgQW5heXNpczwvaDE+XHJcbiAgICAgICAgIDxici8+XHJcbiAgICAgICAgIDxkaXYgc3R5bGUgPSB7e3RleHRBbGlnbjonY2VudGVyJ319ID5cclxuICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5UaGlzIGlzIGEgc2VudGltZW50IGFuYWx5c2lzIG1vZGVsIHRyYWluZWQgb24gdGhlIElNRGIgcmV2aWV3cyBkYXRhc2V0LiBUaGUgbW9kZWwgY2FuIHByZWRpY3Qgd2hldGhlciBhIGdpdmVuIG1vdmllIHJldmlldyBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZS48L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8YnIvPlxyXG4gICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17NH0gbGc9ezR9IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7IShPYmplY3QuZW50cmllcyhyZXN1bHRzKS5sZW5ndGggPT09IDAgJiYgcmVzdWx0cy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCBzdHlsZSA9IHt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fSAgdmFyaWFudD0nZGFyayc+e3Jlc3VsdHNbJ1N0YXR1cyddPT0wID8gPHN0cm9uZz57cmVzdWx0c1snTWVzc2FnZSddfTwvc3Ryb25nPiA6IDxzdHJvbmc+SXQgaXMgIHtyZXN1bHRzWydQcmVkaWN0ZWRfQ2xhc3MnXX08L3N0cm9uZz59PC9BbGVydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgIDxSb3cgIGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49eyFzaG93TG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwiZ3Jvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8Q29sIHhzID0gezZ9PlxyXG4gICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FbnRlciBNb3ZpZSBSZXZpZXc8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIC8+XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICA8Q29sICBjbGFzc05hbWU9XCJteC1hdXRvXCIgc3R5bGUgPSB7e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAge2ZpbGUubmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIG10LTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBzaGFkb3ctbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlY29nbmlzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZpbGUubmFtZSA9PT0gdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBQcmVkaWN0IFNlbnRpbWVudCFcclxuICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICA8Lz5cclxuICAgICApO1xyXG4gIFxyXG4gICAgIFxyXG4gICBcclxuICAgXHJcbiBcclxuIFxyXG5cclxufVxyXG4gICAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgZmFjZVJlY28iXSwic291cmNlUm9vdCI6IiJ9