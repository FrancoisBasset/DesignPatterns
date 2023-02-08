import Builder from './Builder';
import Garage from '../entities/Garage';
import Garden from '../entities/Garden';

export default class MediumBuilder extends Builder {
	constructor() {
		super();
	}

	public buildGarage() {
		this.house.garage = new Garage(2000);
	}

	public buildGarden() {
		this.house.garden = new Garden(100);
	}
}
