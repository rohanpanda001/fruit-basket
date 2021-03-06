// Generated by purs version 0.11.7
"use strict";
var Data_List_Types = require("../Data.List.Types");
var Data_Ordering = require("../Data.Ordering");
var Neon_Class_HasEqual = require("../Neon.Class.HasEqual");
var Neon_Class_HasFromArray = require("../Neon.Class.HasFromArray");
var Neon_Class_HasGreater = require("../Neon.Class.HasGreater");
var Neon_Class_HasLess = require("../Neon.Class.HasLess");
var Neon_Data = require("../Neon.Data");
var HasCompare = function (HasEqual0, HasGreater1, HasLess2, compare) {
    this.HasEqual0 = HasEqual0;
    this.HasGreater1 = HasGreater1;
    this.HasLess2 = HasLess2;
    this.compare = compare;
};
var defaultCompare = function (dictHasGreater) {
    return function (dictHasLess) {
        return function (y) {
            return function (x) {
                var $6 = Neon_Class_HasGreater.greater(dictHasGreater)(y)(x);
                if ($6) {
                    return Data_Ordering.GT.value;
                };
                var $7 = Neon_Class_HasLess.less(dictHasLess)(y)(x);
                if ($7) {
                    return Data_Ordering.LT.value;
                };
                return Data_Ordering.EQ.value;
            };
        };
    };
};
var intHasCompare = new HasCompare(function () {
    return Neon_Class_HasEqual.intHasEqual;
}, function () {
    return Neon_Class_HasGreater.intHasGreater;
}, function () {
    return Neon_Class_HasLess.intHasLess;
}, function (y) {
    return function (x) {
        return defaultCompare(Neon_Class_HasGreater.intHasGreater)(Neon_Class_HasLess.intHasLess)(y)(x);
    };
});
var numberHasCompare = new HasCompare(function () {
    return Neon_Class_HasEqual.numberHasEqual;
}, function () {
    return Neon_Class_HasGreater.numberHasGreater;
}, function () {
    return Neon_Class_HasLess.numberHasLess;
}, function (y) {
    return function (x) {
        return defaultCompare(Neon_Class_HasGreater.numberHasGreater)(Neon_Class_HasLess.numberHasLess)(y)(x);
    };
});
var orderingHasCompare = new HasCompare(function () {
    return Neon_Class_HasEqual.orderingHasEqual;
}, function () {
    return Neon_Class_HasGreater.orderingHasGreater;
}, function () {
    return Neon_Class_HasLess.orderingHasLess;
}, function (y) {
    return function (x) {
        return defaultCompare(Neon_Class_HasGreater.orderingHasGreater)(Neon_Class_HasLess.orderingHasLess)(y)(x);
    };
});
var stringHasCompare = new HasCompare(function () {
    return Neon_Class_HasEqual.stringHasEqual;
}, function () {
    return Neon_Class_HasGreater.stringHasGreater;
}, function () {
    return Neon_Class_HasLess.stringHasLess;
}, function (y) {
    return function (x) {
        return defaultCompare(Neon_Class_HasGreater.stringHasGreater)(Neon_Class_HasLess.stringHasLess)(y)(x);
    };
});
var compare = function (dict) {
    return dict.compare;
};
var listHasCompare = function (dictHasCompare) {
    return new HasCompare(function () {
        return Neon_Class_HasEqual.listHasEqual(dictHasCompare.HasEqual0());
    }, function () {
        return Neon_Class_HasGreater.listHasGreater(dictHasCompare.HasEqual0())(dictHasCompare.HasGreater1());
    }, function () {
        return Neon_Class_HasLess.listHasLess(dictHasCompare.HasEqual0())(dictHasCompare.HasLess2());
    }, function (ys) {
        return function (xs) {
            var $8 = {
                xs: xs,
                ys: ys
            };
            if ($8.xs instanceof Data_List_Types.Nil && $8.ys instanceof Data_List_Types.Nil) {
                return Data_Ordering.EQ.value;
            };
            if ($8.xs instanceof Data_List_Types.Nil && $8.ys instanceof Data_List_Types.Cons) {
                return Data_Ordering.LT.value;
            };
            if ($8.xs instanceof Data_List_Types.Cons && $8.ys instanceof Data_List_Types.Nil) {
                return Data_Ordering.GT.value;
            };
            if ($8.xs instanceof Data_List_Types.Cons && $8.ys instanceof Data_List_Types.Cons) {
                var v = compare(dictHasCompare)($8.ys.value0)($8.xs.value0);
                if (v instanceof Data_Ordering.EQ) {
                    return compare(listHasCompare(dictHasCompare))($8.ys.value1)($8.xs.value1);
                };
                if (v instanceof Data_Ordering.GT) {
                    return Data_Ordering.GT.value;
                };
                if (v instanceof Data_Ordering.LT) {
                    return Data_Ordering.LT.value;
                };
                throw new Error("Failed pattern match at Neon.Class.HasCompare line 38, column 53 - line 41, column 25: " + [ v.constructor.name ]);
            };
            throw new Error("Failed pattern match at Neon.Class.HasCompare line 34, column 19 - line 41, column 25: " + [ $8.constructor.name ]);
        };
    });
};
var charHasCompare = new HasCompare(function () {
    return Neon_Class_HasEqual.charHasEqual;
}, function () {
    return Neon_Class_HasGreater.charHasGreater;
}, function () {
    return Neon_Class_HasLess.charHasLess;
}, function (y) {
    return function (x) {
        return defaultCompare(Neon_Class_HasGreater.charHasGreater)(Neon_Class_HasLess.charHasLess)(y)(x);
    };
});
var booleanHasCompare = new HasCompare(function () {
    return Neon_Class_HasEqual.booleanHasEqual;
}, function () {
    return Neon_Class_HasGreater.booleanHasGreater;
}, function () {
    return Neon_Class_HasLess.booleanHasLess;
}, function (y) {
    return function (x) {
        return defaultCompare(Neon_Class_HasGreater.booleanHasGreater)(Neon_Class_HasLess.booleanHasLess)(y)(x);
    };
});
var arrayHasCompare = function (dictHasCompare) {
    return new HasCompare(function () {
        return Neon_Class_HasEqual.arrayHasEqual(dictHasCompare.HasEqual0());
    }, function () {
        return Neon_Class_HasGreater.arrayHasGreater(dictHasCompare.HasEqual0())(dictHasCompare.HasGreater1());
    }, function () {
        return Neon_Class_HasLess.arrayHasLess(dictHasCompare.HasEqual0())(dictHasCompare.HasLess2());
    }, function (y) {
        return function (x) {
            var toList = Neon_Class_HasFromArray.fromArray(Neon_Class_HasFromArray.listHasFromArray);
            return compare(listHasCompare(dictHasCompare))(toList(y))(toList(x));
        };
    });
};
module.exports = {
    HasCompare: HasCompare,
    compare: compare,
    arrayHasCompare: arrayHasCompare,
    booleanHasCompare: booleanHasCompare,
    charHasCompare: charHasCompare,
    intHasCompare: intHasCompare,
    listHasCompare: listHasCompare,
    numberHasCompare: numberHasCompare,
    orderingHasCompare: orderingHasCompare,
    stringHasCompare: stringHasCompare
};
