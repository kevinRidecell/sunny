(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"), require("react-feather"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react", "react-feather"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react"), require("react-feather")) : factory(root["Framer"], root["React"], root["react-feather"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_feather__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules\/.*)\/(?:build|dist)\/index\.js$/.exec(__module_i) || [])[1];
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Button.tsx": "./code/Button.tsx",
	"./Checkbox.tsx": "./code/Checkbox.tsx",
	"./Device.tsx": "./code/Device.tsx",
	"./Gif.tsx": "./code/Gif.tsx",
	"./Icon.tsx": "./code/Icon.tsx",
	"./Input.tsx": "./code/Input.tsx",
	"./Loading.tsx": "./code/Loading.tsx",
	"./Notes.tsx": "./code/Notes.tsx",
	"./RadioButtons.tsx": "./code/RadioButtons.tsx",
	"./SegmentedControl.tsx": "./code/SegmentedControl.tsx",
	"./Slider.tsx": "./code/Slider.tsx",
	"./Tabs.tsx": "./code/Tabs.tsx",
	"./Toggle.tsx": "./code/Toggle.tsx",
	"./Unsplash.tsx": "./code/Unsplash.tsx",
	"./Video.tsx": "./code/Video.tsx",
	"./Youtube.tsx": "./code/Youtube.tsx",
	"./assets/poweredByGiphy.ts": "./code/assets/poweredByGiphy.ts",
	"./canvas.tsx": "./code/canvas.tsx",
	"./lib/Cache.tsx": "./code/lib/Cache.tsx",
	"./lib/Storage.tsx": "./code/lib/Storage.tsx",
	"./lib/colorFromToken.ts": "./code/lib/colorFromToken.ts",
	"./lib/constants.ts": "./code/lib/constants.ts",
	"./lib/indentTitle.ts": "./code/lib/indentTitle.ts",
	"./lib/urls.ts": "./code/lib/urls.ts",
	"./lib/useLoop.ts": "./code/lib/useLoop.ts",
	"./lib/useTimeout.ts": "./code/lib/useTimeout.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Button.tsx":
/*!*************************!*\
  !*** ./code/Button.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9CdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBd0U7QUFDeEUseURBQXFEO0FBQ3JELG1EQUErQztBQUMvQywrQ0FBNkQ7QUFnRDdELFNBQWdCLE1BQU0sQ0FBQyxFQUNuQixJQUFJLEVBQ0osUUFBUSxFQUNSLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsTUFBTSxFQUNOLE9BQU8sRUFDUCxPQUFPLEVBQ1AsWUFBWSxFQUNaLFlBQVksRUFDWixXQUFXLEVBQ1gsU0FBUyxFQUNULE1BQU0sRUFDTixPQUFPLEVBQ1AsUUFBUSxFQUNSLFdBQVcsRUFDWCxVQUFVLEVBQ1YsT0FBTyxFQUNQLGNBQWMsRUFDZCxPQUFPLEVBQ1AsVUFBVSxFQUNWLFlBQVksRUFDWixhQUFhLEVBQ2IsV0FBVyxFQUNYLGVBQWUsRUFDZixhQUFhLEVBQ2IsZUFBZSxFQUNmLGVBQWUsRUFDZixTQUFTLEVBQ1QsUUFBUSxFQUNSLFVBQVUsRUFDVixVQUFVLEdBQ0E7O0lBQ1YsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sTUFBTSxRQUFRLE1BQU0sV0FBVyxNQUFNLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFBO0lBQzVHLE1BQU0sWUFBWSxHQUFHLGNBQWM7UUFDL0IsQ0FBQyxDQUFDLEdBQUcsVUFBVSxNQUFNLFlBQVksTUFBTSxhQUFhLE1BQU0sV0FBVyxJQUFJO1FBQ3pFLENBQUMsQ0FBQyxPQUFPLENBQUE7SUFDYixNQUFNLFFBQVEsR0FBRztRQUNiLE9BQU8sRUFBRTtZQUNMLFVBQVUsRUFBRSxjQUFLLENBQUMsK0JBQWMsQ0FBQyxp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

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const colorFromToken_1 = __webpack_require__(/*! ./lib/colorFromToken */ "./code/lib/colorFromToken.ts");
const indentTitle_1 = __webpack_require__(/*! ./lib/indentTitle */ "./code/lib/indentTitle.ts");
const constants_1 = __webpack_require__(/*! ./lib/constants */ "./code/lib/constants.ts");
function Button({ text, fontSize, defaultBackground, defaultTextColor, hoverBackground, hoverTextColor, pressedBackground, pressedTextColor, disabledBackground, disabledTextColor, shadow, variant, onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, radius, topLeft, topRight, bottomRight, bottomLeft, isMixed, paddingPerSide, padding, paddingTop, paddingRight, paddingBottom, paddingLeft, whileHoverScale, whileTapScale, colorTransition, scaleTransition, alignment, disabled, fontFamily, fontWeight, }) {
    window["__checkComponentBudget__"]();
    const borderRadius = isMixed ? `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px` : `${radius}px`;
    const paddingValue = paddingPerSide
        ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`
        : padding;
    const variants = {
        default: {
            background: framer_1.Color(colorFromToken_1.colorFromToken(defaultBackground)).toValue(),
            color: framer_1.Color(colorFromToken_1.colorFromToken(defaultTextColor)).toValue(),
            scale: 1,
            boxShadow: shadow
                ? "0px 2px 6px rgba(0,0,0,0.1), 0px 4px 16px rgba(0,0,0,0.1)"
                : "0px 0px 0px rgba(0,0,0,0)",
        },
        hover: {
            background: framer_1.Color(colorFromToken_1.colorFromToken(hoverBackground)).toValue(),
            color: framer_1.Color(colorFromToken_1.colorFromToken(hoverTextColor)).toValue(),
            scale: whileHoverScale,
            boxShadow: shadow
                ? "0px 2px 6px rgba(0,0,0,0.1), 0px 4px 16px rgba(0,0,0,0.1)"
                : "0px 0px 0px rgba(0,0,0,0)",
        },
        pressed: {
            background: framer_1.Color(colorFromToken_1.colorFromToken(pressedBackground)).toValue(),
            color: framer_1.Color(colorFromToken_1.colorFromToken(pressedTextColor)).toValue(),
            scale: whileTapScale,
            shadow: shadow ? "0px 1px 4px rgba(0,0,0,0.2), 0px 2px 4px rgba(0,0,0,0.2)" : "0px 0px 0px rgba(0,0,0,0)",
        },
        disabled: {
            background: framer_1.Color(colorFromToken_1.colorFromToken(disabledBackground)).toValue(),
            color: framer_1.Color(colorFromToken_1.colorFromToken(disabledTextColor)).toValue(),
            scale: 1,
            boxShadow: shadow
                ? "0px 2px 6px rgba(0,0,0,0.1), 0px 4px 16px rgba(0,0,0,0.1)"
                : "0px 0px 0px rgba(0,0,0,0)",
        },
    };
    const fontStyle = Object.assign(Object.assign({}, (fontFamily && { fontFamily })), { fontWeight });
    return (React.createElement(framer_1.motion.button, Object.assign({ type: "button", transition: { scale: scaleTransition, default: colorTransition }, style: Object.assign(Object.assign(Object.assign({}, style), { fontSize,
            borderRadius, padding: paddingValue, 
            // @ts-ignore
            textAlign: alignment }), fontStyle), initial: disabled ? "disabled" : variant.toLowerCase(), animate: disabled ? "disabled" : variant.toLowerCase(), variants: variants, disabled: variant === "Disabled" || disabled, whileHover: "hover", whileTap: "pressed" }, (!disabled && {
        onClick,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onMouseUp,
    })), text));
}
exports.Button = Button;
Button.defaultProps = {
    height: 45,
    width: 135,
    text: "Get started!",
    variant: "Default",
    shadow: true,
    fontSize: 14,
    defaultBackground: "#0099FF",
    defaultTextColor: "#ffffff",
    hoverBackground: "#0077FF",
    hoverTextColor: "#ffffff",
    pressedBackground: "#0088FF",
    pressedTextColor: "#ffffff",
    disabledBackground: "#f3f3f3",
    disabledTextColor: "#AAAAAA",
    disabled: false,
    radius: 10,
    padding: 10,
    whileTapScale: 0.95,
    whileHoverScale: 1.1,
    alignment: "center",
    fontWeight: 600,
    scaleTransition: {
        type: "spring",
        duration: 0.3,
        delay: 0,
        stiffness: 600,
        damping: 30,
        mass: 1,
    },
};
const style = {
    border: "none",
    width: "100%",
    position: "absolute",
    margin: 0,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    color: "white",
    outline: "none",
    resize: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    letterSpacing: "-0.2px",
};
framer_1.addPropertyControls(Button, Object.assign(Object.assign(Object.assign({ text: {
        title: "Text",
        type: framer_1.ControlType.String,
        defaultValue: "Hello Framer!",
    }, alignment: {
        title: "Text Align",
        type: framer_1.ControlType.SegmentedEnum,
        optionTitles: ["Left", "Center", "Right"],
        options: ["left", "center", "right"],
    }, shadow: {
        title: "Shadow",
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
        enabledTitle: "Show",
        disabledTitle: "Hide",
    } }, constants_1.fontControls), { disabled: {
        title: "Disabled",
        type: framer_1.ControlType.Boolean,
        enabledTitle: "Yes",
        disabledTitle: "No",
    }, variant: {
        title: "State",
        type: framer_1.ControlType.Enum,
        defaultValue: "Default",
        options: ["Default", "Hover", "Pressed", "Disabled"],
    }, defaultBackground: {
        title: indentTitle_1.indentTitle("Bg Color"),
        type: framer_1.ControlType.Color,
        defaultValue: Button.defaultProps.defaultBackground,
        hidden: ({ variant }) => variant !== "Default",
    }, defaultTextColor: {
        title: indentTitle_1.indentTitle("Text Color"),
        type: framer_1.ControlType.Color,
        defaultValue: Button.defaultProps.defaultTextColor,
        hidden: ({ variant }) => variant !== "Default",
    }, hoverBackground: {
        title: indentTitle_1.indentTitle("Bg Color"),
        type: framer_1.ControlType.Color,
        defaultValue: Button.defaultProps.hoverBackground,
        hidden: ({ variant }) => variant !== "Hover",
    }, hoverTextColor: {
        title: indentTitle_1.indentTitle("Text Color"),
        type: framer_1.ControlType.Color,
        defaultValue: Button.defaultProps.hoverTextColor,
        hidden: ({ variant }) => variant !== "Hover",
    }, pressedBackground: {
        title: indentTitle_1.indentTitle("Bg Color"),
        type: framer_1.ControlType.Color,
        defaultValue: Button.defaultProps.pressedBackground,
        hidden: ({ variant }) => variant !== "Pressed",
    }, pressedTextColor: {
        title: indentTitle_1.indentTitle("Text Color"),
        type: framer_1.ControlType.Color,
        defaultValue: Button.defaultProps.pressedTextColor,
        hidden: ({ variant }) => variant !== "Pressed",
    }, disabledBackground: {
        title: indentTitle_1.indentTitle("Bg Color"),
        type: framer_1.ControlType.Color,
        defaultValue: Button.defaultProps.disabledBackground,
        hidden: ({ variant }) => variant !== "Disabled",
    }, disabledTextColor: {
        title: indentTitle_1.indentTitle("Text Color"),
        type: framer_1.ControlType.Color,
        defaultValue: Button.defaultProps.disabledTextColor,
        hidden: ({ variant }) => variant !== "Disabled",
    }, padding: {
        title: "Padding",
        type: framer_1.ControlType.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
    }, radius: {
        title: "Radius",
        type: framer_1.ControlType.FusedNumber,
        defaultValue: Button.defaultProps.radius,
        toggleKey: "isMixed",
        toggleTitles: ["Radius", "Radius per corner"],
        valueKeys: ["topLeft", "topRight", "bottomRight", "bottomLeft"],
        valueLabels: ["TL", "TR", "BR", "BL"],
        min: 0,
    }, fontSize: {
        type: framer_1.ControlType.Number,
        title: "Font Size",
        min: 5,
        max: 25,
    }, whileHoverScale: {
        title: "Hover Scale",
        type: framer_1.ControlType.Number,
        min: 0.5,
        max: 1.5,
        step: 0.1,
    }, whileTapScale: {
        title: "Tap Scale",
        type: framer_1.ControlType.Number,
        min: 0.5,
        max: 1.5,
        step: 0.1,
    }, scaleTransition: {
        title: "Scale Anim",
        type: framer_1.ControlType.Transition,
    }, colorTransition: {
        title: "Color Anim",
        type: framer_1.ControlType.Transition,
    } }), constants_1.defaultEvents));
exports.__info__ = [{ "name": "Button", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Checkbox.tsx":
/*!***************************!*\
  !*** ./code/Checkbox.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0NoZWNrYm94LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsaUNBQTJDO0FBQzNDLG1DQUFzRjtBQUN0Rix5REFBcUQ7QUFDckQsbURBQStDO0FBdUIvQyxTQUFnQixRQUFRLENBQUMsRUFDckIsZ0JBQWdCLEVBQ2hCLFFBQVEsRUFDUixPQUFPLEVBQ1AsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sT0FBTyxFQUNQLFFBQVEsRUFDUixXQUFXLEVBQ1gsVUFBVSxFQUNWLE9BQU8sRUFDUCxTQUFTLEVBQ1QsS0FBSyxFQUNMLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsWUFBWSxFQUNaLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixRQUFRLEdBQ1g7O0lBQ0csTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxnQkFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ2pELE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLE1BQU0sUUFBUSxNQUFNLFdBQVcsTUFBTSxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQTtJQUU1RyxpQkFBUyxDQUFDLEdBQUcsRUFBRTs7UUFDWCxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7S0FDeEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7SUFFZixnQkFBZ0IsR0FBRyxxQkFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLHFCQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFBO0lBRTdGLE1BQU0sbUJBQW1CLEdBQUcsR0FBRyxXQUFXLFlBQVksY0FBSyxDQUFDLCtCQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxPQUFP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

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const colorFromToken_1 = __webpack_require__(/*! ./lib/colorFromToken */ "./code/lib/colorFromToken.ts");
const indentTitle_1 = __webpack_require__(/*! ./lib/indentTitle */ "./code/lib/indentTitle.ts");
function Checkbox({ activeBackground, onToggle, onCheck, onUncheck, isChecked, radius, topLeft, topRight, bottomRight, bottomLeft, isMixed, checkSize, color, inactiveBackground, inactiveBorder, activeBorder, hasBorder, borderWidth, transition, initialAnimation, disabled, }) {
    window["__checkComponentBudget__"]();
    const [checked, setChecked] = react_1.useState(isChecked);
    const borderRadius = isMixed ? `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px` : `${radius}px`;
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        setChecked(isChecked);
    }, [isChecked]);
    initialAnimation = framer_1.RenderTarget.current() !== framer_1.RenderTarget.preview ? false : initialAnimation;
    const inactiveBorderStyle = `${borderWidth}px solid ${framer_1.Color(colorFromToken_1.colorFromToken(inactiveBorder)).toValue()}`;
    const activeBorderStyle = `${borderWidth}px solid ${framer_1.Color(colorFromToken_1.colorFromToken(activeBorder)).toValue()}`;
    return (React.createElement("div", { style: containerStyle },
        React.createElement(framer_1.motion.div
        // @ts-ignore
        , { 
            // @ts-ignore
            style: Object.assign(Object.assign({}, checkboxStyle), { borderRadius }), initial: initialAnimation
                ? {
                    background: checked
                        ? framer_1.Color(colorFromToken_1.colorFromToken(inactiveBackground)).toValue()
                        : framer_1.Color(colorFromToken_1.colorFromToken(activeBackground)).toValue(),
                }
                : false, animate: {
                background: checked
                    ? framer_1.Color(colorFromToken_1.colorFromToken(activeBackground)).toValue()
                    : framer_1.Color(colorFromToken_1.colorFromToken(inactiveBackground)).toValue(),
                border: hasBorder ? (checked ? activeBorderStyle : inactiveBorderStyle) : "none",
            }, transition: transition, onTap: () => {
                window["__checkBudget__"]();
                if (disabled)
                    return;
                setChecked(!checked);
                if (onToggle)
                    onToggle();
                if (onCheck && !checked)
                    onCheck();
                if (onUncheck && checked)
                    onUncheck();
            } },
            React.createElement("svg", { viewBox: "0 0 12 12", style: {
                    margin: 1,
                    width: `${checkSize}%`,
                    height: `${checkSize}%`,
                } },
                React.createElement(framer_1.motion.path, { d: "M3 6l2 2 4-4", fill: "transparent", strokeWidth: "1.5", stroke: color, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: "8.5", transition: transition, initial: {
                        strokeDashoffset: initialAnimation ? (checked ? 8.5 : 0) : checked ? 0 : 8.5,
                    }, animate: {
                        strokeDashoffset: checked ? 0 : 8.5,
                    } })))));
}
exports.Checkbox = Checkbox;
Checkbox.defaultProps = {
    height: 20,
    width: 20,
    text: "Get started!",
    activeBackground: "#0099ff",
    inactiveBackground: "#F3F3F3",
    hasBorder: false,
    radius: 6,
    borderWidth: 1,
    checkSize: 100,
    color: "white",
    initialAnimation: false,
    disabled: false,
    transition: { duration: 0.15, ease: [0.12, 0.23, 0.5, 1], type: "tween" },
};
// Learn more: https://framer.com/api/property-controls/
framer_1.addPropertyControls(Checkbox, {
    isChecked: {
        title: "Checked",
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
        enabledTitle: "Yes",
        disabledTitle: "No",
    },
    disabled: {
        title: "Disabled",
        type: framer_1.ControlType.Boolean,
        enabledTitle: "Yes",
        disabledTitle: "No",
    },
    hasBorder: {
        title: "Border",
        type: framer_1.ControlType.Boolean,
        enabledTitle: "Yes",
        disabledTitle: "No",
    },
    borderWidth: {
        title: indentTitle_1.indentTitle("Width"),
        type: framer_1.ControlType.Number,
        defaultValue: Checkbox.defaultProps.borderWidth,
        hidden: ({ hasBorder }) => !hasBorder,
    },
    activeBorder: {
        title: indentTitle_1.indentTitle("Active"),
        type: framer_1.ControlType.Color,
        defaultValue: Checkbox.defaultProps.activeBackground,
        hidden: ({ hasBorder }) => !hasBorder,
    },
    inactiveBorder: {
        title: indentTitle_1.indentTitle("Inactive"),
        type: framer_1.ControlType.Color,
        defaultValue: Checkbox.defaultProps.inactiveBackground,
        hidden: ({ hasBorder }) => !hasBorder,
    },
    activeBackground: {
        title: "Active",
        type: framer_1.ControlType.Color,
        defaultValue: Checkbox.defaultProps.activeBackground,
    },
    inactiveBackground: {
        title: "Inactive",
        type: framer_1.ControlType.Color,
        defaultValue: Checkbox.defaultProps.inactiveBackground,
    },
    color: {
        title: "Check",
        type: framer_1.ControlType.Color,
        defaultValue: Checkbox.defaultProps.color,
    },
    checkSize: {
        title: "Check Size",
        type: framer_1.ControlType.Number,
        unit: "%",
        min: 0,
        max: 100,
        defaultValue: Checkbox.defaultProps.checkSize,
    },
    radius: {
        title: "Radius",
        type: framer_1.ControlType.FusedNumber,
        defaultValue: Checkbox.defaultProps.radius,
        toggleKey: "isMixed",
        toggleTitles: ["Radius", "Radius per corner"],
        valueKeys: ["topLeft", "topRight", "bottomRight", "bottomLeft"],
        valueLabels: ["TL", "TR", "BR", "BL"],
        min: 0,
    },
    transition: { title: "Animation", type: framer_1.ControlType.Transition, defaultValue: Checkbox.defaultProps.transition },
    initialAnimation: {
        title: "On Load",
        type: framer_1.ControlType.Boolean,
        enabledTitle: "Animate",
        disabledTitle: "Instant",
    },
    onToggle: { type: framer_1.ControlType.EventHandler },
    onCheck: { type: framer_1.ControlType.EventHandler },
    onUncheck: { type: framer_1.ControlType.EventHandler },
});
const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
};
const checkboxStyle = {
    width: "100%",
    height: "100%",
    borderRadius: 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // cursor: "pointer",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
};
exports.__info__ = [{ "name": "Checkbox", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Device.tsx":
/*!*************************!*\
  !*** ./code/Device.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9EZXZpY2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixpQ0FNYztBQUNkLG1DQVdlO0FBQ2YseURBQXFEO0FBbUJyRCxTQUFTLGFBQWEsQ0FBQyxFQUNuQixVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixTQUFTLEdBQUcsS0FBSyxHQU1wQjs7SUFDRyxNQUFNLFNBQVMsR0FBRyxTQUFTO1FBQ3ZCLENBQUMsQ0FBQyxzRUFBc0U7WUFDdEUsdUVBQXVFO1lBQ3ZFLDBCQUEwQixZQUFZLGdCQUFnQjtRQUN4RCxDQUFDLENBQUMsRUFBRSxDQUFBO0lBQ1IsTUFBTSxPQUFPLEdBQUcsa0JBQWtCLENBQzlCLHlEQUF5RCxXQUFXLElBQUksWUFBWSwrQ0FBK0MsU0FBUyxJQUFJLFVBQVUsWUFBWSxDQUN6SyxDQUFBO0lBQ0QsT0FBTyxnQ0FBZ0MsT0FBTyxJQUFJLENBQUE7Q0FDckQ7QUFFRCxNQUFNLGdCQUFnQixHQUFHO0lBQ3JCLFlBQVksRUFBRSxFQUFFO0lBQ2hCLFVBQVUsRUFBRSxFQUFFO0lBQ2QsV0FBVyxFQUFFLEVBQUU7SUFDZixXQUFXLEVBQUUsRUFBRSxHQUFHLEVBQUU7Q0FDdkIsQ0FBQTtBQUNELE1BQU0sY0FBYyxHQUFHO0lBQ25CLFVBQVUsRUFBRSxFQUFFO0lBQ2QsV0FBVyxFQUFFLEVBQUU7SUFDZixXQUFXLEVBQUUsRUFBRSxHQUFHLEdBQUc7Q0FDeEIsQ0FBQTtBQUNELE1BQU0sY0FBYyxHQUFHO0lBQ25CLFlBQVksRUFBRSxFQUFFO0lBQ2hCLFVBQVUsRUFBRSxFQUFFO0lBQ2QsV0FBVyxFQUFFLEVBQUU7SUFDZixXQUFXLEVBQUUsRUFBRSxHQUFHLEVBQUU7Q0FDdkIsQ0FBQTtBQUNELE1BQU0sY0FBYyxHQUFHO0lBQ25CLFVBQVUsRUFBRSxFQUFFO0lBQ2QsV0FBVyxFQUFFLEVBQUU7SUFDZixX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

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const colorFromToken_1 = __webpack_require__(/*! ./lib/colorFromToken */ "./code/lib/colorFromToken.ts");
function makeMaskImage({ screenMask, screenWidth, screenHeight, landscape = false, }) {
    window["__checkBudget__"]();
    const transform = landscape
        ? // rotate by 90 degreees counter-clockwise around (0,0), then move the
            // result down into the viewport (rightmost transform is applied first)
            `transform="translate(0 ${screenHeight}) rotate(-90)"`
        : "";
    const encoded = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewport="0 0 ${screenWidth} ${screenHeight}" preserveAspectRatio="none"><g x="0" y="0" ${transform}>${screenMask}</g></svg>`);
    return `url("data:image/svg+xml;utf8,${encoded}")`;
}
const preset_iPhonePro = {
    screenRadius: 38,
    bezelWidth: 21,
    bezelHeight: 21,
    bezelRadius: 38 + 21,
};
const preset_iPhone8 = {
    bezelWidth: 24,
    bezelHeight: 96,
    bezelRadius: 38 * 1.5,
};
const preset_iPadPro = {
    screenRadius: 25,
    bezelWidth: 38,
    bezelHeight: 38,
    bezelRadius: 25 + 38,
};
const preset_desktop = {
    bezelWidth: 20,
    bezelHeight: 20,
    bezelRadius: 20,
};
const defaultPreset = "iphone-11-pro";
const presets = {
    "iphone-11-pro": Object.assign(Object.assign({ title: "iPhone 11 Pro" }, preset_iPhonePro), { screenWidth: 375, screenHeight: 812, screenMask: '<path d="M292 8.668V9c0 9.266-7.07 21-23.332 21h-162C90.402 30 83.332 18.266 83.332 9v-.332c0-4.285 0-8.668-7.664-8.668H43.332C16.312 0 0 16.313 0 43.332v725.336C0 795.688 16.313 812 43.332 812h288.336c27.02 0 43.332-16.313 43.332-43.332V43.332C375 16.312 358.687 0 331.668 0h-32C292 0 292 4.383 292 8.668zm0 0"/>' }),
    "iphone-11-pro-max": Object.assign(Object.assign({ title: "iPhone 11 Pro Max" }, preset_iPhonePro), { screenWidth: 414, screenHeight: 896, screenMask: '<path d="M96 0c3.313 0 5.91 2.688 6 6 .18 6.645 1.191 10.148 2.938 13.41 1.917 3.586 4.73 6.402 8.316 8.317 3.586 1.918 7.441 2.941 15.445 2.941h156.602c8.004 0 11.86-1.023 15.445-2.941 3.586-1.915 6.399-4.73 8.317-8.317 1.746-3.265 2.746-6.758 2.937-13.41.094-3.313 2.688-6 6-6h46.004c17.387 0 23.687 1.809 30.043 5.21 6.355 3.4 11.344 8.388 14.742 14.743C412.191 26.31 414 32.61 414 49.996v796.008c0 17.387-1.809 23.687-5.21 30.043-3.4 6.355-8.388 11.344-14.743 14.742-6.356 3.402-12.656 5.211-30.043 5.211H49.996c-17.387 0-23.687-1.809-30.043-5.21-6.355-3.4-11.344-8.388-14.742-14.743C1.809 869.69 0 863.39 0 846.004V49.996C0 32.61 1.809 26.31 5.21 19.953c3.4-6.355 8.388-11.344 14.743-14.742C26.31 1.809 32.61 0 49.996 0zm0 0"/>' }),
    "iphone-8": Object.assign(Object.assign({ title: "iPhone 8" }, preset_iPhone8), { screenWidth: 375, screenHeight: 667 }),
    "iphone-8-plus": Object.assign(Object.assign({ title: "iPhone 8 Plus" }, preset_iPhone8), { screenWidth: 414, screenHeight: 736 }),
    "iphone-se": {
        title: "iPhone SE",
        screenWidth: 320,
        screenHeight: 568,
        bezelWidth: 20,
        bezelHeight: 112,
        bezelRadius: 38 * 1.5,
    },
    "samsung-note-10": {
        title: "Samsung Note 10",
        screenWidth: 360,
        screenHeight: 760,
        screenRadius: 10,
        bezelWidth: 7,
        bezelHeight: 15,
        bezelRadius: 15,
    },
    "pixel-4": {
        title: "Pixel 4",
        screenWidth: 360,
        screenHeight: 760,
        screenRadius: 30,
        bezelWidth: 10,
        bezelHeight: 40,
        bezelRadius: 50,
    },
    ipad: {
        title: "iPad",
        screenWidth: 768,
        screenHeight: 1024,
        bezelWidth: 30,
        bezelHeight: 95,
        bezelRadius: 38 * 1.5,
    },
    "ipad-pro-11": Object.assign(Object.assign({ title: "iPad Pro 11″" }, preset_iPadPro), { screenWidth: 834, screenHeight: 1194 }),
    "ipad-pro-12-9": Object.assign(Object.assign({ title: "iPad Pro 12.9″" }, preset_iPadPro), { screenWidth: 1024, screenHeight: 1366 }),
    "720p": Object.assign(Object.assign({ title: "720p" }, preset_desktop), { screenWidth: 720, screenHeight: 1280 }),
    "768p": Object.assign(Object.assign({ title: "768p" }, preset_desktop), { screenWidth: 768, screenHeight: 1366 }),
    "1080p": Object.assign(Object.assign({ title: "1080p" }, preset_desktop), { screenWidth: 1080, screenHeight: 1920 }),
    "1440p": Object.assign(Object.assign({ title: "1440p" }, preset_desktop), { screenWidth: 1440, screenHeight: 2560 }),
    "4k": Object.assign(Object.assign({ title: "4K" }, preset_desktop), { screenWidth: 2160, screenHeight: 3840 }),
};
function Device({ width, height, children, preset: presetName, customScreenWidth, customScreenHeight, customScreenRadius, customBezelWidth, customBezelHeight, customBezelRadius, orientation, backgroundColor: backgroundColorString, backgroundImage, theme, shadow, }) {
    window["__checkComponentBudget__"]();
    //
    // size
    const padding = 50;
    let { screenWidth, screenHeight, screenRadius = 0, screenMask = undefined, bezelWidth = 0, bezelHeight = 0, bezelRadius = 0, } = presetName === "custom"
        ? {
            screenWidth: customScreenWidth,
            screenHeight: customScreenHeight,
            screenRadius: customScreenRadius,
            bezelWidth: customBezelWidth,
            bezelHeight: customBezelHeight,
            bezelRadius: customBezelRadius,
        }
        : presets[presetName] || presets[Object.keys(presets)[0]];
    if (orientation === "landscape") {
        ;
        [screenWidth, screenHeight] = [screenHeight, screenWidth];
        [bezelWidth, bezelHeight] = [bezelHeight, bezelWidth];
    }
    const deviceWidth = screenWidth + 2 * bezelWidth;
    const deviceHeight = screenHeight + 2 * bezelHeight;
    const maskImage = screenMask &&
        makeMaskImage({
            screenMask,
            screenWidth,
            screenHeight,
            landscape: orientation === "landscape",
        });
    //
    // style
    const darkMode = theme === "dark";
    const backgroundColor = framer_1.Color(colorFromToken_1.colorFromToken(backgroundColorString));
    const screenColor = framer_1.Color.alpha(backgroundColor, 0.1);
    const bezelColor = darkMode ? "#222" : "#fff";
    const bezelShade = `inset 0 0 15px ${darkMode
        ? "#000"
        : framer_1.Color.toRgbString(framer_1.Color.alpha(backgroundColor, 0.75))}`;
    const deviceShadowColor = darkMode
        ? "rgba(0, 0, 0, 0.55)"
        : "rgba(0, 0, 0, 0.15)";
    const deviceShadow = `0px 10px 30px ${deviceShadowColor}`;
    let deviceBoxShadow = bezelShade;
    if (shadow) {
        deviceBoxShadow += `, ${deviceShadow}`;
    }
    //
    // children
    const child = children[0];
    const resizedChild = child
        ? React.cloneElement(child, {
            width: screenWidth,
            height: screenHeight,
        })
        : null;
    //
    // scaling
    const containerRef = react_1.useRef();
    const deviceRef = react_1.useRef();
    const scaleRef = react_1.useRef();
    const computeScale = react_1.useCallback(({ containerWidth, containerHeight }) => {
        window["__checkBudget__"]();
        const scaleX = (containerWidth - 2 * padding) / deviceWidth;
        const scaleY = (containerHeight - 2 * padding) / deviceHeight;
        const scale = Math.min(scaleX, scaleY, 1);
        return scale;
    }, [deviceWidth, deviceHeight, padding]);
    // in responsive preview, we can't rely on props to know our width and
    // height, so let's switch to measuring the actual size of the container
    const useContainerBasedScale = framer_1.RenderTarget.current() === framer_1.RenderTarget.preview;
    // if using the prop-based scale, update scaleRef on each render
    if (!useContainerBasedScale) {
        scaleRef.current = computeScale({
            containerWidth: width,
            containerHeight: height,
        });
    }
    const applyContainerBasedScale = react_1.useCallback(() => {
        window["__checkBudget__"]();
        const container = containerRef.current;
        const device = deviceRef.current;
        if (!container || !device)
            return;
        scaleRef.current = computeScale({
            containerWidth: container.offsetWidth,
            containerHeight: container.offsetHeight,
        });
        device.style.transform = `scale(${scaleRef.current})`;
    }, [containerRef, deviceRef, scaleRef]);
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        if (useContainerBasedScale) {
            // apply on mount
            applyContainerBasedScale();
            window.addEventListener("resize", applyContainerBasedScale);
        }
        return () => window.removeEventListener("resize", applyContainerBasedScale);
    }, [useContainerBasedScale, applyContainerBasedScale]);
    // ensure Motion gestures still work correctly despite the scale
    const { transformPagePoint: originalTransformPagePoint } = react_1.useContext(framer_1.MotionPluginContext);
    const transformPagePoint = react_1.useCallback(({ x, y }) => originalTransformPagePoint({
        x: x / scaleRef.current,
        y: y / scaleRef.current,
    }), [scaleRef]);
    //
    // render
    return (React.createElement("div", { ref: containerRef, style: {
            width: "100%",
            height: "100%",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            backgroundColor: backgroundColorString,
            backgroundImage: backgroundImage &&
                `url(${decodeURIComponent(backgroundImage)})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
        } },
        React.createElement("div", { ref: deviceRef, style: {
                width: deviceWidth,
                height: deviceHeight,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: bezelRadius,
                backgroundColor: bezelColor,
                boxShadow: deviceBoxShadow,
                transform: scaleRef.current && `scale(${scaleRef.current})`,
            } },
            React.createElement("div", { style: Object.assign({ width: screenWidth, height: screenHeight, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: screenRadius, backgroundColor: framer_1.Color.toRgbString(screenColor) }, (screenMask && {
                    maskImage,
                    WebkitMaskImage: maskImage,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                })) },
                React.createElement(framer_1.MotionPlugins, { transformPagePoint: transformPagePoint }, resizedChild ? (React.createElement(framer_1.Navigation, null, resizedChild)) : null))),
        !resizedChild && framer_1.RenderTarget.current() === framer_1.RenderTarget.canvas && (React.createElement("div", { style: {
                position: "absolute",
                right: 20,
                top: "50%",
                fontSize: "50pt",
                height: "200px",
                lineHeight: "200px",
                marginTop: "-102px",
                color: "#fff",
                textShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
            } }, "\u2192"))));
}
exports.Device = Device;
const defaultProps = {
    width: 1920,
    height: 1080,
    preset: defaultPreset,
    customScreenWidth: 200,
    customScreenHeight: 400,
    customScreenRadius: 0,
    customBezelWidth: 20,
    customBezelHeight: 20,
    customBezelRadius: 20,
    orientation: "portrait",
    backgroundColor: "#09f",
    theme: "light",
    shadow: true,
};
Device.defaultProps = defaultProps;
function customDeviceConfig(title, min, max) {
    window["__checkBudget__"]();
    return {
        type: framer_1.ControlType.Number,
        title,
        min,
        max,
        displayStepper: true,
        hidden: (props) => props.preset !== "custom",
    };
}
framer_1.addPropertyControls(Device, {
    preset: {
        type: framer_1.ControlType.Enum,
        options: [...Object.keys(presets), "custom"],
        optionTitles: [
            ...Object.keys(presets).map((p) => presets[p].title),
            "Custom",
        ],
    },
    customScreenWidth: customDeviceConfig("Screen Width", 10, 10000),
    customScreenHeight: customDeviceConfig("Screen Height", 10, 10000),
    customScreenRadius: customDeviceConfig("Screen Radius", 0, 10000),
    customBezelWidth: customDeviceConfig("Bezel Width", 0, 10000),
    customBezelHeight: customDeviceConfig("Bezel Height", 0, 10000),
    customBezelRadius: customDeviceConfig("Bezel Radius", 0, 10000),
    orientation: {
        type: framer_1.ControlType.Enum,
        displaySegmentedControl: true,
        options: ["portrait", "landscape"],
        optionTitles: ["Portrait", "Landscape"],
    },
    backgroundColor: { type: framer_1.ControlType.Color, title: "Background" },
    backgroundImage: {
        type: framer_1.ControlType.File,
        allowedFileTypes: ["jpg", "jpeg", "png"],
        title: "Bg Image",
    },
    theme: {
        type: framer_1.ControlType.Enum,
        displaySegmentedControl: true,
        options: ["light", "dark"],
        optionTitles: ["Light", "Dark"],
    },
    shadow: {
        type: framer_1.ControlType.Boolean,
        enabledTitle: "On",
        disabledTitle: "Off",
    },
});
exports.__info__ = [{ "name": "Device", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/Gif.tsx":
/*!**********************!*\
  !*** ./code/Gif.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2lmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9HaWYudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixpQ0FBMkM7QUFDM0MsbUNBQXlEO0FBQ3pELG1DQUFrQztBQUNsQyw0REFBd0Q7QUFDeEQsK0NBQWdFO0FBdUJoRSxTQUFnQixHQUFHLENBQUMsRUFDaEIsTUFBTSxFQUNOLEVBQUUsRUFDRixTQUFTLEVBQ1QsTUFBTSxFQUNOLE9BQU8sRUFDUCxRQUFRLEVBQ1IsV0FBVyxFQUNYLFVBQVUsRUFDVixPQUFPLEVBQ1AsT0FBTyxFQUNQLFlBQVksRUFDWixZQUFZLEVBQ1osV0FBVyxFQUNYLFNBQVMsR0FDRjs7SUFDUCxNQUFNLEdBQUcsR0FBRyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUE7SUFDOUUsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUNwRixNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLGdCQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQTtJQUN0RCxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxNQUFNLFFBQVEsTUFBTSxXQUFXLE1BQU0sVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUE7SUFFNUcsU0FBUyxNQUFNLENBQUMsSUFBUzs7UUFDckIsTUFBTSxJQUFJ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

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const urls = __webpack_require__(/*! ./lib/urls */ "./code/lib/urls.ts");
const poweredByGiphy_1 = __webpack_require__(/*! ./assets/poweredByGiphy */ "./code/assets/poweredByGiphy.ts");
const constants_1 = __webpack_require__(/*! ./lib/constants */ "./code/lib/constants.ts");
function Gif({ search, id, lockImage, radius, topLeft, topRight, bottomRight, bottomLeft, isMixed, onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, }) {
    window["__checkComponentBudget__"]();
    const key = `unsplash_${id.includes("id_") ? id.substring(3, id.length) : id}`;
    const cache = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : {};
    const [url, setUrl] = react_1.useState(cache.imageUrl || null);
    const borderRadius = isMixed ? `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px` : `${radius}px`;
    function setGif(term) {
        window["__checkBudget__"]();
        const type = "/gifs";
        const searchType = `/random?tag=`;
        const placeholder = `_key=${urls.giphyPlaceholder.replace(/[^a-zA-Z0-9 -]/g, "")}`;
        const searchTerm = term;
        const url = `${urls.giphyBase}${type}${searchType}${searchTerm}&api${placeholder}`;
        fetch(url)
            .then((res) => {
            window["__checkBudget__"]();
            if (!res.ok) {
                throw Error(res.statusText);
            }
            return res.json();
        })
            .then((res) => {
            window["__checkBudget__"]();
            setUrl(res.data.images.downsized_small.mp4);
            localStorage.setItem(key, JSON.stringify({
                search,
                imageUrl: res.data.images.downsized_small.mp4,
            }));
        })
            .catch((err) => { window["__checkBudget__"](); });
    }
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        const cache = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : {};
        if (!lockImage || search !== cache.search)
            setGif(search);
    }, [search]);
    return search.length > 0 ? (React.createElement("div", Object.assign({}, { onClick, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave }, { style: {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            backgroundColor: "#000",
            color: "#333",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            fontSize: "14px",
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
            borderRadius,
        } }),
        React.createElement("video", { key: `#${true}`, autoPlay: true, loop: true, muted: true, controls: false, preload: "auto", playsInline: true, style: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "50% 50%",
            }, src: url }),
        "Your browser does not support HTML5 video.")) : (React.createElement("div", Object.assign({ style: constants_1.emptyStateStyle }, { onClick, onMouseEnter, onMouseLeave }),
        React.createElement("img", { style: { width: 80, maxWidth: "80%" }, src: poweredByGiphy_1.poweredByGiphy })));
}
exports.Gif = Gif;
// <img style={{ width: 80, maxWidth: "80%" }} src={assetUrl("./code/assets/powerByGiphyLight.png")} />
Gif.defaultProps = {
    height: 200,
    width: 200,
    search: "Abstract",
    lockImage: true,
    radius: 0,
};
// Learn more: https://framer.com/api/property-controls/
framer_1.addPropertyControls(Gif, Object.assign({ search: {
        type: framer_1.ControlType.String,
        title: "Search",
        placeholder: "design, cats, dogs",
    }, lockImage: {
        type: framer_1.ControlType.Boolean,
        title: "Shuffle",
        enabledTitle: "No",
        disabledTitle: "Yes",
        defaultValue: true,
    }, radius: {
        title: "Radius",
        type: framer_1.ControlType.FusedNumber,
        defaultValue: Gif.defaultProps.radius,
        toggleKey: "isMixed",
        toggleTitles: ["Radius", "Radius per corner"],
        valueKeys: ["topLeft", "topRight", "bottomRight", "bottomLeft"],
        valueLabels: ["TL", "TR", "BR", "BL"],
        min: 0,
    } }, constants_1.defaultEvents));
