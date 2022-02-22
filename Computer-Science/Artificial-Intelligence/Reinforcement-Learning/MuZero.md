---
bibliography: "./Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---

**MuZero** is an algorithm to learn a model introduced in @schrittwieser2020mastering.

The model is $\mu_\theta$ (parameterized by $\theta$). It receives observations $o_1, \dots, o_t$ and when $k > 0$, future actions $a_{t+1}, \dots, a_{t+k}$. We make three predictions at timestep $t$ for $k$ from $0$ to $K$ steps:

* Policy $p_t^k \approx \pi (a_{t+k+1} \mid o_1 , \dots, o_t, a_{t+1}, \dots, a_{t+k})$
* Value function $v_t^k \approx \mathbb{E}\left[ u_{t+k+1} + \gamma u_{t+k+2} + \dots \mid o_1, \dots, o_t, a_{t+1}, \dots, a_{t+k} \right]$
* Immediate reward $r_t^k \approx u_{t+k}$

---