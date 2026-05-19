import { Achievement, ContactInfo, Education, Experience, PersonalInfo, Project, Publication, Skill } from "@/types";

export const personalInfo: PersonalInfo = {
    name: "Mozammal Hossain",
    title: "Software Engineer & AI Researcher",
    tagline: "Building Enterprise-Grade AI Agent Systems at Scale",
    bio: `Software engineer specializing in AI agent systems and deep learning research. Currently working at IQVIA, 
        contributing to next-generation multi-agent platforms serving 19 of the top 20 global pharmaceutical companies. 
        Experienced in architecting enterprise-grade agent memory systems, implementing A2A protocol orchestration, and 
        building scalable AI solutions operating on petabyte-scale datasets. Published researcher in deep learning for 
        medical image analysis with ongoing work in explainable AI. Passionate about advancing AI systems through 
        rigorous engineering and research.`,
    profileImage: "/images/mozammal-hossain.jpg",
    resumeUrl: "/documents/Mozammal_Hossain_Resume.pdf",
    cvUrl: "/documents/Mozammal_Hossain_Resume.pdf",
};

export const contactInfo: ContactInfo = {
    email: "mozammalhossain@live.com",
    phone: "+8801875383037",
    location: "Chittagong, Bangladesh",
    socialLinks: [
        {
            platform: "GitHub",
            url: "https://github.com/mozammalrahat",
            username: "mozammalrahat",
            icon: "github",
        },
        {
            platform: "LinkedIn",
            url: "https://linkedin.com/in/mozammalhossain33",
            username: "mozammalhossain33",
            icon: "linkedin",
        },
    ],
};

export const experiences: Experience[] = [
    {
        id: "1",
        title: "Software Development Engineer II",
        company: "IQVIA",
        location: "Durham, North Carolina, USA (Remote)",
        startDate: "2026-03",
        description:
            "Architecting and delivering enterprise-grade AI agent platforms serving 19 of the top 20 global pharmaceutical companies. Leading critical infrastructure initiatives including agent memory systems, A2A protocol integration, and deep research agents for long-running analytical workflows.",
        achievements: [
            "Contributed to broad industry adoption of IQVIA's agent solutions, now embedded in workflows of 19 of the top 20 global pharmaceutical companies",
            "Architected enterprise-grade agent memory system (STM/LTM) for core agent platform, significantly improving context retention, personalization, and scalability",
            "Integrated A2A protocol into existing LangGraph ecosystem, enabling flexible, standards-based orchestration of sub-agents across diverse platforms",
            "Introduced and productionized deep agents within current infrastructure to support long-running, in-depth research workflows for multi-stage analytical tasks",
            "Demonstrated strong ownership and accountability for independent agent platforms (GMI Agent, Field Force Agent), ensuring reliability and continuous improvement",
            "Received IQVIA Impact Award for outstanding contributions to AI Assistant team",
        ],
        technologies: [
            "LangGraph",
            "LangChain",
            "A2A Protocol",
            "MCP",
            "Multi-Agent Systems",
            "Python",
            "AWS Bedrock",
            "Snowflake",
            "vLLM",
            "Agent Memory Systems",
        ],
        type: "full-time",
    },
    {
        id: "2",
        title: "Software Development Engineer I",
        company: "IQVIA",
        location: "Durham, North Carolina, USA (Remote)",
        startDate: "2024-03",
        endDate: "2026-03",
        description:
            "Built AI-driven solutions for pharmaceutical commercialization and life sciences workflows. Designed and developed advanced multi-agent backend systems with modular, scalable architectures operating on petabyte-scale pharmaceutical datasets.",
        achievements: [
            "Drove end-to-end AI workflows for IQVIA's next-generation data exploration and orchestration agent platform",
            "Designed and developed advanced multi-agent backend systems with modular, scalable architectures for enterprise-grade AI Assistant capabilities",
            "Implemented and optimized advanced reasoning techniques with robust tool-calling frameworks (MCP, context engineering, skill orchestration, tool interception)",
            "Architected AI agents operating on petabyte-scale pharmaceutical datasets in Snowflake for efficient querying and real-time insight generation",
            "Fine-tuned LLMs using advanced techniques (LoRA, QLoRA) for pharmaceutical use cases",
            "Collaborated on large-scale pharmaceutical datasets, strengthening expertise in scalable AI solutions for healthcare applications",
        ],
        technologies: [
            "Python",
            "LangGraph",
            "LangChain",
            "LangSmith",
            "LlamaIndex",
            "MCP",
            "Snowflake",
            "AWS Bedrock",
            "LoRA",
            "QLoRA",
            "FastAPI",
        ],
        type: "full-time",
    },
    {
        id: "3",
        title: "Software Engineer, Data & AI",
        company: "Dviz Technologies",
        location: "Delaware, USA (Remote)",
        startDate: "2023-07",
        endDate: "2024-02",
        description:
            "Led development of backend solutions for agentic RAG applications with fine-tuned LLMs. Built and optimized AI-powered MVPs for data-driven decision-making platforms and designed statistical models for fintech applications.",
        achievements: [
            "Led development of backend solutions for agentic Retrieval-Augmented Generation (RAG) applications with fine-tuned LLMs",
            "Built and optimized two AI-powered MVPs for data-driven decision-making platforms",
            "Designed statistical model and performed time-series data analysis for fintech solution, enabling predictive analytics and actionable insights",
            "Implemented scalable backend architectures for AI applications",
            "Collaborated with cross-functional teams to deliver production-ready AI solutions",
        ],
        technologies: [
            "Python",
            "FastAPI",
            "RAG",
            "LLMs",
            "Time-Series Analysis",
            "Statistical Modeling",
            "Backend Development",
        ],
        type: "full-time",
    },
];

