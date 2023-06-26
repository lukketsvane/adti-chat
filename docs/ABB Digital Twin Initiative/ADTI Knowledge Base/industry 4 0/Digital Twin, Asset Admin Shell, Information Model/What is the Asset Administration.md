# What is the Asset Administration

**What is the Asset Administration
Shell from a technical perspective?
As of 04/2021
This document has been developed by the Task Force “Secure Asset Administration
Shell” of Plattform Industrie 4.0. The Task Force consists of members from the
Working Groups “Reference Architectures, Standards and Standardisation” and
“Security of Networked Systems” (see below). This document summarizes the com-
mon understanding of the Task Force, what are the different shapes of an Asset
Administration Shell. This document describes a technical perspective and does not
include e.g. value propositions or potentials for new business models.
Which documents define the Asset The Asset Administration Shell is
Administration Shell (AAS)? a generic term for:
 AAS metamodel with UML class
 Details of the Asset Administration
diagrams
Shell (AAS)
 AAS metamodel serialization with
Part 1: Metamodel, AASX
o
schemas for XML, JSON or RDF
Package and serializations to
XML/JSON/RDF/AML  AAS instance data (with static and
Part 2: http/REST API and optionally dynamic data)
o
further APIs, infrastructure  AAS instance data serializations
and registry to XML, JSON, RDF, AML or OPC
 I40 Language UA Nodeset
 OPC UA Companion Specification  AAS-Package-Container (.AASX)
I4AAS  AAS server application
 Usage View of the AAS  AAS API (e.g. by http/REST, OPC
 Asset Administration Shell - Reading
UA or MQTT)
Guide
Extensions are:
 AAS OPC UA Model I4AAS
 AAS I40 language
 AAS registry
