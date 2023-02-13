import { Output } from "./Output";
import { Preference } from "./Preference";

export function MyMap(input: any): Output {
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
    const myOutput: Output = {
        ContactId: input.Contact__c,
        Email: input.ContactEmail__c,
        IsInternalUpdate: true,
        Preferences: mypreferences
    }
    return myOutput;
}