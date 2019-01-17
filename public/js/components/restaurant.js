webpackJsonp([0],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _MainHeader = __webpack_require__(128);

var _MainHeader2 = _interopRequireDefault(_MainHeader);

var _Footer = __webpack_require__(44);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_MainHeader2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(18);

var _reducerMeals = __webpack_require__(143);

var _reducerMeals2 = _interopRequireDefault(_reducerMeals);

var _reducerActiveMeal = __webpack_require__(142);

var _reducerActiveMeal2 = _interopRequireDefault(_reducerActiveMeal);

var _reducerSpecialMenu = __webpack_require__(144);

var _reducerSpecialMenu2 = _interopRequireDefault(_reducerSpecialMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allReducers = (0, _redux.combineReducers)({
  meals: _reducerMeals2.default,
  activeMeal: _reducerActiveMeal2.default,
  specialMenu: _reducerSpecialMenu2.default
});

exports.default = allReducers;

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactUs = function (_Component) {
  _inherits(ContactUs, _Component);

  function ContactUs() {
    _classCallCheck(this, ContactUs);

    return _possibleConstructorReturn(this, (ContactUs.__proto__ || Object.getPrototypeOf(ContactUs)).apply(this, arguments));
  }

  _createClass(ContactUs, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "contactus" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "h5",
            { className: "comp-title" },
            "Contact Us"
          ),
          _react2.default.createElement(
            "h2",
            null,
            "Always Here to Help You"
          ),
          _react2.default.createElement(
            "div",
            { className: "box" },
            _react2.default.createElement(
              "div",
              { className: "row" },
              _react2.default.createElement(
                "div",
                { className: "col-md-6" },
                _react2.default.createElement(
                  "div",
                  { className: "title" },
                  "Queens, New York"
                ),
                _react2.default.createElement(
                  "h6",
                  { className: "address", style: { fontSize: "1rem" } },
                  "435 main st",
                  _react2.default.createElement("br", null),
                  "Queens, NY 12402"
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  _react2.default.createElement(
                    "strong",
                    null,
                    "email:"
                  ),
                  " ",
                  _react2.default.createElement(
                    "a",
                    { href: "info@islandricegrill.com" },
                    "info@islandricegrill.com"
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col-md-6" },
                _react2.default.createElement(
                  "h6",
                  { style: { fontSize: "1rem" } },
                  "Phone:"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "title" },
                  "(516)-346-6789"
                ),
                _react2.default.createElement(
                  "h6",
                  null,
                  "Lunch Specials"
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "Friday, Saturday, and Sunday",
                  _react2.default.createElement("br", null),
                  "from 12pm - 1:30pm"
                ),
                _react2.default.createElement(
                  "h6",
                  null,
                  "Dinner Specials"
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  "Daily",
                  _react2.default.createElement("br", null),
                  "from 6pm - 9:30pm"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ContactUs;
}(_react.Component);

exports.default = ContactUs;

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(109);

var _Home = __webpack_require__(134);

var _Home2 = _interopRequireDefault(_Home);

var _Menu = __webpack_require__(135);

var _Menu2 = _interopRequireDefault(_Menu);

var _About = __webpack_require__(133);

var _About2 = _interopRequireDefault(_About);

var _reactRouter = __webpack_require__(265);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainHeader = function (_Component) {
  _inherits(MainHeader, _Component);

  function MainHeader() {
    _classCallCheck(this, MainHeader);

    return _possibleConstructorReturn(this, (MainHeader.__proto__ || Object.getPrototypeOf(MainHeader)).apply(this, arguments));
  }

  _createClass(MainHeader, [{
    key: "render",
    value: function render() {
      var headerStyle = {
        color: "#fff"
      };
      var dropHeaderStyle = {
        color: "#fff",
        padding: "10px 20px",
        display: "block"
      };
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          "div",
          { className: "App" },
          _react2.default.createElement(
            "header",
            { style: { zIndex: 5 } },
            _react2.default.createElement(
              "div",
              { className: "container" },
              _react2.default.createElement(
                "div",
                {
                  className: "Logo",
                  style: {
                    fontSize: "25px",
                    fontWeight: "bold"
                  }
                },
                _react2.default.createElement(
                  _reactRouterDom.NavLink,
                  { style: headerStyle, to: "/" },
                  "IR"
                )
              ),
              _react2.default.createElement("input", {
                type: "checkbox",
                style: { display: "none" },
                id: "menuToggle"
              }),
              _react2.default.createElement(
                "label",
                { htmlFor: "menuToggle",
                  className: "hamburger pull-right visible-xs"
                },
                _react2.default.createElement("i", {
                  style: { fontSize: "25px", display: "block", float: "right" },
                  className: "fas fa-bars"
                })
              ),
              _react2.default.createElement(
                "nav",
                { style: { padding: "20px" }, className: "main-nav" },
                _react2.default.createElement(
                  "label",
                  { htmlFor: "menuToggle", className: "close pull-left" },
                  _react2.default.createElement("i", { className: "fas fa-times" })
                ),
                _react2.default.createElement(
                  "ul",
                  null,
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      _reactRouterDom.NavLink,
                      { style: dropHeaderStyle, to: "/" },
                      "Home"
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      _reactRouterDom.NavLink,
                      { style: dropHeaderStyle, to: "/menu" },
                      "Menu"
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      _reactRouterDom.NavLink,
                      { style: dropHeaderStyle, to: "/about" },
                      "About"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "ul",
                { className: "visible-sm visible-md visible-lg" },
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { style: headerStyle, to: "/" },
                    "Home"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { style: headerStyle, to: "/menu" },
                    "Menu"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { style: headerStyle, to: "/about" },
                    "About"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: "/menu", component: _Menu2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: "/about", component: _About2.default })
        )
      );
    }
  }]);

  return MainHeader;
}(_react.Component);

exports.default = MainHeader;

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _mealList = __webpack_require__(140);

var _mealList2 = _interopRequireDefault(_mealList);

var _mealDetail = __webpack_require__(139);

var _mealDetail2 = _interopRequireDefault(_mealDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuList = function MenuList() {
  return _react2.default.createElement(
    "section",
    { id: "menulist" },
    _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "div",
        { className: "tool one" },
        _react2.default.createElement(
          "h2",
          { className: "special" },
          "Menu Items"
        ),
        _react2.default.createElement(_mealList2.default, null)
      ),
      _react2.default.createElement(
        "div",
        { className: "tool two" },
        _react2.default.createElement(
          "h2",
          { className: "special" },
          "Menu Item Details"
        ),
        _react2.default.createElement(_mealDetail2.default, null)
      )
    )
  );
};

exports.default = MenuList;

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(109);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OurStory = function (_Component) {
  _inherits(OurStory, _Component);

  function OurStory() {
    _classCallCheck(this, OurStory);

    return _possibleConstructorReturn(this, (OurStory.__proto__ || Object.getPrototypeOf(OurStory)).apply(this, arguments));
  }

  _createClass(OurStory, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "ourStory" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "quote-our col-md-6" },
              _react2.default.createElement(
                "h5",
                null,
                "Our Story"
              ),
              _react2.default.createElement(
                "h2",
                null,
                "Cooking is the art of adjustment"
              ),
              _react2.default.createElement(
                "p",
                null,
                "Lorem ipsum dolor amet poke bitters tbh truffaut four loko portland kitsch jean shorts trust fund craft beer single-origin coffee ramps hot chicken shaman iceland. Scenester yuccie fam helvetica. Taiyaki seitan offal distillery pickled freegan tumeric glossier franzen before they sold out viral small batch. Keytar keffiyeh fam celiac bitters waistcoat."
              ),
              _react2.default.createElement(
                "div",
                {
                  className: "quote",
                  style: {
                    color: "grey",
                    fontStyle: "italic",
                    marginBottom: "3rem"
                  }
                },
                "\"The best Caribbean food in Queens\"-",
                _react2.default.createElement(
                  "strong",
                  { style: { fontStyle: "normal" } },
                  " John Clarke"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "reservBtn" },
                _react2.default.createElement(
                  "a",
                  { href: "/reservations", className: "reserve-btn" },
                  "Reserve"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-6" },
              _react2.default.createElement("div", { className: "video-img" })
            )
          )
        )
      );
    }
  }]);

  return OurStory;
}(_react.Component);

