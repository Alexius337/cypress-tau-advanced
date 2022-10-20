/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/15686777423')
})

it('Chaining commands', () => {

  cy
    .get('[data-cy=task]')

    // select the second element (number 1)
    .eq(1)

    // the second task element has the text 'milk'
    .should('have.text', ' milk')

});