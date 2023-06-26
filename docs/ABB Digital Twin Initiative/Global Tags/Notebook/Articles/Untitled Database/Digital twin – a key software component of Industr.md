# Digital twin – a key software component of Industry 4.0

Created: June 23, 2023 3:14 PM

# **A key enabler for Industry 4.0 is the “digital twin,” which allows the simple acquisition and exchange of data, access to a far greater variety of information than today and unprecedented interoperability out of the box. What are the latest developments in the rapidly evolving world of digital twins?**

**Somayeh Malakuti, Jan Schlake, Sten Grüner, Dirk Schulz, Ralf Gitzel, Johannes Schmitt, Marie Platenius-Mohr, Philipp Vorst** ABB Corporate Research Center, Ladenburg, Germany: somayeh.malakuti@de.abb.com, jan-christoph.schlake@de.abb.com, sten.gruener@de.abb.com, dirk.schulz@de.abb.com, ralf.gitzel@de.abb.com, johannes.schmitt@de.abb.com, marie.platenius@de.abb.com, philipp.vorst@de.abb.com; **Kai Garrels** ABB Electrification Products, Heidelberg, Germany, kai.garrels@de.abb.com

Industrial Internet of Things (IIoT) systems enable the connectivity of numerous heterogeneous devices and other assets into one system to derive more intelligent actions from data. The application of the IIoT in industrial production systems is known as Industry 4.0. The German government, in particular, has recognized the importance of Industry 4.0 (“Industrie 4.0” in Germany; the two terms are often used interchangeably) and is continuously investing in academic research and industrial trials.

One key enabler for Industry 4.0 systems is the concept of a digital twin. A digital twin not only facilitates the acquisition and exchange of, and greater access to, a far wider variety of data than has heretofore been the case but also delivers previously unseen interoperability out of the box→1.

