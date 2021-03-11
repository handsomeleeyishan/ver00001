def on_logo_long_pressed():
    global 敵方生命, 我方生命, 我方等級, 敵方等級
    basic.show_string("reset")
    敵方生命 = 5
    我方生命 = 5
    我方等級 = 1
    敵方等級 = 1
input.on_logo_event(TouchButtonEvent.LONG_PRESSED, on_logo_long_pressed)

def on_button_pressed_a():
    global 我方等級, 我方生命, 敵方生命, 我方攻擊力
    if 敵方生命 <= 1:
        我方等級 += 1
        我方生命 = 我方生命 * 我方等級
        敵方生命 = 敵方生命 * 敵方等級
        我方攻擊力 += 我方等級
        basic.show_string("P1.LV." + str(我方等級))
        for index in range(3):
            basic.show_leds("""
                . . . . .
                . . . . #
                # . . # #
                . . . . #
                . . . . .
                """)
            basic.pause(500)
    else:
        敵方生命 += 我方攻擊力 - 我方攻擊力 - 我方攻擊力
        for index2 in range(3):
            basic.show_leds("""
                . . . . .
                . . . . #
                # . . # #
                . . . . #
                . . . . .
                """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global 敵方等級, 我方生命, 敵方生命, 敵方攻擊力
    if 我方生命 <= 1:
        敵方等級 += 1
        我方生命 = 我方生命 * 我方等級
        敵方生命 = 敵方生命 * 敵方等級
        敵方攻擊力 = 敵方等級
        basic.show_string("P2.LV" + str(敵方等級))
        for index3 in range(3):
            basic.show_leds("""
                . . . . .
                # . . . .
                # # . . #
                # . . . .
                . . . . .
                """)
    else:
        我方生命 += 敵方攻擊力 - 敵方攻擊力 - 敵方攻擊力
        for index4 in range(3):
            basic.show_leds("""
                . . . . .
                # . . . .
                # # . . #
                # . . . .
                . . . . .
                """)
input.on_button_pressed(Button.B, on_button_pressed_b)

我方攻擊力 = 0
敵方攻擊力 = 0
敵方等級 = 0
我方等級 = 0
我方生命 = 0
敵方生命 = 0
我方 = game.create_sprite(0, 2)
敵方 = game.create_sprite(5, 2)
敵方生命 = 5
我方生命 = 5
我方等級 = 1
敵方等級 = 1
敵方攻擊力 = 1
我方攻擊力 = 1