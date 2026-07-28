<https://zhuanlan.zhihu.com/p/1944732965188907195>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/fmkuk5nfnr71t5oeh5if.jpg)
**Low voltage distributed PV direct procurement and control terminal** **Low-voltage photovoltaic direct acquisition and direct control terminal**
Having the right[Low voltage distributed PV inverter](https://zhida.zhihu.com/search?content_id=262401795&content_type=Article&match_order=1&q=%E4%BD%8E%E5%8E%8B%E5%88%86%E5%B8%83%E5%BC%8F%E5%85%89%E4%BC%8F%E9%80%86%E5%8F%98%E5%99%A8&zhida_source=entity)Information collection, data processing, and control functions, supporting and[Dispatch main station](https://zhida.zhihu.com/search?content_id=262401795&content_type=Article&match_order=1&q=%E8%B0%83%E5%BA%A6%E4%B8%BB%E7%AB%99&zhida_source=entity)Data exchange enables the scheduling master station to collect and control low-voltage distributed PV in seconds.
**Low voltage distributed dedicated encryption authentication Gateway** **Low-Voltage Distributed PV Dedicated Encryption and Authentication Gateway**
To meet the centralized access requirements of massive distributed power generation terminals, authentication, encryption, access control and other technical measures are adopted to achieve secure data transmission and vertical boundary security protection of the secondary system of power distributed power generation.
a) Adopting a modular structure and natural heat dissipation method, core components such as MCU or SOC chips, power modules, etc. use low-power, wide temperature industrial grade devices;
b) Adopting nationally produced electronic components;
c) Support the collection, processing, and transmission of business data for scheduling and operation control;
d) Support direct collection of PV inverter Real-time data and upload it to the dispatch master station, with communication following DL/T 634.5 104 standard;
e) Equipped with self diagnostic functions for both hardware and software, ensuring no erroneous data transmission during power on, power off, restart, and other states;
f) It has the function of not losing stored information in case of power failure, and the device's event records, operation logs, and version information files should not be lost in the event of power loss.
The terminal is usually installed in the distribution box near thePVinverter
a) The AC power supply voltage is 220V, with an allowable deviation of -20% to+15%.
b) The frequency of the AC power supply is 50Hz, with an allowable deviation of+5%.
After the interruption of the AC power supply, the following measures should be taken[supercapacitor](https://zhida.zhihu.com/search?content_id=262401795&content_type=Article&match_order=1&q=%E8%B6%85%E7%BA%A7%E7%94%B5%E5%AE%B9&zhida_source=entity)Keep the terminal running normally for no less than 1 minute
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 1 | Run | Green | If the terminal passes the power on self-test, it will be constantly on. When the device cannot work or some functions are missing due to Hardware or software abnormalities, it is in a normally off state. | bright |
| 2 | alert | red | When the terminal encounters abnormalities due to Hardware, software, or configuration, it will remain lit. The alarm light does not turn on during device maintenance and timing abnormalities. | extinguish |
| 3 | upstream | Red green dual color | The red light flashes when receiving data, and the green light flashes when sending data. | extinguish |
| 4 | down | Red green dual color | The red light flashes when receiving data, and the green light flashes when sending data. | extinguish |
a) At least two independent RS-485 interfaces should be provided, namely the inverter communication RS-485 interface and the terminal maintenance RS-485 interface. The baud rate of the RS-485 interface for inverter communication can be set, with a maximum support of 115200bps and a default of 9600bps. The verification method can be set, preferably with no verification, 8 data bits, and 1 stop bit. The communication baud rate of the RS-485 interface for terminal maintenance should be 115200bps, and the verification method should be even verification, with 8 data bits and 1 stop bit.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/09gisi8ol3njfimbsp94.jpg)
b) Should have 4G communication module interface;
c) It is advisable to have an encrypted Bluetooth interface.
a) Data Acquisition function;
b) Event recording and storage function;
c) Communication function;
d) Regulatory function;
e) O&M function;
f) Time synchronization function;
g) Security function.
7.2 Data Acquisition
The terminal Data Acquisition meets the following requirements:
a) The terminal should be able to collect operational data such as three-phase voltage, three-phase current, and total active power of the PV inverter, as detailed in Appendix B.1.
b) The terminal should be able to read the rated active power, rated reactive power, and other data of the inverter.
7.3 Event recording and storage function
The terminal event record meets the following requirements:
a) Terminal active power control and reactive power control events should be recorded;
b) PV inverter and terminal communication abnormal events should be recorded;
c) The upgrade time of the terminal program and the version information before and after the upgrade should be recorded;
d) Parameter change events should be recorded, including telemetry dead zones, communication addresses, etc;
e) Recording and storing information should have a circular recording function;
f) Recording and storing information should provide time records, including year, month, day, hour, minute, and second information;
g) The number of records stored for each type should not be less than 64.
7.4 Communication Function
7.4.1 Communication with the dispatch master station
Communication with the dispatch master station meets the following requirements:
a) The scheduling master station can obtain data collected by terminals and issue control instructions to terminals.
b) When the terminal malfunctions and the running light goes out, the control function should be locked.
c) The terminal should actively report telemetry and remote signaling information, and should exchange archive and version information with the dispatch master station through file transmission.
7.4.2 Communication with PV inverter
Communication with PV inverter meets the following requirements:
a) The terminal should exchange data with the PV inverter through RS-485 communication, and the exchanged data content should meet Appendix B.1.
7.4.3 Communication Protocol
The terminal communication Protocol meets the following requirements:
a) The terminal and scheduling master station should adopt[DL/T 634.5 104Protocol](https://zhida.zhihu.com/search?content_id=262401795&content_type=Article&match_order=1&q=DL%2FT+634.5+104%E5%8D%8F%E8%AE%AE&zhida_source=entity)The terminal adopts a client mode.
a) The terminal and inverter should adopt[ModbusProtocol](https://zhida.zhihu.com/search?content_id=262401795&content_type=Article&match_order=1&q=Modbus%E5%8D%8F%E8%AE%AE&zhida_source=entity)。
7.5 Regulatory Function
7.5.1 Control methods
The terminal should support receiving control instructions issued by the scheduling master station, and the control method should meet the following requirements:
a) The terminal control method should support numerical control. The dispatch master station issues numerical control instructions for the output power (active power, reactive power) of distributed power sources, and the terminal receives them and issues control commands to the PV inverter according to the values for regulation.
b) The terminal control method should support proportional control. The dispatch master station issues percentage control instructions for the rated power (active power, reactive power) of the distributed power source. After receiving them, the terminal issues control commands to the PV inverter according to the rated power percentage for regulation.
7.5.2 Error prevention requirements
The terminal anti error function meets the following requirements:
a) The terminal should have the function of adjusting the upper and lower limit verification. The terminal should determine whether the control instruction exceeds the set upper and lower limit range after receiving the control instruction from the dispatch master station, and refuse to execute if it exceeds the limit.
b) The terminal should have a non-zero verification function for adjusting the target. After receiving the control instruction from the scheduling master station, the terminal should determine that the control instruction value is 0 and determine whether to execute it based on the configuration.
c) The terminal should have the function of adjusting deviation verification. After receiving the control instructions from the dispatch master station, the terminal should compare them with the current value of the low-voltage distributed PV. If the adjustment deviation exceeds the adjustment deviation threshold, it is determined that the master station has issued abnormal control instructions and refuses to execute them.
d) The terminal should have a command timeout recovery function. When the terminal exceeds the maintenance time and does not receive the next control instruction from the dispatch master station, the PV inverter should be automatically controlled to full load state, and the maintenance time can be read and configured.
7.6 O&M Function
TheO&Mfunction meets the following requirements:
a) The terminal should provide a local maintenance interface, support local maintenance through RS-485, and should have a Bluetooth interface that meets safety requirements.
e) The local maintenance function should have functions such as parameter setting, configuration file import and export, program upgrade, etc.
f) The program upgrade should support remote and local methods, and should have breakpoint resume function.
7.7 Time synchronization function
The timing function meets the following requirements:
a) The terminal should support receiving clock call and timing commands from the scheduling master station.
g) The terminal should support time synchronization through the maintenance port.
a) The terminal information model includes PV inverter information. The information includes public attributes such as identification, name, voltage, etc., static parameter attributes such as device number, rated power, set voltage, etc., control attributes such as on/off, constant value, power control, etc., and data attributes such as A-phase voltage, A-phase current, active power, etc.
a) Public attributes are used to describe the basic information overview of the PV inverter, the information provided in the information model sent by the data source terminal, and the information automatically triggered and generated based on the information provided by the terminal after association with the main station.
b) The static parameter class attribute defines the rated parameter information of the inverter PV, and the data source terminal sends the information model.
c) Control class attribute definition PV is the control attribute of the inverter, and the data source terminal sends the information model.
d) The data attribute definition PV is the dynamic measurement attribute of the inverter, and the data source terminal sends the measurement data to the main station.
e) The information model file of the inverter sent from the terminal to the main station PV should follow the definition in the GB/T 30149 General Model Description Specification for Power Grids[CIM/E model](https://zhida.zhihu.com/search?content_id=262401795&content_type=Article&match_order=1&q=CIM%2FE%E6%A8%A1%E5%9E%8B&zhida_source=entity)Format.