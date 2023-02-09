import * as input from './input.json';

console.info({ input });

for (const x in input) {
    if (x.endsWith("__c")) {
        console.info({ x });
        console.info({ value: input[x] });
    }
}
