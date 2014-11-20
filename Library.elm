module Library where

{- OLL THESE POSITIONS ARE SET UP AS FOLLOWS
 A) THE COMPUTER HAS JUST PLAYED
 B) WE GIVE HIS CHANCE OF FAILURE FROM THIS POSITION
 i.e. 0.01 is an almost certain computer *win*
 C) WE OFFER A DESCRIPTION OF WHAT H (Human) MIGHT DO NEXT AND THE CONSEQUENCES-}


noughtplays : [(String,Float,String)]
noughtplays = [("00000000000",0.467," ? ")] -- steps 20.5


oneplays : [(String,Float,String)]
oneplays = [("C0000000000",0.543," ? "),("0C000000000",0.612," ? "),("000C0000000",0.602," ? "),("0000C000000",0.6," ? ")
           ,("00000C00000",0.44199997," ? "),("00000000C00",0.47100002," ? "),("000000000C0",0.583," ? ")
           ]


twoplays : [(String,Float,String)]
twoplays = [("00000H0000C",0.385," ? "),("00000000H0C",0.435," ? "),("00000C0H000",0.30," ? "),("00C0H000000",0.405," ? ")
           ,("0H000C00000",0.53," ? "),("00000C000H0",0.225," ? "),("00H00C00000",0.430," ? ")]


threeplays : [(String,Float,String)]
threeplays =    
                [("000000C00CH",0.82," ? "),("0000000H0CC",0.81," ? "),("000000CC00H",0.90," ? "),("00000C0C0H0",0.11," ? ")
                ,("00000C0CH00",0.14," ? "),("00000C0HC00",0.17," ? "),("00000CH000C",0.19," ? "),("00000HCC000",0.99," ? ")
                ,("0000C00C00H",0.87," ? "),("0000C00CH00",0.86," ? "),("0000C00H00C",0.13," ? "),("000C00CH000",0.88," ? ")
                ,("000C0C0H000",0.01," ? "),("000C0H0C000",0.76," ? "),("000CC00H000",0.94," ? "),("00C000000HC",0.23," ? ")
                ,("00C00000C0H",0.19," ? "),("00C00000CH0",0.24," ? "),("00C0000C00H",0.85," ? "),("00C000C000H",0.78," ? ")
                ,("00C000H000C",0.99," ? "),("00C000HC000",0.91," ? "),("00C00C000H0",0.08," ? "),("00C00CH0000",0.82," ? ")
                ,("00C00H0C000",0.99," ? "),("00C0H000C00",0.82," ? "),("00C0H00C000",0.90," ? "),("00H000C0C00",0.16," ? ")
                ,("00H000CC000",0.86," ? "),("00H00C0000C",0.12," ? "),("00HC00C0000",0.08," ? "),("0C0000C0H00",0.84," ? ")
                ,("0C000H0000C",0.99," ? "),("0C000HC0000",0.91," ? "),("0C00C00H000",0.85," ? "),("0H000000C0C",0.01," ? ")
                ,("0H0000CC000",0.99," ? "),("0HC0000C000",0.99," ? "),("C0C0000H000",0.91," ? "),("C0HC0000000",0.99," ? ")
                ,("0CC00000H00",0.99," ? "),("0CC000H0000",0.91," ? "),("0CC00H00000",0.83," ? ")
                ]


fourplays : [(String,Float,String)]
fourplays = [("000C0C00H0H",0.95," H -> {8}; Fatal position looming")
            ,("000C0C0H00H",0.95," H -> {9};Fatal position looming"),("000C0C0HH00",0.95," H -> {11}; Fatal position looming")
            ,("0000CC00H0H",0.95,"Fatal position looming")
            ,("0000CC0H00H",0.95,"Fatal position looming"),("0000CC0HH00",0.95,"Fatal position looming")
            ]


fiveplays : [(String,Float,String)]
fiveplays = [("000C0C00HHC",0.01," ? ")
            
            ]


sixplays : [(String,Float,String)]
sixplays =  [
            ("CCH0000CH0H",0.99,""),("H0H0CH00CHC",0.01,"?"),("00H0CH00CHC",0.01," leaves H open")
            ,("CH0H0HC000C",0.96,"always leads C into trouble"),("0C00H0C0HCH",0.96,"always leads C into trouble")
            ,("000C0CCHH0H",0.99,"Fatal position looming"),("00HC0CC0H0H",0.99,"Fatal position looming")
            ,("00HC0CCH00H",0.99,"Fatal position looming"),("00HC0CCHH00",0.99,"Fatal position looming")
            ,("CHCHH000C00",0.09,"position which leaves H in trouble"),("CH0H0HC000C",0.09,"position which leaves H in trouble")
            ,("CCH00CH000H",0.98," H has so many open plays and wins quickly")
            ,("C0H0HCH000H",0.98," H has so many open plays and wins quickly")
            ,("0HCH0HC000C",0.92," if H knows his business then C is doomed")
            ,("HC00CC0H0H0",0.91,"Looks like the best move, but H {9} -> {f3} and disaster")
            ,("HH00HCC0C00",0.98," H has multiple ways to win")
            ,("0CCH0C00H0H",0.98," H has opportunity to put C in doom"),("HCC00C00H0H",0.98," H has opportunity to put C in doom")
            ,("HCCH0C0000H",0.98," H has opportunity to put C in doom"),("HCCH0C00H00",0.98," H has opportunity to put C in doom")
            ]

-- POSITIONS WHERE C HAS JUST PLANTED HIS 4TH TOKEN, PLAYING FIRST
sevenplays : [(String,Float,String)]
sevenplays =     [("C0C0HC00HCH",0.99," if H plants in {2}; C in fatal position")
                 ,("CHC0HC00HC0",0.99," if H plants in {11}; C has two fatal moves")
                 ,("CH00C0H0CHC",0.99," if H plants {4}; forces C to {3} - Resign@ MANEUVER-02")]


-- POSITIONS WHERE C HAS JUST PLANTED HIS 4TH TOKEN, PLAYING SECOND
eightplays : [(String,Float,String)]
eightplays =     [("CC00C0HHCHH",0.99," H would win by playing in {3}")
                 ,("C0H0HHHCC0C",0.99," if H plays in {4} and either of C 's next 2 moves are fatal")
                 ,("HCH0CH00CHC",0.01," either placement by H is immediately fatal")
                 ,("CH0C0HH0HCC",0.99," H plays {5} leaving C with 2 fatal moves")
                 ,("0CH0C0HCHCH",0.01," if H plants {1}; C responds {6}; both H plays fatal MANEUVER-01")
                 ,("HC0CH0C0HCH",0.01," H must plant {3}; C responds {6}; both H plays fatal MANEUVER-02")
                 ,("CH0C0HH0HCC",0.99," if H will plant {5}; C has 2 fatal moves")
                 ,("0HH0HCCHCC0",0.98," H has killer available moves from here")
                 ,("H0H0HCCHCC0",0.98," H has killer available moves from here")
                 ,("HH00HCCHCC0",0.98," H has killer available moves from here")
                 ,("HHH00CCHCC0",0.98," H has killer available moves from here")
                 ,("HHH0HCC0CC0",0.98," H has killer available moves from here")
                 ,("CHCHHHCC000",0.98," if H will plant {9} it create a Resign position for C - MANEUVER-03")
                 ,("HCHCHC00H0C",0.98," H will plant {7}; C {f10}; H {3}->{8} leaves C with 2 fatal moves")
                 ,("CHCH0H0HC0C",0.99," H will plant {10} and create a Resign position for C - MANEUVER-06")]


