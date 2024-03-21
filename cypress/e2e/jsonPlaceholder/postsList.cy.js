describe('Json placeholder', {
  env: {
    API_URL: "https://jsonplaceholder.typicode.com/"
  }
} ,()=> {
  it('should return post list', () => {
    cy.request({
      url: `${Cypress.env("API_URL")}/posts`
    }).as("posts")
    cy.get("@posts").should('not.eq', null)
    cy.get("@posts").then(posts => {
      expect(posts.body).to.have.length.above(0) // перевірка, що список постів не порожній
      posts.body.forEach(post => {
        expect(post).to.have.property('id')
        expect(post).to.have.property('title')
        expect(post).to.have.property('body')
        expect(post).to.have.property('userId')
      })
    })
  })
})
