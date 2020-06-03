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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8Bbg");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("obyI");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("NV0Y");
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, _config__WEBPACK_IMPORTED_MODULE_3__["siteTitle"])), __jsx(_styles_index__WEBPACK_IMPORTED_MODULE_4__[/* GlobalStyle */ "a"], null), __jsx(Component, pageProps));
  }

}

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

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

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
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
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "NV0Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ styles_theme; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ GlobalStyles; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ styles_mixins; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ styles_media; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ styles_Main; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ Section; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ styles_Heading; });

// UNUSED EXPORTS: Header, Footer, Button, InlineLink

// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__("Qi1R");

// CONCATENATED MODULE: ./styles/theme.js

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
    transBlue: Object(utils["a" /* hex2rgba */])(ACCENT, 0.07),
    shadowNavy: Object(utils["a" /* hex2rgba */])(Dark_BG, 0.07),
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
/* harmony default export */ var styles_theme = (theme);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./styles/media.js

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

  accumulator[label] = (...args) => Object(external_styled_components_["css"])(["@media (max-width:", "em){", ";}"], emSize, Object(external_styled_components_["css"])(...args));

  return accumulator;
}, {});
/* harmony default export */ var styles_media = (media);
// CONCATENATED MODULE: ./styles/mixins.js



const {
  colors,
  fontSizes,
  fonts
} = styles_theme;
const mixins = {
  flexCenter: Object(external_styled_components_["css"])(["display:flex;justify-content:center;align-items:center;"]),
  flexBetween: Object(external_styled_components_["css"])(["display:flex;justify-content:space-between;align-items:center;"]),
  outile: Object(external_styled_components_["css"])(["outline:1px solid red;"]),
  link: Object(external_styled_components_["css"])(["display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;color:inherit;position:relative;transition:", ";cursor:pointer;&:hover,&:active,&:focus{color:", ";outline:0;}"], styles_theme.transition, colors.blue),
  inlineLink: Object(external_styled_components_["css"])(["display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;position:relative;transition:", ";cursor:pointer;color:", ";&:hover,&:focus,&:active{color:", ";outline:0;&:after{width:100%;}& > *{color:", " !important;transition:", ";}}&:after{content:\"\";display:block;width:0;height:1px;position:relative;bottom:0.1em;background-color:", ";transition:", ";opacity:0.5;}"], styles_theme.transition, colors.blue, colors.blue, colors.blue, styles_theme.transition, colors.blue, styles_theme.transition),
  smallButton: Object(external_styled_components_["css"])(["color:", ";background-color:transparent;border:1px solid ", ";border-radius:", ";padding:0.75rem 1rem;font-size:", ";font-family:", ";line-height:1;text-decoration:none;cursor:pointer;transition:", ";&:hover,&:focus,&:active{background-color:", ";}&:after{display:none !important;}"], colors.blue, colors.blue, styles_theme.borderRadius, fontSizes.smish, fonts.JetBrainsMono, styles_theme.transition, colors.transBlue),
  bigButton: Object(external_styled_components_["css"])(["color:", ";background-color:transparent;border:1px solid ", ";border-radius:", ";padding:1.25rem 1.75rem;font-size:", ";font-family:", ";line-height:1;text-decoration:none;cursor:pointer;transition:", ";&:hover,&:focus,&:active{background-color:", ";}&:after{display:none !important;}"], colors.blue, colors.blue, styles_theme.borderRadius, fontSizes.sm, fonts.JetBrainsMono, styles_theme.transition, colors.transBlue),
  sidePadding: Object(external_styled_components_["css"])(["padding:0 150px;", ";", ";", ";"], styles_media.desktop`padding: 0 100px;`, styles_media.tablet`padding: 0 50px;`, styles_media.phablet`padding: 0 25px;`),
  boxShadow: Object(external_styled_components_["css"])(["box-shadow:0 10px 30px -15px ", ";transition:", ";&:hover,&:focus{box-shadow:0 20px 30px -15px ", ";}"], colors.shadowNavy, styles_theme.transition, colors.shadowNavy),
  fancyList: Object(external_styled_components_["css"])(["padding:0;margin:0;list-style:none;font-size:", ";li{position:relative;padding-left:30px;margin-bottom:10px;&:before{content:\"\u25B9\";position:absolute;left:0;color:", ";}}"], fontSizes.lg, colors.blue)
};
/* harmony default export */ var styles_mixins = (mixins);
// CONCATENATED MODULE: ./fonts/JetBrainsMono-Regular.ttf
/* harmony default export */ var JetBrainsMono_Regular = ("dist/assets/JetBrainsMono-Regular.ttf");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-Regular.woff
/* harmony default export */ var fonts_JetBrainsMono_Regular = ("dist/assets/JetBrainsMono-Regular.woff");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-Regular.woff2
/* harmony default export */ var JetBrainsMono_Regular_woff2 = ("dist/assets/JetBrainsMono-Regular.woff2");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-Medium.ttf
/* harmony default export */ var JetBrainsMono_Medium = ("dist/assets/JetBrainsMono-Medium.ttf");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-Medium.woff
/* harmony default export */ var fonts_JetBrainsMono_Medium = ("dist/assets/JetBrainsMono-Medium.woff");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-Medium.woff2
/* harmony default export */ var JetBrainsMono_Medium_woff2 = ("dist/assets/JetBrainsMono-Medium.woff2");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-Medium-Italic.ttf
/* harmony default export */ var JetBrainsMono_Medium_Italic = ("dist/assets/JetBrainsMono-Medium-Italic.ttf");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-Medium-Italic.woff
/* harmony default export */ var fonts_JetBrainsMono_Medium_Italic = ("dist/assets/JetBrainsMono-Medium-Italic.woff");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-Medium-Italic.woff2
/* harmony default export */ var JetBrainsMono_Medium_Italic_woff2 = ("dist/assets/JetBrainsMono-Medium-Italic.woff2");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-Italic.ttf
/* harmony default export */ var JetBrainsMono_Italic = ("dist/assets/JetBrainsMono-Italic.ttf");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-Italic.woff
/* harmony default export */ var fonts_JetBrainsMono_Italic = ("dist/assets/JetBrainsMono-Italic.woff");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-Italic.woff2
/* harmony default export */ var JetBrainsMono_Italic_woff2 = ("dist/assets/JetBrainsMono-Italic.woff2");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-ExtraBold.ttf
/* harmony default export */ var JetBrainsMono_ExtraBold = ("dist/assets/JetBrainsMono-ExtraBold.ttf");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-ExtraBold.woff
/* harmony default export */ var fonts_JetBrainsMono_ExtraBold = ("dist/assets/JetBrainsMono-ExtraBold.woff");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-ExtraBold.woff2
/* harmony default export */ var JetBrainsMono_ExtraBold_woff2 = ("dist/assets/JetBrainsMono-ExtraBold.woff2");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-ExtraBold-Italic.ttf
/* harmony default export */ var JetBrainsMono_ExtraBold_Italic = ("dist/assets/JetBrainsMono-ExtraBold-Italic.ttf");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-ExtraBold-Italic.woff
/* harmony default export */ var fonts_JetBrainsMono_ExtraBold_Italic = ("dist/assets/JetBrainsMono-ExtraBold-Italic.woff");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-ExtraBold-Italic.woff2
/* harmony default export */ var JetBrainsMono_ExtraBold_Italic_woff2 = ("dist/assets/JetBrainsMono-ExtraBold-Italic.woff2");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-Bold.ttf
/* harmony default export */ var JetBrainsMono_Bold = ("dist/assets/JetBrainsMono-Bold.ttf");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-Bold.woff
/* harmony default export */ var fonts_JetBrainsMono_Bold = ("dist/assets/JetBrainsMono-Bold.woff");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-Bold.woff2
/* harmony default export */ var JetBrainsMono_Bold_woff2 = ("dist/assets/JetBrainsMono-Bold.woff2");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-Bold-Italic.ttf
/* harmony default export */ var JetBrainsMono_Bold_Italic = ("dist/assets/JetBrainsMono-Bold-Italic.ttf");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-Bold-Italic.woff
/* harmony default export */ var fonts_JetBrainsMono_Bold_Italic = ("dist/assets/JetBrainsMono-Bold-Italic.woff");
// CONCATENATED MODULE: ./fonts/JetBrainsMono-Bold-Italic.woff2
/* harmony default export */ var JetBrainsMono_Bold_Italic_woff2 = ("dist/assets/JetBrainsMono-Bold-Italic.woff2");
// CONCATENATED MODULE: ./styles/fonts.js

























