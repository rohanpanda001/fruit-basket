// Generated by purs version 0.11.7
"use strict";
var $$Math = require("../Math");
var Neon_Primitive = require("../Neon.Primitive");
var Neon_Primitive_Int = require("../Neon.Primitive.Int");
var Neon_Primitive_Number = require("../Neon.Primitive.Number");
var HasPower = function (power) {
    this.power = power;
};
var power = function (dict) {
    return dict.power;
};
var numberHasPower = new HasPower(function (y) {
    return function (x) {
        return $$Math.pow(x)(y);
    };
});
var intHasPower = new HasPower(function (y) {
    return function (x) {
        return Neon_Primitive_Number.floor(power(numberHasPower)(Neon_Primitive_Int.toNumber(y))(Neon_Primitive_Int.toNumber(x)));
    };
});
module.exports = {
    power: power,
    HasPower: HasPower,
    intHasPower: intHasPower,
    numberHasPower: numberHasPower
};
