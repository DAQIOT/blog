<https://zhuanlan.zhihu.com/p/1915809547248973206>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/gznp4ejxndn1zadjlt4a.jpg)
[Collection Plan]
Our company's software system or collection Gateway supports storing the fire alarm Data Acquisition in a designated database or uploading it to a third-party software system, the fire IoT cloud platform.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/x3no21tzunaso9cb54bo.jpg)
Alarm host Data Acquisition communication debugging site
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/frmklqsrk1n2tmxawob9.jpg)![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/2tvup52w13rj25jnnqnc.jpg)
1、 Functional features:
1、CAN0、[CAN1](https://zhida.zhihu.com/search?content_id=258873550&content_type=Article&match_order=1&q=CAN1&zhida_source=entity)、 RS232, RS485 four communication interfaces
2. 8 digits[DIP switch](https://zhida.zhihu.com/search?content_id=258873550&content_type=Article&match_order=1&q=%E6%8B%A8%E7%A0%81%E5%BC%80%E5%85%B3&zhida_source=entity)(Not yet used)
3. Convert the external CAN information of the fire controller to RS232 or RS485 Protocol and output it to other controllers or data centers
4. Default input is CAN0, RS232 output (baud rate 9600), forwards all information, controller number 0 (i.e. receives information from any controller)
2、 Configuration options:
1. According to actual needs, it can be configured through PC configuration tools[ConfigSoftware\_JBF293K](https://zhida.zhihu.com/search?content_id=258873550&content_type=Article&match_order=1&q=ConfigSoftware_JBF293K&zhida_source=entity). exe configure the interface card as follows:
2. Input interface: Use CAN0 or CAN1
3. Output interface: Use RS232 or RS485
4. Serial port baud rate: supports four options: 2400, 4800, 9600, 115200
5. Forwarding information: all information or only forwarding fire alarm information
6. Controller number: 0~99 can be set. When set to 0, the interface card receives CAN messages from any controller number. When set to non-zero, the interface card only receives CAN messages from the corresponding controller number
3、 Indicator lights:
1. CANO: When sending out a frame of data, it will flash once, with a normal interval of 500ms alternately on and off, and the fault will always be off; Yellow constant light indicates that CAN message has not been received for 15 seconds
2. Communication: Sending a frame of data will flash once
3. CAN1: When a frame of data is sent, it will flash once. A: 485: When a frame of data is sent, it will flash once; B: 485 receives a frame of data and flashes once