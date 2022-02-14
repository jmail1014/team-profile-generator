const Engineer = require("../lib/Engineer");

test("creates Engineer object", () => {
  const engineer = new Engineer("Jess", 10, "jess@gmail.com");

  expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer github", () => {
  const engineer = new Engineer("Jess", 10, "jess@gmail.com", "jesshub");

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

test("gets employee role", () => {
  const engineer = new Engineer("Jess", 10, "jess@gmail.com", "jesshub");

  expect(engineer.getRole()).toEqual("Engineer");
});
