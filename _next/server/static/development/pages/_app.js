module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  siteTitle: "Anurag More | Computer Science Engineer",
  name: "Anurag More",
  email: "anuragbmore@gmail.com",
  github: "https://github.com/anurag1299",
  socialMedia: [{
    name: "GitHub",
    url: "https://github.com/anurag1299"
  }, {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/anurag-more-9aa67a19a/"
  }, {
    name: "Instagram",
    url: "https://www.instagram.com/ludum_elit"
  }],
  navHeight: 100,
  navLinks: [{
    name: "About",
    url: "/#about"
  }, {
    name: "Education",
    url: "/#college"
  }, {
    name: "Work",
    url: "/#projects"
  }, {
    name: "Contact",
    url: "/#contact"
  }],
  colors: {
    blue: "#007BFF",
    navy: "#171C28",
    lightNavy: "#8892B0",
    lightestNavy: "#CCD6F6"
  },
  srConfig: (delay = 200) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0.25,
    viewOffset: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  })
};

/***/ }),

/***/ "./fonts/JetBrainsMono-Bold-Italic.ttf":
/*!*********************************************!*\
  !*** ./fonts/JetBrainsMono-Bold-Italic.ttf ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-Bold-Italic.ttf");

/***/ }),

/***/ "./fonts/JetBrainsMono-Bold-Italic.woff":
/*!**********************************************!*\
  !*** ./fonts/JetBrainsMono-Bold-Italic.woff ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-Bold-Italic.woff");

/***/ }),

/***/ "./fonts/JetBrainsMono-Bold-Italic.woff2":
/*!***********************************************!*\
  !*** ./fonts/JetBrainsMono-Bold-Italic.woff2 ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-Bold-Italic.woff2");

/***/ }),

/***/ "./fonts/JetBrainsMono-Bold.ttf":
/*!**************************************!*\
  !*** ./fonts/JetBrainsMono-Bold.ttf ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-Bold.ttf");

/***/ }),

/***/ "./fonts/JetBrainsMono-Bold.woff":
/*!***************************************!*\
  !*** ./fonts/JetBrainsMono-Bold.woff ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-Bold.woff");

/***/ }),

/***/ "./fonts/JetBrainsMono-Bold.woff2":
/*!****************************************!*\
  !*** ./fonts/JetBrainsMono-Bold.woff2 ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-Bold.woff2");

/***/ }),

/***/ "./fonts/JetBrainsMono-ExtraBold-Italic.ttf":
/*!**************************************************!*\
  !*** ./fonts/JetBrainsMono-ExtraBold-Italic.ttf ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-ExtraBold-Italic.ttf");

/***/ }),

/***/ "./fonts/JetBrainsMono-ExtraBold-Italic.woff":
/*!***************************************************!*\
  !*** ./fonts/JetBrainsMono-ExtraBold-Italic.woff ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-ExtraBold-Italic.woff");

/***/ }),

/***/ "./fonts/JetBrainsMono-ExtraBold-Italic.woff2":
/*!****************************************************!*\
  !*** ./fonts/JetBrainsMono-ExtraBold-Italic.woff2 ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-ExtraBold-Italic.woff2");

/***/ }),

/***/ "./fonts/JetBrainsMono-ExtraBold.ttf":
/*!*******************************************!*\
  !*** ./fonts/JetBrainsMono-ExtraBold.ttf ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-ExtraBold.ttf");

/***/ }),

/***/ "./fonts/JetBrainsMono-ExtraBold.woff":
/*!********************************************!*\
  !*** ./fonts/JetBrainsMono-ExtraBold.woff ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-ExtraBold.woff");

/***/ }),

/***/ "./fonts/JetBrainsMono-ExtraBold.woff2":
/*!*********************************************!*\
  !*** ./fonts/JetBrainsMono-ExtraBold.woff2 ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-ExtraBold.woff2");

/***/ }),

/***/ "./fonts/JetBrainsMono-Italic.ttf":
/*!****************************************!*\
  !*** ./fonts/JetBrainsMono-Italic.ttf ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-Italic.ttf");

/***/ }),

/***/ "./fonts/JetBrainsMono-Italic.woff":
/*!*****************************************!*\
  !*** ./fonts/JetBrainsMono-Italic.woff ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-Italic.woff");

/***/ }),

/***/ "./fonts/JetBrainsMono-Italic.woff2":
/*!******************************************!*\
  !*** ./fonts/JetBrainsMono-Italic.woff2 ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-Italic.woff2");

/***/ }),

/***/ "./fonts/JetBrainsMono-Medium-Italic.ttf":
/*!***********************************************!*\
  !*** ./fonts/JetBrainsMono-Medium-Italic.ttf ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-Medium-Italic.ttf");

/***/ }),

/***/ "./fonts/JetBrainsMono-Medium-Italic.woff":
/*!************************************************!*\
  !*** ./fonts/JetBrainsMono-Medium-Italic.woff ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-Medium-Italic.woff");

/***/ }),

/***/ "./fonts/JetBrainsMono-Medium-Italic.woff2":
/*!*************************************************!*\
  !*** ./fonts/JetBrainsMono-Medium-Italic.woff2 ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-Medium-Italic.woff2");

/***/ }),

/***/ "./fonts/JetBrainsMono-Medium.ttf":
/*!****************************************!*\
  !*** ./fonts/JetBrainsMono-Medium.ttf ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-Medium.ttf");

/***/ }),

/***/ "./fonts/JetBrainsMono-Medium.woff":
/*!*****************************************!*\
  !*** ./fonts/JetBrainsMono-Medium.woff ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-Medium.woff");

/***/ }),

/***/ "./fonts/JetBrainsMono-Medium.woff2":
/*!******************************************!*\
  !*** ./fonts/JetBrainsMono-Medium.woff2 ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-Medium.woff2");

/***/ }),

/***/ "./fonts/JetBrainsMono-Regular.ttf":
/*!*****************************************!*\
  !*** ./fonts/JetBrainsMono-Regular.ttf ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-Regular.ttf");

/***/ }),

/***/ "./fonts/JetBrainsMono-Regular.woff":
/*!******************************************!*\
  !*** ./fonts/JetBrainsMono-Regular.woff ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-Regular.woff");

/***/ }),

/***/ "./fonts/JetBrainsMono-Regular.woff2":
/*!*******************************************!*\
  !*** ./fonts/JetBrainsMono-Regular.woff2 ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/assets/JetBrainsMono-Regular.woff2");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index */ "./styles/index.js");
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, _config__WEBPACK_IMPORTED_MODULE_3__["siteTitle"])), __jsx(_styles_index__WEBPACK_IMPORTED_MODULE_4__["GlobalStyle"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }), __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    })));
  }

}

/***/ }),

/***/ "./styles/Button.js":
/*!**************************!*\
  !*** ./styles/Button.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./styles/theme.js");


const {
  colors,
  fontSizes,
  fonts
} = _theme__WEBPACK_IMPORTED_MODULE_1__["default"];
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Button",
  componentId: "zijj00-0"
})(["color:", ";background-color:transparent;border:1px solid ", ";border-radius:", ";font-size:", ";font-family:", ";line-height:1;text-decoration:none;cursor:pointer;transition:", ";padding:1.25rem 1.75rem;&:hover,&:focus,&:active{background-color:", ";outline:none;}&:after{display:none !important;}"], colors.blue, colors.blue, _theme__WEBPACK_IMPORTED_MODULE_1__["default"].borderRadius, fontSizes.smish, fonts.JetBrainsMono, _theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition, colors.transBlue);
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./styles/Footer.js":
/*!**************************!*\
  !*** ./styles/Footer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./styles/theme.js");


const Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({
  displayName: "Footer",
  componentId: "ypxh3r-0"
})(["margin:0;padding:", ";"], _theme__WEBPACK_IMPORTED_MODULE_1__["default"].margin);
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./styles/GlobalStyles.js":
/*!********************************!*\
  !*** ./styles/GlobalStyles.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./styles/theme.js");
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media */ "./styles/media.js");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixins */ "./styles/mixins.js");
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fonts */ "./styles/fonts.js");
/* harmony import */ var _TransitionStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionStyle */ "./styles/TransitionStyle.js");






const {
  colors,
  fontSizes,
  fonts
} = _theme__WEBPACK_IMPORTED_MODULE_1__["default"];
const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  /* ${_fonts__WEBPACK_IMPORTED_MODULE_4__["default"]}; */

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.darkNavy};
    color: ${colors.slate};
    line-height: 1.3;
    font-family: ${fonts.JetBrainsMono};
    font-size: ${fontSizes.xl};
    ${_media__WEBPACK_IMPORTED_MODULE_2__["default"].phablet`font-size: ${fontSizes.lg};`}

    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      #root > #content > * {
        filter: blur(5px) brightness(0.7);
        transition: ${_theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  ::selection {
    background-color: ${colors.slate};
    color: ${colors.lightestSlate};
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    color: ${colors.lightestSlate};
    margin: 0 0 10px 0;
  }

  h1 {
    &.big-title {
      font-size: 80px;
      line-height: 1.1;
      margin: 0;
      ${_media__WEBPACK_IMPORTED_MODULE_2__["default"].desktop`font-size: 70px;`};
      ${_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet`font-size: 60px;`};
      ${_media__WEBPACK_IMPORTED_MODULE_2__["default"].phablet`font-size: 50px;`};
      ${_media__WEBPACK_IMPORTED_MODULE_2__["default"].phone`font-size: 40px;`};
    }

    &.medium-title {
      font-size: 60px;
      line-height: 1.1;
      margin: 0;
      ${_media__WEBPACK_IMPORTED_MODULE_2__["default"].desktop`font-size: 50px;`};
      ${_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet`font-size: 40px;`};
    }
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""] img:not([alt]) {
    filter: blur(5px);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${_theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${colors.blue};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;

    &:focus,
    &:active {
      outline-color: ${colors.lightSlate};
    }
  }

  input,
  textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 15px 0;

    & > a {
      ${_mixins__WEBPACK_IMPORTED_MODULE_3__["default"].inlineLink};
    }

    & > code {
      background-color: ${colors.lightNavy};
      color: ${colors.white};
      font-size: ${fontSizes.sm};
      border-radius: ${_theme__WEBPACK_IMPORTED_MODULE_1__["default"].borderRadius};
      padding: 0.3em 0.5em;
    }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: ${fontSizes.lg};
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: "▹";
          position: absolute;
          left: 0;
          color: ${colors.blue};
        }
      }
    }
  }

  blockquote {
    border-left-color: ${colors.blue};
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: 24px;
    }
  }

  hr {
    background-color: ${colors.lightestNavy};
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  code {
    font-family: ${fonts.JetBrainsMono};
    font-size: ${fontSizes.md};
  }

  #logo {
    color: ${colors.blue};
  }

  .overline {
    color: ${colors.blue};
    font-family: ${fonts.JetBrainsMono};
    font-size: ${fontSizes.md};
    font-weight: normal;
  }

  .subtitle {
    color: ${colors.blue};
    margin: 0 0 20px 0;
    font-size: ${fontSizes.md};
    font-family: ${fonts.JetBrainsMono};
    font-weight: normal;
    line-height: 1.5;
    ${_media__WEBPACK_IMPORTED_MODULE_2__["default"].desktop`font-size: ${fontSizes.sm};`};
    ${_media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet`font-size: ${fontSizes.smish};`};

    a {
      ${_mixins__WEBPACK_IMPORTED_MODULE_3__["default"].inlineLink};
      line-height: 1.5;
    }
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: ${colors.blue};

    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }
    a {
      ${_mixins__WEBPACK_IMPORTED_MODULE_3__["default"].inlineLink};
      font-family: ${fonts.JetBrainsMono};
      font-size: ${fontSizes.sm};
      font-weight: bold;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  ${_TransitionStyle__WEBPACK_IMPORTED_MODULE_5__["default"]};
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./styles/Header.js":
/*!**************************!*\
  !*** ./styles/Header.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "Header",
  componentId: "sc-1a2x9wi-0"
})(["width:100%;"]);
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./styles/Heading.js":
/*!***************************!*\
  !*** ./styles/Heading.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./styles/theme.js");
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media */ "./styles/media.js");



const {
  colors,
  fontSizes,
  fonts
} = _theme__WEBPACK_IMPORTED_MODULE_1__["default"];
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "Heading",
  componentId: "anuyyr-0"
})(["position:relative;display:flex;align-items:center;margin:10px 0 40px;width:100%;white-space:nowrap;font-size:", ";", ";", ";&:before{counter-increment:section;content:\"0\" counter(section) \".\";margin-right:10px;font-family:", ";font-weight:normal;color:", ";font-size:", ";position:relative;bottom:-2px;", ";}&:after{content:\"\";display:block;height:1px;width:300px;background-color:", ";position:relative;margin-left:20px;", ";", ";", ";}"], fontSizes.h3, _media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet`font-size: 24px;`, _media__WEBPACK_IMPORTED_MODULE_2__["default"].phablet`font-size: 20px;`, fonts.JetBrainsMono, colors.blue, fontSizes.xl, _media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet`font-size: ${fontSizes.lg};`, colors.lightestNavy, _media__WEBPACK_IMPORTED_MODULE_2__["default"].desktop`width: 200px`, _media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet`width: 100%;`, _media__WEBPACK_IMPORTED_MODULE_2__["default"].thone`margin-left: 10px;`);
/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "./styles/InlineLink.js":
/*!******************************!*\
  !*** ./styles/InlineLink.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./styles/theme.js");


const {
  colors
} = _theme__WEBPACK_IMPORTED_MODULE_1__["default"];
const InlineLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "InlineLink",
  componentId: "sc-1byoqpk-0"
})(["display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;position:relative;transition:", ";cursor:pointer;&:hover,&:focus,&:active{color:", ";outline:0;&:after{width:100%;}}&:after{content:\"\";display:block;width:0;height:1px;position:relative;bottom:0.37em;background-color:", ";transition:", ";}"], _theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition, colors.blue, colors.blue, _theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition);
/* harmony default export */ __webpack_exports__["default"] = (InlineLink);

/***/ }),

/***/ "./styles/Main.js":
/*!************************!*\
  !*** ./styles/Main.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins */ "./styles/mixins.js");
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media */ "./styles/media.js");



