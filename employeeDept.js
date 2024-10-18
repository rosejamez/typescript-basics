var Emp = /** @class */ (function () {
    function Emp(empId, name, department, salary) {
        this.empId = empId;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    return Emp;
}());
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.employees = [];
    }
    EmployeeManager.prototype.addEmployee = function (emp) {
        this.employees.push(emp);
    };
    EmployeeManager.prototype.getEmployeesByDepartment = function (department) {
        return this.employees.filter(function (emp) { return emp.department === department; });
    };
    EmployeeManager.prototype.getTotalSalaryByDepartment = function (department) {
        var employeesInDept = this.getEmployeesByDepartment(department);
        return employeesInDept.reduce(function (total, emp) { return total + emp.salary; }, 0);
    };
    return EmployeeManager;
}());
// Example Usage
var manager = new EmployeeManager();
manager.addEmployee(new Emp(1, "Alice", "Engineering", 70000));
manager.addEmployee(new Emp(2, "Bob", "Engineering", 80000));
manager.addEmployee(new Emp(3, "Charlie", "HR", 50000));
manager.addEmployee(new Emp(4, "David", "HR", 60000));
var engineeringEmployees = manager.getEmployeesByDepartment("Engineering");
console.log("Engineering Employees:", engineeringEmployees);
var totalEngineeringSalary = manager.getTotalSalaryByDepartment("Engineering");
console.log("Total Engineering Salary:", totalEngineeringSalary);
