describe('e2e tests multi-patterns-mask', function () {
    var elems = element.all(by.css('.form-control'));
    var first = elems.first();
    var second = elems.last();

    beforeEach(function () {
        browser.get('http://output.jsbin.com/fesusu/1');
    });

    it('should be defined', function () {
        expect(first).toBeDefined();
        expect(second).toBeDefined();
    });

    it('check first mask. should be 1920 after enter 1920', function () {
        first.sendKeys(1920);
        expect(first.getAttribute('value')).toEqual('1920');
    });

    it('check first mask. should be 2 after enter 2888', function () {
        first.sendKeys(2888);
        expect(first.getAttribute('value')).toEqual('2');
    });

    it('check first mask. should be 2000 after enter 200000000000', function () {
        first.sendKeys(200000000000);
        expect(first.getAttribute('value')).toEqual('2000');
    });

    it('check second mask. should be Ivan after enter Ivan', function () {
        second.sendKeys("Ivan");
        expect(second.getAttribute('value')).toEqual("Ivan");
    });

    it('check second mask. should be Sam after enter Sam', function () {
        second.sendKeys("Sam");
        expect(second.getAttribute('value')).toEqual("Sam");
    });

    it('check second mask. should be "" after enter ivan', function () {
        second.sendKeys("ivan");
        expect(second.getAttribute('value')).toEqual("");
    });
});