def on_button_a():
    global x
    x = Math.constrain(x, 1, 100) - 1
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    global x
    x = Math.constrain(x, 1, 100) + 1
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

x = 0
y = 3
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    """)
x = 1

def on_forever():
    led.plot(x - 1, y - 1)
    led.plot(x - 1, y)
    led.unplot(x, y - 1)
    led.unplot(x, y)
    led.unplot(x - 2, y - 1)
    led.unplot(x - 2, y)
basic.forever(on_forever)