Gif.displayName = "GIF";
exports.__info__ = [{ "name": "Gif", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Icon.tsx":
/*!***********************!*\
  !*** ./code/Icon.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvSWNvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUF3RTtBQUN4RSw4Q0FBNkM7QUFDN0MsbURBQStDO0FBQy9DLCtDQUFnRTtBQXVCaEUsU0FBZ0IsSUFBSSxDQUFDLEtBQWdCOztJQUNqQyxNQUFNLEVBQ0YsS0FBSyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixhQUFhLEVBQ2IsT0FBTyxFQUNQLFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksR0FDZixHQUFHLEtBQUssQ0FBQTtJQUNULE1BQU0sY0FBYyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUE7SUFDekQsTUFBTSxJQUFJLEdBQUcsU0FBUztRQUNsQixDQUFDLENBQUMsYUFBYTtRQUNmLENBQUMsQ0FBQyxjQUFjO2FBQ1QsV0FBVyxFQUFFO2FBQ2IsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUVuQixNQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFbEMsT0FBTyxDQUNILG9CQUFDLGVBQU0sQ0FBQyxHQUFHLGtCQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBTSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEdBQ2xGLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FDUCxvQkFBQyxPQUFPLElBQUMsSUFBSSxFQUFFLElB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

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const FeatherIcons = __webpack_require__(/*! react-feather */ "react-feather");
const indentTitle_1 = __webpack_require__(/*! ./lib/indentTitle */ "./code/lib/indentTitle.ts");
const constants_1 = __webpack_require__(/*! ./lib/constants */ "./code/lib/constants.ts");
function Icon(props) {
    window["__checkComponentBudget__"]();
    const { width, height, color, selection, iconSearch, iconSelection, onClick, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave, } = props;
    const iconSearchTerm = iconSearch ? iconSearch : "Framer";
    const name = selection
        ? iconSelection
        : iconSearchTerm
            .toLowerCase()
            .split("-")
            .map((piece) => piece.charAt(0).toUpperCase() + piece.slice(1))
            .join("");
    const TagName = FeatherIcons[name];
    return (React.createElement(framer_1.motion.div, Object.assign({ style: { display: "contents" } }, { onClick, onMouseEnter, onMouseLeave }), TagName ? (React.createElement(TagName, { icon: name, width: width, height: height, color: color })) : (React.createElement(NullState, Object.assign({}, {
        onClick,
        onMouseDown,
        onMouseUp,
        onMouseEnter,
        onMouseLeave,
    })))));
}
exports.Icon = Icon;
function NullState({ onClick, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave }) {
    window["__checkBudget__"]();
    return (React.createElement("div", Object.assign({}, { onClick, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave }, { style: constants_1.emptyStateStyle }),
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 30 30", style: iconStyle },
            React.createElement("path", { d: "M 12.857 0 C 19.958 0 25.714 5.756 25.714 12.857 C 25.714 19.958 19.958 25.714 12.857 25.714 C 5.756 25.714 0 19.958 0 12.857 C 0 5.756 5.756 0 12.857 0 Z", fill: "#FFFFFF" }),
            React.createElement("path", { d: "M 20.357 20.357 L 27.857 27.857", fill: "transparent", "stroke-width": "4.28", stroke: "#FFFFFF", "stroke-linecap": "round" }),
            React.createElement("g", { transform: "translate(9.643 6.429)" },
                React.createElement("path", { d: "M 3.214 12.857 L 3.214 12.857", fill: "transparent", "stroke-width": "3.75", stroke: "#8A58FF", "stroke-linecap": "round" }),
                React.createElement("path", { d: "M 0 3.214 C 0 1.004 1.843 0 3.214 0 C 4.586 0 6.429 0.603 6.429 3.214 C 6.429 5.826 3.214 5.913 3.214 7.232 C 3.214 8.552 3.214 8.571 3.214 8.571", fill: "transparent", "stroke-width": "3.22", stroke: "#8A58FF", "stroke-linecap": "round", "stroke-linejoin": "round" })))));
}
Icon.defaultProps = {
    width: 48,
    height: 48,
    iconSelection: "Framer",
    iconSearch: "Framer",
    color: "#888",
    selection: true,
};
// @ts-ignore
framer_1.addPropertyControls(Icon, Object.assign({ color: { type: framer_1.ControlType.Color, title: "Color" }, selection: {
        type: framer_1.ControlType.Boolean,
        title: "Find icon",
        enabledTitle: "Choose",
        disabledTitle: "Search",
    }, iconSelection: {
        type: framer_1.ControlType.Enum,
        options: Object.keys(FeatherIcons),
        defaultValue: Icon.defaultProps.iconSelection,
        title: indentTitle_1.indentTitle("Icon"),
        hidden: ({ selection }) => !selection,
    }, iconSearch: {
        type: framer_1.ControlType.String,
        title: indentTitle_1.indentTitle("Icon"),
        placeholder: "Menu, Wifi, Box…",
        hidden: ({ selection }) => selection,
    } }, constants_1.defaultEvents));
