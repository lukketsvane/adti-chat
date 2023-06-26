# COPA QuickStart Products and Services Equinor

COPA QUICKSTART PRODUCT AND SERVICES
FOR EQUINOR
COPA QuickStart is a functional, industrial control system (“QuickStart”) built on the principles
of the Open Process Automation Standard (O-PASTM). Included with QuickStart is a series of
hands-on training classes and exercises related to O-PAS and the QuickStart Unit. COPA
QuickStart will be delivered by Collaborative Systems Integration, LLC (CSI) along with CSI’s
subcontractor, [CPLANE.ai](http://cplane.ai/). The purpose of this initiative is to accelerate Equinor’s
understanding and strategic integration of control systems built upon O-PAS. Open Process
Automation (OPA) control systems are designed to accelerate ongoing Industry 4.0 innovation
and reduce the total cost of ownership while being inherently cybersecure. The QuickStart
system and training were created to provide a focused and cost-efficient “test-bed” capability for
process asset owners.
A. General Description:
The QuickStart initiative is intended to prove the viability of key OPA benefits and to help
Equinor develop deep understanding of the technologies, engineering principles, and operational
skills that will be required to specify, build, and operate an OPA control system.
Key Objectives (KPI’s)
The QuickStart Unit will demonstrate the following key attributes of an OPA system:

1. Interchangeability of DCN compute and IO devices from different suppliers
2. Interoperability of IO, compute, and supervisory applications from different suppliers
3. Portability of control applications to DCN’s from different suppliers
4. Modularity provided by de-coupling the IO devices from the control devices
5. Highly automated, reliable, flexible deployment of control applications
6. Simplified, highly automated update and replacement of both hardware and software
using industrial orchestration
7. Easy import of engineering information via AutomationML (optional since it will
only be possible with the assistance of 3rd party suppliers)
8. Gateway for non-OPAS conformant control systems (requires additional services that are
not included in this proposal and will require cooperation from the non-OPAS system
supplier)
Training Modules
COPA QuickStart includes two tracks of training:
9. OPA Overview Lectures
10. OPA Instructional Lectures
OPA Overview Lectures includes approximately two days of training for an unlimited number of
students and includes live demonstrations and Q&A sessions. Also, included is a two-hour
introductory lecture with demonstration specifically designed to give senior managers and
executives an overview of Open Process Automation and its benefits.
COPA QuickStart for Equinor R&D Initiative 1
OPA Instructional Lectures are divided into nine training modules that educate students on how
the lifecycle of an OPA system differs from a traditional control system. This program consists of
approximately fifty hours of deep training delivered in 4-hour classes over about six months with
hands on exercises and collaborative discussions for up to six students1. After the training,
students will
11. Understand OPA related technologies, processes, and skills
12. Have hands-on experience with an OPA system
13. Be equipped to participate in the design of an OPA Field Trial
14. Explore some value-added possibilities available with OPA such as fast cycle time MPC
B. COPA QuickStart Unit
The QuickStart Unit is composed of O-PAS aligned2 hardware and software that form a fully
functional control system. Many of these products are advanced prototypes and are not yet
generally available for commercial purchase. As a result, the QuickStart Unit is intended for
training and experimentation, not as a production unit. We expect production versions of these
products to be available in late 2022 for field trial usage.
The QuickStart Unit contains several major elements:
15. Process Control Platform
16. Process Control Application(s)
17. Advanced Control and Security Applications
Process Control Platform
The process control platform components are listed in the two tables below. Each description
below is representative of the components the QuickStart Unit will contain since more advanced
O-PAS components may replace earlier versions as they become available.
Hardware Components
Quantity Component Description Suppliers3
9 Compute DCN A variety of industrial devices from different suppliers ASRock
with various processor families which may include Intel Industrial,
Core, Intel Atom and Intel Elkhart Lake Vecow
2-3 IO DCN Similar class of equipment to Phoenix Contact Axioline F Phoenix Contact,
and Stahl AUMH 9468/33 R. Stahl
2 ACP Data center class servers similar in class to a Supermicro
1U Servers Xeon w/256G RAM - 2TB disk
2 IO Stimulator Simulates plant equipment, sensors, and actuators VP Process
connecting to the IO
1 Firewall/Router Provides a layer of security between COPA QuickStart Fortinet
Unit and the Internet
1 The class for Instructional Lectures will be split into two groups of students for the hands-on labs. The
recommended class size is six students split into lab groups of three. This provides students with more
hands-on access to the equipment. However, classes can be expanded to ten students with lab groups of
five.
2 Currently OPAF is defining an O-PAS compliance process. When this is established, components will be
O-PAS certified.
3 Suppliers may change based on a variety of factors such as O-PAS compatibility, COPA QuickStart
compatibility, availability, and cost to performance ratio.
COPA QuickStart for Equinor R&D Initiative 2
1 KVM Switch Provides for secure, remote access to the Unit with remote Vertiv
keyboard, video, and mouse for training, maintenance, and
trouble shooting.
1 Industrial Manages the ethernet network within the QuickStart Unit Cisco
Ethernet Switch
1 TOR Switch Top of Rack Switch which connects ACP’s inside the rack Cisco
so that all copper cabling stays within the rack
1 Cabinet 42U server enclosure cabinet with rails, power, and cable Various
management
Software Components
Component Description Suppliers1
Programmable Control IEC 61131-3 automation software (IDE and runtime) CODESYS,
Platform SMAR
HMI Industrial process dashboard Inductive Automation
Alarm Manager Event based alerts Inductive Automation
Industrial Orchestrator Lifecycle management of the system across various [CPLANE.ai](http://cplane.ai/)
supplier components: hardware, control applications,
platform software, and networking
Historian Event storage and retrieval Various
OPC UA GDS Discovery Services for OCF alias and certificate Various
management
Security OPC UA encryption, aliases, and certificates. Various Various
elements of the Intel Industrial Cybersecurity reference
architecture
Dynamic Process Drives dynamic process simulation through the IO CSI Automation
Simulation Stimulator
System Performance Monitoring and alerting toolkit for compute Open Source
Monitoring infrastructure (Prometheus)
Operating System Operating systems running on individual devices or Linux, Windows
virtualized platforms
Containers The CODESYS runtime will be deployed in a Docker
container by CPLANE’s Fusion orchestrator.
Other software components may be deployed in
containers.
ACP Compute An OpenStack Private Cloud is contained inside Canonical
Platform the QuickStart System and supports both virtual
machine and container deployments.
Process Control Applications
Fired Heater application with simulator
Optional applications may be available such as Distillation Column, Fed-Batch Fermentation, and
Continuous Stirred Tank Reactor
Model Predictive Control (fast cycle time) configured for Fired Heater multivariable constraint control
Dynamic Process Simulation - Dynamic simulations run beneath the DCN – IO modules using 4 – 20mA
signals to communicate with emulated transmitters and valve positioners that are the outputs and inputs to the
dynamic simulations.
COPA QuickStart for Equinor R&D Initiative 3
System Architecture Capabilities
Software based redundancy for process applications with no-downtime failover and self healing
No-downtime software upgrades
Automated software and network installation and configuration
Device discovery using O-PAS V2.1 OSM-003 Redfish profiles
Automated backup of applications
Automated storage and redeployment of control applications when needed
Automated patching and updates of the system
C. Training Modules
Nine training modules will educate students on how an OPA system differs from a traditional
control system. The modules span the lifecycle of a process control system:
18. OPA Concepts
19. Design and Specification
20. Develop
21. Installation
22. Secure
23. Startup
24. Operate
25. Evolve
26. Maintain
After the training, students will
27. Understand OPA related technologies, processes, and skills
28. Have hands-on experience with an OPA systems
29. Explore some value-added possibilities available with OPA such as fast cycle time MPC
Logistics
• Instructors will be subject matter experts in their field and will be composed primarily of
CSI and [CPLANE.ai](http://cplane.ai/) personnel. Some instructors may be subject matter experts from
COPA member companies.
• Overview Lectures
An unlimited number of students can attend these lectures.
o
The initial two hours of the Overview Lectures consists of an introduction and
o
demonstration that is appropriate for managers and executives to understand the
benefits and principles of OPA.
• Instructional Lectures with hands-on labs
Lectures will be broken into half day sessions. The estimated total instruction time is
o
50 hours.
It is recommended that half day sessions be given on a bi-weekly basis at the onsite
o
location.
Each class can have up to 6 students. Requests for additional students per class will
o
be handled on an exception basis.
For charter customers, two instructors will be included for most sessions. This high
o
instructor to student ratio goes beyond standard instruction and includes in-class
collaboration and hands-on learning with the QuickStart Unit.
The first two modules can be done virtually without access to the QuickStart Unit but
o
will require access to the internet or a server running virtual machine.
COPA QuickStart for Equinor R&D Initiative 4
Students should have a minimum of 2 years of experience with process control
o
systems. Less-experienced students are welcomed if they can partner with a more-
experienced colleague for the labs.
Hands on lab exercises and lectures include
o
 How to add, remove, and replace components
 How to use CPLANE Fusion to orchestrate the system
 A high-level understanding of the Advanced MPC application included with
QuickStart
• The Overview Lectures will be given in person depending on COVID travel restrictions.
Instructional Lectures will be primarily taught virtually. Training classes will be given
during normal working hours of the customer.
• Slides and reference materials will be given to the customer for their internal use only.
• One individual should be designated as the contact person for coordination of classes and
any configuration or problem shooting work required with the QuickStart Unit. It is
preferable for the contact person to have IT experience. This individual should plan on
up to 20% of his/her time allocated to the QuickStart initiative during the length of the
project.
COPA QuickStart for Equinor R&D Initiative 5