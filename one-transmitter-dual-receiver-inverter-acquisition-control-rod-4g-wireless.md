<https://zhuanlan.zhihu.com/p/1991540425136312547>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
as[IoTData Acquisition](https://zhida.zhihu.com/search?content_id=268593549&content_type=Article&match_order=1&q=%E7%89%A9%E8%81%94%E7%BD%91%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86&zhida_source=entity)solution professional provider, industrial Data Acquisition expert (professional account), Shanghai DAQ-IoT website editor [http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com) Here is an introduction to the following content, and we sincerely welcome everyone to discuss and exchange ideas.
As a professional internet of things data acquisition solutions provider, industrial data acquisition experts (professional households), digital internet of things editor daq - iot here to do the following introduction, and sincerely welcome everyone to discuss and exchange.
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
![图片](https://picx.zhimg.com/v2-02ad3878949c846502ee070b84c696fd_1440w.jpg)
**One** **Introduction to Core New Features**
[inverter](https://zhida.zhihu.com/search?content_id=268593549&content_type=Article&match_order=1&q=%E9%80%86%E5%8F%98%E5%99%A8&zhida_source=entity)Enhance regulatory capabilities, with a focus on three aspects: supporting dual SIM cards with a single SIM card [APN](https://zhida.zhihu.com/search?content_id=268593549&content_type=Article&match_order=1&q=APN&zhida_source=entity)Communication, support encrypted communication and identity authentication based on national encryption algorithms, support[104 protocol](https://zhida.zhihu.com/search?content_id=268593549&content_type=Article&match_order=1&q=104%E8%A7%84%E7%BA%A6&zhida_source=entity)signal communication.
Introduction to common concepts of data acquisition IoT DAQ-IoT:
**(** **One** **）Supports single SIM** **Dual APN card** **Communication**
**1. What is it?**
The inverter acquisition control rod can establish two independent network connections simultaneously, using a SIM card to communicate with both the power grid company and the inverter cloud platform APN ¹.
**Why?**
Collecting control rods and communicating with both the power grid company and the inverter cloud platform can meet the data transmission needs of both the power grid company and users, improving communication transmission efficiency; Adopting dual APN communication to ensure communication security between the power grid company and users.
**3. What should I do?**
Select a 4G communication module that supports dual APN functionality (some existing communication modules do not support dual APN and need to be replaced with communication modules that meet the requirements), and implement dual channel routing strategy and link management in the acquisition control stick Firmware.
**Communication testing:**Activate 4G dual APN SIM card, conduct network testing, and activate the card
![图片](https://picx.zhimg.com/v2-1e3edb7de0262a2f6d83a093d54ba891_1440w.jpg)
[1] APN: refers to the "Access Point Name". According to the APN operator, it will assign the corresponding IP address, provide the corresponding security policy or connect to a specific network, and access different APNs to access a specific Internet or private network.
See the appendix for the process.
**（2） Support encrypted communication and identity authentication based on national encryption algorithms**
**1. What is it?**
The inverter acquisition control rod should integrate a domestic Hardware security chip 2, based on a domestic commercial password algorithm 3, to encrypt communication data 4 and authenticate identity 5.
**Why?**
[Regulations on Safety Protection of Power Monitoring Systems](https://zhida.zhihu.com/search?content_id=268593549&content_type=Article&match_order=1&q=%E3%80%8A%E7%94%B5%E5%8A%9B%E7%9B%91%E6%8E%A7%E7%B3%BB%E7%BB%9F%E5%AE%89%E5%85%A8%E9%98%B2%E6%8A%A4%E8%A7%84%E5%AE%9A%E3%80%8B&zhida_source=entity)The National Development and Reform Commission Order No. 27 of 2024 specifies that business data exchanged with power dispatch agencies should be included in the power dispatch authentication mechanism to ensure the integrity and authenticity of data transmission. The communication between the secure access area communication proxy module and distributed terminals should adopt encrypted authentication measures. When the business module transmits important data such as control instructions between the secure access area and the terminal, it should perform End-to-End identity authentication with the terminal.
Layer passwordProtocol（[TLCP](https://zhida.zhihu.com/search?content_id=268593549&content_type=Article&match_order=1&q=TLCP&zhida_source=entity)）》Using domestic commercial cryptographic algorithms (SM2, SM3, SM4, etc.), encryption, decryption, and identity authentication of key data are achieved, and joint debugging is carried out with the new encryption authentication Gateway of the scheduling master station.
**（3） Support 104 protocol communication**
**1. What is it?**
The inverter acquisition control rod should adopt 104 protocol 6 as the standard for communication with the power grid dispatch system Protocol.
**Why?**
The 104 protocol defines a complete frame structure for telemetry, remote signaling, remote adjustment, remote control, etc., which can achieve standardized interaction and solve the problem of inconsistent manufacturers and difficult integration with dispatch systems in the past, adapting to power grid dispatch scenarios.
**3. What should I do?**
Protocol Development: Evaluate the performance of existing main control, storage, and other chips, and upgrade them as needed to meet the requirements of 104 protocol second level acquisition and control business. The inverter acquisition control rod integrates 104 protocol transmission Protocol. As a TCP client of the 104 protocol, it should be able to actively establish a TCP connection with the destination address and port of the main station Gateway, maintain the connection status, and have mechanisms such as timeout disconnection and reconnection.
Data point table mapping: correctly map the operating parameters, status information, and adjustment control measurement points of the collected control rods and inverters to the standard information body of the 104 protocol, and refer to Appendix 2 for measurement point configuration.
![图片](https://picx.zhimg.com/v2-0e6cfb54b1a2c28c65cf93e57d87310e_1440w.jpg)
[6] 104 protocol: refers to compliance with industry standards《[DL/T 634.5104-2009](https://zhida.zhihu.com/search?content_id=268593549&content_type=Article&match_order=1&q=DL%2FT+634.5104-2009&zhida_source=entity) Remote control equipment and systems Part 5-104- Transmission protocol adopts the transmission protocol of IEC 60870-5-101 Network Access for standard transmission Protocol set.
**Data acquisition IoT card opening process**
**PV Data Acquisition IoT Control Rod Measurement Point Configuration Template**
1. Telemetry data point table
| serial number | description | unit |
| --- | --- | --- |
| 1 | Inverter A-phase voltage | V |
| 2 | Inverter B-phase voltage | V |
| 3 | Inverter C-phase voltage | V |
| 4 | Inverter A-phase current | A |
| 5 | Inverter B-phase current | A |
| 6 | Inverter C-phase current | A |
| 7 | Inverter three-phase total active power | kW |
| 8 | Inverter three-phase total reactive power | kVar |
| 9 | Daily electricity generation@[http://DAQ-IOT.com](https://link.zhihu.com/?target=http%3A//DAQ-IOT.com) | kWh |
| 10 | Total power generation | kWh |
| 11 | grid frequency | hz |
| 12 | power factor | % |
| 13 | Return value of active power control value | kW |
| 14 | Reactive power control value return value | kVar |
| 15 | Return value of active power percentage | kW |
| 16 | Reactive power percentage return value | kVar |
| 17 | installed capacity | kW |
| 18 | Adjustable upper limit of active power (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) | kW |
| 19 | Adjustable lower limit of active power (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) | kW |
| 20 | Theoretical power generation (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) | kW |
| 21 | Available power generation (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) | kW |
**2. Remote signaling data point table**
| serial number | description | type |
| --- | --- | --- |
| 1 | Terminal (collection stick) alarm | Single point remote signaling |
| 2 | Terminal (collection stick) malfunction | Single point remote signaling |
| 3 | Remote control of soft pressure plate status | Single point remote signaling |
| 4 | Inverter on/off status | Single point remote signaling |
| 5 | Inverter communication status | Single point remote signaling |
| 6 | Inverter fault status | Single point remote signaling |
| 7 | Increased output locking (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) | Single point remote signaling |
| 8 | Reduced output locking (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) | Single point remote signaling |
**3. Remote adjustment data point table for data acquisition IoT**
| serial number | signal name | control type | unit | Remark |
| --- | --- | --- | --- | --- |
| 1 | control mode | remote adjustment |  | 0 does not enable 1 numerical control 2 proportional control |
| 2 | Active power control value | remote adjustment | kW | Range 0-2000.0 |
| 3 | Reactive power control value | remote adjustment | kVar | Range 0-2000.0 |
| 4 | Percentage of active power | remote adjustment | % | Range 0-100.0 |
| 5 | Reactive power percentage | remote adjustment | % | Range 0-100.0 |
| 6 | Voltage variation dead zone value (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) | parameter | V | Range 0.10~100.00, default 1 |
| 7 | Dead zone value of current variation (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) | parameter | A | Range 0.10-100.00, default 0.1 |
| 8 | Dead zone value of active and reactive power changes (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) | parameter | kW/kVar | Range 0.001 to 100.00, default 0.1 |
| 9 | Frequency variation dead zone value (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) | parameter | Hz | Range 0.001 to 1.000, default 0.01 |
| 10 | Dead zone value of power factor variation (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) | parameter | / | Range 0.001 to 1.000, default 0.05 |
| 11 | Dead zone value of power generation variation (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) | parameter | kWh | Range 0.01 to 1000.0, default 1.0 |
| 12 | Rated active power (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) | parameter | kW |  |
| 13 | Scheduling instruction maintenance time (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) | parameter | second | Range 1 to 86400, default 3600 |
| 14 | Active numerical control deviation threshold (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) | parameter | % | Default 50 |
| 15 | Active power ratio control adjustment deviation threshold (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) | parameter | % | Default 50 |
| 16 | Reactive power numerical control adjustment deviation threshold (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) | parameter | % | Default 50 |
| 17 | Reactive power proportional control adjustment deviation threshold (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) | parameter | % | Default 50 |
4. Remote control data point table for data acquisition IoT
| serial number | description |
| --- | --- |
| 1 | Remote control soft pressure plate (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) |
| 2 | Inverter startup/shutdown control (data acquisition IoT)[http://daq-iot.com](https://link.zhihu.com/?target=http%3A//daq-iot.com)Expert in Industry (Data Acquisition) |