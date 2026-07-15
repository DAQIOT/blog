<https://zhuanlan.zhihu.com/p/2057430827462570648>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
As a professional provider of IoT, Data Acquisition, and solution, an industrial Data Acquisition expert (professional account), located in Shanghai[Data collection IoT](https://zhida.zhihu.com/search?content_id=278404092&content_type=Article&match_order=1&q=%E6%95%B0%E9%87%87%E7%89%A9%E8%81%94&zhida_source=entity)Daq IoT, the editor of NetEase Technology, would like to introduce the following content and sincerely welcome everyone to discuss and exchange ideas.  
As a professional internet of things data acquisition solutions provider, industrial data acquisition experts (professional households), digital internet of things editor daq-iot here to do the following introduction, and sincerely welcome everyone to discuss and exchange.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/po3voollkgcec14l99ff.jpg)
Long distance point-to-point 4G wireless transmission, serial port docking with upper layer communication management machine, replacing long-distance wiring construction, reducing work difficulty
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/uc2r4yz0tg0cvb09owip.jpg)
## 4G point-to-point long-distance wireless transmission solution (based on[ModbusProtocol](https://zhida.zhihu.com/search?content_id=278404092&content_type=Article&match_order=1&q=Modbus%E5%8D%8F%E8%AE%AE&zhida_source=entity)Station number forwarding)
### 1、 Background of the plan
In scenarios such as industrial automation, energy metering, smart city management, and environmental monitoring, a large number of on-site equipment are used[RS485](https://zhida.zhihu.com/search?content_id=278404092&content_type=Article&match_order=1&q=RS485&zhida_source=entity)/RS232 serial communication, and devices are often deployed in a dispersed manner, distributed across regions, and spaced far apart. Traditional wired serial port wiring has problems such as high construction costs, long cycles, and easy wear and aging of outdoor wiring; Short distance wireless data transmission radio stations are limited by occlusion, environmental interference, and transmission distance limits, making it difficult to meet the requirements of ultra long distance networking across factories and cities.
In response to the above pain points, this solution relies on data acquisition IoT 4G intelligent acquisition terminal products, based on public network 4G and cloud forwarding technology, to achieve stable wireless communication of long-distance serial port devices. At the same time, it is natively adapted to Modbus industrial Protocol, which can accurately address remote slave devices by station number, providing high reliability and low-cost solution for decentralized industrial equipment networking.
### 2、 Overview of the Plan
This plan adopts the "Data Acquisition IoT" approach[DTU main module](https://zhida.zhihu.com/search?content_id=278404092&content_type=Article&match_order=1&q=DTU%E4%B8%BB%E6%A8%A1%E5%9D%97&zhida_source=entity)+The networking architecture of multiple DTU slave modules is designed to[4G cellular network](https://zhida.zhihu.com/search?content_id=278404092&content_type=Article&match_order=1&q=4G%E8%9C%82%E7%AA%9D%E7%BD%91%E7%BB%9C&zhida_source=entity)To achieve long-distance point-to-point and point to multipoint transparent transmission of serial port data, with cloud servers serving as the data forwarding hub.
The solution deeply supports Modbus RTU Protocol, which can identify the slave address (station number) in the message and accurately forward the master station instructions to the corresponding remote slave devices; Without the need to modify the communication program and Protocol logic of the original device, cross regional serial port device interconnection can be quickly achieved, replacing traditional wired RS485 links and significantly reducing the construction and maintenance costs of long-distance networking.
### 3、 System architecture and working principle
The overall system is divided into**On site equipment layer, 4G transmission layer, cloud forwarding layer**The three-tier architecture has the following logic:
### 1. Architecture layering
* **Field Device Layer**
+ Main station side: PLC, industrial control computer, upper computer and other main control devices act as Modbus main stations to initiate communication commands.
+ From the station side: Sensor, intelligent instruments, valve controllers, acquisition modules, and other terminal serial devices are used as Modbus slave response commands.
* **4G transmission layer**
+ DTU main module: deployed on the main station side, directly connected to the main control serial port device, responsible for uploading the main station serial port data to the cloud through 4G and forwarding the returned data to the main station device.
+ DTU slave module: deployed on various slave sites, corresponding one-to-one with terminal serial devices, receiving instructions issued by the cloud and forwarding them to slave devices, while transmitting device response data back.
* **Cloud forwarding layer** The cloud server undertakes data routing and Protocol parsing functions, identifies station number information in Modbus messages, and accurately issues instructions to the corresponding DTU slave module based on the pre configured mapping relationship between station number and slave module index, achieving targeted transmission from one station to one device.
### 2. Complete communication process
1. The main station serial port device issues Modbus commands carrying the target station number, which are sent to the DTU main module through the serial port;
2. After the DTU main module encapsulates the serial data, it is uploaded to the cloud server through 4G network;
3. The cloud server parses the Modbus station number, matches the corresponding index DTU slave module, and directs the instruction to be issued;
4. After receiving instructions from the module, DTU forwards them to the on-site slave device through the local serial port;
5. Return response data from the device, reverse the original path back to the main station device, and complete a complete communication.
### 4、 Core Product Introduction
The core of the solution Hardware is data acquisition IoT**Intelligent collection terminal (4G DTU)**For industrial grade serial wireless transmission devices, the product features are as follows:
* **Industrial grade structural design**Adopting DIN 35mm standard rail installation, suitable for installation inside industrial distribution cabinets; Industrial grade shells and components, suitable for complex environments such as factories and outdoor cabinets.
* **Interface and Configuration**Standard RS485 serial port terminal (A/B line sequence), supporting DC wide voltage power supply; Equipped with a dedicated 4G antenna interface to ensure on-site signal stability; Comes with RELOAD button, supports device reset and configuration reset.
* **State Visualization**Equipped with three types of status indicator lights including power supply, network, and connection, it can intuitively judge the device's operation, networking, and data communication status, making it easy to debug on site.
* **Lightweight O&M**The device comes with a O&M QR code, which allows for quick access to technical support and reduces the threshold for on-site debugging and troubleshooting.
### 5、 Core functional characteristics
### 1. Accurate forwarding of Modbus station numbers, native adaptation to industrialProtocol
Supports standard Modbus RTU Protocol parsing, and can map corresponding DTU slave modules based on slave addresses. A single master can manage multiple decentralized slave devices simultaneously; Zero Protocol transformation is suitable for most industrial equipment such as PLCs, instruments, and Sensor, without the need for additional Gateway equipment.
### 2. 4G full network coverage, no transmission distance limit
Supporting 4G networks from the three major domestic telecom operators, communication can be achieved as long as there is a public network mobile signal, with no physical distance limit. It supports long-distance networking of devices across factories, cities, and even provinces, completely breaking through the distance bottleneck of wired and short-range wireless.
### 3. Transparent serial transmission, plug and play
Support fully transparent transmission of serial data, fully compatible with the communication logic of existing devices, without the need to modify device programs; Replacing the original serial port cable can complete the network upgrade, with low deployment threshold and minimal on-site debugging workload.
### 4. Industrial grade high reliability
Adopting DC 9-36V wide voltage power supply, adapted to the fluctuating power supply environment of industrial sites; Support wide temperature work and adapt to harsh working conditions such as outdoors and factories; Built in heartbeat activation and automatic reconnection mechanism for disconnection, ensuring that the communication link is permanently online.
### 5. Point to multipoint flexible networking
A single DTU master module can interface with multiple DTU slave modules and support on-demand expansion of points; Adding slave devices only requires adding corresponding slave modules and configuring station number mapping, without changing the main station architecture, and adapting to distributed and multi node acquisition and control scenarios.
### 6、 Key technical parameters
| category | Parameter Description |
| --- | --- |
| serial port parameters | Interface type: RS485 (optional RS232); The baud rate is adjustable from 1200 to 115200bps and supports custom configuration of checksum, data bit, and stop bit |
| network parameters | Network standard: 4G full network (China Mobile/China Unicom/China Telecom); Support SIM card access, automatic dial-up networking upon power on |
| power supply parameters | Power supply range: DC 9V~36V wide voltage; Low power standby design |
| environmental parameters | Working temperature: -40 ℃~+85 ℃; Suitable for indoor distribution cabinets, outdoor cabinets, and other scenarios |
| Installation Method | DIN 35mm standard rail installation |
| Protocol Support | Modbus RTU、 Transparent serial transmission, supporting custom registration packages and heartbeat packages |
### 7、 Typical application scenarios
1. **Remote control of distributed industrial equipment**Remote control of distributed pump stations, valves, and production line auxiliary equipment. The main station PLC communicates with multiple on-site slave devices through 4G DTU to achieve remote Data Acquisition and command issuance.
2. **Energy metering and centralized meter reading**Water, electricity, gas, and heat metering instruments are deployed in various regions, and measurement data is transmitted back from modules according to station numbers through DTUs to achieve centralized energy consumption management in the main station.
3. **Environmental and Agricultural Monitoring Network**Outdoor multi-point environment Sensor, soil moisture equipment, and irrigation controllers are deployed in a decentralized manner and transmitted back to the main control room through 4G links to achieve large-scale monitoring networking.
4. **Remote management of municipal equipment**Cross regional deployment of street lamp controllers, traffic signal peripherals, and municipal monitoring equipment, achieving remote control of terminal devices by the main station through point-to-point transmission.
5. **Remote industrial equipment O&M**Equipment manufacturers perform remote Data Acquisition and fault diagnosis on distributed industrial equipment sold, and realize remote transmission of serial data through DTU.
### 8、 Value and advantages of the plan
1. **cost reduction and efficiency improvement**No need for long-distance serial cable laying and on-site construction, significantly reducing the cost of wiring, construction, and long-term maintenance for long-distance networking, and shortening the project implementation cycle.
2. **Strong compatibility**Native support for Modbus industry standard Protocol, compatible with mainstream PLCs, instruments Sensor， No need for secondary development orProtocolmodification.
3. **stable and reliable**Relying on the mature 4G network of the operator, combined with industrial grade Hardware and disconnection reconnection mechanism, to ensure the long-term stable operation of the communication link.
4. **Flexible expansion**The point to multipoint architecture supports node expansion as needed, and adding new sites only requires adding subordinate modules, making the architecture highly scalable.
5. **Convenient deployment**The equipment wiring is simple, the configuration process is lightweight, and on-site technicians can quickly complete deployment and debugging.