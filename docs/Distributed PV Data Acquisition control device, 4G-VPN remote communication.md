<https://zhuanlan.zhihu.com/p/1910347349143843717>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
as[IoTData Acquisition](https://zhida.zhihu.com/search?content_id=258208895&content_type=Article&match_order=1&q=%E7%89%A9%E8%81%94%E7%BD%91%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86&zhida_source=entity)solution Professional provider, data acquisition IoT*Editor daq iot* Here is an introduction to the following content, and we sincerely welcome everyone to discuss and exchange ideas.
As a professional provider of IoT data collection solutions, daq-iot, the data acquisition and IoT editor, will introduce the following content here and sincerely welcome everyone to discuss and communicate.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/xkcufssyboxwt80t84sd.jpg)
6　[communication interface](https://zhida.zhihu.com/search?content_id=258208895&content_type=Article&match_order=1&q=%E9%80%9A%E4%BF%A1%E6%8E%A5%E5%8F%A3&zhida_source=entity)
6.1 Communication Method
[Control rod interface](https://zhida.zhihu.com/search?content_id=258208895&content_type=Article&match_order=1&q=%E6%8E%A7%E5%88%B6%E6%A3%92%E6%8E%A5%E5%8F%A3&zhida_source=entity)Modular structure design should be adopted to meet the requirement of interchangeable communication modules.
1. The uplink communication method has one channel[Wireless public network remote communication](https://zhida.zhihu.com/search?content_id=258208895&content_type=Article&match_order=1&q=%E6%97%A0%E7%BA%BF%E5%85%AC%E7%BD%91%E8%BF%9C%E7%A8%8B%E9%80%9A%E4%BF%A1&zhida_source=entity)Interface, supporting 4G, communication speed needs to support CAT4.
2. Two channels are used for downlink communication[RS-485](https://zhida.zhihu.com/search?content_id=258208895&content_type=Article&match_order=1&q=RS-485&zhida_source=entity)They are respectively communication port and maintenance port.
6.2 Communication speed
1. The baud rate of the control rod communication interface is 9600bps, and the verification method is even verification, with 8 data bits and 1 stop bit.
2. The default baud rate for control rod maintenance interface communication is 9600bps, with even parity, 8-bit data bits, and 1-bit stop bits. When used as a maintenance interface, it supports a maximum of 115200bps.
6.3 Communication Protocol
1. The upstream communication of the control rod Protocol should support DL/T 634.5 101, DL/T 634.5 104, DL/T 698.45, MQTT, HTTP, etc. Protocol, following the specifications of Jiangsu Company Cloud Edge Protocol.
2. The control rod downlink communication Protocol should support all PV inverter manufacturers in operation in Jiangsu Province, including Jinlang, Hewang, Guriwatt, Gudewei, Huawei, Outai, Aisiwei, Sunac, Chint, Tianhe, Sanjing, Shouhang, Skyworth, Maoshuo, Shangneng, Magreeneng, Envision, Coaster, TBEA, Linuo Power, etc[ModbusProtocol](https://zhida.zhihu.com/search?content_id=258208895&content_type=Article&match_order=1&q=Modbus%E5%8D%8F%E8%AE%AE&zhida_source=entity)。
6.4　[Data encryption](https://zhida.zhihu.com/search?content_id=258208895&content_type=Article&match_order=1&q=%E6%95%B0%E6%8D%AE%E5%8A%A0%E5%AF%86&zhida_source=entity)
It should comply with the security protection regulations for the internal network mobile access area of State Grid Jiangsu Electric Power Co., Ltd. (Su Dian Interconnect [2019] No. 571) and the encryption technology scheme of the IoT system. The control rod can use soft encryption.
7 Functional Requirements
7.1 Parameter Setting and Query Function
The control rod should be able to maintain port settings and query parameters, including clock, address, etc. Support remote or local device parameter settings and queries for the main station.
7.2 Data Acquisition and Control Functions
1. The control rod can support the PV and control of the Data Acquisition inverter. Equipped with PV inverter communication link monitoring function, it can monitor the status of the downlink communication link. The success rate of collecting inverter data and reading it once is not less than 99%.
2. The control rod actively reports inverter data (including minute level data) to the business master station, and receives control instructions from the master station to remotely control the PV inverter.
3. The control rod should support the 485 bus mode, and one control rod can simultaneously collect data from multiple inverters through the 485 bus.
4. The data transmission of control rods should comply with the Q/GDW 12106.4-2021 Technical and Functional Specification for IoT Management Platform Part 4: Interaction between Edge IoT Agents and IoT Management Platform Protocol specification. In addition to business data, it is also necessary to periodically report management information such as 4G signal strength, 4G module status, device running time, SIM card ICCID, SIM card status, program version number, IP address, etc.
5. The control rod should support remote upgrade and remote restart functions.
6. The control rod should support the transmission of power outage and restoration signals.
7.3 Protocol Automatic Recognition
The control rod supports downstream Modbus and other technologies, and should be able to automatically identify all inverters that are downstream and convert upstream technologies into recognized ones for communication.
7.4 Event recording function
The control rod event recording function should meet the following requirements:
a) The total number of overvoltage events should be recorded, including the time of the last 50 occurrences;
b) The total number of undervoltage events should be recorded, including the time of the last 50 occurrences;
c) Control events should be recorded, including the time and information of the last 50 control occurrences;
d) PV inverter communication abnormality events should be recorded, including the time of the last 10 communication abnormalities;
e) Equipment power on events should be recorded, including the time of the last 10 power outages;
f) The total number of equipment failures, the types of the last 10 failure events, and the time of occurrence should be recorded;
g) The total number of resets should be recorded, including the time of the last 10 events that were reset;
h) The total number of initialization attempts and the time of the last 10 initialization attempts should be recorded;
i) The total number of software online upgrades and the version information before and after the last 10 upgrades should be recorded;
7.5 Function Configuration
The functional configuration of the control rod should comply with the provisions of Table 8.
Table 8 Functional Configuration of Control Rod
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Collection object | data classification | data item | Data sub item | Collection frequency requirements |
| PV Inverter | data class | Voltage | Phase A voltage | Proactive reporting/on-demand collection |
| B-phase voltage |
| C-phase voltage |
| current | Phase A current |
| B-phase current |
| C-phase current |
| active power | active power |
| reactive power | reactive power |
| power factor | power factor |
| power level | Total power generation |
| Daily power generation |
| Alarm category | Power outage/restoration |
| stop |
| fault |
| wait |
| Self-check |
| Overvoltage/undervoltage |
| Parameter class | PV power station Basic Information | Equipment Number | On demand collection |
| Rated active power |
| Rated reactive power |
| Set voltage |
| output type |
| Inverter operating status | Power on | On demand collection |
| control class | Inverter control | Inverter switch on/off | Proactively issue |
| control mode | Proportion/Fixed Value | status information |
| Control inverter load | Active power control | Proactively issue |
| Reactive power control |
| Power factor control |
| Percentage of active power |
| Reactive power percentage |