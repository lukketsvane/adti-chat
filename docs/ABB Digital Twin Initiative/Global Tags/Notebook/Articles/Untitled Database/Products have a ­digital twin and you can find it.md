# Products have a ­digital twin and you can find it too!

Created: June 23, 2023 3:20 PM

### ABB Review | 03/2021 | July 22, 2021 11:00 AMIndustrial plants can contain thousands of devices, each with associated documentation. Using Industry 4.0 technologies, an ABB demonstrator shows how to manage the administrative overhead of making sure documentation is comprehensive and up-to-date – throughout a product’s entire life cycle.

[Subscribe to ABB Review](https://global.abb/group/en/technology/abb-review/subscribe-to-abb-review)

**Sten Grüner,**  **Marie Platenius-Mohr** ABB Corporate Research Center Ladenburg, Germany, sten.gruener@de.abb.com, marie.platenius-mohr@de.abb.com; **Tilo Merlin** ABB Process Automation – Measurement & Analytics Frankfurt, Germany, tilo.merlin@de.abb.com; **Kai Garrels** ABB Electrificiation Heidelberg, Germany, kai.garrels@de.abb.com; **Michael Klipphahn** ABB Motion Service, Smart Solutions – Global R&D Ladenburg, Germany, michael.klipphahn@de.abb.com

Information – such as documentation, manuals, technical data, drawings, notes and certificates – follows a product throughout its entire life cycle, all the way from the design process, installation, operation and maintenance, to eventual decommissioning and recycling. Locating relevant and up-to-date documentation for a product is often a struggle for users as much of it is created, filed and updated manually. And even a mid-size plant can have many thousand pieces of documentation **→01**. Automating the administration of these masses of data faces barriers – for example, uniquely identifying the device, providing machine-readable documents, clear semantics (meaning) of information, standardized metadata and appropriate update mechanisms.

![https://resources.news.e.abb.com/images/2021/7/22/0/Product_digital_twin_m1020-01.jpg](https://resources.news.e.abb.com/images/2021/7/22/0/Product_digital_twin_m1020-01.jpg)

01 Industry 4.0 provides tools to help manage administration of the documentation for the thousands of devices found in a typical industrial plant.

Fortunately, advances in Industry 4.0 specifications for interoperable industrial digital twins help to overcome these barriers. Digital twins create a digital, interoperable, end-to-end solution for information on devices, starting with product design and certification, through production, logistics, transport and distribution, to the customer’s facilities, operation and maintenance organizations.

This article will show how digital twins can help solve the challenge of exchanging information between customer tools, ABB’s data repositories and other systems.

**AutoID – identifying devices and device types**

In 2018, ABB was invited to support a European process industry initiative to create a global-­scale, smart identification system for devices – from high-volume sensors to large custom-made machines. Robust and secure identification of devices is essential to provide asset-related information.

ABB worked with more than 50 partners, suppliers and customers to standardize an identification system (“AutoID”), which resulted in DIN SPEC 91406. ABB is supporting the working group to enshrine the DIN SPEC in an IEC standard, accelerating implementation around the globe.

The approach is as simple as it is efficient in that a unique identification key in the form of a machine-readable label is enough to:

- Distinguish and reference any devices marked with such a coded label.
- Create, process, store and exchange any kind of information related to a physical object.

A basic principle was defined to eliminate the need for a central coordination body to guarantee code uniqueness: The code should contain one element identifying the vendor and a second element under the vendor’s control and unique in its domain. Internet addresses (weblinks) were used to solve this coding challenge.

As a physical container, a 2-D code (QR code or data matrix) was chosen, allowing the AutoID to be read by optical scanners and smartphones. AutoID also works with radio frequency identification (RFID) or near-field communication (NFC) to cover applications where optical scanning is not feasible.

ABB uses the weblink feature of AutoID QR codes to take the user directly to the product Web page **→02**.

![https://resources.news.e.abb.com/images/2021/7/22/0/Product_digital_twin_m1020-02.jpg](https://resources.news.e.abb.com/images/2021/7/22/0/Product_digital_twin_m1020-02.jpg)

02 Example of an AutoID weblink encoded as a QR code for a temperature transmitter.

**Sources of ABB digital, machine-readable ­product information**

Product type-specific information for ABB’s large and diverse portfolio is found in several machine-readable ABB sources:

- The ABB Library, developed and maintained by ABB, which contains marketing and technical documents, software, movies and other documents related to ABB products and services.
- The Product Information Management (PIM) system – an ABB master data repository for language translations, ABB’s customer-facing ABB Offering Tree, product and parts data.
- The PIM application – this application provides, eg, Web services, XML exports for product data and classification tree exports to downstream applications.
- Product Information Services (PIS) – a master data application that provides consistent navigation, search, selection and presentation of ABB offerings. PIS is deployed as a service to multiple internal and external-facing downstream applications.

These sources are exploited by the ABB product information exchange demonstrator, as will be described further on in this article.

**Standardized information formats**

Alone, the availability of digital information is not sufficient for a cross-organizational exchange. Luckily, there are standardized concepts available to close this gap.

Technical properties of devices need to be provided to the customer in a form that leaves no ambiguities about their meaning. This challenge is solved by predefined semantic dictionaries like ECLASS [1] or the IEC Common Data Dictionary [2]. These dictionaries define equipment classifications, such as “temperature sensor,” and properties, such as weight or height, and their values **→03**. The definition itself is based on the IEC 61360 standard and contains a human-readable description, a data format and a unique concept identifier, a so-called semantic identifier.

![https://resources.news.e.abb.com/images/2021/7/22/0/Product_digital_twin_m1020-03.jpg](https://resources.news.e.abb.com/images/2021/7/22/0/Product_digital_twin_m1020-03.jpg)

03 An example of the ingress protection code (IP code) property defined in ECLASS along with an excerpt of allowed values (source: [1]).

Regarding documentation, the German standard VDI 2770 defines an information model to package electronic documents and extend them with meta-information. This information provides not only structured multilanguage documentation for any device, but also a way to search, categorize and review this information efficiently.

**The industrial digital twin**

One of the core ideas of Industry 4.0 is to enable an interoperable, vendor-independent and open information exchange along the life cycle and across organizational boundaries.

This idea is technically addressed by the so-called Asset Administration Shell (AAS) concept, the interoperable implementation of a digital twin in the industrial domain. The development of the industrial digital twin, including AAS, is governed by “Plattform Industrie 4.0”, a German consortium of industrial and IT companies, trade associations, academia and political institutions and the Industrial Digital Twin Association. Ongoing work includes standardization of submodels to enable reuse and cybersecurity aspects to provide access control. Furthermore, an IEC working group (TC65 WG24) is well on the way to turn the AAS ideas into an international standard.

In the context of Industry 4.0, an asset may be any physical or virtual entity that is of value for an organization. In the context of this article, assets are devices and their types. The digital twin is always linked to an asset, adding a digital representation of asset information for specific use cases – eg, for product information exchange. The collection of information for one specific use case of the related asset is called a submodel.

The industrial digital twin consists of a technology-independent information model and mappings to technical implementations suitable for the life-cycle phase under consideration. For example, the digital twin may be exchanged as a file package during application specification. Later, the information can be exchanged using a Web interface in later life-cycle phases, such as monitoring during operation and maintenance.

**Digital twin infrastructure – finding the digital twin of the product**

Manufacturers will manage the AASs for their products. To locate an AAS, registries allow the identification of, or search for an AAS based on a given asset ID, just as in a telephone directory. If no ID is available, the content of an AAS can be searched or queried by specifying some of its properties.

**Putting the building blocks together in a product information exchange demonstrator**

The ABB product information exchange demonstrator makes use of all the tools that have been described in the previous sections **→04–05**.

![https://resources.news.e.abb.com/images/2021/7/22/0/Product_digital_twin_m1020-04-EN.jpg](https://resources.news.e.abb.com/images/2021/7/22/0/Product_digital_twin_m1020-04-EN.jpg)

04 Overview of the product information exchange demonstrator

As a first step, the demonstrator takes a product ID from AutoID as an input. The demonstrator uses this ID to query the ABB information systems described above for product information, documentation and images. The extracted information is assigned to different digital twin submodels and, if necessary, mapped onto the internal digital twin format. Semantic references in the form of ECLASS identifiers are also taken into account. Finally, the digital twin is translated and packaged as an AAS and returned as a file to the user.

![https://resources.news.e.abb.com/images/2021/7/22/0/Product_digital_twin_m1020-05.jpg](https://resources.news.e.abb.com/images/2021/7/22/0/Product_digital_twin_m1020-05.jpg)

05 Product information exchange between customer tools is greatly aided by using digital twins.

**→06** shows a screenshot of the AASX Package Explorer Tool [3], which is based on specifications published by Plattform Industrie 4.0. The explorer can display the content of an AAS file: In the screenshot, the left part shows the product image. The middle part shows the submodels and their content in the form of a tree. The right part shows details for the selected element – in this case, the documents contained in the documentation submodel.

![https://resources.news.e.abb.com/images/2021/7/22/0/Product_digital_twin_m1020-06.jpg](https://resources.news.e.abb.com/images/2021/7/22/0/Product_digital_twin_m1020-06.jpg)

06 View of a product’s digital twin, including identification, technical data and documentation.

The demonstrator shows how the Industry 4.0 tools work together and address the barriers mentioned at the beginning of this article:

- The product type of a device is uniquely identified via AutoID.
- Product information is accessible in a digital and machine-readable format from the ABB information systems.
- Information is converted into a standardized format (ECLASS, the IEC Common Data Dictionary and VDI 2770).
- Information is packaged in the form of an industrial digital twin and implemented as an AAS.
- The industrial digital twin can be identified and its content downloaded using the AutoID.

**ABB’s contribution to industrial digital twin standardization and applications**

Starting with early papers on cyber-physical systems and the AAS [4], ABB has contributed significantly to the evolution of the digital twin concept [5]. Since 2017, ABB has led the Plattform Industrie 4.0 working group “Reference Architecture and Standardization,” which finalized the first AAS specifications in 2019.

Since 2016, ABB has been participating in the BaSys 4.0 and BaSys 4.2 [6] projects, which defined and implemented the first AASs within an industrial and research consortium.

At the Hannover Fair in 2019, ABB presented the first end-to-end demonstrator that provides information on a power train (motor plus frequency-converter drive), aggregating information from technical product databases, engineering and configuration tools and online monitoring into a cloud-based AAS. At SPS IPC Drives 2019, ABB presented an interoperable implementation of the “digital nameplate” in a joint consortium of multiple industrial vendors and research organizations.

ABB is continuously working toward a vision of industrial digital twins from both standardization and implementation aspects. Current work includes steps to bridge Industry 4.0 concepts to the process automation domain – for example, by defining a submodel for a process module interface, the so-called module type package [7]. This work is particularly important for emerging hybrid systems – ie, production systems mixing discrete and process equipment, processes and domain standards **→07**.

![https://resources.news.e.abb.com/images/2021/7/22/1/Product_digital_twin_m1020-07.jpg](https://resources.news.e.abb.com/images/2021/7/22/1/Product_digital_twin_m1020-07.jpg)

07 Emerging hybrid systems pose the next challenge for information exchange between customer tools, ABB’s data repositories and other systems. Complete information integration is, however, the ultimate aim.

**References**

[1] https://www.eclasscontent.com/

[2] http://cdd.iec.ch/

[3] https://github.com/admin-shell-io/aasx-package-explorer

[4] C. Wagner et al., “The role of the Industry 4.0 asset administration shell and the digital twin during the life cycle of a plant,” 22nd IEEE International Conference on Emerging Technologies and Factory Automation (ETFA), 2017. Available: https://doi.org/10.1109/ETFA.2017.8247583 [Accessed February 2, 2021].

[5] Industrial Internet Consortium and Plattform Industrie 4.0, “Digital Twin and Asset Administration Shell Concepts and Application in the Industrial Internet and Industrie 4.0,” 2020. Available: https://www.plattform-i40.de/PI40/Redaktion/EN/Downloads/Publikation/Digital-Twin-and-Asset-Administration-Shell-Concepts [Accessed February 2, 2021].

[6] http://www.basys40.de

[7] K. Stark et al., “Process module engineering,” ABB Review 2/2019, pp. 72 – 77.