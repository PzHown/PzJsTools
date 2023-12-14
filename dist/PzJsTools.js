/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Tools/domTools.js":
/*!***************************!*\
  !*** ./Tools/domTools.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n *  创建div\r\n * @param {元素Id} id \r\n * @param {元素文本} text \r\n * @returns { HTMLDivElement类} div1: HTMLDivElement\r\n */\nvar creatADiv = function creatADiv(id, text) {\n  //在body末尾中添加一个div\n  var div1 = document.createElement(\"div\");\n  div1.setAttribute(\"id\", id);\n  //内容为list\n  div1.innerHTML = text;\n  //透明度为0.5\n  div1.style.opacity = \"0.5\";\n  div1.style.width = \"20px\";\n  div1.style.height = \"20px\";\n  div1.style.background = \"grey\";\n  div1.style.position = \"fixed\";\n  div1.style.bottom = \"40px\";\n  div1.style.left = \"40px\";\n  div1.style.zIndex = \"99999999\";\n  div1.style.cursor = \"pointer\";\n  div1.style.borderRadius = \"50%\";\n  return div1;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  creatADiv: creatADiv\n});\n\n//# sourceURL=webpack://pzjstools/./Tools/domTools.js?");

/***/ }),

/***/ "./Tools/timeTools.js":
/*!****************************!*\
  !*** ./Tools/timeTools.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n *  休眠函数\r\n * @param {延迟时间} ms \r\n * @returns Promise\r\n */\nvar sleep = function sleep(ms) {\n  return new Promise(function (resolve) {\n    return setTimeout(resolve, ms);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  sleep: sleep\n});\n\n//# sourceURL=webpack://pzjstools/./Tools/timeTools.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tools_timeTools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tools/timeTools.js */ \"./Tools/timeTools.js\");\n/* harmony import */ var _Tools_domTools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tools/domTools.js */ \"./Tools/domTools.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar mounted = function mounted() {\n  console.log(\"PzJsTools.js加载成功！\");\n};\nvar PzJsTools = {\n  sleep: _Tools_timeTools_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  creatADiv: _Tools_domTools_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  mounted: mounted\n};\nmodule.exports = PzJsTools;\n\n//# sourceURL=webpack://pzjstools/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;