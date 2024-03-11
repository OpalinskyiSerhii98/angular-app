describe("Dialog", ()=>{
  beforeEach(()=>{
    cy.visit("/pages/modal-overlays/dialog")
  })
  it("should open dialog", ()=>{
    const containerSelector = "nb-card-body.result-from-dialog"
    cy.get(`${containerSelector} button`).contains("Enter Name").click()
    const windowSelector = "nb-card"
    cy.get(`${windowSelector} nb-card-header`).contains("Enter your name").should("be.visible")
    cy.get(`${windowSelector} input`).should("be.visible")
    cy.get(`${windowSelector} button`).contains("Cancel").should("be.visible")
    cy.get(`${windowSelector} button`).contains("Submit").should("be.visible")
  })
})
