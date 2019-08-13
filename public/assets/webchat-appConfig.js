var appConfig = {
    //  change the your AccountSid
    accountSid: "AC6259abd36f0744c3acb4a418af099cce",
    // change to your Flex Flow SID
    flexFlowSid: "FO340da6d55bbcf8e6f98c8df2e61926f2",
    colorTheme: {
        overrides: brandedColors
    },
    context: {
        friendlyName: "Client",
        locationOrigin: window.location.origin,
        someContextProp: "ContextProp1",
    },
    startEngagementOnInit: false,
    preEngagementConfig: {

        description: "Please provide some information",
        fields: [
            {
                label: "What is your name?",
                type: "InputItem",
                attributes: {
                    name: "friendlyName",
                    type: "text",
                    placeholder: "Enter your name",
                    required: true,
                    readOnly: false
                }
            },
            {
                label: "What is your email?",
                type: "InputItem",
                attributes: {
                    name: "email",
                    type: "email",
                    placeholder: "Enter your email",
                    required: true,
                    readOnly: false
                }
            },
            {
                label: "What is your phone number?",
                type: "InputItem",
                attributes: {
                    name: "phone",
                    type: "phone",
                    placeholder: "Enter your phone number",
                    required: true,
                    readOnly: false
                }
            },
            {
                label: "Customer Status",
                type: "SelectItem",
                attributes: {
                    name: "Customer Status",
                    required: true,
                    readOnly: false
                },
                options: [
                {
                    value: "value1",
                    label: "Existing",
                    selected: false
                },
                {
                    value: "value2",
                    label: "Prospective",
                    selected: false
                }
                ]
            },
            {
                label: "What is your question?",
                type: "TextareaItem",
                attributes: {
                    name: "question",
                    type: "text",
                    placeholder: "Type your question here",
                    required: false,
                    rows: 5,
                    readOnly: false
                }
            }
        ],
        footerLabel: "Invisalign 2019",
        submitLabel: "Ok Let's Go!",
    }
}
