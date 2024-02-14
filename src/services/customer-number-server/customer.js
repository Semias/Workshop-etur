import { Customer } from "./customer.class.js";

const customers = [];
let customerCountId = 0;

/**
 * @returns Customer[] - Returns an array of customer objects
 */
export function getCustomers() {
  return customers;
}

/**
 * @create Customer - Creates a new Customer Object of class
 */
export function createCustomer(id, firstName, lastName) {
  customers.push(new Customer(id, firstName, lastName));
}

/**
 * @returns Customer - Returns customer by id
 */
export function readCustomer(inputId) {
  return customers.find((obj) => obj.id === inputId);
}

/**
 * @delete Customer - Deletes customer by id
 */
export function deleteCustomer(id) {
  const index = customers.findIndex((obj) => obj.id === id);

  if (index >= 0) {
    customers.splice(index, 1);
  }
}

/**
 * @check Existence - Checks if id is valid
 */
export function idValidation(id) {
  const pattern = /ETUR-CN-\w+/;
  const isValid = pattern.test(id);

  if (isValid) {
    const index = customers.findIndex((object) => object.id === id);
    return index !== -1;
  }
}

/**
 * @create Id - Creates a new id for customer
 */
export function createId() {
  const randomNumber = "ETUR-CN-" + customerCountId++;
  return randomNumber;
}
