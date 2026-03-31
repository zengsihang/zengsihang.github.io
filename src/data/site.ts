import type {
  EducationItem,
  ExperienceItem,
  FocusArea,
  LinkItem,
  Publication,
  SiteProfile,
  TimelineItem
} from "@/types";

export const siteMeta = {
  title: "Sihang Zeng",
  description:
    "AI for healthcare scholar building longitudinal EHR models, clinical foundation models, and trustworthy machine learning systems.",
  siteUrl: "https://zengsihang.github.io"
};

export const navigationLinks: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Publications", href: "/publications/" },
  { label: "CV", href: "/cv/" }
];

export const profile: SiteProfile = {
  name: "Sihang Zeng",
  title: "PhD Candidate in Biomedical Informatics, University of Washington",
  location: "Seattle, Washington",
  email: "zengsihang0226@outlook.com",
  shortBio:
    "Sihang Zeng develops AI methods for longitudinal electronic health records, with a focus on patient trajectory modeling, clinical foundation models, and trustworthy decision support.",
  longBio:
    "Sihang Zeng is a PhD candidate in Biomedical Informatics at the University of Washington, advised by Ruth Etzioni and Meliha Yetisgen. His work spans longitudinal EHR modeling, clinical large language models, biomedical representation learning, and evaluation frameworks for healthcare AI. Before UW, he studied Electronic Engineering with a minor in Statistics at Tsinghua University. His public academic profile also highlights earlier work on biomedical term representation and knowledge graph construction, forming a throughline from biomedical language understanding to patient-centered AI systems.",
  heroStatement:
    "Designing AI that reads the longitudinal patient record as a living clinical narrative.",
  heroDetail:
    "From trajectory modeling to biomedical foundation models, his research translates messy real-world health data into trustworthy signals for screening, prognosis, and clinical decision-making.",
  headshot: "/images/me.jpg",
  socialLinks: [
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=yhMm2S0AAAAJ&hl=en" },
    { label: "GitHub", href: "https://github.com/zengsihang" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/zengsh/" },
    { label: "ORCID", href: "https://orcid.org/0009-0003-2921-829X" },
    { label: "UW BIME", href: "https://bime.uw.edu/students/siheng-zeng/" }
  ],
  metrics: [
    { value: "2026", label: "Expected PhD completion" },
    { value: "14", label: "Scholar-listed works" },
    { value: "3", label: "Core research threads" }
  ]
};

export const focusAreas: FocusArea[] = [
  {
    title: "Longitudinal Patient Modeling",
    description:
      "Learning patient-state trajectories from sparse, irregular EHR histories to support risk prediction, prognosis, and clinical foresight.",
    tags: ["EHR", "Temporal ML", "Representation Learning"]
  },
  {
    title: "Foundation Models for Clinical Data",
    description:
      "Extending language-model style reasoning into multimodal, longitudinal healthcare data while preserving clinical grounding and decision relevance.",
    tags: ["LLMs", "Generative Models", "Healthcare AI"]
  },
  {
    title: "Trustworthy Evaluation",
    description:
      "Building benchmarks and evaluation strategies that make biomedical and scientific AI more reliable, transparent, and useful in practice.",
    tags: ["Evaluation", "Clinical Safety", "Scientific Review"]
  }
];

export const affiliations = [
  "University of Washington",
  "Department of Biomedical Informatics and Medical Education",
  "Fred Hutchinson Cancer Center",
  "Truveta",
  "Tsinghua University"
];

export const timeline: TimelineItem[] = [
  {
    date: "Jan 2026",
    title: "MARTI accepted at ICLR 2026",
    detail: "A new step toward agentic reasoning for longitudinal clinical modeling.",
    href: "https://openreview.net/forum?id=E7jZqo0A50",
    category: "paper"
  },
  {
    date: "Dec 2025",
    title: "Passed PhD general exam",
    detail: "Advanced to PhD candidacy in biomedical informatics.",
    category: "milestone"
  },
  {
    date: "Oct 2025",
    title: "1st Place at ChemoTimelines 2025 Challenge",
    detail: "Oral presentation at Clinical NLP for timeline-centric oncology reasoning.",
    category: "award"
  },
  {
    date: "Oct 2025",
    title: "Traj-CoA accepted at NeurIPS 2025 GenAI4Health",
    detail: "Chain-of-agents modeling for lung cancer risk prediction from patient trajectories.",
    href: "https://arxiv.org/abs/2510.10454",
    category: "paper"
  },
  {
    date: "Oct 2025",
    title: "Joined Truveta as ML Intern",
    detail: "Applied foundation-model thinking to large-scale clinical data in industry.",
    category: "career"
  },
  {
    date: "Aug 2025",
    title: "ReviewRL accepted at EMNLP 2025",
    detail: "Reinforcement learning for scientific reviewing workflows.",
    href: "https://aclanthology.org/2025.emnlp-main.857/",
    category: "paper"
  },
  {
    date: "Jul 2025",
    title: "TrajSurv accepted at MLHC 2025",
    detail: "Continuous latent trajectories for trustworthy survival prediction.",
    href: "https://proceedings.mlr.press/v298/zeng25a.html",
    category: "paper"
  },
  {
    date: "Sep 2024",
    title: "UltraMedical spotlight at NeurIPS 2024 Datasets and Benchmarks",
    detail: "Specialized generalist models for biomedicine.",
    href: "https://arxiv.org/abs/2406.03949",
    category: "paper"
  },
  {
    date: "Sep 2023",
    title: "Started PhD at the University of Washington",
    detail: "Began doctoral work in biomedical informatics and healthcare AI.",
    category: "career"
  }
];

export const allPublications: Publication[] = [
  {
    title: "MARTI: A Framework for Multi-Agent LLM Systems Reinforced Training and Inference",
    year: 2026,
    venue: "ICLR 2026",
    authors:
      "Kaiyan Zhang, Runze Liu, Xuekai Zhu, Kai Tian, Sihang Zeng, Guoli Jia, Yuchen Fan, Xingtai Lv, Yuxin Zuo, Che Jiang, Ziyang Liu, Jianyu Wang, Yuru Wang, Ruotong Zhao, Ermo Hua, Yibo Wang, Shijie Wang, Junqi Gao, Xinwei Long, Youbang Sun, Zhiyuan Ma, Ganqu Cui, Lei Bai, Ning Ding, Biqing Qi, Bowen Zhou",
    summary:
      "Introduces an open framework for reinforced training and inference in multi-agent LLM systems.",
    tags: ["Multi-Agent LLMs", "Reinforcement Learning", "Systems"],
    links: [
      { label: "Paper", href: "https://openreview.net/forum?id=E7jZqo0A50" },
      { label: "Code", href: "https://github.com/TsinghuaC3I/MARTI" }
    ]
  },
  {
    title: "Traj-CoA: Patient Trajectory Modeling via Chain-of-Agents for Lung Cancer Risk Prediction",
    year: 2025,
    venue: "NeurIPS 2025 GenAI4Health",
    authors:
      "Sihang Zeng, Yujuan Fu, Sitong Zhou, Zixuan Yu, Lucas Jing Liu, Jun Wen, Matthew Thompson, Ruth Etzioni, Meliha Yetisgen",
    summary:
      "Frames longitudinal risk prediction as a coordinated agent workflow over patient trajectory evidence.",
    tags: ["Longitudinal EHR", "Agentic Systems", "Cancer Screening"],
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2510.10454" }],
    featured: true
  },
  {
    title: "TrajSurv: Learning Continuous Latent Trajectories from EHR for Trustworthy Survival Prediction",
    year: 2025,
    venue: "Machine Learning for Healthcare 2025",
    authors:
      "Sihang Zeng, Lucas Jing Liu, Jun Wen, Meliha Yetisgen, Ruth Etzioni, Gang Luo",
    summary:
      "Learns smooth latent patient trajectories that improve survival prediction while preserving interpretability.",
    tags: ["Survival Analysis", "Trustworthy ML", "Patient Representation"],
    links: [
      { label: "Paper", href: "https://proceedings.mlr.press/v298/zeng25a.html" },
      { label: "Code", href: "https://github.com/zengsihang/TrajSurv" }
    ],
    featured: true
  },
  {
    title: "ReviewRL: Towards Automated Scientific Review with RL",
    year: 2025,
    venue: "EMNLP 2025",
    authors:
      "Sihang Zeng, Kai Tian, Kaiyan Zhang, Yuru Wang, Junqi Gao, Runze Liu, Sa Yang, Jingxuan Li, Xinwei Long, Jiaheng Ma, Biqing Qi, Bowen Zhou",
    summary:
      "Explores reinforcement learning for more grounded, analytically useful automated scientific reviews.",
    tags: ["Scientific AI", "RL", "Evaluation"],
    links: [{ label: "Paper", href: "https://aclanthology.org/2025.emnlp-main.857/" }],
    featured: true
  },
  {
    title: "The Role of Whole Health in Enhancing Tobacco Cessation Outcomes for Veterans: A Retrospective Cohort Study",
    year: 2025,
    venue: "Journal of General Internal Medicine",
    authors:
      "Sihang Zeng, Scott S. Coggeshall, Ethan W. Rosser, Stephanie L. Taylor, Diana J. Burgess, Gang Luo, Steven B. Zeliadt",
    summary:
      "Connects Whole Health services to measurable tobacco cessation outcomes in veterans.",
    tags: ["Clinical Outcomes", "Veterans Health", "Tobacco Cessation"],
    links: [
      { label: "Paper", href: "https://link.springer.com/article/10.1007/s11606-025-10063-1" },
      { label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/41417447/" }
    ]
  },
  {
    title: "Population-Level Tobacco Cessation Outcomes Associated with Implementing Whole Health at the Veterans Health Administration",
    year: 2025,
    venue: "AcademyHealth Annual Research Meeting 2025",
    authors:
      "Sihang Zeng, Scott S. Coggeshall, Ethan W. Rosser, Stephanie L. Taylor, Diana J. Burgess, Gang Luo, Steven B. Zeliadt",
    summary:
      "Examines population-level tobacco cessation outcomes associated with Whole Health implementation in the Veterans Health Administration.",
    tags: ["Health Services Research", "Veterans Health", "Conference Abstract"],
    links: [{ label: "Scholar", href: "https://scholar.google.com/citations?user=yhMm2S0AAAAJ&hl=en" }]
  },
  {
    title: "UltraMedical: Building Specialized Generalists in Biomedicine",
    year: 2024,
    venue: "NeurIPS 2024 Datasets and Benchmarks",
    authors:
      "Kaiyan Zhang, Sihang Zeng, Ermo Hua, Ning Ding, Zhang-Ren Chen, Zhiyuan Ma, Haoxin Li, Ganqu Cui, Biqing Qi, Xuekai Zhu, Xingtai Lv, Jin-Fang Hu, Zhiyuan Liu, Bowen Zhou",
    summary:
      "Builds broadly useful biomedical models without sacrificing domain specialization.",
    tags: ["Biomedical LLMs", "Generalist Models", "Benchmarking"],
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2406.03949" },
      { label: "Code", href: "https://github.com/TsinghuaC3I/UltraMedical" }
    ],
    featured: true,
    note: "Spotlight"
  },
  {
    title: "Large Language Models as Biomedical Hypothesis Generators: A Comprehensive Evaluation",
    year: 2024,
    venue: "COLM 2024",
    authors:
      "Biqing Qi, Kaiyan Zhang, Kai Tian, Haoxiang Li, Zhang-Ren Chen, Sihang Zeng, Ermo Hua, Jin-Fang Hu, Bowen Zhou",
    summary:
      "Evaluates how well large language models can support biomedical hypothesis generation.",
    tags: ["Hypothesis Generation", "LLMs", "Biomedical Reasoning"],
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2407.08940" }]
  },
  {
    title: "CoRTEx: contrastive learning for representing terms via explanations with applications on constructing biomedical knowledge graphs",
    year: 2024,
    venue: "Journal of the American Medical Informatics Association",
    authors: "Huaiyuan Ying, Zhengyun Zhao, Yang Zhao, Sihang Zeng, Sheng Yu",
    summary:
      "Uses explanation-augmented contrastive learning to improve biomedical term representations and large-scale knowledge graph construction.",
    tags: ["Biomedical NLP", "Knowledge Graphs", "Representation Learning"],
    links: [{ label: "Paper", href: "https://academic.oup.com/jamia/article/31/9/1912/7680017" }]
  },
  {
    title: "Large Language Models are Zero Shot Hypothesis Proposers",
    year: 2023,
    venue: "NeurIPS 2023 Instruction Workshop",
    authors: "Biqing Qi, Kaiyan Zhang, Haoxiang Li, Kai Tian, Sihang Zeng, Zhang-Ren Chen, Bowen Zhou",
    summary:
      "Investigates whether large language models can propose scientifically meaningful biomedical hypotheses without task-specific training.",
    tags: ["Hypothesis Generation", "LLMs", "Scientific Discovery"],
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2311.05965" }]
  },
  {
    title: "Hierarchical Pretraining for Biomedical Term Embeddings",
    year: 2023,
    venue: "arXiv preprint",
    authors: "Bryan Cai, Sihang Zeng, Yucong Lin, Zheng Yuan, Doudou Zhou, Lu Tian",
    summary:
      "Introduces hierarchy-aware pretraining for biomedical term embeddings to better encode graded semantic relatedness.",
    tags: ["Biomedical NLP", "Embeddings", "Pretraining"],
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2307.00266" }]
  },
  {
    title: "BIOS: An Algorithmically Generated Biomedical Knowledge Graph",
    year: 2022,
    venue: "arXiv preprint",
    authors:
      "Sheng Yu, Zheng Yuan, Jun Xia, Shengxuan Luo, Huaiyuan Ying, Sihang Zeng, Jingyi Ren, Hongyi Yuan, Zhengyun Zhao, Yucong Lin, Keming Lu, Jing Wang, Yutao Xie, Heung-Yeung Shum",
    summary:
      "Presents a large-scale biomedical knowledge graph generated algorithmically rather than through traditional manual curation.",
    tags: ["Knowledge Graphs", "Biomedical AI", "Ontology"],
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2203.09975" }]
  },
  {
    title: "Automatic Biomedical Term Clustering by Learning Fine-grained Term Representations",
    year: 2022,
    venue: "BioNLP 2022",
    authors: "Sihang Zeng, Zheng Yuan, Sheng Yu",
    summary:
      "Introduces fine-grained biomedical term representations for improved clustering and knowledge organization.",
    tags: ["Representation Learning", "Biomedical NLP", "Terminology"],
    links: [
      { label: "Paper", href: "https://aclanthology.org/2022.bionlp-1.8/" },
      { label: "Code", href: "https://github.com/GanjinZero/CODER" }
    ]
  },
  {
    title: "A Feasibility Study of 2-D Microwave Thorax Imaging Based on the Supervised Descent Method",
    year: 2021,
    venue: "Electronics",
    authors:
      "Haolin Zhang, Maokun Li, Fan Yang, Shenheng Xu, Yan Yin, Hongyu Zhou, Yubo Yang, Sihang Zeng, Jianchong Shao",
    summary:
      "Studies learning-based 2-D microwave thorax imaging with the supervised descent method for fast structural reconstruction.",
    tags: ["Biomedical Imaging", "Microwave Imaging", "Medical Devices"],
    links: [{ label: "Paper", href: "https://www.mdpi.com/2079-9292/10/3/352" }]
  }
];

export const selectedPublications: Publication[] = allPublications.filter(
  (publication) => publication.featured
);

export const education: EducationItem[] = [
  {
    degree: "PhD in Biomedical Informatics",
    institution: "University of Washington",
    period: "2023 - 2026 (expected)",
    detail:
      "Advised by Ruth Etzioni and Meliha Yetisgen. Committee includes Hoifung Poon, Matthew Thompson, and Noemi Kreif."
  },
  {
    degree: "BEng in Electronic Engineering, Minor in Statistics",
    institution: "Tsinghua University",
    period: "2019 - 2023",
    detail:
      "Built the foundations for later work in biomedical representation learning and AI for healthcare."
  }
];

export const experience: ExperienceItem[] = [
  {
    title: "ML Intern",
    organization: "Truveta",
    period: "2025",
    description:
      "Worked on foundation-model ideas over large-scale de-identified clinical data for disease trajectory and screening applications."
  },
  {
    title: "PhD Researcher",
    organization: "University of Washington",
    period: "2023 - present",
    description:
      "Researching longitudinal EHR modeling, clinical decision support, and evaluation methods for biomedical AI."
  },
  {
    title: "Undergraduate Researcher",
    organization: "Tsinghua University",
    period: "2019 - 2023",
    description:
      "Focused on biomedical term and knowledge representation, bridging NLP infrastructure with downstream biomedical reasoning."
  }
];

export const awards = [
  "1st Place, ChemoTimelines 2025 Challenge",
  "NeurIPS 2024 Datasets and Benchmarks Spotlight for UltraMedical"
];
