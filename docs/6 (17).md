<https://zhuanlan.zhihu.com/p/2027088784206906291>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
7. Data format
The default data message is[JSON format](https://zhida.zhihu.com/search?content_id=273024646&content_type=Article&match_order=1&q=json%E6%A0%BC%E5%BC%8F&zhida_source=entity):
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/y20c2m3gtx6debk82jzj.jpg)
The data item name and format can be customized and remotely modified (this feature is currently not open to users, if you contact our customer service, we can help you modify it remotely);
\*Attention: The data items that can be collected are related to the on-site State Grid electricity meter models. Some State Grid electricity meters are unable to collect electricity data, and some State Grid electricity meters are unable to replicate rate electricity data
ID ":" 220120020014 ",//12 digit device number, default corresponding to the 1'datetime": "1698731471" on the label in front of the device//[Unix timestamp](https://zhida.zhihu.com/search?content_id=273024646&content_type=Article&match_order=1&q=Unix%E6%97%B6%E9%97%B4%E6%88%B3&zhida_source=entity)(Optional other time formats);
"Ua”:"222.29",
//A-phase voltage (unit: V);
"Ub":"226.82",
"Uc”:"226.72",
"a":"O.1",
"lb":"O.12",
"lc”:"O.15”
"Pa":"0.02"
"Pb":"0.02"
"Pc":"0.03"
"Pall":"0.07"
"PFa”:"O.998"
"PFb”:”O.998”
"PFc”:"O.999”
"PFs”:"O.999”
eng”:"137.54"engPT": "21.65","engPP":"45.77","engPF":"O",
"engPV": "70.12","engQ”:"27508","engQT":"21.65","engQP":"45.77","engQF”:"O”,"engQV":"70.12","engPoQ":"118",
"engNeQ”:"10338",
//B-phase voltage (unit: V);
//C-phase voltage (unit: V);
//A-phase current (unit: A);
//B-phase current (unit: A);
//C-phase current (unit: A);
//A-phase active power (unit: kW);
//B-phase active power (unit: kW);
//C-phase active power (unit: kW);
//Total active power (unit: kW);
//Phase A[power factor](https://zhida.zhihu.com/search?content_id=273024646&content_type=Article&match_order=1&q=%E5%8A%9F%E7%8E%87%E5%9B%A0%E6%95%B0&zhida_source=entity);
//B-phase power factor;
//C-phase power factor;
//Total power factor;
//[Positive active energy](https://zhida.zhihu.com/search?content_id=273024646&content_type=Article&match_order=1&q=%E6%AD%A3%E5%90%91%E6%9C%89%E5%8A%9F%E7%94%B5%E8%83%BD&zhida_source=entity)(Unit: kWh);
//Positive current peak energy (unit: kWh);
//Positive current peak energy (unit: kWh);
//Positive current flat energy (unit: kWh);
//Positive current valley electricity (unit: kWh);
//[Reverse active energy](https://zhida.zhihu.com/search?content_id=273024646&content_type=Article&match_order=1&q=%E5%8F%8D%E5%90%91%E6%9C%89%E5%8A%9F%E7%94%B5%E8%83%BD&zhida_source=entity)(Unit: kWh);
//Reverse current peak energy (unit: kWh);
//Reverse current peak energy (unit: kWh);
//Reverse current flat energy (unit: kWh);
//Reverse current valley energy (unit: kWh);
//Positive reactive energy (unit: kVarh);
//Reverse reactive energy (unit: kVarh);
{
"eng": 480587.25,
"Uab": 397.99,
"engNeQ": 0.56,
"engPoQ": 107571.69,
"PFb": 0.977,
"Hz": 50.07,
"PFs": 0.987,
"Sb": 13.72,
"Uca": 396.08,
"engNeP": 2514.43,
"PFa": 0.992,
"PFc": 0.989,
"Qs": 7.43,
"Sc": 18.36,
"Ss": 47.77,
"Sa": 15.71,
"Ic": 83.24,
"Ib": 61.92,
"Ia": 69.84,
"Qc": 2.61,
"id": "250603320002",
"Qb": 2.89,
"Pall": 47.19,
"Pa": 15.59,
"datetime": "260312000300",
"Pc": 18.18,
"Qa": 1.92,
"Ubc": 399.96,
"Uc": 229.27,
"Ub": 229.73,
"Ua": 230.39,
"Pb": 13.42
}