# Equinor AML Workshop 2023

© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Workshop
AutomationML, OPC UA, AAS
in the context of Industry 4.0
1
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Prof. Dr.-Ing. Rainer Drath, Pforzheim University
Background
• 17 years at ABB research Center
• Since 2017 at the HS Pforzheim
• Professorship for Mechatronic System Development
• Board member of AutomationML e.V., architect of
AutomationML
• Advisory board member of GMA
• Teacher, book author, inventor, consultant
Main areas of research
• Data exchange in engineering, AutomationML
• Industry 4.0 Asset Adminstration Shell
• Plug&Produce for modular plants
2
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Wrong prophets with wrong statements
OPC UA has overtaken AutomationML! AAS can be exported to AML, JSON or OPC UA. Should
companies not support any data format?
AAS has overtaken OPC UA!
AAS can do everything.
AML and OPC UA – both object oriented data models,
AAS can control a valve, provide a geometry model, can
they are equal, we only need one.
negotiate and contract with other AAS.
AAS models all data and provides online access –
AAS achieves incredible flexibility.
AutomationML or OPC UA is legacy!
One of the biggest challenges in the industry is that AAS is the start of all interoperability.
companies have to convert all their data to the AAS
metamodel. AAS is the only digital twin.
3
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Goal of this workshop
Create a common understanding what Industry 4.0 is and how the
technologies AutomationML + OPC UA + Asset Administration Shell
help
discussion and Q&A is welcome
4
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Agenda 15-16.02.2023
Day 1: Day 2:
• 09:00 Welcome, Introduction into the Equinor problem
• 09:00 Ongoing AutomationML Activities
space
• 09:50 coffee
• 09:50 Coffee
• 10:00 AutomationML: How to model automation
• 10:00 The core of I4.0
systems
• whats new (and what not),
• 11:00 Management of Change
• the impact,
• during modelling of AML libraries
• why and how it will change the future of industry and
automation • 12:00 Lunch
• 10:45 Interoperability technologies • 13:00 Challenges of data exchange
• AAS, OPC UA, AML, comparison
• Required functionality
• 11:15 The value of AutomationML
• 13:45 How to achieve industrial interoperability
• 12:00 Lunch with the AAS, OPC UA and AML
• 13:00 AutomationML modelling philosophy • 14:30 Q&A, coffee
• 15:00 coffee • 15:00 end of workshop
• 15:30-16:00 Q&A
5
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Overview Day 1
6
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
The core of Industry 4.0
• The life cycle of Industrie 3.0 automation systems engineering
• What is industry 4.0
• Drivers for Industry 4.0, Cyber Physical Systems
• Industry 4.0: what is new (and what not)
• the impact, why and how it will change the future of industry and automation
7
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Engineering in Industry 3.0 - Life Cycle
Iteration
Timeline
Req./Basic Engineering Product Type Libs Detail Planning/VC/Test setup, commissioning, SAT, operation, maintenance
FAT
1 2 3 4
Functional Vendor specific product Engineering data
description catalogues
Management level
Device Instance Construction ERP
D4711
Selection Tank_A model Electrical Engineering
MES Planning level
Tank_B Control-Code
Motor abstraction IT
SCADA Supervisory Level
Ventil Simulations
5
SPS Control Level
Requirements Type information Instance specific In-/Output Signals Field level
Asset properties information
Typical weaknesses
• Proprietary engineering tools and devices
• Partial elements (e.g. devices) are "self-oriented“ but not context-aware
• System behaviour is strictly deterministic and pre-designed in detail by humans
• Changes in the system are not automatically recognised (deviation between planning/as-built)
8
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Cyber Physical Objects versus Cyber Physical Systems
Internet of things
Possibilities: Linking to
third party services -
Data in the cloud weather, geolocation,
traffic, events,
payment systems,
Matlab, One-Drive,
Dropbox etc. )
Physical objects
9 CyberPhysische Objekte versus CyberPhysische Systeme
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
IoT Changes the world
2
1,509€
2013
3
1
Within 2 years ~100% market penetration
10
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Cyber Physical System – 3 level model
Apps
Services (Apps)
Algorithms
3
Documents
Process data
Cloud infrastructure
3D models
Topology
2
Robot as physical
Physical objects
object
1
11
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Examples from industry
12
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Application in industry
Making classic "dumb" components "smart" retroactively.
• smart garage door
• smart motor, smart machine
• smart air conditioning/heating/ventilation/
• smart ordering/production/logistics/customer service
Enabling new forms of services
• smart payment systems for charging stations
Modulare heterogene • Subsequently bookable functions for cars (e.g. steering wheel heating or PS)
Fertigungsanlage • Automatic integration of service providers in value chains
• Simulation and optimisation with a digital twin
• Smart maintenance services, self-diagnosis, etc.
Automatic integration of automation components into the production
context
• Smart engineering of products and plants
• Smart operation, smart maintenance, smart security
• Plug & Produce
13
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
My research: Digital passport for machines as the basis for Plug &
Produce in heterogeneous machine landscapes
• Machine readable
• Automatic registration
• Facilitated orchestration
• Plug & Produce
Digital passport
Maschine 1
Digital passport Maschine
2
Digital passport Maschine
3
14
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
How does Engineering look like in Industry 4.0?
Iteration
loop Loop Timeline loop
Basic Engineering Typ libraries Detail Planning/VC/Test setup, commissioning, SAT, operation, maintenance
1 2 3 FAT 4 5
Role-Model Type-Model Instance Model Plant I4.0
(fun Pc lt aio nn tal model) d see lv ei cc te (ve Tnd ao nr li _b Arary) I mn ost da en lce APnlalangte generates InInfofrmra pas lt aiot nnr tmucodteul re5.2
ion k
VVaeMlvnoetitlloAAr11
ValveA1 Tank_B
Apps reads TankB1
VesselB1 Motor abstraction VesselkB1 Links to
MotorA1 Ventil Historian MMoMottoootrroAAr11 MotorA1
5.1
Writes configuration Apps
Informationen über das
Model (Simulation type) Concrete simulations Historian Asset (Merkmale,
Requirements P Tyro pp ee ir nt fie os rm ation I An Ast Sa n inc se t as np ce ecific information Zustände, etc.)
Sub model templates
Engineering-Tool Engineering-Tool
Connected with Reading the plant structure, functions,
features, etc.
Cyber world of data and services
Physical world of real objects Physical
Connected
asset with
D4711
implements
15
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Tension between automation and IT
Tension field
between the feasible & the meaningful
16
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Despite all the opportunities, there are also challenges
Requirements for automation
Investment protection Ensure gradual introduction of Industry 4.0
Industry 4.0 services must not jeopardise
Stability of production systems
production
Data access must be transparent and
Control of data flow
controllable
Isolated solutions prevent the full potential of
standardizatin
Industry 4.0 from being realised
security Prevent unauthorised data and services
17
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Industrie 4.0: what is really new?
New ingredients for Industry 4.0 We can already do that today

