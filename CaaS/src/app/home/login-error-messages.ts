export class ErrorMessage {
    constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
    ) { }
    }

    export const LoginErrorMessages = [
        new ErrorMessage('appKey', 'required', 'AppKey is required.')
    ];