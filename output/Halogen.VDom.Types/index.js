// Generated by purs version 0.11.7
"use strict";
var Control_Apply = require("../Control.Apply");
var Control_Category = require("../Control.Category");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Bifunctor = require("../Data.Bifunctor");
var Data_Eq = require("../Data.Eq");
var Data_Functor = require("../Data.Functor");
var Data_Generic = require("../Data.Generic");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Maybe = require("../Data.Maybe");
var Data_Newtype = require("../Data.Newtype");
var Data_Ord = require("../Data.Ord");
var Data_Ordering = require("../Data.Ordering");
var Data_Tuple = require("../Data.Tuple");
var Data_Unit = require("../Data.Unit");
var Prelude = require("../Prelude");
var Unsafe_Coerce = require("../Unsafe.Coerce");
var Namespace = function (x) {
    return x;
};
var ElemName = function (x) {
    return x;
};
var ElemSpec = (function () {
    function ElemSpec(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    ElemSpec.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new ElemSpec(value0, value1, value2);
            };
        };
    };
    return ElemSpec;
})();
var Text = (function () {
    function Text(value0) {
        this.value0 = value0;
    };
    Text.create = function (value0) {
        return new Text(value0);
    };
    return Text;
})();
var Elem = (function () {
    function Elem(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Elem.create = function (value0) {
        return function (value1) {
            return new Elem(value0, value1);
        };
    };
    return Elem;
})();
var Keyed = (function () {
    function Keyed(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Keyed.create = function (value0) {
        return function (value1) {
            return new Keyed(value0, value1);
        };
    };
    return Keyed;
})();
var Widget = (function () {
    function Widget(value0) {
        this.value0 = value0;
    };
    Widget.create = function (value0) {
        return new Widget(value0);
    };
    return Widget;
})();
var Grafted = (function () {
    function Grafted(value0) {
        this.value0 = value0;
    };
    Grafted.create = function (value0) {
        return new Grafted(value0);
    };
    return Grafted;
})();
var Graft = (function () {
    function Graft(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    Graft.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new Graft(value0, value1, value2);
            };
        };
    };
    return Graft;
})();
var unGraft = function (f) {
    return function ($124) {
        return f($124);
    };
};
var ordNamespace = Data_Ord.ordString;
var ordElemName = Data_Ord.ordString;
var newtypeNamespace = new Data_Newtype.Newtype(function (n) {
    return n;
}, Namespace);
var newtypeElemName = new Data_Newtype.Newtype(function (n) {
    return n;
}, ElemName);
var graft = Unsafe_Coerce.unsafeCoerce;
var genericNamespace = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "Halogen.VDom.Types.Namespace" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(Namespace))(Data_Generic.fromSpine(Data_Generic.genericString)(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("Halogen.VDom.Types.Namespace", [ {
        sigConstructor: "Halogen.VDom.Types.Namespace",
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(Data_Generic.genericString)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("Halogen.VDom.Types.Namespace", [ function ($dollarq) {
        return Data_Generic.toSpine(Data_Generic.genericString)(v);
    } ]);
});
var genericElemName = new Data_Generic.Generic(function (v) {
    if (v instanceof Data_Generic.SProd && (v.value0 === "Halogen.VDom.Types.ElemName" && v.value1.length === 1)) {
        return Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(ElemName))(Data_Generic.fromSpine(Data_Generic.genericString)(v["value1"][0](Data_Unit.unit)));
    };
    return Data_Maybe.Nothing.value;
}, function ($dollarq) {
    return new Data_Generic.SigProd("Halogen.VDom.Types.ElemName", [ {
        sigConstructor: "Halogen.VDom.Types.ElemName",
        sigValues: [ function ($dollarq1) {
            return Data_Generic.toSignature(Data_Generic.genericString)(Data_Generic.anyProxy);
        } ]
    } ]);
}, function (v) {
    return new Data_Generic.SProd("Halogen.VDom.Types.ElemName", [ function ($dollarq) {
        return Data_Generic.toSpine(Data_Generic.genericString)(v);
    } ]);
});
var genericElemSpec = function (dictGeneric) {
    return new Data_Generic.Generic(function (v) {
        if (v instanceof Data_Generic.SProd && (v.value0 === "Halogen.VDom.Types.ElemSpec" && v.value1.length === 3)) {
            return Control_Apply.apply(Data_Maybe.applyMaybe)(Control_Apply.apply(Data_Maybe.applyMaybe)(Control_Apply.apply(Data_Maybe.applyMaybe)(new Data_Maybe.Just(ElemSpec.create))(Data_Generic.fromSpine(Data_Generic.genericMaybe(genericNamespace))(v["value1"][0](Data_Unit.unit))))(Data_Generic.fromSpine(genericElemName)(v["value1"][1](Data_Unit.unit))))(Data_Generic.fromSpine(dictGeneric)(v["value1"][2](Data_Unit.unit)));
        };
        return Data_Maybe.Nothing.value;
    }, function ($dollarq) {
        return new Data_Generic.SigProd("Halogen.VDom.Types.ElemSpec", [ {
            sigConstructor: "Halogen.VDom.Types.ElemSpec",
            sigValues: [ function ($dollarq1) {
                return Data_Generic.toSignature(Data_Generic.genericMaybe(genericNamespace))(Data_Generic.anyProxy);
            }, function ($dollarq1) {
                return Data_Generic.toSignature(genericElemName)(Data_Generic.anyProxy);
            }, function ($dollarq1) {
                return Data_Generic.toSignature(dictGeneric)(Data_Generic.anyProxy);
            } ]
        } ]);
    }, function (v) {
        return new Data_Generic.SProd("Halogen.VDom.Types.ElemSpec", [ function ($dollarq) {
            return Data_Generic.toSpine(Data_Generic.genericMaybe(genericNamespace))(v.value0);
        }, function ($dollarq) {
            return Data_Generic.toSpine(genericElemName)(v.value1);
        }, function ($dollarq) {
            return Data_Generic.toSpine(dictGeneric)(v.value2);
        } ]);
    });
};
var functorGraft = new Data_Functor.Functor(function (g) {
    return unGraft(function (v) {
        return graft(new Graft(v.value0, function ($125) {
            return g(v.value1($125));
        }, v.value2));
    });
});
var functorVDom = new Data_Functor.Functor(function (g) {
    return function (v) {
        if (v instanceof Text) {
            return new Text(v.value0);
        };
        if (v instanceof Grafted) {
            return new Grafted(Data_Functor.map(functorGraft)(g)(v.value0));
        };
        return new Grafted(graft(new Graft(Control_Category.id(Control_Category.categoryFn), g, v)));
    };
});
var functorElemSpec = new Data_Functor.Functor(function (f) {
    return function (v) {
        return new ElemSpec(v.value0, v.value1, f(v.value2));
    };
});
var eqNamespace = Data_Eq.eqString;
var eqElemName = Data_Eq.eqString;
var eqElemSpec = function (dictEq) {
    return new Data_Eq.Eq(function (x) {
        return function (y) {
            return Data_Eq.eq(Data_Maybe.eqMaybe(eqNamespace))(x.value0)(y.value0) && Data_Eq.eq(eqElemName)(x.value1)(y.value1) && Data_Eq.eq(dictEq)(x.value2)(y.value2);
        };
    });
};
var ordElemSpec = function (dictOrd) {
    return new Data_Ord.Ord(function () {
        return eqElemSpec(dictOrd.Eq0());
    }, function (x) {
        return function (y) {
            var v = Data_Ord.compare(Data_Maybe.ordMaybe(ordNamespace))(x.value0)(y.value0);
            if (v instanceof Data_Ordering.LT) {
                return Data_Ordering.LT.value;
            };
            if (v instanceof Data_Ordering.GT) {
                return Data_Ordering.GT.value;
            };
            var v1 = Data_Ord.compare(ordElemName)(x.value1)(y.value1);
            if (v1 instanceof Data_Ordering.LT) {
                return Data_Ordering.LT.value;
            };
            if (v1 instanceof Data_Ordering.GT) {
                return Data_Ordering.GT.value;
            };
            return Data_Ord.compare(dictOrd)(x.value2)(y.value2);
        };
    });
};
var bifunctorGraft = new Data_Bifunctor.Bifunctor(function (f) {
    return function (g) {
        return unGraft(function (v) {
            return graft(new Graft(function ($126) {
                return f(v.value0($126));
            }, function ($127) {
                return g(v.value1($127));
            }, v.value2));
        });
    };
});
var bifunctorVDom = new Data_Bifunctor.Bifunctor(function (f) {
    return function (g) {
        return function (v) {
            if (v instanceof Text) {
                return new Text(v.value0);
            };
            if (v instanceof Grafted) {
                return new Grafted(Data_Bifunctor.bimap(bifunctorGraft)(f)(g)(v.value0));
            };
            return new Grafted(graft(new Graft(f, g, v)));
        };
    };
});
var runGraft = unGraft(function (v) {
    var go = function (v2) {
        if (v2 instanceof Text) {
            return new Text(v2.value0);
        };
        if (v2 instanceof Elem) {
            return new Elem(Data_Functor.map(functorElemSpec)(v.value0)(v2.value0), Data_Functor.map(Data_Functor.functorArray)(go)(v2.value1));
        };
        if (v2 instanceof Keyed) {
            return new Keyed(Data_Functor.map(functorElemSpec)(v.value0)(v2.value0), Data_Functor.map(Data_Functor.functorArray)(Data_Functor.map(Data_Tuple.functorTuple)(go))(v2.value1));
        };
        if (v2 instanceof Widget) {
            return new Widget(v.value1(v2.value0));
        };
        if (v2 instanceof Grafted) {
            return new Grafted(Data_Bifunctor.bimap(bifunctorGraft)(v.value0)(v.value1)(v2.value0));
        };
        throw new Error("Failed pattern match at Halogen.VDom.Types line 75, column 7 - line 75, column 27: " + [ v2.constructor.name ]);
    };
    return go(v.value2);
});
module.exports = {
    Text: Text,
    Elem: Elem,
    Keyed: Keyed,
    Widget: Widget,
    Grafted: Grafted,
    Graft: Graft,
    graft: graft,
    unGraft: unGraft,
    runGraft: runGraft,
    ElemSpec: ElemSpec,
    ElemName: ElemName,
    Namespace: Namespace,
    functorVDom: functorVDom,
    bifunctorVDom: bifunctorVDom,
    functorGraft: functorGraft,
    bifunctorGraft: bifunctorGraft,
    eqElemSpec: eqElemSpec,
    ordElemSpec: ordElemSpec,
    genericElemSpec: genericElemSpec,
    functorElemSpec: functorElemSpec,
    newtypeElemName: newtypeElemName,
    eqElemName: eqElemName,
    ordElemName: ordElemName,
    genericElemName: genericElemName,
    newtypeNamespace: newtypeNamespace,
    eqNamespace: eqNamespace,
    ordNamespace: ordNamespace,
    genericNamespace: genericNamespace
};