const iconStyle = {
    minWidth: "10px",
    minHeight: "10px",
    maxWidth: "20px",
    maxHeight: "20px",
    width: "60%",
    height: "60%",
};
exports.__info__ = [{ "name": "Icon", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Input.tsx":
/*!************************!*\
  !*** ./code/Input.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0lucHV0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQXVFO0FBQ3ZFLGlDQUFtRDtBQUNuRCwrQ0FBeUQ7QUFFekQ7Ozs7R0FJRztBQUVILFNBQVMsaUJBQWlCOztJQUN0QixNQUFNLE9BQU8sR0FBRyxzREFBc0QsQ0FBQTtJQUN0RSxNQUFNLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFDbkUsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUE7SUFDMUUsTUFBTSxTQUFTLEdBQUcsZ0JBQWdCLFFBQVEsRUFBRSxFQUFFLENBQUE7SUFFOUMsT0FBTyxTQUFTLENBQUE7Q0FDbkI7QUFrQ0QsU0FBZ0IsS0FBSyxDQUFDLEtBQUs7O0lBQ3ZCLE1BQU0sRUFDRixXQUFXLEVBQ1gsZUFBZSxFQUNmLFNBQVMsRUFDVCxRQUFRLEVBQ1IsVUFBVSxFQUNWLE1BQU0sRUFDTixjQUFjLEVBQ2QsT0FBTyxFQUNQLFVBQVUsRUFDVixZQUFZLEVBQ1osYUFBYSxFQUNiLFdBQVcsRUFDWCxNQUFNLEVBQ04sV0FBVyxFQUNYLFFBQVEsRUFDUixRQUFRLEVBQ1IsT0FBTyxFQUNQLE1BQU0sRUFDTixLQUFLLEVBQ0wsT0FBTyxFQUNQLFFBQVEsRUFDUixXQUFXLEVBQ1gsVUFBVSxFQUNWLE9BQU8sRUFDUCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLE9BQU8sRUFDUCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFlBQVksR0FDZixHQUFHLEtBQUssQ0FBQTtJQUVULE1BQU0sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM5QyxNQUFNLFFBQVEsR0FBRyxjQUFNLEVBQUUsQ0FBQTtJQUV6QixzQ0FBc0M7SUFDdEMsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyxnQkFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQTtJQUMvRCxpQkFBUyxDQUFDLEdBQUcsRUFBRTs7UUFDWCxZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFBO0tBQ3BDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUE7SUFFdEIsTUFBTSxZQUFZLEdBQUcsY0FBYztRQUMvQixDQUFDLENBQUMsR0FBRyxVQUFVLE1BQU0sWUFBWSxNQUFNLGFBQWEsTUFBTSxXQUFXLElBQUk7UUFDekUsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtJQUNiLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLE1BQU0sUUFBUSxNQUFNLFdBQVcsTUFBTSxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQTtJQUU1RyxNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQXdCLEVBQUUsRUFBRTs7UUFDMUMsTUFBTSxPQUFPLEdBQUcsU0FBUztZQUNyQixDQUFDLENBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUE4QjtZQUNuRCxDQUFDLENBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUEyQixDQUFBO1FBRXBELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUE7UUFFM0IsSUFBSSxLQUFLLENBQUMsUUFBUTtZQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFekMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRWYsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQ3JCLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDN0I7S0FDSixDQUFBO0lBRUQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ2pCLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUNsQixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUVYLE1BQU0sU0FBUyxHQUFHLHFCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUsscUJBQVksQ0FBQyxPQUFPLENBQUE7SUFDakUsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtJQUM1QyxNQUFNLGVBQWUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUV4RCxPQUFPLENBQ0g7UUFDSSxtQ0FDSzt1QkFDTSxTQUFTO2tEQUNrQixLQUFLLENBQUMsV0FBVzswQkFDekMsS0FBSyxDQUFDLFVBQVU7Ozt1QkFHbkIsU0FBUztpQ0FDQyxnQkFBZ0I7O2lCQUVoQyxDQUNHO1FBQ1Isb0JBQUMsR0FBRyxJQUNBLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLEdBQUcsRUFBRSxRQUFRLEVBQ2IsS0FBSyxFQUFFLFVBQVUsRUFDakIsV0FBVyxFQUFFLFdBQVcsRUFDeEIsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7O2dCQUNiLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7b0JBQ2xCLGFBQWE7b0JBQ2IsSUFBSSxZQUFZLElBQUksUUFBUSxDQUFDLE9BQU87d0JBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtvQkFDN0QsSUFBSSxRQUFRO3dCQUFFLFFBQVEsRUFBRSxDQUFBO2lCQUMzQjthQUNKLEVBQ0QsT0FBTyxFQUFFLEdBQUcsRUFBRTs7Z0JBQ1YsSUFBSSxPQUFPO29CQUFFLE9BQU8sRUFBRSxDQUFBO2FBQ3pCLEVBQ0QsTUFBTSxFQUFFLEdBQUcsRUFBRTs7Z0JBQ1QsSUFBSSxNQUFNO29CQUFFLE1BQU0sRUFBRSxDQUFBO2FBQ3ZCLEVBQ0QsU0FBUyxFQUFFLFNBQVMsSUFBSSxPQUFPLEVBQy9CLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLEtBQUssOERBQ0UsS0FBSyxLQUNSLGVBQWUsRUFDZixLQUFLLEVBQUUsU0FBUyxFQUNoQixRQUFRLEVBQUUsUUFBUSxFQUNsQixVQUFVLEVBQUUsVUFBVSxFQUN0QixZQUFZLEVBQ1osT0FBTyxFQUFFLFlBQVksRUFDckIsU0FBUyxFQUNMLENBQUMsU0FBUyxJQUFJLE9BQU87b0JBQ2pCLENBQUMsQ0FBQyxlQUFlLEtBQUssQ0FBQyxXQUFXLE1BQU0sS0FBSyxDQUFDLFVBQVUsRUFBRTtvQkFDMUQsQ0FBQyxDQUFDLGVBQWUsV0FBVyxNQUFNLE1BQU0sRUFBRSxLQUMvQyxlQUFlLEdBQ2YsVUFBVSxHQUVqQixJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FDdEMsQ0FDSCxDQUNOLENBQUE7Q0FDSjtBQTdIRCxzQkE2SEM7QUFFRCxLQUFLLENBQUMsWUFBWSxHQUFHO0lBQ2pCLEtBQUssRUFBRSxFQUFFO0lBQ1QsV0FBVyxFQUFFLGlCQUFpQjtJQUM5QixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxFQUFFO0lBQ1YsZUFBZSxFQUFFLFNBQVM7SUFDMUIsU0FBUyxFQUFFLE1BQU07SUFDakIsVUFBVSxFQUFFLE1BQU07SUFDbEIsUUFBUSxFQUFFLEVBQUU7SUFDWixVQUFVLEVBQUUsR0FBRztJQUNmLE1BQU0sRUFBRSxFQUFFO0lBQ1YsT0FBTyxFQUFFLEVBQUU7SUFDWCxjQUFjLEVBQUUsS0FBSztJQUNyQixVQUFVLEVBQUUsRUFBRTtJQUNkLFlBQVksRUFBRSxFQUFFO0lBQ2hCLGFBQWEsRUFBRSxFQUFFO0lBQ2pCLFdBQVcsRUFBRSxFQUFFO0lBQ2YsTUFBTSxFQUFFLGVBQWU7SUFDdkIsZ0JBQWdCLEVBQUUsTUFBTTtJQUN4QixXQUFXLEVBQUUsQ0FBQztJQUNkLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFFBQVEsRUFBRSxLQUFLO0NBQ2xCLENBQUE7QUFFRCw0QkFBbUIsQ0FBQyxLQUFLLGdDQUNyQixXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxFQUMvRCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUNuRCxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUMzRCxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEVBQ25FLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQ2pFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQ3BELFdBQVcsRUFBRTtRQUNULElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLEdBQUc7UUFDVixHQUFHLEVBQUUsQ0FBQztRQUNOLEdBQUcsRUFBRSxDQUFDO1FBQ04sY0FBYyxFQUFFLElBQUk7S0FDdkIsRUFFRCxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUN2RCxPQUFPLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFlBQVksRUFBRSxLQUFLO1FBQ25CLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFlBQVksRUFBRSxLQUFLO0tBQ3RCLElBQ0Usd0JBQVksS0FDZixRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxXQUFXO1FBQ2xCLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLEVBQUU7S0FDVixFQUNELE9BQU8sRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLFdBQVc7UUFDN0IsU0FBUyxFQUFFLGdCQUFnQjtRQUMzQixZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUM7UUFDN0MsU0FBUyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsYUFBYSxDQUFDO1FBQ3pFLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUNqQyxHQUFHLEVBQUUsQ0FBQztRQUNOLEtBQUssRUFBRSxTQUFTO0tBQ25CLEVBQ0QsTUFBTSxFQUFFO1FBQ0osS0FBSyxFQUFFLFFBQVE7UUFDZixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxXQUFXO1FBQzdCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU07UUFDdkMsU0FBUyxFQUFFLFNBQVM7UUFDcEIsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDO1FBQzdDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQztRQUMvRCxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7UUFDckMsR0FBRyxFQUFFLENBQUM7S0FDVCxFQUVELFNBQVMsRUFBRTtRQUNQLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsS0FBSyxFQUFFLFdBQVc7UUFDbEIsWUFBWSxFQUFFLEtBQUs7UUFDbkIsYUFBYSxFQUFFLElBQUk7UUFDbkIsWUFBWSxFQUFFLEtBQUs7S0FDdEIsRUFDRCxRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxVQUFVO1FBQ2pCLE1BQU0sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVM7UUFDcEMsYUFBYSxFQUFFLElBQUk7UUFDbkIsWUFBWSxFQUFFLEtBQUs7S0FDdEIsRUFDRCxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxZQUFZLEVBQUUsRUFDNUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsWUFBWSxFQUFFLEVBQzVDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLFlBQVksRUFBRSxFQUMzQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxZQUFZLEVBQUUsSUFDNUMsQ0FBQTtBQUVGLE1BQU0sS0FBSyxHQUF3QjtJQUMvQixNQUFNLEVBQUUsTUFBTTtJQUNkLEtBQUssRUFBRSxNQUFNO0lBQ2IsUUFBUSxFQUFFLFVBQVU7SUFDcEIsSUFBSSxFQUFFLENBQUM7SUFDUCxLQUFLLEVBQUUsQ0FBQztJQUNSLEdBQUcsRUFBRSxDQUFDO0lBQ04sTUFBTSxFQUFFLENBQUM7SUFDVCxPQUFPLEVBQUUsTUFBTTtJQUNmLE1BQU0sRUFBRSxNQUFNO0lBQ2QsTUFBTSxFQUFFLENBQUM7SUFDVCxVQUFVLEVBQUUscUJBQVM7SUFDckIsdUJBQXVCLEVBQUUsa0JBQWtCO0lBQzNDLGdCQUFnQixFQUFFLE1BQU07Q0FDM0IsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const react_1 = __webpack_require__(/*! react */ "react");
const constants_1 = __webpack_require__(/*! ./lib/constants */ "./code/lib/constants.ts");
/*
 ** INPUT
 ** - Validation
 ** - Show Password button
 */
function createUniqueClass() {
    window["__checkBudget__"]();
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const l = () => letters[Math.floor(Math.random() * letters.length)];
    const randomID = () => l() + l() + l() + l() + l() + l() + l() + l() + l();
    const className = `framer-input-${randomID()}`;
    return className;
}
function Input(props) {
    window["__checkComponentBudget__"]();
    const { placeholder, backgroundColor, textColor, fontSize, fontWeight, radius, paddingPerSide, padding, paddingTop, paddingRight, paddingBottom, paddingLeft, border, borderWidth, password, onSubmit, onFocus, onBlur, value, topLeft, topRight, bottomRight, bottomLeft, isMixed, multiLine, placeholderColor, focused, inputStyle, fontFamily, blurOnSubmit, } = props;
    const [inputValue, setValue] = react_1.useState(value);
    const inputEle = react_1.useRef();
    // random string ID for pseudo classes
    const [className, setClassName] = react_1.useState(createUniqueClass());
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        setClassName(createUniqueClass());
    }, [placeholderColor]);
    const paddingValue = paddingPerSide
        ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`
        : padding;
    const borderRadius = isMixed ? `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px` : `${radius}px`;
    const onChange = (event) => {
        window["__checkBudget__"]();
        const element = multiLine
            ? event.nativeEvent.target
            : event.nativeEvent.target;
        const value = element.value;
        if (props.onChange)
            props.onChange(value);
        setValue(value);
        if (props.onValueChange) {
            props.onValueChange(value);
        }
    };
    React.useEffect(() => {
        window["__checkBudget__"]();
        setValue(value);
    }, [value]);
    const inPreview = framer_1.RenderTarget.current() === framer_1.RenderTarget.preview;
    const Tag = multiLine ? "textarea" : "input";
    const fontFamilyStyle = fontFamily ? { fontFamily } : {};
    return (React.createElement(React.Fragment, null,
        React.createElement("style", null, `        
                    .${className}:focus {
                        box-shadow: inset 0 0 0 ${props.borderWidth}px
                        ${props.focusColor} !important;
                    }

                    .${className}::placeholder {
                        color: ${placeholderColor} !important;
                    }
                `),
        React.createElement(Tag, { onChange: onChange, ref: inputEle, value: inputValue, placeholder: placeholder, onKeyDown: (e) => {
                window["__checkBudget__"]();
                if (e.keyCode === 13) {
                    // @ts-ignore
                    if (blurOnSubmit && inputEle.current)
                        inputEle.current.blur();
                    if (onSubmit)
                        onSubmit();
                }
            }, onFocus: () => {
                window["__checkBudget__"]();
                if (onFocus)
                    onFocus();
            }, onBlur: () => {
                window["__checkBudget__"]();
                if (onBlur)
                    onBlur();
            }, autoFocus: inPreview && focused, className: className, style: Object.assign(Object.assign(Object.assign(Object.assign({}, style), { backgroundColor, color: textColor, fontSize: fontSize, fontWeight: fontWeight, borderRadius, padding: paddingValue, boxShadow: !inPreview && focused
                    ? `inset 0 0 0 ${props.borderWidth}px ${props.focusColor}`
                    : `inset 0 0 0 ${borderWidth}px ${border}` }), fontFamilyStyle), inputStyle), type: password ? "password" : "text" })));
}
exports.Input = Input;
Input.defaultProps = {
    value: "",
    placeholder: "Type something…",
    width: 260,
    height: 50,
    backgroundColor: "#EBEBEB",
    textColor: "#333",
    focusColor: "#09F",
    fontSize: 15,
    fontWeight: 400,
    radius: 10,
    padding: 12,
    paddingPerSide: false,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    border: "rgba(0,0,0,0)",
    placeholderColor: "#aaa",
    borderWidth: 1,
    multiLine: false,
    password: false,
};
framer_1.addPropertyControls(Input, Object.assign(Object.assign({ placeholder: { type: framer_1.ControlType.String, title: "Placeholder" }, value: { type: framer_1.ControlType.String, title: "Value" }, textColor: { type: framer_1.ControlType.Color, title: "Text Color" }, placeholderColor: { type: framer_1.ControlType.Color, title: "Placeholder" }, backgroundColor: { type: framer_1.ControlType.Color, title: "Background" }, border: { type: framer_1.ControlType.Color, title: "Border" }, borderWidth: {
        type: framer_1.ControlType.Number,
        title: " ",
        min: 1,
        max: 5,
        displayStepper: true,
    }, focusColor: { type: framer_1.ControlType.Color, title: "Focus" }, focused: {
        type: framer_1.ControlType.Boolean,
        title: "Focused",
        defaultValue: false,
        disabledTitle: "No",
        enabledTitle: "Yes",
    } }, constants_1.fontControls), { fontSize: {
        type: framer_1.ControlType.Number,
        title: "Font Size",
        min: 5,
        max: 25,
    }, padding: {
        type: framer_1.ControlType.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
        title: "Padding",
    }, radius: {
        title: "Radius",
        type: framer_1.ControlType.FusedNumber,
        defaultValue: Input.defaultProps.radius,
        toggleKey: "isMixed",
        toggleTitles: ["Radius", "Radius per corner"],
        valueKeys: ["topLeft", "topRight", "bottomRight", "bottomLeft"],
        valueLabels: ["TL", "TR", "BR", "BL"],
        min: 0,
    }, multiLine: {
        type: framer_1.ControlType.Boolean,
        title: "Text Area",
        defaultValue: false,
        disabledTitle: "No",
        enabledTitle: "Yes",
    }, password: {
        type: framer_1.ControlType.Boolean,
        title: "Password",
        hidden: ({ multiLine }) => multiLine,
        disabledTitle: "No",
        enabledTitle: "Yes",
    }, onChange: { type: framer_1.ControlType.EventHandler }, onSubmit: { type: framer_1.ControlType.EventHandler }, onFocus: { type: framer_1.ControlType.EventHandler }, onBlur: { type: framer_1.ControlType.EventHandler } }));
const style = {
    border: "none",
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    outline: "none",
    resize: "none",
    margin: 0,
    fontFamily: constants_1.fontStack,
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    WebkitAppearance: "none",
};
exports.__info__ = [{ "name": "Input", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Loading.tsx":
/*!**************************!*\
  !*** ./code/Loading.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvTG9hZGluZy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUFzRjtBQUN0RixpREFBNkM7QUFDN0MsbURBQStDO0FBQy9DLCtDQUErQztBQUUvQyxJQUFLLFVBS0o7QUFMRCxXQUFLLFVBQVU7SUFDWCw4QkFBZ0IsQ0FBQTtJQUNoQix1QkFBdUI7SUFDdkIsbUNBQXFCLENBQUE7SUFDckIseUJBQVcsQ0FBQTtBQUNmLENBQUMsRUFMSSxVQUFVLEtBQVYsVUFBVSxRQUtkO0FBRUQsTUFBTSxjQUFjLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQTtBQUVwRixNQUFNLGdCQUFnQixHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEVBQUU7O0lBQ2xFLE1BQU0sQ0FBQyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUN4QyxPQUFPO1FBQ0gsQ0FBQyxFQUFFLE9BQU8sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFFLE9BQU8sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEMsQ0FBQTtDQUNKLENBQUE7QUFFRCxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsRUFBRTs7SUFDL0MsTUFBTSxVQUFVLEdBQUcsUUFBUSxHQUFHLFVBQVUsS0FBSyxHQUFHLENBQUE7SUFDaEQsTUFBTSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVB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

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const useTimeout_1 = __webpack_require__(/*! ./lib/useTimeout */ "./code/lib/useTimeout.ts");
const indentTitle_1 = __webpack_require__(/*! ./lib/indentTitle */ "./code/lib/indentTitle.ts");
const constants_1 = __webpack_require__(/*! ./lib/constants */ "./code/lib/constants.ts");
var Indicators;
(function (Indicators) {
    Indicators["DotWave"] = "Dots";
    // Spinner = "Spinner",
    Indicators["Material"] = "Material";
    Indicators["IOS"] = "iOS";
})(Indicators || (Indicators = {}));
const angleInRadians = (angleInDegrees) => (angleInDegrees - 90) * (Math.PI / 180.0);
const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    window["__checkBudget__"]();
    const a = angleInRadians(angleInDegrees);
    return {
        x: centerX + radius * Math.cos(a),
        y: centerY + radius * Math.sin(a),
    };
};
const arc = (x, y, radius, startAngle, endAngle) => {
    window["__checkBudget__"]();
    const fullCircle = endAngle - startAngle === 360;
    const start = polarToCartesian(x, y, radius, endAngle - 0.01);
    const end = polarToCartesian(x, y, radius, startAngle);
    const arcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    let d = ["M", start.x, start.y, "A", radius, radius, 0, arcFlag, 0, end.x, end.y].join(" ");
    if (fullCircle)
        d += "z";
    return d;
};
function Spinner({ color }) {
    window["__checkBudget__"]();
    const length = 360;
    const endPercentage = (length / 360) * 100;
    const strokeWidth = 10;
    const width = 100;
    const height = 100;
    return (React.createElement(framer_1.motion.div, { style: {
            height: "85%",
            width: "85%",
            position: "relative",
            originX: 0.5,
            originY: 0.5,
        }, animate: { rotate: 360 }, transition: { loop: Infinity, ease: "linear", duration: 0.5 } },
        React.createElement(framer_1.motion.svg, { style: {
                height: "100%",
                width: "100%",
                // border: "1px solid red",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                position: "absolute",
                WebkitMask: `conic-gradient(rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0,1.0) ${endPercentage}%)`,
            }, viewBox: "0 0 100 100" },
            React.createElement("g", { transform: "translate(0 0)" },
                React.createElement("path", { d: arc(width / 2, height / 2, width / 2 - strokeWidth / 2, 0, length), fill: "none", stroke: color, strokeWidth: strokeWidth, strokeLinecap: "round" }))),
        React.createElement(framer_1.motion.svg, { style: {
                height: "100%",
                width: "100%",
                position: "absolute",
            }, viewBox: "0 0 100 100" },
            React.createElement("g", { transform: "translate(50 0)" },
                React.createElement("path", { d: "M 0 0 C 2.761 0 5 2.239 5 5 C 5 7.761 2.761 10 0 10 C 0 10 0 0 0 0 Z", fill: color })))));
}
// <path d="M 0 0 C 2.761 0 5 2.239 5 5 C 5 7.761 2.761 10 0 10 C 0 10 0 0 0 0 Z" fill="#CCC"></path>
// function Spinner({ color }) {
//     return (
//         <svg style={{ height: "85%", width: "85%" }} viewBox="0 0 100 100">
//             <motion.g
//                 transform="translate(3 3)"
//                 animate={{ rotate: 360 }}
//                 transition={{ loop: Infinity, ease: "linear", duration: 1 }}
//             >
//                 {pathStrings.map((data, i) => {
//                     return <path d={data} fill={color} opacity={i / pathStrings.length} />
//                 })}
//             </motion.g>
//         </svg>
//     )
// }
function DotWave({ color }) {
    window["__checkBudget__"]();
    const circles = [0, 1, 2];
    return (React.createElement(framer_1.motion.svg, { style: {
            height: "85%",
            width: "85%",
        }, viewBox: "0 0 30 30", variants: {
            show: {
                transition: {
                    delayChildren: 0.1,
                    staggerChildren: 0.12,
                },
            },
        }, animate: "show" }, circles.map((circle) => (React.createElement(framer_1.motion.circle, { style: { fill: color }, variants: {
            hidden: { y: 0 },
            show: { y: [0, 0, 0, -10, 0, 0, 0] },
        }, key: circle, transition: {
            yoyo: Infinity,
            duration: 1.45,
            ease: "easeInOut",
        }, r: 3, cx: circle * 10 + 5, cy: 15 })))));
}
function Material({ color }) {
    window["__checkBudget__"]();
    return (React.createElement(framer_1.motion.svg, { style: {
            height: "85%",
            width: "85%",
            overflow: "visible",
            originX: "50%",
            originY: "50%",
        }, animate: { rotate: 360 }, transition: { ease: "linear", loop: Infinity, duration: 2 }, viewBox: "25 25 50 50" },
        React.createElement(framer_1.motion.circle, { style: {
                stroke: color,
                strokeLinecap: "round",
            }, animate: {
                strokeDasharray: ["1, 200", "89, 200", "89, 200"],
                strokeDashoffset: [0, -35, -124],
            }, transition: {
                duration: 1.5,
                loop: Infinity,
                ease: "easeInOut",
            }, cx: "50", cy: "50", r: "20", fill: "none", strokeWidth: 2, strokeMiterlimit: "10" })));
}
function IOS({ color }) {
    window["__checkBudget__"]();
    const particles = 12;
    const duration = 1;
    // this was the death of me
    const arrayRotate = (arr, n) => arr.slice(n, arr.length).concat(arr.slice(0, n));
    const lines = [...new Array(particles)].map((l, i) => (0.9 / particles) * i + 0.1).reverse();
    const lineOpacities = lines.map((l, i) => arrayRotate(lines, i));
    return (React.createElement(framer_1.motion.svg, { viewBox: "-15 -15 30 30", style: { width: "100%", height: "100%" } }, lineOpacities.map((lineKeyframes, i) => (React.createElement(framer_1.motion.g, { key: i, initial: { opacity: lineKeyframes[0] }, animate: { opacity: lineKeyframes }, transition: {
            duration,
            loop: Infinity,
            repeatDelay: 0.0005,
        } },
        React.createElement("rect", { style: {
                width: 7,
                height: 2,
                fill: color,
                transform: `rotate(${((particles - i) / particles) * 360 - 90}deg)`,
            }, x: 5, y: -1, rx: 1 }))))));
}
function getIndicator(indicator, props) {
    window["__checkBudget__"]();
    switch (indicator) {
        case Indicators.DotWave:
            return React.createElement(DotWave, Object.assign({}, props));
        case Indicators.Material:
            return React.createElement(Material, Object.assign({}, props));
        case Indicators.IOS:
            return React.createElement(IOS, Object.assign({}, props));
        // case Indicators.Spinner:
        //     return <Spinner {...props} />
        default:
            return React.createElement(DotWave, Object.assign({}, props));
    }
}
function Loading(props) {
    window["__checkComponentBudget__"]();
    const { duration, onTimeout, fadeOut, hasDuration, indicator, onClick, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave, } = props;
    const controls = framer_1.useAnimation();
    const animDuration = fadeOut ? Math.min(duration, 0.3) : 0;
    const animDelay = fadeOut ? duration - animDuration : duration;
    const currentIndicator = getIndicator(indicator, props);
    useTimeout_1.useTimeout(() => {
        window["__checkBudget__"]();
        if (onTimeout)
            onTimeout();
    }, duration);
    useTimeout_1.useTimeout(() => {
        window["__checkBudget__"]();
        if (hasDuration)
            controls.start({
                opacity: 0,
                transition: { duration: animDuration, ease: "easeIn" },
            });
    }, animDelay);
    return (React.createElement(framer_1.motion.div, Object.assign({}, { onClick, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave }, { animate: controls, style: {
            position: "relative",
            overflow: "show",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
        } }), currentIndicator));
}
exports.Loading = Loading;
Loading.defaultProps = {
    height: 40,
    width: 40,
    duration: 2,
    hasDuration: false,
};
// Learn more: https://framer.com/api/property-controls/
framer_1.addPropertyControls(Loading, Object.assign({ indicator: {
        title: "Indicator",
        type: framer_1.ControlType.Enum,
        options: Object.keys(Indicators).map((i) => Indicators[i]),
    }, color: {
        type: framer_1.ControlType.Color,
        defaultValue: "#888",
    }, 
    // transition: { title: "Animation", type: ControlType.Transition },
    hasDuration: {
        title: "Duration",
        type: framer_1.ControlType.Boolean,
        defaultValue: Loading.defaultProps.hasDuration,
        enabledTitle: "Timeout",
        disabledTitle: "Infinity",
    }, duration: {
        title: indentTitle_1.indentTitle("Time"),
        hidden: ({ hasDuration }) => !hasDuration,
        min: 0.1,
        max: 10,
        defaultValue: Loading.defaultProps.duration,
        type: framer_1.ControlType.Number,
        step: 0.1,
    }, fadeOut: {
        title: indentTitle_1.indentTitle("Fade Out"),
        hidden: ({ hasDuration }) => !hasDuration,
        type: framer_1.ControlType.Boolean,
        enabledTitle: "Yes",
        disabledTitle: "No",
    }, onTimeout: {
        type: framer_1.ControlType.EventHandler,
    } }, constants_1.defaultEvents));
const pathStrings = [
    "M 48.25 0.03 L 49.79 0.08 L 50.08 0.1 L 50.37 0.12 L 50.66 0.14 L 50.95 0.16 L 51.41 0.21 L 51.7 0.24 L 51.99 0.27 L 52.28 0.3 L 51.26 10.24 L 50.97 10.21 L 50.68 10.18 L 50.39 10.15 L 50.27 10.14 L 49.98 10.12 L 49.69 10.1 L 49.4 10.08 L 49.11 10.06 L 47.91 10.02 Z",
    "M 52.28 0.3 L 52.57 0.33 L 53.03 0.39 L 53.15 0.4 L 53.63 0.46 L 54.06 0.53 L 54.18 0.55 L 54.64 0.62 L 54.78 0.64 L 55.21 0.71 L 53.51 10.57 L 53.36 10.54 L 52.94 10.48 L 52.82 10.45 L 52.36 10.39 L 52.21 10.36 L 52.13 10.34 L 51.67 10.29 L 51.55 10.27 L 51.26 10.24 Z",
    "M 55.21 0.71 L 55.5 0.76 L 55.98 0.86 L 56.07 0.87 L 56.55 0.97 L 56.8 1.02 L 57.12 1.09 L 57.53 1.19 L 57.69 1.22 L 58.13 1.33 L 55.71 11.03 L 55.59 11 L 55.19 10.91 L 55.02 10.87 L 54.78 10.82 L 54.45 10.75 L 54.37 10.73 L 53.88 10.64 L 53.8 10.62 L 53.51 10.57 Z",
    "M 58.13 1.33 L 58.41 1.4 L 58.66 1.46 L 58.98 1.54 L 59.42 1.66 L 59.7 1.74 L 59.82 1.77 L 60.42 1.95 L 60.54 1.98 L 60.91 2.1 L 57.97 11.64 L 57.8 11.6 L 57.36 11.47 L 57.4 11.47 L 56.96 11.36 L 56.68 11.28 L 56.56 11.24 L 56.32 11.18 L 55.99 11.1 L 55.71 11.03 Z",
    "M 60.91 2.1 L 61.25 2.2 L 61.53 2.29 L 61.81 2.38 L 62.13 2.49 L 62.51 2.62 L 62.84 2.74 L 62.95 2.78 L 63.33 2.91 L 63.73 3.07 L 60.11 12.39 L 59.97 12.33 L 59.79 12.26 L 59.36 12.12 L 59.15 12.04 L 58.97 11.97 L 58.75 11.9 L 58.47 11.81 L 58.19 11.72 L 57.97 11.64 Z",
    "M 63.73 3.07 L 63.93 3.14 L 64.35 3.31 L 64.62 3.42 L 64.89 3.53 L 65.16 3.64 L 65.43 3.75 L 65.9 3.96 L 65.96 3.98 L 66.41 4.18 L 62.28 13.29 L 62.18 13.24 L 61.7 13.04 L 61.65 13.01 L 61.38 12.9 L 61.11 12.79 L 60.84 12.68 L 60.57 12.57 L 60.45 12.52 L 60.11 12.39 Z",
    "M 66.41 4.18 L 66.7 4.31 L 67.1 4.51 L 67.16 4.53 L 67.63 4.76 L 67.89 4.89 L 68.15 5.02 L 68.41 5.15 L 68.67 5.28 L 69.09 5.51 L 64.28 14.27 L 64.19 14.22 L 63.93 14.09 L 63.67 13.96 L 63.41 13.83 L 63.15 13.7 L 63.1 13.67 L 62.62 13.45 L 62.5 13.39 L 62.28 13.29 Z",
    "M 69.09 5.51 L 69.31 5.63 L 69.57 5.77 L 69.89 5.95 L 70.14 6.09 L 70.33 6.19 L 70.78 6.45 L 71.03 6.6 L 71.28 6.75 L 71.57 6.93 L 66.35 15.45 L 66.14 15.33 L 65.89 15.18 L 65.64 15.03 L 65.59 14.99 L 65.26 14.81 L 65.01 14.67 L 64.83 14.57 L 64.57 14.43 L 64.28 14.27 Z",
    "M 71.57 6.93 L 71.85 7.1 L 72.15 7.29 L 72.34 7.41 L 72.64 7.6 L 72.95 7.81 L 73.19 7.97 L 73.55 8.22 L 73.67 8.3 L 74.03 8.55 L 68.25 16.71 L 68.13 16.62 L 67.77 16.38 L 67.65 16.29 L 67.41 16.13 L 67.24 16.02 L 67.04 15.89 L 66.75 15.71 L 66.55 15.58 L 66.35 15.45 Z",
    "M 74.03 8.55 L 74.27 8.72 L 74.51 8.89 L 74.82 9.12 L 75.05 9.29 L 75.21 9.4 L 75.63 9.72 L 75.86 9.9 L 76.09 10.08 L 76.36 10.29 L 70.11 18.11 L 69.93 17.96 L 69.7 17.78 L 69.47 17.6 L 69.43 17.56 L 69.11 17.33 L 68.88 17.16 L 68.73 17.05 L 68.49 16.88 L 68.25 16.71 Z",
    "M 76.36 10.29 L 76.54 10.44 L 76.87 10.72 L 77.08 10.88 L 77.4 11.16 L 77.62 11.35 L 77.84 11.54 L 78.06 11.73 L 78.28 11.92 L 78.59 12.2 L 71.88 19.61 L 71.74 19.48 L 71.52 19.29 L 71.3 19.1 L 71.08 18.91 L 70.86 18.72 L 70.74 18.62 L 70.51 18.42 L 70.38 18.32 L 70.11 18.11 Z",
    "M 78.59 12.2 L 78.79 12.38 L 79.1 12.67 L 79.23 12.79 L 79.53 13.07 L 79.82 13.35 L 80.03 13.56 L 80.15 13.68 L 80.52 14.06 L 80.69 14.23 L 73.53 21.22 L 73.28 20.96 L 73.25 20.92 L 72.95 20.64 L 72.74 20.43 L 72.63 20.31 L 72.51 20.19 L 72.2 19.91 L 72.09 19.8 L 71.88 19.61 Z",
    "M 80.69 14.23 L 80.93 14.48 L 81.13 14.69 L 81.33 14.9 L 81.53 15.11 L 81.88 15.51 L 81.92 15.54 L 82.27 15.94 L 82.46 16.16 L 82.65 16.38 L 75.09 22.92 L 74.9 22.7 L 74.71 22.48 L 74.68 22.44 L 74.32 22.05 L 74.29 22.01 L 74.09 21.8 L 73.89 21.59 L 73.69 21.38 L 73.53 21.22 Z",
    "M 82.65 16.38 L 82.84 16.6 L 83.03 16.82 L 83.29 17.14 L 83.49 17.37 L 83.74 17.69 L 83.92 17.92 L 84.03 18.05 L 84.28 18.37 L 84.53 18.7 L 76.51 24.68 L 76.4 24.53 L 76.29 24.39 L 76.04 24.08 L 75.86 23.85 L 75.75 23.71 L 75.59 23.5 L 75.47 23.36 L 75.28 23.14 L 75.09 22.92 Z",
    "M 84.53 18.7 L 84.71 18.95 L 84.88 19.18 L 85.04 19.39 L 85.23 19.65 L 85.53 20.09 L 85.62 20.21 L 85.79 20.45 L 86.03 20.81 L 86.19 21.05 L 77.87 26.59 L 77.71 26.35 L 77.63 26.23 L 77.46 25.99 L 77.21 25.63 L 77.19 25.59 L 77.04 25.39 L 76.84 25.12 L 76.67 24.89 L 76.51 24.68 Z",
    "M 86.19 21.05 L 86.35 21.29 L 86.56 21.61 L 86.74 21.9 L 86.87 22.1 L 87.1 22.48 L 87.25 22.73 L 87.35 22.89 L 87.59 23.3 L 87.73 23.55 L 79.09 28.55 L 78.93 28.3 L 78.87 28.19 L 78.67 27.87 L 78.52 27.62 L 78.45 27.5 L 78.26 27.2 L 78.14 27.01 L 78.03 26.83 L 77.87 26.59 Z",
    "M 87.73 23.55 L 87.91 23.86 L 88.05 24.11 L 88.17 24.31 L 88.41 24.75 L 88.51 24.95 L 88.65 25.21 L 88.82 25.52 L 88.98 25.85 L 89.11 26.11 L 80.17 30.59 L 80.04 30.33 L 79.94 30.14 L 79.85 29.95 L 79.71 29.69 L 79.53 29.37 L 79.51 29.31 L 79.33 28.99 L 79.19 28.74 L 79.09 28.55 Z",
    "M 89.11 26.11 L 89.24 26.37 L 89.41 26.71 L 89.56 27.04 L 89.62 27.16 L 89.84 27.64 L 89.93 27.83 L 90.13 28.31 L 90.19 28.44 L 90.31 28.74 L 81.14 32.72 L 81.05 32.5 L 80.87 32.09 L 80.85 32.03 L 80.7 31.7 L 80.68 31.64 L 80.48 31.24 L 80.39 31.05 L 80.3 30.85 L 80.17 30.59 Z",
    "M 90.31 28.74 L 90.42 28.97 L 90.59 29.38 L 90.75 29.8 L 90.8 29.92 L 90.96 30.34 L 91.03 30.53 L 91.17 30.89 L 91.27 31.16 L 91.4 31.55 L 81.94 34.81 L 81.89 34.64 L 81.79 34.37 L 81.73 34.19 L 81.58 33.82 L 81.54 33.7 L 81.37 33.28 L 81.33 33.16 L 81.28 33.03 L 81.14 32.72 Z",
    "M 91.4 31.55 L 91.46 31.71 L 91.62 32.2 L 91.69 32.42 L 91.8 32.75 L 91.89 33.03 L 92.02 33.47 L 92.08 33.69 L 92.14 33.86 L 92.29 34.38 L 82.63 36.96 L 82.62 36.92 L 82.5 36.53 L 82.4 36.21 L 82.37 36.09 L 82.28 35.81 L 82.21 35.58 L 82.1 35.26 L 82.08 35.19 L 81.94 34.81 Z",
    "M 92.29 34.38 L 92.38 34.74 L 92.42 34.86 L 92.54 35.35 L 92.6 35.59 L 92.67 35.87 L 92.74 36.15 L 92.85 36.64 L 92.87 36.72 L 92.97 37.19 L 83.19 39.25 L 83.17 39.14 L 83.05 38.66 L 83.04 38.57 L 82.97 38.29 L 82.9 38.01 L 82.82 37.69 L 82.8 37.6 L 82.68 37.16 L 82.63 36.96 Z",
    "M 92.97 37.19 L 93.03 37.45 L 93.09 37.73 L 93.18 38.22 L 93.21 38.35 L 93.28 38.76 L 93.34 39.08 L 93.4 39.54 L 93.42 39.62 L 93.48 40.02 L 83.6 41.55 L 83.58 41.38 L 83.5 40.9 L 83.48 40.78 L 83.44 40.52 L 83.41 40.37 L 83.32 39.92 L 83.31 39.83 L 83.25 39.55 L 83.19 39.25 Z",
    "M 93.48 40.02 L 93.52 40.23 L 93.58 40.69 L 93.63 41.15 L 93.65 41.23 L 93.7 41.72 L 93.73 42.01 L 93.76 42.3 L 93.79 42.59 L 93.83 42.97 L 83.87 43.81 L 83.85 43.61 L 83.82 43.32 L 83.79 43.03 L 83.76 42.74 L 83.75 42.65 L 83.69 42.17 L 83.68 42.05 L 83.66 41.93 L 83.6 41.55 Z",
    "M 93.83 42.97 L 93.86 43.34 L 93.88 43.63 L 93.9 43.92 L 93.92 44.21 L 93.94 44.5 L 93.96 44.96 L 93.97 45.25 L 93.98 45.54 L 93.99 45.91 L 83.99 46.09 L 83.98 45.88 L 83.97 45.59 L 83.96 45.3 L 83.96 45.18 L 83.94 44.89 L 83.92 44.6 L 83.9 44.31 L 83.88 44.02 L 83.87 43.81 Z",
    "M 93.99 45.91 L 93.99 46.29 L 94 46.42 L 94 47.46 L 93.99 47.92 L 93.99 48.04 L 93.98 48.5 L 93.97 48.79 L 83.97 48.45 L 83.98 48.16 L 83.99 48.04 L 83.99 47.58 L 84 47.46 L 84 46.76 L 83.99 46.29 L 83.99 46.09 Z",
    "M 93.97 48.79 L 93.96 49.08 L 93.93 49.54 L 93.93 49.66 L 93.9 50.12 L 93.88 50.41 L 93.86 50.7 L 93.81 51.16 L 93.81 51.28 L 93.76 51.74 L 83.82 50.72 L 83.83 50.6 L 83.87 50.14 L 83.88 50.02 L 83.9 49.73 L 83.92 49.44 L 83.93 49.32 L 83.95 48.86 L 83.96 48.74 L 83.97 48.45 Z",
    "M 93.76 51.74 L 93.73 52.03 L 93.7 52.32 L 93.64 52.78 L 93.63 52.9 L 93.57 53.36 L 93.53 53.67 L 93.49 53.93 L 93.42 54.39 L 93.39 54.61 L 83.52 53.05 L 83.56 52.69 L 83.59 52.57 L 83.63 52.25 L 83.67 52 L 83.69 51.88 L 83.74 51.42 L 83.76 51.3 L 83.79 51.01 L 83.82 50.72 Z",
    "M 93.39 54.61 L 93.32 54.99 L 93.28 55.25 L 93.23 55.54 L 93.13 56.02 L 93.12 56.11 L 93.02 56.59 L 92.97 56.84 L 92.9 57.16 L 92.82 57.51 L 83.07 55.29 L 83.12 55.06 L 83.17 54.82 L 83.24 54.49 L 83.26 54.41 L 83.35 53.92 L 83.37 53.84 L 83.42 53.55 L 83.48 53.23 L 83.52 53.05 Z",
    "M 92.82 57.51 L 92.73 57.89 L 92.66 58.17 L 92.59 58.45 L 92.53 58.7 L 92.45 59.02 L 92.33 59.46 L 92.25 59.74 L 92.17 60.02 L 92.09 60.3 L 82.47 57.56 L 82.55 57.28 L 82.63 57 L 82.71 56.72 L 82.75 56.6 L 82.81 56.36 L 82.89 56.03 L 82.96 55.75 L 83.03 55.47 L 83.07 55.29 Z",
    "M 92.09 60.3 L 92.01 60.58 L 91.85 61.06 L 91.84 61.13 L 91.7 61.57 L 91.59 61.89 L 91.46 62.27 L 91.42 62.4 L 91.25 62.88 L 91.16 63.12 L 81.76 59.7 L 81.87 59.4 L 81.9 59.34 L 82.04 58.91 L 82.11 58.73 L 82.18 58.51 L 82.22 58.39 L 82.37 57.9 L 82.39 57.84 L 82.47 57.56 Z",
    "M 91.16 63.12 L 91.07 63.37 L 90.95 63.7 L 90.78 64.12 L 90.74 64.24 L 90.57 64.66 L 90.46 64.93 L 90.35 65.2 L 90.17 65.61 L 90.08 65.83 L 80.91 61.85 L 81.03 61.55 L 81.09 61.42 L 81.2 61.15 L 81.31 60.88 L 81.36 60.76 L 81.52 60.34 L 81.57 60.22 L 81.65 60.01 L 81.76 59.7 Z",
    "M 90.08 65.83 L 89.94 66.14 L 89.79 66.47 L 89.7 66.67 L 89.55 67 L 89.35 67.4 L 89.26 67.6 L 89.09 67.93 L 88.96 68.19 L 88.81 68.48 L 79.91 63.94 L 80.02 63.71 L 80.15 63.45 L 80.24 63.26 L 80.41 62.92 L 80.47 62.8 L 80.56 62.61 L 80.71 62.27 L 80.8 62.08 L 80.91 61.85 Z",
    "M 88.81 68.48 L 88.67 68.77 L 88.49 69.09 L 88.35 69.35 L 88.17 69.67 L 88.07 69.86 L 87.89 70.18 L 87.75 70.43 L 87.53 70.81 L 87.38 71.06 L 78.8 65.92 L 78.95 65.67 L 79.03 65.55 L 79.17 65.3 L 79.27 65.12 L 79.45 64.79 L 79.55 64.61 L 79.69 64.35 L 79.79 64.15 L 79.91 63.94 Z",
    "M 87.38 71.06 L 87.23 71.31 L 87.08 71.56 L 86.93 71.81 L 86.64 72.25 L 86.53 72.43 L 86.41 72.62 L 86.22 72.92 L 85.92 73.35 L 85.84 73.47 L 77.52 67.93 L 77.76 67.57 L 77.8 67.52 L 77.93 67.32 L 78.11 67.03 L 78.32 66.71 L 78.35 66.67 L 78.5 66.42 L 78.65 66.17 L 78.8 65.92 Z",
    "M 85.84 73.47 L 85.68 73.71 L 85.43 74.07 L 85.2 74.38 L 85.09 74.54 L 84.86 74.85 L 84.75 75.01 L 84.43 75.43 L 84.25 75.66 L 84.12 75.84 L 76.16 69.78 L 76.37 69.5 L 76.55 69.27 L 76.59 69.23 L 76.82 68.91 L 76.93 68.76 L 77.16 68.44 L 77.27 68.29 L 77.36 68.17 L 77.52 67.93 Z",
    "M 84.12 75.84 L 83.9 76.12 L 83.62 76.45 L 83.46 76.66 L 83.35 76.8 L 83 77.21 L 82.81 77.43 L 82.79 77.47 L 82.27 78.05 L 82.24 78.09 L 74.68 71.55 L 75.03 71.15 L 74.91 71.31 L 75.25 70.89 L 75.44 70.67 L 75.47 70.64 L 75.72 70.32 L 75.92 70.09 L 76.02 69.96 L 76.16 69.78 Z",
    "M 82.24 78.09 L 82.05 78.31 L 81.77 78.62 L 81.59 78.82 L 81.3 79.13 L 81.18 79.26 L 80.9 79.56 L 80.62 79.85 L 80.41 80.06 L 80.21 80.27 L 73.13 73.19 L 73.33 72.98 L 73.54 72.77 L 73.66 72.66 L 73.78 72.54 L 74.06 72.23 L 74.17 72.12 L 74.37 71.9 L 74.49 71.77 L 74.68 71.55 Z",
    "M 80.21 80.27 L 79.91 80.55 L 79.79 80.68 L 79.49 80.96 L 79.28 81.16 L 79.07 81.36 L 78.86 81.56 L 78.46 81.91 L 78.43 81.95 L 78.03 82.3 L 71.49 74.74 L 71.53 74.71 L 71.92 74.35 L 71.96 74.32 L 72.17 74.12 L 72.38 73.92 L 72.59 73.72 L 72.71 73.6 L 73.01 73.31 L 73.13 73.19 Z",
    "M 78.03 82.3 L 77.81 82.49 L 77.59 82.68 L 77.37 82.87 L 77.15 83.06 L 76.73 83.4 L 76.7 83.43 L 76.28 83.77 L 76.05 83.95 L 75.82 84.13 L 69.66 76.25 L 69.89 76.07 L 70.12 75.89 L 70.16 75.87 L 70.57 75.52 L 70.61 75.5 L 70.83 75.31 L 71.05 75.12 L 71.27 74.93 L 71.49 74.74 Z",
    "M 75.82 84.13 L 75.59 84.31 L 75.25 84.56 L 75.13 84.66 L 74.7 84.97 L 74.55 85.08 L 74.23 85.31 L 74.08 85.42 L 73.64 85.72 L 73.46 85.85 L 67.8 77.61 L 68.1 77.4 L 68.14 77.38 L 68.45 77.15 L 68.61 77.04 L 68.92 76.81 L 68.97 76.78 L 69.31 76.52 L 69.43 76.43 L 69.66 76.25 Z",
    "M 73.46 85.85 L 73.16 86.05 L 72.84 86.26 L 72.67 86.37 L 72.43 86.53 L 72.11 86.74 L 71.82 86.92 L 71.49 87.12 L 71.37 87.2 L 70.92 87.45 L 65.91 78.81 L 65.97 78.78 L 66.35 78.54 L 66.52 78.44 L 66.71 78.32 L 66.89 78.21 L 67.13 78.05 L 67.44 77.84 L 67.62 77.73 L 67.8 77.61 Z",
    "M 70.92 87.45 L 70.74 87.57 L 70.49 87.72 L 70.11 87.93 L 69.91 88.05 L 69.6 88.22 L 69.14 88.46 L 69.09 88.49 L 68.76 88.67 L 68.37 88.87 L 63.89 79.93 L 64.02 79.87 L 64.21 79.77 L 64.66 79.52 L 64.72 79.5 L 64.91 79.39 L 65.23 79.21 L 65.35 79.14 L 65.6 78.99 L 65.91 78.81 Z",
    "M 68.37 88.87 L 68.11 89 L 67.85 89.13 L 67.59 89.26 L 67.33 89.39 L 66.85 89.61 L 66.66 89.7 L 66.4 89.82 L 66.06 89.97 L 65.83 90.08 L 61.69 80.97 L 62 80.83 L 62.2 80.74 L 62.46 80.62 L 62.79 80.47 L 62.85 80.45 L 63.11 80.32 L 63.37 80.19 L 63.63 80.06 L 63.89 79.93 Z",
    "M 65.83 90.08 L 65.6 90.18 L 65.12 90.38 L 64.85 90.49 L 64.58 90.6 L 64.31 90.71 L 63.89 90.87 L 63.77 90.92 L 63.35 91.08 L 63.04 91.19 L 59.62 81.79 L 59.87 81.7 L 59.99 81.66 L 60.41 81.49 L 60.53 81.45 L 60.8 81.34 L 61.07 81.23 L 61.34 81.12 L 61.4 81.1 L 61.69 80.97 Z",
    "M 63.04 91.19 L 62.8 91.28 L 62.46 91.4 L 62.09 91.52 L 61.76 91.63 L 61.54 91.7 L 61.21 91.81 L 60.93 91.9 L 60.49 92.03 L 60.33 92.09 L 57.38 82.53 L 57.75 82.41 L 57.87 82.38 L 58.15 82.29 L 58.38 82.22 L 58.7 82.11 L 58.93 82.04 L 59.1 81.98 L 59.32 81.9 L 59.62 81.79 Z",
    "M 60.33 92.09 L 59.94 92.2 L 59.66 92.28 L 59.22 92.39 L 59.1 92.43 L 58.61 92.55 L 58.37 92.61 L 58.09 92.68 L 57.81 92.75 L 57.42 92.84 L 55.2 83.09 L 55.39 83.05 L 55.67 82.98 L 55.95 82.91 L 56.27 82.83 L 56.36 82.81 L 56.8 82.69 L 56.92 82.66 L 57.2 82.58 L 57.38 82.53 Z",
    "M 57.42 92.84 L 57.24 92.88 L 56.75 92.99 L 56.51 93.04 L 56.02 93.13 L 55.94 93.15 L 55.45 93.24 L 55.2 93.28 L 54.88 93.34 L 54.61 93.38 L 52.88 83.53 L 53.18 83.48 L 53.44 83.44 L 53.75 83.38 L 53.84 83.37 L 54.32 83.27 L 54.41 83.26 L 54.73 83.19 L 54.82 83.18 L 55.2 83.09 Z",
    "M 54.61 93.38 L 54.34 93.43 L 53.85 93.5 L 53.56 93.54 L 53.27 93.58 L 52.98 93.62 L 52.55 93.67 L 52.41 93.69 L 51.95 93.74 L 51.66 93.77 L 50.64 83.83 L 50.93 83.8 L 51.05 83.79 L 51.49 83.73 L 51.62 83.72 L 51.91 83.68 L 52.2 83.64 L 52.49 83.6 L 52.58 83.59 L 52.88 83.53 Z",
    "M 51.66 93.77 L 51.37 93.8 L 50.91 93.84 L 50.62 93.86 L 50.5 93.87 L 49.87 93.91 L 49.75 93.92 L 49.46 93.94 L 49 93.96 L 48.71 93.97 L 48.37 83.97 L 48.66 83.96 L 48.78 83.96 L 49.07 83.94 L 49.53 83.91 L 49.48 83.93 L 49.94 83.88 L 50.23 83.86 L 50.35 83.86 L 50.64 83.83 Z",
    "M 48.71 93.97 L 48.42 93.98 L 48.12 93.99 L 47.66 93.99 L 47.54 94 L 46.5 94 L 46.04 93.99 L 45.84 93.99 L 46.01 83.99 L 46.38 83.99 L 46.5 84 L 47.2 84 L 47.66 83.99 L 47.78 83.99 L 48.08 83.98 L 48.37 83.97 Z",
    "M 45.84 93.99 L 45.46 93.98 L 45.17 93.97 L 44.88 93.96 L 44.42 93.93 L 44.13 93.91 L 44.01 93.91 L 43.55 93.88 L 43.09 93.83 L 42.88 93.82 L 43.73 83.86 L 44.11 83.89 L 44.23 83.9 L 44.35 83.91 L 44.81 83.93 L 45.1 83.95 L 45.22 83.96 L 45.51 83.97 L 45.8 83.98 L 46.01 83.99 Z",
    "M 42.88 93.82 L 42.51 93.78 L 42.39 93.78 L 41.93 93.73 L 41.47 93.67 L 41.35 93.66 L 40.89 93.6 L 40.6 93.56 L 40.31 93.52 L 40.02 93.48 L 41.41 83.58 L 41.67 83.62 L 41.96 83.66 L 42.25 83.7 L 42.37 83.72 L 42.83 83.77 L 42.95 83.79 L 43.07 83.8 L 43.53 83.84 L 43.73 83.86 Z",
    "M 40.02 93.48 L 39.74 93.44 L 39.28 93.37 L 38.97 93.31 L 38.71 93.27 L 38.42 93.22 L 38.11 93.16 L 37.69 93.08 L 37.37 93.01 L 37.1 92.95 L 39.16 83.16 L 39.47 83.23 L 39.71 83.28 L 39.87 83.32 L 40.12 83.36 L 40.41 83.41 L 40.73 83.47 L 40.98 83.51 L 41.1 83.54 L 41.41 83.58 Z",
    "M 37.1 92.95 L 36.8 92.89 L 36.55 92.84 L 36.07 92.72 L 35.79 92.65 L 35.51 92.58 L 35.26 92.52 L 34.94 92.44 L 34.5 92.32 L 34.22 92.24 L 36.96 82.62 L 37.24 82.7 L 37.36 82.74 L 37.6 82.8 L 37.93 82.88 L 38.21 82.95 L 38.49 83.02 L 38.57 83.04 L 38.9 83.11 L 39.16 83.16 Z",
    "M 34.22 92.24 L 33.94 92.16 L 33.66 92.08 L 33.38 92 L 32.9 91.84 L 32.67 91.77 L 32.39 91.68 L 32.07 91.57 L 31.84 91.5 L 31.47 91.37 L 34.73 81.91 L 34.9 81.98 L 35.23 82.09 L 35.45 82.16 L 35.73 82.25 L 36.06 82.36 L 36.12 82.38 L 36.4 82.46 L 36.68 82.54 L 36.96 82.62 Z",
    "M 31.47 91.37 L 31.29 91.31 L 30.81 91.14 L 30.54 91.04 L 30.17 90.89 L 29.99 90.83 L 29.57 90.66 L 29.3 90.55 L 29.03 90.44 L 28.73 90.31 L 32.57 81.08 L 32.81 81.18 L 33.08 81.29 L 33.35 81.4 L 33.47 81.45 L 33.83 81.59 L 34.02 81.66 L 34.29 81.76 L 34.35 81.79 L 34.73 81.91 Z",
    "M 28.73 90.31 L 28.44 90.19 L 28.09 90.04 L 27.82 89.92 L 27.49 89.77 L 27.23 89.65 L 27.03 89.56 L 26.56 89.33 L 26.44 89.28 L 26.04 89.08 L 30.52 80.14 L 30.64 80.2 L 31.04 80.39 L 31.09 80.42 L 31.43 80.57 L 31.69 80.69 L 31.88 80.78 L 32.15 80.9 L 32.34 80.99 L 32.57 81.08 Z",
    "M 26.04 89.08 L 25.78 88.95 L 25.39 88.74 L 25.26 88.68 L 24.87 88.47 L 24.55 88.29 L 24.36 88.19 L 24.04 88.01 L 23.85 87.91 L 23.46 87.69 L 28.48 79.05 L 28.59 79.11 L 28.92 79.29 L 29.1 79.39 L 29.43 79.57 L 29.61 79.67 L 29.74 79.74 L 30.13 79.94 L 30.26 80.01 L 30.52 80.14 Z",
    "M 23.46 87.69 L 23.15 87.51 L 22.9 87.36 L 22.65 87.21 L 22.4 87.06 L 21.96 86.77 L 21.91 86.75 L 21.47 86.46 L 21.29 86.35 L 20.98 86.14 L 26.52 77.82 L 26.69 77.93 L 27.01 78.14 L 27.05 78.17 L 27.5 78.45 L 27.54 78.48 L 27.79 78.63 L 28.04 78.78 L 28.29 78.93 L 28.48 79.05 Z",
    "M 20.98 86.14 L 20.74 85.98 L 20.5 85.82 L 20.14 85.57 L 20.02 85.49 L 19.66 85.24 L 19.35 85.01 L 19.08 84.81 L 18.88 84.66 L 18.59 84.45 L 24.64 76.49 L 24.82 76.62 L 25.08 76.81 L 25.29 76.97 L 25.44 77.08 L 25.56 77.17 L 25.92 77.41 L 26.04 77.5 L 26.28 77.66 L 26.52 77.82 Z",
    "M 18.59 84.45 L 18.31 84.23 L 18.08 84.05 L 17.85 83.87 L 17.62 83.69 L 17.31 83.44 L 17.07 83.23 L 16.86 83.07 L 16.62 82.86 L 16.31 82.6 L 22.85 75.04 L 22.98 75.16 L 23.2 75.33 L 23.43 75.53 L 23.65 75.7 L 23.78 75.81 L 24.01 75.99 L 24.24 76.17 L 24.47 76.35 L 24.64 76.49 Z",
    "M 16.31 82.6 L 16.09 82.41 L 15.8 82.15 L 15.57 81.94 L 15.44 81.83 L 15.05 81.47 L 14.84 81.27 L 14.71 81.15 L 14.41 80.87 L 14.12 80.59 L 21.2 73.51 L 21.31 73.63 L 21.43 73.75 L 21.74 74.03 L 21.95 74.23 L 21.98 74.27 L 22.29 74.54 L 22.5 74.73 L 22.63 74.85 L 22.85 75.04 Z",
    "M 14.12 80.59 L 13.91 80.38 L 13.79 80.26 L 13.42 79.88 L 13.29 79.76 L 13.01 79.46 L 12.81 79.25 L 12.61 79.04 L 12.33 78.73 L 12.14 78.52 L 19.55 71.81 L 19.75 72.03 L 19.85 72.14 L 20.05 72.35 L 20.25 72.56 L 20.37 72.68 L 20.66 72.98 L 20.69 73.02 L 20.99 73.3 L 21.2 73.51 Z",
    "M 12.14 78.52 L 11.94 78.3 L 11.75 78.09 L 11.48 77.78 L 11.29 77.56 L 11.1 77.34 L 10.76 76.92 L 10.73 76.89 L 10.39 76.47 L 10.25 76.3 L 18.05 70.05 L 18.27 70.31 L 18.29 70.35 L 18.64 70.76 L 18.66 70.8 L 18.85 71.02 L 19.04 71.24 L 19.15 71.37 L 19.36 71.6 L 19.55 71.81 Z",
    "M 10.25 76.3 L 10.03 76.02 L 9.85 75.79 L 9.67 75.56 L 9.49 75.33 L 9.24 74.99 L 9.01 74.67 L 8.9 74.52 L 8.67 74.2 L 8.5 73.96 L 16.66 68.18 L 16.83 68.42 L 16.94 68.58 L 17.17 68.89 L 17.28 69.05 L 17.37 69.17 L 17.55 69.4 L 17.73 69.63 L 17.91 69.86 L 18.05 70.05 Z",
    "M 8.5 73.96 L 8.33 73.72 L 8.09 73.36 L 7.93 73.12 L 7.84 73 L 7.6 72.64 L 7.32 72.19 L 7.29 72.15 L 7.01 71.7 L 6.89 71.52 L 15.39 66.25 L 15.59 66.56 L 15.61 66.61 L 15.9 67.05 L 15.92 67.1 L 16 67.22 L 16.25 67.58 L 16.41 67.82 L 16.49 67.94 L 16.66 68.18 Z",
    "M 6.89 71.52 L 6.7 71.2 L 6.55 70.95 L 6.34 70.57 L 6.26 70.45 L 6.05 70.07 L 5.97 69.95 L 5.72 69.49 L 5.55 69.18 L 5.45 68.98 L 14.25 64.24 L 14.43 64.56 L 14.52 64.75 L 14.55 64.81 L 14.77 65.19 L 14.84 65.31 L 15.06 65.69 L 15.13 65.81 L 15.28 66.06 L 15.39 66.25 Z",
    "M 5.45 68.98 L 5.31 68.72 L 5.11 68.33 L 4.98 68.07 L 4.85 67.81 L 4.72 67.55 L 4.53 67.15 L 4.47 67.03 L 4.25 66.55 L 4.14 66.33 L 13.25 62.19 L 13.39 62.49 L 13.41 62.55 L 13.61 62.95 L 13.66 63.07 L 13.79 63.33 L 13.92 63.59 L 14.05 63.85 L 14.11 63.98 L 14.25 64.24 Z",
    "M 4.14 66.33 L 4.01 66.02 L 3.92 65.83 L 3.72 65.35 L 3.66 65.22 L 3.49 64.81 L 3.38 64.54 L 3.22 64.12 L 3.17 64 L 3.01 63.58 L 12.39 60.1 L 12.43 60.22 L 12.6 60.64 L 12.64 60.76 L 12.75 61.03 L 12.8 61.16 L 12.98 61.57 L 13 61.63 L 13.15 61.96 L 13.25 62.19 Z",
    "M 3.01 63.58 L 2.91 63.31 L 2.79 62.97 L 2.71 62.76 L 2.61 62.49 L 2.45 62 L 2.4 61.87 L 2.28 61.5 L 2.13 61.01 L 2.1 60.91 L 11.6 57.8 L 11.75 58.27 L 11.76 58.34 L 11.82 58.51 L 11.97 58.94 L 11.99 59.01 L 12.09 59.28 L 12.21 59.61 L 12.29 59.83 L 12.39 60.1 Z",
    "M 2.1 60.91 L 2.02 60.67 L 1.87 60.18 L 1.79 59.9 L 1.71 59.62 L 1.6 59.18 L 1.56 59.06 L 1.44 58.57 L 1.38 58.33 L 1.31 58.05 L 11.01 55.63 L 11.08 55.91 L 11.16 56.23 L 11.18 56.32 L 11.3 56.76 L 11.33 56.88 L 11.41 57.16 L 11.49 57.44 L 11.5 57.51 L 11.6 57.8 Z",
    "M 1.31 58.05 L 1.24 57.77 L 1.13 57.28 L 1.11 57.2 L 1 56.71 L 0.95 56.47 L 0.86 55.98 L 0.84 55.9 L 0.75 55.41 L 0.71 55.14 L 10.55 53.41 L 10.61 53.71 L 10.62 53.8 L 10.72 54.28 L 10.73 54.37 L 10.8 54.69 L 10.81 54.78 L 10.93 55.26 L 10.94 55.35 L 11.01 55.63 Z",
    "M 0.71 55.14 L 0.65 54.84 L 0.6 54.55 L 0.54 54.13 L 0.51 53.98 L 0.45 53.52 L 0.41 53.23 L 0.36 52.77 L 0.34 52.65 L 0.29 52.21 L 10.23 51.17 L 10.24 51.29 L 10.3 51.75 L 10.31 51.87 L 10.35 52.16 L 10.37 52.28 L 10.44 52.71 L 10.46 52.85 L 10.51 53.14 L 10.55 53.41 Z",
    "M 0.29 52.21 L 0.26 51.91 L 0.23 51.62 L 0.2 51.33 L 0.16 50.87 L 0.15 50.75 L 0.11 50.29 L 0.09 50 L 0.07 49.54 L 0.05 49.34 L 10.04 48.83 L 10.07 49.2 L 10.07 49.32 L 10.09 49.61 L 10.09 49.73 L 10.14 50.19 L 10.14 50.31 L 10.17 50.6 L 10.2 50.89 L 10.23 51.17 Z",
    "M 0.05 49.34 L 0.04 48.96 L 0.03 48.67 L 0.02 48.37 L 0.01 48.08 L 0 47.79 L 0 46.38 L 10 46.55 L 10 47.45 L 10.01 47.74 L 10.02 48.03 L 10.03 48.33 L 10.04 48.62 L 10.04 48.83 Z",
    "M 0 46.38 L 0.01 46 L 0.01 45.88 L 0.02 45.42 L 0.03 45.13 L 0.06 44.67 L 0.06 44.55 L 0.09 44.09 L 0.11 43.8 L 0.13 43.5 L 10.11 44.18 L 10.09 44.46 L 10.07 44.77 L 10.06 44.89 L 10.04 45.35 L 10.03 45.47 L 10.02 45.76 L 10.01 45.88 L 10.01 46.34 L 10 46.55 Z",
    "M 0.13 43.5 L 0.15 43.21 L 0.17 42.92 L 0.22 42.45 L 0.25 42.18 L 0.28 41.89 L 0.31 41.6 L 0.37 41.14 L 0.38 41.02 L 0.44 40.56 L 10.34 41.92 L 10.32 42.04 L 10.27 42.5 L 10.25 42.62 L 10.22 42.91 L 10.19 43.2 L 10.16 43.51 L 10.15 43.6 L 10.13 43.89 L 10.11 44.18 Z",
    "M 0.44 40.56 L 0.48 40.27 L 0.52 39.96 L 0.59 39.53 L 0.64 39.24 L 0.66 39.12 L 0.74 38.64 L 0.82 38.22 L 0.85 38.07 L 0.94 37.63 L 10.73 39.69 L 10.69 39.83 L 10.62 40.24 L 10.58 40.4 L 10.56 40.48 L 10.5 40.94 L 10.45 41.23 L 10.42 41.38 L 10.38 41.63 L 10.34 41.92 Z",
    "M 0.94 37.63 L 1 37.33 L 1.05 37.08 L 1.12 36.76 L 1.17 36.51 L 1.29 36.03 L 1.36 35.75 L 1.43 35.47 L 1.49 35.22 L 1.59 34.82 L 11.25 37.4 L 11.21 37.56 L 11.13 37.89 L 11.06 38.17 L 10.99 38.45 L 10.97 38.53 L 10.9 38.86 L 10.85 39.1 L 10.78 39.43 L 10.73 39.69 Z",
    "M 1.59 34.82 L 1.69 34.46 L 1.77 34.18 L 1.85 33.9 L 1.93 33.62 L 2.07 33.18 L 2.12 33.02 L 2.24 32.63 L 2.33 32.35 L 2.43 32.05 L 11.93 35.16 L 11.85 35.41 L 11.76 35.69 L 11.7 35.86 L 11.59 36.24 L 11.55 36.36 L 11.47 36.64 L 11.39 36.92 L 11.31 37.2 L 11.25 37.4 Z",
    "M 2.43 32.05 L 2.51 31.8 L 2.68 31.32 L 2.76 31.1 L 2.88 30.77 L 2.98 30.5 L 3.08 30.23 L 3.23 29.86 L 3.29 29.68 L 3.46 29.26 L 12.72 33.04 L 12.67 33.16 L 12.53 33.52 L 12.46 33.71 L 12.36 33.98 L 12.26 34.25 L 12.18 34.46 L 12.06 34.8 L 12.03 34.86 L 11.93 35.16 Z",
    "M 3.46 29.26 L 3.57 28.99 L 3.78 28.52 L 3.8 28.46 L 3.98 28.05 L 4.06 27.87 L 4.21 27.52 L 4.44 27.05 L 4.46 26.99 L 4.66 26.59 L 13.66 30.93 L 13.6 31.05 L 13.38 31.53 L 13.35 31.58 L 13.26 31.77 L 13.12 32.11 L 13.06 32.24 L 12.86 32.72 L 12.83 32.77 L 12.72 33.04 Z",
    "M 4.66 26.59 L 4.74 26.4 L 4.94 26 L 5.07 25.74 L 5.28 25.35 L 5.34 25.22 L 5.59 24.77 L 5.69 24.58 L 5.78 24.39 L 6.02 23.97 L 14.71 28.91 L 14.66 29.01 L 14.49 29.32 L 14.31 29.65 L 14.28 29.7 L 14.08 30.09 L 14.01 30.22 L 13.88 30.48 L 13.82 30.6 L 13.66 30.93 Z",
    "M 6.02 23.97 L 6.15 23.75 L 6.37 23.37 L 6.44 23.25 L 6.66 22.87 L 6.81 22.62 L 6.96 22.37 L 7.2 21.99 L 7.32 21.8 L 7.54 21.46 L 15.91 26.93 L 15.8 27.1 L 15.62 27.39 L 15.54 27.51 L 15.39 27.76 L 15.24 28.01 L 15.16 28.13 L 14.95 28.51 L 14.87 28.63 L 14.71 28.91 Z",
    "M 7.54 21.46 L 7.72 21.19 L 7.88 20.95 L 7.99 20.77 L 8.29 20.34 L 8.43 20.14 L 8.62 19.87 L 8.79 19.63 L 8.96 19.39 L 9.19 19.08 L 17.23 25.02 L 17.12 25.17 L 16.95 25.41 L 16.78 25.65 L 16.63 25.86 L 16.45 26.12 L 16.41 26.17 L 16.2 26.49 L 16.04 26.73 L 15.91 26.93 Z",
    "M 9.19 19.08 L 9.36 18.85 L 9.62 18.51 L 9.74 18.35 L 9.89 18.15 L 10.32 17.63 L 10.34 17.59 L 10.52 17.36 L 10.77 17.05 L 11.02 16.77 L 18.64 23.23 L 18.51 23.39 L 18.4 23.52 L 18.22 23.75 L 17.88 24.17 L 17.93 24.09 L 17.74 24.35 L 17.5 24.67 L 17.4 24.79 L 17.23 25.02 Z",
    "M 11.02 16.77 L 11.17 16.59 L 11.43 16.28 L 11.62 16.06 L 11.88 15.77 L 12.09 15.54 L 12.2 15.41 L 12.56 15.02 L 12.76 14.81 L 12.92 14.63 L 20.24 21.45 L 20 21.71 L 19.8 21.92 L 19.76 21.95 L 19.49 22.26 L 19.3 22.47 L 19.18 22.6 L 18.99 22.82 L 18.87 22.95 L 18.64 23.23 Z",
    "M 12.92 14.63 L 13.16 14.38 L 13.44 14.09 L 13.56 13.97 L 13.85 13.67 L 14.15 13.39 L 14.36 13.19 L 14.48 13.06 L 14.78 12.78 L 15.04 12.54 L 21.84 19.88 L 21.68 20.02 L 21.56 20.14 L 21.26 20.43 L 21.05 20.63 L 20.93 20.75 L 20.8 20.87 L 20.52 21.17 L 20.4 21.28 L 20.24 21.45 Z",
    "M 15.04 12.54 L 15.2 12.39 L 15.51 12.11 L 15.73 11.91 L 16.03 11.65 L 16.25 11.46 L 16.47 11.27 L 16.69 11.08 L 17.01 10.82 L 17.23 10.63 L 23.59 18.35 L 23.37 18.52 L 23.23 18.64 L 23.01 18.83 L 22.79 19.02 L 22.57 19.21 L 22.43 19.33 L 22.23 19.51 L 22.1 19.63 L 21.84 19.88 Z",
    "M 17.23 10.63 L 17.46 10.45 L 17.69 10.25 L 18.01 10 L 18.24 9.82 L 18.47 9.64 L 18.81 9.39 L 19.02 9.23 L 19.28 9.04 L 19.56 8.84 L 25.42 16.94 L 25.22 17.08 L 25.02 17.23 L 24.75 17.43 L 24.63 17.52 L 24.4 17.7 L 24.17 17.88 L 24.03 17.99 L 23.82 18.15 L 23.59 18.35 Z",
    "M 19.56 8.84 L 19.75 8.7 L 20.19 8.4 L 20.31 8.31 L 20.67 8.07 L 20.79 7.98 L 21.15 7.74 L 21.47 7.53 L 21.76 7.35 L 21.98 7.21 L 27.34 15.66 L 27.06 15.83 L 26.87 15.95 L 26.69 16.06 L 26.57 16.14 L 26.21 16.39 L 26.09 16.47 L 25.73 16.72 L 25.69 16.74 L 25.42 16.94 Z",
    "M 21.98 7.21 L 22.25 7.04 L 22.45 6.91 L 22.83 6.68 L 23.08 6.53 L 23.46 6.32 L 23.58 6.24 L 24.04 5.99 L 24.09 5.95 L 24.58 5.68 L 29.26 14.52 L 29.23 14.53 L 28.78 14.79 L 28.72 14.82 L 28.34 15.04 L 28.22 15.11 L 27.97 15.26 L 27.85 15.33 L 27.55 15.52 L 27.34 15.66 Z",
    "M 24.58 5.68 L 24.86 5.53 L 25.06 5.43 L 25.32 5.29 L 25.63 5.12 L 25.96 4.96 L 26.22 4.83 L 26.56 4.66 L 26.89 4.51 L 27.08 4.42 L 31.42 13.43 L 31.09 13.59 L 30.9 13.68 L 30.7 13.77 L 30.44 13.9 L 30.25 14 L 30.06 14.09 L 29.8 14.23 L 29.48 14.41 L 29.26 14.52 Z",
    "M 27.08 4.42 L 27.41 4.26 L 27.75 4.11 L 28.02 3.99 L 28.36 3.85 L 28.55 3.76 L 28.96 3.59 L 29.23 3.48 L 29.5 3.37 L 29.84 3.23 L 33.47 12.55 L 33.28 12.63 L 33.01 12.74 L 32.74 12.85 L 32.61 12.9 L 32.26 13.05 L 32.08 13.13 L 31.81 13.25 L 31.61 13.34 L 31.42 13.43 Z",
    "M 29.84 3.23 L 30.19 3.1 L 30.31 3.05 L 30.73 2.89 L 31 2.79 L 31.34 2.67 L 31.71 2.55 L 31.89 2.48 L 32.26 2.36 L 32.59 2.25 L 35.65 11.77 L 35.42 11.84 L 35.25 11.9 L 34.87 12.03 L 34.7 12.09 L 34.48 12.17 L 34.21 12.27 L 34.09 12.31 L 33.67 12.48 L 33.47 12.55 Z",
    "M 32.59 2.25 L 32.87 2.16 L 33.31 2.03 L 33.37 2.01 L 33.86 1.86 L 34.14 1.78 L 34.42 1.7 L 34.86 1.59 L 34.98 1.55 L 35.45 1.44 L 37.83 11.14 L 37.72 11.17 L 37.28 11.29 L 37.16 11.32 L 36.88 11.4 L 36.6 11.48 L 36.53 11.49 L 36.05 11.65 L 35.93 11.68 L 35.65 11.77 Z",
    "M 35.45 1.44 L 35.71 1.37 L 35.99 1.3 L 36.27 1.23 L 36.76 1.12 L 37 1.07 L 37.17 1.03 L 37.74 0.92 L 37.9 0.88 L 38.24 0.81 L 40.14 10.63 L 39.92 10.68 L 39.5 10.76 L 39.51 10.75 L 39.1 10.85 L 38.78 10.92 L 38.69 10.93 L 38.41 11 L 38.13 11.07 L 37.83 11.14 Z",
    "M 38.24 0.81 L 38.63 0.74 L 38.88 0.7 L 39.2 0.64 L 39.66 0.58 L 39.78 0.55 L 40.2 0.49 L 40.52 0.45 L 40.81 0.41 L 41.19 0.36 L 42.38 10.28 L 42.17 10.31 L 41.88 10.35 L 41.62 10.39 L 41.48 10.41 L 41.02 10.48 L 40.9 10.5 L 40.64 10.54 L 40.33 10.6 L 40.14 10.63 Z",
    "M 41.19 0.36 L 41.56 0.32 L 41.68 0.3 L 42.11 0.25 L 42.42 0.22 L 42.88 0.18 L 43 0.17 L 43.46 0.13 L 43.75 0.11 L 44.04 0.09 L 44.72 10.07 L 44.43 10.09 L 44.14 10.11 L 44.02 10.11 L 43.56 10.16 L 43.44 10.16 L 43.17 10.19 L 43.04 10.2 L 42.58 10.26 L 42.38 10.28 Z",
    // "M 44.04 0.09 L 44.33 0.07 L 44.79 0.05 L 45.09 0.04 L 45.21 0.03 L 45.84 0.02 L 45.96 0.01 L 46.25 0 L 46.71 0 L 48.25 0.03 L 47.91 10.02 L 46.71 10 L 46.59 10 L 46.3 10.01 L 45.84 10.02 L 45.89 10.01 L 45.43 10.04 L 45.13 10.05 L 45.01 10.05 L 44.72 10.07 Z",
    // "M 48 0 C 50.761 0 53 2.239 53 5 C 53 7.761 50.761 10 48 10 C 45.239 10 43 7.761 43 5 C 43 2.239 45.239 0 48 0 Z",
    "M 44.04 0.09 L 44.33 0.07 L 44.79 0.05 L 45.09 0.04 L 45.21 0.03 L 45.84 0.02 L 45.96 0.01 L 46.25 0 L 46.71 0 L 47.606 0.017 C 47.727 0.006 47.858 0 48 0 C 50.761 0 53 2.239 53 5 C 53 7.761 50.761 10 48 10 C 47.97 10 47.94 10 47.911 9.999 L 47.91 10.02 L 46.71 10 L 46.59 10 L 46.3 10.01 L 45.84 10.02 L 45.89 10.01 L 45.43 10.04 L 45.13 10.05 L 45.01 10.05 L 44.72 10.07 Z",
];
exports.__info__ = [{ "name": "Loading", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Notes.tsx":
/*!************************!*\
  !*** ./code/Notes.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL05vdGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQXdGO0FBRXhGLCtDQUErQztBQUUvQzs7Ozs7O0dBTUc7QUFFSCxNQUFNLE1BQU0sR0FBRztJQUNYLElBQUksRUFBRSxTQUFTO0lBQ2YsTUFBTSxFQUFFLFNBQVM7SUFDakIsS0FBSyxFQUFFLFNBQVM7SUFDaEIsSUFBSSxFQUFFLFNBQVM7SUFDZixLQUFLLEVBQUUsU0FBUztJQUNoQixHQUFHLEVBQUUsU0FBUztDQUNqQixDQUFBO0FBRUQsU0FBZ0IsS0FBSyxDQUFDLEtBQUs7O0lBQ3ZCLE1BQU0sRUFDRixJQUFJLEdBQUcsRUFBRSxFQUNULEtBQUssRUFDTCxPQUFPLEVBQ1AsU0FBUyxFQUNULFNBQVMsRUFDVCxPQUFPLEVBQ1AsWUFBWSxFQUNaLFlBQVksRUFDWixXQUFXLEVBQ1gsU0FBUyxHQUNaLEdBQUcsS0FBSyxDQUFBO0lBRVQsT0FBTyxDQUNILG9CQUFDLGNBQUssa0JBQ0YsSUFBSSxFQUFFLE1BQU0sRUFDWixNQUFNLFFBQ04sVUFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFDekIsWUFBWSxFQUFFLFFBQVEsRUFDdEIsS0FBSyxFQUFFO1lBQ0gsVUFBVSxFQUFFLHFCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUsscUJBQVksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUM5RixVQUFVLEVBQUUsa0JBQWtCO1lBQzlCLFlBQVk7WUFDWixXQUFXLEVBQUUsVUFBVTtTQUMxQixFQUNELEdBQUcsRUFBRSxDQUFDLEVBQ04sTUFBTSxFQUFDLGtMQUd5QixFQUNoQyxZQUFZLEVBQUUsQ0FBQyxJQUNYLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFF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

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const constants_1 = __webpack_require__(/*! ./lib/constants */ "./code/lib/constants.ts");
/*
 **   STICKY
 **
 ** - type should scale for tiny ones
 ** - fix truncation
 ** - "approved/done" yes, no - makes a checkmark appear on it
 */
const colors = {
    blue: "#77DDFF",
    yellow: "#FFEE66",
    white: "#FFFFFF",
    pink: "#FF77AA",
    green: "#55DD88",
    red: "#FF4477",
};
function Notes(props) {
    window["__checkComponentBudget__"]();
    const { note = "", color, preview, alignment, smallFont, onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, } = props;
    return (React.createElement(framer_1.Stack, Object.assign({ size: "100%", center: true, background: colors[color], distribution: "center", style: {
            visibility: framer_1.RenderTarget.current() === framer_1.RenderTarget.preview && !preview ? "hidden" : "visible",
            fontFamily: "Nanum Pen Script",
            //@ts-ignore
            fontDisplay: "fallback",
        }, gap: 0, shadow: "  0 0.5px 1.4px rgba(0, 0, 0, 0.024),\n            0 1.3px 3.8px rgba(0, 0, 0, 0.035),\n            0 3px 9px rgba(0, 0, 0, 0.046),\n            0 10px 30px rgba(0, 0, 0, 0.07)", borderRadius: 8 }, { onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp }),
        React.createElement("link", { href: "https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap", rel: "stylesheet" }),
        React.createElement(framer_1.Stack, { style: { flex: 1, width: "100%" }, paddingTop: 12, paddingBottom: 0, paddingLeft: smallFont ? 15 : 18, paddingRight: smallFont ? 15 : 18, overflow: "hidden" },
            React.createElement("p", { style: {
                    width: "100%",
                    fontSize: smallFont ? 18 : 32,
                    overflowWrap: "break-word",
                    lineHeight: smallFont ? 1.15 : 1.08,
                    textAlign: alignment,
                    color: note.length > 0 ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.25)",
                    display: "-webkit-box",
                    overflow: "hidden",
                    // lineClamp: 7,
                    WebkitBoxOrient: "vertical",
                    // WebkitLineClamp: 7,
                    whiteSpace: "pre-wrap",
                } }, note.length > 0 ? note : "Write something..."))));
}
exports.Notes = Notes;
framer_1.addPropertyControls(Notes, Object.assign({ note: {
        type: framer_1.ControlType.String,
        displayTextArea: true,
        placeholder: `Write something… \n\n\n`,
    }, color: {
        type: framer_1.ControlType.Enum,
        defaultValue: "yellow",
        options: Object.keys(colors),
        optionTitles: Object.keys(colors).map((c) => c.replace(/^\w/, (c) => c.toUpperCase())),
    }, alignment: {
        title: "Text Align",
        type: framer_1.ControlType.SegmentedEnum,
        optionTitles: ["Left", "Center", "Right"],
        options: ["left", "center", "right"],
    }, smallFont: {
        type: framer_1.ControlType.Boolean,
        disabledTitle: "Big",
        enabledTitle: "Small",
        title: "Text Size",
    }, preview: {
        type: framer_1.ControlType.Boolean,
        defaultValue: true,
        title: "In Preview",
        enabledTitle: "Show",
        disabledTitle: "Hide",
    } }, constants_1.defaultEvents));
Notes.displayName = "Sticky Note";
exports.__info__ = [{ "name": "Notes", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/RadioButtons.tsx":
/*!*******************************!*\
  !*** ./code/RadioButtons.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW9CdXR0b25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9SYWRpb0J1dHRvbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBMEY7QUFDMUYseURBQXFEO0FBQ3JELG1EQUErQztBQUMvQywrQ0FBeUQ7QUFtRHpELFNBQWdCLFlBQVksQ0FBQyxLQUFpQjs7SUFDMUMsTUFBTTtJQUNGLG9CQUFvQjtJQUNwQixNQUFNLEVBQ04sS0FBSztJQUVMLGtCQUFrQjtJQUNsQixXQUFXLEVBQ1gsS0FBSztJQUVMLG1CQUFtQjtJQUNuQixXQUFXLEVBQ1gsV0FBVyxFQUNYLGVBQWUsRUFDZixhQUFhLEVBQ2IsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixjQUFjO0lBRWQsa0JBQWtCO0lBQ2xCLFVBQVUsRUFDVixRQUFRLEVBQ1IsV0FBVyxFQUNYLFdBQVcsRUFFWCxnQkFBZ0I7SUFFaEIsbUJBQW1CO0lBQ25CLFFBQVEsRUFDUixZQUFZLEVBQ1osWUFBWSxFQUNaLFlBQVksRUFDWixZQUFZLEVBQ1osWUFBWSxFQUNaLFlBQVksRUFDWixZQUFZLEVBQ1osWUFBWSxFQUNaLFlBQVksRUFDWixhQUFhLEVBRWIsVUFBVSxFQUNWLFVBQVUsR0FDYixHQUFHLEtBQUssQ0FBQTtJQUVULHdCQUF3QjtJQUN4QixNQUFNLFFBQVEsR0FBRztRQUNiLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7UUFDL0QsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRTtRQUMvRCxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFF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

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const colorFromToken_1 = __webpack_require__(/*! ./lib/colorFromToken */ "./code/lib/colorFromToken.ts");
const indentTitle_1 = __webpack_require__(/*! ./lib/indentTitle */ "./code/lib/indentTitle.ts");
const constants_1 = __webpack_require__(/*! ./lib/constants */ "./code/lib/constants.ts");
function RadioButtons(props) {
    window["__checkComponentBudget__"]();
    const { 
    // Sizing properties
    height, width, 
    // Item properties
    defaultItem, items, 
    // Color properties
    activeColor, circleColor, textActiveColor, inactiveColor, textInactiveColor, hoverColor, textHoverColor, 
    // Size properties
    buttonSize, fontSize, textGapSize, lineGapSize, initialAnimation, 
    // Event properties
    onChange, onOption1Tap, onOption2Tap, onOption3Tap, onOption4Tap, onOption5Tap, onOption6Tap, onOption7Tap, onOption8Tap, onOption9Tap, onOption10Tap, fontFamily, fontWeight, } = props;
    // Object with item data
    const allItems = [
        { text: items[0], defaultEvent: onChange, event: onOption1Tap },
        { text: items[1], defaultEvent: onChange, event: onOption2Tap },
        { text: items[2], defaultEvent: onChange, event: onOption3Tap },
        { text: items[3], defaultEvent: onChange, event: onOption4Tap },
        { text: items[4], defaultEvent: onChange, event: onOption5Tap },
        { text: items[5], defaultEvent: onChange, event: onOption6Tap },
        { text: items[6], defaultEvent: onChange, event: onOption7Tap },
        { text: items[7], defaultEvent: onChange, event: onOption8Tap },
        { text: items[8], defaultEvent: onChange, event: onOption9Tap },
        { text: items[9], defaultEvent: onChange, event: onOption10Tap },
    ].slice(0, items.length);
    // Store selected item in a variable
    const [selected, updateSelected] = React.useState(defaultItem - 1);
    React.useEffect(() => {
        window["__checkBudget__"]();
        updateSelected(defaultItem - 1);
    }, [defaultItem]);
    // Variants for animation
    const radioVariants = {
        active: {
            background: framer_1.Color(colorFromToken_1.colorFromToken(activeColor)).toValue(),
            transition: { ease: "easeInOut", duration: 0.2 },
        },
        inactive: {
            background: framer_1.Color(colorFromToken_1.colorFromToken(inactiveColor)).toValue(),
            transition: { ease: "easeInOut", duration: 0.2 },
        },
        hover: {
            background: framer_1.Color(colorFromToken_1.colorFromToken(hoverColor)).toValue(),
            transition: { ease: "easeInOut", duration: 0.2 },
        },
        tapping: {
            scale: 0.9,
            transition: { ease: "easeInOut", duration: 0.1 },
        },
    };
    const radioCircleVariants = {
        active: { scale: 1 },
        inactive: { scale: 0 },
    };
    const textVariants = {
        active: {
            color: framer_1.Color(colorFromToken_1.colorFromToken(textActiveColor)).toValue(),
            transition: { ease: "easeInOut", duration: 0.2 },
        },
        inactive: {
            color: framer_1.Color(colorFromToken_1.colorFromToken(textInactiveColor)).toValue(),
            transition: { ease: "easeInOut", duration: 0.2 },
        },
        hover: {
            color: framer_1.Color(colorFromToken_1.colorFromToken(textHoverColor)).toValue(),
            transition: { ease: "easeInOut", duration: 0.2 },
        },
    };
    const fontStyle = Object.assign(Object.assign({}, (fontFamily && { fontFamily })), { fontWeight });
    return (React.createElement(framer_1.Stack, { direction: "vertical", alignment: "start", distribution: "start", width: "auto", padding: 10, gap: lineGapSize }, allItems.map((item, index) => (React.createElement(framer_1.Stack, { key: index, direction: "horizontal", alignment: "start", distribution: "start", size: "auto", gap: textGapSize, initial: initialAnimation && selected === index ? (selected === index ? "inactive" : "active") : false, animate: selected === index ? "active" : "inactive", whileHover: selected === index ? "active" : "hover", whileTap: "tapping", onTap: () => {
            window["__checkBudget__"]();
            if (selected !== index) {
                updateSelected(index);
                if (item.event)
                    item.event();
                if (item.defaultEvent)
                    item.defaultEvent(index);
            }
        } },
        React.createElement(framer_1.Stack, { direction: "vertical", alignment: "center", distribution: "center", width: buttonSize, height: fontSize * 1.2 > buttonSize ? fontSize * 1.2 : buttonSize, background: "" },
            React.createElement(framer_1.Stack, { direction: "vertical", alignment: "center", distribution: "center", size: buttonSize, radius: "50%", variants: radioVariants },
                React.createElement(framer_1.Frame, { size: Math.floor(buttonSize * 0.4), radius: "50%", background: circleColor, variants: radioCircleVariants }))),
        React.createElement(framer_1.Frame, { height: "auto", width: "auto", background: "", variants: textVariants, style: Object.assign({ overflowWrap: "break-word", lineHeight: 1.2, display: "-webkit-box", textAlign: "left", overflow: "hidden", WebkitBoxOrient: "vertical", whiteSpace: "pre-wrap", fontSize: fontSize, fontFamily: constants_1.fontStack }, fontStyle) }, item.text))))));
}
exports.RadioButtons = RadioButtons;
RadioButtons.defaultProps = {
    height: 102,
    width: 120,
    defaultItem: 1,
    items: ["Option 01", "Option 02", "Option 03"],
    variant: "active",
    activeColor: "#09F",
    circleColor: "#FFF",
    textActiveColor: "#666",
    inactiveColor: "#CCC",
    textInactiveColor: "#BBB",
    hoverColor: "#BBB",
    textHoverColor: "#BBB",
    buttonSize: 16,
    fontSize: 16,
    fontWeight: 600,
    textGapSize: 8,
    lineGapSize: 12,
    initialAnimation: false,
};
framer_1.addPropertyControls(RadioButtons, Object.assign(Object.assign({ 
    // Default Item Property Controls
    defaultItem: {
        type: framer_1.ControlType.Number,
        title: "Default",
        defaultValue: RadioButtons.defaultProps.defaultItem,
        displayStepper: true,
        step: 1,
        min: 0,
        max: 5,
    }, 
    // Design Variant Property Controls
    variant: {
        type: framer_1.ControlType.Enum,
        title: "Variants",
        defaultValue: RadioButtons.defaultProps.variant,
        options: ["active", "inactive", "hover"],
        optionTitles: ["Active", "Inactive", "Hover"],
    }, activeColor: {
        type: framer_1.ControlType.Color,
        title: indentTitle_1.indentTitle("Button"),
        defaultValue: RadioButtons.defaultProps.activeColor,
        hidden: ({ variant }) => variant !== "active",
    }, circleColor: {
        type: framer_1.ControlType.Color,
        title: indentTitle_1.indentTitle("Circle"),
        defaultValue: RadioButtons.defaultProps.circleColor,
        hidden: ({ variant }) => variant !== "active",
    }, textActiveColor: {
        type: framer_1.ControlType.Color,
        title: indentTitle_1.indentTitle("Text"),
        defaultValue: RadioButtons.defaultProps.textActiveColor,
        hidden: ({ variant }) => variant !== "active",
    }, inactiveColor: {
        type: framer_1.ControlType.Color,
        title: indentTitle_1.indentTitle("Button"),
        defaultValue: RadioButtons.defaultProps.inactiveColor,
        hidden: ({ variant }) => variant !== "inactive",
    }, textInactiveColor: {
        type: framer_1.ControlType.Color,
        title: indentTitle_1.indentTitle("Text"),
        defaultValue: RadioButtons.defaultProps.textInactiveColor,
        hidden: ({ variant }) => variant !== "inactive",
    }, hoverColor: {
        type: framer_1.ControlType.Color,
        title: indentTitle_1.indentTitle("Button"),
        defaultValue: RadioButtons.defaultProps.hoverColor,
        hidden: ({ variant }) => variant !== "hover",
    }, textHoverColor: {
        type: framer_1.ControlType.Color,
        title: indentTitle_1.indentTitle("Text"),
        defaultValue: RadioButtons.defaultProps.textHoverColor,
        hidden: ({ variant }) => variant !== "hover",
    }, 
    // Button Size Property Controls
    buttonSize: {
        type: framer_1.ControlType.Number,
        title: "Button Size",
        min: 16,
        max: 44,
        step: 1,
        defaultValue: RadioButtons.defaultProps.buttonSize,
    }, 
    // Text Size Property Controls
    fontSize: {
        type: framer_1.ControlType.Number,
        title: "Font Size",
        min: 10,
        max: 44,
        step: 1,
        defaultValue: RadioButtons.defaultProps.fontSize,
    }, 
    // Gap Size Property Controls
    textGapSize: {
        type: framer_1.ControlType.Number,
        title: "Text Gap",
        min: 2,
        max: 20,
        step: 1,
        defaultValue: RadioButtons.defaultProps.textGapSize,
    }, lineGapSize: {
        type: framer_1.ControlType.Number,
        title: "Line Gap",
        min: 10,
        max: 200,
        step: 1,
        defaultValue: RadioButtons.defaultProps.lineGapSize,
    } }, constants_1.fontControls), { initialAnimation: {
        title: "On Load",
        type: framer_1.ControlType.Boolean,
        enabledTitle: "Animate",
        disabledTitle: "Instant",
    }, items: {
        type: framer_1.ControlType.Array,
        title: "Items",
        maxCount: 10,
        defaultValue: RadioButtons.defaultProps.items,
        propertyControl: {
            type: framer_1.ControlType.String,
            displayTextArea: true,
            defaultValue: "Option Title",
        },
    }, 
    // Event Property Controls
    onChange: {
        title: "On Change",
        type: framer_1.ControlType.EventHandler,
    }, onOption1Tap: {
        title: "Option 1 Tap",
        type: framer_1.ControlType.EventHandler,
    }, onOption2Tap: {
        title: "Option 2 Tap",
        type: framer_1.ControlType.EventHandler,
    }, onOption3Tap: {
        title: "Option 3 Tap",
        type: framer_1.ControlType.EventHandler,
    }, onOption4Tap: {
        title: "Option 4 Tap",
        type: framer_1.ControlType.EventHandler,
    }, onOption5Tap: {
        title: "Option 5 Tap",
        type: framer_1.ControlType.EventHandler,
    }, onOption6Tap: {
        title: "Option 6 Tap",
        type: framer_1.ControlType.EventHandler,
    }, onOption7Tap: {
        title: "Option 7 Tap",
        type: framer_1.ControlType.EventHandler,
    }, onOption8Tap: {
        title: "Option 8 Tap",
        type: framer_1.ControlType.EventHandler,
    }, onOption9Tap: {
        title: "Option 9 Tap",
        type: framer_1.ControlType.EventHandler,
    }, onOption10Tap: {
        title: "Option 10 Tap",
        type: framer_1.ControlType.EventHandler,
    } }));
RadioButtons.displayName = "Radio Buttons";
exports.__info__ = [{ "name": "RadioButtons", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/SegmentedControl.tsx":
/*!***********************************!*\
  !*** ./code/SegmentedControl.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VnbWVudGVkQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvU2VnbWVudGVkQ29udHJvbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQTBGO0FBQzFGLHlEQUFxRDtBQUNyRCwrQ0FBeUQ7QUFDekQsbURBQStDO0FBOEUvQyxTQUFnQixnQkFBZ0IsQ0FBQyxLQUE0Qjs7SUFDekQsTUFBTTtJQUNGLGNBQWM7SUFDZCxLQUFLLEVBQ0wsUUFBUSxFQUNSLGNBQWMsRUFDZCxRQUFRO0lBRVIsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLG1CQUFtQixFQUNuQixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixtQkFBbUIsRUFDbkIsa0JBQWtCO0lBRWxCLGNBQWM7SUFDZCxRQUFRLEVBQ1IsVUFBVSxFQUNWLE9BQU8sRUFDUCxZQUFZO0lBRVosbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUVqQixjQUFjO0lBQ2QsUUFBUSxFQUNSLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsWUFBWSxFQUVaLEVBQUUsRUFDRixVQUFVLEVBQ1YsVUFBVSxLQUlWLEtBQUs7SUFGTCxjQUFjO0lBQ2Q7OzZnQkFDSyxDQUFBO0lBRVQsMkNBQTJDO0lBQzNDLE1BQU0sRUFDRixNQUFNLEVBQ04sS0FBSztJQUVMLHNCQUFzQjtJQUN0QixNQUFNLEVBQ04sbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixvQkFBb0IsRUFDcEIsdUJBQXVCLEVBQ3ZCLHNCQUFzQjtJQUV0QiwyQkFBMkI7SUFDM0IsZ0JBQWdCLEVBQ2hCLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIscUJBQXFCLEVBQ3JCLHNCQUFzQixFQUN0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

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const colorFromToken_1 = __webpack_require__(/*! ./lib/colorFromToken */ "./code/lib/colorFromToken.ts");
const constants_1 = __webpack_require__(/*! ./lib/constants */ "./code/lib/constants.ts");
const indentTitle_1 = __webpack_require__(/*! ./lib/indentTitle */ "./code/lib/indentTitle.ts");
function SegmentedControl(props) {
    window["__checkComponentBudget__"]();
    const { 
    // Other props
    slide, segments, defaultSegment, disabled, 
    // Variant props
    activeTextColor, activeBackground, activeBorderColor, shadow, inactiveTextColor, inactiveBackground, inactiveBorderColor, inactiveBorderSize, disabledTextColor, disabledBackground, disabledBorderColor, disabledBorderSize, 
    // Style props
    fontSize, trackColor, divider, dividerColor, 
    // Transition props
    segmentTransition, 
    // Event props
    onChange, onSegment1Tap, onSegment2Tap, onSegment3Tap, onSegment4Tap, onSegment5Tap, distribution, id, fontFamily, fontWeight } = props, 
    // Stack props
    stackProps = __rest(props
    // Props shared by Stack and other elements
    , ["slide", "segments", "defaultSegment", "disabled", "activeTextColor", "activeBackground", "activeBorderColor", "shadow", "inactiveTextColor", "inactiveBackground", "inactiveBorderColor", "inactiveBorderSize", "disabledTextColor", "disabledBackground", "disabledBorderColor", "disabledBorderSize", "fontSize", "trackColor", "divider", "dividerColor", "segmentTransition", "onChange", "onSegment1Tap", "onSegment2Tap", "onSegment3Tap", "onSegment4Tap", "onSegment5Tap", "distribution", "id", "fontFamily", "fontWeight"]);
    // Props shared by Stack and other elements
    const { height, width, 
    // Mixed border radius
    radius, isMixedBorderRadius, topLeftBorderRadius, topRightBorderRadius, bottomRightBorderRadius, bottomLeftBorderRadius, 
    // Mixed Active Border Size
    activeBorderSize, isMixedActiveBorder, topActiveBorderSize, rightActiveBorderSize, bottomActiveBorderSize, leftActiveBorderSize, direction, } = props;
    const borderRadius = isMixedBorderRadius
        ? `${topLeftBorderRadius}px ${topRightBorderRadius}px ${bottomRightBorderRadius}px ${bottomLeftBorderRadius}px`
        : `${radius}px`;
    const allSegments = [
        { text: segments[0], defaultEvent: onChange, event: onSegment1Tap },
        { text: segments[1], defaultEvent: onChange, event: onSegment2Tap },
        { text: segments[2], defaultEvent: onChange, event: onSegment3Tap },
        { text: segments[3], defaultEvent: onChange, event: onSegment4Tap },
        { text: segments[4], defaultEvent: onChange, event: onSegment5Tap },
    ].slice(0, segments.length);
    const [selected, setSelected] = React.useState(defaultSegment - 1);
    React.useEffect(() => {
        window["__checkBudget__"]();
        setSelected(defaultSegment - 1);
    }, [defaultSegment]);
    const fontStyle = Object.assign(Object.assign({}, (fontFamily && { fontFamily })), { fontWeight });
    const variants = {
        selected: {
            background: framer_1.Color(colorFromToken_1.colorFromToken(activeBackground)).toValue(),
            color: framer_1.Color(colorFromToken_1.colorFromToken(activeTextColor)).toValue(),
            boxShadow: shadow
                ? "0px 2px 6px rgba(0,0,0,0.1), 0px 4px 16px rgba(0,0,0,0.1)"
                : "0px 0px 0px rgba(0,0,0,0)",
            border: !isMixedActiveBorder && `${activeBorderSize}px solid ${activeBorderColor}`,
            borderTop: isMixedActiveBorder && `${topActiveBorderSize}px solid ${activeBorderColor}`,
            borderRight: isMixedActiveBorder && `${rightActiveBorderSize}px solid ${activeBorderColor}`,
            borderBottom: isMixedActiveBorder && `${bottomActiveBorderSize}px solid ${activeBorderColor}`,
            borderLeft: isMixedActiveBorder && `${leftActiveBorderSize}px solid ${activeBorderColor}`,
        },
        notSelected: {
            background: framer_1.Color(colorFromToken_1.colorFromToken(inactiveBackground)).toValue(),
            color: framer_1.Color(colorFromToken_1.colorFromToken(inactiveTextColor)).toValue(),
            boxShadow: "0px 0px 0px rgba(0,0,0,0), 0px 0px 0px rgba(0,0,0,0)",
            border: `${inactiveBorderSize}px solid ${inactiveBorderColor}`,
        },
        disabled: {
            background: framer_1.Color(colorFromToken_1.colorFromToken(disabledBackground)).toValue(),
            color: framer_1.Color(colorFromToken_1.colorFromToken(disabledTextColor)).toValue(),
            boxShadow: "0px 0px 0px rgba(0,0,0,0)",
            border: `${disabledBorderSize}px solid ${disabledBorderColor}`,
        },
    };
    return segments.length > 0 ? (React.createElement(React.Fragment, null,
        React.createElement(framer_1.Stack, Object.assign({}, stackProps, { name: "track", background: trackColor, height: height, width: width }), allSegments.map((segment, index) => {
            window["__checkBudget__"]();
            return (React.createElement(React.Fragment, { key: index },
                React.createElement(framer_1.Frame, { name: "segment", 
                    // Sizing props
                    // height={direction === "horizontal" ? height - 6 : (height - 30) / segments.length}
                    // width={direction === "horizontal" ? (width - 30) / segments.length : width - 6}
                    height: direction === "horizontal" ? height : height / segments.length, width: direction === "horizontal" ? width / segments.length : width, 
                    // Other props
                    radius: borderRadius, 
                    // Style props
                    style: {
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                        display: "flex",
                    }, 
                    // Variants and Events
                    variants: variants, transition: {
                        ease: "linear",
                    }, initial: disabled
                        ? "disabled"
                        : slide
                            ? "notSelected"
                            : index === defaultSegment - 1
                                ? "selected"
                                : "notSelected", animate: disabled
                        ? "disabled"
                        : slide
                            ? "notSelected"
                            : selected === index
                                ? "selected"
                                : "notSelected", onClick: disabled
                        ? () => { window["__checkBudget__"](); }
                        : () => {
                            window["__checkBudget__"]();
                            setSelected(index);
                            if (segment.event)
                                segment.event();
                            if (segment.defaultEvent)
                                segment.defaultEvent(index);
                        } },
                    React.createElement("h3", { style: Object.assign(Object.assign(Object.assign({}, segmentTextStyle), { fontSize }), fontStyle) }, segment.text)),
                segments.length > 1 && index !== segments.length - 1 && (React.createElement(framer_1.Frame, { name: "divider", size: 1, height: !divider ? 0 : direction === "horizontal" ? height - 16 : 1, width: !divider ? 0 : direction === "horizontal" ? 1 : width - 16, background: divider ? dividerColor : null }))));
        })),
        !disabled && slide && (React.createElement(framer_1.Stack, Object.assign({}, stackProps, { height: height - 4, width: width - 4, top: 2, left: 2 }), allSegments.map((segment, index) => {
            window["__checkBudget__"]();
            const isSelected = index === selected;
            return (React.createElement(framer_1.Stack, { name: "top-selector", distribution: "space-around", key: isSelected ? "selected_segment" : index, positionTransition: isSelected && segmentTransition, height: "1fr", width: "1fr", radius: borderRadius, style: {
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                    boxShadow: shadow && isSelected
                        ? "0px 2px 6px rgba(0,0,0,0.1), 0px 4px 16px rgba(0,0,0,0.1)"
                        : "0px 0px 0px rgba(0,0,0,0)",
                    display: "flex",
                    color: isSelected
                        ? framer_1.Color(colorFromToken_1.colorFromToken(activeTextColor)).toValue()
                        : "transparent",
                    background: isSelected
                        ? framer_1.Color(colorFromToken_1.colorFromToken(activeBackground)).toValue()
                        : "transparent",
                }, border: isSelected
                    ? `${activeBorderSize}px solid ${activeBorderColor}`
                    : "0px solid rgba(0,0,0,0)", onTap: () => {
                    window["__checkBudget__"]();
                    setSelected(index);
                    if (segment.event)
                        segment.event();
                    if (segment.defaultEvent)
                        segment.defaultEvent(index);
                } },
                React.createElement("h3", { style: Object.assign(Object.assign(Object.assign({}, segmentTextStyle), { fontSize }), fontStyle) }, allSegments[selected].text)));
        }))))) : (React.createElement("div", { style: segmentsHelperContainer },
        React.createElement("p", { style: Object.assign(Object.assign({}, segmentsHelperTextStyle), { fontWeight: 600 }) }, "Segments"),
        React.createElement("p", { style: segmentsHelperTextStyle }, "Use the properties panel to add segments.")));
}
exports.SegmentedControl = SegmentedControl;
SegmentedControl.defaultProps = {
    // Sizing props
    height: 45,
    width: 300,
    // Stack props
    direction: "horizontal",
    // Other props
    segments: ["Item 1", "Item 2", "Item 3"],
    slide: true,
    defaultSegment: 1,
    disabled: false,
    // Variant props
    variant: "active",
    activeTextColor: "#0099ff",
    activeBackground: "#ffffff",
    activeBorderColor: "rgba(0, 0, 0, 0)",
    activeBorderSize: 1,
    shadow: true,
    inactiveTextColor: "#BBBBBB",
    inactiveBackground: "rgba(0, 0, 0, 0)",
    inactiveBorderColor: "rgba(0, 0, 0, 0)",
    inactiveBorderSize: 1,
    disabledTextColor: "#AAAAAA",
    disabledBackground: "#ebebeb",
    disabledBorderColor: "rgba(0, 0, 0, 0)",
    disabledBorderSize: 1,
    // Style props
    fontSize: 12,
    radius: 8,
    trackColor: "#ebebeb",
    divider: false,
    dividerColor: "#ADADAD",
    fontWeight: 600,
    // Transition props
    segmentTransition: {
        type: "easeInOut",
        duration: 5,
        delay: 0,
    },
};
// @ts-ignore
framer_1.addPropertyControls(SegmentedControl, Object.assign(Object.assign({ direction: {
        type: framer_1.ControlType.Enum,
        displaySegmentedControl: true,
        options: ["horizontal", "vertical"],
        defaultValue: SegmentedControl.defaultProps.direction,
    }, defaultSegment: {
        type: framer_1.ControlType.Number,
        title: "Default",
        defaultValue: SegmentedControl.defaultProps.defaultSegment,
        displayStepper: true,
        step: 1,
        min: 1,
        max: 5,
    }, variant: {
        type: framer_1.ControlType.Enum,
        title: "Variants",
        defaultValue: SegmentedControl.defaultProps.variant,
        options: ["active", "inactive", "disabled"],
        optionTitles: ["Active", "Inactive", "Disabled"],
    }, 
    // Active Variant Property Controls
    activeTextColor: {
        type: framer_1.ControlType.Color,
        title: indentTitle_1.indentTitle("Text Color"),
        defaultValue: SegmentedControl.defaultProps.activeTextColor,
        hidden: ({ variant }) => variant !== "active",
    }, activeBackground: {
        title: indentTitle_1.indentTitle("Bg Color"),
        type: framer_1.ControlType.Color,
        defaultValue: SegmentedControl.defaultProps.activeBackground,
        hidden: ({ variant }) => variant !== "active",
    }, activeBorderColor: {
        type: framer_1.ControlType.Color,
        title: indentTitle_1.indentTitle("Border Color"),
        defaultValue: SegmentedControl.defaultProps.activeBorderColor,
        hidden: ({ variant }) => variant !== "active",
    }, activeBorderSize: {
        title: indentTitle_1.indentTitle("Border Width"),
        type: framer_1.ControlType.FusedNumber,
        defaultValue: SegmentedControl.defaultProps.activeBorderSize,
        toggleKey: "isMixedActiveBorder",
        toggleTitles: ["Border", "Border per side"],
        valueKeys: ["topActiveBorderSize", "rightActiveBorderSize", "bottomActiveBorderSize", "leftActiveBorderSize"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
        hidden: ({ variant }) => variant !== "active",
    }, shadow: {
        title: indentTitle_1.indentTitle("Shadow"),
        type: framer_1.ControlType.Boolean,
        defaultValue: SegmentedControl.defaultProps.shadow,
        enabledTitle: "Show",
        disabledTitle: "Hide",
        hidden: ({ variant }) => variant !== "active",
    }, 
    // Inactive Variant Property Controls
    inactiveTextColor: {
        type: framer_1.ControlType.Color,
        title: indentTitle_1.indentTitle("Text Color"),
        defaultValue: SegmentedControl.defaultProps.inactiveTextColor,
        hidden: ({ variant }) => variant !== "inactive",
    }, inactiveBackground: {
        title: indentTitle_1.indentTitle("Bg Color"),
        type: framer_1.ControlType.Color,
        defaultValue: SegmentedControl.defaultProps.inactiveBackground,
        hidden: ({ variant }) => variant !== "inactive",
    }, inactiveBorderColor: {
        type: framer_1.ControlType.Color,
        title: indentTitle_1.indentTitle("Border Color"),
        defaultValue: SegmentedControl.defaultProps.inactiveBorderColor,
        hidden: ({ variant }) => variant !== "inactive",
    }, inactiveBorderSize: {
        type: framer_1.ControlType.Number,
        title: indentTitle_1.indentTitle("Border Size"),
        displayStepper: true,
        step: 1,
        min: 1,
        max: 25,
        defaultValue: SegmentedControl.defaultProps.inactiveBorderSize,
        hidden: ({ variant }) => variant !== "inactive",
    }, 
    // Disabled Variant Property Controls
    disabledTextColor: {
        type: framer_1.ControlType.Color,
        title: indentTitle_1.indentTitle("Text Color"),
        defaultValue: SegmentedControl.defaultProps.disabledTextColor,
        hidden: ({ variant }) => variant !== "disabled",
    }, disabledBackground: {
        type: framer_1.ControlType.Color,
        title: indentTitle_1.indentTitle("Bg Color"),
        defaultValue: SegmentedControl.defaultProps.disabledBackground,
        hidden: ({ variant }) => variant !== "disabled",
    }, disabledBorderColor: {
        type: framer_1.ControlType.Color,
        title: indentTitle_1.indentTitle("Border Color"),
        defaultValue: SegmentedControl.defaultProps.disabledBorderColor,
        hidden: ({ variant }) => variant !== "disabled",
    }, disabledBorderSize: {
        type: framer_1.ControlType.Number,
        title: indentTitle_1.indentTitle("Border Size"),
        displayStepper: true,
        step: 1,
        min: 1,
        max: 25,
        defaultValue: SegmentedControl.defaultProps.disabledBorderSize,
        hidden: ({ variant }) => variant !== "disabled",
    }, 
    // Other Property Controls
    slide: {
        type: framer_1.ControlType.Boolean,
        title: "Slide",
        enabledTitle: "Yes",
        disabledTitle: "No",
        defaultValue: SegmentedControl.defaultProps.slide,
    }, segmentTransition: {
        title: "Transition",
        type: framer_1.ControlType.Transition,
        defaultValue: SegmentedControl.defaultProps.segmentTransition,
        hidden: ({ slide }) => slide === false,
    }, trackColor: {
        type: framer_1.ControlType.Color,
        title: "Track Color",
        defaultValue: SegmentedControl.defaultProps.trackColor,
    }, radius: {
        title: "Radius",
        type: framer_1.ControlType.FusedNumber,
        defaultValue: SegmentedControl.defaultProps.radius,
        toggleKey: "isMixedBorderRadius",
        toggleTitles: ["Radius", "Radius per corner"],
        valueKeys: ["topLeftBorderRadius", "topRightBorderRadius", "bottomRightBorderRadius", "bottomLeftBorderRadius"],
        valueLabels: ["TL", "TR", "BR", "BL"],
        min: 0,
    }, gap: {
        displayStepper: true,
        type: framer_1.ControlType.Number,
    }, fontSize: {
        type: framer_1.ControlType.Number,
        title: "Font Size",
        min: 0,
        max: 44,
        step: 1,
        displayStepper: true,
        defaultValue: SegmentedControl.defaultProps.fontSize,
    } }, constants_1.fontControls), { disabled: {
        type: framer_1.ControlType.Boolean,
        title: "Disabled",
        enabledTitle: "Yes",
        disabledTitle: "No",
        defaultValue: SegmentedControl.defaultProps.disabled,
    }, divider: {
        type: framer_1.ControlType.Boolean,
        title: "Dividers",
        defaultValue: SegmentedControl.defaultProps.divider,
        enabledTitle: "Show",
        disabledTitle: "Hide",
    }, dividerColor: {
        type: framer_1.ControlType.Color,
        title: indentTitle_1.indentTitle("Color"),
        defaultValue: SegmentedControl.defaultProps.dividerColor,
        hidden: ({ divider }) => divider === false,
    }, 
    // Event Property Controls
    onChange: {
        title: "On Change",
        type: framer_1.ControlType.EventHandler,
    }, onSegment1Tap: {
        title: "Segment 1 Tap",
        type: framer_1.ControlType.EventHandler,
    }, onSegment2Tap: {
        title: "Segment 2 Tap",
        type: framer_1.ControlType.EventHandler,
    }, onSegment3Tap: {
        title: "Segment 3 Tap",
        type: framer_1.ControlType.EventHandler,
    }, onSegment4Tap: {
        title: "Segment 4 Tap",
        type: framer_1.ControlType.EventHandler,
    }, onSegment5Tap: {
        title: "Segment 5 Tap",
        type: framer_1.ControlType.EventHandler,
    }, 
    // Segment Property Controls
    segments: {
        type: framer_1.ControlType.Array,
        title: "Segments",
        maxCount: 5,
        defaultValue: SegmentedControl.defaultProps.segments,
        propertyControl: {
            type: framer_1.ControlType.String,
        },
    } }));
const segmentTextStyle = {
    fontFamily: constants_1.fontStack,
    // fontSize: 12,
    letterSpacing: 0,
    fontWeight: 600,
    textAlign: "center",
    margin: "auto auto",
};
const segmentsHelperContainer = {
    width: "100%",
    height: "100%",
    borderRadius: 6,
    background: "rgba(136, 85, 255, 0.3)",
    border: "1px dashed #85F",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};
const segmentsHelperTextStyle = {
    fontFamily: constants_1.fontStack,
    color: "#8856FF",
    fontSize: 10,
    letterSpacing: 0,
    lineHeight: 1.4,
    fontWeight: 400,
    marginTop: 0,
    marginBottom: 0,
    maxWidth: "300px",
    textAlign: "center",
};
SegmentedControl.displayName = "Segmented Control";
exports.__info__ = [{ "name": "SegmentedControl", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Slider.tsx":
/*!*************************!*\
  !*** ./code/Slider.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9TbGlkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixtQ0FRZTtBQUNmLGlDQUF5QztBQUV6Qzs7R0FFRztBQUVILFNBQWdCLE1BQU0sQ0FBQyxFQUNuQixLQUFLLEVBQ0wsS0FBSyxFQUNMLFNBQVMsRUFDVCxHQUFHLEVBQ0gsR0FBRyxFQUNILFFBQVEsRUFDUixLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixLQUFLLEVBQ0wsUUFBUSxFQUNSLEtBQUssRUFDTCxXQUFXLEVBQ1gsTUFBTSxFQUNOLFFBQVEsR0FDWDs7SUFDRyxNQUFNLENBQUMsR0FBRyx1QkFBYyxDQUFDLGtCQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNsRSxNQUFNLEtBQUssR0FBRyxjQUFNLENBQUMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFBO0lBQ25DLE1BQU0sS0FBSyxHQUFHLGNBQU0sQ0FBQyxLQUFLLEtBQUssR0FBRyxDQUFDLENBQUE7SUFFbkMsSUFBSSxxQkFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLHFCQUFZLENBQUMsTUFBTTtRQUM5QyxDQUFDLENBQUMsR0FBRyxDQUFDLGtCQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUVuRCxpQkFBUyxDQUNMLEdBQUcsRUFBRSxDQUNELENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTs7UUFDbEIsb0RBQW9EO1FBQ3BELE1BQU0sU0FBUyxHQUFHLGtCQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFF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

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const react_1 = __webpack_require__(/*! react */ "react");
/*
 ** SLIDER
 */
function Slider({ width, track, fillColor, min, max, onChange, onMax, onMin, background, color, knobSize, value, constrained, shadow, overdrag, }) {
    window["__checkComponentBudget__"]();
    const x = framer_1.useMotionValue(framer_1.transform(value, [min, max], [0, width]));
    const isMax = react_1.useRef(value === max);
    const isMin = react_1.useRef(value === min);
    if (framer_1.RenderTarget.current() === framer_1.RenderTarget.canvas)
        x.set(framer_1.transform(value, [min, max], [0, width]));
    react_1.useEffect(() => x.onChange((latest) => {
        window["__checkBudget__"]();
        // need to do something here, but its a demo for now
        const scaledVal = framer_1.transform(latest, [0, width], [min, max]);
        if (isMin.current && latest > 0)
            isMin.current = false;
        if (isMax.current && latest < width)
            isMax.current = false;
        if (onChange)
            onChange(scaledVal);
        if (onMax && latest >= width) {
            if (!isMax.current)
                onMax(max);
            isMax.current = true;
        }
        if (onMin && latest <= 0) {
            if (!isMin.current)
                onMin(min);
            isMin.current = true;
        }
    }), []);
    const fill = framer_1.useTransform(x, [0, width], [0, width]);
    return (React.createElement(framer_1.Frame, { width: "100%", height: track, center: true, overflow: "visible", radius: 100, backgroundColor: background },
        React.createElement(framer_1.Frame, { width: fill, height: track, overflow: "visible", radius: 100, backgroundColor: fillColor }),
        React.createElement(framer_1.Frame, { size: knobSize, radius: 200, backgroundColor: color, shadow: `0px 1px 2px 0px ${shadow}, 0px 2px 4px 0px ${shadow}, 0px 4px 8px 0px ${shadow}`, drag: "x", initial: { y: -knobSize / 2 + track / 2 }, y: -knobSize / 2 + track / 2, dragElastic: overdrag ? 0.04 : false, left: -knobSize / 2, dragConstraints: {
                left: 0,
                right: width,
            }, dragMomentum: false, x: x })));
}
exports.Slider = Slider;
Slider.defaultProps = {
    height: 40,
    width: 200,
    track: 4,
    fillColor: "#09F",
    background: "#DDD",
    color: "#FFF",
    shadow: "rgba(0,0,0,0.1)",
    knobSize: 25,
    overdrag: true,
    min: 0,
    max: 100,
    value: 50,
};
framer_1.addPropertyControls(Slider, {
    fillColor: {
        title: "Tint",
        type: framer_1.ControlType.Color,
    },
    background: {
        title: "Track",
        type: framer_1.ControlType.Color,
    },
    color: {
        title: "Knob",
        type: framer_1.ControlType.Color,
    },
    shadow: { type: framer_1.ControlType.Color, title: "Shadow" },
    knobSize: { type: framer_1.ControlType.Number, title: "Knob", min: 10, max: 100 },
    track: {
        title: "Height",
        type: framer_1.ControlType.Number,
        min: 1,
        max: 50,
    },
    value: {
        type: framer_1.ControlType.Number,
        title: "Value",
        displayStepper: true,
    },
    min: {
        title: "Min",
        type: framer_1.ControlType.Number,
        displayStepper: true,
    },
    max: {
        title: "Max",
        type: framer_1.ControlType.Number,
        displayStepper: true,
    },
    // constrained: { type: ControlType.Boolean, title: "Constrain" },
    overdrag: { type: framer_1.ControlType.Boolean, title: "Overdrag" },
    onChange: { type: framer_1.ControlType.EventHandler },
    onMax: { type: framer_1.ControlType.EventHandler },
    onMin: { type: framer_1.ControlType.EventHandler },
});
exports.__info__ = [{ "name": "Slider", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Tabs.tsx":
/*!***********************!*\
  !*** ./code/Tabs.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFicy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvVGFicy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUFnRTtBQUNoRSxpQ0FBZ0M7QUFDaEMsaUNBQTZCO0FBQzdCLCtDQUE0RDtBQUM1RCw4Q0FBNkM7QUFFN0M7Ozs7Ozs7R0FPRztBQUVILFNBQWdCLElBQUksQ0FBQyxLQUFLOztJQUN0QixNQUFNLEVBQ0YsUUFBUSxFQUNSLFdBQVcsRUFDWCxhQUFhLEVBQ2IsVUFBVSxFQUNWLFFBQVEsRUFDUixhQUFhLEVBQ2IsWUFBWSxFQUNaLFFBQVEsRUFDUixTQUFTLEVBQ1QsUUFBUSxFQUNSLFNBQVMsRUFDVCxRQUFRLEVBQ1IsU0FBUyxFQUNULFFBQVEsRUFDUixTQUFTLEVBQ1QsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDWixPQUFPLEdBQ1YsR0FBRyxLQUFLLENBQUE7SUFFVCxNQUFNLElBQUksR0FBRztRQUNULEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1FBQ3BDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1FBQ3BDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1FBQ3BDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1FBQ3BDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO0tBQ3ZDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7SUFFM0IsTUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtJQUU5QyxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLGdCQUFR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

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const react_1 = __webpack_require__(/*! react */ "react");
const Icon_1 = __webpack_require__(/*! ./Icon */ "./code/Icon.tsx");
const constants_1 = __webpack_require__(/*! ./lib/constants */ "./code/lib/constants.ts");
const FeatherIcons = __webpack_require__(/*! react-feather */ "react-feather");
/*
 * TABS
 *
 * - Add labels option (icon / label or both)
 * - add mounting / unmounting logic
 * - add animation while changing tabs
 * - allow them to add tabs without children
 */
function Tabs(props) {
    window["__checkComponentBudget__"]();
    const { iconSize, activeColor, inactiveColor, defaultTab, children, contentHeight, contentWidth, tab1Icon, onTab1Tap, tab2Icon, onTab2Tap, tab3Icon, onTab3Tap, tab4Icon, onTab4Tap, tab5Icon, onTab5Tap, background, barHeight, distribution, padding, } = props;
    const tabs = [
        { icon: tab1Icon, event: onTab1Tap },
        { icon: tab2Icon, event: onTab2Tap },
        { icon: tab3Icon, event: onTab3Tap },
        { icon: tab4Icon, event: onTab4Tap },
        { icon: tab5Icon, event: onTab5Tap },
    ].slice(0, children.length);
    const connectedToContent = children.length > 0;
    const [activeTab, setActiveTab] = react_1.useState(defaultTab - 1);
    React.useEffect(() => {
        window["__checkBudget__"]();
        setActiveTab(defaultTab - 1);
    }, [defaultTab]);
    const childComponents = React.Children.map(children, (child, i) => {
        window["__checkBudget__"]();
        const update = {
            right: undefined,
            bottom: undefined,
            top: undefined,
            left: undefined,
            center: true,
            _constraints: {
                enabled: false,
            },
        };
        if (contentWidth === "stretch") {
            update.width = "100%";
        }
        if (contentHeight === "stretch") {
            update.height = "100%";
        }
        return (React.createElement("div", { key: i, style: {
                display: "contents",
                visibility: i === activeTab ? "visible" : "hidden",
            } }, React.cloneElement(child, update)));
    });
    return (React.createElement("div", { style: { width: "100%", height: "100%" } }, connectedToContent ? (React.createElement(React.Fragment, null,
        childComponents,
        React.createElement(framer_1.Stack, Object.assign({}, props, { distribution: distribution, padding: padding, style: Object.assign(Object.assign({}, tabContainerStyle), { background, height: barHeight }) }), tabs.map((tab, i) => (React.createElement("div", { key: i, style: Object.assign(Object.assign({}, tabStyle), { width: iconSize * 2, height: iconSize * 2 }), onClick: () => {
                window["__checkBudget__"]();
                setActiveTab(i);
                if (tab.event)
                    tab.event();
            } },
            React.createElement(Icon_1.Icon, { width: iconSize, height: iconSize, iconSelection: tab.icon, color: i === activeTab ? activeColor : inactiveColor }))))))) : (React.createElement("div", { style: constants_1.emptyStateStyle },
        React.createElement("p", { style: Object.assign(Object.assign({}, tabHelperTextStyle), { fontWeight: 600 }) }, "Tabs"),
        React.createElement("p", { style: tabHelperTextStyle }, "Click and drag from the connector to any Frame on the Canvas \u2192")))));
}
exports.Tabs = Tabs;
const tabContainerStyle = {
    border: "none",
    width: "100%",
    height: 60,
    paddingLeft: 12,
    paddingRight: 12,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    color: "white",
    fontWeight: 600,
    outline: "none",
    resize: "none",
    overflow: "hidden",
    zIndex: 1,
};
const tabHelperTextStyle = {
    fontFamily: constants_1.fontStack,
    color: "#8856FF",
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 1.4,
    fontWeight: 400,
    marginTop: 0,
    marginBottom: 5,
    maxWidth: "200px",
    textAlign: "center",
};
const tabStyle = {
    textAlign: "center",
    height: 50,
    width: 50,
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
};
/*
 *   Props & Props Controls
 */
Tabs.defaultProps = {
    height: 667,
    width: 375,
    activeColor: "#333",
    inactiveColor: "#e1e1e1",
    tab1Icon: "Menu",
    tab2Icon: "Framer",
    tab3Icon: "Settings",
    tab4Icon: "Framer",
    tab5Icon: "Framer",
    background: "white",
    barHeight: 75,
    iconSize: 25,
    textAlign: "center",
    direction: "horizontal",
    distribution: "space-around",
    alignment: "center",
};
framer_1.addPropertyControls(Tabs, Object.assign(Object.assign({ defaultTab: {
        title: "Active Tab",
        type: framer_1.ControlType.Number,
        defaultValue: 0,
        min: 1,
        max: 5,
        displayStepper: true,
    }, iconSize: {
        title: "Icon Size",
        type: framer_1.ControlType.Number,
        defaultValue: Tabs.defaultProps.iconSize,
        min: 10,
        max: 50,
    }, barHeight: {
        title: "Bar Height",
        type: framer_1.ControlType.Number,
        defaultValue: Tabs.defaultProps.barHeight,
        min: 10,
        max: 150,
    }, activeColor: {
        title: "Active Tab",
        type: framer_1.ControlType.Color,
        defaultValue: Tabs.defaultProps.activeColor,
    }, inactiveColor: {
        title: "Inactive Tab",
        type: framer_1.ControlType.Color,
        defaultValue: Tabs.defaultProps.inactiveColor,
    }, background: {
        title: "Background",
        type: framer_1.ControlType.Color,
        defaultValue: Tabs.defaultProps.background,
    }, contentWidth: {
        type: framer_1.ControlType.SegmentedEnum,
        options: ["auto", "stretch"],
        optionTitles: ["Auto", "Stretch"],
        title: "Width",
        defaultValue: "stretch",
    }, contentHeight: {
        type: framer_1.ControlType.SegmentedEnum,
        options: ["auto", "stretch"],
        optionTitles: ["Auto", "Stretch"],
        title: "Height",
        defaultValue: "stretch",
    } }, framer_1.Stack.propertyControls), { direction: {}, alignment: {}, children: {
        title: "Tabs",
        type: framer_1.ControlType.Array,
        propertyControl: {
            type: framer_1.ControlType.ComponentInstance,
        },
        maxCount: 5,
    }, tab1Icon: {
        type: framer_1.ControlType.Enum,
        options: Object.keys(FeatherIcons),
        defaultValue: Tabs.defaultProps.tab1Icon,
        hidden: ({ children }) => tabNotExistent(children, 0),
    }, tab2Icon: {
        type: framer_1.ControlType.Enum,
        options: Object.keys(FeatherIcons),
        defaultValue: Tabs.defaultProps.tab2Icon,
        hidden: ({ children }) => tabNotExistent(children, 1),
    }, tab3Icon: {
        type: framer_1.ControlType.Enum,
        options: Object.keys(FeatherIcons),
        defaultValue: Tabs.defaultProps.tab3Icon,
        hidden: ({ children }) => tabNotExistent(children, 2),
    }, tab4Icon: {
        type: framer_1.ControlType.Enum,
        options: Object.keys(FeatherIcons),
        defaultValue: Tabs.defaultProps.tab4Icon,
        hidden: ({ children }) => tabNotExistent(children, 3),
    }, tab5Icon: {
        type: framer_1.ControlType.Enum,
        options: Object.keys(FeatherIcons),
        defaultValue: Tabs.defaultProps.tab5Icon,
        hidden: ({ children }) => tabNotExistent(children, 4),
    }, onTab1Tap: {
        title: "On Tab 1 Tap",
        type: framer_1.ControlType.EventHandler,
        hidden: ({ children }) => tabNotExistent(children, 0),
    }, onTab2Tap: {
        title: "On Tab 2 Tap",
        type: framer_1.ControlType.EventHandler,
        hidden: ({ children }) => tabNotExistent(children, 1),
    }, onTab3Tap: {
        title: "On Tab 3 Tap",
        type: framer_1.ControlType.EventHandler,
        hidden: ({ children }) => tabNotExistent(children, 2),
    }, onTab4Tap: {
        title: "On Tab 4 Tap",
        type: framer_1.ControlType.EventHandler,
        hidden: ({ children }) => tabNotExistent(children, 3),
    }, onTab5Tap: {
        title: "On Tab 5 Tap",
        type: framer_1.ControlType.EventHandler,
        hidden: ({ children }) => tabNotExistent(children, 4),
    } }));
Tabs.supportsConstraints = true;
function isChild(value) {
    window["__checkBudget__"]();
    if (!value || typeof value !== "object")
        return false;
    return "enabled" in value;
}
// We return null, if the model is incorrect
function getChildCount(children) {
    window["__checkBudget__"]();
    if (!Array.isArray(children))
        return null;
    let childCount = 0;
    for (const child of children) {
        if (!isChild(child))
            return null;
        if (child.enabled === true) {
            childCount++;
        }
    }
    return childCount;
}
function tabNotExistent(children, tabIndex) {
    window["__checkBudget__"]();
    const childCount = getChildCount(children);
    if (childCount === null)
        return false;
    return tabIndex > childCount - 1;
}
exports.__info__ = [{ "name": "Tabs", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/Toggle.tsx":
/*!*************************!*\
  !*** ./code/Toggle.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9nZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9Ub2dnbGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBdUU7QUFDdkUsbURBQStDO0FBRS9DOztHQUVHO0FBRUgsSUFBSyxZQVNKO0FBVEQsV0FBSyxZQUFZO0lBQ2IsNENBQTRCLENBQUE7SUFDNUIsOENBQThCLENBQUE7SUFDOUIsNkNBQTZCLENBQUE7SUFDN0IseUNBQXlCLENBQUE7SUFDekIsMENBQTBCLENBQUE7SUFDMUIsK0NBQStCLENBQUE7SUFDL0IsK0NBQStCLENBQUE7SUFDL0IsK0NBQStCLENBQUE7QUFDbkMsQ0FBQyxFQVRJLFlBQVksS0FBWixZQUFZLFFBU2hCO0FBRUQsSUFBSyxlQUdKO0FBSEQsV0FBSyxlQUFlO0lBQ2hCLGtDQUFlLENBQUE7SUFDZixnQ0FBYSxDQUFBO0FBQ2pCLENBQUMsRUFISSxlQUFlLEtBQWYsZUFBZSxRQUduQjtBQUVELDJEQUEyRDtBQUMzRCxNQUFNLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUE7QUFDMUQsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0FBRXhELFlBQVk7QUFFWixTQUFnQixNQUFNLENBQUMsS0FBSzs7SUFDeEIsTUFBTSxFQUNGLE1BQU0sRUFDTixLQUFLLEVBQ0wsVUFBVTtJQUVWLFFBQVE7SUFDUixPQUFPLEVBQ1AsUUFBUSxFQUNSLGVBQWUsR0FBRyxFQUFFO0lBRXBCLFFBQVE7SUFDUixlQUFlLEVBQ2YsV0FBVyxFQUNYLGFBQWEsRUFDYixZQUFZLEVBQ1osV0FBVyxFQUNYLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsV0FBVyxFQUNYLGtCQUFrQixFQUNsQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhO0lBRWIsT0FBTztJQUNQLGNBQWMsRUFDZCxRQUFRLEVBQ1IsWUFBWSxFQUNaLFdBQVcsRUFDWCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osWUFBWSxFQUNaLFlBQVksRUFDWixZQUFZO0lBRVosU0FBUztJQUNULFFBQVEsRUFDUixVQUFVLEVBQ1YsV0FBVztJQUVYLG9CQUFvQjtJQUNwQixnQkFBZ0IsR0FDbkIsR0FBRyxLQUFLLENBQUE7SUFFVCw0RUFBNEU7SUFFNUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRXpELE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUU1RCxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQ3hDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsZUFBZSxDQUFDLENBQzFDLENBQUE7SUFFRCw0RUFBNEU7SUFFNUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ2pCLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUl4QixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUViLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFOztRQUNqQixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdkIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQTtLQUNwRCxFQUFFLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUE7SUFFL0IsNEVBQTRFO0lBRTVFLFNBQVM7SUFDVCxNQUFNLGdCQUFnQixHQUFHLGNBQWMsQ0FDbkMsV0FBVyxFQUNYLGtCQUFrQixFQUNsQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLENBQ2hCLENBQUE7SUFDRCxNQUFNLGVBQWUsR0FBRyxjQUFjLENBQ2xDLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsWUFBWSxFQUNaLFlBQVksRUFDWixZQUFZLEVBQ1osWUFBWSxDQUNmLENBQUE7SUFFRCxTQUFTO0lBQ1QsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUNwQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksQ0FBQyxNQUFNLEVBQ25CLENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FDSixDQUFBO0lBRUQsVUFBVTtJQUNWLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLENBQUE7SUFDM0UsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLENBQUMsQ0FBQTtJQUUxRSxnQkFBZ0I7SUFDaEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ25DLElBQUksS0FBSyxHQUFHLENBQUM7UUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFBO0lBQ3hCLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxXQUFXLENBQUE7SUFDMUQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFFL0QsOEVBQThFO0lBRTlFLE1BQU0sUUFBUSxHQUFHO1FBQ2IsS0FBSyxFQUFFO1lBQ0gsR0FBRyxFQUFFLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFO1lBQ3JELEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtTQUNyRDtRQUNELElBQUksRUFBRTtZQUNGLEdBQUcsRUFBRSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRTtZQUMxQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUU7U0FDNUM7S0FDSixDQUFBO0lBRUQsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtJQUU5Qyw0RUFBNEU7SUFFNUUsT0FBTyxDQUNILG9CQUFDLGNBQUssSUFDRixJQUFJLEVBQUUsUUFBUSxFQUNkLEtBQUssRUFBRSxLQUFLLEVBQ1osTUFBTSxFQUFFLE1BQU0sRUFDZCxVQUFVLEVBQUUsWUFBWSxDQUFDLEtBQUssRUFDOUIsT0FBTyxFQUFFLE9BQU8sRUFDaEIsT0FBTyxFQUNILGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUVqRSxPQUFPLEVBQUUsYUFBYSxFQUN0QixNQUFNLFFBQ04sS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFOztZQUNwQixJQUFJLFVBQVU7Z0JBQUUsT0FBTTtZQUN0QixNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQTtZQUNwQixZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDZixJQUFJLFFBQVE7Z0JBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDdkMsSUFBSSxVQUFVLElBQUksQ0FBQztnQkFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUNoRCxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUM7Z0JBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7U0FDdEQ7UUFFRCxvQkFBQyxjQUFLLElBQ0YsSUFBSSxFQUFFLE9BQU8sRUFDYixLQUFLLEVBQUUsS0FBSyxFQUNaLE1BQU0sRUFBRSxNQUFNLEVBQ2QsTUFBTSxRQUNOLE1BQU0sRUFBRSxnQkFBZ0IsRUFDeEIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQ3hCLE9BQU8sRUFBRSxhQUFhLEVBQ3RCLFVBQVUsRUFBRSxlQUFlLEdBQzdCO1FBQ0Ysb0JBQUMsY0FBSyxJQUNGLElBQUksRUFBRSxNQUFNLEVBQ1osSUFBSSxFQUFFLFFBQVEsRUFDZCxNQUFNLEVBQUUsSUFBSSxFQUNaLE1BQU0sRUFBRSxlQUFlLEVBQ3ZCLE1BQU0sRUFBRSxNQUFNLEVBQ2QsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQ3RCLFVBQVUsRUFBRSxjQUFjLEdBQzVCLENBQ0UsQ0FDWCxDQUFBO0NBQ0o7QUE3S0Qsd0JBNktDO0FBRUQsZ0ZBQWdGO0FBQ2hGLGdGQUFnRjtBQUVoRixNQUFNLFdBQVcsR0FBRztJQUNoQixLQUFLLEVBQUUsRUFBRTtJQUNULE1BQU0sRUFBRSxFQUFFO0lBQ1YsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDO0lBQ1osV0FBVyxFQUFFLEVBQUUsR0FBRyxDQUFDO0lBQ25CLFdBQVcsRUFBRSxDQUFDO0lBQ2QsVUFBVSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7Q0FDM0IsQ0FBQTtBQUVELE1BQU0sWUFBWSxHQUFHO0lBQ2pCLE1BQU0sRUFBRSxXQUFXLENBQUMsTUFBTTtJQUMxQixLQUFLLEVBQUUsV0FBVyxDQUFDLEtBQUs7SUFDeEIscUJBQXFCO0lBQ3JCLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFDbEMsU0FBUztJQUNULE9BQU8sRUFBRSxJQUFJO0lBQ2IsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRO0lBQ1IsV0FBVyxFQUFFLENBQUM7SUFDZCxhQUFhLEVBQUUsWUFBWSxDQUFDLEtBQUs7SUFDakMsWUFBWSxFQUFFLFlBQVksQ0FBQyxJQUFJO0lBQy9CLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxNQUFNO0lBQ3JDLGVBQWUsRUFBRSxDQUFDO0lBQ2xCLFdBQVcsRUFBRSxXQUFXLENBQUMsV0FBVztJQUNwQyxrQkFBa0IsRUFBRSxLQUFLO0lBQ3pCLGFBQWEsRUFBRSxXQUFXLENBQUMsV0FBVztJQUN0QyxhQUFhLEVBQUUsV0FBVyxDQUFDLFdBQVc7SUFDdEMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxXQUFXO0lBQ3RDLGFBQWEsRUFBRSxXQUFXLENBQUMsV0FBVztJQUN0QyxPQUFPO0lBQ1AsUUFBUSxFQUFFLFdBQVcsQ0FBQyxJQUFJO0lBQzFCLFlBQVksRUFBRSxZQUFZLENBQUMsS0FBSztJQUNoQyxXQUFXLEVBQUUsWUFBWSxDQUFDLEtBQUs7SUFDL0IsVUFBVSxFQUFFLElBQUk7SUFDaEIsVUFBVSxFQUFFLFdBQVcsQ0FBQyxVQUFVO0lBQ2xDLGlCQUFpQixFQUFFLEtBQUs7SUFDeEIsWUFBWSxFQUFFLFdBQVcsQ0FBQyxVQUFVO0lBQ3BDLFlBQVksRUFBRSxXQUFXLENBQUMsVUFBVTtJQUNwQyxZQUFZLEVBQUUsV0FBVyxDQUFDLFVBQVU7SUFDcEMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxVQUFVO0lBQ3BDLFNBQVM7SUFDVCxRQUFRLEVBQUUsSUFBSTtJQUNkLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUs7Q0FDMUIsQ0FBQTtBQUVELE1BQU0sQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFBO0FBRWxDLGdGQUFnRjtBQUNoRixnRkFBZ0Y7QUFFaEYsMkJBQTJCO0FBQzNCLG9CQUFvQjtBQUNwQixzQkFBc0I7QUFFdEIsc0JBQXNCO0FBQ3RCLE1BQU0sSUFBSSxHQUFHLHlCQUFXLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDNUIsTUFBTSxJQUFJLEdBQUcsS0FBSyxHQUFHLHlCQUFXLENBQUMsRUFBRSxDQUFDLENBQUE7QUFFcEMsNEJBQW1CLENBQUMsTUFBTSxFQUFFO0lBQ3hCLDZFQUE2RTtJQUU3RSxPQUFPLEVBQUU7UUFDTCxLQUFLLEVBQUUsU0FBUztRQUNoQixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLFlBQVksRUFBRSxZQUFZLENBQUMsT0FBTztRQUNsQyxZQUFZLEVBQUUsSUFBSTtRQUNsQixhQUFhLEVBQUUsS0FBSztLQUN2QjtJQUNELFFBQVEsRUFBRTtRQUNOLEtBQUssRUFBRSxVQUFVO1FBQ2pCLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsWUFBWSxFQUFFLFlBQVksQ0FBQyxRQUFRO1FBQ25DLFlBQVksRUFBRSxLQUFLO1FBQ25CLGFBQWEsRUFBRSxJQUFJO0tBQ3RCO0lBQ0QseUNBQXlDO0lBQ3pDLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsS0FBSztJQUVMLDRFQUE0RTtJQUU1RSxVQUFVLEVBQUU7UUFDUixLQUFLLEVBQUUsT0FBTztRQUNkLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsWUFBWSxFQUFFLFlBQVksQ0FBQyxVQUFVO1FBQ3JDLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsWUFBWSxFQUFFLG1CQUFtQjtRQUNqQyx1QkFBdUIsRUFBRSxJQUFJO0tBQ2hDO0lBRUQsNEVBQTRFO0lBRTVFLGVBQWUsRUFBRTtRQUNiLEtBQUssRUFBRSxHQUFHLElBQUksWUFBWTtRQUMxQixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxVQUFVO1FBQzVCLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxlQUFlLENBQUMsS0FBSztLQUMvRDtJQUVELFdBQVcsRUFBRTtRQUNULEtBQUssRUFBRSxHQUFHLElBQUksUUFBUTtRQUN0QixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLFlBQVksRUFBRSxZQUFZLENBQUMsV0FBVztRQUN0QyxJQUFJLEVBQUUsR0FBRztRQUNULGNBQWMsRUFBRSxJQUFJO1FBQ3BCLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxlQUFlLENBQUMsS0FBSztLQUMvRDtJQUNELFdBQVcsRUFBRTtRQUNULElBQUksRUFBRSxvQkFBVyxDQUFDLFdBQVc7UUFDN0IsS0FBSyxFQUFFLEdBQUcsSUFBSSxRQUFRO1FBQ3RCLFlBQVksRUFBRSxZQUFZLENBQUMsV0FBVztRQUN0QyxTQUFTLEVBQUUsb0JBQW9CO1FBQy9CLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUM7UUFDbkMsU0FBUyxFQUFFO1lBQ1AsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtTQUNsQjtRQUNELFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztRQUNyQyxHQUFHLEVBQUUsQ0FBQztRQUNOLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxlQUFlLENBQUMsS0FBSztLQUMvRDtJQUNELGFBQWEsRUFBRTtRQUNYLEtBQUssRUFBRSxHQUFHLElBQUksV0FBVztRQUN6QixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQ3ZCLFlBQVksRUFBRSxZQUFZLENBQUMsYUFBYTtRQUN4QyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksZUFBZSxDQUFDLEtBQUs7S0FDL0Q7SUFDRCxZQUFZLEVBQUU7UUFDVixLQUFLLEVBQUUsR0FBRyxJQUFJLFVBQVU7UUFDeEIsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSztRQUN2QixZQUFZLEVBQUUsWUFBWSxDQUFDLFlBQVk7UUFDdkMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLGVBQWUsQ0FBQyxLQUFLO0tBQy9EO0lBQ0QsV0FBVyxFQUFFO1FBQ1QsS0FBSyxFQUFFLEdBQUcsSUFBSSxRQUFRO1FBQ3RCLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsWUFBWSxFQUFFLFlBQVksQ0FBQyxXQUFXO1FBQ3RDLFlBQVksRUFBRSxLQUFLO1FBQ25CLGFBQWEsRUFBRSxJQUFJO1FBQ25CLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxlQUFlLENBQUMsS0FBSztLQUMvRDtJQUNELGdCQUFnQixFQUFFO1FBQ2QsS0FBSyxFQUFFLEdBQUcsSUFBSSxPQUFPO1FBQ3JCLElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUs7UUFDdkIsWUFBWSxFQUFFLFlBQVksQ0FBQyxnQkFBZ0I7UUFDM0MsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDZCxLQUFLLENBQUMsVUFBVSxJQUFJLGVBQWUsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVztLQUN0RTtJQUNELGVBQWUsRUFBRTtRQUNiLEtBQUssRUFBRSxHQUFHLElBQUksU0FBUztRQUN2QixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLFlBQVksRUFBRSxZQUFZLENBQUMsZUFBZTtRQUMxQyxHQUFHLEVBQUUsQ0FBQztRQUNOLElBQUksRUFBRSxHQUFHO1FBQ1QsY0FBYyxFQUFFLElBQUk7UUFDcEIsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDZCxLQUFLLENBQUMsVUFBVSxJQUFJLGVBQWUsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVztLQUN0RTtJQUVELDRFQUE0RTtJQUU1RSxjQUFjLEVBQUU7UUFDWixLQUFLLEVBQUUsR0FBRyxJQUFJLFlBQVk7UUFDMUIsSUFBSSxFQUFFLG9CQUFXLENBQUMsVUFBVTtRQUM1QixNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksZUFBZSxDQUFDLElBQUk7S0FDOUQ7SUFFRCxRQUFRLEVBQUU7UUFDTixLQUFLLEVBQUUsR0FBRyxJQUFJLE1BQU07UUFDcEIsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixZQUFZLEVBQUUsWUFBWSxDQUFDLFFBQVE7UUFDbkMsR0FBRyxFQUFFLENBQUM7UUFDTixJQUFJLEVBQUUsR0FBRztRQUNULGNBQWMsRUFBRSxJQUFJO1FBQ3BCLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxlQUFlLENBQUMsSUFBSTtLQUM5RDtJQUNELFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSxvQkFBVyxDQUFDLFdBQVc7UUFDN0IsS0FBSyxFQUFFLEdBQUcsSUFBSSxRQUFRO1FBQ3RCLFlBQVksRUFBRSxZQUFZLENBQUMsVUFBVTtRQUNyQyxTQUFTLEVBQUUsbUJBQW1CO1FBQzlCLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUM7UUFDbkMsU0FBUyxFQUFFO1lBQ1AsY0FBYztZQUNkLGNBQWM7WUFDZCxjQUFjO1lBQ2QsY0FBYztTQUNqQjtRQUNELFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztRQUNyQyxHQUFHLEVBQUUsQ0FBQztRQUNOLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxlQUFlLENBQUMsSUFBSTtLQUM5RDtJQUNELFlBQVksRUFBRTtRQUNWLEtBQUssRUFBRSxHQUFHLElBQUksV0FBVztRQUN6QixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQ3ZCLFlBQVksRUFBRSxZQUFZLENBQUMsWUFBWTtRQUN2QyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksZUFBZSxDQUFDLElBQUk7S0FDOUQ7SUFDRCxXQUFXLEVBQUU7UUFDVCxLQUFLLEVBQUUsR0FBRyxJQUFJLFVBQVU7UUFDeEIsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSztRQUN2QixZQUFZLEVBQUUsWUFBWSxDQUFDLFdBQVc7UUFDdEMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLGVBQWUsQ0FBQyxJQUFJO0tBQzlEO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsS0FBSyxFQUFFLEdBQUcsSUFBSSxRQUFRO1FBQ3RCLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsWUFBWSxFQUFFLFlBQVksQ0FBQyxVQUFVO1FBQ3JDLFlBQVksRUFBRSxLQUFLO1FBQ25CLGFBQWEsRUFBRSxJQUFJO1FBQ25CLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxlQUFlLENBQUMsSUFBSTtLQUM5RDtJQUVELDhFQUE4RTtJQUU5RSxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxZQUFZLEVBQUU7SUFDNUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsWUFBWSxFQUFFO0lBQzlDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLFlBQVksRUFBRTtDQUNsRCxDQUFDLENBQUE7QUFFRixnRkFBZ0Y7QUFDaEYsa0JBQWtCO0FBRWxCLGdGQUFnRjtBQUNoRixtQkFBbUI7QUFFbkIsTUFBTSxjQUFjLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTs7SUFDN0IsMkRBQTJEO0lBQzNELElBQUksQ0FBQyxjQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFBO0lBQ3ZDLE1BQU0sQ0FBQyxHQUFHLGNBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN0QixNQUFNLElBQUksR0FBRyxjQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzNCLE9BQU8sUUFBUSxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUE7Q0FDNUQsQ0FBQTtBQUVELE1BQU0sY0FBYyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTs7SUFDdkQsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUE7Q0FDckUsQ0FBQTtBQUVELE1BQU0sVUFBVSxHQUFHLENBQUMsVUFBVSxFQUFFLGVBQWUsRUFBRSxFQUFFLENBQy9DLFVBQVUsQ0FBQyxDQUFDLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBRTFDLE1BQU0sU0FBUyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTs7SUFDekMsSUFBSSxDQUFDLFNBQVM7UUFBRSxPQUFPLGFBQWEsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3hELE9BQU8sR0FBRyxJQUFJLFlBQVksY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUE7Q0FDcEQsQ0FBQTtBQUVELE1BQU0sU0FBUyxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7O0lBQ2hFLElBQUksQ0FBQyxTQUFTO1FBQUUsT0FBTyxtQkFBbUIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzlELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxNQUFNLE1BQU0sS0FBSyxFQUFFLENBQUE7Q0FDeEQsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const indentTitle_1 = __webpack_require__(/*! ./lib/indentTitle */ "./code/lib/indentTitle.ts");
/*
 ** TOGGLE
 */
var DefaultColor;
(function (DefaultColor) {
    DefaultColor["blue"] = "rgba(0,153,255,1.0)";
    DefaultColor["blue30"] = "rgba(0,153,255,0.3)";
    DefaultColor["blue0"] = "rgba(0,153,255,0.0)";
    DefaultColor["black"] = "rgba(0,0,0,1.0)";
    DefaultColor["black8"] = "rgba(0,0,0,.08)";
    DefaultColor["white"] = "rgba(255,255,255,1.0)";
    DefaultColor["smoke"] = "rgba(243,243,243,1.0)";
    DefaultColor["clear"] = "rgba(255,255,255,0.0)";
})(DefaultColor || (DefaultColor = {}));
var PropControlMenu;
(function (PropControlMenu) {
    PropControlMenu["Track"] = "track";
    PropControlMenu["Knob"] = "knob";
})(PropControlMenu || (PropControlMenu = {}));
// @ts-ignore - Framer doesn't know about .values on Object
const propControlMenuVals = Object.values(PropControlMenu);
const propControlMenuKeys = Object.keys(PropControlMenu);
// COMPONENT
function Toggle(props) {
    window["__checkComponentBudget__"]();
    const { height, width, designMenu, 
    // State
    toggled, disabled, disabledOpacity = 60, 
    // Track
    trackTransition, trackOffset, trackColorOff, trackColorOn, trackBorder, trackBorderColor, trackBorderSize, trackRadius, isTrackRadiusMixed, trackRadiusTL, trackRadiusTR, trackRadiusBR, trackRadiusBL, 
    // Knob
    knobTransition, knobSize, knobColorOff, knobColorOn, knobShadow, knobRadius, isKnobRadiusMixed, knobRadiusTL, knobRadiusTR, knobRadiusBR, knobRadiusBL, 
    // Events
    onToggle, onToggleOn, onToggleOff, 
    // Initial Animation
    initialAnimation, } = props;
    // STATES //////////////////////////////////////////////////////////////////
    const [isToggled, setIsToggled] = React.useState(toggled);
    const [isDisabled, setIsDisabled] = React.useState(disabled);
    const [opacity, setOpacity] = React.useState(getOpacity(isDisabled, disabledOpacity));
    // LIFECYCLE ///////////////////////////////////////////////////////////////
    React.useEffect(() => {
        window["__checkBudget__"]();
        setIsToggled(toggled);
    }, [toggled]);
    React.useEffect(() => {
        window["__checkBudget__"]();
        setIsDisabled(disabled);
        setOpacity(getOpacity(disabled, disabledOpacity));
    }, [disabled, disabledOpacity]);
    // Render Variables ////////////////////////////////////////////////////////
    // Radius
    const fusedTrackRadius = getFusedRadius(trackRadius, isTrackRadiusMixed, trackRadiusTL, trackRadiusTR, trackRadiusBR, trackRadiusBL);
    const fusedKnobRadius = getFusedRadius(knobRadius, isKnobRadiusMixed, knobRadiusTL, knobRadiusTR, knobRadiusBR, knobRadiusBL);
    // Shadow
    const shadow = getShadow(isToggled, knobShadow, DefaultColor.black8, 0, 2, 4, 0);
    // Borders
    const borderOff = getBorder(trackBorder, trackBorderColor, trackBorderSize);
    const borderOn = getBorder(trackBorder, trackBorderColor, trackBorderSize);
    // Knob Position
    let inset = (height - knobSize) / 2;
    if (inset < 0)
        inset = 0;
    const left = -(width - knobSize) / 2 + inset + trackOffset;
    const right = (width - knobSize) / 2 - inset + trackOffset * -1;
    // VARIANTS //////////////////////////////////////////////////////////////////
    const variants = {
        track: {
            off: { background: trackColorOff, border: borderOff },
            on: { background: trackColorOn, border: borderOn },
        },
        knob: {
            off: { background: knobColorOff, x: left },
            on: { background: knobColorOn, x: right },
        },
    };
    const activeVariant = isToggled ? "on" : "off";
    // RENDER //////////////////////////////////////////////////////////////////
    return (React.createElement(framer_1.Frame, { name: "Toggle", width: width, height: height, background: DefaultColor.clear, opacity: opacity, initial: initialAnimation ? (isToggled ? "off" : "on") : activeVariant, animate: activeVariant, center: true, onTap: (event, point) => {
            window["__checkBudget__"]();
            if (isDisabled)
                return;
            const c = !isToggled;
            setIsToggled(c);
            if (onToggle)
                onToggle(event, point, c);
            if (onToggleOn && c)
                onToggleOn(event, point, c);
            if (onToggleOff && !c)
                onToggleOff(event, point, c);
        } },
        React.createElement(framer_1.Frame, { name: "Track", width: width, height: height, center: true, radius: fusedTrackRadius, variants: variants.track, initial: activeVariant, transition: trackTransition }),
        React.createElement(framer_1.Frame, { name: "Knob", size: knobSize, center: true, radius: fusedKnobRadius, shadow: shadow, variants: variants.knob, initial: activeVariant, transition: knobTransition })));
}
exports.Toggle = Toggle;
////////////////////////////////////////////////////////////////////////////////
// DEFAULT PROPS ///////////////////////////////////////////////////////////////
const defaultSize = {
    width: 54,
    height: 32,
    knob: 32 - 8,
    trackRadius: 32 / 2,
    trackBorder: 1,
    knobRadius: (32 - 8) / 2,
};
const defaultProps = {
    height: defaultSize.height,
    width: defaultSize.width,
    // PROP CONTROLS ONLY
    designMenu: propControlMenuVals[0],
    // STATES
    toggled: true,
    disabled: false,
    // TRACK
    trackOffset: 0,
    trackColorOff: DefaultColor.smoke,
    trackColorOn: DefaultColor.blue,
    trackBorder: false,
    trackBorderColor: DefaultColor.blue30,
    trackBorderSize: 0,
    trackRadius: defaultSize.trackRadius,
    isTrackRadiusMixed: false,
    trackRadiusTL: defaultSize.trackRadius,
    trackRadiusTR: defaultSize.trackRadius,
    trackRadiusBR: defaultSize.trackRadius,
    trackRadiusBL: defaultSize.trackRadius,
    // KNOB
    knobSize: defaultSize.knob,
    knobColorOff: DefaultColor.white,
    knobColorOn: DefaultColor.white,
    knobShadow: true,
    knobRadius: defaultSize.knobRadius,
    isKnobRadiusMixed: false,
    knobRadiusTL: defaultSize.knobRadius,
    knobRadiusTR: defaultSize.knobRadius,
    knobRadiusBR: defaultSize.knobRadius,
    knobRadiusBL: defaultSize.knobRadius,
    // Events
    onToggle: null,
    onToggleOn: null,
    onToggleOff: null,
    initialAnimation: false,
};
Toggle.defaultProps = defaultProps;
////////////////////////////////////////////////////////////////////////////////
// Framer Property Controls ////////////////////////////////////////////////////
// Use for more indentation
// const LVL1 = "⠂ "
// const LVL2 = "  ⠂ "
// Indentation Helpers
const LVL1 = indentTitle_1.indentTitle("");
const LVL2 = "   " + indentTitle_1.indentTitle("");
framer_1.addPropertyControls(Toggle, {
    // States ///////////////////////////////////////////////////////////////////
    toggled: {
        title: "Toggled",
        type: framer_1.ControlType.Boolean,
        defaultValue: defaultProps.toggled,
        enabledTitle: "On",
        disabledTitle: "Off",
    },
    disabled: {
        title: "Disabled",
        type: framer_1.ControlType.Boolean,
        defaultValue: defaultProps.disabled,
        enabledTitle: "Yes",
        disabledTitle: "No",
    },
    // removing for now, weird stuff going on
    // initialAnimation: {
    //     title: "On Load",
    //     type: ControlType.Boolean,
    //     enabledTitle: "Animate",
    //     disabledTitle: "Instant",
    // },
    // Menu ////////////////////////////////////////////////////////////////////
    designMenu: {
        title: "Style",
        type: framer_1.ControlType.Enum,
        defaultValue: defaultProps.designMenu,
        options: propControlMenuVals,
        optionTitles: propControlMenuKeys,
        displaySegmentedControl: true,
    },
    // Track ///////////////////////////////////////////////////////////////////
    trackTransition: {
        title: `${LVL1}Transition`,
        type: framer_1.ControlType.Transition,
        hidden: (props) => props.designMenu != PropControlMenu.Track,
    },
    trackOffset: {
        title: `${LVL1}Offset`,
        type: framer_1.ControlType.Number,
        defaultValue: defaultProps.trackOffset,
        step: 0.5,
        displayStepper: true,
        hidden: (props) => props.designMenu != PropControlMenu.Track,
    },
    trackRadius: {
        type: framer_1.ControlType.FusedNumber,
        title: `${LVL1}Radius`,
        defaultValue: defaultProps.trackRadius,
        toggleKey: "isTrackRadiusMixed",
        toggleTitles: ["All", "Individual"],
        valueKeys: [
            "trackRadiusTL",
            "trackRadiusTR",
            "trackRadiusBR",
            "trackRadiusBL",
        ],
        valueLabels: ["TL", "TR", "BR", "BL"],
        min: 0,
        hidden: (props) => props.designMenu != PropControlMenu.Track,
    },
    trackColorOff: {
        title: `${LVL1}Color Off`,
        type: framer_1.ControlType.Color,
        defaultValue: defaultProps.trackColorOff,
        hidden: (props) => props.designMenu != PropControlMenu.Track,
    },
    trackColorOn: {
        title: `${LVL1}Color On`,
        type: framer_1.ControlType.Color,
        defaultValue: defaultProps.trackColorOn,
        hidden: (props) => props.designMenu != PropControlMenu.Track,
    },
    trackBorder: {
        title: `${LVL1}Border`,
        type: framer_1.ControlType.Boolean,
        defaultValue: defaultProps.trackBorder,
        enabledTitle: "Yes",
        disabledTitle: "No",
        hidden: (props) => props.designMenu != PropControlMenu.Track,
    },
    trackBorderColor: {
        title: `${LVL2}Color`,
        type: framer_1.ControlType.Color,
        defaultValue: defaultProps.trackBorderColor,
        hidden: (props) => props.designMenu != PropControlMenu.Track || !props.trackBorder,
    },
    trackBorderSize: {
        title: `${LVL2}Size On`,
        type: framer_1.ControlType.Number,
        defaultValue: defaultProps.trackBorderSize,
        min: 0,
        step: 0.5,
        displayStepper: true,
        hidden: (props) => props.designMenu != PropControlMenu.Track || !props.trackBorder,
    },
    // Knob ////////////////////////////////////////////////////////////////////
    knobTransition: {
        title: `${LVL1}Transition`,
        type: framer_1.ControlType.Transition,
        hidden: (props) => props.designMenu != PropControlMenu.Knob,
    },
    knobSize: {
        title: `${LVL1}Size`,
        type: framer_1.ControlType.Number,
        defaultValue: defaultProps.knobSize,
        min: 0,
        step: 0.5,
        displayStepper: true,
        hidden: (props) => props.designMenu != PropControlMenu.Knob,
    },
    knobRadius: {
        type: framer_1.ControlType.FusedNumber,
        title: `${LVL1}Radius`,
        defaultValue: defaultProps.knobRadius,
        toggleKey: "isKnobRadiusMixed",
        toggleTitles: ["All", "Individual"],
        valueKeys: [
            "knobRadiusTL",
            "knobRadiusTR",
            "knobRadiusBR",
            "knobRadiusBL",
        ],
        valueLabels: ["TL", "TR", "BR", "BL"],
        min: 0,
        hidden: (props) => props.designMenu != PropControlMenu.Knob,
    },
    knobColorOff: {
        title: `${LVL1}Color Off`,
        type: framer_1.ControlType.Color,
        defaultValue: defaultProps.knobColorOff,
        hidden: (props) => props.designMenu != PropControlMenu.Knob,
    },
    knobColorOn: {
        title: `${LVL1}Color On`,
        type: framer_1.ControlType.Color,
        defaultValue: defaultProps.knobColorOn,
        hidden: (props) => props.designMenu != PropControlMenu.Knob,
    },
    knobShadow: {
        title: `${LVL1}Shadow`,
        type: framer_1.ControlType.Boolean,
        defaultValue: defaultProps.knobShadow,
        enabledTitle: "Yes",
        disabledTitle: "No",
        hidden: (props) => props.designMenu != PropControlMenu.Knob,
    },
    // Events ////////////////////////////////////////////////////////////////////
    onToggle: { type: framer_1.ControlType.EventHandler },
    onToggleOn: { type: framer_1.ControlType.EventHandler },
    onToggleOff: { type: framer_1.ControlType.EventHandler },
});
////////////////////////////////////////////////////////////////////////////////
// ACTION CONTROLS
////////////////////////////////////////////////////////////////////////////////
// HELPER FUNCTIONS
const normalizeColor = (color) => {
    window["__checkBudget__"]();
    // Translations between HSL to HEX and others are a problem
    if (!framer_1.Color.isColor(color))
        return color;
    const c = framer_1.Color(color);
    const RGBA = framer_1.Color.toRgb(c);
    return `rgba(${RGBA.r}, ${RGBA.g}, ${RGBA.b}, ${RGBA.a})`;
};
const getFusedRadius = (radius, isMixed, tl, tr, br, bl) => {
    window["__checkBudget__"]();
    return isMixed ? `${tl}px ${tr}px ${br}px ${bl}px` : `${radius}px`;
};
const getOpacity = (isDisabled, disabledOpacity) => isDisabled ? disabledOpacity / 100 : 1;
const getBorder = (hasBorder, color, size) => {
    window["__checkBudget__"]();
    if (!hasBorder)
        return `0px solid ${DefaultColor.clear}`;
    return `${size}px solid ${normalizeColor(color)}`;
};
const getShadow = (toggled, hasShadow, color, x, y, blur, spread) => {
    window["__checkBudget__"]();
    if (!hasShadow)
        return `0px 0px 0px 0px ${DefaultColor.clear}`;
    return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
};
exports.__info__ = [{ "name": "Toggle", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Unsplash.tsx":
/*!***************************!*\
  !*** ./code/Unsplash.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5zcGxhc2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1Vuc3BsYXNoLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsaUNBQTJDO0FBQzNDLG1DQUF5RDtBQUN6RCxtQ0FBa0M7QUFDbEMsK0NBQWdFO0FBd0JoRSxTQUFnQixRQUFRLENBQUMsRUFDckIsTUFBTSxFQUNOLElBQUksRUFDSixNQUFNLEVBQ04sRUFBRSxFQUNGLFNBQVMsRUFDVCxPQUFPLEVBQ1AsUUFBUSxFQUNSLFdBQVcsRUFDWCxVQUFVLEVBQ1YsT0FBTyxFQUNQLE9BQU8sRUFDUCxZQUFZLEVBQ1osWUFBWSxFQUNaLFdBQVcsRUFDWCxTQUFTLEdBQ0c7O0lBQ1osTUFBTSxHQUFHLEdBQUcsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFBO0lBQzlFLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7SUFDcEYsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxnQkFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUE7SUFDdEQsTUFBTSxZQUFZLEdBQUksS0FBSyxDQUFDLElBQUksQ0FBUyxHQUFHLENBQUMsQ0FBQTtJQUU3QyxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxNQUFNLFFBQVEsTUFBTSxXQUFXLE1BQU0sVUFBVSxJQUFJLENBQUMs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

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const react_1 = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const urls = __webpack_require__(/*! ./lib/urls */ "./code/lib/urls.ts");
const constants_1 = __webpack_require__(/*! ./lib/constants */ "./code/lib/constants.ts");
function Unsplash({ search, size, radius, id, lockImage, topLeft, topRight, bottomRight, bottomLeft, isMixed, onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, }) {
    window["__checkComponentBudget__"]();
    const key = `unsplash_${id.includes("id_") ? id.substring(3, id.length) : id}`;
    const cache = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : {};
    const [url, setUrl] = react_1.useState(cache.imageUrl || null);
    const selectedSize = Sizes[size] + 1;
    const borderRadius = isMixed ? `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px` : `${radius}px`;
    function getAndSetImageUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            window["__checkBudget__"]();
            const initialSize = 400;
            const route = search === "" ? "/random" : `/featured`;
            const url = `${urls.unsplashBase}${route}/${initialSize}x${initialSize}?${search}`;
            const response = yield fetch(url);
            localStorage.setItem(key, JSON.stringify({ search, imageUrl: response.url }));
            return setUrl(response.url);
        });
    }
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        const cache = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : {};
        if (!lockImage || search !== cache.search)
            getAndSetImageUrl();
    }, [search, size, lockImage]);
    let imageUrl = url;
    // Modifying url to grab larger size if needed
    if (imageUrl && selectedSize > 1) {
        const sizedUrl = new URL(url);
        const w = parseInt(sizedUrl.searchParams.get("w")) * selectedSize;
        const h = parseInt(sizedUrl.searchParams.get("h")) * selectedSize;
        sizedUrl.searchParams.set("w", w + "");
        sizedUrl.searchParams.set("h", h + "");
        imageUrl = sizedUrl.toJSON();
    }
    const style = Object.assign(Object.assign({}, constants_1.emptyStateStyle), { border: "none", backgroundImage: `url(${imageUrl || "https://static.framer.com/placeholder.png"})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius });
    return React.createElement("div", Object.assign({ style: style }, { onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp }));
}
exports.Unsplash = Unsplash;
Unsplash.defaultProps = {
    search: "",
    size: "S",
    link: "https://static.framer.com/placeholder.png",
    image: "",
    radius: 0,
    lockImage: true,
};
framer_1.addPropertyControls(Unsplash, Object.assign({ search: {
        type: framer_1.ControlType.String,
        title: "Search",
        placeholder: "Nature, Cities…",
    }, lockImage: {
        type: framer_1.ControlType.Boolean,
        title: "Shuffle",
        enabledTitle: "No",
        disabledTitle: "Yes",
        defaultValue: true,
    }, size: {
        type: framer_1.ControlType.Enum,
        title: "Resolution",
        options: ["S", "M", "L", "XL"],
        displaySegmentedControl: true,
    }, radius: {
        title: "Radius",
        type: framer_1.ControlType.FusedNumber,
        defaultValue: Unsplash.defaultProps.radius,
        toggleKey: "isMixed",
        toggleTitles: ["Radius", "Radius per corner"],
        valueKeys: ["topLeft", "topRight", "bottomRight", "bottomLeft"],
        valueLabels: ["TL", "TR", "BR", "BL"],
        min: 0,
    } }, constants_1.defaultEvents));
