import type {
  AwardItem,
  EducationItem,
  ExperienceItem,
  FocusArea,
  LinkItem,
  NewsItem,
  Publication,
  PublicationKind,
  ServiceGroup,
  SiteProfile
} from "@/types";

/** Rendered with emphasis wherever it appears in an author list. */
export const AUTHOR_SELF = "Sihang Zeng";

export const siteMeta = {
  title: "Sihang Zeng",
  description:
    "Sihang Zeng is a postdoctoral research fellow in Biomedical Informatics at Harvard Medical School, working on trustworthy AI for longitudinal electronic health records, clinical foundation models, and multi-agent reasoning over patient trajectories.",
  siteUrl: "https://zengsihang.github.io"
};

export const navigationLinks: LinkItem[] = [
  { label: "About", href: "/#about" },
  { label: "Research", href: "/#research" },
  { label: "Publications", href: "/publications/" },
  { label: "CV", href: "/cv/" }
];

export const profile: SiteProfile = {
  name: "Sihang Zeng",
  role: "Postdoctoral Research Fellow",
  affiliation: "Department of Biomedical Informatics, Harvard Medical School",
  affiliationHref: "https://dbmi.hms.harvard.edu/",
  group: "with Tianxi Cai",
  groupHref: "https://celehs.hms.harvard.edu/tcai",
  location: "Boston, Massachusetts",
  email: "sihangzeng@gmail.com",
  headshot: "/images/portrait.jpg",
  tagline:
    "I build AI systems that reason over a patient's history the way a clinician does — across years of messy, irregular records — and that can be trusted with the answer.",
  bio: [
    "I am a postdoctoral research fellow in the Department of Biomedical Informatics at Harvard Medical School. My research develops machine learning methods for longitudinal electronic health records: representing how a patient's state evolves over years of sparse, irregularly sampled data, and turning that representation into predictions clinicians can interrogate rather than merely accept.",
    "I completed my PhD in Biomedical Informatics at the University of Washington in 2026, advised by <a href=\"https://www.fredhutch.org/en/faculty-lab-directory/etzioni-ruth.html\" target=\"_blank\" rel=\"noreferrer\">Ruth Etzioni</a> and <a href=\"https://bime.uw.edu/faculty/meliha-yetisgen/\" target=\"_blank\" rel=\"noreferrer\">Meliha Yetisgen</a>, with a dissertation on trustworthy modeling of patient trajectories. Three threads run through that work: continuous-time latent trajectory models for survival and risk prediction, multi-agent LLM frameworks that make temporal reasoning over raw clinical notes explicit and auditable, and benchmarks that test whether biomedical AI holds up under the conditions it will actually meet.",
    "Earlier, I studied Electronic Engineering with a minor in Statistics at Tsinghua University. There I worked with <a href=\"https://www.stat.tsinghua.edu.cn/en/info/1023/1051.htm\" target=\"_blank\" rel=\"noreferrer\">Sheng Yu</a> on biomedical term representation and large-scale knowledge graph construction, and with <a href=\"https://c3i.ee.tsinghua.edu.cn/en/author/bowen-zhou/\" target=\"_blank\" rel=\"noreferrer\">Bowen Zhou</a> on language models for scientific and biomedical reasoning. That grounding in biomedical language still shapes how I think about clinical text as evidence.",
    "I stay involved with both lines of work as a remote collaborator with the <a href=\"https://c3i.ee.tsinghua.edu.cn/en/\" target=\"_blank\" rel=\"noreferrer\">Tsinghua C3I</a> lab and <a href=\"https://frontis.ai/\" target=\"_blank\" rel=\"noreferrer\">Frontis AI</a>, on multi-agent LLM systems, reinforcement learning for reasoning, and benchmarks for AI-driven science."
  ],
  socialLinks: [
    {
      label: "Email",
      href: "mailto:sihangzeng@gmail.com",
      icon: "email"
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=yhMm2S0AAAAJ&hl=en",
      icon: "scholar"
    },
    { label: "GitHub", href: "https://github.com/zengsihang", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/zengsh/", icon: "linkedin" },
    { label: "ORCID", href: "https://orcid.org/0009-0003-2921-829X", icon: "orcid" }
  ],
  metrics: [
    { value: "653", label: "Citations" },
    { value: "10", label: "h-index" },
    { value: "10", label: "i10-index" }
  ],
  metricsNote: "Google Scholar, August 2026"
};

export const focusAreas: FocusArea[] = [
  {
    title: "Patient trajectory modeling",
    description:
      "Continuous-time latent representations of how a patient's state moves through years of sparse, irregularly sampled EHR data — built so that the trajectory itself, not just the final score, is inspectable.",
    tags: ["Longitudinal EHR", "Survival analysis", "Representation learning"]
  },
  {
    title: "Multi-agent clinical reasoning",
    description:
      "LLM agent frameworks that read raw clinical notes chronologically, carry memory across visits, and surface the evidence behind a risk estimate — training-free where possible, self-evolving where it helps.",
    tags: ["LLM agents", "Temporal reasoning", "Early detection"]
  },
  {
    title: "Evaluation you can trust",
    description:
      "Benchmarks and evaluation protocols for biomedical and scientific AI that measure the thing that matters — generalization, calibration, and whether a model earns its claims.",
    tags: ["Benchmarks", "Trustworthy ML", "Scientific AI"]
  }
];

export const news: NewsItem[] = [
  {
    date: "Aug 2026",
    iso: "2026-08-01",
    title: "Joined Harvard Medical School as a Postdoctoral Research Fellow",
    detail:
      "Working with Tianxi Cai in the Department of Biomedical Informatics on longitudinal EHR modeling and complex interactions within clinical and biological data.",
    category: "career"
  },
  {
    date: "Jul 2026",
    iso: "2026-07-15",
    title: "STRATOS-P published in JCO Precision Oncology",
    detail:
      "A validated genomic classifier for overall survival in metastatic prostate cancer, developed across 7,201 veterans.",
    href: "https://doi.org/10.1200/PO-26-00021",
    category: "paper"
  },
  {
    date: "Jun 2026",
    iso: "2026-06-13",
    title: "Completed PhD at the University of Washington",
    detail:
      "Dissertation: “Towards Trustworthy Modeling of Patient Trajectory with Longitudinal Electronic Health Records.”",
    href: "https://bime.uw.edu/students/siheng-zeng/",
    category: "milestone"
  },
  {
    date: "Jun 2026",
    iso: "2026-06-01",
    title: "Traj-Evolve preprint released",
    detail:
      "A self-evolving multi-agent system for lung cancer early detection that outperforms nine baselines over five years of patient history.",
    href: "https://arxiv.org/abs/2606.02812",
    category: "paper"
  },
  {
    date: "2026",
    iso: "2026-05-01",
    title: "CONTEXTOR accepted at ICML 2026",
    detail: "Contextualized high-order contrastive learning for asymmetric relation inference.",
    href: "https://icml.cc/virtual/2026/poster/65317",
    category: "paper"
  },
  {
    date: "Apr 2026",
    iso: "2026-04-14",
    title: "PheMART published in Nature Biomedical Engineering",
    detail:
      "Deep contrastive learning linking 5.1 million missense variants to 4,179 clinical phenotypes.",
    href: "https://www.nature.com/articles/s41551-026-01636-4",
    category: "paper"
  },
  {
    date: "Apr 2026",
    iso: "2026-04-12",
    title: "TrajOnco preprint released",
    detail:
      "A training-free multi-agent LLM framework for multi-cancer early detection across 15 cancer types.",
    href: "https://arxiv.org/abs/2604.10386",
    category: "paper"
  },
  {
    date: "Jan 2026",
    iso: "2026-01-22",
    title: "MARTI accepted at ICLR 2026",
    detail: "An open framework for reinforced training and inference in multi-agent LLM systems.",
    href: "https://openreview.net/forum?id=E7jZqo0A50",
    category: "paper"
  },
  {
    date: "Oct 2025",
    iso: "2025-10-10",
    title: "1st place at the ChemoTimelines 2025 shared task",
    detail:
      "UW-BioNLP led subtask 2 with a best official score of 0.678; presented at Clinical NLP 2025.",
    href: "https://aclanthology.org/2025.clinicalnlp-1.6/",
    category: "award"
  },
  {
    date: "Oct 2025",
    iso: "2025-10-01",
    title: "Joined Truveta as a machine learning intern",
    detail:
      "Patient-journey foundation models over large-scale de-identified clinical data.",
    category: "career"
  },
  {
    date: "Aug 2025",
    iso: "2025-08-20",
    title: "ReviewRL accepted at EMNLP 2025",
    detail: "Reinforcement learning for grounded, automated scientific review.",
    href: "https://aclanthology.org/2025.emnlp-main.857/",
    category: "paper"
  },
  {
    date: "Jul 2025",
    iso: "2025-07-15",
    title: "TrajSurv accepted at MLHC 2025",
    detail: "Continuous latent trajectories from EHR for trustworthy survival prediction.",
    href: "https://proceedings.mlr.press/v298/zeng25a.html",
    category: "paper"
  }
];

export const publicationKindLabels: Record<PublicationKind, string> = {
  journal: "Journal articles",
  conference: "Conference and workshop papers",
  preprint: "Preprints and working papers",
  abstract: "Conference abstracts",
  thesis: "Thesis"
};

export const publicationKindOrder: PublicationKind[] = [
  "journal",
  "conference",
  "preprint",
  "abstract",
  "thesis"
];

export const publications: Publication[] = [
  // ---------------------------------------------------------------- journal
  {
    title: "Phenotypic prediction of missense variants via deep contrastive learning",
    authors: [
      "Jun Wen",
      AUTHOR_SELF,
      "Clara-Lea Bonzel",
      "Shilpa Nadimpalli Kobren",
      "Jiangchuan Du",
      "Yi Chai",
      "Hao Wang",
      "Meng Zhu",
      "Siwei Chen",
      "Fangwei Leng",
      "Harrison G. Zhang",
      "Katherine P. Liao",
      "Kelly Cho",
      "Isaac S. Kohane",
      "Marinka Zitnik",
      "Alexandre C. Pereira",
      "Jun S. Liu",
      "Tianxi Cai"
    ],
    venue: "Nature Biomedical Engineering",
    year: 2026,
    kind: "journal",
    summary:
      "PheMART connects missense variants to 4,179 clinical phenotypes in a shared metric space, combining protein language models, interaction networks, medical knowledge graphs, and EHR-derived signal to support rare disease diagnosis.",
    tags: ["Contrastive learning", "Variant effect", "Rare disease"],
    links: [
      { label: "Paper", href: "https://www.nature.com/articles/s41551-026-01636-4" },
      { label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/41981312/" }
    ],
    featured: true
  },
  {
    title:
      "Genomic classification to predict survival in metastatic prostate cancer: development of Somatic Tumor Risk Assessment for Overall Survival–Prostate (STRATOS-P)",
    authors: [
      "Martin W. Schoen",
      "Jiannong Li",
      AUTHOR_SELF,
      "Heena Desai",
      "Ryan Hausler",
      "Candace L. Haroldsen",
      "Lukas Owens",
      "Luca F. Valle",
      "Ruth B. Etzioni",
      "Timothy R. Rebbeck",
      "Brent S. Rose",
      "Michael J. Kelley",
      "R. Bruce Montgomery",
      "Nicholas G. Nickols",
      "Matthew B. Rettig",
      "Kosj Yamoah",
      "Kara N. Maxwell",
      "Isla P. Garraway"
    ],
    venue: "JCO Precision Oncology",
    year: 2026,
    kind: "journal",
    summary:
      "A prognostic classifier built from comprehensive genomic profiling of 7,201 veterans with metastatic prostate cancer in the VHA National Precision Oncology Program.",
    tags: ["Precision oncology", "Prognosis", "Real-world evidence"],
    links: [
      { label: "Paper", href: "https://doi.org/10.1200/PO-26-00021" },
      {
        label: "Preprint",
        href: "https://www.medrxiv.org/content/10.64898/2026.01.12.26343673v1"
      }
    ]
  },
  {
    title:
      "The role of Whole Health in enhancing tobacco cessation outcomes for veterans: a retrospective cohort study",
    authors: [
      AUTHOR_SELF,
      "Scott S. Coggeshall",
      "Ethan W. Rosser",
      "Stephanie L. Taylor",
      "Diana J. Burgess",
      "Gang Luo",
      "Steven B. Zeliadt"
    ],
    venue: "Journal of General Internal Medicine",
    year: 2025,
    kind: "journal",
    summary:
      "Links participation in Whole Health services to measurable tobacco cessation outcomes across the Veterans Health Administration.",
    tags: ["Health services research", "Veterans health", "Causal inference"],
    links: [
      { label: "Paper", href: "https://link.springer.com/article/10.1007/s11606-025-10063-1" },
      { label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/41417447/" }
    ]
  },
  {
    title:
      "CoRTEx: contrastive learning for representing terms via explanations with applications on constructing biomedical knowledge graphs",
    authors: ["Huaiyuan Ying", "Zhengyun Zhao", "Yang Zhao", AUTHOR_SELF, "Sheng Yu"],
    venue: "Journal of the American Medical Informatics Association",
    venueDetail: "31(9), 1912–1920",
    year: 2024,
    kind: "journal",
    summary:
      "Explanation-augmented contrastive learning that sharpens biomedical term representations for large-scale knowledge graph construction.",
    tags: ["Biomedical NLP", "Knowledge graphs", "Representation learning"],
    links: [{ label: "Paper", href: "https://academic.oup.com/jamia/article/31/9/1912/7680017" }]
  },
  {
    title: "A feasibility study of 2-D microwave thorax imaging based on the supervised descent method",
    authors: [
      "Haolin Zhang",
      "Maokun Li",
      "Fan Yang",
      "Shenheng Xu",
      "Yan Yin",
      "Hongyu Zhou",
      "Yubo Yang",
      AUTHOR_SELF,
      "Jianchong Shao"
    ],
    venue: "Electronics",
    venueDetail: "10(3), 352",
    year: 2021,
    kind: "journal",
    summary:
      "Learning-based 2-D microwave thorax imaging via the supervised descent method for fast structural reconstruction.",
    tags: ["Biomedical imaging", "Inverse problems"],
    links: [{ label: "Paper", href: "https://www.mdpi.com/2079-9292/10/3/352" }]
  },

  // ------------------------------------------------------------- conference
  {
    title: "CONTEXTOR: contextualized high-order contrastive learning",
    authors: ["Ze Cai", "Hanzhe Liang", AUTHOR_SELF, "Binbin Zhou", "Jun Wen"],
    venue: "International Conference on Machine Learning (ICML)",
    year: 2026,
    kind: "conference",
    summary:
      "Recasts high-order relation inference as a dynamic query–response process, contextualizing candidate entities through asymmetric conditional modulation.",
    tags: ["Contrastive learning", "Relational learning"],
    links: [{ label: "Paper", href: "https://icml.cc/virtual/2026/poster/65317" }]
  },
  {
    title: "MARTI: a framework for multi-agent LLM systems reinforced training and inference",
    authors: [
      "Kaiyan Zhang",
      "Kai Tian",
      "Runze Liu",
      AUTHOR_SELF,
      "Xuekai Zhu",
      "Guoli Jia",
      "Yuchen Fan",
      "Xingtai Lv",
      "Yuxin Zuo",
      "Che Jiang",
      "et al."
    ],
    venue: "International Conference on Learning Representations (ICLR)",
    year: 2026,
    kind: "conference",
    summary:
      "An open framework unifying reinforced training and inference for multi-agent LLM systems.",
    tags: ["Multi-agent LLMs", "Reinforcement learning"],
    links: [
      { label: "Paper", href: "https://openreview.net/forum?id=E7jZqo0A50" },
      { label: "Code", href: "https://github.com/TsinghuaC3I/MARTI" }
    ]
  },
  {
    title: "ReviewRL: towards automated scientific review with reinforcement learning",
    authors: [
      AUTHOR_SELF,
      "Kai Tian",
      "Kaiyan Zhang",
      "Junqi Gao",
      "Runze Liu",
      "Sa Yang",
      "Jingxuan Li",
      "Xinwei Long",
      "Jiaheng Ma",
      "Biqing Qi",
      "Bowen Zhou"
    ],
    venue: "Conference on Empirical Methods in Natural Language Processing (EMNLP)",
    venueDetail: "Main conference",
    year: 2025,
    kind: "conference",
    summary:
      "Trains review generation with verifiable rewards so that automated reviews stay grounded in the paper rather than drifting into fluent generality.",
    tags: ["Scientific AI", "RLVR", "Evaluation"],
    links: [{ label: "Paper", href: "https://aclanthology.org/2025.emnlp-main.857/" }],
    featured: true
  },
  {
    title:
      "TrajSurv: learning continuous latent trajectories from electronic health records for trustworthy survival prediction",
    authors: [
      AUTHOR_SELF,
      "Lucas Jing Liu",
      "Jun Wen",
      "Meliha Yetisgen",
      "Ruth Etzioni",
      "Gang Luo"
    ],
    venue: "Machine Learning for Healthcare Conference (MLHC)",
    venueDetail: "PMLR 298",
    year: 2025,
    kind: "conference",
    summary:
      "Learns a continuous-time latent trajectory per patient, so survival predictions come with an inspectable account of how risk accumulated.",
    tags: ["Survival analysis", "Longitudinal EHR", "Trustworthy ML"],
    links: [
      { label: "Paper", href: "https://proceedings.mlr.press/v298/zeng25a.html" },
      { label: "Code", href: "https://github.com/zengsihang/TrajSurv" }
    ],
    featured: true
  },
  {
    title:
      "Traj-CoA: patient trajectory modeling via chain-of-agents for lung cancer risk prediction",
    authors: [
      AUTHOR_SELF,
      "Yujuan Fu",
      "Sitong Zhou",
      "Zixuan Yu",
      "Lucas Jing Liu",
      "Jun Wen",
      "Matthew Thompson",
      "Ruth Etzioni",
      "Meliha Yetisgen"
    ],
    venue: "NeurIPS GenAI4Health Workshop",
    year: 2025,
    kind: "conference",
    summary:
      "A chain of LLM agents reads a patient's notes in order and passes forward a compressed timeline, making zero-shot lung cancer risk prediction traceable to source evidence.",
    tags: ["LLM agents", "Cancer screening", "Zero-shot"],
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2510.10454" },
      { label: "Code", href: "https://github.com/zengsihang/Traj-CoA" }
    ],
    featured: true
  },
  {
    title:
      "UW-BioNLP at ChemoTimelines 2025: thinking, fine-tuning, and dictionary-enhanced LLM systems for chemotherapy timeline extraction",
    authors: [
      "Tianmai M. Zhang",
      "Zhaoyi Sun",
      AUTHOR_SELF,
      "Chenxi Li",
      "Neil F. Abernethy",
      "Barbara D. Lam",
      "Fei Xia",
      "Meliha Yetisgen"
    ],
    venue: "Clinical NLP Workshop (ACL)",
    venueDetail: "pp. 40–56",
    year: 2025,
    kind: "conference",
    note: "1st place, subtask 2",
    summary:
      "Winning system for generating patient chemotherapy timelines from raw clinical notes, combining fine-tuning, chain-of-thought, and dictionary-enhanced retrieval.",
    tags: ["Clinical NLP", "Temporal extraction", "Shared task"],
    links: [
      { label: "Paper", href: "https://aclanthology.org/2025.clinicalnlp-1.6/" },
      { label: "arXiv", href: "https://arxiv.org/abs/2512.04518" }
    ]
  },
  {
    title:
      "Scalability of LLM-based multi-agent systems for scientific code generation: a preliminary study",
    authors: [
      "Yuru Wang",
      "Kaiyan Zhang",
      "Kai Tian",
      AUTHOR_SELF,
      "Xingtai Lv",
      "Ning Ding",
      "Biqing Qi",
      "Bowen Zhou"
    ],
    venue: "MathNLP Workshop (EMNLP)",
    year: 2025,
    kind: "conference",
    summary:
      "Shows a minimalist actor–critic pair can beat a reasoning model at equal compute while cutting token cost by 75%.",
    tags: ["Multi-agent systems", "Code generation"],
    links: [{ label: "Paper", href: "https://aclanthology.org/2025.mathnlp-main.4.pdf" }]
  },
  {
    title: "UltraMedical: building specialized generalists in biomedicine",
    authors: [
      "Kaiyan Zhang",
      AUTHOR_SELF,
      "Ermo Hua",
      "Ning Ding",
      "Zhang-Ren Chen",
      "Zhiyuan Ma",
      "Haoxin Li",
      "Ganqu Cui",
      "Biqing Qi",
      "Xuekai Zhu",
      "et al."
    ],
    venue: "NeurIPS Datasets and Benchmarks Track",
    year: 2024,
    kind: "conference",
    note: "Spotlight",
    summary:
      "A large biomedical instruction dataset and model suite that reaches domain specialization without giving up general capability.",
    tags: ["Biomedical LLMs", "Datasets", "Instruction tuning"],
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2406.03949" },
      { label: "Code", href: "https://github.com/TsinghuaC3I/UltraMedical" }
    ],
    featured: true
  },
  {
    title: "Large language models as biomedical hypothesis generators: a comprehensive evaluation",
    authors: [
      "Biqing Qi",
      "Kaiyan Zhang",
      "Kai Tian",
      "Haoxiang Li",
      "Zhang-Ren Chen",
      AUTHOR_SELF,
      "Ermo Hua",
      "Jinfang Hu",
      "Bowen Zhou"
    ],
    venue: "Conference on Language Modeling (COLM)",
    year: 2024,
    kind: "conference",
    summary:
      "Evaluates biomedical hypothesis generation on date-partitioned background–hypothesis pairs to control for contamination.",
    tags: ["Hypothesis generation", "Evaluation"],
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2407.08940" },
      { label: "Code", href: "https://github.com/TsinghuaC3I/LLM4BioHypoGen" }
    ]
  },
  {
    title: "Large language models are zero shot hypothesis proposers",
    authors: [
      "Biqing Qi",
      "Kaiyan Zhang",
      "Haoxiang Li",
      "Kai Tian",
      AUTHOR_SELF,
      "Zhang-Ren Chen",
      "Bowen Zhou"
    ],
    venue: "NeurIPS Instruction Tuning Workshop",
    year: 2023,
    kind: "conference",
    summary:
      "Tests whether language models can propose scientifically meaningful biomedical hypotheses without task-specific training.",
    tags: ["Hypothesis generation", "Scientific discovery"],
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2311.05965" }]
  },
  {
    title: "Automatic biomedical term clustering by learning fine-grained term representations",
    authors: [AUTHOR_SELF, "Zheng Yuan", "Sheng Yu"],
    venue: "BioNLP Workshop (ACL)",
    venueDetail: "pp. 91–96",
    year: 2022,
    kind: "conference",
    summary:
      "Fine-grained term representations that separate near-synonyms well enough to cluster biomedical terminology automatically.",
    tags: ["Biomedical NLP", "Representation learning"],
    links: [
      { label: "Paper", href: "https://aclanthology.org/2022.bionlp-1.8/" },
      { label: "Code", href: "https://github.com/GanjinZero/CODER" }
    ]
  },

  // --------------------------------------------------------------- preprint
  {
    title:
      "Traj-Evolve: a self-evolving multi-agent system for patient trajectory modeling in lung cancer early detection",
    authors: [AUTHOR_SELF, "Matthew Thompson", "Ruth Etzioni", "Meliha Yetisgen"],
    venue: "arXiv:2606.02812",
    year: 2026,
    kind: "preprint",
    summary:
      "Pairs an experience pool of retrieved similar patients with RL-optimized agent coordination, beating nine baselines over five years of patient history.",
    tags: ["Self-evolving agents", "Early detection", "Longitudinal EHR"],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2606.02812" }],
    featured: true
  },
  {
    title:
      "NatureBench: can coding agents match the published SOTA of Nature-family papers?",
    authors: [
      "Yuru Wang",
      "Lejun Cheng",
      "Yuxin Zuo",
      AUTHOR_SELF,
      "Bingxiang He",
      "Che Jiang",
      "Junlin Yang",
      "Yuchong Wang",
      "Kaikai Zhao",
      "et al."
    ],
    venue: "arXiv:2606.24530",
    year: 2026,
    kind: "preprint",
    summary:
      "Ninety tasks drawn from peer-reviewed Nature papers. The best agent exceeds published results on 17.8% of them, mostly by reducing science to familiar supervised learning.",
    tags: ["Benchmarks", "Coding agents", "AI for science"],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2606.24530" }]
  },
  {
    title:
      "EpiEvolve: self-evolving agents for streaming pandemic forecasting under regime shifts",
    authors: [
      "Yiming Lu",
      AUTHOR_SELF,
      "Zhengxu Tang",
      "Max Lau",
      "Fei Liu",
      "Wei Jin"
    ],
    venue: "arXiv:2606.05513",
    year: 2026,
    kind: "preprint",
    summary:
      "Keeps a fixed LLM forecaster but adapts through episodic memory, halving the time to recover after a variant regime shift.",
    tags: ["Epidemic forecasting", "Self-evolving agents", "Distribution shift"],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2606.05513" }]
  },
  {
    title:
      "TrajOnco: a multi-agent framework for temporal reasoning over longitudinal EHR for multi-cancer early detection",
    authors: [
      AUTHOR_SELF,
      "Young Won Kim",
      "Wilson Lau",
      "Ehsan Alipour",
      "Ruth Etzioni",
      "Meliha Yetisgen",
      "Anand Oka"
    ],
    venue: "arXiv:2604.10386",
    year: 2026,
    kind: "preprint",
    summary:
      "A training-free multi-agent LLM framework with memory that matches or beats supervised baselines across 15 cancer types (AUC 0.64–0.80) while producing reviewable evidence.",
    tags: ["Multi-agent LLMs", "Multi-cancer early detection", "Temporal reasoning"],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2604.10386" }]
  },
  {
    title:
      "Self-improving agents in the era of experience: a survey of self- to meta-evolution",
    authors: [
      "Che Jiang",
      "Jincheng Zhong",
      "Yu Fu",
      "Kai Tian",
      "Junlin Yang",
      "Kaikai Zhao",
      "Yuchong Wang",
      "Tianwei Luo",
      "Weizhi Wang",
      "Yuxin Zuo",
      "Guoli Jia",
      "Xingtai Lv",
      "Dianqiao Lei",
      AUTHOR_SELF,
      "et al."
    ],
    venue: "Preprint",
    year: 2026,
    kind: "preprint",
    summary:
      "Surveys agents that improve themselves, and the meta-layer that decides which parts of the improvement process should change.",
    tags: ["Survey", "Self-evolving agents"],
    links: [{ label: "Paper", href: "https://openreview.net/forum?id=IUltZSgLMm" }]
  },
  {
    title: "A survey of reinforcement learning for large reasoning models",
    authors: [
      "Kaiyan Zhang",
      "Yuxin Zuo",
      "Bingxiang He",
      "Youbang Sun",
      "Runze Liu",
      "Che Jiang",
      "Yuchen Fan",
      "Kai Tian",
      "Guoli Jia",
      "Pengfei Li",
      "Yu Fu",
      "Xingtai Lv",
      "Yuchen Zhang",
      AUTHOR_SELF,
      "et al."
    ],
    venue: "arXiv:2509.08827",
    year: 2025,
    kind: "preprint",
    summary:
      "A broad survey of RL for reasoning models: foundational components, open problems, training resources, and where scaling runs into walls.",
    tags: ["Survey", "Reinforcement learning", "Reasoning"],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2509.08827" }]
  },
  {
    title: "CaSBRE: causality-inspired semi-supervised biomedical relation extraction",
    authors: [AUTHOR_SELF, "Jun Wen", "Jiangchuan Du", "Jing Qian", "Tianxi Cai", "Hao Wang"],
    venue: "Under review",
    year: 2025,
    kind: "preprint",
    summary:
      "Disentangles causal from spurious features so relation extraction stays robust with scarce labels and unseen entities.",
    tags: ["Biomedical NLP", "Causal representation", "Semi-supervised"],
    links: [{ label: "OpenReview", href: "https://openreview.net/forum?id=ZAvI3lxYTh" }]
  },
  {
    title: "Hierarchical pretraining for biomedical term embeddings",
    authors: [
      "Bryan Cai",
      AUTHOR_SELF,
      "Yucong Lin",
      "Zheng Yuan",
      "Doudou Zhou",
      "Lu Tian"
    ],
    venue: "arXiv:2307.00266",
    year: 2023,
    kind: "preprint",
    summary:
      "Hierarchy-aware pretraining that encodes graded semantic relatedness between biomedical terms.",
    tags: ["Biomedical NLP", "Embeddings"],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2307.00266" }]
  },
  {
    title: "BIOS: an algorithmically generated biomedical knowledge graph",
    authors: [
      "Sheng Yu",
      "Zheng Yuan",
      "Jun Xia",
      "Shengxuan Luo",
      "Huaiyuan Ying",
      AUTHOR_SELF,
      "Jingyi Ren",
      "Hongyi Yuan",
      "Zhengyun Zhao",
      "Yucong Lin",
      "et al."
    ],
    venue: "arXiv:2203.09975",
    year: 2022,
    kind: "preprint",
    summary:
      "A biomedical knowledge graph built by machine learning rather than manual curation, at a scale manual curation cannot reach.",
    tags: ["Knowledge graphs", "Biomedical AI"],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2203.09975" }]
  },

  // --------------------------------------------------------------- abstract
  {
    title: "Predicting multi-cancer risk from EHR data using multi-agent LLMs",
    authors: [
      AUTHOR_SELF,
      "Young Won Kim",
      "Wilson Lau",
      "Ehsan Alipour",
      "Ruth B. Etzioni",
      "Meliha Yetisgen",
      "Anand Oka",
      "Jayashree Nanduri"
    ],
    venue: "Journal of Clinical Oncology",
    venueDetail: "ASCO Annual Meeting",
    year: 2026,
    kind: "abstract",
    links: []
  },
  {
    title:
      "STRATOS-P clinical model for prognosis and selection of patients with metastatic hormone-sensitive prostate cancer for intermittent therapy",
    authors: [
      "Martin W. Schoen",
      "Joshua Gruber",
      "Jason M. Doherty",
      "David B. Eaton Jr.",
      AUTHOR_SELF,
      "Lukas Owens",
      "et al."
    ],
    venue: "Journal of Clinical Oncology",
    venueDetail: "ASCO Annual Meeting",
    year: 2026,
    kind: "abstract",
    links: []
  },
  {
    title:
      "Development of an oncology generative AI foundation model trained on more than a million longitudinal patient journeys across the United States",
    authors: [
      "Wilson Lau",
      "Ehsan Alipour",
      "Young Won Kim",
      AUTHOR_SELF,
      "Anand Oka",
      "Jayashree Nanduri"
    ],
    venue: "Journal of Clinical Oncology",
    venueDetail: "ASCO Annual Meeting",
    year: 2026,
    kind: "abstract",
    links: []
  },
  {
    title:
      "MSR67 — Zero-shot lung cancer risk prediction from longitudinal electronic health records with a chain-of-agents framework",
    authors: [
      AUTHOR_SELF,
      "Young Won Kim",
      "Wilson Lau",
      "Ehsan Alipour",
      "Ruth Etzioni",
      "Meliha Yetisgen",
      "Anand Oka",
      "Jayashree Nanduri"
    ],
    venue: "Value in Health",
    venueDetail: "ISPOR",
    year: 2026,
    kind: "abstract",
    links: []
  },
  {
    title:
      "MSR68 — Characterizing oncology patient journeys and health state transitions using a data-driven Markov transition matrix in large-scale electronic health records",
    authors: [
      "Young Won Kim",
      "Wilson Lau",
      "Ehsan Alipour",
      AUTHOR_SELF,
      "Anand Oka",
      "Jayashree Nanduri"
    ],
    venue: "Value in Health",
    venueDetail: "ISPOR",
    year: 2026,
    kind: "abstract",
    links: []
  },
  {
    title:
      "MSR172 — Can a generative patient journey foundation model alleviate the burden of cancer screening?",
    authors: [
      "Wilson Lau",
      "Ehsan Alipour",
      "Young Won Kim",
      AUTHOR_SELF,
      "Anand Oka",
      "Jayashree Nanduri"
    ],
    venue: "Value in Health",
    venueDetail: "ISPOR",
    year: 2026,
    kind: "abstract",
    links: []
  },
  {
    title:
      "RWD140 — Patient journey foundational model for scalable imputation of missing units of measurement in electronic health records data",
    authors: [
      "Ehsan Alipour",
      "Wilson Lau",
      "Young Won Kim",
      AUTHOR_SELF,
      "Anand Oka",
      "Jayashree Nanduri"
    ],
    venue: "Value in Health",
    venueDetail: "ISPOR",
    year: 2026,
    kind: "abstract",
    links: []
  },
  {
    title:
      "Adapting the Global Burden of Disease Healthcare Access and Quality Index for the Veterans Health Administration: a feasibility study",
    authors: [AUTHOR_SELF, "Christine Wilson", "Gang Luo", "Steven Zeliadt"],
    venue: "AcademyHealth Annual Research Meeting",
    year: 2026,
    kind: "abstract",
    links: []
  },
  {
    title:
      "Population-level tobacco cessation outcomes associated with implementing Whole Health at the Veterans Health Administration",
    authors: [
      AUTHOR_SELF,
      "Scott Coggeshall",
      "Ethan Rosser",
      "Stephanie Taylor",
      "Diana Burgess",
      "Gang Luo",
      "Steven Zeliadt"
    ],
    venue: "AcademyHealth Annual Research Meeting",
    year: 2025,
    kind: "abstract",
    links: []
  },

  // ----------------------------------------------------------------- thesis
  {
    title:
      "Towards trustworthy modeling of patient trajectory with longitudinal electronic health records",
    authors: [AUTHOR_SELF],
    venue: "PhD dissertation, University of Washington",
    year: 2026,
    kind: "thesis",
    summary:
      "Advised by Ruth Etzioni and Meliha Yetisgen. Degree conferred June 2026.",
    links: [{ label: "UW BIME", href: "https://bime.uw.edu/students/siheng-zeng/" }]
  }
];

