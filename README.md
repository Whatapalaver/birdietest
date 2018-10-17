Birdie Tech Test
=========

A database visualisation exercise
-----

1. Variable (field within db table) should be user selectable
2. Statistics should be displayed for variable selected:
  - count of records
  - average age
3. Statistics ordered by descending count
4. Statistics displayed to 100 with a indication of non-displayed rows
5. Must be a single page application with no reload required as variable selected

Review Goals
-----

- React with concise Redux base state management
- Use of front end middleware to handle side effects/asynchronous processes (Sagas/Epics)
- Well defined and reusable components
- Effective error handling
- Some display of front end styling knowledge
- One or two automated tests
- Effective route management and reusable modular structure to your API
- Strong typing
- A good overall display of the Single Responsibility Principle
- Strong overall naming conventions

Coding Challenges
-----

API  
*I spent some time pondering how my API should be structured in order to allow React to select specific field types. Should I?*

- create one massive dump of db data
- have a separate get request for each potential field name
- pass a param back to my SQL query

*I suspect the latter is going to be the correct approach but to kick off the process I started with an API that hosted the stats solely for education.*

Testing  
*As I am still fairly unfamiliar with much of the tech stack I chose not to follow a TDD approach to completing the test. Given that there was limited logic in the challenge I felt this was acceptable although I do plan to retrospectively add tests to future proof the application and to provide some assurance that everything works as desired.*