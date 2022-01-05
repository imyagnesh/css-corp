/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcss_corp"] = self["webpackChunkcss_corp"] || []).push([["TodoForm"],{

/***/ "./src/Pages/Todo/todoForm.js":
/*!************************************!*\
  !*** ./src/Pages/Todo/todoForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // import { ThemeContext } from '../../context/themeContext';\n\nvar TodoForm = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {\n  var addTodo = _ref.addTodo,\n      httpStatus = _ref.httpStatus;\n  console.log('TodoForm Render');\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n    onSubmit: addTodo,\n    className: \"flex justify-center my-4\",\n    noValidate: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"text\",\n    ref: ref\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    type: \"submit\",\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('btn-primary', {\n      'bg-gray-400': (httpStatus === null || httpStatus === void 0 ? void 0 : httpStatus.status) === 'REQUEST',\n      'text-white': (httpStatus === null || httpStatus === void 0 ? void 0 : httpStatus.status) === 'REQUEST'\n    }),\n    disabled: (httpStatus === null || httpStatus === void 0 ? void 0 : httpStatus.status) === 'REQUEST'\n  }, \"Add Todo\")));\n});\nTodoForm.propTypes = {\n  addTodo: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),\n  httpStatus: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({\n    status: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['REQUEST', 'FAIL']),\n    type: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['ADD_TODO']),\n    payload: prop_types__WEBPACK_IMPORTED_MODULE_2___default().objectOf(Error)\n  })\n};\nTodoForm.defaultProps = {\n  httpStatus: undefined\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(TodoForm));\n\n//# sourceURL=webpack://css-corp/./src/Pages/Todo/todoForm.js?");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2018 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames() {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tif (arg.length) {\n\t\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\t\tif (inner) {\n\t\t\t\t\t\tclasses.push(inner);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tif (arg.toString === Object.prototype.toString) {\n\t\t\t\t\tfor (var key in arg) {\n\t\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tclasses.push(arg.toString());\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack://css-corp/./node_modules/classnames/index.js?");

/***/ })

}]);