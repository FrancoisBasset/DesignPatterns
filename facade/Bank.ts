import Account from './Account';
import Card from './Card';
import CashMachine from './CashMachine';
import Check from './Check';
import Desk from './Desk';

export default class Bank {
	private static instance: Bank;
	private desk: Desk;
	private cashMachine: CashMachine;

	private constructor() {
		this.desk = Desk.getInstance();
		this.cashMachine = CashMachine.getInstance();
	}

	public static getInstance(): Bank {
		if (!Bank.instance) {
			Bank.instance = new Bank();
		}

		return Bank.instance;
	}

	public getCashMachine(): CashMachine {
		return this.cashMachine;
	}

	public createAccount(firstName: string, lastName: string): Account {
		return this.desk.createAccount(firstName, lastName);
	}

	public getCard(account: Account): Card {
		return this.desk.createCard(account);
	}

	public getCheck(account: Account): Check {
		return this.desk.createCheck(account);
	}

	public takeCheck(check: Check): void {
		this.desk.takeCheck(check);
	}
}
