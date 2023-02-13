import * as input from './input.json';
import * as expectedOutput from './expected.json';
import { Output } from '../src/Output';
import { MyMap } from '../src/main';


const myOutput = MyMap(input);

const assert = require('assert');
describe('MyMap', function () {
  describe('MyMap', function () {
    it('actual value must match expected value', function () {
      assert.True(AreTwoOutputsEqual(myOutput, expectedOutput));
    });
  });
});


export function AreTwoOutputsEqual(actual: Output, expected: Output): boolean {
    if (actual.ContactId !== expected.ContactId) { return false; }
    if (actual.Email !== expected.Email) { return false; }
    if (actual.IsInternalUpdate !== expected.IsInternalUpdate) { return false; }
    if (actual.Preferences.length !== expected.Preferences.length) { return false; }
    for (const expectedPreference in expected.Preferences) {
        if (expected.Preferences[expectedPreference].PrefCode !== actual.Preferences[expectedPreference].PrefCode 
            || expected.Preferences[expectedPreference].CurrentValue !== actual.Preferences[expectedPreference].CurrentValue) {
            return false;
        }
    }
    return true;
}