var Sizes;
(function (Sizes) {
    Sizes[Sizes["S"] = 0] = "S";
    Sizes[Sizes["M"] = 1] = "M";
    Sizes[Sizes["L"] = 2] = "L";
    Sizes[Sizes["XL"] = 3] = "XL";
})(Sizes || (Sizes = {}));
exports.__info__ = [{ "name": "Unsplash", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Video.tsx":
/*!************************!*\
  !*** ./code/Video.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlkZW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1ZpZGVvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQTJFO0FBQzNFLHVDQUFpRTtBQUNqRSwrQ0FBK0M7QUFxQy9DLElBQUssYUFNSjtBQU5ELFdBQUssYUFBYTtJQUNkLDhCQUFhLENBQUE7SUFDYixvQ0FBbUIsQ0FBQTtJQUNuQixnQ0FBZSxDQUFBO0lBQ2YsOEJBQWEsQ0FBQTtJQUNiLHlDQUF3QixDQUFBO0FBQzVCLENBQUMsRUFOSSxhQUFhLEtBQWIsYUFBYSxRQU1qQjtBQUVELElBQUssV0FLSjtBQUxELFdBQUssV0FBVztJQUNaLDRCQUFhLENBQUE7SUFDYixvQ0FBcUIsQ0FBQTtJQUNyQiw0QkFBYSxDQUFBO0lBQ2IsbUNBQW9CLENBQUE7QUFDeEIsQ0FBQyxFQUxJLFdBQVcsS0FBWCxXQUFXLFFBS2Y7QUFFRCxJQUFLLE9BR0o7QUFIRCxXQUFLLE9BQU87SUFDUiwyQkFBZ0IsQ0FBQTtJQUNoQixzQkFBVyxDQUFBO0FBQ2YsQ0FBQyxFQUhJLE9BQU8sS0FBUCxPQUFPLFFBR1g7QUFFRCxNQUFhLEtBQU0sU0FBUSxLQUFLLENBQUMsU0FBcUI7SUFBdEQ7O1FBd0hJLGFBQVEsR0FBZ0MsSUFBSSxDQUFBO1FBRTVDLGdCQUFXLEdBQUcsQ0FBTyxPQUFPLEVBQUUsRUFBRTs7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7WUFFdkIsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtZQUUvQyxJQUFJLE9BQU8sS0FBSyxXQUFXLENBQUMsVUFBVSxFQUFFO2dCQUNwQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUMxQixNQUFNLFFBQVEsR0FBRyxNQUFNLHNCQUFjLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQzFDLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDLFFBQVE7aUJBQ2hFO2FBQ0o7VUFDSixDQUFBO0lBK0dMLENBQUM7SUE3R0csR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLOztRQUNaLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsaUJBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQTtTQUNqRTtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLEtBQUssRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1NBQzVCO0tBQ0o7SUFFRCxNQUFNOztRQUNGLE1BQU0sRUFDRixPQUFPLEVBQ1AsT0FBTyxFQUNQLE1BQU0sRUFDTixRQUFRLEVBQ1IsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBQ0wsV0FBVyxFQUNYLFFBQVEsRUFDUixPQUFPLEVBQ1AsU0FBUyxFQUNULGVBQWUsRUFDZixNQUFNLEVBQ04sT0FBTyxFQUNQLFFBQVEsRUFDUixXQUFXLEVBQ1gsVUFBVSxFQUNWLE9BQU8sRUFDUCxRQUFRLEVBQ1IsT0FBTyxFQUNQLE1BQU0sRUFDTixLQUFLLEVBQ0wsT0FBTyxFQUNQLFlBQVksRUFDWixZQUFZLEVBQ1osV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEdBQ1QsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ2QsTUFBTSxRQUFRLEdBQUcscUJBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxxQkFBWSxDQUFDLE9BQU8sQ0FBQTtRQUMvRCxNQUFNLGFBQWEsR0FBRyxPQUFPLEtBQUssV0FBVyxDQUFDLFVBQVUsQ0FBQTtRQUN4RCxNQUFNLEdBQUcsR0FBRyxnQkFBUSxDQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ1gsT0FBTztZQUNQLE1BQU07WUFDTixPQUFPO1lBQ1AsUUFBUTtZQUNSLFVBQVU7WUFDVixhQUFhO1NBQ2hCLENBQUMsQ0FDTCxDQUFBO1FBRUQsTUFBTSxZQUFZLEdBQUcsT0FBTztZQUN4QixDQUFDLENBQUMsR0FBRyxPQUFPLE1BQU0sUUFBUSxNQUFNLFdBQVcsTUFBTSxVQUFVLElBQUk7WUFDL0QsQ0FBQyxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUE7UUFFbkIsT0FBTyxDQUNILDZDQUNRO1lBQ0EsT0FBTztZQUNQLFlBQVk7WUFDWixZQUFZO1lBQ1osV0FBVztZQUNYLFNBQVM7U0FDWixJQUNELEtBQUssRUFBRTtnQkFDSCxLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUUsTUFBTTtnQkFDZCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsZUFBZSxFQUFFLGVBQWU7Z0JBQ2hDLFlBQVk7Z0JBQ1osZUFBZSxFQUFFLHVDQUF1QzthQUMzRDtZQUVELCtCQUNJLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDNUMsR0FBRyxFQUFFLEdBQUcsRUFDUixNQUFNLEVBQUUsTUFBTSxFQUNkLEtBQUssRUFBRTtvQkFDSCxLQUFLLEVBQUUsTUFBTTtvQkFDYixNQUFNLEVBQUUsTUFBTTtvQkFDZCxTQUFTLEVBQUUsU0FBUztvQkFDcEIsY0FBYyxFQUFFLFNBQVM7aUJBQzVCLEVBQ0QsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7O29CQUNaLElBQUksUUFBUTt3QkFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQzVCLEVBQ0QsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7O29CQUNYLElBQUksT0FBTzt3QkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQzFCLEVBQ0QsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7O29CQUNWLElBQUksTUFBTTt3QkFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQ3hCLEVBQ0QsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7O29CQUNYLElBQUksS0FBSzt3QkFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQ3RCLEVBQ0QsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQ3RDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUMxQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFDckMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQzlCLElBQUksRUFBRSxJQUFJLEVBQ1YsV0FBVyxFQUFFLFdBQVcsRUFDeEIsT0FBTyxFQUFFLE9BQU8sR0FDbEIsQ0FDQSxDQUNULENBQUE7S0FDSjs7QUFwUEwsc0JBcVBDO0FBcFBVLGtCQUFZLEdBQWU7SUFDOUIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHO0lBQ3BCLE1BQU0sRUFBRSxtREFBbUQ7SUFDM0QsT0FBTyxFQUFFLEVBQUU7SUFDWCxNQUFNLEVBQ0YsbUZBQW1GO0lBQ3ZGLFFBQVEsRUFBRSxLQUFLO0lBQ2YsUUFBUSxFQUFFLElBQUk7SUFDZCxVQUFVLEVBQUUsS0FBSztJQUNqQixJQUFJLEVBQUUsSUFBSTtJQUNWLEtBQUssRUFBRSxLQUFLO0lBQ1osV0FBVyxFQUFFLElBQUk7SUFDakIsT0FBTyxFQUFFLFdBQVcsQ0FBQyxJQUFJO0lBQ3pCLFNBQVMsRUFBRSxhQUFhLENBQUMsS0FBSztJQUM5QixlQUFlLEVBQUUsZUFBZTtJQUNoQyxNQUFNLEVBQUUsQ0FBQztDQUNaLENBQUE7QUFFTSxzQkFBZ0IsbUJBQ25CLE9BQU8sRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLGFBQWE7UUFDL0IsS0FBSyxFQUFFLFFBQVE7UUFDZixPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUM7S0FDeEMsRUFDRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxHQUFHO1FBQ1YsV0FBVyxFQUFFLGlCQUFpQjtRQUM5QixNQUFNLENBQUMsS0FBSzs7WUFDUixPQUFPLEtBQUssQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLEtBQUssQ0FBQTtTQUN6QztLQUNKLEVBRUQsT0FBTyxFQUFFO1FBQ0wsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsR0FBRztRQUNWLGdCQUFnQixFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxLQUFLOztZQUNSLE9BQU8sS0FBSyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsR0FBRyxDQUFBO1NBQ3ZDO0tBQ0osRUFDRCxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLLEVBQUUsRUFDbkMsZUFBZSxFQUFFO1FBQ2IsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSztRQUN2QixLQUFLLEVBQUUsWUFBWTtLQUN0QixFQUNELE1BQU0sRUFBRTtRQUNKLEtBQUssRUFBRSxRQUFRO1FBQ2YsSUFBSSxFQUFFLG9CQUFXLENBQUMsV0FBVztRQUM3QixTQUFTLEVBQUUsU0FBUztRQUNwQixZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7UUFDN0MsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDO1FBQy9ELFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztRQUNyQyxHQUFHLEVBQUUsQ0FBQztLQUNULEVBQ0QsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsS0FBSztRQUNaLE9BQU8sRUFBRTtZQUNMLGFBQWEsQ0FBQyxLQUFLO1lBQ25CLGFBQWEsQ0FBQyxJQUFJO1lBQ2xCLGFBQWEsQ0FBQyxPQUFPO1lBQ3JCLGFBQWEsQ0FBQyxTQUFTO1lBQ3ZCLGFBQWEsQ0FBQyxJQUFJO1NBQ3JCO0tBQ0osRUFFRCxRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxXQUFXO1FBQ2xCLFlBQVksRUFBRSxLQUFLO1FBQ25CLGFBQWEsRUFBRSxJQUFJO0tBQ3RCLEVBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztRQUN6QixLQUFLLEVBQUUsTUFBTTtRQUNiLFlBQVksRUFBRSxLQUFLO1FBQ25CLGFBQWEsRUFBRSxJQUFJO0tBQ3RCLEVBQ0QsUUFBUSxFQUFFO1FBQ04sSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztRQUN6QixLQUFLLEVBQUUsVUFBVTtRQUNqQixZQUFZLEVBQUUsTUFBTTtRQUNwQixhQUFhLEVBQUUsTUFBTTtLQUN4QixFQUVELEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsS0FBSyxFQUFFLE9BQU87UUFDZCxZQUFZLEVBQUUsS0FBSztRQUNuQixhQUFhLEVBQUUsSUFBSTtLQUN0QjtJQUNELHlHQUF5RztJQUN6RyxVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxXQUFXO1FBQ2xCLFlBQVksRUFBRSxNQUFNO1FBQ3BCLGFBQWEsRUFBRSxPQUFPO1FBQ3RCLE1BQU0sQ0FBQyxLQUFLOztZQUNSLE9BQU8sS0FBSyxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUE7U0FDbEM7S0FDSixFQUNELE9BQU8sRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsT0FBTyxFQUFFO1lBQ0wsV0FBVyxDQUFDLElBQUk7WUFDaEIsV0FBVyxDQUFDLFFBQVE7WUFDcEIsV0FBVyxDQUFDLElBQUk7WUFDaEIsV0FBVyxDQUFDLFVBQVU7U0FDekI7S0FDSixFQUNELEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLFlBQVksRUFBRSxFQUN6QyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxZQUFZLEVBQUUsRUFDNUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsWUFBWSxFQUFFLEVBQzNDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLFlBQVksRUFBRSxJQUN2Qyx5QkFBYSxFQUNuQiJ9

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Cache_1 = __webpack_require__(/*! ./lib/Cache */ "./code/lib/Cache.tsx");
const constants_1 = __webpack_require__(/*! ./lib/constants */ "./code/lib/constants.ts");
var ObjectFitType;
(function (ObjectFitType) {
    ObjectFitType["Fill"] = "fill";
    ObjectFitType["Contain"] = "contain";
    ObjectFitType["Cover"] = "cover";
    ObjectFitType["None"] = "none";
    ObjectFitType["ScaleDown"] = "scale-down";
})(ObjectFitType || (ObjectFitType = {}));
var PreloadType;
(function (PreloadType) {
    PreloadType["None"] = "none";
    PreloadType["MetaData"] = "metadata";
    PreloadType["Auto"] = "auto";
    PreloadType["ForceCache"] = "force";
})(PreloadType || (PreloadType = {}));
var SrcType;
(function (SrcType) {
    SrcType["Video"] = "Upload";
    SrcType["Url"] = "URL";
})(SrcType || (SrcType = {}));
class Video extends React.Component {
    constructor() {
        super(...arguments);
        this.videoRef = null;
        this.setVideoRef = (element) => __awaiter(this, void 0, void 0, function* () {
            window["__checkBudget__"]();
            this.videoRef = element;
            const { srcUrl, preload, srcType } = this.props;
            if (preload === PreloadType.ForceCache) {
                const url = this.url(true);
                const response = yield Cache_1.cachedResponse(url);
                if (response && this.videoRef) {
                    this.videoRef["src"] = URL.createObjectURL(response); // IE10+
                }
            }
        });
    }
    url(cors = false) {
        window["__checkBudget__"]();
        if (this.props.srcType === SrcType.Url) {
            return cors ? Cache_1.corsProxy(this.props.srcUrl) : this.props.srcUrl;
        }
        if (this.props.srcType === SrcType.Video) {
            return this.props.srcFile;
        }
    }
    render() {
        window["__checkBudget__"]();
        const { srcType, srcFile, srcUrl, autoPlay, canvasPlay, loop, muted, playsinline, controls, preload, objectFit, backgroundColor, radius, topLeft, topRight, bottomRight, bottomLeft, isMixed, onSeeked, onPause, onPlay, onEnd, onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, poster, } = this.props;
        const isCanvas = framer_1.RenderTarget.current() != framer_1.RenderTarget.preview;
        const isForcedCache = preload === PreloadType.ForceCache;
        const key = Cache_1.hashCode(JSON.stringify({
            srcType,
            srcUrl,
            srcFile,
            autoPlay,
            canvasPlay,
            isForcedCache,
        }));
        const borderRadius = isMixed
            ? `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
            : `${radius}px`;
        return (React.createElement("div", Object.assign({}, {
            onClick,
            onMouseEnter,
            onMouseLeave,
            onMouseDown,
            onMouseUp,
        }, { style: {
                width: "100%",
                height: "100%",
                overflow: "hidden",
                backgroundColor: backgroundColor,
                borderRadius,
                WebkitMaskImage: "-webkit-radial-gradient(white, black)",
            } }),
            React.createElement("video", { ref: isForcedCache ? this.setVideoRef : null, key: key, poster: poster, style: {
                    width: "100%",
                    height: "100%",
                    objectFit: objectFit,
                    objectPosition: "50% 50%",
                }, onSeeked: (e) => {
                    window["__checkBudget__"]();
                    if (onSeeked)
                        onSeeked(e);
                }, onPause: (e) => {
                    window["__checkBudget__"]();
                    if (onPause)
                        onPause(e);
                }, onPlay: (e) => {
                    window["__checkBudget__"]();
                    if (onPlay)
                        onPlay(e);
                }, onEnded: (e) => {
                    window["__checkBudget__"]();
                    if (onEnd)
                        onEnd(e);
                }, src: isForcedCache ? null : this.url(), autoPlay: isCanvas ? canvasPlay : autoPlay, controls: isCanvas ? false : controls, muted: isCanvas ? true : muted, loop: loop, playsInline: playsinline, preload: preload })));
    }
}
exports.Video = Video;
Video.defaultProps = {
    srcType: SrcType.Url,
    srcUrl: "https://assets.mixkit.co/videos/1076/1076-720.mp4",
    srcFile: "",
    poster: "https://mixkit.imgix.net/videos/preview/mixkit-surfer-riding-the-waves-1076-0.jpg",
    controls: false,
    autoPlay: true,
    canvasPlay: false,
    loop: true,
    muted: false,
    playsinline: true,
    preload: PreloadType.Auto,
    objectFit: ObjectFitType.Cover,
    backgroundColor: "rgba(0,0,0,0)",
    radius: 0,
};
Video.propertyControls = Object.assign({ srcType: {
        type: framer_1.ControlType.SegmentedEnum,
        title: "Source",
        options: [SrcType.Url, SrcType.Video],
    }, srcUrl: {
        type: framer_1.ControlType.String,
        title: " ",
        placeholder: ".../example.mp4",
        hidden(props) {
            window["__checkBudget__"]();
            return props.srcType === SrcType.Video;
        },
    }, srcFile: {
        type: framer_1.ControlType.File,
        title: " ",
        allowedFileTypes: ["mp4"],
        hidden(props) {
            window["__checkBudget__"]();
            return props.srcType === SrcType.Url;
        },
    }, poster: { type: framer_1.ControlType.Image }, backgroundColor: {
        type: framer_1.ControlType.Color,
        title: "Background",
    }, radius: {
        title: "Radius",
        type: framer_1.ControlType.FusedNumber,
        toggleKey: "isMixed",
        toggleTitles: ["Radius", "Radius per corner"],
        valueKeys: ["topLeft", "topRight", "bottomRight", "bottomLeft"],
        valueLabels: ["TL", "TR", "BR", "BL"],
        min: 0,
    }, objectFit: {
        type: framer_1.ControlType.Enum,
        title: "Fit",
        options: [
            ObjectFitType.Cover,
            ObjectFitType.Fill,
            ObjectFitType.Contain,
            ObjectFitType.ScaleDown,
            ObjectFitType.None,
        ],
    }, autoPlay: {
        type: framer_1.ControlType.Boolean,
        title: "Auto Play",
        enabledTitle: "Yes",
        disabledTitle: "No",
    }, loop: {
        type: framer_1.ControlType.Boolean,
        title: "Loop",
        enabledTitle: "Yes",
        disabledTitle: "No",
    }, controls: {
        type: framer_1.ControlType.Boolean,
        title: "Controls",
        enabledTitle: "Show",
        disabledTitle: "Hide",
    }, muted: {
        type: framer_1.ControlType.Boolean,
        title: "Muted",
        enabledTitle: "Yes",
        disabledTitle: "No",
    }, 
    // playsinline: { type: ControlType.Boolean, title: "Inline", enabledTitle: "Yes", disabledTitle: "No" },
    canvasPlay: {
        type: framer_1.ControlType.Boolean,
        title: "On Canvas",
        enabledTitle: "Play",
        disabledTitle: "Pause",
        hidden(props) {
            window["__checkBudget__"]();
            return props.autoPlay === false;
        },
    }, preload: {
        type: framer_1.ControlType.Enum,
        title: "Preload",
        options: [
            PreloadType.Auto,
            PreloadType.MetaData,
            PreloadType.None,
            PreloadType.ForceCache,
        ],
    }, onEnd: { type: framer_1.ControlType.EventHandler }, onSeeked: { type: framer_1.ControlType.EventHandler }, onPause: { type: framer_1.ControlType.EventHandler }, onPlay: { type: framer_1.ControlType.EventHandler } }, constants_1.defaultEvents);
exports.__info__ = [{ "name": "Video", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Youtube.tsx":
/*!**************************!*\
  !*** ./code/Youtube.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWW91dHViZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvWW91dHViZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUF1RTtBQUN2RSwrQ0FBK0M7QUFZL0MsSUFBSyxlQU9KO0FBUEQsV0FBSyxlQUFlO0lBQ2hCLHFDQUFrQixDQUFBO0lBQ2xCLGtDQUFlLENBQUE7SUFDZixvQ0FBaUIsQ0FBQTtJQUNqQixnREFBNkIsQ0FBQTtJQUM3Qiw4Q0FBMkIsQ0FBQTtJQUMzQix3Q0FBcUIsQ0FBQTtBQUN6QixDQUFDLEVBUEksZUFBZSxLQUFmLGVBQWUsUUFPbkI7QUFFRCxTQUFnQixPQUFPLENBQVEsS0FBSzs7SUFDaEMsTUFBTSxFQUNGLEdBQUcsRUFDSCxJQUFJLEVBQ0osUUFBUSxFQUNSLE9BQU8sRUFDUCxZQUFZLEVBQ1osWUFBWSxFQUNaLFdBQVcsRUFDWCxTQUFTLEdBQ1osR0FBRyxLQUFLLENBQUE7SUFFVCxNQUFNLGVBQWUsR0FBRyxDQUFDLFFBQWdCLEVBQWlCLEVBQUU7O1FBQ3hELElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTyxJQUFJLENBQUE7UUFFMUIsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFBO1FBRW5CLGdEQUFnRDtRQUNoRCxNQUFNLFdBQVcsR0FBRyxzQkFBc0IsQ0FBQTtRQUMxQyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ2hELElBQUksVUFBVSxJQUFJLENBQUMsRUFBRTtZQUNqQixVQUFVLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ25FO2FBQU07WUFDSCw4Q0FBOEM7WUFDOUMsTUFBTSxXQUFXLEdBQUcsb0JBQW9CLENBQUE7WUFDeEMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUNo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

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const constants_1 = __webpack_require__(/*! ./lib/constants */ "./code/lib/constants.ts");
var YoutubeSettings;
(function (YoutubeSettings) {
    YoutubeSettings["playNormal"] = "Off";
    YoutubeSettings["playAuto"] = "On";
    YoutubeSettings["playLoop"] = "Loop";
    YoutubeSettings["controlsPlayback"] = "Playback";
    YoutubeSettings["controlsInfo"] = "Video Info";
    YoutubeSettings["controlsNone"] = "None";
})(YoutubeSettings || (YoutubeSettings = {}));
function Youtube(props) {
    window["__checkComponentBudget__"]();
    const { url, play, controls, onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, } = props;
    const guessIdentifier = (urlMaybe) => {
        window["__checkBudget__"]();
        if (!urlMaybe)
            return null;
        let identifier = "";
        // https://www.youtube.com/watch?v=cAs3senSITIve
        const watchPrefix = "youtube.com/watch?v=";
        const watchIndex = urlMaybe.indexOf(watchPrefix);
        if (watchIndex >= 0) {
            identifier = urlMaybe.substring(watchIndex + watchPrefix.length);
        }
        else {
            // https://www.youtube.com/embed/cAs3senSITIve
            const embedPrefix = "youtube.com/embed/";
            const embedIndex = urlMaybe.indexOf(embedPrefix);
            if (embedIndex >= 0) {
                identifier = urlMaybe.substring(embedIndex + embedPrefix.length);
            }
            else {
                // https://youtu.be/cAs3senSITIve
                const shortenedPrefix = "youtu.be/";
                const shortenedIndex = urlMaybe.indexOf(shortenedPrefix);
                if (shortenedIndex >= 0) {
                    identifier = urlMaybe.substring(shortenedIndex + shortenedPrefix.length);
                }
                else {
                    // Everything else
                    identifier = urlMaybe;
                }
            }
        }
        // Strip off the query string, if any
        const queryIndex = identifier.indexOf("?");
        if (queryIndex >= 0) {
            identifier = identifier.substring(0, queryIndex);
        }
        // What's left might be an identifier
        return identifier.match(/[\w_]+/) ? identifier : null;
    };
    const identifier = guessIdentifier(url || this.defaultProps.url) || "none";
    const autoplay = framer_1.RenderTarget.current() == framer_1.RenderTarget.preview &&
        (play === YoutubeSettings.playAuto || play === YoutubeSettings.playLoop);
    const loop = autoplay && play === YoutubeSettings.playLoop;
    const mute = autoplay;
    const showsInfo = controls === YoutubeSettings.controlsInfo;
    const showsControls = controls === YoutubeSettings.controlsPlayback;
    // Notes on https://developers.google.com/youtube/player_parameters
    // If "controls" is defined at all, an inactive video will get a Youtube logo in the corner
    let src = `https://www.youtube.com/embed/${identifier}?playlist=${identifier}&showinfo=${showsInfo ? "1" : "0"}&autoplay=${autoplay ? "1" : "0"}&loop=${loop ? "1" : "0"}&mute=${mute ? "1" : "0"}&iv_load_policy=3&rel=0`;
    if (showsControls || autoplay) {
        src += "&controls=" + (showsControls ? "1" : "0");
    }
    return (React.createElement("iframe", Object.assign({ width: "100%", height: "100%" }, { onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp }, { frameBorder: 0, src: src })));
}
exports.Youtube = Youtube;
framer_1.addPropertyControls(Youtube, Object.assign({ url: { type: framer_1.ControlType.String, title: "Video" }, play: {
        type: framer_1.ControlType.Enum,
        title: "Autoplay",
        options: [
            YoutubeSettings.playNormal,
            YoutubeSettings.playAuto,
            YoutubeSettings.playLoop,
        ],
    } }, constants_1.defaultEvents));
Youtube.defaultProps = {
    url: "https://www.youtube.com/watch?v=foSkKVtHkM4",
    controls: YoutubeSettings.controlsPlayback,
    play: YoutubeSettings.playNormal,
    width: 295,
    height: 165,
};
exports.__info__ = [{ "name": "Youtube", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/poweredByGiphy.ts":
/*!***************************************!*\
  !*** ./code/assets/poweredByGiphy.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG93ZXJlZEJ5R2lwaHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2Fzc2V0cy9wb3dlcmVkQnlHaXBoeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYSxRQUFBLGNBQWMsR0FDdkIsZzJNQUFnMk0sQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
exports.poweredByGiphy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABvCAMAAABhGA0xAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAALWUExURQAAAP////////39/f39/f////////////////////39/f39/f39/f////////////////////////////////39/f////39/f////////////////////////////////////39/f////////////////////////////////////////39/f////////////////////////////////////////////////////////////////39/f////////////////39/f////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////39/f////////////////////////////////////39/f////39/f////////////////////////////39/f////39/f////39/f////////////////39/f////////////////39/f39/f////39/f39/f////////////39/f39/f39/f39/f////39/f////39/f39/f39/f////39/f39/f////39/f39/f////39/f39/f////39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f////39/f39/f39/f39/f39/f39/f39/f39/f39/f7+/mo7BhsAAADxdFJOUwBBYd3TdAOADQXKvqMLQB96Dgc5CZZ95C17cwZwPCdTR6xtJHZ4fAECZw95wH8RCnU/TwRWSSNxdz5UCE2AYyxqWtB+KDNbXzUpFjJmRBRobGJkMF4iDE40PVdu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";
exports.__info__ = [];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./code/lib/Cache.tsx":
/*!****************************!*\
  !*** ./code/lib/Cache.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2xpYi9DYWNoZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQW1DO0FBRXRCLFFBQUEsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQ3hCLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztJQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0NBQ2YsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUVULFNBQWdCLFNBQVMsQ0FBQyxHQUFHOztJQUN6QixPQUFPLHVDQUF1QyxHQUFHLEVBQUUsQ0FBQTtDQUN0RDtBQUZELDhCQUVDO0FBRUQsU0FBc0IsY0FBYyxDQUNoQyxHQUFXLEVBQ1gsS0FBSyxHQUFHLElBQUksaUJBQU8sQ0FBQyxPQUFPLENBQUM7OztRQUU1QixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUE7UUFDcEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRXRDLElBQUksSUFBSSxFQUFFO1lBQ04sT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQy9CO2FBQU07WUFDSCxJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFBO1lBQzlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUMxQixHQUFHLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQTtZQUV6QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztnQkFDbkMsR0FBRyxDQUFDLE1BQU0sR0FBRzs7O3dCQUNULElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7NEJBQ3JCLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBOzRCQUNuQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO3lCQUN6Qjs2QkFBTTs0QkFDSCxNQUFNLENBQ0YsSUFBSSxLQUFLLENBQ0wsbUJBQW1CLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUN0RCxDQUNKLENBQUE7eUJBQ0o7O2lCQUNKLENBQUE7Z0JBQ0QsR0FBRyxDQUFDLE9BQU8sR0FBRyxVQUFTLEtBQUs7O29CQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7aUJBQ2hCLENBQUE7Z0JBRUQsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBO2FBQ2IsQ0FBQyxDQUFBO1NBQ0w7O0NBQ0o7QUFsQ0Qsd0NBa0NDIn0=

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const Storage_1 = __webpack_require__(/*! ./Storage */ "./code/lib/Storage.tsx");
exports.hashCode = s => s.split("").reduce((a, b) => {
    window["__checkBudget__"]();
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
}, 0);
function corsProxy(url) {
    window["__checkBudget__"]();
    return `https://cors-anywhere.herokuapp.com/${url}`;
}
exports.corsProxy = corsProxy;
function cachedResponse(url, cache = new Storage_1.Storage("cache")) {
    return __awaiter(this, void 0, void 0, function* () {
        window["__checkBudget__"]();
        const cacheKey = url;
        const data = yield cache.get(cacheKey);
        if (data) {
            return Promise.resolve(data);
        }
        else {
            var req = new XMLHttpRequest();
            req.open("GET", url, true);
            req.responseType = "blob";
            return new Promise((resolve, reject) => {
                window["__checkBudget__"]();
                req.onload = function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        window["__checkBudget__"]();
                        if (this.status === 200) {
                            yield cache.set(url, this.response);
                            resolve(this.response);
                        }
                        else {
                            reject(new Error(`Response status ${this.status} ${this.statusText}`));
                        }
                    });
                };
                req.onerror = function (error) {
                    window["__checkBudget__"]();
                    reject(error);
                };
                req.send();
            });
        }
    });
}
exports.cachedResponse = cachedResponse;
exports.__info__ = [];


