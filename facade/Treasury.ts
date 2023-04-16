import Account from './Account';

export default class Treasury {
	private static instance: Treasury;
	private accounts: Array<[Account, number]>;

	constructor() {
		this.accounts = [];
	}

	public static getInstance(): Treasury {
		if (!Treasury.instance) {
			Treasury.instance = new Treasury();
		}

		return Treasury.instance;
	}

	public addAccount(account: Account, amount: number): void {
		this.accounts.push([account, amount]);
	}

	public take(account: Account, amount: number): void {
		const foundAccount: [Account, number] | undefined = this.accounts.find(a => a[0].id == account.id);
		if (foundAccount) {
			foundAccount[1] -= amount;
		}
	}

	public give(account: Account, amount: number): void {
		const foundAccount: [Account, number] | undefined = this.accounts.find(a => a[0].id == account.id);
		if (foundAccount) {
			foundAccount[1] += amount;
		}
	}

	public getAmount(account: Account): number {
		const foundAccount: [Account, number] | undefined = this.accounts.find(a => a[0].id == account.id);
		if (foundAccount) {
			return foundAccount[1];
		}

		return 0;
	}
}
