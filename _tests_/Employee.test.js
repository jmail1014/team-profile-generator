const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");

TestWatcher("employee object", () => {
  const employee = new Employee("Jess", 10, "jess@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
