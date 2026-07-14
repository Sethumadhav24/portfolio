import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate AI/ML Engineer with 2 years of experience building practical AI solutions across Generative AI, LLMs, RAG, Computer Vision, and Edge AI. I specialize in developing, fine-tuning, and deploying AI models on both cloud and edge platforms, with a strong focus on performance and efficiency. I have a proven track record of taking projects from research and prototyping to production, delivering scalable and reliable AI systems with low latency and high usability.`;

export const ABOUT_TEXT = `I am a dedicated AI/ML Engineer focused on building high-performance AI systems spanning Generative AI, LLMs, and Computer Vision. I excel at optimizing complex architectures for resource-constrained edge hardware, deploying on-device LLMs (Microsoft Phi, TinyLlama), and building production-grade offline RAG systems. My background includes end-to-end MLOps pipelines (using AWS SageMaker and Bedrock) and C++/Python computer vision stacks. I graduated with a Bachelor of Technology in Electronics and Communication Engineering from Gokaraju Rangaraju Institute of Engineering & Technology (GRIET) in 2024.`;

export const EXPERIENCES = [
  {
    year: "September 2024 - Present",
    role: "AI / ML Engineer",
    company: "Vintillix Global Innovation Private Limited",
    description: [
      "Deployed optimized CNN models for face recognition, object detection, tracking, and segmentation (YOLOv8/SSD) across edge devices, maintaining 80%+ mAP accuracy under strict CPU/RAM constraints with no GPU dependency.",
      "Engineered real-time computer vision pipelines in C++ and Python on Raspberry Pi, reducing inference latency by 80%+ through hardware model compression using ONNX, NCNN, TensorRT, and Apache TVM frameworks.",
      "Built an autonomous indoor navigation stack using Raspberry Pi and monocular USB camera, implementing visual odometry, obstacle avoidance, and path planning achieving 70%+ reliability in dynamic indoor environments.",
      "Engineered and optimized a low-latency LLM inference server using Llama.cpp, FastAPI, RAG, and MongoDB-based memory, reducing response latency by 75%.",
      "Architected the end-to-end EduBot platform, enabling communication between backend services, mobile applications, and embedded microcontrollers for real-time AI interactions.",
      "Quantized and deployed the Microsoft Phi language model on a 4-core Raspberry Pi, reducing inference latency from 60s to 4–6s (90% performance boost) via quantization, pruning, and knowledge distillation.",
      "Designed offline RAG pipelines using FAISS vector indexing, LangGraph orchestration, and conversation-aware caching, cutting query response to under 2s with zero internet dependency.",
      "Managed GPU-based model training and serving across SageMaker, Bedrock, EC2, and S3 via Docker and CI/CD pipelines, supporting reproducible deployments with 90%+ pipeline success rate."
    ],
    technologies: ["Python", "C++", "PyTorch", "Llama.cpp", "FastAPI", "RAG", "LangGraph", "ONNX", "NCNN", "OpenVINO", "Raspberry Pi", "ROS2", "AWS SageMaker", "Docker"],
  },
  {
    year: "July - September 2024",
    role: "Software Developer",
    company: "QuantumEco",
    description: [
      "Developed scalable Java/Spring Boot microservices with multithreading, OAuth2/JWT security, Docker/Kubernetes deployment, and CI/CD pipelines on AWS event-driven architecture."
    ],
    technologies: ["Java", "Spring Boot", "OAuth2/JWT", "Docker", "Kubernetes", "AWS", "CI/CD"],
  },
];

export const PROJECTS = [
  {
    title: "Tiny Language Model | Build Language Model from Scratch",
    image: project1,
    link: "https://github.com/Sethumadhav24/Biometric-Attendance",
    description: "Designed and pretrained a compact educational LLM for children's learning applications using AWS SageMaker (p3 GPUs) and synthetic data from Bedrock. Fine-tuned the model via SFT on g4dn.xlarge instances to enhance conversational consistency and educational relevance.",
    technologies: ["LLM", "AWS SageMaker", "Amazon Bedrock", "SFT", "Python"],
  },
  {
    title: "Child-Adaptive Educational AI Assistant (LLM + RAG)",
    image: project2,
    link: "https://github.com/Sethumadhav24/neurological-recovery-deep-learning",
    description: "Fine-tuned an open-source LLM using GRPO on custom robot-child interaction data. Built a localized educational RAG pipeline using FAISS and LangChain to deliver safe, curriculum-aligned, and age-appropriate responses on edge hardware.",
    technologies: ["LLM", "GRPO", "RAG", "FAISS", "LangChain"],
  },
  {
    title: "Face Recognition System",
    image: project3,
    link: "https://github.com/Sethumadhav24/Biometric-Attendance",
    description: "Deployed a real-time face detection, recognition, and tracking pipeline on Raspberry Pi. Achieved 20+ FPS tracking using Kalman filtering, custom feature extraction, and PID control loops on humanoid servo heads.",
    technologies: ["OpenCV", "ONNX", "INT8 Quantization", "Kalman Filter", "PID Controller", "Raspberry Pi"],
  },
  {
    title: "Visual Navigation - Monocular Camera",
    image: project4,
    link: "https://github.com/Sethumadhav24/neurological-recovery-deep-learning",
    description: "Implemented monocular camera-based autonomous indoor navigation (obstacle avoidance and path planning) using visual odometry, Kalman filters, and dead reckoning without LiDAR sensors (8-10 FPS at sub-300ms latency).",
    technologies: ["Monocular Camera", "OpenCV", "Visual Odometry", "Path Planning", "C++"],
  },
  {
    title: "Object Detection & Recognition",
    image: project1,
    link: "https://github.com/Sethumadhav24/Biometric-Attendance",
    description: "Built a multi-class real-time object detection pipeline using MobileNetV2/YOLO + SSD compiled with Apache TVM, achieving 15+ FPS on Raspberry Pi 4 for obstacle avoidance navigation.",
    technologies: ["YOLOv8", "SSD", "Apache TVM", "ROS2", "Raspberry Pi"],
  },
  {
    title: "Gesture & Pose Recognition",
    image: project2,
    link: "https://github.com/Sethumadhav24/Biometric-Attendance",
    description: "Developed custom full-body pose estimation and gesture classification models utilizing MediaPipe, PyTorch, and NCNN. Engineered a touchless robot control interface with sub-500ms end-to-end latency.",
    technologies: ["MediaPipe", "PyTorch", "ONNX Runtime", "NCNN"],
  },
];

export const CONTACT = {
  address: "Hyderabad, India",
  phoneNo: "+91-6303062156",
  email: "sethumadhav2467@gmail.com"
};


