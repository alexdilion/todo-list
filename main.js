/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/flatpickr/dist/flatpickr.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/flatpickr/dist/flatpickr.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.flatpickr-calendar {
  background: transparent;
  opacity: 0;
  display: none;
  text-align: center;
  visibility: hidden;
  padding: 0;
  -webkit-animation: none;
          animation: none;
  direction: ltr;
  border: 0;
  font-size: 14px;
  line-height: 24px;
  border-radius: 5px;
  position: absolute;
  width: 307.875px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -ms-touch-action: manipulation;
      touch-action: manipulation;
  background: #fff;
  -webkit-box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0,0,0,0.08);
          box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0,0,0,0.08);
}
.flatpickr-calendar.open,
.flatpickr-calendar.inline {
  opacity: 1;
  max-height: 640px;
  visibility: visible;
}
.flatpickr-calendar.open {
  display: inline-block;
  z-index: 99999;
}
.flatpickr-calendar.animate.open {
  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
          animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
}
.flatpickr-calendar.inline {
  display: block;
  position: relative;
  top: 2px;
}
.flatpickr-calendar.static {
  position: absolute;
  top: calc(100% + 2px);
}
.flatpickr-calendar.static.open {
  z-index: 999;
  display: block;
}
.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
}
.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {
  -webkit-box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;
          box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;
}
.flatpickr-calendar .hasWeeks .dayContainer,
.flatpickr-calendar .hasTime .dayContainer {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.flatpickr-calendar .hasWeeks .dayContainer {
  border-left: 0;
}
.flatpickr-calendar.hasTime .flatpickr-time {
  height: 40px;
  border-top: 1px solid #e6e6e6;
}
.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {
  height: auto;
}
.flatpickr-calendar:before,
.flatpickr-calendar:after {
  position: absolute;
  display: block;
  pointer-events: none;
  border: solid transparent;
  content: '';
  height: 0;
  width: 0;
  left: 22px;
}
.flatpickr-calendar.rightMost:before,
.flatpickr-calendar.arrowRight:before,
.flatpickr-calendar.rightMost:after,
.flatpickr-calendar.arrowRight:after {
  left: auto;
  right: 22px;
}
.flatpickr-calendar.arrowCenter:before,
.flatpickr-calendar.arrowCenter:after {
  left: 50%;
  right: 50%;
}
.flatpickr-calendar:before {
  border-width: 5px;
  margin: 0 -5px;
}
.flatpickr-calendar:after {
  border-width: 4px;
  margin: 0 -4px;
}
.flatpickr-calendar.arrowTop:before,
.flatpickr-calendar.arrowTop:after {
  bottom: 100%;
}
.flatpickr-calendar.arrowTop:before {
  border-bottom-color: #e6e6e6;
}
.flatpickr-calendar.arrowTop:after {
  border-bottom-color: #fff;
}
.flatpickr-calendar.arrowBottom:before,
.flatpickr-calendar.arrowBottom:after {
  top: 100%;
}
.flatpickr-calendar.arrowBottom:before {
  border-top-color: #e6e6e6;
}
.flatpickr-calendar.arrowBottom:after {
  border-top-color: #fff;
}
.flatpickr-calendar:focus {
  outline: 0;
}
.flatpickr-wrapper {
  position: relative;
  display: inline-block;
}
.flatpickr-months {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.flatpickr-months .flatpickr-month {
  background: transparent;
  color: rgba(0,0,0,0.9);
  fill: rgba(0,0,0,0.9);
  height: 34px;
  line-height: 1;
  text-align: center;
  position: relative;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  overflow: hidden;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
}
.flatpickr-months .flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  height: 34px;
  padding: 10px;
  z-index: 3;
  color: rgba(0,0,0,0.9);
  fill: rgba(0,0,0,0.9);
}
.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,
.flatpickr-months .flatpickr-next-month.flatpickr-disabled {
  display: none;
}
.flatpickr-months .flatpickr-prev-month i,
.flatpickr-months .flatpickr-next-month i {
  position: relative;
}
.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {
/*
      /*rtl:begin:ignore*/
/*
      */
  left: 0;
/*
      /*rtl:end:ignore*/
/*
      */
}
/*
      /*rtl:begin:ignore*/
/*
      /*rtl:end:ignore*/
.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,
.flatpickr-months .flatpickr-next-month.flatpickr-next-month {
/*
      /*rtl:begin:ignore*/
/*
      */
  right: 0;
/*
      /*rtl:end:ignore*/
/*
      */
}
/*
      /*rtl:begin:ignore*/
/*
      /*rtl:end:ignore*/
.flatpickr-months .flatpickr-prev-month:hover,
.flatpickr-months .flatpickr-next-month:hover {
  color: #959ea9;
}
.flatpickr-months .flatpickr-prev-month:hover svg,
.flatpickr-months .flatpickr-next-month:hover svg {
  fill: #f64747;
}
.flatpickr-months .flatpickr-prev-month svg,
.flatpickr-months .flatpickr-next-month svg {
  width: 14px;
  height: 14px;
}
.flatpickr-months .flatpickr-prev-month svg path,
.flatpickr-months .flatpickr-next-month svg path {
  -webkit-transition: fill 0.1s;
  transition: fill 0.1s;
  fill: inherit;
}
.numInputWrapper {
  position: relative;
  height: auto;
}
.numInputWrapper input,
.numInputWrapper span {
  display: inline-block;
}
.numInputWrapper input {
  width: 100%;
}
.numInputWrapper input::-ms-clear {
  display: none;
}
.numInputWrapper input::-webkit-outer-spin-button,
.numInputWrapper input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}
.numInputWrapper span {
  position: absolute;
  right: 0;
  width: 14px;
  padding: 0 4px 0 2px;
  height: 50%;
  line-height: 50%;
  opacity: 0;
  cursor: pointer;
  border: 1px solid rgba(57,57,57,0.15);
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.numInputWrapper span:hover {
  background: rgba(0,0,0,0.1);
}
.numInputWrapper span:active {
  background: rgba(0,0,0,0.2);
}
.numInputWrapper span:after {
  display: block;
  content: "";
  position: absolute;
}
.numInputWrapper span.arrowUp {
  top: 0;
  border-bottom: 0;
}
.numInputWrapper span.arrowUp:after {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid rgba(57,57,57,0.6);
  top: 26%;
}
.numInputWrapper span.arrowDown {
  top: 50%;
}
.numInputWrapper span.arrowDown:after {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid rgba(57,57,57,0.6);
  top: 40%;
}
.numInputWrapper span svg {
  width: inherit;
  height: auto;
}
.numInputWrapper span svg path {
  fill: rgba(0,0,0,0.5);
}
.numInputWrapper:hover {
  background: rgba(0,0,0,0.05);
}
.numInputWrapper:hover span {
  opacity: 1;
}
.flatpickr-current-month {
  font-size: 135%;
  line-height: inherit;
  font-weight: 300;
  color: inherit;
  position: absolute;
  width: 75%;
  left: 12.5%;
  padding: 7.48px 0 0 0;
  line-height: 1;
  height: 34px;
  display: inline-block;
  text-align: center;
  -webkit-transform: translate3d(0px, 0px, 0px);
          transform: translate3d(0px, 0px, 0px);
}
.flatpickr-current-month span.cur-month {
  font-family: inherit;
  font-weight: 700;
  color: inherit;
  display: inline-block;
  margin-left: 0.5ch;
  padding: 0;
}
.flatpickr-current-month span.cur-month:hover {
  background: rgba(0,0,0,0.05);
}
.flatpickr-current-month .numInputWrapper {
  width: 6ch;
  width: 7ch\\0;
  display: inline-block;
}
.flatpickr-current-month .numInputWrapper span.arrowUp:after {
  border-bottom-color: rgba(0,0,0,0.9);
}
.flatpickr-current-month .numInputWrapper span.arrowDown:after {
  border-top-color: rgba(0,0,0,0.9);
}
.flatpickr-current-month input.cur-year {
  background: transparent;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: inherit;
  cursor: text;
  padding: 0 0 0 0.5ch;
  margin: 0;
  display: inline-block;
  font-size: inherit;
  font-family: inherit;
  font-weight: 300;
  line-height: inherit;
  height: auto;
  border: 0;
  border-radius: 0;
  vertical-align: initial;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}
.flatpickr-current-month input.cur-year:focus {
  outline: 0;
}
.flatpickr-current-month input.cur-year[disabled],
.flatpickr-current-month input.cur-year[disabled]:hover {
  font-size: 100%;
  color: rgba(0,0,0,0.5);
  background: transparent;
  pointer-events: none;
}
.flatpickr-current-month .flatpickr-monthDropdown-months {
  appearance: menulist;
  background: transparent;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  font-weight: 300;
  height: auto;
  line-height: inherit;
  margin: -1px 0 0 0;
  outline: none;
  padding: 0 0 0 0.5ch;
  position: relative;
  vertical-align: initial;
  -webkit-box-sizing: border-box;
  -webkit-appearance: menulist;
  -moz-appearance: menulist;
  width: auto;
}
.flatpickr-current-month .flatpickr-monthDropdown-months:focus,
.flatpickr-current-month .flatpickr-monthDropdown-months:active {
  outline: none;
}
.flatpickr-current-month .flatpickr-monthDropdown-months:hover {
  background: rgba(0,0,0,0.05);
}
.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {
  background-color: transparent;
  outline: none;
  padding: 0;
}
.flatpickr-weekdays {
  background: transparent;
  text-align: center;
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  height: 28px;
}
.flatpickr-weekdays .flatpickr-weekdaycontainer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
}
span.flatpickr-weekday {
  cursor: default;
  font-size: 90%;
  background: transparent;
  color: rgba(0,0,0,0.54);
  line-height: 1;
  margin: 0;
  text-align: center;
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  font-weight: bolder;
}
.dayContainer,
.flatpickr-weeks {
  padding: 1px 0 0 0;
}
.flatpickr-days {
  position: relative;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
      -ms-flex-align: start;
          align-items: flex-start;
  width: 307.875px;
}
.flatpickr-days:focus {
  outline: 0;
}
.dayContainer {
  padding: 0;
  outline: 0;
  text-align: left;
  width: 307.875px;
  min-width: 307.875px;
  max-width: 307.875px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  display: inline-block;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-around;
          justify-content: space-around;
  -webkit-transform: translate3d(0px, 0px, 0px);
          transform: translate3d(0px, 0px, 0px);
  opacity: 1;
}
.dayContainer + .dayContainer {
  -webkit-box-shadow: -1px 0 0 #e6e6e6;
          box-shadow: -1px 0 0 #e6e6e6;
}
.flatpickr-day {
  background: none;
  border: 1px solid transparent;
  border-radius: 150px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #393939;
  cursor: pointer;
  font-weight: 400;
  width: 14.2857143%;
  -webkit-flex-basis: 14.2857143%;
      -ms-flex-preferred-size: 14.2857143%;
          flex-basis: 14.2857143%;
  max-width: 39px;
  height: 39px;
  line-height: 39px;
  margin: 0;
  display: inline-block;
  position: relative;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  text-align: center;
}
.flatpickr-day.inRange,
.flatpickr-day.prevMonthDay.inRange,
.flatpickr-day.nextMonthDay.inRange,
.flatpickr-day.today.inRange,
.flatpickr-day.prevMonthDay.today.inRange,
.flatpickr-day.nextMonthDay.today.inRange,
.flatpickr-day:hover,
.flatpickr-day.prevMonthDay:hover,
.flatpickr-day.nextMonthDay:hover,
.flatpickr-day:focus,
.flatpickr-day.prevMonthDay:focus,
.flatpickr-day.nextMonthDay:focus {
  cursor: pointer;
  outline: 0;
  background: #e6e6e6;
  border-color: #e6e6e6;
}
.flatpickr-day.today {
  border-color: #959ea9;
}
.flatpickr-day.today:hover,
.flatpickr-day.today:focus {
  border-color: #959ea9;
  background: #959ea9;
  color: #fff;
}
.flatpickr-day.selected,
.flatpickr-day.startRange,
.flatpickr-day.endRange,
.flatpickr-day.selected.inRange,
.flatpickr-day.startRange.inRange,
.flatpickr-day.endRange.inRange,
.flatpickr-day.selected:focus,
.flatpickr-day.startRange:focus,
.flatpickr-day.endRange:focus,
.flatpickr-day.selected:hover,
.flatpickr-day.startRange:hover,
.flatpickr-day.endRange:hover,
.flatpickr-day.selected.prevMonthDay,
.flatpickr-day.startRange.prevMonthDay,
.flatpickr-day.endRange.prevMonthDay,
.flatpickr-day.selected.nextMonthDay,
.flatpickr-day.startRange.nextMonthDay,
.flatpickr-day.endRange.nextMonthDay {
  background: #569ff7;
  -webkit-box-shadow: none;
          box-shadow: none;
  color: #fff;
  border-color: #569ff7;
}
.flatpickr-day.selected.startRange,
.flatpickr-day.startRange.startRange,
.flatpickr-day.endRange.startRange {
  border-radius: 50px 0 0 50px;
}
.flatpickr-day.selected.endRange,
.flatpickr-day.startRange.endRange,
.flatpickr-day.endRange.endRange {
  border-radius: 0 50px 50px 0;
}
.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),
.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),
.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {
  -webkit-box-shadow: -10px 0 0 #569ff7;
          box-shadow: -10px 0 0 #569ff7;
}
.flatpickr-day.selected.startRange.endRange,
.flatpickr-day.startRange.startRange.endRange,
.flatpickr-day.endRange.startRange.endRange {
  border-radius: 50px;
}
.flatpickr-day.inRange {
  border-radius: 0;
  -webkit-box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;
          box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;
}
.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover,
.flatpickr-day.prevMonthDay,
.flatpickr-day.nextMonthDay,
.flatpickr-day.notAllowed,
.flatpickr-day.notAllowed.prevMonthDay,
.flatpickr-day.notAllowed.nextMonthDay {
  color: rgba(57,57,57,0.3);
  background: transparent;
  border-color: transparent;
  cursor: default;
}
.flatpickr-day.flatpickr-disabled,
.flatpickr-day.flatpickr-disabled:hover {
  cursor: not-allowed;
  color: rgba(57,57,57,0.1);
}
.flatpickr-day.week.selected {
  border-radius: 0;
  -webkit-box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;
          box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;
}
.flatpickr-day.hidden {
  visibility: hidden;
}
.rangeMode .flatpickr-day {
  margin-top: 1px;
}
.flatpickr-weekwrapper {
  float: left;
}
.flatpickr-weekwrapper .flatpickr-weeks {
  padding: 0 12px;
  -webkit-box-shadow: 1px 0 0 #e6e6e6;
          box-shadow: 1px 0 0 #e6e6e6;
}
.flatpickr-weekwrapper .flatpickr-weekday {
  float: none;
  width: 100%;
  line-height: 28px;
}
.flatpickr-weekwrapper span.flatpickr-day,
.flatpickr-weekwrapper span.flatpickr-day:hover {
  display: block;
  width: 100%;
  max-width: none;
  color: rgba(57,57,57,0.3);
  background: transparent;
  cursor: default;
  border: none;
}
.flatpickr-innerContainer {
  display: block;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  overflow: hidden;
}
.flatpickr-rContainer {
  display: inline-block;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.flatpickr-time {
  text-align: center;
  outline: 0;
  display: block;
  height: 0;
  line-height: 40px;
  max-height: 40px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.flatpickr-time:after {
  content: "";
  display: table;
  clear: both;
}
.flatpickr-time .numInputWrapper {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  width: 40%;
  height: 40px;
  float: left;
}
.flatpickr-time .numInputWrapper span.arrowUp:after {
  border-bottom-color: #393939;
}
.flatpickr-time .numInputWrapper span.arrowDown:after {
  border-top-color: #393939;
}
.flatpickr-time.hasSeconds .numInputWrapper {
  width: 26%;
}
.flatpickr-time.time24hr .numInputWrapper {
  width: 49%;
}
.flatpickr-time input {
  background: transparent;
  -webkit-box-shadow: none;
          box-shadow: none;
  border: 0;
  border-radius: 0;
  text-align: center;
  margin: 0;
  padding: 0;
  height: inherit;
  line-height: inherit;
  color: #393939;
  font-size: 14px;
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}
.flatpickr-time input.flatpickr-hour {
  font-weight: bold;
}
.flatpickr-time input.flatpickr-minute,
.flatpickr-time input.flatpickr-second {
  font-weight: 400;
}
.flatpickr-time input:focus {
  outline: 0;
  border: 0;
}
.flatpickr-time .flatpickr-time-separator,
.flatpickr-time .flatpickr-am-pm {
  height: inherit;
  float: left;
  line-height: inherit;
  color: #393939;
  font-weight: bold;
  width: 2%;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-align-self: center;
      -ms-flex-item-align: center;
          align-self: center;
}
.flatpickr-time .flatpickr-am-pm {
  outline: 0;
  width: 18%;
  cursor: pointer;
  text-align: center;
  font-weight: 400;
}
.flatpickr-time input:hover,
.flatpickr-time .flatpickr-am-pm:hover,
.flatpickr-time input:focus,
.flatpickr-time .flatpickr-am-pm:focus {
  background: #eee;
}
.flatpickr-input[readonly] {
  cursor: pointer;
}
@-webkit-keyframes fpFadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -20px, 0);
            transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
}
@keyframes fpFadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -20px, 0);
            transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
}
`, "",{"version":3,"sources":["webpack://./node_modules/flatpickr/dist/flatpickr.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,UAAU;EACV,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,uBAAuB;UACf,eAAe;EACvB,cAAc;EACd,SAAS;EACT,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,8BAA8B;UACtB,sBAAsB;EAC9B,8BAA8B;MAC1B,0BAA0B;EAC9B,gBAAgB;EAChB,qHAAqH;UAC7G,6GAA6G;AACvH;AACA;;EAEE,UAAU;EACV,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,oEAAoE;UAC5D,4DAA4D;AACtE;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,QAAQ;AACV;AACA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;AACA;EACE,YAAY;EACZ,cAAc;AAChB;AACA;EACE,mCAAmC;UAC3B,2BAA2B;AACrC;AACA;EACE,qDAAqD;UAC7C,6CAA6C;AACvD;AACA;;EAEE,gBAAgB;EAChB,6BAA6B;EAC7B,4BAA4B;AAC9B;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;EACZ,6BAA6B;AAC/B;AACA;EACE,YAAY;AACd;AACA;;EAEE,kBAAkB;EAClB,cAAc;EACd,oBAAoB;EACpB,yBAAyB;EACzB,WAAW;EACX,SAAS;EACT,QAAQ;EACR,UAAU;AACZ;AACA;;;;EAIE,UAAU;EACV,WAAW;AACb;AACA;;EAEE,SAAS;EACT,UAAU;AACZ;AACA;EACE,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,iBAAiB;EACjB,cAAc;AAChB;AACA;;EAEE,YAAY;AACd;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,yBAAyB;AAC3B;AACA;;EAEE,SAAS;AACX;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,sBAAsB;AACxB;AACA;EACE,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;AACA;EACE,oBAAoB;EACpB,qBAAqB;EACrB,oBAAoB;EACpB,aAAa;AACf;AACA;EACE,uBAAuB;EACvB,sBAAsB;EACtB,qBAAqB;EACrB,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;KACtB,sBAAsB;MACrB,qBAAqB;UACjB,iBAAiB;EACzB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;MACX,WAAW;UACP,OAAO;AACjB;AACA;;EAEE,yBAAyB;KACtB,sBAAsB;MACrB,qBAAqB;UACjB,iBAAiB;EACzB,qBAAqB;EACrB,eAAe;EACf,kBAAkB;EAClB,MAAM;EACN,YAAY;EACZ,aAAa;EACb,UAAU;EACV,sBAAsB;EACtB,qBAAqB;AACvB;AACA;;EAEE,aAAa;AACf;AACA;;EAEE,kBAAkB;AACpB;AACA;;AAEA;yBACyB;AACzB;OACO;EACL,OAAO;AACT;uBACuB;AACvB;OACO;AACP;AACA;yBACyB;AACzB;uBACuB;AACvB;;AAEA;yBACyB;AACzB;OACO;EACL,QAAQ;AACV;uBACuB;AACvB;OACO;AACP;AACA;yBACyB;AACzB;uBACuB;AACvB;;EAEE,cAAc;AAChB;AACA;;EAEE,aAAa;AACf;AACA;;EAEE,WAAW;EACX,YAAY;AACd;AACA;;EAEE,6BAA6B;EAC7B,qBAAqB;EACrB,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,YAAY;AACd;AACA;;EAEE,qBAAqB;AACvB;AACA;EACE,WAAW;AACb;AACA;EACE,aAAa;AACf;AACA;;EAEE,SAAS;EACT,wBAAwB;AAC1B;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,oBAAoB;EACpB,WAAW;EACX,gBAAgB;EAChB,UAAU;EACV,eAAe;EACf,qCAAqC;EACrC,8BAA8B;UACtB,sBAAsB;AAChC;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,cAAc;EACd,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,MAAM;EACN,gBAAgB;AAClB;AACA;EACE,kCAAkC;EAClC,mCAAmC;EACnC,2CAA2C;EAC3C,QAAQ;AACV;AACA;EACE,QAAQ;AACV;AACA;EACE,kCAAkC;EAClC,mCAAmC;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","sourcesContent":[".flatpickr-calendar {\n  background: transparent;\n  opacity: 0;\n  display: none;\n  text-align: center;\n  visibility: hidden;\n  padding: 0;\n  -webkit-animation: none;\n          animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  background: #fff;\n  -webkit-box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0,0,0,0.08);\n          box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0,0,0,0.08);\n}\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  max-height: 640px;\n  visibility: visible;\n}\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 99999;\n}\n.flatpickr-calendar.animate.open {\n  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {\n  -webkit-box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n          box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n}\n.flatpickr-calendar .hasWeeks .dayContainer,\n.flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\n.flatpickr-calendar.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid #e6e6e6;\n}\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: '';\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.arrowRight:before,\n.flatpickr-calendar.rightMost:after,\n.flatpickr-calendar.arrowRight:after {\n  left: auto;\n  right: 22px;\n}\n.flatpickr-calendar.arrowCenter:before,\n.flatpickr-calendar.arrowCenter:after {\n  left: 50%;\n  right: 50%;\n}\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n}\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n}\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: #e6e6e6;\n}\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: #fff;\n}\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: #e6e6e6;\n}\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: #fff;\n}\n.flatpickr-calendar:focus {\n  outline: 0;\n}\n.flatpickr-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.flatpickr-months {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flatpickr-months .flatpickr-month {\n  background: transparent;\n  color: rgba(0,0,0,0.9);\n  fill: rgba(0,0,0,0.9);\n  height: 34px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.flatpickr-months .flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  height: 34px;\n  padding: 10px;\n  z-index: 3;\n  color: rgba(0,0,0,0.9);\n  fill: rgba(0,0,0,0.9);\n}\n.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,\n.flatpickr-months .flatpickr-next-month.flatpickr-disabled {\n  display: none;\n}\n.flatpickr-months .flatpickr-prev-month i,\n.flatpickr-months .flatpickr-next-month i {\n  position: relative;\n}\n.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {\n/*\n      /*rtl:begin:ignore*/\n/*\n      */\n  left: 0;\n/*\n      /*rtl:end:ignore*/\n/*\n      */\n}\n/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-next-month {\n/*\n      /*rtl:begin:ignore*/\n/*\n      */\n  right: 0;\n/*\n      /*rtl:end:ignore*/\n/*\n      */\n}\n/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month:hover,\n.flatpickr-months .flatpickr-next-month:hover {\n  color: #959ea9;\n}\n.flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #f64747;\n}\n.flatpickr-months .flatpickr-prev-month svg,\n.flatpickr-months .flatpickr-next-month svg {\n  width: 14px;\n  height: 14px;\n}\n.flatpickr-months .flatpickr-prev-month svg path,\n.flatpickr-months .flatpickr-next-month svg path {\n  -webkit-transition: fill 0.1s;\n  transition: fill 0.1s;\n  fill: inherit;\n}\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\n.numInputWrapper input {\n  width: 100%;\n}\n.numInputWrapper input::-ms-clear {\n  display: none;\n}\n.numInputWrapper input::-webkit-outer-spin-button,\n.numInputWrapper input::-webkit-inner-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n}\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid rgba(57,57,57,0.15);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.numInputWrapper span:hover {\n  background: rgba(0,0,0,0.1);\n}\n.numInputWrapper span:active {\n  background: rgba(0,0,0,0.2);\n}\n.numInputWrapper span:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n}\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(57,57,57,0.6);\n  top: 26%;\n}\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(57,57,57,0.6);\n  top: 40%;\n}\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n.numInputWrapper span svg path {\n  fill: rgba(0,0,0,0.5);\n}\n.numInputWrapper:hover {\n  background: rgba(0,0,0,0.05);\n}\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 7.48px 0 0 0;\n  line-height: 1;\n  height: 34px;\n  display: inline-block;\n  text-align: center;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0;\n  display: inline-block;\n}\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: rgba(0,0,0,0.9);\n}\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: rgba(0,0,0,0.9);\n}\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: inherit;\n  cursor: text;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: auto;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: rgba(0,0,0,0.5);\n  background: transparent;\n  pointer-events: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  appearance: menulist;\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: pointer;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  height: auto;\n  line-height: inherit;\n  margin: -1px 0 0 0;\n  outline: none;\n  padding: 0 0 0 0.5ch;\n  position: relative;\n  vertical-align: initial;\n  -webkit-box-sizing: border-box;\n  -webkit-appearance: menulist;\n  -moz-appearance: menulist;\n  width: auto;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months:focus,\n.flatpickr-current-month .flatpickr-monthDropdown-months:active {\n  outline: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {\n  background-color: transparent;\n  outline: none;\n  padding: 0;\n}\n.flatpickr-weekdays {\n  background: transparent;\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 28px;\n}\n.flatpickr-weekdays .flatpickr-weekdaycontainer {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: transparent;\n  color: rgba(0,0,0,0.54);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-weight: bolder;\n}\n.dayContainer,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  width: 307.875px;\n}\n.flatpickr-days:focus {\n  outline: 0;\n}\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: inline-block;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\n.dayContainer + .dayContainer {\n  -webkit-box-shadow: -1px 0 0 #e6e6e6;\n          box-shadow: -1px 0 0 #e6e6e6;\n}\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #393939;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  -webkit-flex-basis: 14.2857143%;\n      -ms-flex-preferred-size: 14.2857143%;\n          flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 39px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: #e6e6e6;\n  border-color: #e6e6e6;\n}\n.flatpickr-day.today {\n  border-color: #959ea9;\n}\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: #959ea9;\n  background: #959ea9;\n  color: #fff;\n}\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: #569ff7;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n  border-color: #569ff7;\n}\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  -webkit-box-shadow: -10px 0 0 #569ff7;\n          box-shadow: -10px 0 0 #569ff7;\n}\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n.flatpickr-day.inRange {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n          box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n}\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: rgba(57,57,57,0.3);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover {\n  cursor: not-allowed;\n  color: rgba(57,57,57,0.1);\n}\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;\n          box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;\n}\n.flatpickr-day.hidden {\n  visibility: hidden;\n}\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n.flatpickr-weekwrapper {\n  float: left;\n}\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n  -webkit-box-shadow: 1px 0 0 #e6e6e6;\n          box-shadow: 1px 0 0 #e6e6e6;\n}\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n.flatpickr-weekwrapper span.flatpickr-day,\n.flatpickr-weekwrapper span.flatpickr-day:hover {\n  display: block;\n  width: 100%;\n  max-width: none;\n  color: rgba(57,57,57,0.3);\n  background: transparent;\n  cursor: default;\n  border: none;\n}\n.flatpickr-innerContainer {\n  display: block;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n}\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flatpickr-time:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.flatpickr-time .numInputWrapper {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #393939;\n}\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: #393939;\n}\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n.flatpickr-time input {\n  background: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  color: #393939;\n  font-size: 14px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  float: left;\n  line-height: inherit;\n  color: #393939;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n.flatpickr-time input:hover,\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time input:focus,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: #eee;\n}\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\n@-webkit-keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/form.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/form.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.modal {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.33s ease-in-out;
}

.modal.is-open {
    opacity: 1;
    pointer-events: all;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #0b0f13ad;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-container {
    width: 400px;
    background-color: var(--white);
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    transform: translateY(10%);
    transition: transform 0.33s ease-in-out;
}

.is-open .modal-container {
    transform: translateY(0);
}

.modal-container header {
    display: flex;
    justify-content: center;
    font-size: 1.25rem;
}

.required-info {
    text-align: center;
}

.modal-form {
    font-size: 1rem;
    margin-top: 1rem;
}

.modal-form > :not(:last-child) {
    display: flex;
    flex-direction: column;
}

.modal-form > :not(:first-child) {
    margin-top: 1rem;
}

#task-form > .flex-row {
    flex-direction: row;
    gap: 0.5rem;
}

span[aria-label="asterisk"],
span[aria-label="required"] {
    color: var(--red);
}

#tb-description {
    resize: none;
}

.fancy-textbox {
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--grey);
    border-radius: 0.5rem;
    font-size: 1rem;
    padding: 0.5rem;
    background-color: var(--white);
    font-family: "Nunito", sans-serif;
    transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;
}

.fancy-textbox:hover {
    border-color: var(--accent);
}

.fancy-textbox:active,
.fancy-textbox:focus {
    background-color: var(--white-grey);
    outline: none;
    border-color: var(--accent);
}

.form-buttons {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    gap: 1rem;
}

.form-buttons button {
    font-size: 1.25rem;
}

#project-select-container.display-none {
    display: none;
}`, "",{"version":3,"sources":["webpack://./src/style/form.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,oBAAoB;IACpB,qCAAqC;AACzC;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,2BAA2B;IAC3B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,mBAAmB;IACnB,oBAAoB;IACpB,0BAA0B;IAC1B,uCAAuC;AAC3C;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,WAAW;AACf;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,6BAA6B;IAC7B,qBAAqB;IACrB,eAAe;IACf,eAAe;IACf,8BAA8B;IAC9B,iCAAiC;IACjC,4EAA4E;AAChF;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;;IAEI,mCAAmC;IACnC,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB","sourcesContent":[".modal {\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.33s ease-in-out;\n}\n\n.modal.is-open {\n    opacity: 1;\n    pointer-events: all;\n}\n\n.modal-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #0b0f13ad;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal-container {\n    width: 400px;\n    background-color: var(--white);\n    border-radius: 1rem;\n    padding: 1rem 1.5rem;\n    transform: translateY(10%);\n    transition: transform 0.33s ease-in-out;\n}\n\n.is-open .modal-container {\n    transform: translateY(0);\n}\n\n.modal-container header {\n    display: flex;\n    justify-content: center;\n    font-size: 1.25rem;\n}\n\n.required-info {\n    text-align: center;\n}\n\n.modal-form {\n    font-size: 1rem;\n    margin-top: 1rem;\n}\n\n.modal-form > :not(:last-child) {\n    display: flex;\n    flex-direction: column;\n}\n\n.modal-form > :not(:first-child) {\n    margin-top: 1rem;\n}\n\n#task-form > .flex-row {\n    flex-direction: row;\n    gap: 0.5rem;\n}\n\nspan[aria-label=\"asterisk\"],\nspan[aria-label=\"required\"] {\n    color: var(--red);\n}\n\n#tb-description {\n    resize: none;\n}\n\n.fancy-textbox {\n    padding: 0.25rem 0.5rem;\n    border: 1px solid var(--grey);\n    border-radius: 0.5rem;\n    font-size: 1rem;\n    padding: 0.5rem;\n    background-color: var(--white);\n    font-family: \"Nunito\", sans-serif;\n    transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n\n.fancy-textbox:hover {\n    border-color: var(--accent);\n}\n\n.fancy-textbox:active,\n.fancy-textbox:focus {\n    background-color: var(--white-grey);\n    outline: none;\n    border-color: var(--accent);\n}\n\n.form-buttons {\n    display: flex;\n    justify-content: center;\n    margin-top: 1.5rem;\n    gap: 1rem;\n}\n\n.form-buttons button {\n    font-size: 1.25rem;\n}\n\n#project-select-container.display-none {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&family=Poppins:wght@400;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --black-lighter: #3f5870;
    --black: #34495e;
    --black-darker: #2c3e50;
    --white: #f2f4f5;
    --white-grey: #dce1e3;
    --grey: #95a5a6;
    --grey-dark: #95a5a6;
    --green: #2ecc71;
    --accent: #2ecc71;
    --accent-darker: #27ae60;
    --red: #e74c3c;
    --orange: #f39c12;

    --sidebar-width: 300px;
    --sidebar-offset: 0px;
}

*,
::after,
::before {
    margin: 0;
    box-sizing: border-box;
    font-family: "Nunito", "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
    color: var(--black);
}

body {
    min-height: 100vh;
    background-color: var(--white);
    position: relative;
}

.main-wrapper {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: var(--sidebar-width) 1fr;
    grid-template-areas: "sidebar project-content";
    position: relative;
    transition: grid-template-columns 0.33s, opacity .33s ease-in-out;
}

div[hidden] {
    display: none;
}

.main-wrapper.expanded {
    grid-template-columns: 0px 1fr;
}

h1,
h2,
h3,
h4 {
    font-family: "Poppins", sans-serif;
    color: var(--black-darker);
}

span {
    color: inherit;
}

hr {
    background-color: var(--accent);
    border: none;
    height: 1px;
}

.display-none {
    display: none;
}

.hidden {
    opacity: 0;
}

.sidebar {
    height: 100vh;
    width: var(--sidebar-width);
    position: fixed;
    background-color: var(--black-darker);
    color: var(--white);
    border-radius: 0 1rem 1rem 0;
    padding: 1rem;
    transition: transform 0.33s;
}

.sidebar.collapsed {
    transform: translateX(calc(var(--sidebar-width) * -1));
}

.sidebar-collapse-button {
    position: absolute;
    top: 5%;
    left: calc(100% + 1.25rem);
    transform: translate(-50%, -50%);

    padding: 0.25rem;
    background-color: var(--black-darker);
    border: none;
    border-radius: 0 999px 999px 0;
    display: flex;
    place-content: center;
}

.sidebar-collapse-button span {
    font-size: 3rem;
    transition: transform 0.33s;
    transform: scaleX(-1);
}

.sidebar.collapsed .sidebar-collapse-button span {
    transform: scaleX(1);
}

.sidebar-collapse-button:hover {
    cursor: pointer;
}

.sidebar * {
    color: inherit;
}

.sidebar hr {
    margin: 1.5rem auto;
    background-color: var(--black-lighter);
    border: none;
    height: 2px;
}

.logo-container {
    display: flex;
    align-items: center;
    padding-right: 15px;
    gap: 0.5rem;
    text-decoration: none;
}

.logo-text {
    font-weight: 900;
    font-size: 2.5rem;
    font-family: "Poppins", sans-serif;
}

.logo-image {
    font-size: 2.5rem;
    color: var(--accent);
    user-select: none;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar .project-container ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.project-selector {
    font-size: 1.25rem;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    border: 1px solid var(--black);
    border-radius: 0.5rem;
    user-select: none;
    font-weight: 700;
    font-family: "Poppins";
    background-color: var(--black-darker);
    word-wrap: break-word;
    position: relative;

    transition-property: background-color border-color color border;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
}

.selector-actions {
    display: flex;
    gap: 0.5rem;

    position: absolute;
    transform: translate(-50%, -50%);
    right: -1.5rem;
    top: 50%;

    opacity: 0;
    pointer-events: none;
}

.selector-button {
    background-color: var(--black);
    border: none;
    outline: 1px solid var(--black-lighter);
    border-radius: 4px;
    aspect-ratio: 1 / 1;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: outline 0.2s ease-in-out, background-color 0.2s ease-in-out;
}

.selector-button span {
    font-size: 1.25rem;
    pointer-events: none;
}

.selector-button:hover {
    cursor: pointer;
    outline-color: var(--accent);
}

.project-selector.selected .selector-actions {
    opacity: 1;
    pointer-events: all;
}

.project-selector:hover {
    background-color: var(--black);
    border-color: var(--black-lighter);
    cursor: pointer;
}

.project-selector:hover .selector-actions {
    opacity: 1;
    pointer-events: all;
}

.selector-button:active {
    background-color: var(--black-lighter);
}

.project-selector.selected {
    color: var(--white);
    background-color: var(--black);
    border: 1px solid var(--accent);
}

#user-projects {
    overflow-y: scroll;
    max-height: 50vh;
}

#new-project {
    display: flex;
    align-items: center;
    background-color: var(--accent);
    color: var(--black-darker);
    border: none;
    padding: 0.25rem 0.75rem;
    border-radius: 0.5rem;
    margin: 1rem auto 0;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
}

#new-project:hover {
    cursor: pointer;
    outline: 1px solid var(--white);
}

#new-project:active {
    background-color: var(--accent-darker);
}

.project-container h3 {
    margin: 0 1rem 0.5rem;
    font-size: 1.5rem;
}

.project-main {
    width: min(100ch, 100%);
    padding: 2rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: project-content;
}

.project-header {
    color: var(--black);
}

.project-header h2 {
    font-size: 2.5rem;
}

#project-header {
    font-size: 1.5rem;
    overflow: auto;
}

.project-header span {
    font-family: inherit;
    font-size: inherit;
}

#header-name,
.project-name {
    color: var(--accent);
}

#header-name {
    word-wrap: break-word;
}

#tasks-container {
    border: 2px solid var(--black);
    border-radius: 1rem;
    margin-top: 4rem;
    width: 100%;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.button-transition {
    transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
}

.project-actions {
    display: flex;
    justify-content: space-between;
}

.project-button {
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--grey);
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: var(--white);
    font-family: "Nunito", sans-serif;
    font-weight: 700;

    display: flex;
    align-items: center;
}

.project-button span {
    color: var(--accent);
}

.project-button:hover,
.combo-box:hover {
    border-color: var(--accent);
    cursor: pointer;
}

.project-button:active,
.combo-box:active {
    background-color: var(--white-grey);
}

.sort-container {
    font-weight: 700;
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.combo-box {
    padding: 0.5rem;
    border: 1px solid var(--grey);
    border-radius: 0.5rem;
    background-color: var(--white);
    font-size: 1rem;
    font-weight: 700;
    transition: border-color 0.2s ease-in-out;
    height: 100%;
}

.placeholder-wrapper {
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
    display: none;
}

.placeholder-wrapper img {
    width: 70%;
}

#project-tasks:empty ~ .placeholder-wrapper {
    display: grid;
    place-items: center;
    gap: 1rem;
}

#project-tasks {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
}

#project-tasks:empty {
    display: none;
}

.task-container {
    border: 1px solid var(--grey);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    /* overflow-y: clip; */
}

.project-task {
    width: 100%;
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.task-content {
    flex: 1 1 0;
    height: 100%;
    display: grid;
}

.task-header {
    /* display: inline; */
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    transition: color 0.33s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    width: fit-content;
}

.task-header::before {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    position: absolute;
    top: 50%;
    left: -4px;
    background-color: var(--black-darker);
    transition: width 0.33s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.33s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

input[type="checkbox"]:checked + .task-content > .task-header {
    color: var(--grey-dark);
}

input[type="checkbox"]:checked + .task-content > .task-header::before {
    width: calc(100% + 8px);
    background-color: var(--grey-dark);
}

.task-info {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.horizontal-separator {
    height: 4px;
    width: 4px;
    background-color: var(--black-lighter);
    border-radius: 999px;
}

.task-priority {
    --priority-color: var(--grey);
    padding: 2px 6px;
    background-color: var(--priority-color);
    color: var(--white);
    border-radius: 4px;
    font-weight: 700;
    text-transform: capitalize;
}

.task-priority.high-priority {
    --priority-color: var(--red);
}

.medium-priority {
    --priority-color: var(--orange);
}

.low-priority {
    --priority-color: var(--green);
}

.task-actions {
    display: flex;
    gap: 0.5rem;
}

.task-button {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--black);
    background-color: var(--white);
    position: relative;
}

.task-button span {
    color: var(--black);
    transform-origin: center;
    transition: transform 0.2s cubic-bezier(0.17, 0.84, 0.44, 1);
    pointer-events: none;

    position: absolute;
    transform-origin: center;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
}

.task-button:hover span {
    transform: scale(1.1);
}

.task-button:hover {
    border-color: var(--accent);
    cursor: pointer;
}

.task-button:active {
    background-color: var(--white-grey);
}

.accordion-container {
    display: grid;
    grid-template-rows: 0fr;

    transition: grid-template-rows 0.25s;
}

.task-description {
    overflow: hidden;
    transition: margin 0.25s;
}

.accordion-visible > .task-description {
    margin-top: 1rem;
}

.accordion-visible {
    grid-template-rows: 1fr;
}

input[type="checkbox"] {
    all: unset;
    position: relative;
    height: 1.5rem;
    width: 1.5rem;
}

input[type="checkbox"]:hover {
    cursor: pointer;
}

input[type="checkbox"]::before {
    content: "";
    position: absolute;
    height: 1.5rem;
    width: 1.5rem;
    border: 2px solid var(--grey);
    border-radius: 55px;
    transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
}

input[type="checkbox"]:hover::before {
    border-color: var(--accent);
}

input[type="checkbox"]::after {
    content: "";
    position: absolute;
    height: 0rem;
    width: 0rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--accent);
    border-radius: 55px;

    transition: height 0.33s ease-in-out, width 0.33s ease-in-out;
}

input[type="checkbox"]:checked::after {
    height: 1rem;
    width: 1rem;
}

.signup-page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    transition: opacity .33s ease-in-out;
}

.signup-container {
    max-width: 400px;
    flex: 1;
    margin: 0 1rem;
}

.signup-container .signup-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding-right: 1rem;
}

.signup-input {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
}

.signup-input label {
    margin-left: 0.5rem;
}

.signup-submit-buttons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
    gap: 0.5rem;
}

.signup-submit-buttons button {
    display: flex;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    padding: 0.5rem 1rem;
    background-color: var(--accent);
    border: 1px solid transparent;
    color: var(--white);

    transition: background-color 0.33s ease-in-out, border-color 0.33s ease-in-out;
}

.signup-submit-buttons button:hover {
    border-color: var(--black);
}

.signup-submit-buttons button:active {
    background-color: var(--accent-darker);
}

.signup-container hr {
    background-color: var(--grey);
    margin: 2rem 1rem;
}
`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&family=Poppins:wght@400;700;900&display=swap\");\n\n:root {\n    --black-lighter: #3f5870;\n    --black: #34495e;\n    --black-darker: #2c3e50;\n    --white: #f2f4f5;\n    --white-grey: #dce1e3;\n    --grey: #95a5a6;\n    --grey-dark: #95a5a6;\n    --green: #2ecc71;\n    --accent: #2ecc71;\n    --accent-darker: #27ae60;\n    --red: #e74c3c;\n    --orange: #f39c12;\n\n    --sidebar-width: 300px;\n    --sidebar-offset: 0px;\n}\n\n*,\n::after,\n::before {\n    margin: 0;\n    box-sizing: border-box;\n    font-family: \"Nunito\", \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", Arial, sans-serif;\n    color: var(--black);\n}\n\nbody {\n    min-height: 100vh;\n    background-color: var(--white);\n    position: relative;\n}\n\n.main-wrapper {\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: var(--sidebar-width) 1fr;\n    grid-template-areas: \"sidebar project-content\";\n    position: relative;\n    transition: grid-template-columns 0.33s, opacity .33s ease-in-out;\n}\n\ndiv[hidden] {\n    display: none;\n}\n\n.main-wrapper.expanded {\n    grid-template-columns: 0px 1fr;\n}\n\nh1,\nh2,\nh3,\nh4 {\n    font-family: \"Poppins\", sans-serif;\n    color: var(--black-darker);\n}\n\nspan {\n    color: inherit;\n}\n\nhr {\n    background-color: var(--accent);\n    border: none;\n    height: 1px;\n}\n\n.display-none {\n    display: none;\n}\n\n.hidden {\n    opacity: 0;\n}\n\n.sidebar {\n    height: 100vh;\n    width: var(--sidebar-width);\n    position: fixed;\n    background-color: var(--black-darker);\n    color: var(--white);\n    border-radius: 0 1rem 1rem 0;\n    padding: 1rem;\n    transition: transform 0.33s;\n}\n\n.sidebar.collapsed {\n    transform: translateX(calc(var(--sidebar-width) * -1));\n}\n\n.sidebar-collapse-button {\n    position: absolute;\n    top: 5%;\n    left: calc(100% + 1.25rem);\n    transform: translate(-50%, -50%);\n\n    padding: 0.25rem;\n    background-color: var(--black-darker);\n    border: none;\n    border-radius: 0 999px 999px 0;\n    display: flex;\n    place-content: center;\n}\n\n.sidebar-collapse-button span {\n    font-size: 3rem;\n    transition: transform 0.33s;\n    transform: scaleX(-1);\n}\n\n.sidebar.collapsed .sidebar-collapse-button span {\n    transform: scaleX(1);\n}\n\n.sidebar-collapse-button:hover {\n    cursor: pointer;\n}\n\n.sidebar * {\n    color: inherit;\n}\n\n.sidebar hr {\n    margin: 1.5rem auto;\n    background-color: var(--black-lighter);\n    border: none;\n    height: 2px;\n}\n\n.logo-container {\n    display: flex;\n    align-items: center;\n    padding-right: 15px;\n    gap: 0.5rem;\n    text-decoration: none;\n}\n\n.logo-text {\n    font-weight: 900;\n    font-size: 2.5rem;\n    font-family: \"Poppins\", sans-serif;\n}\n\n.logo-image {\n    font-size: 2.5rem;\n    color: var(--accent);\n    user-select: none;\n}\n\n.sidebar ul {\n    list-style: none;\n    padding: 0;\n}\n\n.sidebar .project-container ul {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.project-selector {\n    font-size: 1.25rem;\n    padding: 0.5rem 0.5rem 0.5rem 1rem;\n    border: 1px solid var(--black);\n    border-radius: 0.5rem;\n    user-select: none;\n    font-weight: 700;\n    font-family: \"Poppins\";\n    background-color: var(--black-darker);\n    word-wrap: break-word;\n    position: relative;\n\n    transition-property: background-color border-color color border;\n    transition-duration: 0.2s;\n    transition-timing-function: ease-in-out;\n}\n\n.selector-actions {\n    display: flex;\n    gap: 0.5rem;\n\n    position: absolute;\n    transform: translate(-50%, -50%);\n    right: -1.5rem;\n    top: 50%;\n\n    opacity: 0;\n    pointer-events: none;\n}\n\n.selector-button {\n    background-color: var(--black);\n    border: none;\n    outline: 1px solid var(--black-lighter);\n    border-radius: 4px;\n    aspect-ratio: 1 / 1;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: outline 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n\n.selector-button span {\n    font-size: 1.25rem;\n    pointer-events: none;\n}\n\n.selector-button:hover {\n    cursor: pointer;\n    outline-color: var(--accent);\n}\n\n.project-selector.selected .selector-actions {\n    opacity: 1;\n    pointer-events: all;\n}\n\n.project-selector:hover {\n    background-color: var(--black);\n    border-color: var(--black-lighter);\n    cursor: pointer;\n}\n\n.project-selector:hover .selector-actions {\n    opacity: 1;\n    pointer-events: all;\n}\n\n.selector-button:active {\n    background-color: var(--black-lighter);\n}\n\n.project-selector.selected {\n    color: var(--white);\n    background-color: var(--black);\n    border: 1px solid var(--accent);\n}\n\n#user-projects {\n    overflow-y: scroll;\n    max-height: 50vh;\n}\n\n#new-project {\n    display: flex;\n    align-items: center;\n    background-color: var(--accent);\n    color: var(--black-darker);\n    border: none;\n    padding: 0.25rem 0.75rem;\n    border-radius: 0.5rem;\n    margin: 1rem auto 0;\n    font-family: \"Poppins\", sans-serif;\n    font-weight: 700;\n}\n\n#new-project:hover {\n    cursor: pointer;\n    outline: 1px solid var(--white);\n}\n\n#new-project:active {\n    background-color: var(--accent-darker);\n}\n\n.project-container h3 {\n    margin: 0 1rem 0.5rem;\n    font-size: 1.5rem;\n}\n\n.project-main {\n    width: min(100ch, 100%);\n    padding: 2rem;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    grid-area: project-content;\n}\n\n.project-header {\n    color: var(--black);\n}\n\n.project-header h2 {\n    font-size: 2.5rem;\n}\n\n#project-header {\n    font-size: 1.5rem;\n    overflow: auto;\n}\n\n.project-header span {\n    font-family: inherit;\n    font-size: inherit;\n}\n\n#header-name,\n.project-name {\n    color: var(--accent);\n}\n\n#header-name {\n    word-wrap: break-word;\n}\n\n#tasks-container {\n    border: 2px solid var(--black);\n    border-radius: 1rem;\n    margin-top: 4rem;\n    width: 100%;\n    padding: 1rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.button-transition {\n    transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;\n}\n\n.project-actions {\n    display: flex;\n    justify-content: space-between;\n}\n\n.project-button {\n    padding: 0.25rem 0.5rem;\n    border: 1px solid var(--grey);\n    border-radius: 0.5rem;\n    font-size: 1rem;\n    background-color: var(--white);\n    font-family: \"Nunito\", sans-serif;\n    font-weight: 700;\n\n    display: flex;\n    align-items: center;\n}\n\n.project-button span {\n    color: var(--accent);\n}\n\n.project-button:hover,\n.combo-box:hover {\n    border-color: var(--accent);\n    cursor: pointer;\n}\n\n.project-button:active,\n.combo-box:active {\n    background-color: var(--white-grey);\n}\n\n.sort-container {\n    font-weight: 700;\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n}\n\n.combo-box {\n    padding: 0.5rem;\n    border: 1px solid var(--grey);\n    border-radius: 0.5rem;\n    background-color: var(--white);\n    font-size: 1rem;\n    font-weight: 700;\n    transition: border-color 0.2s ease-in-out;\n    height: 100%;\n}\n\n.placeholder-wrapper {\n    padding: 1rem;\n    font-size: 1.5rem;\n    font-weight: 700;\n    display: none;\n}\n\n.placeholder-wrapper img {\n    width: 70%;\n}\n\n#project-tasks:empty ~ .placeholder-wrapper {\n    display: grid;\n    place-items: center;\n    gap: 1rem;\n}\n\n#project-tasks {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 0.5rem;\n}\n\n#project-tasks:empty {\n    display: none;\n}\n\n.task-container {\n    border: 1px solid var(--grey);\n    border-radius: 0.5rem;\n    padding: 0.5rem 1rem;\n    /* overflow-y: clip; */\n}\n\n.project-task {\n    width: 100%;\n    position: relative;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n}\n\n.task-content {\n    flex: 1 1 0;\n    height: 100%;\n    display: grid;\n}\n\n.task-header {\n    /* display: inline; */\n    display: flex;\n    align-items: center;\n    font-size: 1.25rem;\n    transition: color 0.33s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n    position: relative;\n    width: fit-content;\n}\n\n.task-header::before {\n    content: \"\";\n    display: block;\n    height: 2px;\n    width: 0;\n    position: absolute;\n    top: 50%;\n    left: -4px;\n    background-color: var(--black-darker);\n    transition: width 0.33s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.33s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\ninput[type=\"checkbox\"]:checked + .task-content > .task-header {\n    color: var(--grey-dark);\n}\n\ninput[type=\"checkbox\"]:checked + .task-content > .task-header::before {\n    width: calc(100% + 8px);\n    background-color: var(--grey-dark);\n}\n\n.task-info {\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n}\n\n.horizontal-separator {\n    height: 4px;\n    width: 4px;\n    background-color: var(--black-lighter);\n    border-radius: 999px;\n}\n\n.task-priority {\n    --priority-color: var(--grey);\n    padding: 2px 6px;\n    background-color: var(--priority-color);\n    color: var(--white);\n    border-radius: 4px;\n    font-weight: 700;\n    text-transform: capitalize;\n}\n\n.task-priority.high-priority {\n    --priority-color: var(--red);\n}\n\n.medium-priority {\n    --priority-color: var(--orange);\n}\n\n.low-priority {\n    --priority-color: var(--green);\n}\n\n.task-actions {\n    display: flex;\n    gap: 0.5rem;\n}\n\n.task-button {\n    height: 2.5rem;\n    width: 2.5rem;\n    border-radius: 0.5rem;\n    border: 1px solid var(--black);\n    background-color: var(--white);\n    position: relative;\n}\n\n.task-button span {\n    color: var(--black);\n    transform-origin: center;\n    transition: transform 0.2s cubic-bezier(0.17, 0.84, 0.44, 1);\n    pointer-events: none;\n\n    position: absolute;\n    transform-origin: center;\n    top: 50%;\n    left: 50%;\n    translate: -50% -50%;\n}\n\n.task-button:hover span {\n    transform: scale(1.1);\n}\n\n.task-button:hover {\n    border-color: var(--accent);\n    cursor: pointer;\n}\n\n.task-button:active {\n    background-color: var(--white-grey);\n}\n\n.accordion-container {\n    display: grid;\n    grid-template-rows: 0fr;\n\n    transition: grid-template-rows 0.25s;\n}\n\n.task-description {\n    overflow: hidden;\n    transition: margin 0.25s;\n}\n\n.accordion-visible > .task-description {\n    margin-top: 1rem;\n}\n\n.accordion-visible {\n    grid-template-rows: 1fr;\n}\n\ninput[type=\"checkbox\"] {\n    all: unset;\n    position: relative;\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\ninput[type=\"checkbox\"]:hover {\n    cursor: pointer;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"\";\n    position: absolute;\n    height: 1.5rem;\n    width: 1.5rem;\n    border: 2px solid var(--grey);\n    border-radius: 55px;\n    transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;\n}\n\ninput[type=\"checkbox\"]:hover::before {\n    border-color: var(--accent);\n}\n\ninput[type=\"checkbox\"]::after {\n    content: \"\";\n    position: absolute;\n    height: 0rem;\n    width: 0rem;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: var(--accent);\n    border-radius: 55px;\n\n    transition: height 0.33s ease-in-out, width 0.33s ease-in-out;\n}\n\ninput[type=\"checkbox\"]:checked::after {\n    height: 1rem;\n    width: 1rem;\n}\n\n.signup-page {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n    transition: opacity .33s ease-in-out;\n}\n\n.signup-container {\n    max-width: 400px;\n    flex: 1;\n    margin: 0 1rem;\n}\n\n.signup-container .signup-logo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.5rem;\n    padding-right: 1rem;\n}\n\n.signup-input {\n    margin-top: 1rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.signup-input label {\n    margin-left: 0.5rem;\n}\n\n.signup-submit-buttons {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));\n    gap: 0.5rem;\n}\n\n.signup-submit-buttons button {\n    display: flex;\n    justify-content: center;\n    font-family: \"Poppins\", sans-serif;\n    padding: 0.5rem 1rem;\n    background-color: var(--accent);\n    border: 1px solid transparent;\n    color: var(--white);\n\n    transition: background-color 0.33s ease-in-out, border-color 0.33s ease-in-out;\n}\n\n.signup-submit-buttons button:hover {\n    border-color: var(--black);\n}\n\n.signup-submit-buttons button:active {\n    background-color: var(--accent-darker);\n}\n\n.signup-container hr {\n    background-color: var(--grey);\n    margin: 2rem 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, object) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }
  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      ;
      target[property] = object[property];
    }
  }
  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(object) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, object);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/add/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/add/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ add)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addMonths/index.js */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");






/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(dirtyDate, duration) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  if (!duration || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(duration) !== 'object') return new Date(NaN);
  var years = duration.years ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.years) : 0;
  var months = duration.months ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.months) : 0;
  var weeks = duration.weeks ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.weeks) : 0;
  var days = duration.days ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.days) : 0;
  var hours = duration.hours ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.hours) : 0;
  var minutes = duration.minutes ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.minutes) : 0;
  var seconds = duration.seconds ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.seconds) : 0;

  // Add years and months
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var dateWithMonths = months || years ? (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, months + years * 12) : date;

  // Add weeks and days
  var dateWithDays = days || weeks ? (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateWithMonths, days + weeks * 7) : dateWithMonths;

  // Add days, hours, minutes and seconds
  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1000;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMonths/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  var dayOfMonth = date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceStrict/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceStrict/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceStrict)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");








var MILLISECONDS_IN_MINUTE = 1000 * 60;
var MINUTES_IN_DAY = 60 * 24;
var MINUTES_IN_MONTH = MINUTES_IN_DAY * 30;
var MINUTES_IN_YEAR = MINUTES_IN_DAY * 365;

/**
 * @name formatDistanceStrict
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.roundingMethod` must be 'floor', 'ceil' or 'round'
 * @throws {RangeError} `options.unit` must be 'second', 'minute', 'hour', 'day', 'month' or 'year'
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistanceStrict(new Date(2014, 6, 2), new Date(2015, 0, 2))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * const result = formatDistanceStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistanceStrict(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * const result = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {
 *   unit: 'minute'
 * })
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2015
 * // to 28 January 2015, in months, rounded up?
 * const result = formatDistanceStrict(new Date(2015, 0, 28), new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistanceStrict(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> '1 jaro'
 */

function formatDistanceStrict(dirtyDate, dirtyBaseDate, options) {
  var _ref, _options$locale, _options$roundingMeth;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  if (!locale.formatDistance) {
    throw new RangeError('locale must contain localize.formatDistance property');
  }
  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, dirtyBaseDate);
  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }
  var localizeOptions = (0,_lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(options), {
    addSuffix: Boolean(options === null || options === void 0 ? void 0 : options.addSuffix),
    comparison: comparison
  });
  var dateLeft;
  var dateRight;
  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
  }
  var roundingMethod = String((_options$roundingMeth = options === null || options === void 0 ? void 0 : options.roundingMethod) !== null && _options$roundingMeth !== void 0 ? _options$roundingMeth : 'round');
  var roundingMethodFn;
  if (roundingMethod === 'floor') {
    roundingMethodFn = Math.floor;
  } else if (roundingMethod === 'ceil') {
    roundingMethodFn = Math.ceil;
  } else if (roundingMethod === 'round') {
    roundingMethodFn = Math.round;
  } else {
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  }
  var milliseconds = dateRight.getTime() - dateLeft.getTime();
  var minutes = milliseconds / MILLISECONDS_IN_MINUTE;
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateLeft);

  // Use DST-normalized difference in minutes for years, months and days;
  // use regular difference in minutes for hours, minutes and seconds.
  var dstNormalizedMinutes = (milliseconds - timezoneOffset) / MILLISECONDS_IN_MINUTE;
  var defaultUnit = options === null || options === void 0 ? void 0 : options.unit;
  var unit;
  if (!defaultUnit) {
    if (minutes < 1) {
      unit = 'second';
    } else if (minutes < 60) {
      unit = 'minute';
    } else if (minutes < MINUTES_IN_DAY) {
      unit = 'hour';
    } else if (dstNormalizedMinutes < MINUTES_IN_MONTH) {
      unit = 'day';
    } else if (dstNormalizedMinutes < MINUTES_IN_YEAR) {
      unit = 'month';
    } else {
      unit = 'year';
    }
  } else {
    unit = String(defaultUnit);
  }

  // 0 up to 60 seconds
  if (unit === 'second') {
    var seconds = roundingMethodFn(milliseconds / 1000);
    return locale.formatDistance('xSeconds', seconds, localizeOptions);

    // 1 up to 60 mins
  } else if (unit === 'minute') {
    var roundedMinutes = roundingMethodFn(minutes);
    return locale.formatDistance('xMinutes', roundedMinutes, localizeOptions);

    // 1 up to 24 hours
  } else if (unit === 'hour') {
    var hours = roundingMethodFn(minutes / 60);
    return locale.formatDistance('xHours', hours, localizeOptions);

    // 1 up to 30 days
  } else if (unit === 'day') {
    var days = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions);

    // 1 up to 12 months
  } else if (unit === 'month') {
    var months = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_MONTH);
    return months === 12 && defaultUnit !== 'month' ? locale.formatDistance('xYears', 1, localizeOptions) : locale.formatDistance('xMonths', months, localizeOptions);

    // 1 year up to max Date
  } else if (unit === 'year') {
    var years = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_YEAR);
    return locale.formatDistance('xYears', years, localizeOptions);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceToNowStrict)
/* harmony export */ });
/* harmony import */ var _formatDistanceStrict_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formatDistanceStrict/index.js */ "./node_modules/date-fns/esm/formatDistanceStrict/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name formatDistanceToNowStrict
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * const result = formatDistanceToNowStrict(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * const result = formatDistanceToNowStrict(
 *   new Date(2015, 0, 1, 0, 0, 15)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * const result = formatDistanceToNowStrict(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in 1 year'
 *
 * @example
 * // If today is 28 January 2015,
 * // what is the distance to 1 January 2015, in months, rounded up??
 * const result = formatDistanceToNowStrict(new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016 in Esperanto?
 * const eoLocale = require('date-fns/locale/eo')
 * const result = formatDistanceToNowStrict(
 *   new Date(2016, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> '1 jaro'
 */
function formatDistanceToNowStrict(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_formatDistanceStrict_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */

function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/index.js":
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/options */ "./node_modules/flatpickr/dist/esm/types/options.js");
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./l10n/default */ "./node_modules/flatpickr/dist/esm/l10n/default.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/flatpickr/dist/esm/utils/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dom */ "./node_modules/flatpickr/dist/esm/utils/dom.js");
/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/dates */ "./node_modules/flatpickr/dist/esm/utils/dates.js");
/* harmony import */ var _utils_formatting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/formatting */ "./node_modules/flatpickr/dist/esm/utils/formatting.js");
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/polyfills */ "./node_modules/flatpickr/dist/esm/utils/polyfills.js");
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_polyfills__WEBPACK_IMPORTED_MODULE_6__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};







var DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
    var self = {
        config: __assign(__assign({}, _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults), flatpickr.defaultConfig),
        l10n: _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"],
    };
    self.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({ config: self.config, l10n: self.l10n });
    self._handlers = [];
    self.pluginElements = [];
    self.loadedPlugins = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self._positionCalendar = positionCalendar;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self.onMouseOver = onMouseOver;
    self._createElement = _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement;
    self.createDay = createDay;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.updateValue = updateValue;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;
    function setupHelperFunctions() {
        self.utils = {
            getDaysInMonth: function (month, yr) {
                if (month === void 0) { month = self.currentMonth; }
                if (yr === void 0) { yr = self.currentYear; }
                if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                    return 29;
                return self.l10n.daysInMonth[month];
            },
        };
    }
    function init() {
        self.element = self.input = element;
        self.isOpen = false;
        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();
        if (!self.isMobile)
            build();
        bindEvents();
        if (self.selectedDates.length || self.config.noCalendar) {
            if (self.config.enableTime) {
                setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
            }
            updateValue(false);
        }
        setCalendarWidth();
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (!self.isMobile && isSafari) {
            positionCalendar();
        }
        triggerEvent("onReady");
    }
    function getClosestActiveElement() {
        var _a;
        return (((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode())
            .activeElement || document.activeElement);
    }
    function bindToInstance(fn) {
        return fn.bind(self);
    }
    function setCalendarWidth() {
        var config = self.config;
        if (config.weekNumbers === false && config.showMonths === 1) {
            return;
        }
        else if (config.noCalendar !== true) {
            window.requestAnimationFrame(function () {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.style.visibility = "hidden";
                    self.calendarContainer.style.display = "block";
                }
                if (self.daysContainer !== undefined) {
                    var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                    self.daysContainer.style.width = daysWidth + "px";
                    self.calendarContainer.style.width =
                        daysWidth +
                            (self.weekWrapper !== undefined
                                ? self.weekWrapper.offsetWidth
                                : 0) +
                            "px";
                    self.calendarContainer.style.removeProperty("visibility");
                    self.calendarContainer.style.removeProperty("display");
                }
            });
        }
    }
    function updateTime(e) {
        if (self.selectedDates.length === 0) {
            var defaultDate = self.config.minDate === undefined ||
                (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(new Date(), self.config.minDate) >= 0
                ? new Date()
                : new Date(self.config.minDate.getTime());
            var defaults = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
            defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
            self.selectedDates = [defaultDate];
            self.latestSelectedDateObj = defaultDate;
        }
        if (e !== undefined && e.type !== "blur") {
            timeWrapper(e);
        }
        var prevValue = self._input.value;
        setHoursFromInputs();
        updateValue();
        if (self._input.value !== prevValue) {
            self._debouncedChange();
        }
    }
    function ampm2military(hour, amPM) {
        return (hour % 12) + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(amPM === self.l10n.amPM[1]);
    }
    function military2ampm(hour) {
        switch (hour % 24) {
            case 0:
            case 12:
                return 12;
            default:
                return hour % 12;
        }
    }
    function setHoursFromInputs() {
        if (self.hourElement === undefined || self.minuteElement === undefined)
            return;
        var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
            ? (parseInt(self.secondElement.value, 10) || 0) % 60
            : 0;
        if (self.amPM !== undefined) {
            hours = ampm2military(hours, self.amPM.textContent);
        }
        var limitMinHours = self.config.minTime !== undefined ||
            (self.config.minDate &&
                self.minDateHasTime &&
                self.latestSelectedDateObj &&
                (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(self.latestSelectedDateObj, self.config.minDate, true) ===
                    0);
        var limitMaxHours = self.config.maxTime !== undefined ||
            (self.config.maxDate &&
                self.maxDateHasTime &&
                self.latestSelectedDateObj &&
                (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(self.latestSelectedDateObj, self.config.maxDate, true) ===
                    0);
        if (self.config.maxTime !== undefined &&
            self.config.minTime !== undefined &&
            self.config.minTime > self.config.maxTime) {
            var minBound = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
            var maxBound = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
            var currentTime = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(hours, minutes, seconds);
            if (currentTime > maxBound && currentTime < minBound) {
                var result = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.parseSeconds)(minBound);
                hours = result[0];
                minutes = result[1];
                seconds = result[2];
            }
        }
        else {
            if (limitMaxHours) {
                var maxTime = self.config.maxTime !== undefined
                    ? self.config.maxTime
                    : self.config.maxDate;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours())
                    minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes())
                    seconds = Math.min(seconds, maxTime.getSeconds());
            }
            if (limitMinHours) {
                var minTime = self.config.minTime !== undefined
                    ? self.config.minTime
                    : self.config.minDate;
                hours = Math.max(hours, minTime.getHours());
                if (hours === minTime.getHours() && minutes < minTime.getMinutes())
                    minutes = minTime.getMinutes();
                if (minutes === minTime.getMinutes())
                    seconds = Math.max(seconds, minTime.getSeconds());
            }
        }
        setHours(hours, minutes, seconds);
    }
    function setHoursFromDate(dateObj) {
        var date = dateObj || self.latestSelectedDateObj;
        if (date && date instanceof Date) {
            setHours(date.getHours(), date.getMinutes(), date.getSeconds());
        }
    }
    function setHours(hours, minutes, seconds) {
        if (self.latestSelectedDateObj !== undefined) {
            self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        }
        if (!self.hourElement || !self.minuteElement || self.isMobile)
            return;
        self.hourElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(!self.config.time_24hr
            ? ((12 + hours) % 12) + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(hours % 12 === 0)
            : hours);
        self.minuteElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(minutes);
        if (self.amPM !== undefined)
            self.amPM.textContent = self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(hours >= 12)];
        if (self.secondElement !== undefined)
            self.secondElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(seconds);
    }
    function onYearInput(event) {
        var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(event);
        var year = parseInt(eventTarget.value) + (event.delta || 0);
        if (year / 1000 > 1 ||
            (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
            changeYear(year);
        }
    }
    function bind(element, event, handler, options) {
        if (event instanceof Array)
            return event.forEach(function (ev) { return bind(element, ev, handler, options); });
        if (element instanceof Array)
            return element.forEach(function (el) { return bind(el, event, handler, options); });
        element.addEventListener(event, handler, options);
        self._handlers.push({
            remove: function () { return element.removeEventListener(event, handler, options); },
        });
    }
    function triggerChange() {
        triggerEvent("onChange");
    }
    function bindEvents() {
        if (self.config.wrap) {
            ["open", "close", "toggle", "clear"].forEach(function (evt) {
                Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                    return bind(el, "click", self[evt]);
                });
            });
        }
        if (self.isMobile) {
            setupMobile();
            return;
        }
        var debouncedResize = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.debounce)(onResize, 50);
        self._debouncedChange = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.debounce)(triggerChange, DEBOUNCED_CHANGE_MS);
        if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
            bind(self.daysContainer, "mouseover", function (e) {
                if (self.config.mode === "range")
                    onMouseOver((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e));
            });
        bind(self._input, "keydown", onKeyDown);
        if (self.calendarContainer !== undefined) {
            bind(self.calendarContainer, "keydown", onKeyDown);
        }
        if (!self.config.inline && !self.config.static)
            bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined)
            bind(window.document, "touchstart", documentClick);
        else
            bind(window.document, "mousedown", documentClick);
        bind(window.document, "focus", documentClick, { capture: true });
        if (self.config.clickOpens === true) {
            bind(self._input, "focus", self.open);
            bind(self._input, "click", self.open);
        }
        if (self.daysContainer !== undefined) {
            bind(self.monthNav, "click", onMonthNavClick);
            bind(self.monthNav, ["keyup", "increment"], onYearInput);
            bind(self.daysContainer, "click", selectDate);
        }
        if (self.timeContainer !== undefined &&
            self.minuteElement !== undefined &&
            self.hourElement !== undefined) {
            var selText = function (e) {
                return (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e).select();
            };
            bind(self.timeContainer, ["increment"], updateTime);
            bind(self.timeContainer, "blur", updateTime, { capture: true });
            bind(self.timeContainer, "click", timeIncrement);
            bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
            if (self.secondElement !== undefined)
                bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
            if (self.amPM !== undefined) {
                bind(self.amPM, "click", function (e) {
                    updateTime(e);
                });
            }
        }
        if (self.config.allowInput) {
            bind(self._input, "blur", onBlur);
        }
    }
    function jumpToDate(jumpDate, triggerChange) {
        var jumpTo = jumpDate !== undefined
            ? self.parseDate(jumpDate)
            : self.latestSelectedDateObj ||
                (self.config.minDate && self.config.minDate > self.now
                    ? self.config.minDate
                    : self.config.maxDate && self.config.maxDate < self.now
                        ? self.config.maxDate
                        : self.now);
        var oldYear = self.currentYear;
        var oldMonth = self.currentMonth;
        try {
            if (jumpTo !== undefined) {
                self.currentYear = jumpTo.getFullYear();
                self.currentMonth = jumpTo.getMonth();
            }
        }
        catch (e) {
            e.message = "Invalid date supplied: " + jumpTo;
            self.config.errorHandler(e);
        }
        if (triggerChange && self.currentYear !== oldYear) {
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        if (triggerChange &&
            (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
            triggerEvent("onMonthChange");
        }
        self.redraw();
    }
    function timeIncrement(e) {
        var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        if (~eventTarget.className.indexOf("arrow"))
            incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
    }
    function incrementNumInput(e, delta, inputElem) {
        var target = e && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        var input = inputElem ||
            (target && target.parentNode && target.parentNode.firstChild);
        var event = createEvent("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
    }
    function build() {
        var fragment = window.document.createDocumentFragment();
        self.calendarContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-calendar");
        self.calendarContainer.tabIndex = -1;
        if (!self.config.noCalendar) {
            fragment.appendChild(buildMonthNav());
            self.innerContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-innerContainer");
            if (self.config.weekNumbers) {
                var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                self.innerContainer.appendChild(weekWrapper);
                self.weekNumbers = weekNumbers;
                self.weekWrapper = weekWrapper;
            }
            self.rContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-rContainer");
            self.rContainer.appendChild(buildWeekdays());
            if (!self.daysContainer) {
                self.daysContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-days");
                self.daysContainer.tabIndex = -1;
            }
            buildDays();
            self.rContainer.appendChild(self.daysContainer);
            self.innerContainer.appendChild(self.rContainer);
            fragment.appendChild(self.innerContainer);
        }
        if (self.config.enableTime) {
            fragment.appendChild(buildTime());
        }
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rangeMode", self.config.mode === "range");
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "animate", self.config.animate === true);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
        self.calendarContainer.appendChild(fragment);
        var customAppend = self.config.appendTo !== undefined &&
            self.config.appendTo.nodeType !== undefined;
        if (self.config.inline || self.config.static) {
            self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
            if (self.config.inline) {
                if (!customAppend && self.element.parentNode)
                    self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                else if (self.config.appendTo !== undefined)
                    self.config.appendTo.appendChild(self.calendarContainer);
            }
            if (self.config.static) {
                var wrapper = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-wrapper");
                if (self.element.parentNode)
                    self.element.parentNode.insertBefore(wrapper, self.element);
                wrapper.appendChild(self.element);
                if (self.altInput)
                    wrapper.appendChild(self.altInput);
                wrapper.appendChild(self.calendarContainer);
            }
        }
        if (!self.config.static && !self.config.inline)
            (self.config.appendTo !== undefined
                ? self.config.appendTo
                : window.document.body).appendChild(self.calendarContainer);
    }
    function createDay(className, date, _dayNumber, i) {
        var dateIsEnabled = isEnabled(date, true), dayElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
        if (className.indexOf("hidden") === -1 &&
            (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.now) === 0) {
            self.todayDateElem = dayElement;
            dayElement.classList.add("today");
            dayElement.setAttribute("aria-current", "date");
        }
        if (dateIsEnabled) {
            dayElement.tabIndex = -1;
            if (isDateSelected(date)) {
                dayElement.classList.add("selected");
                self.selectedDateElem = dayElement;
                if (self.config.mode === "range") {
                    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(dayElement, "startRange", self.selectedDates[0] &&
                        (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[0], true) === 0);
                    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(dayElement, "endRange", self.selectedDates[1] &&
                        (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[1], true) === 0);
                    if (className === "nextMonthDay")
                        dayElement.classList.add("inRange");
                }
            }
        }
        else {
            dayElement.classList.add("flatpickr-disabled");
        }
        if (self.config.mode === "range") {
            if (isDateInRange(date) && !isDateSelected(date))
                dayElement.classList.add("inRange");
        }
        if (self.weekNumbers &&
            self.config.showMonths === 1 &&
            className !== "prevMonthDay" &&
            i % 7 === 6) {
            self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
        }
        triggerEvent("onDayCreate", dayElement);
        return dayElement;
    }
    function focusOnDayElem(targetNode) {
        targetNode.focus();
        if (self.config.mode === "range")
            onMouseOver(targetNode);
    }
    function getFirstAvailableDay(delta) {
        var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        for (var m = startMonth; m != endMonth; m += delta) {
            var month = self.daysContainer.children[m];
            var startIndex = delta > 0 ? 0 : month.children.length - 1;
            var endIndex = delta > 0 ? month.children.length : -1;
            for (var i = startIndex; i != endIndex; i += delta) {
                var c = month.children[i];
                if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                    return c;
            }
        }
        return undefined;
    }
    function getNextAvailableDay(current, delta) {
        var givenMonth = current.className.indexOf("Month") === -1
            ? current.dateObj.getMonth()
            : self.currentMonth;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        var loopDelta = delta > 0 ? 1 : -1;
        for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
            var month = self.daysContainer.children[m];
            var startIndex = givenMonth - self.currentMonth === m
                ? current.$i + delta
                : delta < 0
                    ? month.children.length - 1
                    : 0;
            var numMonthDays = month.children.length;
            for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                var c = month.children[i];
                if (c.className.indexOf("hidden") === -1 &&
                    isEnabled(c.dateObj) &&
                    Math.abs(current.$i - i) >= Math.abs(delta))
                    return focusOnDayElem(c);
            }
        }
        self.changeMonth(loopDelta);
        focusOnDay(getFirstAvailableDay(loopDelta), 0);
        return undefined;
    }
    function focusOnDay(current, offset) {
        var activeElement = getClosestActiveElement();
        var dayFocused = isInView(activeElement || document.body);
        var startElem = current !== undefined
            ? current
            : dayFocused
                ? activeElement
                : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                    ? self.selectedDateElem
                    : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                        ? self.todayDateElem
                        : getFirstAvailableDay(offset > 0 ? 1 : -1);
        if (startElem === undefined) {
            self._input.focus();
        }
        else if (!dayFocused) {
            focusOnDayElem(startElem);
        }
        else {
            getNextAvailableDay(startElem, offset);
        }
    }
    function buildMonthDays(year, month) {
        var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
        var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
        var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
        var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
        for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
        }
        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
        }
        for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
            (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
        }
        var dayContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "dayContainer");
        dayContainer.appendChild(days);
        return dayContainer;
    }
    function buildDays() {
        if (self.daysContainer === undefined) {
            return;
        }
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.daysContainer);
        if (self.weekNumbers)
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.weekNumbers);
        var frag = document.createDocumentFragment();
        for (var i = 0; i < self.config.showMonths; i++) {
            var d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
        }
        self.daysContainer.appendChild(frag);
        self.days = self.daysContainer.firstChild;
        if (self.config.mode === "range" && self.selectedDates.length === 1) {
            onMouseOver();
        }
    }
    function buildMonthSwitch() {
        if (self.config.showMonths > 1 ||
            self.config.monthSelectorType !== "dropdown")
            return;
        var shouldBuildMonth = function (month) {
            if (self.config.minDate !== undefined &&
                self.currentYear === self.config.minDate.getFullYear() &&
                month < self.config.minDate.getMonth()) {
                return false;
            }
            return !(self.config.maxDate !== undefined &&
                self.currentYear === self.config.maxDate.getFullYear() &&
                month > self.config.maxDate.getMonth());
        };
        self.monthsDropdownContainer.tabIndex = -1;
        self.monthsDropdownContainer.innerHTML = "";
        for (var i = 0; i < 12; i++) {
            if (!shouldBuildMonth(i))
                continue;
            var month = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("option", "flatpickr-monthDropdown-month");
            month.value = new Date(self.currentYear, i).getMonth().toString();
            month.textContent = (0,_utils_formatting__WEBPACK_IMPORTED_MODULE_5__.monthToStr)(i, self.config.shorthandCurrentMonth, self.l10n);
            month.tabIndex = -1;
            if (self.currentMonth === i) {
                month.selected = true;
            }
            self.monthsDropdownContainer.appendChild(month);
        }
    }
    function buildMonth() {
        var container = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-month");
        var monthNavFragment = window.document.createDocumentFragment();
        var monthElement;
        if (self.config.showMonths > 1 ||
            self.config.monthSelectorType === "static") {
            monthElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "cur-month");
        }
        else {
            self.monthsDropdownContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("select", "flatpickr-monthDropdown-months");
            self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
            bind(self.monthsDropdownContainer, "change", function (e) {
                var target = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
                var selectedMonth = parseInt(target.value, 10);
                self.changeMonth(selectedMonth - self.currentMonth);
                triggerEvent("onMonthChange");
            });
            buildMonthSwitch();
            monthElement = self.monthsDropdownContainer;
        }
        var yearInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("cur-year", { tabindex: "-1" });
        var yearElement = yearInput.getElementsByTagName("input")[0];
        yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
        if (self.config.minDate) {
            yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
        }
        if (self.config.maxDate) {
            yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
            yearElement.disabled =
                !!self.config.minDate &&
                    self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }
        var currentMonth = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-current-month");
        currentMonth.appendChild(monthElement);
        currentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(currentMonth);
        container.appendChild(monthNavFragment);
        return {
            container: container,
            yearElement: yearElement,
            monthElement: monthElement,
        };
    }
    function buildMonths() {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.monthNav);
        self.monthNav.appendChild(self.prevMonthNav);
        if (self.config.showMonths) {
            self.yearElements = [];
            self.monthElements = [];
        }
        for (var m = self.config.showMonths; m--;) {
            var month = buildMonth();
            self.yearElements.push(month.yearElement);
            self.monthElements.push(month.monthElement);
            self.monthNav.appendChild(month.container);
        }
        self.monthNav.appendChild(self.nextMonthNav);
    }
    function buildMonthNav() {
        self.monthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-months");
        self.yearElements = [];
        self.monthElements = [];
        self.prevMonthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;
        self.nextMonthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;
        buildMonths();
        Object.defineProperty(self, "_hidePrevMonthArrow", {
            get: function () { return self.__hidePrevMonthArrow; },
            set: function (bool) {
                if (self.__hidePrevMonthArrow !== bool) {
                    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.prevMonthNav, "flatpickr-disabled", bool);
                    self.__hidePrevMonthArrow = bool;
                }
            },
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
            get: function () { return self.__hideNextMonthArrow; },
            set: function (bool) {
                if (self.__hideNextMonthArrow !== bool) {
                    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.nextMonthNav, "flatpickr-disabled", bool);
                    self.__hideNextMonthArrow = bool;
                }
            },
        });
        self.currentYearElement = self.yearElements[0];
        updateNavigationCurrentMonth();
        return self.monthNav;
    }
    function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar)
            self.calendarContainer.classList.add("noCalendar");
        var defaults = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
        self.timeContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        var separator = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-time-separator", ":");
        var hourInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-hour", {
            "aria-label": self.l10n.hourAriaLabel,
        });
        self.hourElement = hourInput.getElementsByTagName("input")[0];
        var minuteInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-minute", {
            "aria-label": self.l10n.minuteAriaLabel,
        });
        self.minuteElement = minuteInput.getElementsByTagName("input")[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getHours()
            : self.config.time_24hr
                ? defaults.hours
                : military2ampm(defaults.hours));
        self.minuteElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getMinutes()
            : defaults.minutes);
        self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
        self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
        self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
        self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
        self.hourElement.setAttribute("maxlength", "2");
        self.minuteElement.setAttribute("min", "0");
        self.minuteElement.setAttribute("max", "59");
        self.minuteElement.setAttribute("maxlength", "2");
        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);
        if (self.config.time_24hr)
            self.timeContainer.classList.add("time24hr");
        if (self.config.enableSeconds) {
            self.timeContainer.classList.add("hasSeconds");
            var secondInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-second");
            self.secondElement = secondInput.getElementsByTagName("input")[0];
            self.secondElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getSeconds()
                : defaults.seconds);
            self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
            self.secondElement.setAttribute("min", "0");
            self.secondElement.setAttribute("max", "59");
            self.secondElement.setAttribute("maxlength", "2");
            self.timeContainer.appendChild((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-time-separator", ":"));
            self.timeContainer.appendChild(secondInput);
        }
        if (!self.config.time_24hr) {
            self.amPM = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-am-pm", self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)((self.latestSelectedDateObj
                ? self.hourElement.value
                : self.config.defaultHour) > 11)]);
            self.amPM.title = self.l10n.toggleTitle;
            self.amPM.tabIndex = -1;
            self.timeContainer.appendChild(self.amPM);
        }
        return self.timeContainer;
    }
    function buildWeekdays() {
        if (!self.weekdayContainer)
            self.weekdayContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekdays");
        else
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.weekdayContainer);
        for (var i = self.config.showMonths; i--;) {
            var container = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekdaycontainer");
            self.weekdayContainer.appendChild(container);
        }
        updateWeekdays();
        return self.weekdayContainer;
    }
    function updateWeekdays() {
        if (!self.weekdayContainer) {
            return;
        }
        var firstDayOfWeek = self.l10n.firstDayOfWeek;
        var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
            weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
        }
        for (var i = self.config.showMonths; i--;) {
            self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
        }
    }
    function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        var weekWrapper = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        var weekNumbers = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
            weekWrapper: weekWrapper,
            weekNumbers: weekNumbers,
        };
    }
    function changeMonth(value, isOffset) {
        if (isOffset === void 0) { isOffset = true; }
        var delta = isOffset ? value : value - self.currentMonth;
        if ((delta < 0 && self._hidePrevMonthArrow === true) ||
            (delta > 0 && self._hideNextMonthArrow === true))
            return;
        self.currentMonth += delta;
        if (self.currentMonth < 0 || self.currentMonth > 11) {
            self.currentYear += self.currentMonth > 11 ? 1 : -1;
            self.currentMonth = (self.currentMonth + 12) % 12;
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        buildDays();
        triggerEvent("onMonthChange");
        updateNavigationCurrentMonth();
    }
    function clear(triggerChangeEvent, toInitial) {
        if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
        if (toInitial === void 0) { toInitial = true; }
        self.input.value = "";
        if (self.altInput !== undefined)
            self.altInput.value = "";
        if (self.mobileInput !== undefined)
            self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = undefined;
        if (toInitial === true) {
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
        }
        if (self.config.enableTime === true) {
            var _a = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
            setHours(hours, minutes, seconds);
        }
        self.redraw();
        if (triggerChangeEvent)
            triggerEvent("onChange");
    }
    function close() {
        self.isOpen = false;
        if (!self.isMobile) {
            if (self.calendarContainer !== undefined) {
                self.calendarContainer.classList.remove("open");
            }
            if (self._input !== undefined) {
                self._input.classList.remove("active");
            }
        }
        triggerEvent("onClose");
    }
    function destroy() {
        if (self.config !== undefined)
            triggerEvent("onDestroy");
        for (var i = self._handlers.length; i--;) {
            self._handlers[i].remove();
        }
        self._handlers = [];
        if (self.mobileInput) {
            if (self.mobileInput.parentNode)
                self.mobileInput.parentNode.removeChild(self.mobileInput);
            self.mobileInput = undefined;
        }
        else if (self.calendarContainer && self.calendarContainer.parentNode) {
            if (self.config.static && self.calendarContainer.parentNode) {
                var wrapper = self.calendarContainer.parentNode;
                wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                if (wrapper.parentNode) {
                    while (wrapper.firstChild)
                        wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                    wrapper.parentNode.removeChild(wrapper);
                }
            }
            else
                self.calendarContainer.parentNode.removeChild(self.calendarContainer);
        }
        if (self.altInput) {
            self.input.type = "text";
            if (self.altInput.parentNode)
                self.altInput.parentNode.removeChild(self.altInput);
            delete self.altInput;
        }
        if (self.input) {
            self.input.type = self.input._type;
            self.input.classList.remove("flatpickr-input");
            self.input.removeAttribute("readonly");
        }
        [
            "_showTimeInput",
            "latestSelectedDateObj",
            "_hideNextMonthArrow",
            "_hidePrevMonthArrow",
            "__hideNextMonthArrow",
            "__hidePrevMonthArrow",
            "isMobile",
            "isOpen",
            "selectedDateElem",
            "minDateHasTime",
            "maxDateHasTime",
            "days",
            "daysContainer",
            "_input",
            "_positionElement",
            "innerContainer",
            "rContainer",
            "monthNav",
            "todayDateElem",
            "calendarContainer",
            "weekdayContainer",
            "prevMonthNav",
            "nextMonthNav",
            "monthsDropdownContainer",
            "currentMonthElement",
            "currentYearElement",
            "navigationCurrentMonth",
            "selectedDateElem",
            "config",
        ].forEach(function (k) {
            try {
                delete self[k];
            }
            catch (_) { }
        });
    }
    function isCalendarElem(elem) {
        return self.calendarContainer.contains(elem);
    }
    function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
            var eventTarget_1 = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
            var isCalendarElement = isCalendarElem(eventTarget_1);
            var isInput = eventTarget_1 === self.input ||
                eventTarget_1 === self.altInput ||
                self.element.contains(eventTarget_1) ||
                (e.path &&
                    e.path.indexOf &&
                    (~e.path.indexOf(self.input) ||
                        ~e.path.indexOf(self.altInput)));
            var lostFocus = !isInput &&
                !isCalendarElement &&
                !isCalendarElem(e.relatedTarget);
            var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                return elem.contains(eventTarget_1);
            });
            if (lostFocus && isIgnored) {
                if (self.config.allowInput) {
                    self.setDate(self._input.value, false, self.config.altInput
                        ? self.config.altFormat
                        : self.config.dateFormat);
                }
                if (self.timeContainer !== undefined &&
                    self.minuteElement !== undefined &&
                    self.hourElement !== undefined &&
                    self.input.value !== "" &&
                    self.input.value !== undefined) {
                    updateTime();
                }
                self.close();
                if (self.config &&
                    self.config.mode === "range" &&
                    self.selectedDates.length === 1)
                    self.clear(false);
            }
        }
    }
    function changeYear(newYear) {
        if (!newYear ||
            (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
            (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
            return;
        var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;
        if (self.config.maxDate &&
            self.currentYear === self.config.maxDate.getFullYear()) {
            self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        }
        else if (self.config.minDate &&
            self.currentYear === self.config.minDate.getFullYear()) {
            self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        }
        if (isNewYear) {
            self.redraw();
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
    }
    function isEnabled(date, timeless) {
        var _a;
        if (timeless === void 0) { timeless = true; }
        var dateToCheck = self.parseDate(date, undefined, timeless);
        if ((self.config.minDate &&
            dateToCheck &&
            (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
            (self.config.maxDate &&
                dateToCheck &&
                (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
            return false;
        if (!self.config.enable && self.config.disable.length === 0)
            return true;
        if (dateToCheck === undefined)
            return false;
        var bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
        for (var i = 0, d = void 0; i < array.length; i++) {
            d = array[i];
            if (typeof d === "function" &&
                d(dateToCheck))
                return bool;
            else if (d instanceof Date &&
                dateToCheck !== undefined &&
                d.getTime() === dateToCheck.getTime())
                return bool;
            else if (typeof d === "string") {
                var parsed = self.parseDate(d, undefined, true);
                return parsed && parsed.getTime() === dateToCheck.getTime()
                    ? bool
                    : !bool;
            }
            else if (typeof d === "object" &&
                dateToCheck !== undefined &&
                d.from &&
                d.to &&
                dateToCheck.getTime() >= d.from.getTime() &&
                dateToCheck.getTime() <= d.to.getTime())
                return bool;
        }
        return !bool;
    }
    function isInView(elem) {
        if (self.daysContainer !== undefined)
            return (elem.className.indexOf("hidden") === -1 &&
                elem.className.indexOf("flatpickr-disabled") === -1 &&
                self.daysContainer.contains(elem));
        return false;
    }
    function onBlur(e) {
        var isInput = e.target === self._input;
        var valueChanged = self._input.value.trimEnd() !== getDateStr();
        if (isInput &&
            valueChanged &&
            !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
            self.setDate(self._input.value, true, e.target === self.altInput
                ? self.config.altFormat
                : self.config.dateFormat);
        }
    }
    function onKeyDown(e) {
        var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        var isInput = self.config.wrap
            ? element.contains(eventTarget)
            : eventTarget === self._input;
        var allowInput = self.config.allowInput;
        var allowKeydown = self.isOpen && (!allowInput || !isInput);
        var allowInlineKeydown = self.config.inline && isInput && !allowInput;
        if (e.keyCode === 13 && isInput) {
            if (allowInput) {
                self.setDate(self._input.value, true, eventTarget === self.altInput
                    ? self.config.altFormat
                    : self.config.dateFormat);
                self.close();
                return eventTarget.blur();
            }
            else {
                self.open();
            }
        }
        else if (isCalendarElem(eventTarget) ||
            allowKeydown ||
            allowInlineKeydown) {
            var isTimeObj = !!self.timeContainer &&
                self.timeContainer.contains(eventTarget);
            switch (e.keyCode) {
                case 13:
                    if (isTimeObj) {
                        e.preventDefault();
                        updateTime();
                        focusAndClose();
                    }
                    else
                        selectDate(e);
                    break;
                case 27:
                    e.preventDefault();
                    focusAndClose();
                    break;
                case 8:
                case 46:
                    if (isInput && !self.config.allowInput) {
                        e.preventDefault();
                        self.clear();
                    }
                    break;
                case 37:
                case 39:
                    if (!isTimeObj && !isInput) {
                        e.preventDefault();
                        var activeElement = getClosestActiveElement();
                        if (self.daysContainer !== undefined &&
                            (allowInput === false ||
                                (activeElement && isInView(activeElement)))) {
                            var delta_1 = e.keyCode === 39 ? 1 : -1;
                            if (!e.ctrlKey)
                                focusOnDay(undefined, delta_1);
                            else {
                                e.stopPropagation();
                                changeMonth(delta_1);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                        }
                    }
                    else if (self.hourElement)
                        self.hourElement.focus();
                    break;
                case 38:
                case 40:
                    e.preventDefault();
                    var delta = e.keyCode === 40 ? 1 : -1;
                    if ((self.daysContainer &&
                        eventTarget.$i !== undefined) ||
                        eventTarget === self.input ||
                        eventTarget === self.altInput) {
                        if (e.ctrlKey) {
                            e.stopPropagation();
                            changeYear(self.currentYear - delta);
                            focusOnDay(getFirstAvailableDay(1), 0);
                        }
                        else if (!isTimeObj)
                            focusOnDay(undefined, delta * 7);
                    }
                    else if (eventTarget === self.currentYearElement) {
                        changeYear(self.currentYear - delta);
                    }
                    else if (self.config.enableTime) {
                        if (!isTimeObj && self.hourElement)
                            self.hourElement.focus();
                        updateTime(e);
                        self._debouncedChange();
                    }
                    break;
                case 9:
                    if (isTimeObj) {
                        var elems = [
                            self.hourElement,
                            self.minuteElement,
                            self.secondElement,
                            self.amPM,
                        ]
                            .concat(self.pluginElements)
                            .filter(function (x) { return x; });
                        var i = elems.indexOf(eventTarget);
                        if (i !== -1) {
                            var target = elems[i + (e.shiftKey ? -1 : 1)];
                            e.preventDefault();
                            (target || self._input).focus();
                        }
                    }
                    else if (!self.config.noCalendar &&
                        self.daysContainer &&
                        self.daysContainer.contains(eventTarget) &&
                        e.shiftKey) {
                        e.preventDefault();
                        self._input.focus();
                    }
                    break;
                default:
                    break;
            }
        }
        if (self.amPM !== undefined && eventTarget === self.amPM) {
            switch (e.key) {
                case self.l10n.amPM[0].charAt(0):
                case self.l10n.amPM[0].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[0];
                    setHoursFromInputs();
                    updateValue();
                    break;
                case self.l10n.amPM[1].charAt(0):
                case self.l10n.amPM[1].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[1];
                    setHoursFromInputs();
                    updateValue();
                    break;
            }
        }
        if (isInput || isCalendarElem(eventTarget)) {
            triggerEvent("onKeyDown", e);
        }
    }
    function onMouseOver(elem, cellClass) {
        if (cellClass === void 0) { cellClass = "flatpickr-day"; }
        if (self.selectedDates.length !== 1 ||
            (elem &&
                (!elem.classList.contains(cellClass) ||
                    elem.classList.contains("flatpickr-disabled"))))
            return;
        var hoverDate = elem
            ? elem.dateObj.getTime()
            : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
        var containsDisabled = false;
        var minRange = 0, maxRange = 0;
        for (var t = rangeStartDate; t < rangeEndDate; t += _utils_dates__WEBPACK_IMPORTED_MODULE_4__.duration.DAY) {
            if (!isEnabled(new Date(t), true)) {
                containsDisabled =
                    containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                if (t < initialDate && (!minRange || t > minRange))
                    minRange = t;
                else if (t > initialDate && (!maxRange || t < maxRange))
                    maxRange = t;
            }
        }
        var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
        hoverableCells.forEach(function (dayElem) {
            var date = dayElem.dateObj;
            var timestamp = date.getTime();
            var outOfRange = (minRange > 0 && timestamp < minRange) ||
                (maxRange > 0 && timestamp > maxRange);
            if (outOfRange) {
                dayElem.classList.add("notAllowed");
                ["inRange", "startRange", "endRange"].forEach(function (c) {
                    dayElem.classList.remove(c);
                });
                return;
            }
            else if (containsDisabled && !outOfRange)
                return;
            ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                dayElem.classList.remove(c);
            });
            if (elem !== undefined) {
                elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                    ? "startRange"
                    : "endRange");
                if (initialDate < hoverDate && timestamp === initialDate)
                    dayElem.classList.add("startRange");
                else if (initialDate > hoverDate && timestamp === initialDate)
                    dayElem.classList.add("endRange");
                if (timestamp >= minRange &&
                    (maxRange === 0 || timestamp <= maxRange) &&
                    (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.isBetween)(timestamp, initialDate, hoverDate))
                    dayElem.classList.add("inRange");
            }
        });
    }
    function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline)
            positionCalendar();
    }
    function open(e, positionElement) {
        if (positionElement === void 0) { positionElement = self._positionElement; }
        if (self.isMobile === true) {
            if (e) {
                e.preventDefault();
                var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
                if (eventTarget) {
                    eventTarget.blur();
                }
            }
            if (self.mobileInput !== undefined) {
                self.mobileInput.focus();
                self.mobileInput.click();
            }
            triggerEvent("onOpen");
            return;
        }
        else if (self._input.disabled || self.config.inline) {
            return;
        }
        var wasOpen = self.isOpen;
        self.isOpen = true;
        if (!wasOpen) {
            self.calendarContainer.classList.add("open");
            self._input.classList.add("active");
            triggerEvent("onOpen");
            positionCalendar(positionElement);
        }
        if (self.config.enableTime === true && self.config.noCalendar === true) {
            if (self.config.allowInput === false &&
                (e === undefined ||
                    !self.timeContainer.contains(e.relatedTarget))) {
                setTimeout(function () { return self.hourElement.select(); }, 50);
            }
        }
    }
    function minMaxDateSetter(type) {
        return function (date) {
            var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat));
            var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
            if (dateObj !== undefined) {
                self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                    dateObj.getHours() > 0 ||
                        dateObj.getMinutes() > 0 ||
                        dateObj.getSeconds() > 0;
            }
            if (self.selectedDates) {
                self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                if (!self.selectedDates.length && type === "min")
                    setHoursFromDate(dateObj);
                updateValue();
            }
            if (self.daysContainer) {
                redraw();
                if (dateObj !== undefined)
                    self.currentYearElement[type] = dateObj.getFullYear().toString();
                else
                    self.currentYearElement.removeAttribute(type);
                self.currentYearElement.disabled =
                    !!inverseDateObj &&
                        dateObj !== undefined &&
                        inverseDateObj.getFullYear() === dateObj.getFullYear();
            }
        };
    }
    function parseConfig() {
        var boolOpts = [
            "wrap",
            "weekNumbers",
            "allowInput",
            "allowInvalidPreload",
            "clickOpens",
            "time_24hr",
            "enableTime",
            "noCalendar",
            "altInput",
            "shorthandCurrentMonth",
            "inline",
            "static",
            "enableSeconds",
            "disableMobile",
        ];
        var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
        var formats = {};
        self.config.parseDate = userConfig.parseDate;
        self.config.formatDate = userConfig.formatDate;
        Object.defineProperty(self.config, "enable", {
            get: function () { return self.config._enable; },
            set: function (dates) {
                self.config._enable = parseDateRules(dates);
            },
        });
        Object.defineProperty(self.config, "disable", {
            get: function () { return self.config._disable; },
            set: function (dates) {
                self.config._disable = parseDateRules(dates);
            },
        });
        var timeMode = userConfig.mode === "time";
        if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
            var defaultDateFormat = flatpickr.defaultConfig.dateFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults.dateFormat;
            formats.dateFormat =
                userConfig.noCalendar || timeMode
                    ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                    : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
        }
        if (userConfig.altInput &&
            (userConfig.enableTime || timeMode) &&
            !userConfig.altFormat) {
            var defaultAltFormat = flatpickr.defaultConfig.altFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults.altFormat;
            formats.altFormat =
                userConfig.noCalendar || timeMode
                    ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                    : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
        }
        Object.defineProperty(self.config, "minDate", {
            get: function () { return self.config._minDate; },
            set: minMaxDateSetter("min"),
        });
        Object.defineProperty(self.config, "maxDate", {
            get: function () { return self.config._maxDate; },
            set: minMaxDateSetter("max"),
        });
        var minMaxTimeSetter = function (type) { return function (val) {
            self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
        }; };
        Object.defineProperty(self.config, "minTime", {
            get: function () { return self.config._minTime; },
            set: minMaxTimeSetter("min"),
        });
        Object.defineProperty(self.config, "maxTime", {
            get: function () { return self.config._maxTime; },
            set: minMaxTimeSetter("max"),
        });
        if (userConfig.mode === "time") {
            self.config.noCalendar = true;
            self.config.enableTime = true;
        }
        Object.assign(self.config, formats, userConfig);
        for (var i = 0; i < boolOpts.length; i++)
            self.config[boolOpts[i]] =
                self.config[boolOpts[i]] === true ||
                    self.config[boolOpts[i]] === "true";
        _types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {
            self.config[hook] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(self.config[hook] || []).map(bindToInstance);
        });
        self.isMobile =
            !self.config.disableMobile &&
                !self.config.inline &&
                self.config.mode === "single" &&
                !self.config.disable.length &&
                !self.config.enable &&
                !self.config.weekNumbers &&
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        for (var i = 0; i < self.config.plugins.length; i++) {
            var pluginConf = self.config.plugins[i](self) || {};
            for (var key in pluginConf) {
                if (_types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.indexOf(key) > -1) {
                    self.config[key] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(pluginConf[key])
                        .map(bindToInstance)
                        .concat(self.config[key]);
                }
                else if (typeof userConfig[key] === "undefined")
                    self.config[key] = pluginConf[key];
            }
        }
        if (!userConfig.altInputClass) {
            self.config.altInputClass =
                getInputElem().className + " " + self.config.altInputClass;
        }
        triggerEvent("onParseConfig");
    }
    function getInputElem() {
        return self.config.wrap
            ? element.querySelector("[data-input]")
            : element;
    }
    function setupLocale() {
        if (typeof self.config.locale !== "object" &&
            typeof flatpickr.l10ns[self.config.locale] === "undefined")
            self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
        self.l10n = __assign(__assign({}, flatpickr.l10ns.default), (typeof self.config.locale === "object"
            ? self.config.locale
            : self.config.locale !== "default"
                ? flatpickr.l10ns[self.config.locale]
                : undefined));
        _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
        _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
        _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.M = "(" + self.l10n.months.shorthand.join("|") + ")";
        _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.F = "(" + self.l10n.months.longhand.join("|") + ")";
        _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
        var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
        if (userConfig.time_24hr === undefined &&
            flatpickr.defaultConfig.time_24hr === undefined) {
            self.config.time_24hr = self.l10n.time_24hr;
        }
        self.formatDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateFormatter)(self);
        self.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({ config: self.config, l10n: self.l10n });
    }
    function positionCalendar(customPositionElement) {
        if (typeof self.config.position === "function") {
            return void self.config.position(self, customPositionElement);
        }
        if (self.calendarContainer === undefined)
            return;
        triggerEvent("onPreCalendarPosition");
        var positionElement = customPositionElement || self._positionElement;
        var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
            (configPosVertical !== "below" &&
                distanceFromBottom < calendarHeight &&
                inputBounds.top > calendarHeight);
        var top = window.pageYOffset +
            inputBounds.top +
            (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowTop", !showOnTop);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline)
            return;
        var left = window.pageXOffset + inputBounds.left;
        var isCenter = false;
        var isRight = false;
        if (configPosHorizontal === "center") {
            left -= (calendarWidth - inputBounds.width) / 2;
            isCenter = true;
        }
        else if (configPosHorizontal === "right") {
            left -= calendarWidth - inputBounds.width;
            isRight = true;
        }
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowCenter", isCenter);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowRight", isRight);
        var right = window.document.body.offsetWidth -
            (window.pageXOffset + inputBounds.right);
        var rightMost = left + calendarWidth > window.document.body.offsetWidth;
        var centerMost = right + calendarWidth > window.document.body.offsetWidth;
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static)
            return;
        self.calendarContainer.style.top = top + "px";
        if (!rightMost) {
            self.calendarContainer.style.left = left + "px";
            self.calendarContainer.style.right = "auto";
        }
        else if (!centerMost) {
            self.calendarContainer.style.left = "auto";
            self.calendarContainer.style.right = right + "px";
        }
        else {
            var doc = getDocumentStyleSheet();
            if (doc === undefined)
                return;
            var bodyWidth = window.document.body.offsetWidth;
            var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
            var centerBefore = ".flatpickr-calendar.centerMost:before";
            var centerAfter = ".flatpickr-calendar.centerMost:after";
            var centerIndex = doc.cssRules.length;
            var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rightMost", false);
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "centerMost", true);
            doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
            self.calendarContainer.style.left = centerLeft + "px";
            self.calendarContainer.style.right = "auto";
        }
    }
    function getDocumentStyleSheet() {
        var editableSheet = null;
        for (var i = 0; i < document.styleSheets.length; i++) {
            var sheet = document.styleSheets[i];
            if (!sheet.cssRules)
                continue;
            try {
                sheet.cssRules;
            }
            catch (err) {
                continue;
            }
            editableSheet = sheet;
            break;
        }
        return editableSheet != null ? editableSheet : createStyleSheet();
    }
    function createStyleSheet() {
        var style = document.createElement("style");
        document.head.appendChild(style);
        return style.sheet;
    }
    function redraw() {
        if (self.config.noCalendar || self.isMobile)
            return;
        buildMonthSwitch();
        updateNavigationCurrentMonth();
        buildDays();
    }
    function focusAndClose() {
        self._input.focus();
        if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
            navigator.msMaxTouchPoints !== undefined) {
            setTimeout(self.close, 0);
        }
        else {
            self.close();
        }
    }
    function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();
        var isSelectable = function (day) {
            return day.classList &&
                day.classList.contains("flatpickr-day") &&
                !day.classList.contains("flatpickr-disabled") &&
                !day.classList.contains("notAllowed");
        };
        var t = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.findParent)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e), isSelectable);
        if (t === undefined)
            return;
        var target = t;
        var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
        var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
            selectedDate.getMonth() >
                self.currentMonth + self.config.showMonths - 1) &&
            self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single")
            self.selectedDates = [selectedDate];
        else if (self.config.mode === "multiple") {
            var selectedIndex = isDateSelected(selectedDate);
            if (selectedIndex)
                self.selectedDates.splice(parseInt(selectedIndex), 1);
            else
                self.selectedDates.push(selectedDate);
        }
        else if (self.config.mode === "range") {
            if (self.selectedDates.length === 2) {
                self.clear(false, false);
            }
            self.latestSelectedDateObj = selectedDate;
            self.selectedDates.push(selectedDate);
            if ((0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(selectedDate, self.selectedDates[0], true) !== 0)
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        setHoursFromInputs();
        if (shouldChangeMonth) {
            var isNewYear = self.currentYear !== selectedDate.getFullYear();
            self.currentYear = selectedDate.getFullYear();
            self.currentMonth = selectedDate.getMonth();
            if (isNewYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            triggerEvent("onMonthChange");
        }
        updateNavigationCurrentMonth();
        buildDays();
        updateValue();
        if (!shouldChangeMonth &&
            self.config.mode !== "range" &&
            self.config.showMonths === 1)
            focusOnDayElem(target);
        else if (self.selectedDateElem !== undefined &&
            self.hourElement === undefined) {
            self.selectedDateElem && self.selectedDateElem.focus();
        }
        if (self.hourElement !== undefined)
            self.hourElement !== undefined && self.hourElement.focus();
        if (self.config.closeOnSelect) {
            var single = self.config.mode === "single" && !self.config.enableTime;
            var range = self.config.mode === "range" &&
                self.selectedDates.length === 2 &&
                !self.config.enableTime;
            if (single || range) {
                focusAndClose();
            }
        }
        triggerChange();
    }
    var CALLBACKS = {
        locale: [setupLocale, updateWeekdays],
        showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
        minDate: [jumpToDate],
        maxDate: [jumpToDate],
        positionElement: [updatePositionElement],
        clickOpens: [
            function () {
                if (self.config.clickOpens === true) {
                    bind(self._input, "focus", self.open);
                    bind(self._input, "click", self.open);
                }
                else {
                    self._input.removeEventListener("focus", self.open);
                    self._input.removeEventListener("click", self.open);
                }
            },
        ],
    };
    function set(option, value) {
        if (option !== null && typeof option === "object") {
            Object.assign(self.config, option);
            for (var key in option) {
                if (CALLBACKS[key] !== undefined)
                    CALLBACKS[key].forEach(function (x) { return x(); });
            }
        }
        else {
            self.config[option] = value;
            if (CALLBACKS[option] !== undefined)
                CALLBACKS[option].forEach(function (x) { return x(); });
            else if (_types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.indexOf(option) > -1)
                self.config[option] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(value);
        }
        self.redraw();
        updateValue(true);
    }
    function setSelectedDate(inputDate, format) {
        var dates = [];
        if (inputDate instanceof Array)
            dates = inputDate.map(function (d) { return self.parseDate(d, format); });
        else if (inputDate instanceof Date || typeof inputDate === "number")
            dates = [self.parseDate(inputDate, format)];
        else if (typeof inputDate === "string") {
            switch (self.config.mode) {
                case "single":
                case "time":
                    dates = [self.parseDate(inputDate, format)];
                    break;
                case "multiple":
                    dates = inputDate
                        .split(self.config.conjunction)
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
                case "range":
                    dates = inputDate
                        .split(self.l10n.rangeSeparator)
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
                default:
                    break;
            }
        }
        else
            self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
        self.selectedDates = (self.config.allowInvalidPreload
            ? dates
            : dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); }));
        if (self.config.mode === "range")
            self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
    }
    function setDate(date, triggerChange, format) {
        if (triggerChange === void 0) { triggerChange = false; }
        if (format === void 0) { format = self.config.dateFormat; }
        if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
            return self.clear(triggerChange);
        setSelectedDate(date, format);
        self.latestSelectedDateObj =
            self.selectedDates[self.selectedDates.length - 1];
        self.redraw();
        jumpToDate(undefined, triggerChange);
        setHoursFromDate();
        if (self.selectedDates.length === 0) {
            self.clear(false);
        }
        updateValue(triggerChange);
        if (triggerChange)
            triggerEvent("onChange");
    }
    function parseDateRules(arr) {
        return arr
            .slice()
            .map(function (rule) {
            if (typeof rule === "string" ||
                typeof rule === "number" ||
                rule instanceof Date) {
                return self.parseDate(rule, undefined, true);
            }
            else if (rule &&
                typeof rule === "object" &&
                rule.from &&
                rule.to)
                return {
                    from: self.parseDate(rule.from, undefined),
                    to: self.parseDate(rule.to, undefined),
                };
            return rule;
        })
            .filter(function (x) { return x; });
    }
    function setupDates() {
        self.selectedDates = [];
        self.now = self.parseDate(self.config.now) || new Date();
        var preloadedDate = self.config.defaultDate ||
            ((self.input.nodeName === "INPUT" ||
                self.input.nodeName === "TEXTAREA") &&
                self.input.placeholder &&
                self.input.value === self.input.placeholder
                ? null
                : self.input.value);
        if (preloadedDate)
            setSelectedDate(preloadedDate, self.config.dateFormat);
        self._initialDate =
            self.selectedDates.length > 0
                ? self.selectedDates[0]
                : self.config.minDate &&
                    self.config.minDate.getTime() > self.now.getTime()
                    ? self.config.minDate
                    : self.config.maxDate &&
                        self.config.maxDate.getTime() < self.now.getTime()
                        ? self.config.maxDate
                        : self.now;
        self.currentYear = self._initialDate.getFullYear();
        self.currentMonth = self._initialDate.getMonth();
        if (self.selectedDates.length > 0)
            self.latestSelectedDateObj = self.selectedDates[0];
        if (self.config.minTime !== undefined)
            self.config.minTime = self.parseDate(self.config.minTime, "H:i");
        if (self.config.maxTime !== undefined)
            self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
        self.minDateHasTime =
            !!self.config.minDate &&
                (self.config.minDate.getHours() > 0 ||
                    self.config.minDate.getMinutes() > 0 ||
                    self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime =
            !!self.config.maxDate &&
                (self.config.maxDate.getHours() > 0 ||
                    self.config.maxDate.getMinutes() > 0 ||
                    self.config.maxDate.getSeconds() > 0);
    }
    function setupInputs() {
        self.input = getInputElem();
        if (!self.input) {
            self.config.errorHandler(new Error("Invalid input element specified"));
            return;
        }
        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;
        if (self.config.altInput) {
            self.altInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(self.input.nodeName, self.config.altInputClass);
            self._input = self.altInput;
            self.altInput.placeholder = self.input.placeholder;
            self.altInput.disabled = self.input.disabled;
            self.altInput.required = self.input.required;
            self.altInput.tabIndex = self.input.tabIndex;
            self.altInput.type = "text";
            self.input.setAttribute("type", "hidden");
            if (!self.config.static && self.input.parentNode)
                self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }
        if (!self.config.allowInput)
            self._input.setAttribute("readonly", "readonly");
        updatePositionElement();
    }
    function updatePositionElement() {
        self._positionElement = self.config.positionElement || self._input;
    }
    function setupMobile() {
        var inputType = self.config.enableTime
            ? self.config.noCalendar
                ? "time"
                : "datetime-local"
            : "date";
        self.mobileInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.required = self.input.required;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr =
            inputType === "datetime-local"
                ? "Y-m-d\\TH:i:S"
                : inputType === "date"
                    ? "Y-m-d"
                    : "H:i:S";
        if (self.selectedDates.length > 0) {
            self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        }
        if (self.config.minDate)
            self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate)
            self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        if (self.input.getAttribute("step"))
            self.mobileInput.step = String(self.input.getAttribute("step"));
        self.input.type = "hidden";
        if (self.altInput !== undefined)
            self.altInput.type = "hidden";
        try {
            if (self.input.parentNode)
                self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        }
        catch (_a) { }
        bind(self.mobileInput, "change", function (e) {
            self.setDate((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e).value, false, self.mobileFormatStr);
            triggerEvent("onChange");
            triggerEvent("onClose");
        });
    }
    function toggle(e) {
        if (self.isOpen === true)
            return self.close();
        self.open(e);
    }
    function triggerEvent(event, data) {
        if (self.config === undefined)
            return;
        var hooks = self.config[event];
        if (hooks !== undefined && hooks.length > 0) {
            for (var i = 0; hooks[i] && i < hooks.length; i++)
                hooks[i](self.selectedDates, self.input.value, self, data);
        }
        if (event === "onChange") {
            self.input.dispatchEvent(createEvent("change"));
            self.input.dispatchEvent(createEvent("input"));
        }
    }
    function createEvent(name) {
        var e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
    }
    function isDateSelected(date) {
        for (var i = 0; i < self.selectedDates.length; i++) {
            var selectedDate = self.selectedDates[i];
            if (selectedDate instanceof Date &&
                (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(selectedDate, date) === 0)
                return "" + i;
        }
        return false;
    }
    function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2)
            return false;
        return ((0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[0]) >= 0 &&
            (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[1]) <= 0);
    }
    function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav)
            return;
        self.yearElements.forEach(function (yearElement, i) {
            var d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType === "static") {
                self.monthElements[i].textContent =
                    (0,_utils_formatting__WEBPACK_IMPORTED_MODULE_5__.monthToStr)(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
            }
            else {
                self.monthsDropdownContainer.value = d.getMonth().toString();
            }
            yearElement.value = d.getFullYear().toString();
        });
        self._hidePrevMonthArrow =
            self.config.minDate !== undefined &&
                (self.currentYear === self.config.minDate.getFullYear()
                    ? self.currentMonth <= self.config.minDate.getMonth()
                    : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow =
            self.config.maxDate !== undefined &&
                (self.currentYear === self.config.maxDate.getFullYear()
                    ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                    : self.currentYear > self.config.maxDate.getFullYear());
    }
    function getDateStr(specificFormat) {
        var format = specificFormat ||
            (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
        return self.selectedDates
            .map(function (dObj) { return self.formatDate(dObj, format); })
            .filter(function (d, i, arr) {
            return self.config.mode !== "range" ||
                self.config.enableTime ||
                arr.indexOf(d) === i;
        })
            .join(self.config.mode !== "range"
            ? self.config.conjunction
            : self.l10n.rangeSeparator);
    }
    function updateValue(triggerChange) {
        if (triggerChange === void 0) { triggerChange = true; }
        if (self.mobileInput !== undefined && self.mobileFormatStr) {
            self.mobileInput.value =
                self.latestSelectedDateObj !== undefined
                    ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                    : "";
        }
        self.input.value = getDateStr(self.config.dateFormat);
        if (self.altInput !== undefined) {
            self.altInput.value = getDateStr(self.config.altFormat);
        }
        if (triggerChange !== false)
            triggerEvent("onValueUpdate");
    }
    function onMonthNavClick(e) {
        var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        var isPrevMonth = self.prevMonthNav.contains(eventTarget);
        var isNextMonth = self.nextMonthNav.contains(eventTarget);
        if (isPrevMonth || isNextMonth) {
            changeMonth(isPrevMonth ? -1 : 1);
        }
        else if (self.yearElements.indexOf(eventTarget) >= 0) {
            eventTarget.select();
        }
        else if (eventTarget.classList.contains("arrowUp")) {
            self.changeYear(self.currentYear + 1);
        }
        else if (eventTarget.classList.contains("arrowDown")) {
            self.changeYear(self.currentYear - 1);
        }
    }
    function timeWrapper(e) {
        e.preventDefault();
        var isKeyDown = e.type === "keydown", eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e), input = eventTarget;
        if (self.amPM !== undefined && eventTarget === self.amPM) {
            self.amPM.textContent =
                self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(self.amPM.textContent === self.l10n.amPM[0])];
        }
        var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
            (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
        var newValue = curValue + step * delta;
        if (typeof input.value !== "undefined" && input.value.length === 2) {
            var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
            if (newValue < min) {
                newValue =
                    max +
                        newValue +
                        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!isHourElem) +
                        ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(isHourElem) && (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!self.amPM));
                if (isMinuteElem)
                    incrementNumInput(undefined, -1, self.hourElement);
            }
            else if (newValue > max) {
                newValue =
                    input === self.hourElement ? newValue - max - (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!self.amPM) : min;
                if (isMinuteElem)
                    incrementNumInput(undefined, 1, self.hourElement);
            }
            if (self.amPM &&
                isHourElem &&
                (step === 1
                    ? newValue + curValue === 23
                    : Math.abs(newValue - curValue) > step)) {
                self.amPM.textContent =
                    self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(self.amPM.textContent === self.l10n.amPM[0])];
            }
            input.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(newValue);
        }
    }
    init();
    return self;
}
function _flatpickr(nodeList, config) {
    var nodes = Array.prototype.slice
        .call(nodeList)
        .filter(function (x) { return x instanceof HTMLElement; });
    var instances = [];
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        try {
            if (node.getAttribute("data-fp-omit") !== null)
                continue;
            if (node._flatpickr !== undefined) {
                node._flatpickr.destroy();
                node._flatpickr = undefined;
            }
            node._flatpickr = FlatpickrInstance(node, config || {});
            instances.push(node._flatpickr);
        }
        catch (e) {
            console.error(e);
        }
    }
    return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" &&
    typeof HTMLCollection !== "undefined" &&
    typeof NodeList !== "undefined") {
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
    HTMLElement.prototype.flatpickr = function (config) {
        return _flatpickr([this], config);
    };
}
var flatpickr = function (selector, config) {
    if (typeof selector === "string") {
        return _flatpickr(window.document.querySelectorAll(selector), config);
    }
    else if (selector instanceof Node) {
        return _flatpickr([selector], config);
    }
    else {
        return _flatpickr(selector, config);
    }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
    en: __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]),
    default: __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]),
};
flatpickr.localize = function (l10n) {
    flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = function (config) {
    flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({});
flatpickr.formatDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateFormatter)({});
flatpickr.compareDates = _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
    jQuery.fn.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
}
Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
    window.flatpickr = flatpickr;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flatpickr);


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/l10n/default.js":
/*!*********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/l10n/default.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   english: () => (/* binding */ english)
/* harmony export */ });
var english = {
    weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
    },
    months: {
        shorthand: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        longhand: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function (nth) {
        var s = nth % 100;
        if (s > 3 && s < 21)
            return "th";
        switch (s % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
    yearAriaLabel: "Year",
    monthAriaLabel: "Month",
    hourAriaLabel: "Hour",
    minuteAriaLabel: "Minute",
    time_24hr: false,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (english);


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/types/options.js":
/*!**********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/types/options.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HOOKS: () => (/* binding */ HOOKS),
/* harmony export */   defaults: () => (/* binding */ defaults)
/* harmony export */ });
var HOOKS = [
    "onChange",
    "onClose",
    "onDayCreate",
    "onDestroy",
    "onKeyDown",
    "onMonthChange",
    "onOpen",
    "onParseConfig",
    "onReady",
    "onValueUpdate",
    "onYearChange",
    "onPreCalendarPosition",
];
var defaults = {
    _disable: [],
    allowInput: false,
    allowInvalidPreload: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: typeof window === "object" &&
        window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    autoFillDefaultTime: true,
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enableSeconds: false,
    enableTime: false,
    errorHandler: function (err) {
        return typeof console !== "undefined" && console.warn(err);
    },
    getWeek: function (givenDate) {
        var date = new Date(givenDate.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
        var week1 = new Date(date.getFullYear(), 0, 4);
        return (1 +
            Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                3 +
                ((week1.getDay() + 6) % 7)) /
                7));
    },
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    monthSelectorType: "dropdown",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    now: new Date(),
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    showMonths: 1,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false,
};


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/dates.js":
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dates.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateSecondsSinceMidnight: () => (/* binding */ calculateSecondsSinceMidnight),
/* harmony export */   compareDates: () => (/* binding */ compareDates),
/* harmony export */   compareTimes: () => (/* binding */ compareTimes),
/* harmony export */   createDateFormatter: () => (/* binding */ createDateFormatter),
/* harmony export */   createDateParser: () => (/* binding */ createDateParser),
/* harmony export */   duration: () => (/* binding */ duration),
/* harmony export */   getDefaultHours: () => (/* binding */ getDefaultHours),
/* harmony export */   isBetween: () => (/* binding */ isBetween),
/* harmony export */   parseSeconds: () => (/* binding */ parseSeconds)
/* harmony export */ });
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatting */ "./node_modules/flatpickr/dist/esm/utils/formatting.js");
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/options */ "./node_modules/flatpickr/dist/esm/types/options.js");
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../l10n/default */ "./node_modules/flatpickr/dist/esm/l10n/default.js");



var createDateFormatter = function (_a) {
    var _b = _a.config, config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__.english : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
    return function (dateObj, frmt, overrideLocale) {
        var locale = overrideLocale || l10n;
        if (config.formatDate !== undefined && !isMobile) {
            return config.formatDate(dateObj, frmt, locale);
        }
        return frmt
            .split("")
            .map(function (c, i, arr) {
            return _formatting__WEBPACK_IMPORTED_MODULE_0__.formats[c] && arr[i - 1] !== "\\"
                ? _formatting__WEBPACK_IMPORTED_MODULE_0__.formats[c](dateObj, locale, config)
                : c !== "\\"
                    ? c
                    : "";
        })
            .join("");
    };
};
var createDateParser = function (_a) {
    var _b = _a.config, config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__.english : _c;
    return function (date, givenFormat, timeless, customLocale) {
        if (date !== 0 && !date)
            return undefined;
        var locale = customLocale || l10n;
        var parsedDate;
        var dateOrig = date;
        if (date instanceof Date)
            parsedDate = new Date(date.getTime());
        else if (typeof date !== "string" &&
            date.toFixed !== undefined)
            parsedDate = new Date(date);
        else if (typeof date === "string") {
            var format = givenFormat || (config || _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults).dateFormat;
            var datestr = String(date).trim();
            if (datestr === "today") {
                parsedDate = new Date();
                timeless = true;
            }
            else if (config && config.parseDate) {
                parsedDate = config.parseDate(date, format);
            }
            else if (/Z$/.test(datestr) ||
                /GMT$/.test(datestr)) {
                parsedDate = new Date(date);
            }
            else {
                var matched = void 0, ops = [];
                for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                    var token = format[i];
                    var isBackSlash = token === "\\";
                    var escaped = format[i - 1] === "\\" || isBackSlash;
                    if (_formatting__WEBPACK_IMPORTED_MODULE_0__.tokenRegex[token] && !escaped) {
                        regexStr += _formatting__WEBPACK_IMPORTED_MODULE_0__.tokenRegex[token];
                        var match = new RegExp(regexStr).exec(date);
                        if (match && (matched = true)) {
                            ops[token !== "Y" ? "push" : "unshift"]({
                                fn: _formatting__WEBPACK_IMPORTED_MODULE_0__.revFormat[token],
                                val: match[++matchIndex],
                            });
                        }
                    }
                    else if (!isBackSlash)
                        regexStr += ".";
                }
                parsedDate =
                    !config || !config.noCalendar
                        ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                        : new Date(new Date().setHours(0, 0, 0, 0));
                ops.forEach(function (_a) {
                    var fn = _a.fn, val = _a.val;
                    return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                });
                parsedDate = matched ? parsedDate : undefined;
            }
        }
        if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
            config.errorHandler(new Error("Invalid date provided: " + dateOrig));
            return undefined;
        }
        if (timeless === true)
            parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
    };
};
function compareDates(date1, date2, timeless) {
    if (timeless === void 0) { timeless = true; }
    if (timeless !== false) {
        return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
            new Date(date2.getTime()).setHours(0, 0, 0, 0));
    }
    return date1.getTime() - date2.getTime();
}
function compareTimes(date1, date2) {
    return (3600 * (date1.getHours() - date2.getHours()) +
        60 * (date1.getMinutes() - date2.getMinutes()) +
        date1.getSeconds() -
        date2.getSeconds());
}
var isBetween = function (ts, ts1, ts2) {
    return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var calculateSecondsSinceMidnight = function (hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
};
var parseSeconds = function (secondsSinceMidnight) {
    var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
    return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
};
var duration = {
    DAY: 86400000,
};
function getDefaultHours(config) {
    var hours = config.defaultHour;
    var minutes = config.defaultMinute;
    var seconds = config.defaultSeconds;
    if (config.minDate !== undefined) {
        var minHour = config.minDate.getHours();
        var minMinutes = config.minDate.getMinutes();
        var minSeconds = config.minDate.getSeconds();
        if (hours < minHour) {
            hours = minHour;
        }
        if (hours === minHour && minutes < minMinutes) {
            minutes = minMinutes;
        }
        if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
            seconds = config.minDate.getSeconds();
    }
    if (config.maxDate !== undefined) {
        var maxHr = config.maxDate.getHours();
        var maxMinutes = config.maxDate.getMinutes();
        hours = Math.min(hours, maxHr);
        if (hours === maxHr)
            minutes = Math.min(maxMinutes, minutes);
        if (hours === maxHr && minutes === maxMinutes)
            seconds = config.maxDate.getSeconds();
    }
    return { hours: hours, minutes: minutes, seconds: seconds };
}


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/dom.js":
/*!******************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dom.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearNode: () => (/* binding */ clearNode),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createNumberInput: () => (/* binding */ createNumberInput),
/* harmony export */   findParent: () => (/* binding */ findParent),
/* harmony export */   getEventTarget: () => (/* binding */ getEventTarget),
/* harmony export */   toggleClass: () => (/* binding */ toggleClass)
/* harmony export */ });
function toggleClass(elem, className, bool) {
    if (bool === true)
        return elem.classList.add(className);
    elem.classList.remove(className);
}
function createElement(tag, className, content) {
    var e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== undefined)
        e.textContent = content;
    return e;
}
function clearNode(node) {
    while (node.firstChild)
        node.removeChild(node.firstChild);
}
function findParent(node, condition) {
    if (condition(node))
        return node;
    else if (node.parentNode)
        return findParent(node.parentNode, condition);
    return undefined;
}
function createNumberInput(inputClassName, opts) {
    var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
    if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
        numInput.type = "number";
    }
    else {
        numInput.type = "text";
        numInput.pattern = "\\d*";
    }
    if (opts !== undefined)
        for (var key in opts)
            numInput.setAttribute(key, opts[key]);
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
}
function getEventTarget(event) {
    try {
        if (typeof event.composedPath === "function") {
            var path = event.composedPath();
            return path[0];
        }
        return event.target;
    }
    catch (error) {
        return event.target;
    }
}


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/formatting.js":
/*!*************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/formatting.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formats: () => (/* binding */ formats),
/* harmony export */   monthToStr: () => (/* binding */ monthToStr),
/* harmony export */   revFormat: () => (/* binding */ revFormat),
/* harmony export */   tokenRegex: () => (/* binding */ tokenRegex)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/flatpickr/dist/esm/utils/index.js");

var doNothing = function () { return undefined; };
var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
var revFormat = {
    D: doNothing,
    F: function (dateObj, monthName, locale) {
        dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: function (dateObj, hour) {
        dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
    },
    H: function (dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    J: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    K: function (dateObj, amPM, locale) {
        dateObj.setHours((dateObj.getHours() % 12) +
            12 * (0,_utils__WEBPACK_IMPORTED_MODULE_0__.int)(new RegExp(locale.amPM[1], "i").test(amPM)));
    },
    M: function (dateObj, shortMonth, locale) {
        dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: function (dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
    W: function (dateObj, weekNum, locale) {
        var weekNumber = parseInt(weekNum);
        var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
        date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
        return date;
    },
    Y: function (dateObj, year) {
        dateObj.setFullYear(parseFloat(year));
    },
    Z: function (_, ISODate) { return new Date(ISODate); },
    d: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    h: function (dateObj, hour) {
        dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
    },
    i: function (dateObj, minutes) {
        dateObj.setMinutes(parseFloat(minutes));
    },
    j: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    l: doNothing,
    m: function (dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    n: function (dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    s: function (dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    u: function (_, unixMillSeconds) {
        return new Date(parseFloat(unixMillSeconds));
    },
    w: doNothing,
    y: function (dateObj, year) {
        dateObj.setFullYear(2000 + parseFloat(year));
    },
};
var tokenRegex = {
    D: "",
    F: "",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "",
    M: "",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    u: "(.+)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})",
};
var formats = {
    Z: function (date) { return date.toISOString(); },
    D: function (date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    F: function (date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    G: function (date, locale, options) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(formats.h(date, locale, options));
    },
    H: function (date) { return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getHours()); },
    J: function (date, locale) {
        return locale.ordinal !== undefined
            ? date.getDate() + locale.ordinal(date.getDate())
            : date.getDate();
    },
    K: function (date, locale) { return locale.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.int)(date.getHours() > 11)]; },
    M: function (date, locale) {
        return monthToStr(date.getMonth(), true, locale);
    },
    S: function (date) { return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getSeconds()); },
    U: function (date) { return date.getTime() / 1000; },
    W: function (date, _, options) {
        return options.getWeek(date);
    },
    Y: function (date) { return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getFullYear(), 4); },
    d: function (date) { return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getDate()); },
    h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
    i: function (date) { return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getMinutes()); },
    j: function (date) { return date.getDate(); },
    l: function (date, locale) {
        return locale.weekdays.longhand[date.getDay()];
    },
    m: function (date) { return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getMonth() + 1); },
    n: function (date) { return date.getMonth() + 1; },
    s: function (date) { return date.getSeconds(); },
    u: function (date) { return date.getTime(); },
    w: function (date) { return date.getDay(); },
    y: function (date) { return String(date.getFullYear()).substring(2); },
};


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/index.js":
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayify: () => (/* binding */ arrayify),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   int: () => (/* binding */ int),
/* harmony export */   pad: () => (/* binding */ pad)
/* harmony export */ });
var pad = function (number, length) {
    if (length === void 0) { length = 2; }
    return ("000" + number).slice(length * -1);
};
var int = function (bool) { return (bool === true ? 1 : 0); };
function debounce(fn, wait) {
    var t;
    return function () {
        var _this = this;
        var args = arguments;
        clearTimeout(t);
        t = setTimeout(function () { return fn.apply(_this, args); }, wait);
    };
}
var arrayify = function (obj) {
    return obj instanceof Array ? obj : [obj];
};


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/polyfills.js":
/*!************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/polyfills.js ***!
  \************************************************************/
/***/ (() => {


if (typeof Object.assign !== "function") {
    Object.assign = function (target) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!target) {
            throw TypeError("Cannot convert undefined or null to object");
        }
        var _loop_1 = function (source) {
            if (source) {
                Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });
            }
        };
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var source = args_1[_a];
            _loop_1(source);
        }
        return target;
    };
}


/***/ }),

/***/ "./node_modules/micromodal/dist/micromodal.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/micromodal/dist/micromodal.es.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var n,i,a,r,s,l=(n=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],i=function(){function o(e){var n=e.targetModal,i=e.triggers,a=void 0===i?[]:i,r=e.onShow,s=void 0===r?function(){}:r,l=e.onClose,c=void 0===l?function(){}:l,d=e.openTrigger,u=void 0===d?"data-micromodal-trigger":d,f=e.closeTrigger,h=void 0===f?"data-micromodal-close":f,v=e.openClass,g=void 0===v?"is-open":v,m=e.disableScroll,b=void 0!==m&&m,y=e.disableFocus,p=void 0!==y&&y,w=e.awaitCloseAnimation,E=void 0!==w&&w,k=e.awaitOpenAnimation,M=void 0!==k&&k,A=e.debugMode,C=void 0!==A&&A;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.modal=document.getElementById(n),this.config={debugMode:C,disableScroll:b,openTrigger:u,closeTrigger:h,openClass:g,onShow:s,onClose:c,awaitCloseAnimation:E,awaitOpenAnimation:M,disableFocus:p},a.length>0&&this.registerTriggers.apply(this,t(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var i,a,r;return i=o,(a=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];o.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var o=function t(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",o,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,t)}},{key:"closeModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var o=this.config.openClass;this.modal.addEventListener("animationend",(function e(){t.classList.remove(o),t.removeEventListener("animationend",e,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){(e.target.hasAttribute(this.config.closeTrigger)||e.target.parentNode.hasAttribute(this.config.closeTrigger))&&(e.preventDefault(),e.stopPropagation(),this.closeModal(e))}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(n);return Array.apply(void 0,t(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var t=this.getFocusableNodes();if(0!==t.length){var o=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));o.length>0&&o[0].focus(),0===o.length&&t[0].focus()}}}},{key:"retainFocus",value:function(e){var t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){var o=t.indexOf(document.activeElement);e.shiftKey&&0===o&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&o===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}])&&e(i.prototype,a),r&&e(i,r),o}(),a=null,r=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},s=function(e,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var o in t)r(o);return!0},{init:function(e){var o=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),n=t(document.querySelectorAll("[".concat(o.openTrigger,"]"))),r=function(e,t){var o=[];return e.forEach((function(e){var n=e.attributes[t].value;void 0===o[n]&&(o[n]=[]),o[n].push(e)})),o}(n,o.openTrigger);if(!0!==o.debugMode||!1!==s(n,r))for(var l in r){var c=r[l];o.targetModal=l,o.triggers=t(c),a=new i(o)}},show:function(e,t){var o=t||{};o.targetModal=e,!0===o.debugMode&&!1===r(e)||(a&&a.removeEventListeners(),(a=new i(o)).showModal())},close:function(e){e?a.closeModalById(e):a.closeModal()}});"undefined"!=typeof window&&(window.MicroModal=l);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (l);


/***/ }),

/***/ "./node_modules/flatpickr/dist/flatpickr.css":
/*!***************************************************!*\
  !*** ./node_modules/flatpickr/dist/flatpickr.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_flatpickr_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./flatpickr.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/flatpickr/dist/flatpickr.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_flatpickr_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_flatpickr_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_flatpickr_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_flatpickr_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/form.css":
/*!****************************!*\
  !*** ./src/style/form.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/form.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/InitialLoad.js":
/*!****************************!*\
  !*** ./src/InitialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ load)
/* harmony export */ });
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/esm/index.js");
/* harmony import */ var _views_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/elements */ "./src/views/elements.js");
/* harmony import */ var _views_projectView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/projectView */ "./src/views/projectView.js");
/* harmony import */ var _views_tabView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/tabView */ "./src/views/tabView.js");
/* harmony import */ var _views_formView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/formView */ "./src/views/formView.js");
/* harmony import */ var _models_ProjectManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/ProjectManager */ "./src/models/ProjectManager.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates */ "./src/templates.js");
/* eslint-disable prefer-template */










function getHeaderText(username) {
    const time = new Date().getHours();
    const nameText = username === "" ? "" : ", ";

    if (time > 17 || time < 5) return "Good evening" + nameText;

    if (time < 12) return "Good morning" + nameText;

    return "Good afternoon" + nameText;
}

function load(username, loadType, projects = []) {
    let manager;

    if (loadType === "demo") {
        manager = (0,_models_ProjectManager__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_templates__WEBPACK_IMPORTED_MODULE_7__.demoTemplate)());
    } else if (loadType === "empty") {
        manager = (0,_models_ProjectManager__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_templates__WEBPACK_IMPORTED_MODULE_7__.emptyTemplate)());
    } else if (loadType === "load") {
        manager = (0,_models_ProjectManager__WEBPACK_IMPORTED_MODULE_6__["default"])(projects);
    }

    (0,_views_tabView__WEBPACK_IMPORTED_MODULE_4__.loadTabs)(manager.getProjects());
    (0,_views_projectView__WEBPACK_IMPORTED_MODULE_3__.loadProject)(manager.getCurrentProject());

    _views_elements__WEBPACK_IMPORTED_MODULE_2__["default"].signupPage.hidden = true;
    _views_elements__WEBPACK_IMPORTED_MODULE_2__["default"].mainWrapper.hidden = false;

    _views_elements__WEBPACK_IMPORTED_MODULE_2__["default"].pageHeaderName.textContent = username;
    _views_elements__WEBPACK_IMPORTED_MODULE_2__["default"].pageHeaderText.textContent = getHeaderText(username);

    micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].init({ onShow: _views_formView__WEBPACK_IMPORTED_MODULE_5__.onModalShow });

    (0,flatpickr__WEBPACK_IMPORTED_MODULE_1__["default"])("#task-due-date", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: "today",
    });

    return manager;
}


/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Project */ "./src/models/Project.js");
/* harmony import */ var _models_Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/Task */ "./src/models/Task.js");
/* harmony import */ var _views_formView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/formView */ "./src/views/formView.js");
/* harmony import */ var _views_tabView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/tabView */ "./src/views/tabView.js");
/* harmony import */ var _views_taskView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/taskView */ "./src/views/taskView.js");
/* harmony import */ var _views_projectView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/projectView */ "./src/views/projectView.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _InitialLoad__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./InitialLoad */ "./src/InitialLoad.js");
/* harmony import */ var _views_elements__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/elements */ "./src/views/elements.js");














function app() {
    let ProjectManager;

    if (window.localStorage && window.localStorage.projects) {
        const data = _localStorage__WEBPACK_IMPORTED_MODULE_7__.loadData();

        ProjectManager = (0,_InitialLoad__WEBPACK_IMPORTED_MODULE_8__["default"])(data.username, "load", data.projects);
    }

    function initialise(event) {
        event.preventDefault();
        if (event.target === _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].templateButtonsContainer) return;

        const username = _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].signupFormUsername.value.trim();

        if (event.target === _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].demoTemplateButton) {
            ProjectManager = (0,_InitialLoad__WEBPACK_IMPORTED_MODULE_8__["default"])(username, "demo");
        } else if (event.target === _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].emptyTemplateButton) {
            ProjectManager = (0,_InitialLoad__WEBPACK_IMPORTED_MODULE_8__["default"])(username, "empty");
        }

        _localStorage__WEBPACK_IMPORTED_MODULE_7__.saveData(username, ProjectManager.getProjects());
    }

    function editProjectProperties(project, properties) {
        project.setName(properties.name);

        _localStorage__WEBPACK_IMPORTED_MODULE_7__.editProject(project);
    }

    function editTaskProperties(task, properties) {
        Object.keys(properties).forEach((property) => {
            task.setProperty(property, properties[property]);
        });

        _localStorage__WEBPACK_IMPORTED_MODULE_7__.editTask(task);
    }

    function onTaskFormSubmit() {
        const formData = _views_formView__WEBPACK_IMPORTED_MODULE_3__.getFormData(_views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].taskForm);
        const { taskForm } = _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"];

        if (!taskForm || !formData) return false;

        if (taskForm.getAttribute("data-form-type") === "edit") {
            editTaskProperties(ProjectManager.getCurrentProject().getTask(+_views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].taskForm.getAttribute("data-task-index")), formData);
            return true;
        }

        const project = ProjectManager.getCurrentProject();

        if (project.isOverview()) {
            const selectedProject = ProjectManager.getProject(formData.projectIndex);

            const task = (0,_models_Task__WEBPACK_IMPORTED_MODULE_2__["default"])(selectedProject, formData);
            selectedProject.addTask(task);
            selectedProject.sortTasks();
            _views_taskView__WEBPACK_IMPORTED_MODULE_5__.createTask(task);

            _views_projectView__WEBPACK_IMPORTED_MODULE_6__.loadProject(project);
            _localStorage__WEBPACK_IMPORTED_MODULE_7__.addTask(task);

            return true;
        }

        const task = (0,_models_Task__WEBPACK_IMPORTED_MODULE_2__["default"])(project, formData);
        project.addTask(task);
        project.sortTasks();
        _views_taskView__WEBPACK_IMPORTED_MODULE_5__.createTask(task);
        _localStorage__WEBPACK_IMPORTED_MODULE_7__.addTask(task);

        return true;
    }

    function onProjectFormSubmit() {
        const formData = _views_formView__WEBPACK_IMPORTED_MODULE_3__.getFormData(_views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].projectForm);
        const { projectForm } = _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"];

        if (!formData) return false;

        if (projectForm.getAttribute("data-form-type") === "edit") {
            editProjectProperties(ProjectManager.getProject(+projectForm.getAttribute("data-project-index")), formData);
            return true;
        }

        const project = (0,_models_Project__WEBPACK_IMPORTED_MODULE_1__["default"])(formData.name);
        ProjectManager.addProject(project);
        ProjectManager.setCurrentProject(ProjectManager.getProjects().length - 1);
        _views_projectView__WEBPACK_IMPORTED_MODULE_6__.loadProject(project);
        _views_tabView__WEBPACK_IMPORTED_MODULE_4__.loadTabs(ProjectManager.getProjects());
        _views_tabView__WEBPACK_IMPORTED_MODULE_4__.updateSelected(ProjectManager.getCurrentProject().getProjectIndex());
        _localStorage__WEBPACK_IMPORTED_MODULE_7__.addProject(project);

        return true;
    }

    function onTabClick(event, tabIndex) {
        const { target } = event;

        if (target.classList.contains("project-selector")) {
            ProjectManager.setCurrentProject(tabIndex);
            ProjectManager.getCurrentProject().hideTaskDescriptions();

            _views_projectView__WEBPACK_IMPORTED_MODULE_6__.loadProject(ProjectManager.getCurrentProject());
            _views_tabView__WEBPACK_IMPORTED_MODULE_4__.updateSelected(tabIndex);
        } else if (target.classList.contains("project-edit")) {
            micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].show(_views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].projectFormModal.id);
            _views_formView__WEBPACK_IMPORTED_MODULE_3__.onModalShow(_views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].projectFormModal, target);

            const project = ProjectManager.getProject(tabIndex);
            _views_formView__WEBPACK_IMPORTED_MODULE_3__.loadProjectProperties(project);
            _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].projectForm.setAttribute("data-project-index", tabIndex);
        } else if (target.classList.contains("project-delete")) {
            ProjectManager.deleteProject(tabIndex);
            _localStorage__WEBPACK_IMPORTED_MODULE_7__.removeProject(tabIndex);

            _views_tabView__WEBPACK_IMPORTED_MODULE_4__.loadTabs(ProjectManager.getProjects());
            _views_projectView__WEBPACK_IMPORTED_MODULE_6__.loadProject(ProjectManager.getCurrentProject());
            _views_tabView__WEBPACK_IMPORTED_MODULE_4__.updateSelected(ProjectManager.getCurrentProject().getProjectIndex());
        }
    }

    function onTaskClick(event) {
        const { target } = event;
        const taskElement = target.closest(".task-container");

        if (!taskElement || taskElement === target) return;

        const taskIndex = [..._views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].tasksContainer.childNodes].indexOf(taskElement);
        const project = ProjectManager.getCurrentProject();
        const task = project.getTask(taskIndex);

        if (target.classList.contains("edit-button")) {
            micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].show(_views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].taskFormModal.id);
            _views_formView__WEBPACK_IMPORTED_MODULE_3__.onModalShow(_views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].taskFormModal, target);

            _views_formView__WEBPACK_IMPORTED_MODULE_3__.loadTaskProperties(task);
            _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].taskFormProjectContainer.classList.add("display-none");
            _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].taskForm.setAttribute("data-task-index", taskIndex);
        } else if (target.classList.contains("delete-button")) {
            _localStorage__WEBPACK_IMPORTED_MODULE_7__.deleteTask(task);
            project.deleteTask(taskIndex);

            _views_projectView__WEBPACK_IMPORTED_MODULE_6__.loadProject(ProjectManager.getCurrentProject());
        } else if (target.classList.contains("task-done")) {
            editTaskProperties(task, { done: target.checked });
        } else if (target.classList.contains("show-button")) {
            const descriptionElement = taskElement.querySelector(".task-description");

            if (descriptionElement.textContent !== "") {
                taskElement.querySelector(".accordion-container").classList.toggle("accordion-visible");
                task.setProperty("descriptionToggled", !task.getProperty("descriptionToggled"));
            }
        }
    }

    function onTaskAddClick() {
        const currentProject = ProjectManager.getCurrentProject();

        if (currentProject.isOverview()) {
            _views_formView__WEBPACK_IMPORTED_MODULE_3__.loadProjectSelectOptions(ProjectManager.getProjects());
            _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].taskFormProjectContainer.classList.remove("display-none");
            return;
        }

        _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].taskFormProjectContainer.classList.add("display-none");
    }

    function onSortChange(event) {
        const sortType = event.target.value;
        const project = ProjectManager.getCurrentProject();

        project.setSortType(sortType);
        _localStorage__WEBPACK_IMPORTED_MODULE_7__.editProject(project);
        _views_projectView__WEBPACK_IMPORTED_MODULE_6__.loadProject(project);
    }

    function toggleSidebar() {
        _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].sidebarContainer.classList.toggle("collapsed");
        _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].mainWrapper.classList.toggle("expanded");
    }

    _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].projectFormSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        const success = onProjectFormSubmit();

        if (success) {
            _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].projectForm.closest(".modal-overlay").click();
            _views_tabView__WEBPACK_IMPORTED_MODULE_4__.loadTabs(ProjectManager.getProjects());
            _views_projectView__WEBPACK_IMPORTED_MODULE_6__.updateHeader(ProjectManager.getCurrentProject());
        }
    });

    _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].taskFormSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        const success = onTaskFormSubmit();

        if (success) {
            _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].taskForm.closest(".modal-overlay").click();
            _views_projectView__WEBPACK_IMPORTED_MODULE_6__.loadProject(ProjectManager.getCurrentProject());
        }
    });

    [_views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].projectsContainer, _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].overviewsContainer].forEach((container) => {
        container.addEventListener("click", (event) => {
            const tab = event.target.closest(".project-selector");
            if (!tab) return;

            const tabIndex = [..._views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].overviewsContainer.childNodes, ..._views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].projectsContainer.childNodes].indexOf(tab);
            onTabClick(event, tabIndex);
        });
    });

    _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].tasksContainer.addEventListener("click", onTaskClick);

    [...document.querySelectorAll("[data-micromodal-close]")].forEach((element) => {
        element.addEventListener("click", (event) => {
            if (!event.target.hasAttribute("data-micromodal-close")) return;
            _views_formView__WEBPACK_IMPORTED_MODULE_3__.resetInputs(_views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].projectForm);
            _views_formView__WEBPACK_IMPORTED_MODULE_3__.resetInputs(_views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].taskForm);
        });
    });

    _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].newTaskButton.addEventListener("click", onTaskAddClick);
    _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].sortTasksSelector.addEventListener("change", onSortChange);
    _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].sidebarCollapse.addEventListener("click", toggleSidebar);
    _views_elements__WEBPACK_IMPORTED_MODULE_9__["default"].templateButtonsContainer.addEventListener("click", initialise);
}


/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   editProject: () => (/* binding */ editProject),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   loadData: () => (/* binding */ loadData),
/* harmony export */   removeProject: () => (/* binding */ removeProject),
/* harmony export */   saveData: () => (/* binding */ saveData)
/* harmony export */ });
/* harmony import */ var _models_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Task */ "./src/models/Task.js");
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Project */ "./src/models/Project.js");
/* harmony import */ var _models_Overview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/Overview */ "./src/models/Overview.js");




const storage = window.localStorage;

function convertTask(task) {
    const taskData = {};
    taskData.projectIndex = task.getParentProject().getProjectIndex();
    taskData.properties = task.getProperties();
    return taskData;
}

function convertProject(project) {
    const projectData = {};
    projectData.name = project.getName();
    projectData.sortType = project.getSortType();
    projectData.isOverview = project.isOverview();

    return projectData;
}

function parseTask(jsonTask, parentProject) {
    const { properties } = jsonTask;

    properties.dueDate = properties.dueDate ? new Date(properties.dueDate) : null;

    const task = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(parentProject, properties);

    return task;
}

function parseProject(jsonProject, index) {
    const project = jsonProject.isOverview ? (0,_models_Overview__WEBPACK_IMPORTED_MODULE_2__["default"])(jsonProject.name) : (0,_models_Project__WEBPACK_IMPORTED_MODULE_1__["default"])(jsonProject.name);

    project.setSortType(jsonProject.sortType);

    if (project.isOverview()) return project;

    const jsonTasks = JSON.parse(window.localStorage.getItem("tasks")).filter((task) => task.projectIndex === index);

    jsonTasks.forEach((jsonTask) => {
        project.addTask(parseTask(jsonTask, project));
    });

    return project;
}

function loadData() {
    const username = storage.getItem("username");

    const jsonProjects = JSON.parse(storage.getItem("projects"));
    const projects = [];

    jsonProjects.forEach((jsonProject, index) => {
        projects.push(parseProject(jsonProject, index));
    });

    return { username, projects };
}

function saveData(username, projects) {
    storage.setItem("username", username);

    const convertedProjects = [];
    const convertedTasks = [];

    projects.forEach((project) => {
        const jsonProject = convertProject(project);

        if (!jsonProject) return;

        convertedProjects.push(jsonProject);

        if (jsonProject.isOverview) return;

        const tasks = project.getTasks();

        tasks.forEach((task) => {
            convertedTasks.push(convertTask(task));
        });
    });

    storage.setItem("projects", JSON.stringify(convertedProjects));
    storage.setItem("tasks", JSON.stringify(convertedTasks));
}

function addProject(project) {
    const projects = JSON.parse(storage.getItem("projects"));
    projects.push(convertProject(project));

    storage.setItem("projects", JSON.stringify(projects));
}

function editProject(project) {
    const projects = JSON.parse(storage.getItem("projects"));
    projects[project.getProjectIndex()] = convertProject(project);

    storage.setItem("projects", JSON.stringify(projects));
}

function removeProject(projectIndex) {
    const projects = JSON.parse(storage.getItem("projects"));
    projects.splice(projectIndex, 1);

    storage.setItem("projects", JSON.stringify(projects));

    const updatedTasks = JSON.parse(storage.getItem("tasks")).filter((t) => t.projectIndex !== projectIndex);

    updatedTasks.forEach((t) => {
        if (t.projectIndex > projectIndex) {
            t.projectIndex -= 1;
        }
    });

    storage.setItem("tasks", JSON.stringify(updatedTasks));
}

function addTask(task) {
    const tasks = JSON.parse(storage.getItem("tasks"));
    tasks.push(convertTask(task));

    storage.setItem("tasks", JSON.stringify(tasks));
}

function editTask(task) {
    const tasks = JSON.parse(storage.getItem("tasks"));
    const projectIndex = task.getParentProject().getProjectIndex();
    const projectTasks = tasks.filter((t) => t.projectIndex === projectIndex);
    const otherTasks = tasks.filter((t) => t.projectIndex !== projectIndex);

    projectTasks[task.getProperty("index")] = convertTask(task);

    storage.setItem("tasks", JSON.stringify([...projectTasks, ...otherTasks]));
}

function deleteTask(task) {
    const tasks = JSON.parse(storage.getItem("tasks"));
    const projectIndex = task.getParentProject().getProjectIndex();
    const projectTasks = tasks.filter((t) => t.projectIndex === projectIndex);
    const otherTasks = tasks.filter((t) => t.projectIndex !== projectIndex);

    projectTasks.splice(task.getProperty("index"), 1);

    storage.setItem("tasks", JSON.stringify([...projectTasks, ...otherTasks]));
}


/***/ }),

/***/ "./src/models/Overview.js":
/*!********************************!*\
  !*** ./src/models/Overview.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var _sortFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortFunctions */ "./src/models/sortFunctions.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/models/Project.js");





const filters = {
    Today: (task) => (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(task.getProperty("dueDate")),
    "This Week": (task) => (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(task.getProperty("dueDate")),
    "All Tasks": () => true,
};

const Overview = (projectName) => {
    const filter = filters[projectName];
    let sortType = "Descending priority";

    const { getTask, getTasks, addTask, getName, getProjectIndex, setProjectIndex, hideTaskDescriptions, clearTasks } =
        (0,_Project__WEBPACK_IMPORTED_MODULE_1__["default"])(projectName);

    const sortTasks = () => {
        _sortFunctions__WEBPACK_IMPORTED_MODULE_0__["default"][sortType](getTasks());
    };

    const setSortType = (value) => {
        sortType = value;
        sortTasks();
    };

    const getSortType = () => sortType;

    const addTasks = (tasksArray) => {
        tasksArray.forEach((task) => addTask(task));
        sortTasks();
    };

    const isOverview = () => true;
    const getHeader = () => ({ name: getName(), text: "Here are the tasks you need to do " });
    const getFilter = () => filter;

    const deleteTask = (taskIndex) => {
        const task = getTask(taskIndex);
        task.getParentProject().deleteTask(task.getProperty("index"));
    };

    const updateOverview = (projects) => {
        clearTasks();

        const filteredTasks = projects
            .filter((p) => !p.isOverview())
            .map((p) => p.getTasks())
            .flat()
            .filter(filter);

        addTasks(filteredTasks);
    };

    return {
        getTask,
        getTasks,
        setSortType,
        getSortType,
        addTask,
        addTasks,
        getName,
        getProjectIndex,
        setProjectIndex,
        getFilter,
        hideTaskDescriptions,
        isOverview,
        getHeader,
        sortTasks,
        clearTasks,
        deleteTask,
        updateOverview,
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overview);


/***/ }),

/***/ "./src/models/Project.js":
/*!*******************************!*\
  !*** ./src/models/Project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sortFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sortFunctions */ "./src/models/sortFunctions.js");


const Project = (projectName) => {
    let tasks = [];
    let name = projectName;
    let projectIndex = 0;
    let sortType = "Descending priority";

    const getTask = (taskIndex) => tasks[taskIndex];
    const getTasks = () => tasks;

    const sortTasks = () => {
        _sortFunctions__WEBPACK_IMPORTED_MODULE_0__["default"][sortType](tasks);

        tasks.forEach((task, index) => {
            task.setProperty("index", index);
        });
    };

    const setSortType = (value) => {
        sortType = value;
        sortTasks();
    };

    const getSortType = () => sortType;

    const addTask = (task) => {
        tasks.push(task);
    };

    const addTasks = (tasksArray) => {
        tasksArray.forEach((task) => addTask(task));
        sortTasks();
    };

    const deleteTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);

        tasks.forEach((task, index) => {
            task.setProperty("index", index);
        });
    };

    const clearTasks = () => {
        tasks = [];
    };

    const getName = () => name;
    const setName = (value) => {
        name = value;
    };

    const getProjectIndex = () => projectIndex;
    const setProjectIndex = (newIndex) => {
        projectIndex = newIndex;
    };

    const getHeader = () => ({ name, text: "Here are the tasks in " });

    const isOverview = () => false;

    const hideTaskDescriptions = () => {
        tasks.forEach((task) => {
            task.setProperty("descriptionToggled", false);
        });
    };

    return {
        getTask,
        getTasks,
        addTask,
        addTasks,
        deleteTask,
        clearTasks,
        getProjectIndex,
        setProjectIndex,
        getName,
        setName,
        getHeader,
        isOverview,
        setSortType,
        getSortType,
        hideTaskDescriptions,
        sortTasks,
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/models/ProjectManager.js":
/*!**************************************!*\
  !*** ./src/models/ProjectManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ProjectManager = (initialProjects = []) => {
    const projects = initialProjects;
    let currentProject = projects[0];

    projects.forEach((project, index) => {
        project.setProjectIndex(index);
    });

    const getProject = (projectIndex) => {
        const project = projects[projectIndex];

        if (project.isOverview()) {
            project.updateOverview(projects);
        }

        return project;
    };

    const getProjects = () => projects;

    const addProject = (project) => {
        project.setProjectIndex(projects.length);
        projects.push(project);
    };

    const deleteProject = (projectIndex) => {
        projects.splice(projectIndex, 1);

        projects.forEach((project, index) => {
            project.setProjectIndex(index);
        });

        const numOverviews = projects.filter((project) => project.isOverview()).length;
        const numProjects = projects.length - numOverviews;
        let newIndex;

        if (currentProject.getProjectIndex() === projectIndex) {
            if (projectIndex > numOverviews) {
                newIndex = projectIndex - 1;
            } else if (projectIndex === numOverviews && numProjects > 0) {
                newIndex = projectIndex;
            } else {
                newIndex = 0;
            }
        } else {
            newIndex = currentProject.getProjectIndex();
        }

        currentProject = projects[newIndex];
    };

    const getCurrentProject = () => getProject(currentProject.getProjectIndex());
    const setCurrentProject = (index) => {
        currentProject = projects[index];
    };

    return {
        getProject,
        getProjects,
        addProject,
        deleteProject,
        getCurrentProject,
        setCurrentProject,
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectManager);


/***/ }),

/***/ "./src/models/Task.js":
/*!****************************!*\
  !*** ./src/models/Task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js");


const Task = (taskProject, taskProperties) => {
    const properties = {
        title: "",
        description: "",
        descriptionToggled: false,
        priority: "none",
        dueDate: null,
        done: false,
        index: null,
    };
    const project = taskProject;

    Object.entries(taskProperties).forEach(([property, value]) => {
        properties[property] = value;
    });

    const getProperty = (property) => properties[property];
    const getProperties = () => properties;
    const getParentProject = () => project;

    const getDueIn = () => {
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(properties.dueDate)) {
            const relativeDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(properties.dueDate, Date.now());
            const distanceFromNow = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(properties.dueDate);

            return { relativeDate, distanceFromNow };
        }

        return false;
    };

    const setProperty = (property, value) => {
        properties[property] = value;
    };

    return {
        getProperty,
        getProperties,
        getDueIn,
        setProperty,
        getParentProject,
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ }),

/***/ "./src/models/sortFunctions.js":
/*!*************************************!*\
  !*** ./src/models/sortFunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const priorityValues = {
    high: 3,
    medium: 2,
    low: 1,
    none: 0,
};

function ascendingDate(taskA, taskB) {
    if (taskA.getProperty("dueDate") === taskB.getProperty("dueDate")) return 0;

    const result = taskA.getProperty("dueDate") > taskB.getProperty("dueDate");

    return result ? 1 : -1;
}

function descendingDate(taskA, taskB) {
    if (taskA.getProperty("dueDate") === taskB.getProperty("dueDate")) return 0;

    const result = taskA.getProperty("dueDate") < taskB.getProperty("dueDate");

    return result ? 1 : -1;
}

function ascendingPriority(taskA, taskB) {
    if (priorityValues[taskA.getProperty("priority")] === priorityValues[taskB.getProperty("priority")]) return 0;

    const result = priorityValues[taskA.getProperty("priority")] > priorityValues[taskB.getProperty("priority")];

    return result ? 1 : -1;
}

function descendingPriority(taskA, taskB) {
    if (priorityValues[taskA.getProperty("priority")] === priorityValues[taskB.getProperty("priority")]) return 0;

    const result = priorityValues[taskA.getProperty("priority")] < priorityValues[taskB.getProperty("priority")];

    return result ? 1 : -1;
}

function finishedFirst(taskA) {
    return !taskA.getProperty("done") ? 1 : -1;
}

function unfinishedFirst(taskA) {
    return taskA.getProperty("done") ? 1 : -1;
}

const sortFunctions = {
    "Ascending dates": (tasks) => tasks.sort((a, b) => ascendingDate(a, b)),
    "Descending dates": (tasks) => tasks.sort((a, b) => descendingDate(a, b)),
    "Ascending priority": (tasks) => tasks.sort((a, b) => ascendingPriority(a, b)),
    "Descending priority": (tasks) => tasks.sort((a, b) => descendingPriority(a, b)),
    "Finished first": (tasks) => tasks.sort((a, b) => finishedFirst(a, b)),
    "Unfinished first": (tasks) => tasks.sort((a, b) => unfinishedFirst(a, b)),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortFunctions);


/***/ }),

/***/ "./src/templates.js":
/*!**************************!*\
  !*** ./src/templates.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   demoTemplate: () => (/* binding */ demoTemplate),
/* harmony export */   emptyTemplate: () => (/* binding */ emptyTemplate),
/* harmony export */   overviews: () => (/* binding */ overviews)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/add/index.js");
/* harmony import */ var _models_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Task */ "./src/models/Task.js");
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Project */ "./src/models/Project.js");
/* harmony import */ var _models_Overview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/Overview */ "./src/models/Overview.js");






const overviews = [(0,_models_Overview__WEBPACK_IMPORTED_MODULE_2__["default"])("Today"), (0,_models_Overview__WEBPACK_IMPORTED_MODULE_2__["default"])("This Week"), (0,_models_Overview__WEBPACK_IMPORTED_MODULE_2__["default"])("All Tasks")];

function addToNow(time) {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(Date.now()), time);
}

function demoTemplate() {
    const Project1 = (0,_models_Project__WEBPACK_IMPORTED_MODULE_1__["default"])("Chores");

    const p1Task1 = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(Project1, {
        title: "Buy groceries",
        priority: "low",
        dueDate: addToNow({ days: 2 }),
        description: "Need to buy milk and eggs",
    });

    const p1Task2 = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(Project1, {
        title: "Take out the trash",
        priority: "high",
        dueDate: addToNow({ days: -1 }),
        done: true,
    });

    const p1Task3 = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(Project1, {
        title: "Do laundry",
        priority: "high",
        dueDate: addToNow({ hours: 5 }),
    });

    const p1Task4 = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(Project1, {
        title: "Wash dishes",
        priority: "medium",
        dueDate: addToNow({ hours: -3 }),
        done: true,
    });

    const p1Task5 = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(Project1, {
        title: "Clean room",
        priority: "medium",
        dueDate: addToNow({ days: 3 }),
    });

    const p1Task6 = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(Project1, {
        title: "Pay rent",
        priority: "medium",
        dueDate: addToNow({ weeks: 2 }),
    });

    const p1Task7 = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(Project1, {
        title: "Pay utilities",
        priority: "high",
        dueDate: addToNow({ days: 4 }),
        description: "Need to pay water and gas",
    });

    Project1.addTasks([p1Task1, p1Task2, p1Task3, p1Task7, p1Task4, p1Task5, p1Task6]);

    const Project2 = (0,_models_Project__WEBPACK_IMPORTED_MODULE_1__["default"])("Homework");

    const p2Task1 = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(Project2, {
        title: "Finish English essay",
        priority: "low",
        description: "Choose a topic and write a 1000-word essay",
        dueDate: addToNow({ weeks: 1 }),
    });

    const p2Task2 = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(Project2, {
        title: "Study for math exam",
        priority: "high",
        dueDate: addToNow({ days: 9 }),
    });

    const p2Task3 = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(Project2, {
        title: "Do physics homework",
        priority: "medium",
        dueDate: addToNow({ days: -1 }),
        done: true,
    });

    const p2Task4 = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(Project2, {
        title: "Complete History reading",
        priority: "low",
        dueDate: addToNow({ hours: 5 }),
        description: "Read chapters 5 and 6 in the textbook",
    });

    const p2Task5 = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(Project2, {
        title: "Practice German vocabulary",
        priority: "medium",
        dueDate: addToNow({ days: 2 }),
        description: "Review and memorize vocabulary words from Unit 3",
    });

    Project2.addTasks([p2Task1, p2Task2, p2Task3, p2Task4, p2Task5]);

    const Project3 = (0,_models_Project__WEBPACK_IMPORTED_MODULE_1__["default"])("Other");

    const p3Task1 = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(Project3, {
        title: "Finish TOP",
        priority: "high",
    });

    const p3Task2 = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(Project3, {
        title: "Learn to draw",
    });

    const p3Task3 = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(Project3, {
        title: "Start going to the gym",
        priority: "medium",
    });

    const p3Task4 = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(Project3, {
        title: "Cook some nice meals",
        priority: "low",
        description: "Select a recipe and gather ingredients to try a new dish",
        done: true,
    });

    const p3Task5 = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(Project3, {
        title: "Practice playing the guitar",
        priority: "low",
        dueDate: addToNow({ days: 2 }),
        description: "Spend 30 minutes practicing chords and a new song",
    });

    const p3Task6 = (0,_models_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(Project3, {
        title: "Go for a hike",
        priority: "medium",
        dueDate: addToNow({ days: 5 }),
        description: "Look up some trails and plan a hiking trip with friends",
    });

    Project3.addTasks([p3Task1, p3Task5, p3Task2, p3Task3, p3Task4, p3Task6]);

    return [...overviews, Project1, Project2, Project3];
}

function emptyTemplate() {
    return [...overviews, (0,_models_Project__WEBPACK_IMPORTED_MODULE_1__["default"])("My Project")];
}


/***/ }),

/***/ "./src/views/elements.js":
/*!*******************************!*\
  !*** ./src/views/elements.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const elements = {
    pageHeader: document.querySelector("#page-header"),
    projectHeader: document.querySelector("#project-header"),
    mainWrapper: document.querySelector(".main-wrapper"),
    pageHeaderName: document.querySelector("#header-name"),
    pageHeaderText: document.querySelector("#header-text"),

    signupPage: document.querySelector(".signup-page"),
    signupForm: document.querySelector(".signup-page form"),
    signupFormUsername: document.querySelector("#username"),
    templateButtonsContainer: document.querySelector(".signup-submit-buttons"),
    demoTemplateButton: document.querySelector("#demo-template-button"),
    emptyTemplateButton: document.querySelector("#empty-template-button"),

    newTaskButton: document.querySelector("#new-task"),
    sortTasksSelector: document.querySelector("#project-sort"),
    tasksContainer: document.querySelector("#project-tasks"),

    sidebarContainer: document.querySelector(".sidebar"),
    sidebarCollapse: document.querySelector(".sidebar-collapse-button"),
    overviewsContainer: document.querySelector("#overview-projects"),
    projectsContainer: document.querySelector("#user-projects"),
    tabTemplate: document.querySelector("#tab-template"),

    projectForm: document.querySelector("#project-form"),
    projectFormModal: document.querySelector("#project-form-modal"),
    projectFormHeader: document.querySelector("#project-form-modal-title"),
    projectFormName: document.querySelector("#project-name"),
    projectFormSubmit: document.querySelector("#add-project"),

    taskFormModal: document.querySelector("#task-form-modal"),
    taskTemplate: document.querySelector("#task-template"),
    taskForm: document.querySelector("#task-form"),
    taskFormTitle: document.querySelector("#task-title"),
    taskFormProjectContainer: document.querySelector("#project-select-container"),
    taskFormProject: document.querySelector("#task-project"),
    taskFormDescription: document.querySelector("#task-description"),
    taskFormPriority: document.querySelector("#task-priority"),
    taskFormDone: document.querySelector("#task-done"),
    taskFormDueDate: document.querySelector("#task-due-date"),
    taskFormSubmit: document.querySelector("#add-task"),
    taskFormHeader: document.querySelector("#task-form-modal-title"),
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elements);


/***/ }),

/***/ "./src/views/formView.js":
/*!*******************************!*\
  !*** ./src/views/formView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFormData: () => (/* binding */ getFormData),
/* harmony export */   loadProjectProperties: () => (/* binding */ loadProjectProperties),
/* harmony export */   loadProjectSelectOptions: () => (/* binding */ loadProjectSelectOptions),
/* harmony export */   loadTaskProperties: () => (/* binding */ loadTaskProperties),
/* harmony export */   onModalShow: () => (/* binding */ onModalShow),
/* harmony export */   resetInputs: () => (/* binding */ resetInputs)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/views/elements.js");


function isValidForm(form) {
    return form.querySelectorAll("input[required]:invalid").length === 0;
}

function getFormData(form) {
    if (!isValidForm(form)) return false;

    const formData = {};

    if (form.id === "task-form") {
        formData.title = _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormTitle.value;
        formData.description = _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormDescription.value.trim();
        formData.priority = _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormPriority.value;
        formData.done = _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormDone.checked;
        formData.dueDate = null;
        formData.projectIndex = null;

        if (_elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormDueDate.value !== "") {
            formData.dueDate = new Date(_elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormDueDate.value);
        }

        if (!_elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormProjectContainer.classList.contains("display-none")) {
            formData.projectIndex = _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormProject.value;
        }
    } else if (form.id === "project-form") {
        formData.name = _elements__WEBPACK_IMPORTED_MODULE_0__["default"].projectFormName.value;
    }

    return formData;
}

function resetInputs(form) {
    const textInputs = form.querySelectorAll("input[type='text'], textarea");
    const comboBoxes = form.querySelectorAll("select");
    const checkBoxes = form.querySelectorAll("input[type='checkbox']");

    textInputs.forEach((input) => {
        input.value = "";
    });

    comboBoxes.forEach((combo) => {
        combo.querySelectorAll("option").forEach((option) => {
            if (option.hasAttribute("selected")) {
                combo.value = option.value;
            }
        });
    });

    checkBoxes.forEach((checkBox) => {
        checkBox.checked = false;
    });

    // eslint-disable-next-line no-underscore-dangle
    _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormDueDate._flatpickr.clear();
}

function loadProjectSelectOptions(projects) {
    _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormProject.innerHTML = "";

    projects.forEach((project, index) => {
        if (project.isOverview()) return;

        const option = document.createElement("option");
        option.value = index;
        option.textContent = project.getName();
        _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormProject.appendChild(option);
    });
}

function loadProjectProperties(project) {
    _elements__WEBPACK_IMPORTED_MODULE_0__["default"].projectFormName.value = project.getName();
}

function loadTaskProperties(task) {
    const properties = task.getProperties();

    _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormTitle.value = properties.title;
    _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormDescription.value = properties.description ? properties.description : "";
    _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormPriority.value = properties.priority;
    _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormDone.checked = properties.done;

    if (properties.dueDate) {
        // eslint-disable-next-line no-underscore-dangle
        _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormDueDate._flatpickr.setDate(properties.dueDate);
    }
}

function onModalShow(modal, trigger) {
    const type = trigger.getAttribute("data-form-type");

    if (type === "new") {
        if (modal.id === "project-form-modal") {
            _elements__WEBPACK_IMPORTED_MODULE_0__["default"].projectFormHeader.textContent = "New Project";
            _elements__WEBPACK_IMPORTED_MODULE_0__["default"].projectFormSubmit.textContent = "Add";
            _elements__WEBPACK_IMPORTED_MODULE_0__["default"].projectForm.setAttribute("data-form-type", "new");
        } else if (modal.id === "task-form-modal") {
            _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormHeader.textContent = "New Task";
            _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormSubmit.textContent = "Add";
            _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskForm.setAttribute("data-form-type", "new");
        }
    }

    if (type === "edit") {
        if (modal.id === "project-form-modal") {
            _elements__WEBPACK_IMPORTED_MODULE_0__["default"].projectFormHeader.textContent = "Edit Project";
            _elements__WEBPACK_IMPORTED_MODULE_0__["default"].projectFormSubmit.textContent = "Edit";
            _elements__WEBPACK_IMPORTED_MODULE_0__["default"].projectForm.setAttribute("data-form-type", "edit");
        } else if (modal.id === "task-form-modal") {
            _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormHeader.textContent = "Edit Task";
            _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskFormSubmit.textContent = "Edit";
            _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskForm.setAttribute("data-form-type", "edit");
        }
    }
}


/***/ }),

/***/ "./src/views/projectView.js":
/*!**********************************!*\
  !*** ./src/views/projectView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadProject: () => (/* binding */ loadProject),
/* harmony export */   updateHeader: () => (/* binding */ updateHeader)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/views/elements.js");
/* harmony import */ var _taskView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskView */ "./src/views/taskView.js");
/* harmony import */ var _models_sortFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/sortFunctions */ "./src/models/sortFunctions.js");




function loadProject(project) {
    const tasks = project.getTasks();
    const subheader = project.getHeader();
    _elements__WEBPACK_IMPORTED_MODULE_0__["default"].tasksContainer.innerHTML = "";
    _elements__WEBPACK_IMPORTED_MODULE_0__["default"].sidebarContainer.setAttribute("data-current-project", project.getProjectIndex());

    if (project.getName() !== "All Tasks") {
        _elements__WEBPACK_IMPORTED_MODULE_0__["default"].projectHeader.innerHTML = `${subheader.text}<span class="project-name">${subheader.name}</span>`;
    } else {
        _elements__WEBPACK_IMPORTED_MODULE_0__["default"].projectHeader.innerHTML = "Here are <span class='project-name'>all</span> of the tasks you need to do";
    }

    tasks.forEach((task) => {
        (0,_taskView__WEBPACK_IMPORTED_MODULE_1__.createTask)(task);
    });

    const selectedOption = project.getSortType();
    _elements__WEBPACK_IMPORTED_MODULE_0__["default"].sortTasksSelector.innerHTML = "";
    Object.keys(_models_sortFunctions__WEBPACK_IMPORTED_MODULE_2__["default"]).forEach((key) => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = key;

        if (key === selectedOption) {
            option.selected = true;
        }

        _elements__WEBPACK_IMPORTED_MODULE_0__["default"].sortTasksSelector.appendChild(option);
    });
}

function updateHeader(project) {
    const subheader = project.getHeader();

    if (project.getName() !== "All Tasks") {
        _elements__WEBPACK_IMPORTED_MODULE_0__["default"].projectHeader.innerHTML = `${subheader.text}<span class="project-name">${subheader.name}</span>`;
    } else {
        _elements__WEBPACK_IMPORTED_MODULE_0__["default"].projectHeader.innerHTML = "Here are <span class='project-name'>all</span> of the tasks you need to do";
    }
}


/***/ }),

/***/ "./src/views/tabView.js":
/*!******************************!*\
  !*** ./src/views/tabView.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTab: () => (/* binding */ createTab),
/* harmony export */   loadTabs: () => (/* binding */ loadTabs),
/* harmony export */   updateSelected: () => (/* binding */ updateSelected)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/views/elements.js");


const { projectsContainer, tabTemplate, overviewsContainer, sidebarContainer } = _elements__WEBPACK_IMPORTED_MODULE_0__["default"];

function updateSelected(currentProjectIndex) {
    const tabs = document.querySelectorAll(".main-wrapper .project-selector");

    tabs.forEach((tab, index) => {
        if (index === currentProjectIndex) {
            tab.classList.add("selected");
        } else {
            tab.classList.remove("selected");
        }
    });
}

function createTab(project) {
    if (project.isOverview()) {
        const tab = tabTemplate.cloneNode();
        tab.removeAttribute("id");
        tab.textContent = project.getName();
        tab.classList.remove("user-project");
        tab.classList.add("project-overview");

        overviewsContainer.appendChild(tab);
        return;
    }

    const tab = tabTemplate.cloneNode(true);
    tab.removeAttribute("id");
    tab.innerHTML = project.getName() + tab.innerHTML;

    projectsContainer.appendChild(tab);
}

function loadTabs(projects) {
    projectsContainer.innerHTML = "";
    overviewsContainer.innerHTML = "";

    projects.forEach((project) => createTab(project));
    updateSelected(+sidebarContainer.getAttribute("data-current-project"));
}


/***/ }),

/***/ "./src/views/taskView.js":
/*!*******************************!*\
  !*** ./src/views/taskView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   removeTask: () => (/* binding */ removeTask),
/* harmony export */   updateTask: () => (/* binding */ updateTask)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/views/elements.js");


const { tasksContainer } = _elements__WEBPACK_IMPORTED_MODULE_0__["default"];

function updateTask(task, taskElement) {
    const taskProperties = task.getProperties();
    const priorityElement = taskElement.querySelector(".task-priority");
    const dueInElement = taskElement.querySelector(".task-due-in");
    const separatorElement = taskElement.querySelector(".horizontal-separator");
    const doneElement = taskElement.querySelector(".task-done");

    taskElement.querySelector(".task-header").textContent = taskProperties.title;
    taskElement.querySelector(".task-description").textContent = taskProperties.description;

    if (task.getProperty("descriptionToggled")) {
        taskElement.querySelector(".accordion-container").classList.add("accordion-visible");
    }

    taskElement.querySelector(".show-button").hidden = task.getProperty("description") === "";

    function updatePriority() {
        priorityElement.classList.add(`${taskProperties.priority}-priority`);
        priorityElement.textContent = taskProperties.priority;
        priorityElement.hidden = false;
    }

    function updateDueIn() {
        const dueIn = task.getDueIn();

        if (dueIn) {
            if (dueIn.relativeDate === 1) {
                dueInElement.textContent = `Due in ${dueIn.distanceFromNow}`;
            } else if (dueIn.relativeDate === -1 && dueIn.distanceFromNow !== "0 seconds") {
                dueInElement.textContent = `Overdue ${dueIn.distanceFromNow}`;
            } else {
                dueInElement.textContent = "Due now!!";
            }
        }

        dueInElement.hidden = false;
    }

    taskElement.querySelector(".task-info").hidden = false;
    taskElement.querySelector(".task-info").style = "";

    switch (true) {
        case taskProperties.priority !== "none" && taskProperties.dueDate !== null:
            updatePriority();
            updateDueIn();
            separatorElement.hidden = false;
            break;
        case taskProperties.priority !== "none":
            updatePriority();
            separatorElement.hidden = true;
            break;
        case taskProperties.dueDate !== null:
            updateDueIn();
            separatorElement.hidden = true;
            priorityElement.hidden = true;
            break;
        default:
            taskElement.querySelector(".task-info").hidden = true;
            taskElement.querySelector(".task-info").style = "display: none";
            break;
    }

    doneElement.checked = taskProperties.done;
}

function createTask(task) {
    const taskElement = _elements__WEBPACK_IMPORTED_MODULE_0__["default"].taskTemplate.cloneNode(true);

    taskElement.removeAttribute("id");
    updateTask(task, taskElement);
    tasksContainer.appendChild(taskElement);
}

function removeTask(taskIndex) {
    document.querySelector("#project-tasks").childNodes[taskIndex].remove();
}


/***/ }),

/***/ "./src/images/favicon.svg":
/*!********************************!*\
  !*** ./src/images/favicon.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d90af492c3ed5bb61c1e.svg";

/***/ }),

/***/ "./src/images/placeholder.png":
/*!************************************!*\
  !*** ./src/images/placeholder.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b95379099ffd311640b.png";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _style_form_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/form.css */ "./src/style/form.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var _images_favicon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/favicon.svg */ "./src/images/favicon.svg");
/* harmony import */ var _images_placeholder_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/placeholder.png */ "./src/images/placeholder.png");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controller */ "./src/controller.js");


 // flatpickr css won't load without this for some reason






(0,_controller__WEBPACK_IMPORTED_MODULE_5__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnRztBQUNqQjtBQUMvRSw4QkFBOEIsc0VBQTJCLENBQUMsK0VBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw0R0FBNEcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxVQUFVLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxRQUFRLFVBQVUsVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxPQUFPLE1BQU0sS0FBSyxLQUFLLEtBQUssT0FBTyxNQUFNLE9BQU8sT0FBTyxLQUFLLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxPQUFPLE1BQU0sS0FBSyxLQUFLLEtBQUssT0FBTyxNQUFNLE9BQU8sT0FBTyxVQUFVLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxNQUFNLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLGdCQUFnQixVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsV0FBVyxLQUFLLHNCQUFzQixhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxPQUFPLFlBQVksTUFBTSxPQUFPLFlBQVksTUFBTSxPQUFPLFlBQVksYUFBYSxNQUFNLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFL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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sc0ZBQXNGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxRQUFRLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsWUFBWSxhQUFhLFdBQVcsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFB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QUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRztBQUNILFdBQVcseUVBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLHlFQUFlO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyx5RUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRztBQUNILGFBQWEseUVBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7O0FDOUl3QztBQUNjO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LGdCQUFnQiwwREFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msa0JBQWtCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBEQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFdBQVc7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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RDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0EyQjtBQUNEO0FBQ1ksQ0FBQzs7QUFFVDtBQUNJOztBQUVIOztBQUUvQix1REFBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9mbGF0cGlja3IuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS9mb3JtLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Fzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvY2xvbmVPYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0RGlzdGFuY2VTdHJpY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9lc20vbDEwbi9kZWZhdWx0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9lc20vdHlwZXMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZXNtL3V0aWxzL2RhdGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9lc20vdXRpbHMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9lc20vdXRpbHMvZm9ybWF0dGluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZXNtL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9lc20vdXRpbHMvcG9seWZpbGxzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9taWNyb21vZGFsL2Rpc3QvbWljcm9tb2RhbC5lcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZmxhdHBpY2tyLmNzcz8wNmE5Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS9mb3JtLmNzcz9lYmU3Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Jbml0aWFsTG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvT3ZlcnZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvUHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvc29ydEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3cy9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlld3MvZm9ybVZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3Byb2plY3RWaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3cy90YWJWaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3cy90YXNrVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZmxhdHBpY2tyLWNhbGVuZGFyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcbiAgICAgICAgICBhbmltYXRpb246IG5vbmU7XG4gIGRpcmVjdGlvbjogbHRyO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzA3Ljg3NXB4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAgICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDAgMCAjZTZlNmU2LCAtMXB4IDAgMCAjZTZlNmU2LCAwIDFweCAwICNlNmU2ZTYsIDAgLTFweCAwICNlNmU2ZTYsIDAgM3B4IDEzcHggcmdiYSgwLDAsMCwwLjA4KTtcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMCAwICNlNmU2ZTYsIC0xcHggMCAwICNlNmU2ZTYsIDAgMXB4IDAgI2U2ZTZlNiwgMCAtMXB4IDAgI2U2ZTZlNiwgMCAzcHggMTNweCByZ2JhKDAsMCwwLDAuMDgpO1xufVxuLmZsYXRwaWNrci1jYWxlbmRhci5vcGVuLFxuLmZsYXRwaWNrci1jYWxlbmRhci5pbmxpbmUge1xuICBvcGFjaXR5OiAxO1xuICBtYXgtaGVpZ2h0OiA2NDBweDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIub3BlbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgei1pbmRleDogOTk5OTk7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUub3BlbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbkRvd24gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlSW5Eb3duIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIuaW5saW5lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyLnN0YXRpYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDEwMCUgKyAycHgpO1xufVxuLmZsYXRwaWNrci1jYWxlbmRhci5zdGF0aWMub3BlbiB7XG4gIHotaW5kZXg6IDk5OTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyLm11bHRpTW9udGggLmZsYXRwaWNrci1kYXlzIC5kYXlDb250YWluZXI6bnRoLWNoaWxkKG4rMSkgLmZsYXRwaWNrci1kYXkuaW5SYW5nZTpudGgtY2hpbGQoN24rNykge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyLm11bHRpTW9udGggLmZsYXRwaWNrci1kYXlzIC5kYXlDb250YWluZXI6bnRoLWNoaWxkKG4rMikgLmZsYXRwaWNrci1kYXkuaW5SYW5nZTpudGgtY2hpbGQoN24rMSkge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IC0ycHggMCAwICNlNmU2ZTYsIDVweCAwIDAgI2U2ZTZlNjtcbiAgICAgICAgICBib3gtc2hhZG93OiAtMnB4IDAgMCAjZTZlNmU2LCA1cHggMCAwICNlNmU2ZTY7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyIC5oYXNXZWVrcyAuZGF5Q29udGFpbmVyLFxuLmZsYXRwaWNrci1jYWxlbmRhciAuaGFzVGltZSAuZGF5Q29udGFpbmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyIC5oYXNXZWVrcyAuZGF5Q29udGFpbmVyIHtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyLmhhc1RpbWUgLmZsYXRwaWNrci10aW1lIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIubm9DYWxlbmRhci5oYXNUaW1lIC5mbGF0cGlja3ItdGltZSB7XG4gIGhlaWdodDogYXV0bztcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXI6YmVmb3JlLFxuLmZsYXRwaWNrci1jYWxlbmRhcjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb250ZW50OiAnJztcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgbGVmdDogMjJweDtcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIucmlnaHRNb3N0OmJlZm9yZSxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dSaWdodDpiZWZvcmUsXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnJpZ2h0TW9zdDphZnRlcixcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dSaWdodDphZnRlciB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAyMnB4O1xufVxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0NlbnRlcjpiZWZvcmUsXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Q2VudGVyOmFmdGVyIHtcbiAgbGVmdDogNTAlO1xuICByaWdodDogNTAlO1xufVxuLmZsYXRwaWNrci1jYWxlbmRhcjpiZWZvcmUge1xuICBib3JkZXItd2lkdGg6IDVweDtcbiAgbWFyZ2luOiAwIC01cHg7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyOmFmdGVyIHtcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XG4gIG1hcmdpbjogMCAtNHB4O1xufVxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDpiZWZvcmUsXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmFmdGVyIHtcbiAgYm90dG9tOiAxMDAlO1xufVxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDpiZWZvcmUge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZTZlNmU2O1xufVxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDphZnRlciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Qm90dG9tOmJlZm9yZSxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YWZ0ZXIge1xuICB0b3A6IDEwMCU7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Qm90dG9tOmJlZm9yZSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNlNmU2ZTY7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Qm90dG9tOmFmdGVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXI6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuLmZsYXRwaWNrci13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZmxhdHBpY2tyLW1vbnRocyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1tb250aCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogcmdiYSgwLDAsMCwwLjkpO1xuICBmaWxsOiByZ2JhKDAsMCwwLDAuOSk7XG4gIGhlaWdodDogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xufVxuLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1wcmV2LW1vbnRoLFxuLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1uZXh0LW1vbnRoIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDM0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHotaW5kZXg6IDM7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7XG4gIGZpbGw6IHJnYmEoMCwwLDAsMC45KTtcbn1cbi5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItcHJldi1tb250aC5mbGF0cGlja3ItZGlzYWJsZWQsXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW5leHQtbW9udGguZmxhdHBpY2tyLWRpc2FibGVkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItcHJldi1tb250aCBpLFxuLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1uZXh0LW1vbnRoIGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLXByZXYtbW9udGguZmxhdHBpY2tyLXByZXYtbW9udGgsXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW5leHQtbW9udGguZmxhdHBpY2tyLXByZXYtbW9udGgge1xuLypcbiAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXG4vKlxuICAgICAgKi9cbiAgbGVmdDogMDtcbi8qXG4gICAgICAvKnJ0bDplbmQ6aWdub3JlKi9cbi8qXG4gICAgICAqL1xufVxuLypcbiAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXG4vKlxuICAgICAgLypydGw6ZW5kOmlnbm9yZSovXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLXByZXYtbW9udGguZmxhdHBpY2tyLW5leHQtbW9udGgsXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW5leHQtbW9udGguZmxhdHBpY2tyLW5leHQtbW9udGgge1xuLypcbiAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXG4vKlxuICAgICAgKi9cbiAgcmlnaHQ6IDA7XG4vKlxuICAgICAgLypydGw6ZW5kOmlnbm9yZSovXG4vKlxuICAgICAgKi9cbn1cbi8qXG4gICAgICAvKnJ0bDpiZWdpbjppZ25vcmUqL1xuLypcbiAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xuLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1wcmV2LW1vbnRoOmhvdmVyLFxuLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1uZXh0LW1vbnRoOmhvdmVyIHtcbiAgY29sb3I6ICM5NTllYTk7XG59XG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLXByZXYtbW9udGg6aG92ZXIgc3ZnLFxuLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1uZXh0LW1vbnRoOmhvdmVyIHN2ZyB7XG4gIGZpbGw6ICNmNjQ3NDc7XG59XG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLXByZXYtbW9udGggc3ZnLFxuLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1uZXh0LW1vbnRoIHN2ZyB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG59XG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLXByZXYtbW9udGggc3ZnIHBhdGgsXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW5leHQtbW9udGggc3ZnIHBhdGgge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGZpbGwgMC4xcztcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjFzO1xuICBmaWxsOiBpbmhlcml0O1xufVxuLm51bUlucHV0V3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLm51bUlucHV0V3JhcHBlciBpbnB1dCxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5udW1JbnB1dFdyYXBwZXIgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5udW1JbnB1dFdyYXBwZXIgaW5wdXQ6Oi1tcy1jbGVhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubnVtSW5wdXRXcmFwcGVyIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuLm51bUlucHV0V3JhcHBlciBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIG1hcmdpbjogMDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuLm51bUlucHV0V3JhcHBlciBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDE0cHg7XG4gIHBhZGRpbmc6IDAgNHB4IDAgMnB4O1xuICBoZWlnaHQ6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDUwJTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU3LDU3LDU3LDAuMTUpO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5udW1JbnB1dFdyYXBwZXIgc3Bhbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xKTtcbn1cbi5udW1JbnB1dFdyYXBwZXIgc3BhbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XG59XG4ubnVtSW5wdXRXcmFwcGVyIHNwYW46YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXAge1xuICB0b3A6IDA7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dVcDphZnRlciB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgcmdiYSg1Nyw1Nyw1NywwLjYpO1xuICB0b3A6IDI2JTtcbn1cbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd24ge1xuICB0b3A6IDUwJTtcbn1cbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd246YWZ0ZXIge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoNTcsNTcsNTcsMC42KTtcbiAgdG9wOiA0MCU7XG59XG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4gc3ZnIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogYXV0bztcbn1cbi5udW1JbnB1dFdyYXBwZXIgc3BhbiBzdmcgcGF0aCB7XG4gIGZpbGw6IHJnYmEoMCwwLDAsMC41KTtcbn1cbi5udW1JbnB1dFdyYXBwZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xufVxuLm51bUlucHV0V3JhcHBlcjpob3ZlciBzcGFuIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5mbGF0cGlja3ItY3VycmVudC1tb250aCB7XG4gIGZvbnQtc2l6ZTogMTM1JTtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3NSU7XG4gIGxlZnQ6IDEyLjUlO1xuICBwYWRkaW5nOiA3LjQ4cHggMCAwIDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBoZWlnaHQ6IDM0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbn1cbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBzcGFuLmN1ci1tb250aCB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMC41Y2g7XG4gIHBhZGRpbmc6IDA7XG59XG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggc3Bhbi5jdXItbW9udGg6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xufVxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5udW1JbnB1dFdyYXBwZXIge1xuICB3aWR0aDogNmNoO1xuICB3aWR0aDogN2NoXFxcXDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5mbGF0cGlja3ItY3VycmVudC1tb250aCAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dVcDphZnRlciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwwLDAsMC45KTtcbn1cbi5mbGF0cGlja3ItY3VycmVudC1tb250aCAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dEb3duOmFmdGVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLDAsMCwwLjkpO1xufVxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgY3Vyc29yOiB0ZXh0O1xuICBwYWRkaW5nOiAwIDAgMCAwLjVjaDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgdmVydGljYWwtYWxpZ246IGluaXRpYWw7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBpbnB1dC5jdXIteWVhcltkaXNhYmxlZF0sXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXJbZGlzYWJsZWRdOmhvdmVyIHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBjb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLmZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRocyB7XG4gIGFwcGVhcmFuY2U6IG1lbnVsaXN0O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogMzAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBtYXJnaW46IC0xcHggMCAwIDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMCAwIDAuNWNoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbWVudWxpc3Q7XG4gIC1tb3otYXBwZWFyYW5jZTogbWVudWxpc3Q7XG4gIHdpZHRoOiBhdXRvO1xufVxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5mbGF0cGlja3ItbW9udGhEcm9wZG93bi1tb250aHM6Zm9jdXMsXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLmZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRoczphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5mbGF0cGlja3ItbW9udGhEcm9wZG93bi1tb250aHM6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xufVxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5mbGF0cGlja3ItbW9udGhEcm9wZG93bi1tb250aHMgLmZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG4uZmxhdHBpY2tyLXdlZWtkYXlzIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjhweDtcbn1cbi5mbGF0cGlja3Itd2Vla2RheXMgLmZsYXRwaWNrci13ZWVrZGF5Y29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC13ZWJraXQtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG59XG5zcGFuLmZsYXRwaWNrci13ZWVrZGF5IHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBmb250LXNpemU6IDkwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNTQpO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmRheUNvbnRhaW5lcixcbi5mbGF0cGlja3Itd2Vla3Mge1xuICBwYWRkaW5nOiAxcHggMCAwIDA7XG59XG4uZmxhdHBpY2tyLWRheXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAzMDcuODc1cHg7XG59XG4uZmxhdHBpY2tyLWRheXM6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuLmRheUNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAzMDcuODc1cHg7XG4gIG1pbi13aWR0aDogMzA3Ljg3NXB4O1xuICBtYXgtd2lkdGg6IDMwNy44NzVweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gIG9wYWNpdHk6IDE7XG59XG4uZGF5Q29udGFpbmVyICsgLmRheUNvbnRhaW5lciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAwIDAgI2U2ZTZlNjtcbiAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDAgMCAjZTZlNmU2O1xufVxuLmZsYXRwaWNrci1kYXkge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogIzM5MzkzOTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aWR0aDogMTQuMjg1NzE0MyU7XG4gIC13ZWJraXQtZmxleC1iYXNpczogMTQuMjg1NzE0MyU7XG4gICAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTQuMjg1NzE0MyU7XG4gICAgICAgICAgZmxleC1iYXNpczogMTQuMjg1NzE0MyU7XG4gIG1heC13aWR0aDogMzlweDtcbiAgaGVpZ2h0OiAzOXB4O1xuICBsaW5lLWhlaWdodDogMzlweDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmxhdHBpY2tyLWRheS5pblJhbmdlLFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5LmluUmFuZ2UsXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXkuaW5SYW5nZSxcbi5mbGF0cGlja3ItZGF5LnRvZGF5LmluUmFuZ2UsXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXkudG9kYXkuaW5SYW5nZSxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheS50b2RheS5pblJhbmdlLFxuLmZsYXRwaWNrci1kYXk6aG92ZXIsXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXk6aG92ZXIsXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXk6aG92ZXIsXG4uZmxhdHBpY2tyLWRheTpmb2N1cyxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheTpmb2N1cyxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheTpmb2N1cyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgYm9yZGVyLWNvbG9yOiAjZTZlNmU2O1xufVxuLmZsYXRwaWNrci1kYXkudG9kYXkge1xuICBib3JkZXItY29sb3I6ICM5NTllYTk7XG59XG4uZmxhdHBpY2tyLWRheS50b2RheTpob3Zlcixcbi5mbGF0cGlja3ItZGF5LnRvZGF5OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjOTU5ZWE5O1xuICBiYWNrZ3JvdW5kOiAjOTU5ZWE5O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZSxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuaW5SYW5nZSxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UuaW5SYW5nZSxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLmluUmFuZ2UsXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZDpmb2N1cyxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2U6Zm9jdXMsXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZTpmb2N1cyxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkOmhvdmVyLFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZTpob3Zlcixcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlOmhvdmVyLFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQucHJldk1vbnRoRGF5LFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5wcmV2TW9udGhEYXksXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5wcmV2TW9udGhEYXksXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5uZXh0TW9udGhEYXksXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLm5leHRNb250aERheSxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLm5leHRNb250aERheSB7XG4gIGJhY2tncm91bmQ6ICM1NjlmZjc7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjNTY5ZmY3O1xufVxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZSxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2Uuc3RhcnRSYW5nZSxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnN0YXJ0UmFuZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDAgMCA1MHB4O1xufVxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuZW5kUmFuZ2UsXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLmVuZFJhbmdlLFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UuZW5kUmFuZ2Uge1xuICBib3JkZXItcmFkaXVzOiAwIDUwcHggNTBweCAwO1xufVxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZSArIC5lbmRSYW5nZTpub3QoOm50aC1jaGlsZCg3bisxKSksXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLnN0YXJ0UmFuZ2UgKyAuZW5kUmFuZ2U6bm90KDpudGgtY2hpbGQoN24rMSkpLFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZSArIC5lbmRSYW5nZTpub3QoOm50aC1jaGlsZCg3bisxKSkge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xMHB4IDAgMCAjNTY5ZmY3O1xuICAgICAgICAgIGJveC1zaGFkb3c6IC0xMHB4IDAgMCAjNTY5ZmY3O1xufVxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZS5lbmRSYW5nZSxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2Uuc3RhcnRSYW5nZS5lbmRSYW5nZSxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnN0YXJ0UmFuZ2UuZW5kUmFuZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuLmZsYXRwaWNrci1kYXkuaW5SYW5nZSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTVweCAwIDAgI2U2ZTZlNiwgNXB4IDAgMCAjZTZlNmU2O1xuICAgICAgICAgIGJveC1zaGFkb3c6IC01cHggMCAwICNlNmU2ZTYsIDVweCAwIDAgI2U2ZTZlNjtcbn1cbi5mbGF0cGlja3ItZGF5LmZsYXRwaWNrci1kaXNhYmxlZCxcbi5mbGF0cGlja3ItZGF5LmZsYXRwaWNrci1kaXNhYmxlZDpob3Zlcixcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheSxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheSxcbi5mbGF0cGlja3ItZGF5Lm5vdEFsbG93ZWQsXG4uZmxhdHBpY2tyLWRheS5ub3RBbGxvd2VkLnByZXZNb250aERheSxcbi5mbGF0cGlja3ItZGF5Lm5vdEFsbG93ZWQubmV4dE1vbnRoRGF5IHtcbiAgY29sb3I6IHJnYmEoNTcsNTcsNTcsMC4zKTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5mbGF0cGlja3ItZGF5LmZsYXRwaWNrci1kaXNhYmxlZCxcbi5mbGF0cGlja3ItZGF5LmZsYXRwaWNrci1kaXNhYmxlZDpob3ZlciB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGNvbG9yOiByZ2JhKDU3LDU3LDU3LDAuMSk7XG59XG4uZmxhdHBpY2tyLWRheS53ZWVrLnNlbGVjdGVkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtNXB4IDAgMCAjNTY5ZmY3LCA1cHggMCAwICM1NjlmZjc7XG4gICAgICAgICAgYm94LXNoYWRvdzogLTVweCAwIDAgIzU2OWZmNywgNXB4IDAgMCAjNTY5ZmY3O1xufVxuLmZsYXRwaWNrci1kYXkuaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnJhbmdlTW9kZSAuZmxhdHBpY2tyLWRheSB7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIge1xuICBmbG9hdDogbGVmdDtcbn1cbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIgLmZsYXRwaWNrci13ZWVrcyB7XG4gIHBhZGRpbmc6IDAgMTJweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMCAwICNlNmU2ZTY7XG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDAgMCAjZTZlNmU2O1xufVxuLmZsYXRwaWNrci13ZWVrd3JhcHBlciAuZmxhdHBpY2tyLXdlZWtkYXkge1xuICBmbG9hdDogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLmZsYXRwaWNrci13ZWVrd3JhcHBlciBzcGFuLmZsYXRwaWNrci1kYXksXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIHNwYW4uZmxhdHBpY2tyLWRheTpob3ZlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiBub25lO1xuICBjb2xvcjogcmdiYSg1Nyw1Nyw1NywwLjMpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBib3JkZXI6IG5vbmU7XG59XG4uZmxhdHBpY2tyLWlubmVyQ29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5mbGF0cGlja3ItckNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uZmxhdHBpY2tyLXRpbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmxhdHBpY2tyLXRpbWU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG4uZmxhdHBpY2tyLXRpbWUgLm51bUlucHV0V3JhcHBlciB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC13ZWJraXQtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogNDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uZmxhdHBpY2tyLXRpbWUgLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXA6YWZ0ZXIge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMzkzOTM5O1xufVxuLmZsYXRwaWNrci10aW1lIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd246YWZ0ZXIge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMzkzOTM5O1xufVxuLmZsYXRwaWNrci10aW1lLmhhc1NlY29uZHMgLm51bUlucHV0V3JhcHBlciB7XG4gIHdpZHRoOiAyNiU7XG59XG4uZmxhdHBpY2tyLXRpbWUudGltZTI0aHIgLm51bUlucHV0V3JhcHBlciB7XG4gIHdpZHRoOiA0OSU7XG59XG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGNvbG9yOiAjMzkzOTM5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuLmZsYXRwaWNrci10aW1lIGlucHV0LmZsYXRwaWNrci1ob3VyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQuZmxhdHBpY2tyLW1pbnV0ZSxcbi5mbGF0cGlja3ItdGltZSBpbnB1dC5mbGF0cGlja3Itc2Vjb25kIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5mbGF0cGlja3ItdGltZSBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogMDtcbn1cbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLXRpbWUtc2VwYXJhdG9yLFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG0ge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgY29sb3I6ICMzOTM5Mzk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMiU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLWFtLXBtIHtcbiAgb3V0bGluZTogMDtcbiAgd2lkdGg6IDE4JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQ6aG92ZXIsXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbTpob3Zlcixcbi5mbGF0cGlja3ItdGltZSBpbnB1dDpmb2N1cyxcbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLWFtLXBtOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cbi5mbGF0cGlja3ItaW5wdXRbcmVhZG9ubHldIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZwRmFkZUluRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZnBGYWRlSW5Eb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZmxhdHBpY2tyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHVCQUF1QjtVQUNmLGVBQWU7RUFDdkIsY0FBYztFQUNkLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFB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b0I7RUFDcEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QseUJBQXlCO0tBQ3RCLHNCQUFzQjtNQUNyQixxQkFBcUI7VUFDakIsaUJBQWlCO0VBQ3pCLDBCQUEwQjtNQUN0QiwyQkFBMkI7VUFDdkIsa0JBQWtCO0FBQzVCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7Ozs7RUFJRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJDQUEyQztZQUNuQyxtQ0FBbUM7RUFDN0M7RUFDQTtJQUNFLFVBQVU7SUFDVix1Q0FBdUM7WUFDL0IsK0JBQStCO0VBQ3pDO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJDQUEyQztZQUNuQyxtQ0FBbUM7RUFDN0M7RUFDQTtJQUNFLFVBQVU7SUFDVix1Q0FBdUM7WUFDL0IsK0JBQStCO0VBQ3pDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZsYXRwaWNrci1jYWxlbmRhciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBub25lO1xcbiAgICAgICAgICBhbmltYXRpb246IG5vbmU7XFxuICBkaXJlY3Rpb246IGx0cjtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDMwNy44NzVweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAwIDAgI2U2ZTZlNiwgLTFweCAwIDAgI2U2ZTZlNiwgMCAxcHggMCAjZTZlNmU2LCAwIC0xcHggMCAjZTZlNmU2LCAwIDNweCAxM3B4IHJnYmEoMCwwLDAsMC4wOCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAwIDAgI2U2ZTZlNiwgLTFweCAwIDAgI2U2ZTZlNiwgMCAxcHggMCAjZTZlNmU2LCAwIC0xcHggMCAjZTZlNmU2LCAwIDNweCAxM3B4IHJnYmEoMCwwLDAsMC4wOCk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIub3BlbixcXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmlubGluZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgbWF4LWhlaWdodDogNjQwcHg7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLm9wZW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgei1pbmRleDogOTk5OTk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZS5vcGVuIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbkRvd24gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluRG93biAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuaW5saW5lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc3RhdGljIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYygxMDAlICsgMnB4KTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5zdGF0aWMub3BlbiB7XFxuICB6LWluZGV4OiA5OTk7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5tdWx0aU1vbnRoIC5mbGF0cGlja3ItZGF5cyAuZGF5Q29udGFpbmVyOm50aC1jaGlsZChuKzEpIC5mbGF0cGlja3ItZGF5LmluUmFuZ2U6bnRoLWNoaWxkKDduKzcpIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIubXVsdGlNb250aCAuZmxhdHBpY2tyLWRheXMgLmRheUNvbnRhaW5lcjpudGgtY2hpbGQobisyKSAuZmxhdHBpY2tyLWRheS5pblJhbmdlOm50aC1jaGlsZCg3bisxKSB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IC0ycHggMCAwICNlNmU2ZTYsIDVweCAwIDAgI2U2ZTZlNjtcXG4gICAgICAgICAgYm94LXNoYWRvdzogLTJweCAwIDAgI2U2ZTZlNiwgNXB4IDAgMCAjZTZlNmU2O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyIC5oYXNXZWVrcyAuZGF5Q29udGFpbmVyLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIgLmhhc1RpbWUgLmRheUNvbnRhaW5lciB7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyIC5oYXNXZWVrcyAuZGF5Q29udGFpbmVyIHtcXG4gIGJvcmRlci1sZWZ0OiAwO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmhhc1RpbWUgLmZsYXRwaWNrci10aW1lIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTZlNmU2O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLm5vQ2FsZW5kYXIuaGFzVGltZSAuZmxhdHBpY2tyLXRpbWUge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmJlZm9yZSxcXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgY29udGVudDogJyc7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG4gIGxlZnQ6IDIycHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIucmlnaHRNb3N0OmJlZm9yZSxcXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93UmlnaHQ6YmVmb3JlLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIucmlnaHRNb3N0OmFmdGVyLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dSaWdodDphZnRlciB7XFxuICBsZWZ0OiBhdXRvO1xcbiAgcmlnaHQ6IDIycHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dDZW50ZXI6YmVmb3JlLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dDZW50ZXI6YWZ0ZXIge1xcbiAgbGVmdDogNTAlO1xcbiAgcmlnaHQ6IDUwJTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhcjpiZWZvcmUge1xcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICBtYXJnaW46IDAgLTVweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhcjphZnRlciB7XFxuICBib3JkZXItd2lkdGg6IDRweDtcXG4gIG1hcmdpbjogMCAtNHB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmJlZm9yZSxcXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmFmdGVyIHtcXG4gIGJvdHRvbTogMTAwJTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDpiZWZvcmUge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2U2ZTZlNjtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDphZnRlciB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Qm90dG9tOmJlZm9yZSxcXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Qm90dG9tOmFmdGVyIHtcXG4gIHRvcDogMTAwJTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTpiZWZvcmUge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2U2ZTZlNjtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTphZnRlciB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5mbGF0cGlja3Itd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5mbGF0cGlja3ItbW9udGhzIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW1vbnRoIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC45KTtcXG4gIGZpbGw6IHJnYmEoMCwwLDAsMC45KTtcXG4gIGhlaWdodDogMzRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgLXdlYmtpdC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbn1cXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLXByZXYtbW9udGgsXFxuLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1uZXh0LW1vbnRoIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgei1pbmRleDogMztcXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7XFxuICBmaWxsOiByZ2JhKDAsMCwwLDAuOSk7XFxufVxcbi5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItcHJldi1tb250aC5mbGF0cGlja3ItZGlzYWJsZWQsXFxuLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1uZXh0LW1vbnRoLmZsYXRwaWNrci1kaXNhYmxlZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLXByZXYtbW9udGggaSxcXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW5leHQtbW9udGggaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItcHJldi1tb250aC5mbGF0cGlja3ItcHJldi1tb250aCxcXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW5leHQtbW9udGguZmxhdHBpY2tyLXByZXYtbW9udGgge1xcbi8qXFxuICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cXG4vKlxcbiAgICAgICovXFxuICBsZWZ0OiAwO1xcbi8qXFxuICAgICAgLypydGw6ZW5kOmlnbm9yZSovXFxuLypcXG4gICAgICAqL1xcbn1cXG4vKlxcbiAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXFxuLypcXG4gICAgICAvKnJ0bDplbmQ6aWdub3JlKi9cXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLXByZXYtbW9udGguZmxhdHBpY2tyLW5leHQtbW9udGgsXFxuLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1uZXh0LW1vbnRoLmZsYXRwaWNrci1uZXh0LW1vbnRoIHtcXG4vKlxcbiAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXFxuLypcXG4gICAgICAqL1xcbiAgcmlnaHQ6IDA7XFxuLypcXG4gICAgICAvKnJ0bDplbmQ6aWdub3JlKi9cXG4vKlxcbiAgICAgICovXFxufVxcbi8qXFxuICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cXG4vKlxcbiAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xcbi5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItcHJldi1tb250aDpob3ZlcixcXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW5leHQtbW9udGg6aG92ZXIge1xcbiAgY29sb3I6ICM5NTllYTk7XFxufVxcbi5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItcHJldi1tb250aDpob3ZlciBzdmcsXFxuLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1uZXh0LW1vbnRoOmhvdmVyIHN2ZyB7XFxuICBmaWxsOiAjZjY0NzQ3O1xcbn1cXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLXByZXYtbW9udGggc3ZnLFxcbi5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItbmV4dC1tb250aCBzdmcge1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDE0cHg7XFxufVxcbi5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItcHJldi1tb250aCBzdmcgcGF0aCxcXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW5leHQtbW9udGggc3ZnIHBhdGgge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBmaWxsIDAuMXM7XFxuICB0cmFuc2l0aW9uOiBmaWxsIDAuMXM7XFxuICBmaWxsOiBpbmhlcml0O1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLm51bUlucHV0V3JhcHBlciBpbnB1dCxcXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIGlucHV0OjotbXMtY2xlYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcXG4ubnVtSW5wdXRXcmFwcGVyIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcXG4gIG1hcmdpbjogMDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDE0cHg7XFxuICBwYWRkaW5nOiAwIDRweCAwIDJweDtcXG4gIGhlaWdodDogNTAlO1xcbiAgbGluZS1oZWlnaHQ6IDUwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDU3LDU3LDU3LDAuMTUpO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuOmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwIHtcXG4gIHRvcDogMDtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwOmFmdGVyIHtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZ2JhKDU3LDU3LDU3LDAuNik7XFxuICB0b3A6IDI2JTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93biB7XFxuICB0b3A6IDUwJTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93bjphZnRlciB7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSg1Nyw1Nyw1NywwLjYpO1xcbiAgdG9wOiA0MCU7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbiBzdmcge1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbiBzdmcgcGF0aCB7XFxuICBmaWxsOiByZ2JhKDAsMCwwLDAuNSk7XFxufVxcbi5udW1JbnB1dFdyYXBwZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjA1KTtcXG59XFxuLm51bUlucHV0V3JhcHBlcjpob3ZlciBzcGFuIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCB7XFxuICBmb250LXNpemU6IDEzNSU7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA3NSU7XFxuICBsZWZ0OiAxMi41JTtcXG4gIHBhZGRpbmc6IDcuNDhweCAwIDAgMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggc3Bhbi5jdXItbW9udGgge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMC41Y2g7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggc3Bhbi5jdXItbW9udGg6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjA1KTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgd2lkdGg6IDZjaDtcXG4gIHdpZHRoOiA3Y2hcXFxcMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwOmFmdGVyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwwLDAsMC45KTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd246YWZ0ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLDAsMCwwLjkpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXIge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGN1cnNvcjogdGV4dDtcXG4gIHBhZGRpbmc6IDAgMCAwIDAuNWNoO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgdmVydGljYWwtYWxpZ246IGluaXRpYWw7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXI6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyW2Rpc2FibGVkXSxcXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXJbZGlzYWJsZWRdOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLmZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRocyB7XFxuICBhcHBlYXJhbmNlOiBtZW51bGlzdDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAtMXB4IDAgMCAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAgMCAwIDAuNWNoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGluaXRpYWw7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG1lbnVsaXN0O1xcbiAgLW1vei1hcHBlYXJhbmNlOiBtZW51bGlzdDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLmZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRoczpmb2N1cyxcXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLmZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRoczphY3RpdmUge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5mbGF0cGlja3ItbW9udGhEcm9wZG93bi1tb250aHM6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjA1KTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5mbGF0cGlja3ItbW9udGhEcm9wZG93bi1tb250aHMgLmZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5mbGF0cGlja3Itd2Vla2RheXMge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMjhweDtcXG59XFxuLmZsYXRwaWNrci13ZWVrZGF5cyAuZmxhdHBpY2tyLXdlZWtkYXljb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgLXdlYmtpdC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbn1cXG5zcGFuLmZsYXRwaWNrci13ZWVrZGF5IHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjU0KTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgLXdlYmtpdC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLmRheUNvbnRhaW5lcixcXG4uZmxhdHBpY2tyLXdlZWtzIHtcXG4gIHBhZGRpbmc6IDFweCAwIDAgMDtcXG59XFxuLmZsYXRwaWNrci1kYXlzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHdpZHRoOiAzMDcuODc1cHg7XFxufVxcbi5mbGF0cGlja3ItZGF5czpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uZGF5Q29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHdpZHRoOiAzMDcuODc1cHg7XFxuICBtaW4td2lkdGg6IDMwNy44NzVweDtcXG4gIG1heC13aWR0aDogMzA3Ljg3NXB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5kYXlDb250YWluZXIgKyAuZGF5Q29udGFpbmVyIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAwIDAgI2U2ZTZlNjtcXG4gICAgICAgICAgYm94LXNoYWRvdzogLTFweCAwIDAgI2U2ZTZlNjtcXG59XFxuLmZsYXRwaWNrci1kYXkge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogIzM5MzkzOTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB3aWR0aDogMTQuMjg1NzE0MyU7XFxuICAtd2Via2l0LWZsZXgtYmFzaXM6IDE0LjI4NTcxNDMlO1xcbiAgICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxNC4yODU3MTQzJTtcXG4gICAgICAgICAgZmxleC1iYXNpczogMTQuMjg1NzE0MyU7XFxuICBtYXgtd2lkdGg6IDM5cHg7XFxuICBoZWlnaHQ6IDM5cHg7XFxuICBsaW5lLWhlaWdodDogMzlweDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZsYXRwaWNrci1kYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS50b2RheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheS50b2RheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheS50b2RheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5OmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXk6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXk6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5OmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheTpmb2N1cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiAwO1xcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcXG4gIGJvcmRlci1jb2xvcjogI2U2ZTZlNjtcXG59XFxuLmZsYXRwaWNrci1kYXkudG9kYXkge1xcbiAgYm9yZGVyLWNvbG9yOiAjOTU5ZWE5O1xcbn1cXG4uZmxhdHBpY2tyLWRheS50b2RheTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS50b2RheTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICM5NTllYTk7XFxuICBiYWNrZ3JvdW5kOiAjOTU5ZWE5O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZDpmb2N1cyxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlOmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlOmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkOmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2U6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2U6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnByZXZNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5uZXh0TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5uZXh0TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UubmV4dE1vbnRoRGF5IHtcXG4gIGJhY2tncm91bmQ6ICM1NjlmZjc7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogIzU2OWZmNztcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLnN0YXJ0UmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4IDAgMCA1MHB4O1xcbn1cXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLmVuZFJhbmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNTBweCA1MHB4IDA7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLnN0YXJ0UmFuZ2UgKyAuZW5kUmFuZ2U6bm90KDpudGgtY2hpbGQoN24rMSkpLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2Uuc3RhcnRSYW5nZSArIC5lbmRSYW5nZTpub3QoOm50aC1jaGlsZCg3bisxKSksXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZSArIC5lbmRSYW5nZTpub3QoOm50aC1jaGlsZCg3bisxKSkge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMTBweCAwIDAgIzU2OWZmNztcXG4gICAgICAgICAgYm94LXNoYWRvdzogLTEwcHggMCAwICM1NjlmZjc7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLnN0YXJ0UmFuZ2UuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5zdGFydFJhbmdlLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnN0YXJ0UmFuZ2UuZW5kUmFuZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuLmZsYXRwaWNrci1kYXkuaW5SYW5nZSB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtNXB4IDAgMCAjZTZlNmU2LCA1cHggMCAwICNlNmU2ZTY7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IC01cHggMCAwICNlNmU2ZTYsIDVweCAwIDAgI2U2ZTZlNjtcXG59XFxuLmZsYXRwaWNrci1kYXkuZmxhdHBpY2tyLWRpc2FibGVkLFxcbi5mbGF0cGlja3ItZGF5LmZsYXRwaWNrci1kaXNhYmxlZDpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5Lm5vdEFsbG93ZWQsXFxuLmZsYXRwaWNrci1kYXkubm90QWxsb3dlZC5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkubm90QWxsb3dlZC5uZXh0TW9udGhEYXkge1xcbiAgY29sb3I6IHJnYmEoNTcsNTcsNTcsMC4zKTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLmZsYXRwaWNrci1kYXkuZmxhdHBpY2tyLWRpc2FibGVkLFxcbi5mbGF0cGlja3ItZGF5LmZsYXRwaWNrci1kaXNhYmxlZDpob3ZlciB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgY29sb3I6IHJnYmEoNTcsNTcsNTcsMC4xKTtcXG59XFxuLmZsYXRwaWNrci1kYXkud2Vlay5zZWxlY3RlZCB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtNXB4IDAgMCAjNTY5ZmY3LCA1cHggMCAwICM1NjlmZjc7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IC01cHggMCAwICM1NjlmZjcsIDVweCAwIDAgIzU2OWZmNztcXG59XFxuLmZsYXRwaWNrci1kYXkuaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLnJhbmdlTW9kZSAuZmxhdHBpY2tyLWRheSB7XFxuICBtYXJnaW4tdG9wOiAxcHg7XFxufVxcbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIgLmZsYXRwaWNrci13ZWVrcyB7XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAwIDAgI2U2ZTZlNjtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDAgMCAjZTZlNmU2O1xcbn1cXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIC5mbGF0cGlja3Itd2Vla2RheSB7XFxuICBmbG9hdDogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxufVxcbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIgc3Bhbi5mbGF0cGlja3ItZGF5LFxcbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIgc3Bhbi5mbGF0cGlja3ItZGF5OmhvdmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IG5vbmU7XFxuICBjb2xvcjogcmdiYSg1Nyw1Nyw1NywwLjMpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5mbGF0cGlja3ItaW5uZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5mbGF0cGlja3ItckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3V0bGluZTogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWU6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLm51bUlucHV0V3JhcHBlciB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgLXdlYmtpdC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXA6YWZ0ZXIge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzM5MzkzOTtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd246YWZ0ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzM5MzkzOTtcXG59XFxuLmZsYXRwaWNrci10aW1lLmhhc1NlY29uZHMgLm51bUlucHV0V3JhcHBlciB7XFxuICB3aWR0aDogMjYlO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUudGltZTI0aHIgLm51bUlucHV0V3JhcHBlciB7XFxuICB3aWR0aDogNDklO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgY29sb3I6ICMzOTM5Mzk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQuZmxhdHBpY2tyLWhvdXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5mbGF0cGlja3ItdGltZSBpbnB1dC5mbGF0cGlja3ItbWludXRlLFxcbi5mbGF0cGlja3ItdGltZSBpbnB1dC5mbGF0cGlja3Itc2Vjb25kIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5mbGF0cGlja3ItdGltZSBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci10aW1lLXNlcGFyYXRvcixcXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbSB7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBmbG9hdDogbGVmdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgY29sb3I6ICMzOTM5Mzk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiAyJTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LWFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG0ge1xcbiAgb3V0bGluZTogMDtcXG4gIHdpZHRoOiAxOCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQ6aG92ZXIsXFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG06aG92ZXIsXFxuLmZsYXRwaWNrci10aW1lIGlucHV0OmZvY3VzLFxcbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLWFtLXBtOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxufVxcbi5mbGF0cGlja3ItaW5wdXRbcmVhZG9ubHldIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZwRmFkZUluRG93biB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZnBGYWRlSW5Eb3duIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubW9kYWwge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjMzcyBlYXNlLWluLW91dDtcbn1cblxuLm1vZGFsLmlzLW9wZW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLm1vZGFsLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMGYxM2FkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjMzcyBlYXNlLWluLW91dDtcbn1cblxuLmlzLW9wZW4gLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuXG4ubW9kYWwtY29udGFpbmVyIGhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi5yZXF1aXJlZC1pbmZvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb2RhbC1mb3JtIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLm1vZGFsLWZvcm0gPiA6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubW9kYWwtZm9ybSA+IDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuI3Rhc2stZm9ybSA+IC5mbGV4LXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuc3BhblthcmlhLWxhYmVsPVwiYXN0ZXJpc2tcIl0sXG5zcGFuW2FyaWEtbGFiZWw9XCJyZXF1aXJlZFwiXSB7XG4gICAgY29sb3I6IHZhcigtLXJlZCk7XG59XG5cbiN0Yi1kZXNjcmlwdGlvbiB7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG4uZmFuY3ktdGV4dGJveCB7XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mYW5jeS10ZXh0Ym94OmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG5cbi5mYW5jeS10ZXh0Ym94OmFjdGl2ZSxcbi5mYW5jeS10ZXh0Ym94OmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1ncmV5KTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxuLmZvcm0tYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uZm9ybS1idXR0b25zIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4jcHJvamVjdC1zZWxlY3QtY29udGFpbmVyLmRpc3BsYXktbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9mb3JtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTs7SUFFSSxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1vZGFsIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tb2RhbC5pcy1vcGVuIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLm1vZGFsLW92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMGYxM2FkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwJSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjMzcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmlzLW9wZW4gLm1vZGFsLWNvbnRhaW5lciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lciBoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4ucmVxdWlyZWQtaW5mbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLWZvcm0ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5tb2RhbC1mb3JtID4gOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubW9kYWwtZm9ybSA+IDpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbiN0YXNrLWZvcm0gPiAuZmxleC1yb3cge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuc3BhblthcmlhLWxhYmVsPVxcXCJhc3Rlcmlza1xcXCJdLFxcbnNwYW5bYXJpYS1sYWJlbD1cXFwicmVxdWlyZWRcXFwiXSB7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4jdGItZGVzY3JpcHRpb24ge1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5mYW5jeS10ZXh0Ym94IHtcXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZhbmN5LXRleHRib3g6aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbi5mYW5jeS10ZXh0Ym94OmFjdGl2ZSxcXG4uZmFuY3ktdGV4dGJveDpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWdyZXkpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4jcHJvamVjdC1zZWxlY3QtY29udGFpbmVyLmRpc3BsYXktbm9uZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDMwMDs0MDA7NzAwJmZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1ibGFjay1saWdodGVyOiAjM2Y1ODcwO1xuICAgIC0tYmxhY2s6ICMzNDQ5NWU7XG4gICAgLS1ibGFjay1kYXJrZXI6ICMyYzNlNTA7XG4gICAgLS13aGl0ZTogI2YyZjRmNTtcbiAgICAtLXdoaXRlLWdyZXk6ICNkY2UxZTM7XG4gICAgLS1ncmV5OiAjOTVhNWE2O1xuICAgIC0tZ3JleS1kYXJrOiAjOTVhNWE2O1xuICAgIC0tZ3JlZW46ICMyZWNjNzE7XG4gICAgLS1hY2NlbnQ6ICMyZWNjNzE7XG4gICAgLS1hY2NlbnQtZGFya2VyOiAjMjdhZTYwO1xuICAgIC0tcmVkOiAjZTc0YzNjO1xuICAgIC0tb3JhbmdlOiAjZjM5YzEyO1xuXG4gICAgLS1zaWRlYmFyLXdpZHRoOiAzMDBweDtcbiAgICAtLXNpZGViYXItb2Zmc2V0OiAwcHg7XG59XG5cbiosXG46OmFmdGVyLFxuOjpiZWZvcmUge1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxuYm9keSB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1haW4td3JhcHBlciB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXNpZGViYXItd2lkdGgpIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInNpZGViYXIgcHJvamVjdC1jb250ZW50XCI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGdyaWQtdGVtcGxhdGUtY29sdW1ucyAwLjMzcywgb3BhY2l0eSAuMzNzIGVhc2UtaW4tb3V0O1xufVxuXG5kaXZbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1haW4td3JhcHBlci5leHBhbmRlZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwcHggMWZyO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjay1kYXJrZXIpO1xufVxuXG5zcGFuIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cblxuaHIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogMXB4O1xufVxuXG4uZGlzcGxheS1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGlkZGVuIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4uc2lkZWJhciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWRhcmtlcik7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDFyZW0gMXJlbSAwO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzNzO1xufVxuXG4uc2lkZWJhci5jb2xsYXBzZWQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKHZhcigtLXNpZGViYXItd2lkdGgpICogLTEpKTtcbn1cblxuLnNpZGViYXItY29sbGFwc2UtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1JTtcbiAgICBsZWZ0OiBjYWxjKDEwMCUgKyAxLjI1cmVtKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stZGFya2VyKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMCA5OTlweCA5OTlweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xufVxuXG4uc2lkZWJhci1jb2xsYXBzZS1idXR0b24gc3BhbiB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjMzcztcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG59XG5cbi5zaWRlYmFyLmNvbGxhcHNlZCAuc2lkZWJhci1jb2xsYXBzZS1idXR0b24gc3BhbiB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG59XG5cbi5zaWRlYmFyLWNvbGxhcHNlLWJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2lkZWJhciAqIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLnNpZGViYXIgaHIge1xuICAgIG1hcmdpbjogMS41cmVtIGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stbGlnaHRlcik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogMnB4O1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGdhcDogMC41cmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxvZ28tdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5sb2dvLWltYWdlIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnNpZGViYXIgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLnNpZGViYXIgLnByb2plY3QtY29udGFpbmVyIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbi5wcm9qZWN0LXNlbGVjdG9yIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAwLjVyZW0gMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWRhcmtlcik7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IgYm9yZGVyLWNvbG9yIGNvbG9yIGJvcmRlcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLnNlbGVjdG9yLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjVyZW07XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgcmlnaHQ6IC0xLjVyZW07XG4gICAgdG9wOiA1MCU7XG5cbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2VsZWN0b3ItYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1ibGFjay1saWdodGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBvdXRsaW5lIDAuMnMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnNlbGVjdG9yLWJ1dHRvbiBzcGFuIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zZWxlY3Rvci1idXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuXG4ucHJvamVjdC1zZWxlY3Rvci5zZWxlY3RlZCAuc2VsZWN0b3ItYWN0aW9ucyB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4ucHJvamVjdC1zZWxlY3Rvcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2stbGlnaHRlcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdC1zZWxlY3Rvcjpob3ZlciAuc2VsZWN0b3ItYWN0aW9ucyB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4uc2VsZWN0b3ItYnV0dG9uOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stbGlnaHRlcik7XG59XG5cbi5wcm9qZWN0LXNlbGVjdG9yLnNlbGVjdGVkIHtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQpO1xufVxuXG4jdXNlci1wcm9qZWN0cyB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG1heC1oZWlnaHQ6IDUwdmg7XG59XG5cbiNuZXctcHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrLWRhcmtlcik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgbWFyZ2luOiAxcmVtIGF1dG8gMDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuI25ldy1wcm9qZWN0OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbn1cblxuI25ldy1wcm9qZWN0OmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWRhcmtlcik7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciBoMyB7XG4gICAgbWFyZ2luOiAwIDFyZW0gMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ucHJvamVjdC1tYWluIHtcbiAgICB3aWR0aDogbWluKDEwMGNoLCAxMDAlKTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtYXJlYTogcHJvamVjdC1jb250ZW50O1xufVxuXG4ucHJvamVjdC1oZWFkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5cbi5wcm9qZWN0LWhlYWRlciBoMiB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbiNwcm9qZWN0LWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5wcm9qZWN0LWhlYWRlciBzcGFuIHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbiNoZWFkZXItbmFtZSxcbi5wcm9qZWN0LW5hbWUge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuXG4jaGVhZGVyLW5hbWUge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuI3Rhc2tzLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmJ1dHRvbi10cmFuc2l0aW9uIHtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnByb2plY3QtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcm9qZWN0LWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtYnV0dG9uIHNwYW4ge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuXG4ucHJvamVjdC1idXR0b246aG92ZXIsXG4uY29tYm8tYm94OmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdC1idXR0b246YWN0aXZlLFxuLmNvbWJvLWJveDphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWdyZXkpO1xufVxuXG4uc29ydC1jb250YWluZXIge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29tYm8tYm94IHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wbGFjZWhvbGRlci13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBsYWNlaG9sZGVyLXdyYXBwZXIgaW1nIHtcbiAgICB3aWR0aDogNzAlO1xufVxuXG4jcHJvamVjdC10YXNrczplbXB0eSB+IC5wbGFjZWhvbGRlci13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4jcHJvamVjdC10YXNrcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuI3Byb2plY3QtdGFza3M6ZW1wdHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIC8qIG92ZXJmbG93LXk6IGNsaXA7ICovXG59XG5cbi5wcm9qZWN0LXRhc2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4udGFzay1jb250ZW50IHtcbiAgICBmbGV4OiAxIDEgMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLnRhc2staGVhZGVyIHtcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmU7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjMzcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLnRhc2staGVhZGVyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgd2lkdGg6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IC00cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stZGFya2VyKTtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjMzcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCksIGJhY2tncm91bmQtY29sb3IgMC4zM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIC50YXNrLWNvbnRlbnQgPiAudGFzay1oZWFkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1ncmV5LWRhcmspO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIC50YXNrLWNvbnRlbnQgPiAudGFzay1oZWFkZXI6OmJlZm9yZSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDhweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS1kYXJrKTtcbn1cblxuLnRhc2staW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaG9yaXpvbnRhbC1zZXBhcmF0b3Ige1xuICAgIGhlaWdodDogNHB4O1xuICAgIHdpZHRoOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stbGlnaHRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG59XG5cbi50YXNrLXByaW9yaXR5IHtcbiAgICAtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1ncmV5KTtcbiAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4udGFzay1wcmlvcml0eS5oaWdoLXByaW9yaXR5IHtcbiAgICAtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1yZWQpO1xufVxuXG4ubWVkaXVtLXByaW9yaXR5IHtcbiAgICAtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xufVxuXG4ubG93LXByaW9yaXR5IHtcbiAgICAtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1ncmVlbik7XG59XG5cbi50YXNrLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbi50YXNrLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YXNrLWJ1dHRvbiBzcGFuIHtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC4xNywgMC44NCwgMC40NCwgMSk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2xhdGU6IC01MCUgLTUwJTtcbn1cblxuLnRhc2stYnV0dG9uOmhvdmVyIHNwYW4ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLnRhc2stYnV0dG9uOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1idXR0b246YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1ncmV5KTtcbn1cblxuLmFjY29yZGlvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwZnI7XG5cbiAgICB0cmFuc2l0aW9uOiBncmlkLXRlbXBsYXRlLXJvd3MgMC4yNXM7XG59XG5cbi50YXNrLWRlc2NyaXB0aW9uIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IG1hcmdpbiAwLjI1cztcbn1cblxuLmFjY29yZGlvbi12aXNpYmxlID4gLnRhc2stZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5hY2NvcmRpb24tdmlzaWJsZSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgYWxsOiB1bnNldDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgd2lkdGg6IDEuNXJlbTtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyZXkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDU1cHg7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpob3Zlcjo6YmVmb3JlIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMHJlbTtcbiAgICB3aWR0aDogMHJlbTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xuXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMzNzIGVhc2UtaW4tb3V0LCB3aWR0aCAwLjMzcyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6OmFmdGVyIHtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgd2lkdGg6IDFyZW07XG59XG5cbi5zaWdudXAtcGFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjMzcyBlYXNlLWluLW91dDtcbn1cblxuLnNpZ251cC1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW46IDAgMXJlbTtcbn1cblxuLnNpZ251cC1jb250YWluZXIgLnNpZ251cC1sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxuLnNpZ251cC1pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaWdudXAtaW5wdXQgbGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbi5zaWdudXAtc3VibWl0LWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNzVweCwgMWZyKSk7XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbi5zaWdudXAtc3VibWl0LWJ1dHRvbnMgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMzNzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4zM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5zaWdudXAtc3VibWl0LWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxuLnNpZ251cC1zdWJtaXQtYnV0dG9ucyBidXR0b246YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtZGFya2VyKTtcbn1cblxuLnNpZ251cC1jb250YWluZXIgaHIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xuICAgIG1hcmdpbjogMnJlbSAxcmVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxpQkFBaUI7O0lBRWpCLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7OztJQUdJLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsK0dBQStHO0lBQy9HLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsK0NBQStDO0lBQy9DLDhDQUE4QztJQUM5QyxrQkFBa0I7SUFDbEIsaUVBQWlFO0FBQ3JFOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTs7OztJQUlJLGtDQUFrQztJQUNsQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsMEJBQTBCO0lBQzFCLGdDQUFnQzs7SUFFaEMsZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIscUNBQXFDO0lBQ3JDLHFCQUFxQjtJQUNyQixrQkFBa0I7O0lBRWxCLCtEQUErRDtJQUMvRCx5QkFBeUI7SUFDekIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7O0lBRVgsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsUUFBUTs7SUFFUixVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7SUFDWix1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLG1CQUFtQjs7SUFFbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUVBQXVFO0FBQzNFOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhOztJQUViLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUVBQWlFO0FBQ3JFOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5Q0FBeUM7SUFDekMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw0REFBNEQ7SUFDNUQsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixxQ0FBcUM7SUFDckMseUhBQXlIO0FBQzdIOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixzQ0FBc0M7SUFDdEMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qiw0REFBNEQ7SUFDNUQsb0JBQW9COztJQUVwQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCOztJQUV2QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixpRUFBaUU7QUFDckU7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLG1CQUFtQjs7SUFFbkIsNkRBQTZEO0FBQ2pFOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLG1CQUFtQjs7SUFFbkIsOEVBQThFO0FBQ2xGOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDA7NDAwOzcwMCZmYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gICAgLS1ibGFjay1saWdodGVyOiAjM2Y1ODcwO1xcbiAgICAtLWJsYWNrOiAjMzQ0OTVlO1xcbiAgICAtLWJsYWNrLWRhcmtlcjogIzJjM2U1MDtcXG4gICAgLS13aGl0ZTogI2YyZjRmNTtcXG4gICAgLS13aGl0ZS1ncmV5OiAjZGNlMWUzO1xcbiAgICAtLWdyZXk6ICM5NWE1YTY7XFxuICAgIC0tZ3JleS1kYXJrOiAjOTVhNWE2O1xcbiAgICAtLWdyZWVuOiAjMmVjYzcxO1xcbiAgICAtLWFjY2VudDogIzJlY2M3MTtcXG4gICAgLS1hY2NlbnQtZGFya2VyOiAjMjdhZTYwO1xcbiAgICAtLXJlZDogI2U3NGMzYztcXG4gICAgLS1vcmFuZ2U6ICNmMzljMTI7XFxuXFxuICAgIC0tc2lkZWJhci13aWR0aDogMzAwcHg7XFxuICAgIC0tc2lkZWJhci1vZmZzZXQ6IDBweDtcXG59XFxuXFxuKixcXG46OmFmdGVyLFxcbjo6YmVmb3JlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIiwgXFxcIkx1Y2lkYSBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tYWluLXdyYXBwZXIge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tc2lkZWJhci13aWR0aCkgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwic2lkZWJhciBwcm9qZWN0LWNvbnRlbnRcXFwiO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zaXRpb246IGdyaWQtdGVtcGxhdGUtY29sdW1ucyAwLjMzcywgb3BhY2l0eSAuMzNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5kaXZbaGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYWluLXdyYXBwZXIuZXhwYW5kZWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDBweCAxZnI7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrLWRhcmtlcik7XFxufVxcblxcbnNwYW4ge1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuaHIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogMXB4O1xcbn1cXG5cXG4uZGlzcGxheS1ub25lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWRhcmtlcik7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMXJlbSAxcmVtIDA7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjMzcztcXG59XFxuXFxuLnNpZGViYXIuY29sbGFwc2VkIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGModmFyKC0tc2lkZWJhci13aWR0aCkgKiAtMSkpO1xcbn1cXG5cXG4uc2lkZWJhci1jb2xsYXBzZS1idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNSU7XFxuICAgIGxlZnQ6IGNhbGMoMTAwJSArIDEuMjVyZW0pO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXG4gICAgcGFkZGluZzogMC4yNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stZGFya2VyKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDk5OXB4IDk5OXB4IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXItY29sbGFwc2UtYnV0dG9uIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjMzcztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xcbn1cXG5cXG4uc2lkZWJhci5jb2xsYXBzZWQgLnNpZGViYXItY29sbGFwc2UtYnV0dG9uIHNwYW4ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXFxuLnNpZGViYXItY29sbGFwc2UtYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhciAqIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5zaWRlYmFyIGhyIHtcXG4gICAgbWFyZ2luOiAxLjVyZW0gYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stbGlnaHRlcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAycHg7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5sb2dvLXRleHQge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmxvZ28taW1hZ2Uge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uc2lkZWJhciB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zaWRlYmFyIC5wcm9qZWN0LWNvbnRhaW5lciB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1zZWxlY3RvciB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAwLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1kYXJrZXIpO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciBib3JkZXItY29sb3IgY29sb3IgYm9yZGVyO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zZWxlY3Rvci1hY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHJpZ2h0OiAtMS41cmVtO1xcbiAgICB0b3A6IDUwJTtcXG5cXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zZWxlY3Rvci1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWJsYWNrLWxpZ2h0ZXIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBvdXRsaW5lIDAuMnMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnNlbGVjdG9yLWJ1dHRvbiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNlbGVjdG9yLWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3V0bGluZS1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG59XFxuXFxuLnByb2plY3Qtc2VsZWN0b3Iuc2VsZWN0ZWQgLnNlbGVjdG9yLWFjdGlvbnMge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4ucHJvamVjdC1zZWxlY3Rvcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjay1saWdodGVyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1zZWxlY3Rvcjpob3ZlciAuc2VsZWN0b3ItYWN0aW9ucyB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5zZWxlY3Rvci1idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stbGlnaHRlcik7XFxufVxcblxcbi5wcm9qZWN0LXNlbGVjdG9yLnNlbGVjdGVkIHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQpO1xcbn1cXG5cXG4jdXNlci1wcm9qZWN0cyB7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgbWF4LWhlaWdodDogNTB2aDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrLWRhcmtlcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIG1hcmdpbjogMXJlbSBhdXRvIDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiNuZXctcHJvamVjdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG59XFxuXFxuI25ldy1wcm9qZWN0OmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1kYXJrZXIpO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIgaDMge1xcbiAgICBtYXJnaW46IDAgMXJlbSAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1tYWluIHtcXG4gICAgd2lkdGg6IG1pbigxMDBjaCwgMTAwJSk7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWFyZWE6IHByb2plY3QtY29udGVudDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIGgyIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbiNwcm9qZWN0LWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHNwYW4ge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4jaGVhZGVyLW5hbWUsXFxuLnByb2plY3QtbmFtZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbn1cXG5cXG4jaGVhZGVyLW5hbWUge1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbiN0YXNrcy1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5idXR0b24tdHJhbnNpdGlvbiB7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucHJvamVjdC1hY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uOmhvdmVyLFxcbi5jb21iby1ib3g6aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uOmFjdGl2ZSxcXG4uY29tYm8tYm94OmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWdyZXkpO1xcbn1cXG5cXG4uc29ydC1jb250YWluZXIge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbWJvLWJveCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wbGFjZWhvbGRlci13cmFwcGVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wbGFjZWhvbGRlci13cmFwcGVyIGltZyB7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcblxcbiNwcm9qZWN0LXRhc2tzOmVtcHR5IH4gLnBsYWNlaG9sZGVyLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbiNwcm9qZWN0LXRhc2tzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jcHJvamVjdC10YXNrczplbXB0eSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICAvKiBvdmVyZmxvdy15OiBjbGlwOyAqL1xcbn1cXG5cXG4ucHJvamVjdC10YXNrIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50YXNrLWNvbnRlbnQge1xcbiAgICBmbGV4OiAxIDEgMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLnRhc2staGVhZGVyOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICB3aWR0aDogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogLTRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stZGFya2VyKTtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMzNzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgLnRhc2stY29udGVudCA+IC50YXNrLWhlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmV5LWRhcmspO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyAudGFzay1jb250ZW50ID4gLnRhc2staGVhZGVyOjpiZWZvcmUge1xcbiAgICB3aWR0aDogY2FsYygxMDAlICsgOHB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS1kYXJrKTtcXG59XFxuXFxuLnRhc2staW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1zZXBhcmF0b3Ige1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgd2lkdGg6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stbGlnaHRlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbn1cXG5cXG4udGFzay1wcmlvcml0eSB7XFxuICAgIC0tcHJpb3JpdHktY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgICBwYWRkaW5nOiAycHggNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi50YXNrLXByaW9yaXR5LmhpZ2gtcHJpb3JpdHkge1xcbiAgICAtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4ubWVkaXVtLXByaW9yaXR5IHtcXG4gICAgLS1wcmlvcml0eS1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG59XFxuXFxuLmxvdy1wcmlvcml0eSB7XFxuICAgIC0tcHJpb3JpdHktY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLnRhc2stYWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udGFzay1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFzay1idXR0b24gc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDAuMTcsIDAuODQsIDAuNDQsIDEpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zbGF0ZTogLTUwJSAtNTAlO1xcbn1cXG5cXG4udGFzay1idXR0b246aG92ZXIgc3BhbiB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnRhc2stYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1ncmV5KTtcXG59XFxuXFxuLmFjY29yZGlvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDBmcjtcXG5cXG4gICAgdHJhbnNpdGlvbjogZ3JpZC10ZW1wbGF0ZS1yb3dzIDAuMjVzO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAwLjI1cztcXG59XFxuXFxuLmFjY29yZGlvbi12aXNpYmxlID4gLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uYWNjb3JkaW9uLXZpc2libGUge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIGFsbDogdW5zZXQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTVweDtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06aG92ZXI6OmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDByZW07XFxuICAgIHdpZHRoOiAwcmVtO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTVweDtcXG5cXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMzNzIGVhc2UtaW4tb3V0LCB3aWR0aCAwLjMzcyBlYXNlLWluLW91dDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjphZnRlciB7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07XFxufVxcblxcbi5zaWdudXAtcGFnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMzNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2lnbnVwLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbn1cXG5cXG4uc2lnbnVwLWNvbnRhaW5lciAuc2lnbnVwLWxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbi5zaWdudXAtaW5wdXQge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lnbnVwLWlucHV0IGxhYmVsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuLnNpZ251cC1zdWJtaXQtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTc1cHgsIDFmcikpO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnNpZ251cC1zdWJtaXQtYnV0dG9ucyBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMzNzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4zM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zaWdudXAtc3VibWl0LWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5zaWdudXAtc3VibWl0LWJ1dHRvbnMgYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1kYXJrZXIpO1xcbn1cXG5cXG4uc2lnbnVwLWNvbnRhaW5lciBociB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgICBtYXJnaW46IDJyZW0gMXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBvYmplY3QpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXNzaWduIHJlcXVpcmVzIHRoYXQgaW5wdXQgcGFyYW1ldGVyIG5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG4gIGZvciAodmFyIHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgIDtcbiAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBvYmplY3RbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL2Fzc2lnbi9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiBhc3NpZ24oe30sIG9iamVjdCk7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IGFkZERheXMgZnJvbSBcIi4uL2FkZERheXMvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNb250aHMgZnJvbSBcIi4uL2FkZE1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtEdXJhdGlvbn0gZHVyYXRpb24gLSB0aGUgb2JqZWN0IHdpdGggeWVhcnMsIG1vbnRocywgd2Vla3MsIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKlxuICogfCBLZXkgICAgICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCB5ZWFycyAgICAgICAgICB8IEFtb3VudCBvZiB5ZWFycyB0byBiZSBhZGRlZCAgICAgICAgfFxuICogfCBtb250aHMgICAgICAgICB8IEFtb3VudCBvZiBtb250aHMgdG8gYmUgYWRkZWQgICAgICAgfFxuICogfCB3ZWVrcyAgICAgICAgICB8IEFtb3VudCBvZiB3ZWVrcyB0byBiZSBhZGRlZCAgICAgICAgfFxuICogfCBkYXlzICAgICAgICAgICB8IEFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkICAgICAgICAgfFxuICogfCBob3VycyAgICAgICAgICB8IEFtb3VudCBvZiBob3VycyB0byBiZSBhZGRlZCAgICAgICAgfFxuICogfCBtaW51dGVzICAgICAgICB8IEFtb3VudCBvZiBtaW51dGVzIHRvIGJlIGFkZGVkICAgICAgfFxuICogfCBzZWNvbmRzICAgICAgICB8IEFtb3VudCBvZiBzZWNvbmRzIHRvIGJlIGFkZGVkICAgICAgfFxuICpcbiAqIEFsbCB2YWx1ZXMgZGVmYXVsdCB0byAwXG4gKlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCB0aGUgZm9sbG93aW5nIGR1cmF0aW9uIHRvIDEgU2VwdGVtYmVyIDIwMTQsIDEwOjE5OjUwXG4gKiBjb25zdCByZXN1bHQgPSBhZGQobmV3IERhdGUoMjAxNCwgOCwgMSwgMTAsIDE5LCA1MCksIHtcbiAqICAgeWVhcnM6IDIsXG4gKiAgIG1vbnRoczogOSxcbiAqICAgd2Vla3M6IDEsXG4gKiAgIGRheXM6IDcsXG4gKiAgIGhvdXJzOiA1LFxuICogICBtaW51dGVzOiA5LFxuICogICBzZWNvbmRzOiAzMCxcbiAqIH0pXG4gKiAvLz0+IFRodSBKdW4gMTUgMjAxNyAxNToyOToyMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGQoZGlydHlEYXRlLCBkdXJhdGlvbikge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgaWYgKCFkdXJhdGlvbiB8fCBfdHlwZW9mKGR1cmF0aW9uKSAhPT0gJ29iamVjdCcpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgeWVhcnMgPSBkdXJhdGlvbi55ZWFycyA/IHRvSW50ZWdlcihkdXJhdGlvbi55ZWFycykgOiAwO1xuICB2YXIgbW9udGhzID0gZHVyYXRpb24ubW9udGhzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLm1vbnRocykgOiAwO1xuICB2YXIgd2Vla3MgPSBkdXJhdGlvbi53ZWVrcyA/IHRvSW50ZWdlcihkdXJhdGlvbi53ZWVrcykgOiAwO1xuICB2YXIgZGF5cyA9IGR1cmF0aW9uLmRheXMgPyB0b0ludGVnZXIoZHVyYXRpb24uZGF5cykgOiAwO1xuICB2YXIgaG91cnMgPSBkdXJhdGlvbi5ob3VycyA/IHRvSW50ZWdlcihkdXJhdGlvbi5ob3VycykgOiAwO1xuICB2YXIgbWludXRlcyA9IGR1cmF0aW9uLm1pbnV0ZXMgPyB0b0ludGVnZXIoZHVyYXRpb24ubWludXRlcykgOiAwO1xuICB2YXIgc2Vjb25kcyA9IGR1cmF0aW9uLnNlY29uZHMgPyB0b0ludGVnZXIoZHVyYXRpb24uc2Vjb25kcykgOiAwO1xuXG4gIC8vIEFkZCB5ZWFycyBhbmQgbW9udGhzXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlV2l0aE1vbnRocyA9IG1vbnRocyB8fCB5ZWFycyA/IGFkZE1vbnRocyhkYXRlLCBtb250aHMgKyB5ZWFycyAqIDEyKSA6IGRhdGU7XG5cbiAgLy8gQWRkIHdlZWtzIGFuZCBkYXlzXG4gIHZhciBkYXRlV2l0aERheXMgPSBkYXlzIHx8IHdlZWtzID8gYWRkRGF5cyhkYXRlV2l0aE1vbnRocywgZGF5cyArIHdlZWtzICogNykgOiBkYXRlV2l0aE1vbnRocztcblxuICAvLyBBZGQgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHNcbiAgdmFyIG1pbnV0ZXNUb0FkZCA9IG1pbnV0ZXMgKyBob3VycyAqIDYwO1xuICB2YXIgc2Vjb25kc1RvQWRkID0gc2Vjb25kcyArIG1pbnV0ZXNUb0FkZCAqIDYwO1xuICB2YXIgbXNUb0FkZCA9IHNlY29uZHNUb0FkZCAqIDEwMDA7XG4gIHZhciBmaW5hbERhdGUgPSBuZXcgRGF0ZShkYXRlV2l0aERheXMuZ2V0VGltZSgpICsgbXNUb0FkZCk7XG4gIHJldHVybiBmaW5hbERhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1vbnRocyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtb250aHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDUgbW9udGhzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNb250aHMobmV3IERhdGUoMjAxNCwgOCwgMSksIDUpXG4gKiAvLz0+IFN1biBGZWIgMDEgMjAxNSAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNb250aHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIG1vbnRocywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuICB2YXIgZGF5T2ZNb250aCA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gIC8vIFRoZSBKUyBEYXRlIG9iamVjdCBzdXBwb3J0cyBkYXRlIG1hdGggYnkgYWNjZXB0aW5nIG91dC1vZi1ib3VuZHMgdmFsdWVzIGZvclxuICAvLyBtb250aCwgZGF5LCBldGMuIEZvciBleGFtcGxlLCBuZXcgRGF0ZSgyMDIwLCAwLCAwKSByZXR1cm5zIDMxIERlYyAyMDE5IGFuZFxuICAvLyBuZXcgRGF0ZSgyMDIwLCAxMywgMSkgcmV0dXJucyAxIEZlYiAyMDIxLiAgVGhpcyBpcyAqYWxtb3N0KiB0aGUgYmVoYXZpb3Igd2VcbiAgLy8gd2FudCBleGNlcHQgdGhhdCBkYXRlcyB3aWxsIHdyYXAgYXJvdW5kIHRoZSBlbmQgb2YgYSBtb250aCwgbWVhbmluZyB0aGF0XG4gIC8vIG5ldyBEYXRlKDIwMjAsIDEzLCAzMSkgd2lsbCByZXR1cm4gMyBNYXIgMjAyMSBub3QgMjggRmViIDIwMjEgYXMgZGVzaXJlZC4gU29cbiAgLy8gd2UnbGwgZGVmYXVsdCB0byB0aGUgZW5kIG9mIHRoZSBkZXNpcmVkIG1vbnRoIGJ5IGFkZGluZyAxIHRvIHRoZSBkZXNpcmVkXG4gIC8vIG1vbnRoIGFuZCB1c2luZyBhIGRhdGUgb2YgMCB0byBiYWNrIHVwIG9uZSBkYXkgdG8gdGhlIGVuZCBvZiB0aGUgZGVzaXJlZFxuICAvLyBtb250aC5cbiAgdmFyIGVuZE9mRGVzaXJlZE1vbnRoID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpO1xuICBlbmRPZkRlc2lyZWRNb250aC5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyBhbW91bnQgKyAxLCAwKTtcbiAgdmFyIGRheXNJbk1vbnRoID0gZW5kT2ZEZXNpcmVkTW9udGguZ2V0RGF0ZSgpO1xuICBpZiAoZGF5T2ZNb250aCA+PSBkYXlzSW5Nb250aCkge1xuICAgIC8vIElmIHdlJ3JlIGFscmVhZHkgYXQgdGhlIGVuZCBvZiB0aGUgbW9udGgsIHRoZW4gdGhpcyBpcyB0aGUgY29ycmVjdCBkYXRlXG4gICAgLy8gYW5kIHdlJ3JlIGRvbmUuXG4gICAgcmV0dXJuIGVuZE9mRGVzaXJlZE1vbnRoO1xuICB9IGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSwgd2Ugbm93IGtub3cgdGhhdCBzZXR0aW5nIHRoZSBvcmlnaW5hbCBkYXktb2YtbW9udGggdmFsdWUgd29uJ3RcbiAgICAvLyBjYXVzZSBhbiBvdmVyZmxvdywgc28gc2V0IHRoZSBkZXNpcmVkIGRheS1vZi1tb250aC4gTm90ZSB0aGF0IHdlIGNhbid0XG4gICAgLy8ganVzdCBzZXQgdGhlIGRhdGUgb2YgYGVuZE9mRGVzaXJlZE1vbnRoYCBiZWNhdXNlIHRoYXQgb2JqZWN0IG1heSBoYXZlIGhhZFxuICAgIC8vIGl0cyB0aW1lIGNoYW5nZWQgaW4gdGhlIHVudXN1YWwgY2FzZSB3aGVyZSB3aGVyZSBhIERTVCB0cmFuc2l0aW9uIHdhcyBvblxuICAgIC8vIHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGggYW5kIGl0cyBsb2NhbCB0aW1lIHdhcyBpbiB0aGUgaG91ciBza2lwcGVkIG9yXG4gICAgLy8gcmVwZWF0ZWQgbmV4dCB0byBhIERTVCB0cmFuc2l0aW9uLiAgU28gd2UgdXNlIGBkYXRlYCBpbnN0ZWFkIHdoaWNoIGlzXG4gICAgLy8gZ3VhcmFudGVlZCB0byBzdGlsbCBoYXZlIHRoZSBvcmlnaW5hbCB0aW1lLlxuICAgIGRhdGUuc2V0RnVsbFllYXIoZW5kT2ZEZXNpcmVkTW9udGguZ2V0RnVsbFllYXIoKSwgZW5kT2ZEZXNpcmVkTW9udGguZ2V0TW9udGgoKSwgZGF5T2ZNb250aCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gICAgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgY2xvbmVPYmplY3QgZnJvbSBcIi4uL19saWIvY2xvbmVPYmplY3QvaW5kZXguanNcIjtcbmltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL19saWIvYXNzaWduL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUgPSAxMDAwICogNjA7XG52YXIgTUlOVVRFU19JTl9EQVkgPSA2MCAqIDI0O1xudmFyIE1JTlVURVNfSU5fTU9OVEggPSBNSU5VVEVTX0lOX0RBWSAqIDMwO1xudmFyIE1JTlVURVNfSU5fWUVBUiA9IE1JTlVURVNfSU5fREFZICogMzY1O1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlU3RyaWN0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLCB1c2luZyBzdHJpY3QgdW5pdHMuXG4gKiBUaGlzIGlzIGxpa2UgYGZvcm1hdERpc3RhbmNlYCwgYnV0IGRvZXMgbm90IHVzZSBoZWxwZXJzIGxpa2UgJ2FsbW9zdCcsICdvdmVyJyxcbiAqICdsZXNzIHRoYW4nIGFuZCB0aGUgbGlrZS5cbiAqXG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIC4uLiA1OSBzZWNzICAgICAgICAgIHwgWzAuLjU5XSBzZWNvbmRzICAgICB8XG4gKiB8IDEgLi4uIDU5IG1pbnMgICAgICAgICAgfCBbMS4uNTldIG1pbnV0ZXMgICAgIHxcbiAqIHwgMSAuLi4gMjMgaHJzICAgICAgICAgICB8IFsxLi4yM10gaG91cnMgICAgICAgfFxuICogfCAxIC4uLiAyOSBkYXlzICAgICAgICAgIHwgWzEuLjI5XSBkYXlzICAgICAgICB8XG4gKiB8IDEgLi4uIDExIG1vbnRocyAgICAgICAgfCBbMS4uMTFdIG1vbnRocyAgICAgIHxcbiAqIHwgMSAuLi4gTiB5ZWFycyAgICAgICAgICB8IFsxLi5OXSAgeWVhcnMgICAgICAgfFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYmFzZURhdGUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IGluZGljYXRlcyBpZiB0aGUgc2Vjb25kIGRhdGUgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBmaXJzdFxuICogQHBhcmFtIHsnc2Vjb25kJ3wnbWludXRlJ3wnaG91cid8J2RheSd8J21vbnRoJ3wneWVhcid9IFtvcHRpb25zLnVuaXRdIC0gaWYgc3BlY2lmaWVkLCB3aWxsIGZvcmNlIGEgdW5pdFxuICogQHBhcmFtIHsnZmxvb3InfCdjZWlsJ3wncm91bmQnfSBbb3B0aW9ucy5yb3VuZGluZ01ldGhvZD0ncm91bmQnXSAtIHdoaWNoIHdheSB0byByb3VuZCBwYXJ0aWFsIHVuaXRzXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3Jkc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGJhc2VEYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLnJvdW5kaW5nTWV0aG9kYCBtdXN0IGJlICdmbG9vcicsICdjZWlsJyBvciAncm91bmQnXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy51bml0YCBtdXN0IGJlICdzZWNvbmQnLCAnbWludXRlJywgJ2hvdXInLCAnZGF5JywgJ21vbnRoJyBvciAneWVhcidcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXREaXN0YW5jZWAgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIEp1bHkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTU/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVN0cmljdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgbmV3IERhdGUoMjAxNSwgMCwgMikpXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEphbnVhcnkgMjAxNSAwMDowMDoxNVxuICogLy8gYW5kIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VTdHJpY3QoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KSxcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMClcbiAqIClcbiAqIC8vPT4gJzE1IHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gMSBKYW51YXJ5IDIwMTZcbiAqIC8vIHRvIDEgSmFudWFyeSAyMDE1LCB3aXRoIGEgc3VmZml4P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VTdHJpY3QobmV3IERhdGUoMjAxNSwgMCwgMSksIG5ldyBEYXRlKDIwMTYsIDAsIDEpLCB7XG4gKiAgIGFkZFN1ZmZpeDogdHJ1ZVxuICogfSlcbiAqIC8vPT4gJzEgeWVhciBhZ28nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gMSBKYW51YXJ5IDIwMTZcbiAqIC8vIHRvIDEgSmFudWFyeSAyMDE1LCBpbiBtaW51dGVzP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VTdHJpY3QobmV3IERhdGUoMjAxNiwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIHVuaXQ6ICdtaW51dGUnXG4gKiB9KVxuICogLy89PiAnNTI1NjAwIG1pbnV0ZXMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gMSBKYW51YXJ5IDIwMTVcbiAqIC8vIHRvIDI4IEphbnVhcnkgMjAxNSwgaW4gbW9udGhzLCByb3VuZGVkIHVwP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VTdHJpY3QobmV3IERhdGUoMjAxNSwgMCwgMjgpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSwge1xuICogICB1bml0OiAnbW9udGgnLFxuICogICByb3VuZGluZ01ldGhvZDogJ2NlaWwnXG4gKiB9KVxuICogLy89PiAnMSBtb250aCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEF1Z3VzdCAyMDE2IGFuZCAxIEphbnVhcnkgMjAxNSBpbiBFc3BlcmFudG8/XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlU3RyaWN0KG5ldyBEYXRlKDIwMTYsIDcsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMSBqYXJvJ1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlU3RyaWN0KGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRyb3VuZGluZ01ldGg7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICBpZiAoIWxvY2FsZS5mb3JtYXREaXN0YW5jZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplLmZvcm1hdERpc3RhbmNlIHByb3BlcnR5Jyk7XG4gIH1cbiAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlQXNjKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSk7XG4gIGlmIChpc05hTihjb21wYXJpc29uKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuICB2YXIgbG9jYWxpemVPcHRpb25zID0gYXNzaWduKGNsb25lT2JqZWN0KG9wdGlvbnMpLCB7XG4gICAgYWRkU3VmZml4OiBCb29sZWFuKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRTdWZmaXgpLFxuICAgIGNvbXBhcmlzb246IGNvbXBhcmlzb25cbiAgfSk7XG4gIHZhciBkYXRlTGVmdDtcbiAgdmFyIGRhdGVSaWdodDtcbiAgaWYgKGNvbXBhcmlzb24gPiAwKSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gIH1cbiAgdmFyIHJvdW5kaW5nTWV0aG9kID0gU3RyaW5nKChfb3B0aW9ucyRyb3VuZGluZ01ldGggPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpICE9PSBudWxsICYmIF9vcHRpb25zJHJvdW5kaW5nTWV0aCAhPT0gdm9pZCAwID8gX29wdGlvbnMkcm91bmRpbmdNZXRoIDogJ3JvdW5kJyk7XG4gIHZhciByb3VuZGluZ01ldGhvZEZuO1xuICBpZiAocm91bmRpbmdNZXRob2QgPT09ICdmbG9vcicpIHtcbiAgICByb3VuZGluZ01ldGhvZEZuID0gTWF0aC5mbG9vcjtcbiAgfSBlbHNlIGlmIChyb3VuZGluZ01ldGhvZCA9PT0gJ2NlaWwnKSB7XG4gICAgcm91bmRpbmdNZXRob2RGbiA9IE1hdGguY2VpbDtcbiAgfSBlbHNlIGlmIChyb3VuZGluZ01ldGhvZCA9PT0gJ3JvdW5kJykge1xuICAgIHJvdW5kaW5nTWV0aG9kRm4gPSBNYXRoLnJvdW5kO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwicm91bmRpbmdNZXRob2QgbXVzdCBiZSAnZmxvb3InLCAnY2VpbCcgb3IgJ3JvdW5kJ1wiKTtcbiAgfVxuICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZVJpZ2h0LmdldFRpbWUoKSAtIGRhdGVMZWZ0LmdldFRpbWUoKTtcbiAgdmFyIG1pbnV0ZXMgPSBtaWxsaXNlY29uZHMgLyBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFO1xuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVSaWdodCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0KTtcblxuICAvLyBVc2UgRFNULW5vcm1hbGl6ZWQgZGlmZmVyZW5jZSBpbiBtaW51dGVzIGZvciB5ZWFycywgbW9udGhzIGFuZCBkYXlzO1xuICAvLyB1c2UgcmVndWxhciBkaWZmZXJlbmNlIGluIG1pbnV0ZXMgZm9yIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzLlxuICB2YXIgZHN0Tm9ybWFsaXplZE1pbnV0ZXMgPSAobWlsbGlzZWNvbmRzIC0gdGltZXpvbmVPZmZzZXQpIC8gTUlMTElTRUNPTkRTX0lOX01JTlVURTtcbiAgdmFyIGRlZmF1bHRVbml0ID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnVuaXQ7XG4gIHZhciB1bml0O1xuICBpZiAoIWRlZmF1bHRVbml0KSB7XG4gICAgaWYgKG1pbnV0ZXMgPCAxKSB7XG4gICAgICB1bml0ID0gJ3NlY29uZCc7XG4gICAgfSBlbHNlIGlmIChtaW51dGVzIDwgNjApIHtcbiAgICAgIHVuaXQgPSAnbWludXRlJztcbiAgICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0RBWSkge1xuICAgICAgdW5pdCA9ICdob3VyJztcbiAgICB9IGVsc2UgaWYgKGRzdE5vcm1hbGl6ZWRNaW51dGVzIDwgTUlOVVRFU19JTl9NT05USCkge1xuICAgICAgdW5pdCA9ICdkYXknO1xuICAgIH0gZWxzZSBpZiAoZHN0Tm9ybWFsaXplZE1pbnV0ZXMgPCBNSU5VVEVTX0lOX1lFQVIpIHtcbiAgICAgIHVuaXQgPSAnbW9udGgnO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0ID0gJ3llYXInO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB1bml0ID0gU3RyaW5nKGRlZmF1bHRVbml0KTtcbiAgfVxuXG4gIC8vIDAgdXAgdG8gNjAgc2Vjb25kc1xuICBpZiAodW5pdCA9PT0gJ3NlY29uZCcpIHtcbiAgICB2YXIgc2Vjb25kcyA9IHJvdW5kaW5nTWV0aG9kRm4obWlsbGlzZWNvbmRzIC8gMTAwMCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneFNlY29uZHMnLCBzZWNvbmRzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMSB1cCB0byA2MCBtaW5zXG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ21pbnV0ZScpIHtcbiAgICB2YXIgcm91bmRlZE1pbnV0ZXMgPSByb3VuZGluZ01ldGhvZEZuKG1pbnV0ZXMpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgcm91bmRlZE1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAxIHVwIHRvIDI0IGhvdXJzXG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2hvdXInKSB7XG4gICAgdmFyIGhvdXJzID0gcm91bmRpbmdNZXRob2RGbihtaW51dGVzIC8gNjApO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hIb3VycycsIGhvdXJzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMSB1cCB0byAzMCBkYXlzXG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2RheScpIHtcbiAgICB2YXIgZGF5cyA9IHJvdW5kaW5nTWV0aG9kRm4oZHN0Tm9ybWFsaXplZE1pbnV0ZXMgLyBNSU5VVEVTX0lOX0RBWSk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCBkYXlzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMSB1cCB0byAxMiBtb250aHNcbiAgfSBlbHNlIGlmICh1bml0ID09PSAnbW9udGgnKSB7XG4gICAgdmFyIG1vbnRocyA9IHJvdW5kaW5nTWV0aG9kRm4oZHN0Tm9ybWFsaXplZE1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbW9udGhzID09PSAxMiAmJiBkZWZhdWx0VW5pdCAhPT0gJ21vbnRoJyA/IGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneFllYXJzJywgMSwgbG9jYWxpemVPcHRpb25zKSA6IGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1vbnRocycsIG1vbnRocywgbG9jYWxpemVPcHRpb25zKTtcblxuICAgIC8vIDEgeWVhciB1cCB0byBtYXggRGF0ZVxuICB9IGVsc2UgaWYgKHVuaXQgPT09ICd5ZWFyJykge1xuICAgIHZhciB5ZWFycyA9IHJvdW5kaW5nTWV0aG9kRm4oZHN0Tm9ybWFsaXplZE1pbnV0ZXMgLyBNSU5VVEVTX0lOX1lFQVIpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICB9XG4gIHRocm93IG5ldyBSYW5nZUVycm9yKFwidW5pdCBtdXN0IGJlICdzZWNvbmQnLCAnbWludXRlJywgJ2hvdXInLCAnZGF5JywgJ21vbnRoJyBvciAneWVhcidcIik7XG59IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlU3RyaWN0IGZyb20gXCIuLi9mb3JtYXREaXN0YW5jZVN0cmljdC9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGUgYW5kIG5vdyBpbiB3b3Jkcy5cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLCB1c2luZyBzdHJpY3QgdW5pdHMuXG4gKiBUaGlzIGlzIGxpa2UgYGZvcm1hdERpc3RhbmNlYCwgYnV0IGRvZXMgbm90IHVzZSBoZWxwZXJzIGxpa2UgJ2FsbW9zdCcsICdvdmVyJyxcbiAqICdsZXNzIHRoYW4nIGFuZCB0aGUgbGlrZS5cbiAqXG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIC4uLiA1OSBzZWNzICAgICAgICAgIHwgWzAuLjU5XSBzZWNvbmRzICAgICB8XG4gKiB8IDEgLi4uIDU5IG1pbnMgICAgICAgICAgfCBbMS4uNTldIG1pbnV0ZXMgICAgIHxcbiAqIHwgMSAuLi4gMjMgaHJzICAgICAgICAgICB8IFsxLi4yM10gaG91cnMgICAgICAgfFxuICogfCAxIC4uLiAyOSBkYXlzICAgICAgICAgIHwgWzEuLjI5XSBkYXlzICAgICAgICB8XG4gKiB8IDEgLi4uIDExIG1vbnRocyAgICAgICAgfCBbMS4uMTFdIG1vbnRocyAgICAgIHxcbiAqIHwgMSAuLi4gTiB5ZWFycyAgICAgICAgICB8IFsxLi5OXSAgeWVhcnMgICAgICAgfFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFkZFN1ZmZpeD1mYWxzZV0gLSByZXN1bHQgaW5kaWNhdGVzIGlmIHRoZSBzZWNvbmQgZGF0ZSBpcyBlYXJsaWVyIG9yIGxhdGVyIHRoYW4gdGhlIGZpcnN0XG4gKiBAcGFyYW0geydzZWNvbmQnfCdtaW51dGUnfCdob3VyJ3wnZGF5J3wnbW9udGgnfCd5ZWFyJ30gW29wdGlvbnMudW5pdF0gLSBpZiBzcGVjaWZpZWQsIHdpbGwgZm9yY2UgYSB1bml0XG4gKiBAcGFyYW0geydmbG9vcid8J2NlaWwnfCdyb3VuZCd9IFtvcHRpb25zLnJvdW5kaW5nTWV0aG9kPSdyb3VuZCddIC0gd2hpY2ggd2F5IHRvIHJvdW5kIHBhcnRpYWwgdW5pdHNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXREaXN0YW5jZWAgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMilcbiAqIClcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiBub3cgaXMgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDAsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEphbnVhcnkgMjAxNSAwMDowMDoxNSwgaW5jbHVkaW5nIHNlY29uZHM/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSlcbiAqIClcbiAqIC8vPT4gJzE1IHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTYsIHdpdGggYSBzdWZmaXg/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KFxuICogICBuZXcgRGF0ZSgyMDE2LCAwLCAxKSxcbiAqICAge2FkZFN1ZmZpeDogdHJ1ZX1cbiAqIClcbiAqIC8vPT4gJ2luIDEgeWVhcidcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjggSmFudWFyeSAyMDE1LFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTUsIGluIG1vbnRocywgcm91bmRlZCB1cD8/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIHVuaXQ6ICdtb250aCcsXG4gKiAgIHJvdW5kaW5nTWV0aG9kOiAnY2VpbCdcbiAqIH0pXG4gKiAvLz0+ICcxIG1vbnRoJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAxIEphbnVhcnkgMjAxNSxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgSmFudWFyeSAyMDE2IGluIEVzcGVyYW50bz9cbiAqIGNvbnN0IGVvTG9jYWxlID0gcmVxdWlyZSgnZGF0ZS1mbnMvbG9jYWxlL2VvJylcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QoXG4gKiAgIG5ldyBEYXRlKDIwMTYsIDAsIDEpLFxuICogICB7bG9jYWxlOiBlb0xvY2FsZX1cbiAqIClcbiAqIC8vPT4gJzEgamFybydcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBmb3JtYXREaXN0YW5jZVN0cmljdChkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7XG4gICAgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xuICAgIHJldHVybiByO1xufTtcbmltcG9ydCB7IGRlZmF1bHRzIGFzIGRlZmF1bHRPcHRpb25zLCBIT09LUywgfSBmcm9tIFwiLi90eXBlcy9vcHRpb25zXCI7XG5pbXBvcnQgRW5nbGlzaCBmcm9tIFwiLi9sMTBuL2RlZmF1bHRcIjtcbmltcG9ydCB7IGFycmF5aWZ5LCBkZWJvdW5jZSwgaW50LCBwYWQgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgY2xlYXJOb2RlLCBjcmVhdGVFbGVtZW50LCBjcmVhdGVOdW1iZXJJbnB1dCwgZmluZFBhcmVudCwgdG9nZ2xlQ2xhc3MsIGdldEV2ZW50VGFyZ2V0LCB9IGZyb20gXCIuL3V0aWxzL2RvbVwiO1xuaW1wb3J0IHsgY29tcGFyZURhdGVzLCBjcmVhdGVEYXRlUGFyc2VyLCBjcmVhdGVEYXRlRm9ybWF0dGVyLCBkdXJhdGlvbiwgaXNCZXR3ZWVuLCBnZXREZWZhdWx0SG91cnMsIGNhbGN1bGF0ZVNlY29uZHNTaW5jZU1pZG5pZ2h0LCBwYXJzZVNlY29uZHMsIH0gZnJvbSBcIi4vdXRpbHMvZGF0ZXNcIjtcbmltcG9ydCB7IHRva2VuUmVnZXgsIG1vbnRoVG9TdHIgfSBmcm9tIFwiLi91dGlscy9mb3JtYXR0aW5nXCI7XG5pbXBvcnQgXCIuL3V0aWxzL3BvbHlmaWxsc1wiO1xudmFyIERFQk9VTkNFRF9DSEFOR0VfTVMgPSAzMDA7XG5mdW5jdGlvbiBGbGF0cGlja3JJbnN0YW5jZShlbGVtZW50LCBpbnN0YW5jZUNvbmZpZykge1xuICAgIHZhciBzZWxmID0ge1xuICAgICAgICBjb25maWc6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucyksIGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnKSxcbiAgICAgICAgbDEwbjogRW5nbGlzaCxcbiAgICB9O1xuICAgIHNlbGYucGFyc2VEYXRlID0gY3JlYXRlRGF0ZVBhcnNlcih7IGNvbmZpZzogc2VsZi5jb25maWcsIGwxMG46IHNlbGYubDEwbiB9KTtcbiAgICBzZWxmLl9oYW5kbGVycyA9IFtdO1xuICAgIHNlbGYucGx1Z2luRWxlbWVudHMgPSBbXTtcbiAgICBzZWxmLmxvYWRlZFBsdWdpbnMgPSBbXTtcbiAgICBzZWxmLl9iaW5kID0gYmluZDtcbiAgICBzZWxmLl9zZXRIb3Vyc0Zyb21EYXRlID0gc2V0SG91cnNGcm9tRGF0ZTtcbiAgICBzZWxmLl9wb3NpdGlvbkNhbGVuZGFyID0gcG9zaXRpb25DYWxlbmRhcjtcbiAgICBzZWxmLmNoYW5nZU1vbnRoID0gY2hhbmdlTW9udGg7XG4gICAgc2VsZi5jaGFuZ2VZZWFyID0gY2hhbmdlWWVhcjtcbiAgICBzZWxmLmNsZWFyID0gY2xlYXI7XG4gICAgc2VsZi5jbG9zZSA9IGNsb3NlO1xuICAgIHNlbGYub25Nb3VzZU92ZXIgPSBvbk1vdXNlT3ZlcjtcbiAgICBzZWxmLl9jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudDtcbiAgICBzZWxmLmNyZWF0ZURheSA9IGNyZWF0ZURheTtcbiAgICBzZWxmLmRlc3Ryb3kgPSBkZXN0cm95O1xuICAgIHNlbGYuaXNFbmFibGVkID0gaXNFbmFibGVkO1xuICAgIHNlbGYuanVtcFRvRGF0ZSA9IGp1bXBUb0RhdGU7XG4gICAgc2VsZi51cGRhdGVWYWx1ZSA9IHVwZGF0ZVZhbHVlO1xuICAgIHNlbGYub3BlbiA9IG9wZW47XG4gICAgc2VsZi5yZWRyYXcgPSByZWRyYXc7XG4gICAgc2VsZi5zZXQgPSBzZXQ7XG4gICAgc2VsZi5zZXREYXRlID0gc2V0RGF0ZTtcbiAgICBzZWxmLnRvZ2dsZSA9IHRvZ2dsZTtcbiAgICBmdW5jdGlvbiBzZXR1cEhlbHBlckZ1bmN0aW9ucygpIHtcbiAgICAgICAgc2VsZi51dGlscyA9IHtcbiAgICAgICAgICAgIGdldERheXNJbk1vbnRoOiBmdW5jdGlvbiAobW9udGgsIHlyKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vbnRoID09PSB2b2lkIDApIHsgbW9udGggPSBzZWxmLmN1cnJlbnRNb250aDsgfVxuICAgICAgICAgICAgICAgIGlmICh5ciA9PT0gdm9pZCAwKSB7IHlyID0gc2VsZi5jdXJyZW50WWVhcjsgfVxuICAgICAgICAgICAgICAgIGlmIChtb250aCA9PT0gMSAmJiAoKHlyICUgNCA9PT0gMCAmJiB5ciAlIDEwMCAhPT0gMCkgfHwgeXIgJSA0MDAgPT09IDApKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYubDEwbi5kYXlzSW5Nb250aFttb250aF07XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBzZWxmLmVsZW1lbnQgPSBzZWxmLmlucHV0ID0gZWxlbWVudDtcbiAgICAgICAgc2VsZi5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgcGFyc2VDb25maWcoKTtcbiAgICAgICAgc2V0dXBMb2NhbGUoKTtcbiAgICAgICAgc2V0dXBJbnB1dHMoKTtcbiAgICAgICAgc2V0dXBEYXRlcygpO1xuICAgICAgICBzZXR1cEhlbHBlckZ1bmN0aW9ucygpO1xuICAgICAgICBpZiAoIXNlbGYuaXNNb2JpbGUpXG4gICAgICAgICAgICBidWlsZCgpO1xuICAgICAgICBiaW5kRXZlbnRzKCk7XG4gICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIHx8IHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSB7XG4gICAgICAgICAgICAgICAgc2V0SG91cnNGcm9tRGF0ZShzZWxmLmNvbmZpZy5ub0NhbGVuZGFyID8gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlVmFsdWUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHNldENhbGVuZGFyV2lkdGgoKTtcbiAgICAgICAgdmFyIGlzU2FmYXJpID0gL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgaWYgKCFzZWxmLmlzTW9iaWxlICYmIGlzU2FmYXJpKSB7XG4gICAgICAgICAgICBwb3NpdGlvbkNhbGVuZGFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25SZWFkeVwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Q2xvc2VzdEFjdGl2ZUVsZW1lbnQoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuICgoKF9hID0gc2VsZi5jYWxlbmRhckNvbnRhaW5lcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldFJvb3ROb2RlKCkpXG4gICAgICAgICAgICAuYWN0aXZlRWxlbWVudCB8fCBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYmluZFRvSW5zdGFuY2UoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuLmJpbmQoc2VsZik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldENhbGVuZGFyV2lkdGgoKSB7XG4gICAgICAgIHZhciBjb25maWcgPSBzZWxmLmNvbmZpZztcbiAgICAgICAgaWYgKGNvbmZpZy53ZWVrTnVtYmVycyA9PT0gZmFsc2UgJiYgY29uZmlnLnNob3dNb250aHMgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb25maWcubm9DYWxlbmRhciAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY2FsZW5kYXJDb250YWluZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF5c1dpZHRoID0gKHNlbGYuZGF5cy5vZmZzZXRXaWR0aCArIDEpICogY29uZmlnLnNob3dNb250aHM7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5zdHlsZS53aWR0aCA9IGRheXNXaWR0aCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS53aWR0aCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzV2lkdGggK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzZWxmLndlZWtXcmFwcGVyICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLndlZWtXcmFwcGVyLm9mZnNldFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInZpc2liaWxpdHlcIik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWUoZSkge1xuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdmFyIGRlZmF1bHREYXRlID0gc2VsZi5jb25maWcubWluRGF0ZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKG5ldyBEYXRlKCksIHNlbGYuY29uZmlnLm1pbkRhdGUpID49IDBcbiAgICAgICAgICAgICAgICA/IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICA6IG5ldyBEYXRlKHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0cyA9IGdldERlZmF1bHRIb3VycyhzZWxmLmNvbmZpZyk7XG4gICAgICAgICAgICBkZWZhdWx0RGF0ZS5zZXRIb3VycyhkZWZhdWx0cy5ob3VycywgZGVmYXVsdHMubWludXRlcywgZGVmYXVsdHMuc2Vjb25kcywgZGVmYXVsdERhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpO1xuICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gW2RlZmF1bHREYXRlXTtcbiAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gZGVmYXVsdERhdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUgIT09IHVuZGVmaW5lZCAmJiBlLnR5cGUgIT09IFwiYmx1clwiKSB7XG4gICAgICAgICAgICB0aW1lV3JhcHBlcihlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJldlZhbHVlID0gc2VsZi5faW5wdXQudmFsdWU7XG4gICAgICAgIHNldEhvdXJzRnJvbUlucHV0cygpO1xuICAgICAgICB1cGRhdGVWYWx1ZSgpO1xuICAgICAgICBpZiAoc2VsZi5faW5wdXQudmFsdWUgIT09IHByZXZWYWx1ZSkge1xuICAgICAgICAgICAgc2VsZi5fZGVib3VuY2VkQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYW1wbTJtaWxpdGFyeShob3VyLCBhbVBNKSB7XG4gICAgICAgIHJldHVybiAoaG91ciAlIDEyKSArIDEyICogaW50KGFtUE0gPT09IHNlbGYubDEwbi5hbVBNWzFdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWlsaXRhcnkyYW1wbShob3VyKSB7XG4gICAgICAgIHN3aXRjaCAoaG91ciAlIDI0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgIHJldHVybiAxMjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvdXIgJSAxMjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRIb3Vyc0Zyb21JbnB1dHMoKSB7XG4gICAgICAgIGlmIChzZWxmLmhvdXJFbGVtZW50ID09PSB1bmRlZmluZWQgfHwgc2VsZi5taW51dGVFbGVtZW50ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBob3VycyA9IChwYXJzZUludChzZWxmLmhvdXJFbGVtZW50LnZhbHVlLnNsaWNlKC0yKSwgMTApIHx8IDApICUgMjQsIG1pbnV0ZXMgPSAocGFyc2VJbnQoc2VsZi5taW51dGVFbGVtZW50LnZhbHVlLCAxMCkgfHwgMCkgJSA2MCwgc2Vjb25kcyA9IHNlbGYuc2Vjb25kRWxlbWVudCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IChwYXJzZUludChzZWxmLnNlY29uZEVsZW1lbnQudmFsdWUsIDEwKSB8fCAwKSAlIDYwXG4gICAgICAgICAgICA6IDA7XG4gICAgICAgIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaG91cnMgPSBhbXBtMm1pbGl0YXJ5KGhvdXJzLCBzZWxmLmFtUE0udGV4dENvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsaW1pdE1pbkhvdXJzID0gc2VsZi5jb25maWcubWluVGltZSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAoc2VsZi5jb25maWcubWluRGF0ZSAmJlxuICAgICAgICAgICAgICAgIHNlbGYubWluRGF0ZUhhc1RpbWUgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiAmJlxuICAgICAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5jb25maWcubWluRGF0ZSwgdHJ1ZSkgPT09XG4gICAgICAgICAgICAgICAgICAgIDApO1xuICAgICAgICB2YXIgbGltaXRNYXhIb3VycyA9IHNlbGYuY29uZmlnLm1heFRpbWUgIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1heERhdGUgJiZcbiAgICAgICAgICAgICAgICBzZWxmLm1heERhdGVIYXNUaW1lICYmXG4gICAgICAgICAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogJiZcbiAgICAgICAgICAgICAgICBjb21wYXJlRGF0ZXMoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmosIHNlbGYuY29uZmlnLm1heERhdGUsIHRydWUpID09PVxuICAgICAgICAgICAgICAgICAgICAwKTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heFRpbWUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgc2VsZi5jb25maWcubWluVGltZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5UaW1lID4gc2VsZi5jb25maWcubWF4VGltZSkge1xuICAgICAgICAgICAgdmFyIG1pbkJvdW5kID0gY2FsY3VsYXRlU2Vjb25kc1NpbmNlTWlkbmlnaHQoc2VsZi5jb25maWcubWluVGltZS5nZXRIb3VycygpLCBzZWxmLmNvbmZpZy5taW5UaW1lLmdldE1pbnV0ZXMoKSwgc2VsZi5jb25maWcubWluVGltZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgICAgICAgdmFyIG1heEJvdW5kID0gY2FsY3VsYXRlU2Vjb25kc1NpbmNlTWlkbmlnaHQoc2VsZi5jb25maWcubWF4VGltZS5nZXRIb3VycygpLCBzZWxmLmNvbmZpZy5tYXhUaW1lLmdldE1pbnV0ZXMoKSwgc2VsZi5jb25maWcubWF4VGltZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gY2FsY3VsYXRlU2Vjb25kc1NpbmNlTWlkbmlnaHQoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRUaW1lID4gbWF4Qm91bmQgJiYgY3VycmVudFRpbWUgPCBtaW5Cb3VuZCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBwYXJzZVNlY29uZHMobWluQm91bmQpO1xuICAgICAgICAgICAgICAgIGhvdXJzID0gcmVzdWx0WzBdO1xuICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSByZXN1bHRbMV07XG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IHJlc3VsdFsyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChsaW1pdE1heEhvdXJzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1heFRpbWUgPSBzZWxmLmNvbmZpZy5tYXhUaW1lICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5tYXhUaW1lXG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcubWF4RGF0ZTtcbiAgICAgICAgICAgICAgICBob3VycyA9IE1hdGgubWluKGhvdXJzLCBtYXhUaW1lLmdldEhvdXJzKCkpO1xuICAgICAgICAgICAgICAgIGlmIChob3VycyA9PT0gbWF4VGltZS5nZXRIb3VycygpKVxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gTWF0aC5taW4obWludXRlcywgbWF4VGltZS5nZXRNaW51dGVzKCkpO1xuICAgICAgICAgICAgICAgIGlmIChtaW51dGVzID09PSBtYXhUaW1lLmdldE1pbnV0ZXMoKSlcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kcyA9IE1hdGgubWluKHNlY29uZHMsIG1heFRpbWUuZ2V0U2Vjb25kcygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsaW1pdE1pbkhvdXJzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1pblRpbWUgPSBzZWxmLmNvbmZpZy5taW5UaW1lICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5taW5UaW1lXG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcubWluRGF0ZTtcbiAgICAgICAgICAgICAgICBob3VycyA9IE1hdGgubWF4KGhvdXJzLCBtaW5UaW1lLmdldEhvdXJzKCkpO1xuICAgICAgICAgICAgICAgIGlmIChob3VycyA9PT0gbWluVGltZS5nZXRIb3VycygpICYmIG1pbnV0ZXMgPCBtaW5UaW1lLmdldE1pbnV0ZXMoKSlcbiAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IG1pblRpbWUuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgICAgIGlmIChtaW51dGVzID09PSBtaW5UaW1lLmdldE1pbnV0ZXMoKSlcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kcyA9IE1hdGgubWF4KHNlY29uZHMsIG1pblRpbWUuZ2V0U2Vjb25kcygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRIb3Vycyhob3VycywgbWludXRlcywgc2Vjb25kcyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldEhvdXJzRnJvbURhdGUoZGF0ZU9iaikge1xuICAgICAgICB2YXIgZGF0ZSA9IGRhdGVPYmogfHwgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmo7XG4gICAgICAgIGlmIChkYXRlICYmIGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICBzZXRIb3VycyhkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0SG91cnMoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgICAgICAgaWYgKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLnNldEhvdXJzKGhvdXJzICUgMjQsIG1pbnV0ZXMsIHNlY29uZHMgfHwgMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZWxmLmhvdXJFbGVtZW50IHx8ICFzZWxmLm1pbnV0ZUVsZW1lbnQgfHwgc2VsZi5pc01vYmlsZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC52YWx1ZSA9IHBhZCghc2VsZi5jb25maWcudGltZV8yNGhyXG4gICAgICAgICAgICA/ICgoMTIgKyBob3VycykgJSAxMikgKyAxMiAqIGludChob3VycyAlIDEyID09PSAwKVxuICAgICAgICAgICAgOiBob3Vycyk7XG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC52YWx1ZSA9IHBhZChtaW51dGVzKTtcbiAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID0gc2VsZi5sMTBuLmFtUE1baW50KGhvdXJzID49IDEyKV07XG4gICAgICAgIGlmIChzZWxmLnNlY29uZEVsZW1lbnQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC52YWx1ZSA9IHBhZChzZWNvbmRzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25ZZWFySW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdmFyIGV2ZW50VGFyZ2V0ID0gZ2V0RXZlbnRUYXJnZXQoZXZlbnQpO1xuICAgICAgICB2YXIgeWVhciA9IHBhcnNlSW50KGV2ZW50VGFyZ2V0LnZhbHVlKSArIChldmVudC5kZWx0YSB8fCAwKTtcbiAgICAgICAgaWYgKHllYXIgLyAxMDAwID4gMSB8fFxuICAgICAgICAgICAgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmICEvW15cXGRdLy50ZXN0KHllYXIudG9TdHJpbmcoKSkpKSB7XG4gICAgICAgICAgICBjaGFuZ2VZZWFyKHllYXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJpbmQoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgQXJyYXkpXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQuZm9yRWFjaChmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIGJpbmQoZWxlbWVudCwgZXYsIGhhbmRsZXIsIG9wdGlvbnMpOyB9KTtcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmZvckVhY2goZnVuY3Rpb24gKGVsKSB7IHJldHVybiBiaW5kKGVsLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7IH0pO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICBzZWxmLl9oYW5kbGVycy5wdXNoKHtcbiAgICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTsgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyaWdnZXJDaGFuZ2UoKSB7XG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2hhbmdlXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xuICAgICAgICBpZiAoc2VsZi5jb25maWcud3JhcCkge1xuICAgICAgICAgICAgW1wib3BlblwiLCBcImNsb3NlXCIsIFwidG9nZ2xlXCIsIFwiY2xlYXJcIl0uZm9yRWFjaChmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzZWxmLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLVwiICsgZXZ0ICsgXCJdXCIpLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmQoZWwsIFwiY2xpY2tcIiwgc2VsZltldnRdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICBzZXR1cE1vYmlsZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZWJvdW5jZWRSZXNpemUgPSBkZWJvdW5jZShvblJlc2l6ZSwgNTApO1xuICAgICAgICBzZWxmLl9kZWJvdW5jZWRDaGFuZ2UgPSBkZWJvdW5jZSh0cmlnZ2VyQ2hhbmdlLCBERUJPVU5DRURfQ0hBTkdFX01TKTtcbiAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAmJiAhL2lQaG9uZXxpUGFkfGlQb2QvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKVxuICAgICAgICAgICAgYmluZChzZWxmLmRheXNDb250YWluZXIsIFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIilcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXIoZ2V0RXZlbnRUYXJnZXQoZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGJpbmQoc2VsZi5faW5wdXQsIFwia2V5ZG93blwiLCBvbktleURvd24pO1xuICAgICAgICBpZiAoc2VsZi5jYWxlbmRhckNvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBiaW5kKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwia2V5ZG93blwiLCBvbktleURvd24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2VsZi5jb25maWcuaW5saW5lICYmICFzZWxmLmNvbmZpZy5zdGF0aWMpXG4gICAgICAgICAgICBiaW5kKHdpbmRvdywgXCJyZXNpemVcIiwgZGVib3VuY2VkUmVzaXplKTtcbiAgICAgICAgaWYgKHdpbmRvdy5vbnRvdWNoc3RhcnQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGJpbmQod2luZG93LmRvY3VtZW50LCBcInRvdWNoc3RhcnRcIiwgZG9jdW1lbnRDbGljayk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGJpbmQod2luZG93LmRvY3VtZW50LCBcIm1vdXNlZG93blwiLCBkb2N1bWVudENsaWNrKTtcbiAgICAgICAgYmluZCh3aW5kb3cuZG9jdW1lbnQsIFwiZm9jdXNcIiwgZG9jdW1lbnRDbGljaywgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuY2xpY2tPcGVucyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYmluZChzZWxmLl9pbnB1dCwgXCJmb2N1c1wiLCBzZWxmLm9wZW4pO1xuICAgICAgICAgICAgYmluZChzZWxmLl9pbnB1dCwgXCJjbGlja1wiLCBzZWxmLm9wZW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYmluZChzZWxmLm1vbnRoTmF2LCBcImNsaWNrXCIsIG9uTW9udGhOYXZDbGljayk7XG4gICAgICAgICAgICBiaW5kKHNlbGYubW9udGhOYXYsIFtcImtleXVwXCIsIFwiaW5jcmVtZW50XCJdLCBvblllYXJJbnB1dCk7XG4gICAgICAgICAgICBiaW5kKHNlbGYuZGF5c0NvbnRhaW5lciwgXCJjbGlja1wiLCBzZWxlY3REYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi50aW1lQ29udGFpbmVyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHNlbGYubWludXRlRWxlbWVudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBzZWxUZXh0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RXZlbnRUYXJnZXQoZSkuc2VsZWN0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYmluZChzZWxmLnRpbWVDb250YWluZXIsIFtcImluY3JlbWVudFwiXSwgdXBkYXRlVGltZSk7XG4gICAgICAgICAgICBiaW5kKHNlbGYudGltZUNvbnRhaW5lciwgXCJibHVyXCIsIHVwZGF0ZVRpbWUsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGJpbmQoc2VsZi50aW1lQ29udGFpbmVyLCBcImNsaWNrXCIsIHRpbWVJbmNyZW1lbnQpO1xuICAgICAgICAgICAgYmluZChbc2VsZi5ob3VyRWxlbWVudCwgc2VsZi5taW51dGVFbGVtZW50XSwgW1wiZm9jdXNcIiwgXCJjbGlja1wiXSwgc2VsVGV4dCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5zZWNvbmRFbGVtZW50ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgYmluZChzZWxmLnNlY29uZEVsZW1lbnQsIFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5zZWNvbmRFbGVtZW50ICYmIHNlbGYuc2Vjb25kRWxlbWVudC5zZWxlY3QoKTsgfSk7XG4gICAgICAgICAgICBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBiaW5kKHNlbGYuYW1QTSwgXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVUaW1lKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5hbGxvd0lucHV0KSB7XG4gICAgICAgICAgICBiaW5kKHNlbGYuX2lucHV0LCBcImJsdXJcIiwgb25CbHVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBqdW1wVG9EYXRlKGp1bXBEYXRlLCB0cmlnZ2VyQ2hhbmdlKSB7XG4gICAgICAgIHZhciBqdW1wVG8gPSBqdW1wRGF0ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHNlbGYucGFyc2VEYXRlKGp1bXBEYXRlKVxuICAgICAgICAgICAgOiBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiB8fFxuICAgICAgICAgICAgICAgIChzZWxmLmNvbmZpZy5taW5EYXRlICYmIHNlbGYuY29uZmlnLm1pbkRhdGUgPiBzZWxmLm5vd1xuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLm1pbkRhdGVcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5tYXhEYXRlICYmIHNlbGYuY29uZmlnLm1heERhdGUgPCBzZWxmLm5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5tYXhEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHNlbGYubm93KTtcbiAgICAgICAgdmFyIG9sZFllYXIgPSBzZWxmLmN1cnJlbnRZZWFyO1xuICAgICAgICB2YXIgb2xkTW9udGggPSBzZWxmLmN1cnJlbnRNb250aDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChqdW1wVG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBqdW1wVG8uZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IGp1bXBUby5nZXRNb250aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlLm1lc3NhZ2UgPSBcIkludmFsaWQgZGF0ZSBzdXBwbGllZDogXCIgKyBqdW1wVG87XG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5lcnJvckhhbmRsZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UgJiYgc2VsZi5jdXJyZW50WWVhciAhPT0gb2xkWWVhcikge1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25ZZWFyQ2hhbmdlXCIpO1xuICAgICAgICAgICAgYnVpbGRNb250aFN3aXRjaCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlICYmXG4gICAgICAgICAgICAoc2VsZi5jdXJyZW50WWVhciAhPT0gb2xkWWVhciB8fCBzZWxmLmN1cnJlbnRNb250aCAhPT0gb2xkTW9udGgpKSB7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk1vbnRoQ2hhbmdlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYucmVkcmF3KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRpbWVJbmNyZW1lbnQoZSkge1xuICAgICAgICB2YXIgZXZlbnRUYXJnZXQgPSBnZXRFdmVudFRhcmdldChlKTtcbiAgICAgICAgaWYgKH5ldmVudFRhcmdldC5jbGFzc05hbWUuaW5kZXhPZihcImFycm93XCIpKVxuICAgICAgICAgICAgaW5jcmVtZW50TnVtSW5wdXQoZSwgZXZlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXJyb3dVcFwiKSA/IDEgOiAtMSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluY3JlbWVudE51bUlucHV0KGUsIGRlbHRhLCBpbnB1dEVsZW0pIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGUgJiYgZ2V0RXZlbnRUYXJnZXQoZSk7XG4gICAgICAgIHZhciBpbnB1dCA9IGlucHV0RWxlbSB8fFxuICAgICAgICAgICAgKHRhcmdldCAmJiB0YXJnZXQucGFyZW50Tm9kZSAmJiB0YXJnZXQucGFyZW50Tm9kZS5maXJzdENoaWxkKTtcbiAgICAgICAgdmFyIGV2ZW50ID0gY3JlYXRlRXZlbnQoXCJpbmNyZW1lbnRcIik7XG4gICAgICAgIGV2ZW50LmRlbHRhID0gZGVsdGE7XG4gICAgICAgIGlucHV0ICYmIGlucHV0LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBidWlsZCgpIHtcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItY2FsZW5kYXJcIik7XG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIudGFiSW5kZXggPSAtMTtcbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5ub0NhbGVuZGFyKSB7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChidWlsZE1vbnRoTmF2KCkpO1xuICAgICAgICAgICAgc2VsZi5pbm5lckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItaW5uZXJDb250YWluZXJcIik7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcud2Vla051bWJlcnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSBidWlsZFdlZWtzKCksIHdlZWtXcmFwcGVyID0gX2Eud2Vla1dyYXBwZXIsIHdlZWtOdW1iZXJzID0gX2Eud2Vla051bWJlcnM7XG4gICAgICAgICAgICAgICAgc2VsZi5pbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgc2VsZi53ZWVrTnVtYmVycyA9IHdlZWtOdW1iZXJzO1xuICAgICAgICAgICAgICAgIHNlbGYud2Vla1dyYXBwZXIgPSB3ZWVrV3JhcHBlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItckNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIHNlbGYuckNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFdlZWtkYXlzKCkpO1xuICAgICAgICAgICAgaWYgKCFzZWxmLmRheXNDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLWRheXNcIik7XG4gICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidWlsZERheXMoKTtcbiAgICAgICAgICAgIHNlbGYuckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLmRheXNDb250YWluZXIpO1xuICAgICAgICAgICAgc2VsZi5pbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLnJDb250YWluZXIpO1xuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2VsZi5pbm5lckNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUpIHtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGJ1aWxkVGltZSgpKTtcbiAgICAgICAgfVxuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcInJhbmdlTW9kZVwiLCBzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpO1xuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImFuaW1hdGVcIiwgc2VsZi5jb25maWcuYW5pbWF0ZSA9PT0gdHJ1ZSk7XG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwibXVsdGlNb250aFwiLCBzZWxmLmNvbmZpZy5zaG93TW9udGhzID4gMSk7XG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICB2YXIgY3VzdG9tQXBwZW5kID0gc2VsZi5jb25maWcuYXBwZW5kVG8gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgc2VsZi5jb25maWcuYXBwZW5kVG8ubm9kZVR5cGUgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmlubGluZSB8fCBzZWxmLmNvbmZpZy5zdGF0aWMpIHtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChzZWxmLmNvbmZpZy5pbmxpbmUgPyBcImlubGluZVwiIDogXCJzdGF0aWNcIik7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuaW5saW5lKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjdXN0b21BcHBlbmQgJiYgc2VsZi5lbGVtZW50LnBhcmVudE5vZGUpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBzZWxmLl9pbnB1dC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5jb25maWcuYXBwZW5kVG8gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcuYXBwZW5kVG8uYXBwZW5kQ2hpbGQoc2VsZi5jYWxlbmRhckNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuc3RhdGljKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdyYXBwZXJcIik7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuZWxlbWVudC5wYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgc2VsZi5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNlbGYuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQpXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi5hbHRJbnB1dCk7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnN0YXRpYyAmJiAhc2VsZi5jb25maWcuaW5saW5lKVxuICAgICAgICAgICAgKHNlbGYuY29uZmlnLmFwcGVuZFRvICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLmFwcGVuZFRvXG4gICAgICAgICAgICAgICAgOiB3aW5kb3cuZG9jdW1lbnQuYm9keSkuYXBwZW5kQ2hpbGQoc2VsZi5jYWxlbmRhckNvbnRhaW5lcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZURheShjbGFzc05hbWUsIGRhdGUsIF9kYXlOdW1iZXIsIGkpIHtcbiAgICAgICAgdmFyIGRhdGVJc0VuYWJsZWQgPSBpc0VuYWJsZWQoZGF0ZSwgdHJ1ZSksIGRheUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBjbGFzc05hbWUsIGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpO1xuICAgICAgICBkYXlFbGVtZW50LmRhdGVPYmogPSBkYXRlO1xuICAgICAgICBkYXlFbGVtZW50LiRpID0gaTtcbiAgICAgICAgZGF5RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIHNlbGYuZm9ybWF0RGF0ZShkYXRlLCBzZWxmLmNvbmZpZy5hcmlhRGF0ZUZvcm1hdCkpO1xuICAgICAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoXCJoaWRkZW5cIikgPT09IC0xICYmXG4gICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5ub3cpID09PSAwKSB7XG4gICAgICAgICAgICBzZWxmLnRvZGF5RGF0ZUVsZW0gPSBkYXlFbGVtZW50O1xuICAgICAgICAgICAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9kYXlcIik7XG4gICAgICAgICAgICBkYXlFbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcImRhdGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGVJc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIGRheUVsZW1lbnQudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIGlmIChpc0RhdGVTZWxlY3RlZChkYXRlKSkge1xuICAgICAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlRWxlbSA9IGRheUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIikge1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhkYXlFbGVtZW50LCBcInN0YXJ0UmFuZ2VcIiwgc2VsZi5zZWxlY3RlZERhdGVzWzBdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdLCB0cnVlKSA9PT0gMCk7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKGRheUVsZW1lbnQsIFwiZW5kUmFuZ2VcIiwgc2VsZi5zZWxlY3RlZERhdGVzWzFdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzFdLCB0cnVlKSA9PT0gMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGFzc05hbWUgPT09IFwibmV4dE1vbnRoRGF5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpblJhbmdlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZsYXRwaWNrci1kaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XG4gICAgICAgICAgICBpZiAoaXNEYXRlSW5SYW5nZShkYXRlKSAmJiAhaXNEYXRlU2VsZWN0ZWQoZGF0ZSkpXG4gICAgICAgICAgICAgICAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaW5SYW5nZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi53ZWVrTnVtYmVycyAmJlxuICAgICAgICAgICAgc2VsZi5jb25maWcuc2hvd01vbnRocyA9PT0gMSAmJlxuICAgICAgICAgICAgY2xhc3NOYW1lICE9PSBcInByZXZNb250aERheVwiICYmXG4gICAgICAgICAgICBpICUgNyA9PT0gNikge1xuICAgICAgICAgICAgc2VsZi53ZWVrTnVtYmVycy5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXCI8c3BhbiBjbGFzcz0nZmxhdHBpY2tyLWRheSc+XCIgKyBzZWxmLmNvbmZpZy5nZXRXZWVrKGRhdGUpICsgXCI8L3NwYW4+XCIpO1xuICAgICAgICB9XG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uRGF5Q3JlYXRlXCIsIGRheUVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gZGF5RWxlbWVudDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZm9jdXNPbkRheUVsZW0odGFyZ2V0Tm9kZSkge1xuICAgICAgICB0YXJnZXROb2RlLmZvY3VzKCk7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpXG4gICAgICAgICAgICBvbk1vdXNlT3Zlcih0YXJnZXROb2RlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Rmlyc3RBdmFpbGFibGVEYXkoZGVsdGEpIHtcbiAgICAgICAgdmFyIHN0YXJ0TW9udGggPSBkZWx0YSA+IDAgPyAwIDogc2VsZi5jb25maWcuc2hvd01vbnRocyAtIDE7XG4gICAgICAgIHZhciBlbmRNb250aCA9IGRlbHRhID4gMCA/IHNlbGYuY29uZmlnLnNob3dNb250aHMgOiAtMTtcbiAgICAgICAgZm9yICh2YXIgbSA9IHN0YXJ0TW9udGg7IG0gIT0gZW5kTW9udGg7IG0gKz0gZGVsdGEpIHtcbiAgICAgICAgICAgIHZhciBtb250aCA9IHNlbGYuZGF5c0NvbnRhaW5lci5jaGlsZHJlblttXTtcbiAgICAgICAgICAgIHZhciBzdGFydEluZGV4ID0gZGVsdGEgPiAwID8gMCA6IG1vbnRoLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB2YXIgZW5kSW5kZXggPSBkZWx0YSA+IDAgPyBtb250aC5jaGlsZHJlbi5sZW5ndGggOiAtMTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydEluZGV4OyBpICE9IGVuZEluZGV4OyBpICs9IGRlbHRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBtb250aC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBpZiAoYy5jbGFzc05hbWUuaW5kZXhPZihcImhpZGRlblwiKSA9PT0gLTEgJiYgaXNFbmFibGVkKGMuZGF0ZU9iaikpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldE5leHRBdmFpbGFibGVEYXkoY3VycmVudCwgZGVsdGEpIHtcbiAgICAgICAgdmFyIGdpdmVuTW9udGggPSBjdXJyZW50LmNsYXNzTmFtZS5pbmRleE9mKFwiTW9udGhcIikgPT09IC0xXG4gICAgICAgICAgICA/IGN1cnJlbnQuZGF0ZU9iai5nZXRNb250aCgpXG4gICAgICAgICAgICA6IHNlbGYuY3VycmVudE1vbnRoO1xuICAgICAgICB2YXIgZW5kTW9udGggPSBkZWx0YSA+IDAgPyBzZWxmLmNvbmZpZy5zaG93TW9udGhzIDogLTE7XG4gICAgICAgIHZhciBsb29wRGVsdGEgPSBkZWx0YSA+IDAgPyAxIDogLTE7XG4gICAgICAgIGZvciAodmFyIG0gPSBnaXZlbk1vbnRoIC0gc2VsZi5jdXJyZW50TW9udGg7IG0gIT0gZW5kTW9udGg7IG0gKz0gbG9vcERlbHRhKSB7XG4gICAgICAgICAgICB2YXIgbW9udGggPSBzZWxmLmRheXNDb250YWluZXIuY2hpbGRyZW5bbV07XG4gICAgICAgICAgICB2YXIgc3RhcnRJbmRleCA9IGdpdmVuTW9udGggLSBzZWxmLmN1cnJlbnRNb250aCA9PT0gbVxuICAgICAgICAgICAgICAgID8gY3VycmVudC4kaSArIGRlbHRhXG4gICAgICAgICAgICAgICAgOiBkZWx0YSA8IDBcbiAgICAgICAgICAgICAgICAgICAgPyBtb250aC5jaGlsZHJlbi5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgIHZhciBudW1Nb250aERheXMgPSBtb250aC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gc3RhcnRJbmRleDsgaSA+PSAwICYmIGkgPCBudW1Nb250aERheXMgJiYgaSAhPSAoZGVsdGEgPiAwID8gbnVtTW9udGhEYXlzIDogLTEpOyBpICs9IGxvb3BEZWx0YSkge1xuICAgICAgICAgICAgICAgIHZhciBjID0gbW9udGguY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgaWYgKGMuY2xhc3NOYW1lLmluZGV4T2YoXCJoaWRkZW5cIikgPT09IC0xICYmXG4gICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZChjLmRhdGVPYmopICYmXG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKGN1cnJlbnQuJGkgLSBpKSA+PSBNYXRoLmFicyhkZWx0YSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmb2N1c09uRGF5RWxlbShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZWxmLmNoYW5nZU1vbnRoKGxvb3BEZWx0YSk7XG4gICAgICAgIGZvY3VzT25EYXkoZ2V0Rmlyc3RBdmFpbGFibGVEYXkobG9vcERlbHRhKSwgMCk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvY3VzT25EYXkoY3VycmVudCwgb2Zmc2V0KSB7XG4gICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZ2V0Q2xvc2VzdEFjdGl2ZUVsZW1lbnQoKTtcbiAgICAgICAgdmFyIGRheUZvY3VzZWQgPSBpc0luVmlldyhhY3RpdmVFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkpO1xuICAgICAgICB2YXIgc3RhcnRFbGVtID0gY3VycmVudCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGN1cnJlbnRcbiAgICAgICAgICAgIDogZGF5Rm9jdXNlZFxuICAgICAgICAgICAgICAgID8gYWN0aXZlRWxlbWVudFxuICAgICAgICAgICAgICAgIDogc2VsZi5zZWxlY3RlZERhdGVFbGVtICE9PSB1bmRlZmluZWQgJiYgaXNJblZpZXcoc2VsZi5zZWxlY3RlZERhdGVFbGVtKVxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuc2VsZWN0ZWREYXRlRWxlbVxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYudG9kYXlEYXRlRWxlbSAhPT0gdW5kZWZpbmVkICYmIGlzSW5WaWV3KHNlbGYudG9kYXlEYXRlRWxlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi50b2RheURhdGVFbGVtXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGdldEZpcnN0QXZhaWxhYmxlRGF5KG9mZnNldCA+IDAgPyAxIDogLTEpO1xuICAgICAgICBpZiAoc3RhcnRFbGVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNlbGYuX2lucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWRheUZvY3VzZWQpIHtcbiAgICAgICAgICAgIGZvY3VzT25EYXlFbGVtKHN0YXJ0RWxlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBnZXROZXh0QXZhaWxhYmxlRGF5KHN0YXJ0RWxlbSwgb2Zmc2V0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBidWlsZE1vbnRoRGF5cyh5ZWFyLCBtb250aCkge1xuICAgICAgICB2YXIgZmlyc3RPZk1vbnRoID0gKG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKS5nZXREYXkoKSAtIHNlbGYubDEwbi5maXJzdERheU9mV2VlayArIDcpICUgNztcbiAgICAgICAgdmFyIHByZXZNb250aERheXMgPSBzZWxmLnV0aWxzLmdldERheXNJbk1vbnRoKChtb250aCAtIDEgKyAxMikgJSAxMiwgeWVhcik7XG4gICAgICAgIHZhciBkYXlzSW5Nb250aCA9IHNlbGYudXRpbHMuZ2V0RGF5c0luTW9udGgobW9udGgsIHllYXIpLCBkYXlzID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgaXNNdWx0aU1vbnRoID0gc2VsZi5jb25maWcuc2hvd01vbnRocyA+IDEsIHByZXZNb250aERheUNsYXNzID0gaXNNdWx0aU1vbnRoID8gXCJwcmV2TW9udGhEYXkgaGlkZGVuXCIgOiBcInByZXZNb250aERheVwiLCBuZXh0TW9udGhEYXlDbGFzcyA9IGlzTXVsdGlNb250aCA/IFwibmV4dE1vbnRoRGF5IGhpZGRlblwiIDogXCJuZXh0TW9udGhEYXlcIjtcbiAgICAgICAgdmFyIGRheU51bWJlciA9IHByZXZNb250aERheXMgKyAxIC0gZmlyc3RPZk1vbnRoLCBkYXlJbmRleCA9IDA7XG4gICAgICAgIGZvciAoOyBkYXlOdW1iZXIgPD0gcHJldk1vbnRoRGF5czsgZGF5TnVtYmVyKyssIGRheUluZGV4KyspIHtcbiAgICAgICAgICAgIGRheXMuYXBwZW5kQ2hpbGQoY3JlYXRlRGF5KFwiZmxhdHBpY2tyLWRheSBcIiArIHByZXZNb250aERheUNsYXNzLCBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheU51bWJlciksIGRheU51bWJlciwgZGF5SW5kZXgpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGRheU51bWJlciA9IDE7IGRheU51bWJlciA8PSBkYXlzSW5Nb250aDsgZGF5TnVtYmVyKyssIGRheUluZGV4KyspIHtcbiAgICAgICAgICAgIGRheXMuYXBwZW5kQ2hpbGQoY3JlYXRlRGF5KFwiZmxhdHBpY2tyLWRheVwiLCBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5TnVtYmVyKSwgZGF5TnVtYmVyLCBkYXlJbmRleCkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGRheU51bSA9IGRheXNJbk1vbnRoICsgMTsgZGF5TnVtIDw9IDQyIC0gZmlyc3RPZk1vbnRoICYmXG4gICAgICAgICAgICAoc2VsZi5jb25maWcuc2hvd01vbnRocyA9PT0gMSB8fCBkYXlJbmRleCAlIDcgIT09IDApOyBkYXlOdW0rKywgZGF5SW5kZXgrKykge1xuICAgICAgICAgICAgZGF5cy5hcHBlbmRDaGlsZChjcmVhdGVEYXkoXCJmbGF0cGlja3ItZGF5IFwiICsgbmV4dE1vbnRoRGF5Q2xhc3MsIG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgZGF5TnVtICUgZGF5c0luTW9udGgpLCBkYXlOdW0sIGRheUluZGV4KSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRheUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJkYXlDb250YWluZXJcIik7XG4gICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlzKTtcbiAgICAgICAgcmV0dXJuIGRheUNvbnRhaW5lcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gYnVpbGREYXlzKCkge1xuICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjbGVhck5vZGUoc2VsZi5kYXlzQ29udGFpbmVyKTtcbiAgICAgICAgaWYgKHNlbGYud2Vla051bWJlcnMpXG4gICAgICAgICAgICBjbGVhck5vZGUoc2VsZi53ZWVrTnVtYmVycyk7XG4gICAgICAgIHZhciBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuY29uZmlnLnNob3dNb250aHM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCwgMSk7XG4gICAgICAgICAgICBkLnNldE1vbnRoKHNlbGYuY3VycmVudE1vbnRoICsgaSk7XG4gICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkKGJ1aWxkTW9udGhEYXlzKGQuZ2V0RnVsbFllYXIoKSwgZC5nZXRNb250aCgpKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWcpO1xuICAgICAgICBzZWxmLmRheXMgPSBzZWxmLmRheXNDb250YWluZXIuZmlyc3RDaGlsZDtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIiAmJiBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBvbk1vdXNlT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJ1aWxkTW9udGhTd2l0Y2goKSB7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5zaG93TW9udGhzID4gMSB8fFxuICAgICAgICAgICAgc2VsZi5jb25maWcubW9udGhTZWxlY3RvclR5cGUgIT09IFwiZHJvcGRvd25cIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHNob3VsZEJ1aWxkTW9udGggPSBmdW5jdGlvbiAobW9udGgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgICAgICAgICAgICBtb250aCA8IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0TW9udGgoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhKHNlbGYuY29uZmlnLm1heERhdGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSAmJlxuICAgICAgICAgICAgICAgIG1vbnRoID4gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRNb250aCgpKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2VsZi5tb250aHNEcm9wZG93bkNvbnRhaW5lci50YWJJbmRleCA9IC0xO1xuICAgICAgICBzZWxmLm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFzaG91bGRCdWlsZE1vbnRoKGkpKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIG1vbnRoID0gY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBcImZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRoXCIpO1xuICAgICAgICAgICAgbW9udGgudmFsdWUgPSBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBpKS5nZXRNb250aCgpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBtb250aC50ZXh0Q29udGVudCA9IG1vbnRoVG9TdHIoaSwgc2VsZi5jb25maWcuc2hvcnRoYW5kQ3VycmVudE1vbnRoLCBzZWxmLmwxMG4pO1xuICAgICAgICAgICAgbW9udGgudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIGlmIChzZWxmLmN1cnJlbnRNb250aCA9PT0gaSkge1xuICAgICAgICAgICAgICAgIG1vbnRoLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYubW9udGhzRHJvcGRvd25Db250YWluZXIuYXBwZW5kQ2hpbGQobW9udGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJ1aWxkTW9udGgoKSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLW1vbnRoXCIpO1xuICAgICAgICB2YXIgbW9udGhOYXZGcmFnbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHZhciBtb250aEVsZW1lbnQ7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5zaG93TW9udGhzID4gMSB8fFxuICAgICAgICAgICAgc2VsZi5jb25maWcubW9udGhTZWxlY3RvclR5cGUgPT09IFwic3RhdGljXCIpIHtcbiAgICAgICAgICAgIG1vbnRoRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiY3VyLW1vbnRoXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5tb250aHNEcm9wZG93bkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgXCJmbGF0cGlja3ItbW9udGhEcm9wZG93bi1tb250aHNcIik7XG4gICAgICAgICAgICBzZWxmLm1vbnRoc0Ryb3Bkb3duQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgc2VsZi5sMTBuLm1vbnRoQXJpYUxhYmVsKTtcbiAgICAgICAgICAgIGJpbmQoc2VsZi5tb250aHNEcm9wZG93bkNvbnRhaW5lciwgXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZ2V0RXZlbnRUYXJnZXQoZSk7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkTW9udGggPSBwYXJzZUludCh0YXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZU1vbnRoKHNlbGVjdGVkTW9udGggLSBzZWxmLmN1cnJlbnRNb250aCk7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25Nb250aENoYW5nZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnVpbGRNb250aFN3aXRjaCgpO1xuICAgICAgICAgICAgbW9udGhFbGVtZW50ID0gc2VsZi5tb250aHNEcm9wZG93bkNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeWVhcklucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJjdXIteWVhclwiLCB7IHRhYmluZGV4OiBcIi0xXCIgfSk7XG4gICAgICAgIHZhciB5ZWFyRWxlbWVudCA9IHllYXJJbnB1dC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdO1xuICAgICAgICB5ZWFyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIHNlbGYubDEwbi55ZWFyQXJpYUxhYmVsKTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1pbkRhdGUpIHtcbiAgICAgICAgICAgIHllYXJFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1pblwiLCBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heERhdGUpIHtcbiAgICAgICAgICAgIHllYXJFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1heFwiLCBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB5ZWFyRWxlbWVudC5kaXNhYmxlZCA9XG4gICAgICAgICAgICAgICAgISFzZWxmLmNvbmZpZy5taW5EYXRlICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSA9PT0gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjdXJyZW50TW9udGggPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLWN1cnJlbnQtbW9udGhcIik7XG4gICAgICAgIGN1cnJlbnRNb250aC5hcHBlbmRDaGlsZChtb250aEVsZW1lbnQpO1xuICAgICAgICBjdXJyZW50TW9udGguYXBwZW5kQ2hpbGQoeWVhcklucHV0KTtcbiAgICAgICAgbW9udGhOYXZGcmFnbWVudC5hcHBlbmRDaGlsZChjdXJyZW50TW9udGgpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9udGhOYXZGcmFnbWVudCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgICAgIHllYXJFbGVtZW50OiB5ZWFyRWxlbWVudCxcbiAgICAgICAgICAgIG1vbnRoRWxlbWVudDogbW9udGhFbGVtZW50LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBidWlsZE1vbnRocygpIHtcbiAgICAgICAgY2xlYXJOb2RlKHNlbGYubW9udGhOYXYpO1xuICAgICAgICBzZWxmLm1vbnRoTmF2LmFwcGVuZENoaWxkKHNlbGYucHJldk1vbnRoTmF2KTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLnNob3dNb250aHMpIHtcbiAgICAgICAgICAgIHNlbGYueWVhckVsZW1lbnRzID0gW107XG4gICAgICAgICAgICBzZWxmLm1vbnRoRWxlbWVudHMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBtID0gc2VsZi5jb25maWcuc2hvd01vbnRoczsgbS0tOykge1xuICAgICAgICAgICAgdmFyIG1vbnRoID0gYnVpbGRNb250aCgpO1xuICAgICAgICAgICAgc2VsZi55ZWFyRWxlbWVudHMucHVzaChtb250aC55ZWFyRWxlbWVudCk7XG4gICAgICAgICAgICBzZWxmLm1vbnRoRWxlbWVudHMucHVzaChtb250aC5tb250aEVsZW1lbnQpO1xuICAgICAgICAgICAgc2VsZi5tb250aE5hdi5hcHBlbmRDaGlsZChtb250aC5jb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYubW9udGhOYXYuYXBwZW5kQ2hpbGQoc2VsZi5uZXh0TW9udGhOYXYpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBidWlsZE1vbnRoTmF2KCkge1xuICAgICAgICBzZWxmLm1vbnRoTmF2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1tb250aHNcIik7XG4gICAgICAgIHNlbGYueWVhckVsZW1lbnRzID0gW107XG4gICAgICAgIHNlbGYubW9udGhFbGVtZW50cyA9IFtdO1xuICAgICAgICBzZWxmLnByZXZNb250aE5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXByZXYtbW9udGhcIik7XG4gICAgICAgIHNlbGYucHJldk1vbnRoTmF2LmlubmVySFRNTCA9IHNlbGYuY29uZmlnLnByZXZBcnJvdztcbiAgICAgICAgc2VsZi5uZXh0TW9udGhOYXYgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1uZXh0LW1vbnRoXCIpO1xuICAgICAgICBzZWxmLm5leHRNb250aE5hdi5pbm5lckhUTUwgPSBzZWxmLmNvbmZpZy5uZXh0QXJyb3c7XG4gICAgICAgIGJ1aWxkTW9udGhzKCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBcIl9oaWRlUHJldk1vbnRoQXJyb3dcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLl9faGlkZVByZXZNb250aEFycm93OyB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoYm9vbCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLl9faGlkZVByZXZNb250aEFycm93ICE9PSBib29sKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYucHJldk1vbnRoTmF2LCBcImZsYXRwaWNrci1kaXNhYmxlZFwiLCBib29sKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fX2hpZGVQcmV2TW9udGhBcnJvdyA9IGJvb2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBcIl9oaWRlTmV4dE1vbnRoQXJyb3dcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLl9faGlkZU5leHRNb250aEFycm93OyB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoYm9vbCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLl9faGlkZU5leHRNb250aEFycm93ICE9PSBib29sKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYubmV4dE1vbnRoTmF2LCBcImZsYXRwaWNrci1kaXNhYmxlZFwiLCBib29sKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fX2hpZGVOZXh0TW9udGhBcnJvdyA9IGJvb2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50ID0gc2VsZi55ZWFyRWxlbWVudHNbMF07XG4gICAgICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcbiAgICAgICAgcmV0dXJuIHNlbGYubW9udGhOYXY7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJ1aWxkVGltZSgpIHtcbiAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGFzVGltZVwiKTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIpXG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJub0NhbGVuZGFyXCIpO1xuICAgICAgICB2YXIgZGVmYXVsdHMgPSBnZXREZWZhdWx0SG91cnMoc2VsZi5jb25maWcpO1xuICAgICAgICBzZWxmLnRpbWVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXRpbWVcIik7XG4gICAgICAgIHNlbGYudGltZUNvbnRhaW5lci50YWJJbmRleCA9IC0xO1xuICAgICAgICB2YXIgc2VwYXJhdG9yID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItdGltZS1zZXBhcmF0b3JcIiwgXCI6XCIpO1xuICAgICAgICB2YXIgaG91cklucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJmbGF0cGlja3ItaG91clwiLCB7XG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogc2VsZi5sMTBuLmhvdXJBcmlhTGFiZWwsXG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLmhvdXJFbGVtZW50ID0gaG91cklucHV0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF07XG4gICAgICAgIHZhciBtaW51dGVJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiZmxhdHBpY2tyLW1pbnV0ZVwiLCB7XG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogc2VsZi5sMTBuLm1pbnV0ZUFyaWFMYWJlbCxcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudCA9IG1pbnV0ZUlucHV0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF07XG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQudGFiSW5kZXggPSBzZWxmLm1pbnV0ZUVsZW1lbnQudGFiSW5kZXggPSAtMTtcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC52YWx1ZSA9IHBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9ialxuICAgICAgICAgICAgPyBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5nZXRIb3VycygpXG4gICAgICAgICAgICA6IHNlbGYuY29uZmlnLnRpbWVfMjRoclxuICAgICAgICAgICAgICAgID8gZGVmYXVsdHMuaG91cnNcbiAgICAgICAgICAgICAgICA6IG1pbGl0YXJ5MmFtcG0oZGVmYXVsdHMuaG91cnMpKTtcbiAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LnZhbHVlID0gcGFkKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqXG4gICAgICAgICAgICA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldE1pbnV0ZXMoKVxuICAgICAgICAgICAgOiBkZWZhdWx0cy5taW51dGVzKTtcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdGVwXCIsIHNlbGYuY29uZmlnLmhvdXJJbmNyZW1lbnQudG9TdHJpbmcoKSk7XG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdGVwXCIsIHNlbGYuY29uZmlnLm1pbnV0ZUluY3JlbWVudC50b1N0cmluZygpKTtcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgc2VsZi5jb25maWcudGltZV8yNGhyID8gXCIwXCIgOiBcIjFcIik7XG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWF4XCIsIHNlbGYuY29uZmlnLnRpbWVfMjRociA/IFwiMjNcIiA6IFwiMTJcIik7XG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMlwiKTtcbiAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1pblwiLCBcIjBcIik7XG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgXCI1OVwiKTtcbiAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjJcIik7XG4gICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob3VySW5wdXQpO1xuICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKTtcbiAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG1pbnV0ZUlucHV0KTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLnRpbWVfMjRocilcbiAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGltZTI0aHJcIik7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGVTZWNvbmRzKSB7XG4gICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1NlY29uZHNcIik7XG4gICAgICAgICAgICB2YXIgc2Vjb25kSW5wdXQgPSBjcmVhdGVOdW1iZXJJbnB1dChcImZsYXRwaWNrci1zZWNvbmRcIik7XG4gICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQgPSBzZWNvbmRJbnB1dC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdO1xuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnZhbHVlID0gcGFkKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqXG4gICAgICAgICAgICAgICAgPyBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5nZXRTZWNvbmRzKClcbiAgICAgICAgICAgICAgICA6IGRlZmF1bHRzLnNlY29uZHMpO1xuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnNldEF0dHJpYnV0ZShcInN0ZXBcIiwgc2VsZi5taW51dGVFbGVtZW50LmdldEF0dHJpYnV0ZShcInN0ZXBcIikpO1xuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1pblwiLCBcIjBcIik7XG4gICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiNTlcIik7XG4gICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMlwiKTtcbiAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci10aW1lLXNlcGFyYXRvclwiLCBcIjpcIikpO1xuICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZElucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnRpbWVfMjRocikge1xuICAgICAgICAgICAgc2VsZi5hbVBNID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItYW0tcG1cIiwgc2VsZi5sMTBuLmFtUE1baW50KChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9ialxuICAgICAgICAgICAgICAgID8gc2VsZi5ob3VyRWxlbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcuZGVmYXVsdEhvdXIpID4gMTEpXSk7XG4gICAgICAgICAgICBzZWxmLmFtUE0udGl0bGUgPSBzZWxmLmwxMG4udG9nZ2xlVGl0bGU7XG4gICAgICAgICAgICBzZWxmLmFtUE0udGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLmFtUE0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxmLnRpbWVDb250YWluZXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJ1aWxkV2Vla2RheXMoKSB7XG4gICAgICAgIGlmICghc2VsZi53ZWVrZGF5Q29udGFpbmVyKVxuICAgICAgICAgICAgc2VsZi53ZWVrZGF5Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci13ZWVrZGF5c1wiKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY2xlYXJOb2RlKHNlbGYud2Vla2RheUNvbnRhaW5lcik7XG4gICAgICAgIGZvciAodmFyIGkgPSBzZWxmLmNvbmZpZy5zaG93TW9udGhzOyBpLS07KSB7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci13ZWVrZGF5Y29udGFpbmVyXCIpO1xuICAgICAgICAgICAgc2VsZi53ZWVrZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlV2Vla2RheXMoKTtcbiAgICAgICAgcmV0dXJuIHNlbGYud2Vla2RheUNvbnRhaW5lcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlV2Vla2RheXMoKSB7XG4gICAgICAgIGlmICghc2VsZi53ZWVrZGF5Q29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZpcnN0RGF5T2ZXZWVrID0gc2VsZi5sMTBuLmZpcnN0RGF5T2ZXZWVrO1xuICAgICAgICB2YXIgd2Vla2RheXMgPSBfX3NwcmVhZEFycmF5cyhzZWxmLmwxMG4ud2Vla2RheXMuc2hvcnRoYW5kKTtcbiAgICAgICAgaWYgKGZpcnN0RGF5T2ZXZWVrID4gMCAmJiBmaXJzdERheU9mV2VlayA8IHdlZWtkYXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgd2Vla2RheXMgPSBfX3NwcmVhZEFycmF5cyh3ZWVrZGF5cy5zcGxpY2UoZmlyc3REYXlPZldlZWssIHdlZWtkYXlzLmxlbmd0aCksIHdlZWtkYXlzLnNwbGljZSgwLCBmaXJzdERheU9mV2VlaykpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSBzZWxmLmNvbmZpZy5zaG93TW9udGhzOyBpLS07KSB7XG4gICAgICAgICAgICBzZWxmLndlZWtkYXlDb250YWluZXIuY2hpbGRyZW5baV0uaW5uZXJIVE1MID0gXCJcXG4gICAgICA8c3BhbiBjbGFzcz0nZmxhdHBpY2tyLXdlZWtkYXknPlxcbiAgICAgICAgXCIgKyB3ZWVrZGF5cy5qb2luKFwiPC9zcGFuPjxzcGFuIGNsYXNzPSdmbGF0cGlja3Itd2Vla2RheSc+XCIpICsgXCJcXG4gICAgICA8L3NwYW4+XFxuICAgICAgXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYnVpbGRXZWVrcygpIHtcbiAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGFzV2Vla3NcIik7XG4gICAgICAgIHZhciB3ZWVrV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd2Vla3dyYXBwZXJcIik7XG4gICAgICAgIHdlZWtXcmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXdlZWtkYXlcIiwgc2VsZi5sMTBuLndlZWtBYmJyZXZpYXRpb24pKTtcbiAgICAgICAgdmFyIHdlZWtOdW1iZXJzID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci13ZWVrc1wiKTtcbiAgICAgICAgd2Vla1dyYXBwZXIuYXBwZW5kQ2hpbGQod2Vla051bWJlcnMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2Vla1dyYXBwZXI6IHdlZWtXcmFwcGVyLFxuICAgICAgICAgICAgd2Vla051bWJlcnM6IHdlZWtOdW1iZXJzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGFuZ2VNb250aCh2YWx1ZSwgaXNPZmZzZXQpIHtcbiAgICAgICAgaWYgKGlzT2Zmc2V0ID09PSB2b2lkIDApIHsgaXNPZmZzZXQgPSB0cnVlOyB9XG4gICAgICAgIHZhciBkZWx0YSA9IGlzT2Zmc2V0ID8gdmFsdWUgOiB2YWx1ZSAtIHNlbGYuY3VycmVudE1vbnRoO1xuICAgICAgICBpZiAoKGRlbHRhIDwgMCAmJiBzZWxmLl9oaWRlUHJldk1vbnRoQXJyb3cgPT09IHRydWUpIHx8XG4gICAgICAgICAgICAoZGVsdGEgPiAwICYmIHNlbGYuX2hpZGVOZXh0TW9udGhBcnJvdyA9PT0gdHJ1ZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHNlbGYuY3VycmVudE1vbnRoICs9IGRlbHRhO1xuICAgICAgICBpZiAoc2VsZi5jdXJyZW50TW9udGggPCAwIHx8IHNlbGYuY3VycmVudE1vbnRoID4gMTEpIHtcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgKz0gc2VsZi5jdXJyZW50TW9udGggPiAxMSA/IDEgOiAtMTtcbiAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gKHNlbGYuY3VycmVudE1vbnRoICsgMTIpICUgMTI7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblllYXJDaGFuZ2VcIik7XG4gICAgICAgICAgICBidWlsZE1vbnRoU3dpdGNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnVpbGREYXlzKCk7XG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uTW9udGhDaGFuZ2VcIik7XG4gICAgICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXIodHJpZ2dlckNoYW5nZUV2ZW50LCB0b0luaXRpYWwpIHtcbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudCA9PT0gdm9pZCAwKSB7IHRyaWdnZXJDaGFuZ2VFdmVudCA9IHRydWU7IH1cbiAgICAgICAgaWYgKHRvSW5pdGlhbCA9PT0gdm9pZCAwKSB7IHRvSW5pdGlhbCA9IHRydWU7IH1cbiAgICAgICAgc2VsZi5pbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGlmIChzZWxmLmFsdElucHV0ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBbXTtcbiAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh0b0luaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBzZWxmLl9pbml0aWFsRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBzZWxmLl9pbml0aWFsRGF0ZS5nZXRNb250aCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lID09PSB0cnVlKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBnZXREZWZhdWx0SG91cnMoc2VsZi5jb25maWcpLCBob3VycyA9IF9hLmhvdXJzLCBtaW51dGVzID0gX2EubWludXRlcywgc2Vjb25kcyA9IF9hLnNlY29uZHM7XG4gICAgICAgICAgICBzZXRIb3Vycyhob3VycywgbWludXRlcywgc2Vjb25kcyk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5yZWRyYXcoKTtcbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudClcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2hhbmdlXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgc2VsZi5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKCFzZWxmLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5jYWxlbmRhckNvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmLl9pbnB1dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5faW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNsb3NlXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBpZiAoc2VsZi5jb25maWcgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uRGVzdHJveVwiKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IHNlbGYuX2hhbmRsZXJzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgc2VsZi5faGFuZGxlcnNbaV0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5faGFuZGxlcnMgPSBbXTtcbiAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLm1vYmlsZUlucHV0LnBhcmVudE5vZGUpXG4gICAgICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYubW9iaWxlSW5wdXQpO1xuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyICYmIHNlbGYuY2FsZW5kYXJDb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLnN0YXRpYyAmJiBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlciA9IHNlbGYuY2FsZW5kYXJDb250YWluZXIucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmxhc3RDaGlsZCAmJiB3cmFwcGVyLnJlbW92ZUNoaWxkKHdyYXBwZXIubGFzdENoaWxkKTtcbiAgICAgICAgICAgICAgICBpZiAod3JhcHBlci5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh3cmFwcGVyLmZpcnN0Q2hpbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIuZmlyc3RDaGlsZCwgd3JhcHBlcik7XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh3cmFwcGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYuY2FsZW5kYXJDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLmFsdElucHV0KSB7XG4gICAgICAgICAgICBzZWxmLmlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgICAgIGlmIChzZWxmLmFsdElucHV0LnBhcmVudE5vZGUpXG4gICAgICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYuYWx0SW5wdXQpO1xuICAgICAgICAgICAgZGVsZXRlIHNlbGYuYWx0SW5wdXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuaW5wdXQpIHtcbiAgICAgICAgICAgIHNlbGYuaW5wdXQudHlwZSA9IHNlbGYuaW5wdXQuX3R5cGU7XG4gICAgICAgICAgICBzZWxmLmlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJmbGF0cGlja3ItaW5wdXRcIik7XG4gICAgICAgICAgICBzZWxmLmlucHV0LnJlbW92ZUF0dHJpYnV0ZShcInJlYWRvbmx5XCIpO1xuICAgICAgICB9XG4gICAgICAgIFtcbiAgICAgICAgICAgIFwiX3Nob3dUaW1lSW5wdXRcIixcbiAgICAgICAgICAgIFwibGF0ZXN0U2VsZWN0ZWREYXRlT2JqXCIsXG4gICAgICAgICAgICBcIl9oaWRlTmV4dE1vbnRoQXJyb3dcIixcbiAgICAgICAgICAgIFwiX2hpZGVQcmV2TW9udGhBcnJvd1wiLFxuICAgICAgICAgICAgXCJfX2hpZGVOZXh0TW9udGhBcnJvd1wiLFxuICAgICAgICAgICAgXCJfX2hpZGVQcmV2TW9udGhBcnJvd1wiLFxuICAgICAgICAgICAgXCJpc01vYmlsZVwiLFxuICAgICAgICAgICAgXCJpc09wZW5cIixcbiAgICAgICAgICAgIFwic2VsZWN0ZWREYXRlRWxlbVwiLFxuICAgICAgICAgICAgXCJtaW5EYXRlSGFzVGltZVwiLFxuICAgICAgICAgICAgXCJtYXhEYXRlSGFzVGltZVwiLFxuICAgICAgICAgICAgXCJkYXlzXCIsXG4gICAgICAgICAgICBcImRheXNDb250YWluZXJcIixcbiAgICAgICAgICAgIFwiX2lucHV0XCIsXG4gICAgICAgICAgICBcIl9wb3NpdGlvbkVsZW1lbnRcIixcbiAgICAgICAgICAgIFwiaW5uZXJDb250YWluZXJcIixcbiAgICAgICAgICAgIFwickNvbnRhaW5lclwiLFxuICAgICAgICAgICAgXCJtb250aE5hdlwiLFxuICAgICAgICAgICAgXCJ0b2RheURhdGVFbGVtXCIsXG4gICAgICAgICAgICBcImNhbGVuZGFyQ29udGFpbmVyXCIsXG4gICAgICAgICAgICBcIndlZWtkYXlDb250YWluZXJcIixcbiAgICAgICAgICAgIFwicHJldk1vbnRoTmF2XCIsXG4gICAgICAgICAgICBcIm5leHRNb250aE5hdlwiLFxuICAgICAgICAgICAgXCJtb250aHNEcm9wZG93bkNvbnRhaW5lclwiLFxuICAgICAgICAgICAgXCJjdXJyZW50TW9udGhFbGVtZW50XCIsXG4gICAgICAgICAgICBcImN1cnJlbnRZZWFyRWxlbWVudFwiLFxuICAgICAgICAgICAgXCJuYXZpZ2F0aW9uQ3VycmVudE1vbnRoXCIsXG4gICAgICAgICAgICBcInNlbGVjdGVkRGF0ZUVsZW1cIixcbiAgICAgICAgICAgIFwiY29uZmlnXCIsXG4gICAgICAgIF0uZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgc2VsZltrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7IH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzQ2FsZW5kYXJFbGVtKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY29udGFpbnMoZWxlbSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRvY3VtZW50Q2xpY2soZSkge1xuICAgICAgICBpZiAoc2VsZi5pc09wZW4gJiYgIXNlbGYuY29uZmlnLmlubGluZSkge1xuICAgICAgICAgICAgdmFyIGV2ZW50VGFyZ2V0XzEgPSBnZXRFdmVudFRhcmdldChlKTtcbiAgICAgICAgICAgIHZhciBpc0NhbGVuZGFyRWxlbWVudCA9IGlzQ2FsZW5kYXJFbGVtKGV2ZW50VGFyZ2V0XzEpO1xuICAgICAgICAgICAgdmFyIGlzSW5wdXQgPSBldmVudFRhcmdldF8xID09PSBzZWxmLmlucHV0IHx8XG4gICAgICAgICAgICAgICAgZXZlbnRUYXJnZXRfMSA9PT0gc2VsZi5hbHRJbnB1dCB8fFxuICAgICAgICAgICAgICAgIHNlbGYuZWxlbWVudC5jb250YWlucyhldmVudFRhcmdldF8xKSB8fFxuICAgICAgICAgICAgICAgIChlLnBhdGggJiZcbiAgICAgICAgICAgICAgICAgICAgZS5wYXRoLmluZGV4T2YgJiZcbiAgICAgICAgICAgICAgICAgICAgKH5lLnBhdGguaW5kZXhPZihzZWxmLmlucHV0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgfmUucGF0aC5pbmRleE9mKHNlbGYuYWx0SW5wdXQpKSk7XG4gICAgICAgICAgICB2YXIgbG9zdEZvY3VzID0gIWlzSW5wdXQgJiZcbiAgICAgICAgICAgICAgICAhaXNDYWxlbmRhckVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICAhaXNDYWxlbmRhckVsZW0oZS5yZWxhdGVkVGFyZ2V0KTtcbiAgICAgICAgICAgIHZhciBpc0lnbm9yZWQgPSAhc2VsZi5jb25maWcuaWdub3JlZEZvY3VzRWxlbWVudHMuc29tZShmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLmNvbnRhaW5zKGV2ZW50VGFyZ2V0XzEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobG9zdEZvY3VzICYmIGlzSWdub3JlZCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5hbGxvd0lucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0RGF0ZShzZWxmLl9pbnB1dC52YWx1ZSwgZmFsc2UsIHNlbGYuY29uZmlnLmFsdElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLmFsdEZvcm1hdFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYudGltZUNvbnRhaW5lciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubWludXRlRWxlbWVudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmlucHV0LnZhbHVlICE9PSBcIlwiICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVUaW1lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXIoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoYW5nZVllYXIobmV3WWVhcikge1xuICAgICAgICBpZiAoIW5ld1llYXIgfHxcbiAgICAgICAgICAgIChzZWxmLmNvbmZpZy5taW5EYXRlICYmIG5ld1llYXIgPCBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkpIHx8XG4gICAgICAgICAgICAoc2VsZi5jb25maWcubWF4RGF0ZSAmJiBuZXdZZWFyID4gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIG5ld1llYXJOdW0gPSBuZXdZZWFyLCBpc05ld1llYXIgPSBzZWxmLmN1cnJlbnRZZWFyICE9PSBuZXdZZWFyTnVtO1xuICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0gbmV3WWVhck51bSB8fCBzZWxmLmN1cnJlbnRZZWFyO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubWF4RGF0ZSAmJlxuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9PT0gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpKSB7XG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IE1hdGgubWluKHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TW9udGgoKSwgc2VsZi5jdXJyZW50TW9udGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGYuY29uZmlnLm1pbkRhdGUgJiZcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBNYXRoLm1heChzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1vbnRoKCksIHNlbGYuY3VycmVudE1vbnRoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOZXdZZWFyKSB7XG4gICAgICAgICAgICBzZWxmLnJlZHJhdygpO1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25ZZWFyQ2hhbmdlXCIpO1xuICAgICAgICAgICAgYnVpbGRNb250aFN3aXRjaCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZChkYXRlLCB0aW1lbGVzcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0aW1lbGVzcyA9PT0gdm9pZCAwKSB7IHRpbWVsZXNzID0gdHJ1ZTsgfVxuICAgICAgICB2YXIgZGF0ZVRvQ2hlY2sgPSBzZWxmLnBhcnNlRGF0ZShkYXRlLCB1bmRlZmluZWQsIHRpbWVsZXNzKTtcbiAgICAgICAgaWYgKChzZWxmLmNvbmZpZy5taW5EYXRlICYmXG4gICAgICAgICAgICBkYXRlVG9DaGVjayAmJlxuICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGVUb0NoZWNrLCBzZWxmLmNvbmZpZy5taW5EYXRlLCB0aW1lbGVzcyAhPT0gdW5kZWZpbmVkID8gdGltZWxlc3MgOiAhc2VsZi5taW5EYXRlSGFzVGltZSkgPCAwKSB8fFxuICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1heERhdGUgJiZcbiAgICAgICAgICAgICAgICBkYXRlVG9DaGVjayAmJlxuICAgICAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhkYXRlVG9DaGVjaywgc2VsZi5jb25maWcubWF4RGF0ZSwgdGltZWxlc3MgIT09IHVuZGVmaW5lZCA/IHRpbWVsZXNzIDogIXNlbGYubWF4RGF0ZUhhc1RpbWUpID4gMCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICghc2VsZi5jb25maWcuZW5hYmxlICYmIHNlbGYuY29uZmlnLmRpc2FibGUubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmIChkYXRlVG9DaGVjayA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgYm9vbCA9ICEhc2VsZi5jb25maWcuZW5hYmxlLCBhcnJheSA9IChfYSA9IHNlbGYuY29uZmlnLmVuYWJsZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogc2VsZi5jb25maWcuZGlzYWJsZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGQgPSB2b2lkIDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZCA9IGFycmF5W2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICBkKGRhdGVUb0NoZWNrKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcbiAgICAgICAgICAgIGVsc2UgaWYgKGQgaW5zdGFuY2VvZiBEYXRlICYmXG4gICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2sgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIGQuZ2V0VGltZSgpID09PSBkYXRlVG9DaGVjay5nZXRUaW1lKCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvb2w7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHZhciBwYXJzZWQgPSBzZWxmLnBhcnNlRGF0ZShkLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWQgJiYgcGFyc2VkLmdldFRpbWUoKSA9PT0gZGF0ZVRvQ2hlY2suZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgID8gYm9vbFxuICAgICAgICAgICAgICAgICAgICA6ICFib29sO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGQgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgICAgICBkYXRlVG9DaGVjayAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgZC5mcm9tICYmXG4gICAgICAgICAgICAgICAgZC50byAmJlxuICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrLmdldFRpbWUoKSA+PSBkLmZyb20uZ2V0VGltZSgpICYmXG4gICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2suZ2V0VGltZSgpIDw9IGQudG8uZ2V0VGltZSgpKVxuICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhYm9vbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNJblZpZXcoZWxlbSkge1xuICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gKGVsZW0uY2xhc3NOYW1lLmluZGV4T2YoXCJoaWRkZW5cIikgPT09IC0xICYmXG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc05hbWUuaW5kZXhPZihcImZsYXRwaWNrci1kaXNhYmxlZFwiKSA9PT0gLTEgJiZcbiAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIuY29udGFpbnMoZWxlbSkpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQmx1cihlKSB7XG4gICAgICAgIHZhciBpc0lucHV0ID0gZS50YXJnZXQgPT09IHNlbGYuX2lucHV0O1xuICAgICAgICB2YXIgdmFsdWVDaGFuZ2VkID0gc2VsZi5faW5wdXQudmFsdWUudHJpbUVuZCgpICE9PSBnZXREYXRlU3RyKCk7XG4gICAgICAgIGlmIChpc0lucHV0ICYmXG4gICAgICAgICAgICB2YWx1ZUNoYW5nZWQgJiZcbiAgICAgICAgICAgICEoZS5yZWxhdGVkVGFyZ2V0ICYmIGlzQ2FsZW5kYXJFbGVtKGUucmVsYXRlZFRhcmdldCkpKSB7XG4gICAgICAgICAgICBzZWxmLnNldERhdGUoc2VsZi5faW5wdXQudmFsdWUsIHRydWUsIGUudGFyZ2V0ID09PSBzZWxmLmFsdElucHV0XG4gICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5hbHRGb3JtYXRcbiAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLmRhdGVGb3JtYXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XG4gICAgICAgIHZhciBldmVudFRhcmdldCA9IGdldEV2ZW50VGFyZ2V0KGUpO1xuICAgICAgICB2YXIgaXNJbnB1dCA9IHNlbGYuY29uZmlnLndyYXBcbiAgICAgICAgICAgID8gZWxlbWVudC5jb250YWlucyhldmVudFRhcmdldClcbiAgICAgICAgICAgIDogZXZlbnRUYXJnZXQgPT09IHNlbGYuX2lucHV0O1xuICAgICAgICB2YXIgYWxsb3dJbnB1dCA9IHNlbGYuY29uZmlnLmFsbG93SW5wdXQ7XG4gICAgICAgIHZhciBhbGxvd0tleWRvd24gPSBzZWxmLmlzT3BlbiAmJiAoIWFsbG93SW5wdXQgfHwgIWlzSW5wdXQpO1xuICAgICAgICB2YXIgYWxsb3dJbmxpbmVLZXlkb3duID0gc2VsZi5jb25maWcuaW5saW5lICYmIGlzSW5wdXQgJiYgIWFsbG93SW5wdXQ7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzICYmIGlzSW5wdXQpIHtcbiAgICAgICAgICAgIGlmIChhbGxvd0lucHV0KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXREYXRlKHNlbGYuX2lucHV0LnZhbHVlLCB0cnVlLCBldmVudFRhcmdldCA9PT0gc2VsZi5hbHRJbnB1dFxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLmFsdEZvcm1hdFxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLmRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIHNlbGYuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYmx1cigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNDYWxlbmRhckVsZW0oZXZlbnRUYXJnZXQpIHx8XG4gICAgICAgICAgICBhbGxvd0tleWRvd24gfHxcbiAgICAgICAgICAgIGFsbG93SW5saW5lS2V5ZG93bikge1xuICAgICAgICAgICAgdmFyIGlzVGltZU9iaiA9ICEhc2VsZi50aW1lQ29udGFpbmVyICYmXG4gICAgICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmNvbnRhaW5zKGV2ZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVGltZU9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNBbmRDbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdERhdGUoZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNBbmRDbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgY2FzZSA0NjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5wdXQgJiYgIXNlbGYuY29uZmlnLmFsbG93SW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNUaW1lT2JqICYmICFpc0lucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGdldENsb3Nlc3RBY3RpdmVFbGVtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWxsb3dJbnB1dCA9PT0gZmFsc2UgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2ZUVsZW1lbnQgJiYgaXNJblZpZXcoYWN0aXZlRWxlbWVudCkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YV8xID0gZS5rZXlDb2RlID09PSAzOSA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWUuY3RybEtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNPbkRheSh1bmRlZmluZWQsIGRlbHRhXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb250aChkZWx0YV8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNPbkRheShnZXRGaXJzdEF2YWlsYWJsZURheSgxKSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuaG91ckVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSBlLmtleUNvZGUgPT09IDQwID8gMSA6IC0xO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHNlbGYuZGF5c0NvbnRhaW5lciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuJGkgIT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0ID09PSBzZWxmLmlucHV0IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFRhcmdldCA9PT0gc2VsZi5hbHRJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlWWVhcihzZWxmLmN1cnJlbnRZZWFyIC0gZGVsdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzT25EYXkoZ2V0Rmlyc3RBdmFpbGFibGVEYXkoMSksIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzVGltZU9iailcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uRGF5KHVuZGVmaW5lZCwgZGVsdGEgKiA3KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChldmVudFRhcmdldCA9PT0gc2VsZi5jdXJyZW50WWVhckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVllYXIoc2VsZi5jdXJyZW50WWVhciAtIGRlbHRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVGltZU9iaiAmJiBzZWxmLmhvdXJFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWUoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9kZWJvdW5jZWRDaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RpbWVPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubWludXRlRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hbVBNLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoc2VsZi5wbHVnaW5FbGVtZW50cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gZWxlbXMuaW5kZXhPZihldmVudFRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZWxlbXNbaSArIChlLnNoaWZ0S2V5ID8gLTEgOiAxKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0YXJnZXQgfHwgc2VsZi5faW5wdXQpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIXNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lciAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLmNvbnRhaW5zKGV2ZW50VGFyZ2V0KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5faW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQgJiYgZXZlbnRUYXJnZXQgPT09IHNlbGYuYW1QTSkge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2Ugc2VsZi5sMTBuLmFtUE1bMF0uY2hhckF0KDApOlxuICAgICAgICAgICAgICAgIGNhc2Ugc2VsZi5sMTBuLmFtUE1bMF0uY2hhckF0KDApLnRvTG93ZXJDYXNlKCk6XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9IHNlbGYubDEwbi5hbVBNWzBdO1xuICAgICAgICAgICAgICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBzZWxmLmwxMG4uYW1QTVsxXS5jaGFyQXQoMCk6XG4gICAgICAgICAgICAgICAgY2FzZSBzZWxmLmwxMG4uYW1QTVsxXS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKTpcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID0gc2VsZi5sMTBuLmFtUE1bMV07XG4gICAgICAgICAgICAgICAgICAgIHNldEhvdXJzRnJvbUlucHV0cygpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNJbnB1dCB8fCBpc0NhbGVuZGFyRWxlbShldmVudFRhcmdldCkpIHtcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uS2V5RG93blwiLCBlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdXNlT3ZlcihlbGVtLCBjZWxsQ2xhc3MpIHtcbiAgICAgICAgaWYgKGNlbGxDbGFzcyA9PT0gdm9pZCAwKSB7IGNlbGxDbGFzcyA9IFwiZmxhdHBpY2tyLWRheVwiOyB9XG4gICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoICE9PSAxIHx8XG4gICAgICAgICAgICAoZWxlbSAmJlxuICAgICAgICAgICAgICAgICghZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoY2VsbENsYXNzKSB8fFxuICAgICAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kaXNhYmxlZFwiKSkpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgaG92ZXJEYXRlID0gZWxlbVxuICAgICAgICAgICAgPyBlbGVtLmRhdGVPYmouZ2V0VGltZSgpXG4gICAgICAgICAgICA6IHNlbGYuZGF5cy5maXJzdEVsZW1lbnRDaGlsZC5kYXRlT2JqLmdldFRpbWUoKSwgaW5pdGlhbERhdGUgPSBzZWxmLnBhcnNlRGF0ZShzZWxmLnNlbGVjdGVkRGF0ZXNbMF0sIHVuZGVmaW5lZCwgdHJ1ZSkuZ2V0VGltZSgpLCByYW5nZVN0YXJ0RGF0ZSA9IE1hdGgubWluKGhvdmVyRGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdLmdldFRpbWUoKSksIHJhbmdlRW5kRGF0ZSA9IE1hdGgubWF4KGhvdmVyRGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdLmdldFRpbWUoKSk7XG4gICAgICAgIHZhciBjb250YWluc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBtaW5SYW5nZSA9IDAsIG1heFJhbmdlID0gMDtcbiAgICAgICAgZm9yICh2YXIgdCA9IHJhbmdlU3RhcnREYXRlOyB0IDwgcmFuZ2VFbmREYXRlOyB0ICs9IGR1cmF0aW9uLkRBWSkge1xuICAgICAgICAgICAgaWYgKCFpc0VuYWJsZWQobmV3IERhdGUodCksIHRydWUpKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbnNEaXNhYmxlZCA9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zRGlzYWJsZWQgfHwgKHQgPiByYW5nZVN0YXJ0RGF0ZSAmJiB0IDwgcmFuZ2VFbmREYXRlKTtcbiAgICAgICAgICAgICAgICBpZiAodCA8IGluaXRpYWxEYXRlICYmICghbWluUmFuZ2UgfHwgdCA+IG1pblJhbmdlKSlcbiAgICAgICAgICAgICAgICAgICAgbWluUmFuZ2UgPSB0O1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQgPiBpbml0aWFsRGF0ZSAmJiAoIW1heFJhbmdlIHx8IHQgPCBtYXhSYW5nZSkpXG4gICAgICAgICAgICAgICAgICAgIG1heFJhbmdlID0gdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgaG92ZXJhYmxlQ2VsbHMgPSBBcnJheS5mcm9tKHNlbGYuckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiKjpudGgtY2hpbGQoLW4rXCIgKyBzZWxmLmNvbmZpZy5zaG93TW9udGhzICsgXCIpID4gLlwiICsgY2VsbENsYXNzKSk7XG4gICAgICAgIGhvdmVyYWJsZUNlbGxzLmZvckVhY2goZnVuY3Rpb24gKGRheUVsZW0pIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gZGF5RWxlbS5kYXRlT2JqO1xuICAgICAgICAgICAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdmFyIG91dE9mUmFuZ2UgPSAobWluUmFuZ2UgPiAwICYmIHRpbWVzdGFtcCA8IG1pblJhbmdlKSB8fFxuICAgICAgICAgICAgICAgIChtYXhSYW5nZSA+IDAgJiYgdGltZXN0YW1wID4gbWF4UmFuZ2UpO1xuICAgICAgICAgICAgaWYgKG91dE9mUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5hZGQoXCJub3RBbGxvd2VkXCIpO1xuICAgICAgICAgICAgICAgIFtcImluUmFuZ2VcIiwgXCJzdGFydFJhbmdlXCIsIFwiZW5kUmFuZ2VcIl0uZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5yZW1vdmUoYyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29udGFpbnNEaXNhYmxlZCAmJiAhb3V0T2ZSYW5nZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBbXCJzdGFydFJhbmdlXCIsIFwiaW5SYW5nZVwiLCBcImVuZFJhbmdlXCIsIFwibm90QWxsb3dlZFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QucmVtb3ZlKGMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZWxlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGhvdmVyRGF0ZSA8PSBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0uZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgID8gXCJzdGFydFJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcImVuZFJhbmdlXCIpO1xuICAgICAgICAgICAgICAgIGlmIChpbml0aWFsRGF0ZSA8IGhvdmVyRGF0ZSAmJiB0aW1lc3RhbXAgPT09IGluaXRpYWxEYXRlKVxuICAgICAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5hZGQoXCJzdGFydFJhbmdlXCIpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGluaXRpYWxEYXRlID4gaG92ZXJEYXRlICYmIHRpbWVzdGFtcCA9PT0gaW5pdGlhbERhdGUpXG4gICAgICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LmFkZChcImVuZFJhbmdlXCIpO1xuICAgICAgICAgICAgICAgIGlmICh0aW1lc3RhbXAgPj0gbWluUmFuZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgKG1heFJhbmdlID09PSAwIHx8IHRpbWVzdGFtcCA8PSBtYXhSYW5nZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgaXNCZXR3ZWVuKHRpbWVzdGFtcCwgaW5pdGlhbERhdGUsIGhvdmVyRGF0ZSkpXG4gICAgICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LmFkZChcImluUmFuZ2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblJlc2l6ZSgpIHtcbiAgICAgICAgaWYgKHNlbGYuaXNPcGVuICYmICFzZWxmLmNvbmZpZy5zdGF0aWMgJiYgIXNlbGYuY29uZmlnLmlubGluZSlcbiAgICAgICAgICAgIHBvc2l0aW9uQ2FsZW5kYXIoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb3BlbihlLCBwb3NpdGlvbkVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHBvc2l0aW9uRWxlbWVudCA9PT0gdm9pZCAwKSB7IHBvc2l0aW9uRWxlbWVudCA9IHNlbGYuX3Bvc2l0aW9uRWxlbWVudDsgfVxuICAgICAgICBpZiAoc2VsZi5pc01vYmlsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50VGFyZ2V0ID0gZ2V0RXZlbnRUYXJnZXQoZSk7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5tb2JpbGVJbnB1dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQuY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uT3BlblwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWxmLl9pbnB1dC5kaXNhYmxlZCB8fCBzZWxmLmNvbmZpZy5pbmxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2FzT3BlbiA9IHNlbGYuaXNPcGVuO1xuICAgICAgICBzZWxmLmlzT3BlbiA9IHRydWU7XG4gICAgICAgIGlmICghd2FzT3Blbikge1xuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgICAgIHNlbGYuX2lucHV0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk9wZW5cIik7XG4gICAgICAgICAgICBwb3NpdGlvbkNhbGVuZGFyKHBvc2l0aW9uRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUgPT09IHRydWUgJiYgc2VsZi5jb25maWcubm9DYWxlbmRhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFsbG93SW5wdXQgPT09IGZhbHNlICYmXG4gICAgICAgICAgICAgICAgKGUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgICAgICAhc2VsZi50aW1lQ29udGFpbmVyLmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCkpKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmhvdXJFbGVtZW50LnNlbGVjdCgpOyB9LCA1MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbWluTWF4RGF0ZVNldHRlcih0eXBlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICAgICAgdmFyIGRhdGVPYmogPSAoc2VsZi5jb25maWdbXCJfXCIgKyB0eXBlICsgXCJEYXRlXCJdID0gc2VsZi5wYXJzZURhdGUoZGF0ZSwgc2VsZi5jb25maWcuZGF0ZUZvcm1hdCkpO1xuICAgICAgICAgICAgdmFyIGludmVyc2VEYXRlT2JqID0gc2VsZi5jb25maWdbXCJfXCIgKyAodHlwZSA9PT0gXCJtaW5cIiA/IFwibWF4XCIgOiBcIm1pblwiKSArIFwiRGF0ZVwiXTtcbiAgICAgICAgICAgIGlmIChkYXRlT2JqICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmW3R5cGUgPT09IFwibWluXCIgPyBcIm1pbkRhdGVIYXNUaW1lXCIgOiBcIm1heERhdGVIYXNUaW1lXCJdID1cbiAgICAgICAgICAgICAgICAgICAgZGF0ZU9iai5nZXRIb3VycygpID4gMCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZU9iai5nZXRNaW51dGVzKCkgPiAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlT2JqLmdldFNlY29uZHMoKSA+IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gc2VsZi5zZWxlY3RlZERhdGVzLmZpbHRlcihmdW5jdGlvbiAoZCkgeyByZXR1cm4gaXNFbmFibGVkKGQpOyB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggJiYgdHlwZSA9PT0gXCJtaW5cIilcbiAgICAgICAgICAgICAgICAgICAgc2V0SG91cnNGcm9tRGF0ZShkYXRlT2JqKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHJlZHJhdygpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlT2JqICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50W3R5cGVdID0gZGF0ZU9iai5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodHlwZSk7XG4gICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQuZGlzYWJsZWQgPVxuICAgICAgICAgICAgICAgICAgICAhIWludmVyc2VEYXRlT2JqICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlT2JqICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVyc2VEYXRlT2JqLmdldEZ1bGxZZWFyKCkgPT09IGRhdGVPYmouZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGFyc2VDb25maWcoKSB7XG4gICAgICAgIHZhciBib29sT3B0cyA9IFtcbiAgICAgICAgICAgIFwid3JhcFwiLFxuICAgICAgICAgICAgXCJ3ZWVrTnVtYmVyc1wiLFxuICAgICAgICAgICAgXCJhbGxvd0lucHV0XCIsXG4gICAgICAgICAgICBcImFsbG93SW52YWxpZFByZWxvYWRcIixcbiAgICAgICAgICAgIFwiY2xpY2tPcGVuc1wiLFxuICAgICAgICAgICAgXCJ0aW1lXzI0aHJcIixcbiAgICAgICAgICAgIFwiZW5hYmxlVGltZVwiLFxuICAgICAgICAgICAgXCJub0NhbGVuZGFyXCIsXG4gICAgICAgICAgICBcImFsdElucHV0XCIsXG4gICAgICAgICAgICBcInNob3J0aGFuZEN1cnJlbnRNb250aFwiLFxuICAgICAgICAgICAgXCJpbmxpbmVcIixcbiAgICAgICAgICAgIFwic3RhdGljXCIsXG4gICAgICAgICAgICBcImVuYWJsZVNlY29uZHNcIixcbiAgICAgICAgICAgIFwiZGlzYWJsZU1vYmlsZVwiLFxuICAgICAgICBdO1xuICAgICAgICB2YXIgdXNlckNvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGVsZW1lbnQuZGF0YXNldCB8fCB7fSkpKSwgaW5zdGFuY2VDb25maWcpO1xuICAgICAgICB2YXIgZm9ybWF0cyA9IHt9O1xuICAgICAgICBzZWxmLmNvbmZpZy5wYXJzZURhdGUgPSB1c2VyQ29uZmlnLnBhcnNlRGF0ZTtcbiAgICAgICAgc2VsZi5jb25maWcuZm9ybWF0RGF0ZSA9IHVzZXJDb25maWcuZm9ybWF0RGF0ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcImVuYWJsZVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuY29uZmlnLl9lbmFibGU7IH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlcykge1xuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLl9lbmFibGUgPSBwYXJzZURhdGVSdWxlcyhkYXRlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcImRpc2FibGVcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmNvbmZpZy5fZGlzYWJsZTsgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGRhdGVzKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcuX2Rpc2FibGUgPSBwYXJzZURhdGVSdWxlcyhkYXRlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHRpbWVNb2RlID0gdXNlckNvbmZpZy5tb2RlID09PSBcInRpbWVcIjtcbiAgICAgICAgaWYgKCF1c2VyQ29uZmlnLmRhdGVGb3JtYXQgJiYgKHVzZXJDb25maWcuZW5hYmxlVGltZSB8fCB0aW1lTW9kZSkpIHtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0RGF0ZUZvcm1hdCA9IGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnLmRhdGVGb3JtYXQgfHwgZGVmYXVsdE9wdGlvbnMuZGF0ZUZvcm1hdDtcbiAgICAgICAgICAgIGZvcm1hdHMuZGF0ZUZvcm1hdCA9XG4gICAgICAgICAgICAgICAgdXNlckNvbmZpZy5ub0NhbGVuZGFyIHx8IHRpbWVNb2RlXG4gICAgICAgICAgICAgICAgICAgID8gXCJIOmlcIiArICh1c2VyQ29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHREYXRlRm9ybWF0ICsgXCIgSDppXCIgKyAodXNlckNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6U1wiIDogXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVzZXJDb25maWcuYWx0SW5wdXQgJiZcbiAgICAgICAgICAgICh1c2VyQ29uZmlnLmVuYWJsZVRpbWUgfHwgdGltZU1vZGUpICYmXG4gICAgICAgICAgICAhdXNlckNvbmZpZy5hbHRGb3JtYXQpIHtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0QWx0Rm9ybWF0ID0gZmxhdHBpY2tyLmRlZmF1bHRDb25maWcuYWx0Rm9ybWF0IHx8IGRlZmF1bHRPcHRpb25zLmFsdEZvcm1hdDtcbiAgICAgICAgICAgIGZvcm1hdHMuYWx0Rm9ybWF0ID1cbiAgICAgICAgICAgICAgICB1c2VyQ29uZmlnLm5vQ2FsZW5kYXIgfHwgdGltZU1vZGVcbiAgICAgICAgICAgICAgICAgICAgPyBcImg6aVwiICsgKHVzZXJDb25maWcuZW5hYmxlU2Vjb25kcyA/IFwiOlMgS1wiIDogXCIgS1wiKVxuICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRBbHRGb3JtYXQgKyAoXCIgaDppXCIgKyAodXNlckNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6U1wiIDogXCJcIikgKyBcIiBLXCIpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJtaW5EYXRlXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5jb25maWcuX21pbkRhdGU7IH0sXG4gICAgICAgICAgICBzZXQ6IG1pbk1heERhdGVTZXR0ZXIoXCJtaW5cIiksXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwibWF4RGF0ZVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuY29uZmlnLl9tYXhEYXRlOyB9LFxuICAgICAgICAgICAgc2V0OiBtaW5NYXhEYXRlU2V0dGVyKFwibWF4XCIpLFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG1pbk1heFRpbWVTZXR0ZXIgPSBmdW5jdGlvbiAodHlwZSkgeyByZXR1cm4gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgc2VsZi5jb25maWdbdHlwZSA9PT0gXCJtaW5cIiA/IFwiX21pblRpbWVcIiA6IFwiX21heFRpbWVcIl0gPSBzZWxmLnBhcnNlRGF0ZSh2YWwsIFwiSDppOlNcIik7XG4gICAgICAgIH07IH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJtaW5UaW1lXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5jb25maWcuX21pblRpbWU7IH0sXG4gICAgICAgICAgICBzZXQ6IG1pbk1heFRpbWVTZXR0ZXIoXCJtaW5cIiksXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwibWF4VGltZVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuY29uZmlnLl9tYXhUaW1lOyB9LFxuICAgICAgICAgICAgc2V0OiBtaW5NYXhUaW1lU2V0dGVyKFwibWF4XCIpLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHVzZXJDb25maWcubW9kZSA9PT0gXCJ0aW1lXCIpIHtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZi5jb25maWcuZW5hYmxlVGltZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmFzc2lnbihzZWxmLmNvbmZpZywgZm9ybWF0cywgdXNlckNvbmZpZyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9vbE9wdHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBzZWxmLmNvbmZpZ1tib29sT3B0c1tpXV0gPVxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW2Jvb2xPcHRzW2ldXSA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1tib29sT3B0c1tpXV0gPT09IFwidHJ1ZVwiO1xuICAgICAgICBIT09LUy5maWx0ZXIoZnVuY3Rpb24gKGhvb2spIHsgcmV0dXJuIHNlbGYuY29uZmlnW2hvb2tdICE9PSB1bmRlZmluZWQ7IH0pLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgICAgICAgIHNlbGYuY29uZmlnW2hvb2tdID0gYXJyYXlpZnkoc2VsZi5jb25maWdbaG9va10gfHwgW10pLm1hcChiaW5kVG9JbnN0YW5jZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLmlzTW9iaWxlID1cbiAgICAgICAgICAgICFzZWxmLmNvbmZpZy5kaXNhYmxlTW9iaWxlICYmXG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLmlubGluZSAmJlxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1vZGUgPT09IFwic2luZ2xlXCIgJiZcbiAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcuZGlzYWJsZS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcuZW5hYmxlICYmXG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLndlZWtOdW1iZXJzICYmXG4gICAgICAgICAgICAgICAgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuY29uZmlnLnBsdWdpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwbHVnaW5Db25mID0gc2VsZi5jb25maWcucGx1Z2luc1tpXShzZWxmKSB8fCB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBwbHVnaW5Db25mKSB7XG4gICAgICAgICAgICAgICAgaWYgKEhPT0tTLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW2tleV0gPSBhcnJheWlmeShwbHVnaW5Db25mW2tleV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGJpbmRUb0luc3RhbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChzZWxmLmNvbmZpZ1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHVzZXJDb25maWdba2V5XSA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWdba2V5XSA9IHBsdWdpbkNvbmZba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXVzZXJDb25maWcuYWx0SW5wdXRDbGFzcykge1xuICAgICAgICAgICAgc2VsZi5jb25maWcuYWx0SW5wdXRDbGFzcyA9XG4gICAgICAgICAgICAgICAgZ2V0SW5wdXRFbGVtKCkuY2xhc3NOYW1lICsgXCIgXCIgKyBzZWxmLmNvbmZpZy5hbHRJbnB1dENsYXNzO1xuICAgICAgICB9XG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uUGFyc2VDb25maWdcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldElucHV0RWxlbSgpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuY29uZmlnLndyYXBcbiAgICAgICAgICAgID8gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaW5wdXRdXCIpXG4gICAgICAgICAgICA6IGVsZW1lbnQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldHVwTG9jYWxlKCkge1xuICAgICAgICBpZiAodHlwZW9mIHNlbGYuY29uZmlnLmxvY2FsZSAhPT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgdHlwZW9mIGZsYXRwaWNrci5sMTBuc1tzZWxmLmNvbmZpZy5sb2NhbGVdID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgc2VsZi5jb25maWcuZXJyb3JIYW5kbGVyKG5ldyBFcnJvcihcImZsYXRwaWNrcjogaW52YWxpZCBsb2NhbGUgXCIgKyBzZWxmLmNvbmZpZy5sb2NhbGUpKTtcbiAgICAgICAgc2VsZi5sMTBuID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGZsYXRwaWNrci5sMTBucy5kZWZhdWx0KSwgKHR5cGVvZiBzZWxmLmNvbmZpZy5sb2NhbGUgPT09IFwib2JqZWN0XCJcbiAgICAgICAgICAgID8gc2VsZi5jb25maWcubG9jYWxlXG4gICAgICAgICAgICA6IHNlbGYuY29uZmlnLmxvY2FsZSAhPT0gXCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICA/IGZsYXRwaWNrci5sMTBuc1tzZWxmLmNvbmZpZy5sb2NhbGVdXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQpKTtcbiAgICAgICAgdG9rZW5SZWdleC5EID0gXCIoXCIgKyBzZWxmLmwxMG4ud2Vla2RheXMuc2hvcnRoYW5kLmpvaW4oXCJ8XCIpICsgXCIpXCI7XG4gICAgICAgIHRva2VuUmVnZXgubCA9IFwiKFwiICsgc2VsZi5sMTBuLndlZWtkYXlzLmxvbmdoYW5kLmpvaW4oXCJ8XCIpICsgXCIpXCI7XG4gICAgICAgIHRva2VuUmVnZXguTSA9IFwiKFwiICsgc2VsZi5sMTBuLm1vbnRocy5zaG9ydGhhbmQuam9pbihcInxcIikgKyBcIilcIjtcbiAgICAgICAgdG9rZW5SZWdleC5GID0gXCIoXCIgKyBzZWxmLmwxMG4ubW9udGhzLmxvbmdoYW5kLmpvaW4oXCJ8XCIpICsgXCIpXCI7XG4gICAgICAgIHRva2VuUmVnZXguSyA9IFwiKFwiICsgc2VsZi5sMTBuLmFtUE1bMF0gKyBcInxcIiArIHNlbGYubDEwbi5hbVBNWzFdICsgXCJ8XCIgKyBzZWxmLmwxMG4uYW1QTVswXS50b0xvd2VyQ2FzZSgpICsgXCJ8XCIgKyBzZWxmLmwxMG4uYW1QTVsxXS50b0xvd2VyQ2FzZSgpICsgXCIpXCI7XG4gICAgICAgIHZhciB1c2VyQ29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGluc3RhbmNlQ29uZmlnKSwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlbGVtZW50LmRhdGFzZXQgfHwge30pKSk7XG4gICAgICAgIGlmICh1c2VyQ29uZmlnLnRpbWVfMjRociA9PT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBmbGF0cGlja3IuZGVmYXVsdENvbmZpZy50aW1lXzI0aHIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2VsZi5jb25maWcudGltZV8yNGhyID0gc2VsZi5sMTBuLnRpbWVfMjRocjtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLmZvcm1hdERhdGUgPSBjcmVhdGVEYXRlRm9ybWF0dGVyKHNlbGYpO1xuICAgICAgICBzZWxmLnBhcnNlRGF0ZSA9IGNyZWF0ZURhdGVQYXJzZXIoeyBjb25maWc6IHNlbGYuY29uZmlnLCBsMTBuOiBzZWxmLmwxMG4gfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBvc2l0aW9uQ2FsZW5kYXIoY3VzdG9tUG9zaXRpb25FbGVtZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZi5jb25maWcucG9zaXRpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIHZvaWQgc2VsZi5jb25maWcucG9zaXRpb24oc2VsZiwgY3VzdG9tUG9zaXRpb25FbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5jYWxlbmRhckNvbnRhaW5lciA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblByZUNhbGVuZGFyUG9zaXRpb25cIik7XG4gICAgICAgIHZhciBwb3NpdGlvbkVsZW1lbnQgPSBjdXN0b21Qb3NpdGlvbkVsZW1lbnQgfHwgc2VsZi5fcG9zaXRpb25FbGVtZW50O1xuICAgICAgICB2YXIgY2FsZW5kYXJIZWlnaHQgPSBBcnJheS5wcm90b3R5cGUucmVkdWNlLmNhbGwoc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jaGlsZHJlbiwgKGZ1bmN0aW9uIChhY2MsIGNoaWxkKSB7IHJldHVybiBhY2MgKyBjaGlsZC5vZmZzZXRIZWlnaHQ7IH0pLCAwKSwgY2FsZW5kYXJXaWR0aCA9IHNlbGYuY2FsZW5kYXJDb250YWluZXIub2Zmc2V0V2lkdGgsIGNvbmZpZ1BvcyA9IHNlbGYuY29uZmlnLnBvc2l0aW9uLnNwbGl0KFwiIFwiKSwgY29uZmlnUG9zVmVydGljYWwgPSBjb25maWdQb3NbMF0sIGNvbmZpZ1Bvc0hvcml6b250YWwgPSBjb25maWdQb3MubGVuZ3RoID4gMSA/IGNvbmZpZ1Bvc1sxXSA6IG51bGwsIGlucHV0Qm91bmRzID0gcG9zaXRpb25FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBkaXN0YW5jZUZyb21Cb3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBpbnB1dEJvdW5kcy5ib3R0b20sIHNob3dPblRvcCA9IGNvbmZpZ1Bvc1ZlcnRpY2FsID09PSBcImFib3ZlXCIgfHxcbiAgICAgICAgICAgIChjb25maWdQb3NWZXJ0aWNhbCAhPT0gXCJiZWxvd1wiICYmXG4gICAgICAgICAgICAgICAgZGlzdGFuY2VGcm9tQm90dG9tIDwgY2FsZW5kYXJIZWlnaHQgJiZcbiAgICAgICAgICAgICAgICBpbnB1dEJvdW5kcy50b3AgPiBjYWxlbmRhckhlaWdodCk7XG4gICAgICAgIHZhciB0b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgK1xuICAgICAgICAgICAgaW5wdXRCb3VuZHMudG9wICtcbiAgICAgICAgICAgICghc2hvd09uVG9wID8gcG9zaXRpb25FbGVtZW50Lm9mZnNldEhlaWdodCArIDIgOiAtY2FsZW5kYXJIZWlnaHQgLSAyKTtcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhcnJvd1RvcFwiLCAhc2hvd09uVG9wKTtcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhcnJvd0JvdHRvbVwiLCBzaG93T25Ub3ApO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuaW5saW5lKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgbGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCArIGlucHV0Qm91bmRzLmxlZnQ7XG4gICAgICAgIHZhciBpc0NlbnRlciA9IGZhbHNlO1xuICAgICAgICB2YXIgaXNSaWdodCA9IGZhbHNlO1xuICAgICAgICBpZiAoY29uZmlnUG9zSG9yaXpvbnRhbCA9PT0gXCJjZW50ZXJcIikge1xuICAgICAgICAgICAgbGVmdCAtPSAoY2FsZW5kYXJXaWR0aCAtIGlucHV0Qm91bmRzLndpZHRoKSAvIDI7XG4gICAgICAgICAgICBpc0NlbnRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29uZmlnUG9zSG9yaXpvbnRhbCA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICBsZWZ0IC09IGNhbGVuZGFyV2lkdGggLSBpbnB1dEJvdW5kcy53aWR0aDtcbiAgICAgICAgICAgIGlzUmlnaHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiYXJyb3dMZWZ0XCIsICFpc0NlbnRlciAmJiAhaXNSaWdodCk7XG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiYXJyb3dDZW50ZXJcIiwgaXNDZW50ZXIpO1xuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImFycm93UmlnaHRcIiwgaXNSaWdodCk7XG4gICAgICAgIHZhciByaWdodCA9IHdpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoIC1cbiAgICAgICAgICAgICh3aW5kb3cucGFnZVhPZmZzZXQgKyBpbnB1dEJvdW5kcy5yaWdodCk7XG4gICAgICAgIHZhciByaWdodE1vc3QgPSBsZWZ0ICsgY2FsZW5kYXJXaWR0aCA+IHdpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoO1xuICAgICAgICB2YXIgY2VudGVyTW9zdCA9IHJpZ2h0ICsgY2FsZW5kYXJXaWR0aCA+IHdpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoO1xuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcInJpZ2h0TW9zdFwiLCByaWdodE1vc3QpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuc3RhdGljKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcbiAgICAgICAgaWYgKCFyaWdodE1vc3QpIHtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUubGVmdCA9IGxlZnQgKyBcInB4XCI7XG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnJpZ2h0ID0gXCJhdXRvXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWNlbnRlck1vc3QpIHtcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUubGVmdCA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5yaWdodCA9IHJpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRvYyA9IGdldERvY3VtZW50U3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgaWYgKGRvYyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciBib2R5V2lkdGggPSB3aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIHZhciBjZW50ZXJMZWZ0ID0gTWF0aC5tYXgoMCwgYm9keVdpZHRoIC8gMiAtIGNhbGVuZGFyV2lkdGggLyAyKTtcbiAgICAgICAgICAgIHZhciBjZW50ZXJCZWZvcmUgPSBcIi5mbGF0cGlja3ItY2FsZW5kYXIuY2VudGVyTW9zdDpiZWZvcmVcIjtcbiAgICAgICAgICAgIHZhciBjZW50ZXJBZnRlciA9IFwiLmZsYXRwaWNrci1jYWxlbmRhci5jZW50ZXJNb3N0OmFmdGVyXCI7XG4gICAgICAgICAgICB2YXIgY2VudGVySW5kZXggPSBkb2MuY3NzUnVsZXMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGNlbnRlclN0eWxlID0gXCJ7bGVmdDpcIiArIGlucHV0Qm91bmRzLmxlZnQgKyBcInB4O3JpZ2h0OmF1dG87fVwiO1xuICAgICAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJyaWdodE1vc3RcIiwgZmFsc2UpO1xuICAgICAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJjZW50ZXJNb3N0XCIsIHRydWUpO1xuICAgICAgICAgICAgZG9jLmluc2VydFJ1bGUoY2VudGVyQmVmb3JlICsgXCIsXCIgKyBjZW50ZXJBZnRlciArIGNlbnRlclN0eWxlLCBjZW50ZXJJbmRleCk7XG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBjZW50ZXJMZWZ0ICsgXCJweFwiO1xuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5yaWdodCA9IFwiYXV0b1wiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldERvY3VtZW50U3R5bGVTaGVldCgpIHtcbiAgICAgICAgdmFyIGVkaXRhYmxlU2hlZXQgPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICAgICAgICAgIGlmICghc2hlZXQuY3NzUnVsZXMpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHNoZWV0LmNzc1J1bGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWRpdGFibGVTaGVldCA9IHNoZWV0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVkaXRhYmxlU2hlZXQgIT0gbnVsbCA/IGVkaXRhYmxlU2hlZXQgOiBjcmVhdGVTdHlsZVNoZWV0KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN0eWxlU2hlZXQoKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIHJldHVybiBzdHlsZS5zaGVldDtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVkcmF3KCkge1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubm9DYWxlbmRhciB8fCBzZWxmLmlzTW9iaWxlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBidWlsZE1vbnRoU3dpdGNoKCk7XG4gICAgICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcbiAgICAgICAgYnVpbGREYXlzKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvY3VzQW5kQ2xvc2UoKSB7XG4gICAgICAgIHNlbGYuX2lucHV0LmZvY3VzKCk7XG4gICAgICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRVwiKSAhPT0gLTEgfHxcbiAgICAgICAgICAgIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoc2VsZi5jbG9zZSwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWxmLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2VsZWN0RGF0ZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdmFyIGlzU2VsZWN0YWJsZSA9IGZ1bmN0aW9uIChkYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXkuY2xhc3NMaXN0ICYmXG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kYXlcIikgJiZcbiAgICAgICAgICAgICAgICAhZGF5LmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kaXNhYmxlZFwiKSAmJlxuICAgICAgICAgICAgICAgICFkYXkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90QWxsb3dlZFwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHQgPSBmaW5kUGFyZW50KGdldEV2ZW50VGFyZ2V0KGUpLCBpc1NlbGVjdGFibGUpO1xuICAgICAgICBpZiAodCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdDtcbiAgICAgICAgdmFyIHNlbGVjdGVkRGF0ZSA9IChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IG5ldyBEYXRlKHRhcmdldC5kYXRlT2JqLmdldFRpbWUoKSkpO1xuICAgICAgICB2YXIgc2hvdWxkQ2hhbmdlTW9udGggPSAoc2VsZWN0ZWREYXRlLmdldE1vbnRoKCkgPCBzZWxmLmN1cnJlbnRNb250aCB8fFxuICAgICAgICAgICAgc2VsZWN0ZWREYXRlLmdldE1vbnRoKCkgPlxuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoICsgc2VsZi5jb25maWcuc2hvd01vbnRocyAtIDEpICYmXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5tb2RlICE9PSBcInJhbmdlXCI7XG4gICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlRWxlbSA9IHRhcmdldDtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwic2luZ2xlXCIpXG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBbc2VsZWN0ZWREYXRlXTtcbiAgICAgICAgZWxzZSBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJtdWx0aXBsZVwiKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IGlzRGF0ZVNlbGVjdGVkKHNlbGVjdGVkRGF0ZSk7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleClcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMuc3BsaWNlKHBhcnNlSW50KHNlbGVjdGVkSW5kZXgpLCAxKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMucHVzaChzZWxlY3RlZERhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIikge1xuICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNsZWFyKGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IHNlbGVjdGVkRGF0ZTtcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5wdXNoKHNlbGVjdGVkRGF0ZSk7XG4gICAgICAgICAgICBpZiAoY29tcGFyZURhdGVzKHNlbGVjdGVkRGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdLCB0cnVlKSAhPT0gMClcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5nZXRUaW1lKCkgLSBiLmdldFRpbWUoKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0SG91cnNGcm9tSW5wdXRzKCk7XG4gICAgICAgIGlmIChzaG91bGRDaGFuZ2VNb250aCkge1xuICAgICAgICAgICAgdmFyIGlzTmV3WWVhciA9IHNlbGYuY3VycmVudFllYXIgIT09IHNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9IHNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgIGlmIChpc05ld1llYXIpIHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblllYXJDaGFuZ2VcIik7XG4gICAgICAgICAgICAgICAgYnVpbGRNb250aFN3aXRjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25Nb250aENoYW5nZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XG4gICAgICAgIGJ1aWxkRGF5cygpO1xuICAgICAgICB1cGRhdGVWYWx1ZSgpO1xuICAgICAgICBpZiAoIXNob3VsZENoYW5nZU1vbnRoICYmXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5tb2RlICE9PSBcInJhbmdlXCIgJiZcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLnNob3dNb250aHMgPT09IDEpXG4gICAgICAgICAgICBmb2N1c09uRGF5RWxlbSh0YXJnZXQpO1xuICAgICAgICBlbHNlIGlmIChzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gJiYgc2VsZi5zZWxlY3RlZERhdGVFbGVtLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuaG91ckVsZW1lbnQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQgIT09IHVuZGVmaW5lZCAmJiBzZWxmLmhvdXJFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICAgICAgICB2YXIgc2luZ2xlID0gc2VsZi5jb25maWcubW9kZSA9PT0gXCJzaW5nbGVcIiAmJiAhc2VsZi5jb25maWcuZW5hYmxlVGltZTtcbiAgICAgICAgICAgIHZhciByYW5nZSA9IHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIiAmJlxuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDIgJiZcbiAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcuZW5hYmxlVGltZTtcbiAgICAgICAgICAgIGlmIChzaW5nbGUgfHwgcmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBmb2N1c0FuZENsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdHJpZ2dlckNoYW5nZSgpO1xuICAgIH1cbiAgICB2YXIgQ0FMTEJBQ0tTID0ge1xuICAgICAgICBsb2NhbGU6IFtzZXR1cExvY2FsZSwgdXBkYXRlV2Vla2RheXNdLFxuICAgICAgICBzaG93TW9udGhzOiBbYnVpbGRNb250aHMsIHNldENhbGVuZGFyV2lkdGgsIGJ1aWxkV2Vla2RheXNdLFxuICAgICAgICBtaW5EYXRlOiBbanVtcFRvRGF0ZV0sXG4gICAgICAgIG1heERhdGU6IFtqdW1wVG9EYXRlXSxcbiAgICAgICAgcG9zaXRpb25FbGVtZW50OiBbdXBkYXRlUG9zaXRpb25FbGVtZW50XSxcbiAgICAgICAgY2xpY2tPcGVuczogW1xuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5jbGlja09wZW5zID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJpbmQoc2VsZi5faW5wdXQsIFwiZm9jdXNcIiwgc2VsZi5vcGVuKTtcbiAgICAgICAgICAgICAgICAgICAgYmluZChzZWxmLl9pbnB1dCwgXCJjbGlja1wiLCBzZWxmLm9wZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5faW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHNlbGYub3Blbik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2lucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxmLm9wZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfTtcbiAgICBmdW5jdGlvbiBzZXQob3B0aW9uLCB2YWx1ZSkge1xuICAgICAgICBpZiAob3B0aW9uICE9PSBudWxsICYmIHR5cGVvZiBvcHRpb24gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc2VsZi5jb25maWcsIG9wdGlvbik7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKENBTExCQUNLU1trZXldICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIENBTExCQUNLU1trZXldLmZvckVhY2goZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgoKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWxmLmNvbmZpZ1tvcHRpb25dID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAoQ0FMTEJBQ0tTW29wdGlvbl0gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBDQUxMQkFDS1Nbb3B0aW9uXS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4KCk7IH0pO1xuICAgICAgICAgICAgZWxzZSBpZiAoSE9PS1MuaW5kZXhPZihvcHRpb24pID4gLTEpXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWdbb3B0aW9uXSA9IGFycmF5aWZ5KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLnJlZHJhdygpO1xuICAgICAgICB1cGRhdGVWYWx1ZSh0cnVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0U2VsZWN0ZWREYXRlKGlucHV0RGF0ZSwgZm9ybWF0KSB7XG4gICAgICAgIHZhciBkYXRlcyA9IFtdO1xuICAgICAgICBpZiAoaW5wdXREYXRlIGluc3RhbmNlb2YgQXJyYXkpXG4gICAgICAgICAgICBkYXRlcyA9IGlucHV0RGF0ZS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHNlbGYucGFyc2VEYXRlKGQsIGZvcm1hdCk7IH0pO1xuICAgICAgICBlbHNlIGlmIChpbnB1dERhdGUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBpbnB1dERhdGUgPT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICBkYXRlcyA9IFtzZWxmLnBhcnNlRGF0ZShpbnB1dERhdGUsIGZvcm1hdCldO1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgaW5wdXREYXRlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHNlbGYuY29uZmlnLm1vZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwic2luZ2xlXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcInRpbWVcIjpcbiAgICAgICAgICAgICAgICAgICAgZGF0ZXMgPSBbc2VsZi5wYXJzZURhdGUoaW5wdXREYXRlLCBmb3JtYXQpXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm11bHRpcGxlXCI6XG4gICAgICAgICAgICAgICAgICAgIGRhdGVzID0gaW5wdXREYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoc2VsZi5jb25maWcuY29uanVuY3Rpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBzZWxmLnBhcnNlRGF0ZShkYXRlLCBmb3JtYXQpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInJhbmdlXCI6XG4gICAgICAgICAgICAgICAgICAgIGRhdGVzID0gaW5wdXREYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoc2VsZi5sMTBuLnJhbmdlU2VwYXJhdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gc2VsZi5wYXJzZURhdGUoZGF0ZSwgZm9ybWF0KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLmVycm9ySGFuZGxlcihuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGUgc3VwcGxpZWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoaW5wdXREYXRlKSkpO1xuICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSAoc2VsZi5jb25maWcuYWxsb3dJbnZhbGlkUHJlbG9hZFxuICAgICAgICAgICAgPyBkYXRlc1xuICAgICAgICAgICAgOiBkYXRlcy5maWx0ZXIoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgaW5zdGFuY2VvZiBEYXRlICYmIGlzRW5hYmxlZChkLCBmYWxzZSk7IH0pKTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIilcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmdldFRpbWUoKSAtIGIuZ2V0VGltZSgpOyB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0RGF0ZShkYXRlLCB0cmlnZ2VyQ2hhbmdlLCBmb3JtYXQpIHtcbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UgPT09IHZvaWQgMCkgeyB0cmlnZ2VyQ2hhbmdlID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gdm9pZCAwKSB7IGZvcm1hdCA9IHNlbGYuY29uZmlnLmRhdGVGb3JtYXQ7IH1cbiAgICAgICAgaWYgKChkYXRlICE9PSAwICYmICFkYXRlKSB8fCAoZGF0ZSBpbnN0YW5jZW9mIEFycmF5ICYmIGRhdGUubGVuZ3RoID09PSAwKSlcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNsZWFyKHRyaWdnZXJDaGFuZ2UpO1xuICAgICAgICBzZXRTZWxlY3RlZERhdGUoZGF0ZSwgZm9ybWF0KTtcbiAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPVxuICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzW3NlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgc2VsZi5yZWRyYXcoKTtcbiAgICAgICAganVtcFRvRGF0ZSh1bmRlZmluZWQsIHRyaWdnZXJDaGFuZ2UpO1xuICAgICAgICBzZXRIb3Vyc0Zyb21EYXRlKCk7XG4gICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzZWxmLmNsZWFyKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVWYWx1ZSh0cmlnZ2VyQ2hhbmdlKTtcbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UpXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNoYW5nZVwiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGFyc2VEYXRlUnVsZXMoYXJyKSB7XG4gICAgICAgIHJldHVybiBhcnJcbiAgICAgICAgICAgIC5zbGljZSgpXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJ1bGUgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgcnVsZSA9PT0gXCJudW1iZXJcIiB8fFxuICAgICAgICAgICAgICAgIHJ1bGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYucGFyc2VEYXRlKHJ1bGUsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChydWxlICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIHJ1bGUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgICAgICBydWxlLmZyb20gJiZcbiAgICAgICAgICAgICAgICBydWxlLnRvKVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZyb206IHNlbGYucGFyc2VEYXRlKHJ1bGUuZnJvbSwgdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgICAgdG86IHNlbGYucGFyc2VEYXRlKHJ1bGUudG8sIHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldHVwRGF0ZXMoKSB7XG4gICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IFtdO1xuICAgICAgICBzZWxmLm5vdyA9IHNlbGYucGFyc2VEYXRlKHNlbGYuY29uZmlnLm5vdykgfHwgbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIHByZWxvYWRlZERhdGUgPSBzZWxmLmNvbmZpZy5kZWZhdWx0RGF0ZSB8fFxuICAgICAgICAgICAgKChzZWxmLmlucHV0Lm5vZGVOYW1lID09PSBcIklOUFVUXCIgfHxcbiAgICAgICAgICAgICAgICBzZWxmLmlucHV0Lm5vZGVOYW1lID09PSBcIlRFWFRBUkVBXCIpICYmXG4gICAgICAgICAgICAgICAgc2VsZi5pbnB1dC5wbGFjZWhvbGRlciAmJlxuICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQudmFsdWUgPT09IHNlbGYuaW5wdXQucGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICA6IHNlbGYuaW5wdXQudmFsdWUpO1xuICAgICAgICBpZiAocHJlbG9hZGVkRGF0ZSlcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRGF0ZShwcmVsb2FkZWREYXRlLCBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KTtcbiAgICAgICAgc2VsZi5faW5pdGlhbERhdGUgPVxuICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IHNlbGYuc2VsZWN0ZWREYXRlc1swXVxuICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcubWluRGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5EYXRlLmdldFRpbWUoKSA+IHNlbGYubm93LmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLm1pbkRhdGVcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5tYXhEYXRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldFRpbWUoKSA8IHNlbGYubm93LmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5tYXhEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHNlbGYubm93O1xuICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0gc2VsZi5faW5pdGlhbERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBzZWxmLl9pbml0aWFsRGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IHNlbGYuc2VsZWN0ZWREYXRlc1swXTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1pblRpbWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm1pblRpbWUgPSBzZWxmLnBhcnNlRGF0ZShzZWxmLmNvbmZpZy5taW5UaW1lLCBcIkg6aVwiKTtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heFRpbWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm1heFRpbWUgPSBzZWxmLnBhcnNlRGF0ZShzZWxmLmNvbmZpZy5tYXhUaW1lLCBcIkg6aVwiKTtcbiAgICAgICAgc2VsZi5taW5EYXRlSGFzVGltZSA9XG4gICAgICAgICAgICAhIXNlbGYuY29uZmlnLm1pbkRhdGUgJiZcbiAgICAgICAgICAgICAgICAoc2VsZi5jb25maWcubWluRGF0ZS5nZXRIb3VycygpID4gMCB8fFxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1pbnV0ZXMoKSA+IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZS5nZXRTZWNvbmRzKCkgPiAwKTtcbiAgICAgICAgc2VsZi5tYXhEYXRlSGFzVGltZSA9XG4gICAgICAgICAgICAhIXNlbGYuY29uZmlnLm1heERhdGUgJiZcbiAgICAgICAgICAgICAgICAoc2VsZi5jb25maWcubWF4RGF0ZS5nZXRIb3VycygpID4gMCB8fFxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1pbnV0ZXMoKSA+IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRTZWNvbmRzKCkgPiAwKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0dXBJbnB1dHMoKSB7XG4gICAgICAgIHNlbGYuaW5wdXQgPSBnZXRJbnB1dEVsZW0oKTtcbiAgICAgICAgaWYgKCFzZWxmLmlucHV0KSB7XG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5lcnJvckhhbmRsZXIobmV3IEVycm9yKFwiSW52YWxpZCBpbnB1dCBlbGVtZW50IHNwZWNpZmllZFwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5pbnB1dC5fdHlwZSA9IHNlbGYuaW5wdXQudHlwZTtcbiAgICAgICAgc2VsZi5pbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIHNlbGYuaW5wdXQuY2xhc3NMaXN0LmFkZChcImZsYXRwaWNrci1pbnB1dFwiKTtcbiAgICAgICAgc2VsZi5faW5wdXQgPSBzZWxmLmlucHV0O1xuICAgICAgICBpZiAoc2VsZi5jb25maWcuYWx0SW5wdXQpIHtcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQgPSBjcmVhdGVFbGVtZW50KHNlbGYuaW5wdXQubm9kZU5hbWUsIHNlbGYuY29uZmlnLmFsdElucHV0Q2xhc3MpO1xuICAgICAgICAgICAgc2VsZi5faW5wdXQgPSBzZWxmLmFsdElucHV0O1xuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC5wbGFjZWhvbGRlciA9IHNlbGYuaW5wdXQucGxhY2Vob2xkZXI7XG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LmRpc2FibGVkID0gc2VsZi5pbnB1dC5kaXNhYmxlZDtcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQucmVxdWlyZWQgPSBzZWxmLmlucHV0LnJlcXVpcmVkO1xuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC50YWJJbmRleCA9IHNlbGYuaW5wdXQudGFiSW5kZXg7XG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgICAgIHNlbGYuaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgIGlmICghc2VsZi5jb25maWcuc3RhdGljICYmIHNlbGYuaW5wdXQucGFyZW50Tm9kZSlcbiAgICAgICAgICAgICAgICBzZWxmLmlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYuYWx0SW5wdXQsIHNlbGYuaW5wdXQubmV4dFNpYmxpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2VsZi5jb25maWcuYWxsb3dJbnB1dClcbiAgICAgICAgICAgIHNlbGYuX2lucHV0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIFwicmVhZG9ubHlcIik7XG4gICAgICAgIHVwZGF0ZVBvc2l0aW9uRWxlbWVudCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbkVsZW1lbnQoKSB7XG4gICAgICAgIHNlbGYuX3Bvc2l0aW9uRWxlbWVudCA9IHNlbGYuY29uZmlnLnBvc2l0aW9uRWxlbWVudCB8fCBzZWxmLl9pbnB1dDtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0dXBNb2JpbGUoKSB7XG4gICAgICAgIHZhciBpbnB1dFR5cGUgPSBzZWxmLmNvbmZpZy5lbmFibGVUaW1lXG4gICAgICAgICAgICA/IHNlbGYuY29uZmlnLm5vQ2FsZW5kYXJcbiAgICAgICAgICAgICAgICA/IFwidGltZVwiXG4gICAgICAgICAgICAgICAgOiBcImRhdGV0aW1lLWxvY2FsXCJcbiAgICAgICAgICAgIDogXCJkYXRlXCI7XG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgc2VsZi5pbnB1dC5jbGFzc05hbWUgKyBcIiBmbGF0cGlja3ItbW9iaWxlXCIpO1xuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnRhYkluZGV4ID0gMTtcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC50eXBlID0gaW5wdXRUeXBlO1xuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LmRpc2FibGVkID0gc2VsZi5pbnB1dC5kaXNhYmxlZDtcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5yZXF1aXJlZCA9IHNlbGYuaW5wdXQucmVxdWlyZWQ7XG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQucGxhY2Vob2xkZXIgPSBzZWxmLmlucHV0LnBsYWNlaG9sZGVyO1xuICAgICAgICBzZWxmLm1vYmlsZUZvcm1hdFN0ciA9XG4gICAgICAgICAgICBpbnB1dFR5cGUgPT09IFwiZGF0ZXRpbWUtbG9jYWxcIlxuICAgICAgICAgICAgICAgID8gXCJZLW0tZFxcXFxUSDppOlNcIlxuICAgICAgICAgICAgICAgIDogaW5wdXRUeXBlID09PSBcImRhdGVcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiWS1tLWRcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiSDppOlNcIjtcbiAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LmRlZmF1bHRWYWx1ZSA9IHNlbGYubW9iaWxlSW5wdXQudmFsdWUgPSBzZWxmLmZvcm1hdERhdGUoc2VsZi5zZWxlY3RlZERhdGVzWzBdLCBzZWxmLm1vYmlsZUZvcm1hdFN0cik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1pbkRhdGUpXG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0Lm1pbiA9IHNlbGYuZm9ybWF0RGF0ZShzZWxmLmNvbmZpZy5taW5EYXRlLCBcIlktbS1kXCIpO1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubWF4RGF0ZSlcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQubWF4ID0gc2VsZi5mb3JtYXREYXRlKHNlbGYuY29uZmlnLm1heERhdGUsIFwiWS1tLWRcIik7XG4gICAgICAgIGlmIChzZWxmLmlucHV0LmdldEF0dHJpYnV0ZShcInN0ZXBcIikpXG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnN0ZXAgPSBTdHJpbmcoc2VsZi5pbnB1dC5nZXRBdHRyaWJ1dGUoXCJzdGVwXCIpKTtcbiAgICAgICAgc2VsZi5pbnB1dC50eXBlID0gXCJoaWRkZW5cIjtcbiAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQudHlwZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5pbnB1dC5wYXJlbnROb2RlKVxuICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZi5tb2JpbGVJbnB1dCwgc2VsZi5pbnB1dC5uZXh0U2libGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7IH1cbiAgICAgICAgYmluZChzZWxmLm1vYmlsZUlucHV0LCBcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5zZXREYXRlKGdldEV2ZW50VGFyZ2V0KGUpLnZhbHVlLCBmYWxzZSwgc2VsZi5tb2JpbGVGb3JtYXRTdHIpO1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DaGFuZ2VcIik7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNsb3NlXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9nZ2xlKGUpIHtcbiAgICAgICAgaWYgKHNlbGYuaXNPcGVuID09PSB0cnVlKVxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY2xvc2UoKTtcbiAgICAgICAgc2VsZi5vcGVuKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cmlnZ2VyRXZlbnQoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBob29rcyA9IHNlbGYuY29uZmlnW2V2ZW50XTtcbiAgICAgICAgaWYgKGhvb2tzICE9PSB1bmRlZmluZWQgJiYgaG9va3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGhvb2tzW2ldICYmIGkgPCBob29rcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBob29rc1tpXShzZWxmLnNlbGVjdGVkRGF0ZXMsIHNlbGYuaW5wdXQudmFsdWUsIHNlbGYsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudCA9PT0gXCJvbkNoYW5nZVwiKSB7XG4gICAgICAgICAgICBzZWxmLmlucHV0LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoXCJjaGFuZ2VcIikpO1xuICAgICAgICAgICAgc2VsZi5pbnB1dC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KFwiaW5wdXRcIikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KG5hbWUpIHtcbiAgICAgICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xuICAgICAgICBlLmluaXRFdmVudChuYW1lLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzRGF0ZVNlbGVjdGVkKGRhdGUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZERhdGUgPSBzZWxmLnNlbGVjdGVkRGF0ZXNbaV07XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWREYXRlIGluc3RhbmNlb2YgRGF0ZSAmJlxuICAgICAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhzZWxlY3RlZERhdGUsIGRhdGUpID09PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiICsgaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzRGF0ZUluUmFuZ2UoZGF0ZSkge1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSAhPT0gXCJyYW5nZVwiIHx8IHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPCAyKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gKGNvbXBhcmVEYXRlcyhkYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0pID49IDAgJiZcbiAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhkYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMV0pIDw9IDApO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCkge1xuICAgICAgICBpZiAoc2VsZi5jb25maWcubm9DYWxlbmRhciB8fCBzZWxmLmlzTW9iaWxlIHx8ICFzZWxmLm1vbnRoTmF2KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzZWxmLnllYXJFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh5ZWFyRWxlbWVudCwgaSkge1xuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCwgMSk7XG4gICAgICAgICAgICBkLnNldE1vbnRoKHNlbGYuY3VycmVudE1vbnRoICsgaSk7XG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuc2hvd01vbnRocyA+IDEgfHxcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tb250aFNlbGVjdG9yVHlwZSA9PT0gXCJzdGF0aWNcIikge1xuICAgICAgICAgICAgICAgIHNlbGYubW9udGhFbGVtZW50c1tpXS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgICAgIG1vbnRoVG9TdHIoZC5nZXRNb250aCgpLCBzZWxmLmNvbmZpZy5zaG9ydGhhbmRDdXJyZW50TW9udGgsIHNlbGYubDEwbikgKyBcIiBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYubW9udGhzRHJvcGRvd25Db250YWluZXIudmFsdWUgPSBkLmdldE1vbnRoKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHllYXJFbGVtZW50LnZhbHVlID0gZC5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLl9oaWRlUHJldk1vbnRoQXJyb3cgPVxuICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgKHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKVxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY3VycmVudE1vbnRoIDw9IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0TW9udGgoKVxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY3VycmVudFllYXIgPCBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICBzZWxmLl9oaWRlTmV4dE1vbnRoQXJyb3cgPVxuICAgICAgICAgICAgc2VsZi5jb25maWcubWF4RGF0ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgKHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKVxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY3VycmVudE1vbnRoICsgMSA+IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TW9udGgoKVxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY3VycmVudFllYXIgPiBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXREYXRlU3RyKHNwZWNpZmljRm9ybWF0KSB7XG4gICAgICAgIHZhciBmb3JtYXQgPSBzcGVjaWZpY0Zvcm1hdCB8fFxuICAgICAgICAgICAgKHNlbGYuY29uZmlnLmFsdElucHV0ID8gc2VsZi5jb25maWcuYWx0Rm9ybWF0IDogc2VsZi5jb25maWcuZGF0ZUZvcm1hdCk7XG4gICAgICAgIHJldHVybiBzZWxmLnNlbGVjdGVkRGF0ZXNcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGRPYmopIHsgcmV0dXJuIHNlbGYuZm9ybWF0RGF0ZShkT2JqLCBmb3JtYXQpOyB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZCwgaSwgYXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jb25maWcubW9kZSAhPT0gXCJyYW5nZVwiIHx8XG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcuZW5hYmxlVGltZSB8fFxuICAgICAgICAgICAgICAgIGFyci5pbmRleE9mKGQpID09PSBpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oc2VsZi5jb25maWcubW9kZSAhPT0gXCJyYW5nZVwiXG4gICAgICAgICAgICA/IHNlbGYuY29uZmlnLmNvbmp1bmN0aW9uXG4gICAgICAgICAgICA6IHNlbGYubDEwbi5yYW5nZVNlcGFyYXRvcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKHRyaWdnZXJDaGFuZ2UpIHtcbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UgPT09IHZvaWQgMCkgeyB0cmlnZ2VyQ2hhbmdlID0gdHJ1ZTsgfVxuICAgICAgICBpZiAoc2VsZi5tb2JpbGVJbnB1dCAhPT0gdW5kZWZpbmVkICYmIHNlbGYubW9iaWxlRm9ybWF0U3RyKSB7XG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnZhbHVlID1cbiAgICAgICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5mb3JtYXREYXRlKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLCBzZWxmLm1vYmlsZUZvcm1hdFN0cilcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuaW5wdXQudmFsdWUgPSBnZXREYXRlU3RyKHNlbGYuY29uZmlnLmRhdGVGb3JtYXQpO1xuICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LnZhbHVlID0gZ2V0RGF0ZVN0cihzZWxmLmNvbmZpZy5hbHRGb3JtYXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlICE9PSBmYWxzZSlcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uVmFsdWVVcGRhdGVcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uTW9udGhOYXZDbGljayhlKSB7XG4gICAgICAgIHZhciBldmVudFRhcmdldCA9IGdldEV2ZW50VGFyZ2V0KGUpO1xuICAgICAgICB2YXIgaXNQcmV2TW9udGggPSBzZWxmLnByZXZNb250aE5hdi5jb250YWlucyhldmVudFRhcmdldCk7XG4gICAgICAgIHZhciBpc05leHRNb250aCA9IHNlbGYubmV4dE1vbnRoTmF2LmNvbnRhaW5zKGV2ZW50VGFyZ2V0KTtcbiAgICAgICAgaWYgKGlzUHJldk1vbnRoIHx8IGlzTmV4dE1vbnRoKSB7XG4gICAgICAgICAgICBjaGFuZ2VNb250aChpc1ByZXZNb250aCA/IC0xIDogMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VsZi55ZWFyRWxlbWVudHMuaW5kZXhPZihldmVudFRhcmdldCkgPj0gMCkge1xuICAgICAgICAgICAgZXZlbnRUYXJnZXQuc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXJyb3dVcFwiKSkge1xuICAgICAgICAgICAgc2VsZi5jaGFuZ2VZZWFyKHNlbGYuY3VycmVudFllYXIgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhcnJvd0Rvd25cIikpIHtcbiAgICAgICAgICAgIHNlbGYuY2hhbmdlWWVhcihzZWxmLmN1cnJlbnRZZWFyIC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdGltZVdyYXBwZXIoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBpc0tleURvd24gPSBlLnR5cGUgPT09IFwia2V5ZG93blwiLCBldmVudFRhcmdldCA9IGdldEV2ZW50VGFyZ2V0KGUpLCBpbnB1dCA9IGV2ZW50VGFyZ2V0O1xuICAgICAgICBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQgJiYgZXZlbnRUYXJnZXQgPT09IHNlbGYuYW1QTSkge1xuICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICBzZWxmLmwxMG4uYW1QTVtpbnQoc2VsZi5hbVBNLnRleHRDb250ZW50ID09PSBzZWxmLmwxMG4uYW1QTVswXSldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtaW4gPSBwYXJzZUZsb2F0KGlucHV0LmdldEF0dHJpYnV0ZShcIm1pblwiKSksIG1heCA9IHBhcnNlRmxvYXQoaW5wdXQuZ2V0QXR0cmlidXRlKFwibWF4XCIpKSwgc3RlcCA9IHBhcnNlRmxvYXQoaW5wdXQuZ2V0QXR0cmlidXRlKFwic3RlcFwiKSksIGN1clZhbHVlID0gcGFyc2VJbnQoaW5wdXQudmFsdWUsIDEwKSwgZGVsdGEgPSBlLmRlbHRhIHx8XG4gICAgICAgICAgICAoaXNLZXlEb3duID8gKGUud2hpY2ggPT09IDM4ID8gMSA6IC0xKSA6IDApO1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSBjdXJWYWx1ZSArIHN0ZXAgKiBkZWx0YTtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dC52YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpbnB1dC52YWx1ZS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIHZhciBpc0hvdXJFbGVtID0gaW5wdXQgPT09IHNlbGYuaG91ckVsZW1lbnQsIGlzTWludXRlRWxlbSA9IGlucHV0ID09PSBzZWxmLm1pbnV0ZUVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgPCBtaW4pIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgIG1heCArXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSArXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnQoIWlzSG91ckVsZW0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChpbnQoaXNIb3VyRWxlbSkgJiYgaW50KCFzZWxmLmFtUE0pKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNNaW51dGVFbGVtKVxuICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnROdW1JbnB1dCh1bmRlZmluZWQsIC0xLCBzZWxmLmhvdXJFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5ld1ZhbHVlID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICBpbnB1dCA9PT0gc2VsZi5ob3VyRWxlbWVudCA/IG5ld1ZhbHVlIC0gbWF4IC0gaW50KCFzZWxmLmFtUE0pIDogbWluO1xuICAgICAgICAgICAgICAgIGlmIChpc01pbnV0ZUVsZW0pXG4gICAgICAgICAgICAgICAgICAgIGluY3JlbWVudE51bUlucHV0KHVuZGVmaW5lZCwgMSwgc2VsZi5ob3VyRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5hbVBNICYmXG4gICAgICAgICAgICAgICAgaXNIb3VyRWxlbSAmJlxuICAgICAgICAgICAgICAgIChzdGVwID09PSAxXG4gICAgICAgICAgICAgICAgICAgID8gbmV3VmFsdWUgKyBjdXJWYWx1ZSA9PT0gMjNcbiAgICAgICAgICAgICAgICAgICAgOiBNYXRoLmFicyhuZXdWYWx1ZSAtIGN1clZhbHVlKSA+IHN0ZXApKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sMTBuLmFtUE1baW50KHNlbGYuYW1QTS50ZXh0Q29udGVudCA9PT0gc2VsZi5sMTBuLmFtUE1bMF0pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gcGFkKG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbml0KCk7XG4gICAgcmV0dXJuIHNlbGY7XG59XG5mdW5jdGlvbiBfZmxhdHBpY2tyKG5vZGVMaXN0LCBjb25maWcpIHtcbiAgICB2YXIgbm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgICAgICAgLmNhbGwobm9kZUxpc3QpXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggaW5zdGFuY2VvZiBIVE1MRWxlbWVudDsgfSk7XG4gICAgdmFyIGluc3RhbmNlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtZnAtb21pdFwiKSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGlmIChub2RlLl9mbGF0cGlja3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG5vZGUuX2ZsYXRwaWNrci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgbm9kZS5fZmxhdHBpY2tyID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5fZmxhdHBpY2tyID0gRmxhdHBpY2tySW5zdGFuY2Uobm9kZSwgY29uZmlnIHx8IHt9KTtcbiAgICAgICAgICAgIGluc3RhbmNlcy5wdXNoKG5vZGUuX2ZsYXRwaWNrcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlcy5sZW5ndGggPT09IDEgPyBpbnN0YW5jZXNbMF0gOiBpbnN0YW5jZXM7XG59XG5pZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgdHlwZW9mIEhUTUxDb2xsZWN0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgdHlwZW9mIE5vZGVMaXN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLmZsYXRwaWNrciA9IE5vZGVMaXN0LnByb3RvdHlwZS5mbGF0cGlja3IgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBfZmxhdHBpY2tyKHRoaXMsIGNvbmZpZyk7XG4gICAgfTtcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuZmxhdHBpY2tyID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcihbdGhpc10sIGNvbmZpZyk7XG4gICAgfTtcbn1cbnZhciBmbGF0cGlja3IgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbmZpZykge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIF9mbGF0cGlja3Iod2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLCBjb25maWcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIF9mbGF0cGlja3IoW3NlbGVjdG9yXSwgY29uZmlnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBfZmxhdHBpY2tyKHNlbGVjdG9yLCBjb25maWcpO1xuICAgIH1cbn07XG5mbGF0cGlja3IuZGVmYXVsdENvbmZpZyA9IHt9O1xuZmxhdHBpY2tyLmwxMG5zID0ge1xuICAgIGVuOiBfX2Fzc2lnbih7fSwgRW5nbGlzaCksXG4gICAgZGVmYXVsdDogX19hc3NpZ24oe30sIEVuZ2xpc2gpLFxufTtcbmZsYXRwaWNrci5sb2NhbGl6ZSA9IGZ1bmN0aW9uIChsMTBuKSB7XG4gICAgZmxhdHBpY2tyLmwxMG5zLmRlZmF1bHQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZmxhdHBpY2tyLmwxMG5zLmRlZmF1bHQpLCBsMTBuKTtcbn07XG5mbGF0cGlja3Iuc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgZmxhdHBpY2tyLmRlZmF1bHRDb25maWcgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZmxhdHBpY2tyLmRlZmF1bHRDb25maWcpLCBjb25maWcpO1xufTtcbmZsYXRwaWNrci5wYXJzZURhdGUgPSBjcmVhdGVEYXRlUGFyc2VyKHt9KTtcbmZsYXRwaWNrci5mb3JtYXREYXRlID0gY3JlYXRlRGF0ZUZvcm1hdHRlcih7fSk7XG5mbGF0cGlja3IuY29tcGFyZURhdGVzID0gY29tcGFyZURhdGVzO1xuaWYgKHR5cGVvZiBqUXVlcnkgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGpRdWVyeS5mbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGpRdWVyeS5mbi5mbGF0cGlja3IgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBfZmxhdHBpY2tyKHRoaXMsIGNvbmZpZyk7XG4gICAgfTtcbn1cbkRhdGUucHJvdG90eXBlLmZwX2luY3IgPSBmdW5jdGlvbiAoZGF5cykge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgdGhpcy5nZXREYXRlKCkgKyAodHlwZW9mIGRheXMgPT09IFwic3RyaW5nXCIgPyBwYXJzZUludChkYXlzLCAxMCkgOiBkYXlzKSk7XG59O1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW5kb3cuZmxhdHBpY2tyID0gZmxhdHBpY2tyO1xufVxuZXhwb3J0IGRlZmF1bHQgZmxhdHBpY2tyO1xuIiwiZXhwb3J0IHZhciBlbmdsaXNoID0ge1xuICAgIHdlZWtkYXlzOiB7XG4gICAgICAgIHNob3J0aGFuZDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICAgICAgICBsb25naGFuZDogW1xuICAgICAgICAgICAgXCJTdW5kYXlcIixcbiAgICAgICAgICAgIFwiTW9uZGF5XCIsXG4gICAgICAgICAgICBcIlR1ZXNkYXlcIixcbiAgICAgICAgICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgICAgICAgICBcIlRodXJzZGF5XCIsXG4gICAgICAgICAgICBcIkZyaWRheVwiLFxuICAgICAgICAgICAgXCJTYXR1cmRheVwiLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgbW9udGhzOiB7XG4gICAgICAgIHNob3J0aGFuZDogW1xuICAgICAgICAgICAgXCJKYW5cIixcbiAgICAgICAgICAgIFwiRmViXCIsXG4gICAgICAgICAgICBcIk1hclwiLFxuICAgICAgICAgICAgXCJBcHJcIixcbiAgICAgICAgICAgIFwiTWF5XCIsXG4gICAgICAgICAgICBcIkp1blwiLFxuICAgICAgICAgICAgXCJKdWxcIixcbiAgICAgICAgICAgIFwiQXVnXCIsXG4gICAgICAgICAgICBcIlNlcFwiLFxuICAgICAgICAgICAgXCJPY3RcIixcbiAgICAgICAgICAgIFwiTm92XCIsXG4gICAgICAgICAgICBcIkRlY1wiLFxuICAgICAgICBdLFxuICAgICAgICBsb25naGFuZDogW1xuICAgICAgICAgICAgXCJKYW51YXJ5XCIsXG4gICAgICAgICAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgICAgICAgICBcIk1hcmNoXCIsXG4gICAgICAgICAgICBcIkFwcmlsXCIsXG4gICAgICAgICAgICBcIk1heVwiLFxuICAgICAgICAgICAgXCJKdW5lXCIsXG4gICAgICAgICAgICBcIkp1bHlcIixcbiAgICAgICAgICAgIFwiQXVndXN0XCIsXG4gICAgICAgICAgICBcIlNlcHRlbWJlclwiLFxuICAgICAgICAgICAgXCJPY3RvYmVyXCIsXG4gICAgICAgICAgICBcIk5vdmVtYmVyXCIsXG4gICAgICAgICAgICBcIkRlY2VtYmVyXCIsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBkYXlzSW5Nb250aDogWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdLFxuICAgIGZpcnN0RGF5T2ZXZWVrOiAwLFxuICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudGgpIHtcbiAgICAgICAgdmFyIHMgPSBudGggJSAxMDA7XG4gICAgICAgIGlmIChzID4gMyAmJiBzIDwgMjEpXG4gICAgICAgICAgICByZXR1cm4gXCJ0aFwiO1xuICAgICAgICBzd2l0Y2ggKHMgJSAxMCkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcInN0XCI7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibmRcIjtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJyZFwiO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0aFwiO1xuICAgICAgICB9XG4gICAgfSxcbiAgICByYW5nZVNlcGFyYXRvcjogXCIgdG8gXCIsXG4gICAgd2Vla0FiYnJldmlhdGlvbjogXCJXa1wiLFxuICAgIHNjcm9sbFRpdGxlOiBcIlNjcm9sbCB0byBpbmNyZW1lbnRcIixcbiAgICB0b2dnbGVUaXRsZTogXCJDbGljayB0byB0b2dnbGVcIixcbiAgICBhbVBNOiBbXCJBTVwiLCBcIlBNXCJdLFxuICAgIHllYXJBcmlhTGFiZWw6IFwiWWVhclwiLFxuICAgIG1vbnRoQXJpYUxhYmVsOiBcIk1vbnRoXCIsXG4gICAgaG91ckFyaWFMYWJlbDogXCJIb3VyXCIsXG4gICAgbWludXRlQXJpYUxhYmVsOiBcIk1pbnV0ZVwiLFxuICAgIHRpbWVfMjRocjogZmFsc2UsXG59O1xuZXhwb3J0IGRlZmF1bHQgZW5nbGlzaDtcbiIsImV4cG9ydCB2YXIgSE9PS1MgPSBbXG4gICAgXCJvbkNoYW5nZVwiLFxuICAgIFwib25DbG9zZVwiLFxuICAgIFwib25EYXlDcmVhdGVcIixcbiAgICBcIm9uRGVzdHJveVwiLFxuICAgIFwib25LZXlEb3duXCIsXG4gICAgXCJvbk1vbnRoQ2hhbmdlXCIsXG4gICAgXCJvbk9wZW5cIixcbiAgICBcIm9uUGFyc2VDb25maWdcIixcbiAgICBcIm9uUmVhZHlcIixcbiAgICBcIm9uVmFsdWVVcGRhdGVcIixcbiAgICBcIm9uWWVhckNoYW5nZVwiLFxuICAgIFwib25QcmVDYWxlbmRhclBvc2l0aW9uXCIsXG5dO1xuZXhwb3J0IHZhciBkZWZhdWx0cyA9IHtcbiAgICBfZGlzYWJsZTogW10sXG4gICAgYWxsb3dJbnB1dDogZmFsc2UsXG4gICAgYWxsb3dJbnZhbGlkUHJlbG9hZDogZmFsc2UsXG4gICAgYWx0Rm9ybWF0OiBcIkYgaiwgWVwiLFxuICAgIGFsdElucHV0OiBmYWxzZSxcbiAgICBhbHRJbnB1dENsYXNzOiBcImZvcm0tY29udHJvbCBpbnB1dFwiLFxuICAgIGFuaW1hdGU6IHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIikgPT09IC0xLFxuICAgIGFyaWFEYXRlRm9ybWF0OiBcIkYgaiwgWVwiLFxuICAgIGF1dG9GaWxsRGVmYXVsdFRpbWU6IHRydWUsXG4gICAgY2xpY2tPcGVuczogdHJ1ZSxcbiAgICBjbG9zZU9uU2VsZWN0OiB0cnVlLFxuICAgIGNvbmp1bmN0aW9uOiBcIiwgXCIsXG4gICAgZGF0ZUZvcm1hdDogXCJZLW0tZFwiLFxuICAgIGRlZmF1bHRIb3VyOiAxMixcbiAgICBkZWZhdWx0TWludXRlOiAwLFxuICAgIGRlZmF1bHRTZWNvbmRzOiAwLFxuICAgIGRpc2FibGU6IFtdLFxuICAgIGRpc2FibGVNb2JpbGU6IGZhbHNlLFxuICAgIGVuYWJsZVNlY29uZHM6IGZhbHNlLFxuICAgIGVuYWJsZVRpbWU6IGZhbHNlLFxuICAgIGVycm9ySGFuZGxlcjogZnVuY3Rpb24gKGVycikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZS53YXJuKGVycik7XG4gICAgfSxcbiAgICBnZXRXZWVrOiBmdW5jdGlvbiAoZ2l2ZW5EYXRlKSB7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoZ2l2ZW5EYXRlLmdldFRpbWUoKSk7XG4gICAgICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDMgLSAoKGRhdGUuZ2V0RGF5KCkgKyA2KSAlIDcpKTtcbiAgICAgICAgdmFyIHdlZWsxID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCAwLCA0KTtcbiAgICAgICAgcmV0dXJuICgxICtcbiAgICAgICAgICAgIE1hdGgucm91bmQoKChkYXRlLmdldFRpbWUoKSAtIHdlZWsxLmdldFRpbWUoKSkgLyA4NjQwMDAwMCAtXG4gICAgICAgICAgICAgICAgMyArXG4gICAgICAgICAgICAgICAgKCh3ZWVrMS5nZXREYXkoKSArIDYpICUgNykpIC9cbiAgICAgICAgICAgICAgICA3KSk7XG4gICAgfSxcbiAgICBob3VySW5jcmVtZW50OiAxLFxuICAgIGlnbm9yZWRGb2N1c0VsZW1lbnRzOiBbXSxcbiAgICBpbmxpbmU6IGZhbHNlLFxuICAgIGxvY2FsZTogXCJkZWZhdWx0XCIsXG4gICAgbWludXRlSW5jcmVtZW50OiA1LFxuICAgIG1vZGU6IFwic2luZ2xlXCIsXG4gICAgbW9udGhTZWxlY3RvclR5cGU6IFwiZHJvcGRvd25cIixcbiAgICBuZXh0QXJyb3c6IFwiPHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHZpZXdCb3g9JzAgMCAxNyAxNyc+PGc+PC9nPjxwYXRoIGQ9J00xMy4yMDcgOC40NzJsLTcuODU0IDcuODU0LTAuNzA3LTAuNzA3IDcuMTQ2LTcuMTQ2LTcuMTQ2LTcuMTQ4IDAuNzA3LTAuNzA3IDcuODU0IDcuODU0eicgLz48L3N2Zz5cIixcbiAgICBub0NhbGVuZGFyOiBmYWxzZSxcbiAgICBub3c6IG5ldyBEYXRlKCksXG4gICAgb25DaGFuZ2U6IFtdLFxuICAgIG9uQ2xvc2U6IFtdLFxuICAgIG9uRGF5Q3JlYXRlOiBbXSxcbiAgICBvbkRlc3Ryb3k6IFtdLFxuICAgIG9uS2V5RG93bjogW10sXG4gICAgb25Nb250aENoYW5nZTogW10sXG4gICAgb25PcGVuOiBbXSxcbiAgICBvblBhcnNlQ29uZmlnOiBbXSxcbiAgICBvblJlYWR5OiBbXSxcbiAgICBvblZhbHVlVXBkYXRlOiBbXSxcbiAgICBvblllYXJDaGFuZ2U6IFtdLFxuICAgIG9uUHJlQ2FsZW5kYXJQb3NpdGlvbjogW10sXG4gICAgcGx1Z2luczogW10sXG4gICAgcG9zaXRpb246IFwiYXV0b1wiLFxuICAgIHBvc2l0aW9uRWxlbWVudDogdW5kZWZpbmVkLFxuICAgIHByZXZBcnJvdzogXCI8c3ZnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgdmlld0JveD0nMCAwIDE3IDE3Jz48Zz48L2c+PHBhdGggZD0nTTUuMjA3IDguNDcxbDcuMTQ2IDcuMTQ3LTAuNzA3IDAuNzA3LTcuODUzLTcuODU0IDcuODU0LTcuODUzIDAuNzA3IDAuNzA3LTcuMTQ3IDcuMTQ2eicgLz48L3N2Zz5cIixcbiAgICBzaG9ydGhhbmRDdXJyZW50TW9udGg6IGZhbHNlLFxuICAgIHNob3dNb250aHM6IDEsXG4gICAgc3RhdGljOiBmYWxzZSxcbiAgICB0aW1lXzI0aHI6IGZhbHNlLFxuICAgIHdlZWtOdW1iZXJzOiBmYWxzZSxcbiAgICB3cmFwOiBmYWxzZSxcbn07XG4iLCJpbXBvcnQgeyB0b2tlblJlZ2V4LCByZXZGb3JtYXQsIGZvcm1hdHMsIH0gZnJvbSBcIi4vZm9ybWF0dGluZ1wiO1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tIFwiLi4vdHlwZXMvb3B0aW9uc1wiO1xuaW1wb3J0IHsgZW5nbGlzaCB9IGZyb20gXCIuLi9sMTBuL2RlZmF1bHRcIjtcbmV4cG9ydCB2YXIgY3JlYXRlRGF0ZUZvcm1hdHRlciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBfYiA9IF9hLmNvbmZpZywgY29uZmlnID0gX2IgPT09IHZvaWQgMCA/IGRlZmF1bHRzIDogX2IsIF9jID0gX2EubDEwbiwgbDEwbiA9IF9jID09PSB2b2lkIDAgPyBlbmdsaXNoIDogX2MsIF9kID0gX2EuaXNNb2JpbGUsIGlzTW9iaWxlID0gX2QgPT09IHZvaWQgMCA/IGZhbHNlIDogX2Q7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRlT2JqLCBmcm10LCBvdmVycmlkZUxvY2FsZSkge1xuICAgICAgICB2YXIgbG9jYWxlID0gb3ZlcnJpZGVMb2NhbGUgfHwgbDEwbjtcbiAgICAgICAgaWYgKGNvbmZpZy5mb3JtYXREYXRlICE9PSB1bmRlZmluZWQgJiYgIWlzTW9iaWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uZmlnLmZvcm1hdERhdGUoZGF0ZU9iaiwgZnJtdCwgbG9jYWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJtdFxuICAgICAgICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChjLCBpLCBhcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRzW2NdICYmIGFycltpIC0gMV0gIT09IFwiXFxcXFwiXG4gICAgICAgICAgICAgICAgPyBmb3JtYXRzW2NdKGRhdGVPYmosIGxvY2FsZSwgY29uZmlnKVxuICAgICAgICAgICAgICAgIDogYyAhPT0gXCJcXFxcXCJcbiAgICAgICAgICAgICAgICAgICAgPyBjXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIjtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKFwiXCIpO1xuICAgIH07XG59O1xuZXhwb3J0IHZhciBjcmVhdGVEYXRlUGFyc2VyID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIF9iID0gX2EuY29uZmlnLCBjb25maWcgPSBfYiA9PT0gdm9pZCAwID8gZGVmYXVsdHMgOiBfYiwgX2MgPSBfYS5sMTBuLCBsMTBuID0gX2MgPT09IHZvaWQgMCA/IGVuZ2xpc2ggOiBfYztcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGUsIGdpdmVuRm9ybWF0LCB0aW1lbGVzcywgY3VzdG9tTG9jYWxlKSB7XG4gICAgICAgIGlmIChkYXRlICE9PSAwICYmICFkYXRlKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGxvY2FsZSA9IGN1c3RvbUxvY2FsZSB8fCBsMTBuO1xuICAgICAgICB2YXIgcGFyc2VkRGF0ZTtcbiAgICAgICAgdmFyIGRhdGVPcmlnID0gZGF0ZTtcbiAgICAgICAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGUgIT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgIGRhdGUudG9GaXhlZCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdmFyIGZvcm1hdCA9IGdpdmVuRm9ybWF0IHx8IChjb25maWcgfHwgZGVmYXVsdHMpLmRhdGVGb3JtYXQ7XG4gICAgICAgICAgICB2YXIgZGF0ZXN0ciA9IFN0cmluZyhkYXRlKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoZGF0ZXN0ciA9PT0gXCJ0b2RheVwiKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgdGltZWxlc3MgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29uZmlnICYmIGNvbmZpZy5wYXJzZURhdGUpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWREYXRlID0gY29uZmlnLnBhcnNlRGF0ZShkYXRlLCBmb3JtYXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoL1okLy50ZXN0KGRhdGVzdHIpIHx8XG4gICAgICAgICAgICAgICAgL0dNVCQvLnRlc3QoZGF0ZXN0cikpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWREYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlZCA9IHZvaWQgMCwgb3BzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG1hdGNoSW5kZXggPSAwLCByZWdleFN0ciA9IFwiXCI7IGkgPCBmb3JtYXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuID0gZm9ybWF0W2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNCYWNrU2xhc2ggPSB0b2tlbiA9PT0gXCJcXFxcXCI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkID0gZm9ybWF0W2kgLSAxXSA9PT0gXCJcXFxcXCIgfHwgaXNCYWNrU2xhc2g7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlblJlZ2V4W3Rva2VuXSAmJiAhZXNjYXBlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXhTdHIgKz0gdG9rZW5SZWdleFt0b2tlbl07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBuZXcgUmVnRXhwKHJlZ2V4U3RyKS5leGVjKGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoICYmIChtYXRjaGVkID0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHNbdG9rZW4gIT09IFwiWVwiID8gXCJwdXNoXCIgOiBcInVuc2hpZnRcIl0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogcmV2Rm9ybWF0W3Rva2VuXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsOiBtYXRjaFsrK21hdGNoSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc0JhY2tTbGFzaClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4U3RyICs9IFwiLlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJzZWREYXRlID1cbiAgICAgICAgICAgICAgICAgICAgIWNvbmZpZyB8fCAhY29uZmlnLm5vQ2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCAwLCAxLCAwLCAwLCAwLCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApKTtcbiAgICAgICAgICAgICAgICBvcHMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gX2EuZm4sIHZhbCA9IF9hLnZhbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwYXJzZWREYXRlID0gZm4ocGFyc2VkRGF0ZSwgdmFsLCBsb2NhbGUpIHx8IHBhcnNlZERhdGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHBhcnNlZERhdGUgPSBtYXRjaGVkID8gcGFyc2VkRGF0ZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIShwYXJzZWREYXRlIGluc3RhbmNlb2YgRGF0ZSAmJiAhaXNOYU4ocGFyc2VkRGF0ZS5nZXRUaW1lKCkpKSkge1xuICAgICAgICAgICAgY29uZmlnLmVycm9ySGFuZGxlcihuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGUgcHJvdmlkZWQ6IFwiICsgZGF0ZU9yaWcpKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVsZXNzID09PSB0cnVlKVxuICAgICAgICAgICAgcGFyc2VkRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlZERhdGU7XG4gICAgfTtcbn07XG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZURhdGVzKGRhdGUxLCBkYXRlMiwgdGltZWxlc3MpIHtcbiAgICBpZiAodGltZWxlc3MgPT09IHZvaWQgMCkgeyB0aW1lbGVzcyA9IHRydWU7IH1cbiAgICBpZiAodGltZWxlc3MgIT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiAobmV3IERhdGUoZGF0ZTEuZ2V0VGltZSgpKS5zZXRIb3VycygwLCAwLCAwLCAwKSAtXG4gICAgICAgICAgICBuZXcgRGF0ZShkYXRlMi5nZXRUaW1lKCkpLnNldEhvdXJzKDAsIDAsIDAsIDApKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGUxLmdldFRpbWUoKSAtIGRhdGUyLmdldFRpbWUoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlVGltZXMoZGF0ZTEsIGRhdGUyKSB7XG4gICAgcmV0dXJuICgzNjAwICogKGRhdGUxLmdldEhvdXJzKCkgLSBkYXRlMi5nZXRIb3VycygpKSArXG4gICAgICAgIDYwICogKGRhdGUxLmdldE1pbnV0ZXMoKSAtIGRhdGUyLmdldE1pbnV0ZXMoKSkgK1xuICAgICAgICBkYXRlMS5nZXRTZWNvbmRzKCkgLVxuICAgICAgICBkYXRlMi5nZXRTZWNvbmRzKCkpO1xufVxuZXhwb3J0IHZhciBpc0JldHdlZW4gPSBmdW5jdGlvbiAodHMsIHRzMSwgdHMyKSB7XG4gICAgcmV0dXJuIHRzID4gTWF0aC5taW4odHMxLCB0czIpICYmIHRzIDwgTWF0aC5tYXgodHMxLCB0czIpO1xufTtcbmV4cG9ydCB2YXIgY2FsY3VsYXRlU2Vjb25kc1NpbmNlTWlkbmlnaHQgPSBmdW5jdGlvbiAoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgICByZXR1cm4gaG91cnMgKiAzNjAwICsgbWludXRlcyAqIDYwICsgc2Vjb25kcztcbn07XG5leHBvcnQgdmFyIHBhcnNlU2Vjb25kcyA9IGZ1bmN0aW9uIChzZWNvbmRzU2luY2VNaWRuaWdodCkge1xuICAgIHZhciBob3VycyA9IE1hdGguZmxvb3Ioc2Vjb25kc1NpbmNlTWlkbmlnaHQgLyAzNjAwKSwgbWludXRlcyA9IChzZWNvbmRzU2luY2VNaWRuaWdodCAtIGhvdXJzICogMzYwMCkgLyA2MDtcbiAgICByZXR1cm4gW2hvdXJzLCBtaW51dGVzLCBzZWNvbmRzU2luY2VNaWRuaWdodCAtIGhvdXJzICogMzYwMCAtIG1pbnV0ZXMgKiA2MF07XG59O1xuZXhwb3J0IHZhciBkdXJhdGlvbiA9IHtcbiAgICBEQVk6IDg2NDAwMDAwLFxufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0SG91cnMoY29uZmlnKSB7XG4gICAgdmFyIGhvdXJzID0gY29uZmlnLmRlZmF1bHRIb3VyO1xuICAgIHZhciBtaW51dGVzID0gY29uZmlnLmRlZmF1bHRNaW51dGU7XG4gICAgdmFyIHNlY29uZHMgPSBjb25maWcuZGVmYXVsdFNlY29uZHM7XG4gICAgaWYgKGNvbmZpZy5taW5EYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIG1pbkhvdXIgPSBjb25maWcubWluRGF0ZS5nZXRIb3VycygpO1xuICAgICAgICB2YXIgbWluTWludXRlcyA9IGNvbmZpZy5taW5EYXRlLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgdmFyIG1pblNlY29uZHMgPSBjb25maWcubWluRGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgICAgIGlmIChob3VycyA8IG1pbkhvdXIpIHtcbiAgICAgICAgICAgIGhvdXJzID0gbWluSG91cjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG91cnMgPT09IG1pbkhvdXIgJiYgbWludXRlcyA8IG1pbk1pbnV0ZXMpIHtcbiAgICAgICAgICAgIG1pbnV0ZXMgPSBtaW5NaW51dGVzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChob3VycyA9PT0gbWluSG91ciAmJiBtaW51dGVzID09PSBtaW5NaW51dGVzICYmIHNlY29uZHMgPCBtaW5TZWNvbmRzKVxuICAgICAgICAgICAgc2Vjb25kcyA9IGNvbmZpZy5taW5EYXRlLmdldFNlY29uZHMoKTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5tYXhEYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIG1heEhyID0gY29uZmlnLm1heERhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgdmFyIG1heE1pbnV0ZXMgPSBjb25maWcubWF4RGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgIGhvdXJzID0gTWF0aC5taW4oaG91cnMsIG1heEhyKTtcbiAgICAgICAgaWYgKGhvdXJzID09PSBtYXhIcilcbiAgICAgICAgICAgIG1pbnV0ZXMgPSBNYXRoLm1pbihtYXhNaW51dGVzLCBtaW51dGVzKTtcbiAgICAgICAgaWYgKGhvdXJzID09PSBtYXhIciAmJiBtaW51dGVzID09PSBtYXhNaW51dGVzKVxuICAgICAgICAgICAgc2Vjb25kcyA9IGNvbmZpZy5tYXhEYXRlLmdldFNlY29uZHMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgaG91cnM6IGhvdXJzLCBtaW51dGVzOiBtaW51dGVzLCBzZWNvbmRzOiBzZWNvbmRzIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbSwgY2xhc3NOYW1lLCBib29sKSB7XG4gICAgaWYgKGJvb2wgPT09IHRydWUpXG4gICAgICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgY2xhc3NOYW1lLCBjb250ZW50KSB7XG4gICAgdmFyIGUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSB8fCBcIlwiO1xuICAgIGNvbnRlbnQgPSBjb250ZW50IHx8IFwiXCI7XG4gICAgZS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgaWYgKGNvbnRlbnQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgZS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgcmV0dXJuIGU7XG59XG5leHBvcnQgZnVuY3Rpb24gY2xlYXJOb2RlKG5vZGUpIHtcbiAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKVxuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUuZmlyc3RDaGlsZCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZFBhcmVudChub2RlLCBjb25kaXRpb24pIHtcbiAgICBpZiAoY29uZGl0aW9uKG5vZGUpKVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICBlbHNlIGlmIChub2RlLnBhcmVudE5vZGUpXG4gICAgICAgIHJldHVybiBmaW5kUGFyZW50KG5vZGUucGFyZW50Tm9kZSwgY29uZGl0aW9uKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU51bWJlcklucHV0KGlucHV0Q2xhc3NOYW1lLCBvcHRzKSB7XG4gICAgdmFyIHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibnVtSW5wdXRXcmFwcGVyXCIpLCBudW1JbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcIm51bUlucHV0IFwiICsgaW5wdXRDbGFzc05hbWUpLCBhcnJvd1VwID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJhcnJvd1VwXCIpLCBhcnJvd0Rvd24gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImFycm93RG93blwiKTtcbiAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRSA5LjBcIikgPT09IC0xKSB7XG4gICAgICAgIG51bUlucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbnVtSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICBudW1JbnB1dC5wYXR0ZXJuID0gXCJcXFxcZCpcIjtcbiAgICB9XG4gICAgaWYgKG9wdHMgIT09IHVuZGVmaW5lZClcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9wdHMpXG4gICAgICAgICAgICBudW1JbnB1dC5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRzW2tleV0pO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobnVtSW5wdXQpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYXJyb3dVcCk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChhcnJvd0Rvd24pO1xuICAgIHJldHVybiB3cmFwcGVyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50VGFyZ2V0KGV2ZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudC5jb21wb3NlZFBhdGggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyIHBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgICAgICAgIHJldHVybiBwYXRoWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmVudC50YXJnZXQ7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gZXZlbnQudGFyZ2V0O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGludCwgcGFkIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG52YXIgZG9Ob3RoaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9O1xuZXhwb3J0IHZhciBtb250aFRvU3RyID0gZnVuY3Rpb24gKG1vbnRoTnVtYmVyLCBzaG9ydGhhbmQsIGxvY2FsZSkgeyByZXR1cm4gbG9jYWxlLm1vbnRoc1tzaG9ydGhhbmQgPyBcInNob3J0aGFuZFwiIDogXCJsb25naGFuZFwiXVttb250aE51bWJlcl07IH07XG5leHBvcnQgdmFyIHJldkZvcm1hdCA9IHtcbiAgICBEOiBkb05vdGhpbmcsXG4gICAgRjogZnVuY3Rpb24gKGRhdGVPYmosIG1vbnRoTmFtZSwgbG9jYWxlKSB7XG4gICAgICAgIGRhdGVPYmouc2V0TW9udGgobG9jYWxlLm1vbnRocy5sb25naGFuZC5pbmRleE9mKG1vbnRoTmFtZSkpO1xuICAgIH0sXG4gICAgRzogZnVuY3Rpb24gKGRhdGVPYmosIGhvdXIpIHtcbiAgICAgICAgZGF0ZU9iai5zZXRIb3VycygoZGF0ZU9iai5nZXRIb3VycygpID49IDEyID8gMTIgOiAwKSArIHBhcnNlRmxvYXQoaG91cikpO1xuICAgIH0sXG4gICAgSDogZnVuY3Rpb24gKGRhdGVPYmosIGhvdXIpIHtcbiAgICAgICAgZGF0ZU9iai5zZXRIb3VycyhwYXJzZUZsb2F0KGhvdXIpKTtcbiAgICB9LFxuICAgIEo6IGZ1bmN0aW9uIChkYXRlT2JqLCBkYXkpIHtcbiAgICAgICAgZGF0ZU9iai5zZXREYXRlKHBhcnNlRmxvYXQoZGF5KSk7XG4gICAgfSxcbiAgICBLOiBmdW5jdGlvbiAoZGF0ZU9iaiwgYW1QTSwgbG9jYWxlKSB7XG4gICAgICAgIGRhdGVPYmouc2V0SG91cnMoKGRhdGVPYmouZ2V0SG91cnMoKSAlIDEyKSArXG4gICAgICAgICAgICAxMiAqIGludChuZXcgUmVnRXhwKGxvY2FsZS5hbVBNWzFdLCBcImlcIikudGVzdChhbVBNKSkpO1xuICAgIH0sXG4gICAgTTogZnVuY3Rpb24gKGRhdGVPYmosIHNob3J0TW9udGgsIGxvY2FsZSkge1xuICAgICAgICBkYXRlT2JqLnNldE1vbnRoKGxvY2FsZS5tb250aHMuc2hvcnRoYW5kLmluZGV4T2Yoc2hvcnRNb250aCkpO1xuICAgIH0sXG4gICAgUzogZnVuY3Rpb24gKGRhdGVPYmosIHNlY29uZHMpIHtcbiAgICAgICAgZGF0ZU9iai5zZXRTZWNvbmRzKHBhcnNlRmxvYXQoc2Vjb25kcykpO1xuICAgIH0sXG4gICAgVTogZnVuY3Rpb24gKF8sIHVuaXhTZWNvbmRzKSB7IHJldHVybiBuZXcgRGF0ZShwYXJzZUZsb2F0KHVuaXhTZWNvbmRzKSAqIDEwMDApOyB9LFxuICAgIFc6IGZ1bmN0aW9uIChkYXRlT2JqLCB3ZWVrTnVtLCBsb2NhbGUpIHtcbiAgICAgICAgdmFyIHdlZWtOdW1iZXIgPSBwYXJzZUludCh3ZWVrTnVtKTtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShkYXRlT2JqLmdldEZ1bGxZZWFyKCksIDAsIDIgKyAod2Vla051bWJlciAtIDEpICogNywgMCwgMCwgMCwgMCk7XG4gICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRhdGUuZ2V0RGF5KCkgKyBsb2NhbGUuZmlyc3REYXlPZldlZWspO1xuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9LFxuICAgIFk6IGZ1bmN0aW9uIChkYXRlT2JqLCB5ZWFyKSB7XG4gICAgICAgIGRhdGVPYmouc2V0RnVsbFllYXIocGFyc2VGbG9hdCh5ZWFyKSk7XG4gICAgfSxcbiAgICBaOiBmdW5jdGlvbiAoXywgSVNPRGF0ZSkgeyByZXR1cm4gbmV3IERhdGUoSVNPRGF0ZSk7IH0sXG4gICAgZDogZnVuY3Rpb24gKGRhdGVPYmosIGRheSkge1xuICAgICAgICBkYXRlT2JqLnNldERhdGUocGFyc2VGbG9hdChkYXkpKTtcbiAgICB9LFxuICAgIGg6IGZ1bmN0aW9uIChkYXRlT2JqLCBob3VyKSB7XG4gICAgICAgIGRhdGVPYmouc2V0SG91cnMoKGRhdGVPYmouZ2V0SG91cnMoKSA+PSAxMiA/IDEyIDogMCkgKyBwYXJzZUZsb2F0KGhvdXIpKTtcbiAgICB9LFxuICAgIGk6IGZ1bmN0aW9uIChkYXRlT2JqLCBtaW51dGVzKSB7XG4gICAgICAgIGRhdGVPYmouc2V0TWludXRlcyhwYXJzZUZsb2F0KG1pbnV0ZXMpKTtcbiAgICB9LFxuICAgIGo6IGZ1bmN0aW9uIChkYXRlT2JqLCBkYXkpIHtcbiAgICAgICAgZGF0ZU9iai5zZXREYXRlKHBhcnNlRmxvYXQoZGF5KSk7XG4gICAgfSxcbiAgICBsOiBkb05vdGhpbmcsXG4gICAgbTogZnVuY3Rpb24gKGRhdGVPYmosIG1vbnRoKSB7XG4gICAgICAgIGRhdGVPYmouc2V0TW9udGgocGFyc2VGbG9hdChtb250aCkgLSAxKTtcbiAgICB9LFxuICAgIG46IGZ1bmN0aW9uIChkYXRlT2JqLCBtb250aCkge1xuICAgICAgICBkYXRlT2JqLnNldE1vbnRoKHBhcnNlRmxvYXQobW9udGgpIC0gMSk7XG4gICAgfSxcbiAgICBzOiBmdW5jdGlvbiAoZGF0ZU9iaiwgc2Vjb25kcykge1xuICAgICAgICBkYXRlT2JqLnNldFNlY29uZHMocGFyc2VGbG9hdChzZWNvbmRzKSk7XG4gICAgfSxcbiAgICB1OiBmdW5jdGlvbiAoXywgdW5peE1pbGxTZWNvbmRzKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShwYXJzZUZsb2F0KHVuaXhNaWxsU2Vjb25kcykpO1xuICAgIH0sXG4gICAgdzogZG9Ob3RoaW5nLFxuICAgIHk6IGZ1bmN0aW9uIChkYXRlT2JqLCB5ZWFyKSB7XG4gICAgICAgIGRhdGVPYmouc2V0RnVsbFllYXIoMjAwMCArIHBhcnNlRmxvYXQoeWVhcikpO1xuICAgIH0sXG59O1xuZXhwb3J0IHZhciB0b2tlblJlZ2V4ID0ge1xuICAgIEQ6IFwiXCIsXG4gICAgRjogXCJcIixcbiAgICBHOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgIEg6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgSjogXCIoXFxcXGRcXFxcZHxcXFxcZClcXFxcdytcIixcbiAgICBLOiBcIlwiLFxuICAgIE06IFwiXCIsXG4gICAgUzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICBVOiBcIiguKylcIixcbiAgICBXOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgIFk6IFwiKFxcXFxkezR9KVwiLFxuICAgIFo6IFwiKC4rKVwiLFxuICAgIGQ6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgaDogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICBpOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgIGo6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgbDogXCJcIixcbiAgICBtOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgIG46IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXG4gICAgczogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcbiAgICB1OiBcIiguKylcIixcbiAgICB3OiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxuICAgIHk6IFwiKFxcXFxkezJ9KVwiLFxufTtcbmV4cG9ydCB2YXIgZm9ybWF0cyA9IHtcbiAgICBaOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpOyB9LFxuICAgIEQ6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5cy5zaG9ydGhhbmRbZm9ybWF0cy53KGRhdGUsIGxvY2FsZSwgb3B0aW9ucyldO1xuICAgIH0sXG4gICAgRjogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbW9udGhUb1N0cihmb3JtYXRzLm4oZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSAtIDEsIGZhbHNlLCBsb2NhbGUpO1xuICAgIH0sXG4gICAgRzogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gcGFkKGZvcm1hdHMuaChkYXRlLCBsb2NhbGUsIG9wdGlvbnMpKTtcbiAgICB9LFxuICAgIEg6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBwYWQoZGF0ZS5nZXRIb3VycygpKTsgfSxcbiAgICBKOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUub3JkaW5hbCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGRhdGUuZ2V0RGF0ZSgpICsgbG9jYWxlLm9yZGluYWwoZGF0ZS5nZXREYXRlKCkpXG4gICAgICAgICAgICA6IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIH0sXG4gICAgSzogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSkgeyByZXR1cm4gbG9jYWxlLmFtUE1baW50KGRhdGUuZ2V0SG91cnMoKSA+IDExKV07IH0sXG4gICAgTTogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbW9udGhUb1N0cihkYXRlLmdldE1vbnRoKCksIHRydWUsIGxvY2FsZSk7XG4gICAgfSxcbiAgICBTOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gcGFkKGRhdGUuZ2V0U2Vjb25kcygpKTsgfSxcbiAgICBVOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLyAxMDAwOyB9LFxuICAgIFc6IGZ1bmN0aW9uIChkYXRlLCBfLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmdldFdlZWsoZGF0ZSk7XG4gICAgfSxcbiAgICBZOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gcGFkKGRhdGUuZ2V0RnVsbFllYXIoKSwgNCk7IH0sXG4gICAgZDogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIHBhZChkYXRlLmdldERhdGUoKSk7IH0sXG4gICAgaDogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIChkYXRlLmdldEhvdXJzKCkgJSAxMiA/IGRhdGUuZ2V0SG91cnMoKSAlIDEyIDogMTIpOyB9LFxuICAgIGk6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBwYWQoZGF0ZS5nZXRNaW51dGVzKCkpOyB9LFxuICAgIGo6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLmdldERhdGUoKTsgfSxcbiAgICBsOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXMubG9uZ2hhbmRbZGF0ZS5nZXREYXkoKV07XG4gICAgfSxcbiAgICBtOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpOyB9LFxuICAgIG46IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLmdldE1vbnRoKCkgKyAxOyB9LFxuICAgIHM6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLmdldFNlY29uZHMoKTsgfSxcbiAgICB1OiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXRUaW1lKCk7IH0sXG4gICAgdzogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUuZ2V0RGF5KCk7IH0sXG4gICAgeTogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpLnN1YnN0cmluZygyKTsgfSxcbn07XG4iLCJleHBvcnQgdmFyIHBhZCA9IGZ1bmN0aW9uIChudW1iZXIsIGxlbmd0aCkge1xuICAgIGlmIChsZW5ndGggPT09IHZvaWQgMCkgeyBsZW5ndGggPSAyOyB9XG4gICAgcmV0dXJuIChcIjAwMFwiICsgbnVtYmVyKS5zbGljZShsZW5ndGggKiAtMSk7XG59O1xuZXhwb3J0IHZhciBpbnQgPSBmdW5jdGlvbiAoYm9vbCkgeyByZXR1cm4gKGJvb2wgPT09IHRydWUgPyAxIDogMCk7IH07XG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZm4sIHdhaXQpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgY2xlYXJUaW1lb3V0KHQpO1xuICAgICAgICB0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBmbi5hcHBseShfdGhpcywgYXJncyk7IH0sIHdhaXQpO1xuICAgIH07XG59XG5leHBvcnQgdmFyIGFycmF5aWZ5ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBBcnJheSA/IG9iaiA6IFtvYmpdO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKFwiQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAodGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBfYSA9IDAsIGFyZ3NfMSA9IGFyZ3M7IF9hIDwgYXJnc18xLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3NfMVtfYV07XG4gICAgICAgICAgICBfbG9vcF8xKHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xufVxuIiwiZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbz0wO288dC5sZW5ndGg7bysrKXt2YXIgbj10W29dO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLmtleSxuKX19ZnVuY3Rpb24gdChlKXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gbyhlKX0oZSl8fGZ1bmN0aW9uKGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoZSkpcmV0dXJuIEFycmF5LmZyb20oZSl9KGUpfHxmdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybjtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gbyhlLHQpO3ZhciBuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtcIk9iamVjdFwiPT09biYmZS5jb25zdHJ1Y3RvciYmKG49ZS5jb25zdHJ1Y3Rvci5uYW1lKTtpZihcIk1hcFwiPT09bnx8XCJTZXRcIj09PW4pcmV0dXJuIEFycmF5LmZyb20oZSk7aWYoXCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKXJldHVybiBvKGUsdCl9KGUpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIG8oZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIG89MCxuPW5ldyBBcnJheSh0KTtvPHQ7bysrKW5bb109ZVtvXTtyZXR1cm4gbn12YXIgbixpLGEscixzLGw9KG49W1wiYVtocmVmXVwiLFwiYXJlYVtocmVmXVwiLCdpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFt0eXBlPVwiaGlkZGVuXCJdKTpub3QoW2FyaWEtaGlkZGVuXSknLFwic2VsZWN0Om5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSlcIixcInRleHRhcmVhOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSlcIixcImJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pXCIsXCJpZnJhbWVcIixcIm9iamVjdFwiLFwiZW1iZWRcIixcIltjb250ZW50ZWRpdGFibGVdXCIsJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleF49XCItXCJdKSddLGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBvKGUpe3ZhciBuPWUudGFyZ2V0TW9kYWwsaT1lLnRyaWdnZXJzLGE9dm9pZCAwPT09aT9bXTppLHI9ZS5vblNob3cscz12b2lkIDA9PT1yP2Z1bmN0aW9uKCl7fTpyLGw9ZS5vbkNsb3NlLGM9dm9pZCAwPT09bD9mdW5jdGlvbigpe306bCxkPWUub3BlblRyaWdnZXIsdT12b2lkIDA9PT1kP1wiZGF0YS1taWNyb21vZGFsLXRyaWdnZXJcIjpkLGY9ZS5jbG9zZVRyaWdnZXIsaD12b2lkIDA9PT1mP1wiZGF0YS1taWNyb21vZGFsLWNsb3NlXCI6Zix2PWUub3BlbkNsYXNzLGc9dm9pZCAwPT09dj9cImlzLW9wZW5cIjp2LG09ZS5kaXNhYmxlU2Nyb2xsLGI9dm9pZCAwIT09bSYmbSx5PWUuZGlzYWJsZUZvY3VzLHA9dm9pZCAwIT09eSYmeSx3PWUuYXdhaXRDbG9zZUFuaW1hdGlvbixFPXZvaWQgMCE9PXcmJncsaz1lLmF3YWl0T3BlbkFuaW1hdGlvbixNPXZvaWQgMCE9PWsmJmssQT1lLmRlYnVnTW9kZSxDPXZvaWQgMCE9PUEmJkE7IWZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxvKSx0aGlzLm1vZGFsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG4pLHRoaXMuY29uZmlnPXtkZWJ1Z01vZGU6QyxkaXNhYmxlU2Nyb2xsOmIsb3BlblRyaWdnZXI6dSxjbG9zZVRyaWdnZXI6aCxvcGVuQ2xhc3M6ZyxvblNob3c6cyxvbkNsb3NlOmMsYXdhaXRDbG9zZUFuaW1hdGlvbjpFLGF3YWl0T3BlbkFuaW1hdGlvbjpNLGRpc2FibGVGb2N1czpwfSxhLmxlbmd0aD4wJiZ0aGlzLnJlZ2lzdGVyVHJpZ2dlcnMuYXBwbHkodGhpcyx0KGEpKSx0aGlzLm9uQ2xpY2s9dGhpcy5vbkNsaWNrLmJpbmQodGhpcyksdGhpcy5vbktleWRvd249dGhpcy5vbktleWRvd24uYmluZCh0aGlzKX12YXIgaSxhLHI7cmV0dXJuIGk9bywoYT1be2tleTpcInJlZ2lzdGVyVHJpZ2dlcnNcIix2YWx1ZTpmdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLHQ9YXJndW1lbnRzLmxlbmd0aCxvPW5ldyBBcnJheSh0KSxuPTA7bjx0O24rKylvW25dPWFyZ3VtZW50c1tuXTtvLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKChmdW5jdGlvbih0KXt0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChmdW5jdGlvbih0KXtyZXR1cm4gZS5zaG93TW9kYWwodCl9KSl9KSl9fSx7a2V5Olwic2hvd01vZGFsXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOm51bGw7aWYodGhpcy5hY3RpdmVFbGVtZW50PWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsdGhpcy5tb2RhbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIiksdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLm9wZW5DbGFzcyksdGhpcy5zY3JvbGxCZWhhdmlvdXIoXCJkaXNhYmxlXCIpLHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKSx0aGlzLmNvbmZpZy5hd2FpdE9wZW5BbmltYXRpb24pe3ZhciBvPWZ1bmN0aW9uIHQoKXtlLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIix0LCExKSxlLnNldEZvY3VzVG9GaXJzdE5vZGUoKX07dGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsbywhMSl9ZWxzZSB0aGlzLnNldEZvY3VzVG9GaXJzdE5vZGUoKTt0aGlzLmNvbmZpZy5vblNob3codGhpcy5tb2RhbCx0aGlzLmFjdGl2ZUVsZW1lbnQsdCl9fSx7a2V5OlwiY2xvc2VNb2RhbFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOm51bGwsdD10aGlzLm1vZGFsO2lmKHRoaXMubW9kYWwuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIiksdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpLHRoaXMuc2Nyb2xsQmVoYXZpb3VyKFwiZW5hYmxlXCIpLHRoaXMuYWN0aXZlRWxlbWVudCYmdGhpcy5hY3RpdmVFbGVtZW50LmZvY3VzJiZ0aGlzLmFjdGl2ZUVsZW1lbnQuZm9jdXMoKSx0aGlzLmNvbmZpZy5vbkNsb3NlKHRoaXMubW9kYWwsdGhpcy5hY3RpdmVFbGVtZW50LGUpLHRoaXMuY29uZmlnLmF3YWl0Q2xvc2VBbmltYXRpb24pe3ZhciBvPXRoaXMuY29uZmlnLm9wZW5DbGFzczt0aGlzLm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwoZnVuY3Rpb24gZSgpe3QuY2xhc3NMaXN0LnJlbW92ZShvKSx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIixlLCExKX0pLCExKX1lbHNlIHQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5vcGVuQ2xhc3MpfX0se2tleTpcImNsb3NlTW9kYWxCeUlkXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5tb2RhbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKSx0aGlzLm1vZGFsJiZ0aGlzLmNsb3NlTW9kYWwoKX19LHtrZXk6XCJzY3JvbGxCZWhhdmlvdXJcIix2YWx1ZTpmdW5jdGlvbihlKXtpZih0aGlzLmNvbmZpZy5kaXNhYmxlU2Nyb2xsKXt2YXIgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtzd2l0Y2goZSl7Y2FzZVwiZW5hYmxlXCI6T2JqZWN0LmFzc2lnbih0LnN0eWxlLHtvdmVyZmxvdzpcIlwifSk7YnJlYWs7Y2FzZVwiZGlzYWJsZVwiOk9iamVjdC5hc3NpZ24odC5zdHlsZSx7b3ZlcmZsb3c6XCJoaWRkZW5cIn0pfX19fSx7a2V5OlwiYWRkRXZlbnRMaXN0ZW5lcnNcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0aGlzLm9uQ2xpY2spLHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5vbkNsaWNrKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHRoaXMub25LZXlkb3duKX19LHtrZXk6XCJyZW1vdmVFdmVudExpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5tb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMub25DbGljayksdGhpcy5tb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLm9uQ2xpY2spLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdGhpcy5vbktleWRvd24pfX0se2tleTpcIm9uQ2xpY2tcIix2YWx1ZTpmdW5jdGlvbihlKXsoZS50YXJnZXQuaGFzQXR0cmlidXRlKHRoaXMuY29uZmlnLmNsb3NlVHJpZ2dlcil8fGUudGFyZ2V0LnBhcmVudE5vZGUuaGFzQXR0cmlidXRlKHRoaXMuY29uZmlnLmNsb3NlVHJpZ2dlcikpJiYoZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5jbG9zZU1vZGFsKGUpKX19LHtrZXk6XCJvbktleWRvd25cIix2YWx1ZTpmdW5jdGlvbihlKXsyNz09PWUua2V5Q29kZSYmdGhpcy5jbG9zZU1vZGFsKGUpLDk9PT1lLmtleUNvZGUmJnRoaXMucmV0YWluRm9jdXMoZSl9fSx7a2V5OlwiZ2V0Rm9jdXNhYmxlTm9kZXNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMubW9kYWwucXVlcnlTZWxlY3RvckFsbChuKTtyZXR1cm4gQXJyYXkuYXBwbHkodm9pZCAwLHQoZSkpfX0se2tleTpcInNldEZvY3VzVG9GaXJzdE5vZGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYoIXRoaXMuY29uZmlnLmRpc2FibGVGb2N1cyl7dmFyIHQ9dGhpcy5nZXRGb2N1c2FibGVOb2RlcygpO2lmKDAhPT10Lmxlbmd0aCl7dmFyIG89dC5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiF0Lmhhc0F0dHJpYnV0ZShlLmNvbmZpZy5jbG9zZVRyaWdnZXIpfSkpO28ubGVuZ3RoPjAmJm9bMF0uZm9jdXMoKSwwPT09by5sZW5ndGgmJnRbMF0uZm9jdXMoKX19fX0se2tleTpcInJldGFpbkZvY3VzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5nZXRGb2N1c2FibGVOb2RlcygpO2lmKDAhPT10Lmxlbmd0aClpZih0PXQuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9PWUub2Zmc2V0UGFyZW50fSkpLHRoaXMubW9kYWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpe3ZhciBvPXQuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtlLnNoaWZ0S2V5JiYwPT09byYmKHRbdC5sZW5ndGgtMV0uZm9jdXMoKSxlLnByZXZlbnREZWZhdWx0KCkpLCFlLnNoaWZ0S2V5JiZ0Lmxlbmd0aD4wJiZvPT09dC5sZW5ndGgtMSYmKHRbMF0uZm9jdXMoKSxlLnByZXZlbnREZWZhdWx0KCkpfWVsc2UgdFswXS5mb2N1cygpfX1dKSYmZShpLnByb3RvdHlwZSxhKSxyJiZlKGksciksb30oKSxhPW51bGwscj1mdW5jdGlvbihlKXtpZighZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSkpcmV0dXJuIGNvbnNvbGUud2FybihcIk1pY3JvTW9kYWw6IOKdl1NlZW1zIGxpa2UgeW91IGhhdmUgbWlzc2VkICVjJ1wiLmNvbmNhdChlLFwiJ1wiKSxcImJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7Y29sb3I6ICM1MDU5NmM7Zm9udC13ZWlnaHQ6IGJvbGQ7XCIsXCJJRCBzb21ld2hlcmUgaW4geW91ciBjb2RlLiBSZWZlciBleGFtcGxlIGJlbG93IHRvIHJlc29sdmUgaXQuXCIpLGNvbnNvbGUud2FybihcIiVjRXhhbXBsZTpcIixcImJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7Y29sb3I6ICM1MDU5NmM7Zm9udC13ZWlnaHQ6IGJvbGQ7XCIsJzxkaXYgY2xhc3M9XCJtb2RhbFwiIGlkPVwiJy5jb25jYXQoZSwnXCI+PC9kaXY+JykpLCExfSxzPWZ1bmN0aW9uKGUsdCl7aWYoZnVuY3Rpb24oZSl7ZS5sZW5ndGg8PTAmJihjb25zb2xlLndhcm4oXCJNaWNyb01vZGFsOiDinZdQbGVhc2Ugc3BlY2lmeSBhdCBsZWFzdCBvbmUgJWMnbWljcm9tb2RhbC10cmlnZ2VyJ1wiLFwiYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtjb2xvcjogIzUwNTk2Yztmb250LXdlaWdodDogYm9sZDtcIixcImRhdGEgYXR0cmlidXRlLlwiKSxjb25zb2xlLndhcm4oXCIlY0V4YW1wbGU6XCIsXCJiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO2NvbG9yOiAjNTA1OTZjO2ZvbnQtd2VpZ2h0OiBib2xkO1wiLCc8YSBocmVmPVwiI1wiIGRhdGEtbWljcm9tb2RhbC10cmlnZ2VyPVwibXktbW9kYWxcIj48L2E+JykpfShlKSwhdClyZXR1cm4hMDtmb3IodmFyIG8gaW4gdClyKG8pO3JldHVybiEwfSx7aW5pdDpmdW5jdGlvbihlKXt2YXIgbz1PYmplY3QuYXNzaWduKHt9LHtvcGVuVHJpZ2dlcjpcImRhdGEtbWljcm9tb2RhbC10cmlnZ2VyXCJ9LGUpLG49dChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW1wiLmNvbmNhdChvLm9wZW5UcmlnZ2VyLFwiXVwiKSkpLHI9ZnVuY3Rpb24oZSx0KXt2YXIgbz1bXTtyZXR1cm4gZS5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgbj1lLmF0dHJpYnV0ZXNbdF0udmFsdWU7dm9pZCAwPT09b1tuXSYmKG9bbl09W10pLG9bbl0ucHVzaChlKX0pKSxvfShuLG8ub3BlblRyaWdnZXIpO2lmKCEwIT09by5kZWJ1Z01vZGV8fCExIT09cyhuLHIpKWZvcih2YXIgbCBpbiByKXt2YXIgYz1yW2xdO28udGFyZ2V0TW9kYWw9bCxvLnRyaWdnZXJzPXQoYyksYT1uZXcgaShvKX19LHNob3c6ZnVuY3Rpb24oZSx0KXt2YXIgbz10fHx7fTtvLnRhcmdldE1vZGFsPWUsITA9PT1vLmRlYnVnTW9kZSYmITE9PT1yKGUpfHwoYSYmYS5yZW1vdmVFdmVudExpc3RlbmVycygpLChhPW5ldyBpKG8pKS5zaG93TW9kYWwoKSl9LGNsb3NlOmZ1bmN0aW9uKGUpe2U/YS5jbG9zZU1vZGFsQnlJZChlKTphLmNsb3NlTW9kYWwoKX19KTtcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiYod2luZG93Lk1pY3JvTW9kYWw9bCk7ZXhwb3J0IGRlZmF1bHQgbDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZsYXRwaWNrci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZmxhdHBpY2tyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JtLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci10ZW1wbGF0ZSAqL1xuaW1wb3J0IE1pY3JvTW9kYWwgZnJvbSBcIm1pY3JvbW9kYWxcIjtcbmltcG9ydCBmbGF0cGlja3IgZnJvbSBcImZsYXRwaWNrclwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4vdmlld3MvZWxlbWVudHNcIjtcbmltcG9ydCB7IGxvYWRQcm9qZWN0IH0gZnJvbSBcIi4vdmlld3MvcHJvamVjdFZpZXdcIjtcbmltcG9ydCB7IGxvYWRUYWJzIH0gZnJvbSBcIi4vdmlld3MvdGFiVmlld1wiO1xuaW1wb3J0IHsgb25Nb2RhbFNob3cgfSBmcm9tIFwiLi92aWV3cy9mb3JtVmlld1wiO1xuaW1wb3J0IFByb2plY3RNYW5hZ2VyIGZyb20gXCIuL21vZGVscy9Qcm9qZWN0TWFuYWdlclwiO1xuaW1wb3J0IHsgZGVtb1RlbXBsYXRlLCBlbXB0eVRlbXBsYXRlIH0gZnJvbSBcIi4vdGVtcGxhdGVzXCI7XG5cbmZ1bmN0aW9uIGdldEhlYWRlclRleHQodXNlcm5hbWUpIHtcbiAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoKS5nZXRIb3VycygpO1xuICAgIGNvbnN0IG5hbWVUZXh0ID0gdXNlcm5hbWUgPT09IFwiXCIgPyBcIlwiIDogXCIsIFwiO1xuXG4gICAgaWYgKHRpbWUgPiAxNyB8fCB0aW1lIDwgNSkgcmV0dXJuIFwiR29vZCBldmVuaW5nXCIgKyBuYW1lVGV4dDtcblxuICAgIGlmICh0aW1lIDwgMTIpIHJldHVybiBcIkdvb2QgbW9ybmluZ1wiICsgbmFtZVRleHQ7XG5cbiAgICByZXR1cm4gXCJHb29kIGFmdGVybm9vblwiICsgbmFtZVRleHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWQodXNlcm5hbWUsIGxvYWRUeXBlLCBwcm9qZWN0cyA9IFtdKSB7XG4gICAgbGV0IG1hbmFnZXI7XG5cbiAgICBpZiAobG9hZFR5cGUgPT09IFwiZGVtb1wiKSB7XG4gICAgICAgIG1hbmFnZXIgPSBQcm9qZWN0TWFuYWdlcihkZW1vVGVtcGxhdGUoKSk7XG4gICAgfSBlbHNlIGlmIChsb2FkVHlwZSA9PT0gXCJlbXB0eVwiKSB7XG4gICAgICAgIG1hbmFnZXIgPSBQcm9qZWN0TWFuYWdlcihlbXB0eVRlbXBsYXRlKCkpO1xuICAgIH0gZWxzZSBpZiAobG9hZFR5cGUgPT09IFwibG9hZFwiKSB7XG4gICAgICAgIG1hbmFnZXIgPSBQcm9qZWN0TWFuYWdlcihwcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgbG9hZFRhYnMobWFuYWdlci5nZXRQcm9qZWN0cygpKTtcbiAgICBsb2FkUHJvamVjdChtYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCkpO1xuXG4gICAgZWxlbWVudHMuc2lnbnVwUGFnZS5oaWRkZW4gPSB0cnVlO1xuICAgIGVsZW1lbnRzLm1haW5XcmFwcGVyLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgZWxlbWVudHMucGFnZUhlYWRlck5hbWUudGV4dENvbnRlbnQgPSB1c2VybmFtZTtcbiAgICBlbGVtZW50cy5wYWdlSGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IGdldEhlYWRlclRleHQodXNlcm5hbWUpO1xuXG4gICAgTWljcm9Nb2RhbC5pbml0KHsgb25TaG93OiBvbk1vZGFsU2hvdyB9KTtcblxuICAgIGZsYXRwaWNrcihcIiN0YXNrLWR1ZS1kYXRlXCIsIHtcbiAgICAgICAgZW5hYmxlVGltZTogdHJ1ZSxcbiAgICAgICAgZGF0ZUZvcm1hdDogXCJZLW0tZCBIOmlcIixcbiAgICAgICAgbWluRGF0ZTogXCJ0b2RheVwiLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hbmFnZXI7XG59XG4iLCJpbXBvcnQgTWljcm9Nb2RhbCBmcm9tIFwibWljcm9tb2RhbFwiO1xuXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9tb2RlbHMvUHJvamVjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vbW9kZWxzL1Rhc2tcIjtcblxuaW1wb3J0ICogYXMgRm9ybVZpZXcgZnJvbSBcIi4vdmlld3MvZm9ybVZpZXdcIjtcbmltcG9ydCAqIGFzIFRhYlZpZXcgZnJvbSBcIi4vdmlld3MvdGFiVmlld1wiO1xuaW1wb3J0ICogYXMgVGFza1ZpZXcgZnJvbSBcIi4vdmlld3MvdGFza1ZpZXdcIjtcbmltcG9ydCAqIGFzIFByb2plY3RWaWV3IGZyb20gXCIuL3ZpZXdzL3Byb2plY3RWaWV3XCI7XG5pbXBvcnQgKiBhcyBsb2NhbFN0b3JhZ2UgZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5cbmltcG9ydCBJbml0aWFsTG9hZCBmcm9tIFwiLi9Jbml0aWFsTG9hZFwiO1xuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuL3ZpZXdzL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcCgpIHtcbiAgICBsZXQgUHJvamVjdE1hbmFnZXI7XG5cbiAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZSAmJiB3aW5kb3cubG9jYWxTdG9yYWdlLnByb2plY3RzKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UubG9hZERhdGEoKTtcblxuICAgICAgICBQcm9qZWN0TWFuYWdlciA9IEluaXRpYWxMb2FkKGRhdGEudXNlcm5hbWUsIFwibG9hZFwiLCBkYXRhLnByb2plY3RzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0aWFsaXNlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGVsZW1lbnRzLnRlbXBsYXRlQnV0dG9uc0NvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gZWxlbWVudHMuc2lnbnVwRm9ybVVzZXJuYW1lLnZhbHVlLnRyaW0oKTtcblxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBlbGVtZW50cy5kZW1vVGVtcGxhdGVCdXR0b24pIHtcbiAgICAgICAgICAgIFByb2plY3RNYW5hZ2VyID0gSW5pdGlhbExvYWQodXNlcm5hbWUsIFwiZGVtb1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQgPT09IGVsZW1lbnRzLmVtcHR5VGVtcGxhdGVCdXR0b24pIHtcbiAgICAgICAgICAgIFByb2plY3RNYW5hZ2VyID0gSW5pdGlhbExvYWQodXNlcm5hbWUsIFwiZW1wdHlcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2F2ZURhdGEodXNlcm5hbWUsIFByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVkaXRQcm9qZWN0UHJvcGVydGllcyhwcm9qZWN0LCBwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHByb2plY3Quc2V0TmFtZShwcm9wZXJ0aWVzLm5hbWUpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5lZGl0UHJvamVjdChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlZGl0VGFza1Byb3BlcnRpZXModGFzaywgcHJvcGVydGllcykge1xuICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgdGFzay5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgcHJvcGVydGllc1twcm9wZXJ0eV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2UuZWRpdFRhc2sodGFzayk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25UYXNrRm9ybVN1Ym1pdCgpIHtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBGb3JtVmlldy5nZXRGb3JtRGF0YShlbGVtZW50cy50YXNrRm9ybSk7XG4gICAgICAgIGNvbnN0IHsgdGFza0Zvcm0gfSA9IGVsZW1lbnRzO1xuXG4gICAgICAgIGlmICghdGFza0Zvcm0gfHwgIWZvcm1EYXRhKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRhc2tGb3JtLmdldEF0dHJpYnV0ZShcImRhdGEtZm9ybS10eXBlXCIpID09PSBcImVkaXRcIikge1xuICAgICAgICAgICAgZWRpdFRhc2tQcm9wZXJ0aWVzKFByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0VGFzaygrZWxlbWVudHMudGFza0Zvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWluZGV4XCIpKSwgZm9ybURhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKTtcblxuICAgICAgICBpZiAocHJvamVjdC5pc092ZXJ2aWV3KCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IFByb2plY3RNYW5hZ2VyLmdldFByb2plY3QoZm9ybURhdGEucHJvamVjdEluZGV4KTtcblxuICAgICAgICAgICAgY29uc3QgdGFzayA9IFRhc2soc2VsZWN0ZWRQcm9qZWN0LCBmb3JtRGF0YSk7XG4gICAgICAgICAgICBzZWxlY3RlZFByb2plY3QuYWRkVGFzayh0YXNrKTtcbiAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdC5zb3J0VGFza3MoKTtcbiAgICAgICAgICAgIFRhc2tWaWV3LmNyZWF0ZVRhc2sodGFzayk7XG5cbiAgICAgICAgICAgIFByb2plY3RWaWV3LmxvYWRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmFkZFRhc2sodGFzayk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFzayA9IFRhc2socHJvamVjdCwgZm9ybURhdGEpO1xuICAgICAgICBwcm9qZWN0LmFkZFRhc2sodGFzayk7XG4gICAgICAgIHByb2plY3Quc29ydFRhc2tzKCk7XG4gICAgICAgIFRhc2tWaWV3LmNyZWF0ZVRhc2sodGFzayk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5hZGRUYXNrKHRhc2spO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUHJvamVjdEZvcm1TdWJtaXQoKSB7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gRm9ybVZpZXcuZ2V0Rm9ybURhdGEoZWxlbWVudHMucHJvamVjdEZvcm0pO1xuICAgICAgICBjb25zdCB7IHByb2plY3RGb3JtIH0gPSBlbGVtZW50cztcblxuICAgICAgICBpZiAoIWZvcm1EYXRhKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYgKHByb2plY3RGb3JtLmdldEF0dHJpYnV0ZShcImRhdGEtZm9ybS10eXBlXCIpID09PSBcImVkaXRcIikge1xuICAgICAgICAgICAgZWRpdFByb2plY3RQcm9wZXJ0aWVzKFByb2plY3RNYW5hZ2VyLmdldFByb2plY3QoK3Byb2plY3RGb3JtLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pbmRleFwiKSksIGZvcm1EYXRhKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QoZm9ybURhdGEubmFtZSk7XG4gICAgICAgIFByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIFByb2plY3RNYW5hZ2VyLnNldEN1cnJlbnRQcm9qZWN0KFByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCkubGVuZ3RoIC0gMSk7XG4gICAgICAgIFByb2plY3RWaWV3LmxvYWRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBUYWJWaWV3LmxvYWRUYWJzKFByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCkpO1xuICAgICAgICBUYWJWaWV3LnVwZGF0ZVNlbGVjdGVkKFByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0UHJvamVjdEluZGV4KCkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UuYWRkUHJvamVjdChwcm9qZWN0KTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRhYkNsaWNrKGV2ZW50LCB0YWJJbmRleCkge1xuICAgICAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG5cbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LXNlbGVjdG9yXCIpKSB7XG4gICAgICAgICAgICBQcm9qZWN0TWFuYWdlci5zZXRDdXJyZW50UHJvamVjdCh0YWJJbmRleCk7XG4gICAgICAgICAgICBQcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpLmhpZGVUYXNrRGVzY3JpcHRpb25zKCk7XG5cbiAgICAgICAgICAgIFByb2plY3RWaWV3LmxvYWRQcm9qZWN0KFByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCkpO1xuICAgICAgICAgICAgVGFiVmlldy51cGRhdGVTZWxlY3RlZCh0YWJJbmRleCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3QtZWRpdFwiKSkge1xuICAgICAgICAgICAgTWljcm9Nb2RhbC5zaG93KGVsZW1lbnRzLnByb2plY3RGb3JtTW9kYWwuaWQpO1xuICAgICAgICAgICAgRm9ybVZpZXcub25Nb2RhbFNob3coZWxlbWVudHMucHJvamVjdEZvcm1Nb2RhbCwgdGFyZ2V0KTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3RNYW5hZ2VyLmdldFByb2plY3QodGFiSW5kZXgpO1xuICAgICAgICAgICAgRm9ybVZpZXcubG9hZFByb2plY3RQcm9wZXJ0aWVzKHByb2plY3QpO1xuICAgICAgICAgICAgZWxlbWVudHMucHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWluZGV4XCIsIHRhYkluZGV4KTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdC1kZWxldGVcIikpIHtcbiAgICAgICAgICAgIFByb2plY3RNYW5hZ2VyLmRlbGV0ZVByb2plY3QodGFiSW5kZXgpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZVByb2plY3QodGFiSW5kZXgpO1xuXG4gICAgICAgICAgICBUYWJWaWV3LmxvYWRUYWJzKFByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCkpO1xuICAgICAgICAgICAgUHJvamVjdFZpZXcubG9hZFByb2plY3QoUHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgICAgICAgICBUYWJWaWV3LnVwZGF0ZVNlbGVjdGVkKFByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCkuZ2V0UHJvamVjdEluZGV4KCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25UYXNrQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICAgICAgICBjb25zdCB0YXNrRWxlbWVudCA9IHRhcmdldC5jbG9zZXN0KFwiLnRhc2stY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGlmICghdGFza0VsZW1lbnQgfHwgdGFza0VsZW1lbnQgPT09IHRhcmdldCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IFsuLi5lbGVtZW50cy50YXNrc0NvbnRhaW5lci5jaGlsZE5vZGVzXS5pbmRleE9mKHRhc2tFbGVtZW50KTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LmdldFRhc2sodGFza0luZGV4KTtcblxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImVkaXQtYnV0dG9uXCIpKSB7XG4gICAgICAgICAgICBNaWNyb01vZGFsLnNob3coZWxlbWVudHMudGFza0Zvcm1Nb2RhbC5pZCk7XG4gICAgICAgICAgICBGb3JtVmlldy5vbk1vZGFsU2hvdyhlbGVtZW50cy50YXNrRm9ybU1vZGFsLCB0YXJnZXQpO1xuXG4gICAgICAgICAgICBGb3JtVmlldy5sb2FkVGFza1Byb3BlcnRpZXModGFzayk7XG4gICAgICAgICAgICBlbGVtZW50cy50YXNrRm9ybVByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbm9uZVwiKTtcbiAgICAgICAgICAgIGVsZW1lbnRzLnRhc2tGb3JtLnNldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pbmRleFwiLCB0YXNrSW5kZXgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtYnV0dG9uXCIpKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZGVsZXRlVGFzayh0YXNrKTtcbiAgICAgICAgICAgIHByb2plY3QuZGVsZXRlVGFzayh0YXNrSW5kZXgpO1xuXG4gICAgICAgICAgICBQcm9qZWN0Vmlldy5sb2FkUHJvamVjdChQcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFzay1kb25lXCIpKSB7XG4gICAgICAgICAgICBlZGl0VGFza1Byb3BlcnRpZXModGFzaywgeyBkb25lOiB0YXJnZXQuY2hlY2tlZCB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvdy1idXR0b25cIikpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXNjcmlwdGlvblwiKTtcblxuICAgICAgICAgICAgaWYgKGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3JkaW9uLWNvbnRhaW5lclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiYWNjb3JkaW9uLXZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgdGFzay5zZXRQcm9wZXJ0eShcImRlc2NyaXB0aW9uVG9nZ2xlZFwiLCAhdGFzay5nZXRQcm9wZXJ0eShcImRlc2NyaXB0aW9uVG9nZ2xlZFwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRhc2tBZGRDbGljaygpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBQcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpO1xuXG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdC5pc092ZXJ2aWV3KCkpIHtcbiAgICAgICAgICAgIEZvcm1WaWV3LmxvYWRQcm9qZWN0U2VsZWN0T3B0aW9ucyhQcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpKTtcbiAgICAgICAgICAgIGVsZW1lbnRzLnRhc2tGb3JtUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheS1ub25lXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudHMudGFza0Zvcm1Qcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Tb3J0Q2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHNvcnRUeXBlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKTtcblxuICAgICAgICBwcm9qZWN0LnNldFNvcnRUeXBlKHNvcnRUeXBlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmVkaXRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBQcm9qZWN0Vmlldy5sb2FkUHJvamVjdChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVTaWRlYmFyKCkge1xuICAgICAgICBlbGVtZW50cy5zaWRlYmFyQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWRcIik7XG4gICAgICAgIGVsZW1lbnRzLm1haW5XcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbiAgICB9XG5cbiAgICBlbGVtZW50cy5wcm9qZWN0Rm9ybVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBvblByb2plY3RGb3JtU3VibWl0KCk7XG5cbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLnByb2plY3RGb3JtLmNsb3Nlc3QoXCIubW9kYWwtb3ZlcmxheVwiKS5jbGljaygpO1xuICAgICAgICAgICAgVGFiVmlldy5sb2FkVGFicyhQcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpKTtcbiAgICAgICAgICAgIFByb2plY3RWaWV3LnVwZGF0ZUhlYWRlcihQcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZWxlbWVudHMudGFza0Zvcm1TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gb25UYXNrRm9ybVN1Ym1pdCgpO1xuXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICBlbGVtZW50cy50YXNrRm9ybS5jbG9zZXN0KFwiLm1vZGFsLW92ZXJsYXlcIikuY2xpY2soKTtcbiAgICAgICAgICAgIFByb2plY3RWaWV3LmxvYWRQcm9qZWN0KFByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCkpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBbZWxlbWVudHMucHJvamVjdHNDb250YWluZXIsIGVsZW1lbnRzLm92ZXJ2aWV3c0NvbnRhaW5lcl0uZm9yRWFjaCgoY29udGFpbmVyKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YWIgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LXNlbGVjdG9yXCIpO1xuICAgICAgICAgICAgaWYgKCF0YWIpIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3QgdGFiSW5kZXggPSBbLi4uZWxlbWVudHMub3ZlcnZpZXdzQ29udGFpbmVyLmNoaWxkTm9kZXMsIC4uLmVsZW1lbnRzLnByb2plY3RzQ29udGFpbmVyLmNoaWxkTm9kZXNdLmluZGV4T2YodGFiKTtcbiAgICAgICAgICAgIG9uVGFiQ2xpY2soZXZlbnQsIHRhYkluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBlbGVtZW50cy50YXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25UYXNrQ2xpY2spO1xuXG4gICAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1taWNyb21vZGFsLWNsb3NlXVwiKV0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghZXZlbnQudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRhdGEtbWljcm9tb2RhbC1jbG9zZVwiKSkgcmV0dXJuO1xuICAgICAgICAgICAgRm9ybVZpZXcucmVzZXRJbnB1dHMoZWxlbWVudHMucHJvamVjdEZvcm0pO1xuICAgICAgICAgICAgRm9ybVZpZXcucmVzZXRJbnB1dHMoZWxlbWVudHMudGFza0Zvcm0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGVsZW1lbnRzLm5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uVGFza0FkZENsaWNrKTtcbiAgICBlbGVtZW50cy5zb3J0VGFza3NTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIG9uU29ydENoYW5nZSk7XG4gICAgZWxlbWVudHMuc2lkZWJhckNvbGxhcHNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVTaWRlYmFyKTtcbiAgICBlbGVtZW50cy50ZW1wbGF0ZUJ1dHRvbnNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluaXRpYWxpc2UpO1xufVxuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vbW9kZWxzL1Rhc2tcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL21vZGVscy9Qcm9qZWN0XCI7XG5pbXBvcnQgT3ZlcnZpZXcgZnJvbSBcIi4vbW9kZWxzL092ZXJ2aWV3XCI7XG5cbmNvbnN0IHN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuXG5mdW5jdGlvbiBjb252ZXJ0VGFzayh0YXNrKSB7XG4gICAgY29uc3QgdGFza0RhdGEgPSB7fTtcbiAgICB0YXNrRGF0YS5wcm9qZWN0SW5kZXggPSB0YXNrLmdldFBhcmVudFByb2plY3QoKS5nZXRQcm9qZWN0SW5kZXgoKTtcbiAgICB0YXNrRGF0YS5wcm9wZXJ0aWVzID0gdGFzay5nZXRQcm9wZXJ0aWVzKCk7XG4gICAgcmV0dXJuIHRhc2tEYXRhO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0UHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdERhdGEgPSB7fTtcbiAgICBwcm9qZWN0RGF0YS5uYW1lID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgcHJvamVjdERhdGEuc29ydFR5cGUgPSBwcm9qZWN0LmdldFNvcnRUeXBlKCk7XG4gICAgcHJvamVjdERhdGEuaXNPdmVydmlldyA9IHByb2plY3QuaXNPdmVydmlldygpO1xuXG4gICAgcmV0dXJuIHByb2plY3REYXRhO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRhc2soanNvblRhc2ssIHBhcmVudFByb2plY3QpIHtcbiAgICBjb25zdCB7IHByb3BlcnRpZXMgfSA9IGpzb25UYXNrO1xuXG4gICAgcHJvcGVydGllcy5kdWVEYXRlID0gcHJvcGVydGllcy5kdWVEYXRlID8gbmV3IERhdGUocHJvcGVydGllcy5kdWVEYXRlKSA6IG51bGw7XG5cbiAgICBjb25zdCB0YXNrID0gVGFzayhwYXJlbnRQcm9qZWN0LCBwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiB0YXNrO1xufVxuXG5mdW5jdGlvbiBwYXJzZVByb2plY3QoanNvblByb2plY3QsIGluZGV4KSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGpzb25Qcm9qZWN0LmlzT3ZlcnZpZXcgPyBPdmVydmlldyhqc29uUHJvamVjdC5uYW1lKSA6IFByb2plY3QoanNvblByb2plY3QubmFtZSk7XG5cbiAgICBwcm9qZWN0LnNldFNvcnRUeXBlKGpzb25Qcm9qZWN0LnNvcnRUeXBlKTtcblxuICAgIGlmIChwcm9qZWN0LmlzT3ZlcnZpZXcoKSkgcmV0dXJuIHByb2plY3Q7XG5cbiAgICBjb25zdCBqc29uVGFza3MgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKS5maWx0ZXIoKHRhc2spID0+IHRhc2sucHJvamVjdEluZGV4ID09PSBpbmRleCk7XG5cbiAgICBqc29uVGFza3MuZm9yRWFjaCgoanNvblRhc2spID0+IHtcbiAgICAgICAgcHJvamVjdC5hZGRUYXNrKHBhcnNlVGFzayhqc29uVGFzaywgcHJvamVjdCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YSgpIHtcbiAgICBjb25zdCB1c2VybmFtZSA9IHN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpO1xuXG4gICAgY29uc3QganNvblByb2plY3RzID0gSlNPTi5wYXJzZShzdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICAgIGpzb25Qcm9qZWN0cy5mb3JFYWNoKChqc29uUHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgcHJvamVjdHMucHVzaChwYXJzZVByb2plY3QoanNvblByb2plY3QsIGluZGV4KSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyB1c2VybmFtZSwgcHJvamVjdHMgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVEYXRhKHVzZXJuYW1lLCBwcm9qZWN0cykge1xuICAgIHN0b3JhZ2Uuc2V0SXRlbShcInVzZXJuYW1lXCIsIHVzZXJuYW1lKTtcblxuICAgIGNvbnN0IGNvbnZlcnRlZFByb2plY3RzID0gW107XG4gICAgY29uc3QgY29udmVydGVkVGFza3MgPSBbXTtcblxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QganNvblByb2plY3QgPSBjb252ZXJ0UHJvamVjdChwcm9qZWN0KTtcblxuICAgICAgICBpZiAoIWpzb25Qcm9qZWN0KSByZXR1cm47XG5cbiAgICAgICAgY29udmVydGVkUHJvamVjdHMucHVzaChqc29uUHJvamVjdCk7XG5cbiAgICAgICAgaWYgKGpzb25Qcm9qZWN0LmlzT3ZlcnZpZXcpIHJldHVybjtcblxuICAgICAgICBjb25zdCB0YXNrcyA9IHByb2plY3QuZ2V0VGFza3MoKTtcblxuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb252ZXJ0ZWRUYXNrcy5wdXNoKGNvbnZlcnRUYXNrKHRhc2spKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShjb252ZXJ0ZWRQcm9qZWN0cykpO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGNvbnZlcnRlZFRhc2tzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2Uoc3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIHByb2plY3RzLnB1c2goY29udmVydFByb2plY3QocHJvamVjdCkpO1xuXG4gICAgc3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2Uoc3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIHByb2plY3RzW3Byb2plY3QuZ2V0UHJvamVjdEluZGV4KCldID0gY29udmVydFByb2plY3QocHJvamVjdCk7XG5cbiAgICBzdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0SW5kZXgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2Uoc3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuXG4gICAgc3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcblxuICAgIGNvbnN0IHVwZGF0ZWRUYXNrcyA9IEpTT04ucGFyc2Uoc3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpLmZpbHRlcigodCkgPT4gdC5wcm9qZWN0SW5kZXggIT09IHByb2plY3RJbmRleCk7XG5cbiAgICB1cGRhdGVkVGFza3MuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICBpZiAodC5wcm9qZWN0SW5kZXggPiBwcm9qZWN0SW5kZXgpIHtcbiAgICAgICAgICAgIHQucHJvamVjdEluZGV4IC09IDE7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRUYXNrcykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFzayh0YXNrKSB7XG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKHN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgICB0YXNrcy5wdXNoKGNvbnZlcnRUYXNrKHRhc2spKTtcblxuICAgIHN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VGFzayh0YXNrKSB7XG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKHN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgICBjb25zdCBwcm9qZWN0SW5kZXggPSB0YXNrLmdldFBhcmVudFByb2plY3QoKS5nZXRQcm9qZWN0SW5kZXgoKTtcbiAgICBjb25zdCBwcm9qZWN0VGFza3MgPSB0YXNrcy5maWx0ZXIoKHQpID0+IHQucHJvamVjdEluZGV4ID09PSBwcm9qZWN0SW5kZXgpO1xuICAgIGNvbnN0IG90aGVyVGFza3MgPSB0YXNrcy5maWx0ZXIoKHQpID0+IHQucHJvamVjdEluZGV4ICE9PSBwcm9qZWN0SW5kZXgpO1xuXG4gICAgcHJvamVjdFRhc2tzW3Rhc2suZ2V0UHJvcGVydHkoXCJpbmRleFwiKV0gPSBjb252ZXJ0VGFzayh0YXNrKTtcblxuICAgIHN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KFsuLi5wcm9qZWN0VGFza3MsIC4uLm90aGVyVGFza3NdKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKHRhc2spIHtcbiAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2Uoc3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHRhc2suZ2V0UGFyZW50UHJvamVjdCgpLmdldFByb2plY3RJbmRleCgpO1xuICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IHRhc2tzLmZpbHRlcigodCkgPT4gdC5wcm9qZWN0SW5kZXggPT09IHByb2plY3RJbmRleCk7XG4gICAgY29uc3Qgb3RoZXJUYXNrcyA9IHRhc2tzLmZpbHRlcigodCkgPT4gdC5wcm9qZWN0SW5kZXggIT09IHByb2plY3RJbmRleCk7XG5cbiAgICBwcm9qZWN0VGFza3Muc3BsaWNlKHRhc2suZ2V0UHJvcGVydHkoXCJpbmRleFwiKSwgMSk7XG5cbiAgICBzdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShbLi4ucHJvamVjdFRhc2tzLCAuLi5vdGhlclRhc2tzXSkpO1xufVxuIiwiaW1wb3J0IHsgaXNUb2RheSwgaXNUaGlzV2VlayB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5pbXBvcnQgc29ydEZ1bmN0aW9ucyBmcm9tIFwiLi9zb3J0RnVuY3Rpb25zXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5cbmNvbnN0IGZpbHRlcnMgPSB7XG4gICAgVG9kYXk6ICh0YXNrKSA9PiBpc1RvZGF5KHRhc2suZ2V0UHJvcGVydHkoXCJkdWVEYXRlXCIpKSxcbiAgICBcIlRoaXMgV2Vla1wiOiAodGFzaykgPT4gaXNUaGlzV2Vlayh0YXNrLmdldFByb3BlcnR5KFwiZHVlRGF0ZVwiKSksXG4gICAgXCJBbGwgVGFza3NcIjogKCkgPT4gdHJ1ZSxcbn07XG5cbmNvbnN0IE92ZXJ2aWV3ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyID0gZmlsdGVyc1twcm9qZWN0TmFtZV07XG4gICAgbGV0IHNvcnRUeXBlID0gXCJEZXNjZW5kaW5nIHByaW9yaXR5XCI7XG5cbiAgICBjb25zdCB7IGdldFRhc2ssIGdldFRhc2tzLCBhZGRUYXNrLCBnZXROYW1lLCBnZXRQcm9qZWN0SW5kZXgsIHNldFByb2plY3RJbmRleCwgaGlkZVRhc2tEZXNjcmlwdGlvbnMsIGNsZWFyVGFza3MgfSA9XG4gICAgICAgIFByb2plY3QocHJvamVjdE5hbWUpO1xuXG4gICAgY29uc3Qgc29ydFRhc2tzID0gKCkgPT4ge1xuICAgICAgICBzb3J0RnVuY3Rpb25zW3NvcnRUeXBlXShnZXRUYXNrcygpKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0U29ydFR5cGUgPSAodmFsdWUpID0+IHtcbiAgICAgICAgc29ydFR5cGUgPSB2YWx1ZTtcbiAgICAgICAgc29ydFRhc2tzKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFNvcnRUeXBlID0gKCkgPT4gc29ydFR5cGU7XG5cbiAgICBjb25zdCBhZGRUYXNrcyA9ICh0YXNrc0FycmF5KSA9PiB7XG4gICAgICAgIHRhc2tzQXJyYXkuZm9yRWFjaCgodGFzaykgPT4gYWRkVGFzayh0YXNrKSk7XG4gICAgICAgIHNvcnRUYXNrcygpO1xuICAgIH07XG5cbiAgICBjb25zdCBpc092ZXJ2aWV3ID0gKCkgPT4gdHJ1ZTtcbiAgICBjb25zdCBnZXRIZWFkZXIgPSAoKSA9PiAoeyBuYW1lOiBnZXROYW1lKCksIHRleHQ6IFwiSGVyZSBhcmUgdGhlIHRhc2tzIHlvdSBuZWVkIHRvIGRvIFwiIH0pO1xuICAgIGNvbnN0IGdldEZpbHRlciA9ICgpID0+IGZpbHRlcjtcblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFza0luZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBnZXRUYXNrKHRhc2tJbmRleCk7XG4gICAgICAgIHRhc2suZ2V0UGFyZW50UHJvamVjdCgpLmRlbGV0ZVRhc2sodGFzay5nZXRQcm9wZXJ0eShcImluZGV4XCIpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlT3ZlcnZpZXcgPSAocHJvamVjdHMpID0+IHtcbiAgICAgICAgY2xlYXJUYXNrcygpO1xuXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkVGFza3MgPSBwcm9qZWN0c1xuICAgICAgICAgICAgLmZpbHRlcigocCkgPT4gIXAuaXNPdmVydmlldygpKVxuICAgICAgICAgICAgLm1hcCgocCkgPT4gcC5nZXRUYXNrcygpKVxuICAgICAgICAgICAgLmZsYXQoKVxuICAgICAgICAgICAgLmZpbHRlcihmaWx0ZXIpO1xuXG4gICAgICAgIGFkZFRhc2tzKGZpbHRlcmVkVGFza3MpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRUYXNrLFxuICAgICAgICBnZXRUYXNrcyxcbiAgICAgICAgc2V0U29ydFR5cGUsXG4gICAgICAgIGdldFNvcnRUeXBlLFxuICAgICAgICBhZGRUYXNrLFxuICAgICAgICBhZGRUYXNrcyxcbiAgICAgICAgZ2V0TmFtZSxcbiAgICAgICAgZ2V0UHJvamVjdEluZGV4LFxuICAgICAgICBzZXRQcm9qZWN0SW5kZXgsXG4gICAgICAgIGdldEZpbHRlcixcbiAgICAgICAgaGlkZVRhc2tEZXNjcmlwdGlvbnMsXG4gICAgICAgIGlzT3ZlcnZpZXcsXG4gICAgICAgIGdldEhlYWRlcixcbiAgICAgICAgc29ydFRhc2tzLFxuICAgICAgICBjbGVhclRhc2tzLFxuICAgICAgICBkZWxldGVUYXNrLFxuICAgICAgICB1cGRhdGVPdmVydmlldyxcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3ZlcnZpZXc7XG4iLCJpbXBvcnQgc29ydEZ1bmN0aW9ucyBmcm9tIFwiLi9zb3J0RnVuY3Rpb25zXCI7XG5cbmNvbnN0IFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBsZXQgdGFza3MgPSBbXTtcbiAgICBsZXQgbmFtZSA9IHByb2plY3ROYW1lO1xuICAgIGxldCBwcm9qZWN0SW5kZXggPSAwO1xuICAgIGxldCBzb3J0VHlwZSA9IFwiRGVzY2VuZGluZyBwcmlvcml0eVwiO1xuXG4gICAgY29uc3QgZ2V0VGFzayA9ICh0YXNrSW5kZXgpID0+IHRhc2tzW3Rhc2tJbmRleF07XG4gICAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB0YXNrcztcblxuICAgIGNvbnN0IHNvcnRUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgc29ydEZ1bmN0aW9uc1tzb3J0VHlwZV0odGFza3MpO1xuXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0YXNrLnNldFByb3BlcnR5KFwiaW5kZXhcIiwgaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0U29ydFR5cGUgPSAodmFsdWUpID0+IHtcbiAgICAgICAgc29ydFR5cGUgPSB2YWx1ZTtcbiAgICAgICAgc29ydFRhc2tzKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFNvcnRUeXBlID0gKCkgPT4gc29ydFR5cGU7XG5cbiAgICBjb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgdGFza3MucHVzaCh0YXNrKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkVGFza3MgPSAodGFza3NBcnJheSkgPT4ge1xuICAgICAgICB0YXNrc0FycmF5LmZvckVhY2goKHRhc2spID0+IGFkZFRhc2sodGFzaykpO1xuICAgICAgICBzb3J0VGFza3MoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrSW5kZXgpID0+IHtcbiAgICAgICAgdGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG5cbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHRhc2suc2V0UHJvcGVydHkoXCJpbmRleFwiLCBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhclRhc2tzID0gKCkgPT4ge1xuICAgICAgICB0YXNrcyA9IFtdO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgICBjb25zdCBzZXROYW1lID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIG5hbWUgPSB2YWx1ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdEluZGV4ID0gKCkgPT4gcHJvamVjdEluZGV4O1xuICAgIGNvbnN0IHNldFByb2plY3RJbmRleCA9IChuZXdJbmRleCkgPT4ge1xuICAgICAgICBwcm9qZWN0SW5kZXggPSBuZXdJbmRleDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0SGVhZGVyID0gKCkgPT4gKHsgbmFtZSwgdGV4dDogXCJIZXJlIGFyZSB0aGUgdGFza3MgaW4gXCIgfSk7XG5cbiAgICBjb25zdCBpc092ZXJ2aWV3ID0gKCkgPT4gZmFsc2U7XG5cbiAgICBjb25zdCBoaWRlVGFza0Rlc2NyaXB0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgdGFzay5zZXRQcm9wZXJ0eShcImRlc2NyaXB0aW9uVG9nZ2xlZFwiLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRUYXNrLFxuICAgICAgICBnZXRUYXNrcyxcbiAgICAgICAgYWRkVGFzayxcbiAgICAgICAgYWRkVGFza3MsXG4gICAgICAgIGRlbGV0ZVRhc2ssXG4gICAgICAgIGNsZWFyVGFza3MsXG4gICAgICAgIGdldFByb2plY3RJbmRleCxcbiAgICAgICAgc2V0UHJvamVjdEluZGV4LFxuICAgICAgICBnZXROYW1lLFxuICAgICAgICBzZXROYW1lLFxuICAgICAgICBnZXRIZWFkZXIsXG4gICAgICAgIGlzT3ZlcnZpZXcsXG4gICAgICAgIHNldFNvcnRUeXBlLFxuICAgICAgICBnZXRTb3J0VHlwZSxcbiAgICAgICAgaGlkZVRhc2tEZXNjcmlwdGlvbnMsXG4gICAgICAgIHNvcnRUYXNrcyxcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImNvbnN0IFByb2plY3RNYW5hZ2VyID0gKGluaXRpYWxQcm9qZWN0cyA9IFtdKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBpbml0aWFsUHJvamVjdHM7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbMF07XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnNldFByb2plY3RJbmRleChpbmRleCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3RJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdEluZGV4XTtcblxuICAgICAgICBpZiAocHJvamVjdC5pc092ZXJ2aWV3KCkpIHtcbiAgICAgICAgICAgIHByb2plY3QudXBkYXRlT3ZlcnZpZXcocHJvamVjdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdC5zZXRQcm9qZWN0SW5kZXgocHJvamVjdHMubGVuZ3RoKTtcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0SW5kZXgpID0+IHtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG5cbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3Quc2V0UHJvamVjdEluZGV4KGluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbnVtT3ZlcnZpZXdzID0gcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlzT3ZlcnZpZXcoKSkubGVuZ3RoO1xuICAgICAgICBjb25zdCBudW1Qcm9qZWN0cyA9IHByb2plY3RzLmxlbmd0aCAtIG51bU92ZXJ2aWV3cztcbiAgICAgICAgbGV0IG5ld0luZGV4O1xuXG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdC5nZXRQcm9qZWN0SW5kZXgoKSA9PT0gcHJvamVjdEluZGV4KSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdEluZGV4ID4gbnVtT3ZlcnZpZXdzKSB7XG4gICAgICAgICAgICAgICAgbmV3SW5kZXggPSBwcm9qZWN0SW5kZXggLSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9qZWN0SW5kZXggPT09IG51bU92ZXJ2aWV3cyAmJiBudW1Qcm9qZWN0cyA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdJbmRleCA9IHByb2plY3RJbmRleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3SW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3SW5kZXggPSBjdXJyZW50UHJvamVjdC5nZXRQcm9qZWN0SW5kZXgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbbmV3SW5kZXhdO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRDdXJyZW50UHJvamVjdCA9ICgpID0+IGdldFByb2plY3QoY3VycmVudFByb2plY3QuZ2V0UHJvamVjdEluZGV4KCkpO1xuICAgIGNvbnN0IHNldEN1cnJlbnRQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbaW5kZXhdO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQcm9qZWN0LFxuICAgICAgICBnZXRQcm9qZWN0cyxcbiAgICAgICAgYWRkUHJvamVjdCxcbiAgICAgICAgZGVsZXRlUHJvamVjdCxcbiAgICAgICAgZ2V0Q3VycmVudFByb2plY3QsXG4gICAgICAgIHNldEN1cnJlbnRQcm9qZWN0LFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0TWFuYWdlcjtcbiIsImltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QsIGNvbXBhcmVBc2MsIGlzVmFsaWQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgVGFzayA9ICh0YXNrUHJvamVjdCwgdGFza1Byb3BlcnRpZXMpID0+IHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0ge1xuICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uVG9nZ2xlZDogZmFsc2UsXG4gICAgICAgIHByaW9yaXR5OiBcIm5vbmVcIixcbiAgICAgICAgZHVlRGF0ZTogbnVsbCxcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIGluZGV4OiBudWxsLFxuICAgIH07XG4gICAgY29uc3QgcHJvamVjdCA9IHRhc2tQcm9qZWN0O1xuXG4gICAgT2JqZWN0LmVudHJpZXModGFza1Byb3BlcnRpZXMpLmZvckVhY2goKFtwcm9wZXJ0eSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIHByb3BlcnRpZXNbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICBjb25zdCBnZXRQcm9wZXJ0eSA9IChwcm9wZXJ0eSkgPT4gcHJvcGVydGllc1twcm9wZXJ0eV07XG4gICAgY29uc3QgZ2V0UHJvcGVydGllcyA9ICgpID0+IHByb3BlcnRpZXM7XG4gICAgY29uc3QgZ2V0UGFyZW50UHJvamVjdCA9ICgpID0+IHByb2plY3Q7XG5cbiAgICBjb25zdCBnZXREdWVJbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGlzVmFsaWQocHJvcGVydGllcy5kdWVEYXRlKSkge1xuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVEYXRlID0gY29tcGFyZUFzYyhwcm9wZXJ0aWVzLmR1ZURhdGUsIERhdGUubm93KCkpO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VGcm9tTm93ID0gZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChwcm9wZXJ0aWVzLmR1ZURhdGUpO1xuXG4gICAgICAgICAgICByZXR1cm4geyByZWxhdGl2ZURhdGUsIGRpc3RhbmNlRnJvbU5vdyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRQcm9wZXJ0eSA9IChwcm9wZXJ0eSwgdmFsdWUpID0+IHtcbiAgICAgICAgcHJvcGVydGllc1twcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UHJvcGVydHksXG4gICAgICAgIGdldFByb3BlcnRpZXMsXG4gICAgICAgIGdldER1ZUluLFxuICAgICAgICBzZXRQcm9wZXJ0eSxcbiAgICAgICAgZ2V0UGFyZW50UHJvamVjdCxcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsImNvbnN0IHByaW9yaXR5VmFsdWVzID0ge1xuICAgIGhpZ2g6IDMsXG4gICAgbWVkaXVtOiAyLFxuICAgIGxvdzogMSxcbiAgICBub25lOiAwLFxufTtcblxuZnVuY3Rpb24gYXNjZW5kaW5nRGF0ZSh0YXNrQSwgdGFza0IpIHtcbiAgICBpZiAodGFza0EuZ2V0UHJvcGVydHkoXCJkdWVEYXRlXCIpID09PSB0YXNrQi5nZXRQcm9wZXJ0eShcImR1ZURhdGVcIikpIHJldHVybiAwO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gdGFza0EuZ2V0UHJvcGVydHkoXCJkdWVEYXRlXCIpID4gdGFza0IuZ2V0UHJvcGVydHkoXCJkdWVEYXRlXCIpO1xuXG4gICAgcmV0dXJuIHJlc3VsdCA/IDEgOiAtMTtcbn1cblxuZnVuY3Rpb24gZGVzY2VuZGluZ0RhdGUodGFza0EsIHRhc2tCKSB7XG4gICAgaWYgKHRhc2tBLmdldFByb3BlcnR5KFwiZHVlRGF0ZVwiKSA9PT0gdGFza0IuZ2V0UHJvcGVydHkoXCJkdWVEYXRlXCIpKSByZXR1cm4gMDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IHRhc2tBLmdldFByb3BlcnR5KFwiZHVlRGF0ZVwiKSA8IHRhc2tCLmdldFByb3BlcnR5KFwiZHVlRGF0ZVwiKTtcblxuICAgIHJldHVybiByZXN1bHQgPyAxIDogLTE7XG59XG5cbmZ1bmN0aW9uIGFzY2VuZGluZ1ByaW9yaXR5KHRhc2tBLCB0YXNrQikge1xuICAgIGlmIChwcmlvcml0eVZhbHVlc1t0YXNrQS5nZXRQcm9wZXJ0eShcInByaW9yaXR5XCIpXSA9PT0gcHJpb3JpdHlWYWx1ZXNbdGFza0IuZ2V0UHJvcGVydHkoXCJwcmlvcml0eVwiKV0pIHJldHVybiAwO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gcHJpb3JpdHlWYWx1ZXNbdGFza0EuZ2V0UHJvcGVydHkoXCJwcmlvcml0eVwiKV0gPiBwcmlvcml0eVZhbHVlc1t0YXNrQi5nZXRQcm9wZXJ0eShcInByaW9yaXR5XCIpXTtcblxuICAgIHJldHVybiByZXN1bHQgPyAxIDogLTE7XG59XG5cbmZ1bmN0aW9uIGRlc2NlbmRpbmdQcmlvcml0eSh0YXNrQSwgdGFza0IpIHtcbiAgICBpZiAocHJpb3JpdHlWYWx1ZXNbdGFza0EuZ2V0UHJvcGVydHkoXCJwcmlvcml0eVwiKV0gPT09IHByaW9yaXR5VmFsdWVzW3Rhc2tCLmdldFByb3BlcnR5KFwicHJpb3JpdHlcIildKSByZXR1cm4gMDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IHByaW9yaXR5VmFsdWVzW3Rhc2tBLmdldFByb3BlcnR5KFwicHJpb3JpdHlcIildIDwgcHJpb3JpdHlWYWx1ZXNbdGFza0IuZ2V0UHJvcGVydHkoXCJwcmlvcml0eVwiKV07XG5cbiAgICByZXR1cm4gcmVzdWx0ID8gMSA6IC0xO1xufVxuXG5mdW5jdGlvbiBmaW5pc2hlZEZpcnN0KHRhc2tBKSB7XG4gICAgcmV0dXJuICF0YXNrQS5nZXRQcm9wZXJ0eShcImRvbmVcIikgPyAxIDogLTE7XG59XG5cbmZ1bmN0aW9uIHVuZmluaXNoZWRGaXJzdCh0YXNrQSkge1xuICAgIHJldHVybiB0YXNrQS5nZXRQcm9wZXJ0eShcImRvbmVcIikgPyAxIDogLTE7XG59XG5cbmNvbnN0IHNvcnRGdW5jdGlvbnMgPSB7XG4gICAgXCJBc2NlbmRpbmcgZGF0ZXNcIjogKHRhc2tzKSA9PiB0YXNrcy5zb3J0KChhLCBiKSA9PiBhc2NlbmRpbmdEYXRlKGEsIGIpKSxcbiAgICBcIkRlc2NlbmRpbmcgZGF0ZXNcIjogKHRhc2tzKSA9PiB0YXNrcy5zb3J0KChhLCBiKSA9PiBkZXNjZW5kaW5nRGF0ZShhLCBiKSksXG4gICAgXCJBc2NlbmRpbmcgcHJpb3JpdHlcIjogKHRhc2tzKSA9PiB0YXNrcy5zb3J0KChhLCBiKSA9PiBhc2NlbmRpbmdQcmlvcml0eShhLCBiKSksXG4gICAgXCJEZXNjZW5kaW5nIHByaW9yaXR5XCI6ICh0YXNrcykgPT4gdGFza3Muc29ydCgoYSwgYikgPT4gZGVzY2VuZGluZ1ByaW9yaXR5KGEsIGIpKSxcbiAgICBcIkZpbmlzaGVkIGZpcnN0XCI6ICh0YXNrcykgPT4gdGFza3Muc29ydCgoYSwgYikgPT4gZmluaXNoZWRGaXJzdChhLCBiKSksXG4gICAgXCJVbmZpbmlzaGVkIGZpcnN0XCI6ICh0YXNrcykgPT4gdGFza3Muc29ydCgoYSwgYikgPT4gdW5maW5pc2hlZEZpcnN0KGEsIGIpKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNvcnRGdW5jdGlvbnM7XG4iLCJpbXBvcnQgeyBhZGQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vbW9kZWxzL1Rhc2tcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL21vZGVscy9Qcm9qZWN0XCI7XG5pbXBvcnQgT3ZlcnZpZXcgZnJvbSBcIi4vbW9kZWxzL092ZXJ2aWV3XCI7XG5cbmV4cG9ydCBjb25zdCBvdmVydmlld3MgPSBbT3ZlcnZpZXcoXCJUb2RheVwiKSwgT3ZlcnZpZXcoXCJUaGlzIFdlZWtcIiksIE92ZXJ2aWV3KFwiQWxsIFRhc2tzXCIpXTtcblxuZnVuY3Rpb24gYWRkVG9Ob3codGltZSkge1xuICAgIHJldHVybiBhZGQobmV3IERhdGUoRGF0ZS5ub3coKSksIHRpbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVtb1RlbXBsYXRlKCkge1xuICAgIGNvbnN0IFByb2plY3QxID0gUHJvamVjdChcIkNob3Jlc1wiKTtcblxuICAgIGNvbnN0IHAxVGFzazEgPSBUYXNrKFByb2plY3QxLCB7XG4gICAgICAgIHRpdGxlOiBcIkJ1eSBncm9jZXJpZXNcIixcbiAgICAgICAgcHJpb3JpdHk6IFwibG93XCIsXG4gICAgICAgIGR1ZURhdGU6IGFkZFRvTm93KHsgZGF5czogMiB9KSxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTmVlZCB0byBidXkgbWlsayBhbmQgZWdnc1wiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcDFUYXNrMiA9IFRhc2soUHJvamVjdDEsIHtcbiAgICAgICAgdGl0bGU6IFwiVGFrZSBvdXQgdGhlIHRyYXNoXCIsXG4gICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgICAgZHVlRGF0ZTogYWRkVG9Ob3coeyBkYXlzOiAtMSB9KSxcbiAgICAgICAgZG9uZTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHAxVGFzazMgPSBUYXNrKFByb2plY3QxLCB7XG4gICAgICAgIHRpdGxlOiBcIkRvIGxhdW5kcnlcIixcbiAgICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgICBkdWVEYXRlOiBhZGRUb05vdyh7IGhvdXJzOiA1IH0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcDFUYXNrNCA9IFRhc2soUHJvamVjdDEsIHtcbiAgICAgICAgdGl0bGU6IFwiV2FzaCBkaXNoZXNcIixcbiAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgIGR1ZURhdGU6IGFkZFRvTm93KHsgaG91cnM6IC0zIH0pLFxuICAgICAgICBkb25lOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcDFUYXNrNSA9IFRhc2soUHJvamVjdDEsIHtcbiAgICAgICAgdGl0bGU6IFwiQ2xlYW4gcm9vbVwiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgZHVlRGF0ZTogYWRkVG9Ob3coeyBkYXlzOiAzIH0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcDFUYXNrNiA9IFRhc2soUHJvamVjdDEsIHtcbiAgICAgICAgdGl0bGU6IFwiUGF5IHJlbnRcIixcbiAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgIGR1ZURhdGU6IGFkZFRvTm93KHsgd2Vla3M6IDIgfSksXG4gICAgfSk7XG5cbiAgICBjb25zdCBwMVRhc2s3ID0gVGFzayhQcm9qZWN0MSwge1xuICAgICAgICB0aXRsZTogXCJQYXkgdXRpbGl0aWVzXCIsXG4gICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgICAgZHVlRGF0ZTogYWRkVG9Ob3coeyBkYXlzOiA0IH0pLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJOZWVkIHRvIHBheSB3YXRlciBhbmQgZ2FzXCIsXG4gICAgfSk7XG5cbiAgICBQcm9qZWN0MS5hZGRUYXNrcyhbcDFUYXNrMSwgcDFUYXNrMiwgcDFUYXNrMywgcDFUYXNrNywgcDFUYXNrNCwgcDFUYXNrNSwgcDFUYXNrNl0pO1xuXG4gICAgY29uc3QgUHJvamVjdDIgPSBQcm9qZWN0KFwiSG9tZXdvcmtcIik7XG5cbiAgICBjb25zdCBwMlRhc2sxID0gVGFzayhQcm9qZWN0Miwge1xuICAgICAgICB0aXRsZTogXCJGaW5pc2ggRW5nbGlzaCBlc3NheVwiLFxuICAgICAgICBwcmlvcml0eTogXCJsb3dcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ2hvb3NlIGEgdG9waWMgYW5kIHdyaXRlIGEgMTAwMC13b3JkIGVzc2F5XCIsXG4gICAgICAgIGR1ZURhdGU6IGFkZFRvTm93KHsgd2Vla3M6IDEgfSksXG4gICAgfSk7XG5cbiAgICBjb25zdCBwMlRhc2syID0gVGFzayhQcm9qZWN0Miwge1xuICAgICAgICB0aXRsZTogXCJTdHVkeSBmb3IgbWF0aCBleGFtXCIsXG4gICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgICAgZHVlRGF0ZTogYWRkVG9Ob3coeyBkYXlzOiA5IH0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcDJUYXNrMyA9IFRhc2soUHJvamVjdDIsIHtcbiAgICAgICAgdGl0bGU6IFwiRG8gcGh5c2ljcyBob21ld29ya1wiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgZHVlRGF0ZTogYWRkVG9Ob3coeyBkYXlzOiAtMSB9KSxcbiAgICAgICAgZG9uZTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHAyVGFzazQgPSBUYXNrKFByb2plY3QyLCB7XG4gICAgICAgIHRpdGxlOiBcIkNvbXBsZXRlIEhpc3RvcnkgcmVhZGluZ1wiLFxuICAgICAgICBwcmlvcml0eTogXCJsb3dcIixcbiAgICAgICAgZHVlRGF0ZTogYWRkVG9Ob3coeyBob3VyczogNSB9KSxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUmVhZCBjaGFwdGVycyA1IGFuZCA2IGluIHRoZSB0ZXh0Ym9va1wiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcDJUYXNrNSA9IFRhc2soUHJvamVjdDIsIHtcbiAgICAgICAgdGl0bGU6IFwiUHJhY3RpY2UgR2VybWFuIHZvY2FidWxhcnlcIixcbiAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgIGR1ZURhdGU6IGFkZFRvTm93KHsgZGF5czogMiB9KSxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUmV2aWV3IGFuZCBtZW1vcml6ZSB2b2NhYnVsYXJ5IHdvcmRzIGZyb20gVW5pdCAzXCIsXG4gICAgfSk7XG5cbiAgICBQcm9qZWN0Mi5hZGRUYXNrcyhbcDJUYXNrMSwgcDJUYXNrMiwgcDJUYXNrMywgcDJUYXNrNCwgcDJUYXNrNV0pO1xuXG4gICAgY29uc3QgUHJvamVjdDMgPSBQcm9qZWN0KFwiT3RoZXJcIik7XG5cbiAgICBjb25zdCBwM1Rhc2sxID0gVGFzayhQcm9qZWN0Mywge1xuICAgICAgICB0aXRsZTogXCJGaW5pc2ggVE9QXCIsXG4gICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IHAzVGFzazIgPSBUYXNrKFByb2plY3QzLCB7XG4gICAgICAgIHRpdGxlOiBcIkxlYXJuIHRvIGRyYXdcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IHAzVGFzazMgPSBUYXNrKFByb2plY3QzLCB7XG4gICAgICAgIHRpdGxlOiBcIlN0YXJ0IGdvaW5nIHRvIHRoZSBneW1cIixcbiAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBwM1Rhc2s0ID0gVGFzayhQcm9qZWN0Mywge1xuICAgICAgICB0aXRsZTogXCJDb29rIHNvbWUgbmljZSBtZWFsc1wiLFxuICAgICAgICBwcmlvcml0eTogXCJsb3dcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU2VsZWN0IGEgcmVjaXBlIGFuZCBnYXRoZXIgaW5ncmVkaWVudHMgdG8gdHJ5IGEgbmV3IGRpc2hcIixcbiAgICAgICAgZG9uZTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHAzVGFzazUgPSBUYXNrKFByb2plY3QzLCB7XG4gICAgICAgIHRpdGxlOiBcIlByYWN0aWNlIHBsYXlpbmcgdGhlIGd1aXRhclwiLFxuICAgICAgICBwcmlvcml0eTogXCJsb3dcIixcbiAgICAgICAgZHVlRGF0ZTogYWRkVG9Ob3coeyBkYXlzOiAyIH0pLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTcGVuZCAzMCBtaW51dGVzIHByYWN0aWNpbmcgY2hvcmRzIGFuZCBhIG5ldyBzb25nXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBwM1Rhc2s2ID0gVGFzayhQcm9qZWN0Mywge1xuICAgICAgICB0aXRsZTogXCJHbyBmb3IgYSBoaWtlXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICBkdWVEYXRlOiBhZGRUb05vdyh7IGRheXM6IDUgfSksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvb2sgdXAgc29tZSB0cmFpbHMgYW5kIHBsYW4gYSBoaWtpbmcgdHJpcCB3aXRoIGZyaWVuZHNcIixcbiAgICB9KTtcblxuICAgIFByb2plY3QzLmFkZFRhc2tzKFtwM1Rhc2sxLCBwM1Rhc2s1LCBwM1Rhc2syLCBwM1Rhc2szLCBwM1Rhc2s0LCBwM1Rhc2s2XSk7XG5cbiAgICByZXR1cm4gWy4uLm92ZXJ2aWV3cywgUHJvamVjdDEsIFByb2plY3QyLCBQcm9qZWN0M107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbXB0eVRlbXBsYXRlKCkge1xuICAgIHJldHVybiBbLi4ub3ZlcnZpZXdzLCBQcm9qZWN0KFwiTXkgUHJvamVjdFwiKV07XG59XG4iLCJjb25zdCBlbGVtZW50cyA9IHtcbiAgICBwYWdlSGVhZGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhZ2UtaGVhZGVyXCIpLFxuICAgIHByb2plY3RIZWFkZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1oZWFkZXJcIiksXG4gICAgbWFpbldyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi13cmFwcGVyXCIpLFxuICAgIHBhZ2VIZWFkZXJOYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlci1uYW1lXCIpLFxuICAgIHBhZ2VIZWFkZXJUZXh0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlci10ZXh0XCIpLFxuXG4gICAgc2lnbnVwUGFnZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXAtcGFnZVwiKSxcbiAgICBzaWdudXBGb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1wYWdlIGZvcm1cIiksXG4gICAgc2lnbnVwRm9ybVVzZXJuYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJuYW1lXCIpLFxuICAgIHRlbXBsYXRlQnV0dG9uc0NvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXAtc3VibWl0LWJ1dHRvbnNcIiksXG4gICAgZGVtb1RlbXBsYXRlQnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbW8tdGVtcGxhdGUtYnV0dG9uXCIpLFxuICAgIGVtcHR5VGVtcGxhdGVCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1wdHktdGVtcGxhdGUtYnV0dG9uXCIpLFxuXG4gICAgbmV3VGFza0J1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFza1wiKSxcbiAgICBzb3J0VGFza3NTZWxlY3RvcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXNvcnRcIiksXG4gICAgdGFza3NDb250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10YXNrc1wiKSxcblxuICAgIHNpZGViYXJDb250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKSxcbiAgICBzaWRlYmFyQ29sbGFwc2U6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1jb2xsYXBzZS1idXR0b25cIiksXG4gICAgb3ZlcnZpZXdzQ29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJ2aWV3LXByb2plY3RzXCIpLFxuICAgIHByb2plY3RzQ29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXItcHJvamVjdHNcIiksXG4gICAgdGFiVGVtcGxhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiLXRlbXBsYXRlXCIpLFxuXG4gICAgcHJvamVjdEZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1mb3JtXCIpLFxuICAgIHByb2plY3RGb3JtTW9kYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1mb3JtLW1vZGFsXCIpLFxuICAgIHByb2plY3RGb3JtSGVhZGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZm9ybS1tb2RhbC10aXRsZVwiKSxcbiAgICBwcm9qZWN0Rm9ybU5hbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lXCIpLFxuICAgIHByb2plY3RGb3JtU3VibWl0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0XCIpLFxuXG4gICAgdGFza0Zvcm1Nb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWZvcm0tbW9kYWxcIiksXG4gICAgdGFza1RlbXBsYXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGVtcGxhdGVcIiksXG4gICAgdGFza0Zvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1mb3JtXCIpLFxuICAgIHRhc2tGb3JtVGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKSxcbiAgICB0YXNrRm9ybVByb2plY3RDb250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1zZWxlY3QtY29udGFpbmVyXCIpLFxuICAgIHRhc2tGb3JtUHJvamVjdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByb2plY3RcIiksXG4gICAgdGFza0Zvcm1EZXNjcmlwdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NyaXB0aW9uXCIpLFxuICAgIHRhc2tGb3JtUHJpb3JpdHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcmlvcml0eVwiKSxcbiAgICB0YXNrRm9ybURvbmU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kb25lXCIpLFxuICAgIHRhc2tGb3JtRHVlRGF0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWR1ZS1kYXRlXCIpLFxuICAgIHRhc2tGb3JtU3VibWl0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrXCIpLFxuICAgIHRhc2tGb3JtSGVhZGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZm9ybS1tb2RhbC10aXRsZVwiKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRzO1xuIiwiaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuL2VsZW1lbnRzXCI7XG5cbmZ1bmN0aW9uIGlzVmFsaWRGb3JtKGZvcm0pIHtcbiAgICByZXR1cm4gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbcmVxdWlyZWRdOmludmFsaWRcIikubGVuZ3RoID09PSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybURhdGEoZm9ybSkge1xuICAgIGlmICghaXNWYWxpZEZvcm0oZm9ybSkpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IGZvcm1EYXRhID0ge307XG5cbiAgICBpZiAoZm9ybS5pZCA9PT0gXCJ0YXNrLWZvcm1cIikge1xuICAgICAgICBmb3JtRGF0YS50aXRsZSA9IGVsZW1lbnRzLnRhc2tGb3JtVGl0bGUudmFsdWU7XG4gICAgICAgIGZvcm1EYXRhLmRlc2NyaXB0aW9uID0gZWxlbWVudHMudGFza0Zvcm1EZXNjcmlwdGlvbi52YWx1ZS50cmltKCk7XG4gICAgICAgIGZvcm1EYXRhLnByaW9yaXR5ID0gZWxlbWVudHMudGFza0Zvcm1Qcmlvcml0eS52YWx1ZTtcbiAgICAgICAgZm9ybURhdGEuZG9uZSA9IGVsZW1lbnRzLnRhc2tGb3JtRG9uZS5jaGVja2VkO1xuICAgICAgICBmb3JtRGF0YS5kdWVEYXRlID0gbnVsbDtcbiAgICAgICAgZm9ybURhdGEucHJvamVjdEluZGV4ID0gbnVsbDtcblxuICAgICAgICBpZiAoZWxlbWVudHMudGFza0Zvcm1EdWVEYXRlLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBmb3JtRGF0YS5kdWVEYXRlID0gbmV3IERhdGUoZWxlbWVudHMudGFza0Zvcm1EdWVEYXRlLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZWxlbWVudHMudGFza0Zvcm1Qcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImRpc3BsYXktbm9uZVwiKSkge1xuICAgICAgICAgICAgZm9ybURhdGEucHJvamVjdEluZGV4ID0gZWxlbWVudHMudGFza0Zvcm1Qcm9qZWN0LnZhbHVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChmb3JtLmlkID09PSBcInByb2plY3QtZm9ybVwiKSB7XG4gICAgICAgIGZvcm1EYXRhLm5hbWUgPSBlbGVtZW50cy5wcm9qZWN0Rm9ybU5hbWUudmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRJbnB1dHMoZm9ybSkge1xuICAgIGNvbnN0IHRleHRJbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSd0ZXh0J10sIHRleHRhcmVhXCIpO1xuICAgIGNvbnN0IGNvbWJvQm94ZXMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RcIik7XG4gICAgY29uc3QgY2hlY2tCb3hlcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIik7XG5cbiAgICB0ZXh0SW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICB9KTtcblxuICAgIGNvbWJvQm94ZXMuZm9yRWFjaCgoY29tYm8pID0+IHtcbiAgICAgICAgY29tYm8ucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb24uaGFzQXR0cmlidXRlKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgICAgICAgICBjb21iby52YWx1ZSA9IG9wdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjaGVja0JveGVzLmZvckVhY2goKGNoZWNrQm94KSA9PiB7XG4gICAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgIGVsZW1lbnRzLnRhc2tGb3JtRHVlRGF0ZS5fZmxhdHBpY2tyLmNsZWFyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkUHJvamVjdFNlbGVjdE9wdGlvbnMocHJvamVjdHMpIHtcbiAgICBlbGVtZW50cy50YXNrRm9ybVByb2plY3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0LmlzT3ZlcnZpZXcoKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGluZGV4O1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICAgICAgZWxlbWVudHMudGFza0Zvcm1Qcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkUHJvamVjdFByb3BlcnRpZXMocHJvamVjdCkge1xuICAgIGVsZW1lbnRzLnByb2plY3RGb3JtTmFtZS52YWx1ZSA9IHByb2plY3QuZ2V0TmFtZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRhc2tQcm9wZXJ0aWVzKHRhc2spIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGFzay5nZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICBlbGVtZW50cy50YXNrRm9ybVRpdGxlLnZhbHVlID0gcHJvcGVydGllcy50aXRsZTtcbiAgICBlbGVtZW50cy50YXNrRm9ybURlc2NyaXB0aW9uLnZhbHVlID0gcHJvcGVydGllcy5kZXNjcmlwdGlvbiA/IHByb3BlcnRpZXMuZGVzY3JpcHRpb24gOiBcIlwiO1xuICAgIGVsZW1lbnRzLnRhc2tGb3JtUHJpb3JpdHkudmFsdWUgPSBwcm9wZXJ0aWVzLnByaW9yaXR5O1xuICAgIGVsZW1lbnRzLnRhc2tGb3JtRG9uZS5jaGVja2VkID0gcHJvcGVydGllcy5kb25lO1xuXG4gICAgaWYgKHByb3BlcnRpZXMuZHVlRGF0ZSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgICAgZWxlbWVudHMudGFza0Zvcm1EdWVEYXRlLl9mbGF0cGlja3Iuc2V0RGF0ZShwcm9wZXJ0aWVzLmR1ZURhdGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTW9kYWxTaG93KG1vZGFsLCB0cmlnZ2VyKSB7XG4gICAgY29uc3QgdHlwZSA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1mb3JtLXR5cGVcIik7XG5cbiAgICBpZiAodHlwZSA9PT0gXCJuZXdcIikge1xuICAgICAgICBpZiAobW9kYWwuaWQgPT09IFwicHJvamVjdC1mb3JtLW1vZGFsXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLnByb2plY3RGb3JtSGVhZGVyLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiO1xuICAgICAgICAgICAgZWxlbWVudHMucHJvamVjdEZvcm1TdWJtaXQudGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgICAgICAgICAgZWxlbWVudHMucHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwiZGF0YS1mb3JtLXR5cGVcIiwgXCJuZXdcIik7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kYWwuaWQgPT09IFwidGFzay1mb3JtLW1vZGFsXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLnRhc2tGb3JtSGVhZGVyLnRleHRDb250ZW50ID0gXCJOZXcgVGFza1wiO1xuICAgICAgICAgICAgZWxlbWVudHMudGFza0Zvcm1TdWJtaXQudGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgICAgICAgICAgZWxlbWVudHMudGFza0Zvcm0uc2V0QXR0cmlidXRlKFwiZGF0YS1mb3JtLXR5cGVcIiwgXCJuZXdcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gXCJlZGl0XCIpIHtcbiAgICAgICAgaWYgKG1vZGFsLmlkID09PSBcInByb2plY3QtZm9ybS1tb2RhbFwiKSB7XG4gICAgICAgICAgICBlbGVtZW50cy5wcm9qZWN0Rm9ybUhlYWRlci50ZXh0Q29udGVudCA9IFwiRWRpdCBQcm9qZWN0XCI7XG4gICAgICAgICAgICBlbGVtZW50cy5wcm9qZWN0Rm9ybVN1Ym1pdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgICAgICAgICAgZWxlbWVudHMucHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwiZGF0YS1mb3JtLXR5cGVcIiwgXCJlZGl0XCIpO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGFsLmlkID09PSBcInRhc2stZm9ybS1tb2RhbFwiKSB7XG4gICAgICAgICAgICBlbGVtZW50cy50YXNrRm9ybUhlYWRlci50ZXh0Q29udGVudCA9IFwiRWRpdCBUYXNrXCI7XG4gICAgICAgICAgICBlbGVtZW50cy50YXNrRm9ybVN1Ym1pdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgICAgICAgICAgZWxlbWVudHMudGFza0Zvcm0uc2V0QXR0cmlidXRlKFwiZGF0YS1mb3JtLXR5cGVcIiwgXCJlZGl0XCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vdGFza1ZpZXdcIjtcbmltcG9ydCBzb3J0RnVuY3Rpb25zIGZyb20gXCIuLi9tb2RlbHMvc29ydEZ1bmN0aW9uc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHRhc2tzID0gcHJvamVjdC5nZXRUYXNrcygpO1xuICAgIGNvbnN0IHN1YmhlYWRlciA9IHByb2plY3QuZ2V0SGVhZGVyKCk7XG4gICAgZWxlbWVudHMudGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBlbGVtZW50cy5zaWRlYmFyQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtY3VycmVudC1wcm9qZWN0XCIsIHByb2plY3QuZ2V0UHJvamVjdEluZGV4KCkpO1xuXG4gICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpICE9PSBcIkFsbCBUYXNrc1wiKSB7XG4gICAgICAgIGVsZW1lbnRzLnByb2plY3RIZWFkZXIuaW5uZXJIVE1MID0gYCR7c3ViaGVhZGVyLnRleHR9PHNwYW4gY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj4ke3N1YmhlYWRlci5uYW1lfTwvc3Bhbj5gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnRzLnByb2plY3RIZWFkZXIuaW5uZXJIVE1MID0gXCJIZXJlIGFyZSA8c3BhbiBjbGFzcz0ncHJvamVjdC1uYW1lJz5hbGw8L3NwYW4+IG9mIHRoZSB0YXNrcyB5b3UgbmVlZCB0byBkb1wiO1xuICAgIH1cblxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY3JlYXRlVGFzayh0YXNrKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gcHJvamVjdC5nZXRTb3J0VHlwZSgpO1xuICAgIGVsZW1lbnRzLnNvcnRUYXNrc1NlbGVjdG9yLmlubmVySFRNTCA9IFwiXCI7XG4gICAgT2JqZWN0LmtleXMoc29ydEZ1bmN0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGtleTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0ga2V5O1xuXG4gICAgICAgIGlmIChrZXkgPT09IHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudHMuc29ydFRhc2tzU2VsZWN0b3IuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUhlYWRlcihwcm9qZWN0KSB7XG4gICAgY29uc3Qgc3ViaGVhZGVyID0gcHJvamVjdC5nZXRIZWFkZXIoKTtcblxuICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSAhPT0gXCJBbGwgVGFza3NcIikge1xuICAgICAgICBlbGVtZW50cy5wcm9qZWN0SGVhZGVyLmlubmVySFRNTCA9IGAke3N1YmhlYWRlci50ZXh0fTxzcGFuIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+JHtzdWJoZWFkZXIubmFtZX08L3NwYW4+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50cy5wcm9qZWN0SGVhZGVyLmlubmVySFRNTCA9IFwiSGVyZSBhcmUgPHNwYW4gY2xhc3M9J3Byb2plY3QtbmFtZSc+YWxsPC9zcGFuPiBvZiB0aGUgdGFza3MgeW91IG5lZWQgdG8gZG9cIjtcbiAgICB9XG59XG4iLCJpbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4vZWxlbWVudHNcIjtcblxuY29uc3QgeyBwcm9qZWN0c0NvbnRhaW5lciwgdGFiVGVtcGxhdGUsIG92ZXJ2aWV3c0NvbnRhaW5lciwgc2lkZWJhckNvbnRhaW5lciB9ID0gZWxlbWVudHM7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTZWxlY3RlZChjdXJyZW50UHJvamVjdEluZGV4KSB7XG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbi13cmFwcGVyIC5wcm9qZWN0LXNlbGVjdG9yXCIpO1xuXG4gICAgdGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gY3VycmVudFByb2plY3RJbmRleCkge1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhYihwcm9qZWN0KSB7XG4gICAgaWYgKHByb2plY3QuaXNPdmVydmlldygpKSB7XG4gICAgICAgIGNvbnN0IHRhYiA9IHRhYlRlbXBsYXRlLmNsb25lTm9kZSgpO1xuICAgICAgICB0YWIucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgIHRhYi50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShcInVzZXItcHJvamVjdFwiKTtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW92ZXJ2aWV3XCIpO1xuXG4gICAgICAgIG92ZXJ2aWV3c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFiID0gdGFiVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgIHRhYi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICB0YWIuaW5uZXJIVE1MID0gcHJvamVjdC5nZXROYW1lKCkgKyB0YWIuaW5uZXJIVE1MO1xuXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGFiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRUYWJzKHByb2plY3RzKSB7XG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBvdmVydmlld3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IGNyZWF0ZVRhYihwcm9qZWN0KSk7XG4gICAgdXBkYXRlU2VsZWN0ZWQoK3NpZGViYXJDb250YWluZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1jdXJyZW50LXByb2plY3RcIikpO1xufVxuIiwiaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuL2VsZW1lbnRzXCI7XG5cbmNvbnN0IHsgdGFza3NDb250YWluZXIgfSA9IGVsZW1lbnRzO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGFzayh0YXNrLCB0YXNrRWxlbWVudCkge1xuICAgIGNvbnN0IHRhc2tQcm9wZXJ0aWVzID0gdGFzay5nZXRQcm9wZXJ0aWVzKCk7XG4gICAgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXByaW9yaXR5XCIpO1xuICAgIGNvbnN0IGR1ZUluRWxlbWVudCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kdWUtaW5cIik7XG4gICAgY29uc3Qgc2VwYXJhdG9yRWxlbWVudCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9yaXpvbnRhbC1zZXBhcmF0b3JcIik7XG4gICAgY29uc3QgZG9uZUVsZW1lbnQgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZG9uZVwiKTtcblxuICAgIHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1oZWFkZXJcIikudGV4dENvbnRlbnQgPSB0YXNrUHJvcGVydGllcy50aXRsZTtcbiAgICB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVzY3JpcHRpb25cIikudGV4dENvbnRlbnQgPSB0YXNrUHJvcGVydGllcy5kZXNjcmlwdGlvbjtcblxuICAgIGlmICh0YXNrLmdldFByb3BlcnR5KFwiZGVzY3JpcHRpb25Ub2dnbGVkXCIpKSB7XG4gICAgICAgIHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3JkaW9uLWNvbnRhaW5lclwiKS5jbGFzc0xpc3QuYWRkKFwiYWNjb3JkaW9uLXZpc2libGVcIik7XG4gICAgfVxuXG4gICAgdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaG93LWJ1dHRvblwiKS5oaWRkZW4gPSB0YXNrLmdldFByb3BlcnR5KFwiZGVzY3JpcHRpb25cIikgPT09IFwiXCI7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQcmlvcml0eSgpIHtcbiAgICAgICAgcHJpb3JpdHlFbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7dGFza1Byb3BlcnRpZXMucHJpb3JpdHl9LXByaW9yaXR5YCk7XG4gICAgICAgIHByaW9yaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2tQcm9wZXJ0aWVzLnByaW9yaXR5O1xuICAgICAgICBwcmlvcml0eUVsZW1lbnQuaGlkZGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRHVlSW4oKSB7XG4gICAgICAgIGNvbnN0IGR1ZUluID0gdGFzay5nZXREdWVJbigpO1xuXG4gICAgICAgIGlmIChkdWVJbikge1xuICAgICAgICAgICAgaWYgKGR1ZUluLnJlbGF0aXZlRGF0ZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGR1ZUluRWxlbWVudC50ZXh0Q29udGVudCA9IGBEdWUgaW4gJHtkdWVJbi5kaXN0YW5jZUZyb21Ob3d9YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZHVlSW4ucmVsYXRpdmVEYXRlID09PSAtMSAmJiBkdWVJbi5kaXN0YW5jZUZyb21Ob3cgIT09IFwiMCBzZWNvbmRzXCIpIHtcbiAgICAgICAgICAgICAgICBkdWVJbkVsZW1lbnQudGV4dENvbnRlbnQgPSBgT3ZlcmR1ZSAke2R1ZUluLmRpc3RhbmNlRnJvbU5vd31gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkdWVJbkVsZW1lbnQudGV4dENvbnRlbnQgPSBcIkR1ZSBub3chIVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZHVlSW5FbGVtZW50LmhpZGRlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1pbmZvXCIpLmhpZGRlbiA9IGZhbHNlO1xuICAgIHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1pbmZvXCIpLnN0eWxlID0gXCJcIjtcblxuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIHRhc2tQcm9wZXJ0aWVzLnByaW9yaXR5ICE9PSBcIm5vbmVcIiAmJiB0YXNrUHJvcGVydGllcy5kdWVEYXRlICE9PSBudWxsOlxuICAgICAgICAgICAgdXBkYXRlUHJpb3JpdHkoKTtcbiAgICAgICAgICAgIHVwZGF0ZUR1ZUluKCk7XG4gICAgICAgICAgICBzZXBhcmF0b3JFbGVtZW50LmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgdGFza1Byb3BlcnRpZXMucHJpb3JpdHkgIT09IFwibm9uZVwiOlxuICAgICAgICAgICAgdXBkYXRlUHJpb3JpdHkoKTtcbiAgICAgICAgICAgIHNlcGFyYXRvckVsZW1lbnQuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHRhc2tQcm9wZXJ0aWVzLmR1ZURhdGUgIT09IG51bGw6XG4gICAgICAgICAgICB1cGRhdGVEdWVJbigpO1xuICAgICAgICAgICAgc2VwYXJhdG9yRWxlbWVudC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgcHJpb3JpdHlFbGVtZW50LmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1pbmZvXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staW5mb1wiKS5zdHlsZSA9IFwiZGlzcGxheTogbm9uZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZG9uZUVsZW1lbnQuY2hlY2tlZCA9IHRhc2tQcm9wZXJ0aWVzLmRvbmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2spIHtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IGVsZW1lbnRzLnRhc2tUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICB0YXNrRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICB1cGRhdGVUYXNrKHRhc2ssIHRhc2tFbGVtZW50KTtcbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrKHRhc2tJbmRleCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10YXNrc1wiKS5jaGlsZE5vZGVzW3Rhc2tJbmRleF0ucmVtb3ZlKCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGUvZm9ybS5jc3NcIjtcbmltcG9ydCBcImZsYXRwaWNrci9kaXN0L2ZsYXRwaWNrci5jc3NcIjsgLy8gZmxhdHBpY2tyIGNzcyB3b24ndCBsb2FkIHdpdGhvdXQgdGhpcyBmb3Igc29tZSByZWFzb25cblxuaW1wb3J0IFwiLi9pbWFnZXMvZmF2aWNvbi5zdmdcIjtcbmltcG9ydCBcIi4vaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZ1wiO1xuXG5pbXBvcnQgYXBwIGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcblxuYXBwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=