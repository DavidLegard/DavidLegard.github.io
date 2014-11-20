Elm.Triango = Elm.Triango || {};
Elm.Triango.make = function (_elm) {
   "use strict";
   _elm.Triango = _elm.Triango || {};
   if (_elm.Triango.values)
   return _elm.Triango.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Triango",
   $Basics = Elm.Basics.make(_elm),
   $Graphics$Collage = Elm.Graphics.Collage.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $List = Elm.List.make(_elm),
   $Mouse = Elm.Mouse.make(_elm),
   $Signal = Elm.Signal.make(_elm),
   $Time = Elm.Time.make(_elm),
   $TriangoModule = Elm.TriangoModule.make(_elm),
   $TriangoView = Elm.TriangoView.make(_elm);
   var gamma = function (_v0) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple3": return _v0._2;}
         _E.Case($moduleName,
         "on line 73, column 17 to 18");
      }();
   };
   var beta = function (_v5) {
      return function () {
         switch (_v5.ctor)
         {case "_Tuple3": return _v5._1;}
         _E.Case($moduleName,
         "on line 72, column 16 to 17");
      }();
   };
   var alpha = function (_v10) {
      return function () {
         switch (_v10.ctor)
         {case "_Tuple3":
            return _v10._0;}
         _E.Case($moduleName,
         "on line 71, column 17 to 18");
      }();
   };
   var view = function (brd) {
      return A3($Graphics$Collage.collage,
      500,
      700,
      _L.fromArray([$TriangoView.background
                   ,$TriangoView.board
                   ,$TriangoView.getCircles(brd.pieces)]));
   };
   var adjustBoard = F2(function (sig,
   bpv) {
      return function () {
         var pz = alpha(sig);
         return _U.eq(bpv.nextPlayer,
         "H") ? A2($TriangoModule.playHumanMove,
         pz,
         bpv) : $TriangoModule.playComputerMove(bpv);
      }();
   });
   var closeEnough = F4(function (px,
   py,
   x,
   y) {
      return function () {
         var y2 = 350 - y;
         var x2 = x - 250;
         return _U.cmp(Math.pow(x2 - px,
         2) + Math.pow(y2 - py,2),
         225) < 0;
      }();
   });
   var chooseLocation = function (pp) {
      return function () {
         switch (pp.ctor)
         {case "[]": return {_: {}
                            ,number: 0
                            ,x: 0
                            ,y: 0};}
         return $List.head(pp);
      }();
   };
   var whichBoardPosition = function (_v16) {
      return function () {
         switch (_v16.ctor)
         {case "_Tuple2":
            return function () {
                 var pz = chooseLocation(A2($List.filter,
                 function (p) {
                    return A4(closeEnough,
                    p.x,
                    p.y,
                    _v16._0,
                    _v16._1);
                 },
                 $TriangoView.positions));
                 return {ctor: "_Tuple3"
                        ,_0: pz.number
                        ,_1: _v16._0
                        ,_2: _v16._1};
              }();}
         _E.Case($moduleName,
         "between lines 31 and 32");
      }();
   };
   var isABoardPosition = function (_v20) {
      return function () {
         switch (_v20.ctor)
         {case "_Tuple2":
            return A2($List.any,
              function (p) {
                 return A4(closeEnough,
                 p.x,
                 p.y,
                 _v20._0,
                 _v20._1);
              },
              $TriangoView.positions);}
         _E.Case($moduleName,
         "on line 24, column 26 to 71");
      }();
   };
   var click2 = A2($Signal.sampleOn,
   A2($Time.delay,
   50,
   $Mouse.clicks),
   $Mouse.position);
   var clickPositionsSignal = A2($Signal.sampleOn,
   $Mouse.clicks,
   $Mouse.position);
   var whichLocationSignal = A2($Signal._op["<~"],
   whichBoardPosition,
   A2($Signal.merge,
   clickPositionsSignal,
   click2));
   var viewBoard = A3($Signal.foldp,
   adjustBoard,
   $TriangoModule.blankboard,
   whichLocationSignal);
   var main = A2($Signal._op["<~"],
   view,
   viewBoard);
   var Position = F3(function (a,
   b,
   c) {
      return {_: {}
             ,number: a
             ,x: b
             ,y: c};
   });
   _elm.Triango.values = {_op: _op
                         ,Position: Position
                         ,clickPositionsSignal: clickPositionsSignal
                         ,click2: click2
                         ,whichLocationSignal: whichLocationSignal
                         ,isABoardPosition: isABoardPosition
                         ,whichBoardPosition: whichBoardPosition
                         ,chooseLocation: chooseLocation
                         ,closeEnough: closeEnough
                         ,viewBoard: viewBoard
                         ,adjustBoard: adjustBoard
                         ,view: view
                         ,main: main
                         ,alpha: alpha
                         ,beta: beta
                         ,gamma: gamma};
   return _elm.Triango.values;
};Elm.TriangoModule = Elm.TriangoModule || {};
Elm.TriangoModule.make = function (_elm) {
   "use strict";
   _elm.TriangoModule = _elm.TriangoModule || {};
   if (_elm.TriangoModule.values)
   return _elm.TriangoModule.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "TriangoModule",
   $Basics = Elm.Basics.make(_elm),
   $Library = Elm.Library.make(_elm),
   $List = Elm.List.make(_elm),
   $String = Elm.String.make(_elm);
   var neighbours = function (n) {
      return function () {
         switch (n)
         {case 1: return _L.fromArray([2
                                      ,4
                                      ,5
                                      ,6]);
            case 2: return _L.fromArray([1
                                        ,3
                                        ,4
                                        ,5
                                        ,7
                                        ,8]);
            case 3: return _L.fromArray([2
                                        ,6
                                        ,7
                                        ,8]);
            case 4: return _L.fromArray([1
                                        ,2
                                        ,5
                                        ,6
                                        ,9]);
            case 5: return _L.fromArray([1
                                        ,2
                                        ,4
                                        ,6
                                        ,9
                                        ,10
                                        ,11]);
            case 6: return _L.fromArray([1
                                        ,3
                                        ,4
                                        ,5
                                        ,7
                                        ,8
                                        ,9
                                        ,11]);
            case 7: return _L.fromArray([2
                                        ,3
                                        ,6
                                        ,8
                                        ,9
                                        ,10
                                        ,11]);
            case 8: return _L.fromArray([2
                                        ,3
                                        ,6
                                        ,7
                                        ,11]);
            case 9: return _L.fromArray([4
                                        ,5
                                        ,6
                                        ,7
                                        ,10]);
            case 10: return _L.fromArray([5
                                         ,7
                                         ,9
                                         ,11]);
            case 11: return _L.fromArray([5
                                         ,6
                                         ,7
                                         ,8
                                         ,10]);}
         _E.Case($moduleName,
         "between lines 455 and 466");
      }();
   };
   var openTriangles = _L.fromArray([{ctor: "_Tuple2"
                                     ,_0: {ctor: "_Tuple3"
                                          ,_0: 1
                                          ,_1: 9
                                          ,_2: 11}
                                     ,_1: {ctor: "_Tuple3"
                                          ,_0: 4
                                          ,_1: 6
                                          ,_2: 10}}
                                    ,{ctor: "_Tuple2"
                                     ,_0: {ctor: "_Tuple3"
                                          ,_0: 1
                                          ,_1: 8
                                          ,_2: 9}
                                     ,_1: {ctor: "_Tuple3"
                                          ,_0: 2
                                          ,_1: 4
                                          ,_2: 7}}
                                    ,{ctor: "_Tuple2"
                                     ,_0: {ctor: "_Tuple3"
                                          ,_0: 2
                                          ,_1: 9
                                          ,_2: 11}
                                     ,_1: {ctor: "_Tuple3"
                                          ,_0: 5
                                          ,_1: 7
                                          ,_2: 10}}
                                    ,{ctor: "_Tuple2"
                                     ,_0: {ctor: "_Tuple3"
                                          ,_0: 3
                                          ,_1: 9
                                          ,_2: 11}
                                     ,_1: {ctor: "_Tuple3"
                                          ,_0: 6
                                          ,_1: 8
                                          ,_2: 10}}
                                    ,{ctor: "_Tuple2"
                                     ,_0: {ctor: "_Tuple3"
                                          ,_0: 3
                                          ,_1: 4
                                          ,_2: 11}
                                     ,_1: {ctor: "_Tuple3"
                                          ,_0: 2
                                          ,_1: 5
                                          ,_2: 8}}]);
   var lynes = _L.fromArray([{ctor: "_Tuple3"
                             ,_0: 2
                             ,_1: 3
                             ,_2: 4}
                            ,{ctor: "_Tuple3"
                             ,_0: 1
                             ,_1: 2
                             ,_2: 8}
                            ,{ctor: "_Tuple3"
                             ,_0: 1
                             ,_1: 6
                             ,_2: 11}
                            ,{ctor: "_Tuple3"
                             ,_0: 1
                             ,_1: 5
                             ,_2: 10}
                            ,{ctor: "_Tuple3"
                             ,_0: 1
                             ,_1: 4
                             ,_2: 9}
                            ,{ctor: "_Tuple3"
                             ,_0: 3
                             ,_1: 8
                             ,_2: 11}
                            ,{ctor: "_Tuple3"
                             ,_0: 3
                             ,_1: 7
                             ,_2: 10}
                            ,{ctor: "_Tuple3"
                             ,_0: 3
                             ,_1: 6
                             ,_2: 9}
                            ,{ctor: "_Tuple3"
                             ,_0: 2
                             ,_1: 5
                             ,_2: 9}
                            ,{ctor: "_Tuple3"
                             ,_0: 2
                             ,_1: 7
                             ,_2: 11}
                            ,{ctor: "_Tuple3"
                             ,_0: 4
                             ,_1: 6
                             ,_2: 7}
                            ,{ctor: "_Tuple3"
                             ,_0: 4
                             ,_1: 5
                             ,_2: 11}
                            ,{ctor: "_Tuple3"
                             ,_0: 5
                             ,_1: 6
                             ,_2: 8}
                            ,{ctor: "_Tuple3"
                             ,_0: 7
                             ,_1: 8
                             ,_2: 9}
                            ,{ctor: "_Tuple3"
                             ,_0: 9
                             ,_1: 10
                             ,_2: 11}]);
   var findLast = F2(function (s,
   ss) {
      return A2($String.contains,
      s,
      ss) ? $List.last(A2($String.indices,
      s,
      ss)) : 98;
   });
   var findFirst = F2(function (s,
   ss) {
      return A2($String.contains,
      s,
      ss) ? $List.head(A2($String.indices,
      s,
      ss)) : 98;
   });
   var gamma = function (_v1) {
      return function () {
         switch (_v1.ctor)
         {case "_Tuple3": return _v1._2;}
         _E.Case($moduleName,
         "on line 410, column 17 to 18");
      }();
   };
   var beta = function (_v6) {
      return function () {
         switch (_v6.ctor)
         {case "_Tuple3": return _v6._1;}
         _E.Case($moduleName,
         "on line 409, column 16 to 17");
      }();
   };
   var alpha = function (_v11) {
      return function () {
         switch (_v11.ctor)
         {case "_Tuple3":
            return _v11._0;}
         _E.Case($moduleName,
         "on line 408, column 17 to 18");
      }();
   };
   var reject = F2(function (fn,
   ll) {
      return A2($List.filter,
      function ($) {
         return $Basics.not(fn($));
      },
      ll);
   });
   _op["!!"] = F2(function (xs,n) {
      return $List.head($List.drop(n)($String.toList(xs)));
   });
   var occurrences = F2(function (b,
   bb) {
      return $List.length($List.filter(function (i) {
         return _U.eq(i,b);
      })(bb));
   });
   var canFindOpenTriangle = F3(function (t,
   bp,
   c) {
      return function () {
         var bl = $Basics.snd(t);
         var b1 = A2(_op["!!"],
         bp,
         alpha(bl) - 1);
         var b2 = A2(_op["!!"],
         bp,
         beta(bl) - 1);
         var b3 = A2(_op["!!"],
         bp,
         gamma(bl) - 1);
         var tr = $Basics.fst(t);
         var p1 = A2(_op["!!"],
         bp,
         alpha(tr) - 1);
         var p2 = A2(_op["!!"],
         bp,
         beta(tr) - 1);
         var p3 = A2(_op["!!"],
         bp,
         gamma(tr) - 1);
         return A2($List.all,
         function (p) {
            return _U.eq(p,c);
         },
         _L.fromArray([p1
                      ,p2
                      ,p3])) && A2($List.all,
         function (b) {
            return _U.eq(b,_U.chr("0"));
         },
         _L.fromArray([b1,b2,b3]));
      }();
   });
   var isOpenTriangle = F2(function (bp,
   c) {
      return function () {
         var howManyOpenTriangles = $List.length(A2($List.filter,
         function (t) {
            return A3(canFindOpenTriangle,
            t,
            bp,
            c);
         },
         openTriangles));
         return _U.cmp(howManyOpenTriangles,
         0) > 0;
      }();
   });
   var blankTwo = F3(function (bp,
   l,
   c) {
      return function () {
         var p3 = A2(_op["!!"],
         bp,
         gamma(l) - 1);
         var p2 = A2(_op["!!"],
         bp,
         beta(l) - 1);
         var p1 = A2(_op["!!"],
         bp,
         alpha(l) - 1);
         return _U.eq(p1,c) && (_U.eq(p2,
         c) && _U.eq(p3,
         _U.chr("0"))) ? true : _U.eq(p1,
         c) && (_U.eq(p2,
         _U.chr("0")) && _U.eq(p3,
         c)) ? true : _U.eq(p1,
         _U.chr("0")) && (_U.eq(p2,
         c) && _U.eq(p3,
         c)) ? true : false;
      }();
   });
   var emptyTwoLine = F2(function (bp,
   c) {
      return A2($List.filter,
      function (l) {
         return A3(blankTwo,bp,l,c);
      },
      lynes);
   });
   var pozzies = _L.range(1,11);
   var replaceString = function (s) {
      return s;
   };
   var reflectTheBoard = function (bp) {
      return function () {
         var newmid = $String.reverse($String.left(5)(A2($String.right,
         8,
         bp)));
         var newbot = $String.reverse(A2($String.right,
         3,
         bp));
         var newtop = $String.reverse(A2($String.left,
         3,
         bp));
         return _L.append(newtop,
         _L.append(newmid,newbot));
      }();
   };
   var reflectBoard = function (b) {
      return {ctor: "_Tuple3"
             ,_0: reflectTheBoard(alpha(b))
             ,_1: beta(b)
             ,_2: gamma(b)};
   };
   var addReflectedBoard = function (sfs) {
      return _L.append(sfs,
      A2($List.map,reflectBoard,sfs));
   };
   var ynsert = F3(function (n,
   s,
   bp) {
      return function () {
         var st = A2($String.cons,
         s,
         "");
         return _L.append(A2($String.left,
         n - 1,
         bp),
         _L.append(st,
         A2($String.dropLeft,n,bp)));
      }();
   });
   var ynsertIfBlank = F3(function (n,
   s,
   bp) {
      return _U.eq(A2(_op["!!"],
      bp,
      n - 1),
      _U.chr("0")) ? A3(ynsert,
      n,
      s,
      bp) : bp;
   });
   var isLegalMove = F2(function (fr,
   tw) {
      return function () {
         var nbs = neighbours(tw);
         return A2($List.any,
         function (n) {
            return _U.eq(n,fr);
         },
         nbs);
      }();
   });
   var theEmptySpot = function (bp) {
      return 1 + A2(findFirst,
      "0",
      bp);
   };
   var pepperTheDots = F2(function (c,
   bp) {
      return reject(function (p) {
         return _U.eq(p,bp);
      })(A2($List.map,
      function (p) {
         return A3(ynsertIfBlank,
         p,
         c,
         bp);
      },
      pozzies));
   });
   var getBestMove = F2(function (bpv,
   omoves) {
      return function () {
         var bestChoice = $List.head(omoves);
         var amoves = A2(reject,
         function (m) {
            return _U.cmp(m.score,
            bestChoice.score) > 0;
         },
         omoves);
         var topamove = $List.head(amoves);
         return _U.eq($List.length(omoves),
         0) ? _U.replace([["value",0.5]
                         ,["nextPlayer","H"]],
         bpv) : _U.eq($List.length(amoves),
         1) ? _U.replace([["pieces"
                          ,bestChoice.bpoz]
                         ,["value",bestChoice.score]
                         ,["nextPlayer","H"]],
         bpv) : _U.replace([["pieces"
                            ,topamove.bpoz]
                           ,["value",topamove.score]
                           ,["nextPlayer","H"]],
         bpv);
      }();
   });
   var isIllegalFirstPhaseMove = F3(function (n,
   s,
   bp) {
      return !_U.eq(A2(_op["!!"],
      bp,
      n - 1),
      _U.chr("0"));
   });
   var emptySpots = function (bp) {
      return $List.length(A2($String.indexes,
      "0",
      bp));
   };
   var isFirstPhase = function (bp) {
      return _U.cmp(emptySpots(bp),
      1) > 0;
   };
   var hasALine = F3(function (bp,
   c,
   lyne) {
      return function () {
         var p3 = gamma(lyne) - 1;
         var p2 = beta(lyne) - 1;
         var p1 = alpha(lyne) - 1;
         return _U.eq(A2(_op["!!"],
         bp,
         p1),
         c) && (_U.eq(A2(_op["!!"],
         bp,
         p2),
         c) && _U.eq(A2(_op["!!"],bp,p3),
         c));
      }();
   });
   var containsFullLines = F2(function (bp,
   c) {
      return A2($List.filter,
      function (l) {
         return A3(hasALine,bp,c,l);
      },
      lynes);
   });
   var isFulcrum = F2(function (bp,
   c) {
      return function () {
         var emptyTwos = $List.length(A2(emptyTwoLine,
         bp,
         c));
         var fullLines = $List.length(A2(containsFullLines,
         bp,
         c));
         return _U.eq(fullLines,
         1) && _U.cmp(emptyTwos,1) > 0;
      }();
   });
   var isHomeFulcrum = function (bp) {
      return A2(isFulcrum,
      bp,
      _U.chr("H"));
   };
   var isAwayFulcrum = function (bp) {
      return A2(isFulcrum,
      bp,
      _U.chr("C"));
   };
   var isAwayWin = function (bp) {
      return _U.cmp($List.length(A2(containsFullLines,
      bp,
      _U.chr("C"))),
      1) > 0;
   };
   var isHomeWin = function (bp) {
      return _U.cmp($List.length(A2(containsFullLines,
      bp,
      _U.chr("H"))),
      1) > 0;
   };
   var someoneHasWon = function (bp) {
      return A2($String.contains,
      "W",
      bp);
   };
   var replaceTwos = function (bp) {
      return A2($String.map,
      function (c) {
         return _U.eq(c,
         _U.chr("C")) ? _U.chr("W") : c;
      },
      bp);
   };
   var replaceOnes = function (bp) {
      return A2($String.map,
      function (c) {
         return _U.eq(c,
         _U.chr("H")) ? _U.chr("W") : c;
      },
      bp);
   };
   var checkForWinner = function (bpv) {
      return function () {
         var bp = bpv.pieces;
         return isHomeWin(bp) ? _U.replace([["pieces"
                                            ,replaceOnes(bp)]],
         bpv) : isAwayWin(bp) ? _U.replace([["pieces"
                                            ,replaceTwos(bp)]],
         bpv) : bpv;
      }();
   };
   var newChar = function (c) {
      return function () {
         switch (c + "")
         {case "C": return _U.chr("H");
            case "H": return _U.chr("C");}
         return c;
      }();
   };
   var oppositeBoard = function (bp) {
      return $String.fromList($List.map(newChar)($String.toList(bp)));
   };
   var oppositePlay = function (_v17) {
      return function () {
         switch (_v17.ctor)
         {case "_Tuple3":
            return {ctor: "_Tuple3"
                   ,_0: oppositeBoard(_v17._0)
                   ,_1: 1.0 - _v17._1
                   ,_2: replaceString(_v17._2)};}
         _E.Case($moduleName,
         "on line 277, column 25 to 65");
      }();
   };
   var oppositePlays = function (sfs) {
      return A2($List.map,
      oppositePlay,
      sfs);
   };
   var addReversedBoard = function (sfs) {
      return _L.append(sfs,
      oppositePlays(sfs));
   };
   var addReflectAndReverseBoard = function (bp) {
      return addReversedBoard(addReflectedBoard(bp));
   };
   var chooseBoardPower = function (bp) {
      return _U.eq(emptySpots(bp),
      11) ? $Library.oneplays : _U.eq(emptySpots(bp),
      10) ? addReflectAndReverseBoard($Library.twoplays) : _U.eq(emptySpots(bp),
      9) ? addReflectedBoard($Library.threeplays) : _U.eq(emptySpots(bp),
      8) ? addReflectAndReverseBoard($Library.fourplays) : _U.eq(emptySpots(bp),
      7) ? addReflectedBoard($Library.fiveplays) : _U.eq(emptySpots(bp),
      6) ? addReflectAndReverseBoard($Library.sixplays) : _U.eq(emptySpots(bp),
      5) ? addReflectedBoard($Library.sevenplays) : _U.eq(emptySpots(bp),
      4) ? addReflectAndReverseBoard($Library.eightplays) : _U.eq(emptySpots(bp),
      3) ? addReflectedBoard($Library.nineplays) : addReflectAndReverseBoard($Library.tenPlays);
   };
   var loveThyNeighbour = F3(function (bp,
   c,
   n) {
      return function () {
         var oppo = newChar(c);
         var fof = A2(_op["!!"],
         bp,
         n - 1);
         return function () {
            return "Friend";
         }();
      }();
   });
   var itIsBlocked = F3(function (bp,
   n,
   c) {
      return function () {
         var naybos = neighbours(n);
         var fofs = A2($List.map,
         function (n) {
            return A3(loveThyNeighbour,
            bp,
            c,
            n);
         },
         naybos);
         return _U.cmp(A2(occurrences,
         "Neutral",
         fofs),
         2) < 0 && _U.eq(A2(occurrences,
         "Friend",
         fofs),
         0);
      }();
   });
   var isBlocked = F2(function (bp,
   c) {
      return _U.eq(A2(_op["!!"],
      bp,
      0),
      c) && A3(itIsBlocked,
      bp,
      1,
      c) ? true : _U.eq(A2(_op["!!"],
      bp,
      2),
      c) && A3(itIsBlocked,
      bp,
      3,
      c) ? true : _U.eq(A2(_op["!!"],
      bp,
      9),
      c) && A3(itIsBlocked,
      bp,
      10,
      c) ? true : false;
   });
   var isIllegalSecondPhaseMove = F3(function (n,
   s,
   bp) {
      return function () {
         var em = theEmptySpot(bp);
         var sc = $List.head($String.toList(s));
         return !_U.eq(A2(_op["!!"],
         bp,
         n - 1),
         sc) && $Basics.not(A2(isBlocked,
         bp,
         sc)) ? true : $Basics.not(A2(isLegalMove,
         n,
         em)) ? true : false;
      }();
   });
   var isIllegalMove = F3(function (n,
   s,
   bp) {
      return _U.eq(n,
      0) ? true : isFirstPhase(bp) ? A3(isIllegalFirstPhaseMove,
      n,
      s,
      bp) : A3(isIllegalSecondPhaseMove,
      n,
      s,
      bp);
   });
   var rejigBoard = F3(function (n,
   s,
   bp) {
      return function () {
         switch (n)
         {case 0: return _L.append(s,
              A2($String.right,10,bp));
            case 11:
            return _L.append(A2($String.left,
              10,
              bp),
              s);}
         return _L.append(A2($String.left,
         n - 1,
         bp),
         _L.append(s,
         A2($String.right,11 - n,bp)));
      }();
   });
   var moveFrom = F4(function (s,
   f,
   t,
   bp) {
      return A2(rejigBoard,
      t,
      s)(A2(rejigBoard,f,"0")(bp));
   });
   var moveIfMe = F4(function (s,
   p,
   emptyspot,
   bp) {
      return function () {
         var st = A2($String.cons,
         s,
         "");
         return _U.eq(A2(_op["!!"],
         bp,
         p - 1),
         s) && A2(isLegalMove,
         p,
         emptyspot) ? A4(moveFrom,
         st,
         p,
         emptyspot,
         bp) : bp;
      }();
   });
   var moveThePieces = F2(function (c,
   bp) {
      return function () {
         var emptyspot = theEmptySpot(bp);
         var moves = reject(function (p) {
            return _U.eq(p,bp);
         })(A2($List.map,
         function (p) {
            return A4(moveIfMe,
            c,
            p,
            emptyspot,
            bp);
         },
         pozzies));
         return _U.cmp($List.length(moves),
         0) > 0 ? moves : _L.fromArray([bp]);
      }();
   });
   var possibleMoves = F2(function (c,
   bp) {
      return isFirstPhase(bp) ? A2(pepperTheDots,
      c,
      bp) : A2(moveThePieces,c,bp);
   });
   var getScore = F2(function (bvs,
   bp) {
      return function () {
         var mp2 = A2(possibleMoves,
         _U.chr("H"),
         bp);
         var e2 = $List.length(A2(emptyTwoLine,
         bp,
         _U.chr("C")));
         var e1 = $List.length(A2(emptyTwoLine,
         bp,
         _U.chr("H")));
         var e3 = e1 + e2;
         var bv = A2($List.filter,
         function (b) {
            return _U.eq(b.bpoz,bp);
         },
         bvs);
         var bps = A2($List.map,
         function (v) {
            return v.bpoz;
         },
         bvs);
         return isHomeWin(bp) ? {_: {}
                                ,bpoz: bp
                                ,description: "Home Win"
                                ,score: 1.0} : isAwayWin(bp) ? {_: {}
                                                               ,bpoz: bp
                                                               ,description: "Away Win"
                                                               ,score: 0.0} : A2($List.any,
         function (p) {
            return isHomeWin(p);
         },
         mp2) ? {_: {}
                ,bpoz: bp
                ,description: "Future Home Win"
                ,score: 0.995} : _U.cmp($List.length(bv),
         0) > 0 ? $List.head(bv) : isFirstPhase(bp) && isHomeFulcrum(bp) ? {_: {}
                                                                           ,bpoz: bp
                                                                           ,description: "Home Fulcrum"
                                                                           ,score: 0.98} : isFirstPhase(bp) && isAwayFulcrum(bp) ? {_: {}
                                                                                                                                   ,bpoz: bp
                                                                                                                                   ,description: "Away Fulcrum"
                                                                                                                                   ,score: 2.0e-2} : isFirstPhase(bp) && A2($List.any,
         function (p) {
            return isHomeFulcrum(p);
         },
         mp2) ? {_: {}
                ,bpoz: bp
                ,description: "Future Home Fulcrum"
                ,score: 0.97} : A2(isOpenTriangle,
         bp,
         _U.chr("H")) ? {_: {}
                        ,bpoz: bp
                        ,description: "Open Home Triangle"
                        ,score: 0.93} : A2(isOpenTriangle,
         bp,
         _U.chr("C")) ? {_: {}
                        ,bpoz: bp
                        ,description: "Open Away Triangle"
                        ,score: 7.0e-2} : A2(isBlocked,
         bp,
         _U.chr("H")) ? {_: {}
                        ,bpoz: bp
                        ,description: "Home piece blocked"
                        ,score: 8.0e-2} : A2(isBlocked,
         bp,
         _U.chr("C")) ? {_: {}
                        ,bpoz: bp
                        ,description: "Away piece blocked"
                        ,score: 0.92} : _U.cmp(e1,
         2) > 0 ? {_: {}
                  ,bpoz: bp
                  ,description: "empty Home Twos"
                  ,score: 0.91} : _U.cmp(e2,
         2) > 0 ? {_: {}
                  ,bpoz: bp
                  ,description: "empty Away Twos"
                  ,score: 9.0e-2} : _U.cmp(e3,
         0) > 0 ? {_: {}
                  ,bpoz: bp
                  ,description: "Empty Two Lines"
                  ,score: $Basics.toFloat(20 + 20 * e1) / ($Basics.toFloat(20 + 20 * e2) + $Basics.toFloat(20 + 20 * e1))} : _U.eq($List.length(bv),
         0) ? {_: {}
              ,bpoz: bp
              ,description: "Random"
              ,score: 0.9} : $List.head(bv);
      }();
   });
   var playTheHumanMove = F2(function (n,
   bpv) {
      return function () {
         var s = bpv.nextPlayer;
         var bp = bpv.pieces;
         return A3(isIllegalMove,
         n,
         s,
         bp) ? _U.replace([["pieces"
                           ,A3(rejigBoard,n,"B",bp)]
                          ,["value",0.5]
                          ,["nextPlayer","I"]
                          ,["oldBoard",bp]],
         bpv) : isFirstPhase(bp) ? _U.replace([["pieces"
                                               ,A3(rejigBoard,n,s,bp)]
                                              ,["value",0.5]
                                              ,["nextPlayer","A"]
                                              ,["oldBoard",bp]],
         bpv) : _U.replace([["pieces"
                            ,A4(moveFrom,
                            s,
                            n,
                            theEmptySpot(bp),
                            bp)]
                           ,["value",0.5]
                           ,["nextPlayer","A"]
                           ,["oldBoard",bp]],
         bpv);
      }();
   });
   var playHumanMove = F2(function (n,
   brd) {
      return checkForWinner(A2(playTheHumanMove,
      n,
      brd));
   });
   var blankboard = {_: {}
                    ,nextPlayer: "H"
                    ,oldBoard: "00000000000"
                    ,pieces: "00000000000"
                    ,value: 0.5};
   var ActiveBoard = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,nextPlayer: c
             ,oldBoard: d
             ,pieces: a
             ,value: b};
   });
   var BoardValue = F3(function (a,
   b,
   c) {
      return {_: {}
             ,bpoz: a
             ,description: c
             ,score: b};
   });
   var boardize = function (_v24) {
      return function () {
         switch (_v24.ctor)
         {case "_Tuple3":
            return A3(BoardValue,
              _v24._0,
              _v24._1,
              _L.append("From Boards: ",
              _v24._2));}
         _E.Case($moduleName,
         "on line 287, column 25 to 64");
      }();
   };
   var playTheComputerMove = function (bpv) {
      return function () {
         var bp = bpv.pieces;
         var possmvs = A2(possibleMoves,
         _U.chr("C"),
         bp);
         var bvs = A2($List.map,
         boardize,
         chooseBoardPower(bp));
         var orderedMoves = $List.sortBy(function (_) {
            return _.score;
         })(A2($List.map,
         function (p) {
            return A2(getScore,bvs,p);
         },
         possmvs));
         return A2(getBestMove,
         bpv,
         orderedMoves);
      }();
   };
   var playComputerMove = function (bpv) {
      return function () {
         var ob = bpv.oldBoard;
         var np = bpv.nextPlayer;
         var bp = bpv.pieces;
         return _U.eq(np,
         "I") ? _U.replace([["pieces",ob]
                           ,["nextPlayer","H"]],
         bpv) : someoneHasWon(bp) ? _U.replace([["value"
                                                ,0.0]],
         bpv) : checkForWinner(playTheComputerMove(bpv));
      }();
   };
   var boardizeAll = function (sfs) {
      return A2($List.map,
      boardize,
      sfs);
   };
   _elm.TriangoModule.values = {_op: _op
                               ,BoardValue: BoardValue
                               ,ActiveBoard: ActiveBoard
                               ,blankboard: blankboard
                               ,playHumanMove: playHumanMove
                               ,playTheHumanMove: playTheHumanMove
                               ,playComputerMove: playComputerMove
                               ,rejigBoard: rejigBoard
                               ,moveFrom: moveFrom
                               ,newChar: newChar
                               ,replaceOnes: replaceOnes
                               ,replaceTwos: replaceTwos
                               ,checkForWinner: checkForWinner
                               ,someoneHasWon: someoneHasWon
                               ,isHomeWin: isHomeWin
                               ,isAwayWin: isAwayWin
                               ,containsFullLines: containsFullLines
                               ,hasALine: hasALine
                               ,isIllegalMove: isIllegalMove
                               ,isFirstPhase: isFirstPhase
                               ,emptySpots: emptySpots
                               ,isIllegalFirstPhaseMove: isIllegalFirstPhaseMove
                               ,isIllegalSecondPhaseMove: isIllegalSecondPhaseMove
                               ,playTheComputerMove: playTheComputerMove
                               ,getBestMove: getBestMove
                               ,possibleMoves: possibleMoves
                               ,pepperTheDots: pepperTheDots
                               ,moveThePieces: moveThePieces
                               ,theEmptySpot: theEmptySpot
                               ,moveIfMe: moveIfMe
                               ,isLegalMove: isLegalMove
                               ,ynsert: ynsert
                               ,ynsertIfBlank: ynsertIfBlank
                               ,chooseBoardPower: chooseBoardPower
                               ,addReflectAndReverseBoard: addReflectAndReverseBoard
                               ,addReflectedBoard: addReflectedBoard
                               ,reflectBoard: reflectBoard
                               ,reflectTheBoard: reflectTheBoard
                               ,addReversedBoard: addReversedBoard
                               ,oppositeBoard: oppositeBoard
                               ,oppositePlays: oppositePlays
                               ,oppositePlay: oppositePlay
                               ,replaceString: replaceString
                               ,boardizeAll: boardizeAll
                               ,boardize: boardize
                               ,pozzies: pozzies
                               ,getScore: getScore
                               ,emptyTwoLine: emptyTwoLine
                               ,blankTwo: blankTwo
                               ,isHomeFulcrum: isHomeFulcrum
                               ,isAwayFulcrum: isAwayFulcrum
                               ,isFulcrum: isFulcrum
                               ,isOpenTriangle: isOpenTriangle
                               ,canFindOpenTriangle: canFindOpenTriangle
                               ,isBlocked: isBlocked
                               ,itIsBlocked: itIsBlocked
                               ,occurrences: occurrences
                               ,loveThyNeighbour: loveThyNeighbour
                               ,reject: reject
                               ,alpha: alpha
                               ,beta: beta
                               ,gamma: gamma
                               ,findFirst: findFirst
                               ,findLast: findLast
                               ,lynes: lynes
                               ,openTriangles: openTriangles
                               ,neighbours: neighbours};
   return _elm.TriangoModule.values;
};Elm.Library = Elm.Library || {};
Elm.Library.make = function (_elm) {
   "use strict";
   _elm.Library = _elm.Library || {};
   if (_elm.Library.values)
   return _elm.Library.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Library",
   $List = Elm.List.make(_elm);
   var tenPlays = _L.fromArray([{ctor: "_Tuple3"
                                ,_0: "0CCCCHHCHHH"
                                ,_1: 1.0e-2
                                ,_2: " H is forced {6}->{1}; C {8}->{6} and H is on a loser "}
                               ,{ctor: "_Tuple3"
                                ,_0: "H0HCHCHCHCC"
                                ,_1: 5.0e-2
                                ,_2: " H is forced round the board to inevitable defeat"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCCHHHCCHH"
                                ,_1: 1.0e-2
                                ,_2: " H has only viable {5}->{1}; C {2}->{5} and whatever H does is doomed "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCCHHHCHCH"
                                ,_1: 0.99
                                ,_2: " H {5}->{1}; C only chance {2}->{5}; H {1}->{2} corners him"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCHCCCHHHH"
                                ,_1: 1.0e-2
                                ,_2: " H is forced; C swoops "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCHCCHCHHH"
                                ,_1: 0.99
                                ,_2: " H is forced to {1}; C only viable move is {5}->{4}; H {10}->{5}; Resign position for C "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCHCCHHHHC"
                                ,_1: 1.0e-2
                                ,_2: " H forced to {1}; C wins it {6}->{4}"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCHCHHCCHH"
                                ,_1: 1.0e-2
                                ,_2: " H only viable has {4}->{1}; C {2}->{4} then whatever H does is doomed "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCHCHHHCHC"
                                ,_1: 1.0e-2
                                ,_2: " H has two moves both lead to instant defeat "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCHHCHCHCH"
                                ,_1: 0.99
                                ,_2: " H moves {4}->{1} which is a resign position for C "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHCCHHCHCH"
                                ,_1: 1.0e-2
                                ,_2: " H forced {6}->{1}; C moves {4}->{6} which is a resign position for H "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHCCHHHCCH"
                                ,_1: 1.0e-2
                                ,_2: " H forced {6}->{1}; C moves {4}->{6} ; H forced {1}->{4}; C wins "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHCHCHHCCH"
                                ,_1: 1.0e-2
                                ,_2: " H forced {5}->{1}; C moves {4}->{5} ; H forced {1}->{4}; C wins "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHCHHCCCHH"
                                ,_1: 1.0e-2
                                ,_2: " H forced {6}->{1}; C moves {4}->{6} ; both C moves are fatal "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHCHHHCCCH"
                                ,_1: 0.99
                                ,_2: " H plays {6}->{1} and whatever C does he loses in 2 moves "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHCHHHCHCC"
                                ,_1: 0.99
                                ,_2: " H plays {6}->{1} and whatever C does he loses in 2 moves "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHHCCCCHHH"
                                ,_1: 2.0e-2
                                ,_2: " H forced 4->1; C wins with 2->4 "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHHCCHHCHC"
                                ,_1: 0.0
                                ,_2: " H forced 4->1; H swoops 6->4 "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHHCCHHHCC"
                                ,_1: 1.0e-2
                                ,_2: " H only viable {4}->{1}; C only has {2}->{4}; then whatever H does is doomed "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHHHCCHCHC"
                                ,_1: 1.0e-2
                                ,_2: " H has two moves both fatal "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHHHCHHCCC"
                                ,_1: 1.0e-2
                                ,_2: " H only viable {4}->{1}; C {9}->{4}; H only viable {5}->{9}; H {4}->{5}; both H moves doomed "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHHHHCCCCH"
                                ,_1: 0.99
                                ,_2: " H plays {6}->{1} and whatever C does he loses in 2 moves "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HCCCHHCHCH"
                                ,_1: 1.0e-2
                                ,_2: " H has 2 moves which lead to defeat in 4 moves"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HCCHCHCHHC"
                                ,_1: 1.0e-2
                                ,_2: " H has moves from {2} delayed defeat or {5} immediate defeat "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HCCHCHHCHC"
                                ,_1: 1.0e-2
                                ,_2: " H has move from {2}; C wins in 2 moves; or from {5}; C wins in 2 or 3 "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HCCHCHHCHC"
                                ,_1: 1.0e-2
                                ,_2: " H has two choices, both lead straight to a Resign position"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HCCHHCCHHC"
                                ,_1: 1.0
                                ,_2: " H would move 6 to 1 "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HCCCHHHCHC"
                                ,_1: 1.0e-2
                                ,_2: " H has 2 options which lead to instant defeat"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HCHCHHCCHC"
                                ,_1: 1.0e-2
                                ,_2: " H has only one viable move; {2}->{1}; C moves {3}->{2}; a Resign position for H "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HCHCHHHCCC"
                                ,_1: 0.99
                                ,_2: " H works C around the top left corner to win in 3 "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HHCCCHCHCH"
                                ,_1: 1.0e-2
                                ,_2: " H forced to {1}; C {4}->2 ; H in resign position "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HHCHCCCHCH"
                                ,_1: 1.0e-2
                                ,_2: " H has two moves; from {5} is instant defeat; from {2} C goes {8}->{2} leaves H in Resign position "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HHCHCHCCCH"
                                ,_1: 0.99
                                ,_2: " H plays {2}->{1}; C goes from 8 or 4 and must Resign shortly "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HHCHCHCHCC"
                                ,_1: 0.99
                                ,_2: " H plays {2}->{1}; C goes from 8 or 4 and must Resign shortly "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HHCHHHCCCC"
                                ,_1: 0.99
                                ,_2: " H plays {2}->{1}; C goes from 8 or 4 and must Resign shortly "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HHHCCCHHCC"
                                ,_1: 0.99
                                ,_2: " H plays {2}->{1}; C only has bad options; loses in 2 more "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HHHCCHCHCC"
                                ,_1: 0.99
                                ,_2: " H plays {2}->{1}; H must play {5}->{2}; H {1}->{5}; C must resign "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HHHCHCCCCH"
                                ,_1: 0.99
                                ,_2: " H {4}->{1}; both C moves lead to destruction in 3 moves "}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0CCHHCHCHH"
                                ,_1: 1.0e-2
                                ,_2: " H {5}->{2}; C [1}->{5} puts H in Resign position"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0CCHHHCCHH"
                                ,_1: 1.0e-2
                                ,_2: " H {5}->{2} faces either of 2 Resign positions"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0CHCCCHHHH"
                                ,_1: 1.0e-2
                                ,_2: " H has two moves; C can then force H to the top of the board a Resign position "}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0CHCHCCHHH"
                                ,_1: 0.99
                                ,_2: " H forced {4} to {2}; that turns out to be a Resign position for C "}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0CHCHCHCHH"
                                ,_1: 1.0e-2
                                ,_2: " H is forced to resign immediately"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0CHCHHHCHC"
                                ,_1: 0.95
                                ,_2: " from here; H will 8->2; leaving C with 2 fatal moves "}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0HCHHHCHCC"
                                ,_1: 1.0
                                ,_2: " H would move 7 to 2 "}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0HHCHCCHCH"
                                ,_1: 0.99
                                ,_2: " H goes {4}->{2} putting C in a Resign position"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0HCHCCHHCH"
                                ,_1: 0.99
                                ,_2: " H can play from {3} or {8} and win in 3"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CC0CHCCHHHH"
                                ,_1: 0.99
                                ,_2: " H forced {8}->{3} but the three available C moves are all fatal "}
                               ,{ctor: "_Tuple3"
                                ,_0: "CC0HCCCHHHH"
                                ,_1: 1.0e-2
                                ,_2: " H must fill up p3 from one spot and is immediately beaten "}
                               ,{ctor: "_Tuple3"
                                ,_0: "CC0HHHCCHCH"
                                ,_1: 1.0e-2
                                ,_2: " H is forced and run around the board before defeat in 5"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCH0HHCHCHC"
                                ,_1: 1.0e-2
                                ,_2: " H has two moves both fatal"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHCHC0HHHC"
                                ,_1: 0.99
                                ,_2: " H {10}->{7} and C falls to defeat in 2"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCCCHC0HHHH"
                                ,_1: 0.99
                                ,_2: " H {10->{7}; C no move; H wins {5}->{10}"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCCH0CHHHCH"
                                ,_1: 1.0e-2
                                ,_2: " whatever H does it leads to defeat in 8 moves"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCCHH0CHHHC"
                                ,_1: 0.99
                                ,_2: " H {9}->{6}; C forced {7}->{9}; H cleans up"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCCHH0CHCHH"
                                ,_1: 0.99
                                ,_2: " H {11}->{6}; C forced {7}->{11} and loses"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCCHH0HHCHC"
                                ,_1: 1.0e-2
                                ,_2: " H has 4 options which lead to defeat in 3"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCCHH0HCCHH"
                                ,_1: 1.0e-2
                                ,_2: " H has 4 options which lead to defeat in the end"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCCH0HCHHHC"
                                ,_1: 1.0e-2
                                ,_2: " H run around the board until defeat"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCCHHHCCH0H"
                                ,_1: 0.99
                                ,_2: " H {5}->{10} and kills him in 1 or 2"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHHHHCC0CH"
                                ,_1: 0.99
                                ,_2: " H {4}-{9} and C is doomed soon"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCH0HCCCHHH"
                                ,_1: 1.0e-2
                                ,_2: " H has two moves; lose in 1 or 2 moves "}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHCHCH0HCH"
                                ,_1: 0.99
                                ,_2: " H {8}->{3} and C has two fatal moves"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCH0HCHHCHC"
                                ,_1: 1.0e-2
                                ,_2: " H forced {5}-{4}; C moves {1}->{5} for win "}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHHCCH0HHC"
                                ,_1: 0.99
                                ,_2: " H {3}->8 and C must lose in 6"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHHH0CHCHC"
                                ,_1: 0.99
                                ,_2: " H {3} to {6}; C will resign in 2 moves"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCCHHHCHHC0"
                                ,_1: 1.0e-2
                                ,_2: " H run around the board until defeat"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHHHCC0HCH"
                                ,_1: 1.0e-2
                                ,_2: " H forced around the board and loses in 5"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHHHCCCH0H"
                                ,_1: 1.0e-2
                                ,_2: " H forced around the board and loses in a few"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHHHCHC0CH"
                                ,_1: 1.0e-2
                                ,_2: " H forced around the board and loses in 7"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHH0CHHHCC"
                                ,_1: 1.0e-2
                                ,_2: " H has 2 moves, both will lead to defeat in 4"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHH0HCCHCH"
                                ,_1: 0.98
                                ,_2: " H goes {5}->{2} putting C in a Resign position"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHHCCH0HCH"
                                ,_1: 0.99
                                ,_2: " H {3}->8; C doomed"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CH0HCCCCHHH"
                                ,_1: 1.0e-2
                                ,_2: " H forced 2->3; C moves 7->2 for win "}
                               ,{ctor: "_Tuple3"
                                ,_0: "CH0HCHCCHCH"
                                ,_1: 1.0e-2
                                ,_2: " H forced 2->3 or 6->3; C moves 7->2 or 7->6 for win "}
                               ,{ctor: "_Tuple3"
                                ,_0: "CH0HCHCCHHC"
                                ,_1: 1.0e-2
                                ,_2: " H forced 2->3 or 6->3; C moves 7->2 or 7->6 for win "}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHC0HHCCHCH"
                                ,_1: 1.0
                                ,_2: " H would move 6 to 4 "}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCHCHHCHC0"
                                ,_1: 1.0e-2
                                ,_2: " H {6}->{11} and C  cleans him up"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCCCHCH0HH"
                                ,_1: 0.99
                                ,_2: " H goes 10->9 forcing C to resign "}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCCCHHHC0H"
                                ,_1: 0.99
                                ,_2: " H 7->10; C forced 3->7; H 8->3; C forced 7->8; H 6->7 wins "}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCCCHHHCH0"
                                ,_1: 0.99
                                ,_2: " H goes 8-> 11 forcing C to resign "}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCCHHCH0HC"
                                ,_1: 1.0
                                ,_2: " H moves 10 -> 9 wins it "}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCCHHHCCH0"
                                ,_1: 0.95
                                ,_2: " H 10->11; C forced 9->10; H 6->9 "}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCH0CCHHCH"
                                ,_1: 1.0e-2
                                ,_2: " H must move from {2} and gets clobbered"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHHHHH0CCCC"
                                ,_1: 0.99
                                ,_2: " H {3}->{7} and C loses"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHHH0HCCCHC"
                                ,_1: 0.99
                                ,_2: " C loses in 5"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHHHC0CCCHH"
                                ,_1: 0.99
                                ,_2: " C loses in 7"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHHHHCCH0CC"
                                ,_1: 1.0e-2
                                ,_2: " Whatever H does, loses in 8 or 9"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0HHCCCHCHH"
                                ,_1: 0.99
                                ,_2: " C loses in 9"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHHCCH0CHH"
                                ,_1: 0.99
                                ,_2: " C loses in 11"}
                               ,{ctor: "_Tuple3"
                                ,_0: "H0HCCCCCHHH"
                                ,_1: 0.99
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HC0CCCCHHHH"
                                ,_1: 0.99
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCCCCCHHH0H"
                                ,_1: 0.99
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCCCHCHHHC0"
                                ,_1: 0.99
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCCCHHH0HCC"
                                ,_1: 0.99
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHCCHH0CHCC"
                                ,_1: 0.99
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHCHCHHCCC0"
                                ,_1: 0.98
                                ,_2: " H {6}->{11} and C slumps to defeac"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCH0CHCCHH"
                                ,_1: 0.99
                                ,_2: " H would move {10}->{5} "}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCHCCCHHH0"
                                ,_1: 1.0e-2
                                ,_2: " H only one viable and gets clobbered"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCH0HCHCHC"
                                ,_1: 0.99
                                ,_2: " H goes {4}->{5}; leaves C with 2 fatal moves "}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCHCHCCHH0"
                                ,_1: 0.99
                                ,_2: " H goes {10}->{11} fatal for C "}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCHCHCC0HH"
                                ,_1: 0.99
                                ,_2: " H {10}->{5} fatal for A"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCHC0CHHHC"
                                ,_1: 0.99
                                ,_2: " H {9}->{6} and C is lost in 4 moves"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCHC0CHCHH"
                                ,_1: 0.99
                                ,_2: " H {9}->{6} and C is lost in 4 moves"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCHHHC0CHC"
                                ,_1: 1.0e-2
                                ,_2: " H has two moves, both fatal - MANEUVER-04"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCHHHCHCC0"
                                ,_1: 0.99
                                ,_2: " H {8}->{11}; C is doomed"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHH0CHCHCHC"
                                ,_1: 1.0e-2
                                ,_2: " H loses directly if {2}->{4}; if {6}->{4}, countered by winning C {9}->{6}"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHHCCCH0HCH"
                                ,_1: 1.0
                                ,_2: " H would move 2 to 8 "}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHHH0CHCHCC"
                                ,_1: 0.99
                                ,_2: " H {4}->{5}; C either loses immediately or goes to a Resign position"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHHH0CCHCHC"
                                ,_1: 1.0e-2
                                ,_2: " H has three moves which are all fatal or Resign positions"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHHHCCCH0HC"
                                ,_1: 1.0e-2
                                ,_2: " either of H \'s two moves are fatal "}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHHHCHC0CHC"
                                ,_1: 0.99
                                ,_2: " leads to a win in 2 "}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHHHHHC0CCC"
                                ,_1: 0.99
                                ,_2: " H {2}->{5} and C is eventually doomed"}
                               ,{ctor: "_Tuple3"
                                ,_0: "H0CCCHHCHCH"
                                ,_1: 0.99
                                ,_2: " H will move 1->2 then C \'s forced moves are fatal "}
                               ,{ctor: "_Tuple3"
                                ,_0: "H0HCHCCCHCH"
                                ,_1: 0.99
                                ,_2: " H will play 1->2; both subsequent C moves are fatal "}
                               ,{ctor: "_Tuple3"
                                ,_0: "HC0CHCCHCHH"
                                ,_1: 1.0e-2
                                ,_2: " H must play 8->3 and is immediately beaten "}
                               ,{ctor: "_Tuple3"
                                ,_0: "HC0CHCHCCHH"
                                ,_1: 1.0e-2
                                ,_2: " H must play 7->3 and is immediately beaten "}
                               ,{ctor: "_Tuple3"
                                ,_0: "HC0CHCHCHCH"
                                ,_1: 1.0e-2
                                ,_2: " H [7->3}; C {4}->{5}; H must resign"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HC0HCCCHCHH"
                                ,_1: 1.0e-2
                                ,_2: " H must play 8->3 and is immediately beaten "}
                               ,{ctor: "_Tuple3"
                                ,_0: "HC0HHCHCCCH"
                                ,_1: 1.0e-2
                                ,_2: " H {7}->{3}; C {8}->{7} fatal for A"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HC0HCCHHCCH"
                                ,_1: 0.99
                                ,_2: " H {8}->{3} leaving C to resign"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCC0CHCHCHH"
                                ,_1: 1.0e-2
                                ,_2: " H only viable from {1}; H{2}->{1}; H must resign"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCCC0HHCCHH"
                                ,_1: 0.99
                                ,_2: " H [10}->{6} and C falls to defeat in 5"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCCCC0HHHCH"
                                ,_1: 0.99
                                ,_2: " H goes 8->6 forcing C to resign "}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCCCCHH0HCH"
                                ,_1: 1.0e-2
                                ,_2: " H {7}->{8}; C {10}->{7} puts H in a Resign position"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCCCCCH0HHH"
                                ,_1: 1.0e-2
                                ,_2: " if H moves {11}->{8} C wins immediately. From {7} to {8} it\'s a 2-move win "}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCCCCCHHH0H"
                                ,_1: 1.0e-2
                                ,_2: " H forced {7}->{10}; C {1}->{7}; C forced and H cleans up"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCCCH0HCHCH"
                                ,_1: 0.99
                                ,_2: " H will move 9->6 then C \'s forced moves are fatal "}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCCH0CHHCCH"
                                ,_1: 0.99
                                ,_2: " H {1}->{5} leaving C to resign"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCH0CCCHHHC"
                                ,_1: 1.0e-2
                                ,_2: " H has two moves both fatal "}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCH0CCHCHCH"
                                ,_1: 1.0e-2
                                ,_2: " H has two moves both lead to instant defeat "}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCH0CCHHCCH"
                                ,_1: 1.0e-2
                                ,_2: " H forced C swoops "}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCH0CCHHHCC"
                                ,_1: 1.0e-2
                                ,_2: " Resign position - H forced {1}->{4}; C wins with {2}->{1} "}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCH0HCCCCHH"
                                ,_1: 1.0e-2
                                ,_2: " either of H \'s two moves are fatal "}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCH0HCHCCCH"
                                ,_1: 0.99
                                ,_2: " H {1}->{4}; both H moves fatal"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCH0HHHCCCC"
                                ,_1: 0.99
                                ,_2: " H {1}->{4}; H forced to fatal"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCHCHCCHC0H"
                                ,_1: 0.99
                                ,_2: " H {11}->{10} and C loses in 3"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCHCCHHCH0C"
                                ,_1: 0.99
                                ,_2: " H will go 9-> 10 forcing C to resign "}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCHCH0HCCCH"
                                ,_1: 0.98
                                ,_2: " H {11}->{6} and on his way to a win"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCHCHCH0CCH"
                                ,_1: 0.99
                                ,_2: " H {3}-> {8}; both C moves fatal"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCHCHCHH0CC"
                                ,_1: 1.0e-2
                                ,_2: " H must play {7} (instant defeat or {5} (two-move defeat)"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCHH0CHCHCC"
                                ,_1: 0.99
                                ,_2: " H {1}->{5} and cleans up in 2 moves"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCHHCCCCHH0"
                                ,_1: 1.0e-2
                                ,_2: " H is forced and crumbles to defeat"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCHH0CCCHCH"
                                ,_1: 0.99
                                ,_2: " H moves from {1} leaving C with two fatal options"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCHH0HHCCCC"
                                ,_1: 0.99
                                ,_2: " H {1}->{5} and C doomed in 3"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCHHCC0CHCH"
                                ,_1: 0.99
                                ,_2: " H moves from {3} leaving C with two fatal options"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCHHCCC0CHH"
                                ,_1: 1.0e-2
                                ,_2: " H has two moves both fatal "}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCHHHCHCC0C"
                                ,_1: 1.0e-2
                                ,_2: " H has two moves both fatal "}
                               ,{ctor: "_Tuple3"
                                ,_0: "HH0CCCHCHCH"
                                ,_1: 1.0e-2
                                ,_2: " H {2}->{3}, C {4}->{2} puts H in a Resign position"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HH0CCHCCCHH"
                                ,_1: 1.0e-2
                                ,_2: " H must fill up p3 from one spot and is immediately beaten "}
                               ,{ctor: "_Tuple3"
                                ,_0: "HH0CHHCCCCH"
                                ,_1: 1.0e-2
                                ,_2: " H must {6}->{3} and is beaten in 5"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HH0CHHCCCHC"
                                ,_1: 1.0e-2
                                ,_2: " H has 2 fatal moves"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHH0CHCCCHC"
                                ,_1: 0.99
                                ,_2: " H is forced but there\'s an inevitable H win in 6 moves"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHHC0CHCHCC"
                                ,_1: 0.99
                                ,_2: " H {2}->{5} and C is in a Resign position"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHHC0CCCHCH"
                                ,_1: 0.99
                                ,_2: " H {1}->{5} and C tumbles to defeat"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHC0CHCCHHC"
                                ,_1: 0.99
                                ,_2: " H {1}->{4} and C is doomed"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHC0CHCCCHH"
                                ,_1: 0.98
                                ,_2: " H {1}->{4} and C is doomed"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHHC0CCHHCC"
                                ,_1: 0.99
                                ,_2: " H {1}->{5} and C is doomed"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHC0CCHHCHC"
                                ,_1: 1.0e-2
                                ,_2: " H has 2 moves which are both quickly fatal"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHC0CHHHCCC"
                                ,_1: 0.99
                                ,_2: " H {1{->{4} and C is doomed"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHCCCHCC0HH"
                                ,_1: 0.99
                                ,_2: " H {10}->{9} and C will resign in 2 moves"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHCCCHCCHH0"
                                ,_1: 0.99
                                ,_2: " H {10}->{11} and C is doomed"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHCCCHHCHC0"
                                ,_1: 0.99
                                ,_2: " H {7}->{1} and C on the way to defeac"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHCHC0CCHCH"
                                ,_1: 0.99
                                ,_2: " H 1->6; C forced 5->1; H 6->5 "}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHCHCHCCC0H"
                                ,_1: 1.0e-2
                                ,_2: " H forced {11}->{10}; C wins with {5}->{11}"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HH0HCHCCCHC"
                                ,_1: 1.0e-2
                                ,_2: " H has two moves, one instantly fatal, the other in 2 moves"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHHC0CHCCCH"
                                ,_1: 0.99
                                ,_2: " H {2} to {5} and C will resign"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHHC0CHCHCC"
                                ,_1: 0.99
                                ,_2: " H {2} to {5} and C will resign"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHHCHCCC0CH"
                                ,_1: 1.0e-2
                                ,_2: " H forced {5}->{9}; C cleans up"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHCHC0CCHHC"
                                ,_1: 0.99
                                ,_2: " H {1}->{6}; C forced around into defeac"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHCHCHCHC0C"
                                ,_1: 0.0
                                ,_2: " H doesn\'t have a play C cleans him up "}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHHC0HCCCCH"
                                ,_1: 0.99
                                ,_2: " H {1}->{5}; C forced and loses"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHHC0HHCCCC"
                                ,_1: 0.99
                                ,_2: " H goes {1}->{5}; a Resign position "}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHHCHCCCH0C"
                                ,_1: 0.98
                                ,_2: " H {9}->{10}; C slumps to eventual defeat"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHHCHCHCC0C"
                                ,_1: 1.0e-2
                                ,_2: " H has 2 symmetrical moves, both lose instantly"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHHCCHCC0CH"
                                ,_1: 0.98
                                ,_2: " H {6}->{9} and the resulting symmetrical board is doom for C "}]);
   var miscNines = _L.fromArray([{ctor: "_Tuple3"
                                 ,_0: "HCCH00CHHCC"
                                 ,_1: 1.0e-2
                                 ,_2: " C win"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HC0CCCHHCH"
                                 ,_1: 1.0e-2
                                 ,_2: "wherever H plays, C moves in"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCCHCHCHH0"
                                 ,_1: 1.0e-2
                                 ,_2: "wherever H plays, C moves in"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0CCCCCHH0H"
                                 ,_1: 1.0e-2
                                 ,_2: "wherever H plays, C moves in"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCHCCCHHC00"
                                 ,_1: 1.0e-2
                                 ,_2: " this is a Resign position for H - MANEUVER-03"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC0H0CHCHC"
                                 ,_1: 0.99
                                 ,_2: " opens the way for H to place final token in {6}, C must resign MANEUVER-01"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHCHC0H0CHC"
                                 ,_1: 0.99
                                 ,_2: " opens the way for H to place final token in {6}, C must resign MANEUVER-02"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCHCCCH00CH"
                                 ,_1: 0.99
                                 ,_2: " opens the way for H to place final token in {9}, C must resign MANEUVER-04"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCHCCCH0HC0"
                                 ,_1: 0.99
                                 ,_2: " opens the way for H to place final token in {11}, C must resign MANEUVER-04"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCCHC0CHH0H"
                                 ,_1: 0.99
                                 ,_2: " opens the way for H to place final token in {6}, C must resign MANEUVER-05"}]);
   var badNines = _L.fromArray([{ctor: "_Tuple3"
                                ,_0: "HHHCC0HCCC0"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHHC0CCC0CH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHCHC0CHC0C"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHCHC0CCH0C"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHCHC0CC0HC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHCCC0HCHC0"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HHCCC0CCHH0"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCHHHCCC00C"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCHCHC0H0CC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCHC0HCH0CC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCHC0C0CHCH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCH0HCCCCH0"
                                ,_1: 1.0e-2
                                ,_2: "either H move is immediately fatal"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCH0CCH0CHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCH0CCCH0HC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCH0CC0HCHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCH00CCCCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCCHHHC0C0C"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCCH0CHHCC0"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCCH0CH0CCH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCCCHCH00CH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCCCHC00HCH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCCC00CHCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HC0HCCCHCH0"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HC0HCCC0CHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HC0CHCC0CHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HC0CHC0CCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HC0C0CHCCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "H0HC0CHHCCC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "H0CHCHCHC0C"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "H0CHCCCHC0H"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "H0CHCCC0CHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "H0CHC0CCHHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "H0C0CCCHCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHHC00CCHHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCHHCCHC00"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCHCHC0H0C"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCH0CHCCH0"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCCH00HCHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCC0H0HCHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCC00HHCHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHC0HCCHC0H"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHC0CHCHH0C"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHC0CHC0HHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHC0CCC0HHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHC00CCHHCH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CH0HC0CCHCH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CH0CH0CCHHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CH0C0HCCHHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHHH0C0CHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHH0CHHCC0"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHH0CHH0CC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHH0C0HHCC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHH00CHCHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHCH0H0CHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHC00HHCHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCHC00HHCCH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCH0HCHHCC0"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCH0HCHH0CC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCH0HC0HCHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCH00CHHHCC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCH00CHHCCH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCCHH0C0HHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCCH0HC0HHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCCH0HC0CHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCCH0H0HCHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCCH0H0CCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCCH0CH0HHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCCH0C0HHHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCCH00CHHHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCC0HCH0HCH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCC0H0CHHHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCC00HHCCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCC00HCHHHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCC00CCHHHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CC00HCHHCHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0HHHCCHC0C"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0HHH0CCCHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0HHC0CHCHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0HHC0CCHCH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0HC0HCCHHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0H0HCCHCHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0CHC0HHCHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0CCHHC0CHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0CCHH0CCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0CCH0HCCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0CCH0CHCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C00HHCCHCHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C00HCHCCHCH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C00CHHCCHHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HHHCCC0CHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HHCCHCHC0C"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HHCCCHCHC0"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HHCCC0CHCH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HHCC0CHCHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HH0CCCHCHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HCHCCCHC0H"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HCHCCC0HHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HCHCCC0CHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HCCHCHC0HC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HCCCCH0HHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HCCCC0HHHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HCC0CHCHHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HC0CCCHCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0H0HCCCHCHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHHHCCCH0C"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHHHC0HCCC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHHCCHHCC0"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHHCCHH0CC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHHCCHC0CH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHH0CHHCCC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHCHCCCHH0"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHCCHHHCC0"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHC0HCCCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CHC0CCCHHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CH0HCCCCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCHCHCHH0C"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCHCHC0CHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCHCCCH0HH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCHC0CHCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCCHCH0HHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCCHC0HHHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCCH0HCCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCCH0CHCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCCCHHCHH0"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCC0HCHCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCC0CHHHHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CC0CHCHHHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CC0CCCHHHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0C0HHCHHCCC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0C0CHCHCCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0C0CHCCHCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "00HCHHCHCCC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "00HCHCHHCCC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "00HCCHCHCHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "00CHCCCHCHH"
                                ,_1: 1.0e-2
                                ,_2: "auto"}
                               ,{ctor: "_Tuple3"
                                ,_0: "00CCHCHHCHC"
                                ,_1: 1.0e-2
                                ,_2: "auto"}]);
   var goodNines = _L.fromArray([{ctor: "_Tuple3"
                                 ,_0: "HHHCCCHCC00"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHHCCC0CCH0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHHCC0HC0CC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHHCC0CH0CC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHHCC0CC0CH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHHCC0C0HCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHHC0HCCC0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHHC0CHCCC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHHC0C0CHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHHC00CCCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHHC00CCCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHCCCHH0C0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHCCCHCH00C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHCCCHC00HC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHCCCH0HC0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHCCCH00CHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHCCC0HHC0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHCCC0HC0CH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHCCC0H0CHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHCCC0CH0HC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHCC0HCCCH0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHCC0HCCC0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHCC0C0HCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHCC00CCCHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHC0CHH0CCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHC0CHCCHC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHC0CHCC0CH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHC0CH0HCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHC0C0HHCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HHC0C0CCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HH0CCCHCCH0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HH0CC0HCCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HH0C0HCCCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HH0C0CCHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCHCCCH0HC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCHC0HHCC0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCHC0H0CCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCHC00HCCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCH0HCHCC0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCH0HCCCHC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCH00CCCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCCCHHHC0C0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCCCHH0C0CH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCCCH0HC0CH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCCC0HHCHC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCCC0HHC0CH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCCC0HCHCH0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCCC0HCHC0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCCC0HC0CHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCCC0H0CHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCCC00HCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCC0HHC0CHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCC0HCHCHC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCC0HCHC0CH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCC0HC0CHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HCC00CHCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HC0HHCCCHC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HC0HHCCCH0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HC0HCC0CHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HC0H0CCCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HC0CHH0HCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HC0CHCHHCC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HC0CHCHCCH0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HC0CHCH0CHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HC0CHCH0CCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HC0CHC0HCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HC0CHC0HCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HC0CH0HHCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HC0C0HHHCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HC0C0HHCCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HC0C0CHHCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HC0C0CHHCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HC00HCCCCHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HC00CCHHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "HC00CCHCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0HHCCHC0CC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0HHCCCH0CC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0HHCCC0HCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0HHCC0CHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0HCHCHCC0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0HCHCHC0CC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0HCH0HCCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0HCCHCC0CH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0HCCCHCCH0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0HCC0HCHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0HCC0CHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0HCC0CCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0HC0HHCCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0HC0HCCCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0HC0CHCHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0HC0CHCCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0H0CCHCHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0H0CCCHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0CHC0CCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0CCHC0HCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0CCCHHHC0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0CCCHHC0CH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0CCCHH0CHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0CCCHCH0HC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0CCCHCCHH0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0CCCHCC0HH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0CC0HCCCHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0C0CHHHCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H0C0CHCCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H00HCCHCHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "H00HCCCHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHHHHCC0C0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHHH0CC0CHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHHH0C0CHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHHCCCH00CH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHHC0HCCH0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHH0HCHC0CC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHH0HCC0CHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHH0HC0CHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHH00CHCHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHCHCHCC00H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHCHC0CC0HH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHCH0CHCC0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHCH0CC0HCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHCCHHCH00C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHCCCHH0CH0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHCCCHH0C0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHCCCHCH0H0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHCCCHCH00H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHCCCHC0H0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHCCC0CHH0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC0HHHCCC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC0HHCHC0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC0HHCCCH0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC0HHCCC0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC0HHC0CHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC0HH0CCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC0H0HCCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC0H0CHCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC0H0CCHHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC0H0CCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC0H0CCCHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC0CHHH0CC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC0CHH0HCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC0CHCC0HH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC0CH0HHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC0C0HHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC00HHCCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC00HCHCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC00HCCHHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CHC00HCCCHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0HHCC0CHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0HCHHC0CC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0HCHCH0CC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0HCHCCHC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0HCHCCH0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0HCHC0HCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0HCHC0CHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0HCH0CHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0HC0HCHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0HC0CHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0HC0CHCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0CHHHC0CC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0CHHCCH0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0CHH0CHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0CH0HCHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0CCHCHH0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0CCHCH0HC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0CCCH0HCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0CC0CHHHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH0C0HHCHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH00HCHCHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH00CHHCHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH00CHCHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CH00CHCHCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCHHHCC00CH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCHHHC0HCC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCHCHCHCH00"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCHCHCHC00H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCHCHC0CH0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCHCH00HCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCHC0CHCH0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCH0HC0HCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCCHHHCH0C0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCCHH0HHC0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCCHH0HCC0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCCHH0CHCH0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCCHH0CHC0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCCHCHHH00C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCCHCHH00HC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCCHCHCH00H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCCHC0CHH0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCCH0HHHC0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCCH0HHCC0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCCH0HCHCH0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCCH0HCHC0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCCH0CC0HHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCC0CHHH0HC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CCC0CHCHH0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CC0HHCHH0CC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CC0HHCH0HCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CC0HHCCCH0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CC0H0CHHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CC0CHCHCH0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CC00HCHHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "CC00HCCCHHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "C0HHHCC0CHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "C0HHCHCCHC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "C0HCHH0CHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "C0HCCCH0HCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "C0H0HCHCHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "C0CHCHH0CHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "C0CHCHCCH0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "C0CHCHCC0HH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "C0C0HHHCCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "C0C0HHCCHHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "C0C0HHCCCHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "C0C0CHHHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "C00HCHHCHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "C00HCHCHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "C00HCHCHCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "C00CHHHCHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "C00CCHCHHHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHHHCC0CCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHHCCCHC0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHHCCCH0CC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHHCCC0HCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHHCC0CHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHHC0CCCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHH0CCHCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHCHHCCCC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHCHH0CCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHCHCCH0CC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHCHCCCHC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHCHCCC0CH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHCHCC0HCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHCHC0CHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHCH0HCCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHCH0CCCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHCCCHCCH0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHCC0HCHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHCC0CHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHCC0CCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHC0HHCCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHC0HCCCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHC0HCCCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHC0CHCCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHC0CCHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HHC0CCCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HH0HCCHCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HH0CCCHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCHHCCHC0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCHHCCCH0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCHHCCC0HC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCHHCC0CHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCHCHCHC0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCHCHCCH0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCHCHCC0HC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCHCCHH0CC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCHCCH0HCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCHCCCHH0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCHCC0HHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCHC0CCHHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCH0CCHCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCH0CCCHHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCHHH0CCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCHHCCHC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCHHCCCH0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCHHCCC0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCHHCC0CH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCHH0HCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCHC0HCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCHC0CHHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCH0HHCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCH0CCHHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCH0CCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCH0CCCHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCCHHHC0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCCHHCHC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCCHHC0CH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCCHH0CHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCCHCH0HC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCCHCCHH0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCCHCCH0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCCHCC0HH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCCH0CHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCCCHHH0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCC0HCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCCC0CCHHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCC0HHHCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCC0HCCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HCC0HCCCHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HC0HCCHCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HC0HCCCHHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HC0CHHHCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HC0CHCCHHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HC0CHCCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HC0CHCCCHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0HC0CCHHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0H0HHCCHCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0H0HCCCHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0H0CHHHCCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0H0CHHCHCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0H0CHHCCCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0H0CHCCHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0H0CCCHCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHHHCHCC0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHHHCCHC0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHHHCCCHC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHHHCCC0CH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHHHCC0CHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHHCHCHCC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHHCHCCHC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHHCHCC0CH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHHCHC0CCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHHC0CHCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHHC0CCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHH0CCHCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHH0CCCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHCHCCHHC0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHCHCCH0CH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHCCHHCH0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHCCH0HCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHCCH0CHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHCCCH0HCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHC0HHCCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CHC0HCHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CH0HHHCCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CH0HCCHCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CH0HCCCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CH0CHCHCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CH0CHCCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCHHHCHC0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCHHHC0CHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCHHC0CHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCHH0CHCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCHCHHHC0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCHCHHCC0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCHCHH0CHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCHCH0HCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCHCCHHH0C"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCHCCC0HHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCHCC0CHHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCHC0HHCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCH0HCHCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCH0CHHCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCCHHHC0CH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCCHHCHCH0"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCCHHCHC0H"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCCHHC0CHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCCHH0CCHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCCCH0CHHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CCC0HHCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CC0HHCHCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CC0HCHCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0CC0CHHHCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0C0HHHCCCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0C0HHCCCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0C0HCHCHCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0C0HCHCCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0C0HCCHHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0C0HCCHHCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0C0HCCCCHHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0C0CHHHHCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0C0CHHCCCHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0C0CHCHHCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0C0CHCHHCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0C0CHCCHHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0C0CHCCCHHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "00HHHCCHCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "00HHCCHCHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "00HHCCCHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "00HCHHHCCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "00HCHHCCCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "00HCHCHCHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "00HCHCHCCCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "00HCHCCHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "00HCHCCCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "00CHHCCHCHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "00CHHCCCHHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "00CHCHCCHHC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "00CHCCHHHCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "00CCHHHHCCC"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "00CCHHCCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "00CCHHCCCHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "00CCCHHCHCH"
                                 ,_1: 0.99
                                 ,_2: "auto"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "00CCCHCCHHH"
                                 ,_1: 0.99
                                 ,_2: "auto"}]);
   var nineplays = _L.append(goodNines,
   _L.append(badNines,miscNines));
   var eightplays = _L.fromArray([{ctor: "_Tuple3"
                                  ,_0: "CC00C0HHCHH"
                                  ,_1: 0.99
                                  ,_2: " H would win by playing in {3}"}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "C0H0HHHCC0C"
                                  ,_1: 0.99
                                  ,_2: " if H plays in {4} and either of C \'s next 2 moves are fatal"}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "HCH0CH00CHC"
                                  ,_1: 1.0e-2
                                  ,_2: " either placement by H is immediately fatal"}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "CH0C0HH0HCC"
                                  ,_1: 0.99
                                  ,_2: " H plays {5} leaving C with 2 fatal moves"}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "0CH0C0HCHCH"
                                  ,_1: 1.0e-2
                                  ,_2: " if H plants {1}; C responds {6}; both H plays fatal MANEUVER-01"}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "HC0CH0C0HCH"
                                  ,_1: 1.0e-2
                                  ,_2: " H must plant {3}; C responds {6}; both H plays fatal MANEUVER-02"}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "CH0C0HH0HCC"
                                  ,_1: 0.99
                                  ,_2: " if H will plant {5}; C has 2 fatal moves"}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "0HH0HCCHCC0"
                                  ,_1: 0.98
                                  ,_2: " H has killer available moves from here"}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "H0H0HCCHCC0"
                                  ,_1: 0.98
                                  ,_2: " H has killer available moves from here"}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "HH00HCCHCC0"
                                  ,_1: 0.98
                                  ,_2: " H has killer available moves from here"}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "HHH00CCHCC0"
                                  ,_1: 0.98
                                  ,_2: " H has killer available moves from here"}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "HHH0HCC0CC0"
                                  ,_1: 0.98
                                  ,_2: " H has killer available moves from here"}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "CHCHHHCC000"
                                  ,_1: 0.98
                                  ,_2: " if H will plant {9} it create a Resign position for C - MANEUVER-03"}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "HCHCHC00H0C"
                                  ,_1: 0.98
                                  ,_2: " H will plant {7}; C {f10}; H {3}->{8} leaves C with 2 fatal moves"}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "CHCH0H0HC0C"
                                  ,_1: 0.99
                                  ,_2: " H will plant {10} and create a Resign position for C - MANEUVER-06"}]);
   var sevenplays = _L.fromArray([{ctor: "_Tuple3"
                                  ,_0: "C0C0HC00HCH"
                                  ,_1: 0.99
                                  ,_2: " if H plants in {2}; C in fatal position"}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "CHC0HC00HC0"
                                  ,_1: 0.99
                                  ,_2: " if H plants in {11}; C has two fatal moves"}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "CH00C0H0CHC"
                                  ,_1: 0.99
                                  ,_2: " if H plants {4}; forces C to {3} - Resign@ MANEUVER-02"}]);
   var sixplays = _L.fromArray([{ctor: "_Tuple3"
                                ,_0: "CCH0000CH0H"
                                ,_1: 0.99
                                ,_2: ""}
                               ,{ctor: "_Tuple3"
                                ,_0: "H0H0CH00CHC"
                                ,_1: 1.0e-2
                                ,_2: "?"}
                               ,{ctor: "_Tuple3"
                                ,_0: "00H0CH00CHC"
                                ,_1: 1.0e-2
                                ,_2: " leaves H open"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CH0H0HC000C"
                                ,_1: 0.96
                                ,_2: "always leads C into trouble"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0C00H0C0HCH"
                                ,_1: 0.96
                                ,_2: "always leads C into trouble"}
                               ,{ctor: "_Tuple3"
                                ,_0: "000C0CCHH0H"
                                ,_1: 0.99
                                ,_2: "Fatal position looming"}
                               ,{ctor: "_Tuple3"
                                ,_0: "00HC0CC0H0H"
                                ,_1: 0.99
                                ,_2: "Fatal position looming"}
                               ,{ctor: "_Tuple3"
                                ,_0: "00HC0CCH00H"
                                ,_1: 0.99
                                ,_2: "Fatal position looming"}
                               ,{ctor: "_Tuple3"
                                ,_0: "00HC0CCHH00"
                                ,_1: 0.99
                                ,_2: "Fatal position looming"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CHCHH000C00"
                                ,_1: 9.0e-2
                                ,_2: "position which leaves H in trouble"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CH0H0HC000C"
                                ,_1: 9.0e-2
                                ,_2: "position which leaves H in trouble"}
                               ,{ctor: "_Tuple3"
                                ,_0: "CCH00CH000H"
                                ,_1: 0.98
                                ,_2: " H has so many open plays and wins quickly"}
                               ,{ctor: "_Tuple3"
                                ,_0: "C0H0HCH000H"
                                ,_1: 0.98
                                ,_2: " H has so many open plays and wins quickly"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0HCH0HC000C"
                                ,_1: 0.92
                                ,_2: " if H knows his business then C is doomed"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HC00CC0H0H0"
                                ,_1: 0.91
                                ,_2: "Looks like the best move, but H {9} -> {f3} and disaster"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HH00HCC0C00"
                                ,_1: 0.98
                                ,_2: " H has multiple ways to win"}
                               ,{ctor: "_Tuple3"
                                ,_0: "0CCH0C00H0H"
                                ,_1: 0.98
                                ,_2: " H has opportunity to put C in doom"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCC00C00H0H"
                                ,_1: 0.98
                                ,_2: " H has opportunity to put C in doom"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCCH0C0000H"
                                ,_1: 0.98
                                ,_2: " H has opportunity to put C in doom"}
                               ,{ctor: "_Tuple3"
                                ,_0: "HCCH0C00H00"
                                ,_1: 0.98
                                ,_2: " H has opportunity to put C in doom"}]);
   var fiveplays = _L.fromArray([{ctor: "_Tuple3"
                                 ,_0: "000C0C00HHC"
                                 ,_1: 1.0e-2
                                 ,_2: " ? "}]);
   var fourplays = _L.fromArray([{ctor: "_Tuple3"
                                 ,_0: "000C0C00H0H"
                                 ,_1: 0.95
                                 ,_2: " H -> {8}; Fatal position looming"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "000C0C0H00H"
                                 ,_1: 0.95
                                 ,_2: " H -> {9};Fatal position looming"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "000C0C0HH00"
                                 ,_1: 0.95
                                 ,_2: " H -> {11}; Fatal position looming"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0000CC00H0H"
                                 ,_1: 0.95
                                 ,_2: "Fatal position looming"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0000CC0H00H"
                                 ,_1: 0.95
                                 ,_2: "Fatal position looming"}
                                ,{ctor: "_Tuple3"
                                 ,_0: "0000CC0HH00"
                                 ,_1: 0.95
                                 ,_2: "Fatal position looming"}]);
   var threeplays = _L.fromArray([{ctor: "_Tuple3"
                                  ,_0: "000000C00CH"
                                  ,_1: 0.82
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "0000000H0CC"
                                  ,_1: 0.81
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "000000CC00H"
                                  ,_1: 0.9
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00000C0C0H0"
                                  ,_1: 0.11
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00000C0CH00"
                                  ,_1: 0.14
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00000C0HC00"
                                  ,_1: 0.17
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00000CH000C"
                                  ,_1: 0.19
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00000HCC000"
                                  ,_1: 0.99
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "0000C00C00H"
                                  ,_1: 0.87
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "0000C00CH00"
                                  ,_1: 0.86
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "0000C00H00C"
                                  ,_1: 0.13
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "000C00CH000"
                                  ,_1: 0.88
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "000C0C0H000"
                                  ,_1: 1.0e-2
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "000C0H0C000"
                                  ,_1: 0.76
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "000CC00H000"
                                  ,_1: 0.94
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00C000000HC"
                                  ,_1: 0.23
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00C00000C0H"
                                  ,_1: 0.19
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00C00000CH0"
                                  ,_1: 0.24
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00C0000C00H"
                                  ,_1: 0.85
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00C000C000H"
                                  ,_1: 0.78
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00C000H000C"
                                  ,_1: 0.99
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00C000HC000"
                                  ,_1: 0.91
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00C00C000H0"
                                  ,_1: 8.0e-2
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00C00CH0000"
                                  ,_1: 0.82
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00C00H0C000"
                                  ,_1: 0.99
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00C0H000C00"
                                  ,_1: 0.82
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00C0H00C000"
                                  ,_1: 0.9
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00H000C0C00"
                                  ,_1: 0.16
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00H000CC000"
                                  ,_1: 0.86
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00H00C0000C"
                                  ,_1: 0.12
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "00HC00C0000"
                                  ,_1: 8.0e-2
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "0C0000C0H00"
                                  ,_1: 0.84
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "0C000H0000C"
                                  ,_1: 0.99
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "0C000HC0000"
                                  ,_1: 0.91
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "0C00C00H000"
                                  ,_1: 0.85
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "0H000000C0C"
                                  ,_1: 1.0e-2
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "0H0000CC000"
                                  ,_1: 0.99
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "0HC0000C000"
                                  ,_1: 0.99
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "C0C0000H000"
                                  ,_1: 0.91
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "C0HC0000000"
                                  ,_1: 0.99
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "0CC00000H00"
                                  ,_1: 0.99
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "0CC000H0000"
                                  ,_1: 0.91
                                  ,_2: " ? "}
                                 ,{ctor: "_Tuple3"
                                  ,_0: "0CC00H00000"
                                  ,_1: 0.83
                                  ,_2: " ? "}]);
   var twoplays = _L.fromArray([{ctor: "_Tuple3"
                                ,_0: "00000H0000C"
                                ,_1: 0.385
                                ,_2: " ? "}
                               ,{ctor: "_Tuple3"
                                ,_0: "00000000H0C"
                                ,_1: 0.435
                                ,_2: " ? "}
                               ,{ctor: "_Tuple3"
                                ,_0: "00000C0H000"
                                ,_1: 0.3
                                ,_2: " ? "}
                               ,{ctor: "_Tuple3"
                                ,_0: "00C0H000000"
                                ,_1: 0.405
                                ,_2: " ? "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0H000C00000"
                                ,_1: 0.53
                                ,_2: " ? "}
                               ,{ctor: "_Tuple3"
                                ,_0: "00000C000H0"
                                ,_1: 0.225
                                ,_2: " ? "}
                               ,{ctor: "_Tuple3"
                                ,_0: "00H00C00000"
                                ,_1: 0.43
                                ,_2: " ? "}]);
   var oneplays = _L.fromArray([{ctor: "_Tuple3"
                                ,_0: "C0000000000"
                                ,_1: 0.543
                                ,_2: " ? "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0C000000000"
                                ,_1: 0.612
                                ,_2: " ? "}
                               ,{ctor: "_Tuple3"
                                ,_0: "000C0000000"
                                ,_1: 0.602
                                ,_2: " ? "}
                               ,{ctor: "_Tuple3"
                                ,_0: "0000C000000"
                                ,_1: 0.6
                                ,_2: " ? "}
                               ,{ctor: "_Tuple3"
                                ,_0: "00000C00000"
                                ,_1: 0.44199997
                                ,_2: " ? "}
                               ,{ctor: "_Tuple3"
                                ,_0: "00000000C00"
                                ,_1: 0.47100002
                                ,_2: " ? "}
                               ,{ctor: "_Tuple3"
                                ,_0: "000000000C0"
                                ,_1: 0.583
                                ,_2: " ? "}]);
   var noughtplays = _L.fromArray([{ctor: "_Tuple3"
                                   ,_0: "00000000000"
                                   ,_1: 0.467
                                   ,_2: " ? "}]);
   _elm.Library.values = {_op: _op
                         ,noughtplays: noughtplays
                         ,oneplays: oneplays
                         ,twoplays: twoplays
                         ,threeplays: threeplays
                         ,fourplays: fourplays
                         ,fiveplays: fiveplays
                         ,sixplays: sixplays
                         ,sevenplays: sevenplays
                         ,eightplays: eightplays
                         ,goodNines: goodNines
                         ,badNines: badNines
                         ,miscNines: miscNines
                         ,nineplays: nineplays
                         ,tenPlays: tenPlays};
   return _elm.Library.values;
};Elm.TriangoView = Elm.TriangoView || {};
Elm.TriangoView.make = function (_elm) {
   "use strict";
   _elm.TriangoView = _elm.TriangoView || {};
   if (_elm.TriangoView.values)
   return _elm.TriangoView.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "TriangoView",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $Graphics$Collage = Elm.Graphics.Collage.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $List = Elm.List.make(_elm),
   $String = Elm.String.make(_elm);
   var gamma = function (_v0) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple3": return _v0._2;}
         _E.Case($moduleName,
         "on line 102, column 16 to 17");
      }();
   };
   var beta = function (_v5) {
      return function () {
         switch (_v5.ctor)
         {case "_Tuple3": return _v5._1;}
         _E.Case($moduleName,
         "on line 101, column 15 to 16");
      }();
   };
   var alpha = function (_v10) {
      return function () {
         switch (_v10.ctor)
         {case "_Tuple3":
            return _v10._0;}
         _E.Case($moduleName,
         "on line 100, column 17 to 18");
      }();
   };
   var positionise = function (bps) {
      return A2($List.map,
      function (p) {
         return {_: {}
                ,number: alpha(p)
                ,x: beta(p)
                ,y: gamma(p)};
      },
      bps);
   };
   var positions = positionise(_L.fromArray([{ctor: "_Tuple3"
                                             ,_0: 1
                                             ,_1: 0
                                             ,_2: 270}
                                            ,{ctor: "_Tuple3"
                                             ,_0: 2
                                             ,_1: 100
                                             ,_2: 220}
                                            ,{ctor: "_Tuple3"
                                             ,_0: 3
                                             ,_1: 200
                                             ,_2: 270}
                                            ,{ctor: "_Tuple3"
                                             ,_0: 4
                                             ,_1: 0
                                             ,_2: 170}
                                            ,{ctor: "_Tuple3"
                                             ,_0: 5
                                             ,_1: 55
                                             ,_2: 122}
                                            ,{ctor: "_Tuple3"
                                             ,_0: 6
                                             ,_1: 100
                                             ,_2: 135}
                                            ,{ctor: "_Tuple3"
                                             ,_0: 7
                                             ,_1: 145
                                             ,_2: 122}
                                            ,{ctor: "_Tuple3"
                                             ,_0: 8
                                             ,_1: 200
                                             ,_2: 170}
                                            ,{ctor: "_Tuple3"
                                             ,_0: 9
                                             ,_1: 0
                                             ,_2: 0}
                                            ,{ctor: "_Tuple3"
                                             ,_0: 10
                                             ,_1: 100
                                             ,_2: 0}
                                            ,{ctor: "_Tuple3"
                                             ,_0: 11
                                             ,_1: 200
                                             ,_2: 0}]));
   var beige = A3($Color.rgb,
   225,
   205,
   190);
   var background = $Graphics$Collage.move({ctor: "_Tuple2"
                                           ,_0: 100
                                           ,_1: 135})(A2($Graphics$Collage.filled,
   beige,
   A2($Graphics$Collage.rect,
   240,
   310)));
   var showPositions = function (bp) {
      return bp;
   };
   var lgsrc = "/lightGreenCircle.gif";
   var lightGreenCircle = A3($Graphics$Element.image,
   30,
   30,
   lgsrc);
   var blackCircle = A3($Graphics$Element.image,
   30,
   30,
   lgsrc);
   var whitesrc = "/whiteCircle.gif";
   var whiteCircle = A3($Graphics$Element.image,
   30,
   30,
   whitesrc);
   var bluesrc = "/blueCircle.gif";
   var blueCircle = A3($Graphics$Element.image,
   30,
   30,
   bluesrc);
   var redsrc = "/redCircle.gif";
   var redCircle = A3($Graphics$Element.image,
   30,
   30,
   redsrc);
   var circleise = function (_v15) {
      return function () {
         switch (_v15.ctor)
         {case "_Tuple2":
            return function () {
                 var ymage = function () {
                    switch (_v15._1 + "")
                    {case "0": return whiteCircle;
                       case "B": return blackCircle;
                       case "C": return redCircle;
                       case "H": return blueCircle;
                       case "W":
                       return lightGreenCircle;}
                    _E.Case($moduleName,
                    "between lines 87 and 94");
                 }();
                 return $Graphics$Collage.move({ctor: "_Tuple2"
                                               ,_0: $Basics.toFloat(_v15._0.x)
                                               ,_1: $Basics.toFloat(_v15._0.y)})($Graphics$Collage.toForm(ymage));
              }();}
         _E.Case($moduleName,
         "between lines 87 and 94");
      }();
   };
   var getCircles = function (bp) {
      return $Graphics$Collage.group($List.map(circleise)($List.zip(positions)($String.toList(bp))));
   };
   var thepath = $Graphics$Collage.path(_L.fromArray([{ctor: "_Tuple2"
                                                      ,_0: 0
                                                      ,_1: 0}
                                                     ,{ctor: "_Tuple2"
                                                      ,_0: 200
                                                      ,_1: 270}
                                                     ,{ctor: "_Tuple2"
                                                      ,_0: 200
                                                      ,_1: 0}
                                                     ,{ctor: "_Tuple2"
                                                      ,_0: 0
                                                      ,_1: 270}
                                                     ,{ctor: "_Tuple2"
                                                      ,_0: 100
                                                      ,_1: 0}
                                                     ,{ctor: "_Tuple2"
                                                      ,_0: 200
                                                      ,_1: 270}
                                                     ,{ctor: "_Tuple2"
                                                      ,_0: 0
                                                      ,_1: 170}
                                                     ,{ctor: "_Tuple2"
                                                      ,_0: 200
                                                      ,_1: 0}
                                                     ,{ctor: "_Tuple2"
                                                      ,_0: 0
                                                      ,_1: 0}
                                                     ,{ctor: "_Tuple2"
                                                      ,_0: 200
                                                      ,_1: 170}
                                                     ,{ctor: "_Tuple2"
                                                      ,_0: 0
                                                      ,_1: 270}
                                                     ,{ctor: "_Tuple2"
                                                      ,_0: 0
                                                      ,_1: 0}
                                                     ,{ctor: "_Tuple2"
                                                      ,_0: 100
                                                      ,_1: 220}
                                                     ,{ctor: "_Tuple2"
                                                      ,_0: 200
                                                      ,_1: 0}
                                                     ,{ctor: "_Tuple2"
                                                      ,_0: 200
                                                      ,_1: 170}
                                                     ,{ctor: "_Tuple2"
                                                      ,_0: 55
                                                      ,_1: 122}
                                                     ,{ctor: "_Tuple2"
                                                      ,_0: 0
                                                      ,_1: 170}
                                                     ,{ctor: "_Tuple2"
                                                      ,_0: 145
                                                      ,_1: 122}]));
   var board = A2($Graphics$Collage.traced,
   $Graphics$Collage.defaultLine,
   thepath);
   var Position = F3(function (a,
   b,
   c) {
      return {_: {}
             ,number: a
             ,x: b
             ,y: c};
   });
   _elm.TriangoView.values = {_op: _op
                             ,Position: Position
                             ,thepath: thepath
                             ,board: board
                             ,redsrc: redsrc
                             ,redCircle: redCircle
                             ,bluesrc: bluesrc
                             ,blueCircle: blueCircle
                             ,whitesrc: whitesrc
                             ,whiteCircle: whiteCircle
                             ,lgsrc: lgsrc
                             ,lightGreenCircle: lightGreenCircle
                             ,blackCircle: blackCircle
                             ,showPositions: showPositions
                             ,beige: beige
                             ,positions: positions
                             ,positionise: positionise
                             ,getCircles: getCircles
                             ,circleise: circleise
                             ,background: background
                             ,alpha: alpha
                             ,beta: beta
                             ,gamma: gamma};
   return _elm.TriangoView.values;
};