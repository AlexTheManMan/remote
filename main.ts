function adjustPeriod () {
    roll = input.rotation(Rotation.Roll)
    if (roll < 0) {
        period += -1
    } else {
        period += 1
    }
    if (period < 5) {
        period = 5
    }
    if (period > 365) {
        period = 365
    }
    led.setBrightness(32)
    led.plotBarGraph(
    period - 5,
    365
    )
    radio.sendValue("period", period)
}
function adjustHue () {
    roll = input.rotation(Rotation.Roll)
    if (roll < 0) {
        HUE += -1
    } else {
        HUE += 1
    }
    if (HUE < 1) {
        HUE = 1
    }
    if (HUE > 360) {
        HUE = 360
    }
    led.setBrightness(32)
    led.plotBarGraph(
    HUE,
    360
    )
    radio.sendValue("hue", HUE)
}
function adjustBrightness () {
    roll = input.rotation(Rotation.Roll)
    if (roll < 0) {
        brightness += -1
    } else {
        brightness += 1
    }
    if (brightness < 3) {
        brightness = 3
    }
    if (brightness > 255) {
        brightness = 255
    }
    led.setBrightness(brightness)
    led.plotBarGraph(
    brightness,
    255
    )
    radio.sendValue("bright", brightness)
}
let period = 0
let HUE = 0
let brightness = 0
let roll = 0
radio.setGroup(1)
roll = 0
brightness = 16
HUE = 180
let height_brightness = 128
period = 128
led.setBrightness(brightness)
basic.showString("A B AB")
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B))) {
        adjustHue()
    }
    if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.A))) {
        adjustBrightness()
    }
    if (input.buttonIsPressed(Button.AB)) {
        adjustPeriod()
    }
})
