export class DiscountRule {
    constructor(
        public shopID?: string,
        public ruleID?: string,
        public ruleName?: string,
        public qtyRuleAmount?: string,
        public timeRuleFrom?: Date,
        public timeRuleTo?: Date
    ) {}
}
