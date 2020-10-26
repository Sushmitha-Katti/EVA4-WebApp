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
      text = _useState[0],
      setText = _useState[1];

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

_s(Sentiment, "1wSRqPRg3Onk6cg6kci9KxXenaQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZW50aW1lbnQtY29tcG8uanMiXSwibmFtZXMiOlsiU2VudGltZW50IiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJwb3N0IiwidXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsImZpbGVOYW1lIiwic2V0RmlsZU5hbWUiLCJzaG93TG9hZGluZyIsInNldFNob3dMb2FkaW5nIiwidXBsb2FkUGVyY2VudGFnZSIsInNldFVwbG9hZFBlcmNlbnRhZ2UiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsInJlY29nbmlzZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlIiwiU0VOVElNRU5UQUxfQU5BTFlTSVNfRU5EUE9JTlQiLCJjcm9zc0RvbWFpbiIsImRhdGEiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRUaW1lb3V0Iiwib25UZXh0IiwiZSIsInRhcmdldCIsInZhbHVlIiwidGV4dEFsaWduIiwiT2JqZWN0IiwiZW50cmllcyIsImxlbmd0aCIsImNvbnN0cnVjdG9yIiwiUm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBWUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUVwQkMsOENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxJQUF2QixDQUE0QixjQUE1QixJQUE4QyxxQkFBOUM7QUFDQUgsOENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxJQUF2QixDQUE0QixRQUE1QixJQUF3QyxrQkFBeEM7O0FBSG9CLGtCQUlLQyxzREFBUSxDQUFDLEVBQUQsQ0FKYjtBQUFBLE1BSVpDLElBSlk7QUFBQSxNQUlOQyxPQUpNOztBQUFBLG1CQUthRixzREFBUSxDQUFDLHdCQUFELENBTHJCO0FBQUEsTUFLWkcsUUFMWTtBQUFBLE1BS0ZDLFdBTEU7O0FB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QUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUpKLENBREosRUFPSSxNQUFDLG9EQUFELENBQU0sT0FBTjtBQUFjLFFBQUksRUFBQyxNQUFuQjtBQUEwQixZQUFRLEVBQUlULE1BQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQUZYLEVBZUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZILEVBZ0JHLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFDSSxXQUFPLEVBQUMsTUFEWjtBQUVJLGFBQVMsRUFBQyxtQkFGZDtBQUdJLFFBQUksRUFBQyxJQUhUO0FBSUksV0FBTyxFQUFFO0FBQUEsYUFBTVosU0FBUyxFQUFmO0FBQUEsS0FKYjtBQUtJLFlBQVEsRUFBRVYsSUFBSSxDQUFDNkIsTUFBTCxHQUFjLENBTDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosQ0FoQkgsQ0FERCxDQUZGLENBcENGLENBRkYsQ0FERjtBQXNGSixDQXpJRDs7R0FBTW5DLFM7O0tBQUFBLFM7QUEySVdBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlbnRpbWVudGFsX2FuYWx5c2lzLjcxZDg4NTgwNzI5Mzg0YTVhOTMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtTRU5USU1FTlRBTF9BTkFMWVNJU19FTkRQT0lOVCB9IGZyb20gXCIuLi9hcGlfZW5kcG9pbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBDb250YWluZXIsXHJcbiAgICBGb3JtLFxyXG4gICAgUm93LFxyXG4gICAgQ29sLFxyXG4gICAgQnV0dG9uLFxyXG4gICAgU3Bpbm5lcixcclxuICAgIFRvYXN0LFxyXG4gICAgUHJvZ3Jlc3NCYXIsXHJcbiAgICBJbWFnZSxcclxuICAgIEFsZXJ0XHJcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5jb25zdCBTZW50aW1lbnQgPSAoKSA9PiB7XHJcblxyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0W1wiQ29udGVudC1UeXBlXCJdID0gXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbXCJBY2NlcHRcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcclxuICAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgICBjb25zdCBbZmlsZU5hbWUsIHNldEZpbGVOYW1lXSA9IHVzZVN0YXRlKFwiUGxlYXNlIHNlbGVjdCBhbiBpbWFnZVwiKTtcclxuICAgICBjb25zdCBbc2hvd0xvYWRpbmcsIHNldFNob3dMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICBjb25zdCBbdXBsb2FkUGVyY2VudGFnZSwgc2V0VXBsb2FkUGVyY2VudGFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZSh7fSk7XHJcbiBcclxuICAgICBjb25zdCByZWNvZ25pc2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIHNldFNob3dMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcbiBcclxuICAgICAgICAgICAgIC8vIHJlcXVlc3QgcmVjb2duaXNhdGlvbiBmcm9tIGVuZC1wb2ludFxyXG4gICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgICAgICAgYCR7U0VOVElNRU5UQUxfQU5BTFlTSVNfRU5EUE9JTlR9YCxcclxuICAgICAgICAgICAgICAgICBmb3JtRGF0YSxcclxuICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNyb3NzRG9tYWluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgIHNldFJlc3VsdHMocmVzdWx0cy5kYXRhKTtcclxuICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgIFxyXG4gICAgICAgICAgICAgc2V0UmVzdWx0cyh7fSk7XHJcbiAgICAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeShlKSk7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICAgLy8gd2UgYXJlIGRvbmUsIG5vdyB0dXJuIG9mZiB0aGUgbG9hZGluZyBhbmQgcHJvZ3Jlc3MgYmFyXHJcbiAgICAgICAgIHNldFNob3dMb2FkaW5nKGZhbHNlKTtcclxuIFxyXG4gICAgICAgICAvLyByZXNldCB0aGUgc3RhdGVzXHJcbiAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgc2V0VXBsb2FkUGVyY2VudGFnZSgwKTtcclxuICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgfTtcclxuIFxyXG4gICAgIGNvbnN0IG9uVGV4dCA9IChlKSA9PiB7XHJcbiAgICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlKXtcclxuICAgICAgICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgIH07XHJcbiBcclxuICAgICByZXR1cm4gKFxyXG4gICAgICAgPD5cclxuICAgICAgXHJcbiAgICAgICAgIDxDb250YWluZXI+XHJcbiAgIFxyXG4gICAgICAgICA8aDEgc3R5bGUgPSB7e3RleHRBbGlnbjpcImNlbnRlclwifX0+U2VudGltZW50YWwgQW5heXNpczwvaDE+XHJcbiAgICAgICAgIDxici8+XHJcbiAgICAgICAgIDxkaXYgc3R5bGUgPSB7e3RleHRBbGlnbjonY2VudGVyJ319ID5cclxuICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5UaGlzIGlzIGEgc2VudGltZW50IGFuYWx5c2lzIG1vZGVsIHRyYWluZWQgb24gdGhlIElNRGIgcmV2aWV3cyBkYXRhc2V0LiBUaGUgbW9kZWwgY2FuIHByZWRpY3Qgd2hldGhlciBhIGdpdmVuIG1vdmllIHJldmlldyBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZS48L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8YnIvPlxyXG4gICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17NH0gbGc9ezR9IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB7IShPYmplY3QuZW50cmllcyhyZXN1bHRzKS5sZW5ndGggPT09IDAgJiYgcmVzdWx0cy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCBzdHlsZSA9IHt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fSAgdmFyaWFudD0nZGFyayc+e3Jlc3VsdHNbJ1N0YXR1cyddPT0wID8gPHN0cm9uZz57cmVzdWx0c1snTWVzc2FnZSddfTwvc3Ryb25nPiA6IDxzdHJvbmc+SXQgaXMgIHtyZXN1bHRzWydQcmVkaWN0ZWRfQ2xhc3MnXX08L3N0cm9uZz59PC9BbGVydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgIDxSb3cgIGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49eyFzaG93TG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwiZ3Jvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8Q29sIHhzID0gezZ9PlxyXG4gICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FbnRlciBNb3ZpZSBSZXZpZXc8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SXQgc2hvdWxkIGJlIGF0bGVhc3QgNSBsZXR0ZXIgd29yZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlID0ge29uVGV4dH0gLz5cclxuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBzaGFkb3ctbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlY29nbmlzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RleHQubGVuZ3RoIDwgNiB9XHJcbiAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFByZWRpY3QgU2VudGltZW50IVxyXG4gICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICBcclxuICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgIDwvPlxyXG4gICAgICk7XHJcbiAgXHJcbiAgICAgXHJcbiAgIFxyXG4gICBcclxuIFxyXG4gXHJcblxyXG59XHJcbiAgICBcclxuICBleHBvcnQgZGVmYXVsdCBTZW50aW1lbnQiXSwic291cmNlUm9vdCI6IiJ9