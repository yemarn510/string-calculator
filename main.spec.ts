import 'mocha';
import { expect } from 'chai';
import { add } from './main';

describe('String Calculation', () => {
    it('Empty string should return 0', () => {
        const result = add("");
        expect(result).equal(0);
    });

    it('Only one number should return the same number', () => {
        const result = add('2');
        expect(result).equal(2);
    });

    it('"1,2" should return 3', () => {
        const result = add('1,2');
        expect(result).equal(3);
    });

    it('"11," should return 0', () => {
        const result = add('11,');
        expect(result).equal(0);
    });

    it('"111,222" should return 333', () => {
        const result = add('111,222');
        expect(result).equal(333);
    });

    it('"111,aaa" should return 0', () => {
        const result = add('111,aaa');
        expect(result).equal(0);
    });

    it('"aaa,aaa" should return 0', () => {
        const result = add('111,aaa');
        expect(result).equal(0);
    });

    it('"aaa,111" should return 0', () => {
        const result = add('111,aaa');
        expect(result).equal(0);
    });

    it('"1\\n2,3" should return 6', () => {
        const result = add('1\n2,3');
        expect(result).equal(6);
    });

    it('"1,\\n" should return 0', () => {
        const result = add('1,\n');
        expect(result).equal(0);
    });

    it('"//;\\n1;2" should return 3', () => {
        const result = add('//;\n1;2');
        expect(result).equal(3);
    });

    it('"//*\\n2*2" should return 4', () => {
        const result = add('//*\n2*2');
        expect(result).equal(4);
    });

    it('"//*\\n2*-2" should return 0', () => {
        const result = add('//*\n2*-2');
        expect(result).equal(0);
    });

    it('"//*\\n2*1002" should return 2', () => {
        const result = add('//*\n2*1002');
        expect(result).equal(2);
    });

    it('"//[***]\\n2***3***5" should return 10', () => {
        const result = add('//[***]\n2***3***5');
        expect(result).equal(10);
    });

    it('"//[***][+++]\\n2***3+++5" should return 10', () => {
        const result = add('//[***][+++]\n2***3+++5');
        expect(result).equal(10);
    });

    it('"//*\\n2*3*5" should return 10', () => {
        const result = add('//*\n2*3*5');
        expect(result).equal(10);
    });

    it('"//[*][%]\\n1*2%3" should return 6', () => {
        const result = add('//[*][%]\n1*2%3');
        expect(result).equal(6);
    });
    
});
