"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyMap = void 0;
function MyMap(input) {
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
    const myOutput = {
        ContactId: input.Contact__c,
        Email: input.ContactEmail__c,
        IsInternalUpdate: true,
        Preferences: mypreferences
    };
    return myOutput;
}
exports.MyMap = MyMap;
//# sourceMappingURL=main.js.map