exports.default = OurStory;

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RandomQuote = function (_Component) {
  _inherits(RandomQuote, _Component);

  function RandomQuote() {
    _classCallCheck(this, RandomQuote);

    return _possibleConstructorReturn(this, (RandomQuote.__proto__ || Object.getPrototypeOf(RandomQuote)).apply(this, arguments));
  }

  _createClass(RandomQuote, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "Randomquote" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "h1",
            null,
            "\"For us, cooking is an extension of love.\""
          ),
          _react2.default.createElement(
            "span",
            { className: "author" },
            "-The Staff-"
          )
        )
      );
    }
  }]);

  return RandomQuote;
}(_react.Component);

exports.default = RandomQuote;

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reviews = function (_Component) {
  _inherits(Reviews, _Component);

  function Reviews() {
    _classCallCheck(this, Reviews);

    return _possibleConstructorReturn(this, (Reviews.__proto__ || Object.getPrototypeOf(Reviews)).apply(this, arguments));
  }

  _createClass(Reviews, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "reviews" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "col-md-8" },
              _react2.default.createElement("img", { src: "https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/85/121/skd181312sdc.jpg" })
            ),
            _react2.default.createElement(
              "div",
              { className: "col-md-4" },
              _react2.default.createElement(
                "h5",
                { className: "comp-title" },
                "Reviews"
              ),
              _react2.default.createElement(
                "h2",
                null,
                "The Food Network"
              ),
              _react2.default.createElement(
                "h4",
                null,
                "Best Restaurant in the N.Y. Area"
              ),
              _react2.default.createElement(
                "p",
                null,
                "Lorem ipsum dolor amet mollit schlitz hammock, street art shabby chic shaman taiyaki man bun brunch exercitation quis. Cred adipisicing swag selvage everyday carry bushwick poutine art party deep v mlkshk voluptate occupy. Anim beard meh proident ugh sed voluptate tilde hashtag wolf scenester affogato sunt magna irure. Occaecat do tumeric chillwave, shabby chic copper mug nulla edison bulb labore next level pitchfork la croix minim vice poutine. Kogi anim tilde roof party pork belly. Tousled in yr, schlitz palo santo street art bushwick laborum post-ironic culpa next level XOXO portland."
              ),
              _react2.default.createElement(
                "div",
                { className: "author" },
                _react2.default.createElement(
                  "strong",
                  null,
                  "Joe Bastiachi"
                ),
                " - winner of the chef mastery award"
              ),
              _react2.default.createElement(
                "div",
                { className: "arrows" },
                _react2.default.createElement("i", { className: "fas fa-arrow-left" }),
                _react2.default.createElement("i", { className: "fas fa-arrow-right" })
              )
            )
          )
        )
      );
    }
  }]);

  return Reviews;
}(_react.Component);