export const education: Education[] = [
    {
        id: "1",
        degree: "Bachelor of Science",
        field: "Computer Science and Engineering",
        institution: "Shahjalal University of Science and Technology",
        location: "Sylhet, Bangladesh",
        startDate: "2018-02",
        endDate: "2023-03",
        gpa: "3.60/4.0",
        honors: ["CGPA of 3.83 for the last four consecutive semesters"],
        relevantCoursework: [
            "Data Structures and Algorithms",
            "Machine Learning",
            "Deep Learning",
            "Computer Vision",
            "Database Management Systems",
            "Software Engineering",
            "Distributed Systems",
            "Computer Networks",
        ],
        description:
            "Specialized in Computer Science with focus on artificial intelligence, machine learning, and software engineering. Achieved consistently high academic performance with CGPA of 3.83 in final four semesters, demonstrating strong upward trajectory.",
    },
];

export const projects: Project[] = [
    {
        id: "1",
        title: "FrameFlow - AI-Powered Cinematic Album Creator",
        description:
            "Hackathon-winning AI application that transforms user themes into cinematic photo albums using multi-model Gemini API chaining. Demonstrates advanced prompt engineering and context preservation across multiple AI model calls.",
        longDescription:
            "**The Challenge:** Creating cohesive visual narratives from simple themes requires artistic vision, technical skill, and time-consuming manual work.\n\n**The Solution:** Developed FrameFlow during the Nano Banana 48-hour Hackathon, achieving Winner status by creating an innovative multi-model AI pipeline. The system uses Gemini (Text) to brainstorm cinematic scenes from user themes, then chains API calls to Gemini (Image Preview) to generate images while maintaining thematic consistency and preserving user facial identity across all generated content.\n\n**Technical Innovation:** Built a context-aware workflow that performs visual analysis on generated images using Gemini (Text) to craft fully customized album layouts, fonts, and color palettes. The entire pipeline maintains effective context preservation, transforming a simple user theme into a complete, professional visual narrative through intelligent prompt generation and multi-modal orchestration.\n\n**Impact:** Delivered a smooth user experience that simplifies complex multi-model chaining into an intuitive 'theme-to-album' creation process, demonstrating the power of AI orchestration in creative applications.",
        technologies: ["TypeScript", "React", "Vite", "Gemini API", "Multi-Modal AI", "Prompt Engineering", "Context Management"],
        category: "AI/ML",
        features: [
            "Dynamic Prompt Generation Pipeline",
            "Multi-Model API Chaining (Text + Image)",
            "Context-Aware Workflow",
            "Facial Identity Preservation",
            "Automated Album Design Generation",
            "Thematic Consistency Maintenance",
        ],
        status: "completed",
        startDate: "2024-09",
        highlights: [
            "Winner of Nano Banana 48-hour Hackathon",
            "Multi-model Gemini API orchestration",
            "Advanced context preservation throughout AI pipeline",
            "Theme-to-professional-album in single workflow",
        ],
        imageUrl: undefined,
        liveUrl: undefined,
        githubUrl: "https://github.com/mozammalrahat/FrameFlow",
    },
    {
        id: "2",
        title: "Agent-Orchestration-LA2A - Multi-Agent System Architecture",
        description:
            "Production-grade multi-agent orchestration system implementing the A2A (Agent-to-Agent) protocol. Features centralized A2A server, AI-powered host agent with AWS Bedrock integration, and remote agents using LangGraph with Claude 3.5 Sonnet.",
        longDescription:
            "**The Challenge:** Building scalable multi-agent systems requires standardized communication protocols and robust orchestration mechanisms to coordinate multiple specialized agents effectively.\n\n**The Solution:** Architected a comprehensive multi-agent system implementing the A2A protocol for agent-to-agent communication. The system consists of three key components: a central A2A server for coordination, an AI-powered host agent (CLI) integrating AWS Bedrock for intelligent orchestration, and remote agents built with LangGraph and Claude 3.5 Sonnet for specialized task execution.\n\n**Technical Architecture:** Implemented standards-based orchestration enabling flexible, reusable agents across diverse platforms. Used Python with uv as package manager for modern dependency management. The architecture demonstrates enterprise-grade patterns for multi-agent coordination, agent discovery, and task delegation.\n\n**Impact:** Provides a scalable foundation for building complex agent systems that can coordinate multiple specialized agents, demonstrating best practices in AI agent orchestration and protocol-based communication.",
        technologies: ["Python", "LangGraph", "Claude 3.5 Sonnet", "AWS Bedrock", "A2A Protocol", "Multi-Agent Systems", "uv", "Agent Orchestration"],
        category: "AI/ML",
        features: [
            "A2A Protocol Implementation",
            "Central Orchestration Server",
            "AI-Powered Host Agent (AWS Bedrock)",
            "Remote Agents with LangGraph",
            "Claude 3.5 Sonnet Integration",
            "Scalable Agent Architecture",
        ],
        status: "completed",
        startDate: "2024-08",
        highlights: [
            "Production-grade A2A protocol implementation",
            "Multi-agent orchestration architecture",
            "AWS Bedrock and Claude integration",
            "Standards-based agent communication",
        ],
        imageUrl: undefined,
        liveUrl: undefined,
        githubUrl: "https://github.com/mozammalrahat/Agent-Orchestration-LA2A",
    },
    {
        id: "3",
        title: "Focus - Student-Alumni Networking Platform",
        description:
            "Full-stack community-based networking web application connecting current undergraduate students with alumni. Features real-time messaging, job resources, Q&A platform, and higher education resources.",
        longDescription:
            "**The Challenge:** Current students lack effective platforms to connect with alumni for mentorship, job opportunities, and academic guidance, creating a gap in professional networking and knowledge transfer.\n\n**The Solution:** Built Focus, a comprehensive full-stack web application serving as a bridge between undergraduate students and alumni. The platform features three main sections: Studentshub (social feed with posts, likes, comments), Job Resources & Q&A (job postings and academic Q&A), and Higher Education & Resources (scholarship news and helpful files).\n\n**Technical Implementation:** Implemented real-time messaging and notification system using Socket.io for instant communication. Integrated Cloudinary as CDN for fast media content delivery with presigned URLs for access control. Built from scratch JWT-based authentication and authorization system ensuring secure user access. Used MongoDB for flexible data modeling and Sendgrid for email notifications.\n\n**Impact:** Created an active community platform facilitating meaningful connections between students and alumni, enabling knowledge sharing, mentorship, and career opportunities through modern web technologies and real-time features.",
        technologies: ["Next.js", "Express.js", "Socket.io", "MongoDB", "Sendgrid", "Cloudinary", "JWT", "Real-Time Communication"],
        category: "Full-Stack",
        features: [
            "Real-Time Messaging (Socket.io)",
            "Job Resources & Q&A Platform",
            "Studentshub Social Feed",
            "Higher Education Resources",
            "JWT Authentication from Scratch",
            "CDN Integration with Access Control",
        ],
        status: "completed",
        startDate: "2022-01",
        endDate: "2022-12",
        highlights: [
            "Full-stack development with real-time features",
            "Custom JWT authentication implementation",
            "Socket.io for instant messaging and notifications",
            "Cloudinary CDN integration for performance",
        ],
        imageUrl: undefined,
        liveUrl: "https://www.focu-s.ml/",
        githubUrl: "https://github.com/mozammalrahat/Focus",
    },
    {
        id: "4",
        title: "RhythmicShare - Music Sharing Platform",
        description:
            "Full-stack music-sharing platform where users can listen to music, share tracks, write reviews, and engage with community through likes and comments. Features GraphQL API and modern React frontend.",
        longDescription:
            "**The Challenge:** Music enthusiasts need platforms that combine music streaming with social features and community engagement, providing both playback capabilities and rich interaction features.\n\n**The Solution:** Developed RhythmicShare, an immersive music experience platform allowing users to listen, share, and review music. Built with Django backend exposing GraphQL API endpoints using Graphene for efficient data querying. Implemented Apollo Client on the frontend for seamless GraphQL consumption, providing optimal performance and caching.\n\n**Technical Architecture:** Leveraged Graphene to create Query/Mutation resolvers exposing a clean GraphQL API. Utilized Django ORM for database integration with PostgreSQL for robust data management. Designed elegant UI with Material UI components and implemented JWT for secure authentication. Features include personalized profiles showing liked and uploaded music, playback speed/volume controls, and comprehensive music review system.\n\n**Impact:** Delivers an immersive music platform prioritizing user authentication, security, and community engagement through modern web technologies and GraphQL architecture.",
        technologies: ["Django", "React", "PostgreSQL", "GraphQL", "Graphene", "Apollo Client", "Material UI", "JWT"],
        category: "Full-Stack",
        features: [
            "GraphQL API with Graphene",
            "Music Upload and Streaming",
            "Review and Rating System",
            "User Profiles and Collections",
            "Playback Controls",
            "Apollo Client Integration",
        ],
        status: "completed",
        startDate: "2022-05",
        endDate: "2023-03",
        highlights: [
            "GraphQL API design with Graphene resolvers",
            "Django + PostgreSQL backend architecture",
            "Apollo Client for optimized data fetching",
            "Material UI for polished interface",
        ],
        imageUrl: undefined,
        liveUrl: undefined,
        githubUrl: "https://github.com/mozammalrahat/Rhythmic_share",
    },
    {
        id: "5",
        title: "Facial Emotion Detection CNN",
        description:
            "Deep learning system for recognizing facial expressions using Convolutional Neural Networks. Classifies input images into seven emotion categories with high accuracy using Keras and TensorFlow.",
        longDescription:
            "**The Challenge:** Accurate facial expression recognition is crucial for human-computer interaction, mental health monitoring, and emotion-aware AI systems, but requires sophisticated deep learning models trained on large datasets.\n\n**The Solution:** Built a facial expression recognition system using Convolutional Neural Networks trained on large facial datasets. The model classifies images into seven distinct emotions: angry, disgust, fear, happy, sad, surprise, and neutral, enabling applications in affective computing and user experience research.\n\n**Technical Implementation:** Implemented CNN architecture using Keras with TensorFlow backend for optimal performance. Applied data augmentation techniques to improve model generalization. Performed extensive hyperparameter tuning and experimentation to achieve high classification accuracy across all emotion categories.\n\n**Impact:** Demonstrates proficiency in deep learning for computer vision tasks, specifically in the challenging domain of facial expression recognition with practical applications in emotion-aware AI systems.",
        technologies: ["Python", "Keras", "TensorFlow", "CNN", "Computer Vision", "Deep Learning", "Image Classification"],
        category: "Deep Learning",
        features: [
            "7-Emotion Classification",
            "CNN Architecture Implementation",
            "Data Augmentation Pipeline",
            "High Accuracy Classification",
            "Keras/TensorFlow Backend",
            "Facial Expression Recognition",
        ],
        status: "completed",
        startDate: "2022-11",
        endDate: "2023-03",
        highlights: [
            "7-category emotion classification",
            "CNN implementation with Keras/TensorFlow",
            "Computer vision for facial analysis",
            "Production-ready emotion recognition model",
        ],
        imageUrl: undefined,
        liveUrl: undefined,
        githubUrl: "https://github.com/mozammalrahat/Facial-Emotion-Detection-CNN",
    },
    {
        id: "6",
        title: "Tomato Leaf Disease Detection CNN",
        description:
            "CNN-based system for early detection of tomato leaf diseases using deep learning. Achieves 97.6% training accuracy on 22,948 images from the New Plant Diseases Dataset, enabling precision agriculture.",
        longDescription:
            "**The Challenge:** Early detection of plant diseases is critical for preventing crop loss and ensuring food security, but manual inspection is time-consuming and requires expert knowledge.\n\n**The Solution:** Developed a Convolutional Neural Network for automated tomato leaf disease detection using 22,948 images from the New Plant Diseases Dataset. The system identifies various disease patterns in tomato leaves, enabling early intervention and treatment.\n\n**Technical Achievement:** Achieved 97.6% training accuracy through careful model architecture design, appropriate data preprocessing, and augmentation strategies. Implemented using Keras with TensorFlow backend, demonstrating the application of deep learning to real-world agricultural problems.\n\n**Impact:** Provides an automated, accurate solution for plant disease detection, contributing to precision agriculture and helping farmers identify and address crop diseases early, potentially preventing significant agricultural losses.",
        technologies: ["Python", "Keras", "TensorFlow", "CNN", "Computer Vision", "Deep Learning", "Image Classification", "Agricultural AI"],
        category: "Deep Learning",
        features: [
            "Tomato Disease Classification",
            "97.6% Training Accuracy",
            "22,948 Image Dataset",
            "Early Disease Detection",
            "CNN Implementation",
            "Agricultural Application",
        ],
        status: "completed",
        startDate: "2022-10",
        endDate: "2023-02",
        highlights: [
            "97.6% training accuracy achieved",
            "New Plant Diseases Dataset (22,948 images)",
            "CNN for agricultural disease detection",
            "Practical precision agriculture application",
        ],
        imageUrl: undefined,
        liveUrl: undefined,
        githubUrl: "https://github.com/mozammalrahat/Tomato-Leaf-Disease-Detection-CNN",
    },
];

