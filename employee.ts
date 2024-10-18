interface Contact {
    email: string;
    phone: string;
}

interface Employee {
    empId: number;
    name: string;
    password: string;
    isActive: boolean;
    hireDate: Date;
    roles: string[];
    salary: number;
    contact: Contact;
}
const employees: Employee[] = [];

function addEmployee(empId: number, name: string, password: string, isActive: boolean, hireDate: string, roles: string[], salary: number, contact: Contact): void {
    const isUnique = employees.every(employee => employee.empId !== empId);
    
    if (!isUnique) {
        console.log(`Employee ID ${empId} already exists.`);
        return;
    }

    const newEmployee: Employee = {
        empId,
        name,
        password,
        isActive,
        hireDate: new Date(hireDate),
        roles,
        salary,
        contact
    };

    employees.push(newEmployee);
    console.log(`Employee ${name} added successfully.`);
}

addEmployee(12345, "John Doe", "securePass123", true, "2023-01-01", ["developer", "admin"], 75000.50, {
    email: "john.doe@example.com",
    phone: "555-1234"
});

addEmployee(12346, "Jane Smith", "password456", true, "2023-02-01", ["manager"], 80000.00, {
    email: "jane.smith@example.com",
    phone: "555-5678"
});

addEmployee(12345, "Alice Brown", "pass789", false, "2023-03-01", ["designer"], 65000.00, {
    email: "alice.brown@example.com",
    phone: "555-9876"
});

console.log(employees);
