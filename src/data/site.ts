import type {
  AwardItem,
  EducationItem,
  ExperienceItem,
  LinkItem,
  NewsItem,
  Publication,
  PublicationKind,
  TalkItem
} from "@/types";

/**
 * Rendered in bold wherever it appears in an author list. A trailing "*"
 * (written as `${AUTHOR_SELF}*`) marks equal contribution.
 */
export const AUTHOR_SELF = "Sihang Zeng";

export const siteMeta = {
  title: "Sihang Zeng",
  description:
    "Sihang Zeng is a postdoctoral research fellow in Biomedical Informatics at Harvard Medical School, working on trustworthy AI for healthcare: patient trajectory modeling, healthcare agents, EHR foundation models, and computational drug repurposing.",
  siteUrl: "https://zengsihang.github.io",
  /** Shown in the footer. Update when the content changes. */
  lastUpdated: "October 2026"
};

export const profile = {
  name: "Sihang Zeng",
  role: "Postdoctoral Research Fellow",
  affiliation: "Department of Biomedical Informatics, Harvard Medical School",
  affiliationHref: "https://dbmi.hms.harvard.edu/",
  location: "Boston, Massachusetts",
  /** Written out to deter address scrapers; never put the raw address in the page. */
  email: "sihang_zeng [at] hms [dot] harvard [dot] edu",
  headshot: "/images/portrait.jpg",
  /** Paragraphs of the About section. May contain inline HTML (links only). */
  bio: [
    "I am a postdoctoral research fellow in the Department of Biomedical Informatics at Harvard Medical School, working with <a href=\"https://celehs.hms.harvard.edu/tcai\">Tianxi Cai</a>. My research is on trustworthy AI for healthcare: models that reason over a patient's longitudinal electronic health record, explain how a prediction was reached, and hold up across sites and populations. I currently work on continuous-time patient trajectory models for treatment effects, EHR foundation models, healthcare agents, and computational drug repurposing from knowledge graphs and EHR data.",
    "I received my PhD in Biomedical and Health Informatics from the University of Washington in 2026, advised by <a href=\"https://www.fredhutch.org/en/faculty-lab-directory/etzioni-ruth.html\">Ruth Etzioni</a> and <a href=\"https://bime.uw.edu/faculty/meliha-yetisgen/\">Meliha Yetisgen</a>, and my BEng in Electronic Engineering with a minor in Statistics from Tsinghua University, where I worked with <a href=\"https://c3i.ee.tsinghua.edu.cn/en/author/bowen-zhou/\">Bowen Zhou</a> and Sheng Yu. I continue to collaborate with <a href=\"https://c3i.ee.tsinghua.edu.cn/en/\">Tsinghua C3I</a> and <a href=\"https://frontis.ai/\">Frontis AI</a> on LLM agents, reinforcement learning, and benchmarks for AI-driven science."
  ],
  interests: [
    "Patient trajectory modeling",
    "Healthcare and scientific AI agents",
    "EHR foundation models",
    "Computational drug repurposing",
    "LLM post-training"
  ],
  links: [
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=yhMm2S0AAAAJ&hl=en" },
    { label: "GitHub", href: "https://github.com/zengsihang" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/zengsh/" },
    { label: "ORCID", href: "https://orcid.org/0009-0003-2921-829X" }
  ] satisfies LinkItem[]
};

export const news: NewsItem[] = [
  {
    date: "Aug 2026",
    text: "Joined the Department of Biomedical Informatics at Harvard Medical School as a postdoctoral research fellow."
  },
  {
    date: "Jul 2026",
    text: "STRATOS-P published in <em>JCO Precision Oncology</em>."
  },
  { date: "Jun 2026", text: "Completed my PhD at the University of Washington." },
  { date: "Jun 2026", text: "Presented multi-agent multi-cancer risk prediction at the ASCO Annual Meeting." },
  { date: "May 2026", text: "CONTEXTOR accepted at ICML 2026." },
  { date: "Apr 2026", text: "PheMART published in <em>Nature Biomedical Engineering</em>." },
  { date: "Jan 2026", text: "MARTI accepted at ICLR 2026." }
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
    title:
      "TrajSurv-mPC: learning from prostate-specific antigen trajectories for interpretable and generalizable survival prediction in metastatic prostate cancer",
    authors: [AUTHOR_SELF, "…", "Ruth Etzioni"],
    venue: "JCO Clinical Cancer Informatics",
    year: 2026,
    kind: "journal",
    note: "Accepted",
    links: [
      {
        label: "Abstract",
        href: "https://www.urotoday.com/recent-abstracts/urologic-oncology/prostate-cancer/172257-trajsurv-mpc-learning-from-prostate-specific-antigen-trajectories-for-interpretable-and-generalizable-survival-prediction-in-metastatic-prostate-cancer.html"
      }
    ]
  },
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
    links: [
      { label: "Paper", href: "https://www.nature.com/articles/s41551-026-01636-4" },
      { label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/41981312/" }
    ]
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
    links: [{ label: "Paper", href: "https://www.mdpi.com/2079-9292/10/3/352" }]
  },

  // ------------------------------------------------------------- conference
  {
    title: "CONTEXTOR: contextualized high-order contrastive learning",
    authors: ["Ze Cai", "Hanzhe Liang", AUTHOR_SELF, "Binbin Zhou", "Jun Wen"],
    venue: "International Conference on Machine Learning (ICML)",
    year: 2026,
    kind: "conference",
    links: [{ label: "Paper", href: "https://icml.cc/virtual/2026/poster/65317" }]
  },
  {
    title: "MARTI: a framework for multi-agent LLM systems reinforced training and inference",
    authors: [
      "Kaiyan Zhang*",
      "Kai Tian",
      "Runze Liu",
      `${AUTHOR_SELF}*`,
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
    links: [
      { label: "Paper", href: "https://openreview.net/forum?id=E7jZqo0A50" },
      { label: "Code", href: "https://github.com/TsinghuaC3I/MARTI" }
    ]
  },
  {
    title: "ReviewRL: towards automated scientific review with reinforcement learning",
    authors: [
      `${AUTHOR_SELF}*`,
      "Kai Tian*",
      "Kaiyan Zhang*",
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
    links: [{ label: "Paper", href: "https://aclanthology.org/2025.emnlp-main.857/" }]
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
    links: [
      { label: "Paper", href: "https://proceedings.mlr.press/v298/zeng25a.html" },
      { label: "Code", href: "https://github.com/zengsihang/TrajSurv" }
    ]
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
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2510.10454" },
      { label: "Code", href: "https://github.com/zengsihang/Traj-CoA" }
    ]
  },
  {
    title:
      "UW-BioNLP at ChemoTimelines 2025: thinking, fine-tuning, and dictionary-enhanced LLM systems for chemotherapy timeline extraction",
    authors: [
      "Tianmai M. Zhang*",
      "Zhaoyi Sun*",
      `${AUTHOR_SELF}*`,
      "Chenxi Li*",
      "Neil F. Abernethy",
      "Barbara D. Lam",
      "Fei Xia",
      "Meliha Yetisgen"
    ],
    venue: "Clinical NLP Workshop (ACL)",
    venueDetail: "pp. 40–56",
    year: 2025,
    kind: "conference",
    distinction: "1st place, subtask 2",
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
    distinction: "Spotlight",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2406.03949" },
      { label: "Code", href: "https://github.com/TsinghuaC3I/UltraMedical" }
    ]
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
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2311.05965" }]
  },
  {
    title: "Automatic biomedical term clustering by learning fine-grained term representations",
    authors: [`${AUTHOR_SELF}*`, "Zheng Yuan*", "Sheng Yu"],
    venue: "BioNLP Workshop (ACL)",
    venueDetail: "pp. 91–96",
    year: 2022,
    kind: "conference",
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
    note: "Under review at Journal of Biomedical Informatics",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2606.02812" }]
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
    note: "Under minor revision at npj Digital Medicine",
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
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2509.08827" }]
  },
  {
    title: "CaSBRE: causality-inspired semi-supervised biomedical relation extraction",
    authors: [`${AUTHOR_SELF}*`, "Jun Wen*", "Jiangchuan Du", "Jing Qian", "Tianxi Cai", "Hao Wang"],
    venue: "Under review",
    year: 2025,
    kind: "preprint",
    links: [{ label: "OpenReview", href: "https://openreview.net/forum?id=ZAvI3lxYTh" }]
  },
  {
    title: "Hierarchical pretraining for biomedical term embeddings",
    authors: [
      "Bryan Cai*",
      `${AUTHOR_SELF}*`,
      "Yucong Lin",
      "Zheng Yuan",
      "Doudou Zhou",
      "Lu Tian"
    ],
    venue: "arXiv:2307.00266",
    year: 2023,
    kind: "preprint",
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
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2203.09975" }]
  },

  // --------------------------------------------------------------- abstract
  {
    title: "Predicting multi-cancer risk from EHR data using multi-agent LLMs",
    distinction: "Oral presentation",
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
      "Zero-shot lung cancer risk prediction from longitudinal electronic health records with a chain-of-agents framework",
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
      "Characterizing oncology patient journeys and health state transitions using a data-driven Markov transition matrix in large-scale electronic health records",
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
      "Can a generative patient journey foundation model alleviate the burden of cancer screening?",
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
      "Patient journey foundational model for scalable imputation of missing units of measurement in electronic health records data",
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
    links: [{ label: "UW BIME", href: "https://bime.uw.edu/students/siheng-zeng/" }]
  }
];

