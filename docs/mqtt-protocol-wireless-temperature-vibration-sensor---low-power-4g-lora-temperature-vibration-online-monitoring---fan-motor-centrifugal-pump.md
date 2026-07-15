<https://zhuanlan.zhihu.com/p/2011115775436542106>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
As a professional provider of IoT, Data Acquisition, and solution, and an expert (professional account) in the industrial Data Acquisition field, daq iot, the technology editor of Shanghai DAQ-IoT website, would like to introduce the following content and sincerely welcome everyone to discuss and exchange ideas.
As a professional provider of IoT data acquisition solutions and an expert (specialist) in industrial data acquisition, the editor from Shanghai DAQ-IoT Technology Co., Ltd. (daq-iot) introduces the following content here and sincerely welcomes everyone to discuss and exchange ideas.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/otxjvw67vd0a59znyjyj.jpg)
DAQ-LP-VTLORA/4G wireless vibration velocity (acceleration) Sensor adopts a stainless steel shell design, mainly composed of batteries
The device is composed of a vibration acquisition unit, data processing and transmission module, etc. The vibration values of the equipment are collected and processed bySensorthrough MQTT 4G wifi [LoRa](https://zhida.zhihu.com/search?content_id=270779049&content_type=Article&match_order=1&q=LoRa&zhida_source=entity) Nothing
The line communication method is transmitted to the wireless receiving terminal for centralized monitoring, and each Sensor has a unique communication ID number.
Can be applied to many fields such as coal mining, chemical industry, metallurgy, power, building materials, automobiles, machinery manufacturing, etc. for motor equipment and reduction
Online measurement of vibration velocity, acceleration, and temperature of equipment such as high-speed fans, generators, air compressors, centrifuges, and water pumps.
**2**
**service philosophy**
**Our company solemnly promises:**
You are not only purchasing products, but also providing meticulous and thoughtful technical support services**！！！(** =^\_^= **)**
This product only requires ordinary workers to connect and install it on site! No debugging required!Shanghai DAQ-IoTNetwork Technology Co., Ltd
We provide free remote guidance, remote configuration and debugging services, and send data to the user's designated cloud platform.
Free consultation service forIoTsolution!
**Product Features**
**3.1 [RS485](https://zhida.zhihu.com/search?content_id=270779049&content_type=Article&match_order=1&q=RS485&zhida_source=entity) Vibration Sensor Characteristics**
dedicated [MEMS chip](https://zhida.zhihu.com/search?content_id=270779049&content_type=Article&match_order=1&q=mems+%E8%8A%AF%E7%89%87&zhida_source=entity)Technology, precise integration calculation;
Stable power supply, no need for frequent maintenance of the power supply, long working life;
High data transmission efficiency, low latency, and strong anti-interference ability.
Using RS485 communication,[Modbus Communication Protocol](https://zhida.zhihu.com/search?content_id=270779049&content_type=Article&match_order=1&q=modbus+%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE&zhida_source=entity)
**3.2 RS485 Vibration Sensor Structural Characteristics**
Power supply mode: DC12-24V external power supply
Standby current: ≤ 5mA
Detection cycle: 800ms
Measurement range: Acceleration: 0-10g; Speed: 0-60mm/s; Amplitude: 0-50000um; Frequency (RMS):
0～2000Hz
Environmental temperature: -40~85 ℃ (relative humidity: ≤ 90%)
Protection level: IP67
Measurement method: vertical or horizontal
Installation method: Magnetic suction or screw hole M10 × 1.5 × 10 (deep)
**3.3 LoRa Wireless Vibration Sensor Characteristics**
Specialized MEMS chip technology, precise integration calculation;
9000mAh lithium-ion battery, replaceable, with an ultra long working life;
433M free frequency band, external antenna, ultra long transmission distance.
**3.4 LoRa Wireless Vibration Sensor Structural Characteristics**
Power supply method: Lithium ion battery 9000mAh (default, optional 19000mAh or DC12-24V external power supply) Shanghai DAQ-IoT
6
Standby current: ≤ 3uA
Detection cycle: default 30s, 1-60s can be set
Measurement range: 50mm/s (effective value)
Sensitivity: 0.05mm/s ± 5% (tested at 80Hz at a temperature of 20 ℃)
Environmental temperature: -40~85 ℃ (relative humidity: ≤ 90%)
Protection level: IP67
Measurement method: vertical or horizontal
Installation method: Magnetic suction or screw hole M10 × 1.5 × 10 (deep)
Transmission distance: ≥ 300 meters (external suction cup antenna can reach over 500 meters, depending on the site)
Transmission method: Wireless communication LoRa 433MHz
**4**
**Communication routine**
**4.1 Register Address**
Modbus Protocol 03 Function Code
register address
PLC or configuration address
content
operation
byte length
00 01
40001
Peak acceleration of X
read-only
2
00 02
40002
Peak acceleration of Y
read-only
2
00 03
40003
Z-acceleration peak value
read-only
2
00 04
40004
Effective value of X speed
read-only
2
00 05
40005
Effective value of Y speed
read-only
2
00 06
40006
Effective value of Z-speed
read-only
2
00 07
40007
temperature
read-only
2
00 08
40008
Z-axis equivalent frequency Hz
read-only
2
00 09
40009
X displacement
read-only
2
00 0A
40010
Y displacement
read-only
Shanghai DAQ-IoTTechnology Co., Ltd
7
00 0B
40011
Z displacement
read-only
2
**4.2 Baud rate register (0x0D) value description:**
register address
register value
Attribute (baud rate)
0x0D
00 06
600
00 0C
1200
00 18
2400
00 30
4800
00 60
9600
00 C0
19200
Explanation: Set the value to real baud rate ÷ 100.
**4.3 Protocol Customization**
If you need to customize other communication Protocol, you can contact the professional staff of Data Acquisition in the industry to communicate