export const skills: Skill[] = [
    // Programming Languages
    { name: "Python", category: "Backend", proficiency: "expert", yearsOfExperience: 4 },
    { name: "JavaScript", category: "Frontend", proficiency: "expert", yearsOfExperience: 4 },
    { name: "TypeScript", category: "Frontend", proficiency: "expert", yearsOfExperience: 3 },
    { name: "Java", category: "Backend", proficiency: "advanced", yearsOfExperience: 1 },
    { name: "C", category: "Backend", proficiency: "advanced", yearsOfExperience: 2 },
    { name: "C++", category: "Backend", proficiency: "advanced", yearsOfExperience: 2 },
    { name: "Bash", category: "DevOps", proficiency: "advanced", yearsOfExperience: 4 },
    { name: "SQL", category: "Database", proficiency: "expert", yearsOfExperience: 4 },

    // Backend Frameworks & Tools
    { name: "FastAPI", category: "Backend", proficiency: "expert", yearsOfExperience: 3 },
    { name: "Django", category: "Backend", proficiency: "expert", yearsOfExperience: 3 },
    { name: "Django REST Framework", category: "Backend", proficiency: "expert", yearsOfExperience: 3 },
    { name: "Celery", category: "Backend", proficiency: "advanced", yearsOfExperience: 3 },
    { name: "Flask", category: "Backend", proficiency: "advanced", yearsOfExperience: 2 },
    { name: "Node.js", category: "Backend", proficiency: "expert", yearsOfExperience: 3 },
    { name: "Express.js", category: "Backend", proficiency: "expert", yearsOfExperience: 3 },
    { name: "GraphQL", category: "Backend", proficiency: "advanced", yearsOfExperience: 2 },

    // Frontend Frameworks & Libraries
    { name: "Next.js", category: "Frontend", proficiency: "expert", yearsOfExperience: 3 },
    { name: "React", category: "Frontend", proficiency: "expert", yearsOfExperience: 4 },
    { name: "Socket.io", category: "Backend", proficiency: "advanced", yearsOfExperience: 2 },

    // Databases
    { name: "MySQL", category: "Database", proficiency: "expert", yearsOfExperience: 4 },
    { name: "PostgreSQL", category: "Database", proficiency: "expert", yearsOfExperience: 4 },
    { name: "MongoDB", category: "Database", proficiency: "expert", yearsOfExperience: 3 },
    { name: "Vector Databases", category: "Database", proficiency: "advanced", yearsOfExperience: 3 },
    { name: "Neo4j", category: "Database", proficiency: "intermediate", yearsOfExperience: 1 },

    // AI/ML Tools & Technologies
    { name: "LangGraph", category: "AI/ML Tools", proficiency: "expert", yearsOfExperience: 2 },
    { name: "LangChain", category: "AI/ML Tools", proficiency: "expert", yearsOfExperience: 3 },
    { name: "LangSmith", category: "AI/ML Tools", proficiency: "advanced", yearsOfExperience: 2 },
    { name: "LlamaIndex", category: "AI/ML Tools", proficiency: "advanced", yearsOfExperience: 2 },
    { name: "MCP", category: "AI/ML Tools", proficiency: "expert", yearsOfExperience: 1 },
    { name: "A2A Protocol", category: "AI/ML Tools", proficiency: "expert", yearsOfExperience: 1 },
    { name: "vLLM", category: "AI/ML Tools", proficiency: "advanced", yearsOfExperience: 1 },
    { name: "n8n", category: "AI/ML Tools", proficiency: "intermediate", yearsOfExperience: 1 },
    { name: "Vertex AI Agent Engine", category: "AI/ML Tools", proficiency: "advanced", yearsOfExperience: 1 },
    { name: "PyTorch", category: "AI/ML Tools", proficiency: "expert", yearsOfExperience: 3 },
    { name: "Keras", category: "AI/ML Tools", proficiency: "expert", yearsOfExperience: 3 },
    { name: "TensorFlow", category: "AI/ML Tools", proficiency: "advanced", yearsOfExperience: 3 },
    { name: "Scikit-Learn", category: "AI/ML Tools", proficiency: "expert", yearsOfExperience: 3 },
    { name: "XGBoost", category: "AI/ML Tools", proficiency: "advanced", yearsOfExperience: 2 },
    { name: "NumPy", category: "AI/ML Tools", proficiency: "expert", yearsOfExperience: 4 },
    { name: "Pandas", category: "AI/ML Tools", proficiency: "expert", yearsOfExperience: 4 },
    { name: "Matplotlib", category: "AI/ML Tools", proficiency: "advanced", yearsOfExperience: 4 },

    // Cloud (AWS)
    { name: "AWS Lambda", category: "Cloud (AWS)", proficiency: "advanced", yearsOfExperience: 2 },
    { name: "AWS S3", category: "Cloud (AWS)", proficiency: "expert", yearsOfExperience: 2 },
    { name: "AWS EC2", category: "Cloud (AWS)", proficiency: "advanced", yearsOfExperience: 2 },
    { name: "AWS Glue", category: "Cloud (AWS)", proficiency: "intermediate", yearsOfExperience: 1 },
    { name: "Amazon RDS", category: "Cloud (AWS)", proficiency: "advanced", yearsOfExperience: 2 },
    { name: "AWS SageMaker", category: "Cloud (AWS)", proficiency: "advanced", yearsOfExperience: 2 },
    { name: "AWS Bedrock", category: "Cloud (AWS)", proficiency: "expert", yearsOfExperience: 2 },
    { name: "Amazon EKS", category: "Cloud (AWS)", proficiency: "intermediate", yearsOfExperience: 2 },

    // DevOps & Tools
    { name: "Docker", category: "DevOps", proficiency: "expert", yearsOfExperience: 3 },
    { name: "Kubernetes", category: "DevOps", proficiency: "advanced", yearsOfExperience: 2 },
    { name: "Git", category: "DevOps", proficiency: "expert", yearsOfExperience: 5 },
    { name: "GitHub", category: "DevOps", proficiency: "expert", yearsOfExperience: 5 },
    { name: "GitLab", category: "DevOps", proficiency: "advanced", yearsOfExperience: 2 },
    { name: "CI/CD", category: "DevOps", proficiency: "expert", yearsOfExperience: 3 },
    { name: "Redis", category: "DevOps", proficiency: "advanced", yearsOfExperience: 2 },
    { name: "RabbitMQ", category: "DevOps", proficiency: "intermediate", yearsOfExperience: 1 },

    // Data Engineering
    { name: "ETL/ELT", category: "Data Engineering", proficiency: "advanced", yearsOfExperience: 2 },
    { name: "Scrapy", category: "Data Engineering", proficiency: "advanced", yearsOfExperience: 2 },
    { name: "PySpark", category: "Data Engineering", proficiency: "intermediate", yearsOfExperience: 1 },
    { name: "Apache Airflow", category: "Data Engineering", proficiency: "intermediate", yearsOfExperience: 1 },
    { name: "Apache Kafka", category: "Data Engineering", proficiency: "intermediate", yearsOfExperience: 1 },

    // Core Skills
    { name: "Multi-Agent Systems", category: "Core", proficiency: "expert", yearsOfExperience: 2 },
    { name: "Software Architecture", category: "Core", proficiency: "expert", yearsOfExperience: 3 },
    { name: "System Design", category: "Core", proficiency: "expert", yearsOfExperience: 3 },
    // { name: "REST APIs", category: "Core", proficiency: "expert", yearsOfExperience: 4 },
    { name: "Microservices", category: "Core", proficiency: "advanced", yearsOfExperience: 2 },
];

