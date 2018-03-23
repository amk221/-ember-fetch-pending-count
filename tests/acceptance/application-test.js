import { module, test } from 'qunit';
import { visit, waitUntil, getSettledState } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    visit('/');

    let ajaxed = 0;

    await waitUntil(() => {
      ajaxed += getSettledState().pendingRequestCount;
      return ajaxed === 1;
    });

    assert.equal(ajaxed, 1);
  });
});
