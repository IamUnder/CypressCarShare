describe("Cambiar de rueda seleccionando valores distintos", () => {
    const url = 'https://carshare-preprod.herokuapp.com/public/api';
    it("Navega hasta home", () => {
        // Abre la página principal
        cy.visit("https://carshare-preprod.netlify.app");
    });
    it("Accede al login", () => {

        // Pulsa el botón acceder
        cy.get("a[cy-id='acceder']").click();

    });
    it("Accede a la aplicación", () => {
        // Pone los datos en email y contraseña
        cy.get("input[type='email']").type("carshare.ifpvdg@gmail.com");
        cy.get("input[type='password']").type("Chubaca2020");

        // Hace una captura antes de entrar
        cy.screenshot();

        // Pulsa el botón Login
        cy.intercept('POST',`${url}/login`).as('enviarLogin');
        cy.get("button[cy-id='login']").click();
        cy.wait('@enviarLogin');
        
    });
    it("Accede al perfil y pulsa el botón cambiar horario", () => {
        // Hace una captura antes de entrar
        cy.screenshot();

        // Pulsa el avatar para acceder a Editar Perfil
        cy.get("a[cy-id='editProfile']").click();        

        // Pulsa el botón Cambiar horario
        cy.get("button[cy-id='cambiar-horario']").click();
        // Pulsa el botón Continuar
        cy.get("a[cy-id='continuar-unirse']").click();
        
    });
    it("Selecciona su horario", () => {
        cy.wait(1500);
        const ids = [1,4,7,11,15,18,19,22,25,27,30];
        // Selecciona celdas y opciones 
        ids.forEach((id,index) => {
            cy.get(`td[data-id='${id}']`).click();
            cy.wait(1000);
            cy.get("button[cy-id='agregar-opcion']").click();
            cy.wait(1000);
        });
        
        // Hace una captura antes de enviar
        cy.screenshot();


    });
    it("Envía el horario", () => {
        cy.intercept('POST',`${url}/usuario/unirse`).as('enviarDatos');
        
        // Pulsa el botón Enviar
        cy.get("button[cy-id='enviar-horario']").click({timeout:180000});
        
        // Espera la respuesta con un máximo de 2 minutos
        cy.wait('@enviarDatos',{timeout:180000,requestTimeout:180000,responseTimeout:180000});

    });
});
