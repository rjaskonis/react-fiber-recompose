webpackHotUpdate("app",{

/***/ "./node_modules/change-emitter/lib/index.js":
false,

/***/ "./node_modules/hoist-non-react-statics/index.js":
false,

/***/ "./node_modules/recompose/es/Recompose.js":
false,

/***/ "./node_modules/symbol-observable/es/index.js":
false,

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false,

/***/ "./node_modules/webpack/buildin/harmony-module.js":
false,

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _class;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _connect = __webpack_require__(/*! app/HOC/connect */ \"./src/HOC/connect.js\");\n\nvar _connect2 = _interopRequireDefault(_connect);\n\nvar _test = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./test-2\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _test2 = _interopRequireDefault(_test);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar App = (0, _connect2.default)(_class = function (_Component) {\n    (0, _inherits3.default)(App, _Component);\n\n    function App(props) {\n        (0, _classCallCheck3.default)(this, App);\n\n        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));\n\n        _this.state = {};\n        return _this;\n    }\n\n    (0, _createClass3.default)(App, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _this2 = this;\n\n            setTimeout(function () {\n                _this2.props.context.setState({ message: \" and be awesome!\" });\n            }, 2000);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { style: { textAlign: 'center', padding: '26px' } },\n                _react2.default.createElement(\n                    'span',\n                    null,\n                    'Edit src/app.js ',\n                    this.props.context.state.message,\n                    ' =})'\n                ),\n                _react2.default.createElement('br', null),\n                _react2.default.createElement(_test2.default, null)\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        value: function __reactstandin__regenerateByEval(key, code) {\n            this[key] = eval(code);\n        }\n    }]);\n    return App;\n}(_react.Component)) || _class;\n\nexports.default = App;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(App, 'App', '/home/rj/Projetos/ReactFiber/recompose/src/app.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/test-1.js":
false

})