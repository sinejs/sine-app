(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sineApp"] = factory();
	else
		root["sineApp"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.cmp.js":
/*!************************!*\
  !*** ./src/app.cmp.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.html */ "./src/app.html");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./src/routes.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var AppComponent = (_dec = sine.decorator.component({
  namespace: 'sine.app',
  selector: 'app',
  template: _app_html__WEBPACK_IMPORTED_MODULE_0__["default"],
  inject: {
    $router: '$router'
  }
}), _dec(_class =
/*#__PURE__*/
function (_sine$Component) {
  _inherits(AppComponent, _sine$Component);

  function AppComponent() {
    var _this;

    _classCallCheck(this, AppComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppComponent).call(this));

    _this.$router.config(_routes__WEBPACK_IMPORTED_MODULE_1__["routes"], {
      base: location.host + location.path
    });

    return _this;
  }

  return AppComponent;
}(sine.Component)) || _class);

/***/ }),

/***/ "./src/app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<n-nav-bar></n-nav-bar>\r\n<router-view></router-view>");

/***/ }),

/***/ "./src/docu/docu.cmp.js":
/*!******************************!*\
  !*** ./src/docu/docu.cmp.js ***!
  \******************************/
/*! exports provided: DocuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocuComponent", function() { return DocuComponent; });
/* harmony import */ var _docu_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docu.html */ "./src/docu/docu.html");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var DocuComponent = (_dec = sine.decorator.component({
  namespace: 'sine.app',
  selector: 'app-docu',
  template: _docu_html__WEBPACK_IMPORTED_MODULE_0__["default"]
}), _dec(_class =
/*#__PURE__*/
function (_sine$Component) {
  _inherits(DocuComponent, _sine$Component);

  function DocuComponent() {
    var _this;

    _classCallCheck(this, DocuComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DocuComponent).call(this));
    _this.items = [{
      label: 'item1'
    }, {
      label: 'item2'
    }, {
      label: 'item3'
    }, {
      label: 'item4'
    }, {
      label: 'item5'
    }];
    _this.options = {
      flexColumn: true
    };
    return _this;
  }

  return DocuComponent;
}(sine.Component)) || _class);

/***/ }),

/***/ "./src/docu/docu.html":
/*!****************************!*\
  !*** ./src/docu/docu.html ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<n-nav :items=\"items\" :options=\"options\"></n-nav>\r\n\r\n<div class=\"bd-example\" style=\"position: relative;padding: 1rem;margin: 1rem -15px 0;border: solid #f8f9fa;border-width: .2rem 0 0;\">\r\n    fdfdsfsd\r\n</div>\r\n<div class=\"bd-clipboard\" style=\"position: relative;float: right;\">\r\n\r\n</div>\r\n<figure class=\"highlight\" style=\"margin-top: 0;margin-left: -15px;margin-right: -15px;margin-top:1rem;margin-bottom:1rem;padding: 1rem;background-color: #f8f9fa\">\r\n    <pre>\r\n        <code><div class=\"bd-clipboard\" style=\"position: relative;float: right;\"></div></code>\r\n    </pre>\r\n</figure>");

/***/ }),

/***/ "./src/docu/index.js":
/*!***************************!*\
  !*** ./src/docu/index.js ***!
  \***************************/
/*! exports provided: DocuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _docu_cmp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docu.cmp */ "./src/docu/docu.cmp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocuComponent", function() { return _docu_cmp__WEBPACK_IMPORTED_MODULE_0__["DocuComponent"]; });



/***/ }),

/***/ "./src/home/home.cmp.js":
/*!******************************!*\
  !*** ./src/home/home.cmp.js ***!
  \******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.html */ "./src/home/home.html");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var HomeComponent = (_dec = sine.decorator.component({
  namespace: 'sine.app',
  selector: 'app-home',
  template: _home_html__WEBPACK_IMPORTED_MODULE_0__["default"]
}), _dec(_class =
/*#__PURE__*/
function (_sine$Component) {
  _inherits(HomeComponent, _sine$Component);

  function HomeComponent() {
    _classCallCheck(this, HomeComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomeComponent).call(this));
  }

  return HomeComponent;
}(sine.Component)) || _class);

/***/ }),

/***/ "./src/home/home.html":
/*!****************************!*\
  !*** ./src/home/home.html ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/home/index.js":
/*!***************************!*\
  !*** ./src/home/index.js ***!
  \***************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_cmp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.cmp */ "./src/home/home.cmp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_cmp__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_cmp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.cmp */ "./src/app.cmp.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home/index.js");
/* harmony import */ var _docu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docu */ "./src/docu/index.js");


