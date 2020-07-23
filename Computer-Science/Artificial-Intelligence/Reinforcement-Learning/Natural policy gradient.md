---
bibliography: "Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---

@kakade2002natural proposes a natural policy gradient. Here, our job is to maximize the average undiscounted reward $\eta$ for a policy $\pi$ parameterized by $\theta$.

$$
\eta(\theta) = \sum_{s, a} \rho^\pi(s) \pi(a \mid s, \theta) R(s, a)
$$

---