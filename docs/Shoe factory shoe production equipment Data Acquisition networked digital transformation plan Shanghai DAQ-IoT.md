<https://zhuanlan.zhihu.com/p/2057914704245396962>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
As IoT[Data Acquisition](https://zhida.zhihu.com/search?content_id=278521530&content_type=Article&match_order=1&q=%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86&zhida_source=entity)solution professional provider, industrial Data Acquisition expert (professional account), Shanghai DAQ-IoT technology editor daq iot would like to introduce the following content here and sincerely welcome everyone to discuss and exchange ideas.
As a professional provider of IoT data acquisition solutions and an expert (specialist) in industrial data acquisition, the editor from Shanghai DAQ-IoT Technology Co., Ltd. (daq-iot) introduces the following content here and sincerely welcomes everyone to discuss and exchange ideas.
--------------------------------------------------------------------------------------------------------------
**Network digital transformation plan for shoe equipment in shoe factories Data Acquisition**
**1、 Project Background**
As a traditional labor-intensive industry, the footwear industry is facing a critical window period of digital transformation. Chengdu Lanhua Fruit Footwear, as a representative shoe-making enterprise in the industry, has a production process covering the entire process of midsole production, outsole production, bottom assembly, cutting, processing, etc. It has hundreds of various production equipment such as needle cars, ovens, hot presses, glue coating equipment, and shaping machines. With the intensification of market competition and the continuous improvement of customer requirements for product quality, the traditional production management mode that relies on manual inspection and paper records is no longer able to meet the needs of refined management.
Shanghai DAQ-IoTNetwork Technology Co., Ltd. is based on years of experience[Industry IoT](https://zhida.zhihu.com/search?content_id=278521530&content_type=Article&match_order=1&q=%E5%B7%A5%E4%B8%9A%E7%89%A9%E8%81%94%E7%BD%91&zhida_source=entity)Based on the technical accumulation and project practice in the field, we have tailored a complete set of equipment Data Acquisition solution according to the characteristics of footwear production equipment. The plan adopts the construction concept of "layered architecture and step-by-step implementation", which helps Chengdu Lanhua Fruit Footwear achieve digitalization, visualization, and intelligent upgrading of the entire production chain through multi-dimensional perception layer Data Acquisition, stable and reliable transmission layer, unified data governance at the platform layer, and multi scenario value mining at the application layer.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/gyeu6fw5t1syrfgkyl25.jpg)
**2、 Industry pain point analysis**
**2.1 Serious device data silos**
The current equipment brands and models of Chengdu Lanhua Fruit Footwear are diverse, covering Feiyue JUKI、 Dozens of device types from over ten manufacturers, including Jiesheng, Yicheng, Huangshang, Xuhao, and Shangjin, have inconsistent communication Protocol and closed data interfaces, resulting in a large number of data islands. Although needle car equipment has a certain digital foundation, it is difficult to connect with privateProtocol; Oven, press, glue coating and other equipment are mostly purely mechanical structures, lacking native data output capabilities.
**2.2 Process parameters rely on manual control**
The key process parameters in the production process, such as temperature, pressure, time, etc., currently mainly rely on manual setting and inspection records by operators. The temperature of the oven is manually checked every 2 hours, and the hot pressing pressure is manually determined through carbon paper. There are problems such as data lag, insufficient accuracy, and large human errors. Abnormal process parameters cannot be detected byReal-time, resulting in significant fluctuations in product quality and difficulties in tracing defective products.
**2.3 Lack of data support for equipment utilization rate**
The startup rate, operating time, and production capacity data of hundreds of devices in the entire factory lack accurate statistics[OEE](https://zhida.zhihu.com/search?content_id=278521530&content_type=Article&match_order=1&q=OEE&zhida_source=entity)The comprehensive efficiency cannot be quantitatively evaluated. Production scheduling relies on empirical judgment, with equipment idle and capacity bottlenecks coexisting, and resource allocation optimization lacking data basis. After equipment failure, maintenance is the main focus, and preventive maintenance capabilities are insufficient. Unexpected downtime affects production and delivery.
**2.4 Extensive energy consumption management**
The energy consumption data of high energy consuming equipment such as ovens and hot presses lacks itemized measurement, and the energy consumption per unit product cannot be accurately calculated. The phenomenon of energy waste is difficult to locate, the input-output ratio of energy-saving renovation cannot be quantitatively evaluated, and the refined cost management of enterprises is hindered.
**3、 Overall solution architecture**
This scheme adopts the industrial IoT standard four layer architecture design, which is divided from top to bottom into**Perception layer, transport layer, platform layer, application layer**To achieve a complete closed-loop system fromData Acquisitionto value realization.
**3.1 Perception layer: Multi dimensional Data Acquisition terminal**
Differentiated collection strategies are adopted for different types of devices: smart devices are directly collected through private Protocol, while traditional devices are retrofitted with Hardware by installing Sensor. The collection dimensions cover multiple types of process parameters such as temperature, pressure, current, counting, switch status, and operating time, ensuring comprehensive and accurate production dataReal-time。
* **Protocol Direct Procurement Equipment**Intelligent needle sewing equipment such as High Single Flyover Adc-666H, High Double Flyover Adc-777H, and Computer Car JUKI-1510 are directly connected through the device's privateProtocolto collect core data such as needle count, thread cutting frequency, foot lifting frequency, and operating status
* **Sensor Modified equipment**Traditional equipment such as ovens, hot press machines, glue coating equipment, and shaping machines can achieve digital acquisition of process parameters by installing infrared temperature transmitters, pressure transmitters, photoelectric Sensor, current transformers, etc
**3.2 Transport Layer: Industrial grade data transmission network**
adopt**[DAQ-GP-IOTGW](https://zhida.zhihu.com/search?content_id=278521530&content_type=Article&match_order=1&q=DAQ-GP-IOTGW&zhida_source=entity)Universal data acquisition instrument**and**IOT GatewayGateway**as[Edge Computing](https://zhida.zhihu.com/search?content_id=278521530&content_type=Article&match_order=1&q=%E8%BE%B9%E7%BC%98%E8%AE%A1%E7%AE%97&zhida_source=entity)Node, supporting multiple communication methods such as RS485, Ethernet, WiFi, etc., to achieve multiProtocolconversion and data edge processing. Data adoption[MQTTProtocol](https://zhida.zhihu.com/search?content_id=278521530&content_type=Article&match_order=1&q=MQTT%E5%8D%8F%E8%AE%AE&zhida_source=entity)Upload to the cloud, support breakpoint resume and local caching, ensuring zero data loss in case of network fluctuations.
**3.3 Platform layer: view.daq-iot IoT platform**
rely on**[Daq iot platform](https://zhida.zhihu.com/search?content_id=278521530&content_type=Article&match_order=1&q=daq-iot%E5%B9%B3%E5%8F%B0&zhida_source=entity)**Build a unified data center to achieve core capabilities such as device access management, data storage cleaning,Rule Enginecomputing, and visual display. The platform supports the access ofHigh Concurrencydevices, and a singleGatewaycan simultaneously access dozens of devices with a second level frequency, meeting the monitoring needs of large-scale production lines.
**3.4 Application Layer: Multi scenario Business Value**
Based on the platform's data capabilities, provide upward support for equipment monitoring, production statistics, quality management, energy consumption analysis[predictive maintenance](https://zhida.zhihu.com/search?content_id=278521530&content_type=Article&match_order=1&q=%E9%A2%84%E6%B5%8B%E6%80%A7%E7%BB%B4%E6%8A%A4&zhida_source=entity)Provide data support for production management decisions through various business applications.
**4、 Detailed explanation of scene based collection scheme**
**4.1 Needle workshop: Protocol direct procurement+Hardware transformation dual-mode**
As the focus of the first phase construction, there are a total of 73 intelligent needle sewing equipment in the 6th line of the needle sewing machine. The industrial Gateway private Protocol direct docking solution is adopted.
| Device Type | Brand Model | quantity | Collection Method | Collect data points |
| --- | --- | --- | --- | --- |
| High single needle car | Flyover - Adc-666H | 30 units | Private Protocol Direct Procurement | Needle count, thread cutting frequency, foot lifting frequency, operating time, equipment status |
| High double needle car | Flying over - Adc-777H | 15 units | Private Protocol Direct Procurement | Needle count, thread cutting frequency, foot lifting frequency, operating time, equipment status |
| computerized sewing machine | JUKI-1510 | 28 units | Private Protocol Direct Procurement | Counting, switch status, running time |
pass**IOT GatewayGateway**Analyze the device manufacturer's private Protocol, collect data such as needle count, output, and operating status Real-time, and upload it to the daq iot platform via WiFi.Gatewayhas a rich built-inProtocollibrary, supporting mainstream industrial applications such as Modbus and OPC UA. It can also be customized according to the documentation of device manufacturers to ensure seamless integration of various intelligent devices.
For ordinary needle sewing equipment such as three cars and edge rolling machines that do not have the Protocol docking conditions, the Hardware modification plan of installing a photoelectric Sensor+ADC acquisition module is adopted to achieve needle counting and equipment operation status monitoring through non-invasive installation.
**4.2 Oven equipment: temperature+flow rate full chain monitoring**
Oven is a key process equipment in shoemaking production, widely used in processes such as Gangbao shaping, tongue shaping, shoe upper softening, and treatment agent drying. Temperature control directly affects product quality. There are nearly a hundred types of oven equipment such as oven conveyors, hot air ovens, and infrared ovens in the entire factory.
**Collection plan:**
* **Temperature acquisition**Fixed installation of infrared temperature transmitter at the outlet of the oven, non-contact measurement of the temperature of the discharged material, with a measurement accuracy of ± 1% or ± 2 ℃ (whichever is higher), Real-time monitors the actual heating effect of the oven
* **Flow rate/time collection**Install a reflective photoelectric Sensor or proximity switch on the conveyor belt, matched with metal sheet identification, and convert the conveyor belt speed and oven residence time based on the time difference of the material passing through
* **Counting collection**Automated production counting is achieved through photoelectric Sensor, replacing manual statistics
* **Condition Monitoring**Install a current transformer to determine the on/off status and working mode of the device based on its operating current
All Sensor signal access**DAQ-GP-IOTGW data acquisition instrument**Unified data processing and uploading. The data acquisition instrument supports multiple analog and switch inputs, and a single device can simultaneously access multiple Sensor, significantly reducing deployment costs.
**4.3 Hot pressing/shaping equipment: dual parameter monitoring of temperature and pressure**
Hot press and shaping machine are the core equipment in the shoe-making process. The precise control of temperature and pressure directly determines the bonding strength between the sole and upper of the shoe, and is a key process parameter that affects product quality. The entire factory covers dozens of equipment including single extraction oil hot press machines, ironing machines, trademark ironing machines, heel shaping machines, toe hot and cold shaping machines, wall presses, etc.
**Collection plan:**
* **Model temperature acquisition**Infrared temperature Sensor is installed on the surface of the mold, and Real-time collects the working temperature of the hot pressing mold. If the temperature is abnormal, an immediate alarm will be triggered
* **Pressure collection**Install a high-precision pressure transmitter to monitor the pressure value during compression, ensuring that the pressure is within the required range of the process, with a pressure accuracy of up to 0.1%
* **Time Collection**Detecting the pressing action through proximity switch, automatically recording the single pressing time and number of pressing times
* **capacity statistics**Automatically convert production data based on the number of pressing cycles, supporting counting by style
For equipment with limited installation space such as wall presses, adopt**DAQ-GP-GWN4S16**The series industrial Gateway serves as the acquisition host, with its multi-channel DI/DO and RS485 interface design, which can flexibly adapt to various Sensor accesses. The industrial grade ARM processor ensures stable operation in complex environments.
**4.4 Coating equipment: temperature+counting integrated collection**
The gluing process includes various techniques such as spraying, over gluing, and dispensing. The gluing temperature directly affects the viscosity and coating effect of the glue, and is an important link in quality control. The entire factory is equipped with nearly ten types of glue coating equipment, including spray glue machines, glue passing machines, dot glue passing machines, and dispensing machines.
**Collection plan:**
* **Gel temperature collection**Install thermocouple temperature Sensor at the position of the adhesive groove, Real-time to monitor the coating temperature, and automatic alarm will be triggered if the temperature exceeds the limit
* **production count**Install a photoelectric sensor (Sensor) at the discharge port to automatically count the processing quantity
* **Condition Monitoring**Monitor the operating current of equipment through current transformers to determine the on/off status and workload
**4.5 Stamping/Hammer Leveling Equipment: Operating Status and Energy Consumption Monitoring**
Hammer leveling machines, punching machines, edge trimming machines, grinding machines and other equipment belong to auxiliary processing equipment, with a large quantity and scattered distribution, making unified management difficult.
**Collection plan:**
* **Switch status monitoring**: Installation**Wireless current Sensor**Non invasive measuring equipment for power supply circuit current, determining equipment operation/standby/shutdown status through current threshold, installation does not require power outage, and does not affect production
* **Energy Consumption Statistics**Based on current data combined with voltage conversion of equipment energy consumption, achieve accurate measurement of energy consumption for a single device
* **Action count**Install proximity switches on reciprocating equipment such as punching machines and hammer leveling machines to track the number of processing times and production capacity
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/la05djzo40umv333kccu.jpg)
**4.6 Midsole/outsole production equipment: full process parameter collection**
The production of midsole and outsole is the core process in the front-end of shoemaking, covering large-scale equipment such as lina machines, rolling mills, injection molding machines, 10000 horsepower, hot press machines, etc. The process parameters are complex and have a profound impact on product quality.
**Collection plan:**
* **Mixing process**Install an infrared thermometer at the discharge port of the Lina machine/10000 horsepower to collect the discharge temperature and ensure that the mixing process meets the standard
* **Refining process**Install an infrared thermometer at the roller of the roller machine, and deploy a laser thickness gauge to measure the thickness of the rough embryo, with a thickness measurement accuracy of 0.01mm
* **Injection molding**Installation of infrared temperature collector for injection molding machine mold, proximity switch detection of injection action for timing, automatic conversion of production capacity data
* **Hot pressing process**Traditional hot press mold temperature collection+pressing time monitoring to ensure stable bottom vulcanization process
**5、 Core Product Introduction**
**5.1 DAQ-GP-IOTGW Universal Data Acquisition Instrument**
**DAQ-GP-IOTGW Universal Data Acquisition Instrument**It is an edge intelligent collection terminal independently developed byShanghai DAQ-IoT, integratingData Acquisition, storage, andEdge Computing. It is the core product of this solution,Hardware.
**Core features:**
* **Multi interface design**: Supports multiple RS485/RS232 serial ports, Ethernet ports, switch input/output, analog input, and flexible adaptation to various types of Sensor and industrial equipment access
* **Rich support forProtocol**Built in Modbus RTU/TCP, DLT645, IEC103 and dozens of other mainstream industrial Protocol, supporting customized development of private Protocol
* **Edge Computing Ability**Built in industrial grade ARM processor, supporting local data preprocessing, threshold judgment, logical operation, reducing cloud computing pressure
* **Data caching mechanism**Local large capacity data storage, automatically cached in case of network interruption, resume transmission after recovery, ensuring zero loss of data throughout the entire link
* **Industrial grade reliability**Wide temperature and pressure design, suitable for harsh environments such as high temperature, high humidity, and strong electromagnetic interference in the workshop, with stable operation 24/7
* **Multiple communication methods**Supports multiple upstream communication methods such as Ethernet, WiFi, 4G, etc., and can be flexibly selected according to the network environment of the factory area
**5.2 IOT Gateway Industrial Gateway**
**IOT GatewayGateway**Focusing on industrial equipment Protocol conversion and data forwarding, implementing Modbus to MQTT+JSON conversion, and reducing deployment difficulty through interface configuration.
**Core features:**
* **Protocol Conversion**Support the conversion of various devices such as mainstream PLCs, Modbus instruments, DLT645 meters, etc. Protocol, connect them downwards to industrial equipment, and connect them upwards to the IoT platform IoT
* **Visual Configuration**Web configuration interface, collection points, reporting frequency, and Protocol parameters can all be graphically configured, and deployment can be completed without programming
* **High Concurrency Access**Single Gateway supports simultaneous access to dozens of devices, meeting the centralized collection requirements at the production line level
* **Second-level collection**: Supports millisecond level Data Acquisition frequency to meet the monitoring requirements of high-speed production equipment Real-time
**5.3 DAQ-GP-GWN4S16 Gateway Host**
**DAQ-GP-GWN4S16**The series of industrial control hosts adopts industrial grade ARM processors with powerful IO expansion capabilities, suitable for complex multi Sensor access scenarios.
**Core features:**
* **Rich IO resources**4 Ethernet ports, 16 RS485 serial ports, multiple DI/DO ports, optional CAN interface to meet the requirements of complex production line multi device access
* **Powerful processing capability**Industrial grade high-performance processor, supporting complex Edge Computing logic and multitasking concurrent processing
* **stable and reliable**Fanless design, wide temperature range, suitable for harsh industrial environments
* **Scalable storage**Support SSD solid-state drive expansion to meet the local storage needs of massive data
**5.4 Wireless Current Sensor**
**Wireless current Sensor**Adopting a non-invasive installation design is an ideal choice for traditional equipment condition monitoring.
**Core features:**
* **Charged non-destructive installation**Open and close design, installation without power outage, no need to disconnect wires, does not affect normal production, especially suitable for production line renovation projects
* **high-precision measurement**High precision ultra microcrystalline iron core coils and industrial grade chips are used for true effective value measurement, with high accuracy, good stability, and strong anti-interference ability
* **wireless transmission**Supports multiple wireless transmission methods such as WiFi/4G/LoRa, no wiring required, flexible deployment
* **FOTA remote upgrade**Support remote upgrade of Firmware, easy maintenance
**5.5 daq iot IoT platform**
**Daq iot platform**It is a self-developed middle platform product ofIoT, providing enterprises with unified capabilities ofDevice ManagementandData Visualization.
**Core functions:**
* **Device Management**Device full lifecycle management, supporting batch access, group management, status monitoring, and remote configuration
* **Data Visualization**Rich visualization components, drag and drop large screen configuration, Real-time displays production data, equipment status, and energy consumption indicators
* **Alarm Management**Multi level threshold alarm, supports SMS APP、 Multiple notification methods such as email, timely response to abnormalities
* **Data Analytics**Built in statistical analysis tools, supporting production statistics, OEE calculation, trend analysis, comparative analysis, etc
* **Open API**Provide standard RESTful API and MQTT interface for easy integration with third-party systems such as MES and ERP
**6、 Value and benefits of the plan**
**6.1 Production efficiency improvement**
By collecting equipment operation data Real-time and automatically calculating OEE, we can accurately identify equipment idle and capacity bottlenecks, optimize production scheduling, and expect to improve equipment overall efficiency by more than 15%. Automated production data statistics replace manual copying, reducing the workload of statisticians and significantly improving data accuracy.
**6.2 Stable product quality**
Key process parameters (temperature, pressure, time) Real-time monitoring and over limit alarm have changed from post inspection sampling to process control, allowing for immediate detection of process abnormalities and significantly reducing the rate of defective products. A complete process data traceability chain enables quick identification of quality issues and precise tracing back to specific equipment and time periods.
**6.3 Equipment O&M Upgrade**
Transitioning from traditional post maintenance to data-driven predictive maintenance, by analyzing equipment operating status trends, predicting fault risks in advance and reducing unexpected downtime losses. Equipment malfunction automatic alarm, O&M personnel respond quickly, repair efficiency is improved, and equipment availability time is extended.
**6.4 Refined management of energy consumption**
Realize precise energy consumption measurement for single equipment, single process, and single product, identify energy waste points, and guide energy-saving transformation. Based on real energy consumption data, calculate product costs and provide data support for quotation and business decision-making. It is expected that through refined management, energy savings of 5% -10% can be achieved.
**6.5 Digitization of Management Decisions**
Visual display of production data Real-time, allowing management to constantly monitor the production status of the entire factory and shift decision-making from experience driven to data-driven. Data accumulation forms enterprise digital assets, laying the data foundation for subsequent intelligent upgrades such as AI process optimization and intelligent scheduling.
**7、 Implement the plan**
This project adopts a construction strategy of "overall planning, step-by-step implementation, and quick results", and will be promoted in two phases:
**7.1 Phase I project: Digitization of needle car 6-line (73 devices)**
**Implementation cycle:**4-6 weeks
**Construction content:**
* Docking development and deployment of 30 units of high-altitude single flight ADC-666H, 15 units of high-altitude double flight ADC-777H, and 28 units of computer vehicle JUKI-1510 Protocol
* Deploy IOT Gateway Industrial Gateway to achieve WiFi data transmission of needle car equipment to daq iot platform
* Deployment and basic configuration of daq iot industrial data acquisition platform, construction of needle workshop Data Visualization large screen
* Implement basic data monitoring and statistical functions such as needle count, output, and operating status
**Value of Phase One:**Quickly digitize the core needle sewing equipment, verify the feasibility of the plan, and accumulate experience for the promotion of the entire factory.
**7.2 Phase II project: Plant wide equipment coverage (38+devices)**
**Implementation cycle:**8-10 weeks
**Construction content:**
* Installation of oven equipment (infrared oven, hot air oven, etc.) Sensor and Data Acquisition
* Collection of temperature and pressure parameters for hot pressing/shaping equipment (such as hot pressing machines, hot pressing machines, shaping machines, etc.)
* Monitoring the status and energy consumption of auxiliary equipment such as glue coating equipment, stamping equipment, and trimming equipment
* Collection of process parameters for key equipment in midsole and outsole production workshops
* Expand the functions of the daq iot platform and add application modules such as energy consumption analysis, quality traceability, and equipment O&M
**Phase II Value:**Realize full coverage of the main production equipment Data Acquisition in the entire factory, establish a complete production data system, and support refined management and depth Data Analytics.
**7.3 Long term plan: intelligent upgrade**
On the basis of data accumulation, gradually deepen the application:
* Introducing AI algorithms for process parameter optimization and quality prediction
* Integrate MES/ERP systems to achieve data connectivity and business collaboration
* Construct theDigital Twinworkshop to achieve visual simulation of the entire production process
* Building an Energy Management System (EMS) to achieve unified scheduling and optimization of energy throughout the entire plant
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ph1o4fjakz8xl7v9pniw.jpg)
**8、 Why choose Shanghai DAQ-IoT**
IoTTechnology Co., Ltd. is a national high-tech enterprise and a member of the expert database for industrial intelligence and digital transformation. We specialize in providing industrial and enterprise digital transformation services. The company has over ten years of R&D and project experience in the fields of wireless Sensor, industrial software Hardware Data Acquisition, and monitoring systems, providing long-term services to customers across the entire industry chain such as Smart Manufacturing and new energy.
**Core advantages:**
* **Full stack technology capability**From the perception layer Sensor, edge Gateway to the cloud platform, we independently develop full chain products with controllable technology and guaranteed project delivery
* **Rich project experience**Accumulated service to hundreds of industrial enterprises, with experience in implementing multiple industry scenarios, and a deep understanding of the pain points and needs of the manufacturing industry
* **Strong customization ability**Support customized development of Protocol, customization of Hardware functions, and customization of platform functions to flexibly meet customers' personalized needs
* **High cost-effective solution**Directly delivering self-developed products, reducing intermediate links, and achieving better costs under the same technical indicators, helping small and medium-sized enterprises to launch digitalization at low cost
* **Localization services**Establishing branch offices in multiple locations in Shanghai and Henan to quickly respond to customer needs and provide end-to-end services from solution design to installation and debugging
Adhering to the core concept of "technology as the root, quality as the foundation, integrity and pragmatism, and pursuit of excellence", Shanghai DAQ-IoT is committed to making Data Acquisition simpler, helping Chengdu Lanhua Fruit Footwear successfully transform into a digital enterprise, and jointly creating a new benchmark for the footwear industry Smart Manufacturing.