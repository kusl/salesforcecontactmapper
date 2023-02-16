import { MyOption } from "./MyOption";
import { MyOptions } from "./MyOptions";

// {
//     "PrefCode": "Frequency__c",
//     "DisplayName": "Frequency",
//     "DataType": "PICKLIST",
//     "FieldSize": 255,
//     "Options": [
//         "Daily",
//         "Weekly",
//         "Twice Weekly",
//         "Bi-Weekly"
//     ]
// }

// {
//     "Options": [
//         {
//             "DisplayOrder": 1,
//             "Label": "Daily",
//             "Value": "Daily"
//         },
//         {
//             "DisplayOrder": 1,
//             "Label": "Weekly",
//             "Value": "Weekly"
//         },
//         {
//             "DisplayOrder": 1,
//             "Label": "Twice Weekly",
//             "Value": "Daily"
//         },
//         {
//             "DisplayOrder": 1,
//             "Label": "Bi-Weekly",
//             "Value": "Bi-Weekly"
//         }
//     ]
// }

export function MyFieldMap(input: any): MyOptions {
    console.info({ input });
    console.info({ options: input.Options });
    const myOptions = new MyOptions();
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
            }
            myOptions.Options.push(myOption);
        }
    } else {
        console.warn("input does not have options");
        myOptions.Options = [];
    }
    const myOptionsString = JSON.stringify(myOptions);
    console.info({ myOptionsString });
    return myOptions;
}