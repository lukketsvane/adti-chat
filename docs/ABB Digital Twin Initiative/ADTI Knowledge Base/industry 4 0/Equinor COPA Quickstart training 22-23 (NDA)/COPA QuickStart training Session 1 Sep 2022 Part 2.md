# COPA QuickStart training Session 1 Sep 2022 Part 2 Concepts

[image area]
QuickStart Instructional Lectures
– Concepts
September 2022 1
Outline
• OPA fundamental concepts and benefits
• Guiding principals and Quality attributes
• Reference architecture and Key elements
• O-PAS standard and Key technologies
• Business ecosystem
• Conformance certification
• (References to O-PAS publications)
Concepts: Fundamental
• An integrated business and technical strategy to acquire and sustain
competitive and affordable control systems over their full lifecycle
• Technical architecture
• modular with loosely coupled, cohesive structures
• interfaces defined by open standards and verified for conformance
• Business model
• modules can be competed and acquired from independent suppliers
• customer can add, modify, replace, or remove components across the system
lifecycle
Concepts: Benefits
• Enhance competition
• modular components can be openly competed
• Enable interoperability
• severable software and hardware modules that can be changed independently
• Enable cost savings
• reuse customer software and components from any supplier across the system
lifecycle
• eliminate hardware/software supplier’s need to make multiple versions of same
product to connect to different vendor systems
• Facilitate technology refresh
• add capability or replace modules without changing all components of system
• Incorporate innovation
• flexibility to reconfigure or add components to meet changing operational
requirements and evolving cybersecurity threats
• leverage ecosystem, not single supplier
O-PAS Guiding Principles

1. The O-PAS Standard is supplier-agnostic.
2. O-PAS products and processes protect Intellectual Property (IP).
3. The O-PAS Standard is extensible and evolvable.
4. The O-PAS Standard maximally utilizes established industry processes
and standards.
5. The O-PAS Standard is industrial segment-agnostic.
6. The O-PAS Standard is (computer) processing environment-agnostic.
7. O-PAS components have defined interfaces.
O-PAS Business Guide 2.0: [https://publications.opengroup.org/g182](https://publications.opengroup.org/g182)
O-PAS Quality Attributes
• Foundational: Safety, Reliability, Securability
• Modularity
• Interoperability
• Availability
• Interchangeability
• Manageability
• Portability
• Reusability
• Usability
• Scalability
O-PAS Business Guide 2.0: [https://publications.opengroup.org/g182](https://publications.opengroup.org/g182)
O-PAS architecture elements
• Distributed Control Node (DCN)
• DCN – IO (O-PAS IO Node)
• DCN - Compute
• DCN – Compute + IO
• DCN – Gateway
• OPAS Connectivity Framework
(OCF)
• Advanced Computing Platform
(ACP)
O-PAS principles (1 of 4)
• Decouple IO from Compute Nodes
• Life expectancy of IO equivalent to field devices (long)
• Life expectancy of Compute is shorter than IO
• Standardized information models and communications protocol
• Ethernet, TCP/IP, OPC UA
• Cybersecurity designed-in and adaptable
• Zero-trust; Authentication and authorization; Encryption
• High availability - use software-defined mechanisms, not only physical
redundancy
• Industry standard programming language for end user applications – IEC
61131-3 Structured Text
O-PAS principles (2 of 4)
• Port software among DCNs and ACP from different suppliers with minimal
rewriting
• Virtualization
• Containment
• Automated systems management via orchestration
• Ability to introduce new programming languages and technologies to
system
• Python
• Machine learning
O-PAS principles (3 of 4)
• Interchangeable DCNs
• Reusable control logic and code
• Interchangeable HMI
• Scalable computing capability: DCN <-> ACP
• On-premise cloud computing integration with ACP
• Ease of technology insertion
• Highly reliable/available, Fault tolerant
• Interoperable – hardware, software
• Systems management and automation
O-PAS principles (4 of 4)
• Enable innovation
• Industrie 4.0 / Industrial Internet of Things
• Holistic network (not duplicated) with segmented criticality
• Asset Administration Shell, etc.
• Emerging cybersecurity technologies
• Attestation
• Advanced security technologies
• Data Analytics, Machine Learning, Economic Model Predictive Control, etc.
O-PAS Standard and key technologies
O-PAS Subject matter Referenced
• OPC UA
Part standards
• Cybersecurity Part 1 Technical architecture IEC 62264 (ISA 95)
Part 2 Security IEC 62443 (ISA 99)
• Industry standard programming
Part 3 Profiles n.a.
languages Part 4 Connectivity IEC 62541 (OPC UA)
framework
• Systems management Part 5 System management DMTF (Redfish)
Part 6 (.1 - Information and IEC 62714
• Systems orchestration .6) exchange models (AutomationML)
IEC 62682 (ISA 18)
IEC 61131
• Abstraction of software from
IEC 61499
operating system / hardware Part 7 Physical platform “whitespace”, PCMIG
Part 8 Application portability Containment
• Software-defined system
Part 9 System orchestration TOSCA
O-PAS Standard V2.1 Preliminary: [https://publications.opengroup.org/i210m](https://publications.opengroup.org/i210m)
OPA business ecosystem
• Boxes depict roles; A company
can play multiple roles
• System Integrator is accountable
for system performance
• 0 to several Subsystem
Integrators
• Service Provider for routine
maintenance; System Integrator
for significant revisions
• Liaison relationships:
• OPC Foundation
• NAMUR
• others
O-PAS Business Guide 2.0: [https://publications.opengroup.org/g182](https://publications.opengroup.org/g182)
O-PAS Adoption Guide, in-draft
OPA business ecosystem
O-PAS conformance certification process
• O-PAS Certification Policy published Feb 2022
• Verification
• Certification
• Registry
• Product certification lifecycle
• Agreements with multiple O-PAS Verification
Labs in-development
• Certification Wave 1
• Operational by 4Q22
• Profiles:
• Security: Part 2, SEC-F-001
• Connectivity: Part 4, OCF-001/002, NET-001/002
• System management: Part 5, OSM-001/002/003
• Physical platform: Part 7, DCP-001
O-PAS Certification Policy: [https://publications.opengroup.org/x201](https://publications.opengroup.org/x201)
O-PAS Certification Guide: [https://publications.opengroup.org/x21a](https://publications.opengroup.org/x21a)