What is the Asset Administration Shell from a technical view?
Page 2/5
What is the Asset Administration Shell from a technical view?
The Figure shows the aspects described instantiated in memory. Alternatively, an
above and graphically displays their relation- AAS server application may also manage
ships. several AAS instances. AAS server applica-
tions may also host AAS instance data of
The AAS metamodel defines the available
both complete AAS and/or of separate
elements to model AAS metamodel
submodels. In an Industrie 4.0 system
instances, e.g. Asset, AssetAdminstration-
multiple decentral AAS server applications
Shell (AAS), Submodel (SM), SubmodelEle-
interact with each other.
mentCollection (SMEC), Property or
additional SubmodelElement(s) (SME). The access to AAS server applications can
The technology neutral AAS metamodel be made by means of the AAS API. AAS
(UML class diagram) is serialized and stored server applications may offer a http/REST
as schema files for XML, JSON or RDF. API and a OPC UA API (according the AAS
OPC UA model I4AAS). An AAS server
AAS instance data use the defined
application with http/REST or OPC UA API is
elements of the metamodel to specify asset
a so called reactive AAS. Further technolo-
types or asset instances. The description of
gies like MQTT may also provide such AAS
submodels includes both submodel
API accordingly.
templates and submodel instances.
Submodel templates typically do not include Submodel instance data are either part of
values, but submodel instances typically AAS instance data or are separate unique
include values for submodel elements. submodel instance data. Submodel
Asset, AAS and submodels include a world- instances can be serialized separately and
wide unique identifier in the AAS instance can be hosted on separate AAS server appli-
data. AAS instance data may also include cations, which can be also accessed by the
AAS operations or AAS events. AAS API.
AAS instance data can be filled with data by The AAS API specifies services and API
different means. On one hand serializations operations, which include reading and writing
may be loaded. On the other hand, data may of data and also calling methods (AAS
be loaded on demand from existing IT operations).
systems to use them according to the AAS
Each AAS Server Application and each
meta-model. In such case the information of
submodel may have an endpoint for the API
submodels may even be requested and com-
access. Such an endpoint defines an ad-
bined from different IT systems. Data may
dress to access the AAS Server Application
also include dynamic values which can be
by the AAS API specified protocols and
read from the related assets (e.g. automation
operations.
devices).
Examples for endpoints are „https://admin-
AAS instance data may be transformed into [shell-io.com:51410](http://shell-io.com:51410/)“ for http/REST and
different AAS instance data serializations „opc.tcp://192.168.1.40:4840“ for OPC UA.
like XML, JSON, RDF, AML or OPC UA
The AAS I40 language specifies interaction
nodeset (according AAS OPC UA model
patterns and submodels, which communi-
I4AAS). These serializations can be stored
cate proactively by the defined interfaces via
as files to be loaded again later. A special
http/REST, OPC UA or MQTT. An AAS
serialisation of the AAS instance data is the
Server Application with a corresponding
AAS Package Container (file in AASX
interface for the I40 language is at the same
format). An AAS Package Container can
time a client and a server and is a so called
include the serialized XML or JSON and
proactive AAS.
additional files of the AAS instance data, e.g.
PDFs. In addition, a registry specification is deve-
loped to register endpoints and descriptions
AAS instance data may be loaded into a spe-
for AAS Server Applications.
cific AAS server application to be
Page 3/5
What is the Asset Administration Shell from a technical view?
Such AAS Registry contains Endpoints and implemented to different degrees depending
IDs of AAS instance data and IDs of on security needs, application or use case.
submodel instance data from a related AAS
The AAS metamodel includes elements to
server application. These entries can be
model an Attribute Based Access Control
found by requesting the registry. Currently
(ABAC). This includes the identification of
there is no definition available, how the end-
users and user groups, of additional attri-
points of the registries themselves are found
butes and associated rights, even including
in a manufacturer neutral way.
the possibility to define the granularity per
single element of an AAS. The parameteriza-
Further elements are needed to build a real
tion of the access control is made via the
executable system.
specified security model. In addition,
properties for the secure identification of us-
An execution environment (e.g. hardware,
ers and client applications are defined, which
CPU, OS, memory, hard disk) is necessary,
authentication and authorization are
into which computer programs can be
based on. Client applications and AAS
deployed and which will execute these. The
server applications will prove their authentic-
AAS server application and related client
city by such properties.
applications are such computer programs.
Serializations and AAS Package Containers The AAS Package Container (.AASX) has
can also be stored into and loaded from the been realized using the Open Packaging
execution environment. Conventions (OPC) Format. The OPC
Format describes its included elements in
Several AAS Server Applications can be XML and supports security elements for
implemented within one computer program. authentication according to XMLSIG. An
Several computer programs can be executed AAS Package Container cannot protect its
in one execution environment. authenticity, but the authenticity can be
verified during read of the package. An AAS
Package Container cannot protect its confi-
Security
dentiality by itself. In that case the parts to
be protected or the complete container file
Which documents define the security of must be encrypted. Such encryption can be
the AAS? done for a specific receiver or, in case of
digital rights management (DRM), for a
 Security of the Asset Administration group of receivers, which may even not be
Shell known at the time of encryption.
 Details of the Asset Administration
The AAS server application provides the
Shell Part 1, Chapter 6, Attribute
technical implementation of the AAS API.
Based & Role Based Access
 Access control for Industrie 4.0 com- The technically correct and secure imple-
mentation of the AAS server application and
ponents for application by manufac-
of the execution environment is the
turers, operators and integrators
 Secure Download Service prerequisite of a continuously secure opera-
tion. A secure implementation of AAS server
application and execution environment has
Security of the AAS to rely on a secure development process e.g.
according to IEC 62443-4-1 and the secure
Security is a must for all concepts implement-
operation e.g. according to ISO 27000. The
ting Industrie 4.0. Each practical implemen-
tation must be oriented on the security needs access control shall be implemented
according to the rules defined in the AAS
of the applications, e.g. protection of data,
itself and/or by the use cases for the AAS
safety or know how. Even if security must
server application. The AAS server applica-
always be conceptually provided, it may be
tion either needs to authenticate its
Page 4/5
What is the Asset Administration Shell from a technical view?
communication partners by itself or it needs authentication can use X.509 certificates
to use a central authentication service. In a and/or established methods for Identity- and
next step the AAS server application and the Access Management (IAM) with specific
access control will apply the defined rules of endpoints or tokens. The AAS server
the security model. application will offer the AAS API in a way,
that the authenticity of communication part-
The communication using the AAS API must
ners plus the disclosure and the authenticity
use protocols which support the needed
of the communication itself will be realized
security mechanisms. http/REST over
according to the protection needs. The
HTTPS and OPC UA support these
protection needs are based on the security
mechanisms. Depending on the protocol e.g.
needs and the use cases, so that security
TLS (Transportation Layer Security) will be
measures can be taken to different degrees.
used on the transport layer. Methods for
It is the authors understanding that this text summarizes the actual state of discussion of Plattform
Industrie 4.0.
Authors
Sebastian Bader Fraunhofer IAIS
Vanessa Bellinghausen Bundesamt für Sicherheit in der Informationstechnik
Dr. Birgit Boss Robert Bosch GmbH
André Braunmandl Bundesamt für Sicherheit in der Informationstechnik
Dr. Gerd Brost Fraunhofer AISEC
Björn Flubacher Bundesamt für Sicherheit in der Informationstechnik
Kai Garrels ABB STOTZ-KONTAKT GmbH
Dr. Michael Hoffmeister Festo SE & Co. KG
Dr. Lutz Jänicke PHOENIX CONTACT GmbH & Co. KG
Michael Jochem Robert Bosch GmbH
Andreas Orzelski PHOENIX CONTACT GmbH & Co. KG
Jens Vialkowitsch Robert Bosch GmbH
Thomas Walloschke Industrie KI GmbH
Jörg Wende IBM Deutschland GmbH
Contact: Office of Plattform Industrie 4.0, Bülowstraße 78, 10783 Berlin
geschäftsstelle@plattform-i40.de
[www.plattform-i40.de](http://www.plattform-i40.de/)
Page 5/5**