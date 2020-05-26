let lys = 0
basic.forever(function () {
    if (lys >= 290) {
        basic.showLeds(`
            . # # # .
            # # # . .
            # # . . .
            # # # . .
            . # # # .
            `)
    } else if (lys < 290 && lys >= 230) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
})
basic.forever(function () {
    lys = pins.analogReadPin(AnalogPin.P0)
})