/***/ }),

/***/ "./code/lib/Storage.tsx":
/*!******************************!*\
  !*** ./code/lib/Storage.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvbGliL1N0b3JhZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFNBQWdCLE9BQU8sQ0FBQyxJQUFJOztJQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztRQUN6QyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFcEQsT0FBTyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsRUFBRTs7WUFDMUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQzVCLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDckMsQ0FBQTtRQUVELE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUU7O1lBQ3BCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUM1QixPQUFPLEVBQUUsQ0FBQTtTQUNaLENBQUE7UUFFRCxPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFOztZQUNsQixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDNUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ1osQ0FBQTtLQUNKLENBQUMsQ0FBQTtDQUNMO0FBbkJELDBCQW1CQztBQUVELE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLFVBQVMsR0FBRzs7SUFDaEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7O1FBQ3hCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O1lBQ25DLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDdEMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ2pELE9BQU8sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFBO1NBQzNCLENBQUMsQ0FBQTtLQUNMLENBQUMsQ0FBQTtDQUNMLENBQUE7QUFFRCxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRzs7SUFDekIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtDQUMxRSxDQUFBO0FBRUQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsVUFBUyxHQUFHLEVBQUUsS0FBSzs7SUFDdkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7O1FBQ3hCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7O1lBQ25DLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQzdDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFBO1lBQzNCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFBO1NBQzNCLENBQUMsQ0FBQTtLQUNMLENBQUMsQ0FBQTtDQUNMLENBQUE7QUFFRCxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFTLEdBQUcsRUFBRSxLQUFLOztJQUMxQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7Q0FDbkQsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
function Storage(name) {
    window["__checkBudget__"]();
    this.ready = new Promise((resolve, reject) => {
        window["__checkBudget__"]();
        var request = window.indexedDB.open(location.origin);
        request.onupgradeneeded = e => {
            window["__checkBudget__"]();
            this.db = e.target["result"];
            this.db.createObjectStore("store");
        };
        request.onsuccess = e => {
            window["__checkBudget__"]();
            this.db = e.target["result"];
            resolve();
        };
        request.onerror = e => {
            window["__checkBudget__"]();
            this.db = e.target["result"];
            reject(e);
        };
    });
}
exports.Storage = Storage;
Storage.prototype.get = function (key) {
    window["__checkBudget__"]();
    return this.ready.then(() => {
        window["__checkBudget__"]();
        return new Promise((resolve, reject) => {
            window["__checkBudget__"]();
            var request = this.getStore().get(key);
            request.onsuccess = e => resolve(e.target.result);
            request.onerror = reject;
        });
    });
};
Storage.prototype.getStore = function () {
    window["__checkBudget__"]();
    return this.db.transaction(["store"], "readwrite").objectStore("store");
};
Storage.prototype.set = function (key, value) {
    window["__checkBudget__"]();
    return this.ready.then(() => {
        window["__checkBudget__"]();
        return new Promise((resolve, reject) => {
            window["__checkBudget__"]();
            var request = this.getStore().put(value, key);
            request.onsuccess = resolve;
            request.onerror = reject;
        });
    });
};
Storage.prototype.delete = function (key, value) {
    window["__checkBudget__"]();
    window.indexedDB.deleteDatabase(location.origin);
};
exports.__info__ = [];


/***/ }),

