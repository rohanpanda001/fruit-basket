// Generated by purs version 0.11.7
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Gen_Class = require("../Control.Monad.Gen.Class");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Foldable = require("../Data.Foldable");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Data_Monoid_Additive = require("../Data.Monoid.Additive");
var Data_Newtype = require("../Data.Newtype");
var Data_Ord = require("../Data.Ord");
var Data_Ring = require("../Data.Ring");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Semigroup_Foldable = require("../Data.Semigroup.Foldable");
var Data_Semiring = require("../Data.Semiring");
var Data_Tuple = require("../Data.Tuple");
var Data_Unfoldable = require("../Data.Unfoldable");
var Data_Unit = require("../Data.Unit");
var Prelude = require("../Prelude");
var Cons = (function () {
    function Cons(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Cons.create = function (value0) {
        return function (value1) {
            return new Cons(value0, value1);
        };
    };
    return Cons;
})();
var Nil = (function () {
    function Nil() {

    };
    Nil.value = new Nil();
    return Nil;
})();
var FreqSemigroup = function (x) {
    return x;
};
var AtIndex = function (x) {
    return x;
};
var unfoldable = function (dictMonadRec) {
    return function (dictMonadGen) {
        return function (dictUnfoldable) {
            return function (gen) {
                var unfold = function (v) {
                    if (v instanceof Nil) {
                        return Data_Maybe.Nothing.value;
                    };
                    if (v instanceof Cons) {
                        return new Data_Maybe.Just(new Data_Tuple.Tuple(v.value0, v.value1));
                    };
                    throw new Error("Failed pattern match at Control.Monad.Gen line 101, column 12 - line 103, column 35: " + [ v.constructor.name ]);
                };
                var loopGen = function (v) {
                    if (v.value1 === 0) {
                        return Control_Applicative.pure((dictMonadGen.Monad0()).Applicative0())(new Control_Monad_Rec_Class.Done(v.value0));
                    };
                    return Control_Bind.bind((dictMonadGen.Monad0()).Bind1())(gen)(function (v1) {
                        return Control_Applicative.pure((dictMonadGen.Monad0()).Applicative0())(new Control_Monad_Rec_Class.Loop(new Data_Tuple.Tuple(new Cons(v1, v.value0), v.value1 - 1 | 0)));
                    });
                };
                return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Unfoldable.unfoldr(dictUnfoldable)(unfold))(Control_Monad_Gen_Class.sized(dictMonadGen)(function ($61) {
                    return Control_Monad_Rec_Class.tailRecM(dictMonadRec)(loopGen)(Data_Tuple.Tuple.create(Nil.value)($61));
                }));
            };
        };
    };
};
var semigroupFreqSemigroup = new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
        return function (pos) {
            var v2 = v(pos);
            if (v2.value0 instanceof Data_Maybe.Just) {
                return v1(v2.value0.value0);
            };
            return v2;
        };
    };
});
var semigroupAtIndex = new Data_Semigroup.Semigroup(function (v) {
    return function (v1) {
        return function (i) {
            var $48 = i <= 0;
            if ($48) {
                return v(i);
            };
            return v1(i - 1 | 0);
        };
    };
});
var getFreqVal = function (v) {
    return function ($62) {
        return Data_Tuple.snd(v($62));
    };
};
var getAtIndex = function (v) {
    return v;
};
var freqSemigroup = function (v) {
    return function (pos) {
        var $52 = pos >= v.value0;
        if ($52) {
            return new Data_Tuple.Tuple(new Data_Maybe.Just(pos - v.value0), v.value1);
        };
        return new Data_Tuple.Tuple(Data_Maybe.Nothing.value, v.value1);
    };
};
var frequency = function (dictMonadGen) {
    return function (dictFoldable1) {
        return function (xs) {
            var total = Data_Newtype.alaF(Data_Functor.functorFn)(Data_Functor.functorFn)(Data_Monoid_Additive.newtypeAdditive)(Data_Monoid_Additive.newtypeAdditive)(Data_Monoid_Additive.Additive)(Data_Foldable.foldMap(dictFoldable1.Foldable0())(Data_Monoid_Additive.monoidAdditive(Data_Semiring.semiringNumber)))(Data_Tuple.fst)(xs);
            return Control_Bind.bind((dictMonadGen.Monad0()).Bind1())(Control_Monad_Gen_Class.chooseFloat(dictMonadGen)(0.0)(total))(getFreqVal(Data_Semigroup_Foldable.foldMap1(dictFoldable1)(semigroupFreqSemigroup)(freqSemigroup)(xs)));
        };
    };
};
var filtered = function (dictMonadRec) {
    return function (dictMonadGen) {
        return function (gen) {
            var go = function (v) {
                return Data_Functor.mapFlipped((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(gen)(function (a) {
                    if (a instanceof Data_Maybe.Nothing) {
                        return new Control_Monad_Rec_Class.Loop(Data_Unit.unit);
                    };
                    if (a instanceof Data_Maybe.Just) {
                        return new Control_Monad_Rec_Class.Done(a.value0);
                    };
                    throw new Error("Failed pattern match at Control.Monad.Gen line 117, column 24 - line 119, column 23: " + [ a.constructor.name ]);
                });
            };
            return Control_Monad_Rec_Class.tailRecM(dictMonadRec)(go)(Data_Unit.unit);
        };
    };
};
var suchThat = function (dictMonadRec) {
    return function (dictMonadGen) {
        return function (gen) {
            return function (pred) {
                return filtered(dictMonadRec)(dictMonadGen)(Data_Functor.mapFlipped((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(gen)(function (a) {
                    var $57 = pred(a);
                    if ($57) {
                        return new Data_Maybe.Just(a);
                    };
                    return Data_Maybe.Nothing.value;
                }));
            };
        };
    };
};
var choose = function (dictMonadGen) {
    return function (genA) {
        return function (genB) {
            return Control_Bind.bind((dictMonadGen.Monad0()).Bind1())(Control_Monad_Gen_Class.chooseBool(dictMonadGen))(function (v) {
                if (v) {
                    return genA;
                };
                return genB;
            });
        };
    };
};
var atIndex = function ($63) {
    return AtIndex(Data_Function["const"]($63));
};
var fromIndex = function (dictFoldable1) {
    return function (i) {
        return function (xs) {
            return getAtIndex(Data_Semigroup_Foldable.foldMap1(dictFoldable1)(semigroupAtIndex)(atIndex)(xs))(i);
        };
    };
};
var elements = function (dictMonadGen) {
    return function (dictFoldable1) {
        return function (xs) {
            return Control_Bind.bind((dictMonadGen.Monad0()).Bind1())(Control_Monad_Gen_Class.chooseInt(dictMonadGen)(0)(Data_Foldable.length(dictFoldable1.Foldable0())(Data_Semiring.semiringInt)(xs) - 1 | 0))(function (v) {
                return Control_Applicative.pure((dictMonadGen.Monad0()).Applicative0())(fromIndex(dictFoldable1)(v)(xs));
            });
        };
    };
};
var oneOf = function (dictMonadGen) {
    return function (dictFoldable1) {
        return function (xs) {
            return Control_Bind.bind((dictMonadGen.Monad0()).Bind1())(Control_Monad_Gen_Class.chooseInt(dictMonadGen)(0)(Data_Foldable.length(dictFoldable1.Foldable0())(Data_Semiring.semiringInt)(xs) - 1 | 0))(function (v) {
                return fromIndex(dictFoldable1)(v)(xs);
            });
        };
    };
};
module.exports = {
    choose: choose,
    oneOf: oneOf,
    frequency: frequency,
    elements: elements,
    unfoldable: unfoldable,
    suchThat: suchThat,
    filtered: filtered
};
