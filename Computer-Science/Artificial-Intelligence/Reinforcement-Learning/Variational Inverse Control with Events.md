---
bibliography: "Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---

**Variational Inverse Control with Events (VICE)** is an [[algorithm]], introduced in @fu2018variational that builds on inverse reinforcement learning to more limited forms of expert supervision, for example just showing desired goal states. It does so using the [[control as inference]] perspective.


1. Classifier training learns parameters to the PGM.
2. Inferring the optimal actions results in policy optimization.

# Algorithm

1. Obtain examples of expert states and actions $s_i^E$, $a_i^E$
2. Initialize policy $\pi$ and binary discriminator $D_\theta$
3. Repeat $N$ times
    1. Sample rollouts of $\pi$
    2. Train $D_\theta$ via [[logistic regression]] to classify expert data from samples
    3. Update $\pi$ with respect to $p_\theta$ using the appropriate inference objective.

---