export const education: EducationItem[] = [
  {
    degree: "Postdoctoral Fellow, Biomedical Informatics",
    institution: "Harvard Medical School",
    location: "Boston, MA",
    period: "Aug 2026 – present",
    detail: "Advisor: Tianxi Cai"
  },
  {
    degree: "PhD, Biomedical and Health Informatics",
    institution: "University of Washington",
    location: "Seattle, WA",
    period: "Sep 2023 – Jun 2026",
    detail:
      "Advisors: Ruth Etzioni and Meliha Yetisgen. Dissertation: <em>Towards Trustworthy Modeling of Patient Trajectory with Longitudinal Electronic Health Records</em>"
  },
  {
    degree: "BEng, Electronic Engineering; minor in Statistics",
    institution: "Tsinghua University",
    location: "Beijing, China",
    period: "Aug 2019 – Jun 2023",
    detail: "Advisors: Bowen Zhou and Sheng Yu"
  },
  {
    degree: "Exchange student, Electrical Engineering and Computer Science",
    institution: "KTH Royal Institute of Technology",
    location: "Stockholm, Sweden",
    period: "Jan 2022 – Jun 2022"
  }
];

export const experience: ExperienceItem[] = [
  {
    title: "Postdoctoral Research Fellow",
    organization: "Harvard Medical School",
    period: "Aug 2026 – present",
    description: "Longitudinal EHR modeling and drug repurposing, with Tianxi Cai."
  },
  {
    title: "Remote Collaborator",
    organization: "Frontis AI",
    period: "Jun 2026 – present",
    description: "Agent evaluation and AI for science; co-developed NatureBench."
  },
  {
    title: "Machine Learning Intern",
    organization: "Truveta",
    period: "Oct 2025 – Jun 2026",
    description: "Patient-journey and EHR foundation models; multi-agent risk prediction."
  },
  {
    title: "Research Intern",
    organization: "Futurewei",
    period: "Jun 2025 – Sep 2025",
    description: "Hybrid episodic and procedural memory for LLM agents."
  },
  {
    title: "Research Assistant",
    organization: "Veterans Health Administration",
    period: "Jan 2024 – Aug 2025",
    description: "Whole Health and healthcare quality indices, with Steven Zeliadt."
  },
  {
    title: "Research Assistant",
    organization: "University of Washington and Fred Hutchinson Cancer Center",
    period: "Sep 2023 – Jun 2026",
    description: "Trustworthy modeling of longitudinal EHR, with Ruth Etzioni and Meliha Yetisgen."
  },
  {
    title: "Researcher",
    organization: "Tsinghua University, C3I",
    period: "Sep 2022 – Jun 2026",
    description: "Reinforcement learning for LLMs and LLMs for science, with Bowen Zhou."
  },
  {
    title: "Research Assistant",
    organization: "Tsinghua University and Harvard University",
    period: "Jun 2021 – May 2024",
    description: "Biomedical term representation and knowledge graphs, with Sheng Yu and Tianxi Cai."
  }
];