export const achievements: Achievement[] = [
    {
        id: "1",
        title: "IQVIA Impact Award",
        description: "Received for outstanding performance in AI Assistant team contributing to agent solutions serving top 20 pharmaceutical companies",
        date: "2025",
        category: "award",
    },
    {
        id: "2",
        title: "Nano Banana Hackathon Winner",
        description: "Won 48-hour hackathon with FrameFlow, an AI-powered cinematic album creator using multi-model Gemini API orchestration",
        date: "2024",
        category: "award",
    },
    {
        id: "3",
        title: "2nd Runner-Up Bangladesh Physics Olympiad",
        description: "Achieved 2nd runner-up position at 2017 Bangladesh Physics Olympiad (Chittagong Region) and participated at national level",
        date: "2017",
        category: "award",
    },
    {
        id: "4",
        title: "600+ Competitive Programming Problems Solved",
        description: "Solved 600+ algorithmic problems across LeetCode, HackerRank, Codeforces, VJudge, and LightOJ platforms",
        date: "2023",
        category: "certification",
    },
    {
        id: "5",
        title: "Published Research in Deep Learning for Medical Imaging",
        description: "Published research paper on Deep Learning in Prostate Cancer Diagnosis and Gleason Grading in Histopathology Images",
        date: "2022",
        category: "publication",
    },
    {
        id: "6",
        title: "Machine Learning & Deep Learning Workshop Conductor",
        description: "Conducted several workshops on Machine Learning and Deep Learning for students and professionals",
        date: "2021",
        category: "content-creation",
    },
];

