import { moduleForModel, test } from 'ember-qunit';

moduleForModel('account', 'Unit | Serializer | account', {
  // Specify the other units that are required for this test.
  needs: ['serializer:account']
});

test('should remove password attribute', function(assert) {
  let account = this.subject({ password: 'secret' });
  let res = account.serialize();

  assert.notOk(res.data.attributes.hasOwnProperty('password'));
});