var routes = [{
  path: 'home',
  component: _home__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
}, {
  path: 'docu',
  component: _docu__WEBPACK_IMPORTED_MODULE_1__["DocuComponent"]
}];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5lQXBwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zaW5lQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbmVBcHAvLi9zcmMvYXBwLmNtcC5qcyIsIndlYnBhY2s6Ly9zaW5lQXBwLy4vc3JjL2FwcC5odG1sIiwid2VicGFjazovL3NpbmVBcHAvLi9zcmMvZG9jdS9kb2N1LmNtcC5qcyIsIndlYnBhY2s6Ly9zaW5lQXBwLy4vc3JjL2RvY3UvZG9jdS5odG1sIiwid2VicGFjazovL3NpbmVBcHAvLi9zcmMvZG9jdS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lQXBwLy4vc3JjL2hvbWUvaG9tZS5jbXAuanMiLCJ3ZWJwYWNrOi8vc2luZUFwcC8uL3NyYy9ob21lL2hvbWUuaHRtbCIsIndlYnBhY2s6Ly9zaW5lQXBwLy4vc3JjL2hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZUFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5lQXBwLy4vc3JjL3JvdXRlcy5qcyJdLCJuYW1lcyI6WyJBcHBDb21wb25lbnQiLCJzaW5lIiwiZGVjb3JhdG9yIiwiY29tcG9uZW50IiwibmFtZXNwYWNlIiwic2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImluamVjdCIsIiRyb3V0ZXIiLCJjb25maWciLCJyb3V0ZXMiLCJiYXNlIiwibG9jYXRpb24iLCJob3N0IiwicGF0aCIsIkNvbXBvbmVudCIsIkRvY3VDb21wb25lbnQiLCJpdGVtcyIsImxhYmVsIiwib3B0aW9ucyIsImZsZXhDb2x1bW4iLCJIb21lQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFF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QUEsd0M7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQUlMLE1BQU0sR0FBRyxDQUNoQjtBQUNJSSxNQUFJLEVBQUUsTUFEVjtBQUVJWCxXQUFTLEVBQUVrQixtREFBYUE7QUFGNUIsQ0FEZ0IsRUFLaEI7QUFDSVAsTUFBSSxFQUFFLE1BRFY7QUFFSVgsV0FBUyxFQUFFYSxtREFBYUE7QUFGNUIsQ0FMZ0IsQ0FBYixDIiwiZmlsZSI6InNpbmUtYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic2luZUFwcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzaW5lQXBwXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2FwcC5odG1sJztcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxuQHNpbmUuZGVjb3JhdG9yLmNvbXBvbmVudCh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lLmFwcCcsXHJcbiAgICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXHJcbiAgICBpbmplY3Q6IHtcclxuICAgICAgICAkcm91dGVyOiAnJHJvdXRlcidcclxuICAgIH1cclxufSlcclxuY2xhc3MgQXBwQ29tcG9uZW50IGV4dGVuZHMgc2luZS5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy4kcm91dGVyLmNvbmZpZyhyb3V0ZXMsIHtcclxuICAgICAgICAgICAgYmFzZTogbG9jYXRpb24uaG9zdCArIGxvY2F0aW9uLnBhdGhcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IFwiPG4tbmF2LWJhcj48L24tbmF2LWJhcj5cXHJcXG48cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cIiIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2RvY3UuaHRtbCc7XHJcblxyXG5Ac2luZS5kZWNvcmF0b3IuY29tcG9uZW50KHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUuYXBwJyxcclxuICAgIHNlbGVjdG9yOiAnYXBwLWRvY3UnLFxyXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEb2N1Q29tcG9uZW50IGV4dGVuZHMgc2luZS5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdpdGVtMSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdpdGVtMidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdpdGVtMydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdpdGVtNCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdpdGVtNSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgZmxleENvbHVtbjogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBcIjxuLW5hdiA6aXRlbXM9XFxcIml0ZW1zXFxcIiA6b3B0aW9ucz1cXFwib3B0aW9uc1xcXCI+PC9uLW5hdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJiZC1leGFtcGxlXFxcIiBzdHlsZT1cXFwicG9zaXRpb246IHJlbGF0aXZlO3BhZGRpbmc6IDFyZW07bWFyZ2luOiAxcmVtIC0xNXB4IDA7Ym9yZGVyOiBzb2xpZCAjZjhmOWZhO2JvcmRlci13aWR0aDogLjJyZW0gMCAwO1xcXCI+XFxyXFxuICAgIGZkZmRzZnNkXFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiYmQtY2xpcGJvYXJkXFxcIiBzdHlsZT1cXFwicG9zaXRpb246IHJlbGF0aXZlO2Zsb2F0OiByaWdodDtcXFwiPlxcclxcblxcclxcbjwvZGl2PlxcclxcbjxmaWd1cmUgY2xhc3M9XFxcImhpZ2hsaWdodFxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDA7bWFyZ2luLWxlZnQ6IC0xNXB4O21hcmdpbi1yaWdodDogLTE1cHg7bWFyZ2luLXRvcDoxcmVtO21hcmdpbi1ib3R0b206MXJlbTtwYWRkaW5nOiAxcmVtO2JhY2tncm91bmQtY29sb3I6ICNmOGY5ZmFcXFwiPlxcclxcbiAgICA8cHJlPlxcclxcbiAgICAgICAgPGNvZGU+PGRpdiBjbGFzcz1cXFwiYmQtY2xpcGJvYXJkXFxcIiBzdHlsZT1cXFwicG9zaXRpb246IHJlbGF0aXZlO2Zsb2F0OiByaWdodDtcXFwiPjwvZGl2PjwvY29kZT5cXHJcXG4gICAgPC9wcmU+XFxyXFxuPC9maWd1cmU+XCIiLCJleHBvcnQgKiBmcm9tICcuL2RvY3UuY21wJzsiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9ob21lLmh0bWwnO1xyXG5cclxuQHNpbmUuZGVjb3JhdG9yLmNvbXBvbmVudCh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lLmFwcCcsXHJcbiAgICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcclxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBleHRlbmRzIHNpbmUuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBcIlwiIiwiZXhwb3J0ICogZnJvbSAnLi9ob21lLmNtcCc7IiwiZXhwb3J0ICogZnJvbSAnLi9hcHAuY21wJzsiLCJpbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IHsgRG9jdUNvbXBvbmVudCB9IGZyb20gJy4vZG9jdSc7XHJcblxyXG5leHBvcnQgdmFyIHJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnaG9tZScsXHJcbiAgICAgICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICdkb2N1JyxcclxuICAgICAgICBjb21wb25lbnQ6IERvY3VDb21wb25lbnRcclxuICAgIH1cclxuXTsiXSwic291cmNlUm9vdCI6IiJ9