/***/ "./code/lib/colorFromToken.ts":
/*!************************************!*\
  !*** ./code/lib/colorFromToken.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JGcm9tVG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2xpYi9jb2xvckZyb21Ub2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxTQUFnQixjQUFjLENBQUMsS0FBYTs7SUFDeEMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztRQUFFLE9BQU8sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRTdGLE9BQU8sS0FBSyxDQUFBO0NBQ2Y7QUFKRCx3Q0FJQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
function colorFromToken(color) {
    window["__checkBudget__"]();
    if (color.startsWith("var(--token-"))
        return "rgb" + color.split(") /*")[0].split(", rgb")[1];
    return color;
}
exports.colorFromToken = colorFromToken;
exports.__info__ = [];


/***/ }),

/***/ "./code/lib/constants.ts":
/*!*******************************!*\
  !*** ./code/lib/constants.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9saWIvY29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG1DQUFzRDtBQUN0RCwrQ0FBMkM7QUFFOUIsUUFBQSxTQUFTLEdBQUcsbUtBQW1LLENBQUE7QUFFL0ssUUFBQSxlQUFlLEdBQXdCO0lBQ2hELEtBQUssRUFBRSxNQUFNO0lBQ2IsTUFBTSxFQUFFLE1BQU07SUFDZCxZQUFZLEVBQUUsQ0FBQztJQUNmLFVBQVUsRUFBRSx5QkFBeUI7SUFDckMsTUFBTSxFQUFFLGlCQUFpQjtJQUN6QixPQUFPLEVBQUUsTUFBTTtJQUNmLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLGNBQWMsRUFBRSxRQUFRO0lBQ3hCLFVBQVUsRUFBRSxRQUFRO0NBQ3ZCLENBQUE7QUFFWSxRQUFBLGFBQWEsR0FBcUI7SUFDM0MsT0FBTyxFQUFFO1FBQ0wsSUFBSSxFQUFFLG9CQUFXLENBQUMsWUFBWTtLQUNqQztJQUNELGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMsS0FBSztJQUNMLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsS0FBSztJQUNMLFlBQVksRUFBRTtRQUNWLElBQUksRUFBRSxvQkFBVyxDQUFDLFlBQVk7S0FDakM7SUFDRCxZQUFZLEVBQUU7UUFDVixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxZQUFZO0tBQ2pDO0NBQ0osQ0FBQTtBQUVZLFFBQUEsWUFBWSxHQUFxQjtJQUMxQyxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxNQUFNO1FBQ2IsWUFBWSxFQUFFLEtBQUs7UUFDbkIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsWUFBWSxFQUFFLFFBQVE7S0FDekI7SUFDRCxVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSx5QkFBVyxDQUFDLFFBQVEsQ0FBQztRQUM1QixXQUFXLEVBQUUsT0FBTztRQUNwQixNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUk7S0FDOUI7SUFDRCxVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSx5QkFBVyxDQUFDLFFBQVEsQ0FBQztRQUM1QixPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUN0RCxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQztRQUMvRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUk7S0FDOUI7Q0FDSixDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const framer_1 = __webpack_require__(/*! framer */ "framer");