exports.default = Reviews;

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _SiteHeader = __webpack_require__(71);

var _SiteHeader2 = _interopRequireDefault(_SiteHeader);

var _aboutus = __webpack_require__(138);

var _aboutus2 = _interopRequireDefault(_aboutus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_SiteHeader2.default, null),
    _react2.default.createElement(_aboutus2.default, null)
  );
};

exports.default = About;

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _TopImage = __webpack_require__(137);

var _TopImage2 = _interopRequireDefault(_TopImage);

var _OurStory = __webpack_require__(130);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(136);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(131);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(132);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(127);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(44);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_TopImage2.default, null),
        _react2.default.createElement(_OurStory2.default, null),
        _react2.default.createElement(_SpecialMenu2.default, null),
        _react2.default.createElement(_RandomQuote2.default, null),
        _react2.default.createElement(_Reviews2.default, null),
        _react2.default.createElement(_ContactUs2.default, null),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _SiteHeader = __webpack_require__(71);

var _SiteHeader2 = _interopRequireDefault(_SiteHeader);

var _MenuList = __webpack_require__(129);

var _MenuList2 = _interopRequireDefault(_MenuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_SiteHeader2.default, null),
        _react2.default.createElement(_MenuList2.default, null)
      );
    }
  }]);

  return Menu;
}(_react.Component);

