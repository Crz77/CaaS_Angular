export class ErrorMessage {
    constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
    ) { }
    }

    export const OrderDetailsErrorMessages = [
        new ErrorMessage('firstName', 'required', 'First name is required.'),
        new ErrorMessage('lastName', 'required', 'Last name is required.'),
        new ErrorMessage('email', 'required', 'Email is required'),
        new ErrorMessage('email', 'email', 'Email must be this format: whoisyour@daddy.com'),
        new ErrorMessage('cardNumber', 'required', 'Credit card number is required.'),
        new ErrorMessage('cardNumber', 'minlength', 'Card number must be at least 16 characters long')
    ];
    