import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  identification: {
    validators: [validator('presence', true)],
    message: 'Введите логин'
  },
  password: {
    validators: [validator('presence', true)],
    message: 'Введите пароль'
  }
});

export default Ember.Component.extend(Validations, {
  identification: null,
  password: null,
  didValidate: false,

  actions: {
    authenticateVia(provider) {
      this.attrs.authenticateVia(provider);
    },

    submit() {
      this.validate().then(({ validations }) => {
        if (validations.get('isValid')) {
          this.attrs.submit(this.getProperties('identification', 'password'));
        }
      });
      this.set('didValidate', true);
    }
  }
});