![https://resources.news.e.abb.com/images/2018/11/27/0/m8046-01.jpg](https://resources.news.e.abb.com/images/2018/11/27/0/m8046-01.jpg)

01 The world of manufacturing is being fundamentally changed by the advent of the IIot. A key component of this change is the digital twin.

The definition of a digital twin is evolving [1]. It is, therefore, instructive to review the current state of research on the topic, explore the work of German “Plattform Industrie 4.0” and examine some use cases in which the digital twin is the key enabler.

**The definition of the digital twin**

As depicted on the left side of→2, the digital twin was initially considered to be a set of high-fidelity mathematical models that reflect the behavior of the real assets (eg, physical devices, plants and services) as closely as possible [2]. This perception evolved to include the simulated and visible dynamic 3-D models of real-world assets (center of→2).

![https://resources.news.e.abb.com/images/2018/11/27/0/m8046-02-EN.jpg](https://resources.news.e.abb.com/images/2018/11/27/0/m8046-02-EN.jpg)

02 The evolution of digital twin definition (based on [1]).

Currently, the digital twin is defined as “an evolving digital profile of the historical and current behavior of a physical object or process that helps optimize business performance. The digital twin is based on massive, cumulative, real-time, real-world data measurements across an array of dimensions” [3]→3. This information is completed by metadata, properties and documents such as reports, documentation, or operating procedures generated during all life cycle phases of the asset.

![https://resources.news.e.abb.com/images/2018/11/27/0/m8046-03-EN.jpg](https://resources.news.e.abb.com/images/2018/11/27/0/m8046-03-EN.jpg)

03 Information dimensions that may be included in the digital twin of a device during its lifecycle phases (based on [4]).

The real value of the digital twin is unlocked when it interacts with other digital twins or software tools →4. While the digital twin on the manufacturer site contains various models for designing and manufacturing a product type, the digital twin on the customer sites contains various models to buy, install, operate, maintain and dispose of the product instances. Data exchange between digital twins completes the picture for both parties involved.

![https://resources.news.e.abb.com/images/2018/11/27/0/m8046-04-EN.jpg](https://resources.news.e.abb.com/images/2018/11/27/0/m8046-04-EN.jpg)

04 Interaction between various digital twins.

**Digital twins in the lifecycle of Industry 4.0 plants**

The digital twin is a key enabler of the benefits of Industry 4.0 because it ties information to the individual asset in the plant. With context-specific information available at the right time in the right place, it is possible to enable new use cases that are not possible with static, non-individualistic documentation and data.→5 shows ABB’s vision for design, construction and operation of Industry 4.0 plants and the role of the digital twin in each phase [5].

![https://resources.news.e.abb.com/images/2018/11/27/0/m8046-05-EN.jpg](https://resources.news.e.abb.com/images/2018/11/27/0/m8046-05-EN.jpg)

05 The digital twin in Industry 4.0 plants.

In Step 1, a complete digital model of all planning results must be developed (this is not the case in Industry 3.0). Implicit knowledge and assumptions of the planning engineers are explicitly modeled and stored in the digital twin of the plant. The devices required are selected by humans out of a digital role library and are linked to the plant’s digital twin. The roles are abstract and hardware-independent; in later phases, real devices will be fulfilling some specified roles.

In Step 2, the manufacturers’ catalogs of available product types are accessible electronically and can be explored via standard interfaces. These catalogs maintain the digital twin of product types, which cover all life cycle aspects of the types and realize a standard interface for accessing the information.

In Step 3, the selected product types are instantiated and the information relating to them (identification, parameters etc.) is included in the digital twin of the product instances. The digital twins of product instances are included in the digital twin of the plant and are linked to the digital twin of product types. The digital twins of product instances can be used – eg, for simulation and testing, based on plant topology. The results of the simulation are, again, maintained in the digital twin of the product instances.

In Step 4, utilizing the digital twin of product instances, the real products are ordered. Here, order-relevant parts of the digital twin are communicated to the product vendor. The product is, later on, integrated into the plant, configured, tested and put into operation. In this phase, the digital twins are enriched with installation and commissioning information, placement of devices, serial numbers, etc.

In Step 5, the digital twin of individual product instances, as well as the plant, are supplemented with operational and maintenance information. For example, real-time parameters, health status and number of failures are added. In “Plattform Industry 4.0,” the digital twin (known as the “administration shell” [6]) organizes information for a use case into submodels, which contain properties, files, method calls, external links or other data for that use case.

Each step described above enriches existing submodels or adds new submodels for that use case.

**The digital twin as the enabler for Industry 4.0 use cases**

A digital twin makes various use cases feasible in a more efficient way. In the following, some example use cases are discussed.

**Use case: integrated engineering, integrated operation and integrated maintenance**

During the lifecycle of a product, various information sources, models and tools become relevant→3. However, currently, the information flow within or across lifecycle phases is usually broken – eg, the maintenance information cannot easily be fed back to the engineering phase to better tune the parameters of a device. This broken information thread results in a scattering or even loss of information as well as difficulties in accessing the correct information.

A digital twin is the container for integrating information from various sources in different phases of the lifecycle. The information included may be in different formats from different tools and not necessarily be deployed in one central repository. A digital twin helps to reduce the effort required to access and manage information – eg, it can obviate the need for manual maintenance of engineering documents to reflect on-site changes during operation. The information contained in a digital twin can be used to learn from the current performance of assets and derive a rating for future systems.

**Use case: predictive product design, manufacturing and analytics**

Currently, it is not feasible to exchange information across organizations in a seamless way. For example, information about the behavior of a product sold by ABB in the customer's environment is only visible for the type designer if the customer sends warranty claims or shares service reports created by service engineers, or the customer explicitly shares feedback to the vendor, eg, via a salesperson. However, all these sources are incomplete and possibly inaccurate, meaning that the product type designer has only limited and uncertain information available for the design of the next-generation product.

The digital twin is seen as the key enabler to exchange information across organizations – for example, selected operational and maintenance information about an asset can be managed within the digital twin and exchanged with external parties in an appropriate way. Particularly the process data and models provided in a digital twin, as well as the real-time simulation results, help to predict the requirements and improve the design for the next generations of asset types. Predictive analytics help manufacturers to confidently calculate future challenges. In this use case, the digital twin approach allows continuous improvement of the asset type designs, based on real data.

**Use case: plug-and-produce for field devices**

Today, deriving the correct configuration for field devices from an existing process design requires manual work. Standardized description formats are sometimes not used. Where they are used, they may still not be openly shared, or when shared the underlying standards in process and automation design may differ in how they express the same information. The flow of information can be cut at all points where data are forwarded.

Furthermore, using Fieldbus technology, the discovery, addressing, identification and online configuration of devices is a largely manual and error-prone task. In addition, measurement points, field devices, signals, etc. typically have different names or identifiers across the different tools. As a result, a manual mapping is typically required to achieve the correct associations. Above all, if a device should require replacement during plant operation, these commissioning steps need to be redone.

Technologies such as FDI (field device integration) and OPC UA (OPC unified architecture) already mitigate many of the issues of device commissioning. The digital twin for field devices builds upon these technologies and enables a plug-and-produce scenario for the field devices. By incorporating further standards from the ICT (information and communication technology) and automation domains – in particular by including recommendations from customer interest groups such as NAMUR – the digital twin consolidates all information needed for the engineering,commissioning, use and replacement of field devices in a uniform manner. The link between the digital twin and its physical counterpart enables the operators to automatically download parameters to the field devices and bring them into operation. While the physical replacement still requires trained personnel, the digital twin allows instant reconfiguration without the need for a device or process expert.

Most obviously, the digital twin reduces the time for the basic engineering and commissioning of a field device from some 10 minutes (provided no issues occur) down to fractions of a second. For an average-sized plant with 10,000 I/O points, the work of a week is reduced to a few minutes.

By maintaining the information flow across lifecycle phases, the systematic reuse of existing information from the original process design is potentially of even greater value. The configuration of a field device becomes a direct consequence of the intentions of the process engineer; the reason for any configuration can be objectively and automatically traced to a customer requirement. This situation increases the quality of engineering data because errors are confined to the original process design.

**The digital twin at ABB**

Due to the significant role of the digital twin in Industry 4.0, its various aspects are being investigated by research projects in ABB. For example, the BaSys 4.0 [7] project, of which BMBF (German Ministry of Education and Research) are cofounders, unites 15 industrial and academic partners. The main goal of the project is to develop a reference open platform in which the digital twin is the key enabler to achieve flexibility in industrial manufacturing and process industries.

As the IIoT gains traction, digital twins will become a cornerstone of industrial automation. The ability to implement effective digital twins will be a critical skill in writing the digital future of the automation landscape.

**References**

[1] R. Drath, “The Digital Twin: The Evolution of a key Concept, of Industry 4.0,” guest article for visIT / Fraunhofer IOSB 2018. Available: https://www.iosb.fraunhofer.de/servlet/is/81724/

[2] Michael Grieves, “Digital Twin: Manufacturing Excellence through Virtual Factory Replication,” whitepaper, 2014. Available: http://innovate.fit.edu/plm/documents/doc_mgr/912/1411.0_Digital_Twin_White_Paper_Dr_Grieves.pdf

[3] Deloitte Consulting, “Industry 4.0 and the digital twin – Manufacturing meets its match,” Deloitte University Press, 2017.

[4] C. Ganz, “Digital twin – virtually identical?” ABB Review 02/2018, pp. 94-95.

[5] C. Wagner et al., “The role of the Industry 4.0 Asset Administration Shell and the Digital Twin during the life cycle of a plant,” IEEE International Conference on Emerging Technologies and Factory Automation, Limassol, Cyprus, 2017.

[6] Plattform Industry 4.0, “Structure of the administration shell.” Available: https://www.plattform-i40.de/I40/Redaktion/EN/Downloads/Publikation/structure-of-the-administration-shell.html

[7] https://www.basys40.de/