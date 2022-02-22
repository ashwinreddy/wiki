---
bibliography: "./Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib"
---

**MuZero** is an algorithm to learn a model introduced in @schrittwieser2020mastering.

The model is $\mu_\theta$ (parameterized by $\theta$). It receives observations $o_1, \dots, o_t$ and when $k > 0$, future actions $a_{t+1}, \dots, a_{t+k}$. We make three predictions at timestep $t$ for $k$ from $0$ to $K$ steps:

* Policy $p_t^k \approx \pi (a_{t+k+1} \mid o_1 , \dots, o_t, a_{t+1}, \dots, a_{t+k})$
* Value function $v_t^k \approx \mathbb{E}\left[ u_{t+k+1} + \gamma u_{t+k+2} + \dots \mid o_1, \dots, o_t, a_{t+1}, \dots, a_{t+k} \right]$
* Immediate reward $r_t^k \approx u_{t+k}$


We have a recurrent **dynamics function** $g_\theta$ that computes at hypothetical step $k$ an immediate reward $r^k$ and internal state $s^k$.

$$
r^k, s^k = g_\theta \left(s^{k-1}, a^k\right)
$$

We have a **prediction function** $f_\theta$ to compute the policy and value functions from internal state $s^k$:

$$
p^k, v^k = f_\theta(s^k)
$$

---