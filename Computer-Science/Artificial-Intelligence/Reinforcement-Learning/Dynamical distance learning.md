---
bibliography: "./Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---

**Dyanmical distance learning (DDL)** is an method for learning a dynamics-aware embedding of a [[metric]] that can be used as a [[reward function]] for goal-reaching. There are two steps:

1. _Distance evaluation_: learn a policy-specific dynamical distance
2. _Policy improvement_: optimize policy to reach goal using distance function as negative reward.


Dynamical distance
: A function $d^\pi(s_i, s_j)$ representing the expected number of time steps for a policy $\pi$ to go from $s_i$ to $s_j$.

---