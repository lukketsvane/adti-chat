# COPA QuickStart training Session 1 Sep 2022 Part 4 Develop

[image area]
QuickStart Instructional Lectures
– Develop
September 2022 1
Develop

1. Develop the HMI
2. Develop the database and reporting functions
3. Develop the control system configuration and program
4. Implement the data transfer plan
5. Implement the cybersecurity and data integrity plan
6. Perform a scope compliance review
7. Factory Acceptance Test
8. Document and prepare for turnover
Sands NP, Verhappen I. (2021). A Guide to the Automation Body of Knowledge. Int’l. Soc. Automation.
Develop
• Decide names of data objects (instruments, wires, ICS tags).
• Specify I/O assignments.
• From Design stage work, engineer the OPAS system instance.
• With SI, create virtual instance of OPAS system for the project.
• Specify layout of control apps to DCNs/ACP.
• Build tags in system
• Inputs/Outputs for field devices
• Configure control applications
• Control tags/function blocks
• Calculation tags/function blocks
• Configure OCF connections among software components (e.g. function blocks to HMI)
• Design and configure alarms
• Configure HMI
• Configure historian
• Test configurations against loopback simulation
• Factory Acceptance Test
P&ID
SCDs for Fired Heater
P&ID example: Fired Heater
Develop the database
• Field devices
• Wire labels
• I/O connections
• Control system tags
• Historian tags
Tag names
Build tags and control applications
Configure OCF (OPC UA) connections
• Example: CODESYS to Ignition
• Discussion topics:
• How do all of the OPC UA connections work in practice in an OPAS system?
• Does AE need to know where all of the OPC UA servers are, i.e. IP addresses?
• Does existence of GDS and knowledge of Alias Names make is easier for the AE?
• Demonstration with UAExpert and the component software (CODESYS and
Ignition)
OPC UA topics
• OPC UA is a standardized communication platform for information models, which are
defined by domain experts
• Built-in object-oriented models for Data Access, Alarming, Historic Data and Events, etc.
• Everything in address space is a node, nodes connected by references
• Protocol agnostic – transport depends on use case
• Server/Client, many services provided, choice of transport and encoding
• Pub/Sub, choice of transport and encoding
• Built-in layered security architecture
• Users authenticated, authorized, audited
• Applications authenticated
• Resolution down to individual nodes
• Scales for all application scenarios in IIoT and i4.0
• Pre-defined Profiles and Facets for system size
• Local and Global Discovery Servers
• GDS manages security for entire system
Introduction to OPCUA: [https://www.youtube.com/watch?v=E2XJfmAEdqw&t=31s](https://www.youtube.com/watch?v=E2XJfmAEdqw&t=31s)
OPC UA demo using FreeOPCUA
• Create an OPCUA Server
• Add variable to the server
• Historize the variable
• Browse the Server with UA
Expert
• Create a OPCUA Client
• Use client to change variable
value
• Use UAExpert to watch the
variable change
FreeOPCUA tutorial: [https://www.youtube.com/watch?v=mEbPHflLNyc](https://www.youtube.com/watch?v=mEbPHflLNyc)
Build HMI
Configure alarms
• Show overview of data flow and how to configure alarms in Ignition
Configure historian
• Show overview of data flow and how to configure historian in Ignition
• Show data flows and configuration of local historian to enterprise
historian
Test configurations and connections
• Before system is connected to plant I/O, test “round trips” of data by
loopback simulation
• Conduct Factory Acceptance Test
Backup
Alternatives for application deployment
Site 1 O-PAS System Site 2 O-PAS System
• Open
• Interoperable
• Modular
• Interchangeable
• Current
• Flexible
• Less risky to modify NCD NCD BIG BIG
APP APP
DCN
• OPA Ecosystem