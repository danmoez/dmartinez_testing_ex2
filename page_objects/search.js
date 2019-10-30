module.exports = {
    elements: {
        product_item: '//h2[text()="Hoodie with Zipper"]',
    },
    commands: [{
        selectProduct(product) {
            return this
                .useXpath() 
                .click(`//h2[text()="${product}"]`)
                .useCss();
        }
    }]
};