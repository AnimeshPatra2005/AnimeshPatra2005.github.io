---
title: "Multimodal Product Price Prediction"
tags: ["Multimodal ML", "Feature Engineering", "XGBoost"]
thumbnail: "/images/post_renderer.jpg"
summary: "Top 200 nationally in Amazon ML Challenge 2024. Built a multimodal pipeline combining SentenceTransformer text embeddings, image-based k-NN features, and XGBoost with Optuna tuning."
video: null
---
## The Problem
Product price prediction from e-commerce listings requires fusing heterogeneous signals — unstructured text descriptions, images, and structured attributes — into a single model.

## The Solution
Built a multimodal feature pipeline combining:
- **Structured features** (brand, pack size, weight, unit extracted via regex)
- **SentenceTransformer text embeddings** (all-mpnet-base-v2) for product descriptions
- **Image-based k-NN features** derived from product images

Engineered zero-shot product categorization across 19 classes by computing cosine similarity between product description embeddings and candidate label embeddings — no labelled training set required.

Ran systematic ablation experiments across 4 feature configurations to validate each modality's contribution. Tuned XGBoost with **Optuna over 60+ trials** using log-transformed target and SMAPE evaluation metric.

## The Results
- **Top 200 nationally** in Amazon ML Challenge 2024
- Ablation confirmed image k-NN + text embeddings as the optimal combination

## Links
- [Kaggle Notebook](https://www.kaggle.com/parthanimesh)
