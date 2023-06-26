# Digital Twin and Asset Administration
Shell Concepts and Application
in the Industrial Internet and Industrie 4.0

Digital Twin and Asset Administration
Shell Concepts and Application
in the Industrial Internet and Industrie 4.0
An Industrial Internet Consortium and Plattform Industrie 4.0 Joint Whitepaper
Birgit Boss (Robert Bosch GmbH), Somayeh Malakuti (ABB Corporate Research Center,
Germany), Shi-Wan Lin (Yo-i), Thomas Usländer (Fraunhofer IOSB), Erich Clauer (SAP), Michael
Hoffmeister (Festo SE & Co. KG), Ljiljana Stojanovic (Fraunhofer IOSB)

- 1 -
Digital Twin ........................................................................................................................... 4
The Concept and History ............................................................................................................... 4
Relationships among Digital Twins in Systems................................................................................ 8
Use Cases .................................................................................................................................... 10
Asset Administration Shell (AAS) .......................................................................................... 11
The Concept and History ............................................................................................................. 11
Basic Elements ............................................................................................................................ 13
Alignment of The Asset Administration Shell and IIRA .......................................................... 16
The Information Silo Problem .............................................................................................. 17
Modeling and Building Digital Twins with Asset Administration Shell ................................... 19
Technical Aspects of Digital Twins................................................................................................ 19
Information Modeling ................................................................................................................. 20
Information Population ............................................................................................................... 22
Information Synchronization ....................................................................................................... 23
APIs…… ....................................................................................................................................... 23
Connectivity ................................................................................................................................ 24
Deployment ................................................................................................................................ 25
Security ...................................................................................................................................... 26
Interoperability ........................................................................................................................... 27
Summary and Conclusions ................................................................................................... 28
Definitions from IIC.............................................................................................................. 29
asset..………………………………………………………………………………………………………………………………………… 29
digital representation .................................................................................................................. 29
digital twin.................................................................................................................................. 29
information................................................................................................................................. 29
interoperability ........................................................................................................................... 29
References .......................................................................................................................... 31
Authors and Legal Notice ..................................................................................................... 33
- 2 -
Architecture Alignment and Interoperability
The internet has brought about an age of ubiquitous connectivity and seamless information
exchange, transforming the way we live, work, produce and consume. It is now enabling a
revolution in industrial systems, through the Industrial Internet of Things (IIoT). High-speed
networks, open architectures, open standards and intelligent infrastructures that communicate
with each other are creating technological innovations at a rate unseen since the first industrial
revolution.
As industrial components and equipment are increasingly connected, forming large IIoT systems,
how to enable reliable communication and interaction between them seamlessly and cost-
effectively has become crucial for success. Therefore, it is important to ensure interoperability of
connected components, equipment and products in the production and operational environment
in various industrial and infrastructural domains.
Two key industry consortia are advancing the development of the IIoT. Plattform Industrie 4.01
is the German strategic initiative to maintain Germany’s leadership in providing advanced
manufacturing solutions. It is set to revolutionize manufacturing and production, and usher in
the fourth industrial age. It represents a new stage of organization and control of the entire value
chain and the lifecycle of products with keen attention to the legal and human impact.
The Industrial Internet Consortium (IIC)2 is the world’s leading organization that serves to deliver
transformative business value to organizations, industry and society by accelerating adoption of
a trustworthy internet of things. It accomplishes this by enabling trustworthy industrial internet
systems, where systems and devices are securely connected and controlled to deliver
transformational outcomes across multiple industries. These industries include healthcare,
transportation, energy, public domain infrastructures as well as manufacturing.
Digital twin (DT) is known to be a key enabler for various IIoT and Industry 4.0 use cases. Since
many different flavors of digital twin for different use cases and industries currently exist, IIC has
taken the first step to provide a clear and concise definition of digital twin along with its various
technical aspects, standards and use cases.3 The Asset Administration Shell (AAS) is an
implementation of a digital twin for industrial applications. It was specified and developed by
Plattform Industrie 4.0 to enable cross-company-interoperability across the complete value
stream.
1 Industrie 4.0 (German) or Industry 4.0 describes the combination of production methods with state-of-
the-art information and communication technology, while Plattform Industrie 4.0 is the German cross-
industry and government initiative to support the implementation of Industrie 4.0 (www.plattform-
[i40.de/PI40/Navigation/EN](http://i40.de/PI40/Navigation/EN)).
2 [www.iiconsortium.org](http://www.iiconsortium.org/)
3 See [11]: Industrial Internet Consortium, “Digital Twins for Industrial Applications,” whitepaper,
February 2020.
- 3 -
Architecture Alignment and Interoperability
The aim of this joint whitepaper is to explore the technical aspects of digital twin as identified by
IIC in relationship to the Asset Administration Shell. The structure of the document is as follows:
• Introduction and history to Digital Twin in general including description of use cases
• Introduction and history to the Asset Administration Shell
• A brief description about the information silo problem
• Alignment of the Asset Administration Shell and the IIC Reference Architecture (IIRA)
• Exploration of technical aspects of the Asset Administration Shell that support digital twin
• Summary and outlook
DIGITAL TWIN
THE CONCEPT AND HISTORY
The term digital twin has evolved since its first appearance in 2003 by Grieves in his course on
product lifecycle management.4 He proposed that a digital twin had three parts: physical product,
virtual product and their connections. In 2012, the National Aeronautics and Space
Administration (NASA) defined it as “a multi-physics, multiscale, probabilistic, ultra-fidelity
simulation that reflects, in a timely manner, the state of a corresponding twin based on the
historical data, real-time sensor data, and physical model”.5 Other companies and researchers6 7
8 have definitions of digital twin using digital twin for more than just simulation.
4 M. Grieves, “Digital twin: Manufacturing excellence through virtual factory replication,” White paper,
1. [Online]. Available:
[http://www.apriso.com/library/Whitepaper_Dr_Grieves_DigitalTwin_ManufacturingExcellence.php](http://www.apriso.com/library/Whitepaper_Dr_Grieves_DigitalTwin_ManufacturingExcellence.php)
5 E. Glaessgen and D. Stargel, “The digital twin paradigm for future NASA and U.S. Air Force vehicles,” in
Proc. 53rd AIAA/ASME/ASCE/AHS/ASC Struct. Struct. Dyn. Mater. Conf., 2012. [Online]. Available:
[https://arc.aiaa.org/doi/pdf/10.2514/6.2012-1818](https://arc.aiaa.org/doi/pdf/10.2514/6.2012-1818)
6 [https://medium.com/@iskerrett/the-reality-of-digital-twins-for-iot-a89f7a51c6fc](https://medium.com/@iskerrett/the-reality-of-digital-twins-for-iot-a89f7a51c6fc)
7 [https://www.i-scoop.eu/iot-digital-twin-initiatives-gartner-platforms/](https://www.i-scoop.eu/iot-digital-twin-initiatives-gartner-platforms/)
8 [https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WWL12391USEN&](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WWL12391USEN&)
- 4 -
Architecture Alignment and Interoperability
Figure 1 Definition of Digital Twin over Time [11]
To avoid multiplicity of terms, IIC has proposed the following definition for digital twin: “Digital
representation, sufficient to meet the requirements of a set of use cases.” Digital representation
is defined as “Information that represents attributes and behaviors of an entity”.9 An entity is
defined as an item that has recognizably distinct existence, such as a person, an organization, a
device, a machine tool, a production line, a subsystem or a group of such items.
To recapitulate, a digital twin is a formal digital representation of an entity, with attributes and
optionally computational, geometrical, visualization and other models, offering a service
interface for interacting with it,10 adequate for communication, storage, interpretation, process
and analysis of data pertaining to the entity in order to monitor and predict its states and
behaviors within a certain context. The content of the digital representation is determined by the
set of use cases for which digital twin is designed.
The industrial systems and the industrial usage scenarios are complex and diverse, therefore,
their requirements on digital twin are naturally complex and diverse as well, leading to different
flavours of digital twin implementations. Some implementations of digital twin may contain many
attributes and data, computational capabilities and perhaps even a formal interface for
communication to satisfy the application requirements, some others may only need a small set
of attributes and data to be sufficient to support their application.
9 For the purposes of this paper, the term ‘entity’ used in IIC’s digital twin definition and ‘asset’ used in
the I4.0 asset administration shell can be considered equivalent and thus are used interchangeably.
10 Computational models refer to computation methods or functions performed on the data, examples of
which include simulation, machine-learning-based pattern recognition, statistical calculation and other
analytic calculation. It is sometimes used interchangeably with analytics.
- 5 -
Architecture Alignment and Interoperability
Generally, a digital twin consists of three elementary aspects, namely, data, models and service
interfaces. The following describes a comprehensive digital twin in these three aspects for
complex and advanced usage scenarios. In practical implementations, only parts are required.
Data in a Digital Twin
First, a digital twin may contain data collected from and about its real-world11 counterpart
spanning its full lifecycle. These data include the as-designed data (e.g. product design
specifications, process and engineering data), as-manufactured data (e.g. production equipment,
material, method, process, quality assurance and operators), and as-maintained (configurations,
telemetry and real time and historic usage data, and maintenance records) of the real-world
counterpart. These data may also include transactional records.
How to collect, process, store and manage these data to facilitate the necessary monitoring,
computation and analytic is a major function of a digital twin. For example, how to create a single
truth of data, i.e. concept of its master data is important to the successful implementation of
digital twin.
Models in a Digital Twin
Second, a digital twin may contain a variety of computational and presentational models
pertaining to its real-world counterpart ranging from those first-principle-oriented (natural laws),
data-oriented (statistical, machine learning or artificial intelligence), geometrical and material
(CAx models such as CAD, CAE) or visualization-oriented (3D simulation and virtual/augmented
reality).
Service Interfaces in a Digital Twin
Last, a digital twin may provide service interfaces for software applications to access its data and
invoke commands, or run models (see Figure 2). The service interfaces, perhaps implemented in
the form of a RESTful API, enable connectivity and interactions among the twins and applications
and is a differentiator from a mere 3D model or any other computational model. Standardized
service interfaces are key for interoperability.
11 The term “real-world counterpart,” not physical counterpart, is used because the counterpart of a
digital twin may be a logical object, such as an organization or a production process. In principle, a digital
twin can be used to represent anything in the real-world of interest to an application.
- 6 -
Architecture Alignment and Interoperability
Such a digital twin construct organizes and enables access to the data in association with its
corresponding real-world objects from an Operational Technology (OT) perspective, rather than
the usual data tables in databases from an IT perspective, making it better suited for running
computational models and developing applications.
As required by specific use cases, the connection between a digital twin and its real-world
Figure 2 Digital Twin – Data, Models and Service Interfaces
counterpart may be dynamic, possibly real-time and bi-directional. Sensor data and operational
states of the real-world entity (e.g. an asset) could be sent continuously to the digital twin; any
operational instructions resulting from decisions based on analytics in the specific application
context could be sent back to the real-world entity to be executed.
A comprehensive digital twin may have multiple facets that include, but are not limited to,
combinations of the following categories:
• Historical and real time data during the full lifecycle of the entity it represents that include
- design specification data,
- manufacturing process data,
- usage data,
- transactional data, etc.
• Computational and presentational models that include
- physical models,
- statistical models,
- control or transactional model
- machine-learning models,
- geometrical and material (CAx models such as CAD, CAE),
- visualization models (for various 3D applications like 3D simulation and VR/AR/MR)
- 7 -
Architecture Alignment and Interoperability
• A service interface for communicating and interacting with the digital twin (and thus with
the corresponding asset as well).
With a digital twin, therefore, we can describe, simulate, predict the state and behavior of its
real-world counterpart based on the computational models evaluated on historical and real time
data, and consequently, can respond optimally to changing conditions of the real-world twin.
RELATIONSHIPS AMONG DIGITAL TWINS IN SYSTEMS
The level of abstraction and complexity of a digital twin must be such that it is sufficient to meet
the requirements of the use cases for which the digital twin is designed.
A discrete digital twin can be defined for a discrete entity, and is a single entity that supports its
application within a given usage context without needing to be broken down further. For
example, the gearbox or motor for a ball mill in mining can be monitored on at this entity level.
A composite digital twin is a combination of discrete digital twins that represent an entity
comprising multiple individual components or parts.12 The composition may take place at
different levels. For example, a production cell is a composite entity, whose digital twin comprises
the digital twins of the production machines within the production cell. An entire plant is a
system, whose ‘system’ digital twin comprises several composite digital twins.13
As depicted in Figure 3, a relationship between digital twins in a composition may be:
Hierarchical: Just like their real-world counterparts, a set of component digital twins can be
assembled into an equipment digital twin, a set of equipment digital twins can be assembled into
a production line digital twin, a set of production line digital twins can be assembled into a factory
digital twin and so on, thus forming a hierarchical structure among them.
Associational: There can be various associations between digital twins, just like their real-world
counterparts. A gas pipeline digital twin is associated with its gas production and consumption
equipment digital twins. The associational relationship is useful not only in describing their
relationship and interaction paths, but also necessary for analytical computation as well.
Peer-to-peer: The peer-to-peer relationship is observed in a group of equipment of same or
similar types that perform the same or similar functions. The relationship of this equipment is of
a peer-to-peer nature. In these cases, the total effect of all the equipment is the simple sum of
the effect produced by each piece of equipment. For example, in a wind farm digital twin can be
12 Depending on the use case requirement, a discrete digital twin could be a part of a gearbox or motor
that should be monitored separately. In this case, a gearbox or a motor is considered a composite digital
twin.
13 In general, the requirements of the digital twin application define the necessary system boundary, or
the system-of-systems digital twin.
- 8 -
Architecture Alignment and Interoperability
built by the aggregate of digital twins of its constituent the wind turbines, each of which bears a
peer-to-peer relationship to other wind turbines.
Figure 3 Relationship between digital twins in a composition [11]
With the composability of digital twins, if we define a common construct (data, models and
service API) for digital twins, we can build digital twins for components, and from them to
construct equipment digital twins, and in turn, production line, workshop, factory and enterprise-
level digital twins, just as we organize these entities in the real-world. A digital twin thus offers a
systematic approach to represent complex real-world systems digitally, including those in the
manufacturing environment, building comprehensive digital factories, as shown in Figure 4.
- 9 -
Architecture Alignment and Interoperability
Figure 4 Digital Factory Representation build from Digital Twins
USE CASES
The concept of digital twins is used in multiple IIoT domains. Here are some examples:
Smart manufacturing: Digital twins can be used as a means to systematically collect, aggregate
and manage data of manufacturing assets of multiple types, such as products, production devices,
equipment, cells, plants and supply chains. The gathered data can be accessed uniformly and
reliably along the whole lifetime of an asset instance independent of its lifetime phase and asset
type. These data include elements about, for example, bidding and ordering, design, engineering,
production, commissioning, operations, maintenance and service, and finally end of life. Typically,
as often the case of today, these data elements are scattered across multiple sources with
different access paradigms, interfaces and access policies. If accessible at all, it is time consuming
and error prone to find the right data. The digital twin offers a way to homogenize this data and
provide a standardized single point and mean of access to the data.
Various advanced applications can leverage the content of the digital twin in a digital twin
ecosystem. Examples for such advanced applications are product quality track-and-trace,
production process simulation and optimization, production process diagnostics, energy
efficiency optimization, predictive maintenance, flexible plant design, virtual commissioning of
field devices and real-time simulations.
Automotive: In the automotive industry, digital twins can be used to represent individual
components of vehicles as well as the vehicle as a whole. Digital twins enable performing crash
tests as often as needed, and live assessments of vehicle’s performance to offer better
maintenance services before the vehicle breaks down. The digital twin may also offer a great way
to manage and interact with autonomous vehicles.
- 10 -
Architecture Alignment and Interoperability
Supply chains and logistics: Production of goods is heavily dependent on an, possibly global,
supply network. To have full transparency and assess the fulfillment of selection criteria of
suppliers, the supply network should encompass organizations beyond the tier 1 supplier down
to the supplier of basic materials and resources. A digital twin of supply networks shall comprise
active and potential supply chains and associates them with existing and emerging risks (e.g.
related to extraction, production and transportation). This approach helps in forecasting delivery
and production problems and in reacting quickly once risks exceed defined thresholds or
unfavorable events occur, such as natural disasters, epidemic or even pandemic diseases or
political unrest.
Building automation: Significant amounts of data are generated during the design and
construction of a building, but it is very difficult to access and use these data because of it is so
heterogeneous. Consolidating the data in digital twins enables the immediate access to data and
enables owners and operators to manage buildings or an entire portfolio of properties. The digital
twin of properties can be used to, for example, offer better on-site maintenance of the properties
and troubleshooting of problems.
Smart cities and critical infrastructures: The trend towards digitalization of different domains
such as mobility, energy, healthcare and governmental activities culminates in cities. Smart cities
and smart regions master these cross-domain challenges by providing a suitable infrastructure.
Digital twins of cities help analyze and forecast critical conditions in traffic, environment and
critical infrastructure (e.g. energy and water supply). Moreover, digital twins help city planners
model and visualize the effects of building and infrastructure projects so that planning
alternatives may be discussed with stakeholders and the citizens affected. City planners need an
open infrastructure in which sensor data from multiple domains may be shared following
specified access and usage control policies. Only then can services be built efficiently and shared
with stakeholders.
ASSET ADMINISTRATION SHELL (AAS)
THE CONCEPT AND HISTORY
In 2019, Plattform Industrie 4.0 made interoperability one of its strategic fields for 2030 (in
addition to autonomy and sustainability). Interoperability enables cooperation and open
ecosystems that permit plurality and flexibility. “Standards and integration are needed for this,
as are a uniform regulatory framework, decentralised systems and artificial intelligence.”14
The Asset Administration Shell (AAS) is the central concept of Plattform Industrie 4.0 to enable
interoperability.
14 2030 Vision for Industrie 4.0 [https://industrie40.isometric.site/#/5d674e14c798d1000ebc57fe](https://industrie40.isometric.site/#/5d674e14c798d1000ebc57fe)
- 11 -
Architecture Alignment and Interoperability
In 2015, the Reference Architecture Model for Industrie 4.0 (RAMI 4.0) introduced the AAS as a
digital representation of an object that “turns [this] object into an Industrie 4.0 Component”
[2].The concept of the AAS was further elaborated in 2016, see [1] and [3].The aspect of
composite I4.0 components was addressed in 2017, see [13].
Figure 5 Comparison References Architectures of Plattform Industrie 4.0 and IIC [7]
In 2017, the Plattform Industrie 4.0 and IIC started a collaboration to map and align the two
reference architectures, Plattform Industrie 4.0’s RAMI4.0 and IIC’s Industrial Internet Reference
Architecture (IIRA) [7]. The concept of the I4.0 component and thus of its AAS was identified as
unique to RAMI 4.0 (see Figure 5).
Since 2017 [12] it has been observed that the concepts of digital twin and AAS are evolving in the
same direction. This is why today the AAS is described as the implementation of a digital twin for
Industry 4.0.
The first part of a specification series for the AAS was published in 2018 and subsequently revised
and enhanced in 2019 and 2020 [4].It enables interoperability across value stream of an asset
and enables substitution of one asset by another without changing the information model and
API of its digital twin. This series of specifications help developers who want to implement an
interoperable digital twin for Industry 4.0 or industrial applications.
- 12 -
Architecture Alignment and Interoperability
Other specifications in the series will cover the API of AAS as well as APIs of the infrastructure
such as registration or discovery services. A usage view conformant to the IIRA reference
architecture was created to support these activities [14].A functional view is also in progress.
In December 2019 the IEC Workgroup WG24 “Asset Administration Shell for Industrial
Applications” was announced within TC65. ISO CD 23247 discusses the AAS as part of its digital
twin manufacturing framework.
BASIC ELEMENTS
The AAS specifies a technology-neutral information model (see Figure 6).
Figure 6 Serializations and Mappings for the Asset Administration Shell [4]
Additionally, the AAS derives concrete formats for interoperability from this technology-neutral
information model: XML, JSON, RDF, OPC UA and AutomationML are provided (see Figure 6). For
supporting the offline-use case of information exchange a corresponding package format (AASX)
for file exchange of AASs, is defined [4].
- 13 -
Architecture Alignment and Interoperability
Figure 7 The Asset Administration Shells with its Submodels (© Plattform Industrie 4.0)
The main parts of an AAS (see Figure 7) are:
• meta data about the asset it is representing and
• the submodels representing a specific aspect related to the asset and the use cases that
need to be supported by the AAS.
- 14 -
Architecture Alignment and Interoperability
Figure 8 Information Model of the Asset Administration Shell (Extract)
Figure 8 shows an extract of the metamodel of the AAS. An AAS represents exactly one asset.
Assets of kind “Type” (with information for instance from the technical data sheet) are
distinguished from assets of kind “Instance” (with measured data, for instance the actual
temperature).
An asset may be represented by several different identification properties such as the serial
number, its unique identifier or its RFID code. Such local identification properties are defined in
the so-called asset identification model.
Submodels comprise a set of submodel elements. Submodels and submodel elements may be
qualified by a qualifier.
There are different subtypes of submodel elements, such as properties, operations and
collections.
Every submodel element needs a semantic definition. The submodel element might either refer
directly to a corresponding semantic definition provided by an external reference (e.g. to an
eCl@ss or IEC CDD property definition) or to a local semantic definition. Such a local semantic
definition is called concept description.
Data specification templates can be used to define which attributes (besides those predefined by
the metamodel) are used to define a submodel element or a concept description.
- 15 -
Architecture Alignment and Interoperability
Some data-specification templates like the template for IEC 61360 property definitions are
predefined and recommended by Plattform Industrie 4.0. If proprietary templates are used,
interoperability with other AAS cannot be ensured.
The AAS supports views (not visible in Figure 8). Views may consist of any elements that are
referable. A “safety view”, for example, contains all properties or operations that are safety
relevant and need special treatment.
AASs, assets, submodels and concept descriptions need to be globally uniquely identifiable. Other
elements like properties, collections and operations need to be referable within the model and
thus only need a local identifier.
Every AAS must be secure. Access permission rules can be defined that describe the permissions
an authenticated subject has on which object.
ALIGNMENT OF THE ASSET ADMINISTRATION SHELL AND IIRA
The IIRA Architecture Framework ([9]) distinguishes stakeholders’ usage concerns from technical
concerns, such as how to define system architectures. This approach, illustrated in Figure 9, helps
in positioning digital twins and AASs in an architecture framework and in understanding the
differences between them.15
The usage viewpoint addresses the concerns of expected system usage. In a virtualized IIoT
environment, the stakeholders of these concerns express the intended functionality. For digital
twins, it is not the physical asset that is looked at but its representation in a virtual world. In the
architecture view resulting from the usage viewpoint, the focus can be on how to use a digital
twin and not how to realize.
According to the IIRA, the functional viewpoint focuses on the “functional components in an IIoT
system, their structure and interrelation, the interfaces and interactions between them and the
relation and interactions of the system with external elements in the environment, to support
the usages and activities of the overall system.” This is the perfect fit for the AAS as a standardized
concept on how to realize a digital twin in an IIoT/Industrie 4.0 system environment. The AAS
needs to be complemented by supporting infrastructure services (e.g. for registration and
discovery of AASs and its submodels, security management). The requirements of such a digital
twin system are described in the usage view. To enable interoperability, the interfaces of these
infrastructure services need to be standardized.
15 As this document focuses on architectural and conceptual aspects, the IIRA Business Viewpoint is
discussed here.
- 16 -
Architecture Alignment and Interoperability
Figure 9: Digital Twin and Asset Administration Shell in an Architectural Framework
The implementation viewpoint “deals with the technologies needed to implement functional
components, their communication schemes and their lifecycle procedures.” The resulting view
coincides with the serialization and technology mappings of the AAS to AutomationML, XML,
JSON, RDS and OPC UA information models, and the implementation of the infrastructure service
interfaces in service components of IIoT platforms.
THE INFORMATION SILO PROBLEM
Applications depend on interoperability, but when data, information and services are not offered
in a standardized way, there is none, and that results in information silos. Already within one and
the same company, different sources of data are used. When this data is homogenized so that is
can be accessed via a standardized interface, digital twins offer interoperability within one
company. However, the information offered by a proprietary digital twin of Company A cannot
be understood by applications or other digital twins of Company B (see Figure 10). Business cases
involving several partners along the value chain are very difficult to realize without standards.
- 17 -
Architecture Alignment and Interoperability
Figure 10 Tackling Information Silo via Digital Twin
The AAS offers a standardized way of providing and accessing information and thus helps
overcome the information silo problem. A detailed analysis of the features of the AAS is provided
in the next section.
Figure 11 shows an example architectural pattern where the AAS is used in brown-field scenarios
to enable interoperability across multiple proprietary digital twins. This is done by facades that
map proprietary service interfaces to standardized AAS services and translate proprietary
information of the proprietary digital twin to standardized information as offered by the AAS via
its submodels. If there is no online access possible between the companies via APIs also
information exchange via the standardized package exchange format of the AAS can be realized.
In greenfield scenarios, the AAS can directly be adopted to implement digital twins. By following
a single standard for digital twins, all industries, especially end users, benefit from an open and
standardized metamodel, standardized data models with homogenized semantics (e.g., technical
and operational data) and standardized APIs and infrastructure services.
- 18 -
Architecture Alignment and Interoperability
Figure 11 Information Silo via Asset Administration Shell in Brown-Field Scenarios
MODELING AND BUILDING DIGITAL TWINS WITH ASSET ADMINISTRATION SHELL
We now examine the AAS in more detail, addressing interoperability and technical qualities that
need to be addressed for a successful digital twin implementation.
TECHNICAL ASPECTS OF DIGITAL TWINS
The IIC whitepaper “Digital Twins for Industrial Applications” [11] lists various technical aspects
that need to be considered when designing a digital twin.16 We elaborate now on how the current
design of the AAS deals with these aspects.
16 In the following discussions, we have many quotes from [11]. For better readability, however, we do
not explicitly highlight these quotes. This note serves a general acknowledgement and attribution to [11].
- 19 -
Architecture Alignment and Interoperability
Figure 12 Technical Aspects of a Digital Twin [11]
The technical aspects considered are (see also Figure 12):
• Information modeling
• Information population
• Information synchronization
• APIs
• Connectivity
• Deployment
• Security
• Interoperability
INFORMATION MODELING
The core element of digital twin is information, which is related to different lifecycle phases of
the underlying entity. Various key decisions must be taken in this regard. Examples are [11]:
• a meta-model for digital twins describing the required internal models for use cases,
• mechanisms to structure and modularize the content of digital twins and to extend the
content when new kinds of information become available over the entity’s lifecycle,
• standards that must be adopted to define the structure and content of digital twins so
that cross-company information exchange can facilitated,
• mechanisms to map existing information to such standards,
• mechanisms to model relations among the information within one digital twin and
• means to model various kinds of digital twin assemblies.
Sharing of semantic information of data in an interoperable and modular way is one of the key
concerns that the AAS aims to solve.
- 20 -
Architecture Alignment and Interoperability
The first part of the specification of the AAS deals with the metamodel for the information that
is made available for the underlying asset. Then, the main concept of the AAS are submodels (see
Figure 7). These submodels correspond to the internal models required by use cases to be
supported by the digital twin. Modularization is a key feature of the AAS: it structures the
information within the submodels, each submodel being independent of the other. For more
information of the advantages of modular submodels, see [18].
Within one submodel further structuring is supported via so-called submodel collections.
New submodels can be added during the life cycle of the asset to its AAS via its API. Existing
submodels can be deleted or updated.
The AAS provides a simple but powerful way to specify the semantics of data that is offered for
the asset. Semantics is not specified within the AAS itself but by a semantic reference to a
corresponding semantic definition (in short called “semanticId”). These concept definitions can
be defined in external dictionaries like eCl@ss or IEC CDD. Copies of the corresponding concept
descriptions can be added to the AAS package for easier access. It is also possible to define
proprietary concept descriptions specific for an asset in its AAS if no definitions exist so far.
Semantic definition references can be added for submodels, for data and for relationships, for
qualifiers, views and so on.
The AAS does not prescribe which and what content it contains. Content is modelled via
submodels. Submodels and each submodel element provide a so-called semantic reference that
gives a reference to its concept definition. Figure 13 gives an example: without semantic
reference to a concept description defining the semantics the meaning of a value like “2000” is
not clear. It might be anything, a year, 2000 EUR, 2000 steps and so on. Together with its
semanticId (here from eCl@ss), the semantics are defined in a standardized way using IEC 61360
as a basis: In this context the meaning of “2000” is “maximum rotation speed in 1/min” for the
asset under consideration.
- 21 -
Architecture Alignment and Interoperability
Figure 13 Semantic Reference (semanticId) in the Asset Administration Shell (© Plattform Industrie 4.0)
Document [4] provides a developer-ready specification of an information model in a technology
neutral format (see also Figure 6). In addition, several serializations and mappings are provided:
XML, JSON, OPC UA, AutomationML and RDF.
In [13], different assemblies of AASs are discussed. These are supported by the information
model [4].The assembly is an asset with its own unique id, and also represented by an AAS.
Hierarchical, associational and peer-to-peer composition (see Figure 3) is supported by the AAS.
INFORMATION POPULATION
Information for digital twins originate from various sources. Some may be maintained inside the
digital twins. For instance, if an advanced analytics application uses a digital twin content as its
input, the application may only store the results of the analysis into the digital twin itself. Various
key decisions must be taken regarding the information population from information sources into
digital twins, such as mechanisms to [11]:
• populate information from various sources such as devices, applications, databases or
other digital twins,
• copy the information into digital twins, or to reference the information from digital twins,
or a combination of these on demand,
• cache the information and
• populate online and offline information (such as for online monitoring of real-world
entities or in offline simulation tests).
A digital twin may not directly store the complete data set related to the corresponding asset.
Instead, it provides a master map to all relevant data using references to data stored elsewhere.
- 22 -
Architecture Alignment and Interoperability
Corresponding to the information population characteristics described above, in AAS:
• data population can be done online via its API. Offline population of data can also be
achieved via the AAS exchange package format (AASX) using predefined format
serialization format such as XML and JSON.
• every submodel of an of an AAS can be deployed in different ways. Each submodel may
have its own implementation and may access different data sources. Thus, every
submodel implementation is responsible for correct data population.
• a submodel has a globally unique identifier to allow sharing of information between
different AASs. The implementation of an AAS has to take this into account when
populating it.
• caching is not covered in the specifications of the AAS. It is considered implementation
specific.
INFORMATION SYNCHRONIZATION
Digital twin connects to and collects data from many data sources. To ensure consistency of the
data and information, information synchronization [11] needs:
• mechanisms to synchronize information between a digital twin and the relevant
information sources in both directions from information source to digital twin and vice
versa,
• means to synchronize information among multiple digital twins taking part in in various
composition forms and
• policies (such as security and synchronization frequency) to perform information
synchronization and standards and means to ensure interoperability of digital twins and
their information sources to facilitate information synchronization.
The AAS does not address information synchronization; it is considered implementation specific.
APIS
Digital twins interact each other and with other components in a system. To facilitate these
interactions, they require various APIs [11]:
• that are suitable for different kinds of applications (such as real-time simulation
applications, analytics applications and artificial intelligent applications) that consume
and populate digital twin content,
• for interacting with other digital twins possibly across vendors,
• for interacting with the corresponding underlying entity to facilitate information
collection from and control of the entity and
• for interacting with other information sources to enrich and synchronize the content of
digital twins.
- 23 -
Architecture Alignment and Interoperability
Various key choices are to be made regarding the implementation of the information access APIs,
such as
• mechanisms for offline information access (such as in the form of files in different
formats),
• mechanisms for online information access (such as in the form of RESTful APIs),
• mechanisms for exchanging information in bulk or stream,
• APIs for interacting at the levels of cloud, edge and device (such as cloud-to-cloud, device-
to-cloud and cloud-to-device) and
• standards for APIs to facilitate interoperability across vendors.
Three scenarios for AASs are supported:
• passive AAS exchanging information with partners on a file base [4]
• reactive AAS providing access and change of information via APIs, also invoking of
operations can be done via APIs (in work) and
• proactive AAS that are autonomously interacting with other AASs to complete a given task
(for example by negotiating, see [18])
The APIs for reactive AASs will be specified for (at least) https, MQTT and OPC UA.
The API specification is independent of the deployment of the AAS in a data center, the edge or
a device.
CONNECTIVITY
Connectivity is the key enabler for interactions with and among digital twins. Various key choices
are to be made regarding enabling connectivity. Examples are: [11]
• mechanisms for uniquely identifying a digital twin and its underlying entity to establish
connection between them,
• mechanisms for automatically discovering the underlying entity in network to establish
the connection to its digital twin,
• mechanisms to discover other digital twins to establish connectivity among them and
• connectivity standards to facilitate interoperability across vendors.
Connectivity offers two important functions to support applications, namely,
• registration and discovery of information sources and
• information access once the application knows about a potential information source.
The AAS provides services for accessing the information representing the asset. It is crucial that
this access is secure (see section Security). Additionally, “exposure and discovery services” will
be made available so that an application knows about the assets and the AASs available for an
asset.
- 24 -
Architecture Alignment and Interoperability
The Reference Architecture of Plattform Industrie 4.0 (RAMI4.0) shows the different life cycle
phases of an asset. For different life cycle phases different formats and protocols are considered
to be appropriate (see Figure 6). For the operation phase, for example, a mapping of the AAS to
OPC UA is done17. For connectivity across plants and companies also http and MQTT are
considered. For the life cycle phase “engineering,” AutomationML is considered an appropriate
serialization. For exchange of information between different partners on file basis, XML and JSON
formats are provided (together with the definition of a file exchange format AASX). For analysis
purposes, an RDF mapping is provided.
DEPLOYMENT
Digital twins can be deployed on a spectrum from the edge itself to the cloud, based on the
requirements of the application. The decision is typically based on factors such as [11]:
• latency and response time requirements,
• interoperability and integration with other systems,
• control requirements and
• complexity and power requirements of analytics.
To deploy digital twins, we need mechanisms to:
• deploy the content of a digital twin in locations such as IoT device, edge and cloud,
• discover individual digital twins distributed on different locations to form composite
digital twins and
• support polymorphic digital twins, meaning that a digital twin can be deployed in different
forms at different deployment locations.
As shown in Figure 14, one instance may be regarded as the master working copy with its master
models, master data and its associated definitions stored and managed in a repository. The other
instances can be tailored for different applications, for example, offline instances for simulation
purpose and online instances for remote monitoring. In the latter case, the information will be
updated from its real-world counterpart to reflect the truth of the real-world (“ground truth”).
Sometimes the digital twin can be deployed adjacent to the real-world counterpart to perform
on-location monitoring or analysis of the real-world counterpart asset to provide (near-)real-time
feedback to optimize the operation of the asset.
17 A corresponding OPC UA Companion Specification will be published soon.
- 25 -
Architecture Alignment and Interoperability
Figure 14 Deployment Model of Digital Twins [11]
AASs can be deployed at different locations. Its concept supports deployment on the device itself,
deployment on edge as well as in the cloud. This does not only hold for the AAS as a whole but
also for every single submodel of an AAS. This means that each submodel is a potential
deployment unit.
Registries can be used to map the globally unique ids of AASs and their submodels to physical
endpoints.
SECURITY
The interactions of digital twins with different entities have different security considerations.
Various key choices to be made regarding implementing the way digital twins are deployed.
Examples are [11]:
• mechanisms to secure access to the content of one digital twin, for example, via role-
based access control,
• mechanisms to secure access to the individual digital twins coming from different vendors
constituting composite digital twins,
• mechanisms to secure the interactions to the underlying entity via its digital twin,
• methods of ensuring the authenticity of information, models and other metadata such as
the identities of other parties and their cryptographic keys and their access rights and
privileges,
- 26 -
Architecture Alignment and Interoperability
• methods for secure deployment of digital twins and ensuring that correct, untampered
versions of software are executing to enhance the trustworthiness of the solution that
may help protect the intellectual property of certain types of digital twins and
• methods, where relevant, to aid in the resolution of disputes should it be required to
establish the provenance or timing of any information.
AAS aims at providing information in a unified and secure way to applications. Security aspects
were considered from the very beginning when specifying the first part, the information model,
for the AAS [4]. The AAS access control is based on the NIST concept of Attribute Based Access
Control (ABAC).
INTEROPERABILITY
Interoperability is “the ability for two or more systems or applications to exchange information
and to mutually use the information that has been exchanged”. International standards or
mutually-agreed communication protocols are needed to define syntax of information,
semantics of information, expected behavior and information exchange policies so as to achieve
interoperability.18 Various key choices are to be made regarding enabling interoperability of
digital twins. Examples are [11] mechanisms and standards to ensure the interoperability of:
• multiple digital twins with each other,
• various applications with digital twins,
• digital twins with their underlying entities and
• digital twins with underlying information sources.
Interoperability between different suppliers, manufactures and machine builders is a key concern
of the AAS. This is why the AAS does not stop with a concept but provides specifications that are
the basis for any implementation of the AAS (see series of “Details of the Asset Administration
Shell”, first part of [4]). Additionally, there also is the specification of the so-called I4.0 Language
([18]) used by proactive AASs.
Besides open specifications, there are also standardization activities ongoing for the AAS in IEC
TC65 WG24 and ISO CD 23247.
The Industrial Internet Consortium White Paper “Global Industry Standards for Industrial IoT”,19
states that open source initiatives and industrial consortia also contribute to standardization.
18 ISO/IEC Organization. 2019. ISO/IEC 21823-1 Internet of things (IoT)– Interoperability for IoT systems –
Part 1: Framework.
19 In preparation
- 27 -
Architecture Alignment and Interoperability
There are several open-source activities promoting the AAS, for example, admin-shell,20 BaSyx21
and SAP i40-aas.22 They provide open-source developer tools such as editors with import and
export functionality and software development kits in different programming languages for the
AAS.
RAMI 4.0, the reference architecture of Industrie 4.0, and the concept and specification of the
AAS are input for two major industrial initiatives; the Open Industry 4.0 Alliance23 as well as the
Open Manufacturing Platform.24
SUMMARY AND CONCLUSIONS
At present, many enterprises have implemented various forms of digital twins to support
different use cases, but in proprietary structures, information models and formats. These
proprietary approaches create an undesirable situation in which digital twin technologies and
solutions are hard to share and reuse, leading to enterprises re-inventing the wheels and
relearning the lessons. Often, systems with digital twins require many enterprises, owner and
operators, OEM suppliers and solution integrators to work together to deliver. The proprietary
approaches make it hard to collaborate effectively and to create final systems from parts by
different suppliers efficiently. Worse, the digital twin systems created by these proprietary
approaches create new information silos inhibiting exchange of information across systems with
partners and enterprises. For many industrial use cases, the information exchange is crucial to
support new business models and services. A common conceptual understanding of the digital
twin concept, information and interaction models is needed to enable interoperable digital twins.
The information silo problem was the same type of challenge faced by the Asset Administration
Shell (AAS). The concept of the AAS was introduced as part of the reference architecture
(RAMI4.0) encompassing the complete asset life cycle. Therefore, it was a natural next step to
work on providing implementation ready specifications of the Asset Administration Shell, with its
first specifications being validated as suitable to support real-world use cases. In parallel,
Plattform Industrie 4.0 also focused on interoperability by building the consensus on concrete
semantics based on use cases involving digital twins. The design of the AAS had originally
manufacturing use cases in mind so an interesting question is whether the concept and
specification would also be appropriate for other industries such as mining or buildings?
This paper has made a point-to-point examination between IIC’s cross-industry general
description and characterization of digital twin, including its technical aspects and requirements
20 [https://github.com/admin-shell-io](https://github.com/admin-shell-io)
21 [https://www.eclipse.org/basyx/](https://www.eclipse.org/basyx/)
22 [https://github.com/SAP/i40-aas](https://github.com/SAP/i40-aas)
23 [https://openindustry4.com/](https://openindustry4.com/)
24 [https://open-manufacturing.org/](https://open-manufacturing.org/)
- 28 -
Architecture Alignment and Interoperability
in information modeling, information population, information synchronization, APIs,
connectivity, deployment, security, interoperability and the technical capability of the Asset
Administration Shell. In summary, the Asset Administration Shell provides a comprehensive
support to the key requirements for digital twins as described and characterized by the IIC. The
Asset Administration Shell specifications do not cover information synchronization or caching.
These can be provided by the implementation. The suitability of the Asset Administration Shell
to support digital twins is not limited to manufacturing use cases. Moreover, the analysis in this
paper has so far found no inherent hinderance that would prevent the Asset Administration Shell
from supporting digital twin use cases outside of manufacturing, which is significant since
interoperable digital twins across industries is important for broad applications of digital twins.
It is recognized that, however, it is up to each industry to perform its own thorough analysis to
determine the level of applicability of the Asset Administration Shell within its respective domain.
DEFINITIONS FROM IIC
ASSET
major application, general support system, high impact program, physical plant, mission
critical system, personnel, equipment or a logically related group of systems
source: NISTIR 7298, rev 2 (as cited in IIC:IIVOC:V2.2:20190729 ([8]))
DIGITAL REPRESENTATION
information that represents attributes and behaviors of an entity
source: IIC:IIVOC:V2.2:20190729
DIGITAL TWIN
digital representation, sufficient to meet the requirements of a set of use cases
note: in this context, the entity in the definition of digital representation is typically an
asset, process or system.
source: IIC:IIVOC:V2.2:20190729
INFORMATION
data that within a certain context has a particular meaning
source: IIC:IIVOC:V2.2:20190729 (inspired by ISO/IEC 2382:2015)
INTEROPERABILITY
ability of two or more systems or applications to exchange information and to mutually
use the information that has been exchanged
- 29 -
Architecture Alignment and Interoperability
source: IEC 17788:2014 (as cited in IIC:IIVOC:V2.2:20190729 ([8]))
- 30 -
Architecture Alignment and Interoperability
REFERENCES
[1] “Structure of the Administration Shell: Continuation of the Development of
the Reference Model for the Industrie 4.0 Component”, April 2016. Available:
https://www.plattform-
[i40.de/PI40/Redaktion/EN/Downloads/Publikation/structure-of-the-](http://i40.de/PI40/Redaktion/EN/Downloads/Publikation/structure-of-the-)
administration-shell.html
[2] Implementation Strategy Industrie 4.0. Report on the results of the Industrie
4.0 Platform. 2015. Bitkom, VDMA, ZVEI. Plattform Industrie 4.0. Available:
[https://www.bitkom.org/sites/default/files/file/import/2016-01-](https://www.bitkom.org/sites/default/files/file/import/2016-01-)
Implementation-Strategy-Industrie40.pdf
[3] “The Structure of the Administration Shell: TRILATERAL PERSPECTIVES from
France, Italy and Germany”, March 2018. Available: https://www.plattform-
[i40.de/I40/Redaktion/EN/Downloads/Publikation/hm-2018-trilaterale-](http://i40.de/I40/Redaktion/EN/Downloads/Publikation/hm-2018-trilaterale-)
coop.html
[4] Details of the Administration Shell Part 1 - The exchange of information
between partners in the value chain of Industrie 4.0. Specification. Version
2.0.1. May 2020. Federal Ministry for Economic Affairs and Energy (BMWi).
Available: https://www.plattform-
[i40.de/PI40/Redaktion/DE/Downloads/Publikation/Details-of-the-Asset-](http://i40.de/PI40/Redaktion/DE/Downloads/Publikation/Details-of-the-Asset-)
Administration-Shell-Part1.html
[7] Architecture Alignment and Interoperability. An Industrial Internet
Consortium and Plattform Industrie 4.0 Joint Whitepaper.
IIC:WHT:IN3:V1.0:PB:20171205. Available: https://www.plattform-
[i40.de/PI40/Redaktion/EN/Downloads/Publikation/whitepaper-iic-pi40.html](http://i40.de/PI40/Redaktion/EN/Downloads/Publikation/whitepaper-iic-pi40.html)
[8] The Industrial Internet Vocabulary. Technical Report. V2.2.
IIC:IIVOC:V2.2:20190903. Available: [https://www.iiconsortium.org/vocab/](https://www.iiconsortium.org/vocab/)
[9] Industrial Internet Reference Architecture. V1.9. Available:
[https://www.iiconsortium.org/IIRA.htm](https://www.iiconsortium.org/IIRA.htm)
[10] IEC PAS 63088 (2017) Smart Manufacturing - Reference Architecture Model
Industry 4.0 (RAMI4.0). Public Available Specification (PAS)
[11] Digital Twins for Industrial Applications. Definition, Business Values, Design
Aspects, Standards and Use Cases. An Industrial Internet Consortium, White
Paper. Version 1.0 2020-02-18.
- 31 -
Architecture Alignment and Interoperability
[https://www.iiconsortium.org/pdf/IIC_Digital_Twins_Industrial_Apps_White_](https://www.iiconsortium.org/pdf/IIC_Digital_Twins_Industrial_Apps_White_)
Paper_2020-02-18.pdf
[12] C. Wagner; C. J Grothoff; U. Epple; R. Drath;S. Malakuti; Grüner S.;
Hoffmeister M.; Zimmermann P.: The role of the Industry 4.0 Asset
Administration Shell and the Digital Twin during the life cycle of a plant. In:
Proceedings of the 2017 IEEE Conference on Emerging Technologies Factory
Automation (ETFA 2017), Limassol, Cyprus, 2017.
[13] Relationships between I4.0 Components – Composite Components and Smart
Production. Continuation of the Development of the Reference Model for the
I4.0 SG Models and Standards. June 2017. Federal Ministry for Economic
Affairs and Energy (BMWi). Available: https://www.plattform-
[i40.de/PI40/Redaktion/DE/Downloads/Publikation/hm-2018-](http://i40.de/PI40/Redaktion/DE/Downloads/Publikation/hm-2018-)
relationship.pdf?__blob=publicationFile&v=5
[14] Usage View of Asset Administration Shell. In Collaboration with
Standardization Council Industrie 4.0, Robot Revolution / Industrial IoT
Initiative and VDI/VDE. Plattform Industrie 4.0. Feb. 2019. Available:
https://www.plattform-
[i40.de/PI40/Redaktion/EN/Downloads/Publikation/2019-usage-view-asset-](http://i40.de/PI40/Redaktion/EN/Downloads/Publikation/2019-usage-view-asset-)
administration-shell.html
[15] Boss B., Bader S., Orzelski A., Hoffmeister M. (2020) Asset Administration Shell
(In German). In: ten Hompel M., Vogel-Heuser B., Bauernhansl T. (eds)
Handbuch Industrie 4.0. Springer Reference Technik. Springer Vieweg, Berlin,
[16] Vincent Hu, David Ferraiolo, Rick Kuhn, Adam Schnitzer, Kenneth Sandlin,
Robert Miller and Karen Scarfone, “Guide to Attribute Based Access Control
(ABAC) Definition and Considerations,” NIST Special Publication 800-162, Jan.
1. [Online]. Available: [http://dx.doi.org/10.6028/NIST.SP.800-162](http://dx.doi.org/10.6028/NIST.SP.800-162)
[17] 2030 Vision for Industrie 4.0 - Shaping Digital Ecosystems Globally. Available:
https://www.plattform-
[i40.de/PI40/Navigation/EN/Industrie40/Vision/vision.html](http://i40.de/PI40/Navigation/EN/Industrie40/Vision/vision.html)
[18] Language for I4.0 Components - Structure of messages. VDI/VDE 2193 Part 1.
April 2020. Eds. VDI/VDE-Gesellschaft Mess- und Automatisierungstechnik
- 32 -
Architecture Alignment and Interoperability
AUTHORS AND LEGAL NOTICE
This document is a joint work product of Plattform Industrie 4.0 and the Industrial Internet
Consortium’s Digital Twin Interoperability Task Group, chaired by Shi-Wan Lin (Yo-i Information
Technologies, Ltd.), Guodong Shao (NIST) and Kym Watson (Fraunhofer IOSB).
Authors: Birgit Boss (Robert Bosch GmbH), Somayeh Malakuti (ABB Corporate Research Center,
Germany), Shi-Wan Lin (Yo-i), Thomas Usländer (Fraunhofer IOSB), Erich Clauer (SAP), Michael
Hoffmeister (Festo SE & Co. KG) and Ljiljana Stojanovic (Fraunhofer IOSB).
Editors: Birgit Boss (Robert Bosch GmbH) and Shi-Wan Lin (Yo-i).
Contributors: The following individuals have provided valuable comments and inputs that have
substantially improved the quality of this whitepaper: Gavin Green (XMpro), Oliver Hillermeier
(SAP), Pieter van Schalkwyk (XMPro), Mitch Tseng (Tseng Infoserv, LLC), Nemrude Verzano (SAP)
and Thiago Weber Martins (SAP).
Technical Editor: Stephen Mellor (IIC staff) oversaw the process of organizing the contributions
of the above Authors, Editors and Contributors into an integrated document.
Copyright© 2018 ~ 2020 Industrial Internet Consortium, a program of Object Management
Group, Inc. (“OMG”) and Plattform Industrie 4.0.
All copying, distribution and use are subject to the limited License, Permission, Disclaimer and
other terms stated in the Industrial Internet Consortium Use of Information: Terms, Conditions &
Notices. If you do not accept these Terms, you are not permitted to use the document.
- 33 -