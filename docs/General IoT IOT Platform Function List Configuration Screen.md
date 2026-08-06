<https://zhuanlan.zhihu.com/p/1973788430191309294>
As a professional provider of IoT data acquisition solutions and an expert in industrial IoT data acquisition, the editor of Shanghai Data Acquisition IOT Technology Co., Ltd， (daq-iot) hereby presents the following introduction, and sincerely welcomes discussions and exchanges.
Supported Communication Interfaces: CAN, RS485, Mbus, 4–20mA, Profibus, CC-Link, HART, digital I/O, etc.
Industrial Protocols: Modbus RTU/TCP, HJ212, IEC104, DLT645, DLMS, IEC61850, MQTT, etc.
Mail:export@daq-iot.com
![图片](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/9t6wgiqekqeli9dqchxv.jpg)
Device Management Protocol Management "Customize Protocol packages according to platform rules,
It can automatically upload the Protocol package, and add, delete, modify, and query the Protocol package. At present, the system platform has[modbus rtu](https://zhida.zhihu.com/search?content_id=266499225&content_type=Article&match_order=1&q=modbus+rtu&zhida_source=entity) tcp、json、[mqtt](https://zhida.zhihu.com/search?content_id=266499225&content_type=Article&match_order=1&q=mqtt&zhida_source=entity)、 SIP, SDP, RTP and other Protocol packages can be customized according to customer requirements in the later stage“
Product management "custom device parameters and alarm parameter configuration,
Product classification: Create, modify, delete product classification names, order, and notes, and select products for classification
Product List: Query, modify, add, and delete all products under the tenant, searching and querying by product name, category, status, etc
Basic Product Information: Product Name, Product Classification, Communication Protocol, Device Type, Transmission Protocol, Networking Method, Remarks, Enabling Authorization, Authentication Method, Product Number, Product Key, Product Image, MQTT Account, MQTT Password, and Other Information for Addition, Modification, Deletion, and Query
Product Model: Query the model list created by the product, import universal models, model names, model identifiers, model sorting, model categories (attributes: receive device data; functions: control of devices; events: listening events for device data), model characteristics (chart display: display of historical data on the chart; Real-time Monitoring: can obtain the Real-time data query of the current model by sending instructions through the platform; Read only data: Select the data permission of the current model; Historical storage: stores model data and supports time range lookup), data type (integer, decimal, boolean, enumeration, string, array, object), value range (minimum and maximum), unit, step size
Firmware Management: Firmware Name, Firmware Version, Latest Firmware Selection (Only one latest Firmware can be selected from the selected products), Firmware Upload (upload by selecting local files), Firmware Description
Device authorization: Search and query authorization codes for device name, authorization code name, and status, batch add and delete device authorization codes, and select the current authorization code to bind multiple devices
Alarm configuration: Alarm name, message notification (can choose device alarm, SMS notification, mobile push), alarm level (reminder notification, minor issue, serious alarm), note information, trigger (device trigger: select the model of the attribute or function created by the product, and set the judgment conditions of the model as the triggering conditions; timed trigger: trigger according to the time from Monday to Sunday, or can be customized)[CRON expression](https://zhida.zhihu.com/search?content_id=266499225&content_type=Article&match_order=1&q=CRON%E8%A1%A8%E8%BE%BE%E5%BC%8F&zhida_source=entity)）Execute actions (select the model of attributes or functions created by the product, and set the state or data of the model)“
Device linkage "can create device linkage templates,
Template name, template status, comments, device selection, trigger (device trigger: select the model of the attribute or function created by the product, and set the judgment conditions of the model as the triggering conditions; timed trigger: trigger according to the time from Monday to Sunday, or customize CRON expression), execute action (select the model of the attribute or function created by the product, and set the state or data of the model)“
Device simulation "can simulate devices sending and receiving instructions
Select the name and number of the device, set whether it is in cloud polling status, choose whether to report attributes or issue services, and simulate the display of device sending instructions and receiving data on the page“
Device Configuration "Device Grouping: Create, modify, delete device classification names, order, and notes, and select devices for classification
Device List: Display all devices under the tenant and search and query for device names, device numbers, device statuses, and device groups
Basic device information: device name, product, device number, Firmware version, simulated device, device shadow, disabled device, remark information, positioning method (automatic positioning, device positioning, custom location), device longitude, device dimension, location address, network access address, activation time, device signal, device status, and other information maintenance
Running status: Display the device's functional control buttons or input boxes, and show the device's running status data for functions and attributes
Device timing: timing name, execution time, select week, cron expression, timing status (normal, paused), execution action (select the model of the device's properties or functions, and set the model's status or data)
Device user: Query the user ID, user name, mobile phone number, user type, sharing time, notes, and operation information of all tenants under the device, and add device tenants by selecting the internal user mobile phone number in the system
Event log: Log query of the device's online, offline, alarm, function call, upgrade and other information
Real-time Monitoring: Select monitoring intervals and monitoring bases to perform Real-time data monitoring and chart display on the device's point or parameter models
Instruction log: Query the log of device instructions (such as service issuance, attribute retrieval, OTA upgrade, etc.)
Monitoring statistics: Select a time range and the maximum number of detections to query the historical data of the device
Equipment alarm: Based on the alarm configuration of the product to which the device belongs, display the device alarm data that meets the trigger requirements (alarm name, device number, device name, alarm level, alarm time, data, processing status, and operation)“
Device Management Video Configuration“[Streaming media configuration](https://zhida.zhihu.com/search?content_id=266499225&content_type=Article&match_order=1&q=%E6%B5%81%E5%AA%92%E4%BD%93%E9%85%8D%E7%BD%AE&zhida_source=entity)Enable switch, play Protocol (http, https, ws, rtmp, rtsp), streaming media key, rtmp port, server IP, ws port, rtp port, http port, rsp port, server domain name and other information configuration
Channel management: Configure channels based on administrative regions, equipment types, channel types, products, channel quantities, and other information, and batch add and delete channels. Display channels and search and query device IDs, channel IDs, statuses, etc“
[System Administration](https://zhida.zhihu.com/search?content_id=266499225&content_type=Article&match_order=1&q=%E7%B3%BB%E7%BB%9F%E7%AE%A1%E7%90%86&zhida_source=entity) System Management "User Management: Select the company and department to create users (user nickname, department, phone number, email, user name: login name, user password, user gender, status: normal or disabled, position, role, notes), select the department to display all users under the department, and search for user name, status, and other information
Role management: role names, permission characters, role order, status: normal or disabled, menu permissions (check all menus, buttons, and pages on the PC side), comments
Menu management: Select the parent directory to create a menu (menu type: directory or menu or button, menu icon, menu name, display sorting, external link or not, routing address, display status: displayed or hidden, menu status: normal or disabled)
Department management: adding, modifying, deleting, and querying the tree structure of the company and departments
Job management: maintenance of job name, job code, job order, job status, notes and other information (adding, modifying, deleting, querying)
Dictionary management: Maintaining all data dictionaries on the platform, including creating parent data dictionaries and selecting child data dictionaries
Parameter settings: Configure common parameters on the system platform (main framework page - default skin style name, user management - initial account password, main framework page - sidebar theme, account self-service - whether to enable user registration function, account self-service - whether to enable user registration function)
Notice and Announcement: Maintain the information of announcements on the system platform, including the title, category, status, and content (embedded with standard text controls) of the announcements
Log management: querying login and operation logs of users using the platform
News classification: By categorizing news
News and Information: Title, Category, Author, Image, Abstract, Toping, Carousel, Release, Content Information Maintenance
Building area: Information maintenance and binding equipment for buildings, floors, workshops, or areas“
System management system monitoring "online users: query the information of users who are still online in the system at the moment (session number, login name, department name, host, login location, browser, operating system, login time, operation: forced logout)
Scheduled tasks: task name, task grouping, calling method (internal system method), cron expression, execution strategy (immediate execution, execute once, abandon execution), concurrency (allowed, prohibited), status (normal, paused)
Data monitoring: Log in through the internally set username and password to query all data calls and displays within the system
Service monitoring: Monitor the CPU (attributes, number of cores, user usage, system usage, current idle rate), memory (attributes, total memory, used memory, remaining memory, usage rate), server information (server name, server IP, operating system, system architecture), Java virtual machine, disk status of the system
Cache monitoring: Monitoring of various non relational databases in the system (version, operating mode, ports, number of clients, runtime, memory usage, CPU usage, memory configuration, memory information, command information, and statistical percentage)
Cache List: Display the cached list and cached data on the system platform, and manually delete cached data“
System Management System Tool "Form Construction: You can customize various types of components and styles to create forms (component styles, component properties, form properties)
Code generation: Select tables from the internal database of the system to generate corresponding code
System interface: Query all backend interfaces within the system and manually call the interfaces“
[Configuration Management](https://zhida.zhihu.com/search?content_id=266499225&content_type=Article&match_order=1&q=%E7%BB%84%E6%80%81%E7%AE%A1%E7%90%86&zhida_source=entity) Configuration Library Management "has nearly 30000 built-in configuration libraries
Library category: Customize library categories, classify configuration libraries by category
Library data: Built in nearly 30000 industrial configuration library data (industrial pumps, storage tanks, motors, power symbols, valves, reactors, fans, pipelines, boilers, heat exchange stations, mechanical equipment, buildings, instruments, etc.)
System Library: Yingshi Cloud Video, Live Streaming, Water Flow, Liquid Level, Text, Digital Display Value, Multi state Switch, 3D Scene, VR Scene, Report Data“
Configuration Editor "overall page: background name, resolution (small screen 960) ✖️ 600, small screen 1024 ✖️ 768, small screen 1280 ✖️ 1024, PC webpage 1366 ✖️ 768, PC webpage 1440 ✖️ 900, PC webpage 1920 ✖️ 960, PC webpage 1920 ✖️ 1080, 2k screen 2048 ✖️ 858, 2k screen 2048 ✖️ 1080, 4k screen 3840 ✖️ 2160, 4k screen 3656 ✖️ 2664, 4k screen 4096 ✖️ 3112, custom), background image (select computer file), drag and drop zoom (preview of configuration page can be zoomed and dragged after selection), view (25%, 50%, 75%, 100%, 125%, 150%, 175%, 200%, adaptive)
Edit page: fold, full screen, copy, delete, top, bottom, rotate, align, combine, lock, gallery, import, export, undo, restore, save, preview
Device binding: Multiple devices are bound to the current configuration page, automatically obtaining device properties and displaying or deleting devices bound to the configuration page
Component Style: Edit the configuration position and size data selected on the current page, component name, layer height, background color, transparency, border rounded corners, shadow length, shadow color, image path, filter rendering, component color, component hidden and visible
Data binding: Select the binding between the device model point parameters on the current page and the configuration, set the event for clicking on the configuration (operation variables: variable name, write value, prompt information; external link: configure the jump link path; configuration page: select the configuration page on the system and choose whether to open the current window or open a new window or pop up a small window), animation settings (development, rotation, flashing, sliding), fill color (custom fill color), set the configuration status of device online and offline alarms
Layer Canvas: Display, name, and sort all configurations on the editor page using layers
"
Chart Component Library "allows customization of charts on most markets, as well as customizable components with built-in modifications and displays
External chart library: It can display charts from other websites' echart and selectively import charts
Internal chart library: Import copied echart code and display the effect of the chart. You can also make modifications and preview in the imported echart code“
Chart Editor "Customize drag and drop chart position and style modification, customize API interface access
Overall page: Background name, resolution (small screen 960) ✖️ 600, small screen 1024 ✖️ 768, small screen 1280 ✖️ 1024, PC webpage 1366 ✖️ 768, PC webpage 1440 ✖️ 900, PC webpage 1920 ✖️ 960, PC webpage 1920 ✖️ 1080, 2k screen 2048 ✖️ 858, 2k screen 2048 ✖️ 1080, 4k screen 3840 ✖️ 2160, 4k screen 3656 ✖️ 2664, 4k screen 4096 ✖️ 3112, custom), background image (select computer file), drag and drop zoom (preview of configuration page can be zoomed and dragged after selection), view (25%, 50%, 75%, 100%, 125%, 150%, 175%, 200%, adaptive)
Edit page: fold, full screen, copy, delete, top, bottom, rotate, align, combine, lock, gallery, import, export, undo, restore, save, preview
Component Style: Edit the selected configuration position and size data, component name, scale interval, layer height, background color, transparency, border corner, shadow length, shadow color, image path, filter rendering, component color, component display/hide, code view, chart refresh time on the current page
Data binding: Request address (get, post, put request methods; Configure parameters such as HTTP interface path, request interval (custom second, minute, and hour dimensions), Params, Body, Header, etc“
3D Editor "allows customization of 3D models, materials, textures, audio, particles, videos, animations, and can also integrate tingjs, Threejs
Scenario: New, Save, Save As, Export, Publish
Objects: groups, basic geometries (faces, cubes, circles, cylinders, spheres, icosahedra, tires, knots, teapots, wine glasses, etc.), text (non scaled text, 3D text), curves (line segments, quadratic Bezier curves, cubic Bezier curves, elliptic curves, CatmullRom curves), annotations, cameras (orthogonal cameras, perspective cameras), helpers, sprites
Light sources: ambient light, parallel light, point light, spotlight, hemispherical light, rectangular light, point light helper, hemispherical light helper, rectangular light helper
Resources: Exporting Geometry JSON Files, Exporting Object JSON Files, Exporting Collda Files, Exporting DRACO Files, Exporting glft Files, Exporting obj Files, Exporting ply Files, Exporting STL Files
Components: Background music, particle emitter, sky, flames, water, smoke, cloth, Berlin terrain, sky ball
System: Organizational structure management, user management, role management, permission management, system settings, system reset
Play: Play, Full Screen Play, New Window Play
Tools: Texture Generator, Font Manager, Font Converter, Backup Database, Cleanup Scene, Plugin, Export Instance
Views: Resource Panel, Sidebar, Toolbar, Timeline Panel, Status Bar, Performance Detector, Grid, Perspective Helper, Physics Engine, Throwing Balls
Animation: animation layer, insert animation layer, delete animation layer, merge animation layer, start animation
Video: Viewing exported animation effects
Log: Log recording of editor operations
Script: Script files for newly added types of languages“
3D Model Library "for resource management of 3D models or Digital Twin
Maintain information such as model name, model address (can be linked externally), thumbnail, model status (displayed, hidden), assigned user, organization name, etc. After creating a display, you can choose to display it in the 3D scene of the configuration editor“
[energy management](https://zhida.zhihu.com/search?content_id=266499225&content_type=Article&match_order=1&q=%E8%83%BD%E6%BA%90%E7%AE%A1%E7%90%86&zhida_source=entity) Energy configuration "equipment binding: Display the equipment under the floor and area (workshop) of the building, and select the point parameters or models of the equipment to bind with energy media (water: softened water, tap water; gas: natural gas, compressed air; electricity; cooling and heating), etc
Energy unit price setting: Set the unit price of each energy medium, and the energy unit price of electricity is set according to the peak and valley of each hour
Energy procurement: adding, modifying, deleting, and querying information such as energy name, procurement quantity, procurement unit, unit price, total price, building, region, supplier, responsible person, contact information, procurement time, etc., and selecting time search to query the procurement list
Energy equipment allocation: Select the energy consumption allocation ratio between energy consuming equipment and regions, with a maximum of 100%, and display the allocation of energy consumption for different equipment“
Energy Monitoring "Equipment Energy Monitoring: By searching and querying information such as building, floor, area, equipment name, energy consumption classification, equipment, time range, date dimension, etc., the total cost, electricity (peak and valley), water volume, gas volume, cooling and heating data in the equipment dimension can be obtained, and the query data can be exported. Click on the table header to display the data of the line and proportion chart
Regional energy monitoring: By searching and querying information such as building, floor, area, equipment name, energy consumption classification, equipment, time range, date dimension, etc., the total cost, electricity (peak and valley), water volume, gas volume, and cooling and heating data can be obtained in the regional dimension. The query data can also be exported, and the line and proportion chart data can be displayed by clicking on the table header
Building energy monitoring: Search and query the total cost, electricity consumption (peak and valley), water volume, gas volume, cooling and heating data in the building dimension through building, floor, area, equipment name, energy consumption classification, equipment, time range, date dimension and other information, and export the query data. Click on the table header to display the line and proportion chart data“
Energy Analysis "Energy Consumption Comparison: Display up to three line charts of data by selecting time range, analysis unit (cost, energy consumption), building, floor, area, energy consumption classification, and equipment
COP analysis: Select a time range to display the COP data line chart (HVAC specific: ratio of heat and cooling to electricity consumption)
Energy consumption statistics: Select building, floor, area, equipment, equipment name, analysis unit (cost, energy consumption), time range, and date dimensions to display line and proportion chart data
Energy Consumption Statistics Chart: Regional Total Cost Tree Chart (Day, Week, Month, Time Range), Energy Medium Total Cost Tree Chart (Day, Week, Month, Time Range), Time Period Total Electricity Cost Tree Chart (Day, Week, Month, Time Range), Regional Total Cost Proportion Chart (Day, Week, Month, Time Range), Energy Medium Total Cost Proportion Chart (Day, Week, Month, Time Range)“
Task Management "Task List for Work Order O&M: Query the inspection, maintenance, and repair quantity statistics of completed, unfinished, and ongoing tasks by today, month, year, or custom time. Query task data by task name, status, responsible person, type, and task time
Task Creation: Task Name, Task Type (Inspection, Maintenance, Repair), Responsible Person, Associated Equipment, Associated Spare Parts (Unique to Maintenance Tasks), Associated Route (Unique to Inspection Tasks), Task Time, Task Content
Task operation: The steps and personnel for viewing tasks, processing suggestions, task completion, editing tasks, task start, etc. will be retained on the task details page“
Route management "creates corresponding routes based on devices
Route name, route introduction, product selection, equipment selection (specific latitude and longitude of the equipment location, can be associated with multiple devices to determine the route)“
Spare parts and vulnerable parts "spare parts list: query spare parts data by spare parts number, name, time range (number, name, brand, model, specification, equipment, specification, quantity, last time of storage, last time of outbound)
Inventory of spare parts: quantity of inventory, associated task type and number
Vulnerable parts: maintenance of information such as number, name, specifications, distance from maintenance time, last maintenance time, last maintenance person, maintenance cycle, and quantity of spare parts“
Task record inspection, maintenance, repair and other task records and statistics
Update module
(Updated) "Rule Engine" rule script
Alert Configuration
alarm record
scene linkage
Rule Engine Visualization
"
Video Center "Split Screen Display
Channel management
Video configuration
Video management“
Device Management "Data Query
Private products
allocate equipment
Import devices
Recycling equipment“
Device O&M "Protocol Management
Collection point template
Notification channels
Notification Template
Notification record“
Netty manages MQTT clients, TCP clients (followed by COAP clients, UDP clients, etc.)
MQTT statistics“
Enterprise Management "Organizational Management: Custom Multi level Tenants
Customize homepage“
Configuration management allocates configurations
Demonstrate the built-in large screen display of the large screen device
Mobile Device Management "Device Grouping: Create, modify, delete device classification names, order, and comments, and select devices for classification
Device List: Display all devices under the tenant and search and query for device names, device numbers, device statuses, and device groups
Basic device information: device name, product, device number, Firmware version, simulated device, device shadow, disabled device, remark information, positioning method (automatic positioning, device positioning, custom position), device longitude
Equipment dimension, location, network access address, activation time, device signal, device status and other information maintenance
Running status: Display the device's functional control buttons or input boxes, and show the device's running status data for functions and attributes
Device timing: timing name, execution time, select week, cron expression, timing status (normal, paused), execution action (select the model of the device's properties or functions, and set the model's status or data)
Device user: Query the user ID, user name, mobile phone number, user type, sharing time, notes, and operation information of all tenants under the device, and add device tenants by selecting the internal user mobile phone number in the system
Event log: Log query of the device's online, offline, alarm, function call, upgrade and other information
Real-time Monitoring: Select monitoring intervals and monitoring bases to perform Real-time data monitoring and chart display on the device's point or parameter models
Instruction log: Query the log of device instructions (such as service issuance, attribute retrieval, OTA upgrade, etc.)
Monitoring statistics: Select a time range and the maximum number of detections to query the historical data of the device
Equipment alarm: Based on the alarm configuration of the product to which the device belongs, display the device alarm data that meets the trigger requirements (alarm name, device number, device name, alarm level, alarm time, data, processing status, and operation)“
Configuration Management "Configuration Name Search
Configuration View
View landscape configuration
Configuration operation (non editor operation)
Configure voice alarm“
Work Order O&M "O&M Statistics
To do task classification statistics
Fault Repair
Equipment Maintenance
Equipment point inspection
"
My Management "Set Password
Add Device
Add Scene
Group Management
Platform Message
Account Management
News Information Management
scene linkage
Dynamic News
Regarding Management“