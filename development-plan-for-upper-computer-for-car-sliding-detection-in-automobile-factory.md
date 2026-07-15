<https://zhuanlan.zhihu.com/p/1949073675874730224>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
1. [RFID Reader](https://zhida.zhihu.com/search?content_id=262881802&content_type=Article&match_order=1&q=RFID%E8%AF%BB%E5%86%99%E5%99%A8&zhida_source=entity)(Received through Lora)
Read tags:
52 46 02 00 00 80 00 13 50 11 01 0C E2 80 68 94 20 00 40 31 AF 16 C9 AD 05 01 26 0F
The yellow part is the label data (there are a total of 14 label data, arranged from top to bottom corresponding to labels 1 to 14, which correspond to 14 cars respectively)
|  |  |
| --- | --- |
| E280689420004031AF16E1B3 |  |
| E280689420005031AF16CA03 |  |
| E280689420004031AF16C9A8 |  |
| E280689420004031AF16C9C4 |  |
| E280689420005031AF16C96F |  |
| E280689420004031AF16C9EC |  |
| E280689420005031AF16C956 |  |
| E280689420004031AF16E1A7 |  |
| E280689420005031AF16CE54 |  |
| E280689420005031AF16C8DF |  |
| E280689420005031AF16C99A |  |
| E280689420004031AF16C9AD |  |
| E280689420005031AF16CA00 |  |
| E280689420005031AF16C942 |  |
|  |  |
|  |  |
2. Laser rangefinder (received through Lora module,[modbusProtocol](https://zhida.zhihu.com/search?content_id=262881802&content_type=Article&match_order=1&q=modbus%E5%8D%8F%E8%AE%AE&zhida_source=entity)Address 3-17)
Read distance (example: label 1 corresponds to laser ranging address 03, label 2 corresponds to address 04, and so on)
Issued: 01 03 02 01 00 01 D4 72
Received: 01 03 02 01 F0 B9 90
The integer reading is 496 (0x01F0) in millimeters.
Read instructions for addresses 03 to 17:
03 03 02 01 00 01 35 B1 Read register 513 at address 03
04 04 03 02 00 01 85 B1 reads register 513 of address 04
05 05 03 02 01 00 01 D4 72 Read register 513 at address 05
06 06 03 02 01 00 01 24 73 Read register 513 at address 06
07 07 03 02 01 00 01 75 B3 reads register 513 at address 07
08 08 03 02 00 01 C5 B3 reads register 513 of address 08
09 09 03 02 01 00 01 14 70 Read register 513 at address 09
10 (0A) 0A 03 02 01 00 01 E4 73 Read register 513 at address 10
11 (0B) 0B 03 02 01 00 01 B5 B2 reads register 513 of address 11
12 (0C) 0C 03 02 01 00 01 45 B2 Read register 513 of address 12
13 (0D) 0D 03 02 01 00 01 14 71 Read register 513 at address 13
14 (0E) 0E 03 02 01 00 01 E4 72 Read register 513 of address 14
15 (0F) 0F 03 02 01 00 01 B5 B3 Read register 513 at address 15
16 (10) 10 03 02 01 00 01 05 B0 Read register 513 at address 16
17 (11) 11 03 02 01 00 01 54 71 Read register 513 at address 17
3. [relay](https://zhida.zhihu.com/search?content_id=262881802&content_type=Article&match_order=1&q=%E7%BB%A7%E7%94%B5%E5%99%A8&zhida_source=entity)(Wired 485 direct connection to computer, modbus Protocol address 2, function: control the start and stop of the production line)
Read relay status: (optional, check if it is necessary to check the relay status before issuing control)
Example sent: 02 02 00 00 02 F9 F8
Return: 02 02 01 00 A1 CC
Analysis: The fourth byte 00 is off and 01 is on
Control on/off:
Control interruption: 02 05 00 00 FF 00 8C 09 □
Return: 02 05 00 FF 00 8C 09
Control Pass: 02 05 00 00 00 CD F9 □
Return: 02 05 00 00 00 CD F9
Byte 3, 4: Register Address
Byte 5, 6, FF 00 is off, 00 00 00 is on
4. [alarm light](https://zhida.zhihu.com/search?content_id=262881802&content_type=Article&match_order=1&q=%E6%8A%A5%E8%AD%A6%E7%81%AF&zhida_source=entity)(Wired 485 direct connection to computer, modbus Protocol address is 1)
Trigger alarm: turn on the red light and turn on the buzzer
01 05 00 FF 00 8C 3A is in the open red state;
01 05 00 00 00 CD CA is in the closed red state;
Buzzer on: 01 05 00 18 FF 00 0C 3D;
Buzzer off: 01 05 00 18 00 00 4D CD.
There are two readers/writers in this project, fixed at both ends of the production line. 14 label cards and 14 laser rangefinders+14 Lora modules are located on the 14 trolleys of the production line. When the trolley passes by the first reader/writer, it will actively send a label data to the reader/writer, marking the first time the trolley passes. At this time, distance measurement is carried out (assuming the label data is number 1, then issue the 03 address command to read the laser rangefinder value). Based on the distance X0 measured by the reader for the first time, if the relative distance (Xn-X0) is ≤ 30mm or (Xn-X0)**≥**The 30mm trigger alarm light triggers an alarm and controls the production line to stop running (controlling the relay to disconnect). When the same label is recognized passing through the second reader/writer, this process is completed. If an alarm occurs during operation, the on-site personnel must eliminate the risk and manually restore it on the upper computer (control the relay to turn on). After restoration, the above process can continue.
The upper computer software must display distance information, relay status, control relay on/off buttons, and alarm reasons (such as the alarm information generated by the number of cars)