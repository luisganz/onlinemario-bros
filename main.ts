input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    x = Math.constrain(x, 1, 100) - 1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    x = Math.constrain(x, 1, 100) + 1
})
let gumber = 0
let x = 0
let hp = 3
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
    if (0 != gumber) {
        if (x - 1 != gumber) {
            led.unplot(x - 2, y - 1)
            led.unplot(x - 2, y)
        }
        if (x + 1 != gumber) {
            led.unplot(x, y - 1)
            led.unplot(x, y)
        }
    }
})
basic.forever(function () {
    if (gumber == x) {
        music.playMelody("- - - - - - - - ", 150)
        hp += -1
    }
    if (hp == 3) {
        basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
    }
    if (hp == 2) {
        basic.setLedColors(0x00ff00, 0x00ff00, 0xff0000)
    }
    if (hp == 1) {
        basic.setLedColors(0x00ff00, 0xff0000, 0xff0000)
    }
    if (hp == 0) {
        basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
        music.playMelody("- - - - - - - - ", 500)
        hp = 3
        y = 3
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        x = 1
    }
})
loops.everyInterval(5000, function () {
    gumber = 5
    led.plot(gumber - 1, 3)
    music.playMelody("- - - - - - - - ", 120)
    gumber += -1
    led.unplot(gumber, 3)
    led.plot(gumber - 1, 3)
    music.playMelody("- - - - - - - - ", 120)
    gumber += -1
    led.unplot(gumber, 3)
    led.plot(gumber - 1, 3)
    music.playMelody("- - - - - - - - ", 120)
    gumber += -1
    led.unplot(gumber, 3)
    led.plot(gumber - 1, 3)
    music.playMelody("- - - - - - - - ", 120)
    gumber += -1
    led.unplot(gumber, 3)
    led.plot(gumber - 1, 3)
    music.playMelody("- - - - - - - - ", 120)
    gumber += -1
    led.unplot(gumber, 3)
    led.plot(gumber - 1, 3)
    gumber = 0
})
