radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > hand && (hand == 1 && receivedNumber == 2)) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber > hand && (hand == 1 && receivedNumber == 3)) {
        basic.showIcon(IconNames.Sad)
    } else if (receivedNumber > hand && (hand == 2 && receivedNumber == 3)) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber < hand && (hand == 2 && receivedNumber == 1)) {
        basic.showIcon(IconNames.Sad)
    } else if (receivedNumber < hand && (hand == 3 && receivedNumber == 1)) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber < hand && (hand == 3 && receivedNumber == 2)) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showIcon(IconNames.Square)
    } else if (hand == 2) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    radio.sendNumber(hand)
})
let hand = 0
radio.setGroup(121)
