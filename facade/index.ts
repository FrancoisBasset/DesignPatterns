import Account from './Account';
import Bank from './Bank';
import Card from './Card';
import Check from './Check';

export default function facade() {
	const account: Account = Bank.getInstance().createAccount('Nico', 'Nico');
	const card: Card = Bank.getInstance().getCard(account);

	const accountToGive: Account = Bank.getInstance().createAccount('Francois', 'Francois');
	const card2: Card = Bank.getInstance().getCard(accountToGive);
	

	Bank.getInstance().getCashMachine().insertCard(card);
	Bank.getInstance().getCashMachine().withdraw(50, card.code);

	Bank.getInstance().getCashMachine().insertCard(card);
	const details: string = Bank.getInstance().getCashMachine().getDetails();

	const check: Check = Bank.getInstance().getCheck(account);
	check.setAmount(5000);
	check.setDest(accountToGive);
	check.sign();
	Bank.getInstance().takeCheck(check);

	Bank.getInstance().getCashMachine().insertCard(card);
	const details2: string = Bank.getInstance().getCashMachine().getDetails();

	Bank.getInstance().getCashMachine().insertCard(card2);
	const details3: string = Bank.getInstance().getCashMachine().getDetails();

	console.log(details2);
	console.log(details3);
}
