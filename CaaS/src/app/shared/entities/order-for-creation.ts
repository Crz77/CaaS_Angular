export class OrderForCreation {
    constructor(
        public shopID?: string,
        public firstName?: string,
        public lastName?: string,
        public eMail?: string,
        public creditCardNumber?: string
    ) {}
}