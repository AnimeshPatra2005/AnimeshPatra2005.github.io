---
title: "Why Contrastive Learning for Fall Detection"
tags: ["Research", "Learning"]
date: "June 2026"
snippet: "Notes on why contrastive learning is a better fit than GANs for pre-impact fall detection with limited labeled data."
---
## The Core Intuition
Semi-PFD (Yu et al. 2024) uses a GAN-based architecture — an LSTM AutoEncoder to generate fake samples, and a discriminator shared with the supervised classifier. The unsupervised signal comes from fooling the discriminator.

The problem: GAN training is inherently unstable. The adversarial objective creates conflicting gradients that require careful tuning of loss weights (wR and wF in the paper) and momentum parameters to converge.

Contrastive learning offers a cleaner alternative. Instead of generating fake samples and fooling a discriminator, we learn representations by pulling together samples from the same class and pushing apart samples from different classes — directly in embedding space.

## Why This Fits Fall Detection
The KFall and SisFall datasets have a specific structure that suits contrastive learning: the falling period is a short window within a longer ADL sequence. The model needs to learn that fall embeddings and ADL embeddings should be far apart in representation space — which is exactly what contrastive loss optimizes for.

## What We're Testing
Benchmarking against Semi-PFD's F1-scores at 7.7%, 15.4%, and 23.1% fall data ratios. If contrastive learning achieves comparable or better results with simpler, more stable training, it's a meaningful contribution.
