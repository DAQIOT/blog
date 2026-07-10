<https://zhuanlan.zhihu.com/p/2016834392048301532>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
## **Preface**
In industrial production, rotating machinery such as electric motors, gearboxes, pump bodies, and fans are the core of production operations, and their stable speed directly affects production efficiency and equipment operation safety. Traditional speed monitoring relies heavily on manual on-site inspection, which not only has low efficiency, but also cannot achieve Real-time warning, and is prone to faults caused by abnormal equipment speed. This article will provide a detailed introduction to a system based on[Wireless RPM Sensor](https://zhida.zhihu.com/search?content_id=271532159&content_type=Article&match_order=1&q=%E6%97%A0%E7%BA%BF%E8%BD%AC%E9%80%9F%E4%BC%A0%E6%84%9F%E5%99%A8&zhida_source=entity) +The implementation scheme of MQTT Protocol speed online monitoring does not require complex wiring, and can achieve speed Real-time collection, remote viewing, abnormal alarm, and seamless integration[IoT platform](https://zhida.zhihu.com/search?content_id=271532159&content_type=Article&match_order=1&q=%E7%89%A9%E8%81%94%E7%BD%91%E5%B9%B3%E5%8F%B0&zhida_source=entity)Provide practical reference for intelligent management of industrial rotating equipment.
## **1、 Core device: Wireless RPM Sensor Core features**
The wireless speed Sensor selected for this scheme**[SC-GP-RPM4G](https://zhida.zhihu.com/search?content_id=271532159&content_type=Article&match_order=1&q=SC-GP-RPM4G&zhida_source=entity)**Designed specifically for industrial rotating equipment speed monitoring, it is adaptable to various industrial site environments and supports wireless transmission and multiProtocoldocking. It is the core device for remote speed monitoring of rotating equipment, with the following core functions and features:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/7eole7pj0dpyqoxhnx45.jpg)
## **（1） Real-time Accurately collects speed data**
Sensorcan quickly respond to changes in the speed of rotating equipment, accurately collect speed data of various rotating equipment such as motors, gearboxes, fans, pumps, and compressors. The data has high accuracy and can fully restore the operating status of equipment speed, providing reliable basis for equipment status judgment.
## **（2） Multi mode wireless data transmission**
Sensorsupports 4G, WiFi[Lora](https://zhida.zhihu.com/search?content_id=271532159&content_type=Article&match_order=1&q=Lora&zhida_source=entity) Multiple wireless transmission methods are available, and it can also be compatible with wired transmission over Ethernet cables, adapting to different network environments in industrial sites. Without the need for complex on-site wiring, speed data can be quickly uploaded to theRemote Monitoringsystem orIoTplatform, eliminating the limitations of on-site monitoring.
## **（3） Remote Monitoring and automatic abnormal alarm**
Sensor can be integrated with the IoT platform to upload data Real-time, and users can independently set the upper and lower limit thresholds of rotation speed on the platform. When the device speed exceeds the set range, the system will automatically trigger an alarm and notify relevant personnel through SMS, email, platform APP push, etc., to achieve early detection and handling of faults and avoid equipment damage or production interruption.
## **（4） Adapt to multiple types of devices and scenarios**
Sensorcan adapt to various rotating mechanical equipment such as high-speed motors and low-speed gearboxes, supporting customized configurations. It can also choose conventional or explosion-proof products according to on-site needs to meet the speed monitoring needs of different industrial scenarios.
## **（5） Low power consumption and high stability**
Sensoradopts industrial grade design, adapts to the complex temperature, humidity, and electromagnetic environment of industrial sites, has low operating power consumption, strong stability, and can work continuously for a long time, reducing equipment maintenance frequency.
## **2、 Wireless Speed Sensor Applicable Scenarios**
This speed monitoring solution relies on the wireless Sensor feature and can be widely applied in various industrial scenarios with rotating equipment. The core applicable scenarios are as follows:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/mdfgyrki4tfegskgqewd.jpg)
## **（1） Monitoring of power equipment in industrial production lines**
The electric motor in the industrial production line is the core power source. Installing a wireless speed sensor (Sensor) on the motor can monitor changes in speed, detect sudden increases, decreases, and stops in a timely manner, and avoid the entire production line coming to a halt due to motor failures, ensuring production continuity.
## **（2） Monitoring of wind turbines in wind power plants**
The speed of wind turbines directly affects the power generation efficiency.Sensorcan monitor the speed changes of the fan impeller and main shaft.O&Mpersonnel can optimize the operating parameters of the wind turbine based on the data, improve power generation efficiency, and timely detect abnormal speed to extend the service life of the wind turbine equipment.
## **（3） Pump body in the petrochemical industry** **/Compressor monitoring**
In petroleum and chemical production, the speed stability of rotating equipment such as pumps and compressors is directly related to production safety.Sensorcan monitor their speed to ensure that the equipment operates within the rated speed range, guaranteeing the stability and safety of the production process.
## **（4） Mechanical equipment O&M and maintenance**
For key components of rotating equipment such as gearboxes and bearings,Sensorcan help maintenance personnel detect potential problems such as gear wear, poor meshing, and bearing jamming in a timely manner through changes in speed data, achieving predictive maintenance of equipment and reducing sudden failures.
## **（5） Monitoring of general rotating equipment for various industrial and mining enterprises**
Suitable for rotating equipment such as fans, conveyors, and mixers in various industrial and mining enterprises such as cement plants, steel plants, and pharmaceutical plants, achieving unified monitoring and management of the rotational speed of all types of rotating equipment.
## **3、 Core implementation points: MQTT Protocol docking and data transmission**
Wireless Speed Sensor supports various mainstream communications such as TCP/UDP/HTTP/MQTT Protocol. Among them, MQTT Protocol has become the preferred docking for speed monitoring scenarios due to its adaptation to the low bandwidth and unstable network environment of industrial sites Protocol. The specific implementation and docking points are as follows:
## **（1） MQTT Protocol docking advantages**
MQTT Protocol is designed specifically for data transmission of IoT devices, with low bandwidth usage and high transmission stability. Even in the case of poor network signals in industrial sites, it can ensure stable upload of speed data without data loss or high latency issues, perfectly adapting to the actual needs of industrial scenarios.
## **（2）ProtocolPractical steps for docking**
1. Sensor Terminal Configuration: Technicians can configure the wireless speed Sensor parameters according to on-site requirements, select MQTT as the data transmission Protocol, and set basic information such as platform docking address and port number;
2. Platform side subscription topic: Sensor will publish the speed data to the designated topic (Topic) of MQTT according to the set rules. IoT completes the subscription of the topic on the platform side to receive the data;
3. Data format customization: Users can customize the speed data format for MQTT transmission according to their own monitoring needs, and support integration with enterprise owned management systems and third-party platforms to meet diverse monitoring needs.
## **（3） Multi terminal remote data viewing**
After completing the integration ofProtocol, the rotational speed data can be synchronized to theIoTplatform. Users can log in to the platform anytime and anywhere through various terminals such as computers, mobile phones, tablets, etc. to view the device's rotational speed and historical data, without the need to go to the device site, achieving remote and efficient management.
## **4、 Overall process of implementing the plan**
## **（1） Preliminary on-site research**
1. Count the types and models of rotating equipment on site, confirm the installation location and operating conditions of the equipment, and determine whether to use the conventional version or the explosion-proof version Sensor;
2. Test the network signal strength of the equipment on site, determine whether to use 4G, WiFi or Lora wireless transmission method, and prepare relevant accessories in advance;
3. Confirm the power supply conditions of the equipment, plan the installation and power supply scheme of Sensor, and ensure that there is no interference with the on-site equipment.
## **（2） Sensor On site installation**
1. Sensor adopts a convenient installation design, and the Sensor probe is accurately fixed at the monitoring position of the rotating equipment according to the device type, ensuring that the probe matches the rotating part of the equipment and the collected data is accurate without deviation;
2. Complete the power connection of Sensor, check the installation firmness, and avoid Sensor displacement caused by equipment vibration during operation;
3. Debug the Sensor wireless signal to ensure stable signal transmission. If the on-site signal is weak, signal enhancement accessories can be installed.
## **（3） Protocol docking and platform configuration**
1. Technicians remotely configure MQTT parameters forSensorand connect to the designatedIoTplatform;
2. Add device information on the platform, subscribe to data transmission topics, test whether data uploading is normal, and confirm the update of speed data Real-time;
3. According to the equipment operating standards, set the upper and lower limit alarm thresholds for speed on the platform, and configure alarm notification methods (SMS, email, APP push, etc.).
## **（4） System trial operation and optimization**
After completing the installation and docking, conduct a 72 hour system trial run to check the accuracy, wireless transmission stability, and platform alarm function of Sensor Data Acquisition;
2. Based on the trial operation, fine tune the installation position and platform parameters of Sensor to ensure the stable operation of the entire monitoring system.
## **5、 Value and advantages of implementing the plan**
## **（1） Core Implementation Value**
1. Improve production efficiency: Real-time monitors equipment speed, promptly detects abnormal speed and triggers alarms to avoid production stagnation caused by equipment failure and ensure continuous production;
2. Reduce maintenance costs: Predict potential equipment failures through changes in speed data, achieve predictive maintenance, reduce repair costs for sudden equipment damage, and extend equipment service life;
3. Save labor costs: No need for manual on-site monitoring or inspection. Staff can remotely control the speed status of all rotating equipment through multiple terminals, greatly reducing the manpower investment for on-site inspections;
4. Implement data-driven management: The platform automatically stores historical data of device speed, supports data queries and trend analysis, and users can optimize device operating parameters based on the data, develop scientific maintenance plans, and achieve digitalization and refinement of Device Management.
## **（2） Core advantages of the plan**
1. Easy installation: Wireless transmission design, no need for on-site wiring, Sensor convenient installation, short installation time for a single device, without affecting normal production on site;
2. Strong adaptability: Supports multiple types of rotating devices, multiple wireless transmission methods, can be integrated with various IoT platforms, and can also customize configurations according to on-site needs to adapt to different industrial scenarios;
3. Stable operation: Designed with industrial grade Sensor to adapt to complex industrial environments, MQTT Protocol ensures stable data transmission and prevents data loss even in poor network conditions;
4. Easy to operate: The platform interface is simple, and parameter configuration, threshold setting, data viewing, and other operations are easy to understand. Staff do not need professional knowledge ofIoTto quickly get started.
## **6、 Post production O&M and usage precautions**
## **（1） Daily remote O&M**
1. Regularly inspect the online status and data transmission ofSensorthrough theIoTplatform, promptly identify offline and abnormal data issues, and remotely troubleshoot basic faults;
2. Adjust the platform speed alarm threshold in a timely manner according to changes in equipment operating conditions to ensure the practicality of the alarm function.
## **（2） Regular on-site inspections**
1. Conduct a quarterly on-site inspection ofSensor, focusing on checking the firmness of theSensorprobe and installation bracket, cleaning the dust and oil stains on the surface ofSensorto avoid affecting it;
2. Check the operation status of the Sensor power supply and wireless signal accessories, replace aging accessories in a timely manner, and ensure the normal operation of the system.
## **（3） Precautions for use**
1. The installation and debugging ofSensormust be carried out by professional technicians, and the explosion-proof scenario must use the dedicated explosion-proof versionSensor, strictly following the on-site safety operation specifications;
2. When connecting to the enterprise's own system or third-party platform, confirm the platform's Protocol support in advance, and have technical personnel complete the docking configuration to ensure normal data transmission;
3. Manage platform accounts and passwords well, assign different operating permissions according to the responsibilities of staff, and avoid data misoperation.
## **Kind reminder**
The selection and installation location of the wireless speed Sensor in this plan should be determined based on the actual working conditions of the rotating equipment on site. It is recommended to conduct on-site research in advance and have a professional team complete the design and implementation of the plan to ensure the collection accuracy and operational stability of the speed monitoring system, and maximize the value of intelligent monitoring.