const indentTitle_1 = __webpack_require__(/*! ./indentTitle */ "./code/lib/indentTitle.ts");
exports.fontStack = `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
exports.emptyStateStyle = {
    width: "100%",
    height: "100%",
    borderRadius: 6,
    background: "rgba(136, 85, 255, 0.3)",
    border: "1px dashed #85F",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};
exports.defaultEvents = {
    onClick: {
        type: framer_1.ControlType.EventHandler,
    },
    // onMouseDown: {
    //     type: ControlType.EventHandler,
    // },
    // onMouseUp: {
    //     type: ControlType.EventHandler,
    // },
    onMouseEnter: {
        type: framer_1.ControlType.EventHandler,
    },
    onMouseLeave: {
        type: framer_1.ControlType.EventHandler,
    },
};
exports.fontControls = {
    font: {
        type: framer_1.ControlType.Boolean,
        title: "Font",
        defaultValue: false,
        disabledTitle: "Default",
        enabledTitle: "Custom",
    },
    fontFamily: {
        type: framer_1.ControlType.String,
        title: indentTitle_1.indentTitle("Family"),
        placeholder: "Inter",
        hidden: ({ font }) => !font,
    },
    fontWeight: {
        type: framer_1.ControlType.Enum,
        title: indentTitle_1.indentTitle("Weight"),
        options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        optionTitles: ["Thin", "Extra-light", "Light", "Regular", "Medium", "Semi-bold", "Bold", "Extra-bold", "Black"],
        hidden: ({ font }) => !font,
    },
};
exports.__info__ = [];


/***/ }),

/***/ "./code/lib/indentTitle.ts":
/*!*********************************!*\
  !*** ./code/lib/indentTitle.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZW50VGl0bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2xpYi9pbmRlbnRUaXRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYSxRQUFBLFdBQVcsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFOztJQUN6Qyx3QkFBd0I7SUFDeEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFBO0lBQ3JCLHdCQUF3QjtJQUN4QixPQUFPLEdBQUcsU0FBUyxJQUFJLEtBQUssRUFBRSxDQUFBO0NBQ2pDLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
exports.indentTitle = (title) => {
    window["__checkBudget__"]();
    // const character = "⠂"
    const character = "•";
    // const character = "⌙"
    return `${character} ${title}`;
};
exports.__info__ = [];


/***/ }),

/***/ "./code/lib/urls.ts":
/*!**************************!*\
  !*** ./code/lib/urls.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvbGliL3VybHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWEsUUFBQSxTQUFTLEdBQUcsMEJBQTBCLENBQUE7QUFDdEMsUUFBQSxnQkFBZ0IsR0FBRywwQ0FBMEMsQ0FBQTtBQUM3RCxRQUFBLFlBQVksR0FBRyw2QkFBNkIsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
exports.giphyBase = `https://api.giphy.com/v1`;
exports.giphyPlaceholder = "TxJH_mDKJ_NW5b_SSL6_GA2g_​a59U_0Qk2_sYNV";
exports.unsplashBase = "https://source.unsplash.com";
exports.__info__ = [];


