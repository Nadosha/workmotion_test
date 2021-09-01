import React from "react";
import { describe, after } from "mocha";

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./api/store";
import App from "./App";
import { createEmployee, getEmployees, updateStatus } from "./api/actions";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});

describe("CRUD EMPLOYEES TESTS", () => {
  let test_employee = {
    _id: "SYZk22DuKOSM",
    name: "John Fly",
    status: "Added",
  };
  before(() => {
    createEmployee(test_employee);
  });
  it("Should fetch all employees from API", () => {
    expect(getEmployees()).not.toBe(0);
  });

  it("Should fetch all employees from API", () => {
    expect(getEmployees(test_employee._id)).toEqual(test_employee);
  });
});
