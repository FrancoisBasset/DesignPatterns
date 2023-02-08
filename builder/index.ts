import House from './entities/House';
import HouseType from './HouseType';
import Promotor from './Promotor';

export default function builder() {
	const promotor: Promotor = new Promotor();
	
	const simple: House = promotor.make(HouseType.SimpleHouse);
	const medium: House = promotor.make(HouseType.MediumHouse);
	const fancy: House = promotor.make(HouseType.FancyHouse);

	console.log('Simple : ' + simple.getPrice());	
	console.log('Medium : ' + medium.getPrice());
	console.log('Fancy : ' + fancy.getPrice());
}
