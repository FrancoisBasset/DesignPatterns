import Account from './Account';
import Card from './Card';
import Check from './Check';
import Treasury from './Treasury';

export default class Desk {
	private static instance: Desk;
	private treasury: Treasury;
	
	constructor() {
		this.treasury = Treasury.getInstance();
	}

	public static getInstance(): Desk {
		if (!Desk.instance) {
			Desk.instance = new Desk();
		}

		return Desk.instance;
	}

	public createAccount(firstName: string, lastName: string): Account {
		const account: Account = new Account(firstName, lastName);
		this.treasury.addAccount(account, 10000);

		return account;
	}

	public createCard(account: Account): Card {
		return new Card(account);
	}

	public createCheck(account: Account): Check {
		return new Check(account);
	}

	public takeCheck(check: Check): void {
		if (check.dest) {
			this.treasury.give(check.dest, check.amount);
			this.treasury.take(check.account, check.amount);
		}
	}

	public take(account: Account, amount: number) {
		this.treasury.take(account, amount);
	}
}
