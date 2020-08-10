(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@material-ui/core/AppBar"), require("@material-ui/core/Avatar"), require("@material-ui/core/Badge"), require("@material-ui/core/BottomNavigation"), require("@material-ui/core/BottomNavigationAction"), require("@material-ui/core/Button"), require("@material-ui/core/Card"), require("@material-ui/core/CardActionArea"), require("@material-ui/core/CardActions"), require("@material-ui/core/CardContent"), require("@material-ui/core/CardMedia"), require("@material-ui/core/Checkbox"), require("@material-ui/core/Chip"), require("@material-ui/core/CircularProgress"), require("@material-ui/core/Fab"), require("@material-ui/core/FormControlLabel"), require("@material-ui/core/FormLabel"), require("@material-ui/core/IconButton"), require("@material-ui/core/LinearProgress"), require("@material-ui/core/ListItem"), require("@material-ui/core/ListItemAvatar"), require("@material-ui/core/ListItemIcon"), require("@material-ui/core/ListItemText"), require("@material-ui/core/Paper"), require("@material-ui/core/Radio"), require("@material-ui/core/RadioGroup"), require("@material-ui/core/Slider"), require("@material-ui/core/SnackbarContent"), require("@material-ui/core/Switch"), require("@material-ui/core/Tab"), require("@material-ui/core/Tabs"), require("@material-ui/core/TextField"), require("@material-ui/core/Toolbar"), require("@material-ui/core/Typography"), require("@material-ui/core/styles"), require("@material-ui/icons"), require("framer"), require("naming-style"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@material-ui/core/AppBar", "@material-ui/core/Avatar", "@material-ui/core/Badge", "@material-ui/core/BottomNavigation", "@material-ui/core/BottomNavigationAction", "@material-ui/core/Button", "@material-ui/core/Card", "@material-ui/core/CardActionArea", "@material-ui/core/CardActions", "@material-ui/core/CardContent", "@material-ui/core/CardMedia", "@material-ui/core/Checkbox", "@material-ui/core/Chip", "@material-ui/core/CircularProgress", "@material-ui/core/Fab", "@material-ui/core/FormControlLabel", "@material-ui/core/FormLabel", "@material-ui/core/IconButton", "@material-ui/core/LinearProgress", "@material-ui/core/ListItem", "@material-ui/core/ListItemAvatar", "@material-ui/core/ListItemIcon", "@material-ui/core/ListItemText", "@material-ui/core/Paper", "@material-ui/core/Radio", "@material-ui/core/RadioGroup", "@material-ui/core/Slider", "@material-ui/core/SnackbarContent", "@material-ui/core/Switch", "@material-ui/core/Tab", "@material-ui/core/Tabs", "@material-ui/core/TextField", "@material-ui/core/Toolbar", "@material-ui/core/Typography", "@material-ui/core/styles", "@material-ui/icons", "framer", "naming-style", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@material-ui/core/AppBar"), require("@material-ui/core/Avatar"), require("@material-ui/core/Badge"), require("@material-ui/core/BottomNavigation"), require("@material-ui/core/BottomNavigationAction"), require("@material-ui/core/Button"), require("@material-ui/core/Card"), require("@material-ui/core/CardActionArea"), require("@material-ui/core/CardActions"), require("@material-ui/core/CardContent"), require("@material-ui/core/CardMedia"), require("@material-ui/core/Checkbox"), require("@material-ui/core/Chip"), require("@material-ui/core/CircularProgress"), require("@material-ui/core/Fab"), require("@material-ui/core/FormControlLabel"), require("@material-ui/core/FormLabel"), require("@material-ui/core/IconButton"), require("@material-ui/core/LinearProgress"), require("@material-ui/core/ListItem"), require("@material-ui/core/ListItemAvatar"), require("@material-ui/core/ListItemIcon"), require("@material-ui/core/ListItemText"), require("@material-ui/core/Paper"), require("@material-ui/core/Radio"), require("@material-ui/core/RadioGroup"), require("@material-ui/core/Slider"), require("@material-ui/core/SnackbarContent"), require("@material-ui/core/Switch"), require("@material-ui/core/Tab"), require("@material-ui/core/Tabs"), require("@material-ui/core/TextField"), require("@material-ui/core/Toolbar"), require("@material-ui/core/Typography"), require("@material-ui/core/styles"), require("@material-ui/icons"), require("framer"), require("naming-style"), require("react")) : factory(root["@material-ui/core/AppBar"], root["@material-ui/core/Avatar"], root["@material-ui/core/Badge"], root["@material-ui/core/BottomNavigation"], root["@material-ui/core/BottomNavigationAction"], root["@material-ui/core/Button"], root["@material-ui/core/Card"], root["@material-ui/core/CardActionArea"], root["@material-ui/core/CardActions"], root["@material-ui/core/CardContent"], root["@material-ui/core/CardMedia"], root["@material-ui/core/Checkbox"], root["@material-ui/core/Chip"], root["@material-ui/core/CircularProgress"], root["@material-ui/core/Fab"], root["@material-ui/core/FormControlLabel"], root["@material-ui/core/FormLabel"], root["@material-ui/core/IconButton"], root["@material-ui/core/LinearProgress"], root["@material-ui/core/ListItem"], root["@material-ui/core/ListItemAvatar"], root["@material-ui/core/ListItemIcon"], root["@material-ui/core/ListItemText"], root["@material-ui/core/Paper"], root["@material-ui/core/Radio"], root["@material-ui/core/RadioGroup"], root["@material-ui/core/Slider"], root["@material-ui/core/SnackbarContent"], root["@material-ui/core/Switch"], root["@material-ui/core/Tab"], root["@material-ui/core/Tabs"], root["@material-ui/core/TextField"], root["@material-ui/core/Toolbar"], root["@material-ui/core/Typography"], root["@material-ui/core/styles"], root["@material-ui/icons"], root["Framer"], root["naming-style"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__material_ui_core_AppBar__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Avatar__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Badge__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_BottomNavigation__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_BottomNavigationAction__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Button__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Card__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_CardActionArea__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_CardActions__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_CardContent__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_CardMedia__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Checkbox__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Chip__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_CircularProgress__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Fab__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_FormControlLabel__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_FormLabel__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_IconButton__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_LinearProgress__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_ListItem__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_ListItemAvatar__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_ListItemIcon__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_ListItemText__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Paper__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Radio__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_RadioGroup__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Slider__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_SnackbarContent__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Switch__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Tab__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Tabs__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_TextField__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Toolbar__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Typography__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_styles__, __WEBPACK_EXTERNAL_MODULE__material_ui_icons__, __WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_naming_style__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
	"./AppBar.tsx": "./code/AppBar.tsx",
	"./Avatar.tsx": "./code/Avatar.tsx",
	"./Badge.tsx": "./code/Badge.tsx",
	"./BottomNavigation.tsx": "./code/BottomNavigation.tsx",
	"./Button.tsx": "./code/Button.tsx",
	"./Checkbox.tsx": "./code/Checkbox.tsx",
	"./Chip.tsx": "./code/Chip.tsx",
	"./CircularProgress.tsx": "./code/CircularProgress.tsx",
	"./Fab.tsx": "./code/Fab.tsx",
	"./Icon.tsx": "./code/Icon.tsx",
	"./IconButton.tsx": "./code/IconButton.tsx",
	"./LinearProgress.tsx": "./code/LinearProgress.tsx",
	"./List.tsx": "./code/List.tsx",
	"./ListItem.tsx": "./code/ListItem.tsx",
	"./MediaCard.tsx": "./code/MediaCard.tsx",
	"./Paper.tsx": "./code/Paper.tsx",
	"./Radio.tsx": "./code/Radio.tsx",
	"./RadioGroup.tsx": "./code/RadioGroup.tsx",
	"./Slider.tsx": "./code/Slider.tsx",
	"./SnackbarContent.tsx": "./code/SnackbarContent.tsx",
	"./Switch.tsx": "./code/Switch.tsx",
	"./Tabs.tsx": "./code/Tabs.tsx",
	"./TextField.tsx": "./code/TextField.tsx",
	"./ThemeProvider.tsx": "./code/ThemeProvider.tsx",
	"./Typography.tsx": "./code/Typography.tsx",
	"./canvas.tsx": "./code/canvas.tsx",
	"./utils/parseColor.ts": "./code/utils/parseColor.ts"
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

/***/ "./code/AppBar.tsx":
/*!*************************!*\
  !*** ./code/AppBar.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwQmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9BcHBCYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLG1DQUF1RDtBQUN2RCwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiLHFEQUFpRDtBQUNqRCwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiLHVEQUFnRDtBQUNoRCwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiLDZEQUFzRDtBQUN0RCwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiLHFEQUE4QztBQUM5Qyw2Q0FBMEM7QUFjMUMsTUFBYSxNQUFPLFNBQVEsS0FBSyxDQUFDLFNBQWdCO0lBdUNoRCxNQUFNOztRQUNKLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvRixPQUFPLENBQ0wsNkJBQUssS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtZQUN6QixvQkFBQyxnQkFBUyxJQUFDLFFBQVEsRUFBQyxRQUFRO2dCQUMxQixvQkFBQyxpQkFBTztvQkFDTCxRQUFRLElBQUksQ0FDWCxvQkFBQyx1QkFBVSxJQUNULElBQUksRUFBRSxRQUFRO3dCQUNkLDBDQUEwQzt3QkFDMUMsYUFBYTt3QkFDYixLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxFQUMzQyxLQUFLLEVBQUMsU0FBUyxHQUNmLENBQ0g7b0JBQ0Qsb0JBQUMsb0JBQVUsSUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUM1RCxLQUFLLENBQ0s7b0JBQ1osT0FBTyxJQUFJLG9CQUFDLGdCQUFNLElBQUMsS0FBSyxF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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const AppBar_1 = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Toolbar_1 = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Typography_1 = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Button_1 = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
const IconButton_1 = __webpack_require__(/*! ./IconButton */ "./code/IconButton.tsx");
class AppBar extends React.Component {
    render() {
        window["__checkBudget__"]();
        const { action1, action2, icon1, icon1Badge, icon2, icon2Badge, leftIcon, title } = this.props;
        return (React.createElement("div", { style: { flexGrow: 1 } },
            React.createElement(AppBar_1.default, { position: "static" },
                React.createElement(Toolbar_1.default, null,
                    leftIcon && (React.createElement(IconButton_1.IconButton, { icon: leftIcon, 
                        // tslint:disable-next-line: ban-ts-ignore
                        // @ts-ignore
                        style: { marginLeft: -12, marginRight: 20 }, color: "inherit" })),
                    React.createElement(Typography_1.default, { variant: "h6", color: "inherit", style: { flexGrow: 1 } }, title),
                    action1 && React.createElement(Button_1.default, { color: "inherit" }, action1),
                    action2 && React.createElement(Button_1.default, { color: "inherit" }, action2),
                    icon1 && (React.createElement(IconButton_1.IconButton, { icon: icon1, badgeColor: "secondary", badgeContent: icon1Badge, 
                        // tslint:disable-next-line: ban-ts-ignore
                        // @ts-ignore
                        style: { marginRight: 8 }, color: "inherit" })),
                    icon2 && (React.createElement(IconButton_1.IconButton, { icon: icon2, badgeContent: icon2Badge, 
                        // tslint:disable-next-line: ban-ts-ignore
                        // @ts-ignore
                        style: { marginRight: 8 }, color: "inherit" }))))));
    }
}
exports.AppBar = AppBar;
// Set default properties
AppBar.defaultProps = {
    width: 300,
    height: 56,
    leftIcon: 'menu',
    title: 'Material-UI',
    action1: 'Login',
    action2: '',
    icon1: 'notifications',
    icon1Badge: '8',
    icon2: 'account_circle',
    icon2Badge: '',
};
// Items shown in property panel
AppBar.propertyControls = {
    leftIcon: { type: framer_1.ControlType.String, title: 'Left icon' },
    title: { type: framer_1.ControlType.String, title: 'Title' },
    action1: { type: framer_1.ControlType.String, title: 'Action 1' },
    action2: {
        type: framer_1.ControlType.String,
        title: 'Action 2',
        hidden(props) {
            window["__checkBudget__"]();
            return props.action1 === '' && props.action2 !== '';
        },
    },
    icon1: { type: framer_1.ControlType.String, title: 'Icon 1' },
    icon1Badge: { type: framer_1.ControlType.String, title: 'Icon 1 badge' },
    icon2: {
        type: framer_1.ControlType.String,
        title: 'Icon 2',
        hidden(props) {
            window["__checkBudget__"]();
            return props.icon1 === '' && props.icon2 !== '';
        },
    },
    icon2Badge: { type: framer_1.ControlType.String, title: 'Icon 2 badge' },
};
exports.__info__ = [{ "name": "AppBar", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Avatar.tsx":
/*!*************************!*\
  !*** ./code/Avatar.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9BdmF0YXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBK0I7QUFDL0IsbUNBQTBEO0FBQzFELDBDQUEwQztBQUMxQyxhQUFhO0FBQ2IscURBQWlEO0FBQ2pELGlDQUE4QjtBQWM5QixNQUFNLFlBQVksR0FBVTtJQUMxQixPQUFPLEVBQUUsUUFBUTtJQUNqQixlQUFlLEVBQUUsU0FBUztJQUMxQixTQUFTLEVBQUUsU0FBUztJQUNwQixJQUFJLEVBQUUsTUFBTTtJQUNaLFNBQVMsRUFBRSxFQUFFO0lBQ2IsUUFBUSxFQUFFLDJCQUEyQjtJQUNyQyxLQUFLLEVBQUUsSUFBSTtJQUNYLEtBQUssRUFBRSxFQUFFO0lBQ1QsTUFBTSxFQUFFLEVBQUU7Q0FDWCxDQUFDO0FBRVcsUUFBQSxNQUFNLEdBQXFCLENBQUMsS0FBWSxFQUFFLEVBQUU7O0lBQ3ZELE1BQU0sRUFDSixlQUFlLEVBQ2YsTUFBTSxFQUNOLElBQUksRUFDSixTQUFTLEVBQ1QsUUFBUSxFQUNSLEtBQUssRUFDTCxTQUFTLEVBQ1QsS0FBSyxLQUVILEtBQUssRUFEUCxvSEFDTyxDQUFDO0lBRVYsT0FBTyxTQUFTLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUM3QixvQkFBQyxnQkFBUyxrQkFBQyxHQUFHLEVBQUUsU0FBUyxJQUFJLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQU0sS0FBSyxFQUFJLENBQy9FLENBQUMsQ0FBQyxDQUFDLENBQ0Ysb0JBQUMsZ0JBQVMsa0JBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFNLEtBQUssR0FDOUUsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQkFBQyxXQUFJLElBQUMsSUFBSSxFQUFFLElBQUksR0FBSSxDQUNqQyxDQUNiLENBQUM7Q0FDSCxDQUFDO0FBRUYsY0FBTSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7QUFFbkMsNEJBQW1CLENBQUMsY0FBTSxFQUFFO0lBQzFCLE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUM7S0FDekM7SUFDRCxlQUFlLEVBQUU7UUFDZixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQ3ZCLEtBQUssRUFBRSxrQkFBa0I7S0FDMUI7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQ3ZCLEtBQUssRUFBRSxZQUFZO0tBQ3BCO0lBQ0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSztRQUN2QixLQUFLLEVBQUUsWUFBWTtRQUNuQixNQUFNLEVBQUUsU0FBUyxNQUFNLENBQUMsS0FBSzs7WUFDM0IsT0FBTyxLQUFLLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssUUFBUSxDQUFDO1NBQ2hFO0tBQ0Y7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxXQUFXO1FBQ2xCLE1BQU0sRUFBRSxTQUFTLE1BQU0sQ0FBQyxLQUFLOztZQUMzQixPQUFPLEtBQUssQ0FBQyxTQUFTLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxLQUFLLENBQUMsYUFBYSxLQUFLLFFBQVEsQ0FBQyxDQUFDO1NBQzVGO0tBQ0Y7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxPQUFPO0tBQ2Y7Q0FDRixDQUFDLENBQUMifQ==

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Avatar_1 = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
const Icon_1 = __webpack_require__(/*! ./Icon */ "./code/Icon.tsx");
const defaultProps = {
    variant: 'circle',
    backgroundColor: '#4154af',
    textColor: undefined,
    icon: 'face',
    imageFile: '',
    imageUrl: 'https://i.pravatar.cc/300',
    label: 'MB',
    width: 40,
    height: 40,
};
exports.Avatar = (props) => {
    window["__checkBudget__"]();
    const { backgroundColor, height, icon, imageFile, imageUrl, label, textColor, width } = props, other = __rest(props, ["backgroundColor", "height", "icon", "imageFile", "imageUrl", "label", "textColor", "width"]);
    return imageFile || imageUrl ? (React.createElement(Avatar_1.default, Object.assign({ src: imageFile || imageUrl, style: { height, width } }, other))) : (React.createElement(Avatar_1.default, Object.assign({ style: { color: textColor, backgroundColor, height, width } }, other), icon === '' ? label : React.createElement(Icon_1.Icon, { icon: icon })));
};
exports.Avatar.defaultProps = defaultProps;
framer_1.addPropertyControls(exports.Avatar, {
    variant: {
        type: framer_1.ControlType.Enum,
        title: 'Variant',
        options: ['circle', 'rounded', 'square'],
    },
    backgroundColor: {
        type: framer_1.ControlType.Color,
        title: 'Background color',
    },
    textColor: {
        type: framer_1.ControlType.Color,
        title: 'Text color',
    },
    icon: {
        type: framer_1.ControlType.String,
        title: 'Icon',
    },
    imageFile: {
        type: framer_1.ControlType.Image,
        title: 'Image File',
        hidden: function hidden(props) {
            window["__checkBudget__"]();
            return props.primaryAction && props.primaryAction !== 'avatar';
        },
    },
    imageUrl: {
        type: framer_1.ControlType.String,
        title: 'Image URL',
        hidden: function hidden(props) {
            window["__checkBudget__"]();
            return props.imageFile !== '' || (props.primaryAction && props.primaryAction !== 'avatar');
        },
    },
    label: {
        type: framer_1.ControlType.String,
        title: 'Label',
    },
});
exports.__info__ = [{ "name": "Avatar", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Badge.tsx":
/*!************************!*\
  !*** ./code/Badge.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0JhZGdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQStCO0FBQy9CLG1DQUEwRDtBQUMxRCwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiLG1EQUErQztBQUMvQyxpQ0FBOEI7QUFjOUIsTUFBTSxZQUFZLEdBQVU7SUFDMUIsWUFBWSxFQUFFLEdBQUc7SUFDakIsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsS0FBSztJQUNmLE9BQU8sRUFBRSxVQUFVO0lBQ25CLElBQUksRUFBRSxFQUFFO0lBQ1IsS0FBSyxFQUFFLFFBQVE7SUFDZixVQUFVLEVBQUUsU0FBUztJQUNyQixLQUFLLEVBQUUsRUFBRTtJQUNULE1BQU0sRUFBRSxFQUFFO0NBQ1gsQ0FBQztBQUVGLE1BQU0sS0FBSyxHQUF3QjtJQUNqQyxPQUFPLEVBQUUsTUFBTTtJQUNmLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLGNBQWMsRUFBRSxRQUFRO0NBQ3pCLENBQUM7QUFFVyxRQUFBLEtBQUssR0FBcUIsQ0FBQyxLQUFZLEVBQUUsRUFBRTs7SUFDdEQsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sS0FBZSxLQUFLLEVBQWxCLHlGQUFrQixDQUFDO0lBQ3hGLE1BQU0sT0FBTyxHQUNYLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ1osWUFBWSxDQUNiLENBQUMsQ0FBQyxDQUFDO0lBQ0YsYUFBYTtJQUNiLG9CQUFDLFdBQUksSUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUksQ0FDM0UsQ0FBQztJQUVKLE9BQU8sb0JBQUMsZUFBUSxrQkFBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssSUFBTSxLQUFLLEVBQUksQ0FBQztDQUNuRixDQUFDO0FBRUYsYUFBSyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7QUFFbEMsNEJBQW1CLENBQUMsYUFBSyxFQUFFO0lBQ3pCLFlBQVksRUFBRTtRQUNaLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLGVBQWU7S0FDdkI7SUFDRCxHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxLQUFLO0tBQ2I7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxXQUFXO0tBQ25CO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsU0FBUztRQUNoQixPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDO0tBQzdCO0lBQ0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsT0FBTztRQUNkLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUM7S0FDL0Q7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxhQUFhO1FBQ3BCLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQztLQUN0RDtDQUNGLENBQUMsQ0FBQyJ9

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Badge_1 = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
const Icon_1 = __webpack_require__(/*! ./Icon */ "./code/Icon.tsx");
const defaultProps = {
    badgeContent: '8',
    max: 99,
    showZero: false,
    variant: 'standard',
    icon: '',
    theme: 'Filled',
    badgeColor: 'primary',
    width: 22,
    height: 22,
};
const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};
exports.Badge = (props) => {
    window["__checkBudget__"]();
    const { badgeColor: color, badgeContent, icon, theme, width, height } = props, other = __rest(props, ["badgeColor", "badgeContent", "icon", "theme", "width", "height"]);
    const content = icon === '' ? (badgeContent) : (
    // @ts-ignore
    React.createElement(Icon_1.Icon, { icon: icon, theme: theme, style: { width: '75%', height: '75%' } }));
    return React.createElement(Badge_1.default, Object.assign({ badgeContent: content, color: color, style: style }, other));
};
exports.Badge.defaultProps = defaultProps;
framer_1.addPropertyControls(exports.Badge, {
    badgeContent: {
        type: framer_1.ControlType.String,
        title: 'Badge content',
    },
    max: {
        type: framer_1.ControlType.Number,
        title: 'Max',
    },
    showZero: {
        type: framer_1.ControlType.Boolean,
        title: 'Show zero',
    },
    variant: {
        type: framer_1.ControlType.Enum,
        title: 'Variant',
        options: ['dot', 'standard'],
    },
    icon: {
        type: framer_1.ControlType.String,
        title: 'Icon',
    },
    theme: {
        type: framer_1.ControlType.Enum,
        title: 'Theme',
        options: ['Filled', 'Outlined', 'Rounded', 'TwoTone', 'Sharp'],
    },
    badgeColor: {
        type: framer_1.ControlType.Enum,
        title: 'Badge color',
        options: ['default', 'primary', 'secondary', 'error'],
    },
});
exports.__info__ = [{ "name": "Badge", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/BottomNavigation.tsx":
/*!***********************************!*\
  !*** ./code/BottomNavigation.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90dG9tTmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvQm90dG9tTmF2aWdhdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQixtQ0FBMEQ7QUFDMUQsMENBQTBDO0FBQzFDLGFBQWE7QUFDYix5RUFBcUU7QUFDckUsMENBQTBDO0FBQzFDLGFBQWE7QUFDYixxRkFBaUY7QUFDakYsaUNBQThCO0FBVTlCLE1BQU0sWUFBWSxHQUFVO0lBQzFCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQztJQUN2RCxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7SUFDbkQsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsRUFBRTtDQUNYLENBQUM7QUFFVyxRQUFBLGdCQUFnQixHQUFxQixDQUFDLEtBQVksRUFBRSxFQUFFOztJQUNqRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssS0FBZSxLQUFLLEVBQWxCLDBDQUFrQixDQUFDO0lBRTFDLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2IsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTVDLE1BQU0sWUFBWSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFOztRQUNwQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakIsQ0FBQztJQUVGLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFFNUQsT0FBTyxDQUNMLG9CQUFDLDBCQUFtQixrQkFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLElBQU0sS0FBSyxHQUNqRSxLQUFLLENBQUMsR0FBRyxDQUNSLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQ2QsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUM3RCxvQkFBQyxnQ0FBeUIsSUFDeEIsR0FBRyxFQUFFLElBQUksRUFDVCxLQUFLLEVBQUUsS0FBSyxFQUNaLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQ3BCLElBQUksRUFBRSxvQkFBQyxXQUFJLElBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUksR0FDeEMsQ0FDSCxDQUNKLENBQ21CLENBQ3ZCLENBQUM7Q0FDSCxDQUFDO0FBRUYsd0JBQWdCLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztBQUU3Qyw0QkFBbUIsQ0FBQyx3QkFBZ0IsRUFBRTtJQUNwQyxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxhQUFhO0tBQ3JCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSztRQUN2QixLQUFLLEVBQUUsT0FBTztRQUNkLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU0sRUFBRTtLQUM5QztJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUs7UUFDdkIsS0FBSyxFQUFFLFFBQVE7UUFDZixlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNLEVBQUU7S0FDOUM7Q0FDRixDQUFDLENBQUMifQ==

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const BottomNavigation_1 = __webpack_require__(/*! @material-ui/core/BottomNavigation */ "@material-ui/core/BottomNavigation");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const BottomNavigationAction_1 = __webpack_require__(/*! @material-ui/core/BottomNavigationAction */ "@material-ui/core/BottomNavigationAction");
const Icon_1 = __webpack_require__(/*! ./Icon */ "./code/Icon.tsx");
const defaultProps = {
    showLabels: false,
    icons: ['restore', 'favorite', 'location_on', 'folder'],
    labels: ['Recents', 'Favorites', 'Nearby', 'Saved'],
    width: 500,
    height: 56,
};
exports.BottomNavigation = (props) => {
    window["__checkBudget__"]();
    const { labels, icons } = props, other = __rest(props, ["labels", "icons"]);
    // tslint:disable-next-line: ban-ts-ignore
    // @ts-ignore
    const [value, setValue] = React.useState(0);
    const handleChange = (event, value) => {
        window["__checkBudget__"]();
        setValue(value);
    };
    const items = icons.length > labels.length ? icons : labels;
    return (React.createElement(BottomNavigation_1.default, Object.assign({ value: value, onChange: handleChange }, other), items.map((item, index) => (labels[index] !== undefined || icons[index] !== undefined) && (React.createElement(BottomNavigationAction_1.default, { key: item, value: index, label: labels[index], icon: React.createElement(Icon_1.Icon, { icon: icons[index] || '' }) })))));
};
exports.BottomNavigation.defaultProps = defaultProps;
framer_1.addPropertyControls(exports.BottomNavigation, {
    showLabels: {
        type: framer_1.ControlType.Boolean,
        title: 'Show labels',
    },
    icons: {
        type: framer_1.ControlType.Array,
        title: 'Icons',
        propertyControl: { type: framer_1.ControlType.String },
    },
    labels: {
        type: framer_1.ControlType.Array,
        title: 'Labels',
        propertyControl: { type: framer_1.ControlType.String },
    },
});
exports.__info__ = [{ "name": "BottomNavigation", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Button.tsx":
/*!*************************!*\
  !*** ./code/Button.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9CdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBK0I7QUFDL0IsbUNBQTBEO0FBQzFELDBDQUEwQztBQUMxQyxhQUFhO0FBQ2IscURBQWlEO0FBQ2pELGlDQUE4QjtBQW1COUIsTUFBTSxZQUFZLEdBQVU7SUFDMUIsS0FBSyxFQUFFLFNBQVM7SUFDaEIsUUFBUSxFQUFFLEtBQUs7SUFDZixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLElBQUksRUFBRSxRQUFRO0lBQ2QsU0FBUyxFQUFFLFNBQVM7SUFDcEIsT0FBTyxFQUFFLE1BQU07SUFDZixjQUFjLEVBQUUsUUFBUTtJQUN4QixZQUFZLEVBQUUsUUFBUTtJQUN0QixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLEVBQUU7Q0FDWCxDQUFDO0FBRVcsUUFBQSxNQUFNLEdBQXFCLENBQUMsS0FBWSxFQUFFLEVBQUU7O0lBQ3ZELE1BQU0sRUFDSixPQUFPLEVBQ1AsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxFQUNULGNBQWMsRUFDZCxPQUFPLEVBQ1AsS0FBSyxLQUVILEtBQUssRUFEUCx3SEFDTyxDQUFDO0lBRVYsTUFBTSxTQUFTLEdBQUcsU0FBUyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxvQkFBQyxXQUFJLElBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsY0FBYyxHQUFJLENBQUM7SUFDbEcsTUFBTSxPQUFPLEdBQUcsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxvQkFBQyxXQUFJLElBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxHQUFJLENBQUM7SUFFMUYsT0FBTyxDQUNMO1FBQ0Usb0JBQUMsZ0JBQVMsa0JBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLElBQU0sS0FBSyxHQUMzRSxLQUFLLENBQ0ksQ0FDUixDQUNQLENBQUM7Q0FDSCxDQUFDO0FBRUYsY0FBTSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7QUFFbkMsNEJBQW1CLENBQUMsY0FBTSxFQUFFO0lBQzFCLEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLE9BQU87UUFDZCxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUM7S0FDeEQ7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxVQUFVO0tBQ2xCO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztRQUN6QixLQUFLLEVBQUUsbUJBQW1CO0tBQzNCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixLQUFLLEVBQUUsVUFBVTtLQUNsQjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsS0FBSyxFQUFFLFlBQVk7S0FDcEI7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxNQUFNO0tBQ2Q7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxNQUFNO1FBQ2IsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7S0FDdEM7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxZQUFZO0tBQ3BCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsU0FBUztRQUNoQixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQztLQUMzQztJQUNELGNBQWMsRUFBRTtRQUNkLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLGtCQUFrQjtRQUN6QixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDO0tBQy9EO0lBQ0QsWUFBWSxFQUFFO1FBQ1osSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUM7S0FDL0Q7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxPQUFPO0tBQ2Y7Q0FDRixDQUFDLENBQUMifQ==

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Button_1 = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
const Icon_1 = __webpack_require__(/*! ./Icon */ "./code/Icon.tsx");
const defaultProps = {
    color: 'default',
    disabled: false,
    disableElevation: false,
    endIcon: undefined,
    fullWidth: false,
    size: 'medium',
    startIcon: undefined,
    variant: 'text',
    startIconTheme: 'Filled',
    endIconTheme: 'Filled',
    label: 'Button',
    width: 100,
    height: 38,
};
exports.Button = (props) => {
    window["__checkBudget__"]();
    const { endIcon, endIconTheme, height, label, startIcon, startIconTheme, variant, width } = props, other = __rest(props, ["endIcon", "endIconTheme", "height", "label", "startIcon", "startIconTheme", "variant", "width"]);
    const StartIcon = startIcon === '' ? undefined : React.createElement(Icon_1.Icon, { icon: startIcon, theme: startIconTheme });
    const EndIcon = endIcon === '' ? undefined : React.createElement(Icon_1.Icon, { icon: endIcon, theme: endIconTheme });
    return (React.createElement("div", null,
        React.createElement(Button_1.default, Object.assign({ variant: variant, startIcon: StartIcon, endIcon: EndIcon }, other), label)));
};
exports.Button.defaultProps = defaultProps;
framer_1.addPropertyControls(exports.Button, {
    color: {
        type: framer_1.ControlType.Enum,
        title: 'Color',
        options: ['default', 'inherit', 'primary', 'secondary'],
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        title: 'Disabled',
    },
    disableElevation: {
        type: framer_1.ControlType.Boolean,
        title: 'Disable elevation',
    },
    endIcon: {
        type: framer_1.ControlType.String,
        title: 'End icon',
    },
    fullWidth: {
        type: framer_1.ControlType.Boolean,
        title: 'Full width',
    },
    href: {
        type: framer_1.ControlType.String,
        title: 'Href',
    },
    size: {
        type: framer_1.ControlType.Enum,
        title: 'Size',
        options: ['small', 'medium', 'large'],
    },
    startIcon: {
        type: framer_1.ControlType.String,
        title: 'Start icon',
    },
    variant: {
        type: framer_1.ControlType.Enum,
        title: 'Variant',
        options: ['text', 'outlined', 'contained'],
    },
    startIconTheme: {
        type: framer_1.ControlType.Enum,
        title: 'Start icon theme',
        options: ['Filled', 'Outlined', 'Rounded', 'TwoTone', 'Sharp'],
    },
    endIconTheme: {
        type: framer_1.ControlType.Enum,
        title: 'End icon theme',
        options: ['Filled', 'Outlined', 'Rounded', 'TwoTone', 'Sharp'],
    },
    label: {
        type: framer_1.ControlType.String,
        title: 'Label',
    },
});
exports.__info__ = [{ "name": "Button", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Checkbox.tsx":
/*!***************************!*\
  !*** ./code/Checkbox.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0NoZWNrYm94LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQStCO0FBQy9CLG1DQUEwRDtBQUMxRCwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiLHlEQUFxRDtBQUNyRCwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiLHlFQUFrRTtBQUVsRSxTQUFnQixRQUFRLENBQUMsS0FBSzs7SUFDNUIsTUFBTSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEtBQWUsS0FBSyxFQUFsQiwrREFBa0IsQ0FBQztJQUN4RSwwQ0FBMEM7SUFDMUMsYUFBYTtJQUViLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVwRCxNQUFNLFlBQVksR0FBRyxDQUFDLEtBQTBDLEVBQUUsRUFBRTs7UUFDbEUsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakI7UUFDRCxVQUFVLENBQUUsS0FBSyxDQUFDLE1BQTJCLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDeEQsQ0FBQztJQUVGLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ25CLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUN6QixFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUVsQixNQUFNLE9BQU8sR0FBRyxvQkFBQyxrQkFBVyxJQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFJLENBQUM7SUFFdEYsT0FBTyxvQkFBQywwQkFBZ0Isa0JBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxJQUFNLEtBQUssRUFBSSxDQUFDO0NBQ3hFO0FBdkJELDRCQXVCQztBQUVELFFBQVEsQ0FBQyxZQUFZLEdBQUc7SUFDdEIsT0FBTyxFQUFFLEtBQUs7SUFDZCxLQUFLLEVBQUUsV0FBVztJQUNsQixRQUFRLEVBQUUsS0FBSztJQUNmLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLFVBQVU7SUFDakIsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsRUFBRTtDQUNYLENBQUM7QUFFRiw0QkFBbUIsQ0FBQyxRQUFRLEVBQUU7SUFDNUIsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztRQUN6QixLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLE9BQU87UUFDZCxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQztLQUM3QztJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsS0FBSyxFQUFFLFVBQVU7S0FDbEI7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxNQUFNO1FBQ2IsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztLQUM3QjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLE9BQU87S0FDZjtDQUNGLENBQUMsQ0FBQyJ9

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Checkbox_1 = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const FormControlLabel_1 = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
function Checkbox(props) {
    window["__checkBudget__"]();
    const { checked: checkedProp, label, onChange, size } = props, other = __rest(props, ["checked", "label", "onChange", "size"]);
    // tslint:disable-next-line: ban-ts-ignore
    // @ts-ignore
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        window["__checkBudget__"]();
        if (onChange) {
            onChange(event);
        }
        setChecked(event.target.checked);
    };
    // tslint:disable-next-line: ban-ts-ignore
    // @ts-ignore
    React.useEffect(() => {
        window["__checkBudget__"]();
        setChecked(checkedProp);
    }, [checkedProp]);
    const control = React.createElement(Checkbox_1.default, { checked: checked, onChange: handleChange, size: size });
    return React.createElement(FormControlLabel_1.default, Object.assign({ control: control, label: label }, other));
}
exports.Checkbox = Checkbox;
Checkbox.defaultProps = {
    checked: false,
    color: 'secondary',
    disabled: false,
    size: 'medium',
    label: 'Checkbox',
    width: 100,
    height: 42,
};
framer_1.addPropertyControls(Checkbox, {
    checked: {
        type: framer_1.ControlType.Boolean,
        title: 'Checked',
    },
    color: {
        type: framer_1.ControlType.Enum,
        title: 'Color',
        options: ['primary', 'secondary', 'default'],
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        title: 'Disabled',
    },
    size: {
        type: framer_1.ControlType.Enum,
        title: 'Size',
        options: ['small', 'medium'],
    },
    label: {
        type: framer_1.ControlType.String,
        title: 'Label',
    },
});
exports.__info__ = [{ "name": "Checkbox", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Chip.tsx":
/*!***********************!*\
  !*** ./code/Chip.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvQ2hpcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQixtQ0FBMEQ7QUFDMUQsMENBQTBDO0FBQzFDLGFBQWE7QUFDYixpREFBNkM7QUFDN0MsaUNBQThCO0FBQzlCLHFDQUFrQztBQW1CbEMsTUFBTSxZQUFZLEdBQVU7SUFDMUIsU0FBUyxFQUFFLElBQUk7SUFDZixLQUFLLEVBQUUsU0FBUztJQUNoQixVQUFVLEVBQUUsRUFBRTtJQUNkLFFBQVEsRUFBRSxLQUFLO0lBQ2YsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsTUFBTTtJQUNiLElBQUksRUFBRSxRQUFRO0lBQ2QsT0FBTyxFQUFFLFNBQVM7SUFDbEIsZUFBZSxFQUFFLEVBQUU7SUFDbkIsY0FBYyxFQUFFLEVBQUU7SUFDbEIsU0FBUyxFQUFFLEtBQUs7SUFDaEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsRUFBRTtDQUNYLENBQUM7QUFFVyxRQUFBLElBQUksR0FBcUIsQ0FBQyxLQUFZLEVBQUUsRUFBRTs7SUFDckQsTUFBTSxFQUNKLGVBQWUsRUFDZixjQUFjLEVBQ2QsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sSUFBSSxFQUNKLFNBQVMsRUFDVCxLQUFLLEtBRUgsS0FBSyxFQURQLCtIQUNPLENBQUM7SUFFVixPQUFPLENBQ0wsb0JBQUMsY0FBTyxrQkFDTixNQUFNLEVBQ0osZUFBZSxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FDbEMsb0JBQUMsZUFBTSxJQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLGNBQWMsR0FBSSxDQUNqRSxDQUFDLENBQUMsQ0FBQyxDQUNGLFNBQVMsQ0FDVixFQUVILElBQUksRUFBRSxvQkFBQyxXQUFJLElBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxHQUFJLEVBQzVDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxpQ0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQzFDLFVBQVUsRUFBRSxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLG9CQUFDLFdBQUksSUFBQyxJQUFJLEVBQUUsVUFBVSxHQUFJLElBQ2xFLEtBQUssRUFDVCxDQUNILENBQUM7Q0FDSCxDQUFDO0FBRUYsWUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7QUFFakMsNEJBQW1CLENBQUMsWUFBSSxFQUFFO0lBQ3hCLFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsS0FBSyxFQUFFLFdBQVc7S0FDbkI7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxPQUFPO1FBQ2QsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUM7S0FDN0M7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxhQUFhO0tBQ3JCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztRQUN6QixLQUFLLEVBQUUsVUFBVTtLQUNsQjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLE9BQU87S0FDZjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLE1BQU07UUFDYixPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO0tBQzdCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsU0FBUztRQUNoQixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDO0tBQ2pDO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSztRQUN2QixLQUFLLEVBQUUsbUJBQW1CO0tBQzNCO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixLQUFLLEVBQUUsa0JBQWtCO1FBQ3pCLE1BQU0sRUFBRSxTQUFTLE1BQU0sQ0FBQyxLQUFLOztZQUMzQixPQUFPLEtBQUssQ0FBQyxlQUFlLEtBQUssRUFBRSxDQUFDO1NBQ3JDO0tBQ0Y7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxXQUFXO0tBQ25CO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsWUFBWTtRQUNuQixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDO0tBQy9EO0NBQ0YsQ0FBQyxDQUFDIn0=

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Chip_1 = __webpack_require__(/*! @material-ui/core/Chip */ "@material-ui/core/Chip");
const Icon_1 = __webpack_require__(/*! ./Icon */ "./code/Icon.tsx");
const Avatar_1 = __webpack_require__(/*! ./Avatar */ "./code/Avatar.tsx");
const defaultProps = {
    clickable: true,
    color: 'default',
    deleteIcon: '',
    disabled: false,
    icon: 'star',
    label: 'Chip',
    size: 'medium',
    variant: 'default',
    avatarImageFile: '',
    avatarImageUrl: '',
    deletable: false,
    iconTheme: 'Filled',
    width: 100,
    height: 32,
};
exports.Chip = (props) => {
    window["__checkBudget__"]();
    const { avatarImageFile, avatarImageUrl, deletable, deleteIcon, height, icon, iconTheme, width } = props, other = __rest(props, ["avatarImageFile", "avatarImageUrl", "deletable", "deleteIcon", "height", "icon", "iconTheme", "width"]);
    return (React.createElement(Chip_1.default, Object.assign({ avatar: avatarImageFile || avatarImageUrl ? (React.createElement(Avatar_1.Avatar, { imageFile: avatarImageFile, imageUrl: avatarImageUrl })) : (undefined), icon: React.createElement(Icon_1.Icon, { icon: icon, theme: iconTheme }), onDelete: deletable ? () => { window["__checkBudget__"](); } : undefined, deleteIcon: deleteIcon === '' ? undefined : React.createElement(Icon_1.Icon, { icon: deleteIcon }) }, other)));
};
exports.Chip.defaultProps = defaultProps;
framer_1.addPropertyControls(exports.Chip, {
    clickable: {
        type: framer_1.ControlType.Boolean,
        title: 'Clickable',
    },
    color: {
        type: framer_1.ControlType.Enum,
        title: 'Color',
        options: ['default', 'primary', 'secondary'],
    },
    deleteIcon: {
        type: framer_1.ControlType.String,
        title: 'Delete icon',
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        title: 'Disabled',
    },
    icon: {
        type: framer_1.ControlType.String,
        title: 'Icon',
    },
    label: {
        type: framer_1.ControlType.String,
        title: 'Label',
    },
    size: {
        type: framer_1.ControlType.Enum,
        title: 'Size',
        options: ['small', 'medium'],
    },
    variant: {
        type: framer_1.ControlType.Enum,
        title: 'Variant',
        options: ['default', 'outlined'],
    },
    avatarImageFile: {
        type: framer_1.ControlType.Image,
        title: 'Avatar Image File',
    },
    avatarImageUrl: {
        type: framer_1.ControlType.String,
        title: 'Avatar Image URL',
        hidden: function hidden(props) {
            window["__checkBudget__"]();
            return props.avatarImageFile !== '';
        },
    },
    deletable: {
        type: framer_1.ControlType.Boolean,
        title: 'Deletable',
    },
    iconTheme: {
        type: framer_1.ControlType.Enum,
        title: 'Icon theme',
        options: ['Filled', 'Outlined', 'Rounded', 'TwoTone', 'Sharp'],
    },
});
exports.__info__ = [{ "name": "Chip", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/CircularProgress.tsx":
/*!***********************************!*\
  !*** ./code/CircularProgress.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2lyY3VsYXJQcm9ncmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvQ2lyY3VsYXJQcm9ncmVzcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQixtQ0FBMEQ7QUFDMUQsMENBQTBDO0FBQzFDLGFBQWE7QUFDYix5RUFBcUU7QUFXckUsTUFBTSxZQUFZLEdBQVU7SUFDMUIsS0FBSyxFQUFFLFNBQVM7SUFDaEIsU0FBUyxFQUFFLENBQUM7SUFDWixLQUFLLEVBQUUsRUFBRTtJQUNULE9BQU8sRUFBRSxRQUFRO0lBQ2pCLEtBQUssRUFBRSxFQUFFO0lBQ1QsTUFBTSxFQUFFLEVBQUU7Q0FDWCxDQUFDO0FBRVcsUUFBQSxnQkFBZ0IsR0FBcUIsQ0FBQyxLQUFZLEVBQUUsRUFBRTs7SUFDakUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEtBQWUsS0FBSyxFQUFsQiwwQ0FBa0IsQ0FBQztJQUMxQyxNQUFNLEtBQUssR0FBd0I7UUFDakMsS0FBSyxFQUFFLE9BQU87UUFDZCxNQUFNLEVBQUUsUUFBUTtLQUNqQixDQUFDO0lBRUYsT0FBTyxvQkFBQywwQkFBbUIsa0JBQUMsSUFBSSxFQUFFLEtBQUssSUFBTSxLQUFLLEVBQUksQ0FBQztDQUN4RCxDQUFDO0FBRUYsd0JBQWdCLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztBQUU3Qyw0QkFBbUIsQ0FBQyx3QkFBZ0IsRUFBRTtJQUNwQyxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxPQUFPO1FBQ2QsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUM7S0FDN0M7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxXQUFXO1FBQ2xCLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLE9BQU87UUFDZCxNQUFNLEVBQUUsU0FBUyxNQUFNLENBQUMsS0FBSzs7WUFDM0IsT0FBTyxLQUFLLENBQUMsT0FBTyxLQUFLLGVBQWUsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQztTQUN2RTtLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsU0FBUztRQUNoQixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQztLQUNwRDtDQUNGLENBQUMsQ0FBQyJ9

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const CircularProgress_1 = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
const defaultProps = {
    color: 'primary',
    thickness: 4,
    value: 75,
    variant: 'static',
    width: 44,
    height: 44,
};
exports.CircularProgress = (props) => {
    window["__checkBudget__"]();
    const { width, height } = props, other = __rest(props, ["width", "height"]);
    const style = {
        width: 'width',
        height: 'height',
    };
    return React.createElement(CircularProgress_1.default, Object.assign({ size: width }, other));
};
exports.CircularProgress.defaultProps = defaultProps;
framer_1.addPropertyControls(exports.CircularProgress, {
    color: {
        type: framer_1.ControlType.Enum,
        title: 'Color',
        options: ['primary', 'secondary', 'inherit'],
    },
    thickness: {
        type: framer_1.ControlType.Number,
        title: 'Thickness',
        min: 0,
        max: 22,
    },
    value: {
        type: framer_1.ControlType.Number,
        title: 'Value',
        hidden: function hidden(props) {
            window["__checkBudget__"]();
            return props.variant === 'indeterminate' || props.variant === 'query';
        },
    },
    variant: {
        type: framer_1.ControlType.Enum,
        title: 'Variant',
        options: ['determinate', 'indeterminate', 'static'],
    },
});
exports.__info__ = [{ "name": "CircularProgress", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Fab.tsx":
/*!**********************!*\
  !*** ./code/Fab.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9GYWIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBK0I7QUFDL0IsbUNBQTBEO0FBQzFELDBDQUEwQztBQUMxQyxhQUFhO0FBQ2IsK0NBQTJDO0FBQzNDLGlDQUE4QjtBQWU5QixNQUFNLFlBQVksR0FBVTtJQUMxQixLQUFLLEVBQUUsU0FBUztJQUNoQixRQUFRLEVBQUUsS0FBSztJQUNmLElBQUksRUFBRSxPQUFPO0lBQ2IsT0FBTyxFQUFFLE9BQU87SUFDaEIsSUFBSSxFQUFFLEtBQUs7SUFDWCxTQUFTLEVBQUUsUUFBUTtJQUNuQixLQUFLLEVBQUUsVUFBVTtJQUNqQixLQUFLLEVBQUUsRUFBRTtJQUNULE1BQU0sRUFBRSxFQUFFO0NBQ1gsQ0FBQztBQUVXLFFBQUEsR0FBRyxHQUFxQixDQUFDLEtBQVksRUFBRSxFQUFFOztJQUNwRCxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLEtBQWUsS0FBSyxFQUFsQixtRkFBa0IsQ0FBQztJQUMzRSxPQUFPLENBQ0wsb0JBQUMsYUFBTSxrQkFBQyxPQUFPLEVBQUUsT0FBTyxJQUFNLEtBQUs7UUFDakMsb0JBQUMsV0FBSSxJQUNILElBQUksRUFBRSxJQUFJLEVBQ1YsS0FBSyxFQUFFLFNBQVM7WUFDaEIsMENBQTBDO1lBQzFDLGFBQWE7WUFDYixLQUFLLEVBQUUsT0FBTyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FDdkQ7UUFDRCxPQUFPLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDL0IsQ0FDVixDQUFDO0NBQ0gsQ0FBQztBQUVGLFdBQUcsQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0FBRWhDLDRCQUFtQixDQUFDLFdBQUcsRUFBRTtJQUN2QixLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxPQUFPO1FBQ2QsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDO0tBQ3hEO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztRQUN6QixLQUFLLEVBQUUsVUFBVTtLQUNsQjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLE1BQU07UUFDYixPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQztLQUN0QztJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztLQUMvQjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLFlBQVk7UUFDbkIsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQztLQUMvRDtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLE9BQU87S0FDZjtDQUNGLENBQUMsQ0FBQyJ9

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Fab_1 = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
const Icon_1 = __webpack_require__(/*! ./Icon */ "./code/Icon.tsx");
const defaultProps = {
    color: 'default',
    disabled: false,
    size: 'large',
    variant: 'round',
    icon: 'add',
    iconTheme: 'Filled',
    label: 'extended',
    width: 56,
    height: 56,
};
exports.Fab = (props) => {
    window["__checkBudget__"]();
    const { height, icon, label, iconTheme, variant, width } = props, other = __rest(props, ["height", "icon", "label", "iconTheme", "variant", "width"]);
    return (React.createElement(Fab_1.default, Object.assign({ variant: variant }, other),
        React.createElement(Icon_1.Icon, { icon: icon, theme: iconTheme, 
            // tslint:disable-next-line: ban-ts-ignore
            // @ts-ignore
            style: variant === 'extended' ? { marginRight: 8 } : {} }),
        variant === 'extended' ? label : null));
};
exports.Fab.defaultProps = defaultProps;
framer_1.addPropertyControls(exports.Fab, {
    color: {
        type: framer_1.ControlType.Enum,
        title: 'Color',
        options: ['default', 'inherit', 'primary', 'secondary'],
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        title: 'Disabled',
    },
    href: {
        type: framer_1.ControlType.String,
        title: 'Href',
    },
    size: {
        type: framer_1.ControlType.Enum,
        title: 'Size',
        options: ['small', 'medium', 'large'],
    },
    variant: {
        type: framer_1.ControlType.Enum,
        title: 'Variant',
        options: ['round', 'extended'],
    },
    icon: {
        type: framer_1.ControlType.String,
        title: 'Icon',
    },
    iconTheme: {
        type: framer_1.ControlType.Enum,
        title: 'Icon theme',
        options: ['Filled', 'Outlined', 'Rounded', 'TwoTone', 'Sharp'],
    },
    label: {
        type: framer_1.ControlType.String,
        title: 'Label',
    },
});
exports.__info__ = [{ "name": "Fab", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Icon.tsx":
/*!***********************!*\
  !*** ./code/Icon.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvSWNvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQiwrQ0FBc0M7QUFDdEMsbUNBQTBEO0FBQzFELDBDQUEwQztBQUMxQyxhQUFhO0FBQ2IsNENBQTRDO0FBVTVDLE1BQU0sWUFBWSxHQUFVO0lBQzFCLEtBQUssRUFBRSxTQUFTO0lBQ2hCLElBQUksRUFBRSxLQUFLO0lBQ1gsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsRUFBRTtJQUNULE1BQU0sRUFBRSxFQUFFO0NBQ1gsQ0FBQztBQUVXLFFBQUEsSUFBSSxHQUFxQixDQUFDLEtBQVksRUFBRSxFQUFFOztJQUNyRCxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssS0FBZSxLQUFLLEVBQWxCLDJEQUFrQixDQUFDO0lBQ2pFLE1BQU0sUUFBUSxHQUFHLEdBQUcsUUFBUSxJQUFJLHFCQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyRiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUVqRixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsb0JBQUMsSUFBSSxrQkFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQU0sS0FBSyxFQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztDQUNwRSxDQUFDO0FBRUYsWUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7QUFFakMsNEJBQW1CLENBQUMsWUFBSSxFQUFFO0lBQ3hCLEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLE9BQU87UUFDZCxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQztLQUM1RTtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLE9BQU87UUFDZCxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDO0tBQy9EO0NBQ0YsQ0FBQyxDQUFDIn0=

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
const React = __webpack_require__(/*! react */ "react");
const naming_style_1 = __webpack_require__(/*! naming-style */ "naming-style");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Icons = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
const defaultProps = {
    color: 'inherit',
    icon: 'add',
    theme: 'Filled',
    width: 24,
    height: 24,
};
exports.Icon = (props) => {
    window["__checkBudget__"]();
    const { height, icon: iconProp, theme, width } = props, other = __rest(props, ["height", "icon", "theme", "width"]);
    const iconName = `${iconProp && naming_style_1.pascal(iconProp)}${theme === 'Filled' ? '' : theme}`;
    // tslint:disable-next-line: ban-ts-ignore
    // @ts-ignore
    const Icon = Object.keys(Icons).includes(iconName) ? Icons[iconName] : undefined;
    return Icon ? React.createElement(Icon, Object.assign({ style: { width, height } }, other)) : null;
};
exports.Icon.defaultProps = defaultProps;
framer_1.addPropertyControls(exports.Icon, {
    color: {
        type: framer_1.ControlType.Enum,
        title: 'Color',
        options: ['inherit', 'primary', 'secondary', 'action', 'error', 'disabled'],
    },
    icon: {
        type: framer_1.ControlType.String,
        title: 'Icon',
    },
    theme: {
        type: framer_1.ControlType.Enum,
        title: 'Theme',
        options: ['Filled', 'Outlined', 'Rounded', 'TwoTone', 'Sharp'],
    },
});
exports.__info__ = [{ "name": "Icon", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/IconButton.tsx":
/*!*****************************!*\
  !*** ./code/IconButton.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbkJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvSWNvbkJ1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQixtQ0FBMEQ7QUFDMUQsMENBQTBDO0FBQzFDLGFBQWE7QUFDYiw2REFBeUQ7QUFDekQsMENBQTBDO0FBQzFDLGFBQWE7QUFDYixtREFBK0M7QUFDL0MsaUNBQThCO0FBYzlCLE1BQU0sWUFBWSxHQUFVO0lBQzFCLEtBQUssRUFBRSxTQUFTO0lBQ2hCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsVUFBVTtJQUNoQixTQUFTLEVBQUUsUUFBUTtJQUNuQixZQUFZLEVBQUUsRUFBRTtJQUNoQixVQUFVLEVBQUUsU0FBUztJQUNyQixLQUFLLEVBQUUsRUFBRTtJQUNULE1BQU0sRUFBRSxFQUFFO0NBQ1gsQ0FBQztBQUVXLFFBQUEsVUFBVSxHQUFxQixDQUFDLEtBQVksRUFBRSxFQUFFOztJQUMzRCxNQUFNLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEtBQWUsS0FBSyxFQUFsQiw2RkFBa0IsQ0FBQztJQUNyRixNQUFNLFNBQVMsR0FDYixZQUFZLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUNwQixvQkFBQyxXQUFJLElBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxHQUFJLENBQ3ZDLENBQUMsQ0FBQyxDQUFDLENBQ0Ysb0JBQUMsZUFBUSxJQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQVU7UUFDckQsb0JBQUMsV0FBSSxJQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsR0FBSSxDQUM3QixDQUNaLENBQUM7SUFFSixPQUFPLG9CQUFDLG9CQUFhLG9CQUFLLEtBQUssR0FBRyxTQUFTLENBQWlCLENBQUM7Q0FDOUQsQ0FBQztBQUVGLGtCQUFVLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztBQUV2Qyw0QkFBbUIsQ0FBQyxrQkFBVSxFQUFFO0lBQzlCLEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLE9BQU87UUFDZCxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUM7S0FDeEQ7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxVQUFVO0tBQ2xCO0lBQ0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsTUFBTTtRQUNiLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7S0FDN0I7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxNQUFNO0tBQ2Q7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxZQUFZO1FBQ25CLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUM7S0FDL0Q7SUFDRCxZQUFZLEVBQUU7UUFDWixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxlQUFlO0tBQ3ZCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsYUFBYTtRQUNwQixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUM7S0FDdEQ7Q0FDRixDQUFDLENBQUMifQ==

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const IconButton_1 = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Badge_1 = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
const Icon_1 = __webpack_require__(/*! ./Icon */ "./code/Icon.tsx");
const defaultProps = {
    color: 'default',
    disabled: false,
    size: 'medium',
    icon: 'favorite',
    iconTheme: 'Filled',
    badgeContent: '',
    badgeColor: 'default',
    width: 48,
    height: 48,
};
exports.IconButton = (props) => {
    window["__checkBudget__"]();
    const { badgeColor, badgeContent, height, icon, iconTheme, width } = props, other = __rest(props, ["badgeColor", "badgeContent", "height", "icon", "iconTheme", "width"]);
    const IconBadge = badgeContent === '' ? (React.createElement(Icon_1.Icon, { icon: icon, theme: iconTheme })) : (React.createElement(Badge_1.default, { badgeContent: badgeContent, color: badgeColor },
        React.createElement(Icon_1.Icon, { icon: icon, theme: iconTheme })));
    return React.createElement(IconButton_1.default, Object.assign({}, other), IconBadge);
};
exports.IconButton.defaultProps = defaultProps;
framer_1.addPropertyControls(exports.IconButton, {
    color: {
        type: framer_1.ControlType.Enum,
        title: 'Color',
        options: ['default', 'inherit', 'primary', 'secondary'],
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        title: 'Disabled',
    },
    size: {
        type: framer_1.ControlType.Enum,
        title: 'Size',
        options: ['small', 'medium'],
    },
    icon: {
        type: framer_1.ControlType.String,
        title: 'Icon',
    },
    iconTheme: {
        type: framer_1.ControlType.Enum,
        title: 'Icon theme',
        options: ['Filled', 'Outlined', 'Rounded', 'TwoTone', 'Sharp'],
    },
    badgeContent: {
        type: framer_1.ControlType.String,
        title: 'Badge content',
    },
    badgeColor: {
        type: framer_1.ControlType.Enum,
        title: 'Badge color',
        options: ['default', 'primary', 'secondary', 'error'],
    },
});
exports.__info__ = [{ "name": "IconButton", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/LinearProgress.tsx":
/*!*********************************!*\
  !*** ./code/LinearProgress.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGluZWFyUHJvZ3Jlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0xpbmVhclByb2dyZXNzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQStCO0FBQy9CLG1DQUEwRDtBQUMxRCwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiLHFFQUFpRTtBQVdqRSxNQUFNLFlBQVksR0FBVTtJQUMxQixLQUFLLEVBQUUsU0FBUztJQUNoQixLQUFLLEVBQUUsRUFBRTtJQUNULFdBQVcsRUFBRSxFQUFFO0lBQ2YsT0FBTyxFQUFFLGFBQWE7SUFDdEIsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsQ0FBQztDQUNWLENBQUM7QUFFVyxRQUFBLGNBQWMsR0FBcUIsQ0FBQyxLQUFZLEVBQUUsRUFBRTs7SUFDL0QsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEtBQWUsS0FBSyxFQUFsQiwwQ0FBa0IsQ0FBQztJQUMxQyxNQUFNLEtBQUssR0FBd0IsRUFBRSxDQUFDO0lBRXRDLE9BQU8sb0JBQUMsd0JBQWlCLGtCQUFDLEtBQUssRUFBRSxLQUFLLElBQU0sS0FBSyxFQUFJLENBQUM7Q0FDdkQsQ0FBQztBQUVGLHNCQUFjLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztBQUUzQyw0QkFBbUIsQ0FBQyxzQkFBYyxFQUFFO0lBQ2xDLEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLE9BQU87UUFDZCxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDO0tBQ2xDO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixLQUFLLEVBQUUsT0FBTztRQUNkLE1BQU0sRUFBRSxTQUFTLE1BQU0sQ0FBQyxLQUFLOztZQUMzQixPQUFPLEtBQUssQ0FBQyxPQUFPLEtBQUssZUFBZSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDO1NBQ3ZFO0tBQ0Y7SUFDRCxXQUFXLEVBQUU7UUFDWCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxjQUFjO1FBQ3JCLE1BQU0sRUFBRSxTQUFTLE1BQU0sQ0FBQyxLQUFLOztZQUMzQixPQUFPLEtBQUssQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDO1NBQ25DO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQztLQUM3RDtDQUNGLENBQUMsQ0FBQyJ9

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const LinearProgress_1 = __webpack_require__(/*! @material-ui/core/LinearProgress */ "@material-ui/core/LinearProgress");
const defaultProps = {
    color: 'primary',
    value: 75,
    valueBuffer: 75,
    variant: 'determinate',
    width: 200,
    height: 5,
};
exports.LinearProgress = (props) => {
    window["__checkBudget__"]();
    const { width, height } = props, other = __rest(props, ["width", "height"]);
    const style = {};
    return React.createElement(LinearProgress_1.default, Object.assign({ style: style }, other));
};
exports.LinearProgress.defaultProps = defaultProps;
framer_1.addPropertyControls(exports.LinearProgress, {
    color: {
        type: framer_1.ControlType.Enum,
        title: 'Color',
        options: ['primary', 'secondary'],
    },
    value: {
        type: framer_1.ControlType.Number,
        title: 'Value',
        hidden: function hidden(props) {
            window["__checkBudget__"]();
            return props.variant === 'indeterminate' || props.variant === 'query';
        },
    },
    valueBuffer: {
        type: framer_1.ControlType.Number,
        title: 'Value buffer',
        hidden: function hidden(props) {
            window["__checkBudget__"]();
            return props.variant !== 'buffer';
        },
    },
    variant: {
        type: framer_1.ControlType.Enum,
        title: 'Variant',
        options: ['determinate', 'indeterminate', 'buffer', 'query'],
    },
});
exports.__info__ = [{ "name": "LinearProgress", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/List.tsx":
/*!***********************!*\
  !*** ./code/List.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvTGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQixtQ0FBeUU7QUFDekUseUNBQXNDO0FBc0J0QyxNQUFNLFlBQVksR0FBVTtJQUMxQixVQUFVLEVBQUUsUUFBUTtJQUNwQixTQUFTLEVBQUUsS0FBSztJQUNoQixLQUFLLEVBQUUsS0FBSztJQUNaLFFBQVEsRUFBRSxLQUFLO0lBQ2YsY0FBYyxFQUFFLEtBQUs7SUFDckIsT0FBTyxFQUFFLEtBQUs7SUFDZCxLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxHQUFHO0lBQ1gsS0FBSyxFQUFFLEtBQUs7SUFDWixNQUFNLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLEVBQUUsU0FBUyxDQUFDO0lBQ3pELGVBQWUsRUFBRTtRQUNmLGtEQUFrRDtRQUNsRCw4Q0FBOEM7UUFDOUMsbURBQW1EO0tBQ3BEO0lBQ0QsYUFBYSxFQUFFLE1BQU07SUFDckIsV0FBVyxFQUFFLE1BQU07SUFDbkIsU0FBUyxFQUFFLEVBQUU7SUFDYixRQUFRLEVBQUUsRUFBRTtJQUNaLGFBQWEsRUFBRSxFQUFFO0NBQ2xCLENBQUM7QUFFVyxRQUFBLElBQUksR0FBcUIsQ0FBQyxLQUFZLEVBQUUsRUFBRTs7SUFDckQsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLEtBQUssS0FBZSxLQUFLLEVBQWxCLHVFQUFrQixDQUFDO0lBRW5FLE9BQU8sQ0FDTCxvQkFBQyxlQUFNLElBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTTtRQUNsQyxvQkFBQyxjQUFLLElBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxJQUNwQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FDNUIsb0JBQUMs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

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const ListItem_1 = __webpack_require__(/*! ./ListItem */ "./code/ListItem.tsx");
const defaultProps = {
    alignItems: 'center',
    autoFocus: false,
    dense: false,
    disabled: false,
    disableGutters: false,
    divider: false,
    width: 568,
    height: 300,
    inset: false,
    labels: ['Brunch this weekend?', 'Summer BBQ', 'Oui Oui'],
    secondaryLabels: [
        "I'll be in your neighborhood doing errands this…",
        "Wish I could come, but I'm out of town this…",
        'Do you have Paris recommendations? Have you ever…',
    ],
    primaryAction: 'icon',
    primaryIcon: 'star',
    imageFile: '',
    imageUrl: '',
    secondaryIcon: '',
};
exports.List = (props) => {
    window["__checkBudget__"]();
    const { height, labels, secondaryLabels, width } = props, other = __rest(props, ["height", "labels", "secondaryLabels", "width"]);
    return (React.createElement(framer_1.Scroll, { width: width, height: height },
        React.createElement(framer_1.Frame, { background: "white", height: "100%" }, labels.map((label, index) => (React.createElement(ListItem_1.ListItem, Object.assign({ key: label, label: label, secondaryLabel: secondaryLabels[index] }, other)))))));
    return React.createElement(ListItem_1.ListItem, Object.assign({}, other));
};
exports.List.defaultProps = defaultProps;
framer_1.addPropertyControls(exports.List, {
    alignItems: {
        type: framer_1.ControlType.Enum,
        title: 'Align items',
        options: ['flex-start', 'center'],
    },
    autoFocus: {
        type: framer_1.ControlType.Boolean,
        title: 'Auto focus',
    },
    dense: {
        type: framer_1.ControlType.Boolean,
        title: 'Dense',
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        title: 'Disabled',
    },
    disableGutters: {
        type: framer_1.ControlType.Boolean,
        title: 'Disable gutters',
    },
    divider: {
        type: framer_1.ControlType.Boolean,
        title: 'Divider',
    },
    inset: {
        type: framer_1.ControlType.Boolean,
        title: 'Inset',
    },
    primaryAction: {
        type: framer_1.ControlType.Enum,
        title: 'Primary action',
        options: ['none', 'icon', 'avatar', 'checkbox'],
    },
    primaryIcon: {
        type: framer_1.ControlType.String,
        title: 'Primary icon',
        hidden: function hidden(props) {
            window["__checkBudget__"]();
            return ((props.primaryAction !== 'icon' && props.primaryAction !== 'avatar') ||
                props.imageFile !== '' ||
                props.imageUrl !== '');
        },
    },
    imageFile: {
        type: framer_1.ControlType.Image,
        title: 'Image File',
        hidden: function hidden(props) {
            window["__checkBudget__"]();
            return props.primaryAction && props.primaryAction !== 'avatar';
        },
    },
    imageUrl: {
        type: framer_1.ControlType.String,
        title: 'Image URL',
        hidden: function hidden(props) {
            window["__checkBudget__"]();
            return props.imageFile !== '' || (props.primaryAction && props.primaryAction !== 'avatar');
        },
    },
    secondaryAction: {
        type: framer_1.ControlType.Enum,
        title: 'Secondary action',
        options: ['none', 'icon', 'iconButton', 'checkbox', 'switch'],
    },
    secondaryIcon: {
        type: framer_1.ControlType.String,
        title: 'Secondary icon',
        hidden: function hidden(props) {
            window["__checkBudget__"]();
            return props.secondaryAction !== 'icon' && props.secondaryAction !== 'iconButton';
        },
    },
    labels: {
        type: framer_1.ControlType.Array,
        title: 'Labels',
        propertyControl: { type: framer_1.ControlType.String },
    },
    secondaryLabels: {
        type: framer_1.ControlType.Array,
        title: 'Secondary labels',
        propertyControl: { type: framer_1.ControlType.String },
    },
});
exports.__info__ = [{ "name": "List", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/ListItem.tsx":
/*!***************************!*\
  !*** ./code/ListItem.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdEl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0xpc3RJdGVtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQStCO0FBQy9CLG1DQUEwRDtBQUMxRCwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiLHlEQUFxRDtBQUNyRCwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiLGlFQUE2RDtBQUM3RCwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiLHFFQUFpRTtBQUlqRSwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiLGlFQUE2RDtBQUM3RCxxQ0FBa0M7QUFDbEMsMENBQTBDO0FBQzFDLGFBQWE7QUFDYix5REFBcUQ7QUFDckQsMENBQTBDO0FBQzFDLGFBQWE7QUFDYixxREFBaUQ7QUFDakQsaUNBQThCO0FBQzlCLDZDQUEwQztBQXdCMUMsTUFBTSxZQUFZLEdBQVU7SUFDMUIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsU0FBUyxFQUFFLEtBQUs7SUFDaEIsTUFBTSxFQUFFLEtBQUs7SUFDYixLQUFLLEVBQUUsS0FBSztJQUNaLFFBQVEsRUFBRSxLQUFLO0lBQ2YsY0FBYyxFQUFFLEtBQUs7SUFDckIsT0FBTyxFQUFFLEtBQUs7SUFDZCxRQUFRLEVBQUUsS0FBSztJQUNmLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLEVBQUU7SUFDVixLQUFLLEVBQUUsS0FBSztJQUNaLEtBQUssRUFBRSxlQUFlO0lBQ3RCLGNBQWMsRUFBRSxFQUFFO0lBQ2xCLGFBQWEsRUFBRSxNQUFNO0lBQ3JCLFdBQVcsRUFBRSxNQUFNO0lBQ25CLFNBQVMsRUFBRSxFQUFFO0lBQ2IsUUFBUSxFQUFFLEVBQUU7SUFDWixhQUFhLEVBQUUsRUFBRTtDQUNsQixDQUFDO0FBRVcsUUFBQSxRQUFRLEdBQXFCLENBQUMsS0FBWSxFQUFFLEVBQUU7O0lBQ3pELE1BQU0sRUFDSixNQUFNLEVBQ04sU0FBUyxFQUNULFFBQVEsRUFDUixLQUFLLEVBQ0ws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

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const ListItem_1 = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const ListItemIcon_1 = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const ListItemAvatar_1 = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "@material-ui/core/ListItemAvatar");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const ListItemText_1 = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
const Avatar_1 = __webpack_require__(/*! ./Avatar */ "./code/Avatar.tsx");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Checkbox_1 = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Switch_1 = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
const Icon_1 = __webpack_require__(/*! ./Icon */ "./code/Icon.tsx");
const IconButton_1 = __webpack_require__(/*! ./IconButton */ "./code/IconButton.tsx");
const defaultProps = {
    alignItems: 'center',
    autoFocus: false,
    button: false,
    dense: false,
    disabled: false,
    disableGutters: false,
    divider: false,
    selected: false,
    width: 568,
    height: 48,
    inset: false,
    label: 'Primary label',
    secondaryLabel: '',
    primaryAction: 'icon',
    primaryIcon: 'star',
    imageFile: '',
    imageUrl: '',
    secondaryIcon: '',
};
exports.ListItem = (props) => {
    window["__checkBudget__"]();
    const { height, imageFile, imageUrl, inset, label, primaryAction, primaryIcon, secondaryAction, secondaryIcon, secondaryLabel, width } = props, other = __rest(props, ["height", "imageFile", "imageUrl", "inset", "label", "primaryAction", "primaryIcon", "secondaryAction", "secondaryIcon", "secondaryLabel", "width"]);
    let primary = null;
    let secondary = null;
    switch (primaryAction) {
        case 'icon':
            primary = (React.createElement(ListItemIcon_1.default, null,
                React.createElement(Icon_1.Icon, { icon: primaryIcon })));
            break;
        case 'avatar':
            primary = (React.createElement(ListItemAvatar_1.default, null,
                React.createElement(Avatar_1.Avatar, { icon: primaryIcon, imageFile: imageFile, imageUrl: imageUrl })));
            break;
        case 'checkbox':
            primary = (React.createElement(ListItemIcon_1.default, null,
                React.createElement(Checkbox_1.default, { edge: "start" })));
            break;
    }
    switch (secondaryAction) {
        case 'iconButton':
            secondary = React.createElement(IconButton_1.IconButton, { icon: secondaryIcon, edge: "end" });
            break;
        case 'checkbox':
            secondary = React.createElement(Checkbox_1.default, { edge: "end" });
            break;
        case 'switch':
            secondary = React.createElement(Switch_1.default, { edge: "end" });
            break;
    }
    return (React.createElement(ListItem_1.default, Object.assign({}, other),
        primary,
        React.createElement(ListItemText_1.default, { inset: inset, primary: label, secondary: secondaryLabel ? secondaryLabel : undefined }),
        secondary));
};
exports.ListItem.defaultProps = defaultProps;
framer_1.addPropertyControls(exports.ListItem, {
    alignItems: {
        type: framer_1.ControlType.Enum,
        title: 'Align items',
        options: ['flex-start', 'center'],
    },
    autoFocus: {
        type: framer_1.ControlType.Boolean,
        title: 'Auto focus',
    },
    button: {
        type: framer_1.ControlType.Boolean,
        title: 'Button',
    },
    dense: {
        type: framer_1.ControlType.Boolean,
        title: 'Dense',
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        title: 'Disabled',
    },
    disableGutters: {
        type: framer_1.ControlType.Boolean,
        title: 'Disable gutters',
    },
    divider: {
        type: framer_1.ControlType.Boolean,
        title: 'Divider',
    },
    selected: {
        type: framer_1.ControlType.Boolean,
        title: 'Selected',
    },
    inset: {
        type: framer_1.ControlType.Boolean,
        title: 'Inset',
    },
    label: {
        type: framer_1.ControlType.String,
        title: 'Label',
    },
    secondaryLabel: {
        type: framer_1.ControlType.String,
        title: 'Secondary label',
    },
    primaryAction: {
        type: framer_1.ControlType.Enum,
        title: 'Primary action',
        options: ['none', 'icon', 'avatar', 'checkbox'],
    },
    primaryIcon: {
        type: framer_1.ControlType.String,
        title: 'Primary icon',
        hidden: function hidden(props) {
            window["__checkBudget__"]();
            return ((props.primaryAction !== 'icon' && props.primaryAction !== 'avatar') ||
                props.imageFile !== '' ||
                props.imageUrl !== '');
        },
    },
    imageFile: {
        type: framer_1.ControlType.Image,
        title: 'Image File',
        hidden: function hidden(props) {
            window["__checkBudget__"]();
            return props.primaryAction && props.primaryAction !== 'avatar';
        },
    },
    imageUrl: {
        type: framer_1.ControlType.String,
        title: 'Image URL',
        hidden: function hidden(props) {
            window["__checkBudget__"]();
            return props.imageFile !== '' || (props.primaryAction && props.primaryAction !== 'avatar');
        },
    },
    secondaryAction: {
        type: framer_1.ControlType.Enum,
        title: 'Secondary action',
        options: ['none', 'iconButton', 'checkbox', 'switch'],
    },
    secondaryIcon: {
        type: framer_1.ControlType.String,
        title: 'Secondary icon',
        hidden: function hidden(props) {
            window["__checkBudget__"]();
            return props.secondaryAction !== 'icon' && props.secondaryAction !== 'iconButton';
        },
    },
});
exports.__info__ = [{ "name": "ListItem", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/MediaCard.tsx":
/*!****************************!*\
  !*** ./code/MediaCard.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFDYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9NZWRpYUNhcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBK0I7QUFDL0IsbUNBQXVEO0FBQ3ZELDBDQUEwQztBQUMxQyxhQUFhO0FBQ2IsaURBQTBDO0FBQzFDLDBDQUEwQztBQUMxQyxhQUFhO0FBQ2IscUVBQThEO0FBQzlELDBDQUEwQztBQUMxQyxhQUFhO0FBQ2IsK0RBQXdEO0FBQ3hELDBDQUEwQztBQUMxQyxhQUFhO0FBQ2IsK0RBQXdEO0FBQ3hELDBDQUEwQztBQUMxQyxhQUFhO0FBQ2IsMkRBQW9EO0FBQ3BELDBDQUEwQztBQUMxQyxhQUFhO0FBQ2IscURBQWlEO0FBQ2pELDBDQUEwQztBQUMxQyxhQUFhO0FBQ2IsNkRBQXlEO0FBQ3pELDZDQUEwQztBQWUxQyxNQUFhLFNBQVUsU0FBUSxLQUFLLENBQUMsU0FBZ0I7SUFrRG5ELE1BQU07O1FBQ0osTUFBTSxlQVdRLEVBWFIsRUFDSixPQUFPLEVBQ1AsT0FBTyxFQUNQLElBQUksRUFDSixLQUFLLEVBQ0wsS0FBSyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBQ1IsUUFBUSxFQUNSLEtBQUssT0FFTyxFQURaLGtIQUNZLENBQUM7UUFFZixPQUFPLENBQ0wsb0JBQUMsY0FBSSxvQkFBSyxLQUFLO1lBQ2Isb0JBQUMsd0JBQWM7Z0JBQ1osQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLElBQUksQ0FDMUIsb0JBQUMsbUJBQVMsSUFDUixLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEVBQy9CLEtBQUssRUFBRSxTQUFTLElBQUksUUFBUSxFQUM1QixLQUFLLEVBQUUsS0FBSyxHQUNaLENBQ0g7Z0JBQ0Qsb0JBQUMscUJBQVc7b0JBQ1QsS0FBSyxJQUFJLENBQ1Isb0JBQUMsb0JBQWEsSUFBQyxZQUFZLFFBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMs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

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Card_1 = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const CardActionArea_1 = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const CardActions_1 = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const CardContent_1 = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const CardMedia_1 = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Button_1 = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Typography_1 = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
const IconButton_1 = __webpack_require__(/*! ./IconButton */ "./code/IconButton.tsx");
class MediaCard extends React.Component {
    render() {
        window["__checkBudget__"]();
        const _a = this.props, { action1, action2, body, icon1, icon2, imageFile, imageUrl, subtitle, title } = _a, other = __rest(_a, ["action1", "action2", "body", "icon1", "icon2", "imageFile", "imageUrl", "subtitle", "title"]);
        return (React.createElement(Card_1.default, Object.assign({}, other),
            React.createElement(CardActionArea_1.default, null,
                (imageFile || imageUrl) && (React.createElement(CardMedia_1.default, { style: { paddingTop: '56.25%' }, image: imageFile || imageUrl, title: title })),
                React.createElement(CardContent_1.default, null,
                    title && (React.createElement(Typography_1.default, { gutterBottom: true, variant: "h5", component: "h2" }, title)),
                    subtitle && (React.createElement(Typography_1.default, { gutterBottom: true, variant: "subtitle1", color: "textSecondary" }, subtitle)),
                    body && (React.createElement(Typography_1.default, { component: "p", color: "textPrimary" }, body)))),
            (action1 !== '' || icon1 !== '') && (React.createElement(CardActions_1.default, null,
                action1 !== '' && (React.createElement(Button_1.default, { size: "small", color: "primary" }, action1)),
                action2 !== '' && (React.createElement(Button_1.default, { size: "small", color: "primary" }, action2)),
                React.createElement("div", { style: { flex: 1 } }),
                icon1 !== '' && React.createElement(IconButton_1.IconButton, { icon: icon1 }),
                icon2 !== '' && React.createElement(IconButton_1.IconButton, { icon: icon2 })))));
    }
}
exports.MediaCard = MediaCard;
// Set default properties
MediaCard.defaultProps = {
    width: 300,
    height: 230,
    action1: 'View',
    imageFile: '',
    imageUrl: 'https://source.unsplash.com/random/320x180?laptop',
    title: 'Material Improvement',
    subtitle: 'by Laura Philips',
    body: "Discover how Material-UI, the leading React Material Design component library, can help to improve your users' experience.",
    icon1: 'share',
    icon2: 'more_vert',
};
// Items shown in property panel
MediaCard.propertyControls = {
    imageFile: {
        type: framer_1.ControlType.Image,
        title: 'Image file',
    },
    imageUrl: {
        type: framer_1.ControlType.String,
        title: 'Image URL',
        hidden(props) {
            window["__checkBudget__"]();
            return props.imageFile !== '';
        },
    },
    title: { type: framer_1.ControlType.String, title: 'Title' },
    subtitle: { type: framer_1.ControlType.String, title: 'Subtitle' },
    body: { type: framer_1.ControlType.String, title: 'Body text' },
    action1: { type: framer_1.ControlType.String, title: 'Action one' },
    action2: {
        type: framer_1.ControlType.String,
        title: 'Action two',
        hidden(props) {
            window["__checkBudget__"]();
            return props.action1 === '' && props.action2 === '';
        },
    },
    icon1: { type: framer_1.ControlType.String, title: 'Icon one' },
    icon2: {
        type: framer_1.ControlType.String,
        title: 'Icon two',
        hidden(props) {
            window["__checkBudget__"]();
            return props.icon1 === '' && props.icon2;
        },
    },
};
exports.__info__ = [{ "name": "MediaCard", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Paper.tsx":
/*!************************!*\
  !*** ./code/Paper.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1BhcGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQStCO0FBQy9CLG1DQUEwRDtBQUMxRCwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiLG1EQUErQztBQVUvQyxNQUFNLFlBQVksR0FBVTtJQUMxQixTQUFTLEVBQUUsQ0FBQztJQUNaLE1BQU0sRUFBRSxLQUFLO0lBQ2IsT0FBTyxFQUFFLFdBQVc7SUFDcEIsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsR0FBRztDQUNaLENBQUM7QUFFVyxRQUFBLEtBQUssR0FBcUIsQ0FBQyxLQUFZLEVBQUUsRUFBRTs7SUFDdEQsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEtBQWUsS0FBSyxFQUFsQiwwQ0FBa0IsQ0FBQztJQUUxQyxPQUFPLG9CQUFDLGVBQVEsa0JBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFNLEtBQUssRUFBSSxDQUFDO0NBQzFELENBQUM7QUFFRixhQUFLLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztBQUVsQyw0QkFBbUIsQ0FBQyxhQUFLLEVBQUU7SUFDekIsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixLQUFLLEVBQUUsV0FBVztRQUNsQixHQUFHLEVBQUUsQ0FBQztRQUNOLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxRQUFRO0tBQ2hCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsU0FBUztRQUNoQixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDO0tBQ25DO0NBQ0YsQ0FBQyxDQUFDIn0=

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Paper_1 = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
const defaultProps = {
    elevation: 2,
    square: false,
    variant: 'elevation',
    width: 100,
    height: 100,
};
exports.Paper = (props) => {
    window["__checkBudget__"]();
    const { width, height } = props, other = __rest(props, ["width", "height"]);
    return React.createElement(Paper_1.default, Object.assign({ style: { width, height } }, other));
};
exports.Paper.defaultProps = defaultProps;
framer_1.addPropertyControls(exports.Paper, {
    elevation: {
        type: framer_1.ControlType.Number,
        title: 'Elevation',
        min: 0,
        max: 24,
    },
    square: {
        type: framer_1.ControlType.Boolean,
        title: 'Square',
    },
    variant: {
        type: framer_1.ControlType.Enum,
        title: 'Variant',
        options: ['elevation', 'outlined'],
    },
});
exports.__info__ = [{ "name": "Paper", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Radio.tsx":
/*!************************!*\
  !*** ./code/Radio.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1JhZGlvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQStCO0FBQy9CLG1DQUEwRDtBQUMxRCwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiLHlFQUFrRTtBQUNsRSwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiLG1EQUErQztBQVcvQyxTQUFnQixLQUFLLENBQUMsS0FBSzs7SUFDekIsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQWUsS0FBSyxFQUFsQix3Q0FBa0IsQ0FBQztJQUV4QyxPQUFPLG9CQUFDLDBCQUFnQixrQkFBQyxPQUFPLEVBQUUsb0JBQUMsZUFBUSxJQUFDLElBQUksRUFBRSxJQUFJLEdBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxJQUFNLEtBQUssRUFBSSxDQUFDO0NBQ3pGO0FBSkQsc0JBSUM7QUFFRCxLQUFLLENBQUMsWUFBWSxHQUFHO0lBQ25CLEtBQUssRUFBRSxXQUFXO0lBQ2xCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsT0FBTztJQUNkLEtBQUssRUFBRSxNQUFNO0lBQ2IsTUFBTSxFQUFFLEVBQUU7Q0FDWCxDQUFDO0FBRUYsNEJBQW1CLENBQUMsS0FBSyxFQUFFO0lBQ3pCLEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLE9BQU87UUFDZCxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQztLQUM3QztJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsS0FBSyxFQUFFLFVBQVU7S0FDbEI7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxNQUFNO1FBQ2IsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztLQUM3QjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLE9BQU87S0FDZjtDQUNGLENBQUMsQ0FBQyJ9

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const FormControlLabel_1 = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Radio_1 = __webpack_require__(/*! @material-ui/core/Radio */ "@material-ui/core/Radio");
function Radio(props) {
    window["__checkBudget__"]();
    const { label, size } = props, other = __rest(props, ["label", "size"]);
    return React.createElement(FormControlLabel_1.default, Object.assign({ control: React.createElement(Radio_1.default, { size: size }), label: label }, other));
}
exports.Radio = Radio;
Radio.defaultProps = {
    color: 'secondary',
    disabled: false,
    size: 'medium',
    label: 'Radio',
    width: '100%',
    height: 42,
};
framer_1.addPropertyControls(Radio, {
    color: {
        type: framer_1.ControlType.Enum,
        title: 'Color',
        options: ['primary', 'secondary', 'default'],
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        title: 'Disabled',
    },
    size: {
        type: framer_1.ControlType.Enum,
        title: 'Size',
        options: ['small', 'medium'],
    },
    label: {
        type: framer_1.ControlType.String,
        title: 'Label',
    },
});
exports.__info__ = [{ "name": "Radio", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/RadioGroup.tsx":
/*!*****************************!*\
  !*** ./code/RadioGroup.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW9Hcm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvUmFkaW9Hcm91cC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQixtQ0FBMEQ7QUFDMUQsMENBQTBDO0FBQzFDLGFBQWE7QUFDYiw2REFBeUQ7QUFJekQsMENBQTBDO0FBQzFDLGFBQWE7QUFDYiwyREFBdUQ7QUFDdkQsbUNBQWdDO0FBRWhDLFNBQWdCLFVBQVUsQ0FBQyxLQUFLOztJQUM5QixNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sS0FBZSxLQUFLLEVBQWxCLDBDQUFrQixDQUFDO0lBRTFDLE9BQU8sQ0FDTCw2QkFBSyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1FBQ3hCLG9CQUFDLG1CQUFZLElBQUMsU0FBUyxFQUFDLFFBQVEsSUFBRSxLQUFLLENBQWdCO1FBQ3ZELG9CQUFDLG9CQUFhLGtCQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFNLEtBQUssR0FDM0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTs7WUFDdkIsT0FBTyxvQkFBQyxhQUFLLElBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEdBQUksQ0FBQztTQUN6RSxDQUFDLENBQ1ksQ0FDWixDQUNQLENBQUM7Q0FDSDtBQWJELGdDQWFDO0FBRUQsVUFBVSxDQUFDLFlBQVksR0FBRztJQUN4QixNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQztJQUN2QyxLQUFLLEVBQUUsYUFBYTtJQUNwQixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxHQUFHO0NBQ1osQ0FBQztBQUVGLDRCQUFtQixDQUFDLFVBQVUsRUFBRTtJQUM5QixNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQ3ZCLEtBQUssRUFBRSxRQUFRO1FBQ2YsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFO0tBQzlDO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixLQUFLLEVBQUUsT0FBTztLQUNmO0NBQ0YsQ0FBQyxDQUFDIn0=

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const RadioGroup_1 = __webpack_require__(/*! @material-ui/core/RadioGroup */ "@material-ui/core/RadioGroup");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const FormLabel_1 = __webpack_require__(/*! @material-ui/core/FormLabel */ "@material-ui/core/FormLabel");
const Radio_1 = __webpack_require__(/*! ./Radio */ "./code/Radio.tsx");
function RadioGroup(props) {
    window["__checkBudget__"]();
    const { label, labels } = props, other = __rest(props, ["label", "labels"]);
    return (React.createElement("div", { style: { margin: 16 } },
        React.createElement(FormLabel_1.default, { component: "legend" }, label),
        React.createElement(RadioGroup_1.default, Object.assign({ defaultValue: labels[0], style: { marginTop: '8px' } }, other), labels.map(radioLabel => {
            window["__checkBudget__"]();
            return React.createElement(Radio_1.Radio, { key: radioLabel, value: radioLabel, label: radioLabel });
        }))));
}
exports.RadioGroup = RadioGroup;
RadioGroup.defaultProps = {
    labels: ['Paris', 'New York', 'London'],
    label: 'Radio group',
    width: 160,
    height: 180,
};
framer_1.addPropertyControls(RadioGroup, {
    labels: {
        type: framer_1.ControlType.Array,
        title: 'Labels',
        propertyControl: { type: framer_1.ControlType.String },
    },
    label: {
        type: framer_1.ControlType.String,
        title: 'Label',
    },
});
exports.__info__ = [{ "name": "RadioGroup", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Slider.tsx":
/*!*************************!*\
  !*** ./code/Slider.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9TbGlkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBK0I7QUFDL0IsbUNBQTBEO0FBQzFELDBDQUEwQztBQUMxQyxhQUFhO0FBQ2IscURBQWlEO0FBZWpELE1BQU0sWUFBWSxHQUFVO0lBQzFCLEtBQUssRUFBRSxTQUFTO0lBQ2hCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsQ0FBQztJQUNOLFdBQVcsRUFBRSxZQUFZO0lBQ3pCLElBQUksRUFBRSxDQUFDO0lBQ1AsS0FBSyxFQUFFLFFBQVE7SUFDZixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLEVBQUU7Q0FDWCxDQUFDO0FBRVcsUUFBQSxNQUFNLEdBQXFCLENBQUMsS0FBWSxFQUFFLEVBQUU7O0lBQ3ZELE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxLQUFlLEtBQUssRUFBbEIsMENBQWtCLENBQUM7SUFDMUMsT0FBTyxvQkFBQyxnQkFBUyxvQkFBSyxLQUFLLEVBQUksQ0FBQztDQUNqQyxDQUFDO0FBRUYsY0FBTSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7QUFFbkMsNEJBQW1CLENBQUMsY0FBTSxFQUFFO0lBQzFCLEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLE9BQU87UUFDZCxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDO0tBQ2xDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztRQUN6QixLQUFLLEVBQUUsVUFBVTtLQUNsQjtJQUNELEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLEtBQUs7S0FDYjtJQUNELEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLEtBQUs7S0FDYjtJQUNELFdBQVcsRUFBRTtRQUNYLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLGFBQWE7UUFDcEIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQztLQUNwQztJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLE9BQU87UUFDZCxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQztLQUN2QztJQUNELGlCQUFpQixFQUFFO1FBQ2pCLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLHFCQUFxQjtRQUM1QixPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQztLQUMvQjtDQUNGLENBQUMsQ0FBQyJ9

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Slider_1 = __webpack_require__(/*! @material-ui/core/Slider */ "@material-ui/core/Slider");
const defaultProps = {
    color: 'primary',
    disabled: false,
    max: 100,
    min: 0,
    orientation: 'horizontal',
    step: 1,
    track: 'normal',
    valueLabelDisplay: 'off',
    width: 160,
    height: 24,
};
exports.Slider = (props) => {
    window["__checkBudget__"]();
    const { width, height } = props, other = __rest(props, ["width", "height"]);
    return React.createElement(Slider_1.default, Object.assign({}, other));
};
exports.Slider.defaultProps = defaultProps;
framer_1.addPropertyControls(exports.Slider, {
    color: {
        type: framer_1.ControlType.Enum,
        title: 'Color',
        options: ['primary', 'secondary'],
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        title: 'Disabled',
    },
    max: {
        type: framer_1.ControlType.Number,
        title: 'Max',
    },
    min: {
        type: framer_1.ControlType.Number,
        title: 'Min',
    },
    orientation: {
        type: framer_1.ControlType.Enum,
        title: 'Orientation',
        options: ['horizontal', 'vertical'],
    },
    step: {
        type: framer_1.ControlType.Number,
        title: 'Step',
    },
    track: {
        type: framer_1.ControlType.Enum,
        title: 'Track',
        options: ['normal', false, 'inverted'],
    },
    valueLabelDisplay: {
        type: framer_1.ControlType.Enum,
        title: 'Value label display',
        options: ['on', 'auto', 'off'],
    },
});
exports.__info__ = [{ "name": "Slider", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/SnackbarContent.tsx":
/*!**********************************!*\
  !*** ./code/SnackbarContent.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU25hY2tiYXJDb250ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9TbmFja2JhckNvbnRlbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBK0I7QUFDL0IsbUNBQTBEO0FBQzFELDBDQUEwQztBQUMxQyxhQUFhO0FBQ2IsdUVBQW1FO0FBQ25FLDBDQUEwQztBQUMxQyxhQUFhO0FBQ2IscURBQWlEO0FBU2pELE1BQU0sWUFBWSxHQUFVO0lBQzFCLE9BQU8sRUFBRSxnREFBZ0Q7SUFDekQsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsRUFBRTtJQUNWLEtBQUssRUFBRSxhQUFhO0NBQ3JCLENBQUM7QUFFVyxRQUFBLGVBQWUsR0FBcUIsQ0FBQyxLQUFZLEVBQUUsRUFBRTs7SUFDaEUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxLQUFlLEtBQUssRUFBbEIsbURBQWtCLENBQUM7SUFDakQsTUFBTSxNQUFNLEdBQ1YsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDYixvQkFBQyxnQkFBUyxJQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLE9BQU8sSUFDdEMsS0FBSyxDQUNJLENBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FDRixTQUFTLENBQ1YsQ0FBQztJQUVKLE9BQU8sb0JBQUMseUJBQWtCLGtCQUFDLE1BQU0sRUFBRSxNQUFNLElBQU0sS0FBSyxFQUFJLENBQUM7Q0FDMUQsQ0FBQztBQUVGLHVCQUFlLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztBQUU1Qyw0QkFBbUIsQ0FBQyx1QkFBZSxFQUFFO0lBQ25DLE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxPQUFPO0tBQ2Y7Q0FDRixDQUFDLENBQUMifQ==

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const SnackbarContent_1 = __webpack_require__(/*! @material-ui/core/SnackbarContent */ "@material-ui/core/SnackbarContent");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Button_1 = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
const defaultProps = {
    message: 'I love candy. I love cookies. I love cupcakes.',
    width: 568,
    height: 48,
    label: 'Nom nom nom',
};
exports.SnackbarContent = (props) => {
    window["__checkBudget__"]();
    const { height, label, width } = props, other = __rest(props, ["height", "label", "width"]);
    const action = label !== '' ? (React.createElement(Button_1.default, { color: "secondary", size: "small" }, label)) : (undefined);
    return React.createElement(SnackbarContent_1.default, Object.assign({ action: action }, other));
};
exports.SnackbarContent.defaultProps = defaultProps;
framer_1.addPropertyControls(exports.SnackbarContent, {
    message: {
        type: framer_1.ControlType.String,
        title: 'Message',
    },
    label: {
        type: framer_1.ControlType.String,
        title: 'Label',
    },
});
exports.__info__ = [{ "name": "SnackbarContent", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Switch.tsx":
/*!*************************!*\
  !*** ./code/Switch.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3dpdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9Td2l0Y2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBK0I7QUFDL0IsbUNBQTBEO0FBQzFELDBDQUEwQztBQUMxQyxhQUFhO0FBQ2IscURBQWlEO0FBQ2pELDBDQUEwQztBQUMxQyxhQUFhO0FBQ2IseUVBQWtFO0FBRWxFLFNBQWdCLE1BQU0sQ0FBQyxLQUFLOztJQUMxQixNQUFNLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksS0FBZSxLQUFLLEVBQWxCLCtEQUFrQixDQUFDO0lBQ3hFLDBDQUEwQztJQUMxQyxhQUFhO0lBRWIsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXBELE1BQU0sWUFBWSxHQUFHLENBQUMsS0FBMEMsRUFBRSxFQUFFOztRQUNsRSxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQjtRQUNELFVBQVUsQ0FBRSxLQUFLLENBQUMsTUFBMkIsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN4RCxDQUFDO0lBRUYsMENBQTBDO0lBQzFDLGFBQWE7SUFDYixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTs7UUFDbkIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBRWxCLE1BQU0sT0FBTyxHQUFHLG9CQUFDLGdCQUFTLElBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUksQ0FBQztJQUVwRixPQUFPLG9CQUFDLDBCQUFnQixrQkFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLElBQU0sS0FBSyxFQUFJLENBQUM7Q0FDeEU7QUF2QkQsd0JBdUJDO0FBRUQsTUFBTSxDQUFDLFlBQVksR0FBRztJQUNwQixPQUFPLEVBQUUsS0FBSztJQUNkLEtBQUssRUFBRSxXQUFXO0lBQ2xCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLEVBQUU7Q0FDWCxDQUFDO0FBRUYsNEJBQW1CLENBQUMsTUFBTSxFQUFFO0lBQzFCLE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxPQUFPO1FBQ2QsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUM7S0FDN0M7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxVQUFVO0tBQ2xCO0lBQ0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsTUFBTTtRQUNiLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7S0FDN0I7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxPQUFPO0tBQ2Y7Q0FDRixDQUFDLENBQUMifQ==

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Switch_1 = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const FormControlLabel_1 = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
function Switch(props) {
    window["__checkBudget__"]();
    const { checked: checkedProp, label, onChange, size } = props, other = __rest(props, ["checked", "label", "onChange", "size"]);
    // tslint:disable-next-line: ban-ts-ignore
    // @ts-ignore
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        window["__checkBudget__"]();
        if (onChange) {
            onChange(event);
        }
        setChecked(event.target.checked);
    };
    // tslint:disable-next-line: ban-ts-ignore
    // @ts-ignore
    React.useEffect(() => {
        window["__checkBudget__"]();
        setChecked(checkedProp);
    }, [checkedProp]);
    const control = React.createElement(Switch_1.default, { checked: checked, onChange: handleChange, size: size });
    return React.createElement(FormControlLabel_1.default, Object.assign({ control: control, label: label }, other));
}
exports.Switch = Switch;
Switch.defaultProps = {
    checked: false,
    color: 'secondary',
    disabled: false,
    size: 'medium',
    label: 'Switch',
    width: 100,
    height: 38,
};
framer_1.addPropertyControls(Switch, {
    checked: {
        type: framer_1.ControlType.Boolean,
        title: 'Checked',
    },
    color: {
        type: framer_1.ControlType.Enum,
        title: 'Color',
        options: ['primary', 'secondary', 'default'],
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        title: 'Disabled',
    },
    size: {
        type: framer_1.ControlType.Enum,
        title: 'Size',
        options: ['small', 'medium'],
    },
    label: {
        type: framer_1.ControlType.String,
        title: 'Label',
    },
});
exports.__info__ = [{ "name": "Switch", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Tabs.tsx":
/*!***********************!*\
  !*** ./code/Tabs.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFicy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvVGFicy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQixtQ0FBMEQ7QUFDMUQsMENBQTBDO0FBQzFDLGFBQWE7QUFDYixxREFBaUQ7QUFDakQsMENBQTBDO0FBQzFDLGFBQWE7QUFDYixpREFBNkM7QUFDN0MsMENBQTBDO0FBQzFDLGFBQWE7QUFDYiwrQ0FBMkM7QUFDM0MsaUNBQThCO0FBZTlCLE1BQU0sWUFBWSxHQUFVO0lBQzFCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsY0FBYyxFQUFFLFdBQVc7SUFDM0IsYUFBYSxFQUFFLE1BQU07SUFDckIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsT0FBTyxFQUFFLFVBQVU7SUFDbkIsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUM7SUFDMUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFDbkMsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsRUFBRTtDQUNYLENBQUM7QUFFVyxRQUFBLElBQUksR0FBcUIsQ0FBQyxLQUFZLEVBQUUsRUFBRTs7SUFDckQsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEtBQWUsS0FBSyxFQUFsQiw0RUFBa0IsQ0FBQztJQUV0RSwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU1QyxNQUFNLFlBQVksR0FBRyxDQUFDLEtBQTRCLEVBQUUsUUFBZ0IsRUFBRSxFQUFFOztRQUN0RSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDcEIsQ0FBQztJQUVGLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdB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

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const AppBar_1 = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Tabs_1 = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Tab_1 = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
const Icon_1 = __webpack_require__(/*! ./Icon */ "./code/Icon.tsx");
const defaultProps = {
    centered: false,
    indicatorColor: 'secondary',
    scrollButtons: 'auto',
    textColor: 'inherit',
    variant: 'standard',
    icons: ['phone', 'favorite', 'person_pin'],
    labels: ['Tab 1', 'Tab 2', 'Tab 3'],
    width: 500,
    height: 64,
};
exports.Tabs = (props) => {
    window["__checkBudget__"]();
    const { appBarColor, labels, icons, width, height } = props, other = __rest(props, ["appBarColor", "labels", "icons", "width", "height"]);
    // tslint:disable-next-line: ban-ts-ignore
    // @ts-ignore
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        window["__checkBudget__"]();
        setValue(newValue);
    };
    const items = icons.length > labels.length ? icons : labels;
    return (React.createElement("div", null,
        React.createElement(AppBar_1.default, { color: appBarColor },
            React.createElement(Tabs_1.default, Object.assign({ value: value, onChange: handleChange }, other), items.map((item, index) => (labels[index] !== undefined || icons[index] !== undefined) && (React.createElement(Tab_1.default, { key: item, value: index, label: labels[index], icon: React.createElement(Icon_1.Icon, { icon: icons[index] || '' }) })))))));
};
exports.Tabs.defaultProps = defaultProps;
framer_1.addPropertyControls(exports.Tabs, {
    centered: {
        type: framer_1.ControlType.Boolean,
        title: 'Centered',
    },
    indicatorColor: {
        type: framer_1.ControlType.Enum,
        title: 'Indicator color',
        options: ['secondary', 'primary'],
    },
    scrollButtons: {
        type: framer_1.ControlType.Enum,
        title: 'Scroll buttons',
        options: ['auto', 'desktop', 'on', 'off'],
    },
    textColor: {
        type: framer_1.ControlType.Enum,
        title: 'Text color',
        options: ['secondary', 'primary', 'inherit'],
    },
    variant: {
        type: framer_1.ControlType.Enum,
        title: 'Variant',
        options: ['standard', 'scrollable', 'fullWidth'],
    },
    appBarColor: {
        type: framer_1.ControlType.Enum,
        title: 'App bar color',
        options: ['default', 'primary', 'secondary', 'inherit'],
    },
    icons: {
        type: framer_1.ControlType.Array,
        title: 'Icons',
        propertyControl: { type: framer_1.ControlType.String },
    },
    labels: {
        type: framer_1.ControlType.Array,
        title: 'Labels',
        propertyControl: { type: framer_1.ControlType.String },
    },
});
exports.__info__ = [{ "name": "Tabs", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/TextField.tsx":
/*!****************************!*\
  !*** ./code/TextField.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEZpZWxkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9UZXh0RmllbGQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBK0I7QUFDL0IsbUNBQTBEO0FBQzFELDBDQUEwQztBQUMxQyxhQUFhO0FBQ2IsMkRBQXVEO0FBbUJ2RCxNQUFNLFlBQVksR0FBVTtJQUMxQixTQUFTLEVBQUUsS0FBSztJQUNoQixLQUFLLEVBQUUsU0FBUztJQUNoQixRQUFRLEVBQUUsS0FBSztJQUNmLEtBQUssRUFBRSxLQUFLO0lBQ1osU0FBUyxFQUFFLElBQUk7SUFDZixVQUFVLEVBQUUsRUFBRTtJQUNkLEtBQUssRUFBRSxXQUFXO0lBQ2xCLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsT0FBTyxFQUFFLFVBQVU7SUFDbkIsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsRUFBRTtDQUNYLENBQUM7QUFFVyxRQUFBLFNBQVMsR0FBcUIsQ0FBQyxLQUFZLEVBQUUsRUFBRTs7SUFDMUQsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEtBQWUsS0FBSyxFQUFsQiwwQ0FBa0IsQ0FBQztJQUMxQyxNQUFNLEtBQUssR0FBd0IsRUFBRSxDQUFDO0lBRXRDLE9BQU8sb0JBQUMsbUJBQVksa0JBQUMsS0FBSyxFQUFFLEtBQUssSUFBTSxLQUFLLEVBQUksQ0FBQztDQUNsRCxDQUFDO0FBRUYsaUJBQVMsQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0FBRXRDLDRCQUFtQixDQUFDLGlCQUFTLEVBQUU7SUFDN0IsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztRQUN6QixLQUFLLEVBQUUsWUFBWTtLQUNwQjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLE9BQU87UUFDZCxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDO0tBQ2xDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztRQUN6QixLQUFLLEVBQUUsVUFBVTtLQUNsQjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsS0FBSyxFQUFFLE9BQU87S0FDZjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsS0FBSyxFQUFFLFlBQVk7S0FDcEI7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxhQUFhO0tBQ3JCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixLQUFLLEVBQUUsT0FBTztLQUNmO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTztRQUN6QixLQUFLLEVBQUUsV0FBVztLQUNuQjtJQUNELFdBQVcsRUFBRTtRQUNYLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsS0FBSyxFQUFFLGFBQWE7S0FDckI7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxPQUFPO1FBQ3pCLEtBQUssRUFBRSxVQUFVO0tBQ2xCO0lBQ0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsTUFBTTtRQUNiLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7S0FDN0I7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDO0tBQzVDO0NBQ0YsQ0FBQyxDQUFDIn0=

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const TextField_1 = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
const defaultProps = {
    autoFocus: false,
    color: 'primary',
    disabled: false,
    error: false,
    fullWidth: true,
    helperText: '',
    label: 'TextField',
    multiline: false,
    required: false,
    variant: 'standard',
    width: 280,
    height: 56,
};
exports.TextField = (props) => {
    window["__checkBudget__"]();
    const { width, height } = props, other = __rest(props, ["width", "height"]);
    const style = {};
    return React.createElement(TextField_1.default, Object.assign({ style: style }, other));
};
exports.TextField.defaultProps = defaultProps;
framer_1.addPropertyControls(exports.TextField, {
    autoFocus: {
        type: framer_1.ControlType.Boolean,
        title: 'Auto focus',
    },
    color: {
        type: framer_1.ControlType.Enum,
        title: 'Color',
        options: ['primary', 'secondary'],
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        title: 'Disabled',
    },
    error: {
        type: framer_1.ControlType.Boolean,
        title: 'Error',
    },
    fullWidth: {
        type: framer_1.ControlType.Boolean,
        title: 'Full width',
    },
    helperText: {
        type: framer_1.ControlType.String,
        title: 'Helper text',
    },
    label: {
        type: framer_1.ControlType.String,
        title: 'Label',
    },
    multiline: {
        type: framer_1.ControlType.Boolean,
        title: 'Multiline',
    },
    placeholder: {
        type: framer_1.ControlType.String,
        title: 'Placeholder',
    },
    required: {
        type: framer_1.ControlType.Boolean,
        title: 'Required',
    },
    size: {
        type: framer_1.ControlType.Enum,
        title: 'Size',
        options: ['small', 'medium'],
    },
    variant: {
        type: framer_1.ControlType.Enum,
        title: 'Variant',
        options: ['standard', 'outlined', 'filled'],
    },
});
exports.__info__ = [{ "name": "TextField", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/ThemeProvider.tsx":
/*!********************************!*\
  !*** ./code/ThemeProvider.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhlbWVQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvVGhlbWVQcm92aWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQixtQ0FBMEQ7QUFDMUQsMENBQTBDO0FBQzFDLGFBQWE7QUFDYixxREFBNEU7QUFDNUUsbURBQWdEO0FBWWhELE1BQU0sWUFBWSxHQUFVO0lBQzFCLFdBQVcsRUFBRSxPQUFPO0lBQ3BCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLEtBQUssRUFBRSxTQUFTO0lBQ2hCLElBQUksRUFBRSxTQUFTO0lBQ2YsT0FBTyxFQUFFLFNBQVM7SUFDbEIsT0FBTyxFQUFFLFNBQVM7Q0FDbkIsQ0FBQztBQUVXLFFBQUEsS0FBSyxHQUFxQixDQUFDLEtBQVksRUFBRSxFQUFFOztJQUN0RCxNQUFNLEVBQ0osUUFBUSxFQUNSLEtBQUssRUFDTCxXQUFXLEVBQ1gsT0FBTyxFQUNQLFNBQVMsRUFDVCxJQUFJLEVBQ0osT0FBTyxFQUNQLE9BQU8sS0FFTCxLQUFLLEVBRFAsaUhBQ08sQ0FBQztJQUVWLE1BQU0sS0FBSyxHQUFHLHVCQUFjLENBQUM7UUFDM0IsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFdBQVc7WUFDakIsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdEMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUFVLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDMUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7U0FDdkM7S0FDRixDQUFDLENBQUM7SUFFSCxPQUFPLENBQ0wsb0JBQUMseUJBQWdCLGtCQUFDLEtBQUssRUFBRSxLQUFLLElBQU0sS0FBSyxHQUN0QyxRQUFRLENBQ1EsQ0FDcEIsQ0FBQztDQUNILENBQUM7QUFFRixhQUFLLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztBQUVsQyw0QkFBbUIsQ0FBQyxhQUFLLEVBQUU7SUFDekIsV0FBVyxFQUFFO1FBQ1gsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixLQUFLLEVBQUUsY0FBYztRQUNyQixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO0tBQzNCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSztRQUN2QixLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUs7UUFDdkIsS0FBSyxFQUFFLFdBQVc7S0FDbkI7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQ3ZCLEtBQUssRUFBRSxPQUFPO0tBQ2Y7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQ3ZCLEtBQUssRUFBRSxNQUFNO0tBQ2Q7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQ3ZCLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSztRQUN2QixLQUFLLEVBQUUsU0FBUztLQUNqQjtDQUNGLENBQUMsQ0FBQyJ9

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
const parseColor_1 = __webpack_require__(/*! ./utils/parseColor */ "./code/utils/parseColor.ts");
const defaultProps = {
    paletteType: 'light',
    primary: '#3f51b5',
    secondary: '#f50057',
    error: '#f44336',
    info: '#2196f3',
    warning: '#ff9800',
    success: '#4caf4f',
};
exports.Theme = (props) => {
    window["__checkBudget__"]();
    const { children, error, paletteType, primary, secondary, info, warning, success } = props, other = __rest(props, ["children", "error", "paletteType", "primary", "secondary", "info", "warning", "success"]);
    const theme = styles_1.createMuiTheme({
        palette: {
            type: paletteType,
            primary: { main: parseColor_1.parseColor(primary) },
            secondary: { main: parseColor_1.parseColor(secondary) },
            error: { main: parseColor_1.parseColor(error) },
            info: { main: parseColor_1.parseColor(info) },
            warning: { main: parseColor_1.parseColor(warning) },
            success: { main: parseColor_1.parseColor(success) },
        },
    });
    return (React.createElement(styles_1.MuiThemeProvider, Object.assign({ theme: theme }, other), children));
};
exports.Theme.defaultProps = defaultProps;
framer_1.addPropertyControls(exports.Theme, {
    paletteType: {
        type: framer_1.ControlType.Enum,
        title: 'Palette type',
        options: ['dark', 'light'],
    },
    primary: {
        type: framer_1.ControlType.Color,
        title: 'Primary',
    },
    secondary: {
        type: framer_1.ControlType.Color,
        title: 'Secondary',
    },
    error: {
        type: framer_1.ControlType.Color,
        title: 'Error',
    },
    info: {
        type: framer_1.ControlType.Color,
        title: 'Info',
    },
    warning: {
        type: framer_1.ControlType.Color,
        title: 'Warning',
    },
    success: {
        type: framer_1.ControlType.Color,
        title: 'Success',
    },
});
exports.__info__ = [{ "name": "Theme", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/Typography.tsx":
/*!*****************************!*\
  !*** ./code/Typography.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwb2dyYXBoeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvVHlwb2dyYXBoeS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQixtQ0FBMEQ7QUFDMUQsMENBQTBDO0FBQzFDLGFBQWE7QUFDYiw2REFBeUQ7QUFrQ3pELE1BQU0sWUFBWSxHQUFVO0lBQzFCLEtBQUssRUFBRSxTQUFTO0lBQ2hCLEtBQUssRUFBRSxTQUFTO0lBQ2hCLE1BQU0sRUFBRSxLQUFLO0lBQ2IsT0FBTyxFQUFFLE9BQU87SUFDaEIsS0FBSyxFQUFFLFlBQVk7SUFDbkIsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsRUFBRTtDQUNYLENBQUM7QUFFVyxRQUFBLFVBQVUsR0FBcUIsQ0FBQyxLQUFZLEVBQUUsRUFBRTs7SUFDM0QsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxLQUFlLEtBQUssRUFBbEIsbURBQWtCLENBQUM7SUFDakQsT0FBTyxvQkFBQyxvQkFBYSxvQkFBSyxLQUFLLEdBQUcsS0FBSyxDQUFpQixDQUFDO0NBQzFELENBQUM7QUFFRixrQkFBVSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7QUFFdkMsNEJBQW1CLENBQUMsa0JBQVUsRUFBRTtJQUM5QixLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxPQUFPO1FBQ2QsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQztLQUMzRDtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsS0FBSyxFQUFFLE9BQU87UUFDZCxPQUFPLEVBQUU7WUFDUCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxXQUFXO1lBQ1gsYUFBYTtZQUNiLGVBQWU7WUFDZixPQUFPO1NBQ1I7S0FDRjtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxvQkFBVyxDQUFDLE9BQU87UUFDekIsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxJQUFJO1FBQ3RCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLE9BQU8sRUFBRTtZQUNQLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLFdBQVc7WUFDWCxXQUFXO1lBQ1gsT0FBTztZQUNQLE9BQU87WUFDUCxTQUFTO1lBQ1QsUUFBUTtZQUNSLFVBQVU7WUFDVixRQUFRO1lBQ1IsU0FBUztTQUNWO0tBQ0Y7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEtBQUssRUFBRSxPQUFPO0tBQ2Y7Q0FDRixDQUFDLENBQUMifQ==

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
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
const Typography_1 = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
const defaultProps = {
    align: 'inherit',
    color: 'initial',
    noWrap: false,
    variant: 'body1',
    label: 'Typography',
    width: 100,
    height: 38,
};
exports.Typography = (props) => {
    window["__checkBudget__"]();
    const { height, label, width } = props, other = __rest(props, ["height", "label", "width"]);
    return React.createElement(Typography_1.default, Object.assign({}, other), label);
};
exports.Typography.defaultProps = defaultProps;
framer_1.addPropertyControls(exports.Typography, {
    align: {
        type: framer_1.ControlType.Enum,
        title: 'Align',
        options: ['inherit', 'left', 'center', 'right', 'justify'],
    },
    color: {
        type: framer_1.ControlType.Enum,
        title: 'Color',
        options: [
            'initial',
            'inherit',
            'primary',
            'secondary',
            'textPrimary',
            'textSecondary',
            'error',
        ],
    },
    noWrap: {
        type: framer_1.ControlType.Boolean,
        title: 'No wrap',
    },
    variant: {
        type: framer_1.ControlType.Enum,
        title: 'Variant',
        options: [
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'subtitle1',
            'subtitle2',
            'body1',
            'body2',
            'caption',
            'button',
            'overline',
            'srOnly',
            'inherit',
        ],
    },
    label: {
        type: framer_1.ControlType.String,
        title: 'Label',
    },
});
exports.__info__ = [{ "name": "Typography", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});
exports.colors = Object.freeze({
    /** #33CC9E */
    "test": "var(--token-98b6d422-e643-49ce-aeb9-39fab6ce99ce, rgb(51, 204, 158))",
});
exports.__info__ = [];


/***/ }),

/***/ "./code/utils/parseColor.ts":
/*!**********************************!*\
  !*** ./code/utils/parseColor.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VDb2xvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvdXRpbHMvcGFyc2VDb2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sZUFBZSxHQUFHLHNEQUFzRCxDQUFDO0FBRS9FOzs7Ozs7Ozs7O0dBVUc7QUFDSCxTQUFnQixVQUFVLENBQUMsS0FBYTs7SUFDdEMsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUVoRCxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Q0FDM0M7QUFKRCxnQ0FJQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const colorTokenRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
/**
 * Checks if the color string is a Framer Shared Color token and extracts
 * the underlying color or returns the original string.
 *
 * @param {string} color - A Framer Shared Color Token/regular CSS color
 * @return {string} A valid HTML color string
 *
 * @example
 *  console.log(parseColor('var(--token-73eaaa94-88d1-416e-9e22-e09837612534, rgb(0, 0, 0))')); // rgb(0, 0, 0)
 *
 */
function parseColor(color) {
    window["__checkBudget__"]();
    const colorToken = color.match(colorTokenRegex);
    return colorToken ? colorToken[2] : color;
}
exports.parseColor = parseColor;
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
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"1.1.7","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.4","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/google.fonts":"^1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/promise-queue":"^2.2.0","@types/react":"16.8.4","@types/react-dom":"^16.8","@types/webfontloader":"^1.6.29","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.6.7","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webfontloader":"^1.6.28","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
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
/*! exports provided: name, author, description, version, main, license, homepage, repository, bugs, devDependencies, dependencies, peerDependencies, peerDependenciesMeta, framer, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@framer/material-ui.material-ui\",\"author\":\"Material-UI Team\",\"description\":\"Material-UI Framer components\",\"version\":\"1.0.0\",\"main\":\"dist/index.js\",\"license\":\"MIT\",\"homepage\":\"http://material-ui.com/\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/mui-org/material-ui.git\"},\"bugs\":{\"url\":\"https://github.com/mui-org/material-ui/issues\"},\"devDependencies\":{\"@types/react\":\"^16.8\"},\"dependencies\":{\"@material-ui/core\":\"^4.9.3\",\"@material-ui/icons\":\"^4.9.1\",\"naming-style\":\"^1.0.0\"},\"peerDependencies\":{\"@types/react\":\"^16.8.6\",\"framer\":\"^1.0.0\",\"react\":\"^16.8.0\",\"react-dom\":\"^16.8.0\"},\"peerDependenciesMeta\":{\"@types/react\":{\"optional\":true}},\"framer\":{\"displayName\":\"Material-UI\",\"id\":\"ee255265-d0d6-4999-a685-9461c1248b6a\"}}");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_AppBar__;

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Avatar__;

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Badge__;

/***/ }),

/***/ "@material-ui/core/BottomNavigation":
/*!*****************************************************!*\
  !*** external "@material-ui/core/BottomNavigation" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_BottomNavigation__;

/***/ }),

/***/ "@material-ui/core/BottomNavigationAction":
/*!***********************************************************!*\
  !*** external "@material-ui/core/BottomNavigationAction" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_BottomNavigationAction__;

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Button__;

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Card__;

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_CardActionArea__;

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_CardActions__;

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_CardContent__;

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_CardMedia__;

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Checkbox__;

/***/ }),

/***/ "@material-ui/core/Chip":
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Chip__;

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_CircularProgress__;

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Fab__;

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_FormControlLabel__;

/***/ }),

/***/ "@material-ui/core/FormLabel":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormLabel" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_FormLabel__;

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_IconButton__;

/***/ }),

/***/ "@material-ui/core/LinearProgress":
/*!***************************************************!*\
  !*** external "@material-ui/core/LinearProgress" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_LinearProgress__;

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_ListItem__;

/***/ }),

/***/ "@material-ui/core/ListItemAvatar":
/*!***************************************************!*\
  !*** external "@material-ui/core/ListItemAvatar" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_ListItemAvatar__;

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_ListItemIcon__;

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_ListItemText__;

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Paper__;

/***/ }),

/***/ "@material-ui/core/Radio":
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Radio__;

/***/ }),

/***/ "@material-ui/core/RadioGroup":
/*!***********************************************!*\
  !*** external "@material-ui/core/RadioGroup" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_RadioGroup__;

/***/ }),

/***/ "@material-ui/core/Slider":
/*!*******************************************!*\
  !*** external "@material-ui/core/Slider" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Slider__;

/***/ }),

/***/ "@material-ui/core/SnackbarContent":
/*!****************************************************!*\
  !*** external "@material-ui/core/SnackbarContent" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_SnackbarContent__;

/***/ }),

/***/ "@material-ui/core/Switch":
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Switch__;

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Tab__;

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Tabs__;

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_TextField__;

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Toolbar__;

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Typography__;

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_styles__;

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_icons__;

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "naming-style":
/*!*******************************!*\
  !*** external "naming-style" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_naming_style__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});