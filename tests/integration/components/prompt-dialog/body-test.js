import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('prompt-dialog/body', 'Integration | Component | prompt dialog/body', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{prompt-dialog/body}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#prompt-dialog/body}}
      template block text
    {{/prompt-dialog/body}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
