<https://zhuanlan.zhihu.com/p/1976675934443697436>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
**Format analysis of sending control messages:**
88 16 20 CC 00 10 66 10 01 **01** 00 00 00
Send message header function code device ID \* 2, issue status device ID, switch serial number **switch status** ending
The meaning of this message is: Network management issues control[CANID](https://zhida.zhihu.com/search?content_id=266829206&content_type=Article&match_order=1&q=CANID&zhida_source=entity)The 10 01 relay for the 10 66 device is on
**Reply message analysis:**
85 16 20 CC 01 10 66 10 01 00 00 00 00 85 19 FF FE 01 10 66 10 01 01 FF FF FF
85: Receive fixed message headers, where 85 represents message reception and 88 represents message transmission.
16: Function code, where 16 represents status control and 18 represents status reading.
20 CC: Select the CANID \* 2 of the device, where the CANID is in hexadecimal format
01:01 represents the device reporting data, and if it is 00, it represents issuing data.
10 66: Select the CANID of the device.
10 01: Specify the serial number of the switch/scene.
00: "00" represents the status "closed", if it is "01", it represents "open".
00 00 00: Fixed message ending format.
85: The second frame of the message begins (message header format)
19 FF FE: System Broadcast Address
Other: The format is as described above, and the second frame message is received. The final message uses FF FF FF.
**Format parsing of sending and reading class messages:**
88 18 20 CC 00 10 66 10 01 FF 00 00 00
Send message header function code, device ID \* 2, issue status, device ID, switch number, any ending
The meaning of this message is: Gateway issues a message to read the status of the 10 01 relay of the device with CANID 1066
**Reply message analysis:**
85 18 20 CC 01 10 66 10 01 **00** 00 00 00
Receive message header function code, device ID \* 2, report status, device ID, switch number **Close** ending
As shown in the following figure, the blue font represents the sending message, and the green font represents the receiving message
|  |
| --- |
|  |
|  |  |
First frame: Send a command to read the relay, and the other party reports that the relay status is "turned on"
Second frame: Sent the command to turn on the relay, but the current command execution failed, and the status before and after the reply command was "00";
Third frame: Manually send the enable command again. Execution succeeded, device status changed from "00" to "01".
Frame 4: Send the enable command again. If it is already in the enabled state, reply that it has been enabled
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/rue4adjgwoqiq2a8cafv.jpg)
**Search function message format analysis:**
**send out:**88 0D FF FF FE E0 76 42 F9 00 00 00 00
**return**87 0D C0 EC 85 **FC 92 B2** F9 **10 66** 80 00
The highlighted messages are in a fixed format,**Blue message**Representing the searched devices**[MAC address](https://zhida.zhihu.com/search?content_id=266829206&content_type=Article&match_order=1&q=MAC%E5%9C%B0%E5%9D%80&zhida_source=entity)**，**Green CANID**
**In this example, the converter device performs** **[TCP Server](https://zhida.zhihu.com/search?content_id=266829206&content_type=Article&match_order=1&q=TCP+Server&zhida_source=entity)Debugging the TCP client in the computer debugging window;**
**The eight switch circuit numbers are: 0x1001, 0x1101, 0x1201... 0x1701, totaling eight switches.**