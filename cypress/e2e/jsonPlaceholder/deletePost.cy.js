describe('Json placeholder', {
  env: {
    API_URL: "https://jsonplaceholder.typicode.com/"
  }
} ,()=>{
  it('should delete post', ()=> {
    cy.request({
      method: 'DELETE',
      url: `${Cypress.env("API_URL")}/posts/1`,
    }).as("createPost")
    cy.get("@createPost").its('status').should('eq', 200)
  })
})
