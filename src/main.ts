import * as input from './input.json';
import * as expectedOutput from './expected.json';

class Preference {
    PrefCode: string;
    CurrentValue: string;
}

const mypreferences = Array<Preference>();
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
        const preference: Preference = {
            PrefCode: prefCode,
            CurrentValue: currentValue
        }
        mypreferences.push(preference);
    }
}

class Output {
    ContactId: string;
    Email: string;
    IsInternalUpdate: boolean;
    Preferences: Preference[];
}

const myOutput: Output = {
    ContactId: input.Contact__c,
    Email: input.ContactEmail__c,
    IsInternalUpdate: true,
    Preferences: mypreferences
}

function AreTwoOutputsEqual(actual: Output, expected: Output): boolean {
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

if (AreTwoOutputsEqual(myOutput, expectedOutput)) {
    console.log("success");
} else {
    console.error("try again");
}
