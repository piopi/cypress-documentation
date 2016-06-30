import _ from 'lodash'
import { observable } from 'mobx'
import Log from './log-model'

export default class Command extends Log {
  @observable event = false
  @observable number
  @observable numElements
  @observable visible = true

  constructor (props) {
    super(props)

    this.event = props.event
    this.number = props.number
    this.numElements = props.numElements
    this.visible = props.visible
  }

  update (props) {
    super.update(props)

    this.event = props.event
    this.numElements = props.numElements
    this.visible = props.visible
  }

  serialize () {
    return _.extend(super.serialize(), {
      event: this.event,
      number: this.number,
      numElements: this.numElements,
      visible: this.visible,
    })
  }
}
