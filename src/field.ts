import { MyOptions } from "./MyOptions";

export function MyFieldMap(input: any): MyOptions {
    const myOptions = new MyOptions();
    if (input.Options) {
        myOptions.Options = [];
        for (const option in input.Options) {
            const myOption = {
                DisplayOrder: 1,
                Label: input.Options[option],
                Value: input.Options[option]
            }
            myOptions.Options.push(myOption);
        }
    } else {
        myOptions.Options = [];
    }
    return myOptions;
}