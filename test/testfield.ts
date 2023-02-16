import { assert } from 'chai';

import * as input1 from './fieldinput.json';
import * as expected1 from './fieldexpectedoutput.json';

import * as input2 from './fieldblankinput.json';
import * as expected2 from './fieldblankexpectedoutput.json';

import { MyFieldMap } from '../src/field';

const actualOutput = MyFieldMap(input1);
describe('Field1', function () {
    it('MyFieldMap output should match expectation', function () {
        assert(actualOutput.Options.length > 0, "Output should have options");
        console.info({ expected1 });
    });
});

const actualBlankOutput = MyFieldMap(input2);
describe('Field2', function () {
    it('MyFieldMap Output should have no options if input has no options', function () {
        assert(actualOutput.Options.length === 0, "Output should have no options if input has no options");
        console.info({ expected2 });
    });
});
