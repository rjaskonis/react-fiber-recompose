webpackHotUpdate("app",{

/***/ "./src/HOC/withState.js":
/*!******************************!*\
  !*** ./src/HOC/withState.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _recompose = __webpack_require__(/*! recompose */ \"./node_modules/recompose/es/Recompose.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar _default = (0, _recompose.compose)((0, _recompose.withState)('state', 'setInnerState', {}), (0, _recompose.withHandlers)({\n    setState: function setState(_ref) {\n        var state = _ref.state,\n            setInnerState = _ref.setInnerState;\n        return function (newState) {\n            return setInnerState((0, _extends3.default)({}, state, newState));\n        };\n    }\n}));\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(_default, 'default', '/home/rj/Projetos/ReactFiber/recompose/src/HOC/withState.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/HOC/withState.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _class;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _connect = __webpack_require__(/*! app/HOC/connect */ \"./src/HOC/connect.js\");\n\nvar _connect2 = _interopRequireDefault(_connect);\n\nvar _test = __webpack_require__(/*! ./test-3 */ \"./src/test-3.js\");\n\nvar _test2 = _interopRequireDefault(_test);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar App = (0, _connect2.default)(_class = function (_Component) {\n    (0, _inherits3.default)(App, _Component);\n\n    function App(props) {\n        (0, _classCallCheck3.default)(this, App);\n\n        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));\n\n        _this.state = {};\n        return _this;\n    }\n\n    (0, _createClass3.default)(App, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _this2 = this;\n\n            setTimeout(function () {\n                _this2.props.context.setState({ message: \" and be awesome!\" });\n            }, 2000);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { style: { textAlign: 'center', padding: '26px' } },\n                _react2.default.createElement(\n                    'span',\n                    null,\n                    'Edit src/app.js ',\n                    this.props.context.state.message,\n                    ' =})'\n                ),\n                _react2.default.createElement('br', null),\n                _react2.default.createElement(_test2.default, null)\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        value: function __reactstandin__regenerateByEval(key, code) {\n            this[key] = eval(code);\n        }\n    }]);\n    return App;\n}(_react.Component)) || _class;\n\nexports.default = App;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(App, 'App', '/home/rj/Projetos/ReactFiber/recompose/src/app.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/test-2.js":
false,

/***/ "./src/test-3.js":
/*!***********************!*\
  !*** ./src/test-3.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _withState = __webpack_require__(/*! ./HOC/withState */ \"./src/HOC/withState.js\");\n\nvar _withState2 = _interopRequireDefault(_withState);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar Test = function Test(_ref) {\n    var state = _ref.state,\n        setState = _ref.setState;\n    return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n            \"div\",\n            null,\n            state.text\n        ),\n        _react2.default.createElement(\n            \"div\",\n            null,\n            _react2.default.createElement(\n                \"span\",\n                null,\n                state.counter || 0\n            )\n        ),\n        _react2.default.createElement(\n            \"button\",\n            { onClick: function onClick(e) {\n                    return setState({ counter: (state.counter || 0) + 1 });\n                } },\n            \"Add 1\"\n        )\n    );\n};\n\nvar _default = Test;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(Test, \"Test\", \"/home/rj/Projetos/ReactFiber/recompose/src/test-3.js\");\n    reactHotLoader.register(_default, \"default\", \"/home/rj/Projetos/ReactFiber/recompose/src/test-3.js\");\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/test-3.js?");

/***/ })

})