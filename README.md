# DTDL Liskov Principle Testing

This project aims to demonstrate and test the adherence of Digital Twin Definition Language (DTDL) models to the Liskov principle. The Liskov principle, a fundamental principle of object-oriented design, states that objects of a superclass should be substitutable with objects of its subclasses without affecting the correctness of the program.

This project provides a simple example of testing DTDL interfaces to ensure compliance with the Liskov principle. By running the tests, you can verify that the derived interface does not violate the principle and that it does not introduce new properties, promoting interoperability and code reusability in the context of Industry 4.0.

Feel free to modify and extend the project to fit your specific DTDL models and testing requirements.

## Project Structure

The project structure is as follows:

.
├── ontology
│   ├── IAsset.json
│   └── Machine.json
│   └── Robot.json
├── __test__
    └── general.test.js
    └── machine.test.js
    └── robot.test.js



- The ontology directory contains the DTDL interface definitions.
- The tests directory contains the Jest test file.

## DTDL Interfaces

In the interfaces directory, you will find the DTDL interface definitions used for testing:

- IAsset.json: Defines the base interface IAsset with common properties and methods for assets.
- Machine.json and Robot.json: Defines a derived interface DerivedAsset that extends IAsset. This interface is used to test the Liskov principle and ensures that no new properties are added.

## Running the Test

To run the tests, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies using `npm install`.
3. Run the tests using `npm test`.

The test file (machine.test.js) in the tests directory contains the Jest test cases that verify adherence to the Liskov principle and the absence of new properties in the derived DTDL interface.

## Test Results

The test results will be displayed in the terminal/console, indicating whether the DTDL models comply with the Liskov principle and the absence of new properties in the derived interface.


