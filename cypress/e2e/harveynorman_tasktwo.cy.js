// Identify the request that returns stores when you do stock check for the postcode - 2020
// request URL: https://www.harveynorman.com.au/svc/sfapi/storeListAndDeliveryCost?query=%20query%20storeListAndDeliveryCost(%24postcode%3A%20String!%2C%20%24sku%3A%20String!%2C%20%24region%3A%20String!%2C%20%24city%3A%20String!%2C%20%24pickup%3A%20Boolean%2C%20%24delivery%3A%20Boolean%2C%20%24ask_question_stores%3A%20Boolean)%20%7B%20storeListAndDeliveryCost(postcode%3A%20%24postcode%2C%20sku%3A%20%24sku%2C%20region%3A%20%24region%2C%20city%3A%20%24city%2C%20pickup%3A%20%24pickup%2C%20delivery%3A%20%24delivery%2C%20ask_question_stores%3A%20%24ask_question_stores)%20%7B%20__typename%20delivery%20%7B%20__typename%20label%20message%20error%20shipping_cost%20%7B%20__typename%20currency%20value%20%7D%20%7D%20pickup%20%7B%20__typename%20error%20message%20items%20%7B%20__typename%20address%20distance%20id%20latitude%20longitude%20name%20phone%20stock_status%20stock_can_reserve%20pickup_data%20%7B%20title%20content%20is_available%20%7D%20trading_hours%20extended_hours%20%7D%20%7D%20ask_question_stores%20%7B%20__typename%20error%20message%20items%20%7B%20__typename%20id%20name%20phone%20distance%20latitude%20longitude%20%7D%20%7D%20%7D%20%7D%20&variables=%7B%22postcode%22%3A%222020%22%2C%22region%22%3A%22486%22%2C%22sku%22%3A%22OLED65C5PSA%22%2C%22city%22%3A%22MASCOT%22%2C%22pickup%22%3Atrue%2C%22delivery%22%3Atrue%2C%22ask_question_stores%22%3Atrue%7D

//Name the request method for the above request.
GET

//Validate if the number of stores displayed to the customer is as per the response.
items: [{__typename: "Store", id: 637, name: "HN @ DM Alexandria", phone: "02 8339 7000", distance: 2,…},…]
0: {__typename: "Store", id: 637, name: "HN @ DM Alexandria", phone: "02 8339 7000", distance: 2,…}
1: {__typename: "Store", id: 47, name: "Moore Park", phone: "02 9662 9888", distance: 4,…}
2: {__typename: "Store", id: 116, name: "Broadway", phone: "02 9219 5200", distance: 5,…}
3: {__typename: "Store", id: 189, name: "Bondi Junction", phone: "02 8305 8800", distance: 7,…}
4: {__typename: "Store", id: 44, name: "Wiley Park", phone: "02 9740 1100", distance: 10,…}
5: {__typename: "Store", id: 74, name: "Caringbah", phone: "02 9589 8800", distance: 11,…}
6: {__typename: "Store", id: 633, name: "HN @ DM North Ryde", phone: "02 9888 8888", distance: 16,…}
7: {__typename: "Store", id: 20, name: "Flagship Store Auburn", phone: "02 9202 4888", distance: 17,…}
8: {__typename: "Store", id: 67, name: "Balgowlah", phone: "02 9949 0100", distance: 18,…}
9: {__typename: "Store", id: 30, name: "Gordon", phone: "02 9496 9200", distance: 20,…}