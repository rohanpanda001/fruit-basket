// Generated by purs version 0.11.7
"use strict";
var Control_Extend = require("../Control.Extend");
var Data_Functor = require("../Data.Functor");
var Comonad = function (Extend0, extract) {
    this.Extend0 = Extend0;
    this.extract = extract;
};
var extract = function (dict) {
    return dict.extract;
};
module.exports = {
    Comonad: Comonad,
    extract: extract
};
