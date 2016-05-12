import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: {
    validators: [validator('presence', true)]
  },
  email: {
    validators: [
      validator('presence', true),
      validator('format', {
        type: 'email'
      })
    ]
  },
  password: {
    validators: [validator('presence', true)]
  },
  phone: {
    validators: [validator('presence', true)]
  }
});

export default Ember.Component.extend(Validations, {
  didValidate: false,

  actions: {
    submit() {
      this.validate().then(({ validations }) => {
        if (validations.get('isValid')) {
          this.attrs.submit({
            email: this.get('email'),
            name: this.get('name'),
            password: this.get('password'),
            phone: this.get('phone')
          });
        }
        this.set('didValidate', true);
      });
    }
  }
});