export const featuredPublications: Publication[] = publications
  .filter((publication) => publication.featured)
  .sort((a, b) => b.year - a.year);

export const education: EducationItem[] = [
  {
    degree: "PhD, Biomedical Informatics and Medical Education",
    institution: "University of Washington",
    period: "2023 – 2026",
    details: [
      "Dissertation: “Towards Trustworthy Modeling of Patient Trajectory with Longitudinal Electronic Health Records” — interpretable and generalizable frameworks for patient trajectory modeling",
      "Committee: <a href=\"https://www.fredhutch.org/en/faculty-lab-directory/etzioni-ruth.html\" target=\"_blank\" rel=\"noreferrer\">Ruth Etzioni</a> (co-chair), <a href=\"https://bime.uw.edu/faculty/meliha-yetisgen/\" target=\"_blank\" rel=\"noreferrer\">Meliha Yetisgen</a> (co-chair), <a href=\"https://globalhealth.washington.edu/faculty/matthew-thompson\" target=\"_blank\" rel=\"noreferrer\">Matthew Thompson</a>, <a href=\"https://scholar.google.com/citations?user=yqqmVbkAAAAJ&amp;hl=en\" target=\"_blank\" rel=\"noreferrer\">Hoifung Poon</a>, <a href=\"https://sop.washington.edu/people/noemi-kreif/\" target=\"_blank\" rel=\"noreferrer\">Noemi Kreif</a>",
      "Degree conferred June 2026"
    ]
  },
  {
    degree: "BEng, Electronic Engineering — minor in Statistics",
    institution: "Tsinghua University",
    period: "2019 – 2023",
    details: [
      "Research on biomedical term representation and algorithmic knowledge graph construction"
    ]
  }
];

