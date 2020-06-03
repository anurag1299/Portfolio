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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/email.js":
/*!*****************************!*\
  !*** ./components/email.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./components/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/index */ "./styles/index.js");
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/email.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  colors,
  fontSizes,
  fonts
} = _styles_index__WEBPACK_IMPORTED_MODULE_5__["theme"];
const StyledLinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "email__StyledLinkWrapper",
  componentId: "sc-1frs09j-0"
})(["display:flex;flex-direction:column;align-items:center;position:relative;&:after{content:\"\";display:block;width:1px;height:90px;margin:0 auto;background-color:", ";}"], colors.lightSlate);
const StyledEmailLink = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.a.withConfig({
  displayName: "email__StyledEmailLink",
  componentId: "sc-1frs09j-1"
})(["font-size:", ";letter-spacing:0.1em;color:", ";writing-mode:vertical-rl;margin:20px auto;padding:10px;&:hover,&:focus{transform:translateY(-3px);}"], fontSizes.xs, colors.lightestSlate);

const Email = ({
  isHome
}) => __jsx(_index__WEBPACK_IMPORTED_MODULE_3__["Side"], {
  isHome: isHome,
  orientation: "right",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 3
  }
}, __jsx(StyledLinkWrapper, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }
}, __jsx(StyledEmailLink, {
  href: `mailto:${_config__WEBPACK_IMPORTED_MODULE_2__["email"]}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 7
  }
}, _config__WEBPACK_IMPORTED_MODULE_2__["email"])));

Email.propTypes = {
  isHome: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Email);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/icons */ "./components/icons/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/index */ "./styles/index.js");
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  colors,
  fontSizes,
  fonts
} = _styles_index__WEBPACK_IMPORTED_MODULE_5__["theme"];
const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.footer.withConfig({
  displayName: "footer__StyledContainer",
  componentId: "sc-1yoaa1r-0"
})(["", ";flex-direction:column;padding:15px;text-align:center;height:auto;min-height:70px;"], _styles_index__WEBPACK_IMPORTED_MODULE_5__["mixins"].flexCenter);
const StyledSocial = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "footer__StyledSocial",
  componentId: "sc-1yoaa1r-1"
})(["color:", ";width:100%;max-width:270px;margin:0 auto 10px;display:none;", ";"], colors.lightSlate, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].tablet`display: block;`);
const StyledSocialList = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.ul.withConfig({
  displayName: "footer__StyledSocialList",
  componentId: "sc-1yoaa1r-2"
})(["", ";padding:0;margin:0;list-style:none;"], _styles_index__WEBPACK_IMPORTED_MODULE_5__["mixins"].flexBetween);
const StyledSocialLink = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.a.withConfig({
  displayName: "footer__StyledSocialLink",
  componentId: "sc-1yoaa1r-3"
})(["padding:10px;svg{width:20px;height:20px;}"]);
const StyledMetadata = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "footer__StyledMetadata",
  componentId: "sc-1yoaa1r-4"
})(["font-family:", ";font-size:", ";line-height:1;"], fonts.JetBrainsMono, fontSizes.sm);

const Footer = () => {
  return __jsx(StyledContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(StyledSocial, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(StyledSocialList, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, _config__WEBPACK_IMPORTED_MODULE_3__["socialMedia"] && _config__WEBPACK_IMPORTED_MODULE_3__["socialMedia"].map(({
    name,
    url
  }, i) => __jsx("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, __jsx(StyledSocialLink, {
    href: url,
    target: "_blank",
    rel: "nofollow noopener noreferrer",
    "aria-label": name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__["FormattedIcon"], {
    name: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  })))))), __jsx(StyledMetadata, {
    tabIndex: "-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "Designed & Built With ♥ by Anurag More")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/icons/appstore.js":
/*!**************************************!*\
  !*** ./components/icons/appstore.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/icons/appstore.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const IconAppStore = () => __jsx("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "0 0 512 512",
  xmlSpace: "preserve",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, "Apple App Store"), __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}, __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
}, __jsx("path", {
  d: "M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105 C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302 c41.355,0,75,33.645,75,75V407z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }
}))), __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }
}, __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }
}, __jsx("path", {
  d: "M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166 l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664 L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498 C306.487,136.719,307.375,129.981,305.646,123.531z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }
}))), __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }
}, __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 7
  }
}, __jsx("path", {
  d: "M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65 c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341 H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }
}))), __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }
}, __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 7
  }
}, __jsx("path", {
  d: "M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344 c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (IconAppStore);

/***/ }),

/***/ "./components/icons/codepen.js":
/*!*************************************!*\
  !*** ./components/icons/codepen.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/icons/codepen.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const IconCodepen = () => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: "0 0 31.665 31.665",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, "Codepen"), __jsx("path", {
  d: "M16.878,0.415c-0.854-0.565-1.968-0.552-2.809,0.034L1.485,9.214c-0.671,0.468-1.071,1.233-1.071,2.052v9.444 c0,0.84,0.421,1.623,1.122,2.086l12.79,8.455c0.836,0.553,1.922,0.553,2.758,0l13.044-8.618c0.7-0.463,1.122-1.246,1.122-2.086 v-9.279c0-0.839-0.421-1.622-1.121-2.085L16.878,0.415z M26.621,10.645l-4.821,3.237l-4.521-3.288L17.25,4.127L26.621,10.645z M13.979,4.133v6.329l-4.633,3.24l-4.621-3.099L13.979,4.133z M3.458,13.722l2.991,2.004l-2.991,2.093V13.722z M14.058,27.215 l-9.331-6.258l4.661-3.258l4.67,3.133V27.215z M12.286,15.674l3.021-2.113l3.519,2.313l-3.119,2.095L12.286,15.674z M17.354,27.215 V20.83l4.463-2.991l4.805,3.159L17.354,27.215z M27.954,17.927l-3.168-2.082l3.168-2.125V17.927z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (IconCodepen);

/***/ }),

/***/ "./components/icons/external.js":
/*!**************************************!*\
  !*** ./components/icons/external.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/icons/external.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const IconExternal = () => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: "0 0 194.818 194.818",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, "External"), __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx("path", {
  d: "M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}), __jsx("path", {
  d: "M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (IconExternal);

/***/ }),

/***/ "./components/icons/folder.js":
/*!************************************!*\
  !*** ./components/icons/folder.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/icons/folder.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const IconFolder = () => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: "0 0 60 60",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, "Folder"), __jsx("path", {
  d: "M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (IconFolder);

/***/ }),

/***/ "./components/icons/fork.js":
/*!**********************************!*\
  !*** ./components/icons/fork.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/icons/fork.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const IconFork = () => __jsx("svg", {
  "aria-label": "forks",
  viewBox: "0 0 10 16",
  version: "1.1",
  width: "10",
  height: "16",
  role: "img",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("path", {
  fillRule: "evenodd",
  d: "M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (IconFork);

/***/ }),

/***/ "./components/icons/formattedIcon.js":
/*!*******************************************!*\
  !*** ./components/icons/formattedIcon.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./components/icons/index.js");
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/icons/formattedIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const FormattedIcon = ({
  name
}) => {
  switch (name) {
    case "AppStore":
      return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["IconAppStore"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 14
        }
      });

    case "Codepen":
      return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["IconCodepen"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 14
        }
      });

    case "External":
      return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["IconExternal"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 14
        }
      });

    case "Folder":
      return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["IconFolder"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 14
        }
      });

    case "Fork":
      return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["IconFork"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 14
        }
      });

    case "GitHub":
      return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["IconGitHub"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 14
        }
      });

    case "Instagram":
      return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["IconInstagram"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 14
        }
      });

    case "Linkedin":
      return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["IconLinkedin"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 14
        }
      });

    case "Loader":
      return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["IconLoader"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 14
        }
      });

    case "Location":
      return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["IconLocation"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 14
        }
      });

    case "Logo":
      return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["IconLogo"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 14
        }
      });

    case "PlayStore":
      return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["IconPlayStore"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 14
        }
      });

    case "Star":
      return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["IconStar"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 14
        }
      });

    case "Twitter":
      return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["IconTwitter"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 14
        }
      });

    case "Zap":
      return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["IconZap"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 14
        }
      });

    default:
      return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["IconExternal"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 14
        }
      });
  }
};

FormattedIcon.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FormattedIcon);

/***/ }),

/***/ "./components/icons/github.js":
/*!************************************!*\
  !*** ./components/icons/github.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/icons/github.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const IconGitHub = () => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: "0 0 438.549 438.549",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, "GitHub"), __jsx("path", {
  d: "M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (IconGitHub);

/***/ }),

/***/ "./components/icons/index.js":
/*!***********************************!*\
  !*** ./components/icons/index.js ***!
  \***********************************/
/*! exports provided: IconAppStore, IconCodepen, IconExternal, IconFolder, IconFork, FormattedIcon, IconGitHub, IconInstagram, IconLinkedin, IconLoader, IconLocation, IconLogo, IconPlayStore, IconStar, IconTwitter, IconZap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appstore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appstore */ "./components/icons/appstore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconAppStore", function() { return _appstore__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _codepen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codepen */ "./components/icons/codepen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconCodepen", function() { return _codepen__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _external__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./external */ "./components/icons/external.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconExternal", function() { return _external__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folder */ "./components/icons/folder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconFolder", function() { return _folder__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _fork__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fork */ "./components/icons/fork.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconFork", function() { return _fork__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _formattedIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formattedIcon */ "./components/icons/formattedIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormattedIcon", function() { return _formattedIcon__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _github__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./github */ "./components/icons/github.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconGitHub", function() { return _github__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _instagram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instagram */ "./components/icons/instagram.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconInstagram", function() { return _instagram__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _linkedin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./linkedin */ "./components/icons/linkedin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconLinkedin", function() { return _linkedin__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loader */ "./components/icons/loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconLoader", function() { return _loader__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./location */ "./components/icons/location.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconLocation", function() { return _location__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logo */ "./components/icons/logo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconLogo", function() { return _logo__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _playstore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./playstore */ "./components/icons/playstore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconPlayStore", function() { return _playstore__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _star__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./star */ "./components/icons/star.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconStar", function() { return _star__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _twitter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./twitter */ "./components/icons/twitter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconTwitter", function() { return _twitter__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _zap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./zap */ "./components/icons/zap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconZap", function() { return _zap__WEBPACK_IMPORTED_MODULE_15__["default"]; });


















/***/ }),

/***/ "./components/icons/instagram.js":
/*!***************************************!*\
  !*** ./components/icons/instagram.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/icons/instagram.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const IconInstagram = () => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: "0 0 512 512",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, "Instagram"), __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}, __jsx("path", {
  d: "M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}))), __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}, __jsx("path", {
  d: "M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}))), __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}, __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }
}, __jsx("circle", {
  cx: "393.6",
  cy: "118.4",
  r: "17.056",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (IconInstagram);

/***/ }),

/***/ "./components/icons/linkedin.js":
/*!**************************************!*\
  !*** ./components/icons/linkedin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/icons/linkedin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const IconLinkedin = () => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: "0 0 430.117 430.117",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, "LinkedIn"), __jsx("path", {
  d: "M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (IconLinkedin);

/***/ }),

/***/ "./components/icons/loader.js":
/*!************************************!*\
  !*** ./components/icons/loader.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/icons/loader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const IconLoader = () => __jsx("svg", {
  id: "logo",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 100 100",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, "Loader Logo"), __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx("g", {
  id: "B",
  transform: "translate(11.000000, 5.000000)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}, __jsx("path", {
  d: "M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z",
  fill: "currentColor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
})), __jsx("path", {
  stroke: "currentColor",
  strokeWidth: "5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (IconLoader);

/***/ }),

/***/ "./components/icons/location.js":
/*!**************************************!*\
  !*** ./components/icons/location.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/icons/location.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const IconLocation = () => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: "0 0 512 512",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, "Location"), __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}, __jsx("path", {
  d: "M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257    c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22    C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34    C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180    C406.1,207.121,398.689,233.688,384.866,256.818z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}))), __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, __jsx("g", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}, __jsx("path", {
  d: "M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z     M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2    C316.1,212.683,289.784,240.2,256,240.2z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (IconLocation);

/***/ }),

/***/ "./components/icons/logo.js":
/*!**********************************!*\
  !*** ./components/icons/logo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/icons/logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const IconLogo = () => __jsx("svg", {
  id: "logo",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: "0 0 84 96",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, "Logo"), __jsx("g", {
  transform: "translate(-8.000000, -2.000000)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, __jsx("g", {
  transform: "translate(11.000000, 5.000000)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}, __jsx("g", {
  transform: "translate(18.000000, 20.000000)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, __jsx("path", {
  d: "M 25.29 0 L 42.33 43.38 L 36.09 43.38 Q 35.04 43.38 34.365 42.855 Q 33.69 42.33 33.39 41.55 L 30.15 32.7 L 12.18 32.7 L 8.94 41.55 Q 8.7 42.24 7.995 42.81 Q 7.29 43.38 6.27 43.38 L 0 43.38 L 17.04 0 L 25.29 0 Z M 19.53 12.63 L 14.25 27 L 28.08 27 L 22.8 12.57 A 49.687 49.687 0 0 1 22.519 11.801 Q 22.277 11.121 22.005 10.305 A 49.563 49.563 0 0 1 21.574 8.944 A 61.387 61.387 0 0 1 21.15 7.47 A 110.837 110.837 0 0 1 20.734 8.948 A 89.992 89.992 0 0 1 20.325 10.32 A 39.546 39.546 0 0 1 19.973 11.412 Q 19.805 11.908 19.64 12.345 A 22.498 22.498 0 0 1 19.53 12.63 Z",
  vectorEffect: "non-scaling-stroke",
  fill: "currentColor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 11
  }
})), __jsx("polygon", {
  id: "Shape",
  stroke: "currentColor",
  strokeWidth: "5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  points: "39 0 0 22 0 67 39 90 78 68 78 23",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (IconLogo);

/***/ }),

/***/ "./components/icons/playstore.js":
/*!***************************************!*\
  !*** ./components/icons/playstore.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/icons/playstore.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const IconPlayStore = () => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  x: "0px",
  y: "0px",
  viewBox: "0 0 512.001 512.001",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, "Google Play Store"), __jsx("path", {
  d: "M464.252,212.09L99.624,8.07C84.247-1.873,64.754-2.691,48.574,5.967C32.183,14.74,22,31.737,22,50.329v411.342 c0,18.592,10.183,35.59,26.573,44.361c16.097,8.617,35.593,7.891,51.052-2.101l364.628-204.022 c16.121-9.02,25.747-25.435,25.747-43.908C490,237.527,480.374,221.111,464.252,212.09z M341.677,181.943l-50.339,50.339 L113.108,54.051L341.677,181.943z M55.544,467.323V44.676L267.621,256L55.544,467.323z M113.108,457.949l178.232-178.231 l50.339,50.339L113.108,457.949z M447.874,270.637l-75.779,42.401l-57.038-57.037l57.037-57.037l75.778,42.4 c7.746,4.335,8.583,11.68,8.583,14.637C456.455,258.958,455.62,266.302,447.874,270.637z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (IconPlayStore);

/***/ }),

/***/ "./components/icons/star.js":
/*!**********************************!*\
  !*** ./components/icons/star.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/icons/star.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const IconStar = () => __jsx("svg", {
  "aria-label": "stars",
  viewBox: "0 0 14 16",
  version: "1.1",
  width: "14",
  height: "16",
  role: "img",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("path", {
  fillRule: "evenodd",
  d: "M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (IconStar);

/***/ }),

/***/ "./components/icons/twitter.js":
/*!*************************************!*\
  !*** ./components/icons/twitter.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/icons/twitter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const IconTwitter = () => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: "0 0 612 612",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, "Twitter"), __jsx("path", {
  d: "M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411 c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513 c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101 c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104 c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194 c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485 c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (IconTwitter);

/***/ }),

/***/ "./components/icons/zap.js":
/*!*********************************!*\
  !*** ./components/icons/zap.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/icons/zap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const IconZap = () => __jsx("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512.001 512.001",
  enableBackground: "new 0 0 512.001 512.001",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("path", {
  d: "m413.951,200.174c-2.828-5.047-8.164-8.174-13.953-8.174h-110.608l14.555-174.668c0.609-7.312-3.836-14.1-10.781-16.467-6.914-2.383-14.609,0.282-18.594,6.446l-175.998,271.997c-3.188,4.922-3.43,11.194-0.625,16.342 2.805,5.148 8.195,8.35 14.054,8.35h110.718l-14.672,190.773c-0.57,7.375 3.992,14.18 11.031,16.454 1.625,0.523 3.281,0.774 4.922,0.774 5.453,0 10.687-2.804 13.656-7.656l175.998-287.998c3.016-4.937 3.133-11.126 0.297-16.173zm-168.896,230.685l10.898-141.63c0.344-4.445-1.187-8.829-4.211-12.103-3.031-3.265-7.289-5.126-11.742-5.126h-98.585l125.335-193.707-10.695,128.382c-0.367,4.461 1.141,8.865 4.172,12.162 3.031,3.29 7.296,5.163 11.773,5.163h99.468l-126.413,206.859z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (IconZap);

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Layout, Nav, Side, Social, Menu, Email, Hero, About, Education, Contact, Footer, Featured */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./components/layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _layout__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./components/nav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return _nav__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _side__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side */ "./components/side.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Side", function() { return _side__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social */ "./components/social.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Social", function() { return _social__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./components/menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _menu__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email */ "./components/email.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return _email__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _section_hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section/hero */ "./components/section/hero.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _section_hero__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _section_about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./section/about */ "./components/section/about.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About", function() { return _section_about__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _section_education__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./section/education */ "./components/section/education.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Education", function() { return _section_education__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _section_contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./section/contact */ "./components/section/contact.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return _section_contact__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _section_featured__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./section/featured */ "./components/section/featured.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Featured", function() { return _section_featured__WEBPACK_IMPORTED_MODULE_11__["default"]; });














/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./components/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index */ "./styles/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  colors,
  fontSizes,
  fonts
} = _styles_index__WEBPACK_IMPORTED_MODULE_4__["theme"];


if (false) {}

const StyledContent = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "layout__StyledContent",
  componentId: "ju091f-0"
})(["display:flex;flex-direction:column;min-height:100vh;"]);

const Layout = ({
  children
}) => {
  return __jsx("div", {
    id: "root",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(StyledContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    isHome: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["Social"], {
    isHome: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["Email"], {
    isHome: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx("div", {
    id: "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, children, __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["Footer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }))));
};

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index */ "./styles/index.js");
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  colors,
  fontSizes,
  fonts
} = _styles_index__WEBPACK_IMPORTED_MODULE_4__["theme"];
const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "menu__StyledContainer",
  componentId: "zki7f3-0"
})(["position:fixed;top:0;bottom:0;right:0;width:100%;height:100vh;z-index:10;outline:0;transition:", ";transform:translateX(", "vw);visibility:", ";display:none;", ";"], _styles_index__WEBPACK_IMPORTED_MODULE_4__["theme"].transition, props => props.menuOpen ? 0 : 100, props => props.menuOpen ? "visible" : "hidden", _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].tablet`display: block;`);
const Sidebar = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.aside.withConfig({
  displayName: "menu__Sidebar",
  componentId: "zki7f3-1"
})(["", ";flex-direction:column;background-color:", ";padding:50px;width:50vw;height:100%;position:relative;right:0;margin-left:auto;font-family:", ";box-shadow:-10px 0px 30px -15px ", ";", ";", ";", ";"], _styles_index__WEBPACK_IMPORTED_MODULE_4__["mixins"].flexCenter, colors.navy, fonts.JetBrainsMono, colors.shadowNavy, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].thone`padding: 25px;`, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].phablet`width: 75vw;`, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].tiny`padding: 10px;`);
const NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.nav.withConfig({
  displayName: "menu__NavLinks",
  componentId: "zki7f3-2"
})(["", ";width:100%;flex-direction:column;text-align:center;color:", ";"], _styles_index__WEBPACK_IMPORTED_MODULE_4__["mixins"].flexBetween, colors.lightestSlate);
const NavList = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.ol.withConfig({
  displayName: "menu__NavList",
  componentId: "zki7f3-3"
})(["padding:0;margin:0;list-style:none;width:100%;"]);
const NavListItem = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.li.withConfig({
  displayName: "menu__NavListItem",
  componentId: "zki7f3-4"
})(["margin:0 auto 20px;position:relative;font-size:", ";counter-increment:item 1;", ";", ";&:before{display:block;content:\"0\" counter(item) \".\";color:", ";font-size:", ";margin-bottom:5px;}"], fontSizes.lg, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].thone`
    margin: 0 auto 10px;
    font-size: ${fontSizes.md};
  `, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].tiny`font-size: ${fontSizes.smish};`, colors.blue, fontSizes.sm);
const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a.withConfig({
  displayName: "menu__NavLink",
  componentId: "zki7f3-5"
})(["", ";padding:3px 20px 20px;width:100%;"], _styles_index__WEBPACK_IMPORTED_MODULE_4__["mixins"].link);
const ResumeLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a.withConfig({
  displayName: "menu__ResumeLink",
  componentId: "zki7f3-6"
})(["", ";padding:18px 50px;margin:10% auto 0;width:max-content;"], _styles_index__WEBPACK_IMPORTED_MODULE_4__["mixins"].bigButton);

const Menu = ({
  menuOpen,
  toogleMenu
}) => {
  const handleMenuClick = e => {
    //console.log("working");
    toogleMenu();
  };

  return __jsx(StyledContainer, {
    menuOpen: menuOpen,
    onClick: handleMenuClick,
    "aria-hidden": !menuOpen,
    tabIndex: menuOpen ? 1 : -1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx(Sidebar, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx(NavLinks, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx(NavList, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, _config__WEBPACK_IMPORTED_MODULE_2__["navLinks"] && _config__WEBPACK_IMPORTED_MODULE_2__["navLinks"].map(({
    url,
    name
  }, i) => __jsx(NavListItem, {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx(NavLink, {
    href: url,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, name)))), __jsx(ResumeLink, {
    href: "/Resume.pdf",
    target: "_blank",
    rel: "nofollow noopener noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, "Resume"))));
};

Menu.propTypes = {
  menuOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  toogleMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/index */ "./utils/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./components/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons */ "./components/icons/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/index */ "./styles/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //import Helmet from "react-helmet";










const {
  colors,
  fontSizes,
  fonts,
  loaderDelay
} = _styles_index__WEBPACK_IMPORTED_MODULE_8__["theme"];
const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.header.withConfig({
  displayName: "nav__StyledContainer",
  componentId: "hikgkh-0"
})(["", ";position:fixed;top:0;padding:0px 50px;background-color:", ";transition:", ";z-index:11;filter:none !important;pointer-events:auto !important;user-select:auto !important;width:100%;height:", ";box-shadow:", ";transform:translateY( ", " );", ";", ";"], _styles_index__WEBPACK_IMPORTED_MODULE_8__["mixins"].flexBetween, colors.darkNavy, _styles_index__WEBPACK_IMPORTED_MODULE_8__["theme"].transition, props => props.scrollDirection === "none" ? _styles_index__WEBPACK_IMPORTED_MODULE_8__["theme"].navHeight : _styles_index__WEBPACK_IMPORTED_MODULE_8__["theme"].navScrollHeight, props => props.scrollDirection === "up" ? `0 10px 30px -10px ${colors.navShadow}` : "none", props => props.scrollDirection === "down" ? `-${_styles_index__WEBPACK_IMPORTED_MODULE_8__["theme"].navScrollHeight}` : "0px", _styles_index__WEBPACK_IMPORTED_MODULE_8__["media"].desktop`padding: 0 40px;`, _styles_index__WEBPACK_IMPORTED_MODULE_8__["media"].tablet`padding: 0 25px;`);
const StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.nav.withConfig({
  displayName: "nav__StyledNav",
  componentId: "hikgkh-1"
})(["", ";position:relative;width:100%;color:", ";font-family:", ";counter-reset:item 0;z-index:12;"], _styles_index__WEBPACK_IMPORTED_MODULE_8__["mixins"].flexBetween, colors.lightestSlate, fonts.JetBrainsMono);
const StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "nav__StyledLogo",
  componentId: "hikgkh-2"
})(["", ";a{display:block;color:", ";width:42px;height:42px;&:hover,&:focus{svg{fill:", ";}}svg{fill:none;transition:", ";user-select:none;}}"], _styles_index__WEBPACK_IMPORTED_MODULE_8__["mixins"].flexCenter, colors.blue, colors.transBlue, _styles_index__WEBPACK_IMPORTED_MODULE_8__["theme"].transition);
const StyledHamburger = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "nav__StyledHamburger",
  componentId: "hikgkh-3"
})(["", ";overflow:visible;margin:0 -12px 0 0;padding:15px;cursor:pointer;transition-timing-function:linear;transition-duration:0.15s;transition-property:opacity,filter;text-transform:none;color:inherit;border:0;background-color:transparent;display:none;", ";"], _styles_index__WEBPACK_IMPORTED_MODULE_8__["mixins"].flexCenter, _styles_index__WEBPACK_IMPORTED_MODULE_8__["media"].tablet`display: flex;`);
const StyledHamburgerBox = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "nav__StyledHamburgerBox",
  componentId: "hikgkh-4"
})(["position:relative;display:inline-block;width:", "px;height:24px;"], _styles_index__WEBPACK_IMPORTED_MODULE_8__["theme"].hamburgerWidth);
const StyledHamburgerInner = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "nav__StyledHamburgerInner",
  componentId: "hikgkh-5"
})(["background-color:", ";position:absolute;width:", "px;height:2px;border-radius:", ";top:50%;left:0;right:0;transition-duration:0.22s;transition-property:transform;transition-delay:", ";transform:rotate(", ");transition-timing-function:cubic-bezier( ", " );&:before,&:after{content:\"\";display:block;background-color:", ";position:absolute;left:auto;right:0;width:", "px;height:2px;transition-timing-function:ease;transition-duration:0.15s;transition-property:transform;border-radius:4px;}&:before{width:", ";top:", ";opacity:", ";transition:", ";}&:after{width:", ";bottom:", ";transform:rotate(", ");transition:", ";}"], colors.blue, _styles_index__WEBPACK_IMPORTED_MODULE_8__["theme"].hamburgerWidth, _styles_index__WEBPACK_IMPORTED_MODULE_8__["theme"].borderRadius, props => props.menuOpen ? `0.12s` : `0s`, props => props.menuOpen ? `225deg` : `0deg`, props => props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`, colors.blue, _styles_index__WEBPACK_IMPORTED_MODULE_8__["theme"].hamburgerWidth, props => props.menuOpen ? `100%` : `120%`, props => props.menuOpen ? `0` : `-10px`, props => props.menuOpen ? 0 : 1, props => props.menuOpen ? _styles_index__WEBPACK_IMPORTED_MODULE_8__["theme"].hamBeforeActive : _styles_index__WEBPACK_IMPORTED_MODULE_8__["theme"].hamBefore, props => props.menuOpen ? `100%` : `80%`, props => props.menuOpen ? `0` : `-10px`, props => props.menuOpen ? `-90deg` : `0`, props => props.menuOpen ? _styles_index__WEBPACK_IMPORTED_MODULE_8__["theme"].hamAfterActive : _styles_index__WEBPACK_IMPORTED_MODULE_8__["theme"].hamAfter);
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "nav__StyledLink",
  componentId: "hikgkh-6"
})(["display:flex;align-items:center;", ";"], _styles_index__WEBPACK_IMPORTED_MODULE_8__["media"].tablet`display: none;`);
const StyledList = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.ol.withConfig({
  displayName: "nav__StyledList",
  componentId: "hikgkh-7"
})(["", ";padding:0;margin:0;list-style:none;"], _styles_index__WEBPACK_IMPORTED_MODULE_8__["mixins"].flexBetween);
const StyledListItem = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.li.withConfig({
  displayName: "nav__StyledListItem",
  componentId: "hikgkh-8"
})(["margin:0 10px;position:relative;font-size:", ";counter-increment:item 1;&:before{content:\"0\" counter(item) \".\";text-align:right;color:", ";font-size:", ";}"], fontSizes.smish, colors.blue, fontSizes.xs);
const StyledListLink = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.a.withConfig({
  displayName: "nav__StyledListLink",
  componentId: "hikgkh-9"
})(["padding:12px 10px;"]);
const StyledResumeButton = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.a.withConfig({
  displayName: "nav__StyledResumeButton",
  componentId: "hikgkh-10"
})(["", ";margin-left:10px;font-size:", ";"], _styles_index__WEBPACK_IMPORTED_MODULE_8__["mixins"].smallButton, fontSizes.smish);
const DELTA = 5;

class Nav extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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
      } else if (fromTop > lastScrollTop && fromTop > _config__WEBPACK_IMPORTED_MODULE_4__["navHeight"]) {
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
      window.addEventListener("scroll", () => Object(_utils_index__WEBPACK_IMPORTED_MODULE_3__["throttle"])(this.handleScroll()));
      window.addEventListener("resize", () => Object(_utils_index__WEBPACK_IMPORTED_MODULE_3__["throttle"])(this.handleResize()));
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

    return __jsx(StyledContainer, {
      scrollDirection: scrollDirection,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 7
      }
    }, __jsx(StyledNav, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 9
      }
    }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["TransitionGroup"], {
      component: null,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 11
      }
    }, isMounted && __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
      classNames: fadeClass,
      timeout: timeout,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 15
      }
    }, __jsx(StyledLogo, {
      tabindex: "-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "/#hero",
      "aria-label": "home",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 19
      }
    }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_6__["IconLogo"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 21
      }
    }))))), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["TransitionGroup"], {
      component: null,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 11
      }
    }, isMounted && __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
      classNames: fadeClass,
      timeout: timeout,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 15
      }
    }, __jsx(StyledHamburger, {
      onClick: this.toogleMenu,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 17
      }
    }, __jsx(StyledHamburgerBox, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 19
      }
    }, __jsx(StyledHamburgerInner, {
      menuOpen: menuOpen,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 21
      }
    }))))), __jsx(StyledLink, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 11
      }
    }, __jsx(StyledList, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 13
      }
    }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["TransitionGroup"], {
      component: null,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 15
      }
    }, isMounted && _config__WEBPACK_IMPORTED_MODULE_4__["navLinks"] && _config__WEBPACK_IMPORTED_MODULE_4__["navLinks"].map(({
      url,
      name
    }, i) => __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
      key: i,
      classNames: fadeDownClass,
      timeout: timeout,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 21
      }
    }, __jsx(StyledListItem, {
      key: i,
      style: {
        transitionDelay: `${isHome ? i * 100 : 0}ms`
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 23
      }
    }, __jsx(StyledListLink, {
      href: url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 25
      }
    }, name)))))), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["TransitionGroup"], {
      component: null,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 13
      }
    }, isMounted && __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
      classNames: fadeDownClass,
      timeout: timeout,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 17
      }
    }, __jsx("div", {
      style: {
        transitionDelay: `${isHome ? _config__WEBPACK_IMPORTED_MODULE_4__["navLinks"].length * 100 : 0}ms`
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 19
      }
    }, __jsx(StyledResumeButton, {
      href: "/Resume.pdf",
      target: "_blank",
      rel: "nofollow noopener noreferrer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 21
      }
    }, "Resume")))))), __jsx(_index__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
      menuOpen: menuOpen,
      toogleMenu: this.toogleMenu,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 9
      }
    }));
  }

}

