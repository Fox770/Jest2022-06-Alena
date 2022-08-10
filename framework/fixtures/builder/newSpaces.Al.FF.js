const { faker } = require('@faker-js/faker');

/** Create new Space Flow Fast Developers api */

const BuildSpace = function () {
  this.addNewTitle = function () {
    this.title = faker.name.lastName()
    return this
  }
  this.addPrivate = function () {
    this.private = 'false'
    return this
  }
  this.addSubspace = function () {
    this.subspace = 'true'
    return this
  }
  this.addDefaultCardTypeId = function () {
    this.default_card_type_id = faker.random.numeric([])
    return this
  }
  this.addExternalId = function () {
    this.external_id = faker.random.numeric()
    return this
  }
}

export default BuildSpace;

export const newSpace = {
   title: faker.name.lastName(),
   external_id: faker.random.numeric(),
   allower_card_type_ids: faker.random.numeric([]),
};

export const SpaceId = {
  title: faker.name.lastName(),
  external_id: faker.random.numeric(),
};





