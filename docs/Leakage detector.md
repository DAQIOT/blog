<https://zhuanlan.zhihu.com/p/2002387789191328657>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Equipment manufacturer | Data item name (Actual indicators collected by the device) | Field Description (Required fields) | Is it a dictionary item (Required) | Dictionary table definition (If the dictionary option is selected as' Yes', it must be filled in) | data type | Indicator Unit | report[frequency](https://zhida.zhihu.com/search?content_id=269971647&content_type=Article&match_order=1&q=%E9%A2%91%E7%8E%87&zhida_source=entity) |
| Data Item - English Name (Required fields) | Data Item - Chinese Name (Required) | Reporting frequency (Required) | Explanation of reporting frequency (required field) |
| [Shanghai DAQ-IoTNetwork Technology Co., Ltd](https://zhida.zhihu.com/search?content_id=269971647&content_type=Article&match_order=1&q=%E4%B8%8A%E6%B5%B7%E6%95%B0%E9%87%87%E7%89%A9%E8%81%94%E7%BD%91%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&zhida_source=entity) | vol\_Ua | [Phase A voltage](https://zhida.zhihu.com/search?content_id=269971647&content_type=Article&match_order=1&q=A%E7%9B%B8%E7%94%B5%E5%8E%8B&zhida_source=entity) | Used to detect phase A voltage | No |  | float | V | By minute | Report data collection every 5 minutes |
| vol\_Ub | [B-phase voltage](https://zhida.zhihu.com/search?content_id=269971647&content_type=Article&match_order=1&q=B%E7%9B%B8%E7%94%B5%E5%8E%8B&zhida_source=entity) | Used to detect B-phase voltage | No |  | float | V |
| vol\_Uc | [C-phase voltage](https://zhida.zhihu.com/search?content_id=269971647&content_type=Article&match_order=1&q=C%E7%9B%B8%E7%94%B5%E5%8E%8B&zhida_source=entity) | Used to detect C-phase voltage | No |  | float | V |
| cur\_Ia | [Phase A current](https://zhida.zhihu.com/search?content_id=269971647&content_type=Article&match_order=1&q=A%E7%9B%B8%E7%94%B5%E6%B5%81&zhida_source=entity) | Used to detect A-phase current | No |  | float | A |
| cur\_Ib | [B-phase current](https://zhida.zhihu.com/search?content_id=269971647&content_type=Article&match_order=1&q=B%E7%9B%B8%E7%94%B5%E6%B5%81&zhida_source=entity) | Used to detect B-phase current | No |  | float | A |
| cur\_Ic | [C-phase current](https://zhida.zhihu.com/search?content_id=269971647&content_type=Article&match_order=1&q=C%E7%9B%B8%E7%94%B5%E6%B5%81&zhida_source=entity) | Used for detecting C-phase current | No |  | float | A |
| freq | frequency | Used for device Real-time frequency | No |  | float | Hz |
| powera | Phase A[active power](https://zhida.zhihu.com/search?content_id=269971647&content_type=Article&match_order=1&q=%E6%9C%89%E5%8A%9F%E5%8A%9F%E7%8E%87&zhida_source=entity) | Used to detect active power of phase A | No |  | float | W |
| powerb | B-phase active power | Used to detect the active power of phase B | No |  | float | W |
| powerc | C-phase active power | Used to detect the active power of phase C | No |  | float | W |
| powert | Total Active Power | Used to detect total active power | No |  | float | W |
| powerQa | Phase A[reactive power](https://zhida.zhihu.com/search?content_id=269971647&content_type=Article&match_order=1&q=%E6%97%A0%E5%8A%9F%E5%8A%9F%E7%8E%87&zhida_source=entity) | Used to detect reactive power of phase A | No |  | float | VA |
| powerQb | B-phase reactive power | Used to detect the reactive power of phase B | No |  | float | VA |
| powerQc | C-phase reactive power | Used to detect the reactive power of phase C | No |  | float | VA |
| powerQt | Total reactive power | Used to detect total reactive power | No |  | float | VA |
| pfa | Phase A[power factor](https://zhida.zhihu.com/search?content_id=269971647&content_type=Article&match_order=1&q=%E5%8A%9F%E7%8E%87%E5%9B%A0%E7%B4%A0&zhida_source=entity) | Used to detect A-phase power factor | No |  | float | / |
| pfb | B-phase power factor | Used to detect B-phase power factor | No |  | float | / |
| pfc | C-phase power factor | Used to detect the power factor of phase C | No |  | float | / |
| pft | Total power factor | Used to detect the total power factor | No |  | float | / |
| eleA | Phase A[active energy](https://zhida.zhihu.com/search?content_id=269971647&content_type=Article&match_order=1&q=%E6%9C%89%E5%8A%9F%E7%94%B5%E8%83%BD&zhida_source=entity) | Used to detect active electrical energy in phase A | No |  | float | KWH |
| eleB | B-phase active electrical energy | Used for detecting active energy in phase B | No |  | float | KWH |
| eleC | C-phase active electrical energy | Used for detecting active electrical energy in phase C | No |  | float | KWH |
| eleT | total active energy | Used to detect total active energy | No |  | float | KWH |
| rssi | signal value | Used for equipment signals | No |  | float | / |
|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Equipment manufacturer | Data item name (Actual indicators collected by the device) | Field Description (Required fields) | Is it a dictionary item (Required) | Dictionary table definition (If the dictionary option is selected as' Yes', it must be filled in) | data type | Indicator Unit | Reporting frequency |
| Data Item - English Name (Required fields) | Data Item - Chinese Name (Required) | Reporting frequency (Required) | Explanation of reporting frequency (required field) |
| Shanghai DAQ-IoTNetwork Technology Co., Ltd | vol\_Ua | Phase A voltage | Used to detect phase A voltage | No |  | float | V | By minute | Report data collection every 5 minutes |
| vol\_Ub | B-phase voltage | Used to detect B-phase voltage | No |  | float | V |
| vol\_Uc | C-phase voltage | Used to detect C-phase voltage | No |  | float | V |
| cur\_Ia | Phase A current | Used to detect A-phase current | No |  | float | A |
| cur\_Ib | B-phase current | Used to detect B-phase current | No |  | float | A |
| cur\_Ic | C-phase current | Used for detecting C-phase current | No |  | float | A |
| freq | frequency | Used for device Real-time frequency | No |  | float | Hz |
| powera | A-phase active power | Used to detect active power of phase A | No |  | float | W |
| powerb | B-phase active power | Used to detect the active power of phase B | No |  | float | W |
| powerc | C-phase active power | Used to detect the active power of phase C | No |  | float | W |
| powert | Total Active Power | Used to detect total active power | No |  | float | W |
| powerQa | A-phase reactive power | Used to detect reactive power of phase A | No |  | float | VA |
| powerQb | B-phase reactive power | Used to detect the reactive power of phase B | No |  | float | VA |
| powerQc | C-phase reactive power | Used to detect the reactive power of phase C | No |  | float | VA |
| powerQt | Total reactive power | Used to detect total reactive power | No |  | float | VA |
| pfa | A-phase power factor | Used to detect A-phase power factor | No |  | float | / |
| pfb | B-phase power factor | Used to detect B-phase power factor | No |  | float | / |
| pfc | C-phase power factor | Used to detect the power factor of phase C | No |  | float | / |
| pft | Total power factor | Used to detect the total power factor | No |  | float | / |
| eleA | A-phase active electrical energy | Used to detect active electrical energy in phase A | No |  | float | KWH |
| eleB | B-phase active electrical energy | Used for detecting active energy in phase B | No |  | float | KWH |
| eleC | C-phase active electrical energy | Used for detecting active electrical energy in phase C | No |  | float | KWH |
| eleT | total active energy | Used to detect total active energy | No |  | float | KWH |
| rssi | signal value | Used for equipment signals | No |  | float | / |
|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Equipment manufacturer | Data item name (Actual indicators collected by the device) | Field Description (Required fields) | Is it a dictionary item (Required) | Dictionary table definition (If the dictionary option is selected as' Yes', it must be filled in) | data type | Indicator Unit | Reporting frequency |
| Data Item - English Name (Required fields) | Data Item - Chinese Name (Required) | Reporting frequency (Required) | Explanation of reporting frequency (required field) |
| Shanghai DAQ-IoTNetwork Technology Co., Ltd | vol\_Ua | Phase A voltage | Used to detect phase A voltage | No |  | float | V | By minute | Report data collection every 5 minutes |
| vol\_Ub | B-phase voltage | Used to detect B-phase voltage | No |  | float | V |
| vol\_Uc | C-phase voltage | Used to detect C-phase voltage | No |  | float | V |
| cur\_Ia | Phase A current | Used to detect A-phase current | No |  | float | A |
| cur\_Ib | B-phase current | Used to detect B-phase current | No |  | float | A |
| cur\_Ic | C-phase current | Used for detecting C-phase current | No |  | float | A |
| freq | frequency | Used for device Real-time frequency | No |  | float | Hz |
| powera | A-phase active power | Used to detect active power of phase A | No |  | float | W |
| powerb | B-phase active power | Used to detect the active power of phase B | No |  | float | W |
| powerc | C-phase active power | Used to detect the active power of phase C | No |  | float | W |
| powert | Total Active Power | Used to detect total active power | No |  | float | W |
| powerQa | A-phase reactive power | Used to detect reactive power of phase A | No |  | float | VA |
| powerQb | B-phase reactive power | Used to detect the reactive power of phase B | No |  | float | VA |
| powerQc | C-phase reactive power | Used to detect the reactive power of phase C | No |  | float | VA |
| powerQt | Total reactive power | Used to detect total reactive power | No |  | float | VA |
| pfa | A-phase power factor | Used to detect A-phase power factor | No |  | float | / |
| pfb | B-phase power factor | Used to detect B-phase power factor | No |  | float | / |
| pfc | C-phase power factor | Used to detect the power factor of phase C | No |  | float | / |
| pft | Total power factor | Used to detect the total power factor | No |  | float | / |
| eleA | A-phase active electrical energy | Used to detect active electrical energy in phase A | No |  | float | KWH |
| eleB | B-phase active electrical energy | Used for detecting active energy in phase B | No |  | float | KWH |
| eleC | C-phase active electrical energy | Used for detecting active electrical energy in phase C | No |  | float | KWH |
| eleT | total active energy | Used to detect total active energy | No |  | float | KWH |
| rssi | signal value | Used for equipment signals | No |  | float | / |
|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Equipment manufacturer | Data item name (Actual indicators collected by the device) | Field Description (Required fields) | Is it a dictionary item (Required) | Dictionary table definition (If the dictionary option is selected as' Yes', it must be filled in) | data type | Indicator Unit | Reporting frequency |
| Data Item - English Name (Required fields) | Data Item - Chinese Name (Required) | Reporting frequency (Required) | Explanation of reporting frequency (required field) |
| Shanghai DAQ-IoTNetwork Technology Co., Ltd | vol\_Ua | Phase A voltage | Used to detect phase A voltage | No |  | float | V | By minute | Report data collection every 5 minutes |
| vol\_Ub | B-phase voltage | Used to detect B-phase voltage | No |  | float | V |
| vol\_Uc | C-phase voltage | Used to detect C-phase voltage | No |  | float | V |
| cur\_Ia | Phase A current | Used to detect A-phase current | No |  | float | A |
| cur\_Ib | B-phase current | Used to detect B-phase current | No |  | float | A |
| cur\_Ic | C-phase current | Used for detecting C-phase current | No |  | float | A |
| freq | frequency | Used for device Real-time frequency | No |  | float | Hz |
| powera | A-phase active power | Used to detect active power of phase A | No |  | float | W |
| powerb | B-phase active power | Used to detect the active power of phase B | No |  | float | W |
| powerc | C-phase active power | Used to detect the active power of phase C | No |  | float | W |
| powert | Total Active Power | Used to detect total active power | No |  | float | W |
| powerQa | A-phase reactive power | Used to detect reactive power of phase A | No |  | float | VA |
| powerQb | B-phase reactive power | Used to detect the reactive power of phase B | No |  | float | VA |
| powerQc | C-phase reactive power | Used to detect the reactive power of phase C | No |  | float | VA |
| powerQt | Total reactive power | Used to detect total reactive power | No |  | float | VA |
| pfa | A-phase power factor | Used to detect A-phase power factor | No |  | float | / |
| pfb | B-phase power factor | Used to detect B-phase power factor | No |  | float | / |
| pfc | C-phase power factor | Used to detect the power factor of phase C | No |  | float | / |
| pft | Total power factor | Used to detect the total power factor | No |  | float | / |
| eleA | A-phase active electrical energy | Used to detect active electrical energy in phase A | No |  | float | KWH |
| eleB | B-phase active electrical energy | Used for detecting active energy in phase B | No |  | float | KWH |
| eleC | C-phase active electrical energy | Used for detecting active electrical energy in phase C | No |  | float | KWH |
| eleT | total active energy | Used to detect total active energy | No |  | float | KWH |
| rssi | signal value | Used for equipment signals | No |  | float | / |
|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Equipment manufacturer | Data item name (Actual indicators collected by the device) | Field Description (Required fields) | Is it a dictionary item (Required) | Dictionary table definition (If the dictionary option is selected as' Yes', it must be filled in) | data type | Indicator Unit | Reporting frequency |
| Data Item - English Name (Required fields) | Data Item - Chinese Name (Required) | Reporting frequency (Required) | Explanation of reporting frequency (required field) |
| Shanghai DAQ-IoTNetwork Technology Co., Ltd | vol\_Ua | Phase A voltage | Used to detect phase A voltage | No |  | float | V | By minute | Report data collection every 5 minutes |
| vol\_Ub | B-phase voltage | Used to detect B-phase voltage | No |  | float | V |
| vol\_Uc | C-phase voltage | Used to detect C-phase voltage | No |  | float | V |
| cur\_Ia | Phase A current | Used to detect A-phase current | No |  | float | A |
| cur\_Ib | B-phase current | Used to detect B-phase current | No |  | float | A |
| cur\_Ic | C-phase current | Used for detecting C-phase current | No |  | float | A |
| freq | frequency | Used for device Real-time frequency | No |  | float | Hz |
| powera | A-phase active power | Used to detect active power of phase A | No |  | float | W |
| powerb | B-phase active power | Used to detect the active power of phase B | No |  | float | W |
| powerc | C-phase active power | Used to detect the active power of phase C | No |  | float | W |
| powert | Total Active Power | Used to detect total active power | No |  | float | W |
| powerQa | A-phase reactive power | Used to detect reactive power of phase A | No |  | float | VA |
| powerQb | B-phase reactive power | Used to detect the reactive power of phase B | No |  | float | VA |
| powerQc | C-phase reactive power | Used to detect the reactive power of phase C | No |  | float | VA |
| powerQt | Total reactive power | Used to detect total reactive power | No |  | float | VA |
| pfa | A-phase power factor | Used to detect A-phase power factor | No |  | float | / |
| pfb | B-phase power factor | Used to detect B-phase power factor | No |  | float | / |
| pfc | C-phase power factor | Used to detect the power factor of phase C | No |  | float | / |
| pft | Total power factor | Used to detect the total power factor | No |  | float | / |
| eleA | A-phase active electrical energy | Used to detect active electrical energy in phase A | No |  | float | KWH |
| eleB | B-phase active electrical energy | Used for detecting active energy in phase B | No |  | float | KWH |
| eleC | C-phase active electrical energy | Used for detecting active electrical energy in phase C | No |  | float | KWH |
| eleT | total active energy | Used to detect total active energy | No |  | float | KWH |
| rssi | signal value | Used for equipment signals | No |  | float | / |
|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Equipment manufacturer | Data item name (Actual indicators collected by the device) | Field Description (Required fields) | Is it a dictionary item (Required) | Dictionary table definition (If the dictionary option is selected as' Yes', it must be filled in) | data type | Indicator Unit | Reporting frequency |
| Data Item - English Name (Required fields) | Data Item - Chinese Name (Required) | Reporting frequency (Required) | Explanation of reporting frequency (required field) |
| Shanghai DAQ-IoTNetwork Technology Co., Ltd | vol\_Ua | Phase A voltage | Used to detect phase A voltage | No |  | float | V | By minute | Report data collection every 5 minutes |
| vol\_Ub | B-phase voltage | Used to detect B-phase voltage | No |  | float | V |
| vol\_Uc | C-phase voltage | Used to detect C-phase voltage | No |  | float | V |
| cur\_Ia | Phase A current | Used to detect A-phase current | No |  | float | A |
| cur\_Ib | B-phase current | Used to detect B-phase current | No |  | float | A |
| cur\_Ic | C-phase current | Used for detecting C-phase current | No |  | float | A |
| freq | frequency | Used for device Real-time frequency | No |  | float | Hz |
| powera | A-phase active power | Used to detect active power of phase A | No |  | float | W |
| powerb | B-phase active power | Used to detect the active power of phase B | No |  | float | W |
| powerc | C-phase active power | Used to detect the active power of phase C | No |  | float | W |
| powert | Total Active Power | Used to detect total active power | No |  | float | W |
| powerQa | A-phase reactive power | Used to detect reactive power of phase A | No |  | float | VA |
| powerQb | B-phase reactive power | Used to detect the reactive power of phase B | No |  | float | VA |
| powerQc | C-phase reactive power | Used to detect the reactive power of phase C | No |  | float | VA |
| powerQt | Total reactive power | Used to detect total reactive power | No |  | float | VA |
| pfa | A-phase power factor | Used to detect A-phase power factor | No |  | float | / |
| pfb | B-phase power factor | Used to detect B-phase power factor | No |  | float | / |
| pfc | C-phase power factor | Used to detect the power factor of phase C | No |  | float | / |
| pft | Total power factor | Used to detect the total power factor | No |  | float | / |
| eleA | A-phase active electrical energy | Used to detect active electrical energy in phase A | No |  | float | KWH |
| eleB | B-phase active electrical energy | Used for detecting active energy in phase B | No |  | float | KWH |
| eleC | C-phase active electrical energy | Used for detecting active electrical energy in phase C | No |  | float | KWH |
| eleT | total active energy | Used to detect total active energy | No |  | float | KWH |
| rssi | signal value | Used for equipment signals | No |  | float | / |
|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Equipment manufacturer | Data item name (Actual indicators collected by the device) | Field Description (Required fields) | Is it a dictionary item (Required) | Dictionary table definition (If the dictionary option is selected as' Yes', it must be filled in) | data type | Indicator Unit | Reporting frequency |
| Data Item - English Name (Required fields) | Data Item - Chinese Name (Required) | Reporting frequency (Required) | Explanation of reporting frequency (required field) |
| Shanghai DAQ-IoTNetwork Technology Co., Ltd | vol\_Ua | Phase A voltage | Used to detect phase A voltage | No |  | float | V | By minute | Report data collection every 5 minutes |
| vol\_Ub | B-phase voltage | Used to detect B-phase voltage | No |  | float | V |
| vol\_Uc | C-phase voltage | Used to detect C-phase voltage | No |  | float | V |
| cur\_Ia | Phase A current | Used to detect A-phase current | No |  | float | A |
| cur\_Ib | B-phase current | Used to detect B-phase current | No |  | float | A |
| cur\_Ic | C-phase current | Used for detecting C-phase current | No |  | float | A |
| freq | frequency | Used for device Real-time frequency | No |  | float | Hz |
| powera | A-phase active power | Used to detect active power of phase A | No |  | float | W |
| powerb | B-phase active power | Used to detect the active power of phase B | No |  | float | W |
| powerc | C-phase active power | Used to detect the active power of phase C | No |  | float | W |
| powert | Total Active Power | Used to detect total active power | No |  | float | W |
| powerQa | A-phase reactive power | Used to detect reactive power of phase A | No |  | float | VA |
| powerQb | B-phase reactive power | Used to detect the reactive power of phase B | No |  | float | VA |
| powerQc | C-phase reactive power | Used to detect the reactive power of phase C | No |  | float | VA |
| powerQt | Total reactive power | Used to detect total reactive power | No |  | float | VA |
| pfa | A-phase power factor | Used to detect A-phase power factor | No |  | float | / |
| pfb | B-phase power factor | Used to detect B-phase power factor | No |  | float | / |
| pfc | C-phase power factor | Used to detect the power factor of phase C | No |  | float | / |
| pft | Total power factor | Used to detect the total power factor | No |  | float | / |
| eleA | A-phase active electrical energy | Used to detect active electrical energy in phase A | No |  | float | KWH |
| eleB | B-phase active electrical energy | Used for detecting active energy in phase B | No |  | float | KWH |
| eleC | C-phase active electrical energy | Used for detecting active electrical energy in phase C | No |  | float | KWH |
| eleT | total active energy | Used to detect total active energy | No |  | float | KWH |
| rssi | signal value | Used for equipment signals | No |  | float | / |
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/2xpj6e7k708uomnhdj4g.jpg)
|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Equipment manufacturer | Data item name (Actual indicators collected by the device) | Field Description (Required fields) | Is it a dictionary item (Required) | Dictionary table definition (If the dictionary option is selected as' Yes', it must be filled in) | data type | Indicator Unit | Reporting frequency |
| Data Item - English Name (Required fields) | Data Item - Chinese Name (Required) | Reporting frequency (Required) | Explanation of reporting frequency (required field) |
| Shanghai DAQ-IoTNetwork Technology Co., Ltd | vol\_Ua | Phase A voltage | Used to detect phase A voltage | No |  | float | V | By minute | Report data collection every 5 minutes |
| vol\_Ub | B-phase voltage | Used to detect B-phase voltage | No |  | float | V |
| vol\_Uc | C-phase voltage | Used to detect C-phase voltage | No |  | float | V |
| cur\_Ia | Phase A current | Used to detect A-phase current | No |  | float | A |
| cur\_Ib | B-phase current | Used to detect B-phase current | No |  | float | A |
| cur\_Ic | C-phase current | Used for detecting C-phase current | No |  | float | A |
| freq | frequency | Used for device Real-time frequency | No |  | float | Hz |
| powera | A-phase active power | Used to detect active power of phase A | No |  | float | W |
| powerb | B-phase active power | Used to detect the active power of phase B | No |  | float | W |
| powerc | C-phase active power | Used to detect the active power of phase C | No |  | float | W |
| powert | Total Active Power | Used to detect total active power | No |  | float | W |
| powerQa | A-phase reactive power | Used to detect reactive power of phase A | No |  | float | VA |
| powerQb | B-phase reactive power | Used to detect the reactive power of phase B | No |  | float | VA |
| powerQc | C-phase reactive power | Used to detect the reactive power of phase C | No |  | float | VA |
| powerQt | Total reactive power | Used to detect total reactive power | No |  | float | VA |
| pfa | A-phase power factor | Used to detect A-phase power factor | No |  | float | / |
| pfb | B-phase power factor | Used to detect B-phase power factor | No |  | float | / |
| pfc | C-phase power factor | Used to detect the power factor of phase C | No |  | float | / |
| pft | Total power factor | Used to detect the total power factor | No |  | float | / |
| eleA | A-phase active electrical energy | Used to detect active electrical energy in phase A | No |  | float | KWH |
| eleB | B-phase active electrical energy | Used for detecting active energy in phase B | No |  | float | KWH |
| eleC | C-phase active electrical energy | Used for detecting active electrical energy in phase C | No |  | float | KWH |
| eleT | total active energy | Used to detect total active energy | No |  | float | KWH |
| rssi | signal value | Used for equipment signals | No |  | float | / |
The English name of the data item cannot be duplicated within a single object model, and it needs to be able to support being used as a JSON key, supporting English and half width "\_".
If the data item is a custom dictionary of type, direction, state, etc., all possible situations need to be filled in the dictionary table and mapped with numbers.
4. Data type: In general, float or double is used with decimal points, int is used for integers, and string is only allowed for Chinese characters.
5. The reporting frequency should be strictly filled in according to the device heartbeat interval, which is used for city perception to accurately identify the available status of the device. If the device is triggered for reporting, it can be filled in as Real-time (if it is battery powered, the reporting frequency can be appropriately extended to avoid unavailability due to network reasons, normally 2 \* heartbeat interval)