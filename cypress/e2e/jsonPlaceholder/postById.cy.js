describe('Json placeholder', {
  env: {
    API_URL: "https://jsonplaceholder.typicode.com/"
  }
} ,()=>{
  it('should return post item by id', ()=> {
    cy.request(`${Cypress.env("API_URL")}/posts/1`).its("body.id").should('eq', 1)
  })
})
