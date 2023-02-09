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
class Preference {
    PrefCode;
    CurrentValue;
}
const mypreferences = [];
for (const x in input) {
    if (x.endsWith("__c")) {
        let xValue = "";
        if (Object.prototype.toString.call(input[x] === '[object Array]')) {
            console.info({ obj: input[x] });
            for (const y in input[x]) {
                console.info({ y });
            }
        }
        const preference = {
            PrefCode: x,
            CurrentValue: xValue
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
//# sourceMappingURL=main.js.map