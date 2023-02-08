import House from './House';
import HouseFactory from './HouseFactory';

export default function factory() {
	const simple: House = HouseFactory.createSimpleHouse();
	const medium: House = HouseFactory.createMediumHouse();
	const fancy: House = HouseFactory.createFancyHouse();

	console.log(simple + '');
	console.log(medium + '');
	console.log(fancy + '');	
}
