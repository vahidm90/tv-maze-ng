# TV MAZE DEMO

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Why Angular
* Code and Project structure is easily understandable
* Provides routing, services, and many other FE application requirements out-of-the-box. 
* Uses typescript which results in a less error-prone code. 
* I have a lot of experience with it and enjoy using it.

## Project Structure
### Directories
The project consists of Components, services, interfaces, types, enums, utility functions, a loading animation module, and helpers.

### Components
For a cleaner architecture and better style consistency, components that stand as router pages are placed in a separate folder.

### The Loading Animation Module
The module provides a loading animation for a better UX in case there's an API call or some other processing being made under the hood.
Since it comes with its own directive and component and is business-independent, it is used as a module.


## Unit Tests
Some basic unit tests are added at `src/app/services/show/show.service.spec.ts` and `src/app/pages/home/home-page.component.spec.ts` that can be run by typing `npm test` in terminal. 
A lot of more unit tests can be added.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
