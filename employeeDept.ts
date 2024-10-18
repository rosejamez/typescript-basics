class Emp {
    constructor(
        public empId: number,
        public name: string,
        public department: string,
        public salary: number
    ) {}
}

class EmployeeManager {
    private employees: Emp[] = [];

    addEmployee(emp: Emp): void {
        this.employees.push(emp);
    }

    getEmployeesByDepartment(department: string): Emp[] {
        return this.employees.filter(emp =>department==emp.department);
    }
        
    

    getTotalSalaryByDepartment(department: string): number {
        const employeesInDept = this.getEmployeesByDepartment(department);
        return employeesInDept.reduce((total, emp) => total + emp.salary, 0);
    }
}


const manager = new EmployeeManager();
manager.addEmployee(new Emp(1, "Alice", "Engineering", 70000));
manager.addEmployee(new Emp(2, "Bob", "Engineering", 80000));
manager.addEmployee(new Emp(3, "Charlie", "HR", 50000));
manager.addEmployee(new Emp(4, "David", "HR", 60000));

const engineeringEmployees = manager.getEmployeesByDepartment("Engineering");
console.log("Engineering Employees:", engineeringEmployees);

const totalEngineeringSalary = manager.getTotalSalaryByDepartment("Engineering");
console.log("Total Engineering Salary:", totalEngineeringSalary);
