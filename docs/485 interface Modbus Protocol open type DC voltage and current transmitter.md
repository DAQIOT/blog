<https://zhuanlan.zhihu.com/p/1908201563048089016>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
# 1.**Product Overview**
[DAQ-GP-DCHS485](https://zhida.zhihu.com/search?content_id=257973751&content_type=Article&match_order=1&q=DAQ-GP-DCHS485&zhida_source=entity)The transmission acquisition device is an industrial grade compact, portable, fast, stable, and high-precision DC intelligent power transmitter launched byShanghai DAQ-IoTTechnology Co., Ltd.
Application areas: Widely used in power, communication, transportation, environmental protection, petrochemicals, steel and other fields to monitor the consumption of current or voltage in AC/DC equipment. Standard [RS-485](https://zhida.zhihu.com/search?content_id=257973751&content_type=Article&match_order=1&q=RS-485&zhida_source=entity) Digital interface output, implemented with computers PLC、[Industry Gateway](https://zhida.zhihu.com/search?content_id=257973751&content_type=Article&match_order=1&q=%E5%B7%A5%E4%B8%9A%E7%BD%91%E5%85%B3&zhida_source=entity)Interconnection of upper computers such as touch screens.
# 2 **Ordering specifications and selection**
Support special customization of three parameters: input range, output type, and working power supply
# 3 **Service Philosophy**
**Our company solemnly promises:**
You are not only purchasing products, but also providing meticulous and thoughtful technical support services**！！！(** =^\_^= **)**
This product only requires ordinary workers to connect and install it on site! No debugging required!
We provide free remote guidance, remote configuration and debugging services, and send data to the user's designated cloud platform.
As an expert in industrial Data Acquisition, Shucai IoT provides free IoT solution consulting services!
# 4 **Product characteristic parameters**
## 4.1 **Communication characteristics**
Serial communication adopts RS485 address default 1, baud rate 9600, 8, 1, no checksum
## 4.2 **Terminal Definition**
Facing the 4P terminal: GND, 485B, 485A,+12V (+E)
Terminal schematic diagram:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/vd5lziy09j3eyimntpzs.jpg)
## 4.3 **characteristic features**
Adopting new electromagnetic isolation technology,[Optoelectronic isolation technology](https://zhida.zhihu.com/search?content_id=257973751&content_type=Article&match_order=1&q=%E5%85%89%E7%94%B5%E9%9A%94%E7%A6%BB%E6%8A%80%E6%9C%AF&zhida_source=entity)Low power consumption
Industrial grade imported chip professional algorithm with high accuracy
Equipped with automatic thermal switch and ESD protection function
## 4.4 **Electrical Characteristics**
Working power supply: DC12-DC24V, DC
Power consumption: less than 5W
## 4.5 **work environment**
Working temperature: -20 ° C~80 ° C
## 4.6 **Installation Method**
Standard rail installation, flat screw fixation, detachable split structure, PCB soldering installation, etc
# 5 **Core advantages of the product**
u **Easy installation, quick deployment, helping the IoT project to land quickly**
u **Support external multiple channels Sensor**
u **Non invasive collection that does not affect the normal operation of the equipment**
# 6 **Register Description**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/kmefqbkn3fde8yjg36gy.jpg)
Explanation: 1. When the transmitter input is dual channel, take the first and second channels of electricity. 2. For the transmitter input is a combination of current and voltage, the first channel is voltage data and the second channel is current data. For transmitters with multiple inputs such as two or three channels, if it is necessary to read the power of a certain channel separately, only the corresponding register of that channel needs to be read separately, and the number of registers should be set to one. For example, now we only need to read the third circuit of electricity, and we don't want to read the first and second circuits. Send the following command: 01H 03H 00H 12H 00H 01H
## 6.1 **Example of command for reading data from a single input transmitter**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/x1qbggjhyrodp6g4ha95.jpg)
## 6.2 **Dual input transmitter**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/enr2wq1ru71gh0s4lm2h.jpg)
## 6.3 **Three input transmitter**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ihco6sjztnm6hpml5dwm.jpg)
## 6.4 **Change address**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/685t8dm4s27qngqtkq5i.jpg)
## 6.5 **Modify baud rate**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/qzmdfsqiw7uwx56ws9sx.jpg)
## 6.6 **Baud rate encoding**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/4q4v7gudkd3dygpof388.jpg)
# 7 **Application Cases**
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/jpnqv0ft6zu1u4i47xsc.jpg)![图片](https://picx.zhimg.com/v2-c89e60f1b02edabe9fa3da2f7b91c917_1440w.jpg)![图片](https://picx.zhimg.com/v2-7358c451080ebd0b72a1e528885c1e31_1440w.jpg)