---
title: "Shift in Depression Stimulants — Indian Society"
tags: ["NLP", "Topic Modelling", "Dataset Curation", "Featured"]
thumbnail: "/images/spectra.jpg"
summary: "Self-scraped 17,000+ Reddit posts from Indian mental health communities, built a multilingual BERTopic pipeline on Hinglish text, and published the dataset publicly on Kaggle."
video: null
---
## The Problem
Depression research datasets are overwhelmingly Western and English-language. Indian depression discourse is code-switched (Hinglish), culturally specific, and almost entirely absent from public NLP benchmarks.

## The Solution
Scraped 17,000+ posts from Indian Reddit communities (r/OffMyChestIndia, r/india, r/IndiaSocial) using PRAW. Applied deproberta-large-depression for label filtering to ensure only depression-relevant posts were retained.

Built an end-to-end unsupervised NLP pipeline:
- **BGE-M3 multilingual embeddings** (1024D) — chosen specifically for Hinglish robustness over standard sentence-transformers
- **UMAP** dimensionality reduction (1024D → 15D)
- **BERTopic + HDBSCAN** clustering with a custom bilingual English/Hindi stop-word vocabulary and bigram n-grams

## The Results
Surfaced latent depression triggers specific to Indian society — financial stress, family pressure, academic burden, and relationship conflict — that were previously undocumented at this granularity in any public NLP dataset.

Dataset is publicly available on Kaggle with 17,000+ posts and growing.

## Links
- [Kaggle Dataset](https://www.kaggle.com/datasets/parthanimesh/reddit-posts-on-depression-in-indian-society)
