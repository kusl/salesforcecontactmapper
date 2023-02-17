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
const chai_1 = require("chai");
const input1 = __importStar(require("./fieldinput.json"));
const expected1 = __importStar(require("./fieldexpectedoutput.json"));
const input2 = __importStar(require("./fieldblankinput.json"));
const expected2 = __importStar(require("./fieldblankexpectedoutput.json"));
const field_1 = require("../src/field");
const actualOutput = (0, field_1.MyFieldMap)(input1);
describe('Field1', function () {
    it('MyFieldMap output should match expectation', function () {
        (0, chai_1.assert)(actualOutput.Options.length > 0, "Output should have options");
        console.info({ expected1 });
    });
});
const actualBlankOutput = (0, field_1.MyFieldMap)(input2);
describe('Field2', function () {
    it('MyFieldMap Output should have no options if input has no options', function () {
        console.info({ actual2: actualBlankOutput.Options });
        (0, chai_1.assert)(actualBlankOutput.Options.length === 0, "Output should have no options if input has no options");
        console.info({ expected2 });
    });
});
//# sourceMappingURL=testfield.js.map