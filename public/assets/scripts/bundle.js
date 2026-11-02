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

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ (() => {

eval("const formatAMPM = date => {\n  let hours = date.getHours();\n  let minutes = date.getMinutes();\n  hours %= 12;\n  hours = hours || 12;\n  minutes = minutes < 10 ? `0${minutes}` : minutes;\n  return `${hours}:${minutes}`;\n};\n\n// Clock in the header\nconst span = document.getElementById('span');\nif (span) {\n  const time = () => {\n    span.textContent = formatAMPM(new Date());\n  };\n  time();\n  setInterval(time, 1000);\n}\n\n// Frosted header once the page scrolls\nconst header = document.querySelector('header');\nconst onScroll = () => {\n  if (header) {\n    header.classList.toggle('is-scrolled', window.scrollY > 8);\n  }\n};\n\n// Reading progress on blog posts\nconst post = document.querySelector('.blog-post');\nif (post) {\n  const bar = document.createElement('div');\n  bar.className = 'read-progress';\n  bar.setAttribute('aria-hidden', 'true');\n  document.body.appendChild(bar);\n  const updateProgress = () => {\n    const max = document.documentElement.scrollHeight - window.innerHeight;\n    const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;\n    bar.style.setProperty('--progress', progress);\n  };\n  window.addEventListener('scroll', updateProgress, {\n    passive: true\n  });\n  updateProgress();\n}\nwindow.addEventListener('scroll', onScroll, {\n  passive: true\n});\nonScroll();\n\n// Fade sections in as they enter the viewport\nconst reveals = document.querySelectorAll('.reveal');\nif ('IntersectionObserver' in window) {\n  const observer = new IntersectionObserver(entries => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        entry.target.classList.add('is-visible');\n        observer.unobserve(entry.target);\n      }\n    });\n  }, {\n    rootMargin: '0px 0px -8% 0px',\n    threshold: 0.08\n  });\n  reveals.forEach(el => observer.observe(el));\n} else {\n  reveals.forEach(el => el.classList.add('is-visible'));\n}\n\n// Stretch headline lines so each one spans the full content width\nconst fits = document.querySelectorAll('.fit');\nconst fitText = () => {\n  fits.forEach(el => {\n    const available = el.parentElement.clientWidth;\n    el.style.fontSize = '100px';\n    const natural = el.getBoundingClientRect().width;\n    if (natural > 0) {\n      // Small trim so glyph overhang never pokes past the gutter\n      el.style.fontSize = `${available / natural * 98.5}px`;\n    }\n  });\n};\n\n// Grow the hero copy to the largest size that still fits the space left on screen\nconst heroCopy = document.querySelector('.hero-copy');\nconst fillHero = () => {\n  if (!heroCopy) return;\n  let lo = 16;\n  let hi = 400;\n  while (hi - lo > 0.5) {\n    const mid = (lo + hi) / 2;\n    heroCopy.style.fontSize = `${mid}px`;\n    const inBounds = heroCopy.scrollHeight <= heroCopy.clientHeight && heroCopy.scrollWidth <= heroCopy.clientWidth;\n    if (inBounds) lo = mid;else hi = mid;\n  }\n  heroCopy.style.fontSize = `${lo}px`;\n};\nconst layout = () => {\n  fitText();\n  fillHero();\n};\nif (fits.length || heroCopy) {\n  layout();\n  window.addEventListener('resize', layout);\n  if (document.fonts) {\n    document.fonts.ready.then(layout);\n  }\n}\n\n// Material ripple on interactive surfaces\nconst rippleTargets = document.querySelectorAll('header .center-part a, .links a, .first-page-blog li a, .projects .card');\nrippleTargets.forEach(el => {\n  el.addEventListener('pointerdown', e => {\n    const rect = el.getBoundingClientRect();\n    const ripple = document.createElement('span');\n    ripple.className = 'ripple';\n    ripple.style.setProperty('--size', `${Math.max(rect.width, rect.height) * 2.2}px`);\n    ripple.style.left = `${e.clientX - rect.left}px`;\n    ripple.style.top = `${e.clientY - rect.top}px`;\n    el.appendChild(ripple);\n    ripple.addEventListener('animationend', () => ripple.remove());\n  });\n});\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/main.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/styles/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/scripts/main.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/styles/main.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;