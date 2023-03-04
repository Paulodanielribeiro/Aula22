describe('Home Page Spec', () => {
  beforeEach(()=>{
    cy.visit('')
  })
  it('should increment counter correctly', () => {
    const times = 10
    const incrementButton =  cy.get('[data-cy="increment-button"]')
    for(let i=0; i< times;i++){
   incrementButton.click()
    }
    cy.get('[data-cy="counter-value"]').should('have.text',times)
  })
})

