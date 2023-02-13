const input = {
    "@odata.etag": "",
    "ItemInternalId": "c27e4e33-9fa7-430a-9b33-7f98ba1243bd",
    "CreatedById": "0056C000004E23OQAS",
    "CreatedDate": "2023-01-30T22:11:20Z",
    "Id": "a2t6C000001xcrvQAA",
    "IsDeleted": false,
    "LastActivityDate": null,
    "LastModifiedById": "0056C000002ZFwWQAW",
    "LastModifiedDate": "2023-02-08T13:29:54Z",
    "LastReferencedDate": "2023-02-03T21:08:01Z",
    "LastViewedDate": "2023-02-03T21:08:01Z",
    "Name": "CPN-00000009",
    "OwnerId": "0056C000004E23OQAS",
    "SystemModstamp": "2023-02-08T13:29:54Z",
    "ContactEmail__c": "5f5pgxti@duck.com",
    "Contact__c": "0036C00000mYIU0QAO",
    "Email_Opt_In__c": false,
    "Email__c": null,
    "Frequency__c": null,
    "IsInternalUpdate__c": true,
    "Personal_Email_Address__c": null,
    "Personal_Mailing_Country__c": null,
    "Personal_Mailing_State__c": null,
    "Personal_Mailing_Zip_Code__c": null,
    "Personal_Phone_Number__c": "9367553366",
    "SMS_Opt_In__c": true,
    "Topics_of_Interest__c@odata.type": "#Collection(String)",
    "Topics_of_Interest__c": [
        "Perfectly Packaged",
        "Tools & Services"
    ],
    "Unsubscribe__c": false
};

const expectedOutput = {
    "ContactId": "a2t6C000001xcrvQAA",
    "Email": "5f5pgxti@duck.com",
    "IsInternalUpdate": true,
    "Preferences": [
        {
        "PrefCode": "Email_Opt_In__c",
        "CurrentValue": "false"
        },
        {
        "PrefCode": "Email__c",
        "CurrentValue": null
        },
        {
        "PrefCode": "Frequency__c",
        "CurrentValue": null
        },
        {
        "PrefCode": "IsInternalUpdate__c",
        "CurrentValue": true
        },
        {
        "PrefCode": "Personal_Email_Address__c",
        "CurrentValue": null
        },
        {
        "PrefCode": "Personal_Mailing_Country__c",
        "CurrentValue": null
        },
        {
        "PrefCode": "Personal_Mailing_State__c",
        "CurrentValue": null
        },
        {
        "PrefCode": "Personal_Mailing_Zip_Code__c",
        "CurrentValue": null
        },
        {
        "PrefCode": "Personal_Phone_Number__c",
        "CurrentValue": "9367553366"
        },
        {
        "PrefCode": "SMS_Opt_In__c",
        "CurrentValue": true
        },
        {
        "PrefCode": "Topics_of_Interest__c",
        "CurrentValue":  "Perfectly Packaged,Tools & Services"
        },
        {
        "PrefCode": "Unsubscribe__c",
        "CurrentValue": false
        }
    ]
};

// const input = workflowContext.trigger.outputs.body;
const mypreferences = [];
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
        }
        mypreferences.push(preference);
    }
}
const myOutput = {
    ContactId: input.Contact__c,
    Email: input.ContactEmail__c,
    IsInternalUpdate: true,
    Preferences: mypreferences
}

return myOutput;

console.info(JSON.stringify(mypreferences));