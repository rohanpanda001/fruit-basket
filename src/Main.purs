module Main where

import Data.Maybe
import FRP.Behavior.Keyboard
import FRP.Event
import Math
import Prelude
import PrestoDOM.Core
import PrestoDOM.Elements
import PrestoDOM.Events
import PrestoDOM.Properties
import PrestoDOM.Types

import Control.Comonad.Traced (listen)
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, log, logShow)
import Control.Plus ((<|>))
import DOM (DOM)
import DOM.HTML.HTMLTableElement (border)
import DOM.HTML.History (state)
import Data.Generic.Rep.Enum (genericCardinality)
import Data.Lens ((^.))
import Data.List (elemLastIndex)
import Data.String (length)
import FRP (FRP)
import FRP.Behavior (Behavior, sample_)
import FRP.Event.Time (animationFrame)
import Neon (toNumber)
import Neon.Operator ((%))
import PrestoDOM.Util (logNode, render, updateState)
import Type.Data.Ordering (invertOrdering)

type Action =
  { up :: Dynamic Boolean
  , down :: Dynamic Boolean
  , shoot :: Dynamic Boolean
  }

type State =
  { x :: Int
  , y :: Int
  , angle :: Int
  , shotAngle :: Int
  , fruitX :: Number
  , fruitY :: Number
  , distY :: Number
  , isShot :: Boolean
  , visibility :: String
  , splash :: String
  , score :: Int
  , lives :: Int
  , gameOver :: Boolean
  , over :: String
  }


main :: forall eff. Eff ( console :: CONSOLE, frp :: FRP, dom :: DOM | eff ) Unit
main = do
    let initialState = { x : 0 , y : 2, angle : 0, shotAngle : 0, fruitX : -425.0, fruitY : 425.0, distY : 425.0, isShot : false, visibility : "gone", splash : "gone", score : 0, lives : 5, gameOver : false, over : "gone"}
    up <- mkDyn false
    down <- mkDyn false
    shoot <- mkDyn false
    { stateBeh, updateState } <-
      render (view { up, down, shoot }) initialState
    updateState
      (movement <$> (key 38) <*> (key 40) <*> (key 32) <*> stateBeh)
      (animationFrame)
      *> pure unit
  where movement up down shoot oldState = if oldState.gameOver then oldState{splash = "visible", over = "visible"} else playerControl up down shoot (if oldState.x > 420 then oldState{x = oldState.x - 2,y = -2} else if oldState.x < -300 then oldState{x = oldState.x + 2,y = 2} else oldState{x = oldState.x + oldState.y})

toRad :: Number -> Number
toRad angle = angle * pi / 180.0

playerControl :: Boolean -> Boolean -> Boolean -> State -> State
playerControl up down shoot state = if (state.angle >  45 ) 
  then state{angle = 45} 
  else if (state.angle <  -45 ) 
    then state{angle = -45} 
    else (if state.isShot 
      then shootFruit state{visibility = "visible"}
      else if up 
      then state{angle = state.angle - 5} 
      else if down 
        then state{angle = state.angle + 5} 
        else if shoot 
          then state{fruitX = -425.0, fruitY = 425.0, isShot = true, shotAngle = state.angle,splash = "gone", visibility = "visible", distY = 425.0 - sin(toRad (toNumber state.angle))*(-250.0)}  
          else state)

shootFruit :: State -> State
-- shootFruit state = resetFruit state{fruitX = state.fruitX + (sin(toRad ((toNumber state.shotAngle) + 45.0))*10.0)
  -- , fruitY = state.fruitY - (cos(toRad ((toNumber state.shotAngle) + 45.0))*10.0)} 
shootFruit state = if state.shotAngle <=200 
  then state{fruitX = state.fruitX + 5.0, fruitY = state.distY + sin(toRad (toNumber state.shotAngle))*(-250.0), shotAngle = state.shotAngle + 2}
  else resetFruit state{fruitX = state.fruitX + 5.0, fruitY = state.fruitY + 8.0}

resetFruit :: State -> State
resetFruit state = if state.fruitY > 600.0
  then checkFruit state{isShot = false, visibility = "gone"} 
  else state

checkFruit :: State -> State
checkFruit state = if (state.fruitX > toNumber (state.x - 5) && state.fruitX < toNumber (state.x +85))
  then state{score = state.score + 1}
  else if state.lives == 1 
  then state{gameOver = true}
  else state{splash = "visible", lives = state.lives - 1}


view :: forall w i. Action
  -> State
  -> PrestoDOM i w
view action state =
  relativeLayout
    [ height Match_Parent
    , width Match_Parent
    , background "#323232"
    , gravity "center"
    , name "rootNode"
    ]
    [ 
      relativeLayout
      [ height $ V 250
      , width $ V 250
      , background "black"
      , orientation "vertical"
      , margin "20,20,20,20"
      , gravity "center"
      ]
      [
        linearLayout[]
        [ 
          textView
          [ id_ "score"
          , height $ V 50
          , width $ V 150
          , margin ("-125,-125,0,0")
          , text ("Score: "<> show state.score)
          , textSize "50px"
          , color "white"
          ]
        ]
        ,linearLayout[]
        [ 
          textView
          [ id_ "lives"
          , height $ V 50
          , width $ V 150
          , margin ("-125,0,0,0")
          , text ("Lives: "<> show state.lives)
          , textSize "50px"
          , color "white"
          ]
        ]
        
      ]

      ,relativeLayout
      [ height $ V 700
      , width $ V 1024
      , background "white"
      , orientation "vertical"
      , margin "320,20,20,20"
      , gravity "center"
      ]
      [
        linearLayout
        [ 
          height $ V 200
          , width $ V 200
          , background "#ffffff"
          , orientation "vertical"
          , margin "-512,500,0,0"
          , gravity "center"
        ] [
          imageView
          [ id_ "pedestal"
          , height $ V 200
          , width $ V 200
          , margin ("0,0,0,0")
          , imageUrl "pedestal"
          ]
        ]

        ,linearLayout[]
        [ 
          imageView
          [ id_ "launcher"
          , height $ V 50
          , width $ V 50
          , margin ("-450,455,0,0")
          , rotation (show state.angle)
          , imageUrl "launcher"
          ]
        ]
        ,linearLayout[]
        [ 
          imageView
          [ id_ "fruit"
          , height $ V 50
          , width $ V 50
          , margin (show (state.fruitX) <>","<>show (state.fruitY)<>",0,0")
          , rotation (show state.angle)
          , imageUrl "fruitgif"
          , visibility (state.visibility)
          ]
        ]
        ,linearLayout[]
        [ 
          imageView
          [ id_ "basket"
          , height $ V 80
          , width $ V 80
          , margin (show (state.x)<>",635,0,0")
          , imageUrl "basket"
          ]
        ]
        ,linearLayout[]
        [ 
          imageView
          [ id_ "splash"
          , height $ V 50
          , width $ V 50
          , margin (show (state.fruitX)<>",650,0,0")
          , imageUrl "splash"
          , visibility (state.splash) 
          ]
        ]
        ,linearLayout[]
        [ 
          textView
          [ id_ "gameover"
          , height $ V 250
          , width $ V 250
          , margin ("100,100,0,0")
          , text ("Game Over")
          , textSize "100px"
          , color "black"
          , visibility state.over
          ]
        ]
      ]
    ]