const Main = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({
  displayName: "Main",
  componentId: "sc-1b282it-0"
})(["", ";margin:0 auto;width:100%;max-width:1600px;min-height:100vh;padding-top:200px;padding-bottom:200px;", ";", ";", ";&.fillHeight{padding-top:0;padding-bottom:0;", ";", ";", ";}"], _mixins__WEBPACK_IMPORTED_MODULE_1__["default"].sidePadding, _media__WEBPACK_IMPORTED_MODULE_2__["default"].desktop`
    padding-top: 200px;
    padding-bottom: 200px;
  `, _media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet`
    padding-top: 150px;
    padding-bottom: 150px;
  `, _media__WEBPACK_IMPORTED_MODULE_2__["default"].phablet`
    padding-top: 125px;
    padding-bottom: 125px;
  `, _media__WEBPACK_IMPORTED_MODULE_2__["default"].desktop`
    padding-top: 0;
    padding-bottom: 0;
  `, _media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet`
    padding-top: 0;
    padding-bottom: 0;
  `, _media__WEBPACK_IMPORTED_MODULE_2__["default"].phablet`
    padding-top: 0;
    padding-bottom: 0;
  `);
/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./styles/Section.js":
/*!***************************!*\
  !*** ./styles/Section.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media */ "./styles/media.js");


const Seciton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "Section__Seciton",
  componentId: "sc-1ct6tgq-0"
})(["margin:0 auto;padding:150px 0;max-width:1000px;", ";"], _media__WEBPACK_IMPORTED_MODULE_1__["default"].tablet`padding: 100px 0;`);
/* harmony default export */ __webpack_exports__["default"] = (Seciton);

/***/ }),

/***/ "./styles/TransitionStyle.js":
/*!***********************************!*\
  !*** ./styles/TransitionStyle.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./styles/theme.js");


const TransitionStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([".fadeup-enter{opacity:0.01;transform:translateY(20px);transition:opacity 300ms ", ",transform 300ms ", ";}.fadeup-enter-active{opacity:1;transform:translateY(0px);transition:opacity 300ms ", ",transform 300ms ", ";}.fadedown-enter{opacity:0.01;transform:translateY(-20px);transition:opacity 300ms ", ",transform 300ms ", ";}.fadedown-enter-active{opacity:1;transform:translateY(0px);transition:opacity 300ms ", ",transform 300ms ", ";}.fade-enter{opacity:0.01;transition:opacity 300ms ", ";}.fade-enter-active{opacity:1;transition:opacity 300ms ", ";}"], _theme__WEBPACK_IMPORTED_MODULE_1__["default"].easing, _theme__WEBPACK_IMPORTED_MODULE_1__["default"].easing, _theme__WEBPACK_IMPORTED_MODULE_1__["default"].easing, _theme__WEBPACK_IMPORTED_MODULE_1__["default"].easing, _theme__WEBPACK_IMPORTED_MODULE_1__["default"].easing, _theme__WEBPACK_IMPORTED_MODULE_1__["default"].easing, _theme__WEBPACK_IMPORTED_MODULE_1__["default"].easing, _theme__WEBPACK_IMPORTED_MODULE_1__["default"].easing, _theme__WEBPACK_IMPORTED_MODULE_1__["default"].easing, _theme__WEBPACK_IMPORTED_MODULE_1__["default"].easing);
/* harmony default export */ __webpack_exports__["default"] = (TransitionStyle);

/***/ }),

/***/ "./styles/fonts.js":
/*!*************************!*\
  !*** ./styles/fonts.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fonts_JetBrainsMono_Regular_ttf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fonts/JetBrainsMono-Regular.ttf */ "./fonts/JetBrainsMono-Regular.ttf");
/* harmony import */ var _fonts_JetBrainsMono_Regular_woff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/JetBrainsMono-Regular.woff */ "./fonts/JetBrainsMono-Regular.woff");
/* harmony import */ var _fonts_JetBrainsMono_Regular_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/JetBrainsMono-Regular.woff2 */ "./fonts/JetBrainsMono-Regular.woff2");
/* harmony import */ var _fonts_JetBrainsMono_Medium_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/JetBrainsMono-Medium.ttf */ "./fonts/JetBrainsMono-Medium.ttf");
/* harmony import */ var _fonts_JetBrainsMono_Medium_woff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/JetBrainsMono-Medium.woff */ "./fonts/JetBrainsMono-Medium.woff");
/* harmony import */ var _fonts_JetBrainsMono_Medium_woff2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fonts/JetBrainsMono-Medium.woff2 */ "./fonts/JetBrainsMono-Medium.woff2");
/* harmony import */ var _fonts_JetBrainsMono_Medium_Italic_ttf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fonts/JetBrainsMono-Medium-Italic.ttf */ "./fonts/JetBrainsMono-Medium-Italic.ttf");
/* harmony import */ var _fonts_JetBrainsMono_Medium_Italic_woff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fonts/JetBrainsMono-Medium-Italic.woff */ "./fonts/JetBrainsMono-Medium-Italic.woff");
/* harmony import */ var _fonts_JetBrainsMono_Medium_Italic_woff2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fonts/JetBrainsMono-Medium-Italic.woff2 */ "./fonts/JetBrainsMono-Medium-Italic.woff2");
/* harmony import */ var _fonts_JetBrainsMono_Italic_ttf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../fonts/JetBrainsMono-Italic.ttf */ "./fonts/JetBrainsMono-Italic.ttf");
/* harmony import */ var _fonts_JetBrainsMono_Italic_woff__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../fonts/JetBrainsMono-Italic.woff */ "./fonts/JetBrainsMono-Italic.woff");
/* harmony import */ var _fonts_JetBrainsMono_Italic_woff2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../fonts/JetBrainsMono-Italic.woff2 */ "./fonts/JetBrainsMono-Italic.woff2");
/* harmony import */ var _fonts_JetBrainsMono_ExtraBold_ttf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../fonts/JetBrainsMono-ExtraBold.ttf */ "./fonts/JetBrainsMono-ExtraBold.ttf");
/* harmony import */ var _fonts_JetBrainsMono_ExtraBold_woff__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../fonts/JetBrainsMono-ExtraBold.woff */ "./fonts/JetBrainsMono-ExtraBold.woff");
/* harmony import */ var _fonts_JetBrainsMono_ExtraBold_woff2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../fonts/JetBrainsMono-ExtraBold.woff2 */ "./fonts/JetBrainsMono-ExtraBold.woff2");
/* harmony import */ var _fonts_JetBrainsMono_ExtraBold_Italic_ttf__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../fonts/JetBrainsMono-ExtraBold-Italic.ttf */ "./fonts/JetBrainsMono-ExtraBold-Italic.ttf");
/* harmony import */ var _fonts_JetBrainsMono_ExtraBold_Italic_woff__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../fonts/JetBrainsMono-ExtraBold-Italic.woff */ "./fonts/JetBrainsMono-ExtraBold-Italic.woff");
/* harmony import */ var _fonts_JetBrainsMono_ExtraBold_Italic_woff2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../fonts/JetBrainsMono-ExtraBold-Italic.woff2 */ "./fonts/JetBrainsMono-ExtraBold-Italic.woff2");
/* harmony import */ var _fonts_JetBrainsMono_Bold_ttf__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../fonts/JetBrainsMono-Bold.ttf */ "./fonts/JetBrainsMono-Bold.ttf");
/* harmony import */ var _fonts_JetBrainsMono_Bold_woff__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../fonts/JetBrainsMono-Bold.woff */ "./fonts/JetBrainsMono-Bold.woff");
/* harmony import */ var _fonts_JetBrainsMono_Bold_woff2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../fonts/JetBrainsMono-Bold.woff2 */ "./fonts/JetBrainsMono-Bold.woff2");
/* harmony import */ var _fonts_JetBrainsMono_Bold_Italic_ttf__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../fonts/JetBrainsMono-Bold-Italic.ttf */ "./fonts/JetBrainsMono-Bold-Italic.ttf");
/* harmony import */ var _fonts_JetBrainsMono_Bold_Italic_woff__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../fonts/JetBrainsMono-Bold-Italic.woff */ "./fonts/JetBrainsMono-Bold-Italic.woff");
/* harmony import */ var _fonts_JetBrainsMono_Bold_Italic_woff2__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../fonts/JetBrainsMono-Bold-Italic.woff2 */ "./fonts/JetBrainsMono-Bold-Italic.woff2");

























const FontFaces = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@font-face{font-family:\"JetBrains Mono\";src:url(", ") format(\"woff2\"),url(", ") format(\"truetype\"),url(", ") format(\"woff\");font-weight:normal;font-style:normal;}@font-face{font-family:\"JetBrains Mono\";src:url(", ") format(\"woff2\"),url(", ") format(\"truetype\"),url(", ") format(\"woff\");font-weight:normal;font-style:italic;}@font-face{font-family:\"JetBrains Mono\";src:url(", ") format(\"woff2\"),url(", ") format(\"truetype\"),url(", ") format(\"woff\");font-weight:500;font-style:normal;}@font-face{font-family:\"JetBrains Mono\";src:url(", ") format(\"woff2\"),url(", ") format(\"truetype\"),url(", ") format(\"woff\");font-weight:500;font-style:normal;}@font-face{font-family:\"JetBrains Mono\";src:url(", ") format(\"woff2\"),url(", ") format(\"truetype\"),url(", ") format(\"woff\");font-weight:700;font-style:normal;}@font-face{font-family:\"JetBrains Mono\";src:url(", ") format(\"woff2\"),url(", ") format(\"truetype\"),url(", ") format(\"woff\");font-weight:700;font-style:italic;}@font-face{font-family:\"JetBrains Mono\";src:url(", ") format(\"woff2\"),url(", ") format(\"truetype\"),url(", ") format(\"woff\");font-weight:800;font-style:normal;}@font-face{font-family:\"JetBrains Mono\";src:url(", ") format(\"woff2\"),url(", ") format(\"truetype\"),url(", ") format(\"woff\");font-weight:800;font-style:italic;}"], _fonts_JetBrainsMono_Regular_woff2__WEBPACK_IMPORTED_MODULE_3__["default"], _fonts_JetBrainsMono_Regular_ttf__WEBPACK_IMPORTED_MODULE_1__["default"], _fonts_JetBrainsMono_Regular_woff__WEBPACK_IMPORTED_MODULE_2__["default"], _fonts_JetBrainsMono_Italic_woff2__WEBPACK_IMPORTED_MODULE_12__["default"], _fonts_JetBrainsMono_Italic_ttf__WEBPACK_IMPORTED_MODULE_10__["default"], _fonts_JetBrainsMono_Italic_woff__WEBPACK_IMPORTED_MODULE_11__["default"], _fonts_JetBrainsMono_Medium_woff2__WEBPACK_IMPORTED_MODULE_6__["default"], _fonts_JetBrainsMono_Medium_ttf__WEBPACK_IMPORTED_MODULE_4__["default"], _fonts_JetBrainsMono_Medium_woff__WEBPACK_IMPORTED_MODULE_5__["default"], _fonts_JetBrainsMono_Medium_Italic_woff2__WEBPACK_IMPORTED_MODULE_9__["default"], _fonts_JetBrainsMono_Medium_Italic_ttf__WEBPACK_IMPORTED_MODULE_7__["default"], _fonts_JetBrainsMono_Medium_Italic_woff__WEBPACK_IMPORTED_MODULE_8__["default"], _fonts_JetBrainsMono_Bold_woff2__WEBPACK_IMPORTED_MODULE_21__["default"], _fonts_JetBrainsMono_Bold_ttf__WEBPACK_IMPORTED_MODULE_19__["default"], _fonts_JetBrainsMono_Bold_woff__WEBPACK_IMPORTED_MODULE_20__["default"], _fonts_JetBrainsMono_Bold_Italic_woff2__WEBPACK_IMPORTED_MODULE_24__["default"], _fonts_JetBrainsMono_Bold_Italic_ttf__WEBPACK_IMPORTED_MODULE_22__["default"], _fonts_JetBrainsMono_Bold_Italic_woff__WEBPACK_IMPORTED_MODULE_23__["default"], _fonts_JetBrainsMono_ExtraBold_woff2__WEBPACK_IMPORTED_MODULE_15__["default"], _fonts_JetBrainsMono_ExtraBold_ttf__WEBPACK_IMPORTED_MODULE_13__["default"], _fonts_JetBrainsMono_ExtraBold_woff__WEBPACK_IMPORTED_MODULE_14__["default"], _fonts_JetBrainsMono_ExtraBold_Italic_woff2__WEBPACK_IMPORTED_MODULE_18__["default"], _fonts_JetBrainsMono_ExtraBold_Italic_ttf__WEBPACK_IMPORTED_MODULE_16__["default"], _fonts_JetBrainsMono_ExtraBold_Italic_woff__WEBPACK_IMPORTED_MODULE_17__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (FontFaces);

/***/ }),

/***/ "./styles/index.js":
/*!*************************!*\
  !*** ./styles/index.js ***!
  \*************************/
/*! exports provided: theme, GlobalStyle, mixins, media, Header, Main, Section, Footer, Heading, Button, InlineLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ "./styles/theme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return _theme__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalStyles */ "./styles/GlobalStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return _GlobalStyles__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins */ "./styles/mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixins", function() { return _mixins__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media */ "./styles/media.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "media", function() { return _media__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./styles/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Main */ "./styles/Main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return _Main__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Section */ "./styles/Section.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _Section__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer */ "./styles/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Heading */ "./styles/Heading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _Heading__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Button */ "./styles/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _InlineLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InlineLink */ "./styles/InlineLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineLink", function() { return _InlineLink__WEBPACK_IMPORTED_MODULE_10__["default"]; });













/***/ }),

/***/ "./styles/media.js":
/*!*************************!*\
  !*** ./styles/media.js ***!
  \*************************/
/*! exports provided: media, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "media", function() { return media; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const sizes = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330
};
const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;

  accumulator[label] = (...args) => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media (max-width:", "em){", ";}"], emSize, Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(...args));

  return accumulator;
}, {});
/* harmony default export */ __webpack_exports__["default"] = (media);

/***/ }),

/***/ "./styles/mixins.js":
/*!**************************!*\
  !*** ./styles/mixins.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./styles/theme.js");
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media */ "./styles/media.js");



