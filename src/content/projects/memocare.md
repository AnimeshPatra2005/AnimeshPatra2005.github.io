---
title: "MemoCare — Alzheimer's Detection Platform"
tags: ["Python", "Computer Vision", "Ensemble Learning", "Featured"]
thumbnail: "/images/draftboard.jpg"
summary: "Dual-modality Alzheimer's detection: DenseNet-201 on MRI scans for 4-class dementia staging, plus a stacking ensemble on clinical data — deployed as a Flask web app with PDF report generation."
video: null
---
## The Problem
Early detection of Alzheimer's requires both imaging data (MRI scans) and clinical patient data. No existing lightweight tool combined both modalities into a single deployable diagnostic aid.

## The Solution
Built two independent ML pipelines tackling the same problem from different angles.

**MRI Pipeline:** Used frozen DenseNet-201 (ImageNet weights, top layer excluded) as a feature extractor over 12,072 augmented MRI scans across 4 dementia stages. Fed GlobalAveragePooled embeddings into a custom ANN classifier.

**Clinical Pipeline:** Built a proper stacking ensemble — Random Forest + Gradient Boosting as base learners, Logistic Regression as meta-learner — on clinical data from 2,149 patients covering demographic, lifestyle, cognitive, and symptom features.

Deployed both as a Flask web app with Jinja2 templates, MongoDB-backed hashed authentication, and automated PDF report generation via FPDF.

## The Results
- MRI model: **93.24% test accuracy**, Macro F1: 0.93 across all 4 dementia stages
- Clinical model: **95.81% accuracy**, Macro F1: 0.95 for binary Alzheimer's prediction
- Won 3rd place (Best AI Hack) at DreamHacks Hackathon 2025

## Links
- [GitHub Repository](https://github.com/AnimeshPatra2005/Alzheimer_Dementia_Diagnosis)
- [Demo Video](https://www.youtube.com/@AnimeshPatra)
