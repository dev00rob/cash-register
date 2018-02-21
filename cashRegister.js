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
    const cashDue = getCashDue(cash, price);
    let drawer = getDrawerTotal(cid);
    // console.log(drawer + " available cash, " + cashDue + " cash due");

    if (drawer === cashDue) { return console.log("Closed"); }
    if (drawer < cashDue) { return console.log("Insufficient Funds"); }

    let tmpCashDue = cashDue;
    const DENOMS_IN_CENTS = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
    let denomsInDrawer = addDenomCount(DENOMS_IN_CENTS, cid);
    let changeArray = setupChange(cid);

    for (let i = cid.length - 1; i > -1; i--) {
        let nextDenomValue = DENOMS_IN_CENTS[i] / 100,
            nextDenomCount = denomsInDrawer[i];
        if (nextDenomValue < tmpCashDue && nextDenomCount > 0) {
            for (let j = nextDenomCount; j > 0; j--) {
                let denomTry = parseFloat((nextDenomValue * j).toFixed(2));
                if (tmpCashDue >= denomTry) {
                    changeArray[i][1] = denomTry;
                    tmpCashDue = parseFloat((tmpCashDue - denomTry).toFixed(2));
                    break;
                }
            }
        }
    }

    let change = getDrawerTotal(changeArray);
    // console.log(change, "change", cashDue, "cashDue");
    if (change != cashDue) { return console.log("Insufficient Funds"); }

    return console.log(changeArray);

}

function getCashDue(casho, priceo) {
    return parseFloat((casho - priceo).toFixed(2));
}

function getDrawerTotal(cido) {
    let casho = 0;
    for (let i = 0, x = cido.length; i < x; i++) {
        casho += parseInt((cido[i][1] * 100).toFixed(0), 10);
    }
    return parseFloat((casho / 100).toFixed(2));
}

function addDenomCount(allDenomsInCents, drawer) {
    let result = [];
    for (let i = 0, x = drawer.length; i < x; i++) {
        result[i] = ((Math.round((drawer[i][1]) * 100)) / allDenomsInCents[i]);
    }
    return result;
}

function setupChange(ciddy) {
    let result = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];
    for (let i = 0, x = ciddy.length; i < x; i++) {
        result[i][0] = ciddy[i][0];
        result[i][1] = 0;
    }
    return result;
}

// checkCashRegister(3.26, 100, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.10],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
// ]);


// Should return: 
//   [ [ "TWENTY" , 60], [ "TEN" , 20], [ "FIVE" , 15], [ "ONE" , 1],
//     [ "QUARTER" , 0.5], [ "DIME" , 0.2], [ "PENNY" , 0.04] ]


// checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
// ]);

// Should return: "Insufficient Funds"

// checkCashRegister(19.5, 20, [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
// ]);

// Should return: "Closed"