const {
  colors,
  fontSizes,
  fonts
} = _theme__WEBPACK_IMPORTED_MODULE_1__["default"];
const mixins = {
  flexCenter: Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["display:flex;justify-content:center;align-items:center;"]),
  flexBetween: Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["display:flex;justify-content:space-between;align-items:center;"]),
  outile: Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["outline:1px solid red;"]),
  link: Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;color:inherit;position:relative;transition:", ";cursor:pointer;&:hover,&:active,&:focus{color:", ";outline:0;}"], _theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition, colors.blue),
  inlineLink: Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;position:relative;transition:", ";cursor:pointer;color:", ";&:hover,&:focus,&:active{color:", ";outline:0;&:after{width:100%;}& > *{color:", " !important;transition:", ";}}&:after{content:\"\";display:block;width:0;height:1px;position:relative;bottom:0.1em;background-color:", ";transition:", ";opacity:0.5;}"], _theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition, colors.blue, colors.blue, colors.blue, _theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition, colors.blue, _theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition),
  smallButton: Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["color:", ";background-color:transparent;border:1px solid ", ";border-radius:", ";padding:0.75rem 1rem;font-size:", ";font-family:", ";line-height:1;text-decoration:none;cursor:pointer;transition:", ";&:hover,&:focus,&:active{background-color:", ";}&:after{display:none !important;}"], colors.blue, colors.blue, _theme__WEBPACK_IMPORTED_MODULE_1__["default"].borderRadius, fontSizes.smish, fonts.JetBrainsMono, _theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition, colors.transBlue),
  bigButton: Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["color:", ";background-color:transparent;border:1px solid ", ";border-radius:", ";padding:1.25rem 1.75rem;font-size:", ";font-family:", ";line-height:1;text-decoration:none;cursor:pointer;transition:", ";&:hover,&:focus,&:active{background-color:", ";}&:after{display:none !important;}"], colors.blue, colors.blue, _theme__WEBPACK_IMPORTED_MODULE_1__["default"].borderRadius, fontSizes.sm, fonts.JetBrainsMono, _theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition, colors.transBlue),
  sidePadding: Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding:0 150px;", ";", ";", ";"], _media__WEBPACK_IMPORTED_MODULE_2__["default"].desktop`padding: 0 100px;`, _media__WEBPACK_IMPORTED_MODULE_2__["default"].tablet`padding: 0 50px;`, _media__WEBPACK_IMPORTED_MODULE_2__["default"].phablet`padding: 0 25px;`),
  boxShadow: Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["box-shadow:0 10px 30px -15px ", ";transition:", ";&:hover,&:focus{box-shadow:0 20px 30px -15px ", ";}"], colors.shadowNavy, _theme__WEBPACK_IMPORTED_MODULE_1__["default"].transition, colors.shadowNavy),
  fancyList: Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding:0;margin:0;list-style:none;font-size:", ";li{position:relative;padding-left:30px;margin-bottom:10px;&:before{content:\"\u25B9\";position:absolute;left:0;color:", ";}}"], fontSizes.lg, colors.blue)
};
/* harmony default export */ __webpack_exports__["default"] = (mixins);

/***/ }),

/***/ "./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index */ "./utils/index.js");

