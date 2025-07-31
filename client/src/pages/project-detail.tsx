import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import Navigation from '@/components/navigation';
import { ArrowLeft, ExternalLink, FileText, Target, Cog, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';

const projectDetails = {
  '1': {
    title: 'AI-Driven Cybersecurity',
    summary: 'Securing Systems with ML & Adversarial ML defenses',
    description: 'This project aims to leverage advanced Machine Learning (ML) techniques to enhance cybersecurity by detecting and mitigating threats in real-time. The focus is also on developing adversarial ML defenses, which are crucial for securing AI systems against sophisticated attacks.',
    image: '/attached_assets/featured_1753970702503.png',
    category: 'Machine Learning',
    year: 2024,
    status: 'Active',
    tags: ['AI Security', 'Threat Detection', 'Adversarial ML', 'Cybersecurity'],
    keyAreas: [
      {
        title: 'AI-Driven Threat Detection',
        color: '#007BFF',
        description: 'Develop and implement AI models to detect potential security threats by analyzing vast amounts of system data. The models identify anomalies in network traffic, user behavior, and application logs to spot indicators of compromise (IoCs).',
        details: [
          'Utilize both supervised and unsupervised learning algorithms to improve threat detection accuracy',
          'Integrate real-time data streams for prompt detection and response to evolving threats'
        ]
      },
      {
        title: 'Adversarial Machine Learning (AML) Defense Strategies',
        color: '#28A745',
        description: 'Focuses on defending ML models against adversarial attacks that attempt to manipulate AI algorithms by injecting malicious data inputs. Explore techniques to harden models and reduce their susceptibility to adversarial examples.',
        details: [
          'Implement adversarial training by generating adversarial examples and retraining models to improve their robustness',
          'Utilize techniques like input preprocessing and gradient masking to counter adversarial threats'
        ]
      },
      {
        title: 'Cyber Threat Intelligence (CTI) with AI',
        color: '#FFC107',
        description: 'Incorporate ML to improve cyber threat intelligence (CTI), automating the identification and classification of attack patterns and cybercriminal tactics, techniques, and procedures (TTPs).',
        details: [
          'Develop ML models that predict and prevent potential attacks based on historical data and current threat landscapes'
        ]
      },
      {
        title: 'Vulnerability Prediction and Mitigation',
        color: '#DC3545',
        description: 'Use ML models to predict software vulnerabilities based on code analysis, historical vulnerability data, and other indicators. The models provides recommendations for patching or mitigating potential risks before they get exploited.',
        details: []
      }
    ],
    skills: [
      {
        name: 'ML for Threat Detection',
        description: 'Leverage ML algorithms, such as decision trees, neural networks, and clustering techniques, to detect anomalies and cybersecurity threats'
      },
      {
        name: 'Adversarial ML Defenses',
        description: 'Develop techniques to defend against adversarial attacks, including adversarial retraining and gradient masking'
      },
      {
        name: 'AI-Driven Threat Intelligence',
        description: 'Automate the classification and analysis of cyber threats using ML models'
      },
      {
        name: 'Vulnerability Prediction',
        description: 'Predict software vulnerabilities and recommend mitigations based on ML-driven insights'
      }
    ],
    relatedTopics: [
      {
        title: 'Adversarial Machine Learning',
        url: 'https://www.paloaltonetworks.com/cyberpedia/what-are-adversarial-attacks-on-AI-Machine-Learning'
      },
      {
        title: 'Cyber Threat Intelligence and Sharing',
        url: 'https://cybersecurity.att.com/blogs/security-essentials/what-is-cybersecurity-threat-intelligence-sharing'
      },
      {
        title: 'AI in Cybersecurity: State of the Art',
        url: 'https://www.paloaltonetworks.com/blog/2024/04/ai-cybersecurity-and-large-language-models/'
      }
    ]
  },
  '2': {
    title: 'Explainable and Interpretable AI',
    summary: 'Integrating XAI models into cybersecurity systems',
    description: 'This project focuses on integrating Explainable and Interpretable AI (XAI) models into cybersecurity systems to improve transparency, trust, and decision-making for threat detection and mitigation. The goal was to bridge the gap between AI\'s powerful predictive capabilities and the need for human-understandable insights, ensuring that AI-driven security decisions could be verified and trusted.',
    image: '/attached_assets/featured_1753971047206.png',
    category: 'Machine Learning',
    year: 2024,
    status: 'Active',
    tags: ['XAI', 'Interpretability', 'Trust in AI', 'Cybersecurity'],
    keyAreas: [
      {
        title: 'Explainability in AI-based Threat Detection',
        color: '#007BFF',
        description: 'Implement AI models that provided clear, human-readable explanations for detecting cybersecurity threats. This involves creating interpretable models that revealed the factors and features contributing to predictions, such as abnormal user behavior, network traffic anomalies, or malicious code patterns.',
        details: [
          'Develop post-hoc explanation methods like SHAP (Shapley Additive Explanations) and LIME (Local Interpretable Model-Agnostic Explanations) to break down AI model predictions',
          'Implement attention mechanisms and saliency maps to visualize which data points the AI focuses during threat detection'
        ]
      },
      {
        title: 'Interpretable Models for Decision Support',
        color: '#28A745',
        description: 'Design interpretable machine learning models, such as decision trees and rule-based systems, for real-time cybersecurity monitoring. These models must offer transparent decision-making pathways, allowing security analysts to follow the logic behind threat detection results.',
        details: [
          'Use inherently interpretable models such as decision trees and logistic regression, which naturally lend themselves to easier human interpretation',
          'Provide detailed documentation on how AI-derived insights could be leveraged by analysts to prevent future threats'
        ]
      },
      {
        title: 'Improving Trust in AI-Driven Cybersecurity',
        color: '#FFC107',
        description: 'Develop methods to build trust and reliability in AI-driven threat detection systems by making the underlying decision processes understandable to cybersecurity professionals. This increases the willingness of security teams to adopt AI solutions and act on the system\'s recommendations.',
        details: [
          'Apply techniques that allows for traceability of AI decisions, mapping each step of the threat detection process back to explainable factors',
          'Design evaluation metrics for explainability and interpretability to measure user satisfaction and confidence in AI decisions'
        ]
      },
      {
        title: 'Adversarial Example Detection with Explainable AI',
        color: '#DC3545',
        description: 'Explore how XAI could assist in detecting adversarial attacks on machine learning models. By understanding how adversarial examples trick models, this project provides better defenses against such attacks in cybersecurity applications.',
        details: []
      }
    ],
    skills: [
      {
        name: 'Explainable AI',
        description: 'Use tools such as SHAP and LIME to decompose and explain AI decisions in cybersecurity applications'
      },
      {
        name: 'Interpretable AI Models',
        description: 'Design models like decision trees and rule-based systems to provide clear and interpretable threat detection pathways'
      },
      {
        name: 'Adversarial Defense',
        description: 'Apply explainable AI to detect adversarial examples and secure AI-driven systems against manipulation'
      },
      {
        name: 'Trust Building',
        description: 'Enhance user trust in AI-driven cybersecurity systems by improving transparency in decision-making'
      }
    ],
    relatedTopics: [
      {
        title: 'Explainable AI',
        url: 'https://insights.sei.cmu.edu/blog/what-is-explainable-ai/'
      },
      {
        title: 'DARPA\'s XAI Program',
        url: 'https://www.darpa.mil/program/explainable-artificial-intelligence'
      },
      {
        title: 'LIME: Interpretable Model-Agnostic Explanations',
        url: 'https://arxiv.org/pdf/1602.04938'
      }
    ]
  },
  '3': {
    title: 'Secure Protocol Design - IIOT',
    summary: 'Enhancing the security of IIOT devices through secure protocols',
    description: 'This project focuses on enhancing the security of Industrial Internet of Things (IIoT) devices by designing and evaluating secure communication protocols. IIoT devices are integral to modern industrial environments, but their increasing connectivity also exposes them to potential cyber threats. The goal is to develop protocols that are both robust and resilient against a wide array of attacks, ensuring the safe and secure operation of industrial systems.',
    image: '/attached_assets/featured_1753971098336.png',
    category: 'IoT & IIoT',
    year: 2024,
    status: 'Active',
    tags: ['IIoT Security', 'Protocol Design', 'Industrial Systems', 'Cryptography'],
    keyAreas: [
      {
        title: 'Threat Modeling and Risk Assessment',
        color: '#007BFF',
        description: 'Conduct comprehensive threat modeling to identify the attack surface of IIoT devices, assessing potential vulnerabilities based on common threat vectors such as Man-in-the-Middle (MitM) attacks, replay attacks, and unauthorized data manipulation.',
        details: []
      },
      {
        title: 'Design of Secure Communication Protocols',
        color: '#28A745',
        description: 'Develop secure communication protocols for IIoT devices, emphasizing encryption, authentication, and data integrity. Incorporate lightweight cryptographic algorithms to ensure that protocols are not only secure but also resource-efficient for low-power IIoT devices.',
        details: [
          'Utilize public-key and symmetric-key encryption techniques to secure communication channels',
          'Implement challenge-response mechanisms to prevent replay and spoofing attacks'
        ]
      },
      {
        title: 'Vulnerability Assessment and Penetration Testing',
        color: '#FFC107',
        description: 'Perform penetration testing on the designed protocols, simulating various attack scenarios to validate their security. Identify weaknesses through rigorous testing, leading to iterative improvements in the protocol design.',
        details: []
      },
      {
        title: 'Implementation of Security Controls and Best Practices',
        color: '#DC3545',
        description: 'Incorporate security controls such as access control, secure key management, and anomaly detection mechanisms. Apply best practices to minimize the attack surface, such as input validation, error handling, and secure firmware updates.',
        details: []
      }
    ],
    skills: [
      {
        name: 'Threat Modeling',
        description: 'Identify and prioritize potential threats to IIoT devices, developing mitigation strategies for each identified risk'
      },
      {
        name: 'Protocol Design',
        description: 'Create secure communication protocols tailored to the unique requirements of IIoT environments, balancing security and resource efficiency'
      },
      {
        name: 'Cryptographic Implementation',
        description: 'Integrate encryption and authentication mechanisms, safeguarding data transmission between IIoT devices and control systems'
      },
      {
        name: 'Penetration Testing',
        description: 'Simulate attacks on protocols to identify vulnerabilities, leading to robust and secure implementations'
      }
    ],
    relatedTopics: [
      {
        title: 'Industrial Control Systems (ICS) Security',
        url: 'https://www.cisa.gov/ics'
      },
      {
        title: 'Industrial IoT (IIoT)',
        url: 'https://claroty.com/blog/iiot-security-essentials'
      },
      {
        title: 'Security Engineering for Cyber-Physical Systems',
        url: 'https://claroty.com/blog/cyber-physical-systems-security-is-the-new-ot-security'
      }
    ]
  },
  '4': {
    title: 'Quantum-Resilient Defense Sys. for OT',
    summary: 'AI-driven defense system with digital twins and quantum-resistant cryptography',
    description: 'Securing Operational Technology (OT) in critical infrastructure is becoming increasingly challenging with the rise of cyber-physical attacks and advancements in quantum computing. This project proposes a quantum-resilient AI-driven defense system that utilizes digital twins, AI for threat prediction, and quantum-resistant cryptography. This approach provides a proactive, adaptive, and resilient security framework to ensure uninterrupted and secure operation of critical infrastructure systems.',
    image: '/attached_assets/featured_1753972332337.png',
    category: 'Security & Privacy',
    year: 2024,
    status: 'Active',
    tags: ['Digital Twins', 'Quantum Security', 'AI Defense', 'OT Security'],
    keyAreas: [
      {
        title: 'AI-Powered Threat Prediction and Detection Models',
        color: '#007BFF',
        description: 'Implement AI algorithms to analyze real-time OT data, detect anomalies, and predict potential threats before they impact critical operations. Leverage reinforcement learning to adaptively update threat detection models based on emerging attack patterns.',
        details: [
          'Collect real-time data from OT devices, including system logs, network traffic, and sensor data, to train AI threat detection models',
          'Implement AI algorithms to analyze real-time OT data, detect anomalies, and predict potential threats before they impact critical operations',
          'Leverage reinforcement learning to adaptively update threat detection models based on emerging attack patterns'
        ]
      },
      {
        title: 'Digital Twins for Virtual Testing and Defense Simulation',
        color: '#28A745',
        description: 'Design digital twin models to simulate OT assets and predict the impact of various attack scenarios in a controlled environment. Enable continuous testing of defense protocols using digital twins to ensure effectiveness without disrupting live systems.',
        details: [
          'Create digital twin environments replicating OT assets and integrate real-time data for accurate simulation and defense testing',
          'Design digital twin models to simulate OT assets and predict the impact of various attack scenarios in a controlled environment',
          'Simulate cyber-physical threats to validate defense protocols and adjust response strategies based on simulation outcomes'
        ]
      },
      {
        title: 'Quantum-Resistant Cryptographic Algorithms',
        color: '#FFC107',
        description: 'Incorporate quantum-resistant encryption methods to secure sensitive OT data from future quantum-based attacks. Utilize lattice-based or hash-based cryptographic protocols to ensure long-term data integrity and privacy.',
        details: [
          'Implement quantum-resistant cryptographic algorithms within the OT network to secure data transmission and storage',
          'Deploy secure communication channels between OT devices and control systems, preventing unauthorized data access',
          'Utilize lattice-based or hash-based cryptographic protocols to ensure long-term data integrity and privacy'
        ]
      },
      {
        title: 'Adaptive Response Mechanism',
        color: '#DC3545',
        description: 'Design an adaptive response system using reinforcement learning to improve reaction times and accuracy in identifying and neutralizing threats. Incorporate automated, multi-layered defense responses to isolate compromised systems and maintain operational continuity.',
        details: [
          'Design an adaptive response system using reinforcement learning to improve reaction times and accuracy in identifying and neutralizing threats',
          'Incorporate automated, multi-layered defense responses to isolate compromised systems and maintain operational continuity',
          'Address scalability for large-scale OT environments and ensure AI model reliability and adaptability in critical infrastructure'
        ]
      }
    ],
    skills: [
      {
        name: 'AI-Powered Threat Prediction',
        description: 'Develop machine learning algorithms for real-time OT data analysis, anomaly detection, and predictive threat modeling using reinforcement learning'
      },
      {
        name: 'Digital Twin Architecture',
        description: 'Create comprehensive digital twin environments for OT asset simulation and cyber-physical threat testing without disrupting live systems'
      },
      {
        name: 'Quantum-Resistant Cryptography',
        description: 'Implement lattice-based and hash-based cryptographic protocols to secure OT data transmission and storage against quantum attacks'
      },
      {
        name: 'Adaptive Defense Systems',
        description: 'Design automated, multi-layered defense responses with reinforcement learning for continuous threat mitigation and operational continuity'
      }
    ],
    relatedTopics: [
      {
        title: 'Digital Twin',
        url: 'https://www.nvidia.com/en-us/glossary/digital-twin/'
      },
      {
        title: 'How Digital Twins Are Transforming Cybersecurity Defense and Threat Detection?',
        url: 'https://www.rsaconference.com/library/blog/how-digital-twins-are-transforming-cybersecurity-defense-and-threat-detection'
      },
      {
        title: 'Trend Micro Security Predictions for 2025',
        url: 'https://www.trendmicro.com/vinfo/us/security/research-and-analysis/predictions/the-artificial-future-trend-micro-security-predictions-for-2025'
      }
    ]
  },
  '5': {
    title: 'Data Analytics for Edge',
    summary: 'Privacy-preserving mechanisms for edge computing environments',
    description: 'As the adoption of edge computing expands, data privacy concerns at the network\'s edge have become paramount. This project investigates privacy-preserving mechanisms tailored for edge computing environments, where data is processed closer to its source rather than centralized in the cloud. We explore techniques that secure sensitive data during on-device processing, enabling real-time, privacy-conscious analytics in sectors such as healthcare, IoT, and smart cities.',
    image: '/attached_assets/featured_1753971681868.png',
    category: 'Systems Security',
    year: 2024,
    status: 'Active',
    tags: ['Edge Computing', 'Privacy Preservation', 'Data Analytics', 'Federated Learning'],
    keyAreas: [
      {
        title: 'Data Privacy Challenges in Edge Computing',
        color: '#007BFF',
        description: 'Edge environments introduce unique privacy challenges due to limited processing power and distributed data collection. This section examines key privacy concerns specific to edge computing.',
        details: [
          'Data Minimization: Strategies to collect and process only essential data, reducing exposure of sensitive information',
          'Decentralized Privacy Controls: Privacy mechanisms must be managed locally at each device rather than centrally, adding complexity',
          'Enhanced Encryption Standards: Lightweight encryption tailored for devices with limited resources, such as IoT sensors'
        ]
      },
      {
        title: 'Techniques for Privacy Preservation on the Edge',
        color: '#28A745',
        description: 'We investigate privacy techniques optimized for real-time, localized data processing, focusing on methods that minimize data transmission while maintaining security.',
        details: [
          'Federated Learning: Enables model training on device data without transferring raw data to a central server, preserving privacy while generating insights',
          'Homomorphic Encryption: Allows computation on encrypted data, keeping information secure throughout processing and preventing data leakage',
          'Trusted Execution Environments (TEEs): Secure hardware enclaves that provide isolated environments for processing sensitive data directly on devices'
        ]
      },
      {
        title: 'Privacy Considerations at Each Edge Device Lifecycle Stage',
        color: '#FFC107',
        description: 'Privacy measures tailored for each stage of edge device lifecycles are crucial for maintaining long-term data security.',
        details: [
          'Device Setup: Ensuring secure device initialization with encryption keys and privacy policies',
          'Data Collection: Integrating data minimization techniques during sensor data acquisition to protect user privacy',
          'Data Processing: Applying privacy-preserving analytics techniques, such as TEEs, to process sensitive information on-device',
          'Data Sharing: Securing inter-device communication and data sharing within edge environments, mitigating exposure risks',
          'Device Decommissioning: Ensuring secure data erasure to protect privacy when the device lifecycle ends'
        ]
      },
      {
        title: 'Challenges and Limitations',
        color: '#DC3545',
        description: 'Implementing privacy-preserving mechanisms at the edge presents unique challenges that must be addressed for successful deployment.',
        details: [
          'Device Resource Constraints: Many edge devices have limited processing power and battery life, restricting complex privacy mechanisms',
          'Network Security: Edge networks are susceptible to cyber attacks, requiring robust, decentralized security frameworks',
          'Data Synchronization: Ensuring consistency and security across multiple distributed devices can be challenging in real-time environments'
        ]
      }
    ],
    skills: [
      {
        name: 'Edge Computing Architecture',
        description: 'Design and implement distributed computing systems that process data at the network edge while maintaining privacy'
      },
      {
        name: 'Privacy-Preserving Techniques',
        description: 'Apply federated learning, homomorphic encryption, and TEEs to protect sensitive data during edge processing'
      },
      {
        name: 'Resource-Constrained Security',
        description: 'Develop lightweight security mechanisms suitable for devices with limited computational resources'
      },
      {
        name: 'Distributed Systems Security',
        description: 'Implement secure communication and data synchronization across distributed edge environments'
      }
    ],
    relatedTopics: [
      {
        title: 'Federated Learning Systems',
        url: 'https://federated.withgoogle.com/'
      },
      {
        title: 'Edge Computing Security',
        url: 'https://www.nist.gov/programs-projects/privacy-engineering-collaboration-space'
      },
      {
        title: 'Homomorphic Encryption',
        url: 'https://homomorphicencryption.org/'
      }
    ]
  },
  '6': {
    title: 'Fuzzing OT Apps and Protocols',
    summary: 'Focus on enhancing the security of OT applications and protocols',
    description: 'In this project, the focus is on enhancing the security of Operational Technology (OT) applications and communication protocols. The objective is to identify and address vulnerabilities that could potentially compromise critical OT systems through advanced fuzzing techniques and comprehensive threat analysis.',
    image: '/attached_assets/featured_1753971704306.png',
    category: 'Fuzzing',
    year: 2024,
    status: 'Active',
    tags: ['OT Security', 'Protocol Fuzzing', 'Vulnerability Research', 'Information Flow'],
    keyAreas: [
      {
        title: 'Recreation of Proof of Concepts (PoCs)',
        color: '#007BFF',
        description: 'Reconstruct and test known Proof of Concepts (PoCs) to understand the nature of existing threats and vulnerabilities in OT systems. Analyze how these PoCs exploit specific weaknesses and assess their impact on system operations.',
        details: []
      },
      {
        title: 'Fuzzing Implementation',
        color: '#28A745',
        description: 'Utilize advanced fuzzing techniques to test OT applications and protocols extensively, simulate various edge cases and malformed inputs to expose hidden vulnerabilities.',
        details: [
          'Combine different fuzzing strategies, such as mutation-based and generation-based fuzzing, to enhance test coverage and ensure thorough security assessment'
        ]
      },
      {
        title: 'Threat Analysis and Vulnerability Research',
        color: '#FFC107',
        description: 'Conduct a comprehensive threat analysis to identify potential attack vectors in OT environments, leveraging information flow analysis to trace how vulnerabilities could propagate within systems.',
        details: []
      },
      {
        title: 'Information Flow Analysis',
        color: '#DC3545',
        description: 'Integrate information flow analysis techniques to track data movement within OT applications, allowing the detection of unauthorized data flows that could signify exploitation attempts or misconfigurations.',
        details: []
      }
    ],
    skills: [
      {
        name: 'Fuzzing',
        description: 'Implement various fuzzing tools and frameworks to identify vulnerabilities in OT protocols and applications'
      },
      {
        name: 'Threat Analysis',
        description: 'Assess and categorize security threats based on severity, providing actionable insights for mitigation'
      },
      {
        name: 'Information Flow Analysis',
        description: 'Track and analyze the flow of information to detect anomalies and potential security breaches'
      },
      {
        name: 'Vulnerability Research',
        description: 'Investigate and document security flaws, contributing to the development of security patches and improvements for OT systems'
      }
    ],
    relatedTopics: [
      {
        title: 'Fuzzing',
        url: 'https://github.com/cpuu/awesome-fuzzing'
      },
      {
        title: 'Operational Technology',
        url: 'https://claroty.com/glossary/operational-technology-ot'
      },
      {
        title: 'Industrial Control System',
        url: 'https://claroty.com/blog/cybersecurity-dictionary-industrial-control-systems-ics-security'
      }
    ]
  },
  '7': {
    title: 'Data Privacy Preservation',
    summary: 'Safeguarding sensitive data through privacy preservation mechanisms',
    description: 'As the digital world continues to grow, safeguarding sensitive data has become a top priority for organizations, governments, and individuals. In this project, we delve into various privacy preservation mechanisms that can be implemented at different stages of the data lifecycle, from collection to deletion. These methods ensure that sensitive information is protected against unauthorized access, exploitation, or misuse.',
    image: '/attached_assets/featured_1753971748063.png',
    category: 'Security & Privacy',
    year: 2024,
    status: 'Active',
    tags: ['Differential Privacy', 'Data Protection', 'Cryptography', 'Federated Learning'],
    keyAreas: [
      {
        title: 'Overview of Privacy-Preserving Mechanisms',
        color: '#007BFF',
        description: 'Privacy preservation mechanisms are essential for protecting sensitive data across its entire lifecycle, including collection, storage, processing, transmission, and deletion.',
        details: [
          'Data Masking: This technique hides specific elements of the data, ensuring sensitive parts (e.g., personal identifiers) are not exposed',
          'Pseudonymization: Replaces identifiable information with pseudonyms to maintain the usefulness of data while protecting individuals\' identities',
          'Encryption: Ensures that data is only accessible to authorized users through cryptographic techniques, providing protection during storage and transmission',
          'Randomized Response (RR): Introduces randomness into responses during data collection to protect individuals\' privacy, typically used in surveys or sensitive inquiries'
        ]
      },
      {
        title: 'Advanced Privacy Preservation Methods',
        color: '#28A745',
        description: 'Beyond the foundational techniques, there are more advanced privacy mechanisms to enhance protection, especially in the realm of machine learning and data processing.',
        details: [
          'Differential Privacy (DP): Introduces carefully calibrated noise to datasets to prevent the identification of individual data points while maintaining overall data utility',
          'Secure Multiparty Computation (MPC): Enables multiple parties to compute a function over their inputs without revealing the inputs to each other',
          'Federated Learning: Enables model training on decentralized data, ensuring that sensitive data remains localized without being shared across systems',
          'Zero Knowledge Proofs (ZKPs): A cryptographic method allowing one party to prove the validity of a statement without revealing the underlying data',
          'Blockchain for Privacy: Distributed ledger technologies provide secure, transparent, and immutable records, ensuring data integrity and privacy'
        ]
      },
      {
        title: 'Privacy at Different Stages of the Data Lifecycle',
        color: '#FFC107',
        description: 'Privacy preservation mechanisms can be applied at each stage of the data lifecycle to provide comprehensive protection across collection, storage, processing, transmission, and deletion phases.',
        details: []
      },
      {
        title: 'Challenges and Limitations of Privacy Preservation',
        color: '#DC3545',
        description: 'Despite significant advances in privacy-preserving technologies, there are still critical challenges to overcome in balancing privacy with utility and scalability.',
        details: [
          'Balancing Privacy and Data Utility: Many privacy techniques, especially those adding noise (like differential privacy), must find the right balance between protecting data and preserving its usefulness',
          'Adversarial Attacks: Attackers may use inference attacks or adversarial machine learning to bypass privacy mechanisms and extract sensitive data',
          'Scalability: Implementing advanced cryptographic or decentralized techniques (e.g., MPC, federated learning) can be computationally intensive, making them difficult to scale',
          'Regulatory Compliance: With evolving global regulations, organizations must continuously adapt their privacy mechanisms to meet standards like GDPR, HIPAA, and other regional laws'
        ]
      }
    ],
    skills: [
      {
        name: 'Differential Privacy Implementation',
        description: 'Design and implement differential privacy mechanisms to protect individual data points while maintaining dataset utility for analysis'
      },
      {
        name: 'Cryptographic Privacy Techniques',
        description: 'Apply advanced cryptographic methods including homomorphic encryption, secure multiparty computation, and zero-knowledge proofs'
      },
      {
        name: 'Privacy-Preserving Machine Learning',
        description: 'Develop federated learning systems and privacy-aware ML models that protect sensitive training data'
      },
      {
        name: 'Regulatory Compliance & Data Governance',
        description: 'Ensure privacy preservation mechanisms meet regulatory requirements like GDPR, HIPAA, and other data protection standards'
      }
    ],
    relatedTopics: [
      {
        title: 'Differential Privacy',
        url: 'https://hdsr.mitpress.mit.edu/pub/sl9we8gh/release/3'
      },
      {
        title: 'Federated Learning',
        url: 'https://federated.withgoogle.com'
      },
      {
        title: 'Zero Knowledge Proofs',
        url: 'https://crypto.stanford.edu/pbc/notes/crypto/zk.html'
      },
      {
        title: 'Homomorphic Encryption',
        url: 'https://www.internetsociety.org/resources/doc/2023/homomorphic-encryption/'
      }
    ]
  },
  '8': {
    title: 'SCADA Systems Security',
    summary: 'Securing SCADA systems through vulnerability identification and mitigation',
    description: 'This project aimed to secure Supervisory Control and Data Acquisition (SCADA) systems by identifying and mitigating vulnerabilities in their communication protocols and control applications. SCADA systems are critical for industrial automation and infrastructure, making them prime targets for cyber attacks. The primary focus was to enhance the security posture of these systems through fuzzing techniques combined with other analysis methods.',
    image: '/attached_assets/featured_1753971767162.png',
    category: 'Systems Security',
    year: 2024,
    status: 'Active',
    tags: ['SCADA Security', 'Protocol Analysis', 'Industrial Systems', 'Vulnerability Assessment'],
    keyAreas: [
      {
        title: 'Protocol Analysis and Reverse Engineering',
        color: '#007BFF',
        description: 'Conducted reverse engineering of SCADA protocols to understand their structure, behavior, and potential vulnerabilities. Developed custom parsers for undocumented or proprietary protocols used in industrial control systems to facilitate fuzzing and vulnerability detection.',
        details: []
      },
      {
        title: 'Fuzzing Implementation for SCADA Protocols',
        color: '#28A745',
        description: 'Implemented fuzzing frameworks tailored for SCADA systems, focusing on field device communication and Human-Machine Interface (HMI) interactions. Applied generation-based fuzzing to craft input sequences that mimic realistic yet potentially malicious communications.',
        details: [
          'Used mutation-based fuzzing to generate a wide range of malformed and boundary case inputs, targeting the resilience and robustness of SCADA components'
        ]
      },
      {
        title: 'Vulnerability Detection and Mitigation',
        color: '#FFC107',
        description: 'Analyzed the results of fuzzing tests to detect anomalies, such as unexpected crashes, memory corruption, and protocol deviations, indicating potential vulnerabilities. Conducted root cause analysis for identified vulnerabilities and collaborated with development teams to design patches or mitigation techniques.',
        details: []
      },
      {
        title: 'Information Flow and Data Integrity Monitoring',
        color: '#DC3545',
        description: 'Applied information flow tracking within SCADA environments to ensure data integrity and trace unauthorized modifications or leakages during fuzzing tests. Integrated these insights with fuzzing outcomes to gain a comprehensive understanding of how vulnerabilities could impact system operations.',
        details: []
      }
    ],
    skills: [
      {
        name: 'Protocol Reverse Engineering',
        description: 'Deciphered proprietary and standard SCADA protocols, creating custom fuzzing scripts and parsers for comprehensive security analysis'
      },
      {
        name: 'SCADA-Specific Fuzzing',
        description: 'Developed and applied specialized fuzzing techniques to uncover vulnerabilities unique to SCADA communication and control systems'
      },
      {
        name: 'Industrial Security Vulnerability Analysis',
        description: 'Investigated the root causes of security flaws and suggested fixes or mitigations to strengthen SCADA system resilience'
      },
      {
        name: 'Information Flow Analysis',
        description: 'Tracked and validated data flow to detect unauthorized activities, ensuring the security and integrity of SCADA components'
      }
    ],
    relatedTopics: [
      {
        title: 'Fuzzing Techniques',
        url: 'https://github.com/cpuu/awesome-fuzzing'
      },
      {
        title: 'SCADA Systems Security',
        url: 'https://claroty.com/blog/a-comprehensive-guide-to-scada-cybersecurity'
      },
      {
        title: 'Industrial Control Systems Security',
        url: 'https://claroty.com/blog/cybersecurity-dictionary-industrial-control-systems-ics-security'
      }
    ]
  },
  '9': {
    title: 'Secure ITS for Future Smart Cities',
    summary: 'Multi-layered ITS framework for adaptive smart city transportation',
    description: 'With the rise of autonomous vehicles, connected infrastructure, and IoT-enabled transportation, creating a secure and efficient Intelligent Transportation System (ITS) has become a core objective for future smart cities. This project proposes a multi-layered ITS framework that integrates AI for traffic prediction, blockchain for secure data sharing, and IoT sensors for real-time monitoring. The project aims to develop a resilient system capable of adapting to traffic conditions and supporting both human-driven and autonomous vehicles.',
    image: '/attached_assets/featured_1753971794927.png',
    category: 'Systems Security',
    year: 2024,
    status: 'Active',
    tags: ['Smart Cities', 'ITS', 'AI Traffic Management', 'Blockchain Security'],
    keyAreas: [
      {
        title: 'AI-Driven Traffic Prediction Models',
        color: '#007BFF',
        description: 'Implement machine learning algorithms for real-time traffic forecasting and incorporate deep learning models to analyze complex traffic patterns and predict congestion.',
        details: [
          'Implement machine learning algorithms for real-time traffic forecasting based on historical and real-time data collected from IoT sensors, cameras, and GPS-enabled vehicles',
          'Incorporate deep learning models to analyze complex traffic patterns and predict congestion, allowing proactive measures like rerouting or signal adjustments'
        ]
      },
      {
        title: 'Blockchain-Based Data Sharing Framework',
        color: '#28A745',
        description: 'Use blockchain to create a decentralized, tamper-proof data-sharing platform for autonomous vehicles, city infrastructure, and transportation management systems.',
        details: [
          'Use blockchain to create a decentralized, tamper-proof data-sharing platform for autonomous vehicles, city infrastructure, and transportation management systems',
          'Enable secure peer-to-peer communication between vehicles, ensuring trusted interactions and reducing potential tampering risks in vehicle-to-everything (V2X) networks'
        ]
      },
      {
        title: 'Real-Time Traffic Monitoring with IoT Sensors',
        color: '#FFC107',
        description: 'Deploy IoT sensors at strategic locations to monitor vehicle flow, pedestrian movements, and environmental data in real time.',
        details: [
          'Deploy IoT sensors at strategic locations (e.g., intersections, highways, parking areas) to monitor vehicle flow, pedestrian movements, and environmental data in real time',
          'Integrate sensor data with the AI models and blockchain framework to ensure accurate, up-to-date data for traffic management decisions'
        ]
      },
      {
        title: 'Future Trends and Challenges',
        color: '#DC3545',
        description: 'Address scalability, quantum-resistant security, autonomous vehicle integration, energy efficiency, and privacy-preserving mechanisms for sustainable smart city transportation.',
        details: [
          'Scalability and Data Volume Management: Managing exponential growth in connected devices and data with edge computing for low-latency processing',
          'Quantum-Resistant Security: Incorporating quantum-resistant encryption algorithms into blockchain frameworks for future-proof security',
          'Integration with Autonomous Vehicle Systems: Ensuring compatibility with various autonomous vehicle protocols for seamless data sharing',
          'Privacy-Preserving Mechanisms: Balancing data utility and privacy protection using differential privacy and homomorphic encryption'
        ]
      }
    ],
    skills: [
      {
        name: 'AI Traffic Management Systems',
        description: 'Develop deep learning models and reinforcement learning algorithms for dynamic traffic optimization and congestion prediction'
      },
      {
        name: 'Blockchain for Transportation Security',
        description: 'Implement permissioned blockchain frameworks with smart contracts for secure V2X communication and automated transactions'
      },
      {
        name: 'IoT Integration for Smart Cities',
        description: 'Deploy and manage IoT sensor networks with 5G-V2X and IEEE 802.11p standards for real-time traffic monitoring'
      },
      {
        name: 'Smart City Architecture Design',
        description: 'Create scalable, modular ITS frameworks that integrate AI, blockchain, and IoT components for future smart city expansions'
      }
    ],
    relatedTopics: [
      {
        title: 'AI Traffic Prediction - Google Maps',
        url: 'https://blog.google/products/maps/google-maps-101-how-ai-helps-predict-traffic-and-determine-routes/'
      },
      {
        title: 'Predictive Real-Time Traffic Management',
        url: 'https://highways.dot.gov/media/50751'
      },
      {
        title: 'IEEE Vehicle-to-Everything Communications',
        url: 'https://ieeexplore.ieee.org/document/10736977'
      }
    ]
  },
  '10': {
    title: 'Surge of IoT Devices by AI',
    summary: 'Exploring AI-enabled IoT growth and security challenges',
    description: 'The explosive growth of the Internet of Things (IoT) has been propelled by the rise of artificial intelligence (AI), making it easier than ever to connect smart devices. From smart homes to industrial systems, AI-enabled IoT devices are revolutionizing modern living and business operations. However, this rapid increase in interconnected devices brings serious security challenges. The scale, variety, and inherent vulnerabilities of IoT devices present significant risks that must be addressed to ensure safe deployment.',
    image: '/attached_assets/featured_1753971830552.png',
    category: 'IoT & IIoT',
    year: 2024,
    status: 'Active',
    tags: ['IoT Security', 'AI Integration', 'Device Proliferation', 'Adversarial Attacks'],
    keyAreas: [
      {
        title: 'Proliferation of IoT Devices and AI Integration',
        color: '#007BFF',
        description: 'AI has dramatically enhanced the capabilities of IoT devices, allowing them to perform complex tasks autonomously. This includes everything from voice-controlled assistants and smart thermostats to industrial robots and medical monitoring systems.',
        details: [
          'AI-driven automation has enabled IoT devices to make real-time decisions without human intervention, exposing them to new vulnerabilities',
          'In many cases, the rush to market IoT devices has led to insufficient security testing and updates'
        ]
      },
      {
        title: 'Security Risks in AI-Powered IoT Ecosystems',
        color: '#28A745',
        description: 'The integration of AI in IoT has introduced several complex security challenges, exacerbating traditional risks like data breaches and system hijacking. Security risks are heightened due to the large number of devices, lack of standardization, and weak encryption protocols.',
        details: [
          'Many IoT devices have limited computational power, which restricts the implementation of robust encryption and security mechanisms',
          'AI-driven devices generate vast amounts of data, making privacy breaches particularly dangerous. Compromised devices can lead to massive data leaks or unauthorized access to sensitive personal or corporate information'
        ]
      },
      {
        title: 'Real-World Threats and Consequences',
        color: '#FFC107',
        description: 'The widespread adoption of IoT devices has resulted in an alarming number of security breaches. Incidents of hackers taking control of AI-powered devices, launching distributed denial-of-service (DDoS) attacks, or exploiting weaknesses in smart systems have become increasingly common.',
        details: [
          'The infamous Mirai botnet attack leveraged insecure IoT devices to create one of the largest DDoS attacks in history',
          'Weak security protocols in home security cameras, smart appliances, and healthcare devices have allowed attackers to spy on users, manipulate systems, and even cause physical harm'
        ]
      },
      {
        title: 'AI-Specific Vulnerabilities in IoT Devices',
        color: '#DC3545',
        description: 'AI models integrated into IoT devices introduce their own vulnerabilities. Attackers can exploit AI algorithms through adversarial inputs, causing devices to malfunction or make incorrect decisions. This type of threat could impact anything from autonomous vehicles to industrial machinery.',
        details: [
          'Adversarial attacks on AI models can fool smart devices into behaving unpredictably, leading to potentially dangerous consequences',
          'There is a growing concern over data poisoning, where attackers manipulate training data to weaken AI models embedded in IoT devices'
        ]
      }
    ],
    skills: [
      {
        name: 'IoT Security Architecture',
        description: 'Design comprehensive security frameworks for AI-enabled IoT ecosystems, implementing zero trust architecture and edge computing security measures'
      },
      {
        name: 'AI Vulnerability Assessment',
        description: 'Identify and mitigate AI-specific vulnerabilities including adversarial attacks and data poisoning in IoT device implementations'
      },
      {
        name: 'Large-Scale Device Management',
        description: 'Develop strategies for securing and managing the proliferation of IoT devices across smart homes and industrial environments'
      },
      {
        name: 'Real-Time Threat Detection',
        description: 'Implement AI-powered monitoring systems to detect unusual behaviors and potential security breaches in IoT networks'
      }
    ],
    relatedTopics: [
      {
        title: 'Internet of Things (IoT) Security',
        url: 'https://www.internetsociety.org/iot/'
      },
      {
        title: 'Mirai Botnet Analysis',
        url: 'https://spectrum.ieee.org/mirai-botnet'
      },
      {
        title: 'Adversarial Attacks on AI Systems',
        url: 'https://openai.com/index/attacking-machine-learning-with-adversarial-examples/'
      }
    ]
  },
  '11': {
    title: 'AI-Driven Threat Detection VANETs',
    summary: 'Hybrid AI and blockchain approach for VANET security',
    description: 'As vehicular ad-hoc networks (VANETs) expand, especially with autonomous and connected vehicle technologies, the need for robust security mechanisms is paramount. This project proposes a hybrid approach that combines AI-driven anomaly detection and blockchain-based trust management to enhance the security and reliability of VANET communications. By integrating machine learning models for real-time threat detection and blockchain for decentralized trust, this project aims to create a comprehensive security framework for future vehicular networks.',
    image: '/attached_assets/featured_1753971853866.png',
    category: 'Machine Learning',
    year: 2024,
    status: 'Active',
    tags: ['VANET Security', 'AI Threat Detection', 'Blockchain Trust', 'Vehicular Networks'],
    keyAreas: [
      {
        title: 'AI-Based Threat Detection System',
        color: '#007BFF',
        description: 'Design machine learning algorithms to detect anomalies in real-time, such as unauthorized access, spoofing, or data manipulation. Implement lightweight models suitable for processing data on limited-resource vehicular on-board units (OBUs).',
        details: [
          'Use deep learning techniques such as Convolutional Neural Networks (CNNs) or Recurrent Neural Networks (RNNs) to analyze patterns and detect anomalies',
          'Implement lightweight AI algorithms optimized for resource-constrained vehicular hardware',
          'Employ federated learning to allow vehicles to collectively learn threat patterns without sharing raw data, preserving privacy'
        ]
      },
      {
        title: 'Blockchain-Enabled Trust Framework',
        color: '#28A745',
        description: 'Use blockchain to create a decentralized, immutable record of transactions within the network to prevent data tampering. Enable trustless verification among vehicles, infrastructure nodes, and network servers.',
        details: [
          'Integrate a permissioned blockchain that allows verified nodes (e.g., vehicles and roadside units) to add new transactions',
          'Use smart contracts to automate trust verification between network nodes',
          'Apply consensus mechanisms optimized for VANETs, like Practical Byzantine Fault Tolerance (PBFT) or Proof of Authority (PoA), to reduce latency and energy consumption'
        ]
      },
      {
        title: 'Secure Inter-Vehicle Communication',
        color: '#FFC107',
        description: 'Ensure secure communication protocols that can withstand attacks, particularly Man-in-the-Middle (MitM) and replay attacks. Investigate cryptographic mechanisms and secure routing protocols.',
        details: [
          'Implement secure message-passing protocols such as Elliptic Curve Cryptography (ECC) and Quantum-Resistant Cryptography (QRC) to future-proof communications',
          'Evaluate multi-hop communication protocols and detect routing misbehavior to ensure data integrity in relayed messages'
        ]
      },
      {
        title: 'Future Trends and Challenges',
        color: '#DC3545',
        description: 'Address scalability, quantum-resistant security, edge computing integration, interoperability standards, privacy preservation, and energy-efficient solutions for next-generation VANETs.',
        details: [
          'Scalability: Optimizing AI and blockchain for managing larger volumes of data while maintaining low latency in highly dynamic environments',
          'Quantum-Resistant Security: Implementing quantum-resistant cryptography to prevent future decryption of current encrypted communications',
          'Edge Computing: Leveraging edge computing to process data locally on OBUs, reducing response times and minimizing dependency on central servers',
          'Privacy-Preserving Mechanisms: Using differential privacy and homomorphic encryption to preserve driver privacy while sharing necessary safety information'
        ]
      }
    ],
    skills: [
      {
        name: 'AI-Powered Anomaly Detection',
        description: 'Develop deep learning models for real-time threat detection in vehicular networks, optimized for resource-constrained environments'
      },
      {
        name: 'Blockchain Trust Systems',
        description: 'Implement permissioned blockchain frameworks with smart contracts for decentralized trust management in VANETs'
      },
      {
        name: 'Secure Vehicular Communication',
        description: 'Design quantum-resistant cryptographic protocols for secure inter-vehicle and vehicle-to-infrastructure communication'
      },
      {
        name: 'Federated Learning for Privacy',
        description: 'Apply federated learning techniques to enable collaborative threat detection while preserving vehicle data privacy'
      }
    ],
    relatedTopics: [
      {
        title: 'AI in Threat Detection',
        url: 'https://www.paloaltonetworks.com/cyberpedia/ai-in-threat-detection'
      },
      {
        title: 'Autonomous Vehicle Cyber Attacks',
        url: 'https://innovationatwork.ieee.org/six-ways-to-protect-against-autonomous-vehicle-cyber-attacks/'
      },
      {
        title: 'Smart Vehicle Security Threats',
        url: 'https://www.trendmicro.com/vinfo/in/security/news/internet-of-things/out-on-a-highway-run-threats-and-risks-on-its-and-smart-vehicles'
      }
    ]
  },
  '12': {
    title: 'Next-Generation Fuzzing Tool',
    summary: 'AI-augmented hybrid fuzzing framework for advanced vulnerability detection',
    description: 'As software systems become increasingly complex, detecting security vulnerabilities is a crucial challenge. This project proposes the development of a next-generation fuzzing tool that combines hybrid fuzzing techniques, AI-driven optimizations, and intelligent test case generation to uncover vulnerabilities in modern software applications. Leveraging both symbolic and concolic execution along with machine learning for intelligent input mutations, this project aims to enhance vulnerability detection rates while providing comprehensive automated analysis and reporting capabilities.',
    image: '/attached_assets/featured_1753971878515.png',
    category: 'Fuzzing',
    year: 2024,
    status: 'Active',
    tags: ['AI Fuzzing', 'Hybrid Testing', 'Vulnerability Detection', 'Symbolic Execution'],
    keyAreas: [
      {
        title: 'AI-Augmented Fuzzing Framework',
        color: '#007BFF',
        description: 'Integrate AI-driven input mutation techniques to generate test cases intelligently, adapting dynamically based on code coverage and path analysis. Optimize mutation strategies using reinforcement learning to improve fuzzing efficiency and focus on high-risk code regions.',
        details: [
          'Apply reinforcement learning to guide test case mutations, prioritizing code areas with higher potential for vulnerabilities',
          'Use clustering techniques to analyze test case outputs and identify patterns associated with specific classes of bugs',
          'Incorporate natural language processing (NLP) to analyze code comments and metadata for context-aware mutation strategies'
        ]
      },
      {
        title: 'Hybrid Fuzzing Core',
        color: '#28A745',
        description: 'Combine symbolic and concolic execution with coverage-based fuzzing to explore deep program states and reach uncovered code paths. Implement a lightweight symbolic execution engine to manage memory constraints while ensuring high detection rates for complex vulnerabilities.',
        details: [
          'Implement a hybrid fuzzing engine that leverages symbolic execution to handle constraints and concolic execution to explore complex branches effectively',
          'Optimize for performance on low-resource devices, enabling use in embedded or IoT environments'
        ]
      },
      {
        title: 'Automated Bug Classification and Analysis',
        color: '#FFC107',
        description: 'Utilize machine learning classifiers to categorize detected vulnerabilities, distinguishing between critical security bugs and less impactful issues. Implement real-time data analytics to evaluate fuzzing performance.',
        details: [
          'Develop real-time analytics to provide detailed insights into detected vulnerabilities, including bug classification, impact analysis, and potential attack vectors',
          'Integrate automated reporting tools to generate detailed logs and vulnerability reports with recommended mitigation strategies'
        ]
      },
      {
        title: 'Future Trends and Challenges',
        color: '#DC3545',
        description: 'Address adaptation to evolving software environments, AI integration with feedback loops, quantum-resistant fuzzing techniques, privacy-preserving mechanisms, and resource-efficient algorithms for constrained environments.',
        details: [
          'Adaptation to Evolving Software Environments: Ensuring comprehensive coverage across diverse programming languages, frameworks, and software architectures',
          'AI Integration and Feedback Loops: Incorporating real-time feedback loops to dynamically adjust fuzzing parameters based on detected vulnerabilities',
          'Quantum-Resistant Fuzzing: Adapting fuzzing techniques to assess software resilience against quantum-based attacks',
          'Privacy-Preserving Fuzzing: Incorporating homomorphic encryption and differential privacy for sensitive software data handling'
        ]
      }
    ],
    skills: [
      {
        name: 'AI-Driven Test Case Generation',
        description: 'Develop reinforcement learning algorithms and NLP techniques for intelligent input mutation and context-aware fuzzing strategies'
      },
      {
        name: 'Hybrid Symbolic Execution',
        description: 'Implement lightweight symbolic and concolic execution engines optimized for resource-constrained environments'
      },
      {
        name: 'Automated Vulnerability Analysis',
        description: 'Create machine learning classifiers for bug categorization and real-time analytics for performance evaluation'
      },
      {
        name: 'Advanced Fuzzing Architectures',
        description: 'Design scalable fuzzing frameworks that adapt to diverse software platforms and programming languages'
      }
    ],
    relatedTopics: [
      {
        title: 'LLM-Based Fuzz Target Generation',
        url: 'https://google.github.io/oss-fuzz/research/llms/target_generation/'
      },
      {
        title: 'UTopia: From Unit Tests To Fuzzing',
        url: 'https://research.samsung.com/blog/UTopia-From-unit-tests-to-fuzzing'
      },
      {
        title: 'AI-Enhanced Vulnerability Discovery',
        url: 'https://security.googleblog.com/2024/11/leveling-up-fuzzing-finding-more.html'
      }
    ]
  },
  '13': {
    title: 'LLM powered Cyber Defence',
    summary: 'LLM-SHIELD framework for AI-driven cybersecurity intelligence',
    description: 'With the increasing sophistication of cyber threats, traditional security solutions struggle to keep pace. This project introduces LLM-SHIELD, an AI-driven cybersecurity framework that utilizes Large Language Models (LLMs), DeepSeek, reinforcement learning (RL), and automated security reasoning to create a next-generation defense system. LLM-SHIELD focuses on real-time cyber threat detection, adaptive defense mechanisms, and automated vulnerability analysis, ensuring a proactive security posture against both known and zero-day attacks.',
    image: '/attached_assets/featured_1753971918314.png',
    category: 'Machine Learning',
    year: 2024,
    status: 'Active',
    tags: ['LLM Security', 'AI Defense', 'Automated Response', 'Threat Intelligence'],
    keyAreas: [
      {
        title: 'LLM-Augmented Threat Intelligence & Prediction',
        color: '#007BFF',
        description: 'Utilize DeepSeek-based LLMs for real-time cyber threat analysis, detection, and mitigation. Employ multi-modal AI models to analyze structured and unstructured data sources with reinforcement learning for adaptive attack response.',
        details: [
          'Aggregate real-time threat intelligence from network logs, IDS alerts, security advisories, and dark web sources',
          'Fine-tune DeepSeek & other LLMs with cybersecurity datasets for contextual AI reasoning',
          'Develop self-learning AI models that continuously adapt to new attack patterns'
        ]
      },
      {
        title: 'AI-Powered Automated Security Auditing & Code Analysis',
        color: '#28A745',
        description: 'Deploy LLM-driven penetration testing for autonomous red teaming. Implement AI-assisted secure code auditing to detect vulnerabilities at source code and binary levels.',
        details: [
          'Utilize LLMs for predictive cyber defense, analyzing attack vectors before they materialize',
          'Implement autonomous security policy generation based on real-time evolving threats',
          'Deploy automated risk assessment models to rank vulnerabilities based on exploitability'
        ]
      },
      {
        title: 'Self-Learning Security Assistant & Threat Hunting',
        color: '#FFC107',
        description: 'Develop an AI-driven cybersecurity co-pilot for automated incident response and threat analysis. Implement zero-shot and few-shot learning models to adapt to emerging attack techniques.',
        details: [
          'Integrate AI-driven anomaly detection for early-stage attack identification',
          'Use LLM-powered attack path prediction to forecast how adversaries may infiltrate systems',
          'Develop AI-generated playbooks for automated incident response orchestration'
        ]
      },
      {
        title: 'Adaptive Response Mechanism',
        color: '#DC3545',
        description: 'Design adaptive response systems using reinforcement learning to improve reaction times and accuracy in threat identification and neutralization. Address scalability, explainability, adversarial AI threats, and regulatory compliance.',
        details: [
          'Scalability & Real-Time Efficiency: Optimizing LLMs for high-speed real-time security analysis',
          'Explainability & Trust: Enhancing transparency in AI-driven cybersecurity decision-making',
          'Adversarial AI Threats: Protecting LLMs from poisoning, prompt injection, and model manipulation',
          'Regulatory & Compliance: Aligning LLM-driven security frameworks with global standards (ISO 27001, NIST, GDPR)'
        ]
      }
    ],
    skills: [
      {
        name: 'LLM-Powered Threat Intelligence',
        description: 'Deploy DeepSeek and other LLMs for real-time cyber threat analysis, multi-modal data processing, and predictive security modeling'
      },
      {
        name: 'Automated Security Operations',
        description: 'Implement AI-driven penetration testing, autonomous policy generation, and automated vulnerability risk assessment systems'
      },
      {
        name: 'AI-Driven Incident Response',
        description: 'Create self-learning security assistants with zero-shot learning capabilities and conversational threat hunting interfaces'
      },
      {
        name: 'Adaptive Defense Systems',
        description: 'Design reinforcement learning-based response mechanisms with automated playbook generation and attack path prediction'
      }
    ],
    relatedTopics: [
      {
        title: 'When LLMs Meet Cybersecurity: A Systematic Literature Review',
        url: 'https://github.com/tmylla/Awesome-LLM4Cybersecurity'
      },
      {
        title: 'AI-Powered Cybersecurity Intelligence',
        url: 'https://www.paloaltonetworks.com/cyberpedia/ai-in-threat-detection'
      },
      {
        title: 'Large Language Models in Security',
        url: 'https://security.googleblog.com/2024/11/leveling-up-fuzzing-finding-more.html'
      }
    ]
  }
};

export default function ProjectDetail() {
  const [location] = useLocation();
  const projectId = new URLSearchParams(location.split('?')[1] || '').get('id') || '1';
  const project = projectDetails[projectId as keyof typeof projectDetails];

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Navigation />
        <div className="pt-20 flex items-center justify-center h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <Link href="/projects">
              <button className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-lg">
                Back to Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/projects">
              <button className="flex items-center gap-2 text-[var(--primary-color)] hover:text-[var(--primary-dark)] transition-colors">
                <ArrowLeft size={20} />
                Back to Projects
              </button>
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[var(--primary-color)] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                  <span className="bg-[var(--accent-color)] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.year}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {project.title}
                </h1>
                <p className="text-gray-200 text-lg">
                  {project.summary}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Project Overview */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-[var(--primary-color)]" size={32} />
              <h2 className="text-3xl font-bold">Project Overview</h2>
            </div>
            <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-color)]">
              <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-[var(--primary-color)]/20 text-[var(--primary-color)] px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Key Areas */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-[var(--primary-color)]" size={32} />
              <h2 className="text-3xl font-bold">Key Research Areas</h2>
            </div>
            <div className="space-y-6">
              {project.keyAreas.map((area, index) => (
                <div key={index} className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)]">
                  <h3 className="text-xl font-bold mb-4" style={{ color: area.color }}>
                    {area.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  {area.details.length > 0 && (
                    <ul className="space-y-2">
                      {area.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-[var(--primary-color)] mt-1">•</span>
                          <span className="text-[var(--text-secondary)]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Methodology Section (for Digital Twins project) */}
          {(project as any).methodology && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Cog className="text-[var(--primary-color)]" size={32} />
                <h2 className="text-3xl font-bold">Methodology</h2>
              </div>
              <div className="space-y-6">
                {(project as any).methodology.map((method: any, index: number) => (
                  <div key={index} className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)]">
                    <h3 className="text-xl font-bold mb-4" style={{ color: method.color }}>
                      {method.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Future Trends and Challenges (for Digital Twins project) */}
          {(project as any).challenges && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-[var(--primary-color)]" size={32} />
                <h2 className="text-3xl font-bold">Future Trends and Challenges</h2>
              </div>
              <div className="space-y-6">
                {(project as any).challenges.map((challenge: any, index: number) => (
                  <div key={index} className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)]">
                    <h3 className="text-xl font-bold mb-4" style={{ color: challenge.color }}>
                      {challenge.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Skills Applied / Expected Outcomes */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Cog className="text-[var(--primary-color)]" size={32} />
              <h2 className="text-3xl font-bold">{(project as any).methodology ? 'Expected Outcomes' : 'Skills Applied'}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.skills.map((skill, index) => (
                <div key={index} className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)]">
                  <h3 className="text-lg font-bold text-[var(--primary-color)] mb-3">
                    {skill.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Related Topics */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="text-[var(--primary-color)]" size={32} />
              <h2 className="text-3xl font-bold">Related Topics</h2>
            </div>
            <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-color)]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.relatedTopics.map((topic, index) => (
                  <a
                    key={index}
                    href={topic.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--primary-color)] hover:text-[var(--primary-dark)] transition-colors p-4 bg-[var(--bg-primary)] rounded-lg border border-[var(--border-color)] hover:border-[var(--primary-color)]"
                  >
                    <ExternalLink size={16} />
                    <span className="font-medium">{topic.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Project Impact */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 p-8 rounded-2xl border border-[var(--border-color)] text-center">
              <h3 className="text-2xl font-bold mb-4">Project Impact</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto">
                This project highlights the potential of AI and ML in fortifying cybersecurity defenses, 
                focusing on real-time threat detection, adversarial ML defenses, and proactive vulnerability 
                mitigation strategies. The research contributes to the advancement of intelligent security 
                systems that can adapt and respond to evolving cyber threats.
              </p>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}