import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pr-vendor-option', 'Integration | Component | pr vendor option', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pr-vendor-option}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pr-vendor-option}}
      template block text
    {{/pr-vendor-option}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
