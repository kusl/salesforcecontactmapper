"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreTwoOutputsEqual = void 0;
const chai_1 = require("chai");
const input = __importStar(require("./input.json"));
const expectedOutput = __importStar(require("./expected.json"));
const main_1 = require("../src/main");
const actualOutput = (0, main_1.MyMap)(input);
describe('Array', function () {
    it('MyMap output should match expectation', function () {
        (0, chai_1.assert)(AreTwoOutputsEqual(actualOutput, expectedOutput), "MyMap output did not match expected output");
    });
});
function AreTwoOutputsEqual(actual, expected) {
    if (actual.ContactId !== expected.ContactId) {
        return false;
    }
    if (actual.Email !== expected.Email) {
        return false;
    }
    if (actual.IsInternalUpdate !== expected.IsInternalUpdate) {
        return false;
    }
    if (actual.Preferences.length !== expected.Preferences.length) {
        return false;
    }
    for (const expectedPreference in expected.Preferences) {
        if (expected.Preferences[expectedPreference].PrefCode !== actual.Preferences[expectedPreference].PrefCode
            || expected.Preferences[expectedPreference].CurrentValue !== actual.Preferences[expectedPreference].CurrentValue) {
            return false;
        }
    }
    return true;
}
exports.AreTwoOutputsEqual = AreTwoOutputsEqual;
//# sourceMappingURL=test.js.map