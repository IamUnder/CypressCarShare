describe('Test e2e Jorge editar perfil usuario', () => {
    
    it('Accedemos a la web', () => {
        cy.visit('https://carshare-preprod.netlify.app');
        cy.get('[cy-id=agregar]').click();
        cy.get('h1').should('contain', 'Login');
    });

    it('Logueamos el usuario', () => {
        cy.get('[type=email]').type('carshare.ifpvdg@gmail.com');
        cy.get('[type=password]').type('Chubaca2020');
        cy.get('[cy-id=login]').click();
        cy.get('h1').should('contain','Mi rueda');
    });

    it('Navegamos hasta editar perfil', () => {
        cy.get('[cy-id=editProfile]').click();
        cy.get('h1').should('contain','Editar perfil');
    });

    it('Comprobamos que cambiamos el campo y este se actualiza', () => {
        var string = 'apellido' + Math.round(Math.random()*10);
        cy.get('[cy-id=apellido]').clear().type(string);
        cy.get('[cy-id=guardar]').click();
        cy.wait(500);
        cy.reload();
        cy.get('[cy-id=apellido]').should('have.value',string);
    });
});