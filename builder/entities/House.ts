import Door from './Door';
import Garage from './Garage';
import Garden from './Garden';
import Product from './Product';
import Roof from './Roof';
import Statue from './Statue';
import SwimmingPool from './SwimmingPool';
import Wall from './Wall';
import Window from './Window';

export default class House extends Product {
	public walls: Array<Wall>;
	public windows: Array<Window>;
	public roof: Roof | null = null;
	public door: Door | null = null;
	public garage: Garage | null = null;
	public swimmingPool: SwimmingPool | null = null;
	public statues: Array<Statue>;
	public garden: Garden | null = null;

	constructor() {
		super(0);
		this.walls = new Array<Wall>(4);
		this.windows = new Array<Window>();
		this.statues = new Array<Statue>();
	}

	public getPrice(): number {
		let price = 0;
		this.walls.forEach(function(wall: Wall) {
			price += wall.getPrice();
		});
		this.windows.forEach(function(window: Window) {
			price += window.getPrice();
		});
		this.statues.forEach(function(statue: Statue) {
			price += statue.getPrice();
		});
		if (this.roof) {
			price += this.roof.getPrice();
		}
		if (this.door) {
			price += this.door.getPrice();
		}
		if (this.garage) {
			price += this.garage.getPrice();
		}
		if (this.swimmingPool) {
			price += this.swimmingPool.getPrice();
		}
		if (this.garden) {
			price += this.garden.getPrice();
		}

		return price;
	}
}