export const experience: ExperienceItem[] = [
  {
    title: "Postdoctoral Research Fellow",
    organization: "Department of Biomedical Informatics, Harvard Medical School",
    organizationHref: "https://dbmi.hms.harvard.edu/",
    period: "2026 – present",
    description:
      "Working with Tianxi Cai on longitudinal EHR modeling and complex interactions within clinical and biological data."
  },
  {
    title: "Machine Learning Intern",
    organization: "Truveta",
    organizationHref: "https://www.truveta.com/",
    period: "2025 – 2026",
    description:
      "Patient-journey foundation models and multi-agent risk prediction over large-scale de-identified clinical data, with results presented at ASCO and ISPOR."
  },
  {
    title: "Graduate Research Assistant",
    organization: "University of Washington and Fred Hutchinson Cancer Center",
    organizationHref: "https://research.fredhutch.org/etzioni/en.html",
    period: "2023 – 2026",
    description:
      "Trajectory modeling for cancer early detection and survival prediction in the Etzioni Lab and UW BioNLP."
  },
  {
    title: "Undergraduate Researcher",
    organization: "Tsinghua University",
    period: "2020 – 2023",
    description:
      "Biomedical term representation learning and construction of the BIOS knowledge graph with Sheng Yu; language models for scientific and biomedical reasoning with Bowen Zhou."
  }
];

