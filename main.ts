input.onButtonPressed(Button.A, function () {
    for (let a = 0; a <= 4; a++) {
        for (let index = 0; index <= 4; index++) {
            led.toggle(a, index)
            basic.pause(100)
            led.toggle(index, a)
            basic.pause(100)
        }
    }
})
