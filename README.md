# CodingTask2024

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

# Introduction
This repo contains a simple angular / ngrx project. The project consists of:
* Components - 
    The main structural elements of the app, this includes "Smart" components that interact with the store, and "Dumb" components that are only aware of their inputs and outputs.
* Dialogs - 
    Special components that make use of the Mat Dialog CDK, these are used for "User Input" effects.
* Models - 
    Define the shape of the data the app uses. (In our main codebase, this is where we would define out Zod schemas, for simplicity here we have just provided a simple type)
* Services - 
    The services are where we orchestrate interacting with the back end to perform CRUD operations, in this example we have provided some mock data and functions.
    This is also where we provide functions that launch the dialogs.
* State -
    The state folder contains the NGRX components for managing state.

In our main code base, you would expect to find this architecture replicated within each feature module that makes up the app. For simplicity here, we have included everything inside the app module.

# Your Mission
1. In the mock service, we have introduced an exaggerated delay when loading the contact list to simulate loading a larger data set into state. Extend the component, with the help of angular directives, to show a loading message when the contact list is empty.
2. We have the functionality to edit existing contacts, now add an "Add Contact" button to the contact list with the appropriate actions and effects. You should be able to re-use the contact-edit-dialog.
3. The effects deal with external interactions, as such there is no guarantee that they won't recieve an error response. How could we handle the case where a service function throws an error? You don't need to write any code for this one just, explain what you would change/add, optionally include an example snippet. (hint: rxjs provides an operator for this)
4. We have provided a Role type in the contact.model.ts file, assume a contact can be associated with one or many projects, and can have a different role on each. Explain with the help of diagrams what the interface for managing a contact's roles might look like and list the steps you would take to implement that feature. No code is required for this question, you can choose how you present this, either include it as a PDF in your repo, or provide a public link to a SAAS such as figma or whimsical.

# Answers

1. //Optionally provide any notes relating to question 1 here.

For the UI, I created a public `loadingContacts` property on the `ContactListComponent` and used the `NgIf` structural directive to remove the loading message from the DOM once the contacts are returned from the Contact service. 

To toggle the loading message I created a `onContactsLoaded()` method inside `ContactListComponent` and used a subscriber on `contactList$` to call this method when it is delivered a non-empty array of contacts.

2. //Optionally provide any notes relating to question 2 here.

Reused the `ContactEditDialogue` fairly easily, needed to fix a bug where upon creating a new contact the `ContactService` returned the original contact object instead of the updated contact object with an updated ID. 
Added a unit test to catch the case.

3. //Provide your answer to question 3 here.

https://rxjs.dev/api/operators/catchError

The `catchError` operator seems appropriate. I would update the `ContactService` to return a response object that contains the requested data and optionally an error object that perhaps has an error code that the components use to evaluate how to respond to the error, and a human friendly message for either debugging or to show to a user. 

Something along these lines:
```ts
interface ServiceResponse<T> {
  error?: {
    message: string;
    code: AppErrorCode;
  },
  results: T,
}
```

4. //Provide your link or location of your file within the repo here.