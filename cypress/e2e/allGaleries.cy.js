/// <reference types="Cypress" />
import { allGaleries } from '../page_objects/allGaleries'

describe ('all galleries page', () =>{
    let searchField = '111';

    beforeEach('visit all galeries page', () =>{
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.url().should ('include', '/gallery-app')
    })

    it('go to login page', () =>{
        allGaleries.loginBtn.click();
        cy.url().should('include', '/login');
    })

    it('go to register page', () =>{
        allGaleries.registerBtn.click();
        cy.url().should('include', '/register');
    })

    it('search gallery', () =>{
        allGaleries.search (searchField)
    })

    it('get first gallery', () =>{
        allGaleries.firstGalerry.click();
        cy.url().should('include', '/galleries')
    })

    it('get second gallery', () =>{
        allGaleries.secondGallery.click()
        cy.url().should('include', '/galleries')
    })

    it('get third gallery', () =>{
        allGaleries.thirdGallery.click()
        cy.url().should('include', '/galleries')
    })

    it('get fourth gallery', () =>{
        allGaleries.fourthGallery.click()
        cy.url().should('include', '/galleries')
    })

    it('get fifth gallery', () =>{
        allGaleries.fifthGallery.click()
        cy.url().should('include', '/galleries')
    })

    it('get sixth gallery', () =>{
        allGaleries.sixthGallery.click()
        cy.url().should('include', '/galleries')
    })

    it('load more galleries', () => {
        allGaleries.loadMoreBtn.click()
        cy.url().should ('include', '/gallery-app')
    })
})
