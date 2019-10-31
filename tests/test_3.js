var request=require("request");

module.exports = {
    '@tags': ['test_3'],
    "Navigate to a product created via API and apply disccount coupon" : function (client) {
    const product_page = client.page.product();
    const page = client.page.main();

    var product = 'dmartinez';
    var product_url= '/product/dmartinez/';
    var productQty= '7';
    var cart_url = 'cart';
    var coupon_name = '100off_daniel';

    product_page
        .createViaAPI();
    product_page
        .createCuponViaAPI();
    client.refresh();

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
    

    product_page
        .goToCart();

    client.assert.urlContains(cart_url, 'Params: URL of Cart is Displayed');

    const product_cart = `//td[@class='product-name']/a`;
    client.useXpath();
    client.assert.containsText(product_cart, product, 'UI: Product in Cart visible');
    client.useCss();
    client.pause(9000);

    product_page
        .setCouponCode(coupon_name);

    product_page
        .clickApplyButton();    


    client.pause(9000);

    const couponAppliedNotification = `//div[@class='woocommerce-message']`;
    client.useXpath();
    client.assert.visible(couponAppliedNotification, 'UI: Coupon Applied Notification');  
    client.useCss();

    page
        .navigate()

    client.assert.visible(mainPageHeader, 'UI: Main Page Visible');  

    },
    "After API Delete Product and Code Coupon" : function (client) {
    
    const product_page = client.page.product();
    product_page
        .deleteViaAPI();

    product_page
        .deleteCuponViaAPI();

    }
}