export default class SmartTable {
  _url = "pages/tables/smart-table"
  _containerSelector = "nb-card-body"

  navigate() {
    cy.visit(this._url)
  }

  get addButon() {
    return cy.get(this._containerSelector).find(`i.nb-plus`)
  }

  get idInput() {
    return cy.get(this._containerSelector).find('input[ng-reflect-name="id"]').first()
  }

  get firstNameInput() {
    return cy.get(this._containerSelector).find('input[placeholder="First Name"]').eq(1)
  }

  get lastNameInput() {
    return cy.get(this._containerSelector).find('input[placeholder="Last Name"]').eq(1)
  }

  get usernameInput(){
    return cy.get(this._containerSelector).find('input[placeholder="Username"]').eq(1)
  }

  get emailInput(){
    return cy.get(this._containerSelector).find('input[placeholder="E-mail"]').eq(1)
  }

  get ageInput(){
    return cy.get(this._containerSelector).find('input[placeholder="Age"]').last()
  }

  get submitButton(){
    return cy.get(this._containerSelector).find(`i.nb-checkmark`)
  }

  get editButton(){
    return cy.get(this._containerSelector).find(`i.nb-edit`).first()
  }

  get idColumn(){
    return cy.get(this._containerSelector).find("td:nth-child(2)")
  }

  get firstNameColumn() {
    return cy.get(this._containerSelector).find("td:nth-child(3)")
  }

  get lastNameColumn() {
    return cy.get(this._containerSelector).find("td:nth-child(4)")
  }

  get usernameColumn() {
    return cy.get(this._containerSelector).find("td:nth-child(5)")
  }

  get emailColumn() {
    return cy.get(this._containerSelector).find("td:nth-child(6)")
  }

  get ageColumn() {
    return cy.get(this._containerSelector).find("td:nth-child(7)")
  }

}

