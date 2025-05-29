function adjustPeriod () {
    angle = input.rotation(Rotation.Roll)
    if (angle <= -30 && angle >= -90) {
        radio.sendString("period-")
    }
    if (angle >= 30 && angle <= 90) {
        radio.sendString("period+")
    }
    kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Big)
    kitronik_VIEW128x64.show("PERIOD    ", 1, kitronik_VIEW128x64.ShowAlign.Left)
    kitronik_VIEW128x64.show("" + convertToText(period) + " S         ", 2, kitronik_VIEW128x64.ShowAlign.Left)
}
function adjustHue () {
    angle = input.rotation(Rotation.Roll)
    if (angle <= -30 && angle >= -90) {
        radio.sendString("hue-")
    }
    if (angle >= 30 && angle <= 90) {
        radio.sendString("hue+")
    }
    kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Big)
    kitronik_VIEW128x64.show("HUE      ", 1, kitronik_VIEW128x64.ShowAlign.Left)
    kitronik_VIEW128x64.show("" + convertToText(hue) + "         ", 2, kitronik_VIEW128x64.ShowAlign.Left)
}
radio.onReceivedValue(function (name, value) {
    if (name == "bright") {
        brightness = Math.round(value)
        if (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
            kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Normal)
            kitronik_VIEW128x64.show("BRIGHTNESS: " + brightness + "          ", 1)
        }
    }
    if (name == "hue") {
        hue = Math.round(value)
        if (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
            kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Normal)
            kitronik_VIEW128x64.show("HUE: " + hue + "             ", 2)
        }
    }
    if (name == "period") {
        period = Math.round(value)
        if (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
            kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Normal)
            kitronik_VIEW128x64.show("PERIOD: " + period + " S           ", 3)
        }
    }
    if (name == "temp") {
        temp = Math.round(value)
        if (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
            kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Normal)
            kitronik_VIEW128x64.show("TEMPERATURE: " + temp + " C               ", 4)
        }
    }
})
function adjustBrightness () {
    angle = input.rotation(Rotation.Roll)
    if (angle <= -30 && angle >= -90) {
        radio.sendString("bright-")
    }
    if (angle >= 30 && angle <= 90) {
        radio.sendString("bright+")
    }
    kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Big)
    kitronik_VIEW128x64.show("BRIGHTNESS", 1, kitronik_VIEW128x64.ShowAlign.Left)
    kitronik_VIEW128x64.show("" + convertToText(brightness) + "         ", 2, kitronik_VIEW128x64.ShowAlign.Left)
}
let temp = 0
let period = 0
let hue = 0
let brightness = 0
let angle = 0
radio.setGroup(1)
let roll = 0
angle = 0
brightness = 16
hue = 180
let height_brightness = 128
period = 128
temp = 0
led.setBrightness(brightness)
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
