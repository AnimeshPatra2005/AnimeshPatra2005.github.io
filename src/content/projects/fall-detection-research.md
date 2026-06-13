---
title: "Contrastive Learning for Pre-Impact Fall Detection"
tags: ["Research", "Semi-Supervised", "Time Series", "Working On"]
thumbnail: "/images/tinylm.jpg"
summary: "Ongoing research at BIT Mesra targeting better F1-scores than Semi-PFD (Yu et al. 2024) at low labeled data ratios on KFall and SisFall datasets using contrastive learning."
video: null
---
## The Problem
Pre-impact fall detection algorithms need large amounts of labeled fall data to train effectively. Collecting and labeling real fall data from older individuals is expensive, dangerous, and time-consuming.

The current state-of-the-art semi-supervised approach (Semi-PFD, Yu et al. 2024, Engineering Applications of AI) achieves 2-4% F1-score improvements over supervised baselines at low labeled data ratios (≤23.1%) using a GAN-based architecture.

## The Approach
Investigating whether contrastive learning can outperform the Semi-PFD baseline at the same low data ratios on KFall and SisFall datasets — reducing dependency on labeled fall data without the instability of GAN-based training.

Benchmarking against Semi-PFD's reported F1-scores at 7.7%, 15.4%, and 23.1% fall data ratios.

## Status
In progress. Under faculty supervision at BIT Mesra (Dept. of AI & ML). Full implementation conducted independently.
