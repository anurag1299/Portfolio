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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Y0NT");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "CSOn":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

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

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

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

/***/ "Y0NT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("CSOn");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("e+cM");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("NV0Y");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const {
  colors,
  fonts,
  navDelay
} = _styles_index__WEBPACK_IMPORTED_MODULE_7__[/* theme */ "g"];
const StyledMainContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_styles_index__WEBPACK_IMPORTED_MODULE_7__[/* Main */ "c"]).withConfig({
  displayName: "_error__StyledMainContainer",
  componentId: "t6jqgc-0"
})(["", ";flex-direction:column;"], _styles_index__WEBPACK_IMPORTED_MODULE_7__[/* mixins */ "f"].flexCenter);
const StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.h1.withConfig({
  displayName: "_error__StyledTitle",
  componentId: "t6jqgc-1"
})(["color:", ";font-family:", ";font-size:12vw;line-height:1;", " ", ";"], colors.blue, fonts.JetBrainsMono, _styles_index__WEBPACK_IMPORTED_MODULE_7__[/* media */ "e"].bigDesktop`font-size: 200px;`, _styles_index__WEBPACK_IMPORTED_MODULE_7__[/* media */ "e"].phablet`font-size: 120px;`);
const StyledSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.h2.withConfig({
  displayName: "_error__StyledSubtitle",
  componentId: "t6jqgc-2"
})(["font-size:3vw;font-weight:400;", ";", ";"], _styles_index__WEBPACK_IMPORTED_MODULE_7__[/* media */ "e"].bigDesktop`font-size: 50px;`, _styles_index__WEBPACK_IMPORTED_MODULE_7__[/* media */ "e"].phablet`font-size: 30px;`);
const StyledHomeButton = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.a.withConfig({
  displayName: "_error__StyledHomeButton",
  componentId: "t6jqgc-3"
})(["", ";margin-top:40px;"], _styles_index__WEBPACK_IMPORTED_MODULE_7__[/* mixins */ "f"].bigButton);

function Error({
  statusCode
}) {
  const {
    0: isMounted,
    1: setIsMounted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);
  return __jsx(_components_index__WEBPACK_IMPORTED_MODULE_5__[/* Layout */ "h"], null, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_4__["TransitionGroup"], {
    component: null
  }, isMounted && __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_4__["CSSTransition"], {
    timeout: 500,
    classNames: "fade"
  }, __jsx(StyledMainContainer, {
    className: "fillHeight"
  }, __jsx(StyledTitle, null, "404"), __jsx(StyledSubtitle, null, "Page Not Found"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx(StyledHomeButton, null, "Go Home"))))));
}

Error.getInitialProps = ({
  res,
  err
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "e+cM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ layout; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ nav; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ side; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ social; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ menu; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ email; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ hero; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ about; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ education; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ contact; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ footer; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ featured; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./styles/index.js + 37 modules
var styles = __webpack_require__("NV0Y");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/layout.js
var __jsx = external_react_default.a.createElement;




const {
  colors,
  fontSizes,
  fonts
} = styles["g" /* theme */];


if (false) {}

const StyledContent = external_styled_components_default.a.div.withConfig({
  displayName: "layout__StyledContent",
  componentId: "ju091f-0"
})(["display:flex;flex-direction:column;min-height:100vh;"]);

const Layout = ({
  children
}) => {
  return __jsx("div", {
    id: "root"
  }, __jsx(StyledContent, null, __jsx(nav, {
    isHome: true
  }), __jsx(social, {
    isHome: true
  }), __jsx(email, {
    isHome: true
  }), __jsx("div", {
    id: "content"
  }, children, __jsx(footer, null))));
};

/* harmony default export */ var layout = (Layout);
// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__("CSOn");

// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__("Qi1R");

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// CONCATENATED MODULE: ./components/icons/appstore.js
var appstore_jsx = external_react_default.a.createElement;


const IconAppStore = () => appstore_jsx("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "0 0 512 512",
  xmlSpace: "preserve"
}, appstore_jsx("title", null, "Apple App Store"), appstore_jsx("g", null, appstore_jsx("g", null, appstore_jsx("path", {
  d: "M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105 C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302 c41.355,0,75,33.645,75,75V407z"
}))), appstore_jsx("g", null, appstore_jsx("g", null, appstore_jsx("path", {
  d: "M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166 l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664 L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498 C306.487,136.719,307.375,129.981,305.646,123.531z"
}))), appstore_jsx("g", null, appstore_jsx("g", null, appstore_jsx("path", {
  d: "M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65 c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341 H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z"
}))), appstore_jsx("g", null, appstore_jsx("g", null, appstore_jsx("path", {
  d: "M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344 c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z"
}))));

/* harmony default export */ var appstore = (IconAppStore);
// CONCATENATED MODULE: ./components/icons/codepen.js
var codepen_jsx = external_react_default.a.createElement;


const IconCodepen = () => codepen_jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: "0 0 31.665 31.665"
}, codepen_jsx("title", null, "Codepen"), codepen_jsx("path", {
  d: "M16.878,0.415c-0.854-0.565-1.968-0.552-2.809,0.034L1.485,9.214c-0.671,0.468-1.071,1.233-1.071,2.052v9.444 c0,0.84,0.421,1.623,1.122,2.086l12.79,8.455c0.836,0.553,1.922,0.553,2.758,0l13.044-8.618c0.7-0.463,1.122-1.246,1.122-2.086 v-9.279c0-0.839-0.421-1.622-1.121-2.085L16.878,0.415z M26.621,10.645l-4.821,3.237l-4.521-3.288L17.25,4.127L26.621,10.645z M13.979,4.133v6.329l-4.633,3.24l-4.621-3.099L13.979,4.133z M3.458,13.722l2.991,2.004l-2.991,2.093V13.722z M14.058,27.215 l-9.331-6.258l4.661-3.258l4.67,3.133V27.215z M12.286,15.674l3.021-2.113l3.519,2.313l-3.119,2.095L12.286,15.674z M17.354,27.215 V20.83l4.463-2.991l4.805,3.159L17.354,27.215z M27.954,17.927l-3.168-2.082l3.168-2.125V17.927z"
}));

/* harmony default export */ var codepen = (IconCodepen);
// CONCATENATED MODULE: ./components/icons/external.js
var external_jsx = external_react_default.a.createElement;


const IconExternal = () => external_jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: "0 0 194.818 194.818"
}, external_jsx("title", null, "External"), external_jsx("g", null, external_jsx("path", {
  d: "M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"
}), external_jsx("path", {
  d: "M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"
})));

/* harmony default export */ var icons_external = (IconExternal);
// CONCATENATED MODULE: ./components/icons/folder.js
var folder_jsx = external_react_default.a.createElement;


const IconFolder = () => folder_jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: "0 0 60 60"
}, folder_jsx("title", null, "Folder"), folder_jsx("path", {
  d: "M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z"
}));

/* harmony default export */ var folder = (IconFolder);
// CONCATENATED MODULE: ./components/icons/fork.js
var fork_jsx = external_react_default.a.createElement;


const IconFork = () => fork_jsx("svg", {
  "aria-label": "forks",
  viewBox: "0 0 10 16",
  version: "1.1",
  width: "10",
  height: "16",
  role: "img"
}, fork_jsx("path", {
  fillRule: "evenodd",
  d: "M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
}));

/* harmony default export */ var fork = (IconFork);
// CONCATENATED MODULE: ./components/icons/formattedIcon.js
var formattedIcon_jsx = external_react_default.a.createElement;



const FormattedIcon = ({
  name
}) => {
  switch (name) {
    case "AppStore":
      return formattedIcon_jsx(appstore, null);

    case "Codepen":
      return formattedIcon_jsx(codepen, null);

    case "External":
      return formattedIcon_jsx(icons_external, null);

    case "Folder":
      return formattedIcon_jsx(folder, null);

    case "Fork":
      return formattedIcon_jsx(fork, null);

    case "GitHub":
      return formattedIcon_jsx(github, null);

    case "Instagram":
      return formattedIcon_jsx(instagram, null);

    case "Linkedin":
      return formattedIcon_jsx(linkedin, null);

    case "Loader":
      return formattedIcon_jsx(loader, null);

    case "Location":
      return formattedIcon_jsx(icons_location, null);

    case "Logo":
      return formattedIcon_jsx(logo, null);

    case "PlayStore":
      return formattedIcon_jsx(playstore, null);

    case "Star":
      return formattedIcon_jsx(star, null);

    case "Twitter":
      return formattedIcon_jsx(twitter, null);

    case "Zap":
      return formattedIcon_jsx(zap, null);

    default:
      return formattedIcon_jsx(icons_external, null);
  }
};

