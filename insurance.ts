class InsuranceApplicant {
    constructor(
        public name: string,
        public age: number,
        public coverageType: string,
        public hasPreExistingConditions: boolean
    ) {}
}

class InsuranceCalculator {
    private basePremium: number = 1000;

    calculatePremium(applicant: InsuranceApplicant): number {
        let premium = this.basePremium;

        if (applicant.age < 25) {
            premium += 200;
        } else if (applicant.age > 50) {
            premium += 300;
        }

        if (applicant.coverageType === "comprehensive") {
            premium += 500;
        } else if (applicant.coverageType === "basic") {
            premium += 100;
        }

        if (applicant.hasPreExistingConditions) {
            premium += 400;
        }

        return premium;
    }
}

const applicant1 = new InsuranceApplicant("Alice", 30, "comprehensive", false);
const applicant2 = new InsuranceApplicant("Bob", 55, "basic", true);

const calc = new InsuranceCalculator();

console.log(`${applicant1.name}'s Premium: $${calc.calculatePremium(applicant1)}`);
console.log(`${applicant2.name}'s Premium: $${calc.calculatePremium(applicant2)}`);
