export default class LoginPage {
  _url = "auth/login"
  _containerSelector = "nb-card-body"
  _dashboardUrl = "pages/dashboard"

  navigate(){
    cy.visit(this._url)
  }

  get emailInput(){
    return cy.get(this._containerSelector).find(`#input-email`).first()
  }
  get passwordInput(){
    return cy.get(this._containerSelector).find(`#input-password`).last()
  }
  get rememberMeCheckbox(){
    return cy.get(this._containerSelector).find(`span.custom-checkbox`)
  }
  get logInButton(){
    return cy.get(this._containerSelector).find(`button`)
  }

  get mainPage(){
    return cy.url(this._dashboardUrl)
  }
}
