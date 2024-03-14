import SmartTable from "../../PageObject/SmartTable";

describe("Smart table", ()=> {
  const smartTable = new SmartTable()

  beforeEach(()=>{
    smartTable.navigate()
  })

  it("should add record", ()=>{
    const userData = {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      username: "@JDoe",
      email: "JDoe@mail.com",
      age: "33"
    }
    smartTable.addButon.click()

    smartTable.idInput.type(userData.id)
    smartTable.idInput.invoke("val").should("eq", userData.id)

    smartTable.firstNameInput.type(userData.firstName)
    smartTable.firstNameInput.invoke("val").should("eq", userData.firstName)

    smartTable.lastNameInput.type(userData.lastName)
    smartTable.lastNameInput.invoke("val").should("eq", userData.lastName)

    smartTable.usernameInput.type(userData.username)
    smartTable.usernameInput.invoke("val").should("eq", userData.username)

    smartTable.emailInput.type(userData.email)
    smartTable.emailInput.invoke("val").should("eq", userData.email)

    smartTable.ageInput.type(userData.age)
    smartTable.ageInput.invoke("val").should("eq", userData.age)

    smartTable.submitButton.click()
  })

  it("should edit record", ()=>{
    const editedUserData = {
      id: "5",
      firstName: "Jane",
      lastName: "Smith",
      username: "@JSmith",
      email: "JSmith@mail.com",
      age: "35"
    }
    smartTable.editButton.click()

    smartTable.idInput.clear().type(editedUserData.id)
    smartTable.firstNameInput.clear().type(editedUserData.firstName)
    smartTable.lastNameInput.clear().type(editedUserData.lastName)
    smartTable.usernameInput.clear().type(editedUserData.username)
    smartTable.emailInput.clear().type(editedUserData.email)
    smartTable.ageInput.clear().type(editedUserData.age)

    smartTable.submitButton.click()

    smartTable.idColumn.should("contain.text", editedUserData.id);
    smartTable.firstNameColumn.should("contain.text", editedUserData.firstName);
    smartTable.lastNameColumn.should("contain.text", editedUserData.lastName);
    smartTable.usernameColumn.should("contain.text", editedUserData.username);
    smartTable.emailColumn.should("contain.text", editedUserData.email);
    smartTable.ageColumn.should("contain.text", editedUserData.age);
    })
  })