-- POSITIONS WHERE C HAS JUST PLANTED HIS 5TH TOKEN, PLAYING FIRST
goodNines : [(String,Float,String)]
goodNines = [("HHHCCCHCC00",0.99,"auto"),("HHHCCC0CCH0",0.99,"auto"),("HHHCC0HC0CC",0.99,"auto"),("HHHCC0CH0CC",0.99,"auto"),("HHHCC0CC0CH",0.99,"auto"),("HHHCC0C0HCC",0.99,"auto"),("HHHC0HCCC0C",0.99,"auto"),("HHHC0CHCCC0",0.99,"auto"),("HHHC0C0CHCC",0.99,"auto"),("HHHC00CCCHC",0.99,"auto"),("HHHC00CCCCH",0.99,"auto"),("HHCCCHH0C0C",0.99,"auto"),("HHCCCHCH00C",0.99,"auto"),("HHCCCHC00HC",0.99,"auto"),("HHCCCH0HC0C",0.99,"auto"),("HHCCCH00CHC",0.99,"auto"),("HHCCC0HHC0C",0.99,"auto"),("HHCCC0HC0CH",0.99,"auto"),("HHCCC0H0CHC",0.99,"auto"),("HHCCC0CH0HC",0.99,"auto"),("HHCC0HCCCH0",0.99,"auto"),("HHCC0HCCC0H",0.99,"auto"),("HHCC0C0HCHC",0.99,"auto"),("HHCC00CCCHH",0.99,"auto"),("HHC0CHH0CCC",0.99,"auto"),("HHC0CHCCHC0",0.99,"auto"),("HHC0CHCC0CH",0.99,"auto"),("HHC0CH0HCCC",0.99,"auto"),("HHC0C0HHCCC",0.99,"auto"),("HHC0C0CCHCH",0.99,"auto"),("HH0CCCHCCH0",0.99,"auto"),("HH0CC0HCCCH",0.99,"auto"),("HH0C0HCCCHC",0.99,"auto"),("HH0C0CCHHCC",0.99,"auto"),("HCHCCCH0HC0",0.99,"auto"),("HCHC0HHCC0C",0.99,"auto"),("HCHC0H0CCHC",0.99,"auto"),("HCHC00HCCHC",0.99,"auto"),("HCH0HCHCC0C",0.99,"auto"),("HCH0HCCCHC0",0.99,"auto"),("HCH00CCCHCH",0.99,"auto"),("HCCCHHHC0C0",0.99,"auto"),("HCCCHH0C0CH",0.99,"auto"),("HCCCH0HC0CH",0.99,"auto"),("HCCC0HHCHC0",0.99,"auto"),("HCCC0HHC0CH",0.99,"auto"),("HCCC0HCHCH0",0.99,"auto"),("HCCC0HCHC0H",0.99,"auto"),("HCCC0HC0CHH",0.99,"auto"),("HCCC0H0CHCH",0.99,"auto"),("HCCC00HCHCH",0.99,"auto"),("HCC0HHC0CHC",0.99,"auto"),("HCC0HCHCHC0",0.99,"auto"),("HCC0HCHC0CH",0.99,"auto"),("HCC0HC0CHCH",0.99,"auto"),("HCC00CHCHCH",0.99,"auto"),("HC0HHCCCHC0",0.99,"auto"),("HC0HHCCCH0C",0.99,"auto"),("HC0HCC0CHCH",0.99,"auto"),("HC0H0CCCHCH",0.99,"auto"),("HC0CHH0HCCC",0.99,"auto"),("HC0CHCHHCC0",0.99,"auto"),("HC0CHCHCCH0",0.99,"auto"),("HC0CHCH0CHC",0.99,"auto"),("HC0CHCH0CCH",0.99,"auto"),("HC0CHC0HCHC",0.99,"auto"),("HC0CHC0HCCH",0.99,"auto"),("HC0CH0HHCCC",0.99,"auto"),("HC0C0HHHCCC",0.99,"auto"),("HC0C0HHCCHC",0.99,"auto"),("HC0C0CHHCHC",0.99,"auto"),("HC0C0CHHCCH",0.99,"auto"),("HC00HCCCCHH",0.99,"auto"),("HC00CCHHHCC",0.99,"auto"),("HC00CCHCHCH",0.99,"auto"),("H0HHCCHC0CC",0.99,"auto"),("H0HHCCCH0CC",0.99,"auto"),("H0HHCCC0HCC",0.99,"auto"),("H0HHCC0CHCC",0.99,"auto"),("H0HCHCHCC0C",0.99,"auto"),("H0HCHCHC0CC",0.99,"auto"),("H0HCH0HCCCC",0.99,"auto"),("H0HCCHCC0CH",0.99,"auto"),("H0HCCCHCCH0",0.99,"auto"),("H0HCC0HCHCC",0.99,"auto"),("H0HCC0CHHCC",0.99,"auto"),("H0HCC0CCHCH",0.99,"auto"),("H0HC0HHCCCC",0.99,"auto"),("H0HC0HCCCHC",0.99,"auto"),("H0HC0CHCHCC",0.99,"auto"),("H0HC0CHCCCH",0.99,"auto"),("H0H0CCHCHCC",0.99,"auto"),("H0H0CCCHHCC",0.99,"auto"),("H0CHC0CCHCH",0.99,"auto"),("H0CCHC0HCHC",0.99,"auto"),("H0CCCHHHC0C",0.99,"auto"),("H0CCCHHC0CH",0.99,"auto"),("H0CCCHH0CHC",0.99,"auto"),("H0CCCHCH0HC",0.99,"auto"),("H0CCCHCCHH0",0.99,"auto"),("H0CCCHCC0HH",0.99,"auto"),("H0CC0HCCCHH",0.99,"auto"),("H0C0CHHHCCC",0.99,"auto"),("H0C0CHCCHCH",0.99,"auto"),("H00HCCHCHCC",0.99,"auto"),("H00HCCCHHCC",0.99,"auto"),("CHHHHCC0C0C",0.99,"auto"),("CHHH0CC0CHC",0.99,"auto"),("CHHH0C0CHCC",0.99,"auto"),("CHHCCCH00CH",0.99,"auto"),("CHHC0HCCH0C",0.99,"auto"),("CHH0HCHC0CC",0.99,"auto"),("CHH0HCC0CHC",0.99,"auto"),("CHH0HC0CHCC",0.99,"auto"),("CHH00CHCHCC",0.99,"auto"),("CHCHCHCC00H",0.99,"auto"),("CHCHC0CC0HH",0.99,"auto"),("CHCH0CHCC0H",0.99,"auto"),("CHCH0CC0HCH",0.99,"auto"),("CHCCHHCH00C",0.99,"auto"),("CHCCCHH0CH0",0.99,"auto"),("CHCCCHH0C0H",0.99,"auto"),("CHCCCHCH0H0",0.99,"auto"),("CHCCCHCH00H",0.99,"auto"),("CHCCCHC0H0H",0.99,"auto"),("CHCCC0CHH0H",0.99,"auto"),("CHC0HHHCCC0",0.99,"auto"),("CHC0HHCHC0C",0.99,"auto"),("CHC0HHCCCH0",0.99,"auto"),("CHC0HHCCC0H",0.99,"auto"),("CHC0HHC0CHC",0.99,"auto"),("CHC0HH0CCCH",0.99,"auto"),("CHC0H0HCCCH",0.99,"auto"),("CHC0H0CHCHC",0.99,"auto"),("CHC0H0CCHHC",0.99,"auto"),("CHC0H0CCHCH",0.99,"auto"),("CHC0H0CCCHH",0.99,"auto"),("CHC0CHHH0CC",0.99,"auto"),("CHC0CHH0HCC",0.99,"auto"),("CHC0CHCC0HH",0.99,"auto"),("CHC0CH0HHCC",0.99,"auto"),("CHC0C0HHHCC",0.99,"auto"),("CHC00HHCCCH",0.99,"auto"),("CHC00HCHCHC",0.99,"auto"),("CHC00HCCHHC",0.99,"auto"),("CHC00HCCCHH",0.99,"auto"),("CH0HHCC0CHC",0.99,"auto"),("CH0HCHHC0CC",0.99,"auto"),("CH0HCHCH0CC",0.99,"auto"),("CH0HCHCCHC0",0.99,"auto"),("CH0HCHCCH0C",0.99,"auto"),("CH0HCHC0HCC",0.99,"auto"),("CH0HCHC0CHC",0.99,"auto"),("CH0HCH0CHCC",0.99,"auto"),("CH0HC0HCHCC",0.99,"auto"),("CH0HC0CHHCC",0.99,"auto"),("CH0HC0CHCHC",0.99,"auto"),("CH0CHHHC0CC",0.99,"auto"),("CH0CHHCCH0C",0.99,"auto"),("CH0CHH0CHCC",0.99,"auto"),("CH0CH0HCHCC",0.99,"auto"),("CH0CCHCHH0C",0.99,"auto"),("CH0CCHCH0HC",0.99,"auto"),("CH0CCCH0HCH",0.99,"auto"),("CH0CC0CHHHC",0.99,"auto"),("CH0C0HHCHCC",0.99,"auto"),("CH00HCHCHCC",0.99,"auto"),("CH00CHHCHCC",0.99,"auto"),("CH00CHCHHCC",0.99,"auto"),("CH00CHCHCHC",0.99,"auto"),("CCHHHCC00CH",0.99,"auto"),("CCHHHC0HCC0",0.99,"auto"),("CCHCHCHCH00",0.99,"auto"),("CCHCHCHC00H",0.99,"auto"),("CCHCHC0CH0H",0.99,"auto"),("CCHCH00HCCH",0.99,"auto"),("CCHC0CHCH0H",0.99,"auto"),("CCH0HC0HCCH",0.99,"auto"),("CCCHHHCH0C0",0.99,"auto"),("CCCHH0HHC0C",0.99,"auto"),("CCCHH0HCC0H",0.99,"auto"),("CCCHH0CHCH0",0.99,"auto"),("CCCHH0CHC0H",0.99,"auto"),("CCCHCHHH00C",0.99,"auto"),("CCCHCHH00HC",0.99,"auto"),("CCCHCHCH00H",0.99,"auto"),("CCCHC0CHH0H",0.99,"auto"),("CCCH0HHHC0C",0.99,"auto"),("CCCH0HHCC0H",0.99,"auto"),("CCCH0HCHCH0",0.99,"auto"),("CCCH0HCHC0H",0.99,"auto"),("CCCH0CC0HHH",0.99,"auto"),("CCC0CHHH0HC",0.99,"auto"),("CCC0CHCHH0H",0.99,"auto"),("CC0HHCHH0CC",0.99,"auto"),("CC0HHCH0HCC",0.99,"auto"),("CC0HHCCCH0H",0.99,"auto"),("CC0H0CHHHCC",0.99,"auto"),("CC0CHCHCH0H",0.99,"auto"),("CC00HCHHHCC",0.99,"auto"),("CC00HCCCHHH",0.99,"auto"),("C0HHHCC0CHC",0.99,"auto"),("C0HHCHCCHC0",0.99,"auto"),("C0HCHH0CHCC",0.99,"auto"),("C0HCCCH0HCH",0.99,"auto"),("C0H0HCHCHCC",0.99,"auto"),("C0CHCHH0CHC",0.99,"auto"),("C0CHCHCCH0H",0.99,"auto"),("C0CHCHCC0HH",0.99,"auto"),("C0C0HHHCCCH",0.99,"auto"),("C0C0HHCCHHC",0.99,"auto"),("C0C0HHCCCHH",0.99,"auto"),("C0C0CHHHHCC",0.99,"auto"),("C00HCHHCHCC",0.99,"auto"),("C00HCHCHHCC",0.99,"auto"),("C00HCHCHCHC",0.99,"auto"),("C00CHHHCHCC",0.99,"auto"),("C00CCHCHHHC",0.99,"auto"),("0HHHHCC0CCC",0.99,"auto"),("0HHHCCCHC0C",0.99,"auto"),("0HHHCCCH0CC",0.99,"auto"),("0HHHCCC0HCC",0.99,"auto"),("0HHHCC0CHCC",0.99,"auto"),("0HHHC0CCCCH",0.99,"auto"),("0HHH0CCHCCC",0.99,"auto"),("0HHCHHCCCC0",0.99,"auto"),("0HHCHH0CCCC",0.99,"auto"),("0HHCHCCH0CC",0.99,"auto"),("0HHCHCCCHC0",0.99,"auto"),("0HHCHCCC0CH",0.99,"auto"),("0HHCHCC0HCC",0.99,"auto"),("0HHCHC0CHCC",0.99,"auto"),("0HHCH0HCCCC",0.99,"auto"),("0HHCH0CCCCH",0.99,"auto"),("0HHCCCHCCH0",0.99,"auto"),("0HHCC0HCHCC",0.99,"auto"),("0HHCC0CHHCC",0.99,"auto"),("0HHCC0CCHCH",0.99,"auto"),("0HHC0HHCCCC",0.99,"auto"),("0HHC0HCCCHC",0.99,"auto"),("0HHC0HCCCCH",0.99,"auto"),("0HHC0CHCCCH",0.99,"auto"),("0HHC0CCHHCC",0.99,"auto"),("0HHC0CCCHCH",0.99,"auto"),("0HH0HCCHCCC",0.99,"auto"),("0HH0CCCHHCC",0.99,"auto"),("0HCHHCCHC0C",0.99,"auto"),("0HCHHCCCH0C",0.99,"auto"),("0HCHHCCC0HC",0.99,"auto"),("0HCHHCC0CHC",0.99,"auto"),("0HCHCHCHC0C",0.99,"auto"),("0HCHCHCCH0C",0.99,"auto"),("0HCHCHCC0HC",0.99,"auto"),("0HCHCCHH0CC",0.99,"auto"),("0HCHCCH0HCC",0.99,"auto"),("0HCHCCCHH0C",0.99,"auto"),("0HCHCC0HHCC",0.99,"auto"),("0HCHC0CCHHC",0.99,"auto"),("0HCH0CCHCHC",0.99,"auto"),("0HCH0CCCHHC",0.99,"auto"),("0HCCHHH0CCC",0.99,"auto"),("0HCCHHCCHC0",0.99,"auto"),("0HCCHHCCCH0",0.99,"auto"),("0HCCHHCCC0H",0.99,"auto"),("0HCCHHCC0CH",0.99,"auto"),("0HCCHH0HCCC",0.99,"auto"),("0HCCHC0HCHC",0.99,"auto"),("0HCCHC0CHHC",0.99,"auto"),("0HCCH0HHCCC",0.99,"auto"),("0HCCH0CCHHC",0.99,"auto"),("0HCCH0CCHCH",0.99,"auto"),("0HCCH0CCCHH",0.99,"auto"),("0HCCCHHHC0C",0.99,"auto"),("0HCCCHHCHC0",0.99,"auto"),("0HCCCHHC0CH",0.99,"auto"),("0HCCCHH0CHC",0.99,"auto"),("0HCCCHCH0HC",0.99,"auto"),("0HCCCHCCHH0",0.99,"auto"),("0HCCCHCCH0H",0.99,"auto"),("0HCCCHCC0HH",0.99,"auto"),("0HCCCH0CHCH",0.99,"auto"),("0HCCCCHHH0C",0.99,"auto"),("0HCCC0HCHCH",0.99,"auto"),("0HCCC0CCHHH",0.99,"auto"),("0HCC0HHHCCC",0.99,"auto"),("0HCC0HCCHCH",0.99,"auto"),("0HCC0HCCCHH",0.99,"auto"),("0HC0HCCHCHC",0.99,"auto"),("0HC0HCCCHHC",0.99,"auto"),("0HC0CHHHCCC",0.99,"auto"),("0HC0CHCCHHC",0.99,"auto"),("0HC0CHCCHCH",0.99,"auto"),("0HC0CHCCCHH",0.99,"auto"),("0HC0CCHHHCC",0.99,"auto"),("0H0HHCCHCCC",0.99,"auto"),("0H0HCCCHHCC",0.99,"auto"),("0H0CHHHCCCC",0.99,"auto"),("0H0CHHCHCCC",0.99,"auto"),("0H0CHHCCCCH",0.99,"auto"),("0H0CHCCHHCC",0.99,"auto"),("0H0CCCHCHCH",0.99,"auto"),("0CHHHCHCC0C",0.99,"auto"),("0CHHHCCHC0C",0.99,"auto"),("0CHHHCCCHC0",0.99,"auto"),("0CHHHCCC0CH",0.99,"auto"),("0CHHHCC0CHC",0.99,"auto"),("0CHHCHCHCC0",0.99,"auto"),("0CHHCHCCHC0",0.99,"auto"),("0CHHCHCC0CH",0.99,"auto"),("0CHHCHC0CCH",0.99,"auto"),("0CHHC0CHCCH",0.99,"auto"),("0CHHC0CCHCH",0.99,"auto"),("0CHH0CCHCHC",0.99,"auto"),("0CHH0CCCHCH",0.99,"auto"),("0CHCHCCHHC0",0.99,"auto"),("0CHCHCCH0CH",0.99,"auto"),("0CHCCHHCH0C",0.99,"auto"),("0CHCCH0HCCH",0.99,"auto"),("0CHCCH0CHCH",0.99,"auto"),("0CHCCCH0HCH",0.99,"auto"),("0CHC0HHCCHC",0.99,"auto"),("0CHC0HCHHCC",0.99,"auto"),("0CH0HHHCCCC",0.99,"auto"),("0CH0HCCHCHC",0.99,"auto"),("0CH0HCCCHCH",0.99,"auto"),("0CH0CHCHCCH",0.99,"auto"),("0CH0CHCCHCH",0.99,"auto"),("0CCHHHCHC0C",0.99,"auto"),("0CCHHHC0CHC",0.99,"auto"),("0CCHHC0CHCH",0.99,"auto"),("0CCHH0CHCHC",0.99,"auto"),("0CCHCHHHC0C",0.99,"auto"),("0CCHCHHCC0H",0.99,"auto"),("0CCHCHH0CHC",0.99,"auto"),("0CCHCH0HCHC",0.99,"auto"),("0CCHCCHHH0C",0.99,"auto"),("0CCHCCC0HHH",0.99,"auto"),("0CCHCC0CHHH",0.99,"auto"),("0CCHC0HHCHC",0.99,"auto"),("0CCH0HCHCHC",0.99,"auto"),("0CCH0CHHCCH",0.99,"auto"),("0CCCHHHC0CH",0.99,"auto"),("0CCCHHCHCH0",0.99,"auto"),("0CCCHHCHC0H",0.99,"auto"),("0CCCHHC0CHH",0.99,"auto"),("0CCCHH0CCHH",0.99,"auto"),("0CCCCH0CHHH",0.99,"auto"),("0CCC0HHCHCH",0.99,"auto"),("0CC0HHCHCHC",0.99,"auto"),("0CC0HCHCHCH",0.99,"auto"),("0CC0CHHHCHC",0.99,"auto"),("0C0HHHCCCCH",0.99,"auto"),("0C0HHCCCHCH",0.99,"auto"),("0C0HCHCHCCH",0.99,"auto"),("0C0HCHCCHCH",0.99,"auto"),("0C0HCCHHHCC",0.99,"auto"),("0C0HCCHHCHC",0.99,"auto"),("0C0HCCCCHHH",0.99,"auto"),("0C0CHHHHCCC",0.99,"auto"),("0C0CHHCCCHH",0.99,"auto"),("0C0CHCHHCHC",0.99,"auto"),("0C0CHCHHCCH",0.99,"auto"),("0C0CHCCHHCH",0.99,"auto"),("0C0CHCCCHHH",0.99,"auto"),("00HHHCCHCCC",0.99,"auto"),("00HHCCHCHCC",0.99,"auto"),("00HHCCCHHCC",0.99,"auto"),("00HCHHHCCCC",0.99,"auto"),("00HCHHCCCCH",0.99,"auto"),("00HCHCHCHCC",0.99,"auto"),("00HCHCHCCCH",0.99,"auto"),("00HCHCCHHCC",0.99,"auto"),("00HCHCCCHCH",0.99,"auto"),("00CHHCCHCHC",0.99,"auto"),("00CHHCCCHHC",0.99,"auto"),("00CHCHCCHHC",0.99,"auto"),("00CHCCHHHCC",0.99,"auto"),("00CCHHHHCCC",0.99,"auto"),("00CCHHCCHCH",0.99,"auto"),("00CCHHCCCHH",0.99,"auto"),("00CCCHHCHCH",0.99,"auto"),("00CCCHCCHHH",0.99,"auto")]


