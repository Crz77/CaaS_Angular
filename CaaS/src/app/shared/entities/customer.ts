export class Customer {
    constructor(
        public shopID?: string,
        public customerID?: string,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public creditCardNumber?: string,
    ) {}
}