const ACCENT = "#007BFF";
const Dark_BG = "#171C28";
const BG = "#0a192f";
const theme = {
  colors: {
    darkNavy: Dark_BG,
    navy: BG,
    lightNavy: "#172a45",
    lightestNavy: "#303C55",
    slate: "#8892b0",
    lightSlate: "#a8b2d1",
    lightestSlate: "#ccd6f6",
    white: "#e6f1ff",
    blue: ACCENT,
    transBlue: Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["hex2rgba"])(ACCENT, 0.07),
    shadowNavy: Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["hex2rgba"])(Dark_BG, 0.07),
    navShadow: " #000d1a"
  },
  fonts: {
    JetBrainsMono: "JetBrains Mono"
  },
  fontSizes: {
    xs: "12px",
    smish: "13px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "22px",
    h3: "32px"
  },
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
  borderRadius: "3px",
  navHeight: "100px",
  navScrollHeight: "70px",
  margin: "20px",
  tabHeight: 42,
  tabWidth: 120,
  radius: 3,
  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
  navDelay: 1000,
  loaderDelay: 2000
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: throttle, hex2rgba */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex2rgba", function() { return hex2rgba; });
const throttle = (func, wait = 100) => {
  let timer = null;
  return function (...args) {
    if (timer === null) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
};
const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLUJvbGQtSXRhbGljLnR0ZiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLUJvbGQtSXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vZm9udHMvSmV0QnJhaW5zTW9uby1Cb2xkLUl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLUJvbGQudHRmIiwid2VicGFjazovLy8uL2ZvbnRzL0pldEJyYWluc01vbm8tQm9sZC53b2ZmIiwid2VicGFjazovLy8uL2ZvbnRzL0pldEJyYWluc01vbm8tQm9sZC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLUV4dHJhQm9sZC1JdGFsaWMudHRmIiwid2VicGFjazovLy8uL2ZvbnRzL0pldEJyYWluc01vbm8tRXh0cmFCb2xkLUl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL2ZvbnRzL0pldEJyYWluc01vbm8tRXh0cmFCb2xkLUl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLUV4dHJhQm9sZC50dGYiLCJ3ZWJwYWNrOi8vLy4vZm9udHMvSmV0QnJhaW5zTW9uby1FeHRyYUJvbGQud29mZiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLUV4dHJhQm9sZC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLUl0YWxpYy50dGYiLCJ3ZWJwYWNrOi8vLy4vZm9udHMvSmV0QnJhaW5zTW9uby1JdGFsaWMud29mZiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLUl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLU1lZGl1bS1JdGFsaWMudHRmIiwid2VicGFjazovLy8uL2ZvbnRzL0pldEJyYWluc01vbm8tTWVkaXVtLUl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL2ZvbnRzL0pldEJyYWluc01vbm8tTWVkaXVtLUl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLU1lZGl1bS50dGYiLCJ3ZWJwYWNrOi8vLy4vZm9udHMvSmV0QnJhaW5zTW9uby1NZWRpdW0ud29mZiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLU1lZGl1bS53b2ZmMiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLVJlZ3VsYXIudHRmIiwid2VicGFjazovLy8uL2ZvbnRzL0pldEJyYWluc01vbm8tUmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL2ZvbnRzL0pldEJyYWluc01vbm8tUmVndWxhci53b2ZmMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvR2xvYmFsU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0lubGluZUxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL1RyYW5zaXRpb25TdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvZm9udHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9tZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvbWl4aW5zLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNpdGVUaXRsZSIsIm5hbWUiLCJlbWFpbCIsImdpdGh1YiIsInNvY2lhbE1lZGlhIiwidXJsIiwibmF2SGVpZ2h0IiwibmF2TGlua3MiLCJjb2xvcnMiLCJibHVlIiwibmF2eSIsImxpZ2h0TmF2eSIsImxpZ2h0ZXN0TmF2eSIsInNyQ29uZmlnIiwiZGVsYXkiLCJvcmlnaW4iLCJkaXN0YW5jZSIsImR1cmF0aW9uIiwicm90YXRlIiwieCIsInkiLCJ6Iiwib3BhY2l0eSIsInNjYWxlIiwiZWFzaW5nIiwibW9iaWxlIiwicmVzZXQiLCJ1c2VEZWxheSIsInZpZXdGYWN0b3IiLCJ2aWV3T2Zmc2V0IiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfX2VzTW9kdWxlIiwiQ29udGFpbmVyIiwiY3JlYXRlVXJsIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsIl9yZWYiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiQXBwIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJlcnJvciIsIl9lcnJvckluZm8iLCJyZW5kZXIiLCJyb3V0ZXIiLCJfX05fU1NHIiwiX19OX1NTUCIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwid2FyblVybCIsImV4ZWNPbmNlIiwiY29uc29sZSIsIndhcm4iLCJwIiwiY2hpbGRyZW4iLCJwYXRobmFtZSIsImFzUGF0aCIsInF1ZXJ5IiwiYmFjayIsInB1c2giLCJhcyIsInB1c2hUbyIsImhyZWYiLCJwdXNoUm91dGUiLCJwdXNoVXJsIiwicmVwbGFjZSIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJNeUFwcCIsImZvbnRTaXplcyIsImZvbnRzIiwidGhlbWUiLCJCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJib3JkZXJSYWRpdXMiLCJzbWlzaCIsIkpldEJyYWluc01vbm8iLCJ0cmFuc2l0aW9uIiwidHJhbnNCbHVlIiwiRm9vdGVyIiwiZm9vdGVyIiwibWFyZ2luIiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkZvbnRGYWNlcyIsImRhcmtOYXZ5Iiwic2xhdGUiLCJ4bCIsIm1lZGlhIiwicGhhYmxldCIsImxnIiwibGlnaHRlc3RTbGF0ZSIsImRlc2t0b3AiLCJ0YWJsZXQiLCJwaG9uZSIsImxpZ2h0U2xhdGUiLCJtaXhpbnMiLCJpbmxpbmVMaW5rIiwid2hpdGUiLCJzbSIsIm1kIiwiVHJhbnNpdGlvblN0eWxlcyIsIkhlYWRlciIsImhlYWRlciIsIkhlYWRpbmciLCJoMyIsInRob25lIiwiSW5saW5lTGluayIsImEiLCJNYWluIiwibWFpbiIsInNpZGVQYWRkaW5nIiwiU2VjaXRvbiIsInNlY3Rpb24iLCJUcmFuc2l0aW9uU3R5bGUiLCJjc3MiLCJKRVRCUkFJTlNNT05PUmVndWxhcldPRkYyIiwiSkVUQlJBSU5TTU9OT1JlZ3VsYXJUVEYiLCJKRVRCUkFJTlNNT05PUmVndWxhcldPRkYiLCJKRVRCUkFJTlNNT05PSXRhbGljV09GRjIiLCJKRVRCUkFJTlNNT05PSXRhbGljVFRGIiwiSkVUQlJBSU5TTU9OT0l0YWxpY1dPRkYiLCJKRVRCUkFJTlNNT05PTWVkaXVtV09GRjIiLCJKRVRCUkFJTlNNT05PTWVkaXVtVFRGIiwiSkVUQlJBSU5TTU9OT01lZGl1bVdPRkYiLCJKRVRCUkFJTlNNT05PTWVkaXVtSXRhbGljV09GRjIiLCJKRVRCUkFJTlNNT05PTWVkaXVtSXRhbGljVFRGIiwiSkVUQlJBSU5TTU9OT01lZGl1bUl0YWxpY1dPRkYiLCJKRVRCUkFJTlNNT05PQm9sZFdPRkYyIiwiSkVUQlJBSU5TTU9OT0JvbGRUVEYiLCJKRVRCUkFJTlNNT05PQm9sZFdPRkYiLCJKRVRCUkFJTlNNT05PQm9sZEl0YWxpY1dPRkYyIiwiSkVUQlJBSU5TTU9OT0JvbGRJdGFsaWNUVEYiLCJKRVRCUkFJTlNNT05PQm9sZEl0YWxpY1dPRkYiLCJKRVRCUkFJTlNNT05PRXh0cmFCb2xkV09GRjIiLCJKRVRCUkFJTlNNT05PRXh0cmFCb2xkVFRGIiwiSkVUQlJBSU5TTU9OT0V4dHJhQm9sZFdPRkYiLCJKRVRCUkFJTlNNT05PRXh0cmFCb2xkSXRhbGljV09GRjIiLCJKRVRCUkFJTlNNT05PRXh0cmFCb2xkSXRhbGljVFRGIiwiSkVUQlJBSU5TTU9OT0V4dHJhQm9sZEl0YWxpY1dPRkYiLCJzaXplcyIsImdpYW50IiwiYmlnRGVza3RvcCIsInRpbnkiLCJrZXlzIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJsYWJlbCIsImVtU2l6ZSIsImFyZ3MiLCJmbGV4Q2VudGVyIiwiZmxleEJldHdlZW4iLCJvdXRpbGUiLCJsaW5rIiwic21hbGxCdXR0b24iLCJiaWdCdXR0b24iLCJib3hTaGFkb3ciLCJzaGFkb3dOYXZ5IiwiZmFuY3lMaXN0IiwiQUNDRU5UIiwiRGFya19CRyIsIkJHIiwiaGV4MnJnYmEiLCJuYXZTaGFkb3ciLCJ4cyIsInh4bCIsIm5hdlNjcm9sbEhlaWdodCIsInRhYkhlaWdodCIsInRhYldpZHRoIiwicmFkaXVzIiwiaGFtYnVyZ2VyV2lkdGgiLCJoYW1CZWZvcmUiLCJoYW1CZWZvcmVBY3RpdmUiLCJoYW1BZnRlciIsImhhbUFmdGVyQWN0aXZlIiwibmF2RGVsYXkiLCJsb2FkZXJEZWxheSIsInRocm90dGxlIiwiZnVuYyIsIndhaXQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJhcHBseSIsImhleCIsImFscGhhIiwiciIsImciLCJiIiwibWF0Y2giLCJtYXAiLCJwYXJzZUludCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLCtEOzs7Ozs7Ozs7OztBQ0FBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZkMsV0FBUyxFQUFFLHlDQURJO0FBRWZDLE1BQUksRUFBRSxhQUZTO0FBR2ZDLE9BQUssRUFBRSx1QkFIUTtBQUlmQyxRQUFNLEVBQUUsK0JBSk87QUFLZkMsYUFBVyxFQUFFLENBQ1g7QUFDRUgsUUFBSSxFQUFFLFFBRFI7QUFFRUksT0FBRyxFQUFFO0FBRlAsR0FEVyxFQUtYO0FBQ0VKLFFBQUksRUFBRSxVQURSO0FBRUVJLE9BQUcsRUFBRTtBQUZQLEdBTFcsRUFTWDtBQUNFSixRQUFJLEVBQUUsV0FEUjtBQUVFSSxPQUFHLEVBQUU7QUFGUCxHQVRXLENBTEU7QUFvQmZDLFdBQVMsRUFBRSxHQXBCSTtBQXFCZkMsVUFBUSxFQUFFLENBQ1I7QUFDRU4sUUFBSSxFQUFFLE9BRFI7QUFFRUksT0FBRyxFQUFFO0FBRlAsR0FEUSxFQUtSO0FBQ0VKLFFBQUksRUFBRSxXQURSO0FBRUVJLE9BQUcsRUFBRTtBQUZQLEdBTFEsRUFTUjtBQUNFSixRQUFJLEVBQUUsTUFEUjtBQUVFSSxPQUFHLEVBQUU7QUFGUCxHQVRRLEVBYVI7QUFDRUosUUFBSSxFQUFFLFNBRFI7QUFFRUksT0FBRyxFQUFFO0FBRlAsR0FiUSxDQXJCSztBQXVDZkcsUUFBTSxFQUFFO0FBQ05DLFFBQUksRUFBRSxTQURBO0FBRU5DLFFBQUksRUFBRSxTQUZBO0FBR05DLGFBQVMsRUFBRSxTQUhMO0FBSU5DLGdCQUFZLEVBQUU7QUFKUixHQXZDTztBQTZDZkMsVUFBUSxFQUFFLENBQUNDLEtBQUssR0FBRyxHQUFULE1BQWtCO0FBQzFCQyxVQUFNLEVBQUUsUUFEa0I7QUFFMUJDLFlBQVEsRUFBRSxNQUZnQjtBQUcxQkMsWUFBUSxFQUFFLEdBSGdCO0FBSTFCSCxTQUowQjtBQUsxQkksVUFBTSxFQUFFO0FBQUVDLE9BQUMsRUFBRSxDQUFMO0FBQVFDLE9BQUMsRUFBRSxDQUFYO0FBQWNDLE9BQUMsRUFBRTtBQUFqQixLQUxrQjtBQU0xQkMsV0FBTyxFQUFFLENBTmlCO0FBTzFCQyxTQUFLLEVBQUUsQ0FQbUI7QUFRMUJDLFVBQU0sRUFBRSxzQ0FSa0I7QUFTMUJDLFVBQU0sRUFBRSxJQVRrQjtBQVUxQkMsU0FBSyxFQUFFLEtBVm1CO0FBVzFCQyxZQUFRLEVBQUUsUUFYZ0I7QUFZMUJDLGNBQVUsRUFBRSxJQVpjO0FBYTFCQyxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLENBQVA7QUFBVUMsV0FBSyxFQUFFLENBQWpCO0FBQW9CQyxZQUFNLEVBQUUsQ0FBNUI7QUFBK0JDLFVBQUksRUFBRTtBQUFyQztBQWJjLEdBQWxCO0FBN0NLLENBQWpCLEM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWUsMEdBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0ExRDtBQUFlLDJHQUE0QyxFOzs7Ozs7Ozs7Ozs7QUNBM0Q7QUFBZSw0R0FBNkMsRTs7Ozs7Ozs7Ozs7O0FDQTVEO0FBQWUsbUdBQW9DLEU7Ozs7Ozs7Ozs7OztBQ0FuRDtBQUFlLG9HQUFxQyxFOzs7Ozs7Ozs7Ozs7QUNBcEQ7QUFBZSxxR0FBc0MsRTs7Ozs7Ozs7Ozs7O0FDQXJEO0FBQWUsK0dBQWdELEU7Ozs7Ozs7Ozs7OztBQ0EvRDtBQUFlLGdIQUFpRCxFOzs7Ozs7Ozs7Ozs7QUNBaEU7QUFBZSxpSEFBa0QsRTs7Ozs7Ozs7Ozs7O0FDQWpFO0FBQWUsd0dBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0F4RDtBQUFlLHlHQUEwQyxFOzs7Ozs7Ozs7Ozs7QUNBekQ7QUFBZSwwR0FBMkMsRTs7Ozs7Ozs7Ozs7O0FDQTFEO0FBQWUscUdBQXNDLEU7Ozs7Ozs7Ozs7OztBQ0FyRDtBQUFlLHNHQUF1QyxFOzs7Ozs7Ozs7Ozs7QUNBdEQ7QUFBZSx1R0FBd0MsRTs7Ozs7Ozs7Ozs7O0FDQXZEO0FBQWUsNEdBQTZDLEU7Ozs7Ozs7Ozs7OztBQ0E1RDtBQUFlLDZHQUE4QyxFOzs7Ozs7Ozs7Ozs7QUNBN0Q7QUFBZSw4R0FBK0MsRTs7Ozs7Ozs7Ozs7O0FDQTlEO0FBQWUscUdBQXNDLEU7Ozs7Ozs7Ozs7OztBQ0FyRDtBQUFlLHNHQUF1QyxFOzs7Ozs7Ozs7Ozs7QUNBdEQ7QUFBZSx1R0FBd0MsRTs7Ozs7Ozs7Ozs7O0FDQXZEO0FBQWUsc0dBQXVDLEU7Ozs7Ozs7Ozs7OztBQ0F0RDtBQUFlLHVHQUF3QyxFOzs7Ozs7Ozs7Ozs7QUNBdkQ7QUFBZSx3R0FBeUMsRTs7Ozs7Ozs7Ozs7QUNBeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUI7Ozs7Ozs7Ozs7Ozs7QUNBL0I7O0FBQUEsSUFBSUMsc0JBQXNCLEdBQUNDLG1CQUFPLENBQUMsb0hBQUQsQ0FBbEM7O0FBQW1GcEMsT0FBTyxDQUFDcUMsVUFBUixHQUFtQixJQUFuQjtBQUF3QnJDLE9BQU8sQ0FBQ3NDLFNBQVIsR0FBa0JBLFNBQWxCO0FBQTRCdEMsT0FBTyxDQUFDdUMsU0FBUixHQUFrQkEsU0FBbEI7QUFBNEJ2QyxPQUFPLENBQUN3QyxPQUFSLEdBQWdCLEtBQUssQ0FBckI7O0FBQXVCLElBQUlDLE1BQU0sR0FBQ04sc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFqQzs7QUFBb0QsSUFBSU0sTUFBTSxHQUFDTixtQkFBTyxDQUFDLDBEQUFELENBQWxCOztBQUErQ3BDLE9BQU8sQ0FBQzJDLGVBQVIsR0FBd0JELE1BQU0sQ0FBQ0MsZUFBL0I7QUFBK0M7Ozs7O0FBR3RWLGVBQWVDLGtCQUFmLENBQWtDQyxJQUFsQyxFQUF1QztBQUFDLE1BQUc7QUFBQ0MsYUFBRDtBQUFXQztBQUFYLE1BQWdCRixJQUFuQjtBQUF3QixNQUFJRyxTQUFTLEdBQUMsTUFBSyxDQUFDLEdBQUVOLE1BQU0sQ0FBQ08sbUJBQVYsRUFBK0JILFNBQS9CLEVBQXlDQyxHQUF6QyxDQUFuQjtBQUFpRSxTQUFNO0FBQUNDO0FBQUQsR0FBTjtBQUFtQjs7QUFBQSxNQUFNRSxHQUFOLFNBQWtCVCxNQUFNLENBQUNELE9BQVAsQ0FBZU0sU0FBakMsQ0FBMEM7QUFBQztBQUNsTTtBQUNBO0FBQ0FLLG1CQUFpQixDQUFDQyxLQUFELEVBQU9DLFVBQVAsRUFBa0I7QUFBQyxVQUFNRCxLQUFOO0FBQWE7O0FBQUFFLFFBQU0sR0FBRTtBQUFDLFFBQUc7QUFBQ0MsWUFBRDtBQUFRVCxlQUFSO0FBQWtCRSxlQUFsQjtBQUE0QlEsYUFBNUI7QUFBb0NDO0FBQXBDLFFBQTZDLEtBQUtDLEtBQXJEO0FBQTJELFdBQU0sYUFBYWpCLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlbUIsYUFBZixDQUE2QmIsU0FBN0IsRUFBdUNjLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBaUJiLFNBQWpCLEVBQTJCO0FBQzFNO0FBQ0EsTUFBRVEsT0FBTyxJQUFFQyxPQUFYLElBQW9CO0FBQUNuRCxTQUFHLEVBQUNpQyxTQUFTLENBQUNnQixNQUFEO0FBQWQsS0FBcEIsR0FBNEMsRUFGbUksQ0FBdkMsQ0FBbkI7QUFFbkU7O0FBTCtJOztBQUs5SXZELE9BQU8sQ0FBQ3dDLE9BQVIsR0FBZ0JVLEdBQWhCO0FBQW9CQSxHQUFHLENBQUNZLG1CQUFKLEdBQXdCbEIsa0JBQXhCO0FBQTJDTSxHQUFHLENBQUNhLGVBQUosR0FBb0JuQixrQkFBcEI7QUFBdUMsSUFBSW9CLGFBQUo7QUFBa0IsSUFBSUMsT0FBSjs7QUFBWSxVQUF1QztBQUFDRCxlQUFhLEdBQUMsQ0FBQyxHQUFFdEIsTUFBTSxDQUFDd0IsUUFBVixFQUFvQixNQUFJO0FBQUNDLFdBQU8sQ0FBQ0MsSUFBUixDQUFhLG9JQUFiO0FBQW9KLEdBQTdLLENBQWQ7QUFBNkxILFNBQU8sR0FBQyxDQUFDLEdBQUV2QixNQUFNLENBQUN3QixRQUFWLEVBQW9CLE1BQUk7QUFBQ0MsV0FBTyxDQUFDZixLQUFSLENBQWMsdUZBQWQ7QUFBd0csR0FBakksQ0FBUjtBQUE0SSxDLENBQUE7OztBQUN4aUIsU0FBU2QsU0FBVCxDQUFtQitCLENBQW5CLEVBQXFCO0FBQUMsWUFBdUNMLGFBQWE7QUFBRyxTQUFPSyxDQUFDLENBQUNDLFFBQVQ7QUFBbUI7O0FBQUEsU0FBUy9CLFNBQVQsQ0FBbUJnQixNQUFuQixFQUEwQjtBQUFDO0FBQzNILE1BQUc7QUFBQ2dCLFlBQUQ7QUFBVUMsVUFBVjtBQUFpQkM7QUFBakIsTUFBd0JsQixNQUEzQjtBQUFrQyxTQUFNO0FBQUMsUUFBSWtCLEtBQUosR0FBVztBQUFDLGdCQUF1Q1IsT0FBTztBQUFHLGFBQU9RLEtBQVA7QUFBYyxLQUE1RTs7QUFBNkUsUUFBSUYsUUFBSixHQUFjO0FBQUMsZ0JBQXVDTixPQUFPO0FBQUcsYUFBT00sUUFBUDtBQUFpQixLQUE5Sjs7QUFBK0osUUFBSUMsTUFBSixHQUFZO0FBQUMsZ0JBQXVDUCxPQUFPO0FBQUcsYUFBT08sTUFBUDtBQUFlLEtBQTVPOztBQUE2T0UsUUFBSSxFQUFDLE1BQUk7QUFBQyxnQkFBdUNULE9BQU87QUFBR1YsWUFBTSxDQUFDbUIsSUFBUDtBQUFlLEtBQXZUO0FBQXdUQyxRQUFJLEVBQUMsQ0FBQ3JFLEdBQUQsRUFBS3NFLEVBQUwsS0FBVTtBQUFDLGdCQUF1Q1gsT0FBTztBQUFHLGFBQU9WLE1BQU0sQ0FBQ29CLElBQVAsQ0FBWXJFLEdBQVosRUFBZ0JzRSxFQUFoQixDQUFQO0FBQTRCLEtBQXJaO0FBQXNaQyxVQUFNLEVBQUMsQ0FBQ0MsSUFBRCxFQUFNRixFQUFOLEtBQVc7QUFBQyxnQkFBdUNYLE9BQU87QUFBRyxVQUFJYyxTQUFTLEdBQUNILEVBQUUsR0FBQ0UsSUFBRCxHQUFNLEVBQXRCO0FBQXlCLFVBQUlFLE9BQU8sR0FBQ0osRUFBRSxJQUFFRSxJQUFoQjtBQUFxQixhQUFPdkIsTUFBTSxDQUFDb0IsSUFBUCxDQUFZSSxTQUFaLEVBQXNCQyxPQUF0QixDQUFQO0FBQXVDLEtBQS9pQjtBQUFnakJDLFdBQU8sRUFBQyxDQUFDM0UsR0FBRCxFQUFLc0UsRUFBTCxLQUFVO0FBQUMsZ0JBQXVDWCxPQUFPO0FBQUcsYUFBT1YsTUFBTSxDQUFDMEIsT0FBUCxDQUFlM0UsR0FBZixFQUFtQnNFLEVBQW5CLENBQVA7QUFBK0IsS0FBbnBCO0FBQW9wQk0sYUFBUyxFQUFDLENBQUNKLElBQUQsRUFBTUYsRUFBTixLQUFXO0FBQUMsZ0JBQXVDWCxPQUFPO0FBQUcsVUFBSWtCLFlBQVksR0FBQ1AsRUFBRSxHQUFDRSxJQUFELEdBQU0sRUFBekI7QUFBNEIsVUFBSU0sVUFBVSxHQUFDUixFQUFFLElBQUVFLElBQW5CO0FBQXdCLGFBQU92QixNQUFNLENBQUMwQixPQUFQLENBQWVFLFlBQWYsRUFBNEJDLFVBQTVCLENBQVA7QUFBZ0Q7QUFBL3pCLEdBQU47QUFBdzBCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWMTJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxNQUFNQyxLQUFOLFNBQW9CbkMsK0NBQXBCLENBQXdCO0FBQ3JDLGVBQWFhLGVBQWIsQ0FBNkI7QUFBRWpCLGFBQUY7QUFBYUM7QUFBYixHQUE3QixFQUFpRDtBQUMvQyxRQUFJQyxTQUFTLEdBQUcsRUFBaEI7O0FBRUEsUUFBSUYsU0FBUyxDQUFDaUIsZUFBZCxFQUErQjtBQUM3QmYsZUFBUyxHQUFHLE1BQU1GLFNBQVMsQ0FBQ2lCLGVBQVYsQ0FBMEJoQixHQUExQixDQUFsQjtBQUNEOztBQUVELFdBQU87QUFBRUM7QUFBRixLQUFQO0FBQ0Q7O0FBRURNLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRVIsZUFBRjtBQUFhRTtBQUFiLFFBQTJCLEtBQUtVLEtBQXRDO0FBRUEsV0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVF6RCxpREFBUixDQURGLENBREYsRUFJRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixFQUtFLE1BQUMsU0FBRCxlQUFlK0MsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTEYsQ0FERjtBQVNEOztBQXZCb0MsQzs7Ozs7Ozs7Ozs7O0FDTnZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLE1BQU07QUFBRXZDLFFBQUY7QUFBVTZFLFdBQVY7QUFBcUJDO0FBQXJCLElBQStCQyw4Q0FBckM7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLHdEQUFNLENBQUNDLE1BQVY7QUFBQTtBQUFBO0FBQUEsa1RBQ0RsRixNQUFNLENBQUNDLElBRE4sRUFHVUQsTUFBTSxDQUFDQyxJQUhqQixFQUlPOEUsOENBQUssQ0FBQ0ksWUFKYixFQUtHTixTQUFTLENBQUNPLEtBTGIsRUFNS04sS0FBSyxDQUFDTyxhQU5YLEVBVUlOLDhDQUFLLENBQUNPLFVBVlYsRUFnQll0RixNQUFNLENBQUN1RixTQWhCbkIsQ0FBWjtBQXdCZVAscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1RLE1BQU0sR0FBR1Asd0RBQU0sQ0FBQ1EsTUFBVjtBQUFBO0FBQUE7QUFBQSwrQkFFQ1YsOENBQUssQ0FBQ1csTUFGUCxDQUFaO0FBS2VGLHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQUV4RixRQUFGO0FBQVU2RSxXQUFWO0FBQXFCQztBQUFyQixJQUErQkMsOENBQXJDO0FBRUEsTUFBTVksV0FBVyxHQUFHQyxtRUFBa0I7T0FDL0JDLDhDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFvQk83RixNQUFNLENBQUM4RixRQUFTO2FBQzNCOUYsTUFBTSxDQUFDK0YsS0FBTTs7bUJBRVBqQixLQUFLLENBQUNPLGFBQWM7aUJBQ3RCUixTQUFTLENBQUNtQixFQUFHO01BQ3hCQyw4Q0FBSyxDQUFDQyxPQUFRLGNBQWFyQixTQUFTLENBQUNzQixFQUFHLEdBQUc7Ozs7Ozs7OztzQkFTM0JwQiw4Q0FBSyxDQUFDTyxVQUFXOzs7Ozs7Ozt3QkFRZnRGLE1BQU0sQ0FBQytGLEtBQU07YUFDeEIvRixNQUFNLENBQUNvRyxhQUFjOzs7Ozs7Ozs7Ozs7Ozs7OzthQWlCckJwRyxNQUFNLENBQUNvRyxhQUFjOzs7Ozs7Ozs7UUFTMUJILDhDQUFLLENBQUNJLE9BQVEsa0JBQWtCO1FBQ2hDSiw4Q0FBSyxDQUFDSyxNQUFPLGtCQUFrQjtRQUMvQkwsOENBQUssQ0FBQ0MsT0FBUSxrQkFBa0I7UUFDaENELDhDQUFLLENBQUNNLEtBQU0sa0JBQWtCOzs7Ozs7O1FBTzlCTiw4Q0FBSyxDQUFDSSxPQUFRLGtCQUFrQjtRQUNoQ0osOENBQUssQ0FBQ0ssTUFBTyxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkEyQnJCdkIsOENBQUssQ0FBQ08sVUFBVzs7Ozs7ZUFLcEJ0RixNQUFNLENBQUNDLElBQUs7Ozs7Ozs7Ozs7O3VCQVdKRCxNQUFNLENBQUN3RyxVQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQTBCakNDLCtDQUFNLENBQUNDLFVBQVc7Ozs7MEJBSUExRyxNQUFNLENBQUNHLFNBQVU7ZUFDNUJILE1BQU0sQ0FBQzJHLEtBQU07bUJBQ1Q5QixTQUFTLENBQUMrQixFQUFHO3VCQUNUN0IsOENBQUssQ0FBQ0ksWUFBYTs7Ozs7Ozs7OzttQkFVdkJOLFNBQVMsQ0FBQ3NCLEVBQUc7Ozs7Ozs7OzttQkFTYm5HLE1BQU0sQ0FBQ0MsSUFBSzs7Ozs7Ozt5QkFPTkQsTUFBTSxDQUFDQyxJQUFLOzs7Ozs7Ozs7Ozs7Ozt3QkFjYkQsTUFBTSxDQUFDSSxZQUFhOzs7Ozs7Ozs7O21CQVV6QjBFLEtBQUssQ0FBQ08sYUFBYztpQkFDdEJSLFNBQVMsQ0FBQ2dDLEVBQUc7Ozs7YUFJakI3RyxNQUFNLENBQUNDLElBQUs7Ozs7YUFJWkQsTUFBTSxDQUFDQyxJQUFLO21CQUNONkUsS0FBSyxDQUFDTyxhQUFjO2lCQUN0QlIsU0FBUyxDQUFDZ0MsRUFBRzs7Ozs7YUFLakI3RyxNQUFNLENBQUNDLElBQUs7O2lCQUVSNEUsU0FBUyxDQUFDZ0MsRUFBRzttQkFDWC9CLEtBQUssQ0FBQ08sYUFBYzs7O01BR2pDWSw4Q0FBSyxDQUFDSSxPQUFRLGNBQWF4QixTQUFTLENBQUMrQixFQUFHLEdBQUc7TUFDM0NYLDhDQUFLLENBQUNLLE1BQU8sY0FBYXpCLFNBQVMsQ0FBQ08sS0FBTSxHQUFHOzs7UUFHM0NxQiwrQ0FBTSxDQUFDQyxVQUFXOzs7Ozs7Ozs7YUFTYjFHLE1BQU0sQ0FBQ0MsSUFBSzs7Ozs7Ozs7UUFRakJ3RywrQ0FBTSxDQUFDQyxVQUFXO3FCQUNMNUIsS0FBSyxDQUFDTyxhQUFjO21CQUN0QlIsU0FBUyxDQUFDK0IsRUFBRzs7Ozs7Ozs7SUFRNUJFLHdEQUFpQjtDQXBRckI7QUF1UWVuQiwwRUFBZixFOzs7Ozs7Ozs7Ozs7QUMvUUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNb0IsTUFBTSxHQUFHOUIsd0RBQU0sQ0FBQytCLE1BQVY7QUFBQTtBQUFBO0FBQUEsbUJBQVo7QUFJZUQscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU07QUFBRS9HLFFBQUY7QUFBVTZFLFdBQVY7QUFBcUJDO0FBQXJCLElBQStCQyw4Q0FBckM7QUFFQSxNQUFNa0MsT0FBTyxHQUFHaEMsd0RBQU0sQ0FBQ2lDLEVBQVY7QUFBQTtBQUFBO0FBQUEsb2NBT0VyQyxTQUFTLENBQUNxQyxFQVBaLEVBUVRqQiw4Q0FBSyxDQUFDSyxNQUFPLGtCQVJKLEVBU1RMLDhDQUFLLENBQUNDLE9BQVEsa0JBVEwsRUFlTXBCLEtBQUssQ0FBQ08sYUFmWixFQWlCQXJGLE1BQU0sQ0FBQ0MsSUFqQlAsRUFrQkk0RSxTQUFTLENBQUNtQixFQWxCZCxFQXFCUEMsOENBQUssQ0FBQ0ssTUFBTyxjQUFhekIsU0FBUyxDQUFDc0IsRUFBRyxHQXJCaEMsRUE2QlduRyxNQUFNLENBQUNJLFlBN0JsQixFQWlDUDZGLDhDQUFLLENBQUNJLE9BQVEsY0FqQ1AsRUFrQ1BKLDhDQUFLLENBQUNLLE1BQU8sY0FsQ04sRUFtQ1BMLDhDQUFLLENBQUNrQixLQUFNLG9CQW5DTCxDQUFiO0FBdUNlRixzRUFBZixFOzs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsTUFBTTtBQUFFakg7QUFBRixJQUFhK0UsOENBQW5CO0FBRUEsTUFBTXFDLFVBQVUsR0FBR25DLHdEQUFNLENBQUNvQyxDQUFWO0FBQUE7QUFBQTtBQUFBLGtVQUtBdEMsOENBQUssQ0FBQ08sVUFMTixFQVdIdEYsTUFBTSxDQUFDQyxJQVhKLEVBd0JRRCxNQUFNLENBQUNDLElBeEJmLEVBeUJFOEUsOENBQUssQ0FBQ08sVUF6QlIsQ0FBaEI7QUE2QmU4Qix5RUFBZixFOzs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1FLElBQUksR0FBR3JDLHdEQUFNLENBQUNzQyxJQUFWO0FBQUE7QUFBQTtBQUFBLDJMQUNOZCwrQ0FBTSxDQUFDZSxXQURELEVBUU52Qiw4Q0FBSyxDQUFDSSxPQUFROzs7R0FSUixFQVlOSiw4Q0FBSyxDQUFDSyxNQUFPOzs7R0FaUCxFQWdCTkwsOENBQUssQ0FBQ0MsT0FBUTs7O0dBaEJSLEVBd0JKRCw4Q0FBSyxDQUFDSSxPQUFROzs7R0F4QlYsRUE0QkpKLDhDQUFLLENBQUNLLE1BQU87OztHQTVCVCxFQWdDSkwsOENBQUssQ0FBQ0MsT0FBUTs7O0dBaENWLENBQVY7QUF1Q2VvQixtRUFBZixFOzs7Ozs7Ozs7Ozs7QUMzQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUcsT0FBTyxHQUFHeEMsd0RBQU0sQ0FBQ3lDLE9BQVY7QUFBQTtBQUFBO0FBQUEsNkRBS1R6Qiw4Q0FBSyxDQUFDSyxNQUFPLG1CQUxKLENBQWI7QUFRZW1CLHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1FLGVBQWUsR0FBR0MsNkRBQUgsOGlCQUlXN0MsOENBQUssQ0FBQy9ELE1BSmpCLEVBSTRDK0QsOENBQUssQ0FBQy9ELE1BSmxELEVBVVcrRCw4Q0FBSyxDQUFDL0QsTUFWakIsRUFVNEMrRCw4Q0FBSyxDQUFDL0QsTUFWbEQsRUFnQlcrRCw4Q0FBSyxDQUFDL0QsTUFoQmpCLEVBZ0I0QytELDhDQUFLLENBQUMvRCxNQWhCbEQsRUFzQlcrRCw4Q0FBSyxDQUFDL0QsTUF0QmpCLEVBc0I0QytELDhDQUFLLENBQUMvRCxNQXRCbEQsRUE0QlcrRCw4Q0FBSyxDQUFDL0QsTUE1QmpCLEVBaUNXK0QsOENBQUssQ0FBQy9ELE1BakNqQixDQUFyQjtBQXFDZTJHLDhFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU05QixTQUFTLEdBQUcrQiw2REFBSCxxMENBR0FDLDBFQUhBLEVBSUhDLHdFQUpHLEVBS0hDLHlFQUxHLEVBV0FDLDBFQVhBLEVBWUhDLHdFQVpHLEVBYUhDLHlFQWJHLEVBbUJBQyx5RUFuQkEsRUFvQkhDLHVFQXBCRyxFQXFCSEMsd0VBckJHLEVBMkJBQyxnRkEzQkEsRUE0QkhDLDhFQTVCRyxFQTZCSEMsK0VBN0JHLEVBbUNBQyx3RUFuQ0EsRUFvQ0hDLHNFQXBDRyxFQXFDSEMsdUVBckNHLEVBMkNBQywrRUEzQ0EsRUE0Q0hDLDZFQTVDRyxFQTZDSEMsOEVBN0NHLEVBbURBQyw2RUFuREEsRUFvREhDLDJFQXBERyxFQXFESEMsNEVBckRHLEVBMkRBQyxvRkEzREEsRUE0REhDLGtGQTVERyxFQTZESEMsbUZBN0RHLENBQWY7QUFtRWV2RCx3RUFBZixFOzs7Ozs7Ozs7Ozs7QUM5RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNd0QsS0FBSyxHQUFHO0FBQ1pDLE9BQUssRUFBRSxJQURLO0FBRVpDLFlBQVUsRUFBRSxJQUZBO0FBR1psRCxTQUFPLEVBQUUsSUFIRztBQUlaQyxRQUFNLEVBQUUsR0FKSTtBQUtaYSxPQUFLLEVBQUUsR0FMSztBQU1aakIsU0FBTyxFQUFFLEdBTkc7QUFPWkssT0FBSyxFQUFFLEdBUEs7QUFRWmlELE1BQUksRUFBRTtBQVJNLENBQWQ7QUFXTyxNQUFNdkQsS0FBSyxHQUFHOUMsTUFBTSxDQUFDc0csSUFBUCxDQUFZSixLQUFaLEVBQW1CSyxNQUFuQixDQUEwQixDQUFDQyxXQUFELEVBQWNDLEtBQWQsS0FBd0I7QUFDckUsUUFBTUMsTUFBTSxHQUFHUixLQUFLLENBQUNPLEtBQUQsQ0FBTCxHQUFlLEVBQTlCOztBQUNBRCxhQUFXLENBQUNDLEtBQUQsQ0FBWCxHQUFxQixDQUFDLEdBQUdFLElBQUosS0FBYWxDLDZEQUFiLHVDQUNFaUMsTUFERixFQUVmakMsNkRBQUcsQ0FBQyxHQUFHa0MsSUFBSixDQUZZLENBQXJCOztBQUtBLFNBQU9ILFdBQVA7QUFDRCxDQVJvQixFQVFsQixFQVJrQixDQUFkO0FBVVExRCxvRUFBZixFOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFBRWpHLFFBQUY7QUFBVTZFLFdBQVY7QUFBcUJDO0FBQXJCLElBQStCQyw4Q0FBckM7QUFFQSxNQUFNMEIsTUFBTSxHQUFHO0FBQ2JzRCxZQUFVLEVBQUVuQyw2REFBRiw2REFERztBQU9ib0MsYUFBVyxFQUFFcEMsNkRBQUYsb0VBUEU7QUFhYnFDLFFBQU0sRUFBRXJDLDZEQUFGLDRCQWJPO0FBaUJic0MsTUFBSSxFQUFFdEMsNkRBQUYsNkxBTVk3Qyw4Q0FBSyxDQUFDTyxVQU5sQixFQVdTdEYsTUFBTSxDQUFDQyxJQVhoQixDQWpCUztBQWlDYnlHLFlBQVUsRUFBRWtCLDZEQUFGLG1ZQUtNN0MsOENBQUssQ0FBQ08sVUFMWixFQU9DdEYsTUFBTSxDQUFDQyxJQVBSLEVBV0dELE1BQU0sQ0FBQ0MsSUFYVixFQWlCS0QsTUFBTSxDQUFDQyxJQWpCWixFQWtCVThFLDhDQUFLLENBQUNPLFVBbEJoQixFQTRCY3RGLE1BQU0sQ0FBQ0MsSUE1QnJCLEVBNkJROEUsOENBQUssQ0FBQ08sVUE3QmQsQ0FqQ0c7QUFtRWI2RSxhQUFXLEVBQUV2Qyw2REFBRixnU0FDQTVILE1BQU0sQ0FBQ0MsSUFEUCxFQUdXRCxNQUFNLENBQUNDLElBSGxCLEVBSVE4RSw4Q0FBSyxDQUFDSSxZQUpkLEVBTUlOLFNBQVMsQ0FBQ08sS0FOZCxFQU9NTixLQUFLLENBQUNPLGFBUFosRUFXS04sOENBQUssQ0FBQ08sVUFYWCxFQWVhdEYsTUFBTSxDQUFDdUYsU0FmcEIsQ0FuRUU7QUF5RmI2RSxXQUFTLEVBQUV4Qyw2REFBRixtU0FDRTVILE1BQU0sQ0FBQ0MsSUFEVCxFQUdhRCxNQUFNLENBQUNDLElBSHBCLEVBSVU4RSw4Q0FBSyxDQUFDSSxZQUpoQixFQU1NTixTQUFTLENBQUMrQixFQU5oQixFQU9ROUIsS0FBSyxDQUFDTyxhQVBkLEVBV09OLDhDQUFLLENBQUNPLFVBWGIsRUFlZXRGLE1BQU0sQ0FBQ3VGLFNBZnRCLENBekZJO0FBK0diaUMsYUFBVyxFQUFFSSw2REFBRixzQ0FFUDNCLDhDQUFLLENBQUNJLE9BQVEsbUJBRlAsRUFHUEosOENBQUssQ0FBQ0ssTUFBTyxrQkFITixFQUlQTCw4Q0FBSyxDQUFDQyxPQUFRLGtCQUpQLENBL0dFO0FBc0hibUUsV0FBUyxFQUFFekMsNkRBQUYsNEdBQ3lCNUgsTUFBTSxDQUFDc0ssVUFEaEMsRUFFT3ZGLDhDQUFLLENBQUNPLFVBRmIsRUFNMkJ0RixNQUFNLENBQUNzSyxVQU5sQyxDQXRISTtBQWdJYkMsV0FBUyxFQUFFM0MsNkRBQUYscUxBSU0vQyxTQUFTLENBQUNzQixFQUpoQixFQWFNbkcsTUFBTSxDQUFDQyxJQWJiO0FBaElJLENBQWY7QUFtSmV3RyxxRUFBZixFOzs7Ozs7Ozs7Ozs7QUN4SkE7QUFBQTtBQUFBO0FBRUEsTUFBTStELE1BQU0sR0FBRyxTQUFmO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHLFNBQVg7QUFFQSxNQUFNM0YsS0FBSyxHQUFHO0FBQ1ovRSxRQUFNLEVBQUU7QUFDTjhGLFlBQVEsRUFBRTJFLE9BREo7QUFFTnZLLFFBQUksRUFBRXdLLEVBRkE7QUFHTnZLLGFBQVMsRUFBRSxTQUhMO0FBSU5DLGdCQUFZLEVBQUUsU0FKUjtBQUtOMkYsU0FBSyxFQUFFLFNBTEQ7QUFNTlMsY0FBVSxFQUFFLFNBTk47QUFPTkosaUJBQWEsRUFBRSxTQVBUO0FBUU5PLFNBQUssRUFBRSxTQVJEO0FBU04xRyxRQUFJLEVBQUV1SyxNQVRBO0FBVU5qRixhQUFTLEVBQUVvRiw2REFBUSxDQUFDSCxNQUFELEVBQVMsSUFBVCxDQVZiO0FBV05GLGNBQVUsRUFBRUssNkRBQVEsQ0FBQ0YsT0FBRCxFQUFVLElBQVYsQ0FYZDtBQVlORyxhQUFTLEVBQUU7QUFaTCxHQURJO0FBZ0JaOUYsT0FBSyxFQUFFO0FBQ0xPLGlCQUFhLEVBQUU7QUFEVixHQWhCSztBQW9CWlIsV0FBUyxFQUFFO0FBQ1RnRyxNQUFFLEVBQUUsTUFESztBQUVUekYsU0FBSyxFQUFFLE1BRkU7QUFHVHdCLE1BQUUsRUFBRSxNQUhLO0FBSVRDLE1BQUUsRUFBRSxNQUpLO0FBS1RWLE1BQUUsRUFBRSxNQUxLO0FBTVRILE1BQUUsRUFBRSxNQU5LO0FBT1Q4RSxPQUFHLEVBQUUsTUFQSTtBQVFUNUQsTUFBRSxFQUFFO0FBUkssR0FwQkM7QUErQlpsRyxRQUFNLEVBQUUsc0NBL0JJO0FBZ0Nac0UsWUFBVSxFQUFFLGdEQWhDQTtBQWtDWkgsY0FBWSxFQUFFLEtBbENGO0FBbUNackYsV0FBUyxFQUFFLE9BbkNDO0FBb0NaaUwsaUJBQWUsRUFBRSxNQXBDTDtBQXFDWnJGLFFBQU0sRUFBRSxNQXJDSTtBQXVDWnNGLFdBQVMsRUFBRSxFQXZDQztBQXdDWkMsVUFBUSxFQUFFLEdBeENFO0FBeUNaQyxRQUFNLEVBQUUsQ0F6Q0k7QUEyQ1pDLGdCQUFjLEVBQUUsRUEzQ0o7QUE0Q1pDLFdBQVMsRUFBRyw4Q0E1Q0E7QUE2Q1pDLGlCQUFlLEVBQUcsZ0RBN0NOO0FBOENaQyxVQUFRLEVBQUcsbUZBOUNDO0FBK0NaQyxnQkFBYyxFQUFHLGlGQS9DTDtBQWlEWkMsVUFBUSxFQUFFLElBakRFO0FBa0RaQyxhQUFXLEVBQUU7QUFsREQsQ0FBZDtBQXFEZTFHLG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQzNEQTtBQUFBO0FBQUE7QUFBTyxNQUFNMkcsUUFBUSxHQUFHLENBQUNDLElBQUQsRUFBT0MsSUFBSSxHQUFHLEdBQWQsS0FBc0I7QUFDNUMsTUFBSUMsS0FBSyxHQUFHLElBQVo7QUFDQSxTQUFPLFVBQVUsR0FBRy9CLElBQWIsRUFBbUI7QUFDeEIsUUFBSStCLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCQSxXQUFLLEdBQUdDLFVBQVUsQ0FBQyxNQUFNO0FBQ3ZCSCxZQUFJLENBQUNJLEtBQUwsQ0FBVyxJQUFYLEVBQWlCakMsSUFBakI7QUFDQStCLGFBQUssR0FBRyxJQUFSO0FBQ0QsT0FIaUIsRUFHZkQsSUFIZSxDQUFsQjtBQUlEO0FBQ0YsR0FQRDtBQVFELENBVk07QUFZQSxNQUFNakIsUUFBUSxHQUFHLENBQUNxQixHQUFELEVBQU1DLEtBQUssR0FBRyxDQUFkLEtBQW9CO0FBQzFDLFFBQU0sQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsSUFBWUosR0FBRyxDQUFDSyxLQUFKLENBQVUsT0FBVixFQUFtQkMsR0FBbkIsQ0FBd0IzTCxDQUFELElBQU80TCxRQUFRLENBQUM1TCxDQUFELEVBQUksRUFBSixDQUF0QyxDQUFsQjtBQUNBLFNBQVEsUUFBT3VMLENBQUUsSUFBR0MsQ0FBRSxJQUFHQyxDQUFFLElBQUdILEtBQU0sR0FBcEM7QUFDRCxDQUhNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWlAsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBzaXRlVGl0bGU6IFwiQW51cmFnIE1vcmUgfCBDb21wdXRlciBTY2llbmNlIEVuZ2luZWVyXCIsXG4gIG5hbWU6IFwiQW51cmFnIE1vcmVcIixcbiAgZW1haWw6IFwiYW51cmFnYm1vcmVAZ21haWwuY29tXCIsXG4gIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vYW51cmFnMTI5OVwiLFxuICBzb2NpYWxNZWRpYTogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiR2l0SHViXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FudXJhZzEyOTlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTGlua2VkaW5cIixcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYW51cmFnLW1vcmUtOWFhNjdhMTlhL1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJJbnN0YWdyYW1cIixcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2x1ZHVtX2VsaXRcIixcbiAgICB9LFxuICBdLFxuXG4gIG5hdkhlaWdodDogMTAwLFxuICBuYXZMaW5rczogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiQWJvdXRcIixcbiAgICAgIHVybDogXCIvI2Fib3V0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkVkdWNhdGlvblwiLFxuICAgICAgdXJsOiBcIi8jY29sbGVnZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJXb3JrXCIsXG4gICAgICB1cmw6IFwiLyNwcm9qZWN0c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJDb250YWN0XCIsXG4gICAgICB1cmw6IFwiLyNjb250YWN0XCIsXG4gICAgfSxcbiAgXSxcbiAgY29sb3JzOiB7XG4gICAgYmx1ZTogXCIjMDA3QkZGXCIsXG4gICAgbmF2eTogXCIjMTcxQzI4XCIsXG4gICAgbGlnaHROYXZ5OiBcIiM4ODkyQjBcIixcbiAgICBsaWdodGVzdE5hdnk6IFwiI0NDRDZGNlwiLFxuICB9LFxuICBzckNvbmZpZzogKGRlbGF5ID0gMjAwKSA9PiAoe1xuICAgIG9yaWdpbjogXCJib3R0b21cIixcbiAgICBkaXN0YW5jZTogXCIyMHB4XCIsXG4gICAgZHVyYXRpb246IDUwMCxcbiAgICBkZWxheSxcbiAgICByb3RhdGU6IHsgeDogMCwgeTogMCwgejogMCB9LFxuICAgIG9wYWNpdHk6IDAsXG4gICAgc2NhbGU6IDEsXG4gICAgZWFzaW5nOiBcImN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKVwiLFxuICAgIG1vYmlsZTogdHJ1ZSxcbiAgICByZXNldDogZmFsc2UsXG4gICAgdXNlRGVsYXk6IFwiYWx3YXlzXCIsXG4gICAgdmlld0ZhY3RvcjogMC4yNSxcbiAgICB2aWV3T2Zmc2V0OiB7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCB9LFxuICB9KSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tQm9sZC1JdGFsaWMudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2Fzc2V0cy9KZXRCcmFpbnNNb25vLUJvbGQtSXRhbGljLndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tQm9sZC1JdGFsaWMud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tQm9sZC50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tQm9sZC53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2Fzc2V0cy9KZXRCcmFpbnNNb25vLUJvbGQud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tRXh0cmFCb2xkLUl0YWxpYy50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tRXh0cmFCb2xkLUl0YWxpYy53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2Fzc2V0cy9KZXRCcmFpbnNNb25vLUV4dHJhQm9sZC1JdGFsaWMud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tRXh0cmFCb2xkLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9hc3NldHMvSmV0QnJhaW5zTW9uby1FeHRyYUJvbGQud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9hc3NldHMvSmV0QnJhaW5zTW9uby1FeHRyYUJvbGQud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tSXRhbGljLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9hc3NldHMvSmV0QnJhaW5zTW9uby1JdGFsaWMud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9hc3NldHMvSmV0QnJhaW5zTW9uby1JdGFsaWMud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tTWVkaXVtLUl0YWxpYy50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tTWVkaXVtLUl0YWxpYy53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2Fzc2V0cy9KZXRCcmFpbnNNb25vLU1lZGl1bS1JdGFsaWMud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tTWVkaXVtLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9hc3NldHMvSmV0QnJhaW5zTW9uby1NZWRpdW0ud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9hc3NldHMvSmV0QnJhaW5zTW9uby1NZWRpdW0ud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tUmVndWxhci50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tUmVndWxhci53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2Fzc2V0cy9KZXRCcmFpbnNNb25vLVJlZ3VsYXIud29mZjJcIjsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuQ29udGFpbmVyPUNvbnRhaW5lcjtleHBvcnRzLmNyZWF0ZVVybD1jcmVhdGVVcmw7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5BcHBJbml0aWFsUHJvcHM9X3V0aWxzLkFwcEluaXRpYWxQcm9wczsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF9yZWYpe3ZhcntDb21wb25lbnQsY3R4fT1fcmVmO3ZhciBwYWdlUHJvcHM9YXdhaXQoMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQ29tcG9uZW50LGN0eCk7cmV0dXJue3BhZ2VQcm9wc307fWNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudHsvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbi8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbmNvbXBvbmVudERpZENhdGNoKGVycm9yLF9lcnJvckluZm8pe3Rocm93IGVycm9yO31yZW5kZXIoKXt2YXJ7cm91dGVyLENvbXBvbmVudCxwYWdlUHJvcHMsX19OX1NTRyxfX05fU1NQfT10aGlzLnByb3BzO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCxPYmplY3QuYXNzaWduKHt9LHBhZ2VQcm9wcywvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbi8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4hKF9fTl9TU0d8fF9fTl9TU1ApP3t1cmw6Y3JlYXRlVXJsKHJvdXRlcil9Ont9KSk7fX1leHBvcnRzLmRlZmF1bHQ9QXBwO0FwcC5vcmlnR2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztBcHAuZ2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wczt2YXIgd2FybkNvbnRhaW5lcjt2YXIgd2FyblVybDtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7d2FybkNvbnRhaW5lcj0oMCxfdXRpbHMuZXhlY09uY2UpKCgpPT57Y29uc29sZS53YXJuKFwiV2FybmluZzogdGhlIGBDb250YWluZXJgIGluIGBfYXBwYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZFwiKTt9KTt3YXJuVXJsPSgwLF91dGlscy5leGVjT25jZSkoKCk9Pntjb25zb2xlLmVycm9yKFwiV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy91cmwtZGVwcmVjYXRlZFwiKTt9KTt9Ly8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmZ1bmN0aW9uIENvbnRhaW5lcihwKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuQ29udGFpbmVyKCk7cmV0dXJuIHAuY2hpbGRyZW47fWZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXIpey8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG52YXJ7cGF0aG5hbWUsYXNQYXRoLHF1ZXJ5fT1yb3V0ZXI7cmV0dXJue2dldCBxdWVyeSgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcXVlcnk7fSxnZXQgcGF0aG5hbWUoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHBhdGhuYW1lO30sZ2V0IGFzUGF0aCgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gYXNQYXRoO30sYmFjazooKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyb3V0ZXIuYmFjaygpO30scHVzaDoodXJsLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcm91dGVyLnB1c2godXJsLGFzKTt9LHB1c2hUbzooaHJlZixhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7dmFyIHB1c2hSb3V0ZT1hcz9ocmVmOicnO3ZhciBwdXNoVXJsPWFzfHxocmVmO3JldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUscHVzaFVybCk7fSxyZXBsYWNlOih1cmwsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsYXMpO30scmVwbGFjZVRvOihocmVmLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTt2YXIgcmVwbGFjZVJvdXRlPWFzP2hyZWY6Jyc7dmFyIHJlcGxhY2VVcmw9YXN8fGhyZWY7cmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSxyZXBsYWNlVXJsKTt9fTt9IiwiaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNpdGVUaXRsZSB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IEdsb2JhbFN0eWxlIH0gZnJvbSBcIi4uL3N0eWxlcy9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIGN0eCB9KSB7XG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWVcIjtcbmNvbnN0IHsgY29sb3JzLCBmb250U2l6ZXMsIGZvbnRzIH0gPSB0aGVtZTtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMuYmx1ZX07XG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuYm9yZGVyUmFkaXVzfTtcbiAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5zbWlzaH07XG4gIGZvbnQtZmFtaWx5OiAke2ZvbnRzLkpldEJyYWluc01vbm99O1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG4gIHBhZGRpbmc6IDEuMjVyZW0gMS43NXJlbTtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMudHJhbnNCbHVlfTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xuXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZm9vdGVyYFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6ICR7dGhlbWUubWFyZ2lufTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWVcIjtcbmltcG9ydCBtZWRpYSBmcm9tIFwiLi9tZWRpYVwiO1xuaW1wb3J0IG1peGlucyBmcm9tIFwiLi9taXhpbnNcIjtcbmltcG9ydCBGb250RmFjZXMgZnJvbSBcIi4vZm9udHNcIjtcbmltcG9ydCBUcmFuc2l0aW9uU3R5bGVzIGZyb20gXCIuL1RyYW5zaXRpb25TdHlsZVwiO1xuY29uc3QgeyBjb2xvcnMsIGZvbnRTaXplcywgZm9udHMgfSA9IHRoZW1lO1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAvKiAke0ZvbnRGYWNlc307ICovXG5cbiAgaHRtbCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICosXG4gICo6YmVmb3JlLFxuICAqOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICB9XG5cbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZGFya05hdnl9O1xuICAgIGNvbG9yOiAke2NvbG9ycy5zbGF0ZX07XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICBmb250LWZhbWlseTogJHtmb250cy5KZXRCcmFpbnNNb25vfTtcbiAgICBmb250LXNpemU6ICR7Zm9udFNpemVzLnhsfTtcbiAgICAke21lZGlhLnBoYWJsZXRgZm9udC1zaXplOiAke2ZvbnRTaXplcy5sZ307YH1cblxuICAgICYuaGlkZGVuIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgICYuYmx1ciB7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgI3Jvb3QgPiAjY29udGVudCA+ICoge1xuICAgICAgICBmaWx0ZXI6IGJsdXIoNXB4KSBicmlnaHRuZXNzKDAuNyk7XG4gICAgICAgIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICA6OnNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuc2xhdGV9O1xuICAgIGNvbG9yOiAke2NvbG9ycy5saWdodGVzdFNsYXRlfTtcbiAgfVxuXG4gICNyb290IHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICB9XG5cbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRlc3RTbGF0ZX07XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICB9XG5cbiAgaDEge1xuICAgICYuYmlnLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICAke21lZGlhLmRlc2t0b3BgZm9udC1zaXplOiA3MHB4O2B9O1xuICAgICAgJHttZWRpYS50YWJsZXRgZm9udC1zaXplOiA2MHB4O2B9O1xuICAgICAgJHttZWRpYS5waGFibGV0YGZvbnQtc2l6ZTogNTBweDtgfTtcbiAgICAgICR7bWVkaWEucGhvbmVgZm9udC1zaXplOiA0MHB4O2B9O1xuICAgIH1cblxuICAgICYubWVkaXVtLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICAke21lZGlhLmRlc2t0b3BgZm9udC1zaXplOiA1MHB4O2B9O1xuICAgICAgJHttZWRpYS50YWJsZXRgZm9udC1zaXplOiA0MHB4O2B9O1xuICAgIH1cbiAgfVxuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICBpbWdbYWx0PVwiXCJdIGltZzpub3QoW2FsdF0pIHtcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGNvbG9yOiAke2NvbG9ycy5ibHVlfTtcbiAgICB9XG4gIH1cblxuICBidXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcblxuICAgICY6Zm9jdXMsXG4gICAgJjphY3RpdmUge1xuICAgICAgb3V0bGluZS1jb2xvcjogJHtjb2xvcnMubGlnaHRTbGF0ZX07XG4gICAgfVxuICB9XG5cbiAgaW5wdXQsXG4gIHRleHRhcmVhIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG91dGxpbmU6IDA7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgfVxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICB9XG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSB7XG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDAgMCAxNXB4IDA7XG5cbiAgICAmID4gYSB7XG4gICAgICAke21peGlucy5pbmxpbmVMaW5rfTtcbiAgICB9XG5cbiAgICAmID4gY29kZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5saWdodE5hdnl9O1xuICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZXMuc219O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5ib3JkZXJSYWRpdXN9O1xuICAgICAgcGFkZGluZzogMC4zZW0gMC41ZW07XG4gICAgfVxuICB9XG5cbiAgdWwge1xuICAgICYuZmFuY3ktbGlzdCB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZXMubGd9O1xuICAgICAgbGkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwi4pa5XCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYmxvY2txdW90ZSB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gIH1cblxuICBociB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMubGlnaHRlc3ROYXZ5fTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBib3JkZXItd2lkdGg6IDBweDtcbiAgICBib3JkZXItc3R5bGU6IGluaXRpYWw7XG4gICAgYm9yZGVyLWNvbG9yOiBpbml0aWFsO1xuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcbiAgICBtYXJnaW46IDFyZW07XG4gIH1cblxuICBjb2RlIHtcbiAgICBmb250LWZhbWlseTogJHtmb250cy5KZXRCcmFpbnNNb25vfTtcbiAgICBmb250LXNpemU6ICR7Zm9udFNpemVzLm1kfTtcbiAgfVxuXG4gICNsb2dvIHtcbiAgICBjb2xvcjogJHtjb2xvcnMuYmx1ZX07XG4gIH1cblxuICAub3ZlcmxpbmUge1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibHVlfTtcbiAgICBmb250LWZhbWlseTogJHtmb250cy5KZXRCcmFpbnNNb25vfTtcbiAgICBmb250LXNpemU6ICR7Zm9udFNpemVzLm1kfTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBjb2xvcjogJHtjb2xvcnMuYmx1ZX07XG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZXMubWR9O1xuICAgIGZvbnQtZmFtaWx5OiAke2ZvbnRzLkpldEJyYWluc01vbm99O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAke21lZGlhLmRlc2t0b3BgZm9udC1zaXplOiAke2ZvbnRTaXplcy5zbX07YH07XG4gICAgJHttZWRpYS50YWJsZXRgZm9udC1zaXplOiAke2ZvbnRTaXplcy5zbWlzaH07YH07XG5cbiAgICBhIHtcbiAgICAgICR7bWl4aW5zLmlubGluZUxpbmt9O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB9XG4gIH1cblxuICAuYnJlYWRjcnVtYiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuXG4gICAgLmFycm93IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICB9XG4gICAgYSB7XG4gICAgICAke21peGlucy5pbmxpbmVMaW5rfTtcbiAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnRzLkpldEJyYWluc01vbm99O1xuICAgICAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5zbX07XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgIH1cbiAgfVxuXG4gICR7VHJhbnNpdGlvblN0eWxlc307XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xuaW1wb3J0IG1lZGlhIGZyb20gXCIuL21lZGlhXCI7XG5cbmNvbnN0IHsgY29sb3JzLCBmb250U2l6ZXMsIGZvbnRzIH0gPSB0aGVtZTtcblxuY29uc3QgSGVhZGluZyA9IHN0eWxlZC5oM2BcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMCA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5oM307XG4gICR7bWVkaWEudGFibGV0YGZvbnQtc2l6ZTogMjRweDtgfTtcbiAgJHttZWRpYS5waGFibGV0YGZvbnQtc2l6ZTogMjBweDtgfTtcblxuICAmOmJlZm9yZSB7XG4gICAgY291bnRlci1pbmNyZW1lbnQ6IHNlY3Rpb247XG4gICAgY29udGVudDogXCIwXCIgY291bnRlcihzZWN0aW9uKSBcIi5cIjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICR7Zm9udHMuSmV0QnJhaW5zTW9ub307XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBjb2xvcjogJHtjb2xvcnMuYmx1ZX07XG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplcy54bH07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogLTJweDtcbiAgICAke21lZGlhLnRhYmxldGBmb250LXNpemU6ICR7Zm9udFNpemVzLmxnfTtgfTtcbiAgfVxuXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmxpZ2h0ZXN0TmF2eX07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIHRvcDogLTVweDsgKi9cbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAke21lZGlhLmRlc2t0b3Bgd2lkdGg6IDIwMHB4YH07XG4gICAgJHttZWRpYS50YWJsZXRgd2lkdGg6IDEwMCU7YH07XG4gICAgJHttZWRpYS50aG9uZWBtYXJnaW4tbGVmdDogMTBweDtgfTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWVcIjtcbmNvbnN0IHsgY29sb3JzIH0gPSB0aGVtZTtcblxuY29uc3QgSW5saW5lTGluayA9IHN0eWxlZC5hYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSB7XG4gICAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICAgIG91dGxpbmU6IDA7XG4gICAgJjphZnRlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAwLjM3ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYmx1ZX07XG4gICAgdHJhbnNpdGlvbjogJHt0aGVtZS50cmFuc2l0aW9ufTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSW5saW5lTGluaztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgbWl4aW5zIGZyb20gXCIuL21peGluc1wiO1xuaW1wb3J0IG1lZGlhIGZyb20gXCIuL21lZGlhXCI7XG5cbmNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBcbiAgJHttaXhpbnMuc2lkZVBhZGRpbmd9O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTYwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy10b3A6IDIwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG4gICR7bWVkaWEuZGVza3RvcGBcbiAgICBwYWRkaW5nLXRvcDogMjAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xuICBgfTtcbiAgJHttZWRpYS50YWJsZXRgXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcbiAgYH07XG4gICR7bWVkaWEucGhhYmxldGBcbiAgICBwYWRkaW5nLXRvcDogMTI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEyNXB4O1xuICBgfTtcblxuICAmLmZpbGxIZWlnaHQge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICR7bWVkaWEuZGVza3RvcGBcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYH07XG4gICAgJHttZWRpYS50YWJsZXRgXG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIGB9O1xuICAgICR7bWVkaWEucGhhYmxldGBcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYH07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IG1lZGlhIGZyb20gXCIuL21lZGlhXCI7XG5cbmNvbnN0IFNlY2l0b24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDE1MHB4IDA7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuXG4gICR7bWVkaWEudGFibGV0YHBhZGRpbmc6IDEwMHB4IDA7YH07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTZWNpdG9uO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWVcIjtcblxuY29uc3QgVHJhbnNpdGlvblN0eWxlID0gY3NzYFxuICAuZmFkZXVwLWVudGVyIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zICR7dGhlbWUuZWFzaW5nfSwgdHJhbnNmb3JtIDMwMG1zICR7dGhlbWUuZWFzaW5nfTtcbiAgfVxuXG4gIC5mYWRldXAtZW50ZXItYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgJHt0aGVtZS5lYXNpbmd9LCB0cmFuc2Zvcm0gMzAwbXMgJHt0aGVtZS5lYXNpbmd9O1xuICB9XG5cbiAgLmZhZGVkb3duLWVudGVyIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyAke3RoZW1lLmVhc2luZ30sIHRyYW5zZm9ybSAzMDBtcyAke3RoZW1lLmVhc2luZ307XG4gIH1cblxuICAuZmFkZWRvd24tZW50ZXItYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgJHt0aGVtZS5lYXNpbmd9LCB0cmFuc2Zvcm0gMzAwbXMgJHt0aGVtZS5lYXNpbmd9O1xuICB9XG5cbiAgLmZhZGUtZW50ZXIge1xuICAgIG9wYWNpdHk6IDAuMDE7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zICR7dGhlbWUuZWFzaW5nfTtcbiAgfVxuXG4gIC5mYWRlLWVudGVyLWFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zICR7dGhlbWUuZWFzaW5nfTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNpdGlvblN0eWxlO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCBKRVRCUkFJTlNNT05PUmVndWxhclRURiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1SZWd1bGFyLnR0ZlwiO1xuaW1wb3J0IEpFVEJSQUlOU01PTk9SZWd1bGFyV09GRiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1SZWd1bGFyLndvZmZcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PUmVndWxhcldPRkYyIGZyb20gXCIuLi9mb250cy9KZXRCcmFpbnNNb25vLVJlZ3VsYXIud29mZjJcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PTWVkaXVtVFRGIGZyb20gXCIuLi9mb250cy9KZXRCcmFpbnNNb25vLU1lZGl1bS50dGZcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PTWVkaXVtV09GRiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1NZWRpdW0ud29mZlwiO1xuaW1wb3J0IEpFVEJSQUlOU01PTk9NZWRpdW1XT0ZGMiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1NZWRpdW0ud29mZjJcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PTWVkaXVtSXRhbGljVFRGIGZyb20gXCIuLi9mb250cy9KZXRCcmFpbnNNb25vLU1lZGl1bS1JdGFsaWMudHRmXCI7XG5pbXBvcnQgSkVUQlJBSU5TTU9OT01lZGl1bUl0YWxpY1dPRkYgZnJvbSBcIi4uL2ZvbnRzL0pldEJyYWluc01vbm8tTWVkaXVtLUl0YWxpYy53b2ZmXCI7XG5pbXBvcnQgSkVUQlJBSU5TTU9OT01lZGl1bUl0YWxpY1dPRkYyIGZyb20gXCIuLi9mb250cy9KZXRCcmFpbnNNb25vLU1lZGl1bS1JdGFsaWMud29mZjJcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PSXRhbGljVFRGIGZyb20gXCIuLi9mb250cy9KZXRCcmFpbnNNb25vLUl0YWxpYy50dGZcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PSXRhbGljV09GRiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1JdGFsaWMud29mZlwiO1xuaW1wb3J0IEpFVEJSQUlOU01PTk9JdGFsaWNXT0ZGMiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1JdGFsaWMud29mZjJcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PRXh0cmFCb2xkVFRGIGZyb20gXCIuLi9mb250cy9KZXRCcmFpbnNNb25vLUV4dHJhQm9sZC50dGZcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PRXh0cmFCb2xkV09GRiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1FeHRyYUJvbGQud29mZlwiO1xuaW1wb3J0IEpFVEJSQUlOU01PTk9FeHRyYUJvbGRXT0ZGMiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1FeHRyYUJvbGQud29mZjJcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PRXh0cmFCb2xkSXRhbGljVFRGIGZyb20gXCIuLi9mb250cy9KZXRCcmFpbnNNb25vLUV4dHJhQm9sZC1JdGFsaWMudHRmXCI7XG5pbXBvcnQgSkVUQlJBSU5TTU9OT0V4dHJhQm9sZEl0YWxpY1dPRkYgZnJvbSBcIi4uL2ZvbnRzL0pldEJyYWluc01vbm8tRXh0cmFCb2xkLUl0YWxpYy53b2ZmXCI7XG5pbXBvcnQgSkVUQlJBSU5TTU9OT0V4dHJhQm9sZEl0YWxpY1dPRkYyIGZyb20gXCIuLi9mb250cy9KZXRCcmFpbnNNb25vLUV4dHJhQm9sZC1JdGFsaWMud29mZjJcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PQm9sZFRURiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1Cb2xkLnR0ZlwiO1xuaW1wb3J0IEpFVEJSQUlOU01PTk9Cb2xkV09GRiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1Cb2xkLndvZmZcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PQm9sZFdPRkYyIGZyb20gXCIuLi9mb250cy9KZXRCcmFpbnNNb25vLUJvbGQud29mZjJcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PQm9sZEl0YWxpY1RURiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1Cb2xkLUl0YWxpYy50dGZcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PQm9sZEl0YWxpY1dPRkYgZnJvbSBcIi4uL2ZvbnRzL0pldEJyYWluc01vbm8tQm9sZC1JdGFsaWMud29mZlwiO1xuaW1wb3J0IEpFVEJSQUlOU01PTk9Cb2xkSXRhbGljV09GRjIgZnJvbSBcIi4uL2ZvbnRzL0pldEJyYWluc01vbm8tQm9sZC1JdGFsaWMud29mZjJcIjtcblxuY29uc3QgRm9udEZhY2VzID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJKZXRCcmFpbnMgTW9ub1wiO1xuICAgIHNyYzogdXJsKCR7SkVUQlJBSU5TTU9OT1JlZ3VsYXJXT0ZGMn0pIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgdXJsKCR7SkVUQlJBSU5TTU9OT1JlZ3VsYXJUVEZ9KSBmb3JtYXQoXCJ0cnVldHlwZVwiKSxcbiAgICAgIHVybCgke0pFVEJSQUlOU01PTk9SZWd1bGFyV09GRn0pIGZvcm1hdChcIndvZmZcIik7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiSmV0QnJhaW5zIE1vbm9cIjtcbiAgICBzcmM6IHVybCgke0pFVEJSQUlOU01PTk9JdGFsaWNXT0ZGMn0pIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgdXJsKCR7SkVUQlJBSU5TTU9OT0l0YWxpY1RURn0pIGZvcm1hdChcInRydWV0eXBlXCIpLFxuICAgICAgdXJsKCR7SkVUQlJBSU5TTU9OT0l0YWxpY1dPRkZ9KSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkpldEJyYWlucyBNb25vXCI7XG4gICAgc3JjOiB1cmwoJHtKRVRCUkFJTlNNT05PTWVkaXVtV09GRjJ9KSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgIHVybCgke0pFVEJSQUlOU01PTk9NZWRpdW1UVEZ9KSBmb3JtYXQoXCJ0cnVldHlwZVwiKSxcbiAgICAgIHVybCgke0pFVEJSQUlOU01PTk9NZWRpdW1XT0ZGfSkgZm9ybWF0KFwid29mZlwiKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJKZXRCcmFpbnMgTW9ub1wiO1xuICAgIHNyYzogdXJsKCR7SkVUQlJBSU5TTU9OT01lZGl1bUl0YWxpY1dPRkYyfSkgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICB1cmwoJHtKRVRCUkFJTlNNT05PTWVkaXVtSXRhbGljVFRGfSkgZm9ybWF0KFwidHJ1ZXR5cGVcIiksXG4gICAgICB1cmwoJHtKRVRCUkFJTlNNT05PTWVkaXVtSXRhbGljV09GRn0pIGZvcm1hdChcIndvZmZcIik7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiSmV0QnJhaW5zIE1vbm9cIjtcbiAgICBzcmM6IHVybCgke0pFVEJSQUlOU01PTk9Cb2xkV09GRjJ9KSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgIHVybCgke0pFVEJSQUlOU01PTk9Cb2xkVFRGfSkgZm9ybWF0KFwidHJ1ZXR5cGVcIiksXG4gICAgICB1cmwoJHtKRVRCUkFJTlNNT05PQm9sZFdPRkZ9KSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkpldEJyYWlucyBNb25vXCI7XG4gICAgc3JjOiB1cmwoJHtKRVRCUkFJTlNNT05PQm9sZEl0YWxpY1dPRkYyfSkgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICB1cmwoJHtKRVRCUkFJTlNNT05PQm9sZEl0YWxpY1RURn0pIGZvcm1hdChcInRydWV0eXBlXCIpLFxuICAgICAgdXJsKCR7SkVUQlJBSU5TTU9OT0JvbGRJdGFsaWNXT0ZGfSkgZm9ybWF0KFwid29mZlwiKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJKZXRCcmFpbnMgTW9ub1wiO1xuICAgIHNyYzogdXJsKCR7SkVUQlJBSU5TTU9OT0V4dHJhQm9sZFdPRkYyfSkgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICB1cmwoJHtKRVRCUkFJTlNNT05PRXh0cmFCb2xkVFRGfSkgZm9ybWF0KFwidHJ1ZXR5cGVcIiksXG4gICAgICB1cmwoJHtKRVRCUkFJTlNNT05PRXh0cmFCb2xkV09GRn0pIGZvcm1hdChcIndvZmZcIik7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiSmV0QnJhaW5zIE1vbm9cIjtcbiAgICBzcmM6IHVybCgke0pFVEJSQUlOU01PTk9FeHRyYUJvbGRJdGFsaWNXT0ZGMn0pIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgdXJsKCR7SkVUQlJBSU5TTU9OT0V4dHJhQm9sZEl0YWxpY1RURn0pIGZvcm1hdChcInRydWV0eXBlXCIpLFxuICAgICAgdXJsKCR7SkVUQlJBSU5TTU9OT0V4dHJhQm9sZEl0YWxpY1dPRkZ9KSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBGb250RmFjZXM7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIHRoZW1lIH0gZnJvbSBcIi4vdGhlbWVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2xvYmFsU3R5bGUgfSBmcm9tIFwiLi9HbG9iYWxTdHlsZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWl4aW5zIH0gZnJvbSBcIi4vbWl4aW5zXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1lZGlhIH0gZnJvbSBcIi4vbWVkaWFcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1haW4gfSBmcm9tIFwiLi9NYWluXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlY3Rpb24gfSBmcm9tIFwiLi9TZWN0aW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvb3RlciB9IGZyb20gXCIuL0Zvb3RlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWFkaW5nIH0gZnJvbSBcIi4vSGVhZGluZ1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tIFwiLi9CdXR0b25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW5saW5lTGluayB9IGZyb20gXCIuL0lubGluZUxpbmtcIjtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBzaXplcyA9IHtcbiAgZ2lhbnQ6IDE0NDAsXG4gIGJpZ0Rlc2t0b3A6IDEyMDAsXG4gIGRlc2t0b3A6IDEwMDAsXG4gIHRhYmxldDogNzY4LFxuICB0aG9uZTogNjAwLFxuICBwaGFibGV0OiA0ODAsXG4gIHBob25lOiAzNzYsXG4gIHRpbnk6IDMzMCxcbn07XG5cbmV4cG9ydCBjb25zdCBtZWRpYSA9IE9iamVjdC5rZXlzKHNpemVzKS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBsYWJlbCkgPT4ge1xuICBjb25zdCBlbVNpemUgPSBzaXplc1tsYWJlbF0gLyAxNjtcbiAgYWNjdW11bGF0b3JbbGFiZWxdID0gKC4uLmFyZ3MpID0+IGNzc2BcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHtlbVNpemV9ZW0pIHtcbiAgICAgICR7Y3NzKC4uLmFyZ3MpfTtcbiAgICB9XG4gIGA7XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn0sIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgbWVkaWE7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xuaW1wb3J0IG1lZGlhIGZyb20gXCIuL21lZGlhXCI7XG5jb25zdCB7IGNvbG9ycywgZm9udFNpemVzLCBmb250cyB9ID0gdGhlbWU7XG5cbmNvbnN0IG1peGlucyA9IHtcbiAgZmxleENlbnRlcjogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYCxcblxuICBmbGV4QmV0d2VlbjogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGAsXG5cbiAgb3V0aWxlOiBjc3NgXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHJlZDtcbiAgYCxcblxuICBsaW5rOiBjc3NgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXIsXG4gICAgJjphY3RpdmUsXG4gICAgJjpmb2N1cyB7XG4gICAgICBjb2xvcjogJHtjb2xvcnMuYmx1ZX07XG4gICAgICBvdXRsaW5lOiAwO1xuICAgIH1cbiAgYCxcblxuICBpbmxpbmVMaW5rOiBjc3NgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibHVlfTtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMsXG4gICAgJjphY3RpdmUge1xuICAgICAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICAgICAgb3V0bGluZTogMDtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgICYgPiAqIHtcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLmJsdWV9ICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG4gICAgICB9XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvdHRvbTogMC4xZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5ibHVlfTtcbiAgICAgIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICBgLFxuXG4gIHNtYWxsQnV0dG9uOiBjc3NgXG4gICAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLmJsdWV9O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuYm9yZGVyUmFkaXVzfTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5zbWlzaH07XG4gICAgZm9udC1mYW1pbHk6ICR7Zm9udHMuSmV0QnJhaW5zTW9ub307XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAke3RoZW1lLnRyYW5zaXRpb259O1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy50cmFuc0JsdWV9O1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIGAsXG5cbiAgYmlnQnV0dG9uOiBjc3NgXG4gICAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLmJsdWV9O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuYm9yZGVyUmFkaXVzfTtcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDEuNzVyZW07XG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5zbX07XG4gICAgZm9udC1mYW1pbHk6ICR7Zm9udHMuSmV0QnJhaW5zTW9ub307XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAke3RoZW1lLnRyYW5zaXRpb259O1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy50cmFuc0JsdWV9O1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIGAsXG5cbiAgc2lkZVBhZGRpbmc6IGNzc2BcbiAgICBwYWRkaW5nOiAwIDE1MHB4O1xuICAgICR7bWVkaWEuZGVza3RvcGBwYWRkaW5nOiAwIDEwMHB4O2B9O1xuICAgICR7bWVkaWEudGFibGV0YHBhZGRpbmc6IDAgNTBweDtgfTtcbiAgICAke21lZGlhLnBoYWJsZXRgcGFkZGluZzogMCAyNXB4O2B9O1xuICBgLFxuXG4gIGJveFNoYWRvdzogY3NzYFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4ICR7Y29sb3JzLnNoYWRvd05hdnl9O1xuICAgIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG5cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogMCAyMHB4IDMwcHggLTE1cHggJHtjb2xvcnMuc2hhZG93TmF2eX07XG4gICAgfVxuICBgLFxuXG4gIGZhbmN5TGlzdDogY3NzYFxuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5sZ307XG4gICAgbGkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCLilrlcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBjb2xvcjogJHtjb2xvcnMuYmx1ZX07XG4gICAgICB9XG4gICAgfVxuICBgLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWl4aW5zO1xuIiwiaW1wb3J0IHsgaGV4MnJnYmEgfSBmcm9tIFwiLi4vdXRpbHMvaW5kZXhcIjtcblxuY29uc3QgQUNDRU5UID0gXCIjMDA3QkZGXCI7XG5jb25zdCBEYXJrX0JHID0gXCIjMTcxQzI4XCI7XG5jb25zdCBCRyA9IFwiIzBhMTkyZlwiO1xuXG5jb25zdCB0aGVtZSA9IHtcbiAgY29sb3JzOiB7XG4gICAgZGFya05hdnk6IERhcmtfQkcsXG4gICAgbmF2eTogQkcsXG4gICAgbGlnaHROYXZ5OiBcIiMxNzJhNDVcIixcbiAgICBsaWdodGVzdE5hdnk6IFwiIzMwM0M1NVwiLFxuICAgIHNsYXRlOiBcIiM4ODkyYjBcIixcbiAgICBsaWdodFNsYXRlOiBcIiNhOGIyZDFcIixcbiAgICBsaWdodGVzdFNsYXRlOiBcIiNjY2Q2ZjZcIixcbiAgICB3aGl0ZTogXCIjZTZmMWZmXCIsXG4gICAgYmx1ZTogQUNDRU5ULFxuICAgIHRyYW5zQmx1ZTogaGV4MnJnYmEoQUNDRU5ULCAwLjA3KSxcbiAgICBzaGFkb3dOYXZ5OiBoZXgycmdiYShEYXJrX0JHLCAwLjA3KSxcbiAgICBuYXZTaGFkb3c6IFwiICMwMDBkMWFcIixcbiAgfSxcblxuICBmb250czoge1xuICAgIEpldEJyYWluc01vbm86IFwiSmV0QnJhaW5zIE1vbm9cIixcbiAgfSxcblxuICBmb250U2l6ZXM6IHtcbiAgICB4czogXCIxMnB4XCIsXG4gICAgc21pc2g6IFwiMTNweFwiLFxuICAgIHNtOiBcIjE0cHhcIixcbiAgICBtZDogXCIxNnB4XCIsXG4gICAgbGc6IFwiMThweFwiLFxuICAgIHhsOiBcIjIwcHhcIixcbiAgICB4eGw6IFwiMjJweFwiLFxuICAgIGgzOiBcIjMycHhcIixcbiAgfSxcblxuICBlYXNpbmc6IFwiY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpXCIsXG4gIHRyYW5zaXRpb246IFwiYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKVwiLFxuXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgbmF2SGVpZ2h0OiBcIjEwMHB4XCIsXG4gIG5hdlNjcm9sbEhlaWdodDogXCI3MHB4XCIsXG4gIG1hcmdpbjogXCIyMHB4XCIsXG5cbiAgdGFiSGVpZ2h0OiA0MixcbiAgdGFiV2lkdGg6IDEyMCxcbiAgcmFkaXVzOiAzLFxuXG4gIGhhbWJ1cmdlcldpZHRoOiAzMCxcbiAgaGFtQmVmb3JlOiBgdG9wIDAuMXMgZWFzZS1pbiAwLjI1cywgb3BhY2l0eSAwLjFzIGVhc2UtaW5gLFxuICBoYW1CZWZvcmVBY3RpdmU6IGB0b3AgMC4xcyBlYXNlLW91dCwgb3BhY2l0eSAwLjFzIGVhc2Utb3V0IDAuMTJzYCxcbiAgaGFtQWZ0ZXI6IGBib3R0b20gMC4xcyBlYXNlLWluIDAuMjVzLCB0cmFuc2Zvcm0gMC4yMnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSlgLFxuICBoYW1BZnRlckFjdGl2ZTogYGJvdHRvbSAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4yMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSkgMC4xMnNgLFxuXG4gIG5hdkRlbGF5OiAxMDAwLFxuICBsb2FkZXJEZWxheTogMjAwMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIiwiZXhwb3J0IGNvbnN0IHRocm90dGxlID0gKGZ1bmMsIHdhaXQgPSAxMDApID0+IHtcbiAgbGV0IHRpbWVyID0gbnVsbDtcbiAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgaWYgKHRpbWVyID09PSBudWxsKSB7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB0aW1lciA9IG51bGw7XG4gICAgICB9LCB3YWl0KTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgaGV4MnJnYmEgPSAoaGV4LCBhbHBoYSA9IDEpID0+IHtcbiAgY29uc3QgW3IsIGcsIGJdID0gaGV4Lm1hdGNoKC9cXHdcXHcvZykubWFwKCh4KSA9PiBwYXJzZUludCh4LCAxNikpO1xuICByZXR1cm4gYHJnYmEoJHtyfSwke2d9LCR7Yn0sJHthbHBoYX0pYDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==