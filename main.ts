let modes = 0
let Ogen = 0
input.onButtonPressed(Button.A, function () {
    modes = 1
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    modes = 2
})
input.onGesture(Gesture.Shake, function () {
    if (modes == 1) {
        Ogen = randint(1, 6)
        if (Ogen == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
        if (Ogen == 2) {
            basic.showLeds(`
                . . . . .
                . # . . .
                . . . . .
                . . . # .
                . . . . .
                `)
        }
        if (Ogen == 3) {
            basic.showLeds(`
                . . . . .
                . # . . .
                . . # . .
                . . . # .
                . . . . .
                `)
        }
        if (Ogen == 4) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                `)
        }
        if (Ogen == 5) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        }
        if (Ogen == 6) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . # . # .
                . # . # .
                . . . . .
                `)
        }
    }
    if (modes == 2) {
        basic.showNumber(randint(1, 6))
    }
})
