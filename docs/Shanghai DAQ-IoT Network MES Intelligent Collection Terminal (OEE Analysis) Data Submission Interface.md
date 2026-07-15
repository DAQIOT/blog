<https://zhuanlan.zhihu.com/p/2057895765243172435>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
As a professional provider ofIoT,Data Acquisition, andsolution,[Data Collection IoT](https://zhida.zhihu.com/search?content_id=278518184&content_type=Article&match_order=1&q=%E6%95%B0%E9%87%87%E7%89%A9%E8%81%94%E7%BD%91&zhida_source=entity)The editor daq iot would like to introduce the following content here, and sincerely welcome everyone to discuss and exchange ideas. As a professional provider of IoT data collection solutions, daq-iot, the data acquisition and IoT editor, will introduce the following content here and sincerely welcome everyone to discuss and communicate.
---
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/oojtxnbspnw8g4so5g72.jpg)
[MES intelligent collection terminal](https://zhida.zhihu.com/search?content_id=278518184&content_type=Article&match_order=1&q=MES%E6%99%BA%E8%83%BD%E9%87%87%E9%9B%86%E7%BB%88%E7%AB%AF&zhida_source=entity)(OEE) Data Submission Interface
1、 Data acquisition IoT inbound interface
1. Interface usage scenario: DAQ-IoT Intelligent Collection Terminal (OEE) data submission interface.
2 Interface information
2.1 Server Address
2.1.1 Testing System:[http://www.daq-iot.com/OrBitWCFServiceR16/OrBitWebAPI.ashx?](https://link.zhihu.com/?target=http%3A//www.daq-iot.com)
2.1.2 Formal System:[http://www.daq-iot.com/OrBitWCFServiceR16/OrBitWebAPI.ashx?](https://link.zhihu.com/?target=http%3A//www.daq-iot.com/OrBitWCFServiceR16/OrBitWebAPI.ashx%3F)
2.2 Interface Name: QrZncjzd
2.3 UserTicket: The UserTicket user encrypted token string needs to be included every time the API interface is actively called. The UserTicket user encryption token character is exchanged with UserName and UserPassword as parameters, provided by MES. The method to obtain encrypted tokens is as follows:
2.4 Example of obtaining serTicket:[http://www.daq-iot.com/OrBitWCFServiceR16/OrBitWebAPI.ashx?UserName=Web001&UserPassword=123](https://link.zhihu.com/?target=http%3A//192.168.7.123/OrBitWCFServiceR16/OrBitWebAPI.ashx%3FUserName%3DWeb001%26UserPassword%3D123)
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/cva5stxm6fm704wbw05z.jpg)
2.5 JSON Field Definition
{
"ParamA": "10226911111111111111111",--ID
"ParamB": "10226911111111111111111", --Current
ParamC ":" 10226911111111111111111111 "- Time
}
Call Example[http://192.168.7.123/OrBitWCFServiceR16/OrBitWebAPI.ashx?UserTicket=AB74FF7D1C9D29C133707078C840C4D6CA381749B4C368EC26C2610F1BD9ABD24BE4C007A5B19F46BC13B51830B7503CDD4363A65D494736625C4FC9AC720B720CB85869DB487313BCA792E3D36349653E91CF72045C5984&API=QrZncjzd&UserParameter=](https://link.zhihu.com/?target=http%3A//192.168.7.123/OrBitWCFServiceR16/OrBitWebAPI.ashx%3FUserTicket%3DAB74FF7D1C9D29C133707078C840C4D6CA381749B4C368EC26C2610F1BD9ABD24BE4C007A5B19F46BC13B51830B7503CDD4363A65D494736625C4FC9AC720B720CB85869DB487313BCA792E3D36349653E91CF72045C5984%26API%3DQrZncjzd%26UserParameter%3D){"ParamA":"10226911111111111111111","ParamB":"10226911111111111111111","ParamC":"10226911111111111111111"}&UserData=&OutType=
2.5.1 Return Field Definition:
Return - Interface execution status, 0 successful; -1 Failed
ReturnMessage - Interface execution returns information
2.5.2 Return Example
{
"SQLDataSet": [
{
"Return": 1,
ReturnMessage ":" The current of device 【】 at '' is' ', and the data has been saved successfully! "
}
]
}