const FontFaces = Object(external_styled_components_["css"])(["@font-face{font-family:\"JetBrains Mono\";src:url(", ") format(\"woff2\"),url(", ") format(\"truetype\"),url(", ") format(\"woff\");font-weight:normal;font-style:normal;}@font-face{font-family:\"JetBrains Mono\";src:url(", ") format(\"woff2\"),url(", ") format(\"truetype\"),url(", ") format(\"woff\");font-weight:normal;font-style:italic;}@font-face{font-family:\"JetBrains Mono\";src:url(", ") format(\"woff2\"),url(", ") format(\"truetype\"),url(", ") format(\"woff\");font-weight:500;font-style:normal;}@font-face{font-family:\"JetBrains Mono\";src:url(", ") format(\"woff2\"),url(", ") format(\"truetype\"),url(", ") format(\"woff\");font-weight:500;font-style:normal;}@font-face{font-family:\"JetBrains Mono\";src:url(", ") format(\"woff2\"),url(", ") format(\"truetype\"),url(", ") format(\"woff\");font-weight:700;font-style:normal;}@font-face{font-family:\"JetBrains Mono\";src:url(", ") format(\"woff2\"),url(", ") format(\"truetype\"),url(", ") format(\"woff\");font-weight:700;font-style:italic;}@font-face{font-family:\"JetBrains Mono\";src:url(", ") format(\"woff2\"),url(", ") format(\"truetype\"),url(", ") format(\"woff\");font-weight:800;font-style:normal;}@font-face{font-family:\"JetBrains Mono\";src:url(", ") format(\"woff2\"),url(", ") format(\"truetype\"),url(", ") format(\"woff\");font-weight:800;font-style:italic;}"], JetBrainsMono_Regular_woff2, JetBrainsMono_Regular, fonts_JetBrainsMono_Regular, JetBrainsMono_Italic_woff2, JetBrainsMono_Italic, fonts_JetBrainsMono_Italic, JetBrainsMono_Medium_woff2, JetBrainsMono_Medium, fonts_JetBrainsMono_Medium, JetBrainsMono_Medium_Italic_woff2, JetBrainsMono_Medium_Italic, fonts_JetBrainsMono_Medium_Italic, JetBrainsMono_Bold_woff2, JetBrainsMono_Bold, fonts_JetBrainsMono_Bold, JetBrainsMono_Bold_Italic_woff2, JetBrainsMono_Bold_Italic, fonts_JetBrainsMono_Bold_Italic, JetBrainsMono_ExtraBold_woff2, JetBrainsMono_ExtraBold, fonts_JetBrainsMono_ExtraBold, JetBrainsMono_ExtraBold_Italic_woff2, JetBrainsMono_ExtraBold_Italic, fonts_JetBrainsMono_ExtraBold_Italic);
/* harmony default export */ var styles_fonts = (FontFaces);
// CONCATENATED MODULE: ./styles/TransitionStyle.js