/***/ }),

/***/ "./code/lib/useLoop.ts":
/*!*****************************!*\
  !*** ./code/lib/useLoop.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlTG9vcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvbGliL3VzZUxvb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWlDO0FBRWpDLFNBQWdCLE9BQU8sQ0FBQyxTQUE4Qjs7SUFDbEQsaUJBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ1gsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFBO1FBRW5CLFNBQWUsWUFBWTs7O2dCQUN2QixNQUFNLFNBQVMsRUFBRSxDQUFBO2dCQUNqQixJQUFJLFFBQVEsRUFBRTtvQkFDVixZQUFZLEVBQUUsQ0FBQTtpQkFDakI7O1NBQ0o7UUFFRCxZQUFZLEVBQUUsQ0FBQTtRQUNkLE9BQU8sR0FBRyxFQUFFOztZQUNSLFFBQVEsR0FBRyxLQUFLLENBQUE7U0FDbkIsQ0FBQTtLQUNKLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0NBQ2xCO0FBaEJELDBCQWdCQyJ9

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const react_1 = __webpack_require__(/*! react */ "react");
function useLoop(animation) {
    window["__checkBudget__"]();
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        let isActive = true;
        function runAnimation() {
            return __awaiter(this, void 0, void 0, function* () {
                window["__checkBudget__"]();
                yield animation();
                if (isActive) {
                    runAnimation();
                }
            });
        }
        runAnimation();
        return () => {
            window["__checkBudget__"]();
            isActive = false;
        };
    }, [animation]);
}
exports.useLoop = useLoop;
exports.__info__ = [];


/***/ }),

/***/ "./code/lib/useTimeout.ts":
/*!********************************!*\
  !*** ./code/lib/useTimeout.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlVGltZW91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvbGliL3VzZVRpbWVvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBRTlCLFNBQWdCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsUUFBUTs7SUFDekMsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBRXBDLGdDQUFnQztJQUNoQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTs7UUFDakIsYUFBYSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUE7S0FDbkMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFFZCx1QkFBdUI7SUFDdkIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ2pCLFNBQVMsSUFBSTs7WUFDVCxhQUFhO1lBQ2IsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFBO1NBQzFCO1FBQ0QsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ25CLElBQUksRUFBRSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBO1lBQzFDLE9BQU8sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1NBQ2hDO0tBQ0osRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7Q0FDakI7QUFuQkQsZ0NBbUJDIn0=

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
function useTimeout(callback, duration) {
    window["__checkBudget__"]();
    const savedCallback = React.useRef();
    // Remember the latest callback.
    React.useEffect(() => {
        window["__checkBudget__"]();
        savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    React.useEffect(() => {
        window["__checkBudget__"]();
        function tick() {
            window["__checkBudget__"]();
            // @ts-ignore
            savedCallback.current();
        }
        if (duration !== null) {
            let id = setTimeout(tick, duration * 1000);
            return () => clearTimeout(id);
        }
    }, [duration]);
}
exports.useTimeout = useTimeout;
exports.__info__ = [];


/***/ }),

/***/ "./designDependencies.js":
/*!*******************************!*\
  !*** ./designDependencies.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


const designs = {}

// The packages are passed in through a template


module.exports = designs


/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const packageInfo = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

try {
    // This is a special webpack thing that watches the whole directory
    // https://github.com/webpack/docs/wiki/context
    const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

    ctx.keys().forEach(key => {
        packageInfo.sourceModules[key] = () => ctx(key)
    })
} catch (e) {
    // Handle when the code directory is missing
    // See issue #8178 for more information
}

const packages = {}

// The packages are passed in through a template

                packages["framer"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer */ "framer")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["framer"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"1.2.0","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@framerjs/assets":"*","@microsoft/api-extractor":"^7.6.1","@testing-library/jest-dom":"^5.1.1","@testing-library/react":"^9.4.0","@testing-library/react-hooks":"^3.2.1","@types/chalk":"2.2.0","@types/css-font-loading-module":"^0.0.4","@types/draft-js":"0.10.38","@types/enzyme":"3.1.10","@types/enzyme-adapter-react-16":"1.0.3","@types/google.fonts":"1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"25.2.1","@types/node":"^12.12.12","@types/promise-queue":"2.2.0","@types/react":"16.9.19","@types/react-dom":"16.9.5","@types/webfontloader":"1.6.29","@typescript-eslint/eslint-plugin":"^1.10.3-alpha.2","@typescript-eslint/parser":"^1.10.2","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.11.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"2.0.0-beta.70","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^25.5.4","jest-diff":"^25.5.0","jest-junit":"^10.0.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.12.0","react-dev-utils":"^5.0.1","react-dom":"^16.12.0","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","terser-webpack-plugin":"^1.3.0","ts-jest":"^25.5.0","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","watch":"^1.0.2","webfontloader":"^1.6.28","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.12.0","react-dom":"^16.12.0"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, dependencies, devDependencies, peerDependencies, framer, author, name, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"dependencies\":{\"react-feather\":\"^2.0.3\"},\"devDependencies\":{\"@types/react\":\"^16.8\"},\"peerDependencies\":{\"framer\":\"^1.0\",\"react\":\"^16.8\"},\"framer\":{\"id\":\"ed433636-a308-4ea6-8026-c3b3f320806d\",\"displayName\":\"Default\"},\"author\":\"Framer Team\",\"name\":\"@framer/framer.default\",\"version\":\"1.70.0\"}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-feather":
/*!********************************!*\
  !*** external "react-feather" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_feather__;

/***/ })

/******/ });
});