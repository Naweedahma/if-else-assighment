function Number2 () {
	
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (Number3))
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Number3)
    Number3 += 1
})
function Number1 () {
	
}
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Number3)
    Number3 += -1
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(Number3)
})
let Number3 = 0
basic.showIcon(IconNames.Heart)
radio.setGroup(72)
