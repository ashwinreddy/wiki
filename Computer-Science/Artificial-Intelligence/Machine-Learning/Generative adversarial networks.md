---
bibliography: "Computer-Science/Artificial-Intelligence/Machine-Learning/papers.bib"
---

**Generative adversarial networks (GANs)** are algorithms that can synthesize examples from given data, introduced in @goodfellow2014generative. We have a [[generative model]] $G$ and a discriminative model $D$ in a two player game. $D$'s job is to estimate the probability that a sample came from the training data and not $G$ while $G$ wants to force $D$ to make a mistake.

---