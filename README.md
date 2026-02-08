# Home Assistant Lovelace Card for Pichler Ventilation (ERHV)

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/hacs/integration)

A Home Assistant Lovelace card for Pichler energy reclaiming home ventilation systems.
Fork of [erhv-lovelace](https://github.com/bolkedebruin/erhv-lovelace) with flow rate in m³/h and fan levels 1-3.

![Screenshot - main](https://raw.githubusercontent.com/bernib5/pichlerluft-erhv-card/main/docs/screenshot-1.png)

# Installation

## HACS

* Add this repo to your HACS custom repositories.
* Install the card from the HACS store.
* Add a card with `type: 'custom:pichlerluft-erhv-card'`.
* Configure the card with the entity of your Pichler ventilation system and its sensors.

Example configuration:

```yaml
type: custom:pichlerluft-erhv-card
name: Pichler
entity: climate.pichler_climate
climate_entity: climate.pichler_climate
intake_temperature: sensor.pichler_outside_temp
intake_flow_rate: sensor.pichler_intake_flow
intake_fan_level: sensor.pichler_intake_level
exhaust_temperature: sensor.pichler_exhaust_temp
exhaust_flow_rate: sensor.pichler_exhaust_flow
exhaust_fan_level: sensor.pichler_exhaust_level
supply_temperature: sensor.pichler_supply_temp
return_temperature: sensor.pichler_return_temp
filter_elapsed_time: sensor.pichler_filter_hours
filter_warning: binary_sensor.pichler_filter_status
bypass_state: binary_sensor.pichler_bypass_valve
preheater_state: binary_sensor.pichler_preheating_status
summer_mode: binary_sensor.pichler_summer_mode
```

| Option                  | Description                                                                     | Required |
|-------------------------|---------------------------------------------------------------------------------|----------|
| `name`                  | Name on the card                                                                | Yes      |
| `entity`                | The entity to be displayed                                                      | Yes      |
| `climate_entity`        | The climate entity                                                              | Yes      |
| `supply_temperature`    | Entity providing supply temperature                                             | Yes      |
| `return_temperature`    | Entity providing return temperature                                             | Yes      |
| `intake_temperature`    | Entity providing intake (outside) temperature                                   | Yes      |
| `intake_flow_rate`      | Entity providing intake flow rate (m³/h)                                        | Yes      |
| `intake_fan_level`      | Entity providing intake fan level (1-3)                                         | Yes      |
| `exhaust_temperature`   | Entity providing exhaust temperature                                            | Yes      |
| `exhaust_flow_rate`     | Entity providing exhaust flow rate (m³/h)                                       | Yes      |
| `exhaust_fan_level`     | Entity providing exhaust fan level (1-3)                                        | Yes      |
| `filter_elapsed_time`   | Entity providing filter elapsed time                                            | Yes      |
| `filter_warning`        | Entity providing boolean filter warning                                         | Optional |
| `bypass_state`          | Entity providing the bypass state                                               | Optional |
| `preheater_state`       | Entity providing the preheater state                                            | Optional |
| `summer_mode`           | Entity providing the summer mode state                                          | Optional |

> Note: The icons in the view will be displayed according to the state of the optional fields above. If the field is omitted then the icon will not be displayed.

## Changes from original

- **Flow rate in m³/h** instead of RPM
- **Fan levels 1-3** instead of percentage
- Optimized for **Pichler** ventilation systems
