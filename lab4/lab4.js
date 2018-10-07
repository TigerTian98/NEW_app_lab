/*
This is a program
used to calculate the correlation between
what color of clothes a customer wears
and whether they are a member of Starbucks.

Below are the statistics.
*/

const customers = [
{color: `floral`, membership: false},
{color: `black`, membership: false},
{color: `blue`, membership: false},
{color: `gray`, membership: true},
{color: `pink`, membership: true},

{color: `white`, membership: true, physicalCard: true},
{color: `white`, membership: false},
{color: `gray`, membership: true},
{color: `white`, membership: true},
{color: `black`, membership: true},

{color: `black`, membership: false},
{color: `black`, membership: true, physicalCard: true},
{color: `white`, membership: false},
{color: `black`, membership: false},
{color: `blue`, membership: true},

{color: `blue`, membership: true},
{color: `green`, membership: true},
{color: `pink`, membership: true},
{color: `blue`, membership: true},
{color: `blue`, membership: true},

{color: `pink`, membership: true},
{color: `white`, membership: true},
{color: `blue`, membership: true},
{color: `pink`, membership: false},
{color: `black`, membership: false},

{color: `stripe`, membership: true},
{color: `white`, membership: true},
{color: `black`, membership: false},
{color: `black`, membership: true},
{color: `black`, membership: false},

{color: `stripe`, membership: false},
{color: `white`, membership: false},
{color: `blue`, membership: true, physicalCard: true},
{color: `black`, membership: true, physicalCard: true},
{color: `stripe`, membership: true},

{color: `black`, membership: false},
{color: `yellow`, membership: true},
{color: `purple`, membership: false},
{color: `black`, membership: true, physicalCard: true},
{color: `black`, membership: false},

{color: `red`, membership: true},
{color: `pattern`, membership: true},
{color: `pattern`, membership: true},
{color: `white`, membership: true},
{color: `red`, membership: true},

{color: `grey`, membership: false},
{color: `black`, membership: true, physicalCard: true},
{color: `red`, membership: true},
{color: `white`, membership: true, physicalCard: true},
{color: `black`, membership: true, physicalCard: true}

];

/*
We're going to do some classification first
by putting black, white, and gray in one category
and all the other colors in another.

Let's call the first category "dull colors",
the other one "bright colors".
*/

for (i = 0; i < customers.length; i ++) {
    if (customers[i].color == `black` ||
        customers[i].color == `white` ||
        customers[i].color == `gray`) {

        customers[i].colorType = `bwg`;
        //stands for "black/white/gray"

    } else {

        customers[i].colorType = `clf`;
        //stands for "colorful"
    }
}

/*
Then we make the computer count the customers for us.
We need to know
the number of members wearing dull colors,
the number of non-members wearing dull colors,
the number of members wearing bright colors,
and the number of non-members wearing bright colors.
*/


let bwg = 0;
let bwg_mb = 0;
let clf_mb = 0;

for (i = 0; i < customers.length; i ++) {
    if (customers[i].colorType == `bwg`) {

        bwg ++;
        if (customers[i].membership == true) {
            
            bwg_mb ++;

        }

    } else {

        if (customers[i].membership == true) {
            clf_mb ++;
        }

    }
}

let bwg_nmb = bwg - bwg_mb;
let clf = customers.length - bwg;
let clf_nmb = clf - clf_mb;

/*
According to a formula that we learnt in high school,
we can simply put in out statistics
and get a result called Chi-square.
Below is the formula.
*/

let a = bwg_mb;
let b = bwg_nmb;
let c = clf_mb;
let d = clf_nmb;
let n = customers.length;

let chi_square = n * (a * d - b * c) * (a * d - b * c) / ((a + b) * (c + d) * (a + c) * (b + d));

/*
Now that we've got this Chi-square,
we can figure out how related these two variables are
by comparing the Chi-square with some certain values
and checking which interval it falls into.
*/

let p = 0;
if (chi_square < 0.455) {
    p = 50;
} else if (chi_square < 0.708) {
    p = 40;
} else if (chi_square < 1.323) {
    p = 25;
} else if (chi_square < 2.072) {
    p = 15;
} else if (chi_square < 2.706) {
    p = 10;
} else if (chi_square < 3.841) {
    p = 5;
} else if (chi_square < 5.024) {
    p = 2.5;
} else if (chi_square < 6.635) {
    p = 1;
} else if (chi_square < 7.879) {
    p = 0.5;
} else {
    p = 0.1;
}

/*
Finally, print out all the statistics.
*/

console.log (`We observed ${n} customers in total.`)
console.log (`${a} of them were dressed in dull colors and are members.`)
console.log (`${b} of them were dressed in dull colors and aren't members.`)
console.log (`${c} of them were dressed in bright colors and are members.`)
console.log (`${d} of them were dressed in bright colors and aren't members.`)
console.log (`There is a possibility of ${100 - p}% that the two variables are related.`)