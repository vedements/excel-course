import {capitalize} from '@core/utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided for DomListener')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners() {
    this.listeners.forEach(listener => {
      // eslint-disable-next-line no-unused-vars
      const method = getMethodName(listener)
      const name = this.name || ''
      if (!this[method]) {
        throw new Error(`Method ${method} is not impl in ${name} Component`)
      }
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }

  removeDomListenets() {
    this.listeners.forEach(listener => {
      // eslint-disable-next-line no-unused-vars
      const method = getMethodName(listener)
      this.$root.off(listener, this[method])
    })
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
