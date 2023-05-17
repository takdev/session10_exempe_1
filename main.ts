radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("salam")
})
radio.setGroup(22)