export const talks: TalkItem[] = [
  {
    title: "Predicting multi-cancer risk from EHR data using multi-agent LLMs",
    venue: "ASCO Annual Meeting",
    date: "June 2026"
  },
  {
    title: "Towards trustworthy modeling of patient trajectory with longitudinal electronic health records",
    venue: "AI for Health Institute, Washington University in St. Louis",
    date: "March 2026"
  },
  {
    title: "Towards trustworthy modeling of patient trajectory with longitudinal electronic health records",
    venue: "Department of Biomedical Informatics, Harvard Medical School",
    date: "February 2026"
  },
  {
    title: "UW-BioNLP at ChemoTimelines 2025",
    venue: "Clinical NLP Workshop",
    date: "October 2025"
  },
  {
    title: "How AI turns messy EHR into clear survival predictions",
    venue: "Delta: HealthTech Innovators (podcast)",
    date: "September 2025"
  },
  {
    title:
      "The effect of real-world diffusion of CIH therapies and Whole Health coaching on tobacco cessation outcomes in the Veterans Health Administration",
    venue: "International Congress on Integrative Medicine & Health",
    date: "March 2025"
  },
  {
    title: "Automatic biomedical term clustering by learning fine-grained term representations",
    venue: "International Digital Economy Academy (IDEA)",
    date: "May 2022"
  }
];

export const awards: AwardItem[] = [
  { year: "2026", title: "Ira Kalet and Fred Wolf Endowment Award, University of Washington" },
  { year: "2025", title: "1st place, ChemoTimelines 2025 shared task (subtask 2), Clinical NLP Workshop" },
  { year: "2025", title: "Travel Award, International Congress on Integrative Medicine & Health" },
  { year: "2024", title: "Spotlight, NeurIPS Datasets and Benchmarks Track (UltraMedical)" },
  { year: "2023", title: "Top Scholar Award, University of Washington" },
  { year: "2020, 2021", title: "Excellent Comprehensive Scholarship, Tsinghua University (top 2.5%)" }
];
