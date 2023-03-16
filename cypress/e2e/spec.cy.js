describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://webuybayareahomes.netlify.app/');
    cy.get('button').contains('Get Cash Offer').click();
  })
})