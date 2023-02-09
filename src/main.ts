import * as input from './input.json';

class Preference {
    PrefCode: string;
    CurrentValue: string;
}

const mypreferences = [];
for (const x in input) {
    if (x.endsWith("__c")) {
        // console.info({ x });
        // console.info({ value: input[x] });
        let xValue = "";
        if (Object.prototype.toString.call(input[x] === '[object Array]')) {
            console.info({ obj: input[x] });
            for (const y in input[x]) {
                console.info({ y });
            }
        }
        const preference: Preference = {
            PrefCode: x,
            CurrentValue: xValue
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