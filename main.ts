joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.up, function my_function() {
    wuKong.mecanumWheel(wuKong.ServoList.S1, wuKong.ServoList.S2, wuKong.ServoList.S3, wuKong.ServoList.S4)
    wuKong.mecanumRun(wuKong.RunList.stop, 20)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function my_function2() {
    wuKong.mecanumWheel(wuKong.ServoList.S1, wuKong.ServoList.S2, wuKong.ServoList.S3, wuKong.ServoList.S4)
    wuKong.mecanumRun(wuKong.RunList.rear, 20)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.up, function my_function3() {
    wuKong.mecanumWheel(wuKong.ServoList.S1, wuKong.ServoList.S2, wuKong.ServoList.S3, wuKong.ServoList.S4)
    wuKong.mecanumRun(wuKong.RunList.stop, 20)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 10)
    basic.pause(2000)
    wuKong.stopMotor(wuKong.MotorList.M2)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function my_function4() {
    wuKong.mecanumWheel(wuKong.ServoList.S1, wuKong.ServoList.S2, wuKong.ServoList.S3, wuKong.ServoList.S4)
    wuKong.mecanumRun(wuKong.RunList.right, 20)
})
input.onPinPressed(TouchPin.P2, function on_pin_pressed_p2() {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S6, -5)
    basic.pause(1000)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.up, function my_function5() {
    wuKong.mecanumWheel(wuKong.ServoList.S1, wuKong.ServoList.S2, wuKong.ServoList.S3, wuKong.ServoList.S4)
    wuKong.mecanumRun(wuKong.RunList.stop, 20)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    wuKong.setMotorSpeed(wuKong.MotorList.M2, -10)
    basic.pause(2000)
    wuKong.stopMotor(wuKong.MotorList.M2)
})
input.onPinPressed(TouchPin.P1, function on_pin_pressed_p1() {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S6, 5)
    basic.pause(1000)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.up, function my_function6() {
    wuKong.mecanumWheel(wuKong.ServoList.S1, wuKong.ServoList.S2, wuKong.ServoList.S3, wuKong.ServoList.S4)
    wuKong.mecanumRun(wuKong.RunList.stop, 20)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function my_function7() {
    wuKong.mecanumWheel(wuKong.ServoList.S1, wuKong.ServoList.S2, wuKong.ServoList.S3, wuKong.ServoList.S4)
    wuKong.mecanumRun(wuKong.RunList.Front, 20)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function my_function8() {
    wuKong.mecanumWheel(wuKong.ServoList.S1, wuKong.ServoList.S2, wuKong.ServoList.S3, wuKong.ServoList.S4)
    wuKong.mecanumRun(wuKong.RunList.left, 20)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 10)
    basic.pause(1000)
    wuKong.stopMotor(wuKong.MotorList.M1)
})
input.onLogoEvent(TouchButtonEvent.Released, function on_logo_released() {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -10)
    basic.pause(1000)
    wuKong.stopMotor(wuKong.MotorList.M1)
})
basic.showIcon(IconNames.Ghost)
radio.setGroup(102)
radio.setTransmitPower(7)
wuKong.mecanumWheel(wuKong.ServoList.S1, wuKong.ServoList.S2, wuKong.ServoList.S3, wuKong.ServoList.S4)
