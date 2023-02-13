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
const input = __importStar(require("./input.json"));
const expectedOutput = __importStar(require("./expected.json"));
class Preference {
    PrefCode;
    CurrentValue;
}
const mypreferences = Array();
for (const prefCode in input) {
    if (prefCode.endsWith("__c")) {
        if (prefCode === "IsInternalUpdate__c") {
            continue;
        }
        let currentValue = "";
        if (input[prefCode] !== null) {
            currentValue = input[prefCode].toString();
        }
        if (currentValue === "true") {
            currentValue = "True";
        }
        if (currentValue === "false") {
            currentValue = "False";
        }
        const preference = {
            PrefCode: prefCode,
            CurrentValue: currentValue
        };
        mypreferences.push(preference);
    }
}
class Output {
    ContactId;
    Email;
    IsInternalUpdate;
    Preferences;
}
const myOutput = {
    ContactId: input.Contact__c,
    Email: input.ContactEmail__c,
    IsInternalUpdate: true,
    Preferences: mypreferences
};
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
if (AreTwoOutputsEqual(myOutput, expectedOutput)) {
    console.log("success");
}
else {
    console.error("try again");
}
//# sourceMappingURL=main.js.map