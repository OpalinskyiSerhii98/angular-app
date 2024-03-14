import LoginPage from "../../PageObject/LoginPage";
describe("Login", ()=> {
  const loginPage = new LoginPage()

  beforeEach(()=>{
    loginPage.navigate()
  })

  it("should login", ()=>{
    const userData = {
      email: "test@test.com",
      password: "qwertY1234"
    }

    loginPage.emailInput.type(userData.email)
    loginPage.emailInput.invoke("val").should("eq", userData.email)

    loginPage.passwordInput.type(userData.password)
    loginPage.passwordInput.invoke("val").should("eq",userData.password)

    loginPage.rememberMeCheckbox.click()

    loginPage.logInButton.should("be.visible").and("be.enabled")
    loginPage.logInButton.click()

    loginPage.mainPage.should("eq", "http://localhost:4200/pages/dashboard")
  })
})
