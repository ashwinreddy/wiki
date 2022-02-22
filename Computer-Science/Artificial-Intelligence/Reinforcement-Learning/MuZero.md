---
bibliography: "./Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---

**MuZero** is an algorithm to learn a model introduced in @schrittwieser2020mastering.

The model is $\mu_\theta$ (parameterized by $\theta$). We make three predictions at timestep $t$

$$
p_t^k \approx \pi (a_{t+k+1} \mid o_1 , \dots, o_t, a_{t+1}, \dots, a_{t+k})
$$

$$
v_t^k \approx \mathbb{E}\left[ u_{t+k+1} + \gamma u_{t+k+2} + \dots \mid o_1, \dots, o_t, a_{t+1}, \dots, a_{t+k} \right]
$$

---