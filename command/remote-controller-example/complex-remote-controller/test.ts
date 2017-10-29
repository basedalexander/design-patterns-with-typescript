import { RemoteController } from './remote-controller';
import { ICommand } from '../common/command.interface';
import { LightOnCommand } from '../common/commands/light-on.command';
import { Light } from '../common/vendor-remote-devices/light';
import { LightOffCommand } from '../common/commands/light-off.command';
import { Garage } from '../common/vendor-remote-devices/garage';
import { UpGarageDoorCommand } from '../common/commands/up-garage-door.command';
import { DownGarageDoorCommand } from '../common/commands/down-garage-door.command';
import { CeilingFan } from '../common/vendor-remote-devices/ceiling-fan';
import { CeilingFanLowCommand } from '../common/commands/ceiling-fan-low.command';
import { CeilingFanHighCommand } from '../common/commands/ceiling-fan-high.command';
import { Boombox } from '../common/vendor-remote-devices/boombox';
import { MacroCommand } from '../common/commands/macro-command';
import { BoomboxOnCommand } from '../common/commands/boombox-on.command';
import { LightDimCommand } from '../common/commands/light-dim-command';
import { EmptyCommand } from '../common/commands/empty.command';

let controller = new RemoteController();

let light = new Light();
let lightOnCommand: ICommand = new LightOnCommand(light);
let lightOffCommand: ICommand = new LightOffCommand(light);

let garage = new Garage();
let upGarageDoorCommand = new UpGarageDoorCommand(garage);
let downGarageDoorCommand = new DownGarageDoorCommand(garage);

let ceilingFan = new CeilingFan('Kitchen');
let ceilingFanLowCommand: ICommand = new CeilingFanLowCommand(ceilingFan);
let ceilingFanHighCommand: ICommand = new CeilingFanHighCommand(ceilingFan);

let boomBox: Boombox = new Boombox();
let boomBoxOnCommand: ICommand = new BoomboxOnCommand(boomBox);
let lightDimCommand: ICommand = new LightDimCommand(light);

let partyOnCommand: ICommand = new MacroCommand([
    boomBoxOnCommand,
    lightDimCommand
]);

controller.setSlot(0, lightOnCommand, lightOffCommand);
controller.setSlot(1, upGarageDoorCommand, downGarageDoorCommand);
controller.setSlot(2, ceilingFanHighCommand, downGarageDoorCommand);
controller.setSlot(3, ceilingFanHighCommand, new EmptyCommand());

// switching on and off the light
controller.onButtonWasPressed(0);
controller.offButtonWasPressed(0);

// operating the garage door
controller.onButtonWasPressed(1);
controller.offButtonWasPressed(1);

controller.onButtonWasPressed(3); // partyHard