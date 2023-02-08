export default class Earth {
	private static instance: Earth;
	private id = 0;

	private constructor() {}

	public static getInstance(): Earth {
		if (Earth.instance == null) {
			Earth.instance = new Earth();
			Earth.instance.id = Math.floor(Math.random() * 10);
		}

		return Earth.instance;
	}

	public toString(): string {
		return `La planète bleue: ${this.id}`;
	}
}