// Research & Publications
export const research: Publication[] = [
    {
        id: "1",
        title: "Deep Learning in Prostate Cancer Diagnosis and Gleason Grading in Histopathology Images: An Extensive Study",
        authors: ["Mozammal Hossain"],
        date: "2022",
        abstract: "Explored different aspects of applying Deep Learning for diagnosing prostate cancer and Gleason grading in histopathology images. Analyzed image pre-processing, post-processing, and evaluation techniques and their limitations. Examined existing deep learning methodological approaches and their impact on differentiating various prostate cancer Gleason grades. Identified promising solutions to resolve obstacles faced in prostate cancer detection and Gleason grading, and discussed existing limitations and future scope in the field.",
        type: "journal",
        status: "Published",
        venue: "Elsevier",
    },
    {
        id: "2",
        title: "Exploring Spatial and Temporal-Awareness Solutions in Synchronized, Remote Collaborative Augmented Reality",
        authors: ["Mozammal Hossain", "Khalad Hasan (Supervisor, UBC)"],
        date: "2023",
        abstract: "Developed an AR system for exploring spatial and temporal-awareness solutions in synchronized, remote collaborative augmented reality. Designed a study with two design factors: representation of the user (mini avatar and large avatar + Ray) and update style (dynamic and static). Collected user reviews and selection time to analyze the results. Found that participants preferred the dynamic update style and large avatar representation for exploring spatial and temporal-awareness solutions in AR. This research was supervised by Khalad Hasan (Assistant Professor, UBC).",
        type: "thesis",
        status: "Undergraduate Thesis",
    },
    {
        id: "3",
        title: "Interpreting the Latent Space of Convolutional Variational Autoencoders for Person-Agnostic Muscle-Movement Artifact Detection in EEG Signals",
        authors: ["Mozammal Hossain"],
        date: "2024",
        abstract: "Currently developing a Convolutional Variational Autoencoder (CVAE) for muscle-movement artifact detection in EEG signals. Implementing preprocessing steps including EEG topographic map generation and latent space disentanglement techniques to separate artifact-related components. Future work includes reconstructing clean EEG signals using disentangled latent space components and evaluating model performance using metrics like SSIM, MSE, and SNR. Explainable AI (XAI) techniques such as attention visualization and latent space exploration will be integrated to interpret the model's artifact detection capabilities. The model will be benchmarked against traditional (ICA) and modern deep learning methods to demonstrate improvements in generalization and interpretability.",
        type: "in-progress",
        status: "In Progress",
    },
];

