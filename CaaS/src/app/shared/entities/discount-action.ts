export class DiscountAction {
    constructor(
        public shopID?: string,
        public actionID?: string,
        public fixedAmount?: string,
        public percentage?: string
    ) {}
}
