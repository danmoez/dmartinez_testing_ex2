var request=require("request");

module.exports = {
    elements: {
        product_qty: '.qty',
        cart_contents: '.cart-contents',
        coupon_code: '#coupon_code',
        apply_coupon_button: "//div[@class='coupon']/button",
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
        setCouponCode(coupon_name) {
            return this
                .setValue('@coupon_code', coupon_name);
        },
        clickApplyButton() {
            return this
                .useXpath()
                .click(`//div[@class='coupon']/button`)
                .useCss();
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
            url: 'http://34.205.174.166/wp-json/wc/v3/products/292?consumer_key=consumer_secret&force=true',
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

        createCuponViaAPI() {
            var headers = {
            'Accept': '*/*',
            'Authorization': 'Basic c2hvcG1hbmFnZXI6RHV1eCBQSUVkIGVVbEsgTG1pbiBjUjNjIDVpMWg=',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Host': '34.205.174.166',
            'Postman-Token': 'a41b4231-2c42-4cba-bff1-4d52c2ec49ee,b3c29ebf-eabd-49c4-8110-65b2baf2aa64',
            'User-Agent': 'PostmanRuntime/7.11.0',
            'accept-encoding': 'gzip, deflate',
            'cache-control': 'no-cache',
            'content-length': ''
            };

            var options = {
                url: 'http://34.205.174.166/wp-json/wc/v3/coupons?code=100off_daniel&discount_type=percent&amount=100&minimum_amount=30',
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

        deleteCuponViaAPI() {
            var headers = {
            'Accept': '*/*',
            'Authorization': 'Basic c2hvcG1hbmFnZXI6RHV1eCBQSUVkIGVVbEsgTG1pbiBjUjNjIDVpMWg=',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Host': '34.205.174.166',
            'Postman-Token': 'a6716b2f-46d2-43f0-bcc0-e33f0d6f6fb4,02ad499e-ea85-4581-9a85-6c60e74de7d6',
            'User-Agent': 'PostmanRuntime/7.11.0',
            'accept-encoding': 'gzip, deflate',
            'cache-control': 'no-cache',
            'content-length': ''
            };

            var options = {
                url: 'http://34.205.174.166/wp-json/wc/v3/coupons/279?force=true',
                method: 'DELETE',
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