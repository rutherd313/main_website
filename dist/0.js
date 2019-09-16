(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js?!./src/styles/about.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./src/styles/about.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".about_jumbotron_1EaRB {\r\n    /*background-color: red;*/\r\n    margin-top: 50px;\r\n}\r\n\r\n/* .diplay_5 {\r\n    font-size: 3.5rem;\r\n    font-weight: 300;\r\n    line-height: 1.2;\r\n    color: red;\r\n} */\r\n\r\n.about_display_4_2YpDV {\r\n    margin-top: 8%;\r\n    font-family: 'Georgia', 'Times New Roman', Times, serif;\r\n    font-size: 100px;\r\n    font-weight: 800;\r\n    color: #ECDFDF;\r\n    text-shadow: 2px 3px #5C4D4D;\r\n}\r\n\r\n.about_lead_1HyWY {\r\n    font-size: 20px;\r\n    font-weight: 900;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    color: #ECDFDF;\r\n    text-shadow: 2px 3px #5C4D4D;\r\n}\r\n", "", {"version":3,"sources":["C:/Users/djohn/main website/src/styles/about.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,iBAAiB;CACpB;;AAED;;;;;IAKI;;AAEJ;IACI,eAAe;IACf,wDAAwD;IACxD,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,6BAA6B;CAChC;;AAED;IACI,gBAAgB;IAChB,iBAAiB;IACjB,uEAAuE;IACvE,eAAe;IACf,6BAA6B;CAChC","file":"about.css","sourcesContent":[".jumbotron {\r\n    /*background-color: red;*/\r\n    margin-top: 50px;\r\n}\r\n\r\n/* .diplay_5 {\r\n    font-size: 3.5rem;\r\n    font-weight: 300;\r\n    line-height: 1.2;\r\n    color: red;\r\n} */\r\n\r\n.display_4 {\r\n    margin-top: 8%;\r\n    font-family: 'Georgia', 'Times New Roman', Times, serif;\r\n    font-size: 100px;\r\n    font-weight: 800;\r\n    color: #ECDFDF;\r\n    text-shadow: 2px 3px #5C4D4D;\r\n}\r\n\r\n.lead {\r\n    font-size: 20px;\r\n    font-weight: 900;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    color: #ECDFDF;\r\n    text-shadow: 2px 3px #5C4D4D;\r\n}\r\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"jumbotron": "about_jumbotron_1EaRB",
	"display_4": "about_display_4_2YpDV",
	"lead": "about_lead_1HyWY"
};

/***/ }),

/***/ "./src/containers/about.js":
/*!*********************************!*\
  !*** ./src/containers/about.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _pizza = __webpack_require__(/*! ../styles/pizza.jpg */ "./src/styles/pizza.jpg");

var _pizza2 = _interopRequireDefault(_pizza);

var _about = __webpack_require__(/*! ../styles/about.css */ "./src/styles/about.css");

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
    _inherits(About, _Component);

    function About(props) {
        _classCallCheck(this, About);

        var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));

        _this.state = {
            show: false
        };
        _this.doSomething = _this.doSomething.bind(_this);
        // this.toggleShow = this.toggleShow.bind(this);
        // this.hide = this.hide.bind(this);
        return _this;
    }

    _createClass(About, [{
        key: 'doSomething',
        value: function doSomething(e) {
            e.preventDefault();
            console.log(e.target.innerHTML);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: _about2.default.jumbotron },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h1',
                        { className: _about2.default.display_4 },
                        'Get to know me...'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: _about2.default.lead },
                        'I\'ve started my journey in programming in 2016 learning front-end development, then ',
                        _react2.default.createElement('br', null),
                        ' expanded my curiousity learning Javascript as well as React UI framework. '
                    ),
                    _react2.default.createElement('hr', { style: { background: '#ECDFDF', width: '80%' }, className: 'my-4' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'dropdown' },
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-secondary dropdown-toggle', type: 'button', id: 'dropdownMenu2', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
                            'Contact Me'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'dropdown-menu', 'aria-labelledby': 'dropdownMenu2' },
                            _react2.default.createElement(
                                'button',
                                { className: 'dropdown-item', type: 'button' },
                                'djohnruther@yahoo.com'
                            ),
                            _react2.default.createElement('div', { className: 'dropdown-divider' }),
                            _react2.default.createElement(
                                'button',
                                { className: 'dropdown-item', type: 'button' },
                                '224-532-0380'
                            )
                        )
                    )
                )
            ) //jumbotron
            /* <div>
                <img src={PizzaImage} /> 
            </div> */
            ;
        }
    }]);

    return About;
}(_react.Component);

exports.default = About;

/***/ }),

/***/ "./src/styles/about.css":
/*!******************************!*\
  !*** ./src/styles/about.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!./about.css */ "./node_modules/css-loader/index.js?!./src/styles/about.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles/pizza.jpg":
/*!******************************!*\
  !*** ./src/styles/pizza.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/6bfdd4fa50ca3600518a1dc92dfa131c-pizza.jpg";

/***/ })

}]);
//# sourceMappingURL=0.js.map