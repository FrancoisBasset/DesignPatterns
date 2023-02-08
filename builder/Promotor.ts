import Builder from './builders/Builder';
import FancyBuilder from './builders/FancyBuilder';
import House from './entities/House';
import HouseType from './HouseType';
import MediumBuilder from './builders/MediumBuilder';
import SimpleBuilder from './builders/SimpleBuilder';

export default class Promotor {
	public make(type: HouseType): House {
		let builder: Builder;

		switch (type) {
		case HouseType.SimpleHouse:
			builder = new SimpleBuilder();
			break;
		case HouseType.MediumHouse:
			builder = new MediumBuilder();
			(<MediumBuilder> builder).buildGarage();
			(<MediumBuilder> builder).buildGarden();
			break;
		case HouseType.FancyHouse:
			builder = new FancyBuilder();
			(<FancyBuilder> builder).buildGarage();
			(<FancyBuilder> builder).buildGarden();
			(<FancyBuilder> builder).buildSwimmingPool();
			(<FancyBuilder> builder).buildStatues();
			break;
		}
		
		builder.buildWalls();
		builder.buildRoof();
		builder.buildDoor();
		builder.buildWindows();

		return builder.getHouse();
	}
}