Nav.propTypes = {
  isHome: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/section/about.js":
/*!*************************************!*\
  !*** ./components/section/about.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/index */ "./styles/index.js");
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/section/about.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import sr from "../../utils/sr";



const {
  colors,
  fontSizes,
  fonts
} = _styles_index__WEBPACK_IMPORTED_MODULE_5__["theme"];
const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_styles_index__WEBPACK_IMPORTED_MODULE_5__["Section"]).withConfig({
  displayName: "about__StyledContainer",
  componentId: "sc-1jcpia4-0"
})(["position:relative;"]);
const StyledFlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "about__StyledFlexContainer",
  componentId: "sc-1jcpia4-1"
})(["", ";align-items:flex-start;", ";"], _styles_index__WEBPACK_IMPORTED_MODULE_5__["mixins"].flexBetween, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].tablet`display: block;`);
const StyledContent = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "about__StyledContent",
  componentId: "sc-1jcpia4-2"
})(["width:60%;max-width:720px;", ";a{", ";}"], _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].tablet`width: 100%;`, _styles_index__WEBPACK_IMPORTED_MODULE_5__["mixins"].inlineLink);
const SkillsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "about__SkillsWrapper",
  componentId: "sc-1jcpia4-3"
})(["display:flex;flex-direction:row;"]);
const SkillsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.ul.withConfig({
  displayName: "about__SkillsContainer",
  componentId: "sc-1jcpia4-4"
})(["display:grid;grid-template-columns:repeat(1,minmax(140px,200px));overflow:hidden;padding:0;height:max-content;margin:20px 0 0 0;list-style:none;"]);
const SkillHeading = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.li.withConfig({
  displayName: "about__SkillHeading",
  componentId: "sc-1jcpia4-5"
})(["position:relative;margin-bottom:10px;font-family:", ";font-size:", ";color:", ";"], fonts.JetBrainsMono, fontSizes.md, colors.blue);
const Skill = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.li.withConfig({
  displayName: "about__Skill",
  componentId: "sc-1jcpia4-6"
})(["position:relative;margin-bottom:10px;padding-left:20px;font-family:", ";font-size:", ";color:", ";&:before{content:\"\u25B9\";position:absolute;left:0;color:", ";font-size:", ";line-height:12px;}"], fonts.JetBrainsMono, fontSizes.smish, colors.slate, colors.blue, fontSizes.sm);
const StyledPic = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "about__StyledPic",
  componentId: "sc-1jcpia4-7"
})(["position:relative;width:40%;max-width:300px;margin-left:60px;", ";", ";a{&:focus{outline:0;}}"], _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].tablet`margin: 60px auto 0;`, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].phablet`width: 70%;`);
const StyledAvatar = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img.withConfig({
  displayName: "about__StyledAvatar",
  componentId: "sc-1jcpia4-8"
})(["position:relative;mix-blend-mode:multiply;filter:grayscale(100%) contrast(1);border-radius:", ";transition:", ";"], _styles_index__WEBPACK_IMPORTED_MODULE_5__["theme"].borderRadius, _styles_index__WEBPACK_IMPORTED_MODULE_5__["theme"].transition);
const StyledAvatarLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a.withConfig({
  displayName: "about__StyledAvatarLink",
  componentId: "sc-1jcpia4-9"
})(["", ";width:100%;position:relative;border-radius:", ";background-color:", ";margin-left:-20px;&:hover,&:focus{&:after{top:15px;left:15px;}", "{filter:none;mix-blend-mode:normal;}}&:before,&:after{content:\"\";display:block;position:absolute;width:100%;height:100%;border-radius:", ";transition:", ";}&:before{top:0;left:0;right:0;bottom:0;background-color:", ";mix-blend-mode:screen;}&:after{border:2px solid ", ";top:20px;left:20px;z-index:-1;}"], _styles_index__WEBPACK_IMPORTED_MODULE_5__["mixins"].boxShadow, _styles_index__WEBPACK_IMPORTED_MODULE_5__["theme"].borderRadius, colors.blue, StyledAvatar, _styles_index__WEBPACK_IMPORTED_MODULE_5__["theme"].borderRadius, _styles_index__WEBPACK_IMPORTED_MODULE_5__["theme"].transition, colors.darkNavy, colors.blue);

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

  return __jsx(StyledContainer, {
    id: "about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 5
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }, __jsx(_styles_index__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }, title)), __jsx(StyledFlexContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }, __jsx(StyledContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: contentHtml
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }, __jsx(SkillsWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, __jsx(SkillsContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 15
    }
  }, __jsx(SkillHeading, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, "LANGUAGES"), languages && languages.map((skill, i) => __jsx(Skill, {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 47
    }
  }, skill))), __jsx(SkillsContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }, __jsx(SkillHeading, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }
  }, "FRAMEWORKS"), frameworks && frameworks.map((skill, i) => __jsx(Skill, {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 48
    }
  }, skill))), __jsx(SkillsContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }, __jsx(SkillHeading, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, "TOOLS"), tools && tools.map((skill, i) => __jsx(Skill, {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 43
    }
  }, skill)))))), __jsx(StyledPic, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, __jsx(StyledAvatarLink, {
    href: _config__WEBPACK_IMPORTED_MODULE_2__["github"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }, __jsx(StyledAvatar, {
    src: avatar,
    alt: "Avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 15
    }
  }))))));
};

About.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/section/contact.js":
/*!***************************************!*\
  !*** ./components/section/contact.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/index */ "./styles/index.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/section/contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  colors,
  fontSizes,
  fonts
} = _styles_index__WEBPACK_IMPORTED_MODULE_4__["theme"];
const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_styles_index__WEBPACK_IMPORTED_MODULE_4__["Section"]).withConfig({
  displayName: "contact__StyledContainer",
  componentId: "wu8qoy-0"
})(["text-align:center;max-width:800px;margin:0 auto 100px;a{", ";}"], _styles_index__WEBPACK_IMPORTED_MODULE_4__["mixins"].inlineLink);
const StyledHeading = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_styles_index__WEBPACK_IMPORTED_MODULE_4__["Heading"]).withConfig({
  displayName: "contact__StyledHeading",
  componentId: "wu8qoy-1"
})(["display:block;color:", ";font-size:", ";font-family:", ";font-weight:normal;margin-bottom:20px;justify-content:center;", ";&:before{bottom:0;font-size:", ";", ";}&:after{display:none;}"], colors.blue, fontSizes.md, fonts.JetBrainsMono, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].desktop`font-size: ${fontSizes.sm};`, fontSizes.sm, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].desktop`font-size: ${fontSizes.smish};`);
const StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h4.withConfig({
  displayName: "contact__StyledTitle",
  componentId: "wu8qoy-2"
})(["margin:0 0 20px;font-size:60px;", ";", ";"], _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].desktop`font-size: 50px;`, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].tablet`font-size: 40px;`);
const StyledEmailLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a.withConfig({
  displayName: "contact__StyledEmailLink",
  componentId: "wu8qoy-3"
})(["", ";margin-top:50px;"], _styles_index__WEBPACK_IMPORTED_MODULE_4__["mixins"].bigButton);

const Contact = data => {
  const frontmatter = data.frontmatter; //console.log(data);

  return __jsx(StyledContainer, {
    id: "contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
    bottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(StyledHeading, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "Loved my work?"), __jsx(StyledTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, frontmatter.title)), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
    bottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: frontmatter.contentHtml
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx(StyledEmailLink, {
    href: `mailto:${_config__WEBPACK_IMPORTED_MODULE_2__["email"]}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, frontmatter.buttonText)));
};

Contact.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/section/education.js":
/*!*****************************************!*\
  !*** ./components/section/education.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/index */ "./styles/index.js");
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/section/education.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  colors,
  fontSizes,
  fonts
} = _styles_index__WEBPACK_IMPORTED_MODULE_4__["theme"];
const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_styles_index__WEBPACK_IMPORTED_MODULE_4__["Section"]).withConfig({
  displayName: "education__StyledContainer",
  componentId: "sc-1xnyxi-0"
})(["position:relative;max-width:800px;"]);
const StyledTabs = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "education__StyledTabs",
  componentId: "sc-1xnyxi-1"
})(["display:flex;align-items:flex-start;position:relative;", ";"], _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].thone`
    display: block;
  `);
const StyledTabList = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.ul.withConfig({
  displayName: "education__StyledTabList",
  componentId: "sc-1xnyxi-2"
})(["display:block;position:relative;width:max-content;z-index:3;padding:0;margin:0;list-style:none;", ";", ";li{&:first-of-type{", ";", ";}&:last-of-type{", ";", ";}}"], _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].thone`
    display: flex;
    overflow-x: scroll;
    margin-bottom: 30px;
    width: calc(100% + 100px);
    margin-left: -50px;
  `, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].phablet`
    width: calc(100% + 50px);
    margin-left: -25px;
  `, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].thone`
        margin-left: 50px;
      `, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].phablet`
        margin-left: 25px;
      `, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].thone`
        padding-right: 50px;
      `, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].phablet`
        padding-right: 25px;
      `);
const StyledTabButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "education__StyledTabButton",
  componentId: "sc-1xnyxi-3"
})(["", ";display:flex;align-items:center;width:100%;background-color:transparent;height:", "px;padding:0 20px 2px;transition:", ";border-left:2px solid ", ";text-align:left;white-space:nowrap;font-family:", ";font-size:", ";color:", ";", ";", ";&:hover,&:focus{background-color:", ";}"], _styles_index__WEBPACK_IMPORTED_MODULE_4__["mixins"].link, _styles_index__WEBPACK_IMPORTED_MODULE_4__["theme"].tabHeight, _styles_index__WEBPACK_IMPORTED_MODULE_4__["theme"].transition, colors.lightNavy, fonts.JetBrainsMono, fontSizes.smish, props => props.isActive ? colors.blue : colors.slate, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].tablet`padding: 0 15px 2px;`, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].thone`
    ${_styles_index__WEBPACK_IMPORTED_MODULE_4__["mixins"].flexCenter};
    padding: 0 15px;
    text-align: center;
    border-left: 0;
    border-bottom: 2px solid ${colors.lightestNavy};
    min-width: 120px;
  `, colors.lightNavy);
const StyledHighlight = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span.withConfig({
  displayName: "education__StyledHighlight",
  componentId: "sc-1xnyxi-4"
})(["display:block;background:", ";width:2px;height:", "px;border-radius:", ";position:absolute;top:0;left:0;transition:transform 0.25s cubic-bezier(0.645,0.045,0.355,1);transition-delay:0.1s;z-index:10;transform:translateY( ", "px );", ";", ";"], colors.blue, _styles_index__WEBPACK_IMPORTED_MODULE_4__["theme"].tabHeight, _styles_index__WEBPACK_IMPORTED_MODULE_4__["theme"].borderRadius, props => props.activeTabId > 0 ? props.activeTabId * _styles_index__WEBPACK_IMPORTED_MODULE_4__["theme"].tabHeight : 0, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].thone`
    width: 100%;
    max-width: ${_styles_index__WEBPACK_IMPORTED_MODULE_4__["theme"].tabWidth}px;
    height: 2px;
    top: auto;
    bottom: 0;
    transform: translateX(
      ${props => props.activeTabId > 0 ? props.activeTabId * _styles_index__WEBPACK_IMPORTED_MODULE_4__["theme"].tabWidth : 0}px
    );
    margin-left: 50px;
  `, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].phablet`
    margin-left: 25px;
  `);
const StyledTabContent = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "education__StyledTabContent",
  componentId: "sc-1xnyxi-5"
})(["position:relative;width:100%;height:auto;padding-top:12px;padding-left:30px;", ";", ";ul{", ";}a{", ";}"], _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].tablet`padding-left: 20px;`, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].thone`padding-left: 0;`, _styles_index__WEBPACK_IMPORTED_MODULE_4__["mixins"].fancyList, _styles_index__WEBPACK_IMPORTED_MODULE_4__["mixins"].inlineLink);
const EducationTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h4.withConfig({
  displayName: "education__EducationTitle",
  componentId: "sc-1xnyxi-6"
})(["color:", ";font-size:", ";font-weight:500;margin-bottom:5px;"], colors.lightestSlate, fontSizes.xxl);
const EducationPlace = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span.withConfig({
  displayName: "education__EducationPlace",
  componentId: "sc-1xnyxi-7"
})(["color:", ";"], colors.blue);
const EducationDetails = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h5.withConfig({
  displayName: "education__EducationDetails",
  componentId: "sc-1xnyxi-8"
})(["font-family:", ";font-size:", ";font-weight:normal;letter-spacing:0.05em;color:", ";margin-bottom:30px;svg{width:15px;}"], fonts.JetBrainsMono, fontSizes.smish, colors.lightSlate);

const Education = data => {
  const {
    0: activeTabId,
    1: setActiveTabId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: tabFocus,
    1: setTabFocus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const tabs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);

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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => focusTab(), [tabFocus]);

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

  return __jsx(StyledContainer, {
    id: "college",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 5
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    bottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }
  }, __jsx(_styles_index__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  }, "Where I've Learned")), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    bottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }
  }, __jsx(StyledTabs, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }, __jsx(StyledTabList, {
    role: "tablist",
    "aria-label": "Education tabs",
    onKeyDown: e => onKeyPressed(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 11
    }
  }, frontmatter && Object.keys(frontmatter).map((key, i) => {
    const {
      tag
    } = frontmatter[key];
    return __jsx("li", {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 19
      }
    }, __jsx(StyledTabButton, {
      isActive: activeTabId === i,
      onClick: () => setActiveTabId(i),
      ref: el => tabs.current[i] = el,
      id: `tab-${i}`,
      role: "tab",
      "aria-selected": activeTabId === i ? "0" : "-1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 21
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 23
      }
    }, tag)));
  }), __jsx(StyledHighlight, {
    activeTabId: activeTabId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }
  })), frontmatter && Object.keys(frontmatter).map((key, i) => {
    const {
      title,
      school,
      range,
      contentHtml
    } = frontmatter[key];
    return __jsx(StyledTabContent, {
      key: i,
      isActive: activeTabId === i,
      id: `panel-${i}`,
      role: "tabpanel",
      "aria-labelledby": `tab-${i}`,
      tabIndex: activeTabId === i ? "0" : "-1",
      hidden: activeTabId !== i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 17
      }
    }, __jsx(EducationTitle, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 19
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 21
      }
    }, title), __jsx(EducationPlace, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 21
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 23
      }
    }, "\xA0@\xA0"), __jsx("a", {
      target: "_blank",
      rel: "nofollow noopener noreferrer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 23
      }
    }, school))), __jsx(EducationDetails, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 19
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 21
      }
    }, range)), __jsx("div", {
      dangerouslySetInnerHTML: {
        __html: contentHtml
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 19
      }
    }));
  }))));
};

Education.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Education);

/***/ }),

/***/ "./components/section/featured.js":
/*!****************************************!*\
  !*** ./components/section/featured.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/index */ "./styles/index.js");
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/section/featured.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  colors,
  fontSizes,
  fonts
} = _styles_index__WEBPACK_IMPORTED_MODULE_5__["theme"];
const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_styles_index__WEBPACK_IMPORTED_MODULE_5__["Section"]).withConfig({
  displayName: "featured__StyledContainer",
  componentId: "sc-128po9-0"
})(["", ";flex-direction:column;align-items:flex-start;"], _styles_index__WEBPACK_IMPORTED_MODULE_5__["mixins"].flexCenter);
const StyledContent = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "featured__StyledContent",
  componentId: "sc-128po9-1"
})(["position:relative;grid-column:1 / 7;grid-row:1 / -1;", ";", ";"], _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].thone`
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
  `, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].phablet`padding: 30px 25px 20px;`);
const StyledLabel = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h4.withConfig({
  displayName: "featured__StyledLabel",
  componentId: "sc-128po9-2"
})(["font-size:", ";font-weight:normal;color:", ";font-family:", ";margin-top:10px;padding-top:0;"], fontSizes.smish, colors.blue, fonts.JetBrainsMono);
const StyledProjectName = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h5.withConfig({
  displayName: "featured__StyledProjectName",
  componentId: "sc-128po9-3"
})(["font-size:28px;margin:0 0 20px;color:", ";", ";", ";a{", ";}"], colors.lightestSlate, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].tablet`font-size: 24px;`, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].thone`color: ${colors.white};`, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].tablet`display: block;`);
const StyledDescription = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "featured__StyledDescription",
  componentId: "sc-128po9-4"
})(["", ";position:relative;z-index:2;padding:25px;background-color:", ";color:", ";font-size:", ";border-radius:", ";", ";p{margin:0;}a{", ";}"], _styles_index__WEBPACK_IMPORTED_MODULE_5__["mixins"].boxShadow, colors.lightNavy, colors.lightSlate, fontSizes.lg, _styles_index__WEBPACK_IMPORTED_MODULE_5__["theme"].borderRadius, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].thone`
    background-color: transparent;
    padding: 20px 0;
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
  `, _styles_index__WEBPACK_IMPORTED_MODULE_5__["mixins"].inlineLink);
const StyledTechList = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.ul.withConfig({
  displayName: "featured__StyledTechList",
  componentId: "sc-128po9-5"
})(["position:relative;z-index:2;display:flex;flex-wrap:wrap;padding:0;margin:25px 0 10px;list-style:none;li{font-family:", ";font-size:", ";color:", ";margin-right:", ";margin-bottom:7px;white-space:nowrap;&:last-of-type{margin-right:0;}", ";}"], fonts.JetBrainsMono, fontSizes.smish, colors.slate, _styles_index__WEBPACK_IMPORTED_MODULE_5__["theme"].margin, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].thone`
      color: ${colors.lightestSlate};
      margin-right: 10px;
    `);
const StyledLinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "featured__StyledLinkWrapper",
  componentId: "sc-128po9-6"
})(["display:flex;align-items:center;position:relative;margin-top:10px;margin-left:-10px;color:", ";a{padding:10px;svg{width:22px;height:22px;}}"], colors.lightestSlate);
const StyledFeaturedImg = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.img.withConfig({
  displayName: "featured__StyledFeaturedImg",
  componentId: "sc-128po9-7"
})(["width:100%;max-width:100%;vertical-align:middle;border-radius:", ";position:relative;mix-blend-mode:multiply;filter:grayscale(100%) contrast(1) brightness(90%);", ";"], _styles_index__WEBPACK_IMPORTED_MODULE_5__["theme"].borderRadius, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].tablet`
    object-fit: cover;
    width: auto;
    height: 100%;
    filter: grayscale(100%) contrast(1) brightness(80%);
  `);
const StyledImgContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.a.withConfig({
  displayName: "featured__StyledImgContainer",
  componentId: "sc-128po9-8"
})(["", ";grid-column:6 / -1;grid-row:1 / -1;position:relative;z-index:1;background-color:", ";border-radius:", "px;transition:", ";", ";", ";&:hover,&:focus{background:transparent;&:before,", "{background:transparent;filter:none;}}&:before{content:\"\";position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:3;transition:", ";background-color:", ";mix-blend-mode:screen;}"], _styles_index__WEBPACK_IMPORTED_MODULE_5__["mixins"].boxShadow, colors.blue, _styles_index__WEBPACK_IMPORTED_MODULE_5__["theme"].radius + 1, _styles_index__WEBPACK_IMPORTED_MODULE_5__["theme"].transition, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].tablet`height: 100%;`, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].thone`
    grid-column: 1 / -1;
    opacity: 0.25;
  `, StyledFeaturedImg, _styles_index__WEBPACK_IMPORTED_MODULE_5__["theme"].transition, colors.navy);
const StyledProject = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "featured__StyledProject",
  componentId: "sc-128po9-9"
})(["display:grid;grid-gap:10px;grid-template-columns:repeat(12,1fr);align-items:center;margin-bottom:100px;", ";&:last-of-type{margin-bottom:0;}&:nth-of-type(odd){", "{grid-column:7 / -1;text-align:right;", ";", ";}", "{justify-content:flex-end;li{margin-left:", ";margin-right:0;}}", "{justify-content:flex-end;margin-left:0;margin-right:-10px;}", "{grid-column:1 / 8;", ";", ";}}"], _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].thone`
    margin-bottom: 70px;
  `, StyledContent, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].thone`
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      `, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].phablet`padding: 30px 25px 20px;`, StyledTechList, _styles_index__WEBPACK_IMPORTED_MODULE_5__["theme"].margin, StyledLinkWrapper, StyledImgContainer, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].tablet`height: 100%;`, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].thone`
        grid-column: 1 / -1;
        opacity: 0.25;
      `);

const Featured = data => {
  const frontmatter = data.frontmatter; //console.log(frontmatter);

  return __jsx(StyledContainer, {
    id: "projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 5
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    bottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }
  }, __jsx(_styles_index__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 9
    }
  }, "Some Things I've Built")), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 9
    }
  }, frontmatter && Object.keys(frontmatter).map((key, i) => {
    const {
      title,
      cover,
      external,
      tech,
      contentHtml
    } = frontmatter[key];
    return __jsx(StyledProject, {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 17
      }
    }, __jsx(StyledContent, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 19
      }
    }, __jsx(StyledLabel, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 21
      }
    }, "Featured Project"), __jsx(StyledProjectName, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 21
      }
    }, external ? __jsx("a", {
      href: external,
      target: "_blank",
      rel: "nofollow noopener noreferrer",
      "aria-label": "External Link",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 25
      }
    }, title) : title), __jsx(StyledDescription, {
      dangerouslySetInnerHTML: {
        __html: contentHtml
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 21
      }
    }), tech && __jsx(StyledTechList, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 23
      }
    }, tech.map((tech, i) => __jsx("li", {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 27
      }
    }, tech))), __jsx(StyledLinkWrapper, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 21
      }
    }, external && __jsx("a", {
      href: external,
      target: "_blank",
      rel: "nofollow noopener noreferrer",
      "aria-label": "External Link",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 25
      }
    }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_3__["FormattedIcon"], {
      name: "External",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 27
      }
    })))), __jsx(StyledImgContainer, {
      href: external ? external : "#",
      target: "_blank",
      rel: "nofollow noopener noreferrer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 19
      }
    }, __jsx(StyledFeaturedImg, {
      src: cover,
      alt: title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 21
      }
    })));
  }))));
};

Featured.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Featured);

/***/ }),

/***/ "./components/section/hero.js":
/*!************************************!*\
  !*** ./components/section/hero.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/index */ "./styles/index.js");
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/section/hero.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  colors,
  fontSizes,
  fonts,
  navDelay,
  loaderDelay
} = _styles_index__WEBPACK_IMPORTED_MODULE_5__["theme"];
const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_styles_index__WEBPACK_IMPORTED_MODULE_5__["Section"]).withConfig({
  displayName: "hero__StyledContainer",
  componentId: "pjsbvw-0"
})(["", ";flex-direction:column;align-items:flex-start;min-height:100vh;", ";div{width:100%;}"], _styles_index__WEBPACK_IMPORTED_MODULE_5__["mixins"].flexCenter, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].tablet`padding-top: 150px;`);
const StyledOverline = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h1.withConfig({
  displayName: "hero__StyledOverline",
  componentId: "pjsbvw-1"
})(["color:", ";margin:0 0 20px 3px;font-size:", ";font-family:", ";font-weight:normal;", ";", ";"], colors.blue, fontSizes.lg, fonts.SFMono, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].desktop`font-size: ${fontSizes.sm};`, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].tablet`font-size: ${fontSizes.smish};`);
const StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h2.withConfig({
  displayName: "hero__StyledTitle",
  componentId: "pjsbvw-2"
})(["font-size:80px;line-height:1.1;margin:0;", ";", ";", ";", ";"], _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].desktop`font-size: 70px;`, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].tablet`font-size: 60px;`, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].phablet`font-size: 50px;`, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].phone`font-size: 40px;`);
const StyledSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h3.withConfig({
  displayName: "hero__StyledSubtitle",
  componentId: "pjsbvw-3"
})(["font-size:80px;line-height:1.1;color:", ";", ";", ";", ";", ";"], colors.slate, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].desktop`font-size: 70px;`, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].tablet`font-size: 60px;`, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].phablet`font-size: 50px;`, _styles_index__WEBPACK_IMPORTED_MODULE_5__["media"].phone`font-size: 40px;`);
const StyledDescription = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "hero__StyledDescription",
  componentId: "pjsbvw-4"
})(["margin-top:25px;width:50%;max-width:500px;a{", ";}"], _styles_index__WEBPACK_IMPORTED_MODULE_5__["mixins"].inlineLink);
const StyledEmailLink = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.a.withConfig({
  displayName: "hero__StyledEmailLink",
  componentId: "pjsbvw-5"
})(["", ";margin-top:50px;"], _styles_index__WEBPACK_IMPORTED_MODULE_5__["mixins"].bigButton);

const Hero = data => {
  const {
    0: isMounted,
    1: setIsMounted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const frontmatter = data.frontmatter; //const data = JSON.parse(frontmatter);
  //console.log(frontmatter.frontmatter.id);
  //console.log(frontmatter);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = () => __jsx(StyledOverline, {
    style: {
      transitionDelay: "100ms"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, frontmatter.title);

  const two = () => __jsx(StyledTitle, {
    style: {
      transitionDelay: "200ms"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, frontmatter.name);

  const three = () => __jsx(StyledSubtitle, {
    style: {
      transitionDelay: "300ms"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, frontmatter.subtitle);

  const four = () => __jsx(StyledDescription, {
    style: {
      transitionDelay: "400ms"
    },
    dangerouslySetInnerHTML: {
      __html: frontmatter.contentHtml
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  });

  const five = () => __jsx("div", {
    style: {
      transitionDelay: "500ms"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, __jsx(StyledEmailLink, {
    href: `mailto:${_config__WEBPACK_IMPORTED_MODULE_3__["email"]}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, frontmatter.buttonText));

  const items = [one, two, three, four, five];
  return __jsx(StyledContainer, {
    id: "hero",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["TransitionGroup"], {
    component: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, isMounted && items.map((item, i) => __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
    key: i,
    classNames: "fadeup",
    timeout: loaderDelay,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, item))));
};

Hero.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/side.js":
/*!****************************!*\
  !*** ./components/side.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index */ "./styles/index.js");
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/side.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  colors,
  loaderDelay
} = _styles_index__WEBPACK_IMPORTED_MODULE_4__["theme"];
const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "side__StyledContainer",
  componentId: "fxz689-0"
})(["width:40px;position:fixed;bottom:0;left:", ";right:", ";z-index:10;color:", ";", ";", ";"], props => props.orientation === "left" ? "40px" : "auto", props => props.orientation === "left" ? "auto" : "40px", colors.lightSlate, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].desktop`right: 25px;`, _styles_index__WEBPACK_IMPORTED_MODULE_4__["media"].tablet`display: none;`);

const Side = ({
  children,
  isHome,
  orientation
}) => {
  const {
    0: isMounted,
    1: setIsMounted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isHome);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isHome) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
    return () => clearTimeout(timeout);
  }, []);
  return __jsx(StyledContainer, {
    orientation: orientation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["TransitionGroup"], {
    component: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, isMounted && __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
    classNames: isHome ? "fade" : "",
    timeout: isHome ? loaderDelay : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, children)));
};

Side.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  isHome: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Side);

/***/ }),

/***/ "./components/social.js":
/*!******************************!*\
  !*** ./components/social.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./components/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./components/icons/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/index */ "./styles/index.js");
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/social.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const {
  colors
} = _styles_index__WEBPACK_IMPORTED_MODULE_6__["theme"];
const StyledList = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.ul.withConfig({
  displayName: "social__StyledList",
  componentId: "b41xu9-0"
})(["display:flex;flex-direction:column;align-items:center;padding:0;margin:0;list-style:none;&:after{content:\"\";display:block;width:1px;height:90px;margin:0 auto;background-color:", ";}li:last-of-type{margin-bottom:20px;}"], colors.lightSlate);
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.a.withConfig({
  displayName: "social__StyledLink",
  componentId: "b41xu9-1"
})(["padding:10px;color:", " &:hover,&:focus{transform:translateY(-3px);}svg{width:18px;height:18px;}"], colors.lightestSlate);

const Social = ({
  isHome
}) => __jsx(_index__WEBPACK_IMPORTED_MODULE_3__["Side"], {
  isHome: isHome,
  orientation: "left",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 3
  }
}, __jsx(StyledList, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }
}, _config__WEBPACK_IMPORTED_MODULE_2__["socialMedia"] && _config__WEBPACK_IMPORTED_MODULE_2__["socialMedia"].map(({
  url,
  name
}, i) => __jsx("li", {
  key: i,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 11
  }
}, __jsx(StyledLink, {
  href: url,
  target: "_blank",
  rel: "nofollow noopener noreferrer",
  "aria-label": name,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 13
  }
}, __jsx(_icons__WEBPACK_IMPORTED_MODULE_4__["FormattedIcon"], {
  name: name,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 15
  }
}))))));

Social.propTypes = {
  isHome: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Social);

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

/***/ "./lib/content.js":
/*!************************!*\
  !*** ./lib/content.js ***!
  \************************/
