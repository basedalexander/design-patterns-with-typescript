import { ISimpleController } from './simple-controller.interface';
import { SimpleRemoteController } from './simple-remote-controller';
import { ICommand } from './command.interface';
import { LightOnCommand } from './commands/light-on.command';
import { Light } from './vendor-remote-devices/light';
import { UpGarageDoorCommand } from './commands/up-garage-door.command';
import { Garage } from './vendor-remote-devices/garage';


let lightRemoteDevice: any = new Light();
let lightOnCommand: ICommand = new LightOnCommand(lightRemoteDevice);

let remoteController: ISimpleController = new SimpleRemoteController();
remoteController.setSlot(lightOnCommand);
remoteController.pressButton(); // the light is on

let garage: any = new Garage();
let garageDoorUpCommand: ICommand = new UpGarageDoorCommand(garage);

remoteController.setSlot(garage);
remoteController.pressButton(); // garage door is opening
