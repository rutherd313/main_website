(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/css-loader/index.js?!./src/styles/main.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./src/styles/main.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* h1 {\r\n    margin-top: 8%;\r\n    font-family: 'Georgia', 'Times New Roman', Times, serif;\r\n    font-size: 50px;\r\n    color: #000000;\r\n} */\r\n\r\n\r\n.main_container_xFun7 {\r\n    margin-top: -20px;\r\n}\r\n\r\n.main_display_4_1wa3g {\r\n    margin-top: 8%;\r\n    font-family: 'Georgia', 'Times New Roman', Times, serif;\r\n    font-size: 6.25rem;\r\n    font-weight: 800;\r\n    color: #ECDFDF;\r\n    text-shadow: 2px 3px #5C4D4D;\r\n    text-decoration-line: underline;\r\n    text-decoration-style: solid;\r\n}\r\n\r\n.main_lead_1_1cwVE {\r\n    font-size: 35px;\r\n    font-weight: 900;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    color: #ECDFDF;\r\n    text-shadow: 2px 3px #5C4D4D;\r\n}", "", {"version":3,"sources":["C:/Users/djohn/main website/src/styles/main.css"],"names":[],"mappings":"AAAA;;;;;IAKI;;;AAGJ;IACI,kBAAkB;CACrB;;AAED;IACI,eAAe;IACf,wDAAwD;IACxD,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,6BAA6B;IAC7B,gCAAgC;IAChC,6BAA6B;CAChC;;AAED;IACI,gBAAgB;IAChB,iBAAiB;IACjB,uEAAuE;IACvE,eAAe;IACf,6BAA6B;CAChC","file":"main.css","sourcesContent":["/* h1 {\r\n    margin-top: 8%;\r\n    font-family: 'Georgia', 'Times New Roman', Times, serif;\r\n    font-size: 50px;\r\n    color: #000000;\r\n} */\r\n\r\n\r\n.container {\r\n    margin-top: -20px;\r\n}\r\n\r\n.display_4 {\r\n    margin-top: 8%;\r\n    font-family: 'Georgia', 'Times New Roman', Times, serif;\r\n    font-size: 6.25rem;\r\n    font-weight: 800;\r\n    color: #ECDFDF;\r\n    text-shadow: 2px 3px #5C4D4D;\r\n    text-decoration-line: underline;\r\n    text-decoration-style: solid;\r\n}\r\n\r\n.lead_1 {\r\n    font-size: 35px;\r\n    font-weight: 900;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    color: #ECDFDF;\r\n    text-shadow: 2px 3px #5C4D4D;\r\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "main_container_xFun7",
	"display_4": "main_display_4_1wa3g",
	"lead_1": "main_lead_1_1cwVE"
};

/***/ }),

/***/ "./src/containers/main.js":
/*!********************************!*\
  !*** ./src/containers/main.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _main = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
    _inherits(Main, _Component);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
    }

    _createClass(Main, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _main2.default.container },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h1',
                        { className: _main2.default.display_4 },
                        'John Dueno'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: _main2.default.lead_1 },
                        'Javascript | ReactJS'
                    ),
                    _react2.default.createElement('hr', { className: 'my-4' }),
                    _react2.default.createElement(
                        'p',
                        { className: _main2.default.lead_1 },
                        'Junior Full Stack JavaScript developer specializing in React Framework'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'lead' },
                        _react2.default.createElement(
                            'a',
                            { className: 'btn btn-primary btn-lg', href: 'https://github.com/rutherd313', target: '_blank', role: 'button' },
                            'GitHub'
                        )
                    )
                )
            );
        }
    }]);

    return Main;
}(_react.Component);

exports.default = Main;

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!./main.css */ "./node_modules/css-loader/index.js?!./src/styles/main.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=2.js.map