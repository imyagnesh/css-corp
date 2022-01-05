"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcss_corp"] = self["webpackChunkcss_corp"] || []).push([["src_Pages_weatherApp_searchResult_js"],{

/***/ "./src/Pages/weatherApp/searchResult.js":
/*!**********************************************!*\
  !*** ./src/Pages/weatherApp/searchResult.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/weather */ \"./src/Pages/weatherApp/context/weather.js\");\n\n\n\n\nvar SearchResult = function SearchResult() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_weather__WEBPACK_IMPORTED_MODULE_1__.WeatherConsumer, null, function (_ref) {\n    var locations = _ref.locations,\n        loadReportData = _ref.loadReportData;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"z-10 origin-top-right top-[70px] absolute w-full p-4 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none\",\n      role: \"menu\",\n      \"aria-orientation\": \"vertical\",\n      \"aria-labelledby\": \"menu-button\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"py-1\"\n    }, locations.map(function (_ref2) {\n      var name = _ref2.name,\n          country = _ref2.country,\n          lat = _ref2.lat;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n        type: \"button\",\n        className: \"btn-search-result\",\n        key: lat,\n        onClick: function onClick() {\n          loadReportData(\"\".concat(name, \",\").concat(country));\n        }\n      }, name, \",\", country);\n    })));\n  });\n};\n\nSearchResult.PropTypes = {\n  locations: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({\n    name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n    country: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n    lat: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)\n  }),\n  loadReportData: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SearchResult));\n\n//# sourceURL=webpack://css-corp/./src/Pages/weatherApp/searchResult.js?");

/***/ })

}]);