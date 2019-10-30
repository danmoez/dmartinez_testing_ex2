module.exports = {
    url: 'http://34.205.174.166/',
    elements: {
        mainQueryInput: 'input[name="as_q"]',
        languageDropdown: '#lr_button',
        lastUpdateDropdown: '#as_qdr_button',
        submitButton: '.jfk-button[type="submit"]',
        search_bar: '.search-field',
    },
    commands: [{
        setSearch(value) {
            return this
                .setValue('@search_bar', value);
        },
        pressEnter() {
            return this
                .keys(browser.Keys.ENTER);
        },
        selectFilter(selector, value) {
            return this
                .click(selector)
                .click(`.goog-menuitem[value="${value}"]`);
        },
        search() {
            return this
                .click('@submitButton');
        }
    }]
};