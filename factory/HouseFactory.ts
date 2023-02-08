import House from './House';

export default class HouseFactory {
	public static createSimpleHouse(): House {
		return new House('simple');
	}

	public static createMediumHouse(): House {
		return new House('medium');
	}

	public static createFancyHouse(): House {
		return new House('fancy');
	}
}