badNines : [(String,Float,String)]
badNines = [("HHHCC0HCCC0",0.01,"auto"),("HHHC0CCC0CH",0.01,"auto"),("HHCHC0CHC0C",0.01,"auto"),("HHCHC0CCH0C",0.01,"auto"),("HHCHC0CC0HC",0.01,"auto"),("HHCCC0HCHC0",0.01,"auto"),("HHCCC0CCHH0",0.01,"auto"),("HCHHHCCC00C",0.01,"auto"),("HCHCHC0H0CC",0.01,"auto"),("HCHC0HCH0CC",0.01,"auto"),("HCHC0C0CHCH",0.01,"auto"),("HCH0HCCCCH0",0.01,"either H move is immediately fatal"),("HCH0CCH0CHC",0.01,"auto"),("HCH0CCCH0HC",0.01,"auto"),("HCH0CC0HCHC",0.01,"auto"),("HCH00CCCCHH",0.01,"auto"),("HCCHHHC0C0C",0.01,"auto"),("HCCH0CHHCC0",0.01,"auto"),("HCCH0CH0CCH",0.01,"auto"),("HCCCHCH00CH",0.01,"auto"),("HCCCHC00HCH",0.01,"auto"),("HCCC00CHCHH",0.01,"auto"),("HC0HCCCHCH0",0.01,"auto"),("HC0HCCC0CHH",0.01,"auto"),("HC0CHCC0CHH",0.01,"auto"),("HC0CHC0CCHH",0.01,"auto"),("HC0C0CHCCHH",0.01,"auto"),("H0HC0CHHCCC",0.01,"auto"),("H0CHCHCHC0C",0.01,"auto"),("H0CHCCCHC0H",0.01,"auto"),("H0CHCCC0CHH",0.01,"auto"),("H0CHC0CCHHC",0.01,"auto"),("H0C0CCCHCHH",0.01,"auto"),("CHHC00CCHHC",0.01,"auto"),("CHCHHCCHC00",0.01,"auto"),("CHCHCHC0H0C",0.01,"auto"),("CHCH0CHCCH0",0.01,"auto"),("CHCCH00HCHC",0.01,"auto"),("CHCC0H0HCHC",0.01,"auto"),("CHCC00HHCHC",0.01,"auto"),("CHC0HCCHC0H",0.01,"auto"),("CHC0CHCHH0C",0.01,"auto"),("CHC0CHC0HHC",0.01,"auto"),("CHC0CCC0HHH",0.01,"auto"),("CHC00CCHHCH",0.01,"auto"),("CH0HC0CCHCH",0.01,"auto"),("CH0CH0CCHHC",0.01,"auto"),("CH0C0HCCHHC",0.01,"auto"),("CCHHH0C0CHC",0.01,"auto"),("CCHH0CHHCC0",0.01,"auto"),("CCHH0CHH0CC",0.01,"auto"),("CCHH0C0HHCC",0.01,"auto"),("CCHH00CHCHC",0.01,"auto"),("CCHCH0H0CHC",0.01,"auto"),("CCHC00HHCHC",0.01,"auto"),("CCHC00HHCCH",0.01,"auto"),("CCH0HCHHCC0",0.01,"auto"),("CCH0HCHH0CC",0.01,"auto"),("CCH0HC0HCHC",0.01,"auto"),("CCH00CHHHCC",0.01,"auto"),("CCH00CHHCCH",0.01,"auto"),("CCCHH0C0HHC",0.01,"auto"),("CCCH0HC0HHC",0.01,"auto"),("CCCH0HC0CHH",0.01,"auto"),("CCCH0H0HCHC",0.01,"auto"),("CCCH0H0CCHH",0.01,"auto"),("CCCH0CH0HHC",0.01,"auto"),("CCCH0C0HHHC",0.01,"auto"),("CCCH00CHHHC",0.01,"auto"),("CCC0HCH0HCH",0.01,"auto"),("CCC0H0CHHHC",0.01,"auto"),("CCC00HHCCHH",0.01,"auto"),("CCC00HCHHHC",0.01,"auto"),("CCC00CCHHHH",0.01,"auto"),("CC00HCHHCHC",0.01,"auto"),("C0HHHCCHC0C",0.01,"auto"),("C0HHH0CCCHC",0.01,"auto"),("C0HHC0CHCHC",0.01,"auto"),("C0HHC0CCHCH",0.01,"auto"),("C0HC0HCCHHC",0.01,"auto"),("C0H0HCCHCHC",0.01,"auto"),("C0CHC0HHCHC",0.01,"auto"),("C0CCHHC0CHH",0.01,"auto"),("C0CCHH0CCHH",0.01,"auto"),("C0CCH0HCCHH",0.01,"auto"),("C0CCH0CHCHH",0.01,"auto"),("C00HHCCHCHC",0.01,"auto"),("C00HCHCCHCH",0.01,"auto"),("C00CHHCCHHC",0.01,"auto"),("0HHHCCC0CHC",0.01,"auto"),("0HHCCHCHC0C",0.01,"auto"),("0HHCCCHCHC0",0.01,"auto"),("0HHCCC0CHCH",0.01,"auto"),("0HHCC0CHCHC",0.01,"auto"),("0HH0CCCHCHC",0.01,"auto"),("0HCHCCCHC0H",0.01,"auto"),("0HCHCCC0HHC",0.01,"auto"),("0HCHCCC0CHH",0.01,"auto"),("0HCCHCHC0HC",0.01,"auto"),("0HCCCCH0HHC",0.01,"auto"),("0HCCCC0HHHC",0.01,"auto"),("0HCC0CHCHHC",0.01,"auto"),("0HC0CCCHCHH",0.01,"auto"),("0H0HCCCHCHC",0.01,"auto"),("0CHHHCCCH0C",0.01,"auto"),("0CHHHC0HCCC",0.01,"auto"),("0CHHCCHHCC0",0.01,"auto"),("0CHHCCHH0CC",0.01,"auto"),("0CHHCCHC0CH",0.01,"auto"),("0CHH0CHHCCC",0.01,"auto"),("0CHCHCCCHH0",0.01,"auto"),("0CHCCHHHCC0",0.01,"auto"),("0CHC0HCCCHH",0.01,"auto"),("0CHC0CCCHHH",0.01,"auto"),("0CH0HCCCCHH",0.01,"auto"),("0CCHCHCHH0C",0.01,"auto"),("0CCHCHC0CHH",0.01,"auto"),("0CCHCCCH0HH",0.01,"auto"),("0CCHC0CHCHH",0.01,"auto"),("0CCCHCH0HHC",0.01,"auto"),("0CCCHC0HHHC",0.01,"auto"),("0CCCH0HCCHH",0.01,"auto"),("0CCCH0CHCHH",0.01,"auto"),("0CCCCHHCHH0",0.01,"auto"),("0CCC0HCHCHH",0.01,"auto"),("0CCC0CHHHHC",0.01,"auto"),("0CC0CHCHHHC",0.01,"auto"),("0CC0CCCHHHH",0.01,"auto"),("0C0HHCHHCCC",0.01,"auto"),("0C0CHCHCCHH",0.01,"auto"),("0C0CHCCHCHH",0.01,"auto"),("00HCHHCHCCC",0.01,"auto"),("00HCHCHHCCC",0.01,"auto"),("00HCCHCHCHC",0.01,"auto"),("00CHCCCHCHH",0.01,"auto"),("00CCHCHHCHC",0.01,"auto")]

