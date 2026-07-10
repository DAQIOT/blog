<https://zhuanlan.zhihu.com/p/2001644803776091146>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/q7rs98ms2g5hk4irg9yb.jpg)
DAQ for [IIOT](https://zhida.zhihu.com/search?content_id=269875758&content_type=Article&match_order=1&q=IIOT&zhida_source=entity)The general industrial Data Acquisition system is[Shanghai DAQ-IoTNetwork Technology Co., Ltd](https://zhida.zhihu.com/search?content_id=269875758&content_type=Article&match_order=1&q=%E4%B8%8A%E6%B5%B7%E6%95%B0%E9%87%87%E7%89%A9%E8%81%94%E7%BD%91%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&zhida_source=entity)A set of device management software developed to run onEdge Computingmachines, industrialGatewaymachines, or ordinary computers, mainly used for managing various industrial instruments and equipment PLC、[injection molding machine](https://zhida.zhihu.com/search?content_id=269875758&content_type=Article&match_order=1&q=%E6%B3%A8%E5%A1%91%E6%9C%BA&zhida_source=entity)The collection, control, storage, statistics, and uploading of data related to CNC machine tools.
## **1.1** **Supported Devices**
TheData Acquisitionsystem collects data by connecting to devices, and supports connection methods such as serial port (232, 485), TCP client, TCP server, UDP, etc. TheData Acquisitionsystem supports a wide range of device communications, including Modbus[OPC-UA](https://zhida.zhihu.com/search?content_id=269875758&content_type=Article&match_order=1&q=OPC-UA&zhida_source=entity)Wait.
## **1.2** **noun explanation**
Equipment (collected device)
The software collects data from a device, which needs to have a communication interface and use a specific communication Protocol for communication. The device can be a detection instrument, a small instrument, aSensor, or even a standalone PLC.
factor
Factors are attributes of devices, including measurement values, status, control units, etc. For example, for an air conditioner, the following attributes can be referred to as a factor:
link
The physical connection method and basic communication between theProtocolsystem and devices. For example, a serial communication cable can be used, using RS232 or RS485 interfaces; Or use Ethernet RJ45 interface and TCP/IP communication Protocol. Support multiple devices to share a link.
drive
The parsing program for the communication between theProtocolsystem and devices. On the one hand, it parses the data collected from the device into the data format used by the collection system, and on the other hand, it parses the commands sent by the collection system to the device into the data format understood by the device.
## **1.1** **Usage process**
The software usage process is shown in the following figure:
**4** **collection configuration**
## **4.1** **Drive management**
The driver management page is shown in the following figure:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/1yn5zfo5h0z5z60peklf.jpg)
You can download the corresponding device driver from the official website, upload it to the system, and it can be used by the device.
## **4.2** **Link configuration**
The link configuration page is shown in the following figure:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/289l9h4pnzx8cu2fv2zq.jpg)
The currently supported links and the required configurations are shown in the table below:
|  |  |  |
| --- | --- | --- |
| Link type | Content to be configured | Remark |
| TCP Client | Server IP and port |  |
| serial port | Serial port number, baud rate, checksum, data bit, stop bit |  |
| TCP server | Server IP and port |  |
| UDP | Remote IP, port, local IP, port |  |
| OPC-UA client | Server URL, username, password | Only supports two login methods: anonymous and username. If the user is empty, it is considered anonymous |
| no transmission | Nothing | Used for virtual devices |
**4.3 Equipment Configuration**
The device configuration page is shown in the following figure:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/3hkn6aw4kafijhfdb6l1.jpg)
|  |  |
| --- | --- |
| Configuration content | explanation |
| Using Drivers | The driver used by the device can be selected from the driver management page. |
| Using links | The link used by the device can be selected from the link configuration page. |
| Sending waiting time | The frequency at which the system sends commands to devices during data collection. Unit milliseconds. |
| Receiving waiting time | The expected time for the device to respond normally after the system sends a command to the device. Unit milliseconds. |
| Stop collecting error numbers | In a send receive loop, if an error occurs, the number of errors is incremented by 1. When the number of errors exceeds this value, wait for a period of time before starting the collection. |
| Stop collecting time | The time, in milliseconds, for stopping data collection after exceeding the error count limit. |
The device uses different drivers, and the configuration information may vary. But some information needs to be configured for all devices, as shown in the table below:
The device contains factors, and the factor configuration page is shown in the following figure:
Similarly, for devices with different drivers, the information required to configure factors also varies. The two common attributes are described as follows: