/// <reference types="Cypress" />
import { create } from '../page_objects/create'

describe('create gallery', () =>{
  let validTitle = 'image';
  let invalidTitle = 'a'
  let validDescription = 'description'
  let invalidDescription = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. N'
  let validUrl = 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg'
  let wrongUrl = 'https://upload.mp3'

  beforeEach('login', () =>{
    cy.visit('https://gallery-app.vivifyideas.com/login/')
    cy.get('#email').type('test2223@gmail.com');
    cy.get('#password').type('test22232');
    cy.get('.btn').click();
    cy.get('.mr-auto > :nth-child(3) > .nav-link').click();
    cy.url().should('include', '/create')

  })

  it('descrption > 1000 characters', () =>{
    create.descriptionWith1000Char(validTitle, invalidDescription, validUrl);
    cy.url().should('include', '/create');
  })

  it('without title', () =>{
    create.withoutTitle(validDescription,validUrl);
    cy.url().should('include', '/create');
  })

  it('title < 2 character', () =>{
    create.titleContainLess2character(invalidTitle, validDescription, validUrl);
    cy.url().should('include', '/create');
  })

  it('wrong url format', () =>{
    create.wrongUrlFormat(validTitle, validDescription, wrongUrl);
    cy.url().should('include', '/create');
  })

  it('all empty fields', () =>{
    create.allEmptyFields();
    cy.url().should('include', '/create');
  })

  it('add one image without description', () =>{
    create.oneImgWithoutDescription(validTitle, validUrl);
    cy.url().should('not.include', '/create');
  })

  it('add one image with description', () =>{
    create.oneImgWithDescription(validTitle, validDescription, validUrl);
    cy.url().should('not.include', '/create');
  })

  it('two images', () => {
    create.twoImage(validTitle,validDescription,validUrl);
    cy.url().should('not.include', '/create');
  })

  it('moving second img', () =>{
    create.getSecondImageOnFirstPlaceUsingArrow(validTitle,validDescription,validUrl);
    cy.url().should('not.include', '/create');
  })
})