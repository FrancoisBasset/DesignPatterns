export default class Account {
	public id: number;
	public firstName: string;
	public lastName: string;
	
	constructor(firstName: string, lastName: string) {
		this.id = Math.floor(Math.random() * 10000000);
		this.firstName = firstName;
		this.lastName = lastName;
	}
}
