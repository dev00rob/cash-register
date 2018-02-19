/*
Cash Register:

Design a cash register drawer function checkCashRegister() that accepts 
purchase price as the first argument (price), payment as the second argument 
(cash), and cash-in-drawer (cid) as the third argument.

Cash-in-drawer (cid) is a 2D array listing available currency. Example of 2D 
array [ [ ], [ ] ], an array of arrays.


Objective:

Return the string "Insufficient Funds" if cash-in-drawer is less than the 
change due or if you cannot return the exact change. Return the string 
"Closed" if cash-in-drawer is equal to the change due. Otherwise, return 
change in coin and bills, sorted in highest to lowest order. Each time you 
get a small part of the register working create a commit to mark that moment 
in time.
 */

function checkCashRegister(price, cash, cid) {

}

/*
checkCashRegister(3.26,100,[
    [ "PENNY" ,  1.01 ], 
    [  "NICKEL" ,  2.05  ], 
    [  "DIME" , 3.10  ], 
    [ "QUARTER" ,  4.25 ], 
    [ "ONE" ,  90 ],
    [ "FIVE" ,  55 ], 
    [  "TEN",   20  ], 
    [  "TWENTY" ,  60  ], 
    [  "ONE HUNDRED" ,  100  ] 
]);

/*
  Should return: 
  [ [ "TWENTY" , 60], [ "TEN" , 20], [ "FIVE" , 15], [ "ONE" , 1],
    [ "QUARTER" , 0.5], [ "DIME" , 0.2], [ "PENNY" , 0.04] ]
 
 
checkCashRegister(19.5,20, [
    [ "PENNY" ,  0.01 ], 
    [ "NICKEL" ,  0 ], 
    [ "DIME" ,  0 ], 
    [ "QUARTER",   0 ], 
    [ "ONE" ,  0 ], 
    [ "FIVE" ,  0 ], 
    [ "TEN" ,  0 ], 
    [ "TWENTY" ,  0], 
    [ "ONE HUNDRED" ,  0 ]
]);

// Should return: "Insufficient Funds"

checkCashRegister(19.5,20,[
    [ "PENNY" ,  0.5 ], 
    [ "NICKEL" ,  0 ], 
    [ "DIME" ,  0 ], 
    [ "QUARTER" ,  0], 
    [ "ONE" ,  0 ], 
    [ "FIVE" ,  0 ], 
    [ "TEN" ,  0 ], 
    [ "TWENTY" ,  0], 
    [ "ONE HUNDRED" ,  0 ]
]);

// Should return: "Closed"
 */
