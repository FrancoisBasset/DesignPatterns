import Door from '../entities/Door';
import House from '../entities/House';
import Roof from '../entities/Roof';
import Wall from '../entities/Wall';
import Window from '../entities/Window';

export default abstract class Builder {
	protected house: House;

	constructor() {
		this.house = new House();
	}

	public buildWalls() {
		this.house.walls.push(new Wall(20000), new Wall(20000), new Wall(20000));
	}
	
	public buildWindows() {
		this.house.windows.push(new Window(5000), new Window(5000));
	}
	
	public buildRoof() {
		this.house.roof = new Roof(40000);
	}

	public buildDoor() {
		this.house.door = new Door(5000);
	}

	public getHouse() {
		return this.house;
	}
}
