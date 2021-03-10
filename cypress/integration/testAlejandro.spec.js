describe('Test e2e Alejandro añadir usuario', () => {
    
    it('Accedemos a la web', () => {
        cy.visit('https://carshare-preprod.netlify.app');
        cy.get('[cy-id=acceder]').click();
        cy.wait(500);
        cy.get('h1').should('contain', 'Login');
    });

    it('Logueamos el usuario', () => {
        cy.get('[type=email]').type('carshare.ifpvdg@gmail.com');
        cy.get('[type=password]').type('Chubaca2020');
        cy.get('[cy-id=login]').click();
        cy.get('h1').should('contain','Mi rueda');
    });

    it('Navegamos hasta admin. usuarios', () => {
        cy.wait(2000);
        cy.get('[cy-id=adminUsers]').click({force: true});
    });

    it('Clicamos sobre el boton addUser', () => {
        cy.wait(2000);
        cy.get('[cy-id=addUser]').click();
    });

    it('Rellenamos los campos', () => {
        cy.get('[cy-id=cy-name]').type('Armando');
        cy.get('[cy-id=cy-surname]').clear().type('Bronca');
        cy.get('[cy-id=cy-email]').type('armandobronca@gmail.com');
        cy.get('[cy-id=cy-password]').type('voyarmandobronca');
        cy.get('[cy-id=cy-select]').select('Usuario');
    });

    it('Pulsamos crear usuario', () => {
        cy.get('[cy-id=cy-crearUsuario]').click();
    });

});