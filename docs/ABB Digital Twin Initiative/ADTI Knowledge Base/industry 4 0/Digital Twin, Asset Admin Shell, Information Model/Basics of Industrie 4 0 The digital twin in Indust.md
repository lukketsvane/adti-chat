# Basics of Industrie 4.0
The digital twin in Industrie 4.

# Basics of Industrie 4.0
The digital twin in Industrie 4.0
A short introduction to properties, submodels &
Asset Administration Shells (AAS)
Kai Garrels, ABB
Hard shell, soft core?
Asset Administration Shell:
The digital twin in Industrie 4.0
• clear form
clear rules
• flexible content
2
Industrie 4.0
What‘s new, really?
That’s already possible today Industrie 4.0: New Ingredients
 the cloud
 added value by exchanging
 networks information between value chain
 automation devices with Internet partners
access
 from intranet to internet
 internet-based services  neutral and common
standards for communication,
services and semantics across
companies and sectors
A large number of new applications and business models will emerge.
Industrie 4.0
B2B-Platform-Economy
The current focus of
Plattform Industrie 4.0 is the
exchange of information...
Data Data
... along the value chain,
... between partners in the
Data
value chain.
Supplier OEM manufacturer User
4
Industrie 4.0 Components
Assets integrate into the IT world
Integration of assets into the world of information
Asset = everything that requires a "connection" for an Industrie 4.0 solution
 machines and their components
 supply materials, parts and products
 exchanged documents
(e.g. drawings, wiring diagrams)
 contracts Administration Shell
 orders
 …
The Asset Administration
tnenopmoC
-0.4I Shell is the implementation
of the digital twin for
Industrie 4.0.
Asset
Overview
 Identifiers
 Submodels and Asset Administration Shells
 Semantics
 Reduction of integration costs
7
Basis of Industrie 4.0
Identifiers
Identification
Erika Mustermann and an identifier
9
Identification
Erika Mustermann and her ID card –
Context: Federal Republic of Germany
10
Identification
Erika Mustermann and her identity card
 unique identifier, here: ID number
 identifying properties of Mrs Mustermann
 further properties of Mrs Mustermann
