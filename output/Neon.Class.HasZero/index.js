// Generated by purs version 0.11.7
"use strict";
var Data_List_Types = require("../Data.List.Types");
var Data_Semiring = require("../Data.Semiring");
var Neon_Data = require("../Neon.Data");
var Prelude = require("../Prelude");
var HasZero = function (zero) {
    this.zero = zero;
};
var zero = function (dict) {
    return dict.zero;
};
var stringHasZero = new HasZero("");
var numberHasZero = new HasZero(0);
var listHasZero = new HasZero(Data_List_Types.Nil.value);
var intHasZero = new HasZero(0);
var arrayHasZero = new HasZero([  ]);
module.exports = {
    zero: zero,
    HasZero: HasZero,
    arrayHasZero: arrayHasZero,
    intHasZero: intHasZero,
    listHasZero: listHasZero,
    numberHasZero: numberHasZero,
    stringHasZero: stringHasZero
};