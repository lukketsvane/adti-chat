# Technology Update Equinor: 22.10.2022

——
OCTOBER 2022
800xA Technology Update
PCP, Technology
—
—
Presenters
Magnus Hammar
a.i. Product Line Manager 800xA
—
Agenda

1. 

800xA Updates in Field Information 800xA 6.2 Future Outlook Q&A
6.1.1 and 6.1.1.1 Management
October 14, 2022 Slide 3
—
What’s New in 6.1.1 and 6.1.1.1
—
Product Line: System 800xA
Roadmap
8.1
Continuous
8.0 release
7.2
7.1
LTS version
7.0
6.2
LTS version
6.1.1
6.1.0.1
LTS version
6.1 Limited: H2 2031
Obsolete: 2034
6.1.1.1 6.1.1.2 6.1.1.3 6.1.1.4
LTS version
Limited: H2 2026
Obsolete: 2031
6.0.3 6.0.3.1 6.0.3.2 6.0.3.3 6.0.3.4
2017 2018 2019 2020 2021 2022 2023 2024 2025 2026 2027 2028 2029
ABB Confidential & Preliminary
October 14, 2022 Slide 7
—
Lifecycle Updates
System 800xA v6.1.1.1
New Windows Operating system (2022) support adds
2.5 years on the 6.1.1 Long Term Support (LTS) track!
Protecting the core!
Three Operating System Versions Supported!
System 800xA version 6.1.1.1 is also
– NEW Win 10 IoT Enterprise LTSC 2021 *
the base for the Continuous track
(i.e.for the upcoming version 6.2)
– NEW Windows 2022 Server*
– Windows 2019 (10 LTSC & Server)
– Windows 2016 (10 LTSC & Server) System 800xA version 611
Windows
is a Long-Term Support 6.2
Virtualization Platforms 2016, 2019 & 2022*
Version (LTSV)
LTS 6.1.1 6.1.1.1 6.1.1.2 6.1.1.x
– VMware ESXi 6.7, 7.0
6.1.0.1
– MS Hyper-V
6.1
Windows Update in Place
LTS 6.0.3 6.0.3.1 6.0.3.2 6.0.3.3 6.0.3.x
– NEW Upgrade the underlying Windows
6.0.2
operating system without having to reinstall
6.0.1
and reconfigure 800xA and 3rd party
software! (Starting with Windows 2016) 6.0.0
October 14, 2022 Slide 6
—
Lifecycle Updates
Lifecycle of Win 10 2021 LTSC
What changed in Windows LTSC lifecycle?
– Win 10 Enterprise LTSC only has a
5-year life cycle from 2021 onwards.
– In order to get the full 10 years, from time of
release, Win 10 IoT Enterprise LTSC need to [https://docs.microsoft.com/en-us/lifecycle/products/windows-10-enterprise-ltsc-2021](https://docs.microsoft.com/en-us/lifecycle/products/windows-10-enterprise-ltsc-2021)
be used.
– How to get IoT licenses?
• Use 800xA workstation from Arrow:
[https://link.arrow.com/abb/](https://link.arrow.com/abb/)
• Purchase IoT license from Arrow or Dell
using ABB agreement with Microsoft and
build the license with workstation
hardware.
[https://docs.microsoft.com/en-us/lifecycle/products/windows-10-iot-enterprise-ltsc-2021](https://docs.microsoft.com/en-us/lifecycle/products/windows-10-iot-enterprise-ltsc-2021)
October 14, 2022 Slide 7
—
System 800xA version 6.1.1.x is now ISASecure®
System Security Assurance (SSA) Certification
Providing Safe & Secure Operations
ABB Ability™ System 800xA®, has received
ISASecure® System Security Assurance (SSA™)
Level 1 certification to the IEC62443 standard.

- Provides 3rd party validation of ABB’s
commitment to security
- For customers to use as the base for their
installed system certification and assessment
work if required
Certificates can be obtained at [www.isasecure.org](http://www.isasecure.org/)
October 14, 2022 Slide 8
—
OPC UA in System 800xA
System 800xA v6.1.1
System - OPC UA Client/Server Controller - OPC Client via CI874 OPC UA in 800xA History
a) Allowing a 3rd party client to OPC UA DA Client in the CI874 Embedded OPC UA Server in 800xA
communicate with System 800xA. communications interface on the AC 800M History (and MOM) supporting OPC
(OPC UA DA Client Connect) controller UA DA, HDA, and AE.
b) Communicating with an OPC UA Server Primarily developed for MDIS subsea Robust, due to backfill, etc., data
to bring in an 800xA Connectivity connection, but could connect to any OPC source for 3rd parties to retrieve data.
Server (OPC UA DA Connect (client)) UA Server
3rdparty
System AC800M Historian/
800xA w/CI874 Gateway
a)3rdparty
Communications
Applications
800xA
Interface Module
History
b) PLCs, Equipment
System
controllers
800xA
PLC, Equipment
Controllers
October 14, 2022 Slide 9
—
Modular Automation
System 800xA 6.1.1
“Modular Automation is a topic that is gaining
interest to many industries as it embodies an
open automation approach to system
integration.” – PCP Global Marketing Mgr.
Plug and produce to improve production flexibility
System 800xA is one of the first
Modular enabled orchestration
systems on the market
– System 800xA 6.1.1
Orchestration Designer now on
main media and using native
OPC UA Connectivity
– Ability to import MTPs (Module
MTP1 MTP2 MTP 3
Type Packages) into Control
Builder / Plant Explorer
simplifying overall engineering
effort.
• Import MTPs (that may utilize others hardware and configuration) Orchestration Designer imports
and then add coordinated / supervisory control logic and connects various “module type
packages” together for supervisory
• Import graphics and integrate alarm & events
and coordinated control.
October 14, 2022 Slide 10
—
Select I/O Additions
System 800xA v6.1.1
Select I/O GFS810
Ground Fault
Select I/O now fortified with IS and fiber…and more! Detection SCM
Select I/O DIS890 Signal
Conditioning Module for SIL3 Safety
– Fiber Optic Ethernet Adapter Module and Intrinsically Safe applications
Select I/O with
– Select I/O Signal Conditioning Modules (SCMs) with built- Fiber Optic
Ethernet Adapters
in Intrinsically Safe (IS) barriers for both process and safety
and IS SCMs and
applications
accessories
required for
– Channel (SCM) redundancy available via new Field Terminal
compliance
Blocks (FTB840)
– Ground Fault Detection* and Ground Termination Modules
– Safety SIL 3 Analog Input (1.2 amp) SCM
Select I/O MTU with a
mix of non-redundant
and (new) redundant
Field Terminal Blocks
(FTB840s) that
support redundant
channels.
October 14, 2022 Slide 11
—
Summary of new additions to Select I/O supported in System 800xA 6.1.1.1
Select I/O Additions (requires version 6.1.1.1)
– Analog Signal Conditioning Modules
• AIS815 (4-20mA, 2/3/4 wire , 1.2A, HART, single/redundant)
• AIS830 (Thermocouple/RTD/mV, single) AIS815 Analog Input
(1.2 amp)
– Digital Signal Conditioning Modules
DIS801 and DOS801
DIS820/DIS821
• DIS801 (24V, 2/3/4 wire , SOE, single) 24V Digital Input and
120V/230V
• DOS801 (24V, 0.6A, 2 wire, single) Output Modules Digital Input Modules
• DIS820 (120V AC/DC, 2/3/4 wire, built-in replaceable fuse, SOE,single) AIS830 Analog Input
• DIS821 (230V AC/DC, 2/3/4 wire, built-in replaceable fuse, SOE,single) TC/RTD/mV
• DOS820 (5-230V AC, 5-125V DC, Relay, 3A, built-in replaceable fuse, single)
– Terminal Blocks and Kits
DOS820 Relay Output
• FTB820 –Field Terminal Block for 120/230V
5-230V, 3A
• PTB820 – Power Terminal Block for 120/230V
• TUS810K03 –Module Termination Unit with FTB/PTB820 (MTU)
FTB820 PTB820
120/230V Field 120/230V
NOTE: Terminal Block Power TUS810K03
All modules added in 6111 are for process control (non-SIL) Terminal MTU with 16 FTB820
MTU: Module Termination Unit Block and redundant PTB820
RTD= Resistance Temperature Detection
October 14, 2022 Slide 12
—
Ethernet I/O Field Kit now with xStream Commissioning
System 800xA 6.1.1
New and improved Ethernet I/O Field Kit
The Ethernet I/O Field Kit is powerful, flexible
Select I/O & the Ethernet I/O Field Kit
software that helps optimize configuration and
with xStream Commissioning is a
commissioning of I/O loops without the need for
powerful, time-saving combination
the project application or process controller saving up to 30% on overall loop
hardware. commissioning activities!
– Runs on an average laptop can adapt to various
engineering workflows
– Includes xStream Commissioning that can guide
instrument technicians through the entire
commissioning process.
– Automatically configure Select I/O and S800 on
Ethernet hardware and create a test configuration.
– Automatically performs loop and alarm checks on
multiple smart devices in parallel and documents the xStream Commissioning
result! ‘dashboard’ dynamically
showing the status of multiple
automated loop checks being
executed in parallel.
October 14, 2022 Slide 13
—
Ethernet I/O Field Kit – now with Automated Sessions!
Automating the Automatable
Ethernet IO Field Kit enhancements in version 6.1.1.1
New Navigation control highlights current step and status via
various color-coded symbols
Navigation bar indicates status and
New Automated Session option available for the loop check provides ways to quickly jump to various
stages in the process.
controller. Runs through the commissioning steps for Select I/O
and S800 on Ethernet and smart (input) devices without user
interaction.
Other improvements:
- Device Compare supports Supports NE131 parameterization using
Namespaces (towards PA-DIM)
- Validation for signal improvements –added fields / with more
comparisons/checks.
- Loop Check Report improvements with support for more reporting
xStream Engineering dialog with selections for controller, test application creation
output options (i.e.; individual pdfs or csv’s, etc.)
option and if a fully automated session is desired.
- Alarm limit check is selectable and included in reporting.
October 14, 2022 Slide 14
—
Standardization, Standardization, Standardization
Did I mention standardization?
“Select I/O standardized smart junction boxes eliminate
project steps and hours giving us the ability to deliver
The value of standardization
projects on-time, on-budget, with quality to help meet and
Standardized remote I/O cabinets can be pre-designed, exceed customer expectations.” -Project Execution Mgr.
pre-wired, pre-tested, pre-certified and easy to install.
– Reduces design costs
– Shortens delivery lead times
– Speeds up deployment
– Reduces field labor resources, time and expenses
– Enables late changes without escalating costs
Standardized Smart Junction Boxes (SJBs)
ABB Remote I/O Cabinets includeSystem 800xA
The less ancillary hardware components Select I/O are self-contained, pre-wired, factory
– the more potential for savings. tested cabinets that can be easily installed and
connected to field wiring, power and network
cables.
October 14, 2022 Slide 15
Target
—
Passed G2
Product Line: System 800xA
Passed G5
Independent releases for 6.1.1 or later
Need 800xA 6.1.1.1 & Control 6.1.1-2 or 800xA 6.2 or later:
Need 6.1.1.0or later: CI846 and TU866.
Process Recall Redundant S100 configuration for AC 800M
1H 2021 2H 2021 H1 2022 H2 2022 2023
Select I/O Select I/O Select I/O
Need 6.1.1.0or later: Need 6.1.1.0or later: Need 6.1.1.1, 6.2 or later:
SCM redundancy GFS810 ground fault detection DOS801: DO 24V with less functionality, single
DIS801: DI 24V with less functionality, single
AIS815: Analog Input, single/redundant, 2/3/4-wire,
1.2A, HART, Haz Loc
AIS830: Combined TC/RTD, single
DOS820: Relay Digital Output, single, 230V AC (Ex up
to 30V)
DIS820: Digital Input, single, 120V AC (nonEx)
DIS821: Digital Input, single, 230V AC (nonEx)
Terminal blocks for 120/230V (nonEX)
Slide 16
Confidential Information
—
FIM – Field Information Manager
—
Field Information Manager
Supporting latest field device technology
– Leverages FDI technology, which combines the simplicity of EDD
FIM
and information richness of DTM
• Supports both legacy DD/EDDs and new FDI packages
• FIM supports UIP that enables graphic rich features corresponding to
those of a DTM package
• FIM comes packed with Generic Device Packages that can be used with
any HART device
– Wide range of Field protocols support
• HART, HART IP & Wireless HART, Profibus DP, Profinet, OPC UA Devices
– Supporting ABB S800 IO, S900 IO and Select I/O Installations
– FIM OPC UA server
• Fleet management - Sensor configuration & diagnostic data is made
available seamlessly
• Enabler for digital opportunities –Remote service, remote verification,
fleet reporting, analysis of sensor/actuator diagnostics
Source: FieldComm Group
October 14, 2022 Slide 18
—
Functional design for the best-in-class field experience
Connects to Online drivers repository
ABB Device Driver cloud FieldComm Group Device Driver cloud Offline repository
FIM finds the matching driver from the ABB FIM finds the matching driver from the Device Types can be downloaded in DMZ
Cloud repository, downloading it securely FieldComm Group cloud repository, environment & moved to production FIM
and assigns it to the device automatically. downloads it securely and assigns it to the
- Allows to have own on-premise controlled
device automatically.
device catalog.
FIM provides updated drivers on-demand
October 14, 2022 Slide 19
—
Functional design for the best-in-class field experience
Intuitive user interface for easy navigation and data interpretation
Multi-device
Menu Overview Device Bar -Multi- Touch enabled
management
devicemanagement
Device Info
Device Health OneclickDevice
Typical (NAMUR) menu
parameters
Customizable
Favorites
OneClick
functions
Topology
Navigation
different Parameters
bydevice
October 14, 2022 Slide 20
—
What’s new with FIM 2.3?
Summary
– Multiple Profinet connectivity service For more information use the Field Information Manager Webpage
[https://www.abb.com/fieldinfo](https://www.abb.com/fieldinfo)
– Common Names
– PA-DIM (Process Automation Device information Model)
– Enhanced HART IP servers support
– Enhanced Tag search & Navigation
– Automatic Loop Check Improvement
– Device Name assignment from DCS Engineering tool
– Process Cockpit
October 14, 2022 Slide 21
—
ABB AbilityTM Field Information Manager
System 800xA
FIM ABB FDI FieldComm Group ABB
Repository FDI + EDD Repository Ability™Edgenius
FCG
Device Library OPC UA gateway
Repository
/PA-DIM in FIM 2.3
System Connectivity
Field Information
System FIM 800xA Connectivity
800xA Manager
Ethernet/IP
OPC UA4 Profinet4 HART IP Profinet
Communication Communication Communication HART IP
Control Network
OPC UA Profinet Wireless 3rd party PLC
...
AC800M AC800M Connectivity Connectivity Connectivity Connectivity
Modulebus / Local IO APL Switch /
PA Proxy 3
Modbus TCP
OPC UA
HART IP
Profinet
Gateway
Profibus
S800 I/O
S900 I/O
S800 I/O S800 I/O
Profibus PA5
Select I/O
2 1
OPC UA4 Profinet4
Devices Devices
October 14, 2022 Slide 22
—
800xA 6.2
Target
Changes since
—
last update
Passed G2
Product Line: System 800xA
Passed G5
Continuous release track
1H 2022 2H 2022 H1 2023 H2 2023 2024
6.2 7.0
NGT: NGT:
-AC 800M control running on iPC & Windows HTML5 based Operator Workplace
-HTML5 Workplace / Client Evolution: HTML5 based Panel
-800xA OPC UA Server AE & HDA -IM migration to 800xA History Control Engine functionality enhancements
ABB Adaptive: -Redundant connection S100 for AC 800M NGT Engineering intro
-Select I/O Real IO Network xStream Eng. Quality:
(SCM allocation tool) -Enhancements for Operator workplace Maintenance on current technology
-Select IO Step 4
-PROFIsafefor 3rd party devices Gate 1 passed.
Gate 2 planned for October Target: Gate 0during SPI22.4
Cyber security :
- ABB’s Minimum Cyber Security Requirements
(MCSR) (remains with exception)
LTS release track(s): 6.0.3 & 6.1.1
1H 2022 2H 2022 H1 2023 H2 2023 2024
6.1.1.1 6.0.3.4
Defend leading DCS position Cost of ownership Life cycle & maintenance
-MO-161 SSA system security certification step 1 -Windows in place upgrade support - ESXi7.0 support
ABB Adaptive: Life cycle & maintenance - SQL Server 2016 SP3
-Support for Select IO Step 4 -Windows 10 LTSC 2021 & Server 2022 - Error corrections
-MO-458 Automated DICED enhancements -Error corrections
-Add all xA sw products in Product Issue Database Passed Gate 2
Released
Slide 24
Confidential Information
.
s
r
o
—
t
c
e
Communication to 3rd party Profisafe devices t e
D
e
l
b
a
s
s
e
r
d
d
Safe Communication for 3rd party PROFISafe devices A
• Generic PROFISafe Support (IEC62784-3:2—6 )to allow for:
s
r
• Expanding the offer by 3rd party addressable Fire & Gas detectors o
t
c
• Supporting wireless connection of Fire & Gas detector solutions e
t
e
• Reduced effort in Electrical Solutions through Safety Fieldbus instead of hard-wired signals D
s
• Safe communication to ABB Drives s
e
l
e
• Support for Safety APL Devices (Ethernet with Safety to the Field Instruments) r
i
W
e
v
i
t
c
e
r
i
D
e
n
i
h
c
a
M
October 14, 2022 Slide 25
—
System 800xA 6.2 Details
SCM Allocation Tool
Use cases
• Ability to automatically allocate I/Os based on signal
names
• Transfer of HW structure from Loop Check tool to
engineering system
• Transfer of HW structure from Engineering system to
production system
Value Props
• Reduced Manual engineering
• Improved Adaptive workflow
• Minimized human errors
October 14, 2022 Slide 26
—
System 800xA 6.2 Details
SCM Allocation Tool
October 14, 2022 Slide 27
—
Future outlook
—
—
Process Automation System Vision
Reclaiming mindshare
By communicating our vision and how the future solutions
will come together and ensure continuity for our customers
we secure customer loyalty and support sales pitches to
prospects
The White Paper underlines ABB’s technology competence
and domain expertise in the automation market and their
relevance in the future industrial automation landscape
It describes ABB’s vision of the future Process Automation
System including “extended capabilities” while
demonstrating that ABB understands and addresses trends
and future customer challenges
The DCS of Tomorrow: ABB's Process Automation System Vision
—
Customer Initiatives / Market Trends
Ensure compliance while providing additional value from a complete system solution
Network Centric architecture
• Any data available anywhere supporting new deployment models
• Engineering centrally or distributed as required
Open Process Automation Forum (OPAF)
• Supporting flat network structure hierarchy reducing investments
• Aligning with OPA-S standard
• Open yet secure to reduce customers’ Total
Cost of Ownership
• Based on OPC UA as network backbone
Namur Open Architecture (NOA)
• Embrace Industrie 4.0 and Industrial Internet of Things
• Safe and secure separation of Core Process Control
increasing availability, reliability, and security of critical
processes
• Enable integration of OT and IT by with built-in digital
platform for M&O applications
Ethernet APL
• Physical Ethernet all the way out to
NAMUR Modular Automation
field device.
• Plug and Produce Modular Approach
• Providing power through Ethernet
• Standardization of processing
• Connect to field devices in Zone (IS)
These initiatives will drive new business models and modules increasing reuse and speed
• Replacing traditional IO
provide an opening for new entrants to market • Bringing agility and flexibility to
production
October 14, 2022 Slide 30
—
Future Topology - Vision
Genix
October 14, 2022 Slide 31
—
Roadmap strategy System 800xA
Today’s 800xA system
Already Available New Technology components
Comments
800xA system as we know it today.
PA Genix / Edgenius
/
Workplace
FIM xA services Engineering
Physical single/redundant
network, with protocols:
- MMS
- IAC
- Profinet
- Modbus TCP /Other Fieldbus
Control Safety
October 14, 2022 Slide 32
—
Roadmap strategy System 800xA
NGT Components Introduction
800xA Step 1 intro, 6.2
Already Available NGT components
Clarification comments
PA Genix / Edgenius
• New HW agnostic Control Engine
/
• Introducing HTML5 based Thin Client
• Utilizing the OPC UA as a backbone for
xA services, xA Workplace ThinClient
FIM NG operation services xA Engineering the new components
• Engineering control application from
Physical single/redundant
network, with protocols: CB
- MMS
- IAC
• Engineering Graphics from PG2 Editor
- OPC UA
- Profinet
(Deploy tool will render graphics into
- Modbus TCP /Other Fieldbus
HTML5 environment)
NG Control Control Safety NG Control
October 14, 2022 Slide 33
—
Thank you!