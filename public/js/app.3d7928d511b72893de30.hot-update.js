webpackHotUpdate("app",{

/***/ "./src/test-3.js":
/*!***********************!*\
  !*** ./src/test-3.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _withState = __webpack_require__(/*! ./HOC/withState */ \"./src/HOC/withState.js\");\n\nvar _withState2 = _interopRequireDefault(_withState);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar Test = function Test(_ref) {\n    var state = _ref.state,\n        setState = _ref.setState;\n    return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n            \"div\",\n            null,\n            state.text\n        ),\n        _react2.default.createElement(\n            \"div\",\n            null,\n            _react2.default.createElement(\n                \"span\",\n                null,\n                state.counter || 0\n            )\n        ),\n        _react2.default.createElement(\n            \"button\",\n            { onClick: function onClick(e) {\n                    return setState({ counter: (state.counter || 0) + 1 });\n                } },\n            \"Add 1\"\n        )\n    );\n};\n\nvar _default = (0, _withState2.default)(Test);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(Test, \"Test\", \"/home/rj/Projetos/ReactFiber/recompose/src/test-3.js\");\n    reactHotLoader.register(_default, \"default\", \"/home/rj/Projetos/ReactFiber/recompose/src/test-3.js\");\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/test-3.js?");

/***/ })

})