/*! exports provided: getContent, getContentData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContent", function() { return getContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContentData", function() { return getContentData; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recursive_readdir__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recursive-readdir */ "recursive-readdir");
/* harmony import */ var recursive_readdir__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recursive_readdir__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark */ "remark");
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! remark-html */ "remark-html");
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remark_html__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), "content");
function getContent() {
  const fileNames = walkSync(postsDirectory.concat("/"));
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");
    const id2 = id.replace(postsDirectory, ""); //console.log(id);
    //const data = getContentData(id);

    return id2;
  });
  return allPostsData;
}

const walkSync = function (dir, filelist) {
  var fs = fs || __webpack_require__(/*! fs */ "fs"),
      files = fs.readdirSync(dir);

  filelist = filelist || [];
  files.forEach(function (file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + "/", filelist);
    } else {
      //console.log(dir + file);
      filelist.push(dir + file);
    }
  });
  return filelist;
};

async function getContentData(id) {
  const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(postsDirectory, `${id}.md`); //console.log(fullPath);

  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(fullPath, "utf8"); // Use gray-matter to parse the post metadata section

  const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(fileContents); // Use remark to convert markdown into HTML string

  const processedContent = await remark__WEBPACK_IMPORTED_MODULE_4___default()().use(remark_html__WEBPACK_IMPORTED_MODULE_5___default.a).process(matterResult.content);
  const contentHtml = processedContent.toString(); // Combine the data with the id and contentHtml

  return _objectSpread({
    id,
    contentHtml
  }, matterResult.data);
}

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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

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

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

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

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

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
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
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

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
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

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

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

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
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
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

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
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

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

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

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
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

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

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

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
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
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

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


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

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/index */ "./components/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index */ "./styles/index.js");
/* harmony import */ var _lib_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/content */ "./lib/content.js");
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const StyledMainContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_styles_index__WEBPACK_IMPORTED_MODULE_4__["Main"]).withConfig({
  displayName: "pages__StyledMainContainer",
  componentId: "ogu6c8-0"
})(["counter-reset:section;"]);

