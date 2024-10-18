var employees = [];
function addEmployee(empId, name, password, isActive, hireDate, roles, salary, contact) {
    // Check if empId is unique
    var isUnique = employees.every(function (employee) { return employee.empId !== empId; });
    if (!isUnique) {
        console.log("Employee ID ".concat(empId, " already exists."));
        return;
    }
    // Create a new employee object
    var newEmployee = {
        empId: empId,
        name: name,
        password: password,
        isActive: isActive,
        hireDate: new Date(hireDate),
        roles: roles,
        salary: salary,
        contact: contact
    };
    // Add the new employee to the array
    employees.push(newEmployee);
    console.log("Employee ".concat(name, " added successfully."));
}
// Example usage:
addEmployee(12345, "John Doe", "securePass123", true, "2023-01-01", ["developer", "admin"], 75000.50, {
    email: "john.doe@example.com",
    phone: "555-1234"
});
addEmployee(12346, "Jane Smith", "password456", true, "2023-02-01", ["manager"], 80000.00, {
    email: "jane.smith@example.com",
    phone: "555-5678"
});
// Attempting to add an employee with a duplicate empId
addEmployee(12345, "Alice Brown", "pass789", false, "2023-03-01", ["designer"], 65000.00, {
    email: "alice.brown@example.com",
    phone: "555-9876"
});
console.log(employees);