const TransitionStyle = Object(external_styled_components_["css"])([".fadeup-enter{opacity:0.01;transform:translateY(20px);transition:opacity 300ms ", ",transform 300ms ", ";}.fadeup-enter-active{opacity:1;transform:translateY(0px);transition:opacity 300ms ", ",transform 300ms ", ";}.fadedown-enter{opacity:0.01;transform:translateY(-20px);transition:opacity 300ms ", ",transform 300ms ", ";}.fadedown-enter-active{opacity:1;transform:translateY(0px);transition:opacity 300ms ", ",transform 300ms ", ";}.fade-enter{opacity:0.01;transition:opacity 300ms ", ";}.fade-enter-active{opacity:1;transition:opacity 300ms ", ";}"], styles_theme.easing, styles_theme.easing, styles_theme.easing, styles_theme.easing, styles_theme.easing, styles_theme.easing, styles_theme.easing, styles_theme.easing, styles_theme.easing, styles_theme.easing);
/* harmony default export */ var styles_TransitionStyle = (TransitionStyle);
// CONCATENATED MODULE: ./styles/GlobalStyles.js






const {
  colors: GlobalStyles_colors,
  fontSizes: GlobalStyles_fontSizes,
  fonts: GlobalStyles_fonts
} = styles_theme;
const GlobalStyle = external_styled_components_["createGlobalStyle"]`
  /* ${styles_fonts}; */

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
    background-color: ${GlobalStyles_colors.darkNavy};
    color: ${GlobalStyles_colors.slate};
    line-height: 1.3;
    font-family: ${GlobalStyles_fonts.JetBrainsMono};
    font-size: ${GlobalStyles_fontSizes.xl};
    ${styles_media.phablet`font-size: ${GlobalStyles_fontSizes.lg};`}

    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      #root > #content > * {
        filter: blur(5px) brightness(0.7);
        transition: ${styles_theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  ::selection {
    background-color: ${GlobalStyles_colors.slate};
    color: ${GlobalStyles_colors.lightestSlate};
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
    color: ${GlobalStyles_colors.lightestSlate};
    margin: 0 0 10px 0;
  }

  h1 {
    &.big-title {
      font-size: 80px;
      line-height: 1.1;
      margin: 0;
      ${styles_media.desktop`font-size: 70px;`};
      ${styles_media.tablet`font-size: 60px;`};
      ${styles_media.phablet`font-size: 50px;`};
      ${styles_media.phone`font-size: 40px;`};
    }

    &.medium-title {
      font-size: 60px;
      line-height: 1.1;
      margin: 0;
      ${styles_media.desktop`font-size: 50px;`};
      ${styles_media.tablet`font-size: 40px;`};
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
    transition: ${styles_theme.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${GlobalStyles_colors.blue};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;

    &:focus,
    &:active {
      outline-color: ${GlobalStyles_colors.lightSlate};
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
      ${styles_mixins.inlineLink};
    }

    & > code {
      background-color: ${GlobalStyles_colors.lightNavy};
      color: ${GlobalStyles_colors.white};
      font-size: ${GlobalStyles_fontSizes.sm};
      border-radius: ${styles_theme.borderRadius};
      padding: 0.3em 0.5em;
    }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: ${GlobalStyles_fontSizes.lg};
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: "▹";
          position: absolute;
          left: 0;
          color: ${GlobalStyles_colors.blue};
        }
      }
    }
  }

  blockquote {
    border-left-color: ${GlobalStyles_colors.blue};
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
    background-color: ${GlobalStyles_colors.lightestNavy};
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  code {
    font-family: ${GlobalStyles_fonts.JetBrainsMono};
    font-size: ${GlobalStyles_fontSizes.md};
  }

  #logo {
    color: ${GlobalStyles_colors.blue};
  }

  .overline {
    color: ${GlobalStyles_colors.blue};
    font-family: ${GlobalStyles_fonts.JetBrainsMono};
    font-size: ${GlobalStyles_fontSizes.md};
    font-weight: normal;
  }

  .subtitle {
    color: ${GlobalStyles_colors.blue};
    margin: 0 0 20px 0;
    font-size: ${GlobalStyles_fontSizes.md};
    font-family: ${GlobalStyles_fonts.JetBrainsMono};
    font-weight: normal;
    line-height: 1.5;
    ${styles_media.desktop`font-size: ${GlobalStyles_fontSizes.sm};`};
    ${styles_media.tablet`font-size: ${GlobalStyles_fontSizes.smish};`};

    a {
      ${styles_mixins.inlineLink};
      line-height: 1.5;
    }
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: ${GlobalStyles_colors.blue};

    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }
    a {
      ${styles_mixins.inlineLink};
      font-family: ${GlobalStyles_fonts.JetBrainsMono};
      font-size: ${GlobalStyles_fontSizes.sm};
      font-weight: bold;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  ${styles_TransitionStyle};
`;
/* harmony default export */ var GlobalStyles = (GlobalStyle);
// CONCATENATED MODULE: ./styles/Header.js

