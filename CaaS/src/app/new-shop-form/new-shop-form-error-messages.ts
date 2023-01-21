export class ErrorMessage {
    constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
    ) { }
}

    export const NewShopFormErrorMessages = [
        new ErrorMessage('shopName', 'required', 'Shop name is required.'),
        new ErrorMessage('tenantUser', 'required', 'Username is required.'),
        new ErrorMessage('tenantEmail', 'required', 'Email is required'),
        new ErrorMessage('tenantEmail', 'email', 'Email must be this format: whoisyour@daddy.com'),
        new ErrorMessage('picture', 'required', 'Picture URL is required.'),
    ]; 