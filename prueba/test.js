// importar la función sum del archivo app.js
const { sum } = require('./app.js');

describe('sum', ()=> {
    // comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

})


test('adds 11 + 12 to equal 23', () => {
    const a = 11;
    const b = 12;
    const result = 23;

    const total = sum(a,b)

    expect(total).toBe(result)

})



test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 103.4 Yens", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // hago mi comparacion (prueba)
    expect(fromDollarToYen(15)).toBe(1599); //1 dolar son 106.6 yens, entonces 15 dolares deberian ser = (15 * 106.6)
})

test("159.8 yens should be one pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    //hago mi comparacion(prueba)
    expect(fromYenToPound(799)).toBe(5); //159.8 yens son 1 libra, entonces 799 libras deberian ser  = (799 / 159.8)
})

