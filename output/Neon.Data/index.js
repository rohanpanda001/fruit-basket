// Generated by purs version 0.11.7
"use strict";
var Control_Monad_Eff_Exception = require("../Control.Monad.Eff.Exception");
var Data_List = require("../Data.List");
var Data_Maybe = require("../Data.Maybe");
var Data_Tuple = require("../Data.Tuple");
var Prelude = require("../Prelude");
var Type_Proxy = require("../Type.Proxy");
var exception = function (x) {
    return Control_Monad_Eff_Exception.error(x);
};
module.exports = {
    exception: exception
};