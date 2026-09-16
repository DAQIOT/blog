<https://zhuanlan.zhihu.com/p/1929237153822535726>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/2l3fc1xi3nd9fyio0lfe.jpg)
2.2 Basic format of Protocol
Protocol Frame Structure Table 1
serial number
[byte count](https://zhida.zhihu.com/search?content_id=260486595&content_type=Article&match_order=1&q=%E5%AD%97%E8%8A%82%E6%95%B0&zhida_source=entity)
format
2
SOI
ADDR
ORDER
KIND
LENGTH
LENGTH
INFO
CHECKSUM
o
C
EOT
Table 2 Frame Structure Format Description
serial number
symbol
SOI
ADDR
ORDER
KIND
LENGTH
INFO
CHECKSUM
EOI
Expressing meaning
Start of Frame
From machine（[Module Power Supply](https://zhida.zhihu.com/search?content_id=260486595&content_type=Article&match_order=1&q=%E6%A8%A1%E5%9D%97%E7%94%B5%E6%BA%90&zhida_source=entity)）Address
Control identification of command information (communication behavior classification) or response code
Information identification (communication content classification)
The INF0 byte length includes (LENID and LCHKSUM)
Command information: Control data information COMMANDINFO Response information: Response data information DATA INFO
[Verification code](https://zhida.zhihu.com/search?content_id=260486595&content_type=Article&match_order=1&q=%E6%A0%A1%E9%AA%8C%E7%A0%81&zhida_source=entity)
End code, create new channel[¶](https://link.zhihu.com/?target=https%3A//dingiiot.com/help-doc/drive_page/%25E9%259B%25B7%25E4%25B9%2590%25E9%2580%2586%25E5%258F%2598%25E5%2599%25A8/%23_7)
Create a new one**Collection channel**， Protocol Select**Leile inverter**In the main parameters, the serial port name should be selected according to the actual wiring situation of Gateway, and the corresponding COM port should be chosen. Other parameters can be left default unless there are special requirements; Create a new one**data collection device**, Customize**Device name**Fill in parameters and device communication address**ADDR [Slave (Module Power Supply) Address]**Keep other parameters as default
2.2 Basic format of Protocol
∽ Human Barrier Rejects Horizontal Essence 1[Protocol frame](https://zhida.zhihu.com/search?content_id=260486595&content_type=Article&match_order=2&q=%E5%8D%8F%E8%AE%AE%E5%B8%A7&zhida_source=entity)structure
serial number
byte count
format
2
SOI
ADDR
ORDER
6
LENGTH
INFO
KINDLENGTH
CHECKSUM
8
EO I
Table 2 Frame Structure Format Description
serial number
symbol
SOI
ADDR
ORDER
Greedy cuisine, flattery, and indulgence
LENGTH
INFO
CHECKSUM
EOI
Expressing meaning
Start of Frame
Slave (module power supply) address
Control identification of command information (communication behavior classification) or response code information identification of response (communication content classification)
The INF0 byte length includes (LENID and LCHKSUM)
Command information: Control data information COMMANDINFO Response information: Response data information DATA INFO
Verification code
End code