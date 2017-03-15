import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',

  emailIsValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  messageIsValid: Ember.computed.gte('message.length', 5),

  isValid: Ember.computed.and('emailIsValid', 'messageIsValid'),

  isDisabled: Ember.computed.not('isValid'),

  actions: {
    sendMessage() {
      alert(`${this.get('emailAddress')}: ${this.get('message')}`);
      this.set('responseMessage', `We got your message and we’ll get in touch soon`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
