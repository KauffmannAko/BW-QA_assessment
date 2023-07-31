/// <reference types="Cypress" />

import Profile from "../Pages/create-profile";

const profile = new Profile()

describe('Create a profile',()=>{
    
    let testData;

// Loads test data before test executions
    before(()=>{
        cy.fixture('data').then(function(Data){
            testData = Data;
        })
     })

// open page before each test
    beforeEach(()=>{

        cy.visit('/');
    })

    it('Verify Successful Profile Creation filling out only mandatory field',()=>{

        profile.elements.firstName().type(testData.names.firstName);
        profile.elements.lastName().type(testData.names.lastName);
        profile.elements.email().type(testData.emails.validEmail);
        profile.elements.password().type(testData.password.validPassword1);
        profile.elements.confirmPassword().type(testData.password.validPassword1);
        profile.elements.submit().click();
        profile.elements.p().should('exist');
    })

    it('Verify First Name  Mandatory Field Validation ',()=>{

        // profile.elements.firstName().type(testData.names.firstName);
        profile.elements.lastName().type(testData.names.lastName);
        profile.elements.email().type(testData.emails.validEmail);
        profile.elements.linkedin().type(testData.url.validLinkedin);
        profile.elements.password().type(testData.password.validPassword1);
        profile.elements.confirmPassword().type(testData.password.validPassword1);
        // Capture the alert and make assertions on it
        profile.validationErrMsg("First name must be filled out");

    })
    it('Verify Last Name  Mandatory Field Validation ',()=>{

        profile.elements.firstName().type(testData.names.firstName);
        // profile.elements.lastName().type(testData.names.lastName);
        profile.elements.email().type(testData.emails.validEmail);
        profile.elements.linkedin().type(testData.url.validLinkedin);
        profile.elements.password().type(testData.password.validPassword1);
        profile.elements.confirmPassword().type(testData.password.validPassword1);
        // Capture the alert and make assertions on it
        profile.validationErrMsg("Last name must be filled out");

    })
    it('Verify Email Mandatory Field Validation ',()=>{

        profile.elements.firstName().type(testData.names.firstName);
        profile.elements.lastName().type(testData.names.lastName);
        // profile.elements.email().type(testData.emails.validEmail);
        profile.elements.linkedin().type(testData.url.validLinkedin);
        profile.elements.password().type(testData.password.validPassword1);
        profile.elements.confirmPassword().type(testData.password.validPassword1);
        // Capture the alert and make assertions on it
        profile.validationErrMsg("Email must be filled out");

    })
    it('Verify Password Mandatory Field Validation ',()=>{

        profile.elements.firstName().type(testData.names.firstName);
        profile.elements.lastName().type(testData.names.lastName);
        profile.elements.email().type(testData.emails.validEmail);
        profile.elements.linkedin().type(testData.url.validLinkedin);
        // profile.elements.password().type(testData.password.validPassword1);
        profile.elements.confirmPassword().type(testData.password.validPassword1);
        // Capture the alert and make assertions on it
        profile.validationErrMsg("Password must be filled out");

    })

    it('Verify Confirm password Mandatory Field Validation ',()=>{

        profile.elements.firstName().type(testData.names.firstName);
        profile.elements.lastName().type(testData.names.lastName);
        profile.elements.email().type(testData.emails.validEmail);
        profile.elements.linkedin().type(testData.url.validLinkedin);
        profile.elements.password().type(testData.password.validPassword1);
        // profile.elements.confirmPassword().type(testData.password.validPassword);
        // Capture the alert and make assertions on it
        profile.validationErrMsg("Confirm password must be filled out");

    })

    it('verify that the Email field only accepts valid email addresses',()=>{

        profile.elements.firstName().type(testData.names.firstName);
        profile.elements.lastName().type(testData.names.lastName);
        profile.elements.email().type(testData.emails.invalidEmail);
        profile.elements.linkedin().type(testData.url.validLinkedin);
        profile.elements.password().type(testData.password.validPassword1);
        profile.elements.confirmPassword().type(testData.password.validPassword1);
        // Capture the alert and make assertions on it
        profile.validationErrMsg("Email must be a valid email address");

    })
    it('verify that the Confirm Password field matches the Password field',()=>{

        profile.elements.firstName().type(testData.names.firstName);
        profile.elements.lastName().type(testData.names.lastName);
        profile.elements.email().type(testData.emails.validEmail);
        profile.elements.linkedin().type(testData.url.validLinkedin);
        profile.elements.password().type(testData.password.validPassword1);
        profile.elements.confirmPassword().type(testData.password.validPassword2);
        // Capture the alert and make assertions on it
        profile.validationErrMsg("Passwords do not match");

    })
    it('verify that the LinkedIn URL field only accepts valid LinkedIn profile URLs',()=>{

        profile.elements.firstName().type(testData.names.firstName);
        profile.elements.lastName().type(testData.names.lastName);
        profile.elements.email().type(testData.emails.validEmail);
        profile.elements.linkedin().type(testData.url.invalidLinkedin[1]);
        profile.elements.password().type(testData.password.validPassword1);
        profile.elements.confirmPassword().type(testData.password.validPassword1);
        // Capture the alert and make assertions on it
        // profile.validationErrMsg("Passwords do not match");
        profile.elements.submit().click()
        cy.url().should('not.include','https://qa-assessment.pages.dev')

    })
    it('verify that the Github URL field only accepts valid GitHub profile URLs',()=>{

        profile.elements.firstName().type(testData.names.firstName);
        profile.elements.lastName().type(testData.names.lastName);
        profile.elements.email().type(testData.emails.validEmail);
        profile.elements.linkedin().type(testData.url.validLinkedin);
        profile.elements.github().type(testData.url.invalidLinkedin[1]);
        profile.elements.password().type(testData.password.validPassword1);
        profile.elements.confirmPassword().type(testData.password.validPassword1);
        // Capture the alert and make assertions on it
        // profile.validationErrMsg("Passwords do not match");
        profile.elements.submit().click()
        cy.url().should('not.include','https://qa-assessment.pages.dev')

    })
    it('verify that a user can create a profile successfully filling out all fields',()=>{

        profile.elements.firstName().type(testData.names.firstName);
        profile.elements.lastName().type(testData.names.lastName);
        profile.elements.email().type(testData.emails.validEmail);
        profile.elements.linkedin().type(testData.url.validLinkedin);
        profile.elements.male().click()
        profile.elements.dateOfBirth().click()
        profile.elements.address().type(testData.Address[0])
        profile.elements.password().type(testData.password.validPassword1);
        profile.elements.confirmPassword().type(testData.password.validPassword1);
        // Capture the alert and make assertions on it
        // profile.validationErrMsg("Passwords do not match");
        profile.elements.submit().click();
        cy.url().should('include','https://qa-assessment.pages.dev');

    })
    it('verify that the Phone Number field only accepts a maximum length of 10 digits',()=>{

        profile.elements.firstName().type(testData.names.firstName);
        profile.elements.lastName().type(testData.names.lastName);
        profile.elements.email().type(testData.emails.validEmail);
        profile.elements.linkedin().type(testData.url.validLinkedin);
        profile.elements.phoneNumber().type(testData.phoneNumber.invalidPhoneNumber)
        profile.elements.male().click()
        profile.elements.dateOfBirth().click()
        profile.elements.address().type(testData.Address[0])
        profile.elements.password().type(testData.password.validPassword1);
        profile.elements.confirmPassword().type(testData.password.validPassword1);
        // Capture the alert and make assertions on it
        // profile.validationErrMsg("Passwords do not match");
        profile.elements.submit().click()
        cy.url().should('not.include','https://qa-assessment.pages.dev?')

    })

    it('verify that the First Name field only accept alphabetic characters',()=>{

        profile.elements.firstName().type('nana123');
        profile.elements.lastName().type('ako');
        profile.elements.email().type(testData.emails.validEmail);
        profile.elements.password().type(testData.password.validPassword1);
        profile.elements.confirmPassword().type(testData.password.validPassword1);
        profile.elements.linkedin().type(testData.url.validLinkedin);
        profile.validationErrMsg("First name must contain alphabetical characters only");
       
    })
    it('verify that the  Last Name field only accept alphabetic characters',()=>{

        profile.elements.firstName().type('nana');
        profile.elements.lastName().type('ako123');
        profile.elements.email().type(testData.emails.validEmail);
        profile.elements.password().type(testData.password.validPassword1);
        profile.elements.confirmPassword().type(testData.password.validPassword1);
        profile.elements.linkedin().type(testData.url.validLinkedin);
        profile.validationErrMsg("Last name must contain alphabetical characters only");
       
    })

    it('verify that the Password field enforces complexity requirements for alphanumeric characters and symbols',()=>{

        profile.elements.firstName().type('nana');
        profile.elements.lastName().type('ako');
        profile.elements.email().type(testData.emails.validEmail);
        profile.elements.password().type(testData.password.weakpass);
        profile.elements.confirmPassword().type(testData.password.weakpass);
        profile.elements.linkedin().type(testData.url.validLinkedin);
        profile.elements.submit().click()
        cy.url().should('not.include','https://qa-assessment.pages.dev')
       
    })
})
