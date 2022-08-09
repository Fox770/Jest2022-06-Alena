const { faker } = require('@faker-js/faker');

/** Create new Space 
Flow Fast Developers api 
*/
/** Create new column 
Flow Fast Developers api 
*/

const randomId = (id) => {
  for (let i = 0; i < 2; i++) {
      const random = id[Math.floor(Math.random() * id.length)];
      return random
  }
}

const BuildColumn = function () {
  const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    this.addNewBoardId = function () {
        this.board_id = randomId(id) // или лучше убрать этот ID из списка
        return this
      }
    this.addName = function () {
      this.title = faker.internet.userName()
      return this
    }
    this.addOrder = function () {
      this.sort_order = randomId(id)
      return this
    }
    this.addType = function () {
        this.type = randomId(id)
        return this
      }
  }

export default BuildColumn;

export const BuildSpace = function () {
  const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    this.addNewTitle = function () {
        this.title = faker.name.lastName() // или лучше убрать этот ID из списка
        return this
      }
    this.addExternalId = function () {
        this.external_id = randomId(id)
        return this
      }
};


export const BuildSpace2 = {
    title: faker.name.lastName,
    external_id: randomId(id)
};
