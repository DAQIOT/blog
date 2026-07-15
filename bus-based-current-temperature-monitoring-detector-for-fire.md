<https://zhuanlan.zhihu.com/p/1966527800543548702>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
as[IoTData Acquisition](https://zhida.zhihu.com/search?content_id=265673322&content_type=Article&match_order=1&q=%E7%89%A9%E8%81%94%E7%BD%91%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86&zhida_source=entity)solution professional provider, industrial Data Acquisition expert (professional account), and data acquisition IoT editor daq iot would like to introduce the following content here and sincerely welcome everyone to discuss and exchange ideas.
As a professional internet of things data acquisition solutions provider, industrial data acquisition experts (professional households), digital internet of things editor daq - iot here to do the following introduction, and sincerely welcome everyone to discuss and exchange.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/pulaw6qz41w1peazekdo.jpg)
1、 Electrical Fire Warning System for Low Voltage Distribution Room in Teaching Building
1 [mutual inductor](https://zhida.zhihu.com/search?content_id=265673322&content_type=Article&match_order=1&q=%E4%BA%92%E6%84%9F%E5%99%A8&zhida_source=entity) 1. Name: Current Transformer
2. Specification: 1200A“
2 Transformers "1. Name: Current Transformer
2. Specification: 400A“
3 Transformers "1. Name: Current Transformer
2. Specification: 100A“
4 Sensor "1. Name:[Temperature Sensor](https://zhida.zhihu.com/search?content_id=265673322&content_type=Article&match_order=1&q=%E6%B8%A9%E5%BA%A6%E4%BC%A0%E6%84%9F%E5%99%A8&zhida_source=entity)
2. Specification: Cable type“
5 [Current monitoring detector](https://zhida.zhihu.com/search?content_id=265673322&content_type=Article&match_order=1&q=%E7%94%B5%E6%B5%81%E7%9B%91%E6%8E%A7%E6%8E%A2%E6%B5%8B%E5%99%A8&zhida_source=entity) 1. Name: Current Monitoring Detector
2. Wire system: Bus system“
6 Temperature Measuring Electrical Fire Monitoring Detector "1. Name: Combination Electrical Fire Monitoring Detector
2. Wire system: Bus system“
7 [Electrical fire monitoring equipment](https://zhida.zhihu.com/search?content_id=265673322&content_type=Article&match_order=1&q=%E7%94%B5%E6%B0%94%E7%81%AB%E7%81%BE%E7%9B%91%E6%8E%A7%E8%AE%BE%E5%A4%87&zhida_source=entity) 1. Bus system: intelligent type
2. Installation method: Wall mounted
3. Number of control points: within 64 points“
## **Overview**
DAQ-GP-CT485 open current transformer is a type of current transformer launched byShanghai DAQ-IoTTechnology Co., Ltd., which can convert AC analog signals into 485 digital signals. The product is equipped with a 32-bit ARM series MCU and high-precision measurement chip, and a multi-point calibrated current conversion module. It has the characteristics of high accuracy and fast response.[SC-GP-CT485](https://zhida.zhihu.com/search?content_id=265673322&content_type=Article&match_order=1&q=SC-GP-CT485&zhida_source=entity)It can directly exchange data with commonly usedData Acquisition, DTU, programmable logic controller (PLC), and upper computer in the market.
This product is widely used in AC motors, lighting equipment, air compressors, heating, ventilation, and air conditioning systems, building self-control systems, equipment OEE start-up ratesIndustrial Internet， Current monitoring and collection scenarios for rural power grid renovation projects and other scenarios.
## **2. Service philosophy**
**Our company solemnly promises:**
You are not only purchasing products, but also providing meticulous and thoughtful technical support services**！！！(** =^\_^= **)**
For those who purchase our wireless products, we provide free remote guidance, remote configuration and debugging services, and send data to the user's designated cloud platform.
Free consultation service forIoTsolution!
## **3. Product Features**
**Definition of Line Sequence**
**red**:+12V **black**：GND **Yellow**：485A **white**：485B
**Line length**Default 1 meter
**Collection characteristics**
* Current detection range: AC 0.2A-100A, other large range transformers can be customized
**Electrical Characteristics**
* Power supply mode: 5~24V DC
* Working power consumption: 0.5W
* Working frequency: 50-60Hz
**Communication characteristics**
* Transmission method: RS485
* Communication Protocol: [Modbus RTU](https://zhida.zhihu.com/search?content_id=265673322&content_type=Article&match_order=1&q=Modbus+RTU&zhida_source=entity)
**structural characteristics**
* Material: ABS plastic (shell)
* Installation method: snap on installation
**working environment**
* Temperature -20 ° C to 70 ° C
**storage environment**
* Temperature -20 ° C to 80 ° C
## **4. Core advantages of the product**
* Using high-precision measuring chips, with high measurement accuracy
* Open and close design, easy to install
* Easy installation, quick deployment, helping the IoT project to land quickly
## **5. Modubus Communication Protocol Description**
## **5.1 Serial Communication Parameters**
Baud rate: 9600 Data bits: 8 Check: NONE Stop bit: 1
## **5.2 Function code definition**
The upper computer reads data or receives alarm data using the 03 function code.
The upper computer controls the lower computer equipment (transformer) using the 06 function code.
## **5.3 Definition of Register Point Table**
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| serial number | register address | Parameter meaning | Read and write properties (R/W) | data format |
| 1 | 0x01 | Current high 16 bits | R | unsigned int (32-bit unsigned integer) |
| 2 | 0x02 | Current low 16 bits | R |
## **5.4 Example of Communication Messages**
Collect current data from device 01
|  |
| --- |
| Host request message |
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| address code | function code | starting address | Register number | CRC verification code |
| high byte | low-byte | high byte | low-byte | high byte | low-byte |
| 0x01 | 0x03 | 0x00 | 0x00 | 0x00 | 0x02 | 0xC4 | 0x0B |
|  |
| --- |
| Slave response message |
| 1 | 2 | 3 | 4 5 | 6 7 | 8 | 9 |
| address code | function code | byte count | register data | CRC checksum |
| high byte | low-byte | high byte | low-byte |
| 0x01 | 0x03 | 0x04 | 0x00 0x03 | 0x00 0x72 | 0x8A | 0x16 |
Data analysis explanation: The first bit is the device address of the response message, and the fourth, fifth, sixth, and seventh bits are the collected 32-bit current data (hexadecimal 0x00030071 equals decimal 196722 with an accuracy of 0.0001 (A), corresponding to current 19.6722 (A), and the eighth and ninth bits are CRC check bits.
## **6. Application Cases**