// Navigation configuration
export const navSections = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "research", label: "Research", href: "#research" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
];

// SEO configuration
export const seoConfig = {
    title: "Mozammal Hossain - Software Engineer & AI Researcher",
    description:
        "Software engineer specializing in AI agent systems and deep learning research. Working at IQVIA building enterprise-grade multi-agent platforms for top pharmaceutical companies. Published researcher with expertise in LangGraph, multi-agent orchestration, and deep learning for medical imaging. 600+ competitive programming problems solved.",
    keywords: [
        "Software Engineer",
        "AI Researcher",
        "Multi-Agent Systems",
        "LangGraph",
        "LangChain",
        "A2A Protocol",
        "Deep Learning",
        "Python",
        "TypeScript",
        "AWS",
        "IQVIA",
        "Pharmaceutical AI",
        "Medical Imaging",
        "Computer Vision",
        "Bangladesh",
    ],
    ogImage: "/images/og.png",
    canonicalUrl: "https://mozammal-portfolio.vercel.app",
};

// Statistics for hero section
export const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Delivered", value: "10+" },
    { label: "Research & Publications", value: "3" },
];

// Featured technologies for hero animation
export const featuredTechnologies = [
    "Python",
    "LangGraph",
    "TypeScript",
    "Multi-Agent Systems",
    "AWS",
    "PyTorch",
    "FastAPI",
    "React",
];

