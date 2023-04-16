import Account from './Account';

export default class Check {
	public account: Account;
	public amount = 0;
	public dest: Account | null = null;
	public signed = false;

	constructor(account: Account) {
		this.account = account;
	}

	public setAmount(amount: number): void {
		this.amount = amount;
	}

	public setDest(dest: Account): void {
		this.dest = dest;
	}

	public sign(): void {
		this.signed = true;
	}
}
