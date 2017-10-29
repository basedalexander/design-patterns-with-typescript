import { ISimpleController } from './simple-controller.interface';
import { SimpleRemoteController } from './simple-remote-controller';
import { ICommand } from '../common/command.interface';
import { LightOnCommand } from '../common/commands/light-on.command';
import { Light } from '../common/vendor-remote-devices/light';
import { UpGarageDoorCommand } from '../common/commands/up-garage-door.command';
import { Garage } from '../common/vendor-remote-devices/garage';


let lightRemoteDevice: any = new Light();
let lightOnCommand: ICommand = new LightOnCommand(lightRemoteDevice);

let remoteController: ISimpleController = new SimpleRemoteController();
remoteController.setSlot(lightOnCommand);
remoteController.pressButton(); // the light is on

let garage: any = new Garage();
let garageDoorUpCommand: ICommand = new UpGarageDoorCommand(garage);

remoteController.setSlot(garage);
remoteController.pressButton(); // garage door is opening
