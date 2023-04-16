import Account from './Account';

export default class Card {
	public account: Account;
	public code: number;

	constructor(account: Account) {
		this.account = account;
		this.code = Math.floor(Math.random() * 10000);
	}

	public correctCode(code: number): boolean {
		return this.code == code;
	}
}
