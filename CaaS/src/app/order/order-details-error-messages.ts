export class ErrorMessage {
    constructor(
        public forControl: string,
        public forValidator: string,
        public text: string
    ) { }
}

export const OrderDetailsErrorMEssages = [
    new ErrorMessage('firstName', 'required', 'Ein Buchtitel muss angegeben werden'),
    new ErrorMessage('lastName', 'required', 'Es muss eine ID angegeben werden'),
    new ErrorMessage('email', 'minlength', 'Die ID muss mindestens 2 Zeichen enthalten'),
    new ErrorMessage('cardType', 'maxlength', 'Eine ID darf höchstens 8 Zeichen haben'),
    new ErrorMessage('cardNumber', 'required', 'Es muss ein Erscheinungsjahr angegeben werden'),
    new ErrorMessage('cardExpireMonth', 'required', 'Es muss ein Autor angegeben werden'),
    new ErrorMessage('cardExpireYear', 'required', 'Es muss eine ISBN angegeben werden')
];