/* harmony default export */ var formattedIcon = (FormattedIcon);
// CONCATENATED MODULE: ./components/icons/github.js
var github_jsx = external_react_default.a.createElement;


const IconGitHub = () => github_jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: "0 0 438.549 438.549"
}, github_jsx("title", null, "GitHub"), github_jsx("path", {
  d: "M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"
}));

/* harmony default export */ var github = (IconGitHub);
// CONCATENATED MODULE: ./components/icons/instagram.js
var instagram_jsx = external_react_default.a.createElement;


const IconInstagram = () => instagram_jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: "0 0 512 512"
}, instagram_jsx("title", null, "Instagram"), instagram_jsx("g", null, instagram_jsx("g", null, instagram_jsx("path", {
  d: "M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z"
}))), instagram_jsx("g", null, instagram_jsx("g", null, instagram_jsx("path", {
  d: "M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"
}))), instagram_jsx("g", null, instagram_jsx("g", null, instagram_jsx("circle", {
  cx: "393.6",
  cy: "118.4",
  r: "17.056"
}))));

/* harmony default export */ var instagram = (IconInstagram);
// CONCATENATED MODULE: ./components/icons/linkedin.js
var linkedin_jsx = external_react_default.a.createElement;


const IconLinkedin = () => linkedin_jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: "0 0 430.117 430.117"
}, linkedin_jsx("title", null, "LinkedIn"), linkedin_jsx("path", {
  d: "M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z"
}));

/* harmony default export */ var linkedin = (IconLinkedin);
// CONCATENATED MODULE: ./components/icons/loader.js
var loader_jsx = external_react_default.a.createElement;


const IconLoader = () => loader_jsx("svg", {
  id: "logo",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 100 100"
}, loader_jsx("title", null, "Loader Logo"), loader_jsx("g", null, loader_jsx("g", {
  id: "B",
  transform: "translate(11.000000, 5.000000)"
}, loader_jsx("path", {
  d: "M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z",
  fill: "currentColor"
})), loader_jsx("path", {
  stroke: "currentColor",
  strokeWidth: "5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 z"
})));

/* harmony default export */ var loader = (IconLoader);
// CONCATENATED MODULE: ./components/icons/location.js
var location_jsx = external_react_default.a.createElement;


const IconLocation = () => location_jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: "0 0 512 512"
}, location_jsx("title", null, "Location"), location_jsx("g", null, location_jsx("g", null, location_jsx("path", {
  d: "M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257    c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22    C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34    C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180    C406.1,207.121,398.689,233.688,384.866,256.818z"
}))), location_jsx("g", null, location_jsx("g", null, location_jsx("path", {
  d: "M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z     M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2    C316.1,212.683,289.784,240.2,256,240.2z"
}))));

/* harmony default export */ var icons_location = (IconLocation);
// CONCATENATED MODULE: ./components/icons/logo.js
var logo_jsx = external_react_default.a.createElement;


const IconLogo = () => logo_jsx("svg", {
  id: "logo",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: "0 0 84 96"
}, logo_jsx("title", null, "Logo"), logo_jsx("g", {
  transform: "translate(-8.000000, -2.000000)"
}, logo_jsx("g", {
  transform: "translate(11.000000, 5.000000)"
}, logo_jsx("g", {
  transform: "translate(18.000000, 20.000000)"
}, logo_jsx("path", {
  d: "M 25.29 0 L 42.33 43.38 L 36.09 43.38 Q 35.04 43.38 34.365 42.855 Q 33.69 42.33 33.39 41.55 L 30.15 32.7 L 12.18 32.7 L 8.94 41.55 Q 8.7 42.24 7.995 42.81 Q 7.29 43.38 6.27 43.38 L 0 43.38 L 17.04 0 L 25.29 0 Z M 19.53 12.63 L 14.25 27 L 28.08 27 L 22.8 12.57 A 49.687 49.687 0 0 1 22.519 11.801 Q 22.277 11.121 22.005 10.305 A 49.563 49.563 0 0 1 21.574 8.944 A 61.387 61.387 0 0 1 21.15 7.47 A 110.837 110.837 0 0 1 20.734 8.948 A 89.992 89.992 0 0 1 20.325 10.32 A 39.546 39.546 0 0 1 19.973 11.412 Q 19.805 11.908 19.64 12.345 A 22.498 22.498 0 0 1 19.53 12.63 Z",
  vectorEffect: "non-scaling-stroke",
  fill: "currentColor"
})), logo_jsx("polygon", {
  id: "Shape",
  stroke: "currentColor",
  strokeWidth: "5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  points: "39 0 0 22 0 67 39 90 78 68 78 23"
}))));

/* harmony default export */ var logo = (IconLogo);
// CONCATENATED MODULE: ./components/icons/playstore.js
var playstore_jsx = external_react_default.a.createElement;


const IconPlayStore = () => playstore_jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  x: "0px",
  y: "0px",
  viewBox: "0 0 512.001 512.001"
}, playstore_jsx("title", null, "Google Play Store"), playstore_jsx("path", {
  d: "M464.252,212.09L99.624,8.07C84.247-1.873,64.754-2.691,48.574,5.967C32.183,14.74,22,31.737,22,50.329v411.342 c0,18.592,10.183,35.59,26.573,44.361c16.097,8.617,35.593,7.891,51.052-2.101l364.628-204.022 c16.121-9.02,25.747-25.435,25.747-43.908C490,237.527,480.374,221.111,464.252,212.09z M341.677,181.943l-50.339,50.339 L113.108,54.051L341.677,181.943z M55.544,467.323V44.676L267.621,256L55.544,467.323z M113.108,457.949l178.232-178.231 l50.339,50.339L113.108,457.949z M447.874,270.637l-75.779,42.401l-57.038-57.037l57.037-57.037l75.778,42.4 c7.746,4.335,8.583,11.68,8.583,14.637C456.455,258.958,455.62,266.302,447.874,270.637z"
}));

/* harmony default export */ var playstore = (IconPlayStore);
// CONCATENATED MODULE: ./components/icons/star.js
var star_jsx = external_react_default.a.createElement;


const IconStar = () => star_jsx("svg", {
  "aria-label": "stars",
  viewBox: "0 0 14 16",
  version: "1.1",
  width: "14",
  height: "16",
  role: "img"
}, star_jsx("path", {
  fillRule: "evenodd",
  d: "M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
}));

/* harmony default export */ var star = (IconStar);
// CONCATENATED MODULE: ./components/icons/twitter.js
var twitter_jsx = external_react_default.a.createElement;


const IconTwitter = () => twitter_jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: "0 0 612 612"
}, twitter_jsx("title", null, "Twitter"), twitter_jsx("path", {
  d: "M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411 c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513 c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101 c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104 c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194 c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485 c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"
}));

/* harmony default export */ var twitter = (IconTwitter);
// CONCATENATED MODULE: ./components/icons/zap.js
var zap_jsx = external_react_default.a.createElement;


const IconZap = () => zap_jsx("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512.001 512.001",
  enableBackground: "new 0 0 512.001 512.001"
}, zap_jsx("path", {
  d: "m413.951,200.174c-2.828-5.047-8.164-8.174-13.953-8.174h-110.608l14.555-174.668c0.609-7.312-3.836-14.1-10.781-16.467-6.914-2.383-14.609,0.282-18.594,6.446l-175.998,271.997c-3.188,4.922-3.43,11.194-0.625,16.342 2.805,5.148 8.195,8.35 14.054,8.35h110.718l-14.672,190.773c-0.57,7.375 3.992,14.18 11.031,16.454 1.625,0.523 3.281,0.774 4.922,0.774 5.453,0 10.687-2.804 13.656-7.656l175.998-287.998c3.016-4.937 3.133-11.126 0.297-16.173zm-168.896,230.685l10.898-141.63c0.344-4.445-1.187-8.829-4.211-12.103-3.031-3.265-7.289-5.126-11.742-5.126h-98.585l125.335-193.707-10.695,128.382c-0.367,4.461 1.141,8.865 4.172,12.162 3.031,3.29 7.296,5.163 11.773,5.163h99.468l-126.413,206.859z"
}));

