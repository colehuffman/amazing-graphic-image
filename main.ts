input.onButtonPressed(Button.A, function () {
    // runs inside code 5 times while increasing "a" by 1 each time
    for (let a = 0; a <= 4; a++) {
        // runs inside code 5 times while increasing "b" by 1 each time
        for (let b = 0; b <= 4; b++) {
            // toggles leds at (a,b)
            led.toggle(a, b)
            // pauses for 100ms
            basic.pause(100)
            // plots leds at (b,a)
            led.plot(b, a)
            // pauses for 100ms
            basic.pause(100)
        }
    }
})
