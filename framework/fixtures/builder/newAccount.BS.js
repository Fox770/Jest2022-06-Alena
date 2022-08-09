const { faker } = require('@faker-js/faker');

/** Basic authorization in Book Store API */

const BuildAccount = function () {
  this.addUsername = function () {
    this.userName = faker.internet.userName()
    return this
  }
  this.addPassword = function () {
    this.password = faker.internet.password()
    return this
  }
  this.generateToken = function () {
    const fields = Object.getOwnPropertyNames(this)
    const data = {}

    fields.forEach((fieldName) => {
      if (this[fieldName] && typeof this[fieldName] !== 'function') {
        data[fieldName] = this[fieldName]
      }
    })
    return data
  }
}

export default BuildAccount;