miscNines : [(String,Float,String)]
miscNines =  [("HCCH00CHHCC",0.01," C win")
             ,("0HC0CCCHHCH",0.01,"wherever H plays, C moves in")
             ,("0CCCHCHCHH0",0.01,"wherever H plays, C moves in")
             ,("H0CCCCCHH0H",0.01,"wherever H plays, C moves in")
             ,("HCHCCCHHC00",0.01," this is a Resign position for H - MANEUVER-03")
             ,("CHC0H0CHCHC",0.99," opens the way for H to place final token in {6}, C must resign MANEUVER-01")
             ,("CHCHC0H0CHC",0.99," opens the way for H to place final token in {6}, C must resign MANEUVER-02")
             ,("HCHCCCH00CH",0.99," opens the way for H to place final token in {9}, C must resign MANEUVER-04")
             ,("HCHCCCH0HC0",0.99," opens the way for H to place final token in {11}, C must resign MANEUVER-04")
             ,("CCCHC0CHH0H",0.99," opens the way for H to place final token in {6}, C must resign MANEUVER-05")]
-----------
nineplays = goodNines ++ badNines ++ miscNines -- |> nub
               
{-10 plays 
when H plays his move, below is where
he wants (or doesn't want) to arrive at
"A" is to play the next move from here
to f ind the equivalent boards for H we run oppositePlays-}

tenPlays : [(String,Float,String)]
tenPlays =    [("0CCCCHHCHHH",0.01," H is forced {6}->{1}; C {8}->{6} and H is on a loser ")
              ,("H0HCHCHCHCC",0.05," H is forced round the board to inevitable defeat") -- i dont know why this move is not automatic
              ,("0CCCHHHCCHH",0.01," H has only viable {5}->{1}; C {2}->{5} and whatever H does is doomed ")
              ,("0CCCHHHCHCH",0.99," H {5}->{1}; C only chance {2}->{5}; H {1}->{2} corners him")
              ,("0CCHCCCHHHH",0.01," H is forced; C swoops ")
              ,("0CCHCCHCHHH",0.99," H is forced to {1}; C only viable move is {5}->{4}; H {10}->{5}; Resign position for C ")
              ,("0CCHCCHHHHC",0.01," H forced to {1}; C wins it {6}->{4}")
              ,("0CCHCHHCCHH",0.01," H only viable has {4}->{1}; C {2}->{4} then whatever H does is doomed ")
              ,("0CCHCHHHCHC",0.01," H has two moves both lead to instant defeat ")
              ,("0CCHHCHCHCH",0.99," H moves {4}->{1} which is a resign position for C ")
              ,("0CHCCHHCHCH",0.01," H forced {6}->{1}; C moves {4}->{6} which is a resign position for H ")
              ,("0CHCCHHHCCH",0.01," H forced {6}->{1}; C moves {4}->{6} ; H forced {1}->{4}; C wins ")
              ,("0CHCHCHHCCH",0.01," H forced {5}->{1}; C moves {4}->{5} ; H forced {1}->{4}; C wins ")
              ,("0CHCHHCCCHH",0.01," H forced {6}->{1}; C moves {4}->{6} ; both C moves are fatal ")
              ,("0CHCHHHCCCH",0.99," H plays {6}->{1} and whatever C does he loses in 2 moves ")
              ,("0CHCHHHCHCC",0.99," H plays {6}->{1} and whatever C does he loses in 2 moves ")
              ,("0CHHCCCCHHH",0.02," H forced 4->1; C wins with 2->4 ")
              ,("0CHHCCHHCHC",0.0," H forced 4->1; H swoops 6->4 ")
              ,("0CHHCCHHHCC",0.01," H only viable {4}->{1}; C only has {2}->{4}; then whatever H does is doomed ")
              ,("0CHHHCCHCHC",0.01," H has two moves both fatal ")
              ,("0CHHHCHHCCC",0.01," H only viable {4}->{1}; C {9}->{4}; H only viable {5}->{9}; H {4}->{5}; both H moves doomed ")
              ,("0CHHHHCCCCH",0.99," H plays {6}->{1} and whatever C does he loses in 2 moves ")
              ,("0HCCCHHCHCH",0.01," H has 2 moves which lead to defeat in 4 moves")
              ,("0HCCHCHCHHC",0.01," H has moves from {2} delayed defeat or {5} immediate defeat ")
              ,("0HCCHCHHCHC",0.01," H has move from {2}; C wins in 2 moves; or from {5}; C wins in 2 or 3 ")
              ,("0HCCHCHHCHC",0.01," H has two choices, both lead straight to a Resign position")
              ,("0HCCHHCCHHC",1.0," H would move 6 to 1 ")
              ,("0HCCCHHHCHC",0.01," H has 2 options which lead to instant defeat")
              ,("0HCHCHHCCHC",0.01," H has only one viable move; {2}->{1}; C moves {3}->{2}; a Resign position for H ")
              ,("0HCHCHHHCCC",0.99," H works C around the top left corner to win in 3 ")
              ,("0HHCCCHCHCH",0.01," H forced to {1}; C {4}->2 ; H in resign position ")
              ,("0HHCHCCCHCH",0.01," H has two moves; from {5} is instant defeat; from {2} C goes {8}->{2} leaves H in Resign position ")
              ,("0HHCHCHCCCH",0.99," H plays {2}->{1}; C goes from 8 or 4 and must Resign shortly ")
              ,("0HHCHCHCHCC",0.99," H plays {2}->{1}; C goes from 8 or 4 and must Resign shortly ")
              ,("0HHCHHHCCCC",0.99," H plays {2}->{1}; C goes from 8 or 4 and must Resign shortly ")
              ,("0HHHCCCHHCC",0.99," H plays {2}->{1}; C only has bad options; loses in 2 more ")
              ,("0HHHCCHCHCC",0.99," H plays {2}->{1}; H must play {5}->{2}; H {1}->{5}; C must resign ")
              ,("0HHHCHCCCCH",0.99," H {4}->{1}; both C moves lead to destruction in 3 moves ")
              ,("C0CCHHCHCHH",0.01," H {5}->{2}; C [1}->{5} puts H in Resign position")
              ,("C0CCHHHCCHH",0.01," H {5}->{2} faces either of 2 Resign positions")
              ,("C0CHCCCHHHH",0.01," H has two moves; C can then force H to the top of the board a Resign position ")
              ,("C0CHCHCCHHH",0.99," H forced {4} to {2}; that turns out to be a Resign position for C ")
              ,("C0CHCHCHCHH",0.01," H is forced to resign immediately")
              ,("C0CHCHHHCHC",0.95," from here; H will 8->2; leaving C with 2 fatal moves ")
              ,("C0HCHHHCHCC",1.00," H would move 7 to 2 ")
              ,("C0HHCHCCHCH",0.99," H goes {4}->{2} putting C in a Resign position")
              ,("C0HCHCCHHCH",0.99," H can play from {3} or {8} and win in 3")
              ,("CC0CHCCHHHH",0.99," H forced {8}->{3} but the three available C moves are all fatal ")
              ,("CC0HCCCHHHH",0.01," H must fill up p3 from one spot and is immediately beaten ")
              ,("CC0HHHCCHCH",0.01," H is forced and run around the board before defeat in 5")
              ,("CCH0HHCHCHC",0.01," H has two moves both fatal")
              ,("CCHCHC0HHHC",0.99," H {10}->{7} and C falls to defeat in 2")
              ,("CCCCHC0HHHH",0.99," H {10->{7}; C no move; H wins {5}->{10}")
              ,("CCCH0CHHHCH",0.01," whatever H does it leads to defeat in 8 moves")
              ,("CCCHH0CHHHC",0.99," H {9}->{6}; C forced {7}->{9}; H cleans up")
              ,("CCCHH0CHCHH",0.99," H {11}->{6}; C forced {7}->{11} and loses")
              ,("CCCHH0HHCHC",0.01," H has 4 options which lead to defeat in 3")
              ,("CCCHH0HCCHH",0.01," H has 4 options which lead to defeat in the end")
              ,("CCCH0HCHHHC",0.01," H run around the board until defeat")
              ,("CCCHHHCCH0H",0.99," H {5}->{10} and kills him in 1 or 2")
              ,("CCHHHHCC0CH",0.99," H {4}-{9} and C is doomed soon")
              ,("CCH0HCCCHHH",0.01," H has two moves; lose in 1 or 2 moves ")
              ,("CCHCHCH0HCH",0.99," H {8}->{3} and C has two fatal moves")
              ,("CCH0HCHHCHC",0.01," H forced {5}-{4}; C moves {1}->{5} for win ")
              ,("CCHHCCH0HHC",0.99," H {3}->8 and C must lose in 6")
              ,("CCHHH0CHCHC",0.99," H {3} to {6}; C will resign in 2 moves")
              ,("CCCHHHCHHC0",0.01," H run around the board until defeat")
              ,("CCHHHCC0HCH",0.01," H forced around the board and loses in 5")
              ,("CCHHHCCCH0H",0.01," H forced around the board and loses in a few")
              ,("CCHHHCHC0CH",0.01," H forced around the board and loses in 7")
              ,("CCHH0CHHHCC",0.01," H has 2 moves, both will lead to defeat in 4")
              ,("CCHH0HCCHCH",0.98," H goes {5}->{2} putting C in a Resign position")
              ,("CCHHCCH0HCH",0.99," H {3}->8; C doomed")
              ,("CH0HCCCCHHH",0.01," H forced 2->3; C moves 7->2 for win ")
              ,("CH0HCHCCHCH",0.01," H forced 2->3 or 6->3; C moves 7->2 or 7->6 for win ")
              ,("CH0HCHCCHHC",0.01," H forced 2->3 or 6->3; C moves 7->2 or 7->6 for win ")
              ,("CHC0HHCCHCH",1.0," H would move 6 to 4 ")
              ,("CHCHCHHCHC0",0.01," H {6}->{11} and C  cleans him up")
              ,("CHCCCHCH0HH",0.99," H goes 10->9 forcing C to resign ")
              ,("CHCCCHHHC0H",0.99," H 7->10; C forced 3->7; H 8->3; C forced 7->8; H 6->7 wins ")
              ,("CHCCCHHHCH0",0.99," H goes 8-> 11 forcing C to resign ")
              ,("CHCCHHCH0HC",1.0," H moves 10 -> 9 wins it ")
              ,("CHCCHHHCCH0",0.95," H 10->11; C forced 9->10; H 6->9 ")
              ,("CHCH0CCHHCH",0.01," H must move from {2} and gets clobbered")
              ,("CHHHHH0CCCC",0.99," H {3}->{7} and C loses")
              ,("CHHH0HCCCHC",0.99," C loses in 5")
              ,("CHHHC0CCCHH",0.99," C loses in 7")
              ,("CHHHHCCH0CC",0.01," Whatever H does, loses in 8 or 9")
              ,("C0HHCCCHCHH",0.99," C loses in 9")
              ,("CCHHCCH0CHH",0.99," C loses in 11")
              ,("H0HCCCCCHHH",0.99,"auto")
              ,("HC0CCCCHHHH",0.99,"auto")
              ,("HCCCCCHHH0H",0.99,"auto")
              ,("HCCCHCHHHC0",0.99,"auto")
              ,("HCCCHHH0HCC",0.99,"auto")
              ,("HHCCHH0CHCC",0.99,"auto")
              ,("HHCHCHHCCC0",0.98," H {6}->{11} and C slumps to defeac")
              ,("CHCH0CHCCHH",0.99," H would move {10}->{5} ")
              ,("CHCHCCCHHH0",0.01," H only one viable and gets clobbered")
              ,("CHCH0HCHCHC",0.99," H goes {4}->{5}; leaves C with 2 fatal moves ")
              ,("CHCHCHCCHH0",0.99," H goes {10}->{11} fatal for C ")
              ,("CHCHCHCC0HH",0.99," H {10}->{5} fatal for A")
              ,("CHCHC0CHHHC",0.99," H {9}->{6} and C is lost in 4 moves")
              ,("CHCHC0CHCHH",0.99," H {9}->{6} and C is lost in 4 moves")
              ,("CHCHHHC0CHC",0.01," H has two moves, both fatal - MANEUVER-04")
              ,("CHCHHHCHCC0",0.99," H {8}->{11}; C is doomed")
              ,("CHH0CHCHCHC",0.01," H loses directly if {2}->{4}; if {6}->{4}, countered by winning C {9}->{6}")
              ,("CHHCCCH0HCH",1.00," H would move 2 to 8 ")
              ,("CHHH0CHCHCC",0.99," H {4}->{5}; C either loses immediately or goes to a Resign position")
              ,("CHHH0CCHCHC",0.01," H has three moves which are all fatal or Resign positions")
              ,("CHHHCCCH0HC",0.01," either of H 's two moves are fatal ")
              ,("CHHHCHC0CHC",0.99," leads to a win in 2 ")
              ,("CHHHHHC0CCC",0.99," H {2}->{5} and C is eventually doomed")
              ,("H0CCCHHCHCH",0.99," H will move 1->2 then C 's forced moves are fatal ")
              ,("H0HCHCCCHCH",0.99," H will play 1->2; both subsequent C moves are fatal ")
              ,("HC0CHCCHCHH",0.01," H must play 8->3 and is immediately beaten ")
              ,("HC0CHCHCCHH",0.01," H must play 7->3 and is immediately beaten ")
              ,("HC0CHCHCHCH",0.01," H [7->3}; C {4}->{5}; H must resign")
              ,("HC0HCCCHCHH",0.01," H must play 8->3 and is immediately beaten ")
              ,("HC0HHCHCCCH",0.01," H {7}->{3}; C {8}->{7} fatal for A")
              ,("HC0HCCHHCCH",0.99," H {8}->{3} leaving C to resign")
              ,("HCC0CHCHCHH",0.01," H only viable from {1}; H{2}->{1}; H must resign")
              ,("HCCC0HHCCHH",0.99," H [10}->{6} and C falls to defeat in 5")
              ,("HCCCC0HHHCH",0.99," H goes 8->6 forcing C to resign ")
              ,("HCCCCHH0HCH",0.01," H {7}->{8}; C {10}->{7} puts H in a Resign position")
              ,("HCCCCCH0HHH",0.01," if H moves {11}->{8} C wins immediately. From {7} to {8} it's a 2-move win ")
              ,("HCCCCCHHH0H",0.01," H forced {7}->{10}; C {1}->{7}; C forced and H cleans up")
              ,("HCCCH0HCHCH",0.99," H will move 9->6 then C 's forced moves are fatal ")
              ,("HCCH0CHHCCH",0.99," H {1}->{5} leaving C to resign")
              ,("HCH0CCCHHHC",0.01," H has two moves both fatal ")
              ,("HCH0CCHCHCH",0.01," H has two moves both lead to instant defeat ")
              ,("HCH0CCHHCCH",0.01," H forced C swoops ")
              ,("HCH0CCHHHCC",0.01," Resign position - H forced {1}->{4}; C wins with {2}->{1} ")
              ,("HCH0HCCCCHH",0.01," either of H 's two moves are fatal ")
              ,("HCH0HCHCCCH",0.99," H {1}->{4}; both H moves fatal")
              ,("HCH0HHHCCCC",0.99," H {1}->{4}; H forced to fatal")
              ,("HCHCHCCHC0H",0.99," H {11}->{10} and C loses in 3")
              ,("HCHCCHHCH0C",0.99," H will go 9-> 10 forcing C to resign ")
              ,("HCHCH0HCCCH",0.98," H {11}->{6} and on his way to a win")
              ,("HCHCHCH0CCH",0.99," H {3}-> {8}; both C moves fatal")
              ,("HCHCHCHH0CC",0.01," H must play {7} (instant defeat or {5} (two-move defeat)")
              ,("HCHH0CHCHCC",0.99," H {1}->{5} and cleans up in 2 moves")
              ,("HCHHCCCCHH0",0.01," H is forced and crumbles to defeat")
              ,("HCHH0CCCHCH",0.99," H moves from {1} leaving C with two fatal options")
              ,("HCHH0HHCCCC",0.99," H {1}->{5} and C doomed in 3")
              ,("HCHHCC0CHCH",0.99," H moves from {3} leaving C with two fatal options")
              ,("HCHHCCC0CHH",0.01," H has two moves both fatal ")
              ,("HCHHHCHCC0C",0.01," H has two moves both fatal ")
              ,("HH0CCCHCHCH",0.01," H {2}->{3}, C {4}->{2} puts H in a Resign position")
              ,("HH0CCHCCCHH",0.01," H must fill up p3 from one spot and is immediately beaten ")
              ,("HH0CHHCCCCH",0.01," H must {6}->{3} and is beaten in 5")
              ,("HH0CHHCCCHC",0.01," H has 2 fatal moves")
              ,("HHH0CHCCCHC",0.99," H is forced but there's an inevitable H win in 6 moves")
              ,("HHHC0CHCHCC",0.99," H {2}->{5} and C is in a Resign position")
              ,("HHHC0CCCHCH",0.99," H {1}->{5} and C tumbles to defeat")
              ,("HHC0CHCCHHC",0.99," H {1}->{4} and C is doomed")
              ,("HHC0CHCCCHH",0.98," H {1}->{4} and C is doomed")
              ,("HHHC0CCHHCC",0.99," H {1}->{5} and C is doomed")
              ,("HHC0CCHHCHC",0.01," H has 2 moves which are both quickly fatal")
              ,("HHC0CHHHCCC",0.99," H {1{->{4} and C is doomed")
              ,("HHCCCHCC0HH",0.99," H {10}->{9} and C will resign in 2 moves")
              ,("HHCCCHCCHH0",0.99," H {10}->{11} and C is doomed")
              ,("HHCCCHHCHC0",0.99," H {7}->{1} and C on the way to defeac")
              ,("HHCHC0CCHCH",0.99," H 1->6; C forced 5->1; H 6->5 ")
              ,("HHCHCHCCC0H",0.01," H forced {11}->{10}; C wins with {5}->{11}")
              ,("HH0HCHCCCHC",0.01," H has two moves, one instantly fatal, the other in 2 moves")
              ,("HHHC0CHCCCH",0.99," H {2} to {5} and C will resign")
              ,("HHHC0CHCHCC",0.99," H {2} to {5} and C will resign")
              ,("HHHCHCCC0CH",0.01," H forced {5}->{9}; C cleans up")
              ,("HHCHC0CCHHC",0.99," H {1}->{6}; C forced around into defeac")
              ,("HHCHCHCHC0C",0.0," H doesn't have a play C cleans him up ")
              ,("HHHC0HCCCCH",0.99," H {1}->{5}; C forced and loses")
              ,("HHHC0HHCCCC",0.99," H goes {1}->{5}; a Resign position ")
              ,("HHHCHCCCH0C",0.98," H {9}->{10}; C slumps to eventual defeat")
              ,("HHHCHCHCC0C",0.01," H has 2 symmetrical moves, both lose instantly")
              ,("HHHCCHCC0CH",0.98," H {6}->{9} and the resulting symmetrical board is doom for C ")
              ]