const Header = external_styled_components_default.a.header.withConfig({
  displayName: "Header",
  componentId: "sc-1a2x9wi-0"
})(["width:100%;"]);
/* harmony default export */ var styles_Header = (Header);
// CONCATENATED MODULE: ./styles/Main.js



const Main = external_styled_components_default.a.main.withConfig({
  displayName: "Main",
  componentId: "sc-1b282it-0"
})(["", ";margin:0 auto;width:100%;max-width:1600px;min-height:100vh;padding-top:200px;padding-bottom:200px;", ";", ";", ";&.fillHeight{padding-top:0;padding-bottom:0;", ";", ";", ";}"], styles_mixins.sidePadding, styles_media.desktop`
    padding-top: 200px;
    padding-bottom: 200px;
  `, styles_media.tablet`
    padding-top: 150px;
    padding-bottom: 150px;
  `, styles_media.phablet`
    padding-top: 125px;
    padding-bottom: 125px;
  `, styles_media.desktop`
    padding-top: 0;
    padding-bottom: 0;
  `, styles_media.tablet`
    padding-top: 0;
    padding-bottom: 0;
  `, styles_media.phablet`
    padding-top: 0;
    padding-bottom: 0;
  `);
/* harmony default export */ var styles_Main = (Main);
// CONCATENATED MODULE: ./styles/Section.js


