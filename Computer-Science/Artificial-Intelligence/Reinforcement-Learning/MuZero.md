---
bibliography: "./Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---

**MuZero** is an algorithm to learn a model introduced in @schrittwieser2020mastering.

The model is $\mu_\theta$ (parameterized by $\theta$)

$$
p_t^k \approx \pi (a_{t+k+1} \mid o_1 , \dots, o_t, a_{t+1}, \dots, a_{t+k})
$$

---