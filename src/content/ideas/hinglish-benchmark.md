---
title: "A Proper NLP Benchmark for Hinglish Mental Health Text"
tags: ["NLP", "Research Idea"]
---
Most NLP mental health benchmarks (CLPsych, DAIC-WOZ) are English-only and Western-centric. The depression dataset I built for Indian Reddit communities is a start, but what's really needed is a proper benchmark with:

- Standardized train/test splits
- Multiple tasks (severity classification, trigger identification, crisis detection)
- Annotations from mental health professionals familiar with Indian cultural context
- Coverage of multiple Indian languages beyond Hindi-English mixing

The Hinglish code-switching problem is particularly interesting because standard multilingual models (even mBERT) struggle with intra-sentence language switching at the morpheme level. BGE-M3 handles it better but there's no rigorous evaluation framework to measure how much better.
