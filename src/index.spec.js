/**
 * @describe [optional] - group of tests with a header to describe them
 */
const slugger = require('./index');
describe('testing slugger basic functionality', () => {
    /**
     * @it - unit tests can use the 'it' syntax
     */
    it('slugger can slug string with spaces', () => {
        input = slugger("holiday", "tricks");
        expect(input).toEqual("holiday-tricks");
    })
   
})