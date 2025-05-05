input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    x = Math.constrain(x, 1, 100) - 1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    x = Math.constrain(x, 1, 100) + 1
})
let x = 0
let y = 3
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
x = 1
basic.forever(function () {
    led.plot(x - 1, y - 1)
    led.plot(x - 1, y)
    led.unplot(x, y - 1)
    led.unplot(x, y)
    led.unplot(x - 2, y - 1)
    led.unplot(x - 2, y)
})
basic.forever(function () {
	
})