11
Access to the Asset Administration Shell
Example: product manufacturer
Administration Shell
of the Asset
[https://ability.abb.com/aas/1SVR560730R3400?SN=1SV112233445566](https://ability.abb.com/aas/1SVR560730R3400?SN=1SV112233445566)
QR Code on the Smartphone camera Server at product Asset Administration Shell at
Asset product app manufacturer the product manufacturer
[https://productid.abb.com/1SVR560730r3400?SN=1SV112233445566](https://productid.abb.com/1SVR560730r3400?SN=1SV112233445566)
14
Access to the Asset Administration Shell
Example: plant operator
Administration Shell
of the Asset
[https://ability.abb.com/aas/1SVR560730R3400?SN=1SV112233445566](https://ability.abb.com/aas/1SVR560730R3400?SN=1SV112233445566)
QR Code on the
Asset-Management- Server at Asset Administration Shell at
Asset/Part ofthe
Asset App oftheplant plant operator plant operator
plant
operator
[https://productid.abb.com/1SVR560730r3400?SN=1SV112233445566](https://productid.abb.com/1SVR560730r3400?SN=1SV112233445566)
15
Basis of Industrie 4.0
Submodels and Asset Administration
Shells
Use-Case and submodel
Erika Mustermann wants to live healthily
 health status 30.12.2019
 blood values
 stress ECG
 body weight
 nourishment situation „actual“
 nourishment situation „target“
 plan for exercise and sport
 health status 15.6.2020
17
Use-Case and submodel
Erika Mustermann wants to save money
 Income
 salary
 child support from state
 bitcoin earnings 
 Spendings
 shopping
 rent
 insurances
 saving for holidays
18
Use-Case and submodel
Erika Mustermann visits Berlin
 itinerary
 train ticket
 hotel booking
 packing list
 sightseeing list
 tickets for the opera
 travel budget
19
Asset Administration Shell
Container for submodels
STuebilmmooddeellsle
Asset Administration Shell

Content of
Digital Twin
Submodel
20
Submodels
Submodel
Group of properties
„Simulation“
Assets have properties
Submodel
 weight, price, order number, dimensions „Identification“
Submodel
In I4.0, we combine properties into groups,
„Nameplate“
suitable for use cases:
 logistical properties
 order features
 technical data Submodel
 properties for documentation „Documentation“
 ...
We call these submodels.
 Submodels are groups of properties for a use
case.
22
Basis of Industrie 4.0
Semantics
Semantics
“The Jaguar is in the garage.”
„Jaguar“
Symbol
24
Starting point semantics
Exchange symbols with previously defined meaning
 Symbol
 refers to an object
 The meaning is known to both sender
and receiver.
Sender Symbol Receiver
 Anyone can look up the meaning of
the symbol in a dictionary.
is related to reference to
 Symbols in Industrie 4.0 are machine-
readable, they are made for
communication between machines.
describes
Physical or description
abstract
object
„M8“ „green yellow“
Semiotisches Dreieck
25
„Ich bin ein Berliner!“
Dictionary Human <-> Machine
Code: 0123/4///46789_1#ABC001
for machines
Version: 001
Revision: 04
füfor rMheunmscahnesn
Preferred name: Berliner
Synonymous name: Pfannkuchen, Kreppel
Definition: Traditional German pastry similar to a doughnut
with no central hole, made from sweet yeast
dough fried in vegetable oil, with a marmalade or
jam filling.
…
© DKE Deutsche Kommission Elektrotechnik Elektronik Informationstechnik in DIN und VDE
26
Dictionary: ECLASS 10.0.1
27-20-02-06 Temperature Transmitter
(0173-1#01-AAC063#016)
27
Basis of Industrie 4.0
Cybersecurity
Establishing a secure connection
Cybersecurity – Overview, example plant operator
Plant operator Internet Business partner
30
Cybersecurity – Overview, example plant operator
Plant operator Internet Business partner
31
Cybersecurity – Overview, example plant operator
Sharedauthentication
service
Plant operator Internet Business partner
32
Cybersecurity – Overview, example plant operator
trusts
Sharedauthentication
service
Plant operator Internet Business partner
33
Cybersecurity – Overview, example plant operator
logs in
trusts
Plant operator Internet Business partner
34
Cybersecurity – Overview, example plant operator
receives token
trusts
Plant operator Internet Business partner
35
Cybersecurity – Overview, example plant operator
logs in with
token
trusts
Plant operator Internet Business partner
36
Cybersecurity – Overview, example plant operator
verifies
token
Plant operator Internet Business partner
37
Cybersecurity – Overview, example plant operator
Secure encrypted connection
established to identified partner
Plant operator Internet Business partner
38
Cybersecurity – Overview, example plant operator
Secure encrypted connection
established to identified partner
Access control for identified
business partners to
• Asset Administration Shells
• Submodels
• Submodel elements
Plant operator Internet Business partner
39
Asset Administration Shell
Reduction of integration costs
 Integration of external partners
 Integration of data sources and systems of a company
Reduction of integration costs
External partners
Engineering
Partner
 standardised AAS reduces
number of for interfaces,
m:n  1:n Maintenance
Partner
Company A
 AAS can be extended by new
with asset
use cases at any time, along
the entire life cycle of an asset,
Energy Services
AAS "grows with" it
 new partners can be
integrated at any time
Kanban Material
Kanban Material
Supply
Supply
Company B
with asset
41
Reduction of integration costs
Integrating data sources
IT landscapes in companies
have a huge complexity and
diversity:
 user systems
 systems for business
processes
 IoT and SaaS
 PLM and ERP systems
 analytics and artificial
intelligence
 systems for integration,
e.g. in a corporate group
 systems in production
© ABB
42
Reduction of integration costs
Integrating data sources External
Partner
 AAS can integrate information on an
asset from a wide range of systems,
e.g. PLM, ERP, CRM, MES, etc.
 active submodel modules realise data
access and model transformation for
enterprise systems
 data access from external sources via
AAS standardised
 There is no "single source of truth".
© ABB
43
Reduction of integration costs
Use case: Integration for power trains
 assets in the example:
frequency inverter, motor and
complete drive (powertrain)
 automatic identification of
assets, automatic
communication setup Installed Product Commissioning
Base Data Data Data
 integration of information from
engineering, devices (online
data frequency converter),
database for installed base and
product information
 external data access by
customer via AAS
Powertrain
45
Hard shell, soft core?
Asset Administration Shell:
The Digital Twin in Industrie 4.0
• clear form
clear rules:
• information model and data formats
• semantics
• online API and cybersecurity
• flexible content
• use cases that can grow
• flexibility for new partners in the value chain
• throughout the entire life cycle
46