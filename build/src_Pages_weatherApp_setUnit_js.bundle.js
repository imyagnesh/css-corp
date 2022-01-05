"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcss_corp"] = self["webpackChunkcss_corp"] || []).push([["src_Pages_weatherApp_setUnit_js"],{

/***/ "./src/Pages/weatherApp/setUnit.js":
/*!*****************************************!*\
  !*** ./src/Pages/weatherApp/setUnit.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/weather */ \"./src/Pages/weatherApp/context/weather.js\");\n\n\n\n\nvar setUnit = function setUnit() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_weather__WEBPACK_IMPORTED_MODULE_1__.WeatherConsumer, null, function (_ref) {\n    var changeUnit = _ref.changeUnit,\n        units = _ref.units;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"w-1/3 bg-[#F1F1F1] rounded p-2 uppercase text-sm border\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"Units\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"flex items-center\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", {\n      className: \"mt-4 pb-1 w-full bg-transparent font-bold outline-none capitalize\",\n      id: \"unit-filter\",\n      onChange: function onChange(event) {\n        return changeUnit(event);\n      }\n    }, units.map(function (_ref2) {\n      var key = _ref2.key,\n          title = _ref2.title;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n        value: key,\n        key: key\n      }, title);\n    }))));\n  });\n};\n\nsetUnit.propTypes = {\n  changeUnit: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),\n  units: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({\n    key: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n    title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(setUnit));\n\n//# sourceURL=webpack://css-corp/./src/Pages/weatherApp/setUnit.js?");

/***/ })

}]);