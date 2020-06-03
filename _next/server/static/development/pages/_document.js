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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
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

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/zeit/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, /*#__PURE__*/_react.default.createElement(Document, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props['data-react-helmet'];

        if ((child === null || child === void 0 ? void 0 : child.type) === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), !disableRuntimeJS && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && page !== '/_error' && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context._documentProps.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return /*#__PURE__*/_react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/zeit/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (false) {}

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH, _constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const pageScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    const appScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && appScript, !disableRuntimeJS && page !== '/_error' && pageScript, disableRuntimeJS || staticMarkup ? null : this.getDynamicChunks(), disableRuntimeJS || staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  const startingUrl = page === '/' ? '/index' : page;
  return buildId ? `${startingUrl}.${buildId}.js` : `${startingUrl}.js`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/alkatraz/Desktop/programs/PROJECT/Portfolio/pages/_document.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // Import styled components ServerStyleSheet


class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  static getInitialProps({
    renderPage
  }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__["ServerStyleSheet"](); // Step 2: Retrieve styles from components in the page

    const page = renderPage(App => props => sheet.collectStyles(__jsx(App, _extends({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 27
      }
    })))); // Step 3: Extract the styles as <style> tags

    const styleTags = sheet.getStyleElement(); // Step 4: Pass styleTags as a prop

    return _objectSpread(_objectSpread({}, page), {}, {
      styleTags
    });
  }

  render() {
    return __jsx("html", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, this.props.styleTags), __jsx("body", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    })));
  }

}

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi private-next-pages/_document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2h0bWxlc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2RvY3VtZW50LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJleHBvcnRzIiwiX19lc01vZHVsZSIsIm1pZGRsZXdhcmUiLCJOZXh0U2NyaXB0IiwiTWFpbiIsIkhlYWQiLCJIdG1sIiwiZGVmYXVsdCIsIl9wcm9wVHlwZXMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX3NlcnZlciIsIl9jb25zdGFudHMiLCJfZG9jdW1lbnRDb250ZXh0IiwiX3V0aWxzIiwiRG9jdW1lbnRDb250ZXh0IiwiRG9jdW1lbnRJbml0aWFsUHJvcHMiLCJEb2N1bWVudFByb3BzIiwiX3V0aWxzMiIsIl9odG1sZXNjYXBlIiwib2JqIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwiaGFzIiwiZ2V0IiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2V0IiwicmVxIiwicmVzIiwiZGVkdXBlIiwiYnVuZGxlcyIsImZpbGVzIiwiU2V0Iiwia2VwdCIsImJ1bmRsZSIsImZpbGUiLCJhZGQiLCJwdXNoIiwiZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50IiwicGF0aCIsInByb2Nlc3MiLCJEb2N1bWVudCIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImVuaGFuY2VycyIsImVuaGFuY2VBcHAiLCJBcHAiLCJlbmhhbmNlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsImh0bWwiLCJoZWFkIiwicmVuZGVyUGFnZSIsInN0eWxlcyIsInJlbmRlckRvY3VtZW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIl9kb2N1bWVudFByb3BzIiwiX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyIsIkRhdGUiLCJub3ciLCJyZW5kZXIiLCJoZWFkVGFnc01pZGRsZXdhcmUiLCJQcm9taXNlIiwiYm9keVRhZ3NNaWRkbGV3YXJlIiwiaHRtbFByb3BzTWlkZGxld2FyZSIsImNvbnN0cnVjdG9yIiwiYXJncyIsImNvbnRleHQiLCJpbkFtcE1vZGUiLCJodG1sUHJvcHMiLCJhc3NpZ24iLCJhbXAiLCJ1bmRlZmluZWQiLCJjb250ZXh0VHlwZSIsInByb3BUeXBlcyIsImNoaWxkcmVuIiwibm9kZSIsImlzUmVxdWlyZWQiLCJnZXRDc3NMaW5rcyIsImFzc2V0UHJlZml4IiwiY3NzRmlsZXMiLCJsZW5ndGgiLCJmaWx0ZXIiLCJmIiwidGVzdCIsImNzc0xpbmtFbGVtZW50cyIsImZvckVhY2giLCJub25jZSIsInJlbCIsImhyZWYiLCJlbmNvZGVVUkkiLCJhcyIsImNyb3NzT3JpZ2luIiwiZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MiLCJkeW5hbWljSW1wb3J0cyIsIm1hcCIsImVuZHNXaXRoIiwiQm9vbGVhbiIsImdldFByZWxvYWRNYWluTGlua3MiLCJwcmVsb2FkRmlsZXMiLCJhbXBQYXRoIiwiaHlicmlkQW1wIiwiY2Fub25pY2FsQmFzZSIsIl9fTkVYVF9EQVRBX18iLCJkYW5nZXJvdXNBc1BhdGgiLCJoZWFkVGFncyIsInVuc3RhYmxlX3J1bnRpbWVKUyIsImRpc2FibGVSdW50aW1lSlMiLCJwYWdlIiwiYnVpbGRJZCIsIkNoaWxkcmVuIiwiY2hpbGQiLCJfY2hpbGQkcHJvcHMiLCJpc1JlYWN0SGVsbWV0IiwidHlwZSIsImNvbnNvbGUiLCJ3YXJuIiwiaGFzQW1waHRtbFJlbCIsImhhc0Nhbm9uaWNhbFJlbCIsImJhZFByb3AiLCJuYW1lIiwic3JjIiwiaW5kZXhPZiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwia2V5cyIsInByb3AiLCJjdXJTdHlsZXMiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNTdHlsZXMiLCJlbCIsIl9lbCRwcm9wcyIsIl9lbCRwcm9wcyRkYW5nZXJvdXNseSIsIl9faHRtbCIsImlzRGV2ZWxvcG1lbnQiLCJGcmFnbWVudCIsImNvbnRlbnQiLCJjb3VudCIsInRvU3RyaW5nIiwiY2xlYW5BbXBQYXRoIiwic3R5bGUiLCJqb2luIiwicmVwbGFjZSIsImFzeW5jIiwiZ2V0QW1wUGF0aCIsImdldFBhZ2VGaWxlIiwiaWQiLCJzdHJpbmciLCJBTVBfUkVOREVSX1RBUkdFVCIsImdldER5bmFtaWNDaHVua3MiLCJtb2Rlcm5Qcm9wcyIsImluY2x1ZGVzIiwiZ2V0U2NyaXB0cyIsImxvd1ByaW9yaXR5RmlsZXMiLCJub3JtYWxTY3JpcHRzIiwibG93UHJpb3JpdHlTY3JpcHRzIiwiZ2V0UG9seWZpbGxTY3JpcHRzIiwicG9seWZpbGxGaWxlcyIsInBvbHlmaWxsIiwibm9Nb2R1bGUiLCJnZXRJbmxpbmVTY3JpcHRTb3VyY2UiLCJkb2N1bWVudFByb3BzIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJodG1sRXNjYXBlSnNvblN0cmluZyIsImVyciIsIm1lc3NhZ2UiLCJFcnJvciIsInN0YXRpY01hcmt1cCIsImRldkZpbGVzIiwiYm9keVRhZ3MiLCJDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUkVBQ1RfUkVGUkVTSCIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9BTVAiLCJDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfV0VCUEFDSyIsInBhZ2VTY3JpcHQiLCJhcHBTY3JpcHQiLCJtYXRjaCIsInNhZmFyaU5vbW9kdWxlRml4IiwiYXNQYXRoIiwic3RhcnRpbmdVcmwiLCJNeURvY3VtZW50Iiwic2hlZXQiLCJTZXJ2ZXJTdHlsZVNoZWV0IiwiY29sbGVjdFN0eWxlcyIsInN0eWxlVGFncyIsImdldFN0eWxlRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJB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QUE7QUFBQTtBQUFBLE9BR0csS0FBS2IsS0FBTCxDQUFXMEksU0FIZCxDQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUUsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FORixDQURGO0FBYUQ7O0FBL0I4QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xqRCx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvX2RvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiKTsiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm1pZGRsZXdhcmU9bWlkZGxld2FyZTtleHBvcnRzLk5leHRTY3JpcHQ9ZXhwb3J0cy5NYWluPWV4cG9ydHMuSGVhZD1leHBvcnRzLkh0bWw9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3Byb3BUeXBlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9zZXJ2ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIikpO3ZhciBfY29uc3RhbnRzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzXCIpO3ZhciBfZG9jdW1lbnRDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5Eb2N1bWVudENvbnRleHQ9X3V0aWxzLkRvY3VtZW50Q29udGV4dDtleHBvcnRzLkRvY3VtZW50SW5pdGlhbFByb3BzPV91dGlscy5Eb2N1bWVudEluaXRpYWxQcm9wcztleHBvcnRzLkRvY3VtZW50UHJvcHM9X3V0aWxzLkRvY3VtZW50UHJvcHM7dmFyIF91dGlsczI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL3NlcnZlci91dGlsc1wiKTt2YXIgX2h0bWxlc2NhcGU9cmVxdWlyZShcIi4uL3NlcnZlci9odG1sZXNjYXBlXCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO31hc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHtyZXEscmVzfSl7fWZ1bmN0aW9uIGRlZHVwZShidW5kbGVzKXtjb25zdCBmaWxlcz1uZXcgU2V0KCk7Y29uc3Qga2VwdD1bXTtmb3IoY29uc3QgYnVuZGxlIG9mIGJ1bmRsZXMpe2lmKGZpbGVzLmhhcyhidW5kbGUuZmlsZSkpY29udGludWU7ZmlsZXMuYWRkKGJ1bmRsZS5maWxlKTtrZXB0LnB1c2goYnVuZGxlKTt9cmV0dXJuIGtlcHQ7fWZ1bmN0aW9uIGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudChwYXRoKXtpZihwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC5qcyQvLCcubW9kdWxlLmpzJyk7fXJldHVybiBwYXRoO30vKipcbiAqIGBEb2N1bWVudGAgY29tcG9uZW50IGhhbmRsZXMgdGhlIGluaXRpYWwgYGRvY3VtZW50YCBtYXJrdXAgYW5kIHJlbmRlcnMgb25seSBvbiB0aGUgc2VydmVyIHNpZGUuXG4gKiBDb21tb25seSB1c2VkIGZvciBpbXBsZW1lbnRpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nIGZvciBgY3NzLWluLWpzYCBsaWJyYXJpZXMuXG4gKi9jbGFzcyBEb2N1bWVudCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7LyoqXG4gICAqIGBnZXRJbml0aWFsUHJvcHNgIGhvb2sgcmV0dXJucyB0aGUgY29udGV4dCBvYmplY3Qgd2l0aCB0aGUgYWRkaXRpb24gb2YgYHJlbmRlclBhZ2VgLlxuICAgKiBgcmVuZGVyUGFnZWAgY2FsbGJhY2sgZXhlY3V0ZXMgYFJlYWN0YCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseSB0byBzdXBwb3J0IHNlcnZlci1yZW5kZXJpbmcgd3JhcHBlcnNcbiAgICovc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpe2NvbnN0IGVuaGFuY2Vycz1wcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUz9hd2FpdCBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKCduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT11bnN0YWJsZS1lbmhhbmNlLWFwcC1zZXJ2ZXIhJykpKS50aGVuKG1vZD0+bW9kLmRlZmF1bHQoY3R4KSk6W107Y29uc3QgZW5oYW5jZUFwcD1BcHA9Pntmb3IoY29uc3QgZW5oYW5jZXIgb2YgZW5oYW5jZXJzKXtBcHA9ZW5oYW5jZXIoQXBwKTt9cmV0dXJuIHByb3BzPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChBcHAscHJvcHMpO307Y29uc3R7aHRtbCxoZWFkfT1hd2FpdCBjdHgucmVuZGVyUGFnZSh7ZW5oYW5jZUFwcH0pO2NvbnN0IHN0eWxlcz1bLi4uKDAsX3NlcnZlci5kZWZhdWx0KSgpLC4uLihwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUz9hd2FpdCBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKCduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT11bnN0YWJsZS1nZXQtc3R5bGVzLXNlcnZlciEnKSkpLnRoZW4obW9kPT5tb2QuZGVmYXVsdChjdHgpKTpbXSldO3JldHVybntodG1sLGhlYWQsc3R5bGVzfTt9c3RhdGljIHJlbmRlckRvY3VtZW50KERvY3VtZW50LHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dC5Qcm92aWRlcix7dmFsdWU6e19kb2N1bWVudFByb3BzOnByb3BzLC8vIEluIGRldiB3ZSBpbnZhbGlkYXRlIHRoZSBjYWNoZSBieSBhcHBlbmRpbmcgYSB0aW1lc3RhbXAgdG8gdGhlIHJlc291cmNlIFVSTC5cbi8vIFRoaXMgaXMgYSB3b3JrYXJvdW5kIHRvIGZpeCBodHRwczovL2dpdGh1Yi5jb20vemVpdC9uZXh0LmpzL2lzc3Vlcy81ODYwXG4vLyBUT0RPOiByZW1vdmUgdGhpcyB3b3JrYXJvdW5kIHdoZW4gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE4NzcyNiBpcyBmaXhlZC5cbl9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmc6cHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbic/Jz90cz0nK0RhdGUubm93KCk6Jyd9fSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChEb2N1bWVudCxwcm9wcykpO31yZW5kZXIoKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIdG1sLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSGVhZCxudWxsKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJvZHlcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE1haW4sbnVsbCksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTmV4dFNjcmlwdCxudWxsKSkpO319ZXhwb3J0cy5kZWZhdWx0PURvY3VtZW50O0RvY3VtZW50LmhlYWRUYWdzTWlkZGxld2FyZT1wcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUz9Qcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKCduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1kb2N1bWVudC1oZWFkLXRhZ3Mtc2VydmVyIScpKSk6KCk9PltdO0RvY3VtZW50LmJvZHlUYWdzTWlkZGxld2FyZT1wcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUz9Qcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKCduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1kb2N1bWVudC1ib2R5LXRhZ3Mtc2VydmVyIScpKSk6KCk9PltdO0RvY3VtZW50Lmh0bWxQcm9wc01pZGRsZXdhcmU9cHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlM/UHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZSgnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9ZG9jdW1lbnQtaHRtbC1wcm9wcy1zZXJ2ZXIhJykpKTooKT0+W107Y2xhc3MgSHRtbCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IoLi4uYXJncyl7c3VwZXIoLi4uYXJncyk7dGhpcy5jb250ZXh0PXZvaWQgMDt9cmVuZGVyKCl7Y29uc3R7aW5BbXBNb2RlLGh0bWxQcm9wc309dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaHRtbFwiLE9iamVjdC5hc3NpZ24oe30saHRtbFByb3BzLHRoaXMucHJvcHMse2FtcDppbkFtcE1vZGU/Jyc6dW5kZWZpbmVkLFwiZGF0YS1hbXBkZXZtb2RlXCI6aW5BbXBNb2RlJiZwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJz8nJzp1bmRlZmluZWR9KSk7fX1leHBvcnRzLkh0bWw9SHRtbDtIdG1sLmNvbnRleHRUeXBlPV9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0O0h0bWwucHJvcFR5cGVzPXtjaGlsZHJlbjpfcHJvcFR5cGVzLmRlZmF1bHQubm9kZS5pc1JlcXVpcmVkfTtjbGFzcyBIZWFkIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3RvciguLi5hcmdzKXtzdXBlciguLi5hcmdzKTt0aGlzLmNvbnRleHQ9dm9pZCAwO31nZXRDc3NMaW5rcygpe2NvbnN0e2Fzc2V0UHJlZml4LGZpbGVzfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O2NvbnN0IGNzc0ZpbGVzPWZpbGVzJiZmaWxlcy5sZW5ndGg/ZmlsZXMuZmlsdGVyKGY9Pi9cXC5jc3MkLy50ZXN0KGYpKTpbXTtjb25zdCBjc3NMaW5rRWxlbWVudHM9W107Y3NzRmlsZXMuZm9yRWFjaChmaWxlPT57Y3NzTGlua0VsZW1lbnRzLnB1c2goLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTpgJHtmaWxlfS1wcmVsb2FkYCxub25jZTp0aGlzLnByb3BzLm5vbmNlLHJlbDpcInByZWxvYWRcIixocmVmOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxhczpcInN0eWxlXCIsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0pLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6ZmlsZSxub25jZTp0aGlzLnByb3BzLm5vbmNlLHJlbDpcInN0eWxlc2hlZXRcIixocmVmOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSkpO30pO3JldHVybiBjc3NMaW5rRWxlbWVudHMubGVuZ3RoPT09MD9udWxsOmNzc0xpbmtFbGVtZW50czt9Z2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKXtjb25zdHtkeW5hbWljSW1wb3J0cyxhc3NldFByZWZpeH09dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2NvbnN0e19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtyZXR1cm4gZGVkdXBlKGR5bmFtaWNJbXBvcnRzKS5tYXAoYnVuZGxlPT57Ly8gYGR5bmFtaWNJbXBvcnRzYCB3aWxsIGNvbnRhaW4gYm90aCBgLmpzYCBhbmQgYC5tb2R1bGUuanNgIHdoZW4gdGhlXG4vLyBmZWF0dXJlIGlzIGVuYWJsZWQuIFRoaXMgY2xhdXNlIHdpbGwgZmlsdGVyIGRvd24gdG8gdGhlIG1vZGVyblxuLy8gdmFyaWFudHMgb25seS5cbmlmKCFidW5kbGUuZmlsZS5lbmRzV2l0aChnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoJy5qcycpKSl7cmV0dXJuIG51bGw7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJwcmVsb2FkXCIsa2V5OmJ1bmRsZS5maWxlLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGJ1bmRsZS5maWxlKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxhczpcInNjcmlwdFwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0pO30pLy8gRmlsdGVyIG91dCBudWxsZWQgc2NyaXB0c1xuLmZpbHRlcihCb29sZWFuKTt9Z2V0UHJlbG9hZE1haW5MaW5rcygpe2NvbnN0e2Fzc2V0UHJlZml4LGZpbGVzfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O2NvbnN0IHByZWxvYWRGaWxlcz1maWxlcyYmZmlsZXMubGVuZ3RoP2ZpbGVzLmZpbHRlcihmaWxlPT57Ly8gYGR5bmFtaWNJbXBvcnRzYCB3aWxsIGNvbnRhaW4gYm90aCBgLmpzYCBhbmQgYC5tb2R1bGUuanNgIHdoZW5cbi8vIHRoZSBmZWF0dXJlIGlzIGVuYWJsZWQuIFRoaXMgY2xhdXNlIHdpbGwgZmlsdGVyIGRvd24gdG8gdGhlXG4vLyBtb2Rlcm4gdmFyaWFudHMgb25seS5cbnJldHVybiBmaWxlLmVuZHNXaXRoKGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCgnLmpzJykpO30pOltdO3JldHVybiFwcmVsb2FkRmlsZXMubGVuZ3RoP251bGw6cHJlbG9hZEZpbGVzLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmZpbGUsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJwcmVsb2FkXCIsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWAsYXM6XCJzY3JpcHRcIixjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSkpO31yZW5kZXIoKXtjb25zdHtzdHlsZXMsYW1wUGF0aCxpbkFtcE1vZGUsYXNzZXRQcmVmaXgsaHlicmlkQW1wLGNhbm9uaWNhbEJhc2UsX19ORVhUX0RBVEFfXyxkYW5nZXJvdXNBc1BhdGgsaGVhZFRhZ3MsdW5zdGFibGVfcnVudGltZUpTfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3QgZGlzYWJsZVJ1bnRpbWVKUz11bnN0YWJsZV9ydW50aW1lSlM9PT1mYWxzZTtjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7Y29uc3R7cGFnZSxidWlsZElkfT1fX05FWFRfREFUQV9fO2xldHtoZWFkfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7bGV0IGNoaWxkcmVuPXRoaXMucHJvcHMuY2hpbGRyZW47Ly8gc2hvdyBhIHdhcm5pbmcgaWYgSGVhZCBjb250YWlucyA8dGl0bGU+IChvbmx5IGluIGRldmVsb3BtZW50KVxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NoaWxkcmVuPV9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChjaGlsZHJlbixjaGlsZD0+e3ZhciBfY2hpbGQkcHJvcHM7Y29uc3QgaXNSZWFjdEhlbG1ldD1jaGlsZD09PW51bGx8fGNoaWxkPT09dm9pZCAwP3ZvaWQgMDooX2NoaWxkJHByb3BzPWNoaWxkLnByb3BzKT09PW51bGx8fF9jaGlsZCRwcm9wcz09PXZvaWQgMD92b2lkIDA6X2NoaWxkJHByb3BzWydkYXRhLXJlYWN0LWhlbG1ldCddO2lmKChjaGlsZD09PW51bGx8fGNoaWxkPT09dm9pZCAwP3ZvaWQgMDpjaGlsZC50eXBlKT09PSd0aXRsZScmJiFpc1JlYWN0SGVsbWV0KXtjb25zb2xlLndhcm4oXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvbm8tZG9jdW1lbnQtdGl0bGVcIik7fXJldHVybiBjaGlsZDt9KTtpZih0aGlzLnByb3BzLmNyb3NzT3JpZ2luKWNvbnNvbGUud2FybignV2FybmluZzogYEhlYWRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL25leHQuanMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnKTt9bGV0IGhhc0FtcGh0bWxSZWw9ZmFsc2U7bGV0IGhhc0Nhbm9uaWNhbFJlbD1mYWxzZTsvLyBzaG93IHdhcm5pbmcgYW5kIHJlbW92ZSBjb25mbGljdGluZyBhbXAgaGVhZCB0YWdzXG5oZWFkPV9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChoZWFkfHxbXSxjaGlsZD0+e2lmKCFjaGlsZClyZXR1cm4gY2hpbGQ7Y29uc3R7dHlwZSxwcm9wc309Y2hpbGQ7aWYoaW5BbXBNb2RlKXtsZXQgYmFkUHJvcD0nJztpZih0eXBlPT09J21ldGEnJiZwcm9wcy5uYW1lPT09J3ZpZXdwb3J0Jyl7YmFkUHJvcD0nbmFtZT1cInZpZXdwb3J0XCInO31lbHNlIGlmKHR5cGU9PT0nbGluaycmJnByb3BzLnJlbD09PSdjYW5vbmljYWwnKXtoYXNDYW5vbmljYWxSZWw9dHJ1ZTt9ZWxzZSBpZih0eXBlPT09J3NjcmlwdCcpey8vIG9ubHkgYmxvY2sgaWZcbi8vIDEuIGl0IGhhcyBhIHNyYyBhbmQgaXNuJ3QgcG9pbnRpbmcgdG8gYW1wcHJvamVjdCdzIENETlxuLy8gMi4gaXQgaXMgdXNpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgd2l0aG91dCBhIHR5cGUgb3Jcbi8vIGEgdHlwZSBvZiB0ZXh0L2phdmFzY3JpcHRcbmlmKHByb3BzLnNyYyYmcHJvcHMuc3JjLmluZGV4T2YoJ2FtcHByb2plY3QnKTwtMXx8cHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJighcHJvcHMudHlwZXx8cHJvcHMudHlwZT09PSd0ZXh0L2phdmFzY3JpcHQnKSl7YmFkUHJvcD0nPHNjcmlwdCc7T2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2gocHJvcD0+e2JhZFByb3ArPWAgJHtwcm9wfT1cIiR7cHJvcHNbcHJvcF19XCJgO30pO2JhZFByb3ArPScvPic7fX1pZihiYWRQcm9wKXtjb25zb2xlLndhcm4oYEZvdW5kIGNvbmZsaWN0aW5nIGFtcCB0YWcgXCIke2NoaWxkLnR5cGV9XCIgd2l0aCBjb25mbGljdGluZyBwcm9wICR7YmFkUHJvcH0gaW4gJHtfX05FWFRfREFUQV9fLnBhZ2V9LiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2NvbmZsaWN0aW5nLWFtcC10YWdgKTtyZXR1cm4gbnVsbDt9fWVsc2V7Ly8gbm9uLWFtcCBtb2RlXG5pZih0eXBlPT09J2xpbmsnJiZwcm9wcy5yZWw9PT0nYW1waHRtbCcpe2hhc0FtcGh0bWxSZWw9dHJ1ZTt9fXJldHVybiBjaGlsZDt9KTsvLyB0cnkgdG8gcGFyc2Ugc3R5bGVzIGZyb20gZnJhZ21lbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRcbmNvbnN0IGN1clN0eWxlcz1BcnJheS5pc0FycmF5KHN0eWxlcyk/c3R5bGVzOltdO2lmKGluQW1wTW9kZSYmc3R5bGVzJiYvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbnN0eWxlcy5wcm9wcyYmLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG5BcnJheS5pc0FycmF5KHN0eWxlcy5wcm9wcy5jaGlsZHJlbikpe2NvbnN0IGhhc1N0eWxlcz1lbD0+e3ZhciBfZWwkcHJvcHMsX2VsJHByb3BzJGRhbmdlcm91c2x5O3JldHVybiBlbD09PW51bGx8fGVsPT09dm9pZCAwP3ZvaWQgMDooX2VsJHByb3BzPWVsLnByb3BzKT09PW51bGx8fF9lbCRwcm9wcz09PXZvaWQgMD92b2lkIDA6KF9lbCRwcm9wcyRkYW5nZXJvdXNseT1fZWwkcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpPT09bnVsbHx8X2VsJHByb3BzJGRhbmdlcm91c2x5PT09dm9pZCAwP3ZvaWQgMDpfZWwkcHJvcHMkZGFuZ2Vyb3VzbHkuX19odG1sO307Ly8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG5zdHlsZXMucHJvcHMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZD0+e2lmKEFycmF5LmlzQXJyYXkoY2hpbGQpKXtjaGlsZC5mb3JFYWNoKGVsPT5oYXNTdHlsZXMoZWwpJiZjdXJTdHlsZXMucHVzaChlbCkpO31lbHNlIGlmKGhhc1N0eWxlcyhjaGlsZCkpe2N1clN0eWxlcy5wdXNoKGNoaWxkKTt9fSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaGVhZFwiLHRoaXMucHJvcHMsdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzLmlzRGV2ZWxvcG1lbnQmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtcImRhdGEtbmV4dC1oaWRlLWZvdWNcIjp0cnVlLFwiZGF0YS1hbXBkZXZtb2RlXCI6aW5BbXBNb2RlPyd0cnVlJzp1bmRlZmluZWQsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpgYm9keXtkaXNwbGF5Om5vbmV9YH19KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIse1wiZGF0YS1uZXh0LWhpZGUtZm91Y1wiOnRydWUsXCJkYXRhLWFtcGRldm1vZGVcIjppbkFtcE1vZGU/J3RydWUnOnVuZGVmaW5lZH0sLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5e2Rpc3BsYXk6YmxvY2t9YH19KSkpLGNoaWxkcmVuLGhlYWQsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJuZXh0LWhlYWQtY291bnRcIixjb250ZW50Ol9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KGhlYWR8fFtdKS50b1N0cmluZygpfSksaW5BbXBNb2RlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwidmlld3BvcnRcIixjb250ZW50Olwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIn0pLCFoYXNDYW5vbmljYWxSZWwmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJjYW5vbmljYWxcIixocmVmOmNhbm9uaWNhbEJhc2UrKDAsX3V0aWxzMi5jbGVhbkFtcFBhdGgpKGRhbmdlcm91c0FzUGF0aCl9KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwicHJlbG9hZFwiLGFzOlwic2NyaXB0XCIsaHJlZjpcImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJ9KSxzdHlsZXMmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJhbXAtY3VzdG9tXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmN1clN0eWxlcy5tYXAoc3R5bGU9PnN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCkuam9pbignJykucmVwbGFjZSgvXFwvXFwqIyBzb3VyY2VNYXBwaW5nVVJMPS4qXFwqXFwvL2csJycpLnJlcGxhY2UoL1xcL1xcKkAgc291cmNlVVJMPS4qP1xcKlxcLy9nLCcnKX19KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiYW1wLWJvaWxlcnBsYXRlXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5ey13ZWJraXQtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1vei1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbXMtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7YW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGh9QC13ZWJraXQta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbW96LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1zLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW8ta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUBrZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19YH19KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiYW1wLWJvaWxlcnBsYXRlXCI6XCJcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YH19KSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7YXN5bmM6dHJ1ZSxzcmM6XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wifSkpLCFpbkFtcE1vZGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsIWhhc0FtcGh0bWxSZWwmJmh5YnJpZEFtcCYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcImFtcGh0bWxcIixocmVmOmNhbm9uaWNhbEJhc2UrZ2V0QW1wUGF0aChhbXBQYXRoLGRhbmdlcm91c0FzUGF0aCl9KSx0aGlzLmdldENzc0xpbmtzKCksIWRpc2FibGVSdW50aW1lSlMmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJwcmVsb2FkXCIsaHJlZjphc3NldFByZWZpeCtnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoZW5jb2RlVVJJKGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMvX2FwcC5qc2ApKStfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLGFzOlwic2NyaXB0XCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSksIWRpc2FibGVSdW50aW1lSlMmJnBhZ2UhPT0nL19lcnJvcicmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJwcmVsb2FkXCIsaHJlZjphc3NldFByZWZpeCtnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoZW5jb2RlVVJJKGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMke2dldFBhZ2VGaWxlKHBhZ2UpfWApKStfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLGFzOlwic2NyaXB0XCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSksIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSwhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXRQcmVsb2FkTWFpbkxpbmtzKCksdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzLmlzRGV2ZWxvcG1lbnQmJi8qI19fUFVSRV9fKi8gLy8gdGhpcyBlbGVtZW50IGlzIHVzZWQgdG8gbW91bnQgZGV2ZWxvcG1lbnQgc3R5bGVzIHNvIHRoZVxuLy8gb3JkZXJpbmcgbWF0Y2hlcyBwcm9kdWN0aW9uXG4vLyAoYnkgZGVmYXVsdCwgc3R5bGUtbG9hZGVyIGluamVjdHMgYXQgdGhlIGJvdHRvbSBvZiA8aGVhZCAvPilcbl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLHtpZDpcIl9fbmV4dF9jc3NfX0RPX05PVF9VU0VfX1wifSksc3R5bGVzfHxudWxsKSxfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LHt9LC4uLihoZWFkVGFnc3x8W10pKSk7fX1leHBvcnRzLkhlYWQ9SGVhZDtIZWFkLmNvbnRleHRUeXBlPV9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0O0hlYWQucHJvcFR5cGVzPXtub25jZTpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLGNyb3NzT3JpZ2luOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmd9O2NsYXNzIE1haW4gZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKC4uLmFyZ3Mpe3N1cGVyKC4uLmFyZ3MpO3RoaXMuY29udGV4dD12b2lkIDA7fXJlbmRlcigpe2NvbnN0e2luQW1wTW9kZSxodG1sfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7aWYoaW5BbXBNb2RlKXJldHVybiBfY29uc3RhbnRzLkFNUF9SRU5ERVJfVEFSR0VUO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2lkOlwiX19uZXh0XCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpodG1sfX0pO319ZXhwb3J0cy5NYWluPU1haW47TWFpbi5jb250ZXh0VHlwZT1fZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dDtjbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3RvciguLi5hcmdzKXtzdXBlciguLi5hcmdzKTt0aGlzLmNvbnRleHQ9dm9pZCAwO31nZXREeW5hbWljQ2h1bmtzKCl7Y29uc3R7ZHluYW1pY0ltcG9ydHMsYXNzZXRQcmVmaXgsZmlsZXN9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7cmV0dXJuIGRlZHVwZShkeW5hbWljSW1wb3J0cykubWFwKGJ1bmRsZT0+e2xldCBtb2Rlcm5Qcm9wcz17fTtpZihwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKXttb2Rlcm5Qcm9wcz0vXFwubW9kdWxlXFwuanMkLy50ZXN0KGJ1bmRsZS5maWxlKT97dHlwZTonbW9kdWxlJ306e25vTW9kdWxlOnRydWV9O31pZighL1xcLmpzJC8udGVzdChidW5kbGUuZmlsZSl8fGZpbGVzLmluY2x1ZGVzKGJ1bmRsZS5maWxlKSlyZXR1cm4gbnVsbDtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLE9iamVjdC5hc3NpZ24oe2FzeW5jOnRydWUsa2V5OmJ1bmRsZS5maWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoYnVuZGxlLmZpbGUpfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0sbW9kZXJuUHJvcHMpKTt9KTt9Z2V0U2NyaXB0cygpe2NvbnN0e2Fzc2V0UHJlZml4LGZpbGVzLGxvd1ByaW9yaXR5RmlsZXN9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7Y29uc3Qgbm9ybWFsU2NyaXB0cz1maWxlcz09PW51bGx8fGZpbGVzPT09dm9pZCAwP3ZvaWQgMDpmaWxlcy5maWx0ZXIoZmlsZT0+ZmlsZS5lbmRzV2l0aCgnLmpzJykpO2NvbnN0IGxvd1ByaW9yaXR5U2NyaXB0cz1sb3dQcmlvcml0eUZpbGVzPT09bnVsbHx8bG93UHJpb3JpdHlGaWxlcz09PXZvaWQgMD92b2lkIDA6bG93UHJpb3JpdHlGaWxlcy5maWx0ZXIoZmlsZT0+ZmlsZS5lbmRzV2l0aCgnLmpzJykpO3JldHVyblsuLi5ub3JtYWxTY3JpcHRzLC4uLmxvd1ByaW9yaXR5U2NyaXB0c10ubWFwKGZpbGU9PntsZXQgbW9kZXJuUHJvcHM9e307aWYocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCl7bW9kZXJuUHJvcHM9ZmlsZS5lbmRzV2l0aCgnLm1vZHVsZS5qcycpP3t0eXBlOidtb2R1bGUnfTp7bm9Nb2R1bGU6dHJ1ZX07fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsT2JqZWN0LmFzc2lnbih7a2V5OmZpbGUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGFzeW5jOnRydWUsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0sbW9kZXJuUHJvcHMpKTt9KTt9Z2V0UG9seWZpbGxTY3JpcHRzKCl7Ly8gcG9seWZpbGxzLmpzIGhhcyB0byBiZSByZW5kZXJlZCBhcyBub21vZHVsZSB3aXRob3V0IGFzeW5jXG4vLyBJdCBhbHNvIGhhcyB0byBiZSB0aGUgZmlyc3Qgc2NyaXB0IHRvIGxvYWRcbmNvbnN0e2Fzc2V0UHJlZml4LHBvbHlmaWxsRmlsZXN9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7cmV0dXJuIHBvbHlmaWxsRmlsZXMuZmlsdGVyKHBvbHlmaWxsPT5wb2x5ZmlsbC5lbmRzV2l0aCgnLmpzJykmJiEvXFwubW9kdWxlXFwuanMkLy50ZXN0KHBvbHlmaWxsKSkubWFwKHBvbHlmaWxsPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6cG9seWZpbGwsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2luLG5vTW9kdWxlOnRydWUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke3BvbHlmaWxsfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gfSkpO31zdGF0aWMgZ2V0SW5saW5lU2NyaXB0U291cmNlKGRvY3VtZW50UHJvcHMpe2NvbnN0e19fTkVYVF9EQVRBX199PWRvY3VtZW50UHJvcHM7dHJ5e2NvbnN0IGRhdGE9SlNPTi5zdHJpbmdpZnkoX19ORVhUX0RBVEFfXyk7cmV0dXJuKDAsX2h0bWxlc2NhcGUuaHRtbEVzY2FwZUpzb25TdHJpbmcpKGRhdGEpO31jYXRjaChlcnIpe2lmKGVyci5tZXNzYWdlLmluZGV4T2YoJ2NpcmN1bGFyIHN0cnVjdHVyZScpKXt0aHJvdyBuZXcgRXJyb3IoYENpcmN1bGFyIHN0cnVjdHVyZSBpbiBcImdldEluaXRpYWxQcm9wc1wiIHJlc3VsdCBvZiBwYWdlIFwiJHtfX05FWFRfREFUQV9fLnBhZ2V9XCIuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9jaXJjdWxhci1zdHJ1Y3R1cmVgKTt9dGhyb3cgZXJyO319cmVuZGVyKCl7Y29uc3R7c3RhdGljTWFya3VwLGFzc2V0UHJlZml4LGluQW1wTW9kZSxkZXZGaWxlcyxfX05FWFRfREFUQV9fLGJvZHlUYWdzLHVuc3RhYmxlX3J1bnRpbWVKU309dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2NvbnN0IGRpc2FibGVSdW50aW1lSlM9dW5zdGFibGVfcnVudGltZUpTPT09ZmFsc2U7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O2lmKGluQW1wTW9kZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicpe3JldHVybiBudWxsO31jb25zdCBkZXZGaWxlcz1bX2NvbnN0YW50cy5DTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUkVBQ1RfUkVGUkVTSCxfY29uc3RhbnRzLkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9BTVAsX2NvbnN0YW50cy5DTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfV0VCUEFDS107cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCxzdGF0aWNNYXJrdXB8fGRpc2FibGVSdW50aW1lSlM/bnVsbDovKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtpZDpcIl9fTkVYVF9EQVRBX19cIix0eXBlOlwiYXBwbGljYXRpb24vanNvblwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOk5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcyl9LFwiZGF0YS1hbXBkZXZtb2RlXCI6dHJ1ZX0pLGRldkZpbGVzP2RldkZpbGVzLm1hcChmaWxlPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6ZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZmlsZX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW4sXCJkYXRhLWFtcGRldm1vZGVcIjp0cnVlfSkpOm51bGwsX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCx7fSwuLi4oYm9keVRhZ3N8fFtdKSkpO31jb25zdHtwYWdlLGJ1aWxkSWR9PV9fTkVYVF9EQVRBX187aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pY29uc29sZS53YXJuKCdXYXJuaW5nOiBgTmV4dFNjcmlwdGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCcpO31jb25zdCBwYWdlU2NyaXB0PVsvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLE9iamVjdC5hc3NpZ24oe2FzeW5jOnRydWUsXCJkYXRhLW5leHQtcGFnZVwiOnBhZ2Usa2V5OnBhZ2Usc3JjOmFzc2V0UHJlZml4K2VuY29kZVVSSShgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzJHtnZXRQYWdlRmlsZShwYWdlKX1gKStfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0scHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRD97bm9Nb2R1bGU6dHJ1ZX06e30pKSxwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHthc3luYzp0cnVlLFwiZGF0YS1uZXh0LXBhZ2VcIjpwYWdlLGtleTpgJHtwYWdlfS1tb2Rlcm5gLHNyYzphc3NldFByZWZpeCtnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoZW5jb2RlVVJJKGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMke2dldFBhZ2VGaWxlKHBhZ2UpfWApKStfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbix0eXBlOlwibW9kdWxlXCJ9KV07Y29uc3QgYXBwU2NyaXB0PVsvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLE9iamVjdC5hc3NpZ24oe2FzeW5jOnRydWUsXCJkYXRhLW5leHQtcGFnZVwiOlwiL19hcHBcIixzcmM6YXNzZXRQcmVmaXgrYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcy9fYXBwLmpzYCtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLGtleTpcIl9hcHBcIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59LHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQ/e25vTW9kdWxlOnRydWV9Ont9KSkscHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7YXN5bmM6dHJ1ZSxcImRhdGEtbmV4dC1wYWdlXCI6XCIvX2FwcFwiLHNyYzphc3NldFByZWZpeCtgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzL19hcHAubW9kdWxlLmpzYCtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLGtleTpcIl9hcHAtbW9kZXJuXCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2luLHR5cGU6XCJtb2R1bGVcIn0pXTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLCFkaXNhYmxlUnVudGltZUpTJiZkZXZGaWxlcz9kZXZGaWxlcy5tYXAoZmlsZT0+IWZpbGUubWF0Y2goL1xcLmpzXFwubWFwLykmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWAsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSkpOm51bGwsc3RhdGljTWFya3VwfHxkaXNhYmxlUnVudGltZUpTP251bGw6LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7aWQ6XCJfX05FWFRfREFUQV9fXCIsdHlwZTpcImFwcGxpY2F0aW9uL2pzb25cIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW4sZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHMpfX0pLHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQmJiFkaXNhYmxlUnVudGltZUpTPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse25vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbixub01vZHVsZTp0cnVlLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6TmV4dFNjcmlwdC5zYWZhcmlOb21vZHVsZUZpeH19KTpudWxsLCFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpLCFkaXNhYmxlUnVudGltZUpTJiZhcHBTY3JpcHQsIWRpc2FibGVSdW50aW1lSlMmJnBhZ2UhPT0nL19lcnJvcicmJnBhZ2VTY3JpcHQsZGlzYWJsZVJ1bnRpbWVKU3x8c3RhdGljTWFya3VwP251bGw6dGhpcy5nZXREeW5hbWljQ2h1bmtzKCksZGlzYWJsZVJ1bnRpbWVKU3x8c3RhdGljTWFya3VwP251bGw6dGhpcy5nZXRTY3JpcHRzKCksX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCx7fSwuLi4oYm9keVRhZ3N8fFtdKSkpO319ZXhwb3J0cy5OZXh0U2NyaXB0PU5leHRTY3JpcHQ7TmV4dFNjcmlwdC5jb250ZXh0VHlwZT1fZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dDtOZXh0U2NyaXB0LnByb3BUeXBlcz17bm9uY2U6X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxjcm9zc09yaWdpbjpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nfTtOZXh0U2NyaXB0LnNhZmFyaU5vbW9kdWxlRml4PSchZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudCx0PWUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZighKFwibm9Nb2R1bGVcImluIHQpJiZcIm9uYmVmb3JlbG9hZFwiaW4gdCl7dmFyIG49ITE7ZS5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlbG9hZFwiLGZ1bmN0aW9uKGUpe2lmKGUudGFyZ2V0PT09dCluPSEwO2Vsc2UgaWYoIWUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcIm5vbW9kdWxlXCIpfHwhbilyZXR1cm47ZS5wcmV2ZW50RGVmYXVsdCgpfSwhMCksdC50eXBlPVwibW9kdWxlXCIsdC5zcmM9XCIuXCIsZS5oZWFkLmFwcGVuZENoaWxkKHQpLHQucmVtb3ZlKCl9fSgpOyc7ZnVuY3Rpb24gZ2V0QW1wUGF0aChhbXBQYXRoLGFzUGF0aCl7cmV0dXJuIGFtcFBhdGh8fGAke2FzUGF0aH0ke2FzUGF0aC5pbmNsdWRlcygnPycpPycmJzonPyd9YW1wPTFgO31mdW5jdGlvbiBnZXRQYWdlRmlsZShwYWdlLGJ1aWxkSWQpe2NvbnN0IHN0YXJ0aW5nVXJsPXBhZ2U9PT0nLyc/Jy9pbmRleCc6cGFnZTtyZXR1cm4gYnVpbGRJZD9gJHtzdGFydGluZ1VybH0uJHtidWlsZElkfS5qc2A6YCR7c3RhcnRpbmdVcmx9LmpzYDt9IiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5odG1sRXNjYXBlSnNvblN0cmluZz1odG1sRXNjYXBlSnNvblN0cmluZzsvLyBUaGlzIHV0aWxpdHkgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZVxuLy8gTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZS9ibG9iLzA1MjdjYTcxNTZhNTI0ZDI1NjEwMWJiMzEwYTlmOTcwZjYzMDc4YWQvTElDRU5TRVxuY29uc3QgRVNDQVBFX0xPT0tVUD17JyYnOidcXFxcdTAwMjYnLCc+JzonXFxcXHUwMDNlJywnPCc6J1xcXFx1MDAzYycsJ1xcdTIwMjgnOidcXFxcdTIwMjgnLCdcXHUyMDI5JzonXFxcXHUyMDI5J307Y29uc3QgRVNDQVBFX1JFR0VYPS9bJj48XFx1MjAyOFxcdTIwMjldL2c7ZnVuY3Rpb24gaHRtbEVzY2FwZUpzb25TdHJpbmcoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoRVNDQVBFX1JFR0VYLG1hdGNoPT5FU0NBUEVfTE9PS1VQW21hdGNoXSk7fSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19kb2N1bWVudCcpXG4iLCJpbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XG5cbi8vIEltcG9ydCBzdHlsZWQgY29tcG9uZW50cyBTZXJ2ZXJTdHlsZVNoZWV0XG5pbXBvcnQgeyBTZXJ2ZXJTdHlsZVNoZWV0IH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyByZW5kZXJQYWdlIH0pIHtcbiAgICAvLyBTdGVwIDE6IENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBTZXJ2ZXJTdHlsZVNoZWV0XG4gICAgY29uc3Qgc2hlZXQgPSBuZXcgU2VydmVyU3R5bGVTaGVldCgpO1xuXG4gICAgLy8gU3RlcCAyOiBSZXRyaWV2ZSBzdHlsZXMgZnJvbSBjb21wb25lbnRzIGluIHRoZSBwYWdlXG4gICAgY29uc3QgcGFnZSA9IHJlbmRlclBhZ2UoKEFwcCkgPT4gKHByb3BzKSA9PlxuICAgICAgc2hlZXQuY29sbGVjdFN0eWxlcyg8QXBwIHsuLi5wcm9wc30gLz4pXG4gICAgKTtcblxuICAgIC8vIFN0ZXAgMzogRXh0cmFjdCB0aGUgc3R5bGVzIGFzIDxzdHlsZT4gdGFnc1xuICAgIGNvbnN0IHN0eWxlVGFncyA9IHNoZWV0LmdldFN0eWxlRWxlbWVudCgpO1xuXG4gICAgLy8gU3RlcCA0OiBQYXNzIHN0eWxlVGFncyBhcyBhIHByb3BcbiAgICByZXR1cm4geyAuLi5wYWdlLCBzdHlsZVRhZ3MgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIHsvKiBTdGVwIDU6IE91dHB1dCB0aGUgc3R5bGVzIGluIHRoZSBoZWFkICAqL31cblxuICAgICAgICAgIHt0aGlzLnByb3BzLnN0eWxlVGFnc31cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICApO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=