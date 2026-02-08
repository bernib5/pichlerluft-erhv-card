export const ERHVSchema = [
    { name: "title", selector: {text: {}}},
    { name: "climate_entity", label: "Climate entity", required: true, selector: {entity: {domain: ["climate"]}}},
    {
        type: "grid",
        label: "Intake",
        schema: [
            {
                name: "intake_temperature",
                selector: {entity: {domain: ["sensor"]}},
                label: "Intake (outside) temperature",
            },
            {
                name: "intake_flow_rate",
                selector: {entity: {domain: ["sensor"]}},
                label: "Intake flow rate (m³/h)",
            },
            {
                name: "intake_fan_level",
                selector: {entity: {domain: ["sensor"]}},
                label: "Intake fan level (1-3)",
            },
        ],
    }, {
        type: "grid",
        label: "Exhaust",
        schema: [
            {
                name: "exhaust_temperature",
                selector: {entity: {domain: ["sensor"]}},
                label: "Exhaust temperature sensor",
            },
            {
                name: "exhaust_flow_rate",
                selector: {entity: {domain: ["sensor"]}},
                label: "Exhaust flow rate (m³/h)",
            },
            {
                name: "exhaust_fan_level",
                selector: {entity: {domain: ["sensor"]}},
                label: "Exhaust fan level (1-3)",
            },
        ],
    }, {
        type: "grid",
        label: "Supply & Return",
        schema: [
            {
                name: "supply_temperature",
                selector: {entity: {domain: ["sensor"]}},
                label: "Supply temperature",
            },
            {
                name: "return_temperature",
                selector: {entity: {domain: ["sensor"]}},
                label: "Return temperature",
            },
        ],
    }, {
        type: "grid",
        label: "Filter",
        schema: [
            {
                name: "filter_elapsed_time",
                selector: {entity: {domain: ["sensor"]}},
                label: "Filter elapsed time",
            },
            {
                name: "filter_expiry_limit",
                selector: {entity: {domain: ["sensor"]}},
                label: "Filter expiry limit",
            },
            {
                name: "filter_warning",
                selector: {entity: {domain: ["binary_sensor"]}},
                label: "Filter warning",
            },
        ],
    }, {
        type: "grid",
        label: "Other",
        schema: [
            {
                name: "bypass_state",
                selector: {entity: {domain: ["binary_sensor"]}},
                label: "By-pass state",
            },
            {
                name: "preheater_state",
                selector: {entity: {domain: ["binary_sensor"]}},
                label: "Preheater state",
            },
            {
                name: "summer_mode",
                selector: {entity: {domain: ["binary_sensor"]}},
                label: "Summer mode",
            },
        ],
    },
];