# The Angular Scaffolding App

[View demo](https://s3.ap-southeast-2.amazonaws.com/demo-g-scaffolding-angular/index.html)

### What is it?

A scaffolding Angular Material Design app, developed through Blaze BUILD
architecture. Providing a **header** (logo, page titles, and sub-page navigation
buttons), a **sidebar** (logo, top-level navigation), and components with
**child components** which are loaded and navigated to via configured **routes**.

The app uses **SASS**, **Material Design components**, and the **fxLayout**
module for flex-box layouts.

Navigation is provided through top-level and child routes. These routes are
configured with custom data which updates components with page details and route
info upon navigation changes, accessed via a 'routes' service.

### Features included:

*   SASS
*   Material design components
*   Flex-layout to provide flex-box view layout features
*   Accessing shared data through a singleton service
*   Top-level and child routes with examples of imperative and declarative route
    navigation.
*   Custom data defined in the route configurations to update components on
    completion of route navigation
