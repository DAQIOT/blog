<https://zhuanlan.zhihu.com/p/1946984201447543079>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
## As a professional provider of IoT, Data Acquisition, and solution, Daq iot, the editor of IoT, would like to introduce the following content and sincerely welcome everyone to discuss and exchange ideas.
## As a professional provider of IoT data collection solutions, daq-iot, the data acquisition and IoT editor, will introduce the following content here and sincerely welcome everyone to discuss and communicate.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/7pxr0b9revm504915h2l.jpg)
## ③**Pod control board[Pod image board](https://zhida.zhihu.com/search?content_id=262656771&content_type=Article&match_order=1&q=%E5%90%8A%E8%88%B1%E5%9B%BE%E5%83%8F%E6%9D%BF&zhida_source=entity)(Network Conversion)**
Send to the pod[Array camera system](https://zhida.zhihu.com/search?content_id=262656771&content_type=Article&match_order=1&q=%E9%98%B5%E5%88%97%E7%9B%B8%E6%9C%BA%E7%B3%BB%E7%BB%9F&zhida_source=entity)Internal information, including parameters required for positioning calculation and recognition calculation.
[RS422 level](https://zhida.zhihu.com/search?content_id=262656771&content_type=Article&match_order=1&q=RS422%E7%94%B5%E5%B9%B3&zhida_source=entity)Small end mode, 165 bytes, transmission frequency of 40ms, baud rate of 115200, one start bit, one stop bit, eight data bits, no checksum.
Table 5: Pod Control Board Sending Protocol
|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| serial number | content | data type | byte count | scope | Remark |
| 1 | Frame Header 1 | Int8 | 1 | 0x07 |  |
| 2 | Frame header 2 | Int8 | 1 | 0x1C |  |
| 3 | year | USHORT | 2 | year | Carrier data |
| 4 | moon | UCHAR | 1 | moon | Carrier data |
| 5 | day | UCHAR | 1 | day | Carrier data |
| 6 | time | UINT32 | 4 | ms | Carrier data |
| 7 | [Beidou latitude](https://zhida.zhihu.com/search?content_id=262656771&content_type=Article&match_order=1&q=%E5%8C%97%E6%96%97%E7%BA%AC%E5%BA%A6&zhida_source=entity) | INT32 | 4 | -180 ° to 180 °, with East longitude being positive and a resolution of 0.001 ″ | Carrier data |
| 8 | [Beidou Longitude](https://zhida.zhihu.com/search?content_id=262656771&content_type=Article&match_order=1&q=%E5%8C%97%E6%96%97%E7%BB%8F%E5%BA%A6&zhida_source=entity) | INT32 | 4 | -90 ° to 90 °, with a positive north latitude and a resolution of 0.001 ″ | Carrier data |
| 9 | [Beidou altitude](https://zhida.zhihu.com/search?content_id=262656771&content_type=Article&match_order=1&q=%E5%8C%97%E6%96%97%E6%B5%B7%E6%8B%94%E9%AB%98%E5%BA%A6&zhida_source=entity) | UINT16 | 2 | -1000～10000m， Resolution 0.2m | Carrier data |
| 10 | Beidou eastward velocity | INT16 | 2 | -200m/s～+200m/s，LSB=200/215m/s | Carrier data |
| 11 | Northward velocity of Beidou | INT16 | 2 | -200m/s～+200m/s，LSB=200/215m/s | Carrier data |
| 12 | Beidou celestial velocity | INT16 | 2 | -200m/s～+200m/s，LSB=200/215m/s | Carrier data |
| 13 | Beidou ground speed direction | UINT16 | 2 | 0~359.99 °, positive northeast, resolution 0.01 ° | Carrier data |
| 14 | Beidou ground speed | UINT16 | 2 | 0～650m/s， Resolution 0.01m/s |  |
| 15 | heading angle | UINT16 | 2 | 0-359.99 °, resolution 0.01 º | The heading angle of the aircraft is 90 degrees due east |
| 16 | pitch angle | INT16 | 2 | -89.99 °~+89.99 °, resolution 0.01 º | Head up straight |
| 17 | roll angle | INT16 | 2 | -179.99 º~179.99 º, resolution 0.01 º | Roll right for positive |
| 18 | airspeed | UINT16 | 2 | 0～255km/h，1km/h |  |
| 19 | Heading angular velocity | INT16 | 2 | - |  |
| 20 | pitch rate | INT16 | 2 | -300-300 º/s, head up positive, resolution 300/215 º/s |  |
| 21 | roll angular velocity | INT16 | 2 | -300-300 º/s, right roll is positive, resolution 300/215 º/s |  |
| 22 | X-direction acceleration | INT16 | 2 | -294m2/s～+294m2/s，LSB=294/215m2/s(0.0009g)， Forward is positive |  |
| 23 | Y-direction acceleration | INT16 | 2 | -294m2/s～+294m2/s，LSB=294/215m2/s(0.0009g)， To the right is positive |  |
| 24 | Z-direction acceleration | INT16 | 2 | -294m2/s～+294m2/s，LSB=294/215m2/s(0.0009g)， Down is positive |  |
| 25 | [Valid flag for inertial navigation data](https://zhida.zhihu.com/search?content_id=262656771&content_type=Article&match_order=1&q=%E6%83%AF%E5%AF%BC%E6%95%B0%E6%8D%AE%E6%9C%89%E6%95%88%E6%A0%87%E5%BF%97&zhida_source=entity) | CHAR | 1 | 0x11， The combined state navigation data is valid; 0x22， The pure inertial navigation data is valid; 0x33， The navigation data is invalid. 0x44， Align data |  |
| 26 | Beidou data valid flag | CHAR | 1 | 0x00 invalid positioning data 0x01 valid positioning data |  |
| 27 | Ideal route angle | UINT16 | 2 | 0-359.99 °, resolution 0.01 º |  |
| 28 | Link bandwidth | UINT8 | 1 | 0x01 1.92Mbps0x02 3.84Mbps0x03 7.68Mbps0x04 15.36Mbps |  |
| 29 | pressure altitude | UINT16 | 2 | -1000～10000m， Resolution 0.2m |  |
| 30 | [PDOP Beidou Navigation Factor](https://zhida.zhihu.com/search?content_id=262656771&content_type=Article&match_order=1&q=PDOP%E5%8C%97%E6%96%97%E5%AF%BC%E8%88%AA%E5%9B%A0%E5%AD%90&zhida_source=entity) | CHAR | 1 | 1~100 |  |
| 31 | azimuth | INT16 | 2 | [Gyro stabilized platform](https://zhida.zhihu.com/search?content_id=262656771&content_type=Article&match_order=1&q=%E9%99%80%E8%9E%BA%E7%A8%B3%E5%AE%9A%E5%B9%B3%E5%8F%B0&zhida_source=entity)The azimuth angle, ranging from 0 to 36000, represents 0.00 ° to 360.00 ° (with a resolution of 0.01 °). | Pod data |
| 32 | pitch angle | INT16 | 2 | Gyroscope stabilized platform pitch angle, range -18000 to+18000, resolution 0.01 °, indicated by complement code. | Pod data |
| 33 | Laser ranging data | UINT32 | 4 | The distance value measured by the laser irradiator. 0x00 represents 0m with a resolution of 1m. In the absence of laser echo, the ranging output is 0xFFFF. | ② Measure out |
| 34 | Laser rangefinder status | UINT8 | 1 | 0x01 Distance measurement (fill in distance measurement time) 0x00 Other | ② Measure out |
| 35 | query command | UINT8 | 1 | 0x01 query 0x00 other |  |
| 36 | Directional gyroscope data | Float | 4 | Current azimuth gyroscope count °/s | Pod data |
| 37 | Pitch gyroscope data | Float | 4 | Current pitch gyroscope count °/s | Pod data |
| 38 | Attitude angle A | INT16 | 2 | Absolute azimuth attitude angle | Inertial group calculation data |
| 39 | Attitude angle P | INT16 | 2 | Absolute pitch attitude angle | Inertial group calculation data |
| 40 | Attitude angle R | INT16 | 2 | Absolute roll attitude angle | Inertial group calculation data |
| 41 | Image IP | Int16 | 1 | H11~h16H21~h26H31~h36H41~h46H40，h64 | Provided by the gyro stabilization platform computer board |
| 42 | Spare byte |  | 81 |  | backup |
| 43 | verify | Int8 | 1 | Sum up all the previous data and take the lower 8 bits |  |
④**Downward Protocol: Pod image board (network conversion)**à**Edge Computing board（[Horizon RDK Ultra](https://zhida.zhihu.com/search?content_id=262656771&content_type=Article&match_order=1&q=%E5%9C%B0%E5%B9%B3%E7%BA%BFRDK+Ultra&zhida_source=entity)）**
The frame stream of ③ received by the pod image board is converted into UDP and sent to the network as transparent data. The frame information of ③ is the data part of UDP. TheEdge Computingboard also needs to extract the required pod data by judging the frame header and verification information according to the format of ③ based on the received UDP data.
The pod image board (network conversion) adopts multicast mode.
IP: 192.168.0.95 Port: 8080