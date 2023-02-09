import * as input from './input.json';
import * as expectedOutput from './expected.json';

class Preference {
    PrefCode: string;
    CurrentValue: string;
}

const mypreferences = [];
for (const prefCode in input) {
    if (prefCode.endsWith("__c")) {
        let currentValue = "";
        if (Array.isArray(input[prefCode])) {
            currentValue = input[prefCode].toString();
        } else {
            currentValue = input[prefCode];
        }
        const preference = {
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

const myString = JSON.stringify(myOutput);
console.warn({ myString });

const expectedString = JSON.stringify(expectedOutput);
console.warn({ expectedString });

if (expectedOutput === myOutput) {
    console.log("success");
} else {
    console.error("try again");
}