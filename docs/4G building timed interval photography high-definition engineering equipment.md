<https://zhuanlan.zhihu.com/p/1966907005508752622>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
As a professional provider of IoT, Data Acquisition, solution, and an expert (professional account) in the industrial Data Acquisition field, Daq IoT, the editor of IoT, would like to introduce the following content and sincerely welcome everyone to discuss and exchange ideas.
As a professional internet of things data acquisition solutions provider, industrial data acquisition experts (professional households), digital internet of things editor daq - iot here to do the following introduction, and sincerely welcome everyone to discuss and exchange.
——————————————————————————
Based on mel Protocol[Makino Machine Tool](https://zhida.zhihu.com/search?content_id=265723908&content_type=Article&match_order=1&q=%E7%89%A7%E9%87%8E%E6%9C%BA%E5%BA%8A&zhida_source=entity)Run monitoring software
User Manual
### Software Function Overview
This software can collect and monitor the operational status data of the Real-time Makino machine tool, such as coordinate offset data, machine running time, etc., enabling personnel to remotely view equipment status in the office without having to go to the workshop site. Operating environment requirements: Windows 10 operating system.
### Software Composition
The software consists of collection services and monitoring programs, as follows:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/p4x4sxqy3hnzxnugyain.jpg)
GxSoftAgent.exe, Monitoring software, user initiates collection service.
[MelTool.exe](https://zhida.zhihu.com/search?content_id=265723908&content_type=Article&match_order=1&q=MelTool.exe&zhida_source=entity), Mel acquisition program, used to collect MEL device data.
### Use of monitoring software
### Step 1: Click on the MelTool.exe file and run the startup software to collect data from MEL devices. The details are shown in the following diagram:
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/adzmte9bpo5tnv92bvku.jpg)
**Step 2:**Enter the IP address of the monitored device in the address input box, for example: 192.168.2.12. The specific IP viewing method is shown in the following figure. Enter the open communication port of the machine tool in the port, which defaults to 80
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/solgdwu0jl32tdlw1l3n.jpg)
Machine IP viewing interface
**Step 3:**After entering the correct IP address and port, click the connect button to view the corresponding specific data.
View data example:
Click the RLMelFunc button to view XX data
Click the RLMelMacroAPI button to view XX data
Click the RLMelMacroAPI button to view XX data
Click the RLMelCondAPI button to view XX data
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/dgf9bc1vevx60qyh5its.jpg)
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| functional module | Button/Control | Usage Instructions | Usage/Parameter Description | Common uses |
| Connecting Fundamentals | Address/Port | Establish communication with the machine tool | Fill in the machine IP address (such as 192.168.21.101) and port 5001（[Mitsubishi MC Protocol](https://zhida.zhihu.com/search?content_id=265723908&content_type=Article&match_order=1&q=%E4%B8%89%E8%8F%B1+MC+%E5%8D%8F%E8%AE%AE&zhida_source=entity)Default) | The premise of all operations |
|  | Connect/Disconnect | Establish/Disconnect TCP Connection | After filling in the IP and port, click "Connect". The log shows ret: 1 and dwRet: 0, indicating success | communication control |
| Machine Tool Status | RLMelfunc | Obtain basic operating information of the machine tool | Just click directly | View the running/stopping status, emergency stop status, and mode |
|  | RLAImApi | Get current alarm information | Just click directly | Troubleshooting machine tool alarm faults |
|  | ReqMode | Obtain the current working mode of the machine tool | Just click directly | Confirm that the machine tool is in automatic/manual/MDI mode |
| coordinate data | setPos | Obtain the coordinate position of the machine tool | Select the coordinate type from the drop-down menu (EDM.POS-MACHINE mechanical coordinates/EDM.POS\_SWORK workpiece coordinates), and then click the button | Real-time Monitor X/Y/Z axis positions |
| NC program | PrgNo input box | Specify NC program number | Enter the program number that exists in the machine tool (such as 1) | Used in conjunction with program read and write functions |
|  | RLPrgedApi | Read NC program list/content | After entering the program number, click | View the program content in the machine tool |
|  | RLPrgexeApi | Read the currently executing program | Just click directly | Monitor the running program number and line number |
|  | ReqSelPrgNo | Select the NC program to be executed | After entering the program number, click | Switch the program to be run |
|  | ReqNcStart | Start NC program | The machine tool needs to be in "automatic+remote mode" and the program has been selected | Remote start processing |
|  | ReqNcStop | Pause NC program | Just click directly | Urgently suspend processing |
|  | ReqNcReset | Reset NC program | Just click directly | Reset when the program ends or encounters an exception |
| Tool compensation | ToolOffSet | Specify tool compensation number | Enter the tool number (e.g. 1) | Used in conjunction with reading tool parameters |
|  | ToolVal | Specify the type of tool parameter | Input parameter type value (e.g. 6 for length compensation) | Used in conjunction with reading tool parameters |
|  | setTool | Read the tool compensation value | After filling in ToolOffSet and ToolVal, click | View tool length/radius compensation |
| IO signal | RLIoApi | Read the IO signal status of the machine tool | Just click directly | Monitoring limit, fixture, spindle and other signals |
| other | RLCondApi | Obtain machine tool condition information | Just click directly | Check spindle speed, feed rate, etc |
|  | RLMacroApi | Read/execute macro variables | Need to specify macro variable number | Read macro program variable values |
