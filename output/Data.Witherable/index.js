// Generated by purs version 0.11.7
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Category = require("../Control.Category");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Either = require("../Data.Either");
var Data_Filterable = require("../Data.Filterable");
var Data_Functor = require("../Data.Functor");
var Data_Identity = require("../Data.Identity");
var Data_List = require("../Data.List");
var Data_List_Types = require("../Data.List.Types");
var Data_Map = require("../Data.Map");
var Data_Maybe = require("../Data.Maybe");
var Data_Monoid = require("../Data.Monoid");
var Data_Newtype = require("../Data.Newtype");
var Data_Traversable = require("../Data.Traversable");
var Data_Unit = require("../Data.Unit");
var Prelude = require("../Prelude");
var Witherable = function (Filterable0, Traversable1, wilt, wither) {
    this.Filterable0 = Filterable0;
    this.Traversable1 = Traversable1;
    this.wilt = wilt;
    this.wither = wither;
};
var witherableMaybe = new Witherable(function () {
    return Data_Filterable.filterableMaybe;
}, function () {
    return Data_Traversable.traversableMaybe;
}, function (dictApplicative) {
    return function (p) {
        return function (v) {
            if (v instanceof Data_Maybe.Nothing) {
                return Control_Applicative.pure(dictApplicative)({
                    left: Data_Maybe.Nothing.value,
                    right: Data_Maybe.Nothing.value
                });
            };
            if (v instanceof Data_Maybe.Just) {
                var convert = function (v1) {
                    if (v1 instanceof Data_Either.Left) {
                        return {
                            left: new Data_Maybe.Just(v1.value0),
                            right: Data_Maybe.Nothing.value
                        };
                    };
                    if (v1 instanceof Data_Either.Right) {
                        return {
                            left: Data_Maybe.Nothing.value,
                            right: new Data_Maybe.Just(v1.value0)
                        };
                    };
                    throw new Error("Failed pattern match at Data.Witherable line 106, column 5 - line 106, column 56: " + [ v1.constructor.name ]);
                };
                return Data_Functor.map((dictApplicative.Apply0()).Functor0())(convert)(p(v.value0));
            };
            throw new Error("Failed pattern match at Data.Witherable line 103, column 1 - line 103, column 45: " + [ p.constructor.name, v.constructor.name ]);
        };
    };
}, function (dictApplicative) {
    return function (p) {
        return function (v) {
            if (v instanceof Data_Maybe.Nothing) {
                return Control_Applicative.pure(dictApplicative)(Data_Maybe.Nothing.value);
            };
            if (v instanceof Data_Maybe.Just) {
                return p(v.value0);
            };
            throw new Error("Failed pattern match at Data.Witherable line 103, column 1 - line 103, column 45: " + [ p.constructor.name, v.constructor.name ]);
        };
    };
});
var witherableMap = function (dictOrd) {
    return new Witherable(function () {
        return Data_Filterable.filterableMap(dictOrd);
    }, function () {
        return Data_Map.traversableMap;
    }, function (dictApplicative) {
        return function (p) {
            return function (xs) {
                return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Filterable.partitioned(Data_Filterable.filterableMap(dictOrd)))(Data_Traversable.traverse(Data_Map.traversableMap)(dictApplicative)(p)(xs));
            };
        };
    }, function (dictApplicative) {
        return function (p) {
            return function (xs) {
                return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Filterable.filtered(Data_Filterable.filterableMap(dictOrd)))(Data_Traversable.traverse(Data_Map.traversableMap)(dictApplicative)(p)(xs));
            };
        };
    });
};
var witherableList = new Witherable(function () {
    return Data_Filterable.filterableList;
}, function () {
    return Data_List_Types.traversableList;
}, function (dictApplicative) {
    return function (p) {
        return function (xs) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Filterable.partitioned(Data_Filterable.filterableList))(Data_Traversable.traverse(Data_List_Types.traversableList)(dictApplicative)(p)(xs));
        };
    };
}, function (dictApplicative) {
    return function (p) {
        return function (xs) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Filterable.filtered(Data_Filterable.filterableList))(Data_Traversable.traverse(Data_List_Types.traversableList)(dictApplicative)(p)(xs));
        };
    };
});
var witherableEither = function (dictMonoid) {
    return new Witherable(function () {
        return Data_Filterable.filterableEither(dictMonoid);
    }, function () {
        return Data_Either.traversableEither;
    }, function (dictApplicative) {
        return function (p) {
            return function (v) {
                if (v instanceof Data_Either.Left) {
                    return Control_Applicative.pure(dictApplicative)({
                        left: new Data_Either.Left(v.value0),
                        right: new Data_Either.Left(v.value0)
                    });
                };
                if (v instanceof Data_Either.Right) {
                    var convert = function (v1) {
                        if (v1 instanceof Data_Either.Left) {
                            return {
                                left: new Data_Either.Right(v1.value0),
                                right: new Data_Either.Left(Data_Monoid.mempty(dictMonoid))
                            };
                        };
                        if (v1 instanceof Data_Either.Right) {
                            return {
                                left: new Data_Either.Left(Data_Monoid.mempty(dictMonoid)),
                                right: new Data_Either.Right(v1.value0)
                            };
                        };
                        throw new Error("Failed pattern match at Data.Witherable line 115, column 5 - line 115, column 61: " + [ v1.constructor.name ]);
                    };
                    return Data_Functor.map((dictApplicative.Apply0()).Functor0())(convert)(p(v.value0));
                };
                throw new Error("Failed pattern match at Data.Witherable line 112, column 1 - line 112, column 63: " + [ p.constructor.name, v.constructor.name ]);
            };
        };
    }, function (dictApplicative) {
        return function (p) {
            return function (v) {
                if (v instanceof Data_Either.Left) {
                    return Control_Applicative.pure(dictApplicative)(new Data_Either.Left(v.value0));
                };
                if (v instanceof Data_Either.Right) {
                    var convert = function (v1) {
                        if (v1 instanceof Data_Maybe.Nothing) {
                            return new Data_Either.Left(Data_Monoid.mempty(dictMonoid));
                        };
                        if (v1 instanceof Data_Maybe.Just) {
                            return new Data_Either.Right(v1.value0);
                        };
                        throw new Error("Failed pattern match at Data.Witherable line 120, column 5 - line 120, column 34: " + [ v1.constructor.name ]);
                    };
                    return Data_Functor.map((dictApplicative.Apply0()).Functor0())(convert)(p(v.value0));
                };
                throw new Error("Failed pattern match at Data.Witherable line 112, column 1 - line 112, column 63: " + [ p.constructor.name, v.constructor.name ]);
            };
        };
    });
};
var witherableArray = new Witherable(function () {
    return Data_Filterable.filterableArray;
}, function () {
    return Data_Traversable.traversableArray;
}, function (dictApplicative) {
    return function (p) {
        return function (xs) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Filterable.partitioned(Data_Filterable.filterableArray))(Data_Traversable.traverse(Data_Traversable.traversableArray)(dictApplicative)(p)(xs));
        };
    };
}, function (dictApplicative) {
    return function (p) {
        return function (xs) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Filterable.filtered(Data_Filterable.filterableArray))(Data_Traversable.traverse(Data_Traversable.traversableArray)(dictApplicative)(p)(xs));
        };
    };
});
var wither = function (dict) {
    return dict.wither;
};
var withered = function (dictWitherable) {
    return function (dictApplicative) {
        return wither(dictWitherable)(dictApplicative)(Control_Category.id(Control_Category.categoryFn));
    };
};
var wilt = function (dict) {
    return dict.wilt;
};
var wilted = function (dictWitherable) {
    return function (dictApplicative) {
        return wilt(dictWitherable)(dictApplicative)(Control_Category.id(Control_Category.categoryFn));
    };
};
var witherDefault = function (dictWitherable) {
    return function (dictApplicative) {
        return function (p) {
            return function (xs) {
                var convert = function (v) {
                    if (v instanceof Data_Maybe.Nothing) {
                        return new Data_Either.Left(Data_Unit.unit);
                    };
                    if (v instanceof Data_Maybe.Just) {
                        return new Data_Either.Right(v.value0);
                    };
                    throw new Error("Failed pattern match at Data.Witherable line 78, column 3 - line 78, column 30: " + [ v.constructor.name ]);
                };
                return Data_Functor.map((dictApplicative.Apply0()).Functor0())(function (v) {
                    return v.right;
                })(wilt(dictWitherable)(dictApplicative)(function ($55) {
                    return Data_Functor.map((dictApplicative.Apply0()).Functor0())(convert)(p($55));
                })(xs));
            };
        };
    };
};
var traverseByWither = function (dictWitherable) {
    return function (dictApplicative) {
        return function (f) {
            return wither(dictWitherable)(dictApplicative)(function ($56) {
                return Data_Functor.map((dictApplicative.Apply0()).Functor0())(Data_Maybe.Just.create)(f($56));
            });
        };
    };
};
var partitionMapByWilt = function (dictWitherable) {
    return function (p) {
        return function ($57) {
            return Data_Newtype.unwrap(Data_Identity.newtypeIdentity)(wilt(dictWitherable)(Data_Identity.applicativeIdentity)(function ($58) {
                return Data_Identity.Identity(p($58));
            })($57));
        };
    };
};
var filterMapByWither = function (dictWitherable) {
    return function (p) {
        return function ($59) {
            return Data_Newtype.unwrap(Data_Identity.newtypeIdentity)(wither(dictWitherable)(Data_Identity.applicativeIdentity)(function ($60) {
                return Data_Identity.Identity(p($60));
            })($59));
        };
    };
};
module.exports = {
    Witherable: Witherable,
    wilt: wilt,
    wither: wither,
    partitionMapByWilt: partitionMapByWilt,
    filterMapByWither: filterMapByWither,
    traverseByWither: traverseByWither,
    wilted: wilted,
    withered: withered,
    witherableArray: witherableArray,
    witherableList: witherableList,
    witherableMap: witherableMap,
    witherableMaybe: witherableMaybe,
    witherableEither: witherableEither
};