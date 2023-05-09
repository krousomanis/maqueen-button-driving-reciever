# reciever
radio.set_group(89)
basic.show_icon(IconNames.HEART)
DFRobotMaqueenPlus.motot_stop(Motors.ALL)

def on_forever():
    
    def on_received_number(receivedNumber):
        if receivedNumber == 0:
            DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CCW, 50)
        elif receivedNumber == 1:
            DFRobotMaqueenPlus.motot_run(Motors.M1, Dir.CCW, 50)
            DFRobotMaqueenPlus.motot_stop(Motors.M2)
        elif receivedNumber == 2:
            DFRobotMaqueenPlus.motot_run(Motors.M2, Dir.CCW, 50)
            DFRobotMaqueenPlus.motot_stop(Motors.M1)
        else:
            DFRobotMaqueenPlus.motot_stop(Motors.ALL)
    radio.on_received_number(on_received_number)
    
basic.forever(on_forever)