export const awards: AwardItem[] = [
  {
    year: "2025",
    title: "1st place, ChemoTimelines 2025 shared task (subtask 2)",
    detail: "Clinical NLP Workshop, ACL — best official score of 0.678"
  },
  {
    year: "2024",
    title: "Spotlight, NeurIPS Datasets and Benchmarks Track",
    detail: "UltraMedical: building specialized generalists in biomedicine"
  }
];

/**
 * Research communities Sihang has worked within. Kept to groups with a public
 * record (co-authored papers or a listed lab membership). Add reviewing and
 * committee service here as it becomes citable.
 */
export const affiliations: ServiceGroup[] = [
  {
    label: "Research groups",
    items: [
      "Cai Lab / CELEHS, Harvard Medical School",
      "Etzioni Lab, Fred Hutchinson Cancer Center",
      "UW BioNLP, University of Washington"
    ]
  },
  {
    label: "Remote collaborations",
    items: ["Tsinghua C3I", "Frontis AI"]
  }
];

export const skills: ServiceGroup[] = [
  {
    label: "Methods",
    items: [
      "Longitudinal and survival modeling",
      "LLM agents and multi-agent systems",
      "Contrastive and representation learning",
      "Reinforcement learning with verifiable rewards"
    ]
  },
  {
    label: "Domains",
    items: [
      "Electronic health records",
      "Cancer early detection and screening",
      "Clinical NLP",
      "Biomedical knowledge graphs"
    ]
  }
];
