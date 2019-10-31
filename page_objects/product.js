var request=require("request");

module.exports = {
    elements: {
        product_qty: '.qty',
        cart_contents: '.cart-contents',
    },
    commands: [{
        setProductQty(productQty) {
            return this
                .clearValue('@product_qty')
                .setValue('@product_qty', productQty);
        },
        goToCart() {
            return this
                .click('@cart_contents');
        },
        deleteViaAPI() {        
            var headers = {
            'Accept': '*/*',
            'Authorization': 'Basic c2hvcG1hbmFnZXI6RHV1eCBQSUVkIGVVbEsgTG1pbiBjUjNjIDVpMWg=',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Host': '34.205.174.166',
            'Postman-Token': '22259254-d885-485f-92a6-b10d1a328906,cbb63f5a-896a-40ac-904e-d54b9afbfa37',
            'User-Agent': 'PostmanRuntime/7.11.0',
            'accept-encoding': 'gzip, deflate',
            'cache-control': 'no-cache',
            'content-length': ''
            };

            var options = {
            url: 'http://34.205.174.166/wp-json/wc/v3/products/277?consumer_key=consumer_secret&force=true',
            method: 'DELETE',
            headers: headers
            };

            function callback(error, response, body) {
            if (response.statusCode == 200) {
                console.log(body);
                }
            }

            request(options, callback);


            },
        createViaAPI() { 
            var headers = {
            'Authorization': 'Basic c2hvcG1hbmFnZXI6RHV1eCBQSUVkIGVVbEsgTG1pbiBjUjNjIDVpMWg=',
            'Content-Type': 'application/json',
            'Postman-Token': 'd2b63910-a940-4e2e-9c18-673d3fd28388',
            'cache-control': 'no-cache'
            };

            var options = {
            url: 'http://34.205.174.166/wp-json/wc/v3/products?consumer_key=consumer_secret&name=dmartinez&type=simple&regular_price=5&description=Sample&short_description=Testing',
            method: 'POST',
            headers: headers
            };

            function callback(error, response, body) {
                if (!error && response.statusCode == 200) {
                console.log(body);
            }
        }

        request(options, callback);

        },
    }]
};