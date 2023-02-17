"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyFieldMap = void 0;
function MyFieldMap(input) {
    const myOptions = {};
    if (input.Options) {
        myOptions.Options = [];
        for (const option in input.Options) {
            const myOption = {
                DisplayOrder: 1,
                Label: input.Options[option],
                Value: input.Options[option]
            };
            myOptions.Options.push(myOption);
        }
    }
    else {
        myOptions.Options = [];
    }
    return myOptions;
}
exports.MyFieldMap = MyFieldMap;
//# sourceMappingURL=field.js.map