const Seciton = external_styled_components_default.a.section.withConfig({
  displayName: "Section__Seciton",
  componentId: "sc-1ct6tgq-0"
})(["margin:0 auto;padding:150px 0;max-width:1000px;", ";"], styles_media.tablet`padding: 100px 0;`);
/* harmony default export */ var Section = (Seciton);
// CONCATENATED MODULE: ./styles/Footer.js


const Footer = external_styled_components_default.a.footer.withConfig({
  displayName: "Footer",
  componentId: "ypxh3r-0"
})(["margin:0;padding:", ";"], styles_theme.margin);
/* harmony default export */ var styles_Footer = (Footer);
// CONCATENATED MODULE: ./styles/Heading.js



const {
  colors: Heading_colors,
  fontSizes: Heading_fontSizes,
  fonts: Heading_fonts
} = styles_theme;
const Heading = external_styled_components_default.a.h3.withConfig({
  displayName: "Heading",
  componentId: "anuyyr-0"
})(["position:relative;display:flex;align-items:center;margin:10px 0 40px;width:100%;white-space:nowrap;font-size:", ";", ";", ";&:before{counter-increment:section;content:\"0\" counter(section) \".\";margin-right:10px;font-family:", ";font-weight:normal;color:", ";font-size:", ";position:relative;bottom:-2px;", ";}&:after{content:\"\";display:block;height:1px;width:300px;background-color:", ";position:relative;margin-left:20px;", ";", ";", ";}"], Heading_fontSizes.h3, styles_media.tablet`font-size: 24px;`, styles_media.phablet`font-size: 20px;`, Heading_fonts.JetBrainsMono, Heading_colors.blue, Heading_fontSizes.xl, styles_media.tablet`font-size: ${Heading_fontSizes.lg};`, Heading_colors.lightestNavy, styles_media.desktop`width: 200px`, styles_media.tablet`width: 100%;`, styles_media.thone`margin-left: 10px;`);
/* harmony default export */ var styles_Heading = (Heading);
// CONCATENATED MODULE: ./styles/Button.js


const {
  colors: Button_colors,
  fontSizes: Button_fontSizes,
  fonts: Button_fonts
} = styles_theme;
const Button = external_styled_components_default.a.button.withConfig({
  displayName: "Button",
  componentId: "zijj00-0"
})(["color:", ";background-color:transparent;border:1px solid ", ";border-radius:", ";font-size:", ";font-family:", ";line-height:1;text-decoration:none;cursor:pointer;transition:", ";padding:1.25rem 1.75rem;&:hover,&:focus,&:active{background-color:", ";outline:none;}&:after{display:none !important;}"], Button_colors.blue, Button_colors.blue, styles_theme.borderRadius, Button_fontSizes.smish, Button_fonts.JetBrainsMono, styles_theme.transition, Button_colors.transBlue);
/* harmony default export */ var styles_Button = (Button);
// CONCATENATED MODULE: ./styles/InlineLink.js


const {
  colors: InlineLink_colors
} = styles_theme;
const InlineLink = external_styled_components_default.a.a.withConfig({
  displayName: "InlineLink",
  componentId: "sc-1byoqpk-0"
})(["display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;position:relative;transition:", ";cursor:pointer;&:hover,&:focus,&:active{color:", ";outline:0;&:after{width:100%;}}&:after{content:\"\";display:block;width:0;height:1px;position:relative;bottom:0.37em;background-color:", ";transition:", ";}"], styles_theme.transition, InlineLink_colors.blue, InlineLink_colors.blue, styles_theme.transition);
/* harmony default export */ var styles_InlineLink = (InlineLink);
// CONCATENATED MODULE: ./styles/index.js












/***/ }),

/***/ "Qi1R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hex2rgba; });
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

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "obyI":
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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });