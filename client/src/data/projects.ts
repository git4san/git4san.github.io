export interface ProjectData {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'Active' | 'Completed';
  year: number;
  icon: string;
  image: string;
  tags: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: '1',
    title: 'AI-Driven Cybersecurity',
    description: 'Securing systems with Machine Learning & Adversarial ML defenses. Leveraging advanced ML techniques to enhance cybersecurity by detecting and mitigating threats in real-time.',
    category: 'machine-learning',
    status: 'Active',
    year: 2024,
    icon: '🤖',
    image: '/attached_assets/featured_1753970702503.png',
    tags: ['AI Security', 'Threat Detection', 'Adversarial ML']
  },
  {
    id: '2',
    title: 'Explainable and Interpretable AI',
    description: 'Integrating XAI models into cybersecurity systems to improve transparency, trust, and decision-making for threat detection and mitigation.',
    category: 'machine-learning',
    status: 'Active',
    year: 2024,
    icon: '🧠',
    image: '/attached_assets/featured_1753971047206.png',
    tags: ['XAI', 'Interpretability', 'Trust in AI']
  },
  {
    id: '3',
    title: 'Secure Protocol Design - IIOT',
    description: 'Enhancing the security of Industrial Internet of Things devices by designing and evaluating secure communication protocols for robust industrial systems.',
    category: 'iot-iiot',
    status: 'Active',
    year: 2024,
    icon: '🏭',
    image: '/attached_assets/featured_1753971098336.png',
    tags: ['IIoT Security', 'Protocol Design', 'Industrial Systems']
  },
  {
    id: '4',
    title: 'Quantum-Resilient Defense Sys. for OT',
    description: 'Leverage AI, digital twins, and quantum-resistant cryptography to create a proactive, adaptive security framework for critical infrastructure operational technology.',
    category: 'security-privacy',
    status: 'Active',
    year: 2024,
    icon: '🔮',
    image: '/attached_assets/featured_1753972332337.png',
    tags: ['Digital Twins', 'Quantum Security', 'AI Defense']
  },
  {
    id: '5',
    title: 'Data Analytics for Edge',
    description: 'Investigating privacy-preserving mechanisms tailored for edge computing environments, enabling real-time, privacy-conscious analytics in healthcare, IoT, and smart cities.',
    category: 'systems-security',
    status: 'Active',
    year: 2024,
    icon: '🌐',
    image: '/attached_assets/featured_1753971681868.png',
    tags: ['Edge Computing', 'Privacy Preservation', 'Data Analytics']
  },
  {
    id: '6',
    title: 'Fuzzing OT Apps and Protocols',
    description: 'Focus on enhancing the security of Operational Technology applications and communication protocols through advanced fuzzing techniques and vulnerability research.',
    category: 'fuzzing',
    status: 'Active',
    year: 2024,
    icon: '🧠',
    image: '/attached_assets/featured_1753971704306.png',
    tags: ['OT Security', 'Protocol Fuzzing', 'Vulnerability Research']
  },
  {
    id: '7',
    title: 'Data Privacy Preservation',
    description: 'Safeguarding sensitive data through comprehensive privacy preservation mechanisms implemented at different stages of the data lifecycle, from collection to deletion.',
    category: 'security-privacy',
    status: 'Active',
    year: 2024,
    icon: '🔒',
    image: '/attached_assets/featured_1753971748063.png',
    tags: ['Differential Privacy', 'Data Protection', 'Cryptography']
  },
  {
    id: '8',
    title: 'SCADA Systems Security',
    description: 'Securing Supervisory Control and Data Acquisition systems by identifying and mitigating vulnerabilities in communication protocols and control applications through advanced fuzzing techniques.',
    category: 'systems-security',
    status: 'Active',
    year: 2024,
    icon: '🏭',
    image: '/attached_assets/featured_1753971767162.png',
    tags: ['SCADA Security', 'Protocol Analysis', 'Industrial Systems']
  },
  {
    id: '9',
    title: 'Secure ITS for Future Smart Cities',
    description: 'Developing a multi-layered Intelligent Transportation System framework integrating AI for traffic prediction, blockchain for secure data sharing, and IoT sensors for real-time monitoring.',
    category: 'systems-security',
    status: 'Active',
    year: 2024,
    icon: '🚦',
    image: '/attached_assets/featured_1753971794927.png',
    tags: ['Smart Cities', 'ITS', 'AI Traffic Management']
  },
  {
    id: '10',
    title: 'Surge of IoT Devices by AI',
    description: 'Exploring the explosive growth of AI-enabled IoT devices and addressing the significant security challenges that arise from their widespread adoption in smart homes and industrial systems.',
    category: 'iot-iiot',
    status: 'Active',
    year: 2024,
    icon: '🌐',
    image: '/attached_assets/featured_1753971830552.png',
    tags: ['IoT Security', 'AI Integration', 'Device Proliferation']
  },
  {
    id: '11',
    title: 'AI-Driven Threat Detection VANETs',
    description: 'Combining AI-driven anomaly detection and blockchain-based trust management to enhance security and reliability of vehicular ad-hoc network communications for autonomous vehicles.',
    category: 'machine-learning',
    status: 'Active',
    year: 2024,
    icon: '🚗',
    image: '/attached_assets/featured_1753971853866.png',
    tags: ['VANET Security', 'AI Threat Detection', 'Blockchain Trust']
  },
  {
    id: '12',
    title: 'Next-Generation Fuzzing Tool',
    description: 'Developing an intelligent fuzzing framework that combines hybrid fuzzing techniques, AI-driven optimizations, and automated vulnerability analysis to uncover security flaws in modern software applications.',
    category: 'fuzzing',
    status: 'Active',
    year: 2024,
    icon: '🔍',
    image: '/attached_assets/featured_1753971878515.png',
    tags: ['AI Fuzzing', 'Hybrid Testing', 'Vulnerability Detection']
  },
  {
    id: '13',
    title: 'LLM powered Cyber Defence',
    description: 'LLM-SHIELD: An AI-driven cybersecurity framework utilizing Large Language Models, DeepSeek, and reinforcement learning for next-generation cyber threat detection and automated defense mechanisms.',
    category: 'machine-learning',
    status: 'Active',
    year: 2024,
    icon: '🛡️',
    image: '/attached_assets/featured_1753971918314.png',
    tags: ['LLM Security', 'AI Defense', 'Automated Response']
  }
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'machine-learning', label: 'Machine Learning' },
  { id: 'security-privacy', label: 'Security & Privacy' },
  { id: 'systems-security', label: 'Systems Security' },
  { id: 'fuzzing', label: 'Fuzzing' },
  { id: 'iot-iiot', label: 'IoT & IIoT' }
];