- Cross-manufacturer agreement on standardised interfaces - The Cloud
for communication services and semantics
- The network
- From Intranet to Internet
- Automation devices with internet access
- Principles such as "self-disclosure" and "discoverability
- Internet-based services
- Services that create value from the cross-manufacturer
availability of data
A multitude of new applications and business models will emerge
18
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
The impact of Industry 4.0
Why and how it will change the future of industry and automation
19
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Why and how I40 will change the future of industy and automation
Industry 4.0 introduces a new level of interoperability to industry
The innovation is growing on the ground of interoperability.
It enables new levels of automation, decision making, autonomie,
transparency and flexibility.
20
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Appropriate digital modelling is the essential prerequisite. This requires a
digital DNA in the team, appropriate tool support and digital value chains.
Lets talk about models
21
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
About models: Level 4: machine-readable models
Machine-readable and machine-
processable models
tiekrabreisitamotuA
Object models
UML/SysML
Graphical models P&ID
red
darG
Mind Models
22
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Machine-readable, -processable, -interpretable
Machine-interpretable: Data is machine-interpretable or machine-explorable if
software does not know the semantics of the data, but can explore and then
interpret it independently. Data can thus be sent to unknown recipients and
understood and processed there in an active interpretation process. To do this, the
semantics must be coded into the data in an agreed manner.
Machine-processable: Data is machine-processable if the semantics of the data can
be interpreted by software. To do this, the software must know the interpretation
EXCEL, XML, CSV
rules, for example by programming them directly into the software. For external
software without this access, the information remains syntactically accessible but
semantically closed.
Machine readable: Machine readable means that software can syntactically read,
PDF, DWG,
represent, store and process the data of a file or database at a low level. This is the
Email, WORD
minimum requirement for electronic processing.
23
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
I4.0 Interoperability technologies
OPC UA,
Asset Administration Shell
AutomationML
24
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
What is interoperability in the classic Industry 3.0
Interoperability refers to the ability of systems,
Management level
ERP
devices and applications to connect across
)b
MES Planning level manufacturers and to communicate in a meaningful
a) manner, including OT and IT.
)b
SCADA Supervisory Level
Interoperability encompasses different dimensions:
a)
)b
a) Interoperability within the hierarchy levels of the
SPS Control Level
automation system
a)
)b
Input / Output signals Field level b) Interoperablity between the hierarchy levels of
a) the automation system
25
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
What is interoperability in Industry 4.0
Interoperability refers to the ability of systems,
devices and applications to connect across
manufacturers and to communicate in a meaningful
manner, including OT and IT.
)d Interoperability encompasses different dimensions:
a) Interoperability within the hierarchy levels of the
automation system
b) Interoperablity between the hierarchy levels of
c) the automation system
c) Interoperability during the creation process of
components and systems (Value Stream)
d) Interoperability through the layers of a company
26
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
OPC UA
27
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
For classification: The automation pyramid
)emit
Management level
ERP
laer
ton( MES Planning level
noitacinummoC
SCADA Supervisory Level
SPS Control Level
emiT-laeR
Input / Output signals Field level
28
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Problem description
Management level How can field devices with their data be accessed
ERP
in the automation pyramid?
MES Planning level
• To display process values.
SCADA Supervisory Level • To store process values in a Historian database.
• To create trend analyses.
SPS Control Level • To implement production plans.
Input / Output signals Field level
29
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
OPC-UA Goal
Goal: Accessibility of devices in the network across
manufacturer boundaries.
HMI/MES/
SCADA/PLC • OPC UA : Open Platform Communication - Unified
Architecture
• "OPC" is the predecessor of OPC-UA
• OPC UA is an open communication standard.
• It describes the online data exchange between
How do devices communicate with the industrial devices and machines
automation system?
30
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Difference to simple communication systems
OPC UA offers not only the transmission of the actual
process data (process value, speed, etc.)...
HMI/MES/
SCADA/PLC • but an object-oriented information model that can
also be complex,
• including security, object models and semantics
• and a software framework for online access
How do devices communicate with the
automation system?
• Process value: Speed
• Setpoint speed
• Configuration parameters
• Health status
• Running time
• Hierarchical position
• Connected components
31
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Server – Client architecture
Each device gets Each interested
an OPC UA party gets an OPC
server. UA client.
Example information:
• Process value: Speed
• Setpoint speed
• Configuration parameters
• Health status Discussion: how do you make sure they
• Running time
• Hierarchical position understand client and server?
• Connected components
32
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
UA Companion Specifications
Joint Specifications available for Download
OPC Unified Architecture for MTConnect OPC UA for Flat Glass Processing
OPC UA for Machinery OPC Unified Architecture for PROFINET
OPC UA for Compressed Air Systems OPC UA PackMLCompanion Specification
OPC UA for WeihenstephanStandards OPC Unified Architecture for Commercial Kitchen Equipment
OPC UA for DEXPI OPC UA for Process Automation Devices
OPC Unified Architecture for AutoID OPC UA for IO Link Devices and IO-Link Masters
MDIS OPC UA Companion Specification OPC Unified Architecture for Robotics
OPC UA for MachineTools OPC Unified Architecture for Machine Vision
OPC UA for OpenSCS OPC UA for PLCopen
OPC UA for I4 Asset Administration Shell OPC Unified Architecture for FDI
OPC Unified Architecture for CNC Systems ISA-95 Common Object Model
OPC UA POWERLINK Companion Specification OPC Unified Architecture for AutomationML
OPC UA for Pumps and Vacuum Pumps OPC UA for Plastics and Rubber Machinery
OPC Unified Architecture for FDT OPC UA for Weighing Technology
OPC UA for Tobacco Machines Companion Specification OPC Unified Architecture for Analyzer Devices (ADI)
CspPlusForMachineOPC UA Companion Specification OPC Unified Architecture for SercosDevices
OPC UA for Tightening Systems
OPC UA for Cloud Library
OPC UA for Woodworking
OPC Unified Architecture for IEC61850
33
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
The answer: OPC UA allows object oriented modelling of data
Data modelling
• a key feature of OPC-UA
• description of data structures for a machine
• type system to describe data types
• meta-data model for describing semantics
34
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Base nodes and node types
8 OPC-UA-node
types
35
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
OPC UA Address Space
UPC-UA-Clients
Access
Management
Data model of the
OPC UA server
36
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
But OPC UA is more than Client-Server
37
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Brand New: OPC UA FX
Goal: Real-time communication with OPC UA, complex
information models in real-time operation
)emit-laer
• OPC UA FX provides a framework to connect devices
with "time deterministic" OPC UA Pub/Sub.
ton(
noitacinummoCemit-laeR • There are currently 2 protocols that come into question
for this: UDP and TSN.
One or more Automation Components are described in
an OPC UA Descriptor
• a digitally signed multi-document file (an
AutomationML container!),
• which models the information model in AML and
contains other artefacts (manuals, product images,
binaries, etc.)
38
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Summary
• OPC UA serves the online access to production data during runtime of a plant.
• Today: above PLC level, no real-time
• Typical Use Case: SCADA
• Future: on field level, real-time capability by cyclic and deterministic communication
• The OPC UA communication is designed in the engineering phase.
• OPC UA information models for a device are stored in a OPC UA NODESET file.
• OPC UA information models are predefined in compantion specifications.
39
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
The Asset Administration Shell
40
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Motivation of the AAS
In future, all relevant assets and their
associated information must be
accessible
• Documents, simulation models, geometry, topology
models, installation guides, function blocks, binary files,
certificates etc.
• This requires a central electronic data
sheet to which all interested parties,
from sales to service, have access.
• This central electronic data sheet for
each asset will be the future hub for all
phases in the life cycle of components
and systems.
[https://www.plattform-i40.de/](https://www.plattform-i40.de/)
41
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
The Asset Administration Shell
I4.0 Interface
I4.0 Network
Asset Adminstration
Shell
• Table of Content
• Data
• Services
E.g. a Robot
Asset
I4.0 Component
The administration shell (AAS) is an digital representation of an asset (e.g. device, machine, plant)
and can be used throughout the entire life cycle.
42
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
I4.0 Component = Asset + Asset Administration Shell
AAS (2+3): the totality of data and I4.0 interfaces of an asset. The
entire construct is accessible via an I4.0 infrastructure. The term is
synonymous with the digital twin.
The administration provides I4.0 compliant interfaces
• no monolith: fragments for role/type/instance/real world
• no dll, but platform independent
Administration • offers standardised but also proprietary services and features
• is associated with an asset and can moderate communication to
it, also via proprietary interfaces
3 • Has references to data
A data object contains data about an asset
• an electronic model of an imaginary real device
• is the virtual representation of the asset in the I4.0 network
Data • includes e.g. requirements, assurances, type information and
instance data (geometry, simulation model, function blocks,
instructions, firmware etc.), and services
2 • can be updated via the management layer, e.g. with real data,
historical data, real-time values, parameters, etc.
The Asset is …
• A physical or non-physical item of value
Assets • A resource for the fulfilment of physical services
• Proprietary device: has proprietary properties and interfaces
• Industrie 4.0 device: provides access to the device via a
1 management layer
Industrie 4.0 component (1+2+3): an asset in combination with its
management shell.
43
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
AAS architecture approach
44
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Submodels are standardized be existing Standards
45
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
3 Types of Asset Administration Shell
46
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Some insights about the Asset Administration Shell
• The AAS is standardised in IEC 63278.
• The AAS is born / already exists before the actual asset is produced. In order for all interested parties to have access to it
(engineering, sales, service, etc.), the AAS will most likely be physically located at an enterprise level.
• The AAS technology allows it to be deployed as a cloud service. In the future, companies will be able to host the AAS as a
managed cloud service in an automated way.
• AAS can also be used for components that do not have a communication interface (e.g. screws).
• The AAS model follows a technology-neutral meta-model.
• The AAS is accessed via a standardised REST API. This allows the AAS to be exchanged via participants in the life cycle and
enables standardised access to the contents of the submodels.
• The AAS enables standardised digital access to information about its asset:
• Via so-called submodels, associated asset information is electronically modelled and can be found, explored and used in a standardised manner, e.g.
type plate, geometry descriptions, device parameters, interfaces, certificates, documentation, aggregated operating data, simulations, etc.
• The AAS can be accessed from all participants in the life cycle and enables standardised access to the contents of the submodels.
• The AASX is a serialisation of the AAS for its storage for semantic models of lifecycle-spanning submodels.
47
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
AutomationML
What is AutomationML?
• Motivation
• Goal
• Scope
48
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Problem description: the engineering tool landscape is heterogeneous
49
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Problem space: data exchange between Engineering tools
Domain Tool (examples) Domain Tool (examples)
Heterogeneous tool landscape
•CATIA v4, v5 Enterprise Resource •SAP S/4HANA
•AutoCAD Planning (ERP) •Oracle PeopleSoft
•NX •Dynamics Navision
CAD •SolidWorks •Cognos • Many tools from different manufacturers
•MicroStation Reporting •Crystal Reports
•Maya •BIRT
•Plant Simulation Mock-up •Axure RP • Many engineering aspects
Material Flow
•Witness Horizon noitazilausiVgnimmargorP •EZPlantView
Simulation •INOSIM VisuP al la izn at tion •M4 PLANT
•Gazebo Simulator •OpenFlight • Different interpretation of the same artefacts
noitalumiSeciffO Robot •RoboDK •WinCC
Simulation •V-REP HMI •InTouch HMI
•VisiWin7 (e.g. what is a "signal")
Process
Simulation •ANSYS •STEP 7
PLC •RSLinx
Electrical •LTspice lortnoC •CoDeSys
•Oregano
Simulation •Multisim •RobotStudio
Robot Control •KUKA.Sim
•Word •3D Onsite
Text Processing
•OpenOffice •RUPLAN
Consequence
Spreadsheet •Excel CAE •EPLAN Electric P8
Analysis •OpenOffice •EAGLE
•Target 3001!
•Powerpoint
Presentation •OpenOffice conP fr igo uce ras ts i on •BOS 6000 • Numerous incompatible file formats, mostly in
•Access •Speedykon
Databases • •O Mr ya Sc Qle L MaF na ac gi eli mty e nt • •T AR uI tC oA CD A DM AS rchitecture proprietary formats
Communication •Email C Mo am inp tu et ne ari nz ce ed •Maximo
Management •Datastream 7i • Countless converters
Project •Project System (CMMS) •API PRO
Management •Asana
•Adobe Acrobat
MPr ao n (d Pau Dgc e Mt mD )eat na t • • •T P Ee NDa M Om V SC IAte u n dt ie or Authoring • • •I S Ml hlu aas crt rer oa p Mt oo i enr dt ia • Errors and gaps in data transfer
SmarTeam •AutomationDesigner
Product Lifecycle •Fusion Lifecycle Functional •COMOS
Management Engineering •Automation
•3DEXPERIENCE
(PLM) Framework
50
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
For engineering, there is a need for a comprehensive
and vendor neutral file format for data exchange
51
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
History AutomationML
§ 2006: AutomationML initiative is founded
§ 2009: First test environments are published:
§ AutomationML engine
§ AutomationML Editor
§ Logic Editor
§ 2010: AutomationML book
§ Since 2010: annual AutomationML user conference/plugfests
§ 2012: second AutomationML user conference
§ Since 2014: commercial support for a variety of planning tools.
§ AutomationML is on the Industrie 4.0 standardisation roadmap
§ 2021: approx. 20 domain models are based on AutomationML,
used by BMW, Daimler, Volkswagen, Siemens, ABB, Equinor
§ 2021: two English reference books
§ 2022: the first AutomationML textbook
52
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Members of the AutomationML Community
53 Stand: 2022
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
54
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
What is AutomationML?
AutomationML is
AutomationML is not
An object oriented modelling language.
ー A tool or a database.
ー
A data format, that allows a vendor-independent data
ー Capable to review conditions, attribute values,
ー
exchange of engineering data of automation systems.
relations, references, or semantic correctness of data
Applicable within the entire engineering process by objects.
ー
connecting different discipline specific engineering
Capable to check consistence or to review and match
ー
tools.
version of data objects.
Object orientation allows the modelling of automation
ー Capable of automatic standardization of user specific
ー
system components as data objects aggregating
information.
different aspects.
Capable of automatic creation of libraries.
ー
A combination and adaptation of already existing
ー
Capable of automatic management of versions and
industry formats that were developed for exchange ー
variants.
and storage of different engineering aspects.
A project management tool.
A consistent and distributed document architecture, ー
ー
that enables the handling of large data sets and the A project management database.
ー
outsourcing of libraries to external documents.
But it allows the storage of all data required for that.
55
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
This is the promise of AutomationML
• Data exchange along the tool chain
Tool A Tool B
AutomationML
Lossless
Seamless
Digital
Accessible
56
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Value creation with AutomationML models
AutomationML makes engineering data accessible, searchable and
neutral. Algorithms can run through the object model and do useful
things: quality check, completeness check, check for compliance with
rules, pattern search, error search, generate control code, user
interfaces, interlocks, simulation models
Rules
ObDjercat wMinodgel
Interlocking controls
Algorithms IF Vessel empty ...
... THEN switch off Pump01
57
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Goal of AutomationML
Machine-readable and machine-processable data models for data exchange
Topologie
Geometrie
Kinematik
Bewegungs-Planung
Verhaltensbeschreibung
58
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
AutomationML
Topology models
Topology (CAEX)
§
Object Structures
§
Object Libraries
§
59
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
AutomationML
Geometry modelling
§ Geometrie and Kinematik (COLLADA)
§ Precise, different levels of detail
§ Surfaces, material, shaders
§ Kinematics including joint
dependencies
60
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
AutomationML
discrete control behavior
§ Diskrete Logik
(PLCopen XML)
61
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Application examples
• ABB HVDC (Sweden)- Data exchange between 20 tool platforms with
AutomationML
• Equinor (Norway) - Data exchange of SCDs with automation suppliers
• Daimler AG: internal data format
• Intec GmbH (DE) - RF::Suite
• Siemens: TIA Portal
• taraVR Builder, taraVRControl
• Logi.Cals: AML.hub
• Modular Automation via MTP
• Integration as a sub-model in the management shell
• OPC UA FX
• Industry 4.0 standardisation roadmap
62
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
AML Modelling Philosophy
• AML architecture
• Modelling philosophy
• Key innovations, what makes AML different?
• Typical AutomationML use cases and business cases
• Steps to apply AutomationML
• AML simple examples
• 4 layer concept
• Referencing of external documents
• Extended AutomationML concepts:
• multi lingual modelling, ports, container format, OPC UA modelling, PPR concept
• Interlinking of data models with AutomationML
• Value of interlinking P&ID models with P&ID
• Value of interlinking P&ID with SCD
63
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Remember: Level 4: machine-readable models
Machine-readable and machine-
ytilibaterpretni processable models
Object models
citamotua
Graphical models
fo
eergeD
Mind Models
64
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
AutomationML architecture
65
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Architecture
CAEX 3.0 (IEC 62424 Ed. 2) COLLADA
AML combines available
data formats
•Geometry
Objecthierarchy
•Kinematics)
• CAEX as top-level format
Plant topology
Reference
information ObjectA • COLLADA as a format for
IEC61131-10
•Plants Init storing geometry and
PLCopenXML
•Cells kinematics
ObjectA
1 •Behaviour Step1
•Components
• PLCopen XML as a format
•Sequencing
•Attributes
End for storing logic and
•Interfaces Object A
2 behaviour
•Relations Further XML Standard format
… Referencing of external
•References
Further aspects of information from CAEX via
ObjectA
n engineeringinformation CAEX attributes defined by
AutomationML
66
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
The CAEX class model
67
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Modelling Philosophy
Object-oriented modelling of data
68
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Simple Example
Live Demo
69
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Object Oriented Analysis, AML Modelling
Class diagram
System-Unit-
Class: Engine
Class
Class: Combustion Engine
Attributes
-Vendor: VW (xs:string)
-Gas type: Super (xs:string)
70
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
CAEX: 5 fundamental libraries
Concrete project with Concrete types, vendor catalogues, Modelling philosophy: thinking and modelling in
concrete object instances vendor types object worlds (instead of tables, lists, diagrams)
Motivation for object-oriented modelling
Instance-
SystemUnit-
• Based on natural human thinking and natural
Hierarchy
ClassLib
perception of the environment: things
Internal- SystemUnit- • Reduction of complexity
Dictionary of attribute types
Element Class
• Distribution of modelling tasks among several
people
Attribute- • OO = organising principle for abstraction,
TypeLib details and simplification in a model
Use of object-oriented paradigms
AttributeType
• Classes and instances
Role- Interface-
• Inheritance
ClassLib ClassLib
• Aggregation
RoleClass InterfaceClass • Relations
• Class hierarchies
Abstract functions, • Encapsulation
Object meaning, roles Interface types
71
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Innovations in AutomationML
What makes AutomationML different?
72
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Key features and innovations of AutomationML
73
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Referencing of external documents
MIMEType (type of document)
Document language
74
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
CAEX-Bibliothek
Innovatino: Referencing external documents
Attributebibliothek
Länge
Breite
CAEX can reference external documents CAEX-Modell
Instanzhierarchie
CAEX-Zentraldokument
• CAEX Libraries Zelle1
Roboter
• CAEX Submodels
CAEX-Katalog
Instance-Hierarchy
ABB Produktkatalog
• CAEX Catalogues
Zelle1 Roboter
RB14000
• Geometries
Station
Geometrie: COLLADA
• Behaviour Roboter
SPS
• PDF, DOCX, XLSX, ICO, BMP etc.
Dokument
Verhalten: IEC61131-10
Init
Step1
End
Weitere Dokumente
75
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Example: referencing of a product picture
76
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Useful: Distribution of CAEX models across multiple documents
Use cases
CAEX
• Reduce individual file size
root
file • Data and IP protection
• Library outsourcing
• Distribution of data ownership
CAEX- CAEX- CAEX
File01 File02 Library
77
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Multi language support
78
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Innovation: Enabling of language libraries
Multilingualism can be modelled in libraries
and even outsourced externally.
• Each attribute type is modelled once with
its required translations.
• Tools can access the library for all attribute
instances as needed to find and use
translations.
• By outsourcing, language files can be
maintained outside a project model and
reused in multiple projects.
• Multilingualism of attribute types and
attribute instances is done identically.
79
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Versioning
80
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Innovation: AML supports linear versioning of a class
81
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Innovation: AML supports version tree structures:
• Here, we derive version 1.1 and 2.1
each from Auto 1.0 and Auto 2.0.
• A tree structure for a library is created.
82
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Containerformat AMLX
83
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Innovation: AML Container format
• an AutomationML document can consist of
several sub-documents
AMLX Container
• z. e.g. external CAEX libraries, referenced
ZipPackage geometry files, manuals, symbols, logos etc.
• AutomationML therefore supports a
container format following the Open
Packaging Conventions (OPC).
.aml .xxx • The container format combines several
related files into a single file.
.aml .xml
• It is a compressed zip file that conforms to
.dae .docx
.pdf the ECMA OPC conventions.
84
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Example
Container file
Single files
Content ofthe
containerdocument
85
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Semantical References
86
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Innovation: Semantic References
• Attributes can reference a semantic standard, e.g. IEC-Common Data Dictionary:
[https://cdd.iec.ch/CDD/iec61360/iec61360.nsf/SearchFrameset?OpenFrameSet](https://cdd.iec.ch/CDD/iec61360/iec61360.nsf/SearchFrameset?OpenFrameSet)
87
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Example: Property „Länge“
IRDI:0112/2///61360_4#AAD194#002
88
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
AutomationML can map existing semantic standards
• CAEX is library-based
• An existing standard can be replicated 1:1 in a class library
Klassen Instanzen
89
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Modelling mixed Semantics
90
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Innovation: models with mixed Semantics
• AutomationML stores mixed neutral/proprietary data models
Source tool A Target tool B
Gemischt neutrale und
DB proprietäre Daten DB
1 4
Exporter 2 3 Importer
Mapping Mapping
A -Neutral Neutral -B
A –A‘ A‘ –B
A2‘ –B
91
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
By labelling of the documents and items, we know the data origin
and we can distinguish the semantics item by item
Source tool A Target tool B
mixed neutral/proprietary
DB data models
DB
1 4
Exporter 2 3 Importer
Mapping Mapping
A -Neutral Neutral -B
A –A‘ A‘ –B
A2‘ –B
92
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Data tracking
93
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Innovation: data sources get identifyable
How: AutomationML stores a reference to its original down to attribute level
Jedes Object speichert seine Quelle:
Source tool A Objekt A: Target tool B
- Tool ID „TA“
- Source ID: „12“ DB
DB
Project X
Object A (ID12)
1 4
Exporter 2 3 Importer
AML Document: Referenziert Importiert die Daten
Source Tool und Projekt
- Tool ID „TA"
- Tool A
- Project X
94
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Library of unknown knowledge
95
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Innovation: Explicit knowledge about the unknown
The importer
Proprietary data A exactly knows
Source Tool A Target Tool B
Syntactic: neutral A'
what is known
Semantic: proprietary
DB and what is
DB
unknown.
Unknows can be
stored in a library
1 4
of unknowns.
Exporter 2 3 Importer This library is a
Mapping Mapping software
A –A‘ A‘ -B
requirement spec
for the project
development.
Wissen über Lib of unknown
A‘ data
96
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
The 4 level model how to
understand AutomationML
97
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Use Cases für AutomationML
• Connecting engineering
tools in end-to-end digital
value chains
• Harmonising thought
models in data models
• Neutral storage, archiving
and transmission of
engineering data
• Digital models =
algorithmically accessible
data
98
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
The 4-level
Project information exchange
Layer 3: Payload exchange
Concrete project models as instance hierarchy. Modelling of
model Instance hierarchy, raw
complete or incomplete information. Iterative data exchange.
data, data exchange Allows transmission of single aspects (information, modification,
communication) or focusses user data, secures transfers of low
)noitamrofni Instance models redundancy structured user data
User-and domain model
Layer 2: Semantics,
Domain models in AML class libraries (including the semantic
Domain model
extension of the types by annotations in the RefSemantic)
User-, Domain model
projected, clearly defined, strictly typed application models of
ot
(proprietary, AR-APC, engineering, usually following the MOF and representable in UML
atad
eClass, IOLink), semantics -ensures the semantics of domain knowledge. Proprietary. E.g.
libraries AR-APC, eClass, IOLink
morf(
Object modelling language
Object oriented modelling language, the intermediate model and
ytisned
Layer 1: Objectmodel its multi-layer concept of AML class libraries -here the Object
AML objectmodelling models of the implementation platforms for AML (C++, .NET with
language C#, JREs with JFC for Java, JavaScript...) are created -ensures the
noitamrofnI
semantics of the object-oriented model concepts. Object
AutomationML
modelling language elements e.g. IE, SUC, IFC, libraries, etc.
Syntax
Layer 0: Syntax Serialization as XML code with its grammar (unity of expressions,
XML Syntax, basegrammar strict hierarchy etc.) -ensures automated processing through
correctness and consistency of content
XML
99

© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Agenda 15-16.02.2023
Day 1: Day 2:
• 09:00 Welcome, Introduction into the Equinor problem
• 09:00: Comparison of UML, AML, OPC UA and AAS
space
• 09:10: Ongoing AutomationML Activities
• 09:50 Coffee
• 09:50 coffee
• 10:00 The core of I4.0
• 10:00 AutomationML: How to model automation
• whats new (and what not),
systems
• the impact,
• 11:00 Management of Change
• why and how it will change the future of industry and
automation • during modelling of AML libraries
• 10:45 Interoperability technologies • 12:00 Lunch
• AAS, OPC UA, AML, comparison
• 13:00 Challenges of data exchange
• 11:15 The value of AutomationML
• Required functionality
• 12:00 Lunch
• 13:45 How to achieve industrial interoperability
• 13:00 AutomationML modelling philosophy with the AAS, OPC UA and AML
• 15:00 coffee • 14:30 Q&A, coffee
• 15:30-16:00 Q&A
• 15:00 end of workshop
1
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Overview Day 2
2
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Comparison of
AML, OPC UA and AAS
Summary
3
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
UML, AML, OPC UA, AAS
• Object oriented models
• Supporting Types and Instances
• Very similar!
AAS
Tender Engineering Operation Maintenance
UML
4
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
09:00-09:50
AutomationML – ongoing AutomationML
activities
5
Application
Architecture Communication Robotics Libraries Logic AML 2 AAS Standardisation
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomatSiocneMnLa, Arisosest Administration Shell and OPC UA fit together?
AML subA. gLürdoerups R. Drath M. Riedl A. Hypki M. Schleipen N. Schmidt A. Lüder N. Schmidt
AutomationML Working Groups
Material Handling DKE
E. Yemenicioglu
Toolchain& external activities
IEC
AML working groups Industrialization
M. Langosch
cetihcrAp nS o i t a c i l p A SCD Modelling
nmi o iN. t a s i d radnatSer Sü AL AA. 2 LMAdtmihcS cN. igoLnepei sc eS iM. r arbiLkipy sH cA. itoboRnoe iRi t aM. cinummoCh eat rDr uR. t
Application Scenarios (A. Lüder) sA. o i r a n e c
OPC UA
dtA hD c S d hl dl erM d ü L M. Schleipen PCE Requests
IEC62424
EI K Architecture (R. Drath) Electrical gE. n dli n a H Interfaces al eri at Component
Classification
uT Markus gl o nici e m Rentschler e Y L. Hundt
MTP
& n ai h c ol o Drive
C E Communication (M. Riedl) nM. o ati z ali stri u d n I Configuration
hO sc o g n a L M. Müller
NAMUR
Higher Automation Container
AM. U C P
Robotics (A. Hypki) Levels
nC e p ei hl Sc M. Schleipen
DIAMOND
ntCl e n o p m o
eCl@ss
nL. o ati c sifi s a
Libraries (M. Schleipen) dtDri n u H A. Lüder
e v DEXPI
APC
nM. o ati ur g nfi o C
Logic (N. Schmidt) erHi üll M M. John
Active n o ati m o ut A er h g OPC UA FX
JSON forAML
sM. el v e L
AML2AAS (A. Lüder) Finished ne e p ei hl Sc A. Gatterburg Active
Reference
On hold sA. s @ Cl designation Finished
erA d ü L A. Lüder
On hold
6
CM. P
nJ h o J
LA. M A or f N O S
gR ur b er att G
ehol vsh tiFi c
e c n e er ef
dd e niO
nA. o ati n g si e d
er d ü L
n
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
New activity: the future of AutomationML library development
Core elements of the AutomationML future (currently in preparation)

1. AutomationML global libraries
• AML e.V. introduces a global publishing process for AML libraries with user rights and signatures for modification control.
• AML Libraries are globally accessible.
• Use Case: While creating a new class or attribute type, the AML Editor supports you in re-using existing classes.
2. AutomationML property libraries become semantically referencable.
• AML attribut types and role classes can be referenced electronically to model the meaning of a property.
• Standard libraries for e.g. SI units and many others are provided for global re-use.
• Name your attributes as you like, but model a link to the attribute you mean.
• This makes properties and objects machine understandable.
3. External Libraries are stored outside of my project AML file
• Own libraries only contain own libraries.
• External libraries are referenced.
• This avoids branching and simplifies re-use.
4. Improved tool support for library development and library re-use
• The AML tools (Editor, Engine) provides global access to available AML Libraries.
• The AML Editor should simplify the work with external libraries
7
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Modelling of aspects according to IEC81346
8
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
BPR Reference Designation after IEC81346
• The IEC 81346-1:2009-07 postulates the
existence of three main hierarchical structures
within technical systems.
• functional hierarchy,
• product or component related hierarchy and
• the location hierarchy.
9
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
BPR Reference Designation after IEC81346
• ´
10
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Example
11
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
AutomationML
How to model automation systems
12
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
An automation system is a system of arbitrary complexity
13 [SPINE Project: The Information Modelling Framework Manual]
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
System breakdown, system interaction
14 [SPINE Project: The Information Modelling Framework Manual]
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
System breakdown and topology
15 [SPINE Project: The Information Modelling Framework Manual]
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
An automation component may have multiple aspects
Location
Product
Installation
Function
16 [SPINE Project: The Information Modelling Framework Manual]
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Each aspect may require a separate breakdown structure
17 [SPINE Project: The Information Modelling Framework Manual]
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Each aspect may require a separate breakdown structure
Using digital Information Models is a new working way through the logical flow of value creation during an
industrial investment and development project. The actual execution schedule will have many overlaps and
iterations that are intentionally left out.
18 [SPINE Project: The Information Modelling Framework Manual]
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Comparison with general systems theory
System border System
System-Element
(Teilsystem)
Relations
System-Element
Properties
Role
Properties
System Interfaces System Properties
19
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Object oriented analysis with AutomationML
• Actors (e.g. a Product) à AML Objects
• Funktions à Roles
• Properties à Attributes
• Interfaces between elemens or systems à Interfaces
• Relations between elements à Relations
• Requirements à Requirements
• Abtraction of objects, attributes, interfaces: à Class building
• Create Class trees and derive an Instance tree
• Formulate the problem space by means of classes, roles, interfaces, attributes and instances
20
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
How to model automation systems with AutomationML
Step 1: Develop data flow use
Project information exchange
Layer 3: Payload exchange cases
Concrete project models as instance hierarchy. Modelling of complete
Instance hierarchy, raw data,
or incomplete information. Iterative data exchange. Allows
data exchange
transmission of single aspects (information, modification,
communication) or focusses user data, secures transfers of low
Step 3: Develop software and
redundancy structured user data
)noitamrofni perform the digital data flow AML
Layer 2: Semantics, Domain User-and domain model
model Domain models in AML class libraries (including the semantic extension
User-, Domain model of the types by annotations in the RefSemantic) projected, clearly
Step 2: Agree on and develop
ot (proprietary, AR-APC, eClass, defined, strictly typed application models of engineering, usually
following the MOF and representable in UML -ensures the semantics
atad IOLink), semantics digital domain libraries of the
of domain knowledge. Proprietary. E.g. AR-APC, eClass, IOLink
morf( system elements: classes,
Object modelling language
ytisned Object oriented modelling language, the intermediate model and its properties, interfaces and
Layer 1: Objectmodel multi-layer concept of AML class libraries -here the Object models of
AML objectmodelling the implementation platforms for AML (C++, .NET with C#, JREs with structures.
noitamrofnI language JFC for Java, JavaScript...) are created -ensures the semantics of the
object-oriented model concepts. Object modelling language elements
e.g. IE, SUC, IFC, libraries, etc.
Syntax
Layer 0: Syntax Serialization as XML code with its grammar (unity of expressions, strict
XML Syntax, basegrammar hierarchy etc.) -ensures automated processing through correctness
and consistency of content
21
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Elements of an Automation System:
Products
22
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Modelling digital product catalogues
• Machine-readable data model for required products
Product model
• Step-by-step addition
Device
• Versions
GeVoeMmnoteitlAotr r1y
• Referencing external documents (manual, installation instructions,
Simulation
function modules, certificates etc.)
ML Mootg ooi trc oAr1
23
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Modelling digital product catalogues
• Product model stored in an AML library
• The concept is also reusable for digital requirements
models.
24
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Example product catalogue
25
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
The Automation Component
Aspects of an automation component or production system
26
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Data flow between stakeholders over the lifecycle
27
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Information and sub-model integration into to the AutomationML Component
Principle of the AML-DD package with an example for an IO-Link device
28
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
AML SystemUnitClass of an Exampleproduct
catalogue
AutomationComponent with two M12
Ethernet connectors
Generalandspecific
logicalfunctionofthis
electricalconnector
Technicalimplementationofthe
connector:Interfaceinstanceof
theM12D4PinFemale
Pinsoftheconnector
29
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Modelling the automation system
Modelling preconfigured solutions
30
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Device model versus system model
Neutral electronic data model for a device or system
Product Model
Product • Product model
• product type with type-specific aspects: Geometry, function modules, firmware,
Ge Vo eMm note itlt Aor 1i re manual, installation instructions, simulation model.
• Device instance with individual information: Parameters, interface assignments,
Simulation
etc.
Logik
MMotootroAr1
• System model
• Type information: Topology, geometry, manuals, function blocks.
System model
• Instance information: loud devices and their connections
• Wiring
Plant
Products
VeMnotitlAo1r AutomationML
• Suitability for product catalogue, digital twin, in the entire workflow up to
IO Rack
the business processes.
Documentation
MMotootroAr1
• Future: acceccible on the web
31
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Predefined Solution
A tested system from Equinor is modelled in an AML
library. New versions can be derived from it.
• for solutions already in operation
• as a basis for future solutions
• new forms of distribution
• Traceability
• Algorithmic access for statistics, maintenance notes,
error messages, etc.
• Basis for product and process improvements
• The concept can also be reused for digital
requirements models.
32
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Management of Change (MoC)
for AML libraries and project models
How does AutomationML manage the change of models?
Practical demonstration
Use Cases
33
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Use Cases
Domain Library Development Payload data exchange
• A team develops a domain library (e.g. SCD • Engineering are subject of change. The
standard library, MTP library etc.) and parameter values or relations between
publishes it as Version 1.0.0 objects may change in an engineering tool.
• After one year, some missing classes are • How to send those changes to a receiver?
identified. These are incorporated in • Engineering data types in an engineering
intermediate versions 1.0.1, 1.0.2. tool are subject of change.
• After two years, a new library version is
published: 1.1.0
• How can AML deal with that?
• How can AML deal with that?
34
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Change of models: what does that mean?
• Single Classes may change over time • Sincle Instances may change over time
• ClassX_1.0 • InstanceX_V1.0
• ClassX_1.1 • InstanceX_V1.1
• ClassX_2.0 • Sincle Projects may change over time
• ClassX_2.1
• ProjectX_V1.0
• Libraries may change over time • ProjectX_V1.1
• LibraryX_1.0
• LibraryX_1.1
• LibraryX_2.0
• LibraryX_2.1
• AML itself may change over time
• AutomationML Edition 1
• AutomationML Edition 2
• AutomationML Edition 3
35
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
5 dimensions of versioning
We distinguish between five different types of version information
(1) Versioning of libraries, classes, objects
(2) AutomationML Edition (e.g. Edition 2)
(3) Field: AutomationML version
(4) Field: Schema version
(5) Element: Document origin
36
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
AML supports version trees of a class
37
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Version information (2)
Versions of libraries, classes and objects
Version information for libraries, classes and objects
in the header for each CAEX element
• ChangeMode: values „state“, “create“, „delete“ und “change“
• Description, Version, Revision and Copyright
• SourceObjectInformation, OriginID and SourceObjID
allow the identification of the source of each individual object
• Each library must store its version in theCAEX element Version.
• Each class may store its version in the CAEX element Version..
38
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Version information (2): AutomationML Edition
• „AutomationML Edition 2“ for the actual AutomationML version (Edition 2 from 2018)
• CAEX 3.0 according to IEC62424:2016
• PLCopenXML 2.0 und 2.0.1
• COLLADA 1.5.0 according to ISO/PAS 17506 sowie COLLADA 1.4.1
• Standard libraries as defined in IEC62714
39
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Version information (2): AutomationML-Version
• Field: AutomationML-Version – identifies that this CAEX file follows the rules of AML Ed. 2.
• This field must be „AutomationML 2.1“ for the current AML Edition 2.
40
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Versionsinformation (3): Schema-Version
• Identifies the CAEX schemaversion.
• „3.0“ is the current CAEX-Version
41
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Versionsinformation (4): document origin
• Version information about the origin of AutomationML content in the fiel
SourceDocumentInformation
• This allows tracing of data by associating them to the owner.
42
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Practical Demonstration
43
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Challenges of iterative engineering
exchange
Comparison Engineering 3.0 and Engineering 4.0
Challenges of iterative engineering and required digital iteration functions in a digital value chains
44
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Engineering 4.0 - Digitalization in engineering means
• Moving from mind models and graphic diagrams to digital information models
• Machine readable, machine processable, including semantics
• in all phases
• with digital data exhange
• Consequent integration of tools and data along the engineering value chain
• Providing data integrity, data consistency, data quality
• Introduction of methods for improved decision making
• simulation as methods to test, understand and improve production processes
• digital requirement models that help to understand what is needed
• guided device selection based on requirement models
• automation of routine engineering steps
• …
• Basis of all: data models/information models
45
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Main issue for data exchange in engineering
Data Sender Data Receiver
Data
Data
Engineering Tool Engineering Tool
import
Export
Assumption: Data exchange means: Export, Import, Done
This simplified view is widespread and is demonstrated at trade fairs, but is unsuitable in practice!
46
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Challenges in iterative engineering
Data sender Data receiver
a) Explore data a) Request data
g) Continue g) Continue
b) Select data b) Receive data
engineering engineering
Versions- Versions-
f) Incorporate management c) Difference management c) Calculate/visualize
f) Map & import
feedback calculation differences
e) Receive
d) Data export e) Give feedback d) Quality control
feedback
47
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Iteration functions for export and import
Data Sender Data receiver
• Visualise the internal data • Receiver management
• Selection of the desired data • Data request
• Difference calculation • Data reception
• ID management • Visualisation and difference visualization
• Recipient management • Quality control
• Export of data to AML • Mapping
• Import of data into the target tool
48
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Big Picture how to achieve industrial
interoperability with AAS, OPC UA and AML
Current discussions and misunderstandings in the industrial and scientific automation community
A big picture how all puzzle pieces fit together
Excerpt of the current discussions between IDTA, OPC Foundation, VDMA and AutomationML
(the golden rules)
49
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Different Information Models for different Purposes
• UML/SysML is a graphical modelling method used to build a static information model for exchange
between people. People use it to develop a model graphically, interactively. The actual data exchange is
Brain2Brain. Only at the end, when the UML diagram is good enough, we generate code from
it. UML/SysML is used in the beginning of the object oriented analysis.
• AML is an electronic struture modelling language used to build a static information model for exchange
between engineering tools, i.e. Tool2Tool. Before data exchange, a domain model with libraries and
classes must be modelled. This has to be developed by people in advance. AML is suited for modelling
detail engineering data including topology, geometry and referenced external detail documents. AML is
used in the engineering phase.
• OPC UA is a software framework for data exchange horizontal and vertical between assets and services. It
is connected to operational data (live data or historical data). It provides software functionality as
registration, security, etc. UML and AML do not have a software stack. It is used in the production phase.
• AAS is a software framework in the connected world (cloud) and provides data exchange between
software and the AAS. It acts as digital representation of an asset and provides standardized I40 interfaces
for online access to static data and documents from the cloud. It is not directly connected to sensitive
operational data in the process. AAS is used across the live cycle of an asset.
50
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
AAS versus AutomationML versus OPC UP
TECHNOLOGY TENDER,DISTRIBUTION ENGINEERING PRODUCTION OPERATION SCADA, MAINTENANCE AND
MES, ERP, CLOUD SERVICE
AML - Access to object models - Data exchange - Electronic system - Electronic system - Electronic system
for types, instances and - Component models model to support model to support model to support
solutions - System models human decision- human decision- human decision-
- Engineering-driven - Electronically readable and making making making
acquisition of assets processable
- Detailed
OPC UA - Planning the OPC UA - Secured, unified - Secured, unified - Secured, unified
configuration information access information access information access to
- Test to process operation to process operation process operation
- Access to historical data (read/write) (read/write) (read/write)
AAS - Unified online access to - Unified offline and online - Unified online - Unified offline and
types and sales access to requirements, access to individual online access to
information type information (digital documents or data individual
product catalogues), in the cloud (e.g. documents or data
instance models, online time series data) in the cloud (e.g.
data time series data)
51
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
AutomationML, OPC UA and AAS within RAMI
52
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Big Picture – Overview
Phases and their tools in the asset life cycle
4
Workflow und Tools
(life cycle)
Contracting Engineering Operation Maintenance/Service
Interface to AAS
(REST API)
Information in the AAS
2
Asset Administration Shell
1
3 Interface to AAS (Asset
Integration, technology
open)
Asset 5
Information in the shop
floor (field)
6
Interface to
asset
More assets
OT Network (proprietary)
(with its own AAS, if
IT Network applicable)
53
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Inside the AAS: Information distribution
between AAS and AutomationML
Information in the AAS
Interface to AAS HTTP Other AAS
(REST API) RH ETT SP T Ap7 p REST 2
2 AASX
AAS GUID
Asset Administration Shell 1 AAS are
Libraries, Specifications Sub-and Detailmodel templates 9 registered in an
e.g. AML Libraries SMT AASX GUID SM GUID AAS repository
Submodel Template Submodel (Instance)
e.g. Companion Specs 8
Detail Model Files 11 Submodel TemplateAASX implementation Submodel (Instance) 10
Detail Model Definition AML
Detail Model (File) Detail Model file 3 Interface to AAS (Asset
MTP File AASX Integration, technology
AML SMT MTP SM MTP (Instanace) open)
MTP File MTP file
AML AML
Interface to asset
Asset
(proprietary)
This keeps detail
models independent
5
6
and re-usable for other
use cases outside of the
AAS/I40 ecosystem More assets
(with its own AAS, if
applicable)
54
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Inside the Shop Floor:
Information flow in the Shop Interface to an
Asset (proprietary)
Informa At Aio Sn of the A2 5
Floor with OPC UA AS 1
3
Information in the shop
OPC UA Server kann sich in
floor (field) Shop-Floor einem GDS Repository
Human readable Machinereadable registrieren
Web Interface Cloud Repository
Interface to the Asset
85+ Modelle 85+ Modelle information model Proprietär Asset
(technology open)
UA forDevice Integration
13 OPC UA
OPC UA
UA forMachinery
Protocol Binding
Robotic
ytiruceS Communication Model
Pumps
Asset
Information Model
Kitchen equiment
HarmonizedModels OPC UA Asset
Wind turbine
Oil & Gas: MDIS Domain Models OPC UA
Vendor Extensions
…
Companion Specifications
UA Information Model
Type Definitions PDF XML
Behavior
Profiles
Facets
Templates Standardization Results
55
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Inside the Shop Floor:
Information flow in the Shop Floor with OPC UA
Schnittstelle zum
Asset (proprietär)
Informati do en rs haushalt 2 5
Verwaltungsschale Verwaltungsschale 1
Information in the shop
floor (field)
3
OPC UA Server kann sich in
Shop-Floor einem GDS Repository
Human readable Machinereadable registrieren
Web Interface Cloud Repository
Schnittstelle zum Asset
85+ Modelle 85+ Modelle Informationsmodel Proprietär Asset
(technologieoffen)
UA forDevice Integration
13 OPC UA
OPC UA
UA forMachinery
Protocol Binding
Robotic
ytiruceS Communication Model
Pumps
Asset
Information Model
Kitchen equiment
HarmonizedModels OPC UA Asset
Wind turbine
Oil & Gas: MDIS Domain Models OPC UA
Vendor Extensions
…
Companion Specifications
UA Information Model
Type Definitions PDF XML
Behavior
Profiles
Facets
56Templates Standardization Results
MetaVerse
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Inside the Shop Floor: Data
Space
Information flow in the Shop Floor with OPC UA
Cloud
Schnittstelle zum
Asset (proprietär)
In Vfo errm waa lt ti d uo e nn r gs h ssa cu hs ah la elt Verwaltu2 ngssch1ale 5 External World
Informationshaushalt
im Shop-Floor (im Feld)
3
OPC UA Server kann sich in Management Level
Shop-Floor einem GDS Repository
Human readable Machinereadable registrieren
Web Interface Cloud Repository PlanningLevel
85+ Modelle 85+ Modelle InS fc oh rn mit at ts it oe nll se m z ou dm e l Asset Proprietär Asset
(technologieoffen)
UA forDevice Integration
13 OPC UA SupervisoryLevel
OPC UA
UA forMachinery
Protocol Binding
Robotic Control Level
ytiruceS Communication Model
Pumps
Asset
Kitchen equiment Information Model Field Level
HarmonizedModels OPC UA Asset
Wind turbine
Oil & Gas: MDIS Domain Models OPC UA 6 7
Vendor Extensions
…
(IEC62541 Standard) (IEC62541 Standard)
Companion Specifications
OPC UA interface OPC UA as an
UA Information Model with scaling from information network
asset through all with the possibility to
Type Definitions PDF XML levels including connect layers in any
Behavior Cloud, AAS, way you like
Profiles DataSpace,
Facets MetaVerse
Templ5at7es Standardization Results
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Phases and their tools in the asset life cycle
4
Workflow und Tools
AML OPC UA
(life cycle)
Contracting Engineering Operation Maintenance/Service
Information in the AAS
IS nt ta en rfd aa cr ed ( I e4 .0 g. RH ETT SP T Ap7 p RH ETT SP T 2 Other AAS
AAS API*)
2 AASX
AAS GUID
AAS are
Asset Administration Shell 1
Bibliotheken, Specifications Sub-and Detailmodel templates 9 registered in an
AAS repository
e.g. AML Libraries SMT AASX GUID SM GUID
e.g. Companion Specs Submodel Template Submodel (Instance) 8
AASX
Detail Model Files 11 Submodel Template Submodel (Instance) 10
Umsetzung
Detail Model Definition AML
Detail Model (File) Detail Model file
MTP File
AASX
AML SMT MTP SM MTP (Instanz)
MTP File MTP file
AML AML
Shop-Floor GUID
Information in the shop Asset 5
floor (field) Produktionsnetzwerk
(unabhängig von 6 OPC UA
Interface to
Verwaltungsschale)
asset
OT Network More assets (proprietary)
(with its own AAS, if
58 IT Network applicable)
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Application Recommendations (work in progess…)
A regulated development and certification is required for the AAS submodels.
#1: Avoid uncontrolled growth of
submodels.
Short and concise use cases should prove the necessity of data in the AAS submodels.
#2: In AAS submodels, model
sparingly. Focus on data that is of
interest across the life cycle only.
Re-use and integrate available, established and maintained data models in the AAS.
#3: Outsource detail information
to external established standard
models. Reference them from the
If there are already established formats or information models (OPC UA Companion
AAS.
Specifications, AutomationML), these should be referenced. This is to avoid that the
#4 Do not remodel details in the same contents are modelled again in different submodels or detail models. Integrate
AAS. them!
#5: Use AAS in the Cloud,
The AAS provides data over the whole life cycle of the asset and should be accessible
not in the device.
indipendently of the asset.
#6: Use OPC UA for online and
realtime data exchange in the
Because we need transparent access to complex data models.
field and above the field.
59
© Prof. Dr.-Ing. Rainer Drath Equinor Technology Workshop –How do AutomationML, Asset Administration Shell and OPC UA fit together?
Summary: AML/AAS/OPC-UA complement each other
AML, OPC UA and AAS do not compete, but have useful points of
contact.
• Contents of an AutomationML model can be exposed in an AAS to provide
simplified access to this information. An example of this are services from an
MTP file.
• Contents of a the AAS can be delivered from engineering via AutomationML
information models. An example is the automatic generation of a AAS from
product data available in AutomationML.
• OPC UA information models can be generated automatically from
AutomationML information models because they are created in engineering
and do not have to be modelled manually in OPC UA again.
• OPC UA information models can be referenced from management shells, an
example of this is the referencing of OPC UA nodeset files from the UA Cloud
Library. In this way, a robot manufacturer could make the OPC UA information
model of the robot available to the customer at an early stage via the
management shell, before the robot is actually ordered.
• The model overlaps between AAS, AML and OPC UA are always associated
with a useful use case. Double modelling of extensive information models is
not desirable, but leads to redundancy, branching, inconsistencies and high
development costs.
60