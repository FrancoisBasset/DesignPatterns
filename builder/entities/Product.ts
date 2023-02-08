export default abstract class Product {
	private price: number;

	constructor(price: number) {
		this.price = price;
	}

	public getPrice(): number {
		return this.price;
	}
}
