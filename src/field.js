"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyFieldMap = void 0;
const MyOptions_1 = require("./MyOptions");
function MyFieldMap(input) {
    console.info({ input });
    console.info({ options: input.Options });
    const myOptions = new MyOptions_1.MyOptions();
    if (input.Options) {
        console.info("input has options");
        myOptions.Options = [];
        for (const option in input.Options) {
            console.info({ option });
            console.info({ value: input.Options[option] });
            const myOption = {
                DisplayOrder: 1,
                Label: input.Options[option],
                Value: input.Options[option]
            };
            myOptions.Options.push(myOption);
        }
    }
    else {
        console.warn("input does not have options");
        myOptions.Options = [];
    }
    const myOptionsString = JSON.stringify(myOptions);
    console.info({ myOptionsString });
    return myOptions;
}
exports.MyFieldMap = MyFieldMap;
//# sourceMappingURL=field.js.map