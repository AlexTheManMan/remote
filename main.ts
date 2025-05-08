let diff = 0
let previous_height = 0
let height = 0
let roll = 0
let pitch = 0
radio.setGroup(1)
let brightness = 16
let HUE = 180
let height_brightness = 128
let period = 128
led.setBrightness(brightness)
basic.showString("012AB")
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B))) {
        roll = input.rotation(Rotation.Roll)
        diff = Math.sign(roll);
HUE += diff
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
    if (input.logoIsPressed()) {
        height = input.acceleration(Dimension.Z)
        diff = Math.sign(height - previous_height) * 25
        if (diff == 0) {
            basic.showNumber(0)
        } else {
            if (diff > 0) {
                basic.showArrow(ArrowNames.North)
            } else {
                basic.showArrow(ArrowNames.South)
            }
        }
        previous_height = height
        height_brightness += diff
        if (height_brightness < 1) {
            height_brightness = 1
        }
        if (height_brightness > 360) {
            height_brightness = 360
        }
        led.setBrightness(height_brightness)
        radio.sendValue("hue", height_brightness)
    }
    if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.A))) {
        pitch = input.rotation(Rotation.Pitch)
        diff = Math.sign(pitch);
brightness += diff
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
    if (input.buttonIsPressed(Button.AB)) {
        roll = input.rotation(Rotation.Roll)
        diff = Math.sign(roll);
period += diff
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
})