exports.default = Menu;

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _specialMenuItems = __webpack_require__(141);

var _specialMenuItems2 = _interopRequireDefault(_specialMenuItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpecialMenu = function (_Component) {
  _inherits(SpecialMenu, _Component);

  function SpecialMenu() {
    _classCallCheck(this, SpecialMenu);

    return _possibleConstructorReturn(this, (SpecialMenu.__proto__ || Object.getPrototypeOf(SpecialMenu)).apply(this, arguments));
  }

  _createClass(SpecialMenu, [{
    key: "render",
    value: function render() {
      var priceStyle = {
        textAlign: "center",
        background: "red",
        border: "10px solid rgba(255,255,255,.7)",
        height: "100px",
        width: "100px"
      };

      var titleStyle = {
        fontWeight: 600,
        fontSize: "0.9rem",
        textAlign: "center"
      };
      return _react2.default.createElement(
        "section",
        { id: "specialMenu" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "h5",
            { className: "comp-title" },
            "Special Menu"
          ),
          _react2.default.createElement(
            "h2",
            { style: { textAlign: "center" } },
            "Delicious Flavor of The Carribean"
          ),
          _react2.default.createElement(_specialMenuItems2.default, null),
          _react2.default.createElement(
            "a",
            {
              className: "link",
              href: "/menu",
              style: {
                color: "green",
                textAlign: "center",
                display: "block",
                paddingTop: "50px"
              }
            },
            "View Full Menu"
          )
        )
      );
    }
  }]);

  return SpecialMenu;
}(_react.Component);

exports.default = SpecialMenu;

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopImage = function (_Component) {
  _inherits(TopImage, _Component);

  function TopImage() {
    _classCallCheck(this, TopImage);

    return _possibleConstructorReturn(this, (TopImage.__proto__ || Object.getPrototypeOf(TopImage)).apply(this, arguments));
  }

  _createClass(TopImage, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "topImg" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "title" },
            _react2.default.createElement(
              "h5",
              null,
              "Welcome"
            ),
            _react2.default.createElement(
              "h1",
              null,
              "Island Rice Grill"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "contact-info" },
            _react2.default.createElement(
              "div",
              { className: "booking" },
              "Book Table Directly"
            ),
            _react2.default.createElement(
              "h2",
              null,
              "(718) - 219 - 8652"
            ),
            _react2.default.createElement(
              "div",
              { className: "hours" },
              "Opening Hours ",
              _react2.default.createElement(
                "strong",
                null,
                "Mon - Fri: "
              ),
              " 9am - 9pm /",
              _react2.default.createElement(
                "strong",
                null,
                " Weekend:"
              ),
              " 9am - 11pm"
            )
          )
        )
      );
    }
  }]);

  return TopImage;
}(_react.Component);

exports.default = TopImage;

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutUs = function AboutUs(props) {
  return _react2.default.createElement(
    "section",
    { style: { paddingTop: "130px" }, id: "aboutus" },
    _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "div",
        { className: "owner-image" },
        _react2.default.createElement(
          "h2",
          { style: { fontFamily: "'Open Sans', sans-serif" } },
          "About Us"
        ),
        _react2.default.createElement("img", { style: { width: "300px", height: "220px" }, src: "https://raw.githubusercontent.com/court-tek/myWebFiles/master/islandOwner.jpg", alt: "69" })
      ),
      _react2.default.createElement(
        "p",
        null,
        "Butcher leggings shoreditch wolf gochujang normcore meditation blue bottle flexitarian health goth. Pabst pug PBR&B beard butcher gluten-free cloud bread portland bitters edison bulb polaroid mlkshk hell of taxidermy everyday carry. Franzen af tote bag gentrify flannel fashion axe williamsburg. Williamsburg jianbing beard church-key four dollar toast succulents tofu cred try-hard readymade blog vaporware hashtag hexagon poke. Photo booth kinfolk keytar, yr locavore coloring book four dollar toast readymade. Banjo pour-over succulents next level, adaptogen affogato occupy edison bulb lumbersexual +1. Ennui authentic chillwave vape fingerstache hashtag vice vinyl keytar forage blue bottle. Fam shabby chic seitan gastropub fanny pack vegan blue bottle drinking vinegar meditation irony brooklyn crucifix edison bulb twee typewriter. Adaptogen bicycle rights pok pok hot chicken, tumeric plaid tumblr wayfarers fashion axe master cleanse offal squid pabst. Mixtape truffaut mustache godard glossier quinoa."
      )
    )
  );
};