/* harmony default export */ var zap = (IconZap);
// CONCATENATED MODULE: ./components/icons/index.js
















// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// CONCATENATED MODULE: ./components/nav.js
var nav_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //import Helmet from "react-helmet";









const {
  colors: nav_colors,
  fontSizes: nav_fontSizes,
  fonts: nav_fonts,
  loaderDelay
} = styles["g" /* theme */];
const StyledContainer = external_styled_components_default.a.header.withConfig({
  displayName: "nav__StyledContainer",
  componentId: "hikgkh-0"
})(["", ";position:fixed;top:0;padding:0px 50px;background-color:", ";transition:", ";z-index:11;filter:none !important;pointer-events:auto !important;user-select:auto !important;width:100%;height:", ";box-shadow:", ";transform:translateY( ", " );", ";", ";"], styles["f" /* mixins */].flexBetween, nav_colors.darkNavy, styles["g" /* theme */].transition, props => props.scrollDirection === "none" ? styles["g" /* theme */].navHeight : styles["g" /* theme */].navScrollHeight, props => props.scrollDirection === "up" ? `0 10px 30px -10px ${nav_colors.navShadow}` : "none", props => props.scrollDirection === "down" ? `-${styles["g" /* theme */].navScrollHeight}` : "0px", styles["e" /* media */].desktop`padding: 0 40px;`, styles["e" /* media */].tablet`padding: 0 25px;`);
const StyledNav = external_styled_components_default.a.nav.withConfig({
  displayName: "nav__StyledNav",
  componentId: "hikgkh-1"
})(["", ";position:relative;width:100%;color:", ";font-family:", ";counter-reset:item 0;z-index:12;"], styles["f" /* mixins */].flexBetween, nav_colors.lightestSlate, nav_fonts.JetBrainsMono);
const StyledLogo = external_styled_components_default.a.div.withConfig({
  displayName: "nav__StyledLogo",
  componentId: "hikgkh-2"
})(["", ";a{display:block;color:", ";width:42px;height:42px;&:hover,&:focus{svg{fill:", ";}}svg{fill:none;transition:", ";user-select:none;}}"], styles["f" /* mixins */].flexCenter, nav_colors.blue, nav_colors.transBlue, styles["g" /* theme */].transition);
const StyledHamburger = external_styled_components_default.a.div.withConfig({
  displayName: "nav__StyledHamburger",
  componentId: "hikgkh-3"
})(["", ";overflow:visible;margin:0 -12px 0 0;padding:15px;cursor:pointer;transition-timing-function:linear;transition-duration:0.15s;transition-property:opacity,filter;text-transform:none;color:inherit;border:0;background-color:transparent;display:none;", ";"], styles["f" /* mixins */].flexCenter, styles["e" /* media */].tablet`display: flex;`);
const StyledHamburgerBox = external_styled_components_default.a.div.withConfig({
  displayName: "nav__StyledHamburgerBox",
  componentId: "hikgkh-4"
})(["position:relative;display:inline-block;width:", "px;height:24px;"], styles["g" /* theme */].hamburgerWidth);
const StyledHamburgerInner = external_styled_components_default.a.div.withConfig({
  displayName: "nav__StyledHamburgerInner",
  componentId: "hikgkh-5"
})(["background-color:", ";position:absolute;width:", "px;height:2px;border-radius:", ";top:50%;left:0;right:0;transition-duration:0.22s;transition-property:transform;transition-delay:", ";transform:rotate(", ");transition-timing-function:cubic-bezier( ", " );&:before,&:after{content:\"\";display:block;background-color:", ";position:absolute;left:auto;right:0;width:", "px;height:2px;transition-timing-function:ease;transition-duration:0.15s;transition-property:transform;border-radius:4px;}&:before{width:", ";top:", ";opacity:", ";transition:", ";}&:after{width:", ";bottom:", ";transform:rotate(", ");transition:", ";}"], nav_colors.blue, styles["g" /* theme */].hamburgerWidth, styles["g" /* theme */].borderRadius, props => props.menuOpen ? `0.12s` : `0s`, props => props.menuOpen ? `225deg` : `0deg`, props => props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`, nav_colors.blue, styles["g" /* theme */].hamburgerWidth, props => props.menuOpen ? `100%` : `120%`, props => props.menuOpen ? `0` : `-10px`, props => props.menuOpen ? 0 : 1, props => props.menuOpen ? styles["g" /* theme */].hamBeforeActive : styles["g" /* theme */].hamBefore, props => props.menuOpen ? `100%` : `80%`, props => props.menuOpen ? `0` : `-10px`, props => props.menuOpen ? `-90deg` : `0`, props => props.menuOpen ? styles["g" /* theme */].hamAfterActive : styles["g" /* theme */].hamAfter);
const StyledLink = external_styled_components_default.a.div.withConfig({
  displayName: "nav__StyledLink",
  componentId: "hikgkh-6"
})(["display:flex;align-items:center;", ";"], styles["e" /* media */].tablet`display: none;`);
const StyledList = external_styled_components_default.a.ol.withConfig({
  displayName: "nav__StyledList",
  componentId: "hikgkh-7"
})(["", ";padding:0;margin:0;list-style:none;"], styles["f" /* mixins */].flexBetween);
const StyledListItem = external_styled_components_default.a.li.withConfig({
  displayName: "nav__StyledListItem",
  componentId: "hikgkh-8"
})(["margin:0 10px;position:relative;font-size:", ";counter-increment:item 1;&:before{content:\"0\" counter(item) \".\";text-align:right;color:", ";font-size:", ";}"], nav_fontSizes.smish, nav_colors.blue, nav_fontSizes.xs);
const StyledListLink = external_styled_components_default.a.a.withConfig({
  displayName: "nav__StyledListLink",
  componentId: "hikgkh-9"
})(["padding:12px 10px;"]);
const StyledResumeButton = external_styled_components_default.a.a.withConfig({
  displayName: "nav__StyledResumeButton",
  componentId: "hikgkh-10"
})(["", ";margin-left:10px;font-size:", ";"], styles["f" /* mixins */].smallButton, nav_fontSizes.smish);
const DELTA = 5;

class nav_Nav extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isMounted: !this.props.isHome,
      menuOpen: false,
      scrollDirection: "none",
      lastScrollTop: 0
    });

    _defineProperty(this, "toogleMenu", () => {
      //console.log("working");
      this.setState({
        menuOpen: !this.state.menuOpen
      });
    });

    _defineProperty(this, "handleScroll", () => {
      const {
        isMounted,
        menuOpen,
        scrollDirection,
        lastScrollTop
      } = this.state;
      const fromTop = window.scrollY;

      if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
        return;
      }

      if (fromTop < DELTA) {
        this.setState({
          scrollDirection: "none"
        });
      } else if (fromTop > lastScrollTop && fromTop > config["navHeight"]) {
        if (scrollDirection !== "down") {
          this.setState({
            scrollDirection: "down"
          });
        }
      } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
        if (scrollDirection !== "up") {
          this.setState({
            scrollDirection: "up"
          });
        }
      }

      this.setState({
        lastScrollTop: fromTop
      });
    });

    _defineProperty(this, "handleResize", () => {
      if (window.innerWidth > 768 && this.state.menuOpen) {
        this.toogleMenu();
      }
    });

    _defineProperty(this, "handleKeyDown", e => {
      if (!this.state.menuOpen) {
        return;
      }

      if (e.which === 27 || e.key === "Escape") {
        this.toogleMenu();
      }
    });
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      isMounted: true
    }, () => {
      window.addEventListener("scroll", () => Object(utils["b" /* throttle */])(this.handleScroll()));
      window.addEventListener("resize", () => Object(utils["b" /* throttle */])(this.handleResize()));
      window.addEventListener("keydown", e => this.handleKeyDown(e));
    }), 100);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => this.handleScroll());
    window.removeEventListener("resize", () => this.handleResize());
    window.removeEventListener("keydown", e => this.handleKeydown(e));
  }

  render() {
    const {
      isMounted,
      menuOpen,
      scrollDirection
    } = this.state;
    const {
      isHome
    } = this.props;
    const timeout = isHome ? loaderDelay : 0;
    const fadeClass = isHome ? "fade" : "";
    const fadeDownClass = isHome ? "fadedown" : ""; //console.log(isMounted);

    return nav_jsx(StyledContainer, {
      scrollDirection: scrollDirection
    }, nav_jsx(StyledNav, null, nav_jsx(external_react_transition_group_["TransitionGroup"], {
      component: null
    }, isMounted && nav_jsx(external_react_transition_group_["CSSTransition"], {
      classNames: fadeClass,
      timeout: timeout
    }, nav_jsx(StyledLogo, {
      tabindex: "-1"
    }, nav_jsx("a", {
      href: "/#hero",
      "aria-label": "home"
    }, nav_jsx(logo, null))))), nav_jsx(external_react_transition_group_["TransitionGroup"], {
      component: null
    }, isMounted && nav_jsx(external_react_transition_group_["CSSTransition"], {
      classNames: fadeClass,
      timeout: timeout
    }, nav_jsx(StyledHamburger, {
      onClick: this.toogleMenu
    }, nav_jsx(StyledHamburgerBox, null, nav_jsx(StyledHamburgerInner, {
      menuOpen: menuOpen
    }))))), nav_jsx(StyledLink, null, nav_jsx(StyledList, null, nav_jsx(external_react_transition_group_["TransitionGroup"], {
      component: null
    }, isMounted && config["navLinks"] && config["navLinks"].map(({
      url,
      name
    }, i) => nav_jsx(external_react_transition_group_["CSSTransition"], {
      key: i,
      classNames: fadeDownClass,
      timeout: timeout
    }, nav_jsx(StyledListItem, {
      key: i,
      style: {
        transitionDelay: `${isHome ? i * 100 : 0}ms`
      }
    }, nav_jsx(StyledListLink, {
      href: url
    }, name)))))), nav_jsx(external_react_transition_group_["TransitionGroup"], {
      component: null
    }, isMounted && nav_jsx(external_react_transition_group_["CSSTransition"], {
      classNames: fadeDownClass,
      timeout: timeout
    }, nav_jsx("div", {
      style: {
        transitionDelay: `${isHome ? config["navLinks"].length * 100 : 0}ms`
      }
    }, nav_jsx(StyledResumeButton, {
      href: "/Resume.pdf",
      target: "_blank",
      rel: "nofollow noopener noreferrer"
    }, "Resume")))))), nav_jsx(menu, {
      menuOpen: menuOpen,
      toogleMenu: this.toogleMenu
    }));
  }

}

/* harmony default export */ var nav = (nav_Nav);
// CONCATENATED MODULE: ./components/side.js
var side_jsx = external_react_default.a.createElement;




const {
  colors: side_colors,
  loaderDelay: side_loaderDelay
} = styles["g" /* theme */];
const side_StyledContainer = external_styled_components_default.a.div.withConfig({
  displayName: "side__StyledContainer",
  componentId: "fxz689-0"
})(["width:40px;position:fixed;bottom:0;left:", ";right:", ";z-index:10;color:", ";", ";", ";"], props => props.orientation === "left" ? "40px" : "auto", props => props.orientation === "left" ? "auto" : "40px", side_colors.lightSlate, styles["e" /* media */].desktop`right: 25px;`, styles["e" /* media */].tablet`display: none;`);

const Side = ({
  children,
  isHome,
  orientation
}) => {
  const {
    0: isMounted,
    1: setIsMounted
  } = Object(external_react_["useState"])(!isHome);
  Object(external_react_["useEffect"])(() => {
    if (!isHome) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), side_loaderDelay);
    return () => clearTimeout(timeout);
  }, []);
  return side_jsx(side_StyledContainer, {
    orientation: orientation
  }, side_jsx(external_react_transition_group_["TransitionGroup"], {
    component: null
  }, isMounted && side_jsx(external_react_transition_group_["CSSTransition"], {
    classNames: isHome ? "fade" : "",
    timeout: isHome ? side_loaderDelay : 0
  }, children)));
};

/* harmony default export */ var side = (Side);
// CONCATENATED MODULE: ./components/social.js
var social_jsx = external_react_default.a.createElement;






const {
  colors: social_colors
} = styles["g" /* theme */];
const social_StyledList = external_styled_components_default.a.ul.withConfig({
  displayName: "social__StyledList",
  componentId: "b41xu9-0"
})(["display:flex;flex-direction:column;align-items:center;padding:0;margin:0;list-style:none;&:after{content:\"\";display:block;width:1px;height:90px;margin:0 auto;background-color:", ";}li:last-of-type{margin-bottom:20px;}"], social_colors.lightSlate);
const social_StyledLink = external_styled_components_default.a.a.withConfig({
  displayName: "social__StyledLink",
  componentId: "b41xu9-1"
})(["padding:10px;color:", " &:hover,&:focus{transform:translateY(-3px);}svg{width:18px;height:18px;}"], social_colors.lightestSlate);

const Social = ({
  isHome
}) => social_jsx(side, {
  isHome: isHome,
  orientation: "left"
}, social_jsx(social_StyledList, null, config["socialMedia"] && config["socialMedia"].map(({
  url,
  name
}, i) => social_jsx("li", {
  key: i
}, social_jsx(social_StyledLink, {
  href: url,
  target: "_blank",
  rel: "nofollow noopener noreferrer",
  "aria-label": name
}, social_jsx(formattedIcon, {
  name: name
}))))));

/* harmony default export */ var social = (Social);
// CONCATENATED MODULE: ./components/menu.js
var menu_jsx = external_react_default.a.createElement;




const {
  colors: menu_colors,
  fontSizes: menu_fontSizes,
  fonts: menu_fonts
} = styles["g" /* theme */];
const menu_StyledContainer = external_styled_components_default.a.div.withConfig({
  displayName: "menu__StyledContainer",
  componentId: "zki7f3-0"
})(["position:fixed;top:0;bottom:0;right:0;width:100%;height:100vh;z-index:10;outline:0;transition:", ";transform:translateX(", "vw);visibility:", ";display:none;", ";"], styles["g" /* theme */].transition, props => props.menuOpen ? 0 : 100, props => props.menuOpen ? "visible" : "hidden", styles["e" /* media */].tablet`display: block;`);
const Sidebar = external_styled_components_default.a.aside.withConfig({
  displayName: "menu__Sidebar",
  componentId: "zki7f3-1"
})(["", ";flex-direction:column;background-color:", ";padding:50px;width:50vw;height:100%;position:relative;right:0;margin-left:auto;font-family:", ";box-shadow:-10px 0px 30px -15px ", ";", ";", ";", ";"], styles["f" /* mixins */].flexCenter, menu_colors.navy, menu_fonts.JetBrainsMono, menu_colors.shadowNavy, styles["e" /* media */].thone`padding: 25px;`, styles["e" /* media */].phablet`width: 75vw;`, styles["e" /* media */].tiny`padding: 10px;`);
const NavLinks = external_styled_components_default.a.nav.withConfig({
  displayName: "menu__NavLinks",
  componentId: "zki7f3-2"
})(["", ";width:100%;flex-direction:column;text-align:center;color:", ";"], styles["f" /* mixins */].flexBetween, menu_colors.lightestSlate);
const NavList = external_styled_components_default.a.ol.withConfig({
  displayName: "menu__NavList",
  componentId: "zki7f3-3"
})(["padding:0;margin:0;list-style:none;width:100%;"]);
const NavListItem = external_styled_components_default.a.li.withConfig({
  displayName: "menu__NavListItem",
  componentId: "zki7f3-4"
})(["margin:0 auto 20px;position:relative;font-size:", ";counter-increment:item 1;", ";", ";&:before{display:block;content:\"0\" counter(item) \".\";color:", ";font-size:", ";margin-bottom:5px;}"], menu_fontSizes.lg, styles["e" /* media */].thone`
    margin: 0 auto 10px;
    font-size: ${menu_fontSizes.md};
  `, styles["e" /* media */].tiny`font-size: ${menu_fontSizes.smish};`, menu_colors.blue, menu_fontSizes.sm);
const NavLink = external_styled_components_default.a.a.withConfig({
  displayName: "menu__NavLink",
  componentId: "zki7f3-5"
})(["", ";padding:3px 20px 20px;width:100%;"], styles["f" /* mixins */].link);
const ResumeLink = external_styled_components_default.a.a.withConfig({
  displayName: "menu__ResumeLink",
  componentId: "zki7f3-6"
})(["", ";padding:18px 50px;margin:10% auto 0;width:max-content;"], styles["f" /* mixins */].bigButton);

const Menu = ({
  menuOpen,
  toogleMenu
}) => {
  const handleMenuClick = e => {
    //console.log("working");
    toogleMenu();
  };

  return menu_jsx(menu_StyledContainer, {
    menuOpen: menuOpen,
    onClick: handleMenuClick,
    "aria-hidden": !menuOpen,
    tabIndex: menuOpen ? 1 : -1
  }, menu_jsx(Sidebar, null, menu_jsx(NavLinks, null, menu_jsx(NavList, null, config["navLinks"] && config["navLinks"].map(({
    url,
    name
  }, i) => menu_jsx(NavListItem, {
    key: i
  }, menu_jsx(NavLink, {
    href: url
  }, name)))), menu_jsx(ResumeLink, {
    href: "/Resume.pdf",
    target: "_blank",
    rel: "nofollow noopener noreferrer"
  }, "Resume"))));
};

/* harmony default export */ var menu = (Menu);
// CONCATENATED MODULE: ./components/email.js
var email_jsx = external_react_default.a.createElement;





const {
  colors: email_colors,
  fontSizes: email_fontSizes,
  fonts: email_fonts
} = styles["g" /* theme */];
const StyledLinkWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "email__StyledLinkWrapper",
  componentId: "sc-1frs09j-0"
})(["display:flex;flex-direction:column;align-items:center;position:relative;&:after{content:\"\";display:block;width:1px;height:90px;margin:0 auto;background-color:", ";}"], email_colors.lightSlate);
const StyledEmailLink = external_styled_components_default.a.a.withConfig({
  displayName: "email__StyledEmailLink",
  componentId: "sc-1frs09j-1"
})(["font-size:", ";letter-spacing:0.1em;color:", ";writing-mode:vertical-rl;margin:20px auto;padding:10px;&:hover,&:focus{transform:translateY(-3px);}"], email_fontSizes.xs, email_colors.lightestSlate);

const Email = ({
  isHome
}) => email_jsx(side, {
  isHome: isHome,
  orientation: "right"
}, email_jsx(StyledLinkWrapper, null, email_jsx(StyledEmailLink, {
  href: `mailto:${config["email"]}`
}, config["email"])));

/* harmony default export */ var email = (Email);
// CONCATENATED MODULE: ./components/section/hero.js
var hero_jsx = external_react_default.a.createElement;





const {
  colors: hero_colors,
  fontSizes: hero_fontSizes,
  fonts: hero_fonts,
  navDelay,
  loaderDelay: hero_loaderDelay
} = styles["g" /* theme */];
const hero_StyledContainer = external_styled_components_default()(styles["d" /* Section */]).withConfig({
  displayName: "hero__StyledContainer",
  componentId: "pjsbvw-0"
})(["", ";flex-direction:column;align-items:flex-start;min-height:100vh;", ";div{width:100%;}"], styles["f" /* mixins */].flexCenter, styles["e" /* media */].tablet`padding-top: 150px;`);
const StyledOverline = external_styled_components_default.a.h1.withConfig({
  displayName: "hero__StyledOverline",
  componentId: "pjsbvw-1"
})(["color:", ";margin:0 0 20px 3px;font-size:", ";font-family:", ";font-weight:normal;", ";", ";"], hero_colors.blue, hero_fontSizes.lg, hero_fonts.SFMono, styles["e" /* media */].desktop`font-size: ${hero_fontSizes.sm};`, styles["e" /* media */].tablet`font-size: ${hero_fontSizes.smish};`);
const StyledTitle = external_styled_components_default.a.h2.withConfig({
  displayName: "hero__StyledTitle",
  componentId: "pjsbvw-2"
})(["font-size:80px;line-height:1.1;margin:0;", ";", ";", ";", ";"], styles["e" /* media */].desktop`font-size: 70px;`, styles["e" /* media */].tablet`font-size: 60px;`, styles["e" /* media */].phablet`font-size: 50px;`, styles["e" /* media */].phone`font-size: 40px;`);
const StyledSubtitle = external_styled_components_default.a.h3.withConfig({
  displayName: "hero__StyledSubtitle",
  componentId: "pjsbvw-3"
})(["font-size:80px;line-height:1.1;color:", ";", ";", ";", ";", ";"], hero_colors.slate, styles["e" /* media */].desktop`font-size: 70px;`, styles["e" /* media */].tablet`font-size: 60px;`, styles["e" /* media */].phablet`font-size: 50px;`, styles["e" /* media */].phone`font-size: 40px;`);
const StyledDescription = external_styled_components_default.a.div.withConfig({
  displayName: "hero__StyledDescription",
  componentId: "pjsbvw-4"
})(["margin-top:25px;width:50%;max-width:500px;a{", ";}"], styles["f" /* mixins */].inlineLink);
const hero_StyledEmailLink = external_styled_components_default.a.a.withConfig({
  displayName: "hero__StyledEmailLink",
  componentId: "pjsbvw-5"
})(["", ";margin-top:50px;"], styles["f" /* mixins */].bigButton);

const Hero = data => {
  const {
    0: isMounted,
    1: setIsMounted
  } = Object(external_react_["useState"])(false);
  const frontmatter = data.frontmatter; //const data = JSON.parse(frontmatter);
  //console.log(frontmatter.frontmatter.id);
  //console.log(frontmatter);

  Object(external_react_["useEffect"])(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = () => hero_jsx(StyledOverline, {
    style: {
      transitionDelay: "100ms"
    }
  }, frontmatter.title);

  const two = () => hero_jsx(StyledTitle, {
    style: {
      transitionDelay: "200ms"
    }
  }, frontmatter.name);

  const three = () => hero_jsx(StyledSubtitle, {
    style: {
      transitionDelay: "300ms"
    }
  }, frontmatter.subtitle);

  const four = () => hero_jsx(StyledDescription, {
    style: {
      transitionDelay: "400ms"
    },
    dangerouslySetInnerHTML: {
      __html: frontmatter.contentHtml
    }
  });

  const five = () => hero_jsx("div", {
    style: {
      transitionDelay: "500ms"
    }
  }, hero_jsx(hero_StyledEmailLink, {
    href: `mailto:${config["email"]}`
  }, frontmatter.buttonText));

  const items = [one, two, three, four, five];
  return hero_jsx(hero_StyledContainer, {
    id: "hero"
  }, hero_jsx(external_react_transition_group_["TransitionGroup"], {
    component: null
  }, isMounted && items.map((item, i) => hero_jsx(external_react_transition_group_["CSSTransition"], {
    key: i,
    classNames: "fadeup",
    timeout: hero_loaderDelay
  }, item))));
};

/* harmony default export */ var hero = (Hero);
// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// CONCATENATED MODULE: ./components/section/about.js
var about_jsx = external_react_default.a.createElement;


 // import sr from "../../utils/sr";



const {
  colors: about_colors,
  fontSizes: about_fontSizes,
  fonts: about_fonts
} = styles["g" /* theme */];
const about_StyledContainer = external_styled_components_default()(styles["d" /* Section */]).withConfig({
  displayName: "about__StyledContainer",
  componentId: "sc-1jcpia4-0"
})(["position:relative;"]);
const StyledFlexContainer = external_styled_components_default.a.div.withConfig({
  displayName: "about__StyledFlexContainer",
  componentId: "sc-1jcpia4-1"
})(["", ";align-items:flex-start;", ";"], styles["f" /* mixins */].flexBetween, styles["e" /* media */].tablet`display: block;`);
const about_StyledContent = external_styled_components_default.a.div.withConfig({
  displayName: "about__StyledContent",
  componentId: "sc-1jcpia4-2"
})(["width:60%;max-width:720px;", ";a{", ";}"], styles["e" /* media */].tablet`width: 100%;`, styles["f" /* mixins */].inlineLink);
const SkillsWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "about__SkillsWrapper",
  componentId: "sc-1jcpia4-3"
})(["display:flex;flex-direction:row;"]);
const SkillsContainer = external_styled_components_default.a.ul.withConfig({
  displayName: "about__SkillsContainer",
  componentId: "sc-1jcpia4-4"
})(["display:grid;grid-template-columns:repeat(1,minmax(140px,200px));overflow:hidden;padding:0;height:max-content;margin:20px 0 0 0;list-style:none;"]);
const SkillHeading = external_styled_components_default.a.li.withConfig({
  displayName: "about__SkillHeading",
  componentId: "sc-1jcpia4-5"
})(["position:relative;margin-bottom:10px;font-family:", ";font-size:", ";color:", ";"], about_fonts.JetBrainsMono, about_fontSizes.md, about_colors.blue);
const Skill = external_styled_components_default.a.li.withConfig({
  displayName: "about__Skill",
  componentId: "sc-1jcpia4-6"
})(["position:relative;margin-bottom:10px;padding-left:20px;font-family:", ";font-size:", ";color:", ";&:before{content:\"\u25B9\";position:absolute;left:0;color:", ";font-size:", ";line-height:12px;}"], about_fonts.JetBrainsMono, about_fontSizes.smish, about_colors.slate, about_colors.blue, about_fontSizes.sm);
const StyledPic = external_styled_components_default.a.div.withConfig({
  displayName: "about__StyledPic",
  componentId: "sc-1jcpia4-7"
})(["position:relative;width:40%;max-width:300px;margin-left:60px;", ";", ";a{&:focus{outline:0;}}"], styles["e" /* media */].tablet`margin: 60px auto 0;`, styles["e" /* media */].phablet`width: 70%;`);
const StyledAvatar = external_styled_components_default.a.img.withConfig({
  displayName: "about__StyledAvatar",
  componentId: "sc-1jcpia4-8"
})(["position:relative;mix-blend-mode:multiply;filter:grayscale(100%) contrast(1);border-radius:", ";transition:", ";"], styles["g" /* theme */].borderRadius, styles["g" /* theme */].transition);
const StyledAvatarLink = external_styled_components_default.a.a.withConfig({
  displayName: "about__StyledAvatarLink",
  componentId: "sc-1jcpia4-9"
})(["", ";width:100%;position:relative;border-radius:", ";background-color:", ";margin-left:-20px;&:hover,&:focus{&:after{top:15px;left:15px;}", "{filter:none;mix-blend-mode:normal;}}&:before,&:after{content:\"\";display:block;position:absolute;width:100%;height:100%;border-radius:", ";transition:", ";}&:before{top:0;left:0;right:0;bottom:0;background-color:", ";mix-blend-mode:screen;}&:after{border:2px solid ", ";top:20px;left:20px;z-index:-1;}"], styles["f" /* mixins */].boxShadow, styles["g" /* theme */].borderRadius, about_colors.blue, StyledAvatar, styles["g" /* theme */].borderRadius, styles["g" /* theme */].transition, about_colors.darkNavy, about_colors.blue);

const About = data => {
  const {
    title,
    avatar,
    languages,
    frameworks,
    tools,
    contentHtml
  } = data.frontmatter; // const revealContainer = useRef(null);
  //   useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);
  //   console.log(avatar);

  return about_jsx(about_StyledContainer, {
    id: "about"
  }, about_jsx(Fade_default.a, {
    bottom: true
  }, about_jsx(styles["b" /* Heading */], null, title)), about_jsx(StyledFlexContainer, null, about_jsx(about_StyledContent, null, about_jsx(Fade_default.a, {
    bottom: true
  }, about_jsx("div", {
    dangerouslySetInnerHTML: {
      __html: contentHtml
    }
  })), about_jsx(Fade_default.a, {
    bottom: true
  }, about_jsx(SkillsWrapper, null, about_jsx(SkillsContainer, null, about_jsx(SkillHeading, null, "LANGUAGES"), languages && languages.map((skill, i) => about_jsx(Skill, {
    key: i
  }, skill))), about_jsx(SkillsContainer, null, about_jsx(SkillHeading, null, "FRAMEWORKS"), frameworks && frameworks.map((skill, i) => about_jsx(Skill, {
    key: i
  }, skill))), about_jsx(SkillsContainer, null, about_jsx(SkillHeading, null, "TOOLS"), tools && tools.map((skill, i) => about_jsx(Skill, {
    key: i
  }, skill)))))), about_jsx(StyledPic, null, about_jsx(Fade_default.a, {
    bottom: true
  }, about_jsx(StyledAvatarLink, {
    href: config["github"]
  }, about_jsx(StyledAvatar, {
    src: avatar,
    alt: "Avatar"
  }))))));
};

/* harmony default export */ var about = (About);
// CONCATENATED MODULE: ./components/section/education.js
var education_jsx = external_react_default.a.createElement;




const {
  colors: education_colors,
  fontSizes: education_fontSizes,
  fonts: education_fonts
} = styles["g" /* theme */];
const education_StyledContainer = external_styled_components_default()(styles["d" /* Section */]).withConfig({
  displayName: "education__StyledContainer",
  componentId: "sc-1xnyxi-0"
})(["position:relative;max-width:800px;"]);
const StyledTabs = external_styled_components_default.a.div.withConfig({
  displayName: "education__StyledTabs",
  componentId: "sc-1xnyxi-1"
})(["display:flex;align-items:flex-start;position:relative;", ";"], styles["e" /* media */].thone`
    display: block;
  `);
const StyledTabList = external_styled_components_default.a.ul.withConfig({
  displayName: "education__StyledTabList",
  componentId: "sc-1xnyxi-2"
})(["display:block;position:relative;width:max-content;z-index:3;padding:0;margin:0;list-style:none;", ";", ";li{&:first-of-type{", ";", ";}&:last-of-type{", ";", ";}}"], styles["e" /* media */].thone`
    display: flex;
    overflow-x: scroll;
    margin-bottom: 30px;
    width: calc(100% + 100px);
    margin-left: -50px;
  `, styles["e" /* media */].phablet`
    width: calc(100% + 50px);
    margin-left: -25px;
  `, styles["e" /* media */].thone`
        margin-left: 50px;
      `, styles["e" /* media */].phablet`
        margin-left: 25px;
      `, styles["e" /* media */].thone`
        padding-right: 50px;
      `, styles["e" /* media */].phablet`
        padding-right: 25px;
      `);
const StyledTabButton = external_styled_components_default.a.button.withConfig({
  displayName: "education__StyledTabButton",
  componentId: "sc-1xnyxi-3"
})(["", ";display:flex;align-items:center;width:100%;background-color:transparent;height:", "px;padding:0 20px 2px;transition:", ";border-left:2px solid ", ";text-align:left;white-space:nowrap;font-family:", ";font-size:", ";color:", ";", ";", ";&:hover,&:focus{background-color:", ";}"], styles["f" /* mixins */].link, styles["g" /* theme */].tabHeight, styles["g" /* theme */].transition, education_colors.lightNavy, education_fonts.JetBrainsMono, education_fontSizes.smish, props => props.isActive ? education_colors.blue : education_colors.slate, styles["e" /* media */].tablet`padding: 0 15px 2px;`, styles["e" /* media */].thone`
    ${styles["f" /* mixins */].flexCenter};
    padding: 0 15px;
    text-align: center;
    border-left: 0;
    border-bottom: 2px solid ${education_colors.lightestNavy};
    min-width: 120px;
  `, education_colors.lightNavy);
const StyledHighlight = external_styled_components_default.a.span.withConfig({
  displayName: "education__StyledHighlight",
  componentId: "sc-1xnyxi-4"
})(["display:block;background:", ";width:2px;height:", "px;border-radius:", ";position:absolute;top:0;left:0;transition:transform 0.25s cubic-bezier(0.645,0.045,0.355,1);transition-delay:0.1s;z-index:10;transform:translateY( ", "px );", ";", ";"], education_colors.blue, styles["g" /* theme */].tabHeight, styles["g" /* theme */].borderRadius, props => props.activeTabId > 0 ? props.activeTabId * styles["g" /* theme */].tabHeight : 0, styles["e" /* media */].thone`
    width: 100%;
    max-width: ${styles["g" /* theme */].tabWidth}px;
    height: 2px;
    top: auto;
    bottom: 0;
    transform: translateX(
      ${props => props.activeTabId > 0 ? props.activeTabId * styles["g" /* theme */].tabWidth : 0}px
    );
    margin-left: 50px;
  `, styles["e" /* media */].phablet`
    margin-left: 25px;
  `);
const StyledTabContent = external_styled_components_default.a.div.withConfig({
  displayName: "education__StyledTabContent",
  componentId: "sc-1xnyxi-5"
})(["position:relative;width:100%;height:auto;padding-top:12px;padding-left:30px;", ";", ";ul{", ";}a{", ";}"], styles["e" /* media */].tablet`padding-left: 20px;`, styles["e" /* media */].thone`padding-left: 0;`, styles["f" /* mixins */].fancyList, styles["f" /* mixins */].inlineLink);
const EducationTitle = external_styled_components_default.a.h4.withConfig({
  displayName: "education__EducationTitle",
  componentId: "sc-1xnyxi-6"
})(["color:", ";font-size:", ";font-weight:500;margin-bottom:5px;"], education_colors.lightestSlate, education_fontSizes.xxl);
const EducationPlace = external_styled_components_default.a.span.withConfig({
  displayName: "education__EducationPlace",
  componentId: "sc-1xnyxi-7"
})(["color:", ";"], education_colors.blue);
const EducationDetails = external_styled_components_default.a.h5.withConfig({
  displayName: "education__EducationDetails",
  componentId: "sc-1xnyxi-8"
})(["font-family:", ";font-size:", ";font-weight:normal;letter-spacing:0.05em;color:", ";margin-bottom:30px;svg{width:15px;}"], education_fonts.JetBrainsMono, education_fontSizes.smish, education_colors.lightSlate);

const Education = data => {
  const {
    0: activeTabId,
    1: setActiveTabId
  } = Object(external_react_["useState"])(0);
  const {
    0: tabFocus,
    1: setTabFocus
  } = Object(external_react_["useState"])(null);
  const tabs = Object(external_react_["useRef"])([]);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
    } else {
      if (tabFocus >= tabs.current.length) {
        setTabFocus(0);
      }

      if (tabFocus < 0) {
        setTabFocus(tabs.current.length - 1);
      }
    }
  };

  Object(external_react_["useEffect"])(() => focusTab(), [tabFocus]);

  const onKeyPressed = e => {
    if (e.keycode === 38 || e.keycode === 40) {
      e.preventDefault();

      if (e.keyCode === 40) {
        // Move down
        setTabFocus(tabFocus + 1);
      } else if (e.keyCode === 38) {
        // Move up
        setTabFocus(tabFocus - 1);
      }
    }
  };

  const frontmatter = data.frontmatter; //console.log(data);

  return education_jsx(education_StyledContainer, {
    id: "college"
  }, education_jsx(Fade_default.a, {
    bottom: true
  }, education_jsx(styles["b" /* Heading */], null, "Where I've Learned")), education_jsx(Fade_default.a, {
    bottom: true
  }, education_jsx(StyledTabs, null, education_jsx(StyledTabList, {
    role: "tablist",
    "aria-label": "Education tabs",
    onKeyDown: e => onKeyPressed(e)
  }, frontmatter && Object.keys(frontmatter).map((key, i) => {
    const {
      tag
    } = frontmatter[key];
    return education_jsx("li", {
      key: i
    }, education_jsx(StyledTabButton, {
      isActive: activeTabId === i,
      onClick: () => setActiveTabId(i),
      ref: el => tabs.current[i] = el,
      id: `tab-${i}`,
      role: "tab",
      "aria-selected": activeTabId === i ? "0" : "-1"
    }, education_jsx("span", null, tag)));
  }), education_jsx(StyledHighlight, {
    activeTabId: activeTabId
  })), frontmatter && Object.keys(frontmatter).map((key, i) => {
    const {
      title,
      school,
      range,
      contentHtml
    } = frontmatter[key];
    return education_jsx(StyledTabContent, {
      key: i,
      isActive: activeTabId === i,
      id: `panel-${i}`,
      role: "tabpanel",
      "aria-labelledby": `tab-${i}`,
      tabIndex: activeTabId === i ? "0" : "-1",
      hidden: activeTabId !== i
    }, education_jsx(EducationTitle, null, education_jsx("span", null, title), education_jsx(EducationPlace, null, education_jsx("span", null, "\xA0@\xA0"), education_jsx("a", {
      target: "_blank",
      rel: "nofollow noopener noreferrer"
    }, school))), education_jsx(EducationDetails, null, education_jsx("span", null, range)), education_jsx("div", {
      dangerouslySetInnerHTML: {
        __html: contentHtml
      }
    }));
  }))));
};

/* harmony default export */ var education = (Education);
// CONCATENATED MODULE: ./components/section/contact.js
var contact_jsx = external_react_default.a.createElement;





const {
  colors: contact_colors,
  fontSizes: contact_fontSizes,
  fonts: contact_fonts
} = styles["g" /* theme */];
const contact_StyledContainer = external_styled_components_default()(styles["d" /* Section */]).withConfig({
  displayName: "contact__StyledContainer",
  componentId: "wu8qoy-0"
})(["text-align:center;max-width:800px;margin:0 auto 100px;a{", ";}"], styles["f" /* mixins */].inlineLink);
const StyledHeading = external_styled_components_default()(styles["b" /* Heading */]).withConfig({
  displayName: "contact__StyledHeading",
  componentId: "wu8qoy-1"
})(["display:block;color:", ";font-size:", ";font-family:", ";font-weight:normal;margin-bottom:20px;justify-content:center;", ";&:before{bottom:0;font-size:", ";", ";}&:after{display:none;}"], contact_colors.blue, contact_fontSizes.md, contact_fonts.JetBrainsMono, styles["e" /* media */].desktop`font-size: ${contact_fontSizes.sm};`, contact_fontSizes.sm, styles["e" /* media */].desktop`font-size: ${contact_fontSizes.smish};`);
const contact_StyledTitle = external_styled_components_default.a.h4.withConfig({
  displayName: "contact__StyledTitle",
  componentId: "wu8qoy-2"
})(["margin:0 0 20px;font-size:60px;", ";", ";"], styles["e" /* media */].desktop`font-size: 50px;`, styles["e" /* media */].tablet`font-size: 40px;`);
const contact_StyledEmailLink = external_styled_components_default.a.a.withConfig({
  displayName: "contact__StyledEmailLink",
  componentId: "wu8qoy-3"
})(["", ";margin-top:50px;"], styles["f" /* mixins */].bigButton);

const Contact = data => {
  const frontmatter = data.frontmatter; //console.log(data);

  return contact_jsx(contact_StyledContainer, {
    id: "contact"
  }, contact_jsx(Fade_default.a, {
    bottom: true
  }, contact_jsx(StyledHeading, null, "Loved my work?"), contact_jsx(contact_StyledTitle, null, frontmatter.title)), contact_jsx(Fade_default.a, {
    bottom: true
  }, contact_jsx("div", {
    dangerouslySetInnerHTML: {
      __html: frontmatter.contentHtml
    }
  }), contact_jsx(contact_StyledEmailLink, {
    href: `mailto:${config["email"]}`
  }, frontmatter.buttonText)));
};

/* harmony default export */ var contact = (Contact);
// CONCATENATED MODULE: ./components/footer.js
var footer_jsx = external_react_default.a.createElement;





const {
  colors: footer_colors,
  fontSizes: footer_fontSizes,
  fonts: footer_fonts
} = styles["g" /* theme */];
const footer_StyledContainer = external_styled_components_default.a.footer.withConfig({
  displayName: "footer__StyledContainer",
  componentId: "sc-1yoaa1r-0"
})(["", ";flex-direction:column;padding:15px;text-align:center;height:auto;min-height:70px;"], styles["f" /* mixins */].flexCenter);
const StyledSocial = external_styled_components_default.a.div.withConfig({
  displayName: "footer__StyledSocial",
  componentId: "sc-1yoaa1r-1"
})(["color:", ";width:100%;max-width:270px;margin:0 auto 10px;display:none;", ";"], footer_colors.lightSlate, styles["e" /* media */].tablet`display: block;`);
const StyledSocialList = external_styled_components_default.a.ul.withConfig({
  displayName: "footer__StyledSocialList",
  componentId: "sc-1yoaa1r-2"
})(["", ";padding:0;margin:0;list-style:none;"], styles["f" /* mixins */].flexBetween);
const StyledSocialLink = external_styled_components_default.a.a.withConfig({
  displayName: "footer__StyledSocialLink",
  componentId: "sc-1yoaa1r-3"
})(["padding:10px;svg{width:20px;height:20px;}"]);
const StyledMetadata = external_styled_components_default.a.div.withConfig({
  displayName: "footer__StyledMetadata",
  componentId: "sc-1yoaa1r-4"
})(["font-family:", ";font-size:", ";line-height:1;"], footer_fonts.JetBrainsMono, footer_fontSizes.sm);

const Footer = () => {
  return footer_jsx(footer_StyledContainer, null, footer_jsx(StyledSocial, null, footer_jsx(StyledSocialList, null, config["socialMedia"] && config["socialMedia"].map(({
    name,
    url
  }, i) => footer_jsx("li", {
    key: i
  }, footer_jsx(StyledSocialLink, {
    href: url,
    target: "_blank",
    rel: "nofollow noopener noreferrer",
    "aria-label": name
  }, footer_jsx(formattedIcon, {
    name: name
  })))))), footer_jsx(StyledMetadata, {
    tabIndex: "-1"
  }, footer_jsx("div", null, "Designed & Built With ♥ by Anurag More")));
};

/* harmony default export */ var footer = (Footer);
// CONCATENATED MODULE: ./components/section/featured.js
var featured_jsx = external_react_default.a.createElement;





const {
  colors: featured_colors,
  fontSizes: featured_fontSizes,
  fonts: featured_fonts
} = styles["g" /* theme */];
const featured_StyledContainer = external_styled_components_default()(styles["d" /* Section */]).withConfig({
  displayName: "featured__StyledContainer",
  componentId: "sc-128po9-0"
})(["", ";flex-direction:column;align-items:flex-start;"], styles["f" /* mixins */].flexCenter);
const featured_StyledContent = external_styled_components_default.a.div.withConfig({
  displayName: "featured__StyledContent",
  componentId: "sc-128po9-1"
})(["position:relative;grid-column:1 / 7;grid-row:1 / -1;", ";", ";"], styles["e" /* media */].thone`
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
  `, styles["e" /* media */].phablet`padding: 30px 25px 20px;`);
const StyledLabel = external_styled_components_default.a.h4.withConfig({
  displayName: "featured__StyledLabel",
  componentId: "sc-128po9-2"
})(["font-size:", ";font-weight:normal;color:", ";font-family:", ";margin-top:10px;padding-top:0;"], featured_fontSizes.smish, featured_colors.blue, featured_fonts.JetBrainsMono);
const StyledProjectName = external_styled_components_default.a.h5.withConfig({
  displayName: "featured__StyledProjectName",
  componentId: "sc-128po9-3"
})(["font-size:28px;margin:0 0 20px;color:", ";", ";", ";a{", ";}"], featured_colors.lightestSlate, styles["e" /* media */].tablet`font-size: 24px;`, styles["e" /* media */].thone`color: ${featured_colors.white};`, styles["e" /* media */].tablet`display: block;`);
const featured_StyledDescription = external_styled_components_default.a.div.withConfig({
  displayName: "featured__StyledDescription",
  componentId: "sc-128po9-4"
})(["", ";position:relative;z-index:2;padding:25px;background-color:", ";color:", ";font-size:", ";border-radius:", ";", ";p{margin:0;}a{", ";}"], styles["f" /* mixins */].boxShadow, featured_colors.lightNavy, featured_colors.lightSlate, featured_fontSizes.lg, styles["g" /* theme */].borderRadius, styles["e" /* media */].thone`
    background-color: transparent;
    padding: 20px 0;
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
  `, styles["f" /* mixins */].inlineLink);
const StyledTechList = external_styled_components_default.a.ul.withConfig({
  displayName: "featured__StyledTechList",
  componentId: "sc-128po9-5"
})(["position:relative;z-index:2;display:flex;flex-wrap:wrap;padding:0;margin:25px 0 10px;list-style:none;li{font-family:", ";font-size:", ";color:", ";margin-right:", ";margin-bottom:7px;white-space:nowrap;&:last-of-type{margin-right:0;}", ";}"], featured_fonts.JetBrainsMono, featured_fontSizes.smish, featured_colors.slate, styles["g" /* theme */].margin, styles["e" /* media */].thone`
      color: ${featured_colors.lightestSlate};
      margin-right: 10px;
    `);
const featured_StyledLinkWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "featured__StyledLinkWrapper",
  componentId: "sc-128po9-6"
})(["display:flex;align-items:center;position:relative;margin-top:10px;margin-left:-10px;color:", ";a{padding:10px;svg{width:22px;height:22px;}}"], featured_colors.lightestSlate);
const StyledFeaturedImg = external_styled_components_default.a.img.withConfig({
  displayName: "featured__StyledFeaturedImg",
  componentId: "sc-128po9-7"
})(["width:100%;max-width:100%;vertical-align:middle;border-radius:", ";position:relative;mix-blend-mode:multiply;filter:grayscale(100%) contrast(1) brightness(90%);", ";"], styles["g" /* theme */].borderRadius, styles["e" /* media */].tablet`
    object-fit: cover;
    width: auto;
    height: 100%;
    filter: grayscale(100%) contrast(1) brightness(80%);
  `);
const StyledImgContainer = external_styled_components_default.a.a.withConfig({
  displayName: "featured__StyledImgContainer",
  componentId: "sc-128po9-8"
})(["", ";grid-column:6 / -1;grid-row:1 / -1;position:relative;z-index:1;background-color:", ";border-radius:", "px;transition:", ";", ";", ";&:hover,&:focus{background:transparent;&:before,", "{background:transparent;filter:none;}}&:before{content:\"\";position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:3;transition:", ";background-color:", ";mix-blend-mode:screen;}"], styles["f" /* mixins */].boxShadow, featured_colors.blue, styles["g" /* theme */].radius + 1, styles["g" /* theme */].transition, styles["e" /* media */].tablet`height: 100%;`, styles["e" /* media */].thone`
    grid-column: 1 / -1;
    opacity: 0.25;
  `, StyledFeaturedImg, styles["g" /* theme */].transition, featured_colors.navy);
const StyledProject = external_styled_components_default.a.div.withConfig({
  displayName: "featured__StyledProject",
  componentId: "sc-128po9-9"
})(["display:grid;grid-gap:10px;grid-template-columns:repeat(12,1fr);align-items:center;margin-bottom:100px;", ";&:last-of-type{margin-bottom:0;}&:nth-of-type(odd){", "{grid-column:7 / -1;text-align:right;", ";", ";}", "{justify-content:flex-end;li{margin-left:", ";margin-right:0;}}", "{justify-content:flex-end;margin-left:0;margin-right:-10px;}", "{grid-column:1 / 8;", ";", ";}}"], styles["e" /* media */].thone`
    margin-bottom: 70px;
  `, featured_StyledContent, styles["e" /* media */].thone`
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      `, styles["e" /* media */].phablet`padding: 30px 25px 20px;`, StyledTechList, styles["g" /* theme */].margin, featured_StyledLinkWrapper, StyledImgContainer, styles["e" /* media */].tablet`height: 100%;`, styles["e" /* media */].thone`
        grid-column: 1 / -1;
        opacity: 0.25;
      `);

const Featured = data => {
  const frontmatter = data.frontmatter; //console.log(frontmatter);

  return featured_jsx(featured_StyledContainer, {
    id: "projects"
  }, featured_jsx(Fade_default.a, {
    bottom: true
  }, featured_jsx(styles["b" /* Heading */], null, "Some Things I've Built")), featured_jsx(Fade_default.a, null, featured_jsx("div", null, frontmatter && Object.keys(frontmatter).map((key, i) => {
    const {
      title,
      cover,
      external,
      tech,
      contentHtml
    } = frontmatter[key];
    return featured_jsx(StyledProject, {
      key: i
    }, featured_jsx(featured_StyledContent, null, featured_jsx(StyledLabel, null, "Featured Project"), featured_jsx(StyledProjectName, null, external ? featured_jsx("a", {
      href: external,
      target: "_blank",
      rel: "nofollow noopener noreferrer",
      "aria-label": "External Link"
    }, title) : title), featured_jsx(featured_StyledDescription, {
      dangerouslySetInnerHTML: {
        __html: contentHtml
      }
    }), tech && featured_jsx(StyledTechList, null, tech.map((tech, i) => featured_jsx("li", {
      key: i
    }, tech))), featured_jsx(featured_StyledLinkWrapper, null, external && featured_jsx("a", {
      href: external,
      target: "_blank",
      rel: "nofollow noopener noreferrer",
      "aria-label": "External Link"
    }, featured_jsx(formattedIcon, {
      name: "External"
    })))), featured_jsx(StyledImgContainer, {
      href: external ? external : "#",
      target: "_blank",
      rel: "nofollow noopener noreferrer"
    }, featured_jsx(StyledFeaturedImg, {
      src: cover,
      alt: title
    })));
  }))));
};

/* harmony default export */ var featured = (Featured);
// CONCATENATED MODULE: ./components/index.js













/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

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