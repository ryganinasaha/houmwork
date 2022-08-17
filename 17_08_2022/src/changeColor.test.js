const change = require('./changeColor');

test('Должен менять цвет у строки', () => {
    
    expect(change('', 'green', 'red')).toBe('')
    expect(change(undefined, 'green', 'red')).toBe('')
    expect(change('green', 'green', 'red')).toBe('red')
    expect(change('green green', 'green', 'red')).toBe('red red')
    expect(change('green  small', 'green', 'red')).toBe('red  small')
    expect(change(' green  small', 'green', 'red')).toBe(' red  small')
    expect(change('green small', 'green', 'ping')).toBe('ping small')
    expect(change('green small', 'green', 'red')).toBe('red small')
    

    expect(change('GREEN small', 'green', 'red', true)).toBe('red small')
    expect(change('green small', 'GREEN', 'red', true)).toBe('red small')
    
});


