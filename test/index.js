const chai = require('./chai.js');
const expect = chai.expect;
const mock = require('mock-fs');
const fs = require('fs');
const Validator = require('..');

describe('index', function() {
    var result, validator;
    it('should respect rules config', function() {
        validator = Validator({});
        result = validator.validate('<html></html>');
        expect(result).to.have.lengthOf(0);
    });
    it('should use default rules when not set', function() {
        validator = Validator();
        result = validator.validate('<html></html>');
        expect(result).to.have.length.above(0);
    });
    it('should export default rules', function() {
        rules = Validator.rules;
        expect(rules).to.be.an('object');
    });
    it('should return first error only in fast mode', function() {
        validator = Validator(null, {
            fast: true
        });
        result = validator.validate('<html></html>');
        expect(result).to.have.lengthOf(1);
    });
});
