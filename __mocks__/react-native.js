const rn = require('react-native');
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter.js', () => {
  const {EventEmitter} = require('events');
  return EventEmitter;
});
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
module.exports = rn;
