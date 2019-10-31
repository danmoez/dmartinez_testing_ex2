var request=require("request");

module.exports = {
    '@tags': ['test_1'],
    "Navigate to a product created via API" : function (client) {
    const product_page = client.page.product();
    const page = client.page.main();

    var product = 'dmartinez';
    var product_url= '/product/dmartinez/';
    var productQty= '7';
    var cart_url = 'cart';
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

    before: request(options, callback);

    page
        .navigate()

    const mainPageHeader = `#masthead`;
    client.assert.visible(mainPageHeader, 'UI: Main Page Visible');

    client
        .url("http://34.205.174.166"+product_url);

    const product_page_ui = `//*[contains(@class, 'product-type-simple')]`;
    client.useXpath();
    client.assert.visible(product_page_ui, 'UI: Product Page is Visible');
    client.useCss();

    product_page
        .setProductQty(productQty);

    client
        .keys(client.Keys.ENTER);
    
    const cart_qty = `//a[@class='cart-contents']/span[@class='count']`;
    client.useXpath();
    client.assert.containsText(cart_qty, productQty, 'UI: Cart Quantity Updated');
    client.useCss();

    product_page
        .goToCart();

    client.assert.urlContains(cart_url, 'Params: URL of Cart is Displayed');

    const product_cart = `//td[@class='product-name']/a`;
    client.useXpath();
    client.assert.containsText(product_cart, product, 'UI: Product in Cart visible');
    client.useCss();
    client.pause(9000);


    afterEach : product_page
        .deleteViaAPI();

    page
        .navigate()

    client.assert.visible(mainPageHeader, 'UI: Main Page Visible');    

    }
}