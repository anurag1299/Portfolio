webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/index */ \"./styles/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/alkatraz/Desktop/programs/PROJECT/Portfolio/components/menu.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"font-size: \", \";\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin: 0 auto 10px;\\n    font-size: \", \";\\n  \"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"padding: 10px;\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"width: 75vw;\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"padding: 25px;\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"display: block;\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar colors = _styles_index__WEBPACK_IMPORTED_MODULE_5__[\"theme\"].colors,\n    fontSizes = _styles_index__WEBPACK_IMPORTED_MODULE_5__[\"theme\"].fontSizes,\n    fonts = _styles_index__WEBPACK_IMPORTED_MODULE_5__[\"theme\"].fonts;\nvar StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"menu__StyledContainer\",\n  componentId: \"zki7f3-0\"\n})([\"position:fixed;top:0;bottom:0;right:0;width:100%;height:100vh;z-index:10;outline:0;transition:\", \";transform:translateX(\", \"vw);visibility:\", \";display:none;\", \";\"], _styles_index__WEBPACK_IMPORTED_MODULE_5__[\"theme\"].transition, function (props) {\n  return props.menuOpen ? 0 : 100;\n}, function (props) {\n  return props.menuOpen ? \"visible\" : \"hidden\";\n}, _styles_index__WEBPACK_IMPORTED_MODULE_5__[\"media\"].tablet(_templateObject()));\n_c = StyledContainer;\nvar Sidebar = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].aside.withConfig({\n  displayName: \"menu__Sidebar\",\n  componentId: \"zki7f3-1\"\n})([\"\", \";flex-direction:column;background-color:\", \";padding:50px;width:50vw;height:100%;position:relative;right:0;margin-left:auto;font-family:\", \";box-shadow:-10px 0px 30px -15px \", \";\", \";\", \";\", \";\"], _styles_index__WEBPACK_IMPORTED_MODULE_5__[\"mixins\"].flexCenter, colors.navy, fonts.JetBrainsMono, colors.shadowNavy, _styles_index__WEBPACK_IMPORTED_MODULE_5__[\"media\"].thone(_templateObject2()), _styles_index__WEBPACK_IMPORTED_MODULE_5__[\"media\"].phablet(_templateObject3()), _styles_index__WEBPACK_IMPORTED_MODULE_5__[\"media\"].tiny(_templateObject4()));\n_c2 = Sidebar;\nvar NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].nav.withConfig({\n  displayName: \"menu__NavLinks\",\n  componentId: \"zki7f3-2\"\n})([\"\", \";width:100%;flex-direction:column;text-align:center;color:\", \";\"], _styles_index__WEBPACK_IMPORTED_MODULE_5__[\"mixins\"].flexBetween, colors.lightestSlate);\n_c3 = NavLinks;\nvar NavList = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ol.withConfig({\n  displayName: \"menu__NavList\",\n  componentId: \"zki7f3-3\"\n})([\"padding:0;margin:0;list-style:none;width:100%;\"]);\n_c4 = NavList;\nvar NavListItem = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].li.withConfig({\n  displayName: \"menu__NavListItem\",\n  componentId: \"zki7f3-4\"\n})([\"margin:0 auto 20px;position:relative;font-size:\", \";counter-increment:item 1;\", \";\", \";&:before{display:block;content:\\\"0\\\" counter(item) \\\".\\\";color:\", \";font-size:\", \";margin-bottom:5px;}\"], fontSizes.lg, _styles_index__WEBPACK_IMPORTED_MODULE_5__[\"media\"].thone(_templateObject5(), fontSizes.md), _styles_index__WEBPACK_IMPORTED_MODULE_5__[\"media\"].tiny(_templateObject6(), fontSizes.smish), colors.blue, fontSizes.sm);\n_c5 = NavListItem;\nvar NavLink = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].a.withConfig({\n  displayName: \"menu__NavLink\",\n  componentId: \"zki7f3-5\"\n})([\"\", \";padding:3px 20px 20px;width:100%;\"], _styles_index__WEBPACK_IMPORTED_MODULE_5__[\"mixins\"].link);\n_c6 = NavLink;\nvar ResumeLink = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].a.withConfig({\n  displayName: \"menu__ResumeLink\",\n  componentId: \"zki7f3-6\"\n})([\"\", \";padding:18px 50px;margin:10% auto 0;width:max-content;\"], _styles_index__WEBPACK_IMPORTED_MODULE_5__[\"mixins\"].bigButton);\n_c7 = ResumeLink;\n\nvar Menu = function Menu(_ref) {\n  var menuOpen = _ref.menuOpen,\n      toogleMenu = _ref.toogleMenu;\n\n  var handleMenuClick = function handleMenuClick(e) {\n    //console.log(\"working\");\n    toogleMenu();\n  };\n\n  return __jsx(StyledContainer, {\n    menuOpen: menuOpen,\n    onClick: handleMenuClick,\n    \"aria-hidden\": !menuOpen,\n    tabIndex: menuOpen ? 1 : -1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 5\n    }\n  }, __jsx(Sidebar, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }\n  }, __jsx(NavLinks, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, __jsx(NavList, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }, _config__WEBPACK_IMPORTED_MODULE_3__[\"navLinks\"] && _config__WEBPACK_IMPORTED_MODULE_3__[\"navLinks\"].map(function (_ref2, i) {\n    var url = _ref2.url,\n        name = _ref2.name;\n    return __jsx(NavListItem, {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 17\n      }\n    }, __jsx(NavLink, {\n      href: url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 19\n      }\n    }, name));\n  })), __jsx(ResumeLink, {\n    href: \"/Resume.pdf\",\n    target: \"_blank\",\n    rel: \"nofollow noopener noreferrer\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 11\n    }\n  }, \"Resume\"))));\n};\n\n_c8 = Menu;\nMenu.propTypes = {\n  menuOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,\n  toogleMenu: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"StyledContainer\");\n$RefreshReg$(_c2, \"Sidebar\");\n$RefreshReg$(_c3, \"NavLinks\");\n$RefreshReg$(_c4, \"NavList\");\n$RefreshReg$(_c5, \"NavListItem\");\n$RefreshReg$(_c6, \"NavLink\");\n$RefreshReg$(_c7, \"ResumeLink\");\n$RefreshReg$(_c8, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUuanM/NDUyYSJdLCJuYW1lcyI6WyJjb2xvcnMiLCJ0aGVtZSIsImZvbnRTaXplcyIsImZvbnRzIiwiU3R5bGVkQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwidHJhbnNpdGlvbiIsInByb3BzIiwibWVudU9wZW4iLCJtZWRpYSIsInRhYmxldCIsIlNpZGViYXIiLCJhc2lkZSIsIm1peGlucyIsImZsZXhDZW50ZXIiLCJuYXZ5IiwiSmV0QnJhaW5zTW9ubyIsInNoYWRvd05hdnkiLCJ0aG9uZSIsInBoYWJsZXQiLCJ0aW55IiwiTmF2TGlua3MiLCJuYXYiLCJmbGV4QmV0d2VlbiIsImxpZ2h0ZXN0U2xhdGUiLCJOYXZMaXN0Iiwib2wiLCJOYXZMaXN0SXRlbSIsImxpIiwibGciLCJtZCIsInNtaXNoIiwiYmx1ZSIsInNtIiwiTmF2TGluayIsImEiLCJsaW5rIiwiUmVzdW1lTGluayIsImJpZ0J1dHRvbiIsIk1lbnUiLCJ0b29nbGVNZW51IiwiaGFuZGxlTWVudUNsaWNrIiwiZSIsIm5hdkxpbmtzIiwibWFwIiwiaSIsInVybCIsIm5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtJQUNRQSxNLEdBQTZCQyxtRCxDQUE3QkQsTTtJQUFRRSxTLEdBQXFCRCxtRCxDQUFyQkMsUztJQUFXQyxLLEdBQVVGLG1ELENBQVZFLEs7QUFFM0IsSUFBTUMsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJLQVNMTCxtREFBSyxDQUFDTSxVQVRELEVBVUssVUFBQ0MsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsUUFBTixHQUFpQixD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REYsRUFTRSxNQUFDLFVBQUQ7QUFDRSxRQUFJLEVBQUMsYUFEUDtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDLDhCQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixDQURGLENBTkYsQ0FERjtBQTRCRCxDQWxDRDs7TUFBTVIsSTtBQW9DTkEsSUFBSSxDQUFDUyxTQUFMLEdBQWlCO0FBQ2Z4QyxVQUFRLEVBQUV5QyxpREFBUyxDQUFDQyxJQUFWLENBQWVDLFVBRFY7QUFFZlgsWUFBVSxFQUFFUyxpREFBUyxDQUFDRyxJQUFWLENBQWVEO0FBRlosQ0FBakI7QUFLZVosbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IG5hdkxpbmtzIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHRoZW1lLCBtaXhpbnMsIG1lZGlhIH0gZnJvbSBcIi4uL3N0eWxlcy9pbmRleFwiO1xuY29uc3QgeyBjb2xvcnMsIGZvbnRTaXplcywgZm9udHMgfSA9IHRoZW1lO1xuXG5jb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDEwO1xuICBvdXRsaW5lOiAwO1xuICB0cmFuc2l0aW9uOiAke3RoZW1lLnRyYW5zaXRpb259O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHsocHJvcHMpID0+IChwcm9wcy5tZW51T3BlbiA/IDAgOiAxMDApfXZ3KTtcbiAgdmlzaWJpbGl0eTogJHsocHJvcHMpID0+IChwcm9wcy5tZW51T3BlbiA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIil9O1xuICBkaXNwbGF5OiBub25lO1xuICAke21lZGlhLnRhYmxldGBkaXNwbGF5OiBibG9jaztgfTtcbmA7XG5jb25zdCBTaWRlYmFyID0gc3R5bGVkLmFzaWRlYFxuICAke21peGlucy5mbGV4Q2VudGVyfTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMubmF2eX07XG4gIHBhZGRpbmc6IDUwcHg7XG4gIHdpZHRoOiA1MHZ3O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBmb250LWZhbWlseTogJHtmb250cy5KZXRCcmFpbnNNb25vfTtcbiAgYm94LXNoYWRvdzogLTEwcHggMHB4IDMwcHggLTE1cHggJHtjb2xvcnMuc2hhZG93TmF2eX07XG4gICR7bWVkaWEudGhvbmVgcGFkZGluZzogMjVweDtgfTtcbiAgJHttZWRpYS5waGFibGV0YHdpZHRoOiA3NXZ3O2B9O1xuICAke21lZGlhLnRpbnlgcGFkZGluZzogMTBweDtgfTtcbmA7XG5jb25zdCBOYXZMaW5rcyA9IHN0eWxlZC5uYXZgXG4gICR7bWl4aW5zLmZsZXhCZXR3ZWVufTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICR7Y29sb3JzLmxpZ2h0ZXN0U2xhdGV9O1xuYDtcbmNvbnN0IE5hdkxpc3QgPSBzdHlsZWQub2xgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuY29uc3QgTmF2TGlzdEl0ZW0gPSBzdHlsZWQubGlgXG4gIG1hcmdpbjogMCBhdXRvIDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAke2ZvbnRTaXplcy5sZ307XG4gIGNvdW50ZXItaW5jcmVtZW50OiBpdGVtIDE7XG4gICR7bWVkaWEudGhvbmVgXG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbiAgICBmb250LXNpemU6ICR7Zm9udFNpemVzLm1kfTtcbiAgYH07XG4gICR7bWVkaWEudGlueWBmb250LXNpemU6ICR7Zm9udFNpemVzLnNtaXNofTtgfTtcbiAgJjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6IFwiMFwiIGNvdW50ZXIoaXRlbSkgXCIuXCI7XG4gICAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xuICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZXMuc219O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuYDtcbmNvbnN0IE5hdkxpbmsgPSBzdHlsZWQuYWBcbiAgJHttaXhpbnMubGlua307XG4gIHBhZGRpbmc6IDNweCAyMHB4IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuYDtcbmNvbnN0IFJlc3VtZUxpbmsgPSBzdHlsZWQuYWBcbiAgJHttaXhpbnMuYmlnQnV0dG9ufTtcbiAgcGFkZGluZzogMThweCA1MHB4O1xuICBtYXJnaW46IDEwJSBhdXRvIDA7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbmA7XG5cbmNvbnN0IE1lbnUgPSAoeyBtZW51T3BlbiwgdG9vZ2xlTWVudSB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZU1lbnVDbGljayA9IChlKSA9PiB7XG4gICAgLy9jb25zb2xlLmxvZyhcIndvcmtpbmdcIik7XG4gICAgdG9vZ2xlTWVudSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZENvbnRhaW5lclxuICAgICAgbWVudU9wZW49e21lbnVPcGVufVxuICAgICAgb25DbGljaz17aGFuZGxlTWVudUNsaWNrfVxuICAgICAgYXJpYS1oaWRkZW49eyFtZW51T3Blbn1cbiAgICAgIHRhYkluZGV4PXttZW51T3BlbiA/IDEgOiAtMX1cbiAgICA+XG4gICAgICA8U2lkZWJhcj5cbiAgICAgICAgPE5hdkxpbmtzPlxuICAgICAgICAgIDxOYXZMaXN0PlxuICAgICAgICAgICAge25hdkxpbmtzICYmXG4gICAgICAgICAgICAgIG5hdkxpbmtzLm1hcCgoeyB1cmwsIG5hbWUgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxOYXZMaXN0SXRlbSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj17dXJsfT57bmFtZX08L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC9OYXZMaXN0SXRlbT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9OYXZMaXN0PlxuICAgICAgICAgIDxSZXN1bWVMaW5rXG4gICAgICAgICAgICBocmVmPVwiL1Jlc3VtZS5wZGZcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJlc3VtZVxuICAgICAgICAgIDwvUmVzdW1lTGluaz5cbiAgICAgICAgPC9OYXZMaW5rcz5cbiAgICAgIDwvU2lkZWJhcj5cbiAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbk1lbnUucHJvcFR5cGVzID0ge1xuICBtZW51T3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgdG9vZ2xlTWVudTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/menu.js\n");

/***/ })

})