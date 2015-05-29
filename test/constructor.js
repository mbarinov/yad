var assert = chai.assert,
    expect = chai.expect;

describe('Dropdown', function(){

    describe('Constructor', function(){

        it('Without params', function(){
            expect(function () {
                new Dropdown()
            }).to.throw('Element, cachedResourses and dataSource are required.');
        });

        it('Element should be exist', function () {
           expect(function () {
               new Dropdown('vk-dropdown')
           }).to.throw('Element should be exist');
        });

    })

});
