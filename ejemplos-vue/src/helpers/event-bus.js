import emitter from 'tiny-emitter/instance'

export default {
  $emit: emitter.emit,
  $on: emitter.on,
  $off: emitter.off,
}