//CoffeeTawk — by Tiger Tian — applab, lab 1, 2018

/* Assumptions
1. larger demand in Shanghai than New York;
2. lines to order coffee are long;
3. 1 minute or more to take an order;
4. 5 minutes to walk out the door after purchase;
5. payment is quick;
6. most people use AliPay or WeChat Pay;
7. baristas are fast;
8. most people know what to order in advance;
9. a lot of people stand at the register asking questions and holding up the line;
10. business for quick orders is lost.

Validations
4. When a payment is done, start timing.
    When this customer leaves, stop timing.
    Take the data of 50 customers.
    Calculate the average time taken to leave after purchase.
6. a, b, c, d = 0
    IF a customer uses Alipay
        a = a + 1;
    ELSE IF they use WeChat Pay
        b = b + 1;
    ELSE IF they use cash
        c = c + 1;
    ELSE d = d + 1;
    When a + b + c + d = 200, end this loop.
    Calculate how much each payment method is used.

Program
Below is a program used to calculate how much different payment methods are used in a day.
*/

var numOfCustomers = prompt ("How many customers in total have come today?");

var alipayUsers = prompt ("How many customers used Alipay to pay for their coffee today?");
var weChatUsers = prompt ("How many customers used WeChat to pay for their coffee today?");
var cashUsers = prompt ("How many customers used cash to pay for their coffee today?");

var alipayRate = 100 * alipayUsers / numOfCustomers;
var weChatRate = 100 * weChatUsers / numOfCustomers;
var cashRate = 100 * cashUsers / numOfCustomers;

alert (alipayRate + "% of customers today used Alipay to pay for their coffee, while " + weChatRate + "% used WeChat and " + cashRate + "% cash.")