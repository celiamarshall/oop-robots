const shortid = require('shortid')

class Robot {
  constructor(description = null ) {
    this._id = shortid.generate()
    this._description = description
    this._network = []
  }

  meet (otherRobot) {
    if(!(otherRobot instanceof Robot)) throw new Error ('Cannot meet non-robots')
    this._network.push(otherRobot.id)
    otherRobot._network.push(this.id)
    return this
  }

  get id () {
    return this._id
  }

  set id (val) {
    throw new Error('You cannot do that')
  }

  get description () {
    return this._description
  }

  set description (newDescription) {
    if(!newDescription) throw new Error ('Please enter a description')
    this._description = newDescription
  }

  get network () {
    return this._network
  }

  set network (val) {
    throw new Error('You cannot do that')
  }

}

module.exports = Robot