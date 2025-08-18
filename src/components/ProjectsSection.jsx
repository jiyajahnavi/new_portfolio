import { useState } from "react";
import {
  ArrowRight,
  Youtube,
  Github,
  BarChart3,
  Database,
  MessageSquareText,
  Brain,
  Bot,
  Workflow,
  Linkedin,
  Link,
} from "lucide-react";
import { motion } from "framer-motion";

const categorizedProjects = {
  DataAnalysis: [
     {
        id: 1,
        title: "HR Analytics Dashboard",
        description: "Developed an HR dashboard to analyze attrition, department-wise headcount, and employee satisfaction metrics.",
        tags: ["Tableau", "HR Analytics", "Attrition", "Data Viz"],
        githubUrl: "https://github.com/jiyajahnavi/HR-Tableau", // optional
        image: "/projects/hr-dashboard.png",
      },
      {
        id: 2,
        title: "Sales & Customers Dashboard",
        description: "Created an interactive Tableau dashboard to track regional sales, revenue breakdown, and customer behavior patterns.",
        tags: ["Tableau", "Sales", "Customer Analytics", "KPIs", "Interactive Dashboard"],
        githubUrl: "https://github.com/jiyajahnavi/Sales-Customers-Tableau", // optional
        image: "/projects/sales-dashboard.png",
      },
       {
        id: 3,
        title: "Stock Price Analysis of Tech Companies",
        description: "Analyzed stock trends, moving averages, daily returns, and correlations across Apple, Amazon, Google, and Microsoft.",
        tags: ["EDA", "Stocks", "Pandas", "Seaborn", "Matplotlib", "Financial Data"],
        githubUrl: "https://github.com/jiyajahnavi/Stock-Price-Analysis/tree/main", // fill in
        image: "/projects/stock-price.png",
      },
      {
        id: 4,
        title: "YouTube Comments Analysis",
        description: "Performed sentiment and emoji analysis on YouTube comments with word clouds and engagement insights.",
        tags: ["NLP", "EDA", "Sentiment Analysis", "Pandas", "Seaborn", "WordCloud"],
        githubUrl: "https://github.com/jiyajahnavi/Youtube_sentiment_analysis", // fill in
        image: "/projects/yt-analysis.png",
      },
     
      {
        id: 5,
        title: "Breaking Bad Viewership Dashboard",
        description: "Built a visual dashboard showing trends in episode ratings, character screen time, and fan sentiment.",
        tags: ["Tableau", "TV Data", "Analytics", "Visualization"],
        githubUrl: "", // optional, for raw data if any
        image: "/projects/bb-dashboard.png",
      },
      
      
    ],

  RMgX : [
    {
      id : 1,
      title : "AmiPYQ Website",
      description : "AmiPYQ is a platform for Amity students to access previous year question papers, video lectures, and interview preparation materials",
      tags : ["HTML","CSS","Javascript"],
      githubUrl : "https://github.com/jiyajahnavi/AmiPYQ",
        demoUrl: "https://amipyq.com",
      image : "/projects/amipyq.png",
    },
    {
      id : 2,
      title : "School Website",
      description : "A professional school website featuring the school’s vision, founder’s message, faculty details, achievements, and student testimonials.",
      tags : ["HTML","CSS","Javascript"],
      githubUrl : "https://github.com/jiyajahnavi/schoolWebsite",
        demoUrl: "https://shkvaofficial.netlify.app/",
      image : "/projects/school.png",
    },
    {
      id : 3,
      title : "Parallax Website",
      description : "A free parallax website where anyone can access all resources of Data Science",
      tags : ["HTML","CSS","Javascript"],
      githubUrl : "https://github.com/jiyajahnavi/LearnDataScience",
        demoUrl: "https://learn-datascience.netlify.app/",
      image : "/projects/learndatascience.png",
    },
    {
      id : 4,
      title : "Institute Website",
      description : "An e-learning platform designed for institutes to offer structured courses and video lectures.",
      tags : ["HTML","CSS","Javascript"],
      githubUrl : "https://github.com/jiyajahnavi/an-e-learning-website",
        demoUrl: "https://thebiologykingdom.netlify.app/",
      image : "/projects/institute.png",
      
    }
  ],

  MLOps: [
      {
        id: 1,
        title: "Malicious URL Detection - GCP Cloud Run",
        description: "Built a FastAPI-based ML pipeline to detect malicious URLs. CI/CD with Docker + MLflow; deployed on GCP Cloud Run with MongoDB ingestion.",
        tags: ["FastAPI", "Docker", "MLflow", "GCP", "MongoDB"],
        image: "/projects/network-security.png",
        demoUrl: "https://www.youtube.com/watch?v=_nQ3V6SbxJ0&list=PLe-YIIlt-fbOSpBoaPA6TyB3S25WSf5sL&ab_channel=Jatin",
        githubUrl: "https://github.com/jiyajahnavi/networksecurity",
      },
      {
        id: 2,
        title: "Hotel Booking Cancellation - Jenkins + GCP",
        description: "End-to-end pipeline with Flask API, MLflow tracking, and Jenkins CI/CD. Deployed on Cloud Run using data from GCS buckets.",
        image: "/projects/hotel.png",
        tags: ["Flask", "MLflow", "Jenkins", "GCP", "Cloud Run"],
        demoUrl: "https://www.youtube.com/watch?v=gwA_81X7AiM&list=PLe-YIIlt-fbOSpBoaPA6TyB3S25WSf5sL&index=4&ab_channel=Jatin",
        githubUrl: "https://github.com/jiyajahnavi/gcp---pipelines--hotel-reservation-prediction",
      },
      {
        id: 3,
        title: "Rain Prediction - GKE with CircleCI",
        description: "XGBoost model deployed to GKE via CircleCI. Includes Dockerized Flask app, Kubernetes manifests, and GCP cloud infra.",
        image: "/projects/rain.png",
        tags: ["XGBoost", "Docker", "GKE", "CircleCI", "Debugging"],
        demoUrl: "https://www.youtube.com/watch?v=hWjNqbbSA5U&list=PLe-YIIlt-fbOSpBoaPA6TyB3S25WSf5sL&index=2&ab_channel=Jatin",
        githubUrl: "https://github.com/jiyajahnavi/australia-weather-rain-prediction",
      },
      {
        id: 4,
        title: "Iris Classifier - CircleCI to GKE",
        description: "CI/CD pipeline using CircleCI and Kubernetes for Iris prediction. Modular Python codebase, Docker, and GCP deployment.",
        image: "/projects/circle-ci.png",
        tags: ["Decision Tree", "CircleCI", "Docker", "Kubernetes", "GCP"],
        demoUrl: "https://www.youtube.com/watch?v=4HJRj0dsnsk&list=PLe-YIIlt-fbOSpBoaPA6TyB3S25WSf5sL&index=3&ab_channel=Jatin",
        githubUrl: "https://github.com/jiyajahnavi/circle-ci-iris-project",
      },
      {
        id: 5,
        title: "Iris Prediction - GitLab CI/CD + GKE",
        image: "/projects/gitlab.png",
        description: "GitLab CI/CD pipeline with Docker-in-Docker and Kubernetes deployment for real-time Iris classification.",
        tags: ["GitLab CI/CD", "Docker", "GKE", "GCP", "MLflow", "DVC"],
        demoUrl: "https://www.youtube.com/watch?v=U-ufsR2yDEQ&list=PLe-YIIlt-fbOSpBoaPA6TyB3S25WSf5sL&index=5&ab_channel=Jatin",
        githubUrl: "https://github.com/jiyajahnavi/gitlab-gke-project",
      },
    ],


  NLP: [
      {
        id: 1,
        title: "Abstractive Summarizer - Hugging Face + MLOps",
        description: "Fine-tuned Pegasus on dialogue data for abstractive summarization with a modular pipeline for training, evaluation (ROUGE), and inference using Hugging Face.",
        tags: ["Hugging Face", "Transformers", "PyTorch", "ROUGE", "MLOps"],
        demoUrl: "https://www.youtube.com/watch?v=TTt2aFM7G5c&list=PLe-YIIlt-fbPMDsmSXbzQuyBeRKfvs__T&index=2&ab_channel=Jatin", // 🔗 👉 Watch the Demo on YouTube
        githubUrl: "https://github.com/jiyajahnavi/transformers-huggingface-text-summarization",
        image: "/projects/nlp-text.png",
      },
      {
        id: 2,
        title: "Resume Matcher - Semantic AI with Sentence Transformers",
        description: "Built a semantic resume matcher using fine-tuned Sentence Transformers and cosine similarity, deployed via Streamlit with PDF parsing.",
        tags: ["Sentence Transformers", "Semantic Search", "Cosine Similarity", "NLP", "Streamlit"],
        demoUrl: "https://www.youtube.com/watch?v=JHRHpaTjnSg&list=PLe-YIIlt-fbPMDsmSXbzQuyBeRKfvs__T&index=1&ab_channel=Jatin",
        githubUrl: "https://github.com/jiyajahnavi/resume-matcher-finetuned-all-MiniLM-L6-v2",
        image: "/projects/resume-matcher.png",
      },
    ],

      VijayiWFH: [


    {
      id: 1,
      title: "Weather Finder",
      description: "A project that fetches real-time weather data using a weather API based on user input location, displaying temperature, humidity, and conditions.",
      tags: [ "python", "weather api"],
      githubUrl: "https://github.com/jiyajahnavi/weatherFinder",
      image: "/projects/weather.png",
    },
    {
      id: 2,
      title: "Password Generator",
      description: "This project generates secure, random passwords tailored to user-selected criteria like length and character types.",
      tags: ["python"],
     
      githubUrl: "https://github.com/jiyajahnavi/Passwordgenerator",
      image: "/projects/password.avif",
    },
    
  ],


   DeepLearning: [
      {
        id: 1,
        title: "Customer Churn Prediction with ANN + Streamlit",
        description:
          "ANN-based churn prediction model with a Streamlit app for real-time business decision support.",
        tags: ["TensorFlow", "ANN", "Streamlit", "Churn", "Banking"],
        demoUrl: "https://www.youtube.com/watch?v=fkZeUzhmzro&list=PLe-YIIlt-fbMg0B4DsrA8Xa2kgRv_pqA1&ab_channel=Jatin",
        githubUrl: "https://github.com/jiyajahnavi/churn-modelling-ann",
        image: "/projects/churn.png",
      },
      {
        id: 2,
        title: "IMDB Sentiment Analysis with Simple RNN",
        description:
          "Deployed RNN for real-time movie review sentiment classification with interactive UI and word cloud.",
        tags: ["RNN", "TensorFlow", "NLP", "Streamlit", "Sentiment Analysis"],
        demoUrl: "https://www.youtube.com/watch?v=cwitJwbhSgA&list=PLe-YIIlt-fbMg0B4DsrA8Xa2kgRv_pqA1&index=3&ab_channel=Jatin",
        githubUrl: "https://github.com/jiyajahnavi/simple-rnn-imdb",
        image: "/projects/imdb-dl.png",
      },
      {
        id: 3,
        title: "Next Word Prediction using LSTM (Shakespeare)",
        description:
          "LSTM trained on Hamlet for next-word prediction with multi-word generation via Streamlit app.",
        tags: ["LSTM", "NLP", "Text Generation", "TensorFlow", "Streamlit"],
        demoUrl: "https://www.youtube.com/watch?v=eJ1H5GUIVL4&list=PLe-YIIlt-fbMg0B4DsrA8Xa2kgRv_pqA1&index=2&ab_channel=Jatin",
        githubUrl: "https://github.com/jiyajahnavi/lstm-model-next-word-prediction",
        image: "/projects/lstm-next-word.png",
      },
    ],



  GenAI: [
      {
        id: 1,
        title: "RAG PDF Q&A with Ollama ",
        description: "Query research papers with an end-to-end RAG pipeline using LangChain, Groq’s LLaMA3, and Ollama embeddings via Streamlit.",
        tags: ["LangChain", "RAG", "Ollama", "Groq", "Streamlit"],
        demoUrl: "https://www.youtube.com/watch?v=e6-uXlkQFQc&list=PLe-YIIlt-fbO3hXVoaPK56ikWRT0A9Gzr&index=5&ab_channel=Jatin", // 🔗 👉 Watch the Demo on YouTube
        githubUrl: "https://github.com/jiyajahnavi/RAG-QnA-conv-app",
        image: "/projects/QnA.png",
      },
      {
        id: 2,
        title: "Hybrid RAG Chatbot - Pinecone + BM25",
        description: "Built a hybrid retrieval chatbot combining dense and sparse search with Groq LLaMA3 and LangChain for smart Q&A.",
        tags: ["Hybrid RAG", "Pinecone", "BM25", "Groq", "LangChain"],
        demoUrl: "https://www.youtube.com/watch?v=eW3zsVGYdKE&list=PLe-YIIlt-fbO3hXVoaPK56ikWRT0A9Gzr&index=7&ab_channel=Jatin",
        githubUrl: "https://github.com/jiyajahnavi/hybrid-search-pineconedb-app",
        image: "/projects/hybrid.png",
      },
      {
        id: 3,
        title: "Real-Time Web Chatbot - Tavily ",
        description: "Real-time search assistant using LangChain Agents, Tavily, and Groq for smart, tool-based answers via Streamlit UI.",
        tags: ["LangChain", "Tavily", "Groq", "Agents", "Streamlit"],
        demoUrl: "https://www.youtube.com/watch?v=G18bM5At4F0&ab_channel=Jatin",
        githubUrl: "https://github.com/jiyajahnavi/improved-search-engine-tavily",
        image: "/projects/tavily.png",
      },
      {
        id: 4,
        title: "YouTube & Website Summarizer - LangChain ",
        description: "Summarizes YouTube videos and web articles using LangChain summarize chains and Groq’s ultra-fast LLaMA3.",
        tags: ["LangChain", "Summarization", "Groq", "YouTube", "Streamlit"],
        demoUrl: "https://www.youtube.com/watch?v=z5Emuv6UMdc&list=PLe-YIIlt-fbO3hXVoaPK56ikWRT0A9Gzr&index=1&ab_channel=Jatin",
        githubUrl: "https://github.com/jiyajahnavi/website-yt-summarizer-langchain",
        image: "/projects/yt.png",
      },
      {
        id: 5,
        title: "Math Solver + Wiki Assistant ",
        description: "Interactive app to solve math problems and search Wikipedia using LLMMathChain and Groq’s Gemma model.",
        tags: ["LangChain", "MathChain", "Groq", "Wikipedia", "Streamlit"],
        demoUrl: "https://www.youtube.com/watch?v=Xqx2_xOhdn8&list=PLe-YIIlt-fbO3hXVoaPK56ikWRT0A9Gzr&index=8&ab_channel=Jatin",
        githubUrl: "https://github.com/jiyajahnavi/math-problem-genai-app",
        image: "/projects/math.png",
      },
      {
        id: 6,
        title: "Website Summarizer - Hugging Face",
        description: "Summarizes any webpage using LangChain and Mistral-7B via Hugging Face. Fast, clean, and built with Streamlit.",
        tags: ["LangChain", "Hugging Face", "Summarization", "GenAI"],
        demoUrl: "https://www.youtube.com/watch?v=tcF__KTex-s&list=PLe-YIIlt-fbO3hXVoaPK56ikWRT0A9Gzr&index=2&ab_channel=Jatin",
        githubUrl: "https://github.com/jiyajahnavi/summarizer-hugging-face-langchain",
        image: "/projects/fast.png",
      },
    ],

  AgenticAI: [
      {
        id: 1,
        title: "AI Story Builder – Agentic Creativity with LangGraph & Together AI",
        description: "Agentic storytelling app that generates, enhances, and twists narratives using LangGraph and Llama3.",
        tags: ["LangGraph", "Together AI", "Llama3"],
        demoUrl: "https://www.youtube.com/watch?v=xJoe-GfQHzA&list=PLe-YIIlt-fbNajMvdZoBUdjZNbmLOMJSU&index=4&ab_channel=Jatin",
        githubUrl: "https://github.com/jiyajahnavi/AI-agent-Story-builder-together-ai",
        image: "/projects/story.png",
      },
      {
        id: 2,
        title: "AI Report Generator using LangGraph + Llama3",
        description: "Generates structured reports using agentic workflows and parallel AI writing agents.",
        tags: ["LangGraph", "Groq", "LangChain", "Streamlit"],
        demoUrl: "https://www.youtube.com/watch?v=B3IQRdgbdDM&list=PLe-YIIlt-fbNajMvdZoBUdjZNbmLOMJSU&index=2&ab_channel=Jatin",
        githubUrl: "https://github.com/jiyajahnavi/Report-generator-agent",
        image: "/projects/report.png",
      },
      {
        id: 3,
        title: "LangGraph Blog Generator API with Translation",
        description: "Blog generator API with SEO, markdown, and multi-language support using LangGraph.",
        tags: ["LangGraph", "Groq", "FastAPI", "Translation"],
        demoUrl: "https://www.youtube.com/watch?v=YsCMANRUcGI&list=PLe-YIIlt-fbNajMvdZoBUdjZNbmLOMJSU&ab_channel=Jatin",
        githubUrl: "https://github.com/jiyajahnavi/blog-generator-agent",
        image: "/projects/blog.png",
      },
      {
        id: 4,
        title: "LangGraph Agentic Chatbot – Multi-Mode Conversational Agent",
        description: "Versatile chatbot with basic, web search, and AI news modes via agentic flow.",
        tags: ["LangGraph", "Groq", "Tavily", "Streamlit"],
        demoUrl: "https://www.youtube.com/watch?v=YsCMANRUcGI&list=PLe-YIIlt-fbNajMvdZoBUdjZNbmLOMJSU&index=1&ab_channel=Jatin",
        githubUrl: "https://github.com/jiyajahnavi/agentic-chatbot",
        image: "/projects/agent.png",
      },
    ],


};

const tabInfo = [
  { key: "VijayiWFH", label: "Python", icon: <Workflow size={16} /> },
  { key: "RMgX", label: "Web Development", icon: <Bot size={16} /> },
  
];

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("RMgX");

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          Work <span className="text-primary">Showcase</span>
        </motion.h2>

        {/* Tab Buttons with Icons */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {tabInfo.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-full border flex items-center gap-2 ${
                activeTab === tab.key
                  ? "bg-primary text-white"
                  : "bg-muted text-foreground hover:bg-accent"
              } transition`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categorizedProjects[activeTab].map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Link size={22} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Github size={22} />
                  </a>
                )}
              </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Aesthetic Laptop Image (Updated) */}
       

        {/* GitHub & YouTube Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-16 space-y-4"
        >
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/jiyajahnavi"
          >
            <Github size={16} /> Explore My GitHub <ArrowRight size={16} />
          </a>

          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://www.linkedin.com/in/jiya-jahnavi/"
          >
            <Linkedin size={16} /> Explore My Linkedin <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};