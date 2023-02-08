import Builder from './Builder';
import Garage from '../entities/Garage';
import Garden from '../entities/Garden';
import Statue from '../entities/Statue';
import SwimmingPool from '../entities/SwimmingPool';

export default class FancyBuilder extends Builder {
	constructor() {
		super();
	}

	public buildGarage() {
		this.house.garage = new Garage(10000);
	}

	public buildGarden() {
		this.house.garden = new Garden(20000);
	}

	public buildSwimmingPool() {
		this.house.swimmingPool = new SwimmingPool(200, 10);
	}

	public buildStatues() {
		this.house.statues.push(new Statue('Neo', 50000), new Statue('Picasso', 300000));
	}
}
