class Profile{
    elements = {
        firstName : () => cy.get('#firstName'),
        lastName : () => cy.get('#lastName'),
        email : () => cy.get('#email'),
        password : () => cy.get('#password'),  
        confirmPassword : () => cy.get('#confirmPassword'),
        dateOfBirth : () => cy.get('#dob'),
        phoneNumber : () => cy.get('#phone'),
        address : () => cy.get('#address'),
        linkedin: () => cy.get('#linkedIn'),
        github: () => cy.get('#github'),
        male : () => cy.get('#male'),
        female : () => cy.get('#female'),
        preferNotToSay : () => cy.get('#preferNotToSay'),
        submit: () => cy.get('input[type="submit"]'),
        p:() => cy.get('p.success'),

    }
    validationErrMsg(msg){
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal(msg);
        });
        this.elements.submit().click()

    }


}
export default Profile