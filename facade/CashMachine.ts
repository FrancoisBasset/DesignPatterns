import Account from './Account';
import Card from './Card';
import Desk from './Desk';
import Treasury from './Treasury';

export default class CashMachine {
	private static instance: CashMachine;
	private tmpCard: Card | null = null;

	public static getInstance(): CashMachine {
		if (!CashMachine.instance) {
			CashMachine.instance = new CashMachine();
		}

		return CashMachine.instance;
	}

	public insertCard(card: Card): void {
		this.tmpCard = card;
	}

	public withdraw(amount: number, code: number) {
		if (this.tmpCard && this.tmpCard.correctCode(code)) {
			Desk.getInstance().take(this.tmpCard.account, amount);
		}
		this.tmpCard = null;
	}

	public getDetails(): string {
		const account: Account | undefined = this.tmpCard?.account;
		if (account) {
			const treasury: Treasury = Treasury.getInstance();
			
			return `${account.firstName} ${account.lastName}\nSolde : ${treasury.getAmount(account)}`;
		}

		this.tmpCard = null;

		return '';
	}
}
