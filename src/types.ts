import {LovelaceCardConfig} from "custom-card-helpers";

export interface ERHVCardConfig extends LovelaceCardConfig {
    header: string;
    climate_entity: string;
    name: string;
    icon: string;
    intake_temperature: string;
    intake_flow_rate: string;
    intake_fan_level: string;
    exhaust_temperature: string;
    exhaust_flow_rate: string;
    exhaust_fan_level: string;
    supply_temperature: string;
    return_temperature: string;
    filter_elapsed_time: string;
    filter_expiry_limit: string;
    filter_warning: string;
    bypass_state: string;
    preheater_state: string;
    summer_mode: string;
    show_efficiency: boolean;
    show_set_point_temperature: boolean;
}
