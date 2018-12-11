const { expect } = require('chai')
const Robot = require('../src/robot')

describe('Robot', function () {
  describe('new Robot()', function () {
    it('should randomly generate a unique id upon creation', function () {
      const robotA = new Robot()
      const robotB = new Robot()
      expect(robotA.id).to.not.equal(robotB.id)
    })
    it('should allow for a description property to be set in the constructor', function () {
      const description = 'description'
      const robot = new Robot(description)
      expect(robot).to.have.property('description')
      expect(robot.description).to.equal(description)
    })
    it('if the description is not set, it should be null', function () {
      const robot = new Robot()
      expect(robot.description).to.equal(null)
    })
  })

  describe('get id', function () {
    it('should return the id of the robot', function () {
      const robot = new Robot()
      expect(robot.id).to.be.ok
      // expect(robot.getId).to.not.equal(undefined)
      // expect(robot.getId).to.be.a.string
    })
  })

  describe('set id', function () {
    it('should throw an error if an attempt is made to change the id', function () {
      const robot = new Robot()
      const actual = () => robot.id = 1
      expect(actual).to.throw()
    })
  })

  describe('get description', function () {
    it('should return the description', function () {
      const robot = new Robot('I am a robot')
      expect(robot.description).to.equal('I am a robot')
    })
  })

  describe('set description', function () {
    it('should throw an error if the value is empty', function () {
      const robot = new Robot()
      const actual = () => robot.description = ''
      expect(actual).to.throw()
    })
    it('should set the description of the robot', function () {
      const robot = new Robot()
      robot.description = 'I am a robot'
      expect(robot.description).to.equal('I am a robot')
    })
  })

  describe('get network', function () {
    it('should return an array of all the ids the robot has met', function () {
      const robot = new Robot()
      expect(robot.network).to.be.ok
    })
  })

  describe('set network', function () {
    it('should throw an error if an attempt is made to change the network', function () {
      const robot = new Robot()
      const actual = () => robot.network = ['hal', 'rob']
      expect(actual).to.throw()
    })
  })

  describe('#meet()', function () {
    it('should have a meet function that takes another instance of a robot', function () {
      const robot = new Robot()
      const otherRobot = new Robot()
      robot.meet(otherRobot)
      expect(robot.network).to.have.lengthOf(1)
    })
    it('should throw an error if the inserted value is not a robot instance', function () {
      const robot = new Robot()
      const actual = () => robot.meet({'fake': 'robot'})
      expect(actual).to.throw()
    })
    it('should add the robots ids to each other\'s networks', function () {
      const robot = new Robot()
      const otherRobot = new Robot()
      robot.meet(otherRobot)
      expect(robot.network).to.include(otherRobot.id)
      expect(otherRobot.network).to.include(robot.id)

    })
  })
})