const Index = ({
  data
}) => {
  //console.log(data);
  return __jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(StyledMainContainer, {
    className: "fillHeight",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__["Hero"], {
    frontmatter: data.top,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__["About"], {
    frontmatter: data.about,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__["Education"], {
    frontmatter: data.education,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__["Featured"], {
    frontmatter: data.featured,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(_components_index__WEBPACK_IMPORTED_MODULE_2__["Contact"], {
    frontmatter: data.contact,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
async function getStaticProps() {
  const names = Object(_lib_content__WEBPACK_IMPORTED_MODULE_5__["getContent"])(); //console.log(names);

  const data = await Promise.all(names.map(async name => await Object(_lib_content__WEBPACK_IMPORTED_MODULE_5__["getContentData"])(name)));
  var content = {}; //console.log("here : " + data);
  // data.map((idata) => {
  //   //console.log("idata", idata);
  //   content.push({ [idata.id]: { ...idata } });
  // });

  for (var i = 0; i < data.length; i++) {
    if (content.hasOwnProperty(data[i].id)) {
      const tmp = {};
      tmp[data[i].subId] = data[i];
      content[data[i].id] = _objectSpread(_objectSpread({}, content[data[i].id]), tmp);
      continue;
    }

    if (data[i].hasOwnProperty("subId")) {
      const tmp = {};
      tmp[data[i].subId] = data[i];
      content[data[i].id] = _objectSpread({}, tmp);
      continue;
    }

    content[data[i].id] = data[i];
  } //console.log(content);


  return {
    props: {
      data: content
    }
  };
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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alkatraz/Desktop/programs/PROJECT/Portfolio/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "recursive-readdir":
/*!************************************!*\
  !*** external "recursive-readdir" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recursive-readdir");

/***/ }),

/***/ "remark":
/*!*************************!*\
  !*** external "remark" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("remark");

/***/ }),

/***/ "remark-html":
/*!******************************!*\
  !*** external "remark-html" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("remark-html");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2VtYWlsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvYXBwc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9jb2RlcGVuLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvZXh0ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9mb2xkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9mb3JrLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvZm9ybWF0dGVkSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL2dpdGh1Yi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvaW5zdGFncmFtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvbGlua2VkaW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL2xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9wbGF5c3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9zdGFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvdHdpdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL3phcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlY3Rpb24vYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWN0aW9uL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWN0aW9uL2VkdWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlY3Rpb24vZmVhdHVyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWN0aW9uL2hlcm8uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc29jaWFsLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLUJvbGQtSXRhbGljLnR0ZiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLUJvbGQtSXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vZm9udHMvSmV0QnJhaW5zTW9uby1Cb2xkLUl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLUJvbGQudHRmIiwid2VicGFjazovLy8uL2ZvbnRzL0pldEJyYWluc01vbm8tQm9sZC53b2ZmIiwid2VicGFjazovLy8uL2ZvbnRzL0pldEJyYWluc01vbm8tQm9sZC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLUV4dHJhQm9sZC1JdGFsaWMudHRmIiwid2VicGFjazovLy8uL2ZvbnRzL0pldEJyYWluc01vbm8tRXh0cmFCb2xkLUl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL2ZvbnRzL0pldEJyYWluc01vbm8tRXh0cmFCb2xkLUl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLUV4dHJhQm9sZC50dGYiLCJ3ZWJwYWNrOi8vLy4vZm9udHMvSmV0QnJhaW5zTW9uby1FeHRyYUJvbGQud29mZiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLUV4dHJhQm9sZC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLUl0YWxpYy50dGYiLCJ3ZWJwYWNrOi8vLy4vZm9udHMvSmV0QnJhaW5zTW9uby1JdGFsaWMud29mZiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLUl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLU1lZGl1bS1JdGFsaWMudHRmIiwid2VicGFjazovLy8uL2ZvbnRzL0pldEJyYWluc01vbm8tTWVkaXVtLUl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL2ZvbnRzL0pldEJyYWluc01vbm8tTWVkaXVtLUl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLU1lZGl1bS50dGYiLCJ3ZWJwYWNrOi8vLy4vZm9udHMvSmV0QnJhaW5zTW9uby1NZWRpdW0ud29mZiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLU1lZGl1bS53b2ZmMiIsIndlYnBhY2s6Ly8vLi9mb250cy9KZXRCcmFpbnNNb25vLVJlZ3VsYXIudHRmIiwid2VicGFjazovLy8uL2ZvbnRzL0pldEJyYWluc01vbm8tUmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL2ZvbnRzL0pldEJyYWluc01vbm8tUmVndWxhci53b2ZmMiIsIndlYnBhY2s6Ly8vLi9saWIvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvR2xvYmFsU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0lubGluZUxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL1RyYW5zaXRpb25TdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvZm9udHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9tZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvbWl4aW5zLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXktbWF0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmV2ZWFsL0ZhZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVjdXJzaXZlLXJlYWRkaXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZW1hcmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZW1hcmstaHRtbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiY29sb3JzIiwiZm9udFNpemVzIiwiZm9udHMiLCJ0aGVtZSIsIlN0eWxlZExpbmtXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwibGlnaHRTbGF0ZSIsIlN0eWxlZEVtYWlsTGluayIsImEiLCJ4cyIsImxpZ2h0ZXN0U2xhdGUiLCJFbWFpbCIsImlzSG9tZSIsImVtYWlsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIlN0eWxlZENvbnRhaW5lciIsImZvb3RlciIsIm1peGlucyIsImZsZXhDZW50ZXIiLCJTdHlsZWRTb2NpYWwiLCJtZWRpYSIsInRhYmxldCIsIlN0eWxlZFNvY2lhbExpc3QiLCJ1bCIsImZsZXhCZXR3ZWVuIiwiU3R5bGVkU29jaWFsTGluayIsIlN0eWxlZE1ldGFkYXRhIiwiSmV0QnJhaW5zTW9ubyIsInNtIiwiRm9vdGVyIiwic29jaWFsTWVkaWEiLCJtYXAiLCJuYW1lIiwidXJsIiwiaSIsIkljb25BcHBTdG9yZSIsIkljb25Db2RlcGVuIiwiSWNvbkV4dGVybmFsIiwiSWNvbkZvbGRlciIsIkljb25Gb3JrIiwiRm9ybWF0dGVkSWNvbiIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJJY29uR2l0SHViIiwiSWNvbkluc3RhZ3JhbSIsIkljb25MaW5rZWRpbiIsIkljb25Mb2FkZXIiLCJJY29uTG9jYXRpb24iLCJJY29uTG9nbyIsIkljb25QbGF5U3RvcmUiLCJJY29uU3RhciIsIkljb25Ud2l0dGVyIiwiSWNvblphcCIsIlN0eWxlZENvbnRlbnQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIm5vZGUiLCJ0cmFuc2l0aW9uIiwicHJvcHMiLCJtZW51T3BlbiIsIlNpZGViYXIiLCJhc2lkZSIsIm5hdnkiLCJzaGFkb3dOYXZ5IiwidGhvbmUiLCJwaGFibGV0IiwidGlueSIsIk5hdkxpbmtzIiwibmF2IiwiTmF2TGlzdCIsIm9sIiwiTmF2TGlzdEl0ZW0iLCJsaSIsImxnIiwibWQiLCJzbWlzaCIsImJsdWUiLCJOYXZMaW5rIiwibGluayIsIlJlc3VtZUxpbmsiLCJiaWdCdXR0b24iLCJNZW51IiwidG9vZ2xlTWVudSIsImhhbmRsZU1lbnVDbGljayIsImUiLCJuYXZMaW5rcyIsImZ1bmMiLCJsb2FkZXJEZWxheSIsImhlYWRlciIsImRhcmtOYXZ5Iiwic2Nyb2xsRGlyZWN0aW9uIiwibmF2SGVpZ2h0IiwibmF2U2Nyb2xsSGVpZ2h0IiwibmF2U2hhZG93IiwiZGVza3RvcCIsIlN0eWxlZE5hdiIsIlN0eWxlZExvZ28iLCJ0cmFuc0JsdWUiLCJTdHlsZWRIYW1idXJnZXIiLCJTdHlsZWRIYW1idXJnZXJCb3giLCJoYW1idXJnZXJXaWR0aCIsIlN0eWxlZEhhbWJ1cmdlcklubmVyIiwiYm9yZGVyUmFkaXVzIiwiaGFtQmVmb3JlQWN0aXZlIiwiaGFtQmVmb3JlIiwiaGFtQWZ0ZXJBY3RpdmUiLCJoYW1BZnRlciIsIlN0eWxlZExpbmsiLCJTdHlsZWRMaXN0IiwiU3R5bGVkTGlzdEl0ZW0iLCJTdHlsZWRMaXN0TGluayIsIlN0eWxlZFJlc3VtZUJ1dHRvbiIsInNtYWxsQnV0dG9uIiwiREVMVEEiLCJOYXYiLCJDb21wb25lbnQiLCJpc01vdW50ZWQiLCJsYXN0U2Nyb2xsVG9wIiwic2V0U3RhdGUiLCJzdGF0ZSIsImZyb21Ub3AiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiTWF0aCIsImFicyIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnQiLCJib2R5Iiwic2Nyb2xsSGVpZ2h0IiwiaW5uZXJXaWR0aCIsIndoaWNoIiwia2V5IiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRocm90dGxlIiwiaGFuZGxlU2Nyb2xsIiwiaGFuZGxlUmVzaXplIiwiaGFuZGxlS2V5RG93biIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleWRvd24iLCJyZW5kZXIiLCJ0aW1lb3V0IiwiZmFkZUNsYXNzIiwiZmFkZURvd25DbGFzcyIsInRyYW5zaXRpb25EZWxheSIsImxlbmd0aCIsIlNlY3Rpb24iLCJTdHlsZWRGbGV4Q29udGFpbmVyIiwiaW5saW5lTGluayIsIlNraWxsc1dyYXBwZXIiLCJTa2lsbHNDb250YWluZXIiLCJTa2lsbEhlYWRpbmciLCJTa2lsbCIsInNsYXRlIiwiU3R5bGVkUGljIiwiU3R5bGVkQXZhdGFyIiwiaW1nIiwiU3R5bGVkQXZhdGFyTGluayIsImJveFNoYWRvdyIsIkFib3V0IiwiZGF0YSIsInRpdGxlIiwiYXZhdGFyIiwibGFuZ3VhZ2VzIiwiZnJhbWV3b3JrcyIsInRvb2xzIiwiY29udGVudEh0bWwiLCJmcm9udG1hdHRlciIsIl9faHRtbCIsInNraWxsIiwiZ2l0aHViIiwib2JqZWN0IiwiU3R5bGVkSGVhZGluZyIsIkhlYWRpbmciLCJTdHlsZWRUaXRsZSIsImg0IiwiQ29udGFjdCIsImJ1dHRvblRleHQiLCJTdHlsZWRUYWJzIiwiU3R5bGVkVGFiTGlzdCIsIlN0eWxlZFRhYkJ1dHRvbiIsImJ1dHRvbiIsInRhYkhlaWdodCIsImxpZ2h0TmF2eSIsImlzQWN0aXZlIiwibGlnaHRlc3ROYXZ5IiwiU3R5bGVkSGlnaGxpZ2h0Iiwic3BhbiIsImFjdGl2ZVRhYklkIiwidGFiV2lkdGgiLCJTdHlsZWRUYWJDb250ZW50IiwiZmFuY3lMaXN0IiwiRWR1Y2F0aW9uVGl0bGUiLCJ4eGwiLCJFZHVjYXRpb25QbGFjZSIsIkVkdWNhdGlvbkRldGFpbHMiLCJoNSIsIkVkdWNhdGlvbiIsInNldEFjdGl2ZVRhYklkIiwidXNlU3RhdGUiLCJ0YWJGb2N1cyIsInNldFRhYkZvY3VzIiwidGFicyIsInVzZVJlZiIsImZvY3VzVGFiIiwiY3VycmVudCIsImZvY3VzIiwidXNlRWZmZWN0Iiwib25LZXlQcmVzc2VkIiwia2V5Y29kZSIsInByZXZlbnREZWZhdWx0Iiwia2V5Q29kZSIsIk9iamVjdCIsImtleXMiLCJ0YWciLCJlbCIsInNjaG9vbCIsInJhbmdlIiwiU3R5bGVkTGFiZWwiLCJTdHlsZWRQcm9qZWN0TmFtZSIsIndoaXRlIiwiU3R5bGVkRGVzY3JpcHRpb24iLCJTdHlsZWRUZWNoTGlzdCIsIm1hcmdpbiIsIlN0eWxlZEZlYXR1cmVkSW1nIiwiU3R5bGVkSW1nQ29udGFpbmVyIiwicmFkaXVzIiwiU3R5bGVkUHJvamVjdCIsIkZlYXR1cmVkIiwiY292ZXIiLCJleHRlcm5hbCIsInRlY2giLCJuYXZEZWxheSIsIlN0eWxlZE92ZXJsaW5lIiwiaDEiLCJTRk1vbm8iLCJoMiIsInBob25lIiwiU3R5bGVkU3VidGl0bGUiLCJoMyIsIkhlcm8iLCJzZXRJc01vdW50ZWQiLCJjbGVhclRpbWVvdXQiLCJvbmUiLCJ0d28iLCJ0aHJlZSIsInN1YnRpdGxlIiwiZm91ciIsImZpdmUiLCJpdGVtcyIsIml0ZW0iLCJvcmllbnRhdGlvbiIsIlNpZGUiLCJTb2NpYWwiLCJtb2R1bGUiLCJleHBvcnRzIiwic2l0ZVRpdGxlIiwic3JDb25maWciLCJkZWxheSIsIm9yaWdpbiIsImRpc3RhbmNlIiwiZHVyYXRpb24iLCJyb3RhdGUiLCJ4IiwieSIsInoiLCJvcGFjaXR5Iiwic2NhbGUiLCJlYXNpbmciLCJtb2JpbGUiLCJyZXNldCIsInVzZURlbGF5Iiwidmlld0ZhY3RvciIsInZpZXdPZmZzZXQiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJwb3N0c0RpcmVjdG9yeSIsInBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImdldENvbnRlbnQiLCJmaWxlTmFtZXMiLCJ3YWxrU3luYyIsImNvbmNhdCIsImFsbFBvc3RzRGF0YSIsImZpbGVOYW1lIiwiaWQiLCJyZXBsYWNlIiwiaWQyIiwiZGlyIiwiZmlsZWxpc3QiLCJmcyIsInJlcXVpcmUiLCJmaWxlcyIsInJlYWRkaXJTeW5jIiwiZm9yRWFjaCIsImZpbGUiLCJzdGF0U3luYyIsImlzRGlyZWN0b3J5IiwicHVzaCIsImdldENvbnRlbnREYXRhIiwiZnVsbFBhdGgiLCJmaWxlQ29udGVudHMiLCJyZWFkRmlsZVN5bmMiLCJtYXR0ZXJSZXN1bHQiLCJtYXR0ZXIiLCJwcm9jZXNzZWRDb250ZW50IiwicmVtYXJrIiwidXNlIiwiaHRtbCIsImNvbnRlbnQiLCJ0b1N0cmluZyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX3VybCIsIl91dGlscyIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsImlzTG9jYWwiLCJocmVmIiwicGFyc2UiLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhvc3QiLCJwcm90b2NvbCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0RnVuYyIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJvYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwidW5kZWZpbmVkIiwiZW50cmllcyIsImVudHJ5IiwiaGFzIiwidGFyZ2V0IiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJMaW5rIiwiY29uc3RydWN0b3IiLCJwIiwiY2xlYW5VcExpc3RlbmVycyIsImZvcm1hdFVybHMiLCJhc0hyZWYiLCJhZGRCYXNlUGF0aCIsImxpbmtDbGlja2VkIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50IiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInJlc29sdmUiLCJzY3JvbGwiLCJpbmRleE9mIiwic2hhbGxvdyIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJwcmVmZXRjaCIsIndhcm4iLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJvcHRpb25zIiwicGF0aHMiLCJjYXRjaCIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwYXNzSHJlZiIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJleGVjT25jZSIsImV4YWN0Iiwib25lT2ZUeXBlIiwiZWxlbWVudCIsInByb3BOYW1lIiwidmFsdWUiLCJfZGVmYXVsdCIsInVzZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsImNyZWF0ZVJvdXRlciIsIndpdGhSb3V0ZXIiLCJSb3V0ZXIiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJndW1lbnRzIiwiZXZlbnQiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJFcnJvciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJzbGljZSIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInVybF8xIiwibWl0dF8xIiwidXRpbHNfMSIsImlzX2R5bmFtaWNfMSIsInJvdXRlX21hdGNoZXJfMSIsInJvdXRlX3JlZ2V4XzEiLCJiYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJxdWVyeSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImdyb3VwcyIsImZpbHRlciIsInBhcmFtIiwiZ2V0Um91dGVJbmZvIiwicm91dGVJbmZvIiwiY2FuY2VsbGVkIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZmV0Y2hDb21wb25lbnQiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiX2dldERhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzcGxpdCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJoYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIlRFU1RfUk9VVEUiLCJ0ZXN0IiwicmUiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiXyIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJyZXBlYXQiLCJlc2NhcGVSZWdleCIsInN0ciIsIm5vcm1hbGl6ZWRSb3V0ZSIsImVzY2FwZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCIkMSIsImlzQ2F0Y2hBbGwiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX2EiLCJwcm90b3R5cGUiLCJwYWdlUHJvcHMiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0IiwiU1AiLCJtZWFzdXJlIiwiU3R5bGVkTWFpbkNvbnRhaW5lciIsIk1haW4iLCJJbmRleCIsImFib3V0IiwiZWR1Y2F0aW9uIiwiZmVhdHVyZWQiLCJjb250YWN0IiwiZ2V0U3RhdGljUHJvcHMiLCJuYW1lcyIsImhhc093blByb3BlcnR5IiwidG1wIiwic3ViSWQiLCJCdXR0b24iLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiRm9udEZhY2VzIiwieGwiLCJUcmFuc2l0aW9uU3R5bGVzIiwiSGVhZGVyIiwiSW5saW5lTGluayIsIm1haW4iLCJzaWRlUGFkZGluZyIsIlNlY2l0b24iLCJzZWN0aW9uIiwiVHJhbnNpdGlvblN0eWxlIiwiY3NzIiwiSkVUQlJBSU5TTU9OT1JlZ3VsYXJXT0ZGMiIsIkpFVEJSQUlOU01PTk9SZWd1bGFyVFRGIiwiSkVUQlJBSU5TTU9OT1JlZ3VsYXJXT0ZGIiwiSkVUQlJBSU5TTU9OT0l0YWxpY1dPRkYyIiwiSkVUQlJBSU5TTU9OT0l0YWxpY1RURiIsIkpFVEJSQUlOU01PTk9JdGFsaWNXT0ZGIiwiSkVUQlJBSU5TTU9OT01lZGl1bVdPRkYyIiwiSkVUQlJBSU5TTU9OT01lZGl1bVRURiIsIkpFVEJSQUlOU01PTk9NZWRpdW1XT0ZGIiwiSkVUQlJBSU5TTU9OT01lZGl1bUl0YWxpY1dPRkYyIiwiSkVUQlJBSU5TTU9OT01lZGl1bUl0YWxpY1RURiIsIkpFVEJSQUlOU01PTk9NZWRpdW1JdGFsaWNXT0ZGIiwiSkVUQlJBSU5TTU9OT0JvbGRXT0ZGMiIsIkpFVEJSQUlOU01PTk9Cb2xkVFRGIiwiSkVUQlJBSU5TTU9OT0JvbGRXT0ZGIiwiSkVUQlJBSU5TTU9OT0JvbGRJdGFsaWNXT0ZGMiIsIkpFVEJSQUlOU01PTk9Cb2xkSXRhbGljVFRGIiwiSkVUQlJBSU5TTU9OT0JvbGRJdGFsaWNXT0ZGIiwiSkVUQlJBSU5TTU9OT0V4dHJhQm9sZFdPRkYyIiwiSkVUQlJBSU5TTU9OT0V4dHJhQm9sZFRURiIsIkpFVEJSQUlOU01PTk9FeHRyYUJvbGRXT0ZGIiwiSkVUQlJBSU5TTU9OT0V4dHJhQm9sZEl0YWxpY1dPRkYyIiwiSkVUQlJBSU5TTU9OT0V4dHJhQm9sZEl0YWxpY1RURiIsIkpFVEJSQUlOU01PTk9FeHRyYUJvbGRJdGFsaWNXT0ZGIiwic2l6ZXMiLCJnaWFudCIsImJpZ0Rlc2t0b3AiLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsImxhYmVsIiwiZW1TaXplIiwib3V0aWxlIiwiQUNDRU5UIiwiRGFya19CRyIsIkJHIiwiaGV4MnJnYmEiLCJ3YWl0IiwidGltZXIiLCJhcHBseSIsImhleCIsImFscGhhIiwiciIsImIiLCJtYXRjaCIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDs7QUFDRixTQUFLLFFBQUw7QUFDRSxhQUFPLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQOztBQUNGLFNBQUssTUFBTDtBQUNFLGFBQU8sTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7O0FBQ0YsU0FBSyxRQUFMO0FBQ0UsYUFBTyxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDs7QUFDRixTQUFLLFdBQUw7QUFDRSxhQUFPLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQOztBQUNGLFNBQUssVUFBTDtBQUNFLGFBQU8sTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7O0FBQ0YsU0FBSyxRQUFMO0FBQ0UsYUFBTyxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDs7QUFDRixTQUFLLFVBQUw7QUFDRSxhQUFPLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQOztBQUNGLFNBQUssTUFBTDtBQUNFLGFBQU8sTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7O0FBQ0YsU0FBSyxXQUFMO0FBQ0UsYUFBTyxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDs7QUFDRixTQUFLLE1BQUw7QUFDRSxhQUFPLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQOztBQUNGLFNBQUssU0FBTDtBQUNFLGFBQU8sTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7O0FBQ0YsU0FBSyxLQUFM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S0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEJBLFdBQUssR0FBRzFpQixVQUFVLENBQUMsTUFBTTtBQUN2Qi9DLFlBQUksQ0FBQzBsQixLQUFMLENBQVcsSUFBWCxFQUFpQjVPLElBQWpCO0FBQ0EyTyxhQUFLLEdBQUcsSUFBUjtBQUNELE9BSGlCLEVBR2ZELElBSGUsQ0FBbEI7QUFJRDtBQUNGLEdBUEQ7QUFRRCxDQVZNO0FBWUEsTUFBTUQsUUFBUSxHQUFHLENBQUNJLEdBQUQsRUFBTUMsS0FBSyxHQUFHLENBQWQsS0FBb0I7QUFDMUMsUUFBTSxDQUFDQyxDQUFELEVBQUloRyxDQUFKLEVBQU9pRyxDQUFQLElBQVlILEdBQUcsQ0FBQ0ksS0FBSixDQUFVLE9BQVYsRUFBbUJ0cEIsR0FBbkIsQ0FBd0IwTyxDQUFELElBQU82YSxRQUFRLENBQUM3YSxDQUFELEVBQUksRUFBSixDQUF0QyxDQUFsQjtBQUNBLFNBQVEsUUFBTzBhLENBQUUsSUFBR2hHLENBQUUsSUFBR2lHLENBQUUsSUFBR0YsS0FBTSxHQUFwQztBQUNELENBSE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaUCwrQjs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgZW1haWwgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBTaWRlIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCIuLi9zdHlsZXMvaW5kZXhcIjtcbmNvbnN0IHsgY29sb3JzLCBmb250U2l6ZXMsIGZvbnRzIH0gPSB0aGVtZTtcblxuY29uc3QgU3R5bGVkTGlua1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMubGlnaHRTbGF0ZX07XG4gIH1cbmA7XG5jb25zdCBTdHlsZWRFbWFpbExpbmsgPSBzdHlsZWQuYWBcbiAgZm9udC1zaXplOiAke2ZvbnRTaXplcy54c307XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcblxuICBjb2xvcjogJHtjb2xvcnMubGlnaHRlc3RTbGF0ZX07XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgfVxuYDtcblxuY29uc3QgRW1haWwgPSAoeyBpc0hvbWUgfSkgPT4gKFxuICA8U2lkZSBpc0hvbWU9e2lzSG9tZX0gb3JpZW50YXRpb249XCJyaWdodFwiPlxuICAgIDxTdHlsZWRMaW5rV3JhcHBlcj5cbiAgICAgIDxTdHlsZWRFbWFpbExpbmsgaHJlZj17YG1haWx0bzoke2VtYWlsfWB9PntlbWFpbH08L1N0eWxlZEVtYWlsTGluaz5cbiAgICA8L1N0eWxlZExpbmtXcmFwcGVyPlxuICA8L1NpZGU+XG4pO1xuXG5FbWFpbC5wcm9wVHlwZXMgPSB7XG4gIGlzSG9tZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbWFpbDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBGb3JtYXR0ZWRJY29uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaWNvbnNcIjtcbmltcG9ydCB7IHNvY2lhbE1lZGlhIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHRoZW1lLCBtaXhpbnMsIG1lZGlhIH0gZnJvbSBcIi4uL3N0eWxlcy9pbmRleFwiO1xuY29uc3QgeyBjb2xvcnMsIGZvbnRTaXplcywgZm9udHMgfSA9IHRoZW1lO1xuXG5jb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuZm9vdGVyYFxuICAke21peGlucy5mbGV4Q2VudGVyfTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDcwcHg7XG5gO1xuY29uc3QgU3R5bGVkU29jaWFsID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7Y29sb3JzLmxpZ2h0U2xhdGV9O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAyNzBweDtcbiAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgJHttZWRpYS50YWJsZXRgZGlzcGxheTogYmxvY2s7YH07XG5gO1xuY29uc3QgU3R5bGVkU29jaWFsTGlzdCA9IHN0eWxlZC51bGBcbiAgJHttaXhpbnMuZmxleEJldHdlZW59O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5gO1xuY29uc3QgU3R5bGVkU29jaWFsTGluayA9IHN0eWxlZC5hYFxuICBwYWRkaW5nOiAxMHB4O1xuICBzdmcge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgfVxuYDtcbmNvbnN0IFN0eWxlZE1ldGFkYXRhID0gc3R5bGVkLmRpdmBcbiAgZm9udC1mYW1pbHk6ICR7Zm9udHMuSmV0QnJhaW5zTW9ub307XG4gIGZvbnQtc2l6ZTogJHtmb250U2l6ZXMuc219O1xuICBsaW5lLWhlaWdodDogMTtcbmA7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQ29udGFpbmVyPlxuICAgICAgPFN0eWxlZFNvY2lhbD5cbiAgICAgICAgPFN0eWxlZFNvY2lhbExpc3Q+XG4gICAgICAgICAge3NvY2lhbE1lZGlhICYmXG4gICAgICAgICAgICBzb2NpYWxNZWRpYS5tYXAoKHsgbmFtZSwgdXJsIH0sIGkpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgPFN0eWxlZFNvY2lhbExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9e3VybH1cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e25hbWV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZEljb24gbmFtZT17bmFtZX0gLz5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZFNvY2lhbExpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9TdHlsZWRTb2NpYWxMaXN0PlxuICAgICAgPC9TdHlsZWRTb2NpYWw+XG4gICAgICA8U3R5bGVkTWV0YWRhdGEgdGFiSW5kZXg9XCItMVwiPlxuICAgICAgICA8ZGl2PntcIkRlc2lnbmVkICYgQnVpbHQgV2l0aCDimaUgYnkgQW51cmFnIE1vcmVcIn08L2Rpdj5cbiAgICAgIDwvU3R5bGVkTWV0YWRhdGE+XG4gICAgPC9TdHlsZWRDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJY29uQXBwU3RvcmUgPSAoKSA9PiAoXG4gIDxzdmdcbiAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB4PVwiMHB4XCJcbiAgICB5PVwiMHB4XCJcbiAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxuICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIj5cbiAgICA8dGl0bGU+QXBwbGUgQXBwIFN0b3JlPC90aXRsZT5cbiAgICA8Zz5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNNDA3LDBIMTA1QzQ3LjEwMywwLDAsNDcuMTAzLDAsMTA1djMwMmMwLDU3Ljg5Nyw0Ny4xMDMsMTA1LDEwNSwxMDVoMzAyYzU3Ljg5NywwLDEwNS00Ny4xMDMsMTA1LTEwNVYxMDVcbiAgICAgIEM1MTIsNDcuMTAzLDQ2NC44OTcsMCw0MDcsMHogTTQ4Miw0MDdjMCw0MS4zNTUtMzMuNjQ1LDc1LTc1LDc1SDEwNWMtNDEuMzU1LDAtNzUtMzMuNjQ1LTc1LTc1VjEwNWMwLTQxLjM1NSwzMy42NDUtNzUsNzUtNzVoMzAyXG4gICAgICBjNDEuMzU1LDAsNzUsMzMuNjQ1LDc1LDc1VjQwN3pcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgIDwvZz5cbiAgICA8Zz5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNMzA1LjY0NiwxMjMuNTMxYy0xLjcyOS02LjQ1LTUuODY1LTExLjg0Mi0xMS42NDgtMTUuMThjLTExLjkzNi02Ljg5Mi0yNy4yNTYtMi43ODktMzQuMTUsOS4xNTFMMjU2LDEyNC4xNjZcbiAgICAgIGwtMy44NDgtNi42NjVjLTYuODkzLTExLjkzNy0yMi4yMTItMTYuMDQyLTM0LjE1LTkuMTUxaC0wLjAwMWMtMTEuOTM4LDYuODkzLTE2LjA0MiwyMi4yMTItOS4xNSwzNC4xNTFsMTguMjgxLDMxLjY2NFxuICAgICAgTDE1OS42NzgsMjkxSDExMC41Yy0xMy43ODUsMC0yNSwxMS4yMTUtMjUsMjVjMCwxMy43ODUsMTEuMjE1LDI1LDI1LDI1aDE4OS44NmwtMjguODY4LTUwaC01NC4wNzlsODUuNzM1LTE0OC40OThcbiAgICAgIEMzMDYuNDg3LDEzNi43MTksMzA3LjM3NSwxMjkuOTgxLDMwNS42NDYsMTIzLjUzMXpcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgIDwvZz5cbiAgICA8Zz5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNNDAxLjUsMjkxaC00OS4xNzhsLTU1LjkwNy05Ni44MzRsLTI4Ljg2Nyw1MGw4Ni44MDQsMTUwLjM0OGMzLjMzOSw1Ljc4NCw4LjcyOSw5LjkyMSwxNS4xODEsMTEuNjVcbiAgICAgIGMyLjE1NCwwLjU3Nyw0LjMzOSwwLjg2Myw2LjUxMSwwLjg2M2M0LjMzMiwwLDguNjA4LTEuMTM2LDEyLjQ2MS0zLjM2MWMxMS45MzgtNi44OTMsMTYuMDQyLTIyLjIxMyw5LjE0OS0zNC4xNUwzODEuMTg5LDM0MVxuICAgICAgSDQwMS41YzEzLjc4NSwwLDI1LTExLjIxNSwyNS0yNUM0MjYuNSwzMDIuMjE1LDQxNS4yODUsMjkxLDQwMS41LDI5MXpcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgIDwvZz5cbiAgICA8Zz5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNMTE5LjI2NCwzNjFsLTQuOTE3LDguNTE2Yy02Ljg5MiwxMS45MzgtMi43ODcsMjcuMjU4LDkuMTUxLDM0LjE1YzMuOTI3LDIuMjY3LDguMjE5LDMuMzQ1LDEyLjQ1OCwzLjM0NFxuICAgICAgYzguNjQ2LDAsMTcuMDY3LTQuNDg0LDIxLjY5My0xMi40OTVMMTc2Ljk5OSwzNjFIMTE5LjI2NHpcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgIDwvZz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uQXBwU3RvcmU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJY29uQ29kZXBlbiA9ICgpID0+IChcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcm9sZT1cImltZ1wiIHZpZXdCb3g9XCIwIDAgMzEuNjY1IDMxLjY2NVwiPlxuICAgIDx0aXRsZT5Db2RlcGVuPC90aXRsZT5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0xNi44NzgsMC40MTVjLTAuODU0LTAuNTY1LTEuOTY4LTAuNTUyLTIuODA5LDAuMDM0TDEuNDg1LDkuMjE0Yy0wLjY3MSwwLjQ2OC0xLjA3MSwxLjIzMy0xLjA3MSwyLjA1MnY5LjQ0NFxuICBjMCwwLjg0LDAuNDIxLDEuNjIzLDEuMTIyLDIuMDg2bDEyLjc5LDguNDU1YzAuODM2LDAuNTUzLDEuOTIyLDAuNTUzLDIuNzU4LDBsMTMuMDQ0LTguNjE4YzAuNy0wLjQ2MywxLjEyMi0xLjI0NiwxLjEyMi0yLjA4NlxuICB2LTkuMjc5YzAtMC44MzktMC40MjEtMS42MjItMS4xMjEtMi4wODVMMTYuODc4LDAuNDE1eiBNMjYuNjIxLDEwLjY0NWwtNC44MjEsMy4yMzdsLTQuNTIxLTMuMjg4TDE3LjI1LDQuMTI3TDI2LjYyMSwxMC42NDV6XG4gICBNMTMuOTc5LDQuMTMzdjYuMzI5bC00LjYzMywzLjI0bC00LjYyMS0zLjA5OUwxMy45NzksNC4xMzN6IE0zLjQ1OCwxMy43MjJsMi45OTEsMi4wMDRsLTIuOTkxLDIuMDkzVjEzLjcyMnogTTE0LjA1OCwyNy4yMTVcbiAgbC05LjMzMS02LjI1OGw0LjY2MS0zLjI1OGw0LjY3LDMuMTMzVjI3LjIxNXogTTEyLjI4NiwxNS42NzRsMy4wMjEtMi4xMTNsMy41MTksMi4zMTNsLTMuMTE5LDIuMDk1TDEyLjI4NiwxNS42NzR6IE0xNy4zNTQsMjcuMjE1XG4gIFYyMC44M2w0LjQ2My0yLjk5MWw0LjgwNSwzLjE1OUwxNy4zNTQsMjcuMjE1eiBNMjcuOTU0LDE3LjkyN2wtMy4xNjgtMi4wODJsMy4xNjgtMi4xMjVWMTcuOTI3elwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uQ29kZXBlbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEljb25FeHRlcm5hbCA9ICgpID0+IChcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcm9sZT1cImltZ1wiIHZpZXdCb3g9XCIwIDAgMTk0LjgxOCAxOTQuODE4XCI+XG4gICAgPHRpdGxlPkV4dGVybmFsPC90aXRsZT5cbiAgICA8Zz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTg1LjgxOCwyLjE2MWgtNTcuMDRjLTQuOTcxLDAtOSw0LjAyOS05LDlzNC4wMjksOSw5LDloMzUuMzEybC04Ni4zLDg2LjNjLTMuNTE1LDMuNTE1LTMuNTE1LDkuMjEzLDAsMTIuNzI4XG4gICAgICAgICAgICAgICAgYzEuNzU4LDEuNzU3LDQuMDYxLDIuNjM2LDYuMzY0LDIuNjM2czQuNjA2LTAuODc5LDYuMzY0LTIuNjM2bDg2LjMtODYuM3YzNS4zMTNjMCw0Ljk3MSw0LjAyOSw5LDksOXM5LTQuMDI5LDktOXYtNTcuMDRcbiAgICAgICAgICAgICAgICBDMTk0LjgxOCw2LjE5LDE5MC43ODksMi4xNjEsMTg1LjgxOCwyLjE2MXpcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTQ5LDc3LjIwMWMtNC45NzEsMC05LDQuMDI5LTksOXY4OC40NTZIMTh2LTEyMmg5My43NzhjNC45NzEsMCw5LTQuMDI5LDktOXMtNC4wMjktOS05LTlIOWMtNC45NzEsMC05LDQuMDI5LTksOXYxNDBcbiAgICAgICAgICAgICAgICBjMCw0Ljk3MSw0LjAyOSw5LDksOWgxNDBjNC45NzEsMCw5LTQuMDI5LDktOVY4Ni4yMDFDMTU4LDgxLjIzLDE1My45NzEsNzcuMjAxLDE0OSw3Ny4yMDF6XCJcbiAgICAgIC8+XG4gICAgPC9nPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEljb25FeHRlcm5hbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEljb25Gb2xkZXIgPSAoKSA9PiAoXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHJvbGU9XCJpbWdcIiB2aWV3Qm94PVwiMCAwIDYwIDYwXCI+XG4gICAgPHRpdGxlPkZvbGRlcjwvdGl0bGU+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNNTcuNDksMjEuNUg1NHYtNi4yNjhjMC0xLjUwNy0xLjIyNi0yLjczMi0yLjczMi0yLjczMkgyNi41MTVsLTUtN0gyLjczMkMxLjIyNiw1LjUsMCw2LjcyNiwwLDguMjMydjQzLjY4N2wwLjAwNiwwXG4gICAgICAgICAgYy0wLjAwNSwwLjU2MywwLjE3LDEuMTE0LDAuNTIyLDEuNTc1QzEuMDE4LDU0LjEzNCwxLjc2LDU0LjUsMi41NjUsNTQuNWg0NC43NTljMS4xNTYsMCwyLjE3NC0wLjc3OSwyLjQ1LTEuODEzTDYwLDI0LjY0OXYtMC4xNzdcbiAgICAgICAgICBDNjAsMjIuNzUsNTguOTQ0LDIxLjUsNTcuNDksMjEuNXogTTIsOC4yMzJDMiw3LjgyOCwyLjMyOSw3LjUsMi43MzIsNy41aDE3Ljc1M2w1LDdoMjUuNzgyYzAuNDA0LDAsMC43MzIsMC4zMjgsMC43MzIsMC43MzJWMjEuNVxuICAgICAgICAgIEgxMi43MzFjLTAuMTQ0LDAtMC4yODcsMC4wMTItMC40MjYsMC4wMzZjLTAuOTczLDAuMTYzLTEuNzgyLDAuODczLTIuMDIzLDEuNzc2TDIsNDUuODk5VjguMjMyeiBNNDcuODY5LDUyLjA4M1xuICAgICAgICAgIGMtMC4wNjYsMC4yNDUtMC4yOTEsMC40MTctMC41NDUsMC40MTdIMi41NjVjLTAuMjQzLDAtMC4zODUtMC4xMzktMC40NDgtMC4yMjJjLTAuMDYzLTAuMDgyLTAuMTYtMC4yNTYtMC4xMjMtMC40MDhsMTAuMTkxLTI3Ljk1M1xuICAgICAgICAgIGMwLjA2Ni0wLjI0NSwwLjI5MS0wLjQxNywwLjU0NS0wLjQxN0g1NGgzLjQ5YzAuMzgsMCwwLjQ3NywwLjU0NiwwLjUwMiwwLjgxOUw0Ny44NjksNTIuMDgzelwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uRm9sZGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSWNvbkZvcmsgPSAoKSA9PiAoXG4gIDxzdmcgYXJpYS1sYWJlbD1cImZvcmtzXCIgdmlld0JveD1cIjAgMCAxMCAxNlwiIHZlcnNpb249XCIxLjFcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTZcIiByb2xlPVwiaW1nXCI+XG4gICAgPHBhdGhcbiAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICBkPVwiTTggMWExLjk5MyAxLjk5MyAwIDAgMC0xIDMuNzJWNkw1IDggMyA2VjQuNzJBMS45OTMgMS45OTMgMCAwIDAgMiAxYTEuOTkzIDEuOTkzIDAgMCAwLTEgMy43MlY2LjVsMyAzdjEuNzhBMS45OTMgMS45OTMgMCAwIDAgNSAxNWExLjk5MyAxLjk5MyAwIDAgMCAxLTMuNzJWOS41bDMtM1Y0LjcyQTEuOTkzIDEuOTkzIDAgMCAwIDggMXpNMiA0LjJDMS4zNCA0LjIuOCAzLjY1LjggM2MwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yIDAgLjY1LS41NSAxLjItMS4yIDEuMnptMyAxMGMtLjY2IDAtMS4yLS41NS0xLjItMS4yIDAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yem0zLTEwYy0uNjYgMC0xLjItLjU1LTEuMi0xLjIgMC0uNjUuNTUtMS4yIDEuMi0xLjIuNjUgMCAxLjIuNTUgMS4yIDEuMiAwIC42NS0uNTUgMS4yLTEuMiAxLjJ6XCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEljb25Gb3JrO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtcbiAgSWNvbkFwcFN0b3JlLFxuICBJY29uQ29kZXBlbixcbiAgSWNvbkV4dGVybmFsLFxuICBJY29uRm9sZGVyLFxuICBJY29uRm9yayxcbiAgSWNvbkdpdEh1YixcbiAgSWNvbkluc3RhZ3JhbSxcbiAgSWNvbkxpbmtlZGluLFxuICBJY29uTG9hZGVyLFxuICBJY29uTG9jYXRpb24sXG4gIEljb25Mb2dvLFxuICBJY29uUGxheVN0b3JlLFxuICBJY29uU3RhcixcbiAgSWNvblR3aXR0ZXIsXG4gIEljb25aYXAsXG59IGZyb20gXCIuL2luZGV4XCI7XG5cbmNvbnN0IEZvcm1hdHRlZEljb24gPSAoeyBuYW1lIH0pID0+IHtcbiAgc3dpdGNoIChuYW1lKSB7XG4gICAgY2FzZSBcIkFwcFN0b3JlXCI6XG4gICAgICByZXR1cm4gPEljb25BcHBTdG9yZSAvPjtcbiAgICBjYXNlIFwiQ29kZXBlblwiOlxuICAgICAgcmV0dXJuIDxJY29uQ29kZXBlbiAvPjtcbiAgICBjYXNlIFwiRXh0ZXJuYWxcIjpcbiAgICAgIHJldHVybiA8SWNvbkV4dGVybmFsIC8+O1xuICAgIGNhc2UgXCJGb2xkZXJcIjpcbiAgICAgIHJldHVybiA8SWNvbkZvbGRlciAvPjtcbiAgICBjYXNlIFwiRm9ya1wiOlxuICAgICAgcmV0dXJuIDxJY29uRm9yayAvPjtcbiAgICBjYXNlIFwiR2l0SHViXCI6XG4gICAgICByZXR1cm4gPEljb25HaXRIdWIgLz47XG4gICAgY2FzZSBcIkluc3RhZ3JhbVwiOlxuICAgICAgcmV0dXJuIDxJY29uSW5zdGFncmFtIC8+O1xuICAgIGNhc2UgXCJMaW5rZWRpblwiOlxuICAgICAgcmV0dXJuIDxJY29uTGlua2VkaW4gLz47XG4gICAgY2FzZSBcIkxvYWRlclwiOlxuICAgICAgcmV0dXJuIDxJY29uTG9hZGVyIC8+O1xuICAgIGNhc2UgXCJMb2NhdGlvblwiOlxuICAgICAgcmV0dXJuIDxJY29uTG9jYXRpb24gLz47XG4gICAgY2FzZSBcIkxvZ29cIjpcbiAgICAgIHJldHVybiA8SWNvbkxvZ28gLz47XG4gICAgY2FzZSBcIlBsYXlTdG9yZVwiOlxuICAgICAgcmV0dXJuIDxJY29uUGxheVN0b3JlIC8+O1xuICAgIGNhc2UgXCJTdGFyXCI6XG4gICAgICByZXR1cm4gPEljb25TdGFyIC8+O1xuICAgIGNhc2UgXCJUd2l0dGVyXCI6XG4gICAgICByZXR1cm4gPEljb25Ud2l0dGVyIC8+O1xuICAgIGNhc2UgXCJaYXBcIjpcbiAgICAgIHJldHVybiA8SWNvblphcCAvPjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDxJY29uRXh0ZXJuYWwgLz47XG4gIH1cbn07XG5cbkZvcm1hdHRlZEljb24ucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0ZWRJY29uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSWNvbkdpdEh1YiA9ICgpID0+IChcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcm9sZT1cImltZ1wiIHZpZXdCb3g9XCIwIDAgNDM4LjU0OSA0MzguNTQ5XCI+XG4gICAgPHRpdGxlPkdpdEh1YjwvdGl0bGU+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNNDA5LjEzMiwxMTQuNTczYy0xOS42MDgtMzMuNTk2LTQ2LjIwNS02MC4xOTQtNzkuNzk4LTc5LjhDMjk1LjczNiwxNS4xNjYsMjU5LjA1Nyw1LjM2NSwyMTkuMjcxLDUuMzY1XG4gICAgICAgICAgYy0zOS43ODEsMC03Ni40NzIsOS44MDQtMTEwLjA2MywyOS40MDhjLTMzLjU5NiwxOS42MDUtNjAuMTkyLDQ2LjIwNC03OS44LDc5LjhDOS44MDMsMTQ4LjE2OCwwLDE4NC44NTQsMCwyMjQuNjMgYzAsNDcuNzgsMTMuOTQsOTAuNzQ1LDQxLjgyNywxMjguOTA2YzI3Ljg4NCwzOC4xNjQsNjMuOTA2LDY0LjU3MiwxMDguMDYzLDc5LjIyN2M1LjE0LDAuOTU0LDguOTQ1LDAuMjgzLDExLjQxOS0xLjk5NlxuICAgICAgICAgIGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNlxuICAgICAgICAgIGMtNC4xODcsMC43NjctOS40NjksMS4wOTItMTUuODQ2LDFjLTYuMzc0LTAuMDg5LTEyLjk5MS0wLjc1Ny0xOS44NDItMS45OTljLTYuODU0LTEuMjMxLTEzLjIyOS00LjA4Ni0xOS4xMy04LjU1OVxuICAgICAgICAgIGMtNS44OTgtNC40NzMtMTAuMDg1LTEwLjMyOC0xMi41Ni0xNy41NTZsLTIuODU1LTYuNTdjLTEuOTAzLTQuMzc0LTQuODk5LTkuMjMzLTguOTkyLTE0LjU1OVxuICAgICAgICAgIGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5N1xuICAgICAgICAgIGMtMC41NzItMS4zMzUtMC4wOTgtMi40MywxLjQyNy0zLjI4OWMxLjUyNS0wLjg1OSw0LjI4MS0xLjI3Niw4LjI4LTEuMjc2bDUuNzA4LDAuODUzYzMuODA3LDAuNzYzLDguNTE2LDMuMDQyLDE0LjEzMyw2Ljg1MVxuICAgICAgICAgIGM1LjYxNCwzLjgwNiwxMC4yMjksOC43NTQsMTMuODQ2LDE0Ljg0MmM0LjM4LDcuODA2LDkuNjU3LDEzLjc1NCwxNS44NDYsMTcuODQ3YzYuMTg0LDQuMDkzLDEyLjQxOSw2LjEzNiwxOC42OTksNi4xMzZcbiAgICAgICAgICBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxXG4gICAgICAgICAgYy0xMC44NDgtMS4xNC0yMC42MDEtMi44NTctMjkuMjY0LTUuMTRjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5Ni0yNi44MzUtMTEuMTRjLTkuMjM1LTUuMTM3LTE2Ljg5Ni0xMS41MTYtMjIuOTg1LTE5LjEyNlxuICAgICAgICAgIGMtNi4wOS03LjYxNC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OWMtMy45MDEtMTIuMzc0LTUuODUyLTI2LjY0OC01Ljg1Mi00Mi44MjZjMC0yMy4wMzUsNy41Mi00Mi42MzcsMjIuNTU3LTU4LjgxN1xuICAgICAgICAgIGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NFxuICAgICAgICAgIGM1LjA0NiwzLjA0MSw5LjA4OSw1LjYxOCwxMi4xMzUsNy43MDhjMTcuNzA1LTQuOTQ3LDM1Ljk3Ni03LjQyMSw1NC44MTgtNy40MjFzMzcuMTE3LDIuNDc0LDU0LjgyMyw3LjQyMWwxMC44NDktNi44NDlcbiAgICAgICAgICBjNy40MTktNC41NywxNi4xOC04Ljc1OCwyNi4yNjItMTIuNTY1YzEwLjA4OC0zLjgwNSwxNy44MDItNC44NTMsMjMuMTM0LTMuMTM4YzguNTYyLDIxLjUwOSw5LjMyNSw0MC45MjIsMi4yNzksNTguMjRcbiAgICAgICAgICBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5XG4gICAgICAgICAgYy02LjE5MSw3LjUyMS0xMy45MDEsMTMuODUtMjMuMTMxLDE4Ljk4NmMtOS4yMzIsNS4xNC0xOC4xODIsOC44NS0yNi44NCwxMS4xMzZjLTguNjYyLDIuMjg2LTE4LjQxNSw0LjAwNC0yOS4yNjMsNS4xNDZcbiAgICAgICAgICBjOS44OTQsOC41NjIsMTQuODQyLDIyLjA3NywxNC44NDIsNDAuNTM5djYwLjIzN2MwLDMuNDIyLDEuMTksNi4yNzksMy41NzIsOC41NjJjMi4zNzksMi4yNzksNi4xMzYsMi45NSwxMS4yNzYsMS45OTVcbiAgICAgICAgICBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2XG4gICAgICAgICAgQzQzOC41MzYsMTg0Ljg1MSw0MjguNzI4LDE0OC4xNjgsNDA5LjEzMiwxMTQuNTczelwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uR2l0SHViO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBJY29uQXBwU3RvcmUgfSBmcm9tICcuL2FwcHN0b3JlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSWNvbkNvZGVwZW4gfSBmcm9tICcuL2NvZGVwZW4nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJY29uRXh0ZXJuYWwgfSBmcm9tICcuL2V4dGVybmFsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSWNvbkZvbGRlciB9IGZyb20gJy4vZm9sZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSWNvbkZvcmsgfSBmcm9tICcuL2ZvcmsnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb3JtYXR0ZWRJY29uIH0gZnJvbSAnLi9mb3JtYXR0ZWRJY29uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSWNvbkdpdEh1YiB9IGZyb20gJy4vZ2l0aHViJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSWNvbkluc3RhZ3JhbSB9IGZyb20gJy4vaW5zdGFncmFtJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSWNvbkxpbmtlZGluIH0gZnJvbSAnLi9saW5rZWRpbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEljb25Mb2FkZXIgfSBmcm9tICcuL2xvYWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEljb25Mb2NhdGlvbiB9IGZyb20gJy4vbG9jYXRpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJY29uTG9nbyB9IGZyb20gJy4vbG9nbyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEljb25QbGF5U3RvcmUgfSBmcm9tICcuL3BsYXlzdG9yZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEljb25TdGFyIH0gZnJvbSAnLi9zdGFyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSWNvblR3aXR0ZXIgfSBmcm9tICcuL3R3aXR0ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJY29uWmFwIH0gZnJvbSAnLi96YXAnO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSWNvbkluc3RhZ3JhbSA9ICgpID0+IChcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcm9sZT1cImltZ1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPlxuICAgIDx0aXRsZT5JbnN0YWdyYW08L3RpdGxlPlxuICAgIDxnPlxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIGQ9XCJNMzUyLDBIMTYwQzcxLjY0OCwwLDAsNzEuNjQ4LDAsMTYwdjE5MmMwLDg4LjM1Miw3MS42NDgsMTYwLDE2MCwxNjBoMTkyYzg4LjM1MiwwLDE2MC03MS42NDgsMTYwLTE2MFYxNjAgQzUxMiw3MS42NDgsNDQwLjM1MiwwLDM1MiwweiBNNDY0LDM1MmMwLDYxLjc2LTUwLjI0LDExMi0xMTIsMTEySDE2MGMtNjEuNzYsMC0xMTItNTAuMjQtMTEyLTExMlYxNjBDNDgsOTguMjQsOTguMjQsNDgsMTYwLDQ4IGgxOTJjNjEuNzYsMCwxMTIsNTAuMjQsMTEyLDExMlYzNTJ6XCIgLz5cbiAgICAgIDwvZz5cbiAgICA8L2c+XG4gICAgPGc+XG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggZD1cIk0yNTYsMTI4Yy03MC42ODgsMC0xMjgsNTcuMzEyLTEyOCwxMjhzNTcuMzEyLDEyOCwxMjgsMTI4czEyOC01Ny4zMTIsMTI4LTEyOFMzMjYuNjg4LDEyOCwyNTYsMTI4eiBNMjU2LDMzNiBjLTQ0LjA5NiwwLTgwLTM1LjkwNC04MC04MGMwLTQ0LjEyOCwzNS45MDQtODAsODAtODBzODAsMzUuODcyLDgwLDgwQzMzNiwzMDAuMDk2LDMwMC4wOTYsMzM2LDI1NiwzMzZ6XCIgLz5cbiAgICAgIDwvZz5cbiAgICA8L2c+XG4gICAgPGc+XG4gICAgICA8Zz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjM5My42XCIgY3k9XCIxMTguNFwiIHI9XCIxNy4wNTZcIiAvPlxuICAgICAgPC9nPlxuICAgIDwvZz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uSW5zdGFncmFtO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSWNvbkxpbmtlZGluID0gKCkgPT4gKFxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiByb2xlPVwiaW1nXCIgdmlld0JveD1cIjAgMCA0MzAuMTE3IDQzMC4xMTdcIj5cbiAgICA8dGl0bGU+TGlua2VkSW48L3RpdGxlPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTQzMC4xMTcsMjYxLjU0M1Y0MjAuNTZoLTkyLjE4OFYyNzIuMTkzYzAtMzcuMjcxLTEzLjMzNC02Mi43MDctNDYuNzAzLTYyLjcwN1xuICAgICAgICAgIGMtMjUuNDczLDAtNDAuNjMyLDE3LjE0Mi00Ny4zMDEsMzMuNzI0Yy0yLjQzMiw1LjkyOC0zLjA1OCwxNC4xNzktMy4wNTgsMjIuNDc3VjQyMC41NmgtOTIuMjE5YzAsMCwxLjI0Mi0yNTEuMjg1LDAtMjc3LjMyaDkyLjIxXG4gICAgICAgICAgdjM5LjMwOWMtMC4xODcsMC4yOTQtMC40MywwLjYxMS0wLjYwNiwwLjg5NmgwLjYwNnYtMC44OTZjMTIuMjUxLTE4Ljg2OSwzNC4xMy00NS44MjQsODMuMTAyLTQ1LjgyNFxuICAgICAgICAgIEMzODQuNjMzLDEzNi43MjQsNDMwLjExNywxNzYuMzYxLDQzMC4xMTcsMjYxLjU0M3ogTTUyLjE4Myw5LjU1OEMyMC42MzUsOS41NTgsMCwzMC4yNTEsMCw1Ny40NjNcbiAgICAgICAgICBjMCwyNi42MTksMjAuMDM4LDQ3Ljk0LDUwLjk1OSw0Ny45NGgwLjYxNmMzMi4xNTksMCw1Mi4xNTktMjEuMzE3LDUyLjE1OS00Ny45NEMxMDMuMTI4LDMwLjI1MSw4My43MzQsOS41NTgsNTIuMTgzLDkuNTU4elxuICAgICAgICAgICBNNS40NzcsNDIwLjU2aDkyLjE4NHYtMjc3LjMySDUuNDc3VjQyMC41NnpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbkxpbmtlZGluO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSWNvbkxvYWRlciA9ICgpID0+IChcbiAgPHN2ZyBpZD1cImxvZ29cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XG4gICAgPHRpdGxlPkxvYWRlciBMb2dvPC90aXRsZT5cbiAgICA8Zz5cbiAgICAgIDxnIGlkPVwiQlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMS4wMDAwMDAsIDUuMDAwMDAwKVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNNDUuNjkxNjY3LDQ1LjE1IEM0OC41OTE2NjcsNDYuMSA1MC42OTE2NjcsNDguOTUgNTAuNjkxNjY3LDUyLjIgQzUwLjY5MTY2Nyw1Ny45NSA0Ni42OTE2NjcsNjEgNDAuMjkxNjY3LDYxIEwyOC41NDE2NjcsNjEgTDI4LjU0MTY2NywzMC4zIEwzOS4yOTE2NjcsMzAuMyBDNDUuNjkxNjY3LDMwLjMgNDkuNjkxNjY3LDMzLjE1IDQ5LjY5MTY2NywzOC42NSBDNDkuNjkxNjY3LDQxLjk1IDQ3Ljk0MTY2Nyw0NC4zNSA0NS42OTE2NjcsNDUuMTUgWiBNMzMuNTkxNjY3LDQzLjIgTDM5LjI0MTY2Nyw0My4yIEM0Mi43OTE2NjcsNDMuMiA0NC42OTE2NjcsNDEuODUgNDQuNjkxNjY3LDM4Ljk1IEM0NC42OTE2NjcsMzYuMDUgNDIuNzkxNjY3LDM0LjggMzkuMjQxNjY3LDM0LjggTDMzLjU5MTY2NywzNC44IEwzMy41OTE2NjcsNDMuMiBaIE0zMy41OTE2NjcsNDcuNSBMMzMuNTkxNjY3LDU2LjUgTDQwLjE5MTY2Nyw1Ni41IEM0My42OTE2NjcsNTYuNSA0NS41OTE2NjcsNTQuNzUgNDUuNTkxNjY3LDUyIEM0NS41OTE2NjcsNDkuMiA0My42OTE2NjcsNDcuNSA0MC4xOTE2NjcsNDcuNSBMMzMuNTkxNjY3LDQ3LjUgWlwiXG4gICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgZD1cIk0gNTAsIDVcbiAgICAgICAgICAgICAgICAgIEwgMTEsIDI3XG4gICAgICAgICAgICAgICAgICBMIDExLCA3MlxuICAgICAgICAgICAgICAgICAgTCA1MCwgOTVcbiAgICAgICAgICAgICAgICAgIEwgODksIDczXG4gICAgICAgICAgICAgICAgICBMIDg5LCAyOCB6XCJcbiAgICAgIC8+XG4gICAgPC9nPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEljb25Mb2FkZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJY29uTG9jYXRpb24gPSAoKSA9PiAoXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHJvbGU9XCJpbWdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj5cbiAgICA8dGl0bGU+TG9jYXRpb248L3RpdGxlPlxuICAgIDxnPlxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjU2LDBDMTU2Ljc0OCwwLDc2LDgwLjc0OCw3NiwxODBjMCwzMy41MzQsOS4yODksNjYuMjYsMjYuODY5LDk0LjY1MmwxNDIuODg1LDIzMC4yNTcgICAgYzIuNzM3LDQuNDExLDcuNTU5LDcuMDkxLDEyLjc0NSw3LjA5MWMwLjA0LDAsMC4wNzksMCwwLjExOSwwYzUuMjMxLTAuMDQxLDEwLjA2My0yLjgwNCwxMi43NS03LjI5Mkw0MTAuNjExLDI3Mi4yMiAgICBDNDI3LjIyMSwyNDQuNDI4LDQzNiwyMTIuNTM5LDQzNiwxODBDNDM2LDgwLjc0OCwzNTUuMjUyLDAsMjU2LDB6IE0zODQuODY2LDI1Ni44MThMMjU4LjI3Miw0NjguMTg2bC0xMjkuOTA1LTIwOS4zNCAgICBDMTEzLjczNCwyMzUuMjE0LDEwNS44LDIwNy45NSwxMDUuOCwxODBjMC04Mi43MSw2Ny40OS0xNTAuMiwxNTAuMi0xNTAuMlM0MDYuMSw5Ny4yOSw0MDYuMSwxODAgICAgQzQwNi4xLDIwNy4xMjEsMzk4LjY4OSwyMzMuNjg4LDM4NC44NjYsMjU2LjgxOHpcIiAvPlxuICAgICAgPC9nPlxuICAgIDwvZz5cbiAgICA8Zz5cbiAgICAgIDxnPlxuICAgICAgICA8cGF0aCBkPVwiTTI1Niw5MGMtNDkuNjI2LDAtOTAsNDAuMzc0LTkwLDkwYzAsNDkuMzA5LDM5LjcxNyw5MCw5MCw5MGM1MC45MDMsMCw5MC00MS4yMzMsOTAtOTBDMzQ2LDEzMC4zNzQsMzA1LjYyNiw5MCwyNTYsOTB6ICAgICBNMjU2LDI0MC4yYy0zMy4yNTcsMC02MC4yLTI3LjAzMy02MC4yLTYwLjJjMC0zMy4wODQsMjcuMTE2LTYwLjIsNjAuMi02MC4yczYwLjEsMjcuMTE2LDYwLjEsNjAuMiAgICBDMzE2LjEsMjEyLjY4MywyODkuNzg0LDI0MC4yLDI1NiwyNDAuMnpcIiAvPlxuICAgICAgPC9nPlxuICAgIDwvZz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uTG9jYXRpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEljb25Mb2dvID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgaWQ9XCJsb2dvXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICByb2xlPVwiaW1nXCJcbiAgICB2aWV3Qm94PVwiMCAwIDg0IDk2XCJcbiAgPlxuICAgIDx0aXRsZT5Mb2dvPC90aXRsZT5cbiAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTguMDAwMDAwLCAtMi4wMDAwMDApXCI+XG4gICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTEuMDAwMDAwLCA1LjAwMDAwMClcIj5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE4LjAwMDAwMCwgMjAuMDAwMDAwKVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTSAyNS4yOSAwIEwgNDIuMzMgNDMuMzggTCAzNi4wOSA0My4zOCBRIDM1LjA0IDQzLjM4IDM0LjM2NSA0Mi44NTUgUSAzMy42OSA0Mi4zMyAzMy4zOSA0MS41NSBMIDMwLjE1IDMyLjcgTCAxMi4xOCAzMi43IEwgOC45NCA0MS41NSBRIDguNyA0Mi4yNCA3Ljk5NSA0Mi44MSBRIDcuMjkgNDMuMzggNi4yNyA0My4zOCBMIDAgNDMuMzggTCAxNy4wNCAwIEwgMjUuMjkgMCBaIE0gMTkuNTMgMTIuNjMgTCAxNC4yNSAyNyBMIDI4LjA4IDI3IEwgMjIuOCAxMi41NyBBIDQ5LjY4NyA0OS42ODcgMCAwIDEgMjIuNTE5IDExLjgwMSBRIDIyLjI3NyAxMS4xMjEgMjIuMDA1IDEwLjMwNSBBIDQ5LjU2MyA0OS41NjMgMCAwIDEgMjEuNTc0IDguOTQ0IEEgNjEuMzg3IDYxLjM4NyAwIDAgMSAyMS4xNSA3LjQ3IEEgMTEwLjgzNyAxMTAuODM3IDAgMCAxIDIwLjczNCA4Ljk0OCBBIDg5Ljk5MiA4OS45OTIgMCAwIDEgMjAuMzI1IDEwLjMyIEEgMzkuNTQ2IDM5LjU0NiAwIDAgMSAxOS45NzMgMTEuNDEyIFEgMTkuODA1IDExLjkwOCAxOS42NCAxMi4zNDUgQSAyMi40OTggMjIuNDk4IDAgMCAxIDE5LjUzIDEyLjYzIFpcIlxuICAgICAgICAgICAgdmVjdG9yRWZmZWN0PVwibm9uLXNjYWxpbmctc3Ryb2tlXCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPHBvbHlnb25cbiAgICAgICAgICBpZD1cIlNoYXBlXCJcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNVwiXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICBwb2ludHM9XCIzOSAwIDAgMjIgMCA2NyAzOSA5MCA3OCA2OCA3OCAyM1wiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgPC9nPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEljb25Mb2dvO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSWNvblBsYXlTdG9yZSA9ICgpID0+IChcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcm9sZT1cImltZ1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA1MTIuMDAxIDUxMi4wMDFcIj5cbiAgICA8dGl0bGU+R29vZ2xlIFBsYXkgU3RvcmU8L3RpdGxlPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTQ2NC4yNTIsMjEyLjA5TDk5LjYyNCw4LjA3Qzg0LjI0Ny0xLjg3Myw2NC43NTQtMi42OTEsNDguNTc0LDUuOTY3QzMyLjE4MywxNC43NCwyMiwzMS43MzcsMjIsNTAuMzI5djQxMS4zNDJcbiAgICAgIGMwLDE4LjU5MiwxMC4xODMsMzUuNTksMjYuNTczLDQ0LjM2MWMxNi4wOTcsOC42MTcsMzUuNTkzLDcuODkxLDUxLjA1Mi0yLjEwMWwzNjQuNjI4LTIwNC4wMjJcbiAgICAgIGMxNi4xMjEtOS4wMiwyNS43NDctMjUuNDM1LDI1Ljc0Ny00My45MDhDNDkwLDIzNy41MjcsNDgwLjM3NCwyMjEuMTExLDQ2NC4yNTIsMjEyLjA5eiBNMzQxLjY3NywxODEuOTQzbC01MC4zMzksNTAuMzM5XG4gICAgICBMMTEzLjEwOCw1NC4wNTFMMzQxLjY3NywxODEuOTQzeiBNNTUuNTQ0LDQ2Ny4zMjNWNDQuNjc2TDI2Ny42MjEsMjU2TDU1LjU0NCw0NjcuMzIzeiBNMTEzLjEwOCw0NTcuOTQ5bDE3OC4yMzItMTc4LjIzMVxuICAgICAgbDUwLjMzOSw1MC4zMzlMMTEzLjEwOCw0NTcuOTQ5eiBNNDQ3Ljg3NCwyNzAuNjM3bC03NS43NzksNDIuNDAxbC01Ny4wMzgtNTcuMDM3bDU3LjAzNy01Ny4wMzdsNzUuNzc4LDQyLjRcbiAgICAgIGM3Ljc0Niw0LjMzNSw4LjU4MywxMS42OCw4LjU4MywxNC42MzdDNDU2LjQ1NSwyNTguOTU4LDQ1NS42MiwyNjYuMzAyLDQ0Ny44NzQsMjcwLjYzN3pcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvblBsYXlTdG9yZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEljb25TdGFyID0gKCkgPT4gKFxuICA8c3ZnIGFyaWEtbGFiZWw9XCJzdGFyc1wiIHZpZXdCb3g9XCIwIDAgMTQgMTZcIiB2ZXJzaW9uPVwiMS4xXCIgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjE2XCIgcm9sZT1cImltZ1wiPlxuICAgIDxwYXRoXG4gICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgZD1cIk0xNCA2bC00LjktLjY0TDcgMSA0LjkgNS4zNiAwIDZsMy42IDMuMjZMMi42NyAxNCA3IDExLjY3IDExLjMzIDE0bC0uOTMtNC43NEwxNCA2elwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uU3RhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEljb25Ud2l0dGVyID0gKCkgPT4gKFxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiByb2xlPVwiaW1nXCIgdmlld0JveD1cIjAgMCA2MTIgNjEyXCI+XG4gICAgPHRpdGxlPlR3aXR0ZXI8L3RpdGxlPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTYxMiwxMTYuMjU4Yy0yMi41MjUsOS45ODEtNDYuNjk0LDE2Ljc1LTcyLjA4OCwxOS43NzJjMjUuOTI5LTE1LjUyNyw0NS43NzctNDAuMTU1LDU1LjE4NC02OS40MTFcbiAgICAgICAgICBjLTI0LjMyMiwxNC4zNzktNTEuMTY5LDI0LjgyLTc5Ljc3NSwzMC40OGMtMjIuOTA3LTI0LjQzNy01NS40OS0zOS42NTgtOTEuNjMtMzkuNjU4Yy02OS4zMzQsMC0xMjUuNTUxLDU2LjIxNy0xMjUuNTUxLDEyNS41MTNcbiAgICAgICAgICBjMCw5LjgyOCwxLjEwOSwxOS40MjcsMy4yNTEsMjguNjA2QzE5Ny4wNjUsMjA2LjMyLDEwNC41NTYsMTU2LjMzNyw0Mi42NDEsODAuMzg2Yy0xMC44MjMsMTguNTEtMTYuOTgsNDAuMDc4LTE2Ljk4LDYzLjEwMVxuICAgICAgICAgIGMwLDQzLjU1OSwyMi4xODEsODEuOTkzLDU1LjgzNSwxMDQuNDc5Yy0yMC41NzUtMC42ODgtMzkuOTI2LTYuMzQ4LTU2Ljg2Ny0xNS43NTZ2MS41NjhjMCw2MC44MDYsNDMuMjkxLDExMS41NTQsMTAwLjY5MywxMjMuMTA0XG4gICAgICAgICAgYy0xMC41MTcsMi44My0yMS42MDcsNC4zOTgtMzMuMDgsNC4zOThjLTguMTA3LDAtMTUuOTQ3LTAuODAzLTIzLjYzNC0yLjMzM2MxNS45ODUsNDkuOTA3LDYyLjMzNiw4Ni4xOTksMTE3LjI1Myw4Ny4xOTRcbiAgICAgICAgICBjLTQyLjk0NywzMy42NTQtOTcuMDk5LDUzLjY1NS0xNTUuOTE2LDUzLjY1NWMtMTAuMTM0LDAtMjAuMTE2LTAuNjEyLTI5Ljk0NC0xLjcyMWM1NS41NjcsMzUuNjgxLDEyMS41MzYsNTYuNDg1LDE5Mi40MzgsNTYuNDg1XG4gICAgICAgICAgYzIzMC45NDgsMCwzNTcuMTg4LTE5MS4yOTEsMzU3LjE4OC0zNTcuMTg4bC0wLjQyMS0xNi4yNTNDNTczLjg3MiwxNjMuNTI2LDU5NS4yMTEsMTQxLjQyMiw2MTIsMTE2LjI1OHpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvblR3aXR0ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJY29uWmFwID0gKCkgPT4gKFxuICA8c3ZnXG4gICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgdmlld0JveD1cIjAgMCA1MTIuMDAxIDUxMi4wMDFcIlxuICAgIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDUxMi4wMDEgNTEyLjAwMVwiPlxuICAgIDxwYXRoIGQ9XCJtNDEzLjk1MSwyMDAuMTc0Yy0yLjgyOC01LjA0Ny04LjE2NC04LjE3NC0xMy45NTMtOC4xNzRoLTExMC42MDhsMTQuNTU1LTE3NC42NjhjMC42MDktNy4zMTItMy44MzYtMTQuMS0xMC43ODEtMTYuNDY3LTYuOTE0LTIuMzgzLTE0LjYwOSwwLjI4Mi0xOC41OTQsNi40NDZsLTE3NS45OTgsMjcxLjk5N2MtMy4xODgsNC45MjItMy40MywxMS4xOTQtMC42MjUsMTYuMzQyIDIuODA1LDUuMTQ4IDguMTk1LDguMzUgMTQuMDU0LDguMzVoMTEwLjcxOGwtMTQuNjcyLDE5MC43NzNjLTAuNTcsNy4zNzUgMy45OTIsMTQuMTggMTEuMDMxLDE2LjQ1NCAxLjYyNSwwLjUyMyAzLjI4MSwwLjc3NCA0LjkyMiwwLjc3NCA1LjQ1MywwIDEwLjY4Ny0yLjgwNCAxMy42NTYtNy42NTZsMTc1Ljk5OC0yODcuOTk4YzMuMDE2LTQuOTM3IDMuMTMzLTExLjEyNiAwLjI5Ny0xNi4xNzN6bS0xNjguODk2LDIzMC42ODVsMTAuODk4LTE0MS42M2MwLjM0NC00LjQ0NS0xLjE4Ny04LjgyOS00LjIxMS0xMi4xMDMtMy4wMzEtMy4yNjUtNy4yODktNS4xMjYtMTEuNzQyLTUuMTI2aC05OC41ODVsMTI1LjMzNS0xOTMuNzA3LTEwLjY5NSwxMjguMzgyYy0wLjM2Nyw0LjQ2MSAxLjE0MSw4Ljg2NSA0LjE3MiwxMi4xNjIgMy4wMzEsMy4yOSA3LjI5Niw1LjE2MyAxMS43NzMsNS4xNjNoOTkuNDY4bC0xMjYuNDEzLDIwNi44NTl6XCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uWmFwO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBMYXlvdXQgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmF2IH0gZnJvbSBcIi4vbmF2XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpZGUgfSBmcm9tIFwiLi9zaWRlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNvY2lhbCB9IGZyb20gXCIuL3NvY2lhbFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbWFpbCB9IGZyb20gXCIuL2VtYWlsXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlcm8gfSBmcm9tIFwiLi9zZWN0aW9uL2hlcm9cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWJvdXQgfSBmcm9tIFwiLi9zZWN0aW9uL2Fib3V0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVkdWNhdGlvbiB9IGZyb20gXCIuL3NlY3Rpb24vZWR1Y2F0aW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRhY3QgfSBmcm9tIFwiLi9zZWN0aW9uL2NvbnRhY3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRm9vdGVyIH0gZnJvbSBcIi4vZm9vdGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZlYXR1cmVkIH0gZnJvbSBcIi4vc2VjdGlvbi9mZWF0dXJlZFwiO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IE5hdiwgU29jaWFsLCBFbWFpbCwgRm9vdGVyIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBHbG9iYWxTdHlsZSwgdGhlbWUgfSBmcm9tIFwiLi4vc3R5bGVzL2luZGV4XCI7XG5jb25zdCB7IGNvbG9ycywgZm9udFNpemVzLCBmb250cyB9ID0gdGhlbWU7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIHJlcXVpcmUoXCJzbW9vdGgtc2Nyb2xsXCIpKCdhW2hyZWYqPVwiI1wiXScpO1xufVxuXG5jb25zdCBTdHlsZWRDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG5gO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cInJvb3RcIj5cbiAgICAgIDxTdHlsZWRDb250ZW50PlxuICAgICAgICA8TmF2IGlzSG9tZT17dHJ1ZX0+PC9OYXY+XG4gICAgICAgIDxTb2NpYWwgaXNIb21lPXt0cnVlfT48L1NvY2lhbD5cbiAgICAgICAgPEVtYWlsIGlzSG9tZT17dHJ1ZX0+PC9FbWFpbD5cbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3R5bGVkQ29udGVudD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBuYXZMaW5rcyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB0aGVtZSwgbWl4aW5zLCBtZWRpYSB9IGZyb20gXCIuLi9zdHlsZXMvaW5kZXhcIjtcbmNvbnN0IHsgY29sb3JzLCBmb250U2l6ZXMsIGZvbnRzIH0gPSB0aGVtZTtcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiAxMDtcbiAgb3V0bGluZTogMDtcbiAgdHJhbnNpdGlvbjogJHt0aGVtZS50cmFuc2l0aW9ufTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7KHByb3BzKSA9PiAocHJvcHMubWVudU9wZW4gPyAwIDogMTAwKX12dyk7XG4gIHZpc2liaWxpdHk6ICR7KHByb3BzKSA9PiAocHJvcHMubWVudU9wZW4gPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCIpfTtcbiAgZGlzcGxheTogbm9uZTtcbiAgJHttZWRpYS50YWJsZXRgZGlzcGxheTogYmxvY2s7YH07XG5gO1xuY29uc3QgU2lkZWJhciA9IHN0eWxlZC5hc2lkZWBcbiAgJHttaXhpbnMuZmxleENlbnRlcn07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLm5hdnl9O1xuICBwYWRkaW5nOiA1MHB4O1xuICB3aWR0aDogNTB2dztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZm9udC1mYW1pbHk6ICR7Zm9udHMuSmV0QnJhaW5zTW9ub307XG4gIGJveC1zaGFkb3c6IC0xMHB4IDBweCAzMHB4IC0xNXB4ICR7Y29sb3JzLnNoYWRvd05hdnl9O1xuICAke21lZGlhLnRob25lYHBhZGRpbmc6IDI1cHg7YH07XG4gICR7bWVkaWEucGhhYmxldGB3aWR0aDogNzV2dztgfTtcbiAgJHttZWRpYS50aW55YHBhZGRpbmc6IDEwcHg7YH07XG5gO1xuY29uc3QgTmF2TGlua3MgPSBzdHlsZWQubmF2YFxuICAke21peGlucy5mbGV4QmV0d2Vlbn07XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAke2NvbG9ycy5saWdodGVzdFNsYXRlfTtcbmA7XG5jb25zdCBOYXZMaXN0ID0gc3R5bGVkLm9sYFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuYDtcbmNvbnN0IE5hdkxpc3RJdGVtID0gc3R5bGVkLmxpYFxuICBtYXJnaW46IDAgYXV0byAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogJHtmb250U2l6ZXMubGd9O1xuICBjb3VudGVyLWluY3JlbWVudDogaXRlbSAxO1xuICAke21lZGlhLnRob25lYFxuICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5tZH07XG4gIGB9O1xuICAke21lZGlhLnRpbnlgZm9udC1zaXplOiAke2ZvbnRTaXplcy5zbWlzaH07YH07XG4gICY6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiBcIjBcIiBjb3VudGVyKGl0ZW0pIFwiLlwiO1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibHVlfTtcbiAgICBmb250LXNpemU6ICR7Zm9udFNpemVzLnNtfTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbmA7XG5jb25zdCBOYXZMaW5rID0gc3R5bGVkLmFgXG4gICR7bWl4aW5zLmxpbmt9O1xuICBwYWRkaW5nOiAzcHggMjBweCAyMHB4O1xuICB3aWR0aDogMTAwJTtcbmA7XG5jb25zdCBSZXN1bWVMaW5rID0gc3R5bGVkLmFgXG4gICR7bWl4aW5zLmJpZ0J1dHRvbn07XG4gIHBhZGRpbmc6IDE4cHggNTBweDtcbiAgbWFyZ2luOiAxMCUgYXV0byAwO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG5gO1xuXG5jb25zdCBNZW51ID0gKHsgbWVudU9wZW4sIHRvb2dsZU1lbnUgfSkgPT4ge1xuICBjb25zdCBoYW5kbGVNZW51Q2xpY2sgPSAoZSkgPT4ge1xuICAgIC8vY29uc29sZS5sb2coXCJ3b3JraW5nXCIpO1xuICAgIHRvb2dsZU1lbnUoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRDb250YWluZXJcbiAgICAgIG1lbnVPcGVuPXttZW51T3Blbn1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZU1lbnVDbGlja31cbiAgICAgIGFyaWEtaGlkZGVuPXshbWVudU9wZW59XG4gICAgICB0YWJJbmRleD17bWVudU9wZW4gPyAxIDogLTF9XG4gICAgPlxuICAgICAgPFNpZGViYXI+XG4gICAgICAgIDxOYXZMaW5rcz5cbiAgICAgICAgICA8TmF2TGlzdD5cbiAgICAgICAgICAgIHtuYXZMaW5rcyAmJlxuICAgICAgICAgICAgICBuYXZMaW5rcy5tYXAoKHsgdXJsLCBuYW1lIH0sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8TmF2TGlzdEl0ZW0ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9e3VybH0+e25hbWV9PC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvTmF2TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvTmF2TGlzdD5cbiAgICAgICAgICA8UmVzdW1lTGlua1xuICAgICAgICAgICAgaHJlZj1cIi9SZXN1bWUucGRmXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZXN1bWVcbiAgICAgICAgICA8L1Jlc3VtZUxpbms+XG4gICAgICAgIDwvTmF2TGlua3M+XG4gICAgICA8L1NpZGViYXI+XG4gICAgPC9TdHlsZWRDb250YWluZXI+XG4gICk7XG59O1xuXG5NZW51LnByb3BUeXBlcyA9IHtcbiAgbWVudU9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHRvb2dsZU1lbnU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vL2ltcG9ydCBIZWxtZXQgZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcbmltcG9ydCB7IHRocm90dGxlIH0gZnJvbSBcIi4uL3V0aWxzL2luZGV4XCI7XG5pbXBvcnQgeyBuYXZMaW5rcywgbmF2SGVpZ2h0IH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBJY29uTG9nbyB9IGZyb20gXCIuL2ljb25zXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdGhlbWUsIG1peGlucywgbWVkaWEgfSBmcm9tIFwiLi4vc3R5bGVzL2luZGV4XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5jb25zdCB7IGNvbG9ycywgZm9udFNpemVzLCBmb250cywgbG9hZGVyRGVsYXkgfSA9IHRoZW1lO1xuXG5jb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuaGVhZGVyYFxuICAke21peGlucy5mbGV4QmV0d2Vlbn07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAwcHggNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZGFya05hdnl9O1xuICB0cmFuc2l0aW9uOiAke3RoZW1lLnRyYW5zaXRpb259O1xuICB6LWluZGV4OiAxMTtcblxuICBmaWx0ZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDtcbiAgdXNlci1zZWxlY3Q6IGF1dG8gIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJHsocHJvcHMpID0+XG4gICAgcHJvcHMuc2Nyb2xsRGlyZWN0aW9uID09PSBcIm5vbmVcIiA/IHRoZW1lLm5hdkhlaWdodCA6IHRoZW1lLm5hdlNjcm9sbEhlaWdodH07XG4gIGJveC1zaGFkb3c6ICR7KHByb3BzKSA9PlxuICAgIHByb3BzLnNjcm9sbERpcmVjdGlvbiA9PT0gXCJ1cFwiXG4gICAgICA/IGAwIDEwcHggMzBweCAtMTBweCAke2NvbG9ycy5uYXZTaGFkb3d9YFxuICAgICAgOiBcIm5vbmVcIn07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWShcbiAgICAkeyhwcm9wcykgPT5cbiAgICAgIHByb3BzLnNjcm9sbERpcmVjdGlvbiA9PT0gXCJkb3duXCIgPyBgLSR7dGhlbWUubmF2U2Nyb2xsSGVpZ2h0fWAgOiBcIjBweFwifVxuICApO1xuICAke21lZGlhLmRlc2t0b3BgcGFkZGluZzogMCA0MHB4O2B9O1xuICAke21lZGlhLnRhYmxldGBwYWRkaW5nOiAwIDI1cHg7YH07XG5gO1xuY29uc3QgU3R5bGVkTmF2ID0gc3R5bGVkLm5hdmBcbiAgJHttaXhpbnMuZmxleEJldHdlZW59O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogJHtjb2xvcnMubGlnaHRlc3RTbGF0ZX07XG4gIGZvbnQtZmFtaWx5OiAke2ZvbnRzLkpldEJyYWluc01vbm99O1xuICBjb3VudGVyLXJlc2V0OiBpdGVtIDA7XG4gIHotaW5kZXg6IDEyO1xuYDtcbmNvbnN0IFN0eWxlZExvZ28gPSBzdHlsZWQuZGl2YFxuICAke21peGlucy5mbGV4Q2VudGVyfTtcbiAgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICAgIHdpZHRoOiA0MnB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgc3ZnIHtcbiAgICAgICAgZmlsbDogJHtjb2xvcnMudHJhbnNCbHVlfTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3ZnIHtcbiAgICAgIGZpbGw6IG5vbmU7XG4gICAgICB0cmFuc2l0aW9uOiAke3RoZW1lLnRyYW5zaXRpb259O1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxuICB9XG5gO1xuY29uc3QgU3R5bGVkSGFtYnVyZ2VyID0gc3R5bGVkLmRpdmBcbiAgJHttaXhpbnMuZmxleENlbnRlcn07XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBtYXJnaW46IDAgLTEycHggMCAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCBmaWx0ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogbm9uZTtcbiAgJHttZWRpYS50YWJsZXRgZGlzcGxheTogZmxleDtgfTtcbmA7XG5jb25zdCBTdHlsZWRIYW1idXJnZXJCb3ggPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6ICR7dGhlbWUuaGFtYnVyZ2VyV2lkdGh9cHg7XG4gIGhlaWdodDogMjRweDtcbmA7XG5jb25zdCBTdHlsZWRIYW1idXJnZXJJbm5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAke3RoZW1lLmhhbWJ1cmdlcldpZHRofXB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5ib3JkZXJSYWRpdXN9O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjJzO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tZGVsYXk6ICR7KHByb3BzKSA9PiAocHJvcHMubWVudU9wZW4gPyBgMC4xMnNgIDogYDBzYCl9O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgkeyhwcm9wcykgPT4gKHByb3BzLm1lbnVPcGVuID8gYDIyNWRlZ2AgOiBgMGRlZ2ApfSk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoXG4gICAgJHsocHJvcHMpID0+XG4gICAgICBwcm9wcy5tZW51T3BlbiA/IGAwLjIxNSwgMC42MSwgMC4zNTUsIDFgIDogYDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOWB9XG4gICk7XG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAke3RoZW1lLmhhbWJ1cmdlcldpZHRofXB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgJjpiZWZvcmUge1xuICAgIHdpZHRoOiAkeyhwcm9wcykgPT4gKHByb3BzLm1lbnVPcGVuID8gYDEwMCVgIDogYDEyMCVgKX07XG4gICAgdG9wOiAkeyhwcm9wcykgPT4gKHByb3BzLm1lbnVPcGVuID8gYDBgIDogYC0xMHB4YCl9O1xuICAgIG9wYWNpdHk6ICR7KHByb3BzKSA9PiAocHJvcHMubWVudU9wZW4gPyAwIDogMSl9O1xuICAgIHRyYW5zaXRpb246ICR7KHByb3BzKSA9PlxuICAgICAgcHJvcHMubWVudU9wZW4gPyB0aGVtZS5oYW1CZWZvcmVBY3RpdmUgOiB0aGVtZS5oYW1CZWZvcmV9O1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIHdpZHRoOiAkeyhwcm9wcykgPT4gKHByb3BzLm1lbnVPcGVuID8gYDEwMCVgIDogYDgwJWApfTtcbiAgICBib3R0b206ICR7KHByb3BzKSA9PiAocHJvcHMubWVudU9wZW4gPyBgMGAgOiBgLTEwcHhgKX07XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoJHsocHJvcHMpID0+IChwcm9wcy5tZW51T3BlbiA/IGAtOTBkZWdgIDogYDBgKX0pO1xuICAgIHRyYW5zaXRpb246ICR7KHByb3BzKSA9PlxuICAgICAgcHJvcHMubWVudU9wZW4gPyB0aGVtZS5oYW1BZnRlckFjdGl2ZSA6IHRoZW1lLmhhbUFmdGVyfTtcbiAgfVxuYDtcbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAke21lZGlhLnRhYmxldGBkaXNwbGF5OiBub25lO2B9O1xuYDtcbmNvbnN0IFN0eWxlZExpc3QgPSBzdHlsZWQub2xgXG4gICR7bWl4aW5zLmZsZXhCZXR3ZWVufTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuYDtcbmNvbnN0IFN0eWxlZExpc3RJdGVtID0gc3R5bGVkLmxpYFxuICBtYXJnaW46IDAgMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6ICR7Zm9udFNpemVzLnNtaXNofTtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGl0ZW0gMTtcbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiMFwiIGNvdW50ZXIoaXRlbSkgXCIuXCI7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZXMueHN9O1xuICB9XG5gO1xuY29uc3QgU3R5bGVkTGlzdExpbmsgPSBzdHlsZWQuYWBcbiAgcGFkZGluZzogMTJweCAxMHB4O1xuYDtcbmNvbnN0IFN0eWxlZFJlc3VtZUJ1dHRvbiA9IHN0eWxlZC5hYFxuICAke21peGlucy5zbWFsbEJ1dHRvbn07XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6ICR7Zm9udFNpemVzLnNtaXNofTtcbmA7XG5cbmNvbnN0IERFTFRBID0gNTtcblxuY2xhc3MgTmF2IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgaXNNb3VudGVkOiAhdGhpcy5wcm9wcy5pc0hvbWUsXG4gICAgbWVudU9wZW46IGZhbHNlLFxuICAgIHNjcm9sbERpcmVjdGlvbjogXCJub25lXCIsXG4gICAgbGFzdFNjcm9sbFRvcDogMCxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTW91bnRlZDogdHJ1ZSB9LCAoKSA9PiB7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT5cbiAgICAgICAgICAgIHRocm90dGxlKHRoaXMuaGFuZGxlU2Nyb2xsKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PlxuICAgICAgICAgICAgdGhyb3R0bGUodGhpcy5oYW5kbGVSZXNpemUoKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4gdGhpcy5oYW5kbGVLZXlEb3duKGUpKTtcbiAgICAgICAgfSksXG4gICAgICAxMDBcbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4gdGhpcy5oYW5kbGVTY3JvbGwoKSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gdGhpcy5oYW5kbGVSZXNpemUoKSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB0aGlzLmhhbmRsZUtleWRvd24oZSkpO1xuICB9XG5cbiAgdG9vZ2xlTWVudSA9ICgpID0+IHtcbiAgICAvL2NvbnNvbGUubG9nKFwid29ya2luZ1wiKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVudU9wZW46ICF0aGlzLnN0YXRlLm1lbnVPcGVuIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGlzTW91bnRlZCwgbWVudU9wZW4sIHNjcm9sbERpcmVjdGlvbiwgbGFzdFNjcm9sbFRvcCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBmcm9tVG9wID0gd2luZG93LnNjcm9sbFk7XG5cbiAgICBpZiAoIWlzTW91bnRlZCB8fCBNYXRoLmFicyhsYXN0U2Nyb2xsVG9wIC0gZnJvbVRvcCkgPD0gREVMVEEgfHwgbWVudU9wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZnJvbVRvcCA8IERFTFRBKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2Nyb2xsRGlyZWN0aW9uOiBcIm5vbmVcIiB9KTtcbiAgICB9IGVsc2UgaWYgKGZyb21Ub3AgPiBsYXN0U2Nyb2xsVG9wICYmIGZyb21Ub3AgPiBuYXZIZWlnaHQpIHtcbiAgICAgIGlmIChzY3JvbGxEaXJlY3Rpb24gIT09IFwiZG93blwiKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzY3JvbGxEaXJlY3Rpb246IFwiZG93blwiIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZnJvbVRvcCArIHdpbmRvdy5pbm5lckhlaWdodCA8IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICBpZiAoc2Nyb2xsRGlyZWN0aW9uICE9PSBcInVwXCIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNjcm9sbERpcmVjdGlvbjogXCJ1cFwiIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsYXN0U2Nyb2xsVG9wOiBmcm9tVG9wIH0pO1xuICB9O1xuXG4gIGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjggJiYgdGhpcy5zdGF0ZS5tZW51T3Blbikge1xuICAgICAgdGhpcy50b29nbGVNZW51KCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5tZW51T3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlLndoaWNoID09PSAyNyB8fCBlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy50b29nbGVNZW51KCk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzTW91bnRlZCwgbWVudU9wZW4sIHNjcm9sbERpcmVjdGlvbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGlzSG9tZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0aW1lb3V0ID0gaXNIb21lID8gbG9hZGVyRGVsYXkgOiAwO1xuICAgIGNvbnN0IGZhZGVDbGFzcyA9IGlzSG9tZSA/IFwiZmFkZVwiIDogXCJcIjtcbiAgICBjb25zdCBmYWRlRG93bkNsYXNzID0gaXNIb21lID8gXCJmYWRlZG93blwiIDogXCJcIjtcbiAgICAvL2NvbnNvbGUubG9nKGlzTW91bnRlZCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRDb250YWluZXIgc2Nyb2xsRGlyZWN0aW9uPXtzY3JvbGxEaXJlY3Rpb259PlxuICAgICAgICA8U3R5bGVkTmF2PlxuICAgICAgICAgIDxUcmFuc2l0aW9uR3JvdXAgY29tcG9uZW50PXtudWxsfT5cbiAgICAgICAgICAgIHtpc01vdW50ZWQgJiYgKFxuICAgICAgICAgICAgICA8Q1NTVHJhbnNpdGlvbiBjbGFzc05hbWVzPXtmYWRlQ2xhc3N9IHRpbWVvdXQ9e3RpbWVvdXR9PlxuICAgICAgICAgICAgICAgIDxTdHlsZWRMb2dvIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvI2hlcm9cIiBhcmlhLWxhYmVsPVwiaG9tZVwiPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbkxvZ28gLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZExvZ28+XG4gICAgICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UcmFuc2l0aW9uR3JvdXA+XG5cbiAgICAgICAgICA8VHJhbnNpdGlvbkdyb3VwIGNvbXBvbmVudD17bnVsbH0+XG4gICAgICAgICAgICB7aXNNb3VudGVkICYmIChcbiAgICAgICAgICAgICAgPENTU1RyYW5zaXRpb24gY2xhc3NOYW1lcz17ZmFkZUNsYXNzfSB0aW1lb3V0PXt0aW1lb3V0fT5cbiAgICAgICAgICAgICAgICA8U3R5bGVkSGFtYnVyZ2VyIG9uQ2xpY2s9e3RoaXMudG9vZ2xlTWVudX0+XG4gICAgICAgICAgICAgICAgICA8U3R5bGVkSGFtYnVyZ2VyQm94PlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkSGFtYnVyZ2VySW5uZXIgbWVudU9wZW49e21lbnVPcGVufSAvPlxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRIYW1idXJnZXJCb3g+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRIYW1idXJnZXI+XG4gICAgICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UcmFuc2l0aW9uR3JvdXA+XG5cbiAgICAgICAgICA8U3R5bGVkTGluaz5cbiAgICAgICAgICAgIDxTdHlsZWRMaXN0PlxuICAgICAgICAgICAgICA8VHJhbnNpdGlvbkdyb3VwIGNvbXBvbmVudD17bnVsbH0+XG4gICAgICAgICAgICAgICAge2lzTW91bnRlZCAmJlxuICAgICAgICAgICAgICAgICAgbmF2TGlua3MgJiZcbiAgICAgICAgICAgICAgICAgIG5hdkxpbmtzLm1hcCgoeyB1cmwsIG5hbWUgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVzPXtmYWRlRG93bkNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ9e3RpbWVvdXR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkTGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zaXRpb25EZWxheTogYCR7aXNIb21lID8gaSAqIDEwMCA6IDB9bXNgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZExpc3RMaW5rIGhyZWY9e3VybH0+e25hbWV9PC9TdHlsZWRMaXN0TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uR3JvdXA+XG4gICAgICAgICAgICA8L1N0eWxlZExpc3Q+XG5cbiAgICAgICAgICAgIDxUcmFuc2l0aW9uR3JvdXAgY29tcG9uZW50PXtudWxsfT5cbiAgICAgICAgICAgICAge2lzTW91bnRlZCAmJiAoXG4gICAgICAgICAgICAgICAgPENTU1RyYW5zaXRpb24gY2xhc3NOYW1lcz17ZmFkZURvd25DbGFzc30gdGltZW91dD17dGltZW91dH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkRlbGF5OiBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSG9tZSA/IG5hdkxpbmtzLmxlbmd0aCAqIDEwMCA6IDBcbiAgICAgICAgICAgICAgICAgICAgICB9bXNgLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkUmVzdW1lQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9SZXN1bWUucGRmXCJcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgUmVzdW1lXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkUmVzdW1lQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uR3JvdXA+XG4gICAgICAgICAgPC9TdHlsZWRMaW5rPlxuICAgICAgICA8L1N0eWxlZE5hdj5cblxuICAgICAgICA8TWVudSBtZW51T3Blbj17bWVudU9wZW59IHRvb2dsZU1lbnU9e3RoaXMudG9vZ2xlTWVudX0gLz5cbiAgICAgIDwvU3R5bGVkQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuTmF2LnByb3BUeXBlcyA9IHtcbiAgaXNIb21lOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgc3JDb25maWcsIGdpdGh1YiB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG4vLyBpbXBvcnQgc3IgZnJvbSBcIi4uLy4uL3V0aWxzL3NyXCI7XG5pbXBvcnQgRmFkZSBmcm9tIFwicmVhY3QtcmV2ZWFsL0ZhZGVcIjtcblxuaW1wb3J0IHsgdGhlbWUsIG1peGlucywgbWVkaWEsIFNlY3Rpb24sIEhlYWRpbmcgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL2luZGV4XCI7XG5jb25zdCB7IGNvbG9ycywgZm9udFNpemVzLCBmb250cyB9ID0gdGhlbWU7XG5cbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZChTZWN0aW9uKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcbmNvbnN0IFN0eWxlZEZsZXhDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAke21peGlucy5mbGV4QmV0d2Vlbn07XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAke21lZGlhLnRhYmxldGBkaXNwbGF5OiBibG9jaztgfTtcbmA7XG5jb25zdCBTdHlsZWRDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDYwJTtcbiAgbWF4LXdpZHRoOiA3MjBweDtcbiAgJHttZWRpYS50YWJsZXRgd2lkdGg6IDEwMCU7YH07XG4gIGEge1xuICAgICR7bWl4aW5zLmlubGluZUxpbmt9O1xuICB9XG5gO1xuXG5jb25zdCBTa2lsbHNXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbmA7XG5cbmNvbnN0IFNraWxsc0NvbnRhaW5lciA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDE0MHB4LCAyMDBweCkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBtYXJnaW46IDIwcHggMCAwIDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5gO1xuXG5jb25zdCBTa2lsbEhlYWRpbmcgPSBzdHlsZWQubGlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gIGZvbnQtZmFtaWx5OiAke2ZvbnRzLkpldEJyYWluc01vbm99O1xuICBmb250LXNpemU6ICR7Zm9udFNpemVzLm1kfTtcbiAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuYDtcblxuY29uc3QgU2tpbGwgPSBzdHlsZWQubGlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmb250LWZhbWlseTogJHtmb250cy5KZXRCcmFpbnNNb25vfTtcbiAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5zbWlzaH07XG4gIGNvbG9yOiAke2NvbG9ycy5zbGF0ZX07XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIuKWuVwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibHVlfTtcbiAgICBmb250LXNpemU6ICR7Zm9udFNpemVzLnNtfTtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgfVxuYDtcbmNvbnN0IFN0eWxlZFBpYyA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQwJTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICR7bWVkaWEudGFibGV0YG1hcmdpbjogNjBweCBhdXRvIDA7YH07XG4gICR7bWVkaWEucGhhYmxldGB3aWR0aDogNzAlO2B9O1xuICBhIHtcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgfVxuICB9XG5gO1xuY29uc3QgU3R5bGVkQXZhdGFyID0gc3R5bGVkLmltZ2BcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG5cbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgY29udHJhc3QoMSk7XG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuYm9yZGVyUmFkaXVzfTtcbiAgdHJhbnNpdGlvbjogJHt0aGVtZS50cmFuc2l0aW9ufTtcbmA7XG5jb25zdCBTdHlsZWRBdmF0YXJMaW5rID0gc3R5bGVkLmFgXG4gICR7bWl4aW5zLmJveFNoYWRvd307XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuYm9yZGVyUmFkaXVzfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYmx1ZX07XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDE1cHg7XG4gICAgICBsZWZ0OiAxNXB4O1xuICAgIH1cbiAgICAke1N0eWxlZEF2YXRhcn0ge1xuICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgICB9XG4gIH1cbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLmJvcmRlclJhZGl1c307XG4gICAgdHJhbnNpdGlvbjogJHt0aGVtZS50cmFuc2l0aW9ufTtcbiAgfVxuICAmOmJlZm9yZSB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmRhcmtOYXZ5fTtcbiAgICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICR7Y29sb3JzLmJsdWV9O1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG5gO1xuXG5jb25zdCBBYm91dCA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSxcbiAgICBhdmF0YXIsXG4gICAgbGFuZ3VhZ2VzLFxuICAgIGZyYW1ld29ya3MsXG4gICAgdG9vbHMsXG4gICAgY29udGVudEh0bWwsXG4gIH0gPSBkYXRhLmZyb250bWF0dGVyO1xuICAvLyBjb25zdCByZXZlYWxDb250YWluZXIgPSB1c2VSZWYobnVsbCk7XG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHNyLnJldmVhbChyZXZlYWxDb250YWluZXIuY3VycmVudCwgc3JDb25maWcoKSksIFtdKTtcbiAgLy8gICBjb25zb2xlLmxvZyhhdmF0YXIpO1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRDb250YWluZXIgaWQ9XCJhYm91dFwiPlxuICAgICAgPEZhZGUgYm90dG9tPlxuICAgICAgICA8SGVhZGluZz57dGl0bGV9PC9IZWFkaW5nPlxuICAgICAgPC9GYWRlPlxuXG4gICAgICA8U3R5bGVkRmxleENvbnRhaW5lcj5cbiAgICAgICAgPFN0eWxlZENvbnRlbnQ+XG4gICAgICAgICAgPEZhZGUgYm90dG9tPlxuICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnRIdG1sIH19IC8+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgIDxGYWRlIGJvdHRvbT5cbiAgICAgICAgICAgIDxTa2lsbHNXcmFwcGVyPlxuICAgICAgICAgICAgICA8U2tpbGxzQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxTa2lsbEhlYWRpbmc+e1wiTEFOR1VBR0VTXCJ9PC9Ta2lsbEhlYWRpbmc+XG4gICAgICAgICAgICAgICAge2xhbmd1YWdlcyAmJlxuICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VzLm1hcCgoc2tpbGwsIGkpID0+IDxTa2lsbCBrZXk9e2l9Pntza2lsbH08L1NraWxsPil9XG4gICAgICAgICAgICAgIDwvU2tpbGxzQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8U2tpbGxzQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxTa2lsbEhlYWRpbmc+e1wiRlJBTUVXT1JLU1wifTwvU2tpbGxIZWFkaW5nPlxuICAgICAgICAgICAgICAgIHtmcmFtZXdvcmtzICYmXG4gICAgICAgICAgICAgICAgICBmcmFtZXdvcmtzLm1hcCgoc2tpbGwsIGkpID0+IDxTa2lsbCBrZXk9e2l9Pntza2lsbH08L1NraWxsPil9XG4gICAgICAgICAgICAgIDwvU2tpbGxzQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8U2tpbGxzQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxTa2lsbEhlYWRpbmc+e1wiVE9PTFNcIn08L1NraWxsSGVhZGluZz5cbiAgICAgICAgICAgICAgICB7dG9vbHMgJiZcbiAgICAgICAgICAgICAgICAgIHRvb2xzLm1hcCgoc2tpbGwsIGkpID0+IDxTa2lsbCBrZXk9e2l9Pntza2lsbH08L1NraWxsPil9XG4gICAgICAgICAgICAgIDwvU2tpbGxzQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9Ta2lsbHNXcmFwcGVyPlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgPC9TdHlsZWRDb250ZW50PlxuXG4gICAgICAgIDxTdHlsZWRQaWM+XG4gICAgICAgICAgPEZhZGUgYm90dG9tPlxuICAgICAgICAgICAgPFN0eWxlZEF2YXRhckxpbmsgaHJlZj17Z2l0aHVifT5cbiAgICAgICAgICAgICAgPFN0eWxlZEF2YXRhciBzcmM9e2F2YXRhcn0gYWx0PXtcIkF2YXRhclwifT48L1N0eWxlZEF2YXRhcj5cbiAgICAgICAgICAgIDwvU3R5bGVkQXZhdGFyTGluaz5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDwvU3R5bGVkUGljPlxuICAgICAgPC9TdHlsZWRGbGV4Q29udGFpbmVyPlxuICAgIDwvU3R5bGVkQ29udGFpbmVyPlxuICApO1xufTtcblxuQWJvdXQucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IGVtYWlsIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHRoZW1lLCBtaXhpbnMsIG1lZGlhLCBTZWN0aW9uLCBIZWFkaW5nIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9pbmRleFwiO1xuaW1wb3J0IEZhZGUgZnJvbSBcInJlYWN0LXJldmVhbC9GYWRlXCI7XG5jb25zdCB7IGNvbG9ycywgZm9udFNpemVzLCBmb250cyB9ID0gdGhlbWU7XG5cbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZChTZWN0aW9uKWBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0byAxMDBweDtcbiAgYSB7XG4gICAgJHttaXhpbnMuaW5saW5lTGlua307XG4gIH1cbmA7XG5jb25zdCBTdHlsZWRIZWFkaW5nID0gc3R5bGVkKEhlYWRpbmcpYFxuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICBmb250LXNpemU6ICR7Zm9udFNpemVzLm1kfTtcbiAgZm9udC1mYW1pbHk6ICR7Zm9udHMuSmV0QnJhaW5zTW9ub307XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAke21lZGlhLmRlc2t0b3BgZm9udC1zaXplOiAke2ZvbnRTaXplcy5zbX07YH07XG4gICY6YmVmb3JlIHtcbiAgICBib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5zbX07XG4gICAgJHttZWRpYS5kZXNrdG9wYGZvbnQtc2l6ZTogJHtmb250U2l6ZXMuc21pc2h9O2B9O1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5jb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5oNGBcbiAgbWFyZ2luOiAwIDAgMjBweDtcbiAgZm9udC1zaXplOiA2MHB4O1xuICAke21lZGlhLmRlc2t0b3BgZm9udC1zaXplOiA1MHB4O2B9O1xuICAke21lZGlhLnRhYmxldGBmb250LXNpemU6IDQwcHg7YH07XG5gO1xuY29uc3QgU3R5bGVkRW1haWxMaW5rID0gc3R5bGVkLmFgXG4gICR7bWl4aW5zLmJpZ0J1dHRvbn07XG4gIG1hcmdpbi10b3A6IDUwcHg7XG5gO1xuXG5jb25zdCBDb250YWN0ID0gKGRhdGEpID0+IHtcbiAgY29uc3QgZnJvbnRtYXR0ZXIgPSBkYXRhLmZyb250bWF0dGVyO1xuICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRDb250YWluZXIgaWQ9XCJjb250YWN0XCI+XG4gICAgICA8RmFkZSBib3R0b20+XG4gICAgICAgIDxTdHlsZWRIZWFkaW5nPntcIkxvdmVkIG15IHdvcms/XCJ9PC9TdHlsZWRIZWFkaW5nPlxuICAgICAgICA8U3R5bGVkVGl0bGU+e2Zyb250bWF0dGVyLnRpdGxlfTwvU3R5bGVkVGl0bGU+XG4gICAgICA8L0ZhZGU+XG4gICAgICA8RmFkZSBib3R0b20+XG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBmcm9udG1hdHRlci5jb250ZW50SHRtbCB9fSAvPlxuICAgICAgICA8U3R5bGVkRW1haWxMaW5rIGhyZWY9e2BtYWlsdG86JHtlbWFpbH1gfT5cbiAgICAgICAgICB7ZnJvbnRtYXR0ZXIuYnV0dG9uVGV4dH1cbiAgICAgICAgPC9TdHlsZWRFbWFpbExpbms+XG4gICAgICA8L0ZhZGU+XG4gICAgPC9TdHlsZWRDb250YWluZXI+XG4gICk7XG59O1xuXG5Db250YWN0LnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgRmFkZSBmcm9tIFwicmVhY3QtcmV2ZWFsL0ZhZGVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB0aGVtZSwgbWl4aW5zLCBtZWRpYSwgU2VjdGlvbiwgSGVhZGluZyB9IGZyb20gXCIuLi8uLi9zdHlsZXMvaW5kZXhcIjtcbmNvbnN0IHsgY29sb3JzLCBmb250U2l6ZXMsIGZvbnRzIH0gPSB0aGVtZTtcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkKFNlY3Rpb24pYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogODAwcHg7XG5gO1xuY29uc3QgU3R5bGVkVGFicyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICR7bWVkaWEudGhvbmVgXG4gICAgZGlzcGxheTogYmxvY2s7XG4gIGB9O1xuYDtcbmNvbnN0IFN0eWxlZFRhYkxpc3QgPSBzdHlsZWQudWxgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgei1pbmRleDogMztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICR7bWVkaWEudGhvbmVgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMTAwcHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgYH07XG4gICR7bWVkaWEucGhhYmxldGBcbiAgICB3aWR0aDogY2FsYygxMDAlICsgNTBweCk7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICBgfTtcblxuICBsaSB7XG4gICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICR7bWVkaWEudGhvbmVgXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgYH07XG4gICAgICAke21lZGlhLnBoYWJsZXRgXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgICAgYH07XG4gICAgfVxuICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICR7bWVkaWEudGhvbmVgXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgICBgfTtcbiAgICAgICR7bWVkaWEucGhhYmxldGBcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAgIGB9O1xuICAgIH1cbiAgfVxuYDtcbmNvbnN0IFN0eWxlZFRhYkJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICR7bWl4aW5zLmxpbmt9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogJHt0aGVtZS50YWJIZWlnaHR9cHg7XG4gIHBhZGRpbmc6IDAgMjBweCAycHg7XG4gIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgJHtjb2xvcnMubGlnaHROYXZ5fTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1mYW1pbHk6ICR7Zm9udHMuSmV0QnJhaW5zTW9ub307XG4gIGZvbnQtc2l6ZTogJHtmb250U2l6ZXMuc21pc2h9O1xuICBjb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy5pc0FjdGl2ZSA/IGNvbG9ycy5ibHVlIDogY29sb3JzLnNsYXRlKX07XG4gICR7bWVkaWEudGFibGV0YHBhZGRpbmc6IDAgMTVweCAycHg7YH07XG4gICR7bWVkaWEudGhvbmVgXG4gICAgJHttaXhpbnMuZmxleENlbnRlcn07XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItbGVmdDogMDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHtjb2xvcnMubGlnaHRlc3ROYXZ5fTtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICBgfTtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMubGlnaHROYXZ5fTtcbiAgfVxuYDtcbmNvbnN0IFN0eWxlZEhpZ2hsaWdodCA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogJHtjb2xvcnMuYmx1ZX07XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogJHt0aGVtZS50YWJIZWlnaHR9cHg7XG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuYm9yZGVyUmFkaXVzfTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XG4gIHotaW5kZXg6IDEwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoXG4gICAgJHsocHJvcHMpID0+XG4gICAgICBwcm9wcy5hY3RpdmVUYWJJZCA+IDAgPyBwcm9wcy5hY3RpdmVUYWJJZCAqIHRoZW1lLnRhYkhlaWdodCA6IDB9cHhcbiAgKTtcbiAgJHttZWRpYS50aG9uZWBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6ICR7dGhlbWUudGFiV2lkdGh9cHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXG4gICAgICAkeyhwcm9wcykgPT5cbiAgICAgICAgcHJvcHMuYWN0aXZlVGFiSWQgPiAwID8gcHJvcHMuYWN0aXZlVGFiSWQgKiB0aGVtZS50YWJXaWR0aCA6IDB9cHhcbiAgICApO1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBgfTtcbiAgJHttZWRpYS5waGFibGV0YFxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBgfTtcbmA7XG5jb25zdCBTdHlsZWRUYWJDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAke21lZGlhLnRhYmxldGBwYWRkaW5nLWxlZnQ6IDIwcHg7YH07XG4gICR7bWVkaWEudGhvbmVgcGFkZGluZy1sZWZ0OiAwO2B9O1xuXG4gIHVsIHtcbiAgICAke21peGlucy5mYW5jeUxpc3R9O1xuICB9XG4gIGEge1xuICAgICR7bWl4aW5zLmlubGluZUxpbmt9O1xuICB9XG5gO1xuY29uc3QgRWR1Y2F0aW9uVGl0bGUgPSBzdHlsZWQuaDRgXG4gIGNvbG9yOiAke2NvbG9ycy5saWdodGVzdFNsYXRlfTtcbiAgZm9udC1zaXplOiAke2ZvbnRTaXplcy54eGx9O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG5gO1xuY29uc3QgRWR1Y2F0aW9uUGxhY2UgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuYDtcbmNvbnN0IEVkdWNhdGlvbkRldGFpbHMgPSBzdHlsZWQuaDVgXG4gIGZvbnQtZmFtaWx5OiAke2ZvbnRzLkpldEJyYWluc01vbm99O1xuICBmb250LXNpemU6ICR7Zm9udFNpemVzLnNtaXNofTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgY29sb3I6ICR7Y29sb3JzLmxpZ2h0U2xhdGV9O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBzdmcge1xuICAgIHdpZHRoOiAxNXB4O1xuICB9XG5gO1xuXG5jb25zdCBFZHVjYXRpb24gPSAoZGF0YSkgPT4ge1xuICBjb25zdCBbYWN0aXZlVGFiSWQsIHNldEFjdGl2ZVRhYklkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdGFiRm9jdXMsIHNldFRhYkZvY3VzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCB0YWJzID0gdXNlUmVmKFtdKTtcblxuICBjb25zdCBmb2N1c1RhYiA9ICgpID0+IHtcbiAgICBpZiAodGFicy5jdXJyZW50W3RhYkZvY3VzXSkge1xuICAgICAgdGFicy5jdXJyZW50W3RhYkZvY3VzXS5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGFiRm9jdXMgPj0gdGFicy5jdXJyZW50Lmxlbmd0aCkge1xuICAgICAgICBzZXRUYWJGb2N1cygwKTtcbiAgICAgIH1cbiAgICAgIGlmICh0YWJGb2N1cyA8IDApIHtcbiAgICAgICAgc2V0VGFiRm9jdXModGFicy5jdXJyZW50Lmxlbmd0aCAtIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4gZm9jdXNUYWIoKSwgW3RhYkZvY3VzXSk7XG4gIGNvbnN0IG9uS2V5UHJlc3NlZCA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Y29kZSA9PT0gMzggfHwgZS5rZXljb2RlID09PSA0MCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgICAgLy8gTW92ZSBkb3duXG4gICAgICAgIHNldFRhYkZvY3VzKHRhYkZvY3VzICsgMSk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHtcbiAgICAgICAgLy8gTW92ZSB1cFxuICAgICAgICBzZXRUYWJGb2N1cyh0YWJGb2N1cyAtIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgZnJvbnRtYXR0ZXIgPSBkYXRhLmZyb250bWF0dGVyO1xuICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRDb250YWluZXIgaWQ9XCJjb2xsZWdlXCI+XG4gICAgICA8RmFkZSBib3R0b20+XG4gICAgICAgIDxIZWFkaW5nPldoZXJlIEkmYXBvczt2ZSBMZWFybmVkPC9IZWFkaW5nPlxuICAgICAgPC9GYWRlPlxuICAgICAgPEZhZGUgYm90dG9tPlxuICAgICAgICA8U3R5bGVkVGFicz5cbiAgICAgICAgICA8U3R5bGVkVGFiTGlzdFxuICAgICAgICAgICAgcm9sZT1cInRhYmxpc3RcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVkdWNhdGlvbiB0YWJzXCJcbiAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IG9uS2V5UHJlc3NlZChlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZnJvbnRtYXR0ZXIgJiZcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZnJvbnRtYXR0ZXIpLm1hcCgoa2V5LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0YWcgfSA9IGZyb250bWF0dGVyW2tleV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGFiQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU9e2FjdGl2ZVRhYklkID09PSBpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYklkKGkpfVxuICAgICAgICAgICAgICAgICAgICAgIHJlZj17KGVsKSA9PiAodGFicy5jdXJyZW50W2ldID0gZWwpfVxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtgdGFiLSR7aX1gfVxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJcIlxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9e2FjdGl2ZVRhYklkID09PSBpID8gXCIwXCIgOiBcIi0xXCJ9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGFnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJCdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPFN0eWxlZEhpZ2hsaWdodCBhY3RpdmVUYWJJZD17YWN0aXZlVGFiSWR9IC8+XG4gICAgICAgICAgPC9TdHlsZWRUYWJMaXN0PlxuICAgICAgICAgIHtmcm9udG1hdHRlciAmJlxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZnJvbnRtYXR0ZXIpLm1hcCgoa2V5LCBpKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdGl0bGUsIHNjaG9vbCwgcmFuZ2UsIGNvbnRlbnRIdG1sIH0gPSBmcm9udG1hdHRlcltrZXldO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJDb250ZW50XG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICBpc0FjdGl2ZT17YWN0aXZlVGFiSWQgPT09IGl9XG4gICAgICAgICAgICAgICAgICBpZD17YHBhbmVsLSR7aX1gfVxuICAgICAgICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT17YHRhYi0ke2l9YH1cbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXthY3RpdmVUYWJJZCA9PT0gaSA/IFwiMFwiIDogXCItMVwifVxuICAgICAgICAgICAgICAgICAgaGlkZGVuPXthY3RpdmVUYWJJZCAhPT0gaX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RWR1Y2F0aW9uVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxFZHVjYXRpb25QbGFjZT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mbmJzcDtAJm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzY2hvb2x9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0VkdWNhdGlvblBsYWNlPlxuICAgICAgICAgICAgICAgICAgPC9FZHVjYXRpb25UaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxFZHVjYXRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cmFuZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9FZHVjYXRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnRIdG1sIH19IC8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJDb250ZW50PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvU3R5bGVkVGFicz5cbiAgICAgIDwvRmFkZT5cbiAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkVkdWNhdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZHVjYXRpb247XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBGYWRlIGZyb20gXCJyZWFjdC1yZXZlYWwvRmFkZVwiO1xuaW1wb3J0IHsgRm9ybWF0dGVkSWNvbiB9IGZyb20gXCIuLi9pY29uc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHRoZW1lLCBtaXhpbnMsIG1lZGlhLCBTZWN0aW9uLCBIZWFkaW5nIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9pbmRleFwiO1xuY29uc3QgeyBjb2xvcnMsIGZvbnRTaXplcywgZm9udHMgfSA9IHRoZW1lO1xuXG5jb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQoU2VjdGlvbilgXG4gICR7bWl4aW5zLmZsZXhDZW50ZXJ9O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbmA7XG5jb25zdCBTdHlsZWRDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBncmlkLWNvbHVtbjogMSAvIDc7XG4gIGdyaWQtcm93OiAxIC8gLTE7XG4gICR7bWVkaWEudGhvbmVgXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHggMzBweDtcbiAgICB6LWluZGV4OiA1O1xuICBgfTtcbiAgJHttZWRpYS5waGFibGV0YHBhZGRpbmc6IDMwcHggMjVweCAyMHB4O2B9O1xuYDtcbmNvbnN0IFN0eWxlZExhYmVsID0gc3R5bGVkLmg0YFxuICBmb250LXNpemU6ICR7Zm9udFNpemVzLnNtaXNofTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICBmb250LWZhbWlseTogJHtmb250cy5KZXRCcmFpbnNNb25vfTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy10b3A6IDA7XG5gO1xuY29uc3QgU3R5bGVkUHJvamVjdE5hbWUgPSBzdHlsZWQuaDVgXG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luOiAwIDAgMjBweDtcbiAgY29sb3I6ICR7Y29sb3JzLmxpZ2h0ZXN0U2xhdGV9O1xuICAke21lZGlhLnRhYmxldGBmb250LXNpemU6IDI0cHg7YH07XG4gICR7bWVkaWEudGhvbmVgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtgfTtcbiAgYSB7XG4gICAgJHttZWRpYS50YWJsZXRgZGlzcGxheTogYmxvY2s7YH07XG4gIH1cbmA7XG5jb25zdCBTdHlsZWREZXNjcmlwdGlvbiA9IHN0eWxlZC5kaXZgXG4gICR7bWl4aW5zLmJveFNoYWRvd307XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMubGlnaHROYXZ5fTtcbiAgY29sb3I6ICR7Y29sb3JzLmxpZ2h0U2xhdGV9O1xuICBmb250LXNpemU6ICR7Zm9udFNpemVzLmxnfTtcbiAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5ib3JkZXJSYWRpdXN9O1xuICAke21lZGlhLnRob25lYFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgICY6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gIGB9O1xuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgYSB7XG4gICAgJHttaXhpbnMuaW5saW5lTGlua307XG4gIH1cbmA7XG5jb25zdCBTdHlsZWRUZWNoTGlzdCA9IHN0eWxlZC51bGBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMjVweCAwIDEwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgbGkge1xuICAgIGZvbnQtZmFtaWx5OiAke2ZvbnRzLkpldEJyYWluc01vbm99O1xuICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZXMuc21pc2h9O1xuICAgIGNvbG9yOiAke2NvbG9ycy5zbGF0ZX07XG4gICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLm1hcmdpbn07XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgICAke21lZGlhLnRob25lYFxuICAgICAgY29sb3I6ICR7Y29sb3JzLmxpZ2h0ZXN0U2xhdGV9O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGB9O1xuICB9XG5gO1xuY29uc3QgU3R5bGVkTGlua1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgY29sb3I6ICR7Y29sb3JzLmxpZ2h0ZXN0U2xhdGV9O1xuICBhIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHN2ZyB7XG4gICAgICB3aWR0aDogMjJweDtcbiAgICAgIGhlaWdodDogMjJweDtcbiAgICB9XG4gIH1cbmA7XG5jb25zdCBTdHlsZWRGZWF0dXJlZEltZyA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuYm9yZGVyUmFkaXVzfTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGNvbnRyYXN0KDEpIGJyaWdodG5lc3MoOTAlKTtcbiAgJHttZWRpYS50YWJsZXRgXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGNvbnRyYXN0KDEpIGJyaWdodG5lc3MoODAlKTtcbiAgYH07XG5gO1xuY29uc3QgU3R5bGVkSW1nQ29udGFpbmVyID0gc3R5bGVkLmFgXG4gICR7bWl4aW5zLmJveFNoYWRvd307XG4gIGdyaWQtY29sdW1uOiA2IC8gLTE7XG4gIGdyaWQtcm93OiAxIC8gLTE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYmx1ZX07XG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUucmFkaXVzICsgMX1weDtcbiAgdHJhbnNpdGlvbjogJHt0aGVtZS50cmFuc2l0aW9ufTtcbiAgJHttZWRpYS50YWJsZXRgaGVpZ2h0OiAxMDAlO2B9O1xuICAke21lZGlhLnRob25lYFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gICAgb3BhY2l0eTogMC4yNTtcbiAgYH07XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICY6YmVmb3JlLFxuICAgICR7U3R5bGVkRmVhdHVyZWRJbWd9IHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgZmlsdGVyOiBub25lO1xuICAgIH1cbiAgfVxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiAzO1xuICAgIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMubmF2eX07XG4gICAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcbiAgfVxuYDtcbmNvbnN0IFN0eWxlZFByb2plY3QgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMTBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAke21lZGlhLnRob25lYFxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gIGB9O1xuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAmOm50aC1vZi10eXBlKG9kZCkge1xuICAgICR7U3R5bGVkQ29udGVudH0ge1xuICAgICAgZ3JpZC1jb2x1bW46IDcgLyAtMTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgJHttZWRpYS50aG9uZWBcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICAgICAgcGFkZGluZzogNDBweCA0MHB4IDMwcHg7XG4gICAgICBgfTtcbiAgICAgICR7bWVkaWEucGhhYmxldGBwYWRkaW5nOiAzMHB4IDI1cHggMjBweDtgfTtcbiAgICB9XG4gICAgJHtTdHlsZWRUZWNoTGlzdH0ge1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGxpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUubWFyZ2lufTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgICAke1N0eWxlZExpbmtXcmFwcGVyfSB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICAgIH1cbiAgICAke1N0eWxlZEltZ0NvbnRhaW5lcn0ge1xuICAgICAgZ3JpZC1jb2x1bW46IDEgLyA4O1xuICAgICAgJHttZWRpYS50YWJsZXRgaGVpZ2h0OiAxMDAlO2B9O1xuICAgICAgJHttZWRpYS50aG9uZWBcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICAgICAgb3BhY2l0eTogMC4yNTtcbiAgICAgIGB9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgRmVhdHVyZWQgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBmcm9udG1hdHRlciA9IGRhdGEuZnJvbnRtYXR0ZXI7XG4gIC8vY29uc29sZS5sb2coZnJvbnRtYXR0ZXIpO1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRDb250YWluZXIgaWQ9XCJwcm9qZWN0c1wiPlxuICAgICAgPEZhZGUgYm90dG9tPlxuICAgICAgICA8SGVhZGluZz5Tb21lIFRoaW5ncyBJJmFwb3M7dmUgQnVpbHQ8L0hlYWRpbmc+XG4gICAgICA8L0ZhZGU+XG4gICAgICA8RmFkZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7ZnJvbnRtYXR0ZXIgJiZcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGZyb250bWF0dGVyKS5tYXAoKGtleSwgaSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHRpdGxlLCBjb3ZlciwgZXh0ZXJuYWwsIHRlY2gsIGNvbnRlbnRIdG1sIH0gPSBmcm9udG1hdHRlcltcbiAgICAgICAgICAgICAgICBrZXlcbiAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxTdHlsZWRQcm9qZWN0IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8U3R5bGVkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZExhYmVsPkZlYXR1cmVkIFByb2plY3Q8L1N0eWxlZExhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkUHJvamVjdE5hbWU+XG4gICAgICAgICAgICAgICAgICAgICAge2V4dGVybmFsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17ZXh0ZXJuYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRXh0ZXJuYWwgTGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZFByb2plY3ROYW1lPlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnRIdG1sIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHt0ZWNoICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGVjaExpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGVjaC5tYXAoKHRlY2gsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+e3RlY2h9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkVGVjaExpc3Q+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRMaW5rV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZXh0ZXJuYWwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17ZXh0ZXJuYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRXh0ZXJuYWwgTGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRJY29uIG5hbWU9XCJFeHRlcm5hbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWRMaW5rV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRJbWdDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17ZXh0ZXJuYWwgPyBleHRlcm5hbCA6IFwiI1wifVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZEZlYXR1cmVkSW1nIHNyYz17Y292ZXJ9IGFsdD17dGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZEltZ0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZFByb2plY3Q+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZhZGU+XG4gICAgPC9TdHlsZWRDb250YWluZXI+XG4gICk7XG59O1xuXG5GZWF0dXJlZC5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uLCBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xuaW1wb3J0IHsgZW1haWwgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdGhlbWUsIG1peGlucywgbWVkaWEsIFNlY3Rpb24gfSBmcm9tIFwiLi4vLi4vc3R5bGVzL2luZGV4XCI7XG5jb25zdCB7IGNvbG9ycywgZm9udFNpemVzLCBmb250cywgbmF2RGVsYXksIGxvYWRlckRlbGF5IH0gPSB0aGVtZTtcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkKFNlY3Rpb24pYFxuICAke21peGlucy5mbGV4Q2VudGVyfTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAke21lZGlhLnRhYmxldGBwYWRkaW5nLXRvcDogMTUwcHg7YH07XG4gIGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5jb25zdCBTdHlsZWRPdmVybGluZSA9IHN0eWxlZC5oMWBcbiAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICBtYXJnaW46IDAgMCAyMHB4IDNweDtcbiAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5sZ307XG4gIGZvbnQtZmFtaWx5OiAke2ZvbnRzLlNGTW9ub307XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICR7bWVkaWEuZGVza3RvcGBmb250LXNpemU6ICR7Zm9udFNpemVzLnNtfTtgfTtcbiAgJHttZWRpYS50YWJsZXRgZm9udC1zaXplOiAke2ZvbnRTaXplcy5zbWlzaH07YH07XG5gO1xuY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogODBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgbWFyZ2luOiAwO1xuICAke21lZGlhLmRlc2t0b3BgZm9udC1zaXplOiA3MHB4O2B9O1xuICAke21lZGlhLnRhYmxldGBmb250LXNpemU6IDYwcHg7YH07XG4gICR7bWVkaWEucGhhYmxldGBmb250LXNpemU6IDUwcHg7YH07XG4gICR7bWVkaWEucGhvbmVgZm9udC1zaXplOiA0MHB4O2B9O1xuYDtcbmNvbnN0IFN0eWxlZFN1YnRpdGxlID0gc3R5bGVkLmgzYFxuICBmb250LXNpemU6IDgwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIGNvbG9yOiAke2NvbG9ycy5zbGF0ZX07XG4gICR7bWVkaWEuZGVza3RvcGBmb250LXNpemU6IDcwcHg7YH07XG4gICR7bWVkaWEudGFibGV0YGZvbnQtc2l6ZTogNjBweDtgfTtcbiAgJHttZWRpYS5waGFibGV0YGZvbnQtc2l6ZTogNTBweDtgfTtcbiAgJHttZWRpYS5waG9uZWBmb250LXNpemU6IDQwcHg7YH07XG5gO1xuY29uc3QgU3R5bGVkRGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAyNXB4O1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBhIHtcbiAgICAke21peGlucy5pbmxpbmVMaW5rfTtcbiAgfVxuYDtcbmNvbnN0IFN0eWxlZEVtYWlsTGluayA9IHN0eWxlZC5hYFxuICAke21peGlucy5iaWdCdXR0b259O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuYDtcblxuY29uc3QgSGVybyA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IFtpc01vdW50ZWQsIHNldElzTW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGZyb250bWF0dGVyID0gZGF0YS5mcm9udG1hdHRlcjtcbiAgLy9jb25zdCBkYXRhID0gSlNPTi5wYXJzZShmcm9udG1hdHRlcik7XG4gIC8vY29uc29sZS5sb2coZnJvbnRtYXR0ZXIuZnJvbnRtYXR0ZXIuaWQpO1xuICAvL2NvbnNvbGUubG9nKGZyb250bWF0dGVyKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBzZXRJc01vdW50ZWQodHJ1ZSksIG5hdkRlbGF5KTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25lID0gKCkgPT4gKFxuICAgIDxTdHlsZWRPdmVybGluZSBzdHlsZT17eyB0cmFuc2l0aW9uRGVsYXk6IFwiMTAwbXNcIiB9fT5cbiAgICAgIHtmcm9udG1hdHRlci50aXRsZX1cbiAgICA8L1N0eWxlZE92ZXJsaW5lPlxuICApO1xuXG4gIGNvbnN0IHR3byA9ICgpID0+IChcbiAgICA8U3R5bGVkVGl0bGUgc3R5bGU9e3sgdHJhbnNpdGlvbkRlbGF5OiBcIjIwMG1zXCIgfX0+XG4gICAgICB7ZnJvbnRtYXR0ZXIubmFtZX1cbiAgICA8L1N0eWxlZFRpdGxlPlxuICApO1xuXG4gIGNvbnN0IHRocmVlID0gKCkgPT4gKFxuICAgIDxTdHlsZWRTdWJ0aXRsZSBzdHlsZT17eyB0cmFuc2l0aW9uRGVsYXk6IFwiMzAwbXNcIiB9fT5cbiAgICAgIHtmcm9udG1hdHRlci5zdWJ0aXRsZX1cbiAgICA8L1N0eWxlZFN1YnRpdGxlPlxuICApO1xuXG4gIGNvbnN0IGZvdXIgPSAoKSA9PiAoXG4gICAgPFN0eWxlZERlc2NyaXB0aW9uXG4gICAgICBzdHlsZT17eyB0cmFuc2l0aW9uRGVsYXk6IFwiNDAwbXNcIiB9fVxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBmcm9udG1hdHRlci5jb250ZW50SHRtbCB9fVxuICAgIC8+XG4gICk7XG5cbiAgY29uc3QgZml2ZSA9ICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IHRyYW5zaXRpb25EZWxheTogXCI1MDBtc1wiIH19PlxuICAgICAgPFN0eWxlZEVtYWlsTGluayBocmVmPXtgbWFpbHRvOiR7ZW1haWx9YH0+XG4gICAgICAgIHtmcm9udG1hdHRlci5idXR0b25UZXh0fVxuICAgICAgPC9TdHlsZWRFbWFpbExpbms+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgY29uc3QgaXRlbXMgPSBbb25lLCB0d28sIHRocmVlLCBmb3VyLCBmaXZlXTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRDb250YWluZXIgaWQ9XCJoZXJvXCI+XG4gICAgICA8VHJhbnNpdGlvbkdyb3VwIGNvbXBvbmVudD17bnVsbH0+XG4gICAgICAgIHtpc01vdW50ZWQgJiZcbiAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uIGtleT17aX0gY2xhc3NOYW1lcz1cImZhZGV1cFwiIHRpbWVvdXQ9e2xvYWRlckRlbGF5fT5cbiAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICA8L1RyYW5zaXRpb25Hcm91cD5cbiAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkhlcm8ucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVybztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uLCBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHRoZW1lLCBtZWRpYSB9IGZyb20gXCIuLi9zdHlsZXMvaW5kZXhcIjtcbmNvbnN0IHsgY29sb3JzLCBsb2FkZXJEZWxheSB9ID0gdGhlbWU7XG5cbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogJHsocHJvcHMpID0+IChwcm9wcy5vcmllbnRhdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIjQwcHhcIiA6IFwiYXV0b1wiKX07XG4gIHJpZ2h0OiAkeyhwcm9wcykgPT4gKHByb3BzLm9yaWVudGF0aW9uID09PSBcImxlZnRcIiA/IFwiYXV0b1wiIDogXCI0MHB4XCIpfTtcbiAgei1pbmRleDogMTA7XG4gIGNvbG9yOiAke2NvbG9ycy5saWdodFNsYXRlfTtcbiAgJHttZWRpYS5kZXNrdG9wYHJpZ2h0OiAyNXB4O2B9O1xuICAke21lZGlhLnRhYmxldGBkaXNwbGF5OiBub25lO2B9O1xuYDtcblxuY29uc3QgU2lkZSA9ICh7IGNoaWxkcmVuLCBpc0hvbWUsIG9yaWVudGF0aW9uIH0pID0+IHtcbiAgY29uc3QgW2lzTW91bnRlZCwgc2V0SXNNb3VudGVkXSA9IHVzZVN0YXRlKCFpc0hvbWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0hvbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gc2V0SXNNb3VudGVkKHRydWUpLCBsb2FkZXJEZWxheSk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZENvbnRhaW5lciBvcmllbnRhdGlvbj17b3JpZW50YXRpb259PlxuICAgICAgPFRyYW5zaXRpb25Hcm91cCBjb21wb25lbnQ9e251bGx9PlxuICAgICAgICB7aXNNb3VudGVkICYmIChcbiAgICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgICAgY2xhc3NOYW1lcz17aXNIb21lID8gXCJmYWRlXCIgOiBcIlwifVxuICAgICAgICAgICAgdGltZW91dD17aXNIb21lID8gbG9hZGVyRGVsYXkgOiAwfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICl9XG4gICAgICA8L1RyYW5zaXRpb25Hcm91cD5cbiAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgKTtcbn07XG5cblNpZGUucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgaXNIb21lOiBQcm9wVHlwZXMuYm9vbCxcbiAgb3JpZW50YXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgc29jaWFsTWVkaWEgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBTaWRlIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IEZvcm1hdHRlZEljb24gfSBmcm9tIFwiLi9pY29uc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIi4uL3N0eWxlcy9pbmRleFwiO1xuY29uc3QgeyBjb2xvcnMgfSA9IHRoZW1lO1xuXG5jb25zdCBTdHlsZWRMaXN0ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5saWdodFNsYXRlfTtcbiAgfVxuXG4gIGxpOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuYDtcbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYWBcbiAgcGFkZGluZzogMTBweDtcbiAgXG4gIGNvbG9yOiR7Y29sb3JzLmxpZ2h0ZXN0U2xhdGV9XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICB9XG4gIHN2ZyB7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICB9XG5gO1xuXG5jb25zdCBTb2NpYWwgPSAoeyBpc0hvbWUgfSkgPT4gKFxuICA8U2lkZSBpc0hvbWU9e2lzSG9tZX0gb3JpZW50YXRpb249XCJsZWZ0XCI+XG4gICAgPFN0eWxlZExpc3Q+XG4gICAgICB7c29jaWFsTWVkaWEgJiZcbiAgICAgICAgc29jaWFsTWVkaWEubWFwKCh7IHVybCwgbmFtZSB9LCBpKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICA8U3R5bGVkTGlua1xuICAgICAgICAgICAgICBocmVmPXt1cmx9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtuYW1lfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkSWNvbiBuYW1lPXtuYW1lfSAvPlxuICAgICAgICAgICAgPC9TdHlsZWRMaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgIDwvU3R5bGVkTGlzdD5cbiAgPC9TaWRlPlxuKTtcblxuU29jaWFsLnByb3BUeXBlcyA9IHtcbiAgaXNIb21lOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbDtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBzaXRlVGl0bGU6IFwiQW51cmFnIE1vcmUgfCBDb21wdXRlciBTY2llbmNlIEVuZ2luZWVyXCIsXG4gIG5hbWU6IFwiQW51cmFnIE1vcmVcIixcbiAgZW1haWw6IFwiYW51cmFnYm1vcmVAZ21haWwuY29tXCIsXG4gIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vYW51cmFnMTI5OVwiLFxuICBzb2NpYWxNZWRpYTogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiR2l0SHViXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FudXJhZzEyOTlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTGlua2VkaW5cIixcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYW51cmFnLW1vcmUtOWFhNjdhMTlhL1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJJbnN0YWdyYW1cIixcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2x1ZHVtX2VsaXRcIixcbiAgICB9LFxuICBdLFxuXG4gIG5hdkhlaWdodDogMTAwLFxuICBuYXZMaW5rczogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiQWJvdXRcIixcbiAgICAgIHVybDogXCIvI2Fib3V0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkVkdWNhdGlvblwiLFxuICAgICAgdXJsOiBcIi8jY29sbGVnZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJXb3JrXCIsXG4gICAgICB1cmw6IFwiLyNwcm9qZWN0c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJDb250YWN0XCIsXG4gICAgICB1cmw6IFwiLyNjb250YWN0XCIsXG4gICAgfSxcbiAgXSxcbiAgY29sb3JzOiB7XG4gICAgYmx1ZTogXCIjMDA3QkZGXCIsXG4gICAgbmF2eTogXCIjMTcxQzI4XCIsXG4gICAgbGlnaHROYXZ5OiBcIiM4ODkyQjBcIixcbiAgICBsaWdodGVzdE5hdnk6IFwiI0NDRDZGNlwiLFxuICB9LFxuICBzckNvbmZpZzogKGRlbGF5ID0gMjAwKSA9PiAoe1xuICAgIG9yaWdpbjogXCJib3R0b21cIixcbiAgICBkaXN0YW5jZTogXCIyMHB4XCIsXG4gICAgZHVyYXRpb246IDUwMCxcbiAgICBkZWxheSxcbiAgICByb3RhdGU6IHsgeDogMCwgeTogMCwgejogMCB9LFxuICAgIG9wYWNpdHk6IDAsXG4gICAgc2NhbGU6IDEsXG4gICAgZWFzaW5nOiBcImN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKVwiLFxuICAgIG1vYmlsZTogdHJ1ZSxcbiAgICByZXNldDogZmFsc2UsXG4gICAgdXNlRGVsYXk6IFwiYWx3YXlzXCIsXG4gICAgdmlld0ZhY3RvcjogMC4yNSxcbiAgICB2aWV3T2Zmc2V0OiB7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCB9LFxuICB9KSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tQm9sZC1JdGFsaWMudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2Fzc2V0cy9KZXRCcmFpbnNNb25vLUJvbGQtSXRhbGljLndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tQm9sZC1JdGFsaWMud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tQm9sZC50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tQm9sZC53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2Fzc2V0cy9KZXRCcmFpbnNNb25vLUJvbGQud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tRXh0cmFCb2xkLUl0YWxpYy50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tRXh0cmFCb2xkLUl0YWxpYy53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2Fzc2V0cy9KZXRCcmFpbnNNb25vLUV4dHJhQm9sZC1JdGFsaWMud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tRXh0cmFCb2xkLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9hc3NldHMvSmV0QnJhaW5zTW9uby1FeHRyYUJvbGQud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9hc3NldHMvSmV0QnJhaW5zTW9uby1FeHRyYUJvbGQud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tSXRhbGljLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9hc3NldHMvSmV0QnJhaW5zTW9uby1JdGFsaWMud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9hc3NldHMvSmV0QnJhaW5zTW9uby1JdGFsaWMud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tTWVkaXVtLUl0YWxpYy50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tTWVkaXVtLUl0YWxpYy53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2Fzc2V0cy9KZXRCcmFpbnNNb25vLU1lZGl1bS1JdGFsaWMud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tTWVkaXVtLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9hc3NldHMvSmV0QnJhaW5zTW9uby1NZWRpdW0ud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9hc3NldHMvSmV0QnJhaW5zTW9uby1NZWRpdW0ud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tUmVndWxhci50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvYXNzZXRzL0pldEJyYWluc01vbm8tUmVndWxhci53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2Fzc2V0cy9KZXRCcmFpbnNNb25vLVJlZ3VsYXIud29mZjJcIjsiLCJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHJlY3Vyc2l2ZSBmcm9tIFwicmVjdXJzaXZlLXJlYWRkaXJcIjtcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XG5pbXBvcnQgcmVtYXJrIGZyb20gXCJyZW1hcmtcIjtcbmltcG9ydCBodG1sIGZyb20gXCJyZW1hcmstaHRtbFwiO1xuXG5jb25zdCBwb3N0c0RpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImNvbnRlbnRcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZW50KCkge1xuICBjb25zdCBmaWxlTmFtZXMgPSB3YWxrU3luYyhwb3N0c0RpcmVjdG9yeS5jb25jYXQoXCIvXCIpKTtcblxuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBmaWxlTmFtZXMubWFwKChmaWxlTmFtZSkgPT4ge1xuICAgIC8vIFJlbW92ZSBcIi5tZFwiIGZyb20gZmlsZSBuYW1lIHRvIGdldCBpZFxuICAgIGNvbnN0IGlkID0gZmlsZU5hbWUucmVwbGFjZSgvXFwubWQkLywgXCJcIik7XG4gICAgY29uc3QgaWQyID0gaWQucmVwbGFjZShwb3N0c0RpcmVjdG9yeSwgXCJcIik7XG4gICAgLy9jb25zb2xlLmxvZyhpZCk7XG4gICAgLy9jb25zdCBkYXRhID0gZ2V0Q29udGVudERhdGEoaWQpO1xuICAgIHJldHVybiBpZDI7XG4gIH0pO1xuXG4gIHJldHVybiBhbGxQb3N0c0RhdGE7XG59XG5cbmNvbnN0IHdhbGtTeW5jID0gZnVuY3Rpb24gKGRpciwgZmlsZWxpc3QpIHtcbiAgdmFyIGZzID0gZnMgfHwgcmVxdWlyZShcImZzXCIpLFxuICAgIGZpbGVzID0gZnMucmVhZGRpclN5bmMoZGlyKTtcbiAgZmlsZWxpc3QgPSBmaWxlbGlzdCB8fCBbXTtcbiAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgIGlmIChmcy5zdGF0U3luYyhkaXIgKyBmaWxlKS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICBmaWxlbGlzdCA9IHdhbGtTeW5jKGRpciArIGZpbGUgKyBcIi9cIiwgZmlsZWxpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL2NvbnNvbGUubG9nKGRpciArIGZpbGUpO1xuICAgICAgZmlsZWxpc3QucHVzaChkaXIgKyBmaWxlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZmlsZWxpc3Q7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29udGVudERhdGEoaWQpIHtcbiAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4ocG9zdHNEaXJlY3RvcnksIGAke2lkfS5tZGApO1xuICAvL2NvbnNvbGUubG9nKGZ1bGxQYXRoKTtcbiAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCBcInV0ZjhcIik7XG5cbiAgLy8gVXNlIGdyYXktbWF0dGVyIHRvIHBhcnNlIHRoZSBwb3N0IG1ldGFkYXRhIHNlY3Rpb25cbiAgY29uc3QgbWF0dGVyUmVzdWx0ID0gbWF0dGVyKGZpbGVDb250ZW50cyk7XG5cbiAgLy8gVXNlIHJlbWFyayB0byBjb252ZXJ0IG1hcmtkb3duIGludG8gSFRNTCBzdHJpbmdcbiAgY29uc3QgcHJvY2Vzc2VkQ29udGVudCA9IGF3YWl0IHJlbWFyaygpXG4gICAgLnVzZShodG1sKVxuICAgIC5wcm9jZXNzKG1hdHRlclJlc3VsdC5jb250ZW50KTtcbiAgY29uc3QgY29udGVudEh0bWwgPSBwcm9jZXNzZWRDb250ZW50LnRvU3RyaW5nKCk7XG4gIC8vIENvbWJpbmUgdGhlIGRhdGEgd2l0aCB0aGUgaWQgYW5kIGNvbnRlbnRIdG1sXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgY29udGVudEh0bWwsXG4gICAgLi4ubWF0dGVyUmVzdWx0LmRhdGEsXG4gIH07XG59XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQge1xuICBMYXlvdXQsXG4gIEhlcm8sXG4gIEFib3V0LFxuICBFZHVjYXRpb24sXG4gIEZlYXR1cmVkLFxuICBDb250YWN0LFxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IE1haW4sIEdsb2JhbFN0eWxlIH0gZnJvbSBcIi4uL3N0eWxlcy9pbmRleFwiO1xuaW1wb3J0IHsgZ2V0Q29udGVudERhdGEsIGdldENvbnRlbnQgfSBmcm9tIFwiLi4vbGliL2NvbnRlbnRcIjtcblxuY29uc3QgU3R5bGVkTWFpbkNvbnRhaW5lciA9IHN0eWxlZChNYWluKWBcbiAgY291bnRlci1yZXNldDogc2VjdGlvbjtcbmA7XG5cbmNvbnN0IEluZGV4ID0gKHsgZGF0YSB9KSA9PiB7XG4gIC8vY29uc29sZS5sb2coZGF0YSk7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxTdHlsZWRNYWluQ29udGFpbmVyIGNsYXNzTmFtZT1cImZpbGxIZWlnaHRcIj5cbiAgICAgICAgPEhlcm8gZnJvbnRtYXR0ZXI9e2RhdGEudG9wfT48L0hlcm8+XG4gICAgICAgIDxBYm91dCBmcm9udG1hdHRlcj17ZGF0YS5hYm91dH0+PC9BYm91dD5cbiAgICAgICAgPEVkdWNhdGlvbiBmcm9udG1hdHRlcj17ZGF0YS5lZHVjYXRpb259PjwvRWR1Y2F0aW9uPlxuICAgICAgICA8RmVhdHVyZWQgZnJvbnRtYXR0ZXI9e2RhdGEuZmVhdHVyZWR9PjwvRmVhdHVyZWQ+XG4gICAgICAgIDxDb250YWN0IGZyb250bWF0dGVyPXtkYXRhLmNvbnRhY3R9PjwvQ29udGFjdD5cbiAgICAgIDwvU3R5bGVkTWFpbkNvbnRhaW5lcj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IG5hbWVzID0gZ2V0Q29udGVudCgpO1xuICAvL2NvbnNvbGUubG9nKG5hbWVzKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIG5hbWVzLm1hcChhc3luYyAobmFtZSkgPT4gYXdhaXQgZ2V0Q29udGVudERhdGEobmFtZSkpXG4gICk7XG5cbiAgdmFyIGNvbnRlbnQgPSB7fTtcbiAgLy9jb25zb2xlLmxvZyhcImhlcmUgOiBcIiArIGRhdGEpO1xuICAvLyBkYXRhLm1hcCgoaWRhdGEpID0+IHtcbiAgLy8gICAvL2NvbnNvbGUubG9nKFwiaWRhdGFcIiwgaWRhdGEpO1xuICAvLyAgIGNvbnRlbnQucHVzaCh7IFtpZGF0YS5pZF06IHsgLi4uaWRhdGEgfSB9KTtcbiAgLy8gfSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNvbnRlbnQuaGFzT3duUHJvcGVydHkoZGF0YVtpXS5pZCkpIHtcbiAgICAgIGNvbnN0IHRtcCA9IHt9O1xuICAgICAgdG1wW2RhdGFbaV0uc3ViSWRdID0gZGF0YVtpXTtcbiAgICAgIGNvbnRlbnRbZGF0YVtpXS5pZF0gPSB7IC4uLmNvbnRlbnRbZGF0YVtpXS5pZF0sIC4uLnRtcCB9O1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChkYXRhW2ldLmhhc093blByb3BlcnR5KFwic3ViSWRcIikpIHtcbiAgICAgIGNvbnN0IHRtcCA9IHt9O1xuICAgICAgdG1wW2RhdGFbaV0uc3ViSWRdID0gZGF0YVtpXTtcbiAgICAgIGNvbnRlbnRbZGF0YVtpXS5pZF0gPSB7IC4uLnRtcCB9O1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29udGVudFtkYXRhW2ldLmlkXSA9IGRhdGFbaV07XG4gIH1cbiAgLy9jb25zb2xlLmxvZyhjb250ZW50KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRhdGE6IGNvbnRlbnQgfSxcbiAgfTtcbn1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWVcIjtcbmNvbnN0IHsgY29sb3JzLCBmb250U2l6ZXMsIGZvbnRzIH0gPSB0aGVtZTtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMuYmx1ZX07XG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuYm9yZGVyUmFkaXVzfTtcbiAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5zbWlzaH07XG4gIGZvbnQtZmFtaWx5OiAke2ZvbnRzLkpldEJyYWluc01vbm99O1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG4gIHBhZGRpbmc6IDEuMjVyZW0gMS43NXJlbTtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMudHJhbnNCbHVlfTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xuXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZm9vdGVyYFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6ICR7dGhlbWUubWFyZ2lufTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWVcIjtcbmltcG9ydCBtZWRpYSBmcm9tIFwiLi9tZWRpYVwiO1xuaW1wb3J0IG1peGlucyBmcm9tIFwiLi9taXhpbnNcIjtcbmltcG9ydCBGb250RmFjZXMgZnJvbSBcIi4vZm9udHNcIjtcbmltcG9ydCBUcmFuc2l0aW9uU3R5bGVzIGZyb20gXCIuL1RyYW5zaXRpb25TdHlsZVwiO1xuY29uc3QgeyBjb2xvcnMsIGZvbnRTaXplcywgZm9udHMgfSA9IHRoZW1lO1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAvKiAke0ZvbnRGYWNlc307ICovXG5cbiAgaHRtbCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICosXG4gICo6YmVmb3JlLFxuICAqOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICB9XG5cbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZGFya05hdnl9O1xuICAgIGNvbG9yOiAke2NvbG9ycy5zbGF0ZX07XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICBmb250LWZhbWlseTogJHtmb250cy5KZXRCcmFpbnNNb25vfTtcbiAgICBmb250LXNpemU6ICR7Zm9udFNpemVzLnhsfTtcbiAgICAke21lZGlhLnBoYWJsZXRgZm9udC1zaXplOiAke2ZvbnRTaXplcy5sZ307YH1cblxuICAgICYuaGlkZGVuIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgICYuYmx1ciB7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgI3Jvb3QgPiAjY29udGVudCA+ICoge1xuICAgICAgICBmaWx0ZXI6IGJsdXIoNXB4KSBicmlnaHRuZXNzKDAuNyk7XG4gICAgICAgIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICA6OnNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuc2xhdGV9O1xuICAgIGNvbG9yOiAke2NvbG9ycy5saWdodGVzdFNsYXRlfTtcbiAgfVxuXG4gICNyb290IHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICB9XG5cbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogJHtjb2xvcnMubGlnaHRlc3RTbGF0ZX07XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICB9XG5cbiAgaDEge1xuICAgICYuYmlnLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICAke21lZGlhLmRlc2t0b3BgZm9udC1zaXplOiA3MHB4O2B9O1xuICAgICAgJHttZWRpYS50YWJsZXRgZm9udC1zaXplOiA2MHB4O2B9O1xuICAgICAgJHttZWRpYS5waGFibGV0YGZvbnQtc2l6ZTogNTBweDtgfTtcbiAgICAgICR7bWVkaWEucGhvbmVgZm9udC1zaXplOiA0MHB4O2B9O1xuICAgIH1cblxuICAgICYubWVkaXVtLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICAke21lZGlhLmRlc2t0b3BgZm9udC1zaXplOiA1MHB4O2B9O1xuICAgICAgJHttZWRpYS50YWJsZXRgZm9udC1zaXplOiA0MHB4O2B9O1xuICAgIH1cbiAgfVxuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICBpbWdbYWx0PVwiXCJdIGltZzpub3QoW2FsdF0pIHtcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGNvbG9yOiAke2NvbG9ycy5ibHVlfTtcbiAgICB9XG4gIH1cblxuICBidXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcblxuICAgICY6Zm9jdXMsXG4gICAgJjphY3RpdmUge1xuICAgICAgb3V0bGluZS1jb2xvcjogJHtjb2xvcnMubGlnaHRTbGF0ZX07XG4gICAgfVxuICB9XG5cbiAgaW5wdXQsXG4gIHRleHRhcmVhIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG91dGxpbmU6IDA7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgfVxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICB9XG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSB7XG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDAgMCAxNXB4IDA7XG5cbiAgICAmID4gYSB7XG4gICAgICAke21peGlucy5pbmxpbmVMaW5rfTtcbiAgICB9XG5cbiAgICAmID4gY29kZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5saWdodE5hdnl9O1xuICAgICAgY29sb3I6ICR7Y29sb3JzLndoaXRlfTtcbiAgICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZXMuc219O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5ib3JkZXJSYWRpdXN9O1xuICAgICAgcGFkZGluZzogMC4zZW0gMC41ZW07XG4gICAgfVxuICB9XG5cbiAgdWwge1xuICAgICYuZmFuY3ktbGlzdCB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZXMubGd9O1xuICAgICAgbGkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwi4pa5XCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYmxvY2txdW90ZSB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gIH1cblxuICBociB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMubGlnaHRlc3ROYXZ5fTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBib3JkZXItd2lkdGg6IDBweDtcbiAgICBib3JkZXItc3R5bGU6IGluaXRpYWw7XG4gICAgYm9yZGVyLWNvbG9yOiBpbml0aWFsO1xuICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcbiAgICBtYXJnaW46IDFyZW07XG4gIH1cblxuICBjb2RlIHtcbiAgICBmb250LWZhbWlseTogJHtmb250cy5KZXRCcmFpbnNNb25vfTtcbiAgICBmb250LXNpemU6ICR7Zm9udFNpemVzLm1kfTtcbiAgfVxuXG4gICNsb2dvIHtcbiAgICBjb2xvcjogJHtjb2xvcnMuYmx1ZX07XG4gIH1cblxuICAub3ZlcmxpbmUge1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibHVlfTtcbiAgICBmb250LWZhbWlseTogJHtmb250cy5KZXRCcmFpbnNNb25vfTtcbiAgICBmb250LXNpemU6ICR7Zm9udFNpemVzLm1kfTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBjb2xvcjogJHtjb2xvcnMuYmx1ZX07XG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZXMubWR9O1xuICAgIGZvbnQtZmFtaWx5OiAke2ZvbnRzLkpldEJyYWluc01vbm99O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAke21lZGlhLmRlc2t0b3BgZm9udC1zaXplOiAke2ZvbnRTaXplcy5zbX07YH07XG4gICAgJHttZWRpYS50YWJsZXRgZm9udC1zaXplOiAke2ZvbnRTaXplcy5zbWlzaH07YH07XG5cbiAgICBhIHtcbiAgICAgICR7bWl4aW5zLmlubGluZUxpbmt9O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB9XG4gIH1cblxuICAuYnJlYWRjcnVtYiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuXG4gICAgLmFycm93IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICB9XG4gICAgYSB7XG4gICAgICAke21peGlucy5pbmxpbmVMaW5rfTtcbiAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnRzLkpldEJyYWluc01vbm99O1xuICAgICAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5zbX07XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgIH1cbiAgfVxuXG4gICR7VHJhbnNpdGlvblN0eWxlc307XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xuaW1wb3J0IG1lZGlhIGZyb20gXCIuL21lZGlhXCI7XG5cbmNvbnN0IHsgY29sb3JzLCBmb250U2l6ZXMsIGZvbnRzIH0gPSB0aGVtZTtcblxuY29uc3QgSGVhZGluZyA9IHN0eWxlZC5oM2BcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMCA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5oM307XG4gICR7bWVkaWEudGFibGV0YGZvbnQtc2l6ZTogMjRweDtgfTtcbiAgJHttZWRpYS5waGFibGV0YGZvbnQtc2l6ZTogMjBweDtgfTtcblxuICAmOmJlZm9yZSB7XG4gICAgY291bnRlci1pbmNyZW1lbnQ6IHNlY3Rpb247XG4gICAgY29udGVudDogXCIwXCIgY291bnRlcihzZWN0aW9uKSBcIi5cIjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICR7Zm9udHMuSmV0QnJhaW5zTW9ub307XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBjb2xvcjogJHtjb2xvcnMuYmx1ZX07XG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplcy54bH07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogLTJweDtcbiAgICAke21lZGlhLnRhYmxldGBmb250LXNpemU6ICR7Zm9udFNpemVzLmxnfTtgfTtcbiAgfVxuXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmxpZ2h0ZXN0TmF2eX07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIHRvcDogLTVweDsgKi9cbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAke21lZGlhLmRlc2t0b3Bgd2lkdGg6IDIwMHB4YH07XG4gICAgJHttZWRpYS50YWJsZXRgd2lkdGg6IDEwMCU7YH07XG4gICAgJHttZWRpYS50aG9uZWBtYXJnaW4tbGVmdDogMTBweDtgfTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWVcIjtcbmNvbnN0IHsgY29sb3JzIH0gPSB0aGVtZTtcblxuY29uc3QgSW5saW5lTGluayA9IHN0eWxlZC5hYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSB7XG4gICAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICAgIG91dGxpbmU6IDA7XG4gICAgJjphZnRlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAwLjM3ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYmx1ZX07XG4gICAgdHJhbnNpdGlvbjogJHt0aGVtZS50cmFuc2l0aW9ufTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSW5saW5lTGluaztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgbWl4aW5zIGZyb20gXCIuL21peGluc1wiO1xuaW1wb3J0IG1lZGlhIGZyb20gXCIuL21lZGlhXCI7XG5cbmNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBcbiAgJHttaXhpbnMuc2lkZVBhZGRpbmd9O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTYwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy10b3A6IDIwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG4gICR7bWVkaWEuZGVza3RvcGBcbiAgICBwYWRkaW5nLXRvcDogMjAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xuICBgfTtcbiAgJHttZWRpYS50YWJsZXRgXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcbiAgYH07XG4gICR7bWVkaWEucGhhYmxldGBcbiAgICBwYWRkaW5nLXRvcDogMTI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEyNXB4O1xuICBgfTtcblxuICAmLmZpbGxIZWlnaHQge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICR7bWVkaWEuZGVza3RvcGBcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYH07XG4gICAgJHttZWRpYS50YWJsZXRgXG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIGB9O1xuICAgICR7bWVkaWEucGhhYmxldGBcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYH07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IG1lZGlhIGZyb20gXCIuL21lZGlhXCI7XG5cbmNvbnN0IFNlY2l0b24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDE1MHB4IDA7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuXG4gICR7bWVkaWEudGFibGV0YHBhZGRpbmc6IDEwMHB4IDA7YH07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTZWNpdG9uO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWVcIjtcblxuY29uc3QgVHJhbnNpdGlvblN0eWxlID0gY3NzYFxuICAuZmFkZXVwLWVudGVyIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zICR7dGhlbWUuZWFzaW5nfSwgdHJhbnNmb3JtIDMwMG1zICR7dGhlbWUuZWFzaW5nfTtcbiAgfVxuXG4gIC5mYWRldXAtZW50ZXItYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgJHt0aGVtZS5lYXNpbmd9LCB0cmFuc2Zvcm0gMzAwbXMgJHt0aGVtZS5lYXNpbmd9O1xuICB9XG5cbiAgLmZhZGVkb3duLWVudGVyIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyAke3RoZW1lLmVhc2luZ30sIHRyYW5zZm9ybSAzMDBtcyAke3RoZW1lLmVhc2luZ307XG4gIH1cblxuICAuZmFkZWRvd24tZW50ZXItYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgJHt0aGVtZS5lYXNpbmd9LCB0cmFuc2Zvcm0gMzAwbXMgJHt0aGVtZS5lYXNpbmd9O1xuICB9XG5cbiAgLmZhZGUtZW50ZXIge1xuICAgIG9wYWNpdHk6IDAuMDE7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zICR7dGhlbWUuZWFzaW5nfTtcbiAgfVxuXG4gIC5mYWRlLWVudGVyLWFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zICR7dGhlbWUuZWFzaW5nfTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNpdGlvblN0eWxlO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCBKRVRCUkFJTlNNT05PUmVndWxhclRURiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1SZWd1bGFyLnR0ZlwiO1xuaW1wb3J0IEpFVEJSQUlOU01PTk9SZWd1bGFyV09GRiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1SZWd1bGFyLndvZmZcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PUmVndWxhcldPRkYyIGZyb20gXCIuLi9mb250cy9KZXRCcmFpbnNNb25vLVJlZ3VsYXIud29mZjJcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PTWVkaXVtVFRGIGZyb20gXCIuLi9mb250cy9KZXRCcmFpbnNNb25vLU1lZGl1bS50dGZcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PTWVkaXVtV09GRiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1NZWRpdW0ud29mZlwiO1xuaW1wb3J0IEpFVEJSQUlOU01PTk9NZWRpdW1XT0ZGMiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1NZWRpdW0ud29mZjJcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PTWVkaXVtSXRhbGljVFRGIGZyb20gXCIuLi9mb250cy9KZXRCcmFpbnNNb25vLU1lZGl1bS1JdGFsaWMudHRmXCI7XG5pbXBvcnQgSkVUQlJBSU5TTU9OT01lZGl1bUl0YWxpY1dPRkYgZnJvbSBcIi4uL2ZvbnRzL0pldEJyYWluc01vbm8tTWVkaXVtLUl0YWxpYy53b2ZmXCI7XG5pbXBvcnQgSkVUQlJBSU5TTU9OT01lZGl1bUl0YWxpY1dPRkYyIGZyb20gXCIuLi9mb250cy9KZXRCcmFpbnNNb25vLU1lZGl1bS1JdGFsaWMud29mZjJcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PSXRhbGljVFRGIGZyb20gXCIuLi9mb250cy9KZXRCcmFpbnNNb25vLUl0YWxpYy50dGZcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PSXRhbGljV09GRiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1JdGFsaWMud29mZlwiO1xuaW1wb3J0IEpFVEJSQUlOU01PTk9JdGFsaWNXT0ZGMiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1JdGFsaWMud29mZjJcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PRXh0cmFCb2xkVFRGIGZyb20gXCIuLi9mb250cy9KZXRCcmFpbnNNb25vLUV4dHJhQm9sZC50dGZcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PRXh0cmFCb2xkV09GRiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1FeHRyYUJvbGQud29mZlwiO1xuaW1wb3J0IEpFVEJSQUlOU01PTk9FeHRyYUJvbGRXT0ZGMiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1FeHRyYUJvbGQud29mZjJcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PRXh0cmFCb2xkSXRhbGljVFRGIGZyb20gXCIuLi9mb250cy9KZXRCcmFpbnNNb25vLUV4dHJhQm9sZC1JdGFsaWMudHRmXCI7XG5pbXBvcnQgSkVUQlJBSU5TTU9OT0V4dHJhQm9sZEl0YWxpY1dPRkYgZnJvbSBcIi4uL2ZvbnRzL0pldEJyYWluc01vbm8tRXh0cmFCb2xkLUl0YWxpYy53b2ZmXCI7XG5pbXBvcnQgSkVUQlJBSU5TTU9OT0V4dHJhQm9sZEl0YWxpY1dPRkYyIGZyb20gXCIuLi9mb250cy9KZXRCcmFpbnNNb25vLUV4dHJhQm9sZC1JdGFsaWMud29mZjJcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PQm9sZFRURiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1Cb2xkLnR0ZlwiO1xuaW1wb3J0IEpFVEJSQUlOU01PTk9Cb2xkV09GRiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1Cb2xkLndvZmZcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PQm9sZFdPRkYyIGZyb20gXCIuLi9mb250cy9KZXRCcmFpbnNNb25vLUJvbGQud29mZjJcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PQm9sZEl0YWxpY1RURiBmcm9tIFwiLi4vZm9udHMvSmV0QnJhaW5zTW9uby1Cb2xkLUl0YWxpYy50dGZcIjtcbmltcG9ydCBKRVRCUkFJTlNNT05PQm9sZEl0YWxpY1dPRkYgZnJvbSBcIi4uL2ZvbnRzL0pldEJyYWluc01vbm8tQm9sZC1JdGFsaWMud29mZlwiO1xuaW1wb3J0IEpFVEJSQUlOU01PTk9Cb2xkSXRhbGljV09GRjIgZnJvbSBcIi4uL2ZvbnRzL0pldEJyYWluc01vbm8tQm9sZC1JdGFsaWMud29mZjJcIjtcblxuY29uc3QgRm9udEZhY2VzID0gY3NzYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJKZXRCcmFpbnMgTW9ub1wiO1xuICAgIHNyYzogdXJsKCR7SkVUQlJBSU5TTU9OT1JlZ3VsYXJXT0ZGMn0pIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgdXJsKCR7SkVUQlJBSU5TTU9OT1JlZ3VsYXJUVEZ9KSBmb3JtYXQoXCJ0cnVldHlwZVwiKSxcbiAgICAgIHVybCgke0pFVEJSQUlOU01PTk9SZWd1bGFyV09GRn0pIGZvcm1hdChcIndvZmZcIik7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiSmV0QnJhaW5zIE1vbm9cIjtcbiAgICBzcmM6IHVybCgke0pFVEJSQUlOU01PTk9JdGFsaWNXT0ZGMn0pIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgdXJsKCR7SkVUQlJBSU5TTU9OT0l0YWxpY1RURn0pIGZvcm1hdChcInRydWV0eXBlXCIpLFxuICAgICAgdXJsKCR7SkVUQlJBSU5TTU9OT0l0YWxpY1dPRkZ9KSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkpldEJyYWlucyBNb25vXCI7XG4gICAgc3JjOiB1cmwoJHtKRVRCUkFJTlNNT05PTWVkaXVtV09GRjJ9KSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgIHVybCgke0pFVEJSQUlOU01PTk9NZWRpdW1UVEZ9KSBmb3JtYXQoXCJ0cnVldHlwZVwiKSxcbiAgICAgIHVybCgke0pFVEJSQUlOU01PTk9NZWRpdW1XT0ZGfSkgZm9ybWF0KFwid29mZlwiKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJKZXRCcmFpbnMgTW9ub1wiO1xuICAgIHNyYzogdXJsKCR7SkVUQlJBSU5TTU9OT01lZGl1bUl0YWxpY1dPRkYyfSkgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICB1cmwoJHtKRVRCUkFJTlNNT05PTWVkaXVtSXRhbGljVFRGfSkgZm9ybWF0KFwidHJ1ZXR5cGVcIiksXG4gICAgICB1cmwoJHtKRVRCUkFJTlNNT05PTWVkaXVtSXRhbGljV09GRn0pIGZvcm1hdChcIndvZmZcIik7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiSmV0QnJhaW5zIE1vbm9cIjtcbiAgICBzcmM6IHVybCgke0pFVEJSQUlOU01PTk9Cb2xkV09GRjJ9KSBmb3JtYXQoXCJ3b2ZmMlwiKSxcbiAgICAgIHVybCgke0pFVEJSQUlOU01PTk9Cb2xkVFRGfSkgZm9ybWF0KFwidHJ1ZXR5cGVcIiksXG4gICAgICB1cmwoJHtKRVRCUkFJTlNNT05PQm9sZFdPRkZ9KSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkpldEJyYWlucyBNb25vXCI7XG4gICAgc3JjOiB1cmwoJHtKRVRCUkFJTlNNT05PQm9sZEl0YWxpY1dPRkYyfSkgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICB1cmwoJHtKRVRCUkFJTlNNT05PQm9sZEl0YWxpY1RURn0pIGZvcm1hdChcInRydWV0eXBlXCIpLFxuICAgICAgdXJsKCR7SkVUQlJBSU5TTU9OT0JvbGRJdGFsaWNXT0ZGfSkgZm9ybWF0KFwid29mZlwiKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJKZXRCcmFpbnMgTW9ub1wiO1xuICAgIHNyYzogdXJsKCR7SkVUQlJBSU5TTU9OT0V4dHJhQm9sZFdPRkYyfSkgZm9ybWF0KFwid29mZjJcIiksXG4gICAgICB1cmwoJHtKRVRCUkFJTlNNT05PRXh0cmFCb2xkVFRGfSkgZm9ybWF0KFwidHJ1ZXR5cGVcIiksXG4gICAgICB1cmwoJHtKRVRCUkFJTlNNT05PRXh0cmFCb2xkV09GRn0pIGZvcm1hdChcIndvZmZcIik7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiSmV0QnJhaW5zIE1vbm9cIjtcbiAgICBzcmM6IHVybCgke0pFVEJSQUlOU01PTk9FeHRyYUJvbGRJdGFsaWNXT0ZGMn0pIGZvcm1hdChcIndvZmYyXCIpLFxuICAgICAgdXJsKCR7SkVUQlJBSU5TTU9OT0V4dHJhQm9sZEl0YWxpY1RURn0pIGZvcm1hdChcInRydWV0eXBlXCIpLFxuICAgICAgdXJsKCR7SkVUQlJBSU5TTU9OT0V4dHJhQm9sZEl0YWxpY1dPRkZ9KSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBGb250RmFjZXM7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIHRoZW1lIH0gZnJvbSBcIi4vdGhlbWVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2xvYmFsU3R5bGUgfSBmcm9tIFwiLi9HbG9iYWxTdHlsZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWl4aW5zIH0gZnJvbSBcIi4vbWl4aW5zXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1lZGlhIH0gZnJvbSBcIi4vbWVkaWFcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1haW4gfSBmcm9tIFwiLi9NYWluXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlY3Rpb24gfSBmcm9tIFwiLi9TZWN0aW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvb3RlciB9IGZyb20gXCIuL0Zvb3RlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWFkaW5nIH0gZnJvbSBcIi4vSGVhZGluZ1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tIFwiLi9CdXR0b25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW5saW5lTGluayB9IGZyb20gXCIuL0lubGluZUxpbmtcIjtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBzaXplcyA9IHtcbiAgZ2lhbnQ6IDE0NDAsXG4gIGJpZ0Rlc2t0b3A6IDEyMDAsXG4gIGRlc2t0b3A6IDEwMDAsXG4gIHRhYmxldDogNzY4LFxuICB0aG9uZTogNjAwLFxuICBwaGFibGV0OiA0ODAsXG4gIHBob25lOiAzNzYsXG4gIHRpbnk6IDMzMCxcbn07XG5cbmV4cG9ydCBjb25zdCBtZWRpYSA9IE9iamVjdC5rZXlzKHNpemVzKS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBsYWJlbCkgPT4ge1xuICBjb25zdCBlbVNpemUgPSBzaXplc1tsYWJlbF0gLyAxNjtcbiAgYWNjdW11bGF0b3JbbGFiZWxdID0gKC4uLmFyZ3MpID0+IGNzc2BcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHtlbVNpemV9ZW0pIHtcbiAgICAgICR7Y3NzKC4uLmFyZ3MpfTtcbiAgICB9XG4gIGA7XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn0sIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgbWVkaWE7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xuaW1wb3J0IG1lZGlhIGZyb20gXCIuL21lZGlhXCI7XG5jb25zdCB7IGNvbG9ycywgZm9udFNpemVzLCBmb250cyB9ID0gdGhlbWU7XG5cbmNvbnN0IG1peGlucyA9IHtcbiAgZmxleENlbnRlcjogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYCxcblxuICBmbGV4QmV0d2VlbjogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGAsXG5cbiAgb3V0aWxlOiBjc3NgXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHJlZDtcbiAgYCxcblxuICBsaW5rOiBjc3NgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXIsXG4gICAgJjphY3RpdmUsXG4gICAgJjpmb2N1cyB7XG4gICAgICBjb2xvcjogJHtjb2xvcnMuYmx1ZX07XG4gICAgICBvdXRsaW5lOiAwO1xuICAgIH1cbiAgYCxcblxuICBpbmxpbmVMaW5rOiBjc3NgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibHVlfTtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMsXG4gICAgJjphY3RpdmUge1xuICAgICAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICAgICAgb3V0bGluZTogMDtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgICYgPiAqIHtcbiAgICAgICAgY29sb3I6ICR7Y29sb3JzLmJsdWV9ICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG4gICAgICB9XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvdHRvbTogMC4xZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5ibHVlfTtcbiAgICAgIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICBgLFxuXG4gIHNtYWxsQnV0dG9uOiBjc3NgXG4gICAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLmJsdWV9O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuYm9yZGVyUmFkaXVzfTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5zbWlzaH07XG4gICAgZm9udC1mYW1pbHk6ICR7Zm9udHMuSmV0QnJhaW5zTW9ub307XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAke3RoZW1lLnRyYW5zaXRpb259O1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy50cmFuc0JsdWV9O1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIGAsXG5cbiAgYmlnQnV0dG9uOiBjc3NgXG4gICAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLmJsdWV9O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuYm9yZGVyUmFkaXVzfTtcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDEuNzVyZW07XG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5zbX07XG4gICAgZm9udC1mYW1pbHk6ICR7Zm9udHMuSmV0QnJhaW5zTW9ub307XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAke3RoZW1lLnRyYW5zaXRpb259O1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy50cmFuc0JsdWV9O1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIGAsXG5cbiAgc2lkZVBhZGRpbmc6IGNzc2BcbiAgICBwYWRkaW5nOiAwIDE1MHB4O1xuICAgICR7bWVkaWEuZGVza3RvcGBwYWRkaW5nOiAwIDEwMHB4O2B9O1xuICAgICR7bWVkaWEudGFibGV0YHBhZGRpbmc6IDAgNTBweDtgfTtcbiAgICAke21lZGlhLnBoYWJsZXRgcGFkZGluZzogMCAyNXB4O2B9O1xuICBgLFxuXG4gIGJveFNoYWRvdzogY3NzYFxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4ICR7Y29sb3JzLnNoYWRvd05hdnl9O1xuICAgIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbn07XG5cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogMCAyMHB4IDMwcHggLTE1cHggJHtjb2xvcnMuc2hhZG93TmF2eX07XG4gICAgfVxuICBgLFxuXG4gIGZhbmN5TGlzdDogY3NzYFxuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5sZ307XG4gICAgbGkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCLilrlcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBjb2xvcjogJHtjb2xvcnMuYmx1ZX07XG4gICAgICB9XG4gICAgfVxuICBgLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWl4aW5zO1xuIiwiaW1wb3J0IHsgaGV4MnJnYmEgfSBmcm9tIFwiLi4vdXRpbHMvaW5kZXhcIjtcblxuY29uc3QgQUNDRU5UID0gXCIjMDA3QkZGXCI7XG5jb25zdCBEYXJrX0JHID0gXCIjMTcxQzI4XCI7XG5jb25zdCBCRyA9IFwiIzBhMTkyZlwiO1xuXG5jb25zdCB0aGVtZSA9IHtcbiAgY29sb3JzOiB7XG4gICAgZGFya05hdnk6IERhcmtfQkcsXG4gICAgbmF2eTogQkcsXG4gICAgbGlnaHROYXZ5OiBcIiMxNzJhNDVcIixcbiAgICBsaWdodGVzdE5hdnk6IFwiIzMwM0M1NVwiLFxuICAgIHNsYXRlOiBcIiM4ODkyYjBcIixcbiAgICBsaWdodFNsYXRlOiBcIiNhOGIyZDFcIixcbiAgICBsaWdodGVzdFNsYXRlOiBcIiNjY2Q2ZjZcIixcbiAgICB3aGl0ZTogXCIjZTZmMWZmXCIsXG4gICAgYmx1ZTogQUNDRU5ULFxuICAgIHRyYW5zQmx1ZTogaGV4MnJnYmEoQUNDRU5ULCAwLjA3KSxcbiAgICBzaGFkb3dOYXZ5OiBoZXgycmdiYShEYXJrX0JHLCAwLjA3KSxcbiAgICBuYXZTaGFkb3c6IFwiICMwMDBkMWFcIixcbiAgfSxcblxuICBmb250czoge1xuICAgIEpldEJyYWluc01vbm86IFwiSmV0QnJhaW5zIE1vbm9cIixcbiAgfSxcblxuICBmb250U2l6ZXM6IHtcbiAgICB4czogXCIxMnB4XCIsXG4gICAgc21pc2g6IFwiMTNweFwiLFxuICAgIHNtOiBcIjE0cHhcIixcbiAgICBtZDogXCIxNnB4XCIsXG4gICAgbGc6IFwiMThweFwiLFxuICAgIHhsOiBcIjIwcHhcIixcbiAgICB4eGw6IFwiMjJweFwiLFxuICAgIGgzOiBcIjMycHhcIixcbiAgfSxcblxuICBlYXNpbmc6IFwiY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpXCIsXG4gIHRyYW5zaXRpb246IFwiYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKVwiLFxuXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgbmF2SGVpZ2h0OiBcIjEwMHB4XCIsXG4gIG5hdlNjcm9sbEhlaWdodDogXCI3MHB4XCIsXG4gIG1hcmdpbjogXCIyMHB4XCIsXG5cbiAgdGFiSGVpZ2h0OiA0MixcbiAgdGFiV2lkdGg6IDEyMCxcbiAgcmFkaXVzOiAzLFxuXG4gIGhhbWJ1cmdlcldpZHRoOiAzMCxcbiAgaGFtQmVmb3JlOiBgdG9wIDAuMXMgZWFzZS1pbiAwLjI1cywgb3BhY2l0eSAwLjFzIGVhc2UtaW5gLFxuICBoYW1CZWZvcmVBY3RpdmU6IGB0b3AgMC4xcyBlYXNlLW91dCwgb3BhY2l0eSAwLjFzIGVhc2Utb3V0IDAuMTJzYCxcbiAgaGFtQWZ0ZXI6IGBib3R0b20gMC4xcyBlYXNlLWluIDAuMjVzLCB0cmFuc2Zvcm0gMC4yMnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSlgLFxuICBoYW1BZnRlckFjdGl2ZTogYGJvdHRvbSAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4yMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSkgMC4xMnNgLFxuXG4gIG5hdkRlbGF5OiAxMDAwLFxuICBsb2FkZXJEZWxheTogMjAwMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIiwiZXhwb3J0IGNvbnN0IHRocm90dGxlID0gKGZ1bmMsIHdhaXQgPSAxMDApID0+IHtcbiAgbGV0IHRpbWVyID0gbnVsbDtcbiAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgaWYgKHRpbWVyID09PSBudWxsKSB7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB0aW1lciA9IG51bGw7XG4gICAgICB9LCB3YWl0KTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgaGV4MnJnYmEgPSAoaGV4LCBhbHBoYSA9IDEpID0+IHtcbiAgY29uc3QgW3IsIGcsIGJdID0gaGV4Lm1hdGNoKC9cXHdcXHcvZykubWFwKCh4KSA9PiBwYXJzZUludCh4LCAxNikpO1xuICByZXR1cm4gYHJnYmEoJHtyfSwke2d9LCR7Yn0sJHthbHBoYX0pYDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmF5LW1hdHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXZlYWwvRmFkZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlY3Vyc2l2ZS1yZWFkZGlyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbWFya1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZW1hcmstaHRtbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==