exports.default = AboutUs;

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MealDetail = function (_Component) {
  _inherits(MealDetail, _Component);

  function MealDetail() {
    _classCallCheck(this, MealDetail);

    return _possibleConstructorReturn(this, (MealDetail.__proto__ || Object.getPrototypeOf(MealDetail)).apply(this, arguments));
  }

  _createClass(MealDetail, [{
    key: "render",
    value: function render() {
      var marg = {
        marginBottom: "8px"
      };
      var flexBox = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      };
      if (!this.props.meal) {
        return _react2.default.createElement(
          "h4",
          null,
          "Select a menu item..."
        );
      }

      return _react2.default.createElement(
        "div",
        { style: flexBox, className: "detail" },
        _react2.default.createElement("img", { style: marg, src: this.props.meal.thumbnail, width: "300", height: "300" }),
        _react2.default.createElement(
          "h3",
          { style: marg },
          "Small: ",
          this.props.meal.pricesmall
        ),
        _react2.default.createElement(
          "h3",
          { style: marg },
          "Large: ",
          this.props.meal.pricelarge
        ),
        _react2.default.createElement(
          "h4",
          { style: marg },
          this.props.meal.description
        )
      );
    }
  }]);

  return MealDetail;
}(_react.Component);

function mapStateToProps(state) {
  return {
    meal: state.activeMeal
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MealDetail);

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(18);

var _reactRedux = __webpack_require__(21);

var _index = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MealList = function (_Component) {
  _inherits(MealList, _Component);

  function MealList() {
    _classCallCheck(this, MealList);

    return _possibleConstructorReturn(this, (MealList.__proto__ || Object.getPrototypeOf(MealList)).apply(this, arguments));
  }

  _createClass(MealList, [{
    key: "createMenuItems",
    value: function createMenuItems() {
      var _this2 = this;

      return this.props.meals.map(function (meal) {
        return _react2.default.createElement(
          "li",
          { key: meal.id, onClick: function onClick() {
              return _this2.props.selectMeal(meal);
            } },
          meal.mealItem
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "ul",
        null,
        this.createMenuItems()
      );
    }
  }]);

  return MealList;
}(_react.Component);

function mapStateToProps(state) {
  return {
    meals: state.meals
  };
}

function matchDispactchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ selectMeal: _index.selectMeal }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispactchToProps)(MealList);

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecMenuItems = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(18);

var _reactRedux = __webpack_require__(21);

var _index = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpecMenuItems = exports.SpecMenuItems = function (_Component) {
  _inherits(SpecMenuItems, _Component);

  function SpecMenuItems() {
    _classCallCheck(this, SpecMenuItems);

    return _possibleConstructorReturn(this, (SpecMenuItems.__proto__ || Object.getPrototypeOf(SpecMenuItems)).apply(this, arguments));
  }

  _createClass(SpecMenuItems, [{
    key: "showMenuDetails",
    value: function showMenuDetails() {
      return this.props.specialMenu.map(function (specialItems) {
        return _react2.default.createElement(
          "div",
          { key: specialItems.id, className: "col-md-4" },
          _react2.default.createElement(
            "div",
            { className: "box", style: { background: "#fff", padding: "20px" } },
            _react2.default.createElement(
              "div",
              {
                className: "box-img",
                style: {
                  width: "100%",
                  height: "200px",
                  position: "relative",
                  marginBottom: "50px"
                }
              },
              _react2.default.createElement(
                "div",
                { key: specialItems.id, className: "price-circle" },
                "$",
                specialItems.price
              )
            ),
            _react2.default.createElement(
              "span",
              {
                className: "title",
                style: {
                  textAlign: "center",
                  display: "block",
                  fontWeight: 600,
                  fontSize: "0.9rem"
                }
              },
              specialItems.specName
            ),
            _react2.default.createElement(
              "p",
              {
                className: "details",
                style: {
                  fontWeight: 300,
                  fontSize: "0.8rem",
                  textAlign: "center",
                  lineHeight: 1.5
                }
              },
              specialItems.description
            )
          )
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "row" },
        this.showMenuDetails()
      );
    }
  }]);

  return SpecMenuItems;
}(_react.Component);

function mapStateToProps(state) {
  return {
    specialMenu: state.specialMenu
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SpecMenuItems);

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case "MEAL_SELECTED":
            return action.payload;
            break;
    }
    return state;
};

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return [{
    id: 1,
    mealItem: "Curry Chicken",
    pricesmall: "$7.95",
    pricelarge: "$9.50",
    thumbnail: "https://raw.githubusercontent.com/court-tek/myWebFiles/master/curryChicken.jpg",
    description: "Rich, spicy and hearty with great flavor"
  }, {
    id: 2,
    mealItem: "Jerk Chicken(White)",
    pricesmall: "$8.50",
    pricelarge: "$10.50",
    thumbnail: "https://raw.githubusercontent.com/court-tek/myWebFiles/master/jerkChicken.jpg",
    description: "Rich, spicy and hearty with great flavor"
  }, {
    id: 3,
    mealItem: "Oxtail",
    pricesmall: "$13.95",
    pricelarge: "$15.50",
    thumbnail: "https://raw.githubusercontent.com/court-tek/myWebFiles/master/Oxtail.jpg",
    description: "Rich, spicy and hearty with great flavor"
  }];
};

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return [{
    id: 1,
    specName: "Smoked Jerk. Beef Brisket",
    price: "13",
    description: "Our beef brisket is marinated in our homemade Rude Boy Jerk Marinade, covered in our Top Rankin Jerk"
  }, {
    id: 2,
    specName: "Smoked Jerk. Pork Shoulder",
    price: "12",
    description: "Our pork Shoulder is marinated in our homemade Rude Boy Jerk Marinade, covered in our Top Rankin Jerk"
  }, {
    id: 3,
    specName: "Oxtail",
    price: "11",
    description: "Our oxtail is tossed with the onion, green onion, garlic, ginger, chile pepper in large skillet until browned"
  }];
};

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(45);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Footer = __webpack_require__(44);