// Interests and Focus Areas
export const interests = [
    "Multi-Agent AI Systems",
    "Deep Learning Research",
    "Medical Image Analysis",
    "Computer Vision",
    "Agent Orchestration",
    "Competitive Programming",
    "Explainable AI",
    "EEG Signal Processing",
];

// Featured project IDs for homepage
export const featuredProjectIds = ["1", "2", "3", "5"];

// Skills grouped by category for display
export const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
        acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
}, {} as Record<string, Skill[]>);

// Recent projects (last 2 years)
export const recentProjects = projects
    .filter((project) => {
        const startYear = parseInt(project.startDate.split(" ")[1]);
        return startYear >= 2023;
    })
    .sort((a, b) => {
        const yearA = parseInt(a.startDate.split(" ")[1]);
        const yearB = parseInt(b.startDate.split(" ")[1]);
        return yearB - yearA;
    });

// Helper functions
export const getProjectsByCategory = (category: string) => projects.filter((project) => project.category === category);

export const getSkillsByProficiency = (proficiency: string) =>
    skills.filter((skill) => skill.proficiency === proficiency);

export const getFeaturedProjects = () => projects.filter((project) => featuredProjectIds.includes(project.id));

export const getCurrentExperience = () => experiences.find((exp) => !exp.endDate);

export const getCompletedProjects = () => projects.filter((project) => project.status === "completed");

export const getExpertSkills = () => skills.filter((skill) => skill.proficiency === "expert");

export const getRecentAchievements = () => achievements.sort((a, b) => parseInt(b.date) - parseInt(a.date)).slice(0, 3);

// Animation variants for Framer Motion
export const animationVariants = {
    fadeIn: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    },
    slideIn: {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 },
    },
    stagger: {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    },
    scaleIn: {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5 },
    },
};
