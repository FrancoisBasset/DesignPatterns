export default class House {
	private type: string;

	constructor(type: string) {
		this.type = type;
	}

	public toString(): string {
		return `${this.type} house`;
	}
}
