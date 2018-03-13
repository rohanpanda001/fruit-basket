// Generated by purs version 0.11.7
"use strict";
var Control_Bind = require("../Control.Bind");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Control_Monad_Eff_Unsafe = require("../Control.Monad.Eff.Unsafe");
var Data_List_Types = require("../Data.List.Types");
var Data_Maybe = require("../Data.Maybe");
var Data_Tuple = require("../Data.Tuple");
var Data_Unit = require("../Data.Unit");
var Neon_Class = require("../Neon.Class");
var Neon_Class_HasAdd = require("../Neon.Class.HasAdd");
var Neon_Class_HasAnd = require("../Neon.Class.HasAnd");
var Neon_Class_HasChain = require("../Neon.Class.HasChain");
var Neon_Class_HasDivide = require("../Neon.Class.HasDivide");
var Neon_Class_HasEqual = require("../Neon.Class.HasEqual");
var Neon_Class_HasFromInt = require("../Neon.Class.HasFromInt");
var Neon_Class_HasGreater = require("../Neon.Class.HasGreater");
var Neon_Class_HasInspect = require("../Neon.Class.HasInspect");
var Neon_Class_HasLess = require("../Neon.Class.HasLess");
var Neon_Class_HasMap = require("../Neon.Class.HasMap");
var Neon_Class_HasMultiply = require("../Neon.Class.HasMultiply");
var Neon_Class_HasNot = require("../Neon.Class.HasNot");
var Neon_Class_HasOne = require("../Neon.Class.HasOne");
var Neon_Class_HasOr = require("../Neon.Class.HasOr");
var Neon_Class_HasPure = require("../Neon.Class.HasPure");
var Neon_Class_HasReduce = require("../Neon.Class.HasReduce");
var Neon_Class_HasRemainder = require("../Neon.Class.HasRemainder");
var Neon_Class_HasSubtract = require("../Neon.Class.HasSubtract");
var Neon_Class_HasToArray = require("../Neon.Class.HasToArray");
var Neon_Class_HasToInt = require("../Neon.Class.HasToInt");
var Neon_Class_HasTraverse = require("../Neon.Class.HasTraverse");
var Neon_Class_HasZero = require("../Neon.Class.HasZero");
var Neon_Data = require("../Neon.Data");
var Neon_Effect = require("../Neon.Effect");
var Neon_Primitive = require("../Neon.Primitive");
var Neon_Primitive_Function = require("../Neon.Primitive.Function");
var Neon_Primitive_Number = require("../Neon.Primitive.Number");
var Unsafe_Coerce = require("../Unsafe.Coerce");
var withDefault = function (y) {
    return function (mx) {
        if (mx instanceof Data_Maybe.Nothing) {
            return y;
        };
        if (mx instanceof Data_Maybe.Just) {
            return mx.value0;
        };
        throw new Error("Failed pattern match at Neon.Helper line 461, column 20 - line 463, column 18: " + [ mx.constructor.name ]);
    };
};
var $$while = function ($copy_p) {
    return function ($copy_f) {
        return function ($copy_x) {
            var $tco_var_p = $copy_p;
            var $tco_var_f = $copy_f;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(p, f, x) {
                var $66 = p(x);
                if ($66) {
                    $tco_var_p = p;
                    $tco_var_f = f;
                    $copy_x = f(x);
                    return;
                };
                $tco_done = true;
                return x;
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_p, $tco_var_f, $copy_x);
            };
            return $tco_result;
        };
    };
};
var when = function (dictHasPure) {
    return function (p) {
        return function (x) {
            if (p) {
                return x;
            };
            return Neon_Class_HasPure.pure(dictHasPure)(Data_Unit.unit);
        };
    };
};
var $$void = function (dictHasMap) {
    return function (x) {
        return Neon_Class_HasMap.map(dictHasMap)(Neon_Primitive_Function.always(Data_Unit.unit))(x);
    };
};
var unsafeLog = function (m) {
    return function (x) {
        return Control_Monad_Eff_Unsafe.unsafePerformEff(function __do() {
            Control_Monad_Eff_Console.log(m)();
            return Neon_Class_HasPure.pure(Neon_Class_HasPure.effHasPure)(x)();
        });
    };
};
var unsafeCoerce = function (x) {
    return x;
};
var uncurry = function (f) {
    return function (v) {
        return f(v.value0)(v.value1);
    };
};
var truncate = function (x) {
    var $71 = Neon_Class_HasGreater.greater(Neon_Class_HasGreater.numberHasGreater)(0.0)(x);
    if ($71) {
        return Neon_Primitive_Number.floor(x);
    };
    return Neon_Primitive_Number.ceiling(x);
};
var todo = unsafeCoerce(Data_Unit.unit);
var swap = function (v) {
    return new Data_Tuple.Tuple(v.value1, v.value0);
};
var sum = function (dictHasAdd) {
    return function (dictHasReduce) {
        return function (dictHasZero) {
            return function (xs) {
                return Neon_Class_HasReduce.reduce(dictHasReduce)(function (a) {
                    return function (x) {
                        return Neon_Class_HasAdd.add(dictHasAdd)(x)(a);
                    };
                })(Neon_Class_HasZero.zero(dictHasZero))(xs);
            };
        };
    };
};
var size = function (dictHasReduce) {
    return function (xs) {
        return Neon_Class_HasReduce.reduce(dictHasReduce)(function (a) {
            return function (v) {
                return Neon_Class_HasAdd.add(Neon_Class_HasAdd.booleanHasAdd)(1)(a);
            };
        })(0)(xs);
    };
};
var sequence = function (dictHasApply) {
    return function (dictHasMap) {
        return function (dictHasTraverse) {
            return function (dictHasPure) {
                return function (xs) {
                    return Neon_Class_HasTraverse.traverse(dictHasTraverse)(dictHasApply)(dictHasMap)(dictHasPure)(Neon_Primitive_Function.identity)(xs);
                };
            };
        };
    };
};
var reciprocal = function (dictHasDivide) {
    return function (dictHasOne) {
        return function (x) {
            return Neon_Class_HasDivide.divide(dictHasDivide)(x)(Neon_Class_HasOne.one(dictHasOne));
        };
    };
};
var product = function (dictHasMultiply) {
    return function (dictHasOne) {
        return function (dictHasReduce) {
            return function (xs) {
                return Neon_Class_HasReduce.reduce(dictHasReduce)(Neon_Class_HasMultiply.multiply(dictHasMultiply))(Neon_Class_HasOne.one(dictHasOne))(xs);
            };
        };
    };
};
var print = function (dictHasInspect) {
    return function (x) {
        return Control_Monad_Eff_Console.log(Neon_Class_HasInspect.inspect(dictHasInspect)(x));
    };
};
var notEqual = function (dictHasEqual) {
    return function (y) {
        return function (x) {
            return Neon_Class_HasNot.not(Neon_Class_HasNot.booleanHasNot)(Neon_Class_HasEqual.equal(dictHasEqual)(y)(x));
        };
    };
};
var notANumber = function (x) {
    return Neon_Class_HasNot.not(Neon_Class_HasNot.booleanHasNot)(Neon_Primitive_Number.aNumber(x));
};
var negate = function (dictHasSubtract) {
    return function (dictHasZero) {
        return function (x) {
            return Neon_Class_HasSubtract.subtract(dictHasSubtract)(x)(Neon_Class_HasZero.zero(dictHasZero));
        };
    };
};
var sign = function (dictHasGreater) {
    return function (dictHasLess) {
        return function (dictHasOne) {
            return function (dictHasSubtract) {
                return function (dictHasZero) {
                    return function (x) {
                        var $75 = Neon_Class_HasLess.less(dictHasLess)(Neon_Class_HasZero.zero(dictHasZero))(x);
                        if ($75) {
                            return negate(dictHasSubtract)(dictHasZero)(Neon_Class_HasOne.one(dictHasOne));
                        };
                        var $76 = Neon_Class_HasGreater.greater(dictHasGreater)(Neon_Class_HasZero.zero(dictHasZero))(x);
                        if ($76) {
                            return Neon_Class_HasOne.one(dictHasOne);
                        };
                        return Neon_Class_HasZero.zero(dictHasZero);
                    };
                };
            };
        };
    };
};
var min = function (dictHasLess) {
    return function (y) {
        return function (x) {
            var $77 = Neon_Class_HasLess.less(dictHasLess)(y)(x);
            if ($77) {
                return x;
            };
            return y;
        };
    };
};
var minimum = function (dictHasLess) {
    return function (dictHasReduce) {
        return function (xs) {
            return Neon_Class_HasReduce.reduce(dictHasReduce)(function (a) {
                return function (x) {
                    if (a instanceof Data_Maybe.Nothing) {
                        return new Data_Maybe.Just(x);
                    };
                    if (a instanceof Data_Maybe.Just) {
                        return new Data_Maybe.Just(min(dictHasLess)(a.value0)(x));
                    };
                    throw new Error("Failed pattern match at Neon.Helper line 234, column 13 - line 236, column 39: " + [ a.constructor.name ]);
                };
            })(Data_Maybe.Nothing.value)(xs);
        };
    };
};
var max = function (dictHasGreater) {
    return function (y) {
        return function (x) {
            var $80 = Neon_Class_HasGreater.greater(dictHasGreater)(y)(x);
            if ($80) {
                return x;
            };
            return y;
        };
    };
};
var maximum = function (dictHasGreater) {
    return function (dictHasReduce) {
        return function (xs) {
            return Neon_Class_HasReduce.reduce(dictHasReduce)(function (a) {
                return function (x) {
                    if (a instanceof Data_Maybe.Nothing) {
                        return new Data_Maybe.Just(x);
                    };
                    if (a instanceof Data_Maybe.Just) {
                        return new Data_Maybe.Just(max(dictHasGreater)(a.value0)(x));
                    };
                    throw new Error("Failed pattern match at Neon.Helper line 211, column 13 - line 213, column 39: " + [ a.constructor.name ]);
                };
            })(Data_Maybe.Nothing.value)(xs);
        };
    };
};
var lessOrEqual = function (dictHasEqual) {
    return function (dictHasLess) {
        return function (y) {
            return function (x) {
                return Neon_Class_HasOr.or(Neon_Class_HasOr.booleanHasOr)(Neon_Class_HasEqual.equal(dictHasEqual)(y)(x))(Neon_Class_HasLess.less(dictHasLess)(y)(x));
            };
        };
    };
};
var infinite = function (x) {
    return Neon_Class_HasNot.not(Neon_Class_HasNot.booleanHasNot)(Neon_Primitive_Number.finite(x));
};
var increment = function (dictHasFromInt) {
    return function (dictHasToInt) {
        return function (x) {
            return Neon_Class_HasFromInt.fromInt(dictHasFromInt)(Neon_Class_HasAdd.add(Neon_Class_HasAdd.booleanHasAdd)(1)(Neon_Class_HasToInt.toInt(dictHasToInt)(x)));
        };
    };
};
var upTo = function (dictHasFromInt) {
    return function (dictHasGreater) {
        return function (dictHasToInt) {
            return function (h) {
                return function (l) {
                    var upToList = function (t) {
                        return function (b) {
                            var $83 = Neon_Class_HasGreater.greater(dictHasGreater)(t)(b);
                            if ($83) {
                                return Data_List_Types.Nil.value;
                            };
                            var v = increment(dictHasFromInt)(dictHasToInt)(b);
                            if (v instanceof Data_Maybe.Nothing) {
                                return new Data_List_Types.Cons(b, Data_List_Types.Nil.value);
                            };
                            if (v instanceof Data_Maybe.Just) {
                                return new Data_List_Types.Cons(b, upToList(t)(v.value0));
                            };
                            throw new Error("Failed pattern match at Neon.Helper line 420, column 14 - line 422, column 52: " + [ v.constructor.name ]);
                        };
                    };
                    return Neon_Class_HasToArray.toArray(Neon_Class_HasToArray.listHasToArray)(upToList(h)(l));
                };
            };
        };
    };
};
var greaterOrEqual = function (dictHasEqual) {
    return function (dictHasGreater) {
        return function (y) {
            return function (x) {
                return Neon_Class_HasOr.or(Neon_Class_HasOr.booleanHasOr)(Neon_Class_HasEqual.equal(dictHasEqual)(y)(x))(Neon_Class_HasGreater.greater(dictHasGreater)(y)(x));
            };
        };
    };
};
var flatten = function (dictHasChain) {
    return function (xss) {
        return Neon_Class_HasChain.chain(dictHasChain)(Neon_Primitive_Function.identity)(xss);
    };
};
var divisibleBy = function (dictHasEqual) {
    return function (dictHasRemainder) {
        return function (dictHasZero) {
            return function (y) {
                return function (x) {
                    return Neon_Class_HasEqual.equal(dictHasEqual)(Neon_Class_HasZero.zero(dictHasZero))(Neon_Class_HasRemainder.remainder(dictHasRemainder)(y)(x));
                };
            };
        };
    };
};
var even = function (x) {
    return divisibleBy(Neon_Class_HasEqual.intHasEqual)(Neon_Class_HasRemainder.intHasRemainder)(Neon_Class_HasZero.intHasZero)(2)(x);
};
var odd = function (x) {
    return Neon_Class_HasNot.not(Neon_Class_HasNot.booleanHasNot)(even(x));
};
var decrement = function (dictHasFromInt) {
    return function (dictHasToInt) {
        return function (x) {
            return Neon_Class_HasFromInt.fromInt(dictHasFromInt)(Neon_Class_HasSubtract.subtract(Neon_Class_HasSubtract.intHasSubtract)(1)(Neon_Class_HasToInt.toInt(dictHasToInt)(x)));
        };
    };
};
var downTo = function (dictHasFromInt) {
    return function (dictHasLess) {
        return function (dictHasToInt) {
            return function (l) {
                return function (h) {
                    var downToList = function (b) {
                        return function (t) {
                            var $86 = Neon_Class_HasLess.less(dictHasLess)(b)(t);
                            if ($86) {
                                return Data_List_Types.Nil.value;
                            };
                            var v = decrement(dictHasFromInt)(dictHasToInt)(t);
                            if (v instanceof Data_Maybe.Nothing) {
                                return new Data_List_Types.Cons(t, Data_List_Types.Nil.value);
                            };
                            if (v instanceof Data_Maybe.Just) {
                                return new Data_List_Types.Cons(t, downToList(b)(v.value0));
                            };
                            throw new Error("Failed pattern match at Neon.Helper line 122, column 14 - line 124, column 54: " + [ v.constructor.name ]);
                        };
                    };
                    return Neon_Class_HasToArray.toArray(Neon_Class_HasToArray.listHasToArray)(downToList(l)(h));
                };
            };
        };
    };
};
var curry = function (f) {
    return function (x) {
        return function (y) {
            return f(new Data_Tuple.Tuple(x, y));
        };
    };
};
var clamp = function ($copy_dictHasGreater) {
    return function ($copy_dictHasLess) {
        return function ($copy_b) {
            return function ($copy_t) {
                return function ($copy_x) {
                    var $tco_var_dictHasGreater = $copy_dictHasGreater;
                    var $tco_var_dictHasLess = $copy_dictHasLess;
                    var $tco_var_b = $copy_b;
                    var $tco_var_t = $copy_t;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(dictHasGreater, dictHasLess, b, t, x) {
                        var $89 = Neon_Class_HasGreater.greater(dictHasGreater)(t)(b);
                        if ($89) {
                            $tco_var_dictHasGreater = dictHasGreater;
                            $tco_var_dictHasLess = dictHasLess;
                            $tco_var_b = t;
                            $tco_var_t = b;
                            $copy_x = x;
                            return;
                        };
                        $tco_done = true;
                        return max(dictHasGreater)(b)(min(dictHasLess)(t)(x));
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_dictHasGreater, $tco_var_dictHasLess, $tco_var_b, $tco_var_t, $copy_x);
                    };
                    return $tco_result;
                };
            };
        };
    };
};
var bind = function (dictHasChain) {
    return function (x) {
        return function (f) {
            return Neon_Class_HasChain.chain(dictHasChain)(f)(x);
        };
    };
};
var asTypeOf = function (y) {
    return function (x) {
        return Neon_Primitive_Function.always(x)(y);
    };
};
var any = function (dictHasReduce) {
    return function (p) {
        return function (xs) {
            return Neon_Class_HasReduce.reduce(dictHasReduce)(function (a) {
                return function (x) {
                    return Neon_Class_HasOr.or(Neon_Class_HasOr.booleanHasOr)(a)(p(x));
                };
            })(false)(xs);
        };
    };
};
var contains = function (dictHasEqual) {
    return function (dictHasReduce) {
        return function (x) {
            return function (xs) {
                return any(dictHasReduce)(Neon_Class_HasEqual.equal(dictHasEqual)(x))(xs);
            };
        };
    };
};
var all = function (dictHasReduce) {
    return function (p) {
        return function (xs) {
            return Neon_Class_HasReduce.reduce(dictHasReduce)(function (a) {
                return function (x) {
                    return Neon_Class_HasAnd.and(Neon_Class_HasAnd.booleanHasAnd)(a)(p(x));
                };
            })(true)(xs);
        };
    };
};
var empty = function (dictHasReduce) {
    return function (xs) {
        return all(dictHasReduce)(Neon_Primitive_Function.always(false))(xs);
    };
};
var absoluteValue = function (dictHasLess) {
    return function (dictHasSubtract) {
        return function (dictHasZero) {
            return function (x) {
                var $90 = Neon_Class_HasLess.less(dictHasLess)(Neon_Class_HasZero.zero(dictHasZero))(x);
                if ($90) {
                    return negate(dictHasSubtract)(dictHasZero)(x);
                };
                return x;
            };
        };
    };
};
module.exports = {
    absoluteValue: absoluteValue,
    all: all,
    any: any,
    asTypeOf: asTypeOf,
    bind: bind,
    clamp: clamp,
    contains: contains,
    curry: curry,
    decrement: decrement,
    divisibleBy: divisibleBy,
    downTo: downTo,
    empty: empty,
    even: even,
    flatten: flatten,
    greaterOrEqual: greaterOrEqual,
    increment: increment,
    infinite: infinite,
    lessOrEqual: lessOrEqual,
    max: max,
    maximum: maximum,
    min: min,
    minimum: minimum,
    negate: negate,
    notANumber: notANumber,
    notEqual: notEqual,
    odd: odd,
    print: print,
    product: product,
    reciprocal: reciprocal,
    sequence: sequence,
    sign: sign,
    size: size,
    sum: sum,
    swap: swap,
    todo: todo,
    truncate: truncate,
    uncurry: uncurry,
    unsafeCoerce: unsafeCoerce,
    unsafeLog: unsafeLog,
    upTo: upTo,
    "void": $$void,
    when: when,
    "while": $$while,
    withDefault: withDefault
};