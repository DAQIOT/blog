<https://zhuanlan.zhihu.com/p/1986761949271316455>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
As a professional provider of IoT, Data Acquisition, solution, and an expert (professional account) in the industrial Data Acquisition field, Daq IoT, the editor of IoT, would like to introduce the following content and sincerely welcome everyone to discuss and exchange ideas.
As a professional internet of things data acquisition solutions provider, industrial data acquisition experts (professional households), digital internet of things editor daq - iot here to do the following introduction, and sincerely welcome everyone to discuss and exchange. Author: Wireless Sensor Link:<https://zhuanlan.zhihu.com/p/1984577892831757501> Source: Zhihu Copyright belongs to the author. For commercial reprints, please contact the author for authorization. For non-commercial reprints, please indicate the source.
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/237sypayb68bbtw29lui.jpg)
——————————————————————————————————————————————
in [Modbus standard Protocol](https://zhida.zhihu.com/search?content_id=268059406&content_type=Article&match_order=1&q=Modbus+%E6%A0%87%E5%87%86%E5%8D%8F%E8%AE%AE&zhida_source=entity)The operation of reading and writing single or multiple registers is a standard function, not a custom function, and these functions are defined by Modbus Protocol[function code](https://zhida.zhihu.com/search?content_id=268059406&content_type=Article&match_order=1&q=%E5%8A%9F%E8%83%BD%E7%A0%81&zhida_source=entity)To identify and apply to different types of registers.
1. Read register operation (standard function)
Modbus defines specialized function codes for reading single or multiple registers, with core types divided into two categories:
[holding register](https://zhida.zhihu.com/search?content_id=268059406&content_type=Article&match_order=1&q=%E4%BF%9D%E6%8C%81%E5%AF%84%E5%AD%98%E5%99%A8&zhida_source=entity)(Holding Register): readable and writable, with an address range typically ranging from 40001 to 49999
Read single/multiple holding registers: Function code 03 (Read Holding registers)
This is the most commonly used function code, which supports reading 1-125 consecutive hold registers or only reading one (i.e. a single register), fully compliant with the standard.
[input register](https://zhida.zhihu.com/search?content_id=268059406&content_type=Article&match_order=1&q=%E8%BE%93%E5%85%A5%E5%AF%84%E5%AD%98%E5%99%A8&zhida_source=entity)(Input Register): Read only, used to store input data such as Sensor collection, address range 30001~39999
Read single/multiple input registers: Function code 04 (Read Input Register)
It also supports reading 1-125 consecutive input registers, and a single read is also standard usage.
2. Write register operation (standard function)
The standard function code for writing operations also distinguishes between single and multiple registers:
Function code function description applicable scenarios
06 (Preset Single Register) Write a single hold register to modify the value of only one hold register
Write multiple hold registers to batch modify the values of 1-123 consecutive hold registers
3. Definition of custom functions
Only operations that meet the following conditions are considered custom functions:
Implement read-write logic using custom function code segments (function codes 65-72, 100-110) reserved by Modbus Protocol;
Read and write custom storage areas outside of standard register types (such as hold registers and input registers);
Tampering with the communication logic of standard function codes (such as implementing write operations using function code 03).
summary
Read and write single/multiple hold registers and input registers → belong to Modbus standard functions, corresponding to function codes 03, 04, 06, and 16.
Read and write operations for non-standard function codes and non-standard storage areas → belong to custom functions.
|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| function code | Function Name | Operation Type | Applicable register types | Register address range | Operation quantity limit | Core Purpose |
| 1 | read[Coil status](https://zhida.zhihu.com/search?content_id=268059406&content_type=Article&match_order=1&q=%E7%BA%BF%E5%9C%88%E7%8A%B6%E6%80%81&zhida_source=entity) | read | Coil | 00001~09999 | 1~2000 continuous coils | Obtain discrete output states (such as switch values) |
| 2 | read[Discrete input state](https://zhida.zhihu.com/search?content_id=268059406&content_type=Article&match_order=1&q=%E7%A6%BB%E6%95%A3%E8%BE%93%E5%85%A5%E7%8A%B6%E6%80%81&zhida_source=entity) | read | Discrete Input | 10001~19999 | 1~2000 continuous discrete inputs | Obtain discrete input states (such as the Sensor switch) |
| 3 | Read and hold register | read | Holding Register | 40001~49999 | 1-125 consecutive registers | Read readable and writable numerical data (such as set values, cumulative values) |
| 4 | Read input register | read | Input Register | 30001~39999 | 1-125 consecutive registers | Read read-only collected data (such as temperature, pressure) |
| 5 | Write a single coil | Write | Coil | 00001~09999 | 1 coil | Control a single switch output (such as relay on/off) |
| 6 | Write a single hold register | Write | Holding Register | 40001~49999 | 1 register | Modify a single set value (such as target temperature, frequency) |
| 15 | Write multiple coils | Write | Coil | 00001~09999 | 1~1968 continuous coils | Batch control switch output |
| 16 | Write multiple hold registers | Write | Holding Register | 40001~49999 | 1-123 consecutive registers | Batch modify multiple setting parameters |
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/3r31uc0quae2d9rlir6k.jpg)