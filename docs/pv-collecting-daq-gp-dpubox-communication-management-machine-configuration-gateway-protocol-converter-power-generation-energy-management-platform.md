<https://zhuanlan.zhihu.com/p/2010791533599801587>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
**[DAQ-GP-DPUBOX](https://zhida.zhihu.com/search?content_id=270738453&content_type=Article&match_order=1&q=DAQ-GP-DPUBOX&zhida_source=entity)Communication management machine configuration Gateway protocol converter, PV acquisition DAQ-GP-DPUBOX communication management machine configuration Gateway protocol converter**
**General Technical Specifications**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/kavzxir7o2rehcuq3m2p.jpg)
This section specifies the PV acquisition DAQ-GP-DPUBOX communication management machine configuration Gateway protocol converter (hereinafter referred to as“[Shanghai DAQ-IoT Network Technology](https://zhida.zhihu.com/search?content_id=270738453&content_type=Article&match_order=1&q=%E4%B8%8A%E6%B5%B7%E6%95%B0%E9%87%87%E7%89%A9%E8%81%94%E7%BD%91%E7%A7%91%E6%8A%80&zhida_source=entity)The technical requirements for the monitoring Gateway and its accessory communication interface adapter (hereinafter referred to as the "adapter") include requirements for structure, working environment, basic transmission characteristics, electrical safety, and electromagnetic compatibility.
This standard is applicable to expansion or renovation[Distributed PV power generation system](https://zhida.zhihu.com/search?content_id=270738453&content_type=Article&match_order=1&q=%E5%88%86%E5%B8%83%E5%BC%8F%E5%85%89%E4%BC%8F%E5%8F%91%E7%94%B5%E7%B3%BB%E7%BB%9F&zhida_source=entity)The design, manufacturing, procurement, and acceptance ofGateway, a network technology monitoring system for centralized grid connected voltage boosting measurement and control, and adapters.
Normative reference documents
The following documents are essential for the application of this document. For all referenced documents with dates, only the version with dates is applicable to this document. For any reference document without a date, its latest version (including all modifications) applies to this document.
[GB/T 1.1-2009 Guidelines for Standardization Work Part 1: Structure and Writing of Standards](https://link.zhihu.com/?target=http%3A//www.lzzjj.gov.cn/news_view.asp%3Fnewsid%3D2580)
GB/T 2423.1 Environmental testing for electrical and electronic products - Part 2: Test methods - Test A: Low temperature
GB 2894 Safety Signs and Guidelines for their Use
DL/T 719 Remote Control Equipment and Systems Part 5: Transmission Protocol Part 102: Supporting Standards for Transmission of Accumulated Energy in Power Systems
DL/T 743 Remote Terminal for Electric Energy
Q/GDW 11204 Technical Specification for Substation Electric Energy Collection Terminal
Regulations on Safety Protection of Electric Power Monitoring Systems (Order No. 14 of 2014 of the National Development and Reform Commission)
ITU-TG.825: The Control of Jitter and Wander within Digital Networks Based on the Synchronous Digital Hierarchy (SDH)
GB 4208-2008 Degrees of Protection Provided by Enclosures (IP Code)
GB/T 5169.11-2006 Fire hazard testing for electrical and electronic products - Part 11: Basic test methods for hot wire/hot wire - Burning wire flammability test method for finished products
GB/T 16935.1-2008 Insulation Coordination for Equipment in Low Voltage Systems Part 1: Principles, Requirements and Tests
GB/T 17441-1998 Symbols for AC Energy Meters
Terms and definitions
Low voltage distributed photovoltaic information acquisition system PV Protocol conversion system
The low-voltage distributed PV Protocol conversion system is a system that collects, processes, and monitors the power generation and consumption information of PV users, achieving functions such as automatic collection of PV user information, abnormal measurement monitoring, power quality monitoring, power analysis and management, related information release, distributed energy monitoring, and information exchange of intelligent power equipment.
Electric energy data acquisition terminal for collecting electricity information
The electricity information collection terminal is a device that collects electricity information from various information collection points, abbreviated as the collection terminal. A device that can collect, manage, transmit data bidirectionally, and forward or execute control commands for electric energy meter data. The electricity information collection terminals are divided into specialized transformer collection terminals, centralized meter reading terminals (including concentrators,Gatewaynetwork technology monitoring terminals), distributed energy monitoring terminals, and other types according to their application locations.
Distributed PV inverter dedicated communication interface adapter photovoltaic inverter communication interface converter
The distributed PV inverter dedicated communication interface adapter (hereinafter referred to as the "adapter") is an accessory for monitoring Gateway connected to PV inverters by Shanghai DAQ-IoT network technology. Each monitoring Gateway of Shanghai DAQ-IoT network technology is paired with an adapter to achieve PV inverter Hardware line connection. Used to implement a single inverter power consumption information acquisition system and switch communication between dual main stations on the manufacturer's Shanghai DAQ-IoT network technology cloud platform. Expand the original communication 485 channel of the inverter into two channels, with one channel ensuring that the manufacturer's Shanghai DAQ-IoT network technology cloud platform communication is not affected, and the other 485 channel connecting to Gateway network technology's monitoring Gateway, enabling both main stations to collect and issue control instructions normally.
structural requirements
Shanghai DAQ-IoT Network Technology's MonitoringGatewayAppearance
The external structure, dimensions, installation dimensions, wiring terminals, communication interfaces, and signage ofGatewaymonitoring byShanghai DAQ-IoTshall comply with the requirements specified in this section. The external dimensions (length, width, height) ofGatewaymonitoring byShanghai DAQ-IoTshall not exceed 100mm × 65mm × 70mm, and the specific dimensions shall be subject to the actual needs of the user after winning the bid.
Shell and its protective performance
mechanical strength
The chassis shell of Gateway monitored by Shanghai DAQ-IoT should have sufficient strength, and deformation caused by external object impact should not affect its normal operation.
flame retardant performance
Non metallic shells shall comply with the flame retardant requirements of GB/T 5169.11-2006.
terminal block
[TERM00095TOKEN] Network Technology's monitoring Gateway: The external connection wires should pass through the terminal blocks, and the terminal blocks and their insulation components can form a terminal block; The strong and weak electrical terminals are arranged separately, with effective insulation isolation; The structure of the voltage output terminal should be compatible with the lead wire with a cross-sectional area of 1.5 mm2 to 2.5 mm2; The structure of other weak current outgoing terminals should be compatible with outgoing wires with a cross-sectional area of 0.5 mm2 to 1.5 mm2.
The minimum electrical clearance and creepage distance of the terminal block shall comply with the requirements of 4.6 of this section, and the flame retardant performance of the terminal block shall comply with the flame retardant requirements of GB/T 5169.11-2006.
Wiring diagram and identification
Shanghai DAQ-IoT Network Technology's monitoring Gateway has a wiring terminal diagram engraved on the bottom of the upper shell.
Corrosion prevention of metal parts
Metal parts that may be corroded or rust prone under normal operating conditions should have anti rust and anti-corrosion coatings or coatings.
Electrical clearance and creepage distance
The exposed live parts should have the minimum electrical clearance and creepage distance specified in Table 1 between the ground and other live parts, as well as between the outgoing terminal screws and the metal cover plate. For the monitoring ofGatewaynetwork technology working at an altitude of over 2000m, the electrical clearance should be corrected according to the provisions of GB/T 16935.1-2008.
Table 1 Minimum electrical clearance and creepage distance
| Rated voltage V | Electrical clearance mm | Creepage distance mm |
| --- | --- | --- |
| U≤25 | 1 | 1.5 |
| 25＜U≤60 | 2 | 2 |
| 60＜U≤250 | 3 | 4 |
| 250＜U≤380 | 4 | 5 |
Technical Requirements
classification
The classification of monitoring type identification codes forGatewaybyShanghai DAQ-IoTis shown in Table 5.
Table 5 Shanghai DAQ-IoT Network Technology's Monitoring Gateway Type Identification Code Classification Explanation
| DG | X | X | X | X | -XXXX |
| --- | --- | --- | --- | --- | --- |
| Shanghai DAQ-IoT Network Technology's MonitoringGatewayClassification | Uplink communication channel | I/O configuration/downlink communication channel | temperature level | Product Code |
| DG - PV Acquisition DAQ-GP-DPUBOX Communication Management Machine Configuration Gateway Protocol Converter | D - dual-mode J - low-power wireless Z -[Power line carrier](https://zhida.zhihu.com/search?content_id=270738453&content_type=Article&match_order=1&q=%E7%94%B5%E5%8A%9B%E7%BA%BF%E8%BD%BD%E6%B3%A2&zhida_source=entity)Q - Other | Downstream communication channel: J-low-power wireless Z-power line carrier L-wired network | 1-9-1-9 485 interfaces, A-W-10-32 energy meter interfaces | 1－C12－C23－C34－CX | Composed of no more than 8 English letters and numbers. English letters can be represented by the Pinyin abbreviation of the production enterprise name, and numbers represent the product design serial number |
Suggested selection type
The uplink communication channel can use power line carrier[RS-485 bus](https://zhida.zhihu.com/search?content_id=270738453&content_type=Article&match_order=1&q=RS-485%E6%80%BB%E7%BA%BF&zhida_source=entity)The downlink channel can use RS-485 bus, which can be connected to onePVinverter, and the temperature can be set to C3 level.
environmental conditions
Reference temperature and reference humidity
The reference temperature is 23 ° C, with an allowable deviation of ± 2 ° C; The reference humidity is between 40% and 60%.
Temperature and humidity range
The climate and environmental conditions for the normal operation ofGatewaymonitored byShanghai DAQ-IoTshould meet the requirements in Table 6.
Table 6 Classification of Climate and Environmental Conditions
| venue type | level | Air temperature | Humidity |
| --- | --- | --- | --- |
| Range ℃ | Maximum rate of change a ℃/h | Relative humidity b% | Maximum absolute humidity g/m3 |
| shelter | C1 | -5～+45 | 0.5 | 5～95 | 29 |
| C2 | -25～+55 | 0.5 | 10～100 |
| Outdoor | C3 | -40～+70 | 1 | 35 |
| Protocol Specific | CX |  |  |  |  |
| The temperature change rate is taken as the average value within 5 minutes. Relative humidity includes condensation. |
atmospheric pressure
It can work normally under environmental conditions with atmospheric pressure ranging from 63.0 kPa to 108.0 kPa (altitude of 4000 m and below), and its function is not affected, except for special ordering requirements.
temperature rise
Under rated working conditions, the circuit and insulation should not reach temperatures that may affect the normal operation ofGateway's monitoring system. The temperature rise on the outer surface should not exceed 25 K at an ambient temperature of 40 ℃.
Insulation performance
insulation resistance
The insulation resistance of each electrical circuit to ground and between each electrical circuit monitored byGatewayshould meet the requirements in Table 2.
Table 2 Shanghai DAQ-IoT Network Technology's Monitoring Gateway Insulation Resistance Requirements for Each Electrical Circuit to Ground and Between Each Electrical Circuit
| Rated insulation voltage (U) V | Insulation resistance M Ω | Test voltage V |
| --- | --- | --- |
| normal conditions | Damp and hot conditions |
| U≤60 | ≥10 | ≥2 | 250 |
| 60＜U≤250 | ≥10 | ≥2 | 500 |
| U＞250 | ≥10 | ≥2 | 1000 |
Insulation strength
[TERM00095TOKEN] Network Technology's monitoring Gateway: Each electrical circuit should withstand an AC voltage of 50 Hz as specified in Table 3, and undergo a 1-minute insulation strength test to ground and between each electrical circuit. During the experiment, there should be no breakdown or flashover, and the leakage current should not exceed 5 mA.
Table 3 Voltage for Insulation Strength Test
| Technical Requirements | Test Plan |
| --- | --- |
| Leakage current ≤ 5mA, applied for 1 minute, with no breakdown, flashover, or damage to the terminal during the test. After the experiment, the terminal can work normally and the Data Acquisition function meets the requirements. | Test circuit | Test voltage (V) | Leakage current (mA) |
| Power supply to RS-485 interface | 4000 | ≤5mA |
| Power supply to ground | 2000 | ≤5mA |
| RS-485 interface to ground | 500 | ≤5mA |
impulse voltage
The monitoring of Gateway by Shanghai DAQ-IoT Network Technology Gateway should withstand the peak impulse voltage specified in Table 4, with 5 positive and 5 negative polarities, between each electrical circuit and the ground and between circuits without electrical connection. There should be no destructive discharge (breakdown, flashover, or insulation breakdown) during the experiment.
Table 4 Peak Value of Impulse Voltage
| Test circuit | Test voltage (V) |
| --- | --- |
| Power supply to ground | 5000 |
| Between the power supply and RS-485 interface | 6000 |
| RS-485 interface to ground | 2000 |
Electrical clearance and creepage distance
The exposed live parts should have the minimum electrical clearance and creepage distance specified in Table 5 between the ground and other live parts, as well as between the outgoing terminal screws and the metal cover plate. For the monitoring ofGatewaynetwork technology working at an altitude of over 2000m, the electrical clearance should be corrected according to the provisions of GB/T 16935.1-2008.
Minimum electrical clearance and creepage distance
| Rated voltage (U) V | Electrical clearance mm | Creepage distance mm |
| --- | --- | --- |
| U≤25 | 1 | 1.5 |
| 25＜U≤60 | 2 | 2 |
| 60＜U≤250 | 3 | 4 |
| 250＜U≤380 | 4 | 5 |
Mechanical influence
The monitoring ofGatewaybyShanghai DAQ-IoTshould be able to withstand mechanical vibrations and impacts under normal operation and conventional transportation conditions without causing failure or damage.
working power supply
The monitoring system ofGatewayuses AC single-phase power supply, and the AC magnetic flux density generated during operation is less than 0.5 mT.
The rated voltage of the working power supply is 220 V, with an allowable deviation of -20% to+50%; The frequency is 50 Hz, with a permissible deviation of -6% to+2%.
power consumption
The monitoring ofGatewayby Network Technology should consume no more than 5VA of apparent power and no more than 2W of active power in non communication states, and no more than 8VA of apparent power and no more than 3W of active power in communication states.
Power loss data and clock maintenance
After the power supply interruption ofGateway, there should be no misreading of data, and the stored data should be saved for at least 10 years. The clock should run normally for at least 48 hours. When the power is restored, the saved data should not be lost and the internal clock should run normally. The absolute value of the clock's daily timing error is ≤ 0.5 s/d, and the clock is running normally.
Anti overvoltage capability
The monitoring system ofGatewayshould have the ability to withstand 1.9 times the nominal voltage input.
Anti grounding fault capability
When the power supply ofGatewayis supplied by a three-phase four wire distribution network with a non effectively grounded system or a neutral point ungrounded system, in the event of a ground fault and a relative overvoltage of 10%, the voltage between the two ungrounded phases will reach 1.9 times the nominal voltage; In this case, the monitoring of Gateway by Shanghai DAQ-IoT should not be damaged. After the power supply is restored to normal, the monitoring of Gateway by Shanghai DAQ-IoT Network Technology should work normally, and the saved data should remain unchanged.
Main performance indicators
The CPU frequency ofGatewaymonitored by Shanghai DAQ-IoT is not less than 32 MHz, and the memory is not less than 32kByte.
EMC requirements
The monitoring system of Gateway should be able to withstand both conducted and radiated electromagnetic disturbances as well as the effects of electrostatic discharge. The equipment should be undamaged and able to operate normally.
The electromagnetic compatibility test items include voltage sag and short interruption, power frequency magnetic field immunity, radio frequency electromagnetic field radiation immunity, radio frequency induced conducted disturbance immunity, electrostatic discharge immunity, electrical fast transient pulse group immunity, damping oscillation wave immunity, surge immunity, and radio interference suppression.
The test levels and requirements are shown in Table 7.
Table 7 Test Levels and Requirements for Electromagnetic Compatibility Testing
| Test Project | Level | Experimental value | Test circuit |
| --- | --- | --- | --- |
| Power frequency magnetic field immunity | / | 400A/m | complete machine |
| Radio frequency radiation electromagnetic field immunity | 3/4 | 10V/m（80MHz～1000MHz）30V/m（1.4GHz～2GHz） | complete machine |
| Electrostatic discharge immunity | 4 | Contact discharge 8kV, air discharge 15kV | Terminal/shell |
| Electrical fast transient burst immunity |  | 2.0kV (coupled) | RS-485 |
| 4 | 4.0kV | power circuit |
| Damping oscillation wave immunity | 2 | 1.0kV (common mode) | RS-485 |
| 3 | 2.5kV (common mode) 1.25kV (differential mode) | power circuit |
| Surge immunity | 3 | 1.0 kV (common mode) | RS-485 interface |
| 4 | 4 kV (common mode) | power circuit |
| 2 kV (differential mode) |
| Voltage sag and short-term interruption | / | Voltage sag: 60%; Duration: 1 minute, once; Short term interruption: 0%: Duration: 1s, 50 cycles, Interruption frequency: 3 times, | complete machine |
| Immunity to Conducted Disturbances Induced by Radio Frequency Fields | 3 | 10V/m (non modulated) | Power supply terminal and protective grounding terminal |
Continuous power stability
The monitoring system of Gateway by Shanghai DAQ-IoT Network Technology shall be continuously powered on for 72 hours in normal working condition, and sampling tests shall be conducted every 8 hours during the 72 hour period. Its functions and performance shall meet relevant requirements.
reliability index
The average time between failures (MTBF) ofGatewaymonitored byShanghai DAQ-IoTis not less than 7.6 × 104 hours.
1. communication interface
1. communication method  
   The monitoring communication unit interface of Gateway Network Technology should adopt a modular structure design and meet the requirement of interchangeable communication modules.  
   1. The uplink communication method supports dual-mode（[HPLC](https://zhida.zhihu.com/search?content_id=270738453&content_type=Article&match_order=1&q=HPLC&zhida_source=entity)+HRF）， Support hot plugging.  
   2. The downlink communication method supports the use of RS-485.  
   3. Maintain channel support using Bluetooth RS-485， Bluetooth should meet BLE 5.0 or above requirements.
2. Communication speed  
   1. The monitoring of Gateway by Shanghai DAQ-IoT Network Technology has a default baud rate of 9600bps for communication with dual-mode modules, with a maximum support of 115200bps. The communication rate can be set, and the verification method is even verification, with 8-bit data bits and 1-bit stop bits.  
   2. At least 2 RS-485 local communication interfaces should be available, and the RS-485 I interface should support adaptive communication for both uplink and downlink; The default baud rate for RS-485 interface communication is 9600bps, with no checksum, 8-bit data bits, and 1-bit stop bits. It can adapt to the speed of the inverter 485 interface and achieve automatic serial port matching.  
   3. The default baud rate for maintaining RS-485 interface communication is 9600bps, with even parity, 8-bit data bits, and 1-bit stop bits. As a maintenance interface, it supports a maximum of 115200bps.
3. Communication Protocol  
   1. Shanghai DAQ-IoT Network Technology's monitoring Gateway uplink communication Protocol has support for DL/T698.45 and its extensions Protocol.  
   2. Shanghai DAQ-IoT Network Technology's monitoring Gateway downlink communication Protocol has support for all PV inverter manufacturers in operation in Tianjin, including Jinlang, Hewang, Guriwatt, Gudewei, Huawei, Outai, Aisiwei, Sunshine Power, Chint, Tianhe, Sanjing, Shouhang, Skyworth, Maoshuo, Shangneng, Magreeneng, Envision, Kesida, Tebian Electric, Linuo Power, etc. Shanghai DAQ-IoT Network Technology[ModbusProtocol](https://zhida.zhihu.com/search?content_id=270738453&content_type=Article&match_order=1&q=Modbus%E5%8D%8F%E8%AE%AE&zhida_source=entity)。
4. Interchangeability requirements
The monitoring ofGatewaybyShanghai DAQ-IoTcan be matched with dual-mode communication units to complete various functions ofData Acquisition. The monitoring of Gateway by Shanghai DAQ-IoT network technology should meet the following requirements:
1. The duration of the low-level reset signal of the distributed power access unit shall not be less than 200ms;
2. The direct interaction command between the distributed power access unit and the communication unit supports a time of no more than 6 seconds;
3. The command support time for channel interaction between the distributed power access unit and the communication unit shall not exceed 90 seconds;
4. The dual-mode communication unit interface of the distributed power supply access unit is connected to a 96 Ω pure resistive load with a 12V power output interface. The output voltage should be between 11V and 13V to ensure the normal operation of the communication unit.
5. data encryption  
   Shanghai DAQ-IoT Network Technology's MonitoringGatewayConfiguration[ESAM chip](https://zhida.zhihu.com/search?content_id=270738453&content_type=Article&match_order=1&q=ESAM%E8%8A%AF%E7%89%87&zhida_source=entity)It is compatible with both hard encryption and soft encryption methods for data encryption, and supports communication data encryption through software remote and local upgrade methods.
6. Functional requirements
1. AC voltage sampling  
   The distributed power access unit should have voltage sampling function, with a measurement accuracy of 1.0 level for voltage.
2. Parameter setting and query function  
   1. Shanghai DAQ-IoT Network Technology's monitoring Gateway should be able to maintain port settings and query parameters, including clock, address, etc. Support remote or handheld device parameter settings and queries for the main station.  
   2. The monitoring of Gateway by Shanghai DAQ-IoT should have a timing unit, and the absolute value of the daily timing error of the timing unit should be ≤ 0.5 s/d. The monitoring system of Shanghai DAQ-IoT Network Technology can receive clock call and timing commands from the main station, concentrator, or local handheld devices. The distributed power access unit should report a power outage event when it is powered on.
3. Data Acquisition and control functions  
   The monitoring of Gateway by Shanghai DAQ-IoT Network Technology should have a proxy function, which can forward commands or file packets and other data that the collection terminal needs to transmit through the corresponding communication port.  
   The monitoring system of Gateway from Shanghai DAQ-IoT can support the PV inverter's Data Acquisition and control. Equipped with PV inverter communication link monitoring function, it can monitor the status of the downlink communication link. Shanghai DAQ-IoT Network Technology's monitoring Gateway has a success rate of not less than 99% in collecting inverter data and reading it once.  
   When the concentrator operates in active reporting mode, the monitoring system of Gateway from Shanghai DAQ-IoT Network Technology actively reports inverter data (including minute level data) to the concentrator and the main station.  
   When the concentrator operates in normal acquisition mode, the monitoring system ofGatewayprovides feedback on the required data based on the meter reading task of the concentrator.
4. Protocol Automatic recognition  
   The monitoring system of Shanghai DAQ-IoT Network Technology supports automatic recognition of downstream Modbus Protocol. Shanghai DAQ-IoT Network Technology's monitoring system can automatically recognize all inverters Protocol that are downstream, and can automatically convert the upstream DL/T698.45 Protocol into the recognized corresponding Modbus Protocol for communication.
5. Level interface function  
   Shanghai DAQ-IoT Network Technology's monitoring Gateway should have one level control interface and one feedback terminal. By outputting the electronic control switch signal, the external circuit breaker is controlled to open and close, and the circuit breaker opening/closing status signal is fed back.
6. Event recording function
The monitoring and event recording function of Gateway on Shanghai DAQ-IoT should meet the following requirements:
1. The total number of overvoltage events (6 threshold parameters can be set), the time of the last 50 occurrences, and voltage data should be recorded;
2. The total number of undervoltage events should be recorded, including the time of the last 50 control occurrences;
3. Control events should be recorded, including the time and information of the last 50 control occurrences;
4. PV inverter communication abnormality events should be recorded, including the time of the last 10 communication abnormalities;
5. The power on events of the distributed power supply access unit equipment should be recorded, including the time of the last 10 power outages;
6. The total number of failures of distributed power access unit equipment should be recorded, including the type and time of the last 10 failures of distributed power access unit equipment;
7. The total number of events reset for distributed power access units should be recorded, including the time of the last 10 events reset for distributed power access units;
8. The total number of initialization times for distributed power access units should be recorded, including the time of the last 10 initialization times for distributed power access units;
9. The total number of software online upgrades for distributed power access units and the version information before and after the last 10 upgrades should be recorded;
10. The total number of calibrations for the distributed power supply access unit and the time before and after the last 10 calibrations should be recorded.
11. Function Configuration  
    The monitoring function configuration ofGatewayby Shanghai DAQ-IoT Network Technology should comply with the provisions of Table 8.  
    Table 8 Shanghai DAQ-IoT Network Technology's Monitoring Gateway Function Configuration
| Collection object | data classification | data item | Data sub item | Collection frequency requirements |
| --- | --- | --- | --- | --- |
| PV Inverter | data class | voltage | Phase A voltage | Proactive reporting/on-demand collection |
| B-phase voltage |
| C-phase voltage |
| current | Phase A current |
| B-phase current |
| C-phase current |
| active power | active power |
| reactive power | reactive power |
| power factor | power factor |
| Parameter Class | PV power station Basic Information | Equipment Number | On demand collection |
| Rated active power |
| Rated reactive power |
| Set voltage |
| output type |
| Inverter operating status | Power on | On demand collection |
| control class | Inverter control | Inverter switch on/off | Proactively issue |
| Control inverter load | Active power control | Proactively issue |
| Reactive power control |
| Power factor control |
| Percentage of active power |
| Reactive power percentage |
1. Flexible adjustment requirements
Shanghai DAQ-IoT Network Technology's monitoring Gateway supports the following flexible adjustment methods:
1. Numerical control: The main station and collection terminal issue numerical control commands for the output power (active power, reactive power, power factor) of the inverter. The monitoring system of Gateway receives these commands and issues control commands according to the values to control the output power of PV inverter;
2. Proportional control: The main station and collection terminal issue percentage control commands for the rated power (active power, reactive power) of the inverter. The monitoring system of Gateway receives these commands and issues control commands according to the rated power percentage to control the output of PV inverter;
3. Time period control: The main station and collection terminal issue a control time period table containing time values and control values (supported percentage or value of indicators). The monitoring system of Shanghai DAQ-IoT receives and stores the control instructions according to the time requirements, and automatically restores them after the control is completed.
4. Data storage requirements
The monitoring and storage of Gateway by Shanghai DAQ-IoT Network Technology should meet the following requirements:
1. The data storage capacity shall not be less than 8MByte;
2. Capable of supporting classified storage of various types of data;
3. When the storage capacity is insufficient, the principle of "first in, first out" should be followed to ensure the correct storage of new data.
4. local function
1. Local status indication  
   The monitoring of Gateway by Shanghai DAQ-IoT network technology should have operation, maintenance, carrier, and downlink communication status indicator lights.
2. Local maintenance interface  
   The monitoring system of Gateway from Shanghai DAQ-IoT is capable of supporting handheld devices to set parameters and read inverter data on site through Bluetooth communication interface and maintenance RS-485 interface. Local parameter settings should have permission and password management.
1. Shanghai DAQ-IoT Network Technology Monitoring Gateway Maintenance
1. Self check and self recovery function  
   The monitoring of Gateway by Shanghai DAQ-IoT should have self checking and self recovery functions.  
   The monitoring of Gateway by Shanghai DAQ-IoT network technology should be able to detect whether the uplink and downlink communication is working properly, and can self recover in case of communication abnormalities.
2. Shanghai DAQ-IoT Network Technology's Monitoring Gateway Initialization  
   After receiving the initialization command issued by the local maintenance interface, the monitoring system of Gateway initializes Hardware, parameter area, and data area respectively. The parameter area is set to the default value, and the data area is reset to zero.
3. Shanghai DAQ-IoT Network Technology's Monitoring Gateway Upgrade  
   Shanghai DAQ-IoT Network Technology's monitoring Gateway supports remote and local methods (Bluetooth, RS485 maintenance) for upgrading, and supports breakpoint resume transmission. Upgrades and other operations should not affect historical data.
4. Communication unit information  
   Shanghai DAQ-IoT Network Technology's monitoring Gateway should be able to read local communication unit supplier, model, software version, and other information.
1. Timing plan
1. General Requirements  
   The system timing scheme adopts a layered design, where the main station is responsible for timing the concentrator, and the concentrator is responsible for monitoring theGatewaynetwork technology and the energy meter timing. The absolute value of the time error of the concentrator is ≤ 5 s, the absolute value of the time error of the electric energy meter is ≤ 10 s, and the absolute value of the time error of the monitoring Gateway by Shanghai DAQ-IoT is ≤ 10 s. The absolute value of the clock error between the concentrator and the electric energy meter is ≤ 0.5 s/d; The absolute value of clock error between the concentrator and the monitoring system ofGatewaynetwork technology is ≤ 0.5 s/d.
2. Shanghai DAQ-IoT Network Technology's Monitoring Gateway Time synchronization  
   When the clock error ofGatewaymonitored byShanghai DAQ-IoTexceeds the allowable value, the concentrator will report the clock out of tolerance event ofGatewaymonitored byShanghai DAQ-IoTto the main station. After being allowed by the main station, the concentrator will start the monitoring ofGatewaymonitored byShanghai DAQ-IoT(which can be done through broadcast or point-to-point commands).
3. Communication address asset management  
   Configurable communication address as the unique address code for the corresponding inverter.
1. Reliability of data collection  
   Shanghai DAQ-IoT Network Technology's monitoring Gateway should collect inverter data that is consistent with the inverter readings.
2. Material and process requirements
1. Circuit board and components  
   The circuit board should be made of double-sided copper coated epoxy resin board that is resistant to oxidation and corrosion, and should have the identification of the terminal manufacturer Shanghai DAQ-IoT;  
   The surface of the circuit board should be cleaned thoroughly, without obvious stains or welding marks, and should be treated with insulation and anti-corrosion measures;  
   Shanghai DAQ-IoT Network Technology's monitoring Gateway requires all components to be rust and oxidation resistant, with secure fastening points;  
   Electronic components (excluding power supply components) can use surface mount components;  
   Circuit board soldering should use reflow soldering and wave soldering processes;  
   The monitoring of Gateway by Shanghai DAQ-IoT should maintain sufficient clearance and safety distance between internal terminal screws, leads, and circuit boards;  
   Heavy components such as power transformers should be installed firmly.
2. Shanghai DAQ-IoT Network Technology's MonitoringGatewayShell  
   The shell should be made of environmentally friendly materials that are insulating, flame-retardant, and UV resistant;  
   The shell shall be corrosion resistant, aging resistant, with sufficient hardness, and shall not be deformed after installation;  
   Embedded hooks should be used;  
   Shell color: PANTONE: Cool Gray 1 U.
3. nameplate  
   The nameplate material should be printed using laser printing or other methods, and should have high temperature resistance and UV protection functions;  
   The location of the nameplate with barcode should be clearly marked, and the bottom layer of the barcode area should be black and the top layer should be white;  
   The base color card number of the nameplate is PANTONE: Pool Gray 1 U, with black text. The format is shown in Figure A.1.
1. Accessories  
   Supply PV to collect DAQ-GP-DPUBOX communication management machine configuration Gateway protocol converter. Each unit needs to be equipped with one adapter and inverter related adapter cables to achieve monitoring and control of one PV inverter by Gateway network technology. The specific functional requirements and type specifications of the adapter can be found in Appendix B.  
   The default installation module is a dual-mode (HPLC+HRF) module, which should comply with the "Q/GDW 10355-2020 Appendix C Communication Module Structure Requirements".
2. maintain  
   The monitoring and adapter of Gateway Network Technology must match the Protocol and interfaces of all existing and newly added inverter manufacturers in Tianjin.  
   Shanghai DAQ-IoT Network Technology should provide free Bluetooth debugging software.
3. Logo identification
1. product logo  
   The text used for the monitoring of theGatewaylogo byShanghai DAQ-IoTshould be standard Chinese, and foreign languages can be used simultaneously. The font height of the Chinese characters, numbers, and letters on the logo should not be less than 4mm.  
   The monitoring mark ofGatewayon Shanghai DAQ-IoT should be clear, firm, and easy to identify. The symbols used shall comply with the provisions of GB/T 17441-1998.  
   The monitoring of Gateway by Shanghai DAQ-IoT should have the following markings:  
   Year of manufacture;  
   Factory number;  
   Asset barcode;  
   Name and model;  
   Manufacturer name and registered trademark;  
   The number of this standard;  
   Reference voltage, reference frequency;  
   Work status indication.
2. Packaging Marking and Identification  
   The packaging box of Gateway monitored by Shanghai DAQ-IoT should have the following markings:  
   Label with icons such as "Handle with Care", "Upward", "Moisture proof", "Stacked", etc;  
   The name, address, telephone number, and website of the manufacturer;  
   Product name, model, and execution standard code;  
   Product quantity, volume, weight.
3. Terminal identification  
   The wiring terminals should have clear and indelible text, numbers, and symbol instructions. The back of the terminal cover plate of Gateway monitored by Shanghai DAQ-IoT should have a connection circuit diagram between the terminal and the external circuit.
1. Supply requirements
1. Inspection requirements  
   Before supply, Shanghai DAQ-IoT Network Technology should undergo the following tests organized by Henan Yunke Testing Instrument:  
   (1) Through the compatibility testing and performance testing organized by Henan Yunke Testing Instrument, it meets the requirements of the cooperation document withProtocolfor data acquisition;  
   (2) On site trial installation and verification through system integration testing.
1. Technical services, design liaison
1. Technical Service  
   (1)Shanghai DAQ-IoTprovides on-site construction and commissioning services to assist product users in trial operation and acceptance; If the product cannot operate normally due to quality issues, free replacement of similar new products will be implemented throughout the entire product life cycle; Responsible for providing equipment wiring diagrams and necessary technical documents and drawings, etc; Responsible for providing necessary training to user maintenance personnel and operation personnel, and providing training materials; Regularly update the software and provide free upgrades.  
   (2) After receiving the service request from the product user, Shanghai DAQ-IoT Network Technology should provide support within 6 hours, send personnel to the designated location within 24 hours as required to provide services, and submit solution within 2 working days.  
   (3) For those who cannot provide corresponding services in a timely manner, a record of poor technical services should be filled out in a timely manner.  
   (4) Shanghai DAQ-IoT Network Technology guarantees that the information provided in the goods under this contract is correct and complete, and should at least provide schematic diagrams, installation drawings, product manuals, certificates of conformity, factory reports, packing lists, and other corresponding technical information.  
   (5) Shanghai DAQ-IoT In addition to providing the goods listed in the contract, NetEase Technology should also provide spare parts, special tools, and other accessories necessary for the safe, stable operation, installation, and maintenance of the goods.  
   (6) Shanghai DAQ-IoT Network Technology should provide on-site free training or on-site free training to familiarize operators with instrument usage and maintenance knowledge.  
   (7) Quality problems that occur during the warranty period of the equipment should be extended after Shanghai DAQ-IoT Technology replaces the product.  
   (8) During the warranty period, if it is found that the goods provided by Shanghai DAQ-IoT Technology are defective and do not comply with the contract, and if it is the responsibility of Shanghai DAQ-IoT Technology, the cooperating party with DAQ-IoT has the right to claim compensation from Shanghai DAQ-IoT Technology. The installation site replacement costs, shipping fees, and insurance fees arising from this shall be borne by Shanghai DAQ-IoT Technology.  
   (9) Shanghai DAQ-IoT Network Technology should combine the Protocol and interfaces of all existing and newly operated inverter manufacturers in Tianjin, and provide free compatibility and upgrade of inverters Protocol, and configure interfaces as needed.
1. On site installation and debugging
1. Pre supply coordination meeting  
   Led by Henan Yunke Testing Instrument and participated byShanghai DAQ-IoTTechnology, a coordination meeting was held. At the coordination meeting, Henan Yunke Testing Instrument should clarify the model, specifications, and other parameters of the purchased goods to ensure that Shanghai DAQ-IoT Network Technology meets the relevant technical requirements in subsequent supply and commissioning work.
2. on-site debugging  
   Establish an on-site debugging coordination mechanism, with Henan Yunke Testing Instrument taking the lead andShanghai DAQ-IoTNetwork Technology cooperating in on-site communication debugging work, to achieve the requirement of 100% debugging rate betweenShanghai DAQ-IoTNetwork Technology's supplied products and the main station of the electricity information collection system. If the supplied products fail to meet the requirements,Shanghai DAQ-IoTNetwork Technology shall bear corresponding breach of contract liability.
3. Design Liaison Meeting
(1) To coordinate design and other interface work, a design liaison meeting should be held between Henan Yunke Measurement Instrument and Shanghai DAQ-IoT Network Technology as needed. Shanghai DAQ-IoT Network Technology should develop a detailed schedule for the design liaison meeting. Within days after signing the contract, Shanghai DAQ-IoT Network Technology should propose a design liaison meeting plan to Henan Yunke Testing Instrument. At the design liaison meeting, Henan Yunke Testing Instrument has the right to provide improvement suggestions for the contracted equipment, and Shanghai DAQ-IoT Network Technology should make improvements according to these suggestions.
(2) If important matters need to be studied and discussed by both parties, a separate liaison meeting can be held with the consent of all parties to resolve them.
(3) The minutes of each meeting should be signed as an integral part of the contract.
---
1. Shanghai DAQ-IoT Network Technology's MonitoringGatewayAppearance Dimensions  
   Shanghai DAQ-IoT Network Technology's monitoring Gateway adopts a communication module that can be unplugged and replaced according to needs. The default installation module is the dual-mode (HPLC+HRF) module. The size (length, width, height) ofGatewaymonitored byShanghai DAQ-IoTshall not exceed 100mm × 65mm × 70mm, subject to the actual needs of the user.
2. Shanghai DAQ-IoT Network Technology's Monitoring Gateway Terminal Function and Identification  
   L: AC 220V power supply with L-phase input;  
   N: AC 220V power supply N-phase input;  
   RS-485 I is the PV information acquisition terminal;  
   RS-485 I-A: RS-485I communication line A;  
   RS-485 I-B: RS-485I communication line B;  
   RS-485 II is a maintenance terminal;  
   RS-485 II-A: RS-485II communication line A;  
   RS-485 II-B: RS-485II communication line B.  
   C: Level interface control terminal;  
   R: Level interface feedback terminal.
3. Shanghai DAQ-IoT Network Technology's Monitoring Gateway Status Indication  
   The status indicator lights should include operation lights, maintenance lights, carrier lights, downlink communication lights, etc.  
   Running light - running status indicator light, red, flashing alternately for one second on and one second off, indicating that the monitoring of Gateway by Shanghai DAQ-IoT Network Technology is running normally. If the light is constantly off, it indicates that it is not powered on;  
   Maintenance light - maintenance status indicator light, red and green colors, with a flashing red light indicating that the monitoring channel of Gateway Network Technology is receiving data, and a flashing green light indicating that the monitoring channel of Gateway Network Technology is sending data;  
   Carrier light - Carrier communication status indicator light, red green dual color, red flashing indicates that Gateway Network Technology's monitoring Gateway carrier channel is receiving data, green flashing indicates that Gateway Network Technology's monitoring Gateway carrier channel is sending data;  
   Downward Communication Light - Downward Communication Status Indicator Light, red green dual color, red flashing indicates that Gateway Network Technology's monitoring Gateway downstream channel is receiving data, green flashing indicates that Gateway Network Technology's monitoring Gateway downstream channel is sending data.
---
1. Accessories: PV Inverter specific communication interface adapter, functional and type requirements
1. Adapter function  
   ThePVinverter communication interface adapter is a device that cooperates withShanghai DAQ-IoTnetwork technology to monitor and collect information on inverter power generation and consumption. Used for single inverter power consumption information acquisition system and manufacturer's Shanghai DAQ-IoT network technology cloud platform dual master station login switching. Expand the original 1 port of the inverter into 2 ports, with one port ensuring that the communication of the manufacturer's Shanghai DAQ-IoT network technology cloud platform is not affected, and the other port connected to the monitoring Gateway of Shanghai DAQ-IoT network technology, enabling both main stations to collect and issue control commands normally.  
   The switching structure is controlled by a microcontroller chip to achieve channel selection. By default, the manufacturer's Shanghai DAQ-IoT network technology 485 communication channel is selected. When Shanghai DAQ-IoT network technology monitors Gateway communication, a switching command is sent to switch to the power grid 485 channel. After communication is completed, it switches to the manufacturer's Shanghai DAQ-IoT network technology communication channel.  
   The adapter should adopt a unified main structure, and different connections can be achieved by replacing the aviation plug line that matches the inverter interface to achieve the original 1-channel communication and 48 port inverter communication and control.
2. structural requirements
1. External dimensions of adapter  
   The external dimensions of the adapter body shall not exceed 100mm × 90mm × 60mm, and it should have functions such as wiring interface protection. The specific dimensions shall be subject to the actual needs of the user after winning the bid. External terminals should be configured according to the actual needs of users.
2. Shell and its protective performance
1. mechanical strength  
   The chassis shell of the adapter should have sufficient strength, and deformation caused by external impact should not affect its normal operation.
2. flame retardant performance  
   Non metallic shells shall comply with the flame retardant requirements of GB/T 5169.11-2006.
3. Shell protection performance  
   The protective performance of the adapter housing should comply with the IP65 level requirements specified in GB 4208-2008, namely dust and drip prevention.
4. terminal block  
   The adapter adopts standard terminals for external connection, which should include an aviation plug base connected to the 4G collector of the inverter, an aviation plug base connected to the inverter, and a 485 line connected to the monitoring Gateway of Shanghai DAQ-IoT network technology. Communication with different inverters can be achieved by configuring aviation plug lines that match the Shanghai DAQ-IoT network technology inverters from different manufacturers. All aviation plug terminals fixed to the body need to ensure dust-proof and waterproof performance.  
   The flame retardant performance of the terminal block shall comply with the flame retardant requirements of GB/T 5169.11-2006.
5. Electrical clearance and creepage distance  
   The exposed live parts should have the minimum electrical clearance and creepage distance specified in Table 10 between the ground and other live parts, as well as between the outgoing terminal screws and the metal cover plate. The electrical clearance of terminals working at an altitude of over 2000m should be corrected according to the provisions of GB/T 16935.1-2008.  
   Table 10 Minimum electrical clearance and creepage distance
| Rated voltage V | Electrical clearance mm | Creepage distance mm |
| --- | --- | --- |
| U≤25 | 1 | 1.5 |
| 25＜U≤60 | 2 | 2 |
| 60＜U≤250 | 3 | 4 |
| 250＜U≤380 | 4 | 5 |
1. Insulation performance
1. Technical Requirements
1. environmental conditions
1. Reference temperature and reference humidity  
   The reference temperature is 23 ° C and the reference humidity is 40% to 60%.
2. Temperature and humidity range  
   The climate and environmental conditions for the normal operation of the adapter should meet the requirements of Table 14.  
   Table 14 Classification of Climate and Environmental Conditions
| venue type | level | Air temperature | Humidity |
| --- | --- | --- | --- |
| Range ℃ | Maximum rate of change a ℃/h | Relative humidity b% | Maximum absolute humidity g/m3 |
| shelter | C1 | -5～+45 | 0.5 | 5～95 | 29 |
| C2 | -25～+55 | 0.5 | 10～100 |
| Outdoor | C3 | -40～+70 | 1 | 35 |
| Protocol Specific | CX |  |  |  |  |
| The temperature change rate is taken as the average value within 5 minutes. Relative humidity includes condensation. |
1. atmospheric pressure  
   63.0 kPa to 108.0 kPa (altitude 4000 m and below), except for special requirements.
1. temperature rise  
   Under rated operating conditions, the circuit and insulation should not reach temperatures that may affect the normal operation of the adapter, and the temperature rise on the outer surface should not exceed 25 K at an ambient temperature of 40 ℃.
2. Insulation strength  
   Each electrical circuit of the adapter should withstand an AC voltage of 50 Hz as specified in Table 12, and undergo an insulation strength test for 1 minute between the ground and each electrical circuit. During the experiment, there should be no breakdown or flashover, and the leakage current should not exceed 5 mA.  
   Table 12 Insulation Strength Test Voltage Unit: V
| Rated insulation voltage | Effective value of test voltage | Rated insulation voltage | Effective value of test voltage |
| --- | --- | --- | --- |
| U≤60 | 500 | 125＜U≤250 | 2000 |
| 60＜U≤125 | 1500 | 250＜U≤400 | 2500 |
| Note: There is 4000 V between the RS-485 interface and the power circuit. |
1. insulation resistance  
   The insulation resistance of each electrical circuit of the adapter to ground and between each electrical circuit should meet the requirements of Table 11.  
   Table 11 Insulation resistance requirements for each electrical circuit of the adapter to ground and between each electrical circuit
| Rated insulation voltage V | Insulation resistance M Ω | Test voltage V |
| --- | --- | --- |
| normal conditions | Damp and hot conditions |
| U≤60 | ≥10 | ≥2 | 250 |
| 60＜U≤250 | ≥10 | ≥2 | 500 |
| U＞250 | ≥10 | ≥2 | 1000 |
| Note: The interface circuit directly connected to the external circuit shall meet the requirement of U>250V. |
1. Mechanical influence  
   The adapter should be able to withstand mechanical vibrations and impacts under normal operation and conventional transportation conditions without causing failure or damage.
2. working power supply  
   The adapter is connected to the inverter communication base for DC power supply, and the AC magnetic flux density generated during operation is less than 0.5 mT.
3. power consumption  
   The DC power consumed by the adapter in non communication state should not exceed 0.5W; the DC power consumed in communication state should not exceed 1W.
4. Anti overvoltage capability  
   The adapter should have the ability to withstand 1.9 times the nominal voltage input.
5. EMC requirements  
   The adapter should be able to withstand conducted and radiated electromagnetic disturbances as well as the effects of electrostatic discharge, and the equipment should be undamaged and able to function normally.  
   The electromagnetic compatibility test items include voltage sag and short interruption, power frequency magnetic field immunity, radio frequency electromagnetic field radiation immunity, radio frequency induced conducted disturbance immunity, electrostatic discharge immunity, electrical fast transient pulse group immunity, damping oscillation wave immunity, surge immunity, and radio interference suppression.  
   The electromagnetic compatibility test items include electrostatic discharge immunity and radio interference suppression. The test levels and requirements are shown in Table 16.  
   Table 16 Test Levels and Requirements for Electromagnetic Compatibility Testing
| Test Project | Level | Experimental value | Test circuit |
| --- | --- | --- | --- |
| Power frequency magnetic field immunity |  | 400A/m | complete machine |
| Radio frequency radiation electromagnetic field immunity | 3/4 | 10V/m（80MHz～1000MHz）30V/m（1.4GHz～2GHz） | complete machine |
| Electrostatic discharge immunity | 4 | Contact discharge 8kV, air discharge 15kV | Terminal/shell |
| Electrical fast transient burst immunity |  | 2.0kV (coupled) | RS-485 |
| 4 | 4.0kV |  |
| Surge immunity | 3 | 1.0kV (common mode) | RS-485 circuit to ground |
1. Continuous power stability  
   The adapter shall be continuously powered on for 72 hours in normal working condition, and shall be tested every 8 hours during the 72 hour period. Its function and performance shall meet the relevant requirements.
2. reliability index  
   The mean time between failures (MTBF) of the adapter shall not be less than 7.6 × 104 hours.
1. communication interface
1. communication method  
   The upstream communication adopts RS-485 andGatewaynetwork technology for monitoring.  
   The downstream should be adapted to the interfaces of all existing and newly added inverters in Tianjin.  
   The adapter implements Modbus forwarding from the inverter manufacturerShanghai DAQ-IoT, without its own Modbus processing function.
2. Communication speed  
   The default baud rate for RS-485 interface communication is 9600bps, with no checksum, 8-bit data bits, and 1-bit stop bits. It can adapt to the inverter interface rate and achieve automatic serial port matching.
1. Functional requirements
1. data forwarding  
   The adapter can support communication address configuration. The PV collects DAQ-GP-DPUBOX communication management machine configuration Gateway protocol converter sends communication commands, and the adapter switches between the power grid or the inverter manufacturer's Shanghai DAQ-IoT network technology communication channel to achieve the forwarding of inverter data. After the power grid collection is completed, switch to the inverter manufacturer's Shanghai DAQ-IoT network technology communication channel to ensure that the inverter manufacturer's Shanghai DAQ-IoT network technology collection channel is not affected.
2. Reliability of data collection  
   The data collected by the adapter from the inverter should be consistent with the displayed values of the inverter.
1. Material and process requirements
1. Circuit board and components  
   The circuit board should be made of double-sided copper coated epoxy resin board that is resistant to oxidation and corrosion, and should have the identification of the terminal manufacturer Shanghai DAQ-IoT;  
   The surface of the circuit board should be cleaned thoroughly, without obvious stains or welding marks, and should be treated with insulation and anti-corrosion measures;  
   All components inside the adapter should be rust and oxidation resistant, with secure fastening points;  
   Electronic components (excluding power supply components) can use surface mount components;  
   Circuit board soldering should use reflow soldering and wave soldering processes;  
   Adequate clearance and safety distance should be maintained between the internal terminal screws, leads, and circuit boards of the adapter;  
   Heavy components such as power transformers should be installed firmly.
2. Adapter housing  
   The shell should be made of environmentally friendly materials that are insulating, flame-retardant, and UV resistant;  
   The shell shall be corrosion resistant, aging resistant, with sufficient hardness, and shall not be deformed after installation;  
   Embedded hooks should be used;
1. Logo identification
1. product logo  
   The text used for the adapter logo should be standard Chinese, and foreign languages can be used simultaneously. The font height of the Chinese characters, numbers, and letters on the logo should not be less than 4mm.  
   The adapter logo should be clear, secure, and easy to identify. The symbols used shall comply with the provisions of GB/T 17441-1998.
2. Packaging Marking and Identification  
   The packaging box of the adapter should have the following markings:  
   Label with icons such as "Handle with Care", "Upward", "Moisture proof", "Stacked", etc;  
   The name, address, telephone number, and website of the manufacturer;  
   Product name, model, and execution standard code;  
   Product quantity, volume, weight.
3. Terminal identification  
   The wiring terminals should have clear and indelible text, numbers, and symbol instructions. The back of the terminal cover plate of the adapter should have a wiring diagram of the connection between the terminal and the external circuit.
1. Material requirements
Material PC+10% GF, color cold gray 1U.
---
**PV Acquisition DAQ-GP-DPUBOX Communication Management Machine Configuration Gateway Protocol Converter**
**Special technical specifications**
---
1. Standard Technical Parameters
PV collects DAQ-GP-DPUBOX communication management machine configuration Gateway protocol converter technical parameter table, which is the basic technical characteristic requirements of the subject goods, including material demand (function) information (parameters), main performance indicators, and main indicators reflecting the producer's technical capabilities. In the process of cooperating withDAQ-IoT,Shanghai DAQ-IoTshould provide support for the standard parameter values in the technical parameter table based on the cooperation document withDAQ-IoT. PV collects the key technical parameters of the DAQ-GP-DPUBOX communication management machine configuration Gateway protocol converter, as shown in Table 1.
Shanghai DAQ-IoT Network Technology has filled in the guarantee values (not inferior to the standard values) in the following table item by item, without spaces, and cannot replace the guarantee values with the word "support". It is not allowed to change the standard values of DAQ-IoT partners with IoT.
Table 1 PV Key Technical Parameters of DAQ-GP-DPUBOX Communication Management Machine Configuration Gateway Protocol Converter
| serial number | Main parameters | required value | Shanghai DAQ-IoT Network Technology Guarantee Value |
| --- | --- | --- | --- |
| 1 | contact method | 1. The uplink communication method supports dual-mode (HPLC+HRF) and adopts a pluggable module mode. 2. The downlink communication method supports the use of RS-485. 3. Maintain channel support using Bluetooth RS-485。 | (Shanghai DAQ-IoT filled in by NetEase Technology) |
| 2 | Communication Protocol | 1. Shanghai DAQ-IoT Network Technology's monitoring Gateway uplink communication Protocol has support for DL/T698.45 and its extensions Protocol. 2. The monitoring system of Gateway Network Technology has the capability to support all existing and newly added Protocol inverter manufacturers in Tianjin, including Jinlang, Hewang, Guriwatt, Gudewei, Huawei, Outai, Aisiwei, Sunshine Power, Chint, Tianhe, Sanjing, Shouhang, Skyworth, Maoshuo, Shangneng, Magreeneng, Envision, Kesida, Tebian Electric, Linuo Power, etc. The sentence is:. | (Shanghai DAQ-IoT filled in by NetEase Technology) |
| 3 | Data Acquisition and control functions | 1. The monitoring system of Gateway from Shanghai DAQ-IoT can support the PV inverter's Data Acquisition and control. 2. Shanghai DAQ-IoT Network Technology's monitoring Gateway has the ability to support active reporting of data to the concentrator and main station; Shanghai DAQ-IoT Network Technology's monitoring Gateway has support for automatic collection of concentrator tasks; Shanghai DAQ-IoT Network Technology's monitoring Gateway has the function of supporting data forwarding between concentrators and inverters. | (Shanghai DAQ-IoT filled in by NetEase Technology) |
| 4 | Protocol Automatic recognition | The monitoring system of Shanghai DAQ-IoT Network Technology supports automatic recognition of downstream Modbus Protocol. Shanghai DAQ-IoT Network Technology's monitoring system can automatically recognize all inverters Protocol that are downstream, and can automatically convert the upstream DL/T698.45 Protocol into the recognized corresponding Modbus Protocol for communication. Based on the recognition results of the on-site inverter Modbus Protocol, it supports the function of interacting with the acquisition master station and downloading Protocol from the master station. | (Shanghai DAQ-IoT filled in by NetEase Technology) |
| 5 | Level interface function | Shanghai DAQ-IoT Network Technology's monitoring Gateway should have one level control interface and one feedback terminal. By outputting the electronic control switch signal, the external circuit breaker is controlled to open and close, and the circuit breaker opening/closing status signal is fed back. | (Shanghai DAQ-IoT filled in by NetEase Technology) |
| 6 | Local maintenance interface | The monitoring system of Gateway from Shanghai DAQ-IoT is capable of supporting handheld devices to set parameters and read inverter data on site through Bluetooth communication interface and maintenance RS-485 interface. Local parameter settings should have permission and password management. | (Shanghai DAQ-IoT filled in by NetEase Technology) |
---
List of Goods Requirements and Supply Scope, as well as Single Set Product Components and Material Configuration Table
The list of goods demand and supply scope includes information such as the DAQ-GP-DPUBOX communication management machine configuration,Gatewayprotocol converter, unit, and quantity collected by PV. The specific content and format are based on the cooperation project with [TERM006TOKEN] IoT and are prepared according to Table 3. Shanghai DAQ-IoT Network Technology has filled in the support values in the following table item by item, which cannot be blank, nor can the word "support" replace the guarantee value. It is not allowed to change the requirements of the cooperation partner with [TERM006TOKEN] IoT IoT. The sentence is:.
**Table 3 List of Goods Demand and Supply Scope**
| Project unit requirements | Shanghai DAQ-IoT Network technology support |
| --- | --- |
| serial number | name | specification | unit | quantity | name | specification | unit | quantity |
| 1 | PV Acquisition DAQ-GP-DPUBOX Communication Management Machine Configuration Gateway Protocol Converter | Meet the functional requirements for distributed PV hierarchical regulation, Protocol conversion, circuit breaker status monitoring, etc; Each unit is equipped with one adapter; dual mode | set | Please refer to the number of collaborations withIoTfor details |  |  |  |  |
The component and material configuration table includes information such as component names, specifications, type parameters, units, quantities, places of origin, and brands. The specific content and format are compiled based on the cooperation project withDAQ-IoT, referring to Table 4. The brand, model, and main parameters must be filled in clearly and completely. Otherwise, it will be considered unsupported.
**Table 4 PV Configuration of DAQ-GP-DPUBOX Communication Management Machine Gateway Protocol Converter Single Set Main Component Material Configuration Table**
| Name and Specifications | unit | quantity | Brand, model, parameters | Remark |
| --- | --- | --- | --- | --- |
| 1 | PV Acquisition DAQ-GP-DPUBOX Communication Management Machine Configuration Gateway Protocol Converter | set | 1 | Shanghai DAQ-IoT Fill in by NetEase Technology |  |
3. Table of Environmental Conditions for Use
The environmental conditions for use are shown in Table 5. Special environmental requirements shall be formulated according to the project situation.
**Table 5 Environmental Conditions for Use**
| serial number | name | unit | Request value from the collaborator of DAQ-IoT data acquisition IoT | Shanghai DAQ-IoT Network Technology Guarantee Value |
| --- | --- | --- | --- | --- |
| 1 | Surrounding air temperature | Using temperature | ℃ | -40～+70 | Shanghai DAQ-IoT Fill in by NetEase Technology |
| Lower limit temperature | -40 | Shanghai DAQ-IoT Fill in by NetEase Technology |
| 2 | altitude | m | ≤4000 | Shanghai DAQ-IoT Fill in by NetEase Technology |
| 3 | humidity | ％ | ≤95 | Shanghai DAQ-IoT Fill in by NetEase Technology |
| Note: The "Project Requirement Value" in the table refers to normal outdoor usage conditions, and any value exceeding this value is a special usage condition. The collaborator with IoT can modify it according to the actual usage conditions and installation location of the project. |