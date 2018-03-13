"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Control_Comonad_Traced = require("../Control.Comonad.Traced");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Control_Plus = require("../Control.Plus");
var DOM = require("../DOM");
var DOM_HTML_HTMLTableElement = require("../DOM.HTML.HTMLTableElement");
var DOM_HTML_History = require("../DOM.HTML.History");
var Data_Eq = require("../Data.Eq");
var Data_EuclideanRing = require("../Data.EuclideanRing");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Generic_Rep_Enum = require("../Data.Generic.Rep.Enum");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Lens = require("../Data.Lens");
var Data_List = require("../Data.List");
var Data_Maybe = require("../Data.Maybe");
var Data_Ord = require("../Data.Ord");
var Data_Ring = require("../Data.Ring");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Semiring = require("../Data.Semiring");
var Data_Show = require("../Data.Show");
var Data_String = require("../Data.String");
var Data_Unit = require("../Data.Unit");
var FRP = require("../FRP");
var FRP_Behavior = require("../FRP.Behavior");
var FRP_Behavior_Keyboard = require("../FRP.Behavior.Keyboard");
var FRP_Event = require("../FRP.Event");
var FRP_Event_Time = require("../FRP.Event.Time");
var $$Math = require("../Math");
var Neon = require("../Neon");
var Neon_Operator = require("../Neon.Operator");
var Neon_Primitive_Int = require("../Neon.Primitive.Int");
var Prelude = require("../Prelude");
var PrestoDOM_Core = require("../PrestoDOM.Core");
var PrestoDOM_Elements = require("../PrestoDOM.Elements");
var PrestoDOM_Events = require("../PrestoDOM.Events");
var PrestoDOM_Properties = require("../PrestoDOM.Properties");
var PrestoDOM_Types = require("../PrestoDOM.Types");
var PrestoDOM_Types_DomAttributes = require("../PrestoDOM.Types.DomAttributes");
var PrestoDOM_Util = require("../PrestoDOM.Util");
var Type_Data_Ordering = require("../Type.Data.Ordering");
var view = function (action) {
    return function (state) {
        return PrestoDOM_Elements.relativeLayout([ PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.background("#323232"), PrestoDOM_Properties.gravity("center"), PrestoDOM_Properties.name("rootNode") ])([ PrestoDOM_Elements.relativeLayout([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(250)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(250)), PrestoDOM_Properties.background("black"), PrestoDOM_Properties.orientation("vertical"), PrestoDOM_Properties.margin("20,20,20,20"), PrestoDOM_Properties.gravity("center") ])([ PrestoDOM_Elements.linearLayout([  ])([ PrestoDOM_Elements.textView([ PrestoDOM_Properties.id_("score"), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(50)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(150)), PrestoDOM_Properties.margin("-125,-125,0,0"), PrestoDOM_Properties.text("Score: " + Data_Show.show(Data_Show.showInt)(state.score)), PrestoDOM_Properties.textSize("50px"), PrestoDOM_Properties.color("white") ]) ]), PrestoDOM_Elements.linearLayout([  ])([ PrestoDOM_Elements.textView([ PrestoDOM_Properties.id_("lives"), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(50)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(150)), PrestoDOM_Properties.margin("-125,0,0,0"), PrestoDOM_Properties.text("Lives: " + Data_Show.show(Data_Show.showInt)(state.lives)), PrestoDOM_Properties.textSize("50px"), PrestoDOM_Properties.color("white") ]) ]) ]), PrestoDOM_Elements.relativeLayout([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(700)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(1024)), PrestoDOM_Properties.background("white"), PrestoDOM_Properties.orientation("vertical"), PrestoDOM_Properties.margin("320,20,20,20"), PrestoDOM_Properties.gravity("center") ])([ PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(200)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(200)), PrestoDOM_Properties.background("#ffffff"), PrestoDOM_Properties.orientation("vertical"), PrestoDOM_Properties.margin("-512,500,0,0"), PrestoDOM_Properties.gravity("center") ])([ PrestoDOM_Elements.imageView([ PrestoDOM_Properties.id_("pedestal"), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(200)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(200)), PrestoDOM_Properties.margin("0,0,0,0"), PrestoDOM_Properties.imageUrl("pedestal") ]) ]), PrestoDOM_Elements.linearLayout([  ])([ PrestoDOM_Elements.imageView([ PrestoDOM_Properties.id_("launcher"), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(50)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(50)), PrestoDOM_Properties.margin("-450,455,0,0"), PrestoDOM_Properties.rotation(Data_Show.show(Data_Show.showInt)(state.angle)), PrestoDOM_Properties.imageUrl("launcher") ]) ]), PrestoDOM_Elements.linearLayout([  ])([ PrestoDOM_Elements.imageView([ PrestoDOM_Properties.id_("fruit"), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(50)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(50)), PrestoDOM_Properties.margin(Data_Show.show(Data_Show.showNumber)(state.fruitX) + ("," + (Data_Show.show(Data_Show.showNumber)(state.fruitY) + ",0,0"))), PrestoDOM_Properties.rotation(Data_Show.show(Data_Show.showInt)(state.angle)), PrestoDOM_Properties.imageUrl("fruitgif"), PrestoDOM_Properties.visibility(state.visibility) ]) ]), PrestoDOM_Elements.linearLayout([  ])([ PrestoDOM_Elements.imageView([ PrestoDOM_Properties.id_("basket"), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(80)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(80)), PrestoDOM_Properties.margin(Data_Show.show(Data_Show.showInt)(state.x) + ",635,0,0"), PrestoDOM_Properties.imageUrl("basket") ]) ]), PrestoDOM_Elements.linearLayout([  ])([ PrestoDOM_Elements.imageView([ PrestoDOM_Properties.id_("splash"), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(50)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(50)), PrestoDOM_Properties.margin(Data_Show.show(Data_Show.showNumber)(state.fruitX) + ",650,0,0"), PrestoDOM_Properties.imageUrl("splash"), PrestoDOM_Properties.visibility(state.splash) ]) ]), PrestoDOM_Elements.linearLayout([  ])([ PrestoDOM_Elements.textView([ PrestoDOM_Properties.id_("gameover"), PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(250)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(250)), PrestoDOM_Properties.margin("100,100,0,0"), PrestoDOM_Properties.text("Game Over"), PrestoDOM_Properties.textSize("100px"), PrestoDOM_Properties.color("black"), PrestoDOM_Properties.visibility(state.over) ]) ]) ]) ]);
    };
};
var toRad = function (angle) {
    return (angle * $$Math.pi) / 180.0;
};
var checkFruit = function (state) {
    var $20 = state.fruitX > Neon_Primitive_Int.toNumber(state.x - 5 | 0) && state.fruitX < Neon_Primitive_Int.toNumber(state.x + 85 | 0);
    if ($20) {
        var $21 = {};
        for (var $22 in state) {
            if ({}.hasOwnProperty.call(state, $22)) {
                $21[$22] = state[$22];
            };
        };
        $21.score = state.score + 1 | 0;
        return $21;
    };
    var $24 = state.lives === 1;
    if ($24) {
        var $25 = {};
        for (var $26 in state) {
            if ({}.hasOwnProperty.call(state, $26)) {
                $25[$26] = state[$26];
            };
        };
        $25.gameOver = true;
        return $25;
    };
    var $28 = {};
    for (var $29 in state) {
        if ({}.hasOwnProperty.call(state, $29)) {
            $28[$29] = state[$29];
        };
    };
    $28.splash = "visible";
    $28.lives = state.lives - 1 | 0;
    return $28;
};
var resetFruit = function (state) {
    var $31 = state.fruitY > 600.0;
    if ($31) {
        return checkFruit((function () {
            var $32 = {};
            for (var $33 in state) {
                if ({}.hasOwnProperty.call(state, $33)) {
                    $32[$33] = state[$33];
                };
            };
            $32.isShot = false;
            $32.visibility = "gone";
            return $32;
        })());
    };
    return state;
};
var shootFruit = function (state) {
    var $35 = state.shotAngle <= 200;
    if ($35) {
        var $36 = {};
        for (var $37 in state) {
            if ({}.hasOwnProperty.call(state, $37)) {
                $36[$37] = state[$37];
            };
        };
        $36.fruitX = state.fruitX + 5.0;
        $36.fruitY = state.distY + $$Math.sin(toRad(Neon_Primitive_Int.toNumber(state.shotAngle))) * -250.0;
        $36.shotAngle = state.shotAngle + 2 | 0;
        return $36;
    };
    return resetFruit((function () {
        var $39 = {};
        for (var $40 in state) {
            if ({}.hasOwnProperty.call(state, $40)) {
                $39[$40] = state[$40];
            };
        };
        $39.fruitX = state.fruitX + 5.0;
        $39.fruitY = state.fruitY + 8.0;
        return $39;
    })());
};
var playerControl = function (up) {
    return function (down) {
        return function (shoot) {
            return function (state) {
                var $42 = state.angle > 45;
                if ($42) {
                    var $43 = {};
                    for (var $44 in state) {
                        if ({}.hasOwnProperty.call(state, $44)) {
                            $43[$44] = state[$44];
                        };
                    };
                    $43.angle = 45;
                    return $43;
                };
                var $46 = state.angle < (-45 | 0);
                if ($46) {
                    var $47 = {};
                    for (var $48 in state) {
                        if ({}.hasOwnProperty.call(state, $48)) {
                            $47[$48] = state[$48];
                        };
                    };
                    $47.angle = -45 | 0;
                    return $47;
                };
                if (state.isShot) {
                    return shootFruit((function () {
                        var $51 = {};
                        for (var $52 in state) {
                            if ({}.hasOwnProperty.call(state, $52)) {
                                $51[$52] = state[$52];
                            };
                        };
                        $51.visibility = "visible";
                        return $51;
                    })());
                };
                if (up) {
                    var $55 = {};
                    for (var $56 in state) {
                        if ({}.hasOwnProperty.call(state, $56)) {
                            $55[$56] = state[$56];
                        };
                    };
                    $55.angle = state.angle - 5 | 0;
                    return $55;
                };
                if (down) {
                    var $59 = {};
                    for (var $60 in state) {
                        if ({}.hasOwnProperty.call(state, $60)) {
                            $59[$60] = state[$60];
                        };
                    };
                    $59.angle = state.angle + 5 | 0;
                    return $59;
                };
                if (shoot) {
                    var $63 = {};
                    for (var $64 in state) {
                        if ({}.hasOwnProperty.call(state, $64)) {
                            $63[$64] = state[$64];
                        };
                    };
                    $63.fruitX = -425.0;
                    $63.fruitY = 425.0;
                    $63.isShot = true;
                    $63.shotAngle = state.angle;
                    $63.splash = "gone";
                    $63.visibility = "visible";
                    $63.distY = 425.0 - $$Math.sin(toRad(Neon_Primitive_Int.toNumber(state.angle))) * -250.0;
                    return $63;
                };
                return state;
            };
        };
    };
};
var main = (function () {
    var movement = function (up) {
        return function (down) {
            return function (shoot) {
                return function (oldState) {
                    if (oldState.gameOver) {
                        var $67 = {};
                        for (var $68 in oldState) {
                            if ({}.hasOwnProperty.call(oldState, $68)) {
                                $67[$68] = oldState[$68];
                            };
                        };
                        $67.splash = "visible";
                        $67.over = "visible";
                        return $67;
                    };
                    return playerControl(up)(down)(shoot)((function () {
                        var $70 = oldState.x > 420;
                        if ($70) {
                            var $71 = {};
                            for (var $72 in oldState) {
                                if ({}.hasOwnProperty.call(oldState, $72)) {
                                    $71[$72] = oldState[$72];
                                };
                            };
                            $71.x = oldState.x - 2 | 0;
                            $71.y = -2 | 0;
                            return $71;
                        };
                        var $74 = oldState.x < (-300 | 0);
                        if ($74) {
                            var $75 = {};
                            for (var $76 in oldState) {
                                if ({}.hasOwnProperty.call(oldState, $76)) {
                                    $75[$76] = oldState[$76];
                                };
                            };
                            $75.x = oldState.x + 2 | 0;
                            $75.y = 2;
                            return $75;
                        };
                        var $78 = {};
                        for (var $79 in oldState) {
                            if ({}.hasOwnProperty.call(oldState, $79)) {
                                $78[$79] = oldState[$79];
                            };
                        };
                        $78.x = oldState.x + oldState.y | 0;
                        return $78;
                    })());
                };
            };
        };
    };
    var initialState = {
        x: 0,
        y: 2,
        angle: 0,
        shotAngle: 0,
        fruitX: -425.0,
        fruitY: 425.0,
        distY: 425.0,
        isShot: false,
        visibility: "gone",
        splash: "gone",
        score: 0,
        lives: 5,
        gameOver: false,
        over: "gone"
    };
    return function __do() {
        var v = PrestoDOM_Core.mkDyn(PrestoDOM_Core.boolDyn)(false)();
        var v1 = PrestoDOM_Core.mkDyn(PrestoDOM_Core.boolDyn)(false)();
        var v2 = PrestoDOM_Core.mkDyn(PrestoDOM_Core.boolDyn)(false)();
        var v3 = PrestoDOM_Util.render(view({
            up: v,
            down: v1,
            shoot: v2
        }))(initialState)();
        return Control_Apply.applySecond(Control_Monad_Eff.applyEff)(v3.updateState(Control_Apply.apply(FRP_Behavior.applyABehavior(FRP_Event.functorEvent))(Control_Apply.apply(FRP_Behavior.applyABehavior(FRP_Event.functorEvent))(Control_Apply.apply(FRP_Behavior.applyABehavior(FRP_Event.functorEvent))(Data_Functor.map(FRP_Behavior.functorABehavior(FRP_Event.functorEvent))(movement)(FRP_Behavior_Keyboard.key(38)))(FRP_Behavior_Keyboard.key(40)))(FRP_Behavior_Keyboard.key(32)))(v3.stateBeh))(FRP_Event_Time.animationFrame))(Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit))();
    };
})();
module.exports = {
    main: main,
    toRad: toRad,
    playerControl: playerControl,
    shootFruit: shootFruit,
    resetFruit: resetFruit,
    checkFruit: checkFruit,
    view: view
};
