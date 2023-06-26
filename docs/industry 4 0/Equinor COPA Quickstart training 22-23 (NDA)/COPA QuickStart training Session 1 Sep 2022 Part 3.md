# COPA QuickStart training Session 1 Sep 2022 Part 3 Design

[image area]
QuickStart Instructional Lectures
– Design
September 2022 1
Design

1. Project charter
2. Project definition
3. System design
Sands NP, Verhappen I. (2021). A Guide to the Automation Body of Knowledge. Int’l. Soc. Automation.
4. Project charter
a) Perform feasibility study
b) Develop project specification*
c) Identify stakeholders
d) Perform cost/benefit analysis
e) Develop automation strategy
f) Perform technical studies*
g) Perform justification analysis
h) Generate summary document
- What’s different with OPA?
1.b What’s different w/ OPA: Project specification*
• Software / hardware performance specifications
• Owner’s preferences for cost, availability, simplicity, company standards,
expansion, etc.
• More choice: Opportunity to access best-in-class solutions, not just what one
system supplier offers
• Suppliers’ roles and performance criteria
• Responsibilities of System Integrator (a.k.a. Main Automation Contractor),
Service Provider(s)
• Opportunities:
• Asset Owners should develop requirements and preferences based on their
needs and not only on what is available from system vendor
What’s different: System Integrator (SI) role
• System Integrator role as defined on O-PAS Business Guide
• Analogous to Main Automation Contractor
• May not be a hardware supplier
• Categories of SIs:
• Control System Integrators Association (CSIA) members ([controlsys.org](http://controlsys.org/))
• Example: Wood
• DCS vendors
• Example: Yokogawa
• “IT” system integrators
• Example: Lockheed Martin, Raytheon, Booz Allen Hamilton
O-PAS business ecosystem
Discussion topic: EPCs and SIs
• How does an Engineering, Procurement, and Construction (EPC)
contractor interact in the OPA ecosystem?
• EPC as Asset Owner (End User) representative overseeing SI?
• EPC as SI?
1.f What’s different w/ OPA: Technical studies*
• Needs for- or opportunities to introduce improvements from new
technology or products
• Applicable technology not constrained by control system platform
1. Project definition
a) Determine operational strategies
b) Analyze technical solutions*
c) Establish conceptual details
• Principles for design basis
d) Develop detailed scope of work
e) Develop change control plan
f) Generate cost estimate
g) Develop project schedule
h) Plan procurements
- What’s different with OPA?
2.b What’s different w/ OPA: Technical solutions*
• Explore options for technical solutions, such as by visiting sites with
similar situations, interviewing system integrators and suppliers,
evaluating products, building a test bed, etc.
• Evolution of OPA business ecosystem and technology:
• O-PAS aligned -> O-PAS certified
• O-PAS Conformance certification
• O-PAS Registry
• Example: FACE registry ([facesoftware.org/registry](http://facesoftware.org/registry))
Example: FACE registry
ref: [facesoftware.org/registry](http://facesoftware.org/registry)
1. System design
a) Perform hazard analysis
b) Establish guidelines
• Industry- and company standards, templates, guidelines for configuration and programming
c) Develop equipment specifications*
d) Define data structure*
e) Define network architecture*
f) Develop functional description
g) Develop test plan*
h) Perform detailed design*
i) Prepare work packages
j) Perform long lead-time procurements
- What’s different with OPA?
3.c What’s different w/ OPA: Data structure*
• Still need company standards for equipment and tag naming
• O-PAS Connectivity Framework (OCP) based on OPC UA defines
information models and provides a “universal language” for
interoperability among components
• Reduces number of decisions needed for network protocol specification
• General rule: Each component product has OPC UA Client/Server or
Publish/Subscribe capability for O-PAS conformance
• Use OPC UA Global Discovery Service (GDS) to manage multiple OPC UA
Servers or Publishers, Alias names, and security certificates
3.c What’s different w/ OPA: Network architecture*
• Transition from vendor proprietary networks to industry standard
technology
• Adopt software-defined network technology
• Implement cybersecurity zones and conduits
• Time-sensitive network
3.g What’s different w/ OPA: Test plan*
• Will you introduce any new products or technology on this project, or
is the system based on a previous instance?
• What does System Integrator do to confirm technical readiness?
3.h What’s different w/ OPA: Detailed design*
• Preliminary design is refined to detailed design
• Benefits from improved reuse and portability
• Possible need for novelty and increased precision in purchase requisitions
Tabletop lab: Revisit fired heater conceptual design
• Based on information from
Design lecture, what would you
revise for your Fired Heater
Project?
• Equipment specifications
• Data structure
• Network architecture
• Functional description (Control
Narratives)
• Detailed design
Backup
Design
• Business objectives of project
• Controls project specification
• Automation strategy
• Controls project definition
• Technology selection*
• Cost and schedule estimation
• Control system preliminary design
• Data structures*
• Network architecture*
• Functional description narratives
• Controls system detailed design
• Long lead-time procurements
Design: Control project specification
• What unit operations are to be controlled?
• Are company standards or templates available?
• To develop:
• Equipment lists
• Scope of work
• Software/hardware performance specifications
• Service provider criteria (Main Automation Contractor / System Integrator)
• Approved supplier list*
• Safety concerns
• Schedule (coarse)
• Security level
What’s different: Approved supplier list
• As O-PAS ecosystem matures, competitive market of suppliers will
develop
• Asset Owners will develop preferences among suppliers based on
quality, price, familiarity, etc.
• Opportunities:
• “Consumer Reports” resource
• Hardware / Software reference architectures for Asset Owner and System
Integrator to relate to and validate requirements
Design: Control strategy
• Address operability objectives and issues:
• State of plant infrastructure
• Equipment availability
• Plant shutdown and turnaround practices
• Accommodate Operations and Maintenance organizations needs
• Address technology needs and wants
• Typical deliverable: Written Control Narrative document
Example: Control narrative for fired heater
• Candidate narratives:
• 1
• 2
• 3
Design: Control project definition
• Technology selection
• From candidates for preferred technologies, products, and suppliers discussed
earlier, narrow down short lists
• Cost and schedule estimation
• Request for Proposals to get budgetary estimates
• Request for Quotations to get definitive cost estimates
• Difference from status quo:
• Role of SI in technology and product selection
• Relationship between SI and EPC
Design: Control system preliminary design
• I/O count
• Field junction boxes
• Distributed Control Node (DCN) capacity requirements
• Advanced Compute Platform (ACP) capacity requirements
• HMI, alarms, historian requirements
• Network architecture (high-level)
• Data flow capacity
• Security
• Enterprise/cloud connections
• Interface to legacy systems (gateways)
• Modular (package) unit connections
What’s different: Network protocols
• O-PAS Connectivity Framework based on OPC UA is the “universal
language” for interoperability
• Reduces number of decisions needed for network protocol specification
• General rule: Each component product has OPC UA Client/Server or
Publish/Subscribe capability for O-PAS conformance
• Use OPC UA Global Discovery Service (GDS) to manage multiple OPC UA
Servers or Publishers, Alias names, and security certificates
Design: Control system detailed design
• Tag naming conventions
• Assigning wiring connections to I/O modules
• Translate control narratives into control strategies (PID loops, cascades, MPC, etc.)
• Assign control strategies to DCNs or ACP
• Static case reliability (redundancy) considerations; HAZOP/Failure mode analysis
• HMI mock-ups
• Alarm philosophy
• Historian sizing
• Network architecture
• Topology, switches
• Zone and conduit specifications
• Firewalls, access controls, authorizations, encryption policies