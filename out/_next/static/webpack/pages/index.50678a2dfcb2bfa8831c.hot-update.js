webpackHotUpdate_N_E("pages/index",{

/***/ "./urls.js":
/*!*****************!*\
  !*** ./urls.js ***!
  \*****************/
/*! exports provided: MODELS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODELS", function() { return MODELS; });
var MODELS = [{
  title: 'Classification Model',
  url: './classify.html',
  code: 'https://github.com/SVGS-EVA4/Phase2/tree/master/S2-MobileNets_and_ShuffleNets'
}, {
  title: 'Face Alignment Model',
  url: './face_align.html',
  code: 'https://github.com/SVGS-EVA4/Phase2/tree/master/S3-Face_Recognition_Part_1'
}, {
  title: 'Face Recognisation Model',
  url: './face_recognisation.html',
  code: 'https://github.com/SVGS-EVA4/Phase2/tree/master/S4-FaceRecognitionPart2'
}, {
  title: 'Generative Adversial Network',
  url: './gan.html',
  code: 'https://github.com/SVGS-EVA4/Phase2/tree/master/S6-Generative_Adversarial_Networks'
}, {
  title: 'Human Pose Estimation Model',
  url: './hpe.html',
  code: 'https://github.com/SVGS-EVA4/Phase2/tree/master/S5-Monocular_Human_Pose_Estimation'
}, {
  title: 'Face Swap Model',
  url: './face_swap.html',
  code: 'https://github.com/SVGS-EVA4/Phase2/tree/master/S3-Face_Recognition_Part_1'
}, {
  title: 'Variational AutoEncoders Model',
  url: './vae.html',
  code: ""
}, {
  title: 'Super Resolution GAN Model',
  url: './srgan.html',
  code: ""
}, {
  title: 'Sentiment Analysis Model',
  url: './sentimenatal_analysis.html',
  code: ''
}];

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXJscy5qcyJdLCJuYW1lcyI6WyJNT0RFTFMiLCJ0aXRsZSIsInVybCIsImNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU8sSUFBTUEsTUFBTSxHQUFFLENBQ3JCO0FBQUNDLE9BQUssRUFBRyxzQkFBVDtBQUFpQ0MsS0FBRyxFQUFHLGlCQUF2QztBQUEwREMsTUFBSSxFQUFHO0FBQWpFLENBRHFCLEVBRXJCO0FBQUNGLE9BQUssRUFBRyxzQkFBVDtBQUFpQ0MsS0FBRyxFQUFFLG1CQUF0QztBQUE0REMsTUFBSSxFQUFHO0FBQW5FLENBRnFCLEVBR3JCO0FBQUVGLE9BQUssRUFBRywwQkFBVjtBQUFzQ0MsS0FBRyxFQUFHLDJCQUE1QztBQUF5RUMsTUFBSSxFQUFHO0FBQWhGLENBSHFCLEVBSXJCO0FBQUNGLE9BQUssRUFBRSw4QkFBUjtBQUF3Q0MsS0FBRyxFQUFJLFlBQS9DO0FBQTZEQyxNQUFJLEVBQUc7QUFBcEUsQ0FKcUIsRUFLckI7QUFBQ0YsT0FBSyxFQUFHLDZCQUFUO0FBQXdDQyxLQUFHLEVBQUksWUFBL0M7QUFBNkRDLE1BQUksRUFBRztBQUFwRSxDQUxxQixFQU1yQjtBQUFDRixPQUFLLEVBQUcsaUJBQVQ7QUFBNEJDLEtBQUcsRUFBRyxrQkFBbEM7QUFBc0RDLE1BQUksRUFBRztBQUE3RCxDQU5xQixFQU9yQjtBQUFDRixPQUFLLEVBQUcsZ0NBQVQ7QUFBNENDLEtBQUcsRUFBRyxZQUFsRDtBQUFpRUMsTUFBSSxFQUFHO0FBQXhFLENBUHFCLEVBUXJCO0FBQUNGLE9BQUssRUFBRSw0QkFBUjtBQUF1Q0MsS0FBRyxFQUFJLGNBQTlDO0FBQThEQyxNQUFJLEVBQUc7QUFBckUsQ0FScUIsRUFTckI7QUFBQ0YsT0FBSyxFQUFHLDBCQUFUO0FBQXFDQyxLQUFHLEVBQUcsOEJBQTNDO0FBQTJFQyxNQUFJLEVBQUc7QUFBbEYsQ0FUcUIsQ0FBZCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MDY3OGEyZGZjYjJiZmE4ODMxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IE1PREVMUyA9WyBcclxue3RpdGxlIDogJ0NsYXNzaWZpY2F0aW9uIE1vZGVsJywgdXJsIDogJy4vY2xhc3NpZnkuaHRtbCcsIGNvZGUgOiAnaHR0cHM6Ly9naXRodWIuY29tL1NWR1MtRVZBNC9QaGFzZTIvdHJlZS9tYXN0ZXIvUzItTW9iaWxlTmV0c19hbmRfU2h1ZmZsZU5ldHMnfSxcclxue3RpdGxlIDogJ0ZhY2UgQWxpZ25tZW50IE1vZGVsJywgdXJsOiAnLi9mYWNlX2FsaWduLmh0bWwnLCAgY29kZSA6ICdodHRwczovL2dpdGh1Yi5jb20vU1ZHUy1FVkE0L1BoYXNlMi90cmVlL21hc3Rlci9TMy1GYWNlX1JlY29nbml0aW9uX1BhcnRfMSd9LFxyXG57IHRpdGxlIDogJ0ZhY2UgUmVjb2duaXNhdGlvbiBNb2RlbCcsIHVybCA6ICcuL2ZhY2VfcmVjb2duaXNhdGlvbi5odG1sJywgY29kZSA6ICdodHRwczovL2dpdGh1Yi5jb20vU1ZHUy1FVkE0L1BoYXNlMi90cmVlL21hc3Rlci9TNC1GYWNlUmVjb2duaXRpb25QYXJ0Mid9LFxyXG57dGl0bGU6ICdHZW5lcmF0aXZlIEFkdmVyc2lhbCBOZXR3b3JrJywgdXJsIDogICcuL2dhbi5odG1sJywgY29kZSA6ICdodHRwczovL2dpdGh1Yi5jb20vU1ZHUy1FVkE0L1BoYXNlMi90cmVlL21hc3Rlci9TNi1HZW5lcmF0aXZlX0FkdmVyc2FyaWFsX05ldHdvcmtzJ30sXHJcbnt0aXRsZSA6ICdIdW1hbiBQb3NlIEVzdGltYXRpb24gTW9kZWwnLCB1cmwgOiAgJy4vaHBlLmh0bWwnLCBjb2RlIDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9TVkdTLUVWQTQvUGhhc2UyL3RyZWUvbWFzdGVyL1M1LU1vbm9jdWxhcl9IdW1hbl9Qb3NlX0VzdGltYXRpb24nfSxcclxue3RpdGxlIDogJ0ZhY2UgU3dhcCBNb2RlbCcsIHVybCA6ICcuL2ZhY2Vfc3dhcC5odG1sJywgY29kZSA6ICdodHRwczovL2dpdGh1Yi5jb20vU1ZHUy1FVkE0L1BoYXNlMi90cmVlL21hc3Rlci9TMy1GYWNlX1JlY29nbml0aW9uX1BhcnRfMSd9LCBcclxue3RpdGxlIDogJ1ZhcmlhdGlvbmFsIEF1dG9FbmNvZGVycyBNb2RlbCcgLCB1cmwgOiAnLi92YWUuaHRtbCcgLCBjb2RlIDogXCJcIn0sXHJcbnt0aXRsZSA6J1N1cGVyIFJlc29sdXRpb24gR0FOIE1vZGVsJywgIHVybCA6ICAnLi9zcmdhbi5odG1sJywgY29kZSA6IFwiXCJ9LFxyXG57dGl0bGUgOiAnU2VudGltZW50IEFuYWx5c2lzIE1vZGVsJywgdXJsIDogJy4vc2VudGltZW5hdGFsX2FuYWx5c2lzLmh0bWwnLCBjb2RlIDogJyd9XHJcbl1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==