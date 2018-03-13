// Generated by purs version 0.11.7
"use strict";
var $foreign = require("./foreign");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var DOM = require("../DOM");
var DOM_Node_Types = require("../DOM.Node.Types");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Data_Nullable = require("../Data.Nullable");
var Prelude = require("../Prelude");
var namedItem = function (id) {
    return function ($0) {
        return Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Nullable.toMaybe)($foreign._namedItem(id)($0));
    };
};
var item = function (i) {
    return function ($1) {
        return Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Nullable.toMaybe)($foreign._item(i)($1));
    };
};
module.exports = {
    item: item,
    namedItem: namedItem,
    length: $foreign.length,
    toArray: $foreign.toArray
};
