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

  var onFileSelect = function onFileSelect(e) {
    if (e.target.files.length >= 1) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    } else {
      setFileName("Please select an Image");
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 10
    }
  }, __jsx("h1", {
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 10
    }
  }, "Sentimental Anaysis"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 10
    }
  }), __jsx("div", {
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 10
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 16
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, "This is a sentiment analysis model trained on the IMDb reviews dataset. The model can predict whether a given movie review is positive or negative."))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 10
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-md-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: 4,
    lg: 4,
    className: "mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
      lineNumber: 86,
      columnNumber: 26
    }
  }, results['Status'] == 0 ? __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 104
    }
  }, results['Message']) : __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 144
    }
  }, "It is  ", results['Predicted_Class'])))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-md-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
      lineNumber: 91,
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
      lineNumber: 98,
      columnNumber: 26
    }
  }), " ", "Loading...")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-md-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 12
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 14
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 26
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 30
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 34
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 38
    }
  }, "Enter Movie Review"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
    type: "text",
    placeholder: "Normal text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 30
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].File, {
    custom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 30
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].File.Input, {
    onChange: onFileSelect,
    accept: ".jpg,.png,.jpeg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 34
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].File.Label, {
    "data-browse": "Predict",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 34
    }
  }, fileName))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
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
      lineNumber: 134,
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
      lineNumber: 136,
      columnNumber: 30
    }
  }))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 18
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
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
      lineNumber: 148,
      columnNumber: 22
    }
  }, "Recognise!")))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZW50aW1lbnQtY29tcG8uanMiXSwibmFtZXMiOlsiZmFjZVJlY28iLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsInBvc3QiLCJ1c2VTdGF0ZSIsImZpbGUiLCJzZXRGaWxlIiwiZmlsZU5hbWUiLCJzZXRGaWxlTmFtZSIsInNob3dMb2FkaW5nIiwic2V0U2hvd0xvYWRpbmciLCJ1cGxvYWRQZXJjZW50YWdlIiwic2V0VXBsb2FkUGVyY2VudGFnZSIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwicmVjb2duaXNlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIlNFTlRJTUVOVEFMX0FOQUxZU0lTX0VORFBPSU5UIiwiY3Jvc3NEb21haW4iLCJkYXRhIiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0VGltZW91dCIsIm9uRmlsZVNlbGVjdCIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsIm5hbWUiLCJ0ZXh0QWxpZ24iLCJPYmplY3QiLCJlbnRyaWVzIiwiY29uc3RydWN0b3IiLCJSb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ3aWR0aCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQVlBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFFbkJDLDhDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsSUFBdkIsQ0FBNEIsY0FBNUIsSUFBOEMscUJBQTlDO0FBQ0FILDhDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsSUFBdkIsQ0FBNEIsUUFBNUIsSUFBd0Msa0JBQXhDOztBQUhtQixrQkFJTUMsc0RBQVEsQ0FBQyxFQUFELENBSmQ7QUFBQSxNQUlYQyxJQUpXO0FBQUEsTUFJTEMsT0FKSzs7QUFBQSxtQkFLY0Ysc0RBQVEsQ0FB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QUFBQ3lCLGVBQVMsRUFBQztBQUFYLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSzNCLElBQUksQ0FBQzBCLElBQUwsSUFDRyxNQUFDLHFEQUFEO0FBQ0ksT0FBRyxFQUFFTSxHQUFHLENBQUNDLGVBQUosQ0FBb0JqQyxJQUFwQixDQURUO0FBRUksU0FBSyxFQUFFO0FBQUVrQyxXQUFLLEVBQUU7QUFBVCxLQUZYO0FBR0ksYUFBUyxFQUFDLGNBSGQ7QUFJSSxXQUFPLE1BSlg7QUFLSSxTQUFLLE1BTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZSLENBREosQ0F0QkgsRUFtQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5DSCxFQW9DRyxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQ0ksV0FBTyxFQUFDLE1BRFo7QUFFSSxhQUFTLEVBQUMsbUJBRmQ7QUFHSSxRQUFJLEVBQUMsSUFIVDtBQUlJLFdBQU8sRUFBRTtBQUFBLGFBQU14QixTQUFTLEVBQWY7QUFBQSxLQUpiO0FBS0ksWUFBUSxFQUFFVixJQUFJLENBQUMwQixJQUFMLEtBQWNTLFNBTDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosQ0FwQ0gsQ0FERCxDQUZGLENBcENGLENBRkYsQ0FERjtBQTBHSixDQS9KRDs7R0FBTXpDLFE7O0FBaUtXQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZW50aW1lbnRhbF9hbmFseXNpcy5jZTliMjczYmY5NTQ4YTEzZTA5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7U0VOVElNRU5UQUxfQU5BTFlTSVNfRU5EUE9JTlQgfSBmcm9tIFwiLi4vYXBpX2VuZHBvaW50c1wiO1xyXG5pbXBvcnQge1xyXG4gICAgQ29udGFpbmVyLFxyXG4gICAgRm9ybSxcclxuICAgIFJvdyxcclxuICAgIENvbCxcclxuICAgIEJ1dHRvbixcclxuICAgIFNwaW5uZXIsXHJcbiAgICBUb2FzdCxcclxuICAgIFByb2dyZXNzQmFyLFxyXG4gICAgSW1hZ2UsXHJcbiAgICBBbGVydFxyXG59IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuY29uc3QgZmFjZVJlY28gPSAoKSA9PiB7XHJcblxyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0W1wiQ29udGVudC1UeXBlXCJdID0gXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbXCJBY2NlcHRcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcclxuICAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgICBjb25zdCBbZmlsZU5hbWUsIHNldEZpbGVOYW1lXSA9IHVzZVN0YXRlKFwiUGxlYXNlIHNlbGVjdCBhbiBpbWFnZVwiKTtcclxuICAgICBjb25zdCBbc2hvd0xvYWRpbmcsIHNldFNob3dMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICBjb25zdCBbdXBsb2FkUGVyY2VudGFnZSwgc2V0VXBsb2FkUGVyY2VudGFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZSh7fSk7XHJcbiBcclxuICAgICBjb25zdCByZWNvZ25pc2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIHNldFNob3dMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcbiBcclxuICAgICAgICAgICAgIC8vIHJlcXVlc3QgcmVjb2duaXNhdGlvbiBmcm9tIGVuZC1wb2ludFxyXG4gICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgICAgICAgYCR7U0VOVElNRU5UQUxfQU5BTFlTSVNfRU5EUE9JTlR9YCxcclxuICAgICAgICAgICAgICAgICBmb3JtRGF0YSxcclxuICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNyb3NzRG9tYWluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgIHNldFJlc3VsdHMocmVzdWx0cy5kYXRhKTtcclxuICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgIFxyXG4gICAgICAgICAgICAgc2V0UmVzdWx0cyh7fSk7XHJcbiAgICAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeShlKSk7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICAgLy8gd2UgYXJlIGRvbmUsIG5vdyB0dXJuIG9mZiB0aGUgbG9hZGluZyBhbmQgcHJvZ3Jlc3MgYmFyXHJcbiAgICAgICAgIHNldFNob3dMb2FkaW5nKGZhbHNlKTtcclxuIFxyXG4gICAgICAgICAvLyByZXNldCB0aGUgc3RhdGVzXHJcbiAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgc2V0VXBsb2FkUGVyY2VudGFnZSgwKTtcclxuICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgfTtcclxuIFxyXG4gICAgIGNvbnN0IG9uRmlsZVNlbGVjdCA9IChlKSA9PiB7XHJcbiAgICAgICAgIGlmIChlLnRhcmdldC5maWxlcy5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgICAgICAgc2V0RmlsZShlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICAgICAgICAgICBzZXRGaWxlTmFtZShlLnRhcmdldC5maWxlc1swXS5uYW1lKTtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIHNldEZpbGVOYW1lKFwiUGxlYXNlIHNlbGVjdCBhbiBJbWFnZVwiKTtcclxuICAgICAgICAgfVxyXG4gICAgIH07XHJcbiBcclxuICAgICByZXR1cm4gKFxyXG4gICAgICAgPD5cclxuICAgICAgXHJcbiAgICAgICAgIDxDb250YWluZXI+XHJcbiAgIFxyXG4gICAgICAgICA8aDEgc3R5bGUgPSB7e3RleHRBbGlnbjpcImNlbnRlclwifX0+U2VudGltZW50YWwgQW5heXNpczwvaDE+XHJcbiAgICAgICAgIDxici8+XHJcbiAgICAgICAgIDxkaXYgc3R5bGUgPSB7e3RleHRBbGlnbjonY2VudGVyJ319ID5cclxuICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5UaGlzIGlzIGEgc2VudGltZW50IGFuYWx5c2lzIG1vZGVsIHRyYWluZWQgb24gdGhlIElNRGIgcmV2aWV3cyBkYXRhc2V0LiBUaGUgbW9kZWwgY2FuIHByZWRpY3Qgd2hldGhlciBhIGdpdmVuIG1vdmllIHJldmlldyBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZS48L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8YnIvPlxyXG4gICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17NH0gbGc9ezR9IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7IShPYmplY3QuZW50cmllcyhyZXN1bHRzKS5sZW5ndGggPT09IDAgJiYgcmVzdWx0cy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCBzdHlsZSA9IHt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fSAgdmFyaWFudD0nZGFyayc+e3Jlc3VsdHNbJ1N0YXR1cyddPT0wID8gPHN0cm9uZz57cmVzdWx0c1snTWVzc2FnZSddfTwvc3Ryb25nPiA6IDxzdHJvbmc+SXQgaXMgIHtyZXN1bHRzWydQcmVkaWN0ZWRfQ2xhc3MnXX08L3N0cm9uZz59PC9BbGVydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgIDxSb3cgIGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49eyFzaG93TG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwiZ3Jvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8Q29sIHhzID0gezZ9PlxyXG4gICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FbnRlciBNb3ZpZSBSZXZpZXc8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTm9ybWFsIHRleHRcIiAvPlxyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmlsZSBjdXN0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpbGUuSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbGVTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLC5wbmcsLmpwZWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWxlLkxhYmVsIGRhdGEtYnJvd3NlPVwiUHJlZGljdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbGVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmlsZS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICA8Q29sICBjbGFzc05hbWU9XCJteC1hdXRvXCIgc3R5bGUgPSB7e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAge2ZpbGUubmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIG10LTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBzaGFkb3ctbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlY29nbmlzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZpbGUubmFtZSA9PT0gdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBSZWNvZ25pc2UhXHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgPC8+XHJcbiAgICAgKTtcclxuICBcclxuICAgICBcclxuICAgXHJcbiAgIFxyXG4gXHJcbiBcclxuXHJcbn1cclxuICAgIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGZhY2VSZWNvIl0sInNvdXJjZVJvb3QiOiIifQ==