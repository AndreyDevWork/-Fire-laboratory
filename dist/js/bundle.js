/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/aside.js":
/*!*****************************!*\
  !*** ./js/modules/aside.js ***!
  \*****************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n  const asideItem = document.querySelectorAll('.aside__item-with');\r\n\r\n  asideItem.forEach(item => {\r\n    const dropdown = item.querySelector('.dropdown');\r\n    const plus = item.querySelector('.aside__plus');\r\n    const minus = item.querySelector('.aside__minus');\r\n    item.addEventListener('click', () => {\r\n      dropdown.classList.toggle('aside_hiden');\r\n      plus.classList.toggle('aside_hiden');\r\n      minus.classList.toggle('aside_hiden');\r\n    });\r\n\r\n  });\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./js/modules/aside.js?");

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n\r\n  const mainItems = document.querySelectorAll('.main__item');\r\n\r\n  mainItems.forEach(item => {\r\n\r\n    item.addEventListener('mouseenter', () => {\r\n      const p3 = item.querySelector('.p3');\r\n      item.classList.add('main__item_active');   \r\n      p3.classList.add('main__p3_active');   \r\n    });\r\n    item.addEventListener('mouseleave', () => {\r\n      const p3 = item.querySelector('.p3');\r\n      item.classList.remove('main__item_active');\r\n      p3.classList.remove('main__p3_active');   \r\n    });\r\n  });\r\n});\n\n//# sourceURL=webpack:///./js/modules/cards.js?");

/***/ }),

/***/ "./js/modules/humburger.js":
/*!*********************************!*\
  !*** ./js/modules/humburger.js ***!
  \*********************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n  const humburger = document.querySelector('.humburger');\r\n  const overlay = document.querySelector('.aside__overlay');\r\n  const logoNav = document.querySelector('.nav__logo');\r\n  const asideNav = document.querySelector('.aside__nav');\r\n\r\n  if(window.scrollY > 110) {\r\n    humburger.classList.add('humburger_active');\r\n  }\r\n\r\n  window.addEventListener('scroll', () => {\r\n    if(window.scrollY > 110) {\r\n      humburger.classList.add('humburger_active');\r\n    }\r\n    if(window.scrollY < 110) {\r\n      humburger.classList.remove('humburger_active');\r\n    }\r\n  });\r\n\r\n  humburger.addEventListener('click', () => {\r\n    logoNav.classList.toggle('nav_logo-hide');\r\n    asideNav.classList.toggle('aside__nav_active');\r\n    humburger.classList.toggle('humburger_focus')\r\n    overlay.classList.toggle('aside__overlay_active');\r\n  });\r\n  overlay.addEventListener('click', () => {\r\n    logoNav.classList.toggle('nav_logo-hide');\r\n    asideNav.classList.toggle('aside__nav_active');\r\n    humburger.classList.toggle('humburger_focus')\r\n    overlay.classList.toggle('aside__overlay_active');\r\n  });\r\n  asideNav.addEventListener('click', (e) => {\r\n    e.stopPropagation\r\n  });\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./js/modules/humburger.js?");

/***/ }),

/***/ "./js/modules/nav.js":
/*!***************************!*\
  !*** ./js/modules/nav.js ***!
  \***************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n  const navItems = document.querySelectorAll('.nav__item-with');\r\n  navItems.forEach(item => {\r\n    item.addEventListener('click', (e) => {\r\n      const dropdown = item.querySelector('.nav__drop-down');\r\n      dropdown.classList.toggle('nav__drop-down_active');\r\n    });\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack:///./js/modules/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./js/modules/humburger.js"]();
/******/ 	__webpack_modules__["./js/modules/cards.js"]();
/******/ 	__webpack_modules__["./js/modules/aside.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/modules/nav.js"]();
/******/ 	
/******/ })()
;