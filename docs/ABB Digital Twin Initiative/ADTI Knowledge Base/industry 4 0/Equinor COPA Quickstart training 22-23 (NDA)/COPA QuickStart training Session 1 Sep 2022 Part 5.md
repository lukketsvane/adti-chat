# COPA QuickStart training Session 1 Sep 2022 Part 5 O-PAS IO Nodes Lab

[image area]
QuickStart Instructional Lectures
– O-PAS IO Node function and
configuration
September 2022 1
Learning objectives

1. Understand how data are communicated between field devices and
the O-PAS system
• From field wiring to OPC UA Client/Servers distributed through the control
system
2. Experience how to configure at least one product that performs the
field device <-> system communications
Outline Overview
• OPAS Connectivity Framework
• OPC UA specifics for this use case
• I/O configuration
• Lab
OPAS Connectivity Framework
Principle
• OPAS Connectivity Framework (OCF) is the open industry standard for
data communications for O-PAS based systems
• OCF uses OPC UA
• O-PAS defined interfaces that ensure interoperability are based on
OPC UA information models
OPAS Connectivity Framework
Types of field device communications
• 4-20 mA, 0-10V
• HART
• Fieldbuses
• Profibus, Profinet
• Ethernet/IP
• EtherCAT
• FOUNDATION fieldbus
• Serial: Modbus
• Advanced Physical Layer
OPAS Connectivity Framework
Application 1: I/O module communications
• Use O-PAS I/O Services
to write and read data
from field devices to the
system
Topic of this
lecture and lab
OPAS Connectivity Framework
Application 1: I/O module communications
• Use O-PAS I/O Services
to write and read data
O-PAS IO from field devices to the
services
system
• Picture at left from O-
O-PAS Signals
PAS Part 7
for from/to OPC
Vendor-specific
UA server/client
configuration
actuators
sensors
OPAS Connectivity Framework
OCF (client/server) communication
IO Service Engine FB Execution Engine
OCF
OPC UA Server
Sensor Input With OPAS OPC UA Client OCFB_IN …
info model
OPC UA Server
Actor Output OPC UA Client With OPAS OCFB_OUT …
info model
GDS
OPAS Connectivity Framework
GDS Registration and Alias Aggregation
Client Server GDS
Registration
Registration
Alias Aggregation
CertificateDistribution
CertificateDistribution
OPAS Connectivity Framework
Input Communication
Sensor Server GDS Client OCFB_IN
Client asksfordesiredAlias
location(FV001)
Server resolutionlocation(IP
Address)
Client createssubscriptionofthedesirednodein model
IO Service Scales 4-20mA
signaland writesvalueto
OPAS Model
Value istransmittedtoclient
Client writesvaluetoruntime
variable
192LT001
enignE
revreS revreS
noitucexE
AU AU
CPO CPO
Non-OPAS
13116
DCN1
DCN2
LT
192- non-O-PAS Data flow Configuration O-PAS Data flow Digital twin
1
OPAS Connectivity Framework
Output Communication
Actor Client GDS Server OCFB_OUT
Client asksfordesiredAlias
location
Server resolutionlocation(IP
Address)
Client createssubscriptionofthedesirednodein model
FunctionBlock Execution
writesvaluetoOPAS Model
Value istransmittedtoclient
Client scalesand writesvalue
tooutput
OPAS Connectivity Framework
OCF Between IO and Execution Engines
OPAS Connectivity Framework
Configuration of an IO Service Engine
• AML file defines Tag map between
Hardware and Runtimes
• Defined at Engineering time
Specifics of this lab
OPC UA specifics for this use case
IO Setup for this lab
• IO service engine under construction. Only for demonstration
purposes
• Analog Inputs and Analog Outputs are demonstrated
• Configuration and scaling is done through a small 61131 application
OPC UA specifics for this use case
Current state of this lab
IO Service Engine FB Execution Engine
(61131 Runtime) OCF
Sensor Input OCFB_IN …
• Client is performing
read AND write
OPC UA Server OPC UA Client
operations
• No OPAS info model
Actor Output in server OCFB_OUT …
• Use of GDS is proven
GDS
Lab – IO configuration
Lab
• Team 1:
• Configure one IO module on field facing side and OPC UA Server
• Confirm data flow in PLCNext Engineer
• Confirm data flow into UA Expert
• Team 2:
• Reset system to the partially unconfigured baseline
• Configure one IO module on field facing side and OPC UA Server
• Confirm data flow in PLCNext Engineer
• Confirm data flow into UA Expert
Lab – IO configuration
Channel diagram
Tag Module Channel
HTR-FT001 1 5
HTR-FV001R 1 6
HTR-FT002 1 7
HTR-FV002R 1 8
HTR-FT010 2 1
HTR-FV010R 2 2
HTR-TT005 2 3
HTR-FT005 2 4
HTR-TT003 2 5
HTR-TT004 2 6
HTR-TT006 2 7
HTR-TT007 2 8
HTR-FV001 3 4
HTR-FV002 4 1
HTR-FV010 4 2
HTR-TT001 4 3
HTR-TT002 4 4
Lab – IO configuration
Scaling
Lab – IO configuration
Variable creation
Lab – IO configuration
PxC Axioline F configuration
Lab – IO configuration
PxC Axioline F configuration
Lab – IO configuration
PxC Axioline F data binding
Lab – IO configuration
PxC Axioline F OPC UA Variable creation
Lab – IO configuration
Other small configurations
IP Address
Enable OPC UA Server for marked variables
Future feature roadmap
• Automatic Bus Configuration
• Web based configuration of IO
• AML file consumption
• Axioline F (standard IO)
• Axioline P (process IO)