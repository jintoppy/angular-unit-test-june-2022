import { Util } from './util';

describe('Util', () => {
    describe('add', () => {
        it('should add two number', () => {
            const result = Util.add(10, 10);
            expect(result).toBe(20);//matchers
        });
        it('should call log method', () => {
            spyOn(Util, 'log');
            Util.add(10, 10);
            expect(Util.log).toHaveBeenCalledWith('add');
        });
    });
    describe('subtract', () => {
        it('should subtract two numbers', () => {
            const result = Util.subtract(30, 20);
            expect(result).toBe(10);
        });
    });

    describe('log', () => {
        it('should log function Name', () => {
            spyOn(console, 'log');
            Util.log('add');
            expect(console.log).toHaveBeenCalledWith('add:called');
        });
    });
});