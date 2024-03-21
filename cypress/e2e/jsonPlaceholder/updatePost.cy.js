describe('Json placeholder', {
  env: {
    API_URL: "https://jsonplaceholder.typicode.com/"
  }
} ,()=>{
  it('should update post', ()=> {
    const requestBody = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }
    cy.request({
      method: 'PUT',
      url: `${Cypress.env("API_URL")}/posts/1`,
      headers:{
        'Content-type': 'application/json; charset=UTF-8',
      },
      body:requestBody
    }).as("updatePost")
    cy.get("@updatePost").its('status').should('eq', 200)
    cy.get("@updatePost").its('body').should('contain', requestBody)
  })
})
