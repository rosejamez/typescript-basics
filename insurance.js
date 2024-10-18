var InsuranceApplicant = /** @class */ (function () {
    function InsuranceApplicant(name, age, coverageType, hasPreExistingConditions) {
        this.name = name;
        this.age = age;
        this.coverageType = coverageType;
        this.hasPreExistingConditions = hasPreExistingConditions;
    }
    return InsuranceApplicant;
}());
var InsuranceCalculator = /** @class */ (function () {
    function InsuranceCalculator() {
        this.basePremium = 1000;
    }
    InsuranceCalculator.prototype.calculatePremium = function (applicant) {
        var premium = this.basePremium;
        if (applicant.age < 25) {
            premium += 200;
        }
        else if (applicant.age > 50) {
            premium += 300;
        }
        if (applicant.coverageType === "comprehensive") {
            premium += 500;
        }
        else if (applicant.coverageType === "basic") {
            premium += 100;
        }
        if (applicant.hasPreExistingConditions) {
            premium += 400;
        }
        return premium;
    };
    return InsuranceCalculator;
}());
var applicant1 = new InsuranceApplicant("Alice", 30, "comprehensive", false);
var applicant2 = new InsuranceApplicant("Bob", 55, "basic", true);
var calc = new InsuranceCalculator();
console.log("".concat(applicant1.name, "'s Premium: $").concat(calc.calculatePremium(applicant1)));
console.log("".concat(applicant2.name, "'s Premium: $").concat(calc.calculatePremium(applicant2)));
