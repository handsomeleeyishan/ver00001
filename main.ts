function 遊戲介紹 () {
    basic.showString("In this RPG game, whether it is level, attack, experience, it is infinitely accumulated, so don't be too addicted to this game product")
}
function 敵方攻擊 () {
    if (我方生命 <= 1) {
        我方生命 += 敵方攻擊力 - 敵方攻擊力 - 敵方攻擊力
        敵方等級 += 1
        我方生命 = 我方生命 * 我方等級
        敵方生命 = 敵方生命 * 敵方等級
        敵方攻擊力 = 敵方等級
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . . . .
                # . . . .
                # # . . #
                # . . . .
                . . . . .
                `)
            music.playMelody("C5 C5 C5 C5 C5 C D C ", 333)
        }
        basic.showString("P2.LV" + ("" + 敵方等級))
    } else {
        我方生命 += 敵方攻擊力 - 敵方攻擊力 - 敵方攻擊力
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . . . .
                # . . . .
                # # . . #
                # . . . .
                . . . . .
                `)
            music.playMelody("C5 C5 C5 C5 C5 C D C ", 333)
        }
    }
}
function 重置 () {
    我方 = game.createSprite(0, 2)
    敵方 = game.createSprite(5, 2)
    敵方生命 = 5
    我方生命 = 5
    我方等級 = 1
    敵方等級 = 1
    敵方攻擊力 = 1
    我方攻擊力 = 1
    music.setVolume(255)
}
function 我方攻擊 () {
    if (敵方生命 <= 1) {
        敵方生命 += 我方攻擊力 - 我方攻擊力 - 我方攻擊力
        我方等級 += 1
        我方生命 = 我方生命 * 我方等級
        敵方生命 = 敵方生命 * 敵方等級
        我方攻擊力 += 我方等級
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . . . .
                . . . . #
                # . . # #
                . . . . #
                . . . . .
                `)
            music.playMelody("C5 C5 C5 C5 C5 C D C ", 333)
        }
        basic.showString("P1.LV." + ("" + 我方等級))
    } else {
        敵方生命 += 我方攻擊力 - 我方攻擊力 - 我方攻擊力
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . . . .
                . . . . #
                # . . # #
                . . . . #
                . . . . .
                `)
            music.playMelody("C5 C5 C5 C5 C5 C D C ", 333)
        }
    }
}
let 我方攻擊力 = 0
let 敵方: game.LedSprite = null
let 我方: game.LedSprite = null
let 敵方生命 = 0
let 我方等級 = 0
let 敵方等級 = 0
let 敵方攻擊力 = 0
let 我方生命 = 0
重置()
if (input.pinIsPressed(TouchPin.P0)) {
    basic.showString("skip")
} else {
    遊戲介紹()
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        我方攻擊()
    }
    if (input.buttonIsPressed(Button.B)) {
        敵方攻擊()
    }
    if (input.logoIsPressed()) {
        basic.showString("reset")
        重置()
    }
})
