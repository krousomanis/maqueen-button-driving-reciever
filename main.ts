// reciever
radio.setGroup(89)
basic.showIcon(IconNames.Heart)
DFRobotMaqueenPlus.mototStop(Motors.ALL)
basic.forever(function () {
    radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
        if (receivedNumber == 0) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 50)
        } else if (receivedNumber == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 50)
            DFRobotMaqueenPlus.mototStop(Motors.M2)
        } else if (receivedNumber == 2) {
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 50)
            DFRobotMaqueenPlus.mototStop(Motors.M1)
        } else {
            DFRobotMaqueenPlus.mototStop(Motors.ALL)
        }
        
    })
})