var _Footer2 = _interopRequireDefault(_Footer);

var _App = __webpack_require__(125);

var _App2 = _interopRequireDefault(_App);

var _reactRedux = __webpack_require__(21);

var _redux = __webpack_require__(18);

var _reducers = __webpack_require__(126);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_App2.default, null)
), document.getElementById("app"));

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "footer",
        null,
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "nav",
            { className: "menu" },
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Reservations"
            ),
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Functions"
            ),
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Contact"
            ),
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Careers"
            )
          ),
          _react2.default.createElement(
            "ul",
            { className: "social-media" },
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "", target: "new" },
                _react2.default.createElement("i", { className: "fab fa-facebook-square" })
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "", target: "new" },
                _react2.default.createElement("i", { className: "fab fa-twitter" })
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "", target: "new" },
                _react2.default.createElement("i", { className: "fab fa-google-plus-g" })
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "", target: "new" },
                _react2.default.createElement("i", { className: "fab fa-youtube" })
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "copyright", style: { margin: "0 25px 0 0" } },
            "\xA9 2018 Copyright"
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var selectMeal = exports.selectMeal = function selectMeal(meal) {
  console.log("You clicked on a plate: ", meal.mealItem);
  return {
    type: "MEAL_SELECTED",
    payload: meal
  };
};

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SiteHeader = function SiteHeader(props) {
  return _react2.default.createElement("header", {
    style: {
      background: "#111",
      zIndex: 1,
      padding: "30px"
    }
  });
};

exports.default = SiteHeader;

/***/ })

},[145]);