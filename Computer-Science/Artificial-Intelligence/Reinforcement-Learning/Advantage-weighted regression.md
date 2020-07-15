---
bibliography: './Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib'
---

**Advantage-weighted regression** [@peng2019advantageweighted] is an [[off-policy reinforcement learning]] algorithm. In each iteration, we sample trajectories and put them into a replay buffer $\mathcal{D}$. Then we use $\mathcal{D}$ to fit a [[value function]] $V^\mathcal{D}$, and then use it to compute [[advantages|advantage function]] $A^\mathcal{D}$, which we use for the supervised learning task of matching actions weighted by the likelihood of taking actions in the buffer.

$$
\mathbb{E}_{s, a\sim \mathcal{D}}\left[ \log \pi(a \mid s) \exp\left(\frac{1}{\lambda}A^\mathcal{D}(s, a)\right) \right]
$$

# Algorithm

1. Sample trajectories and put them into $\mathcal{D}$
2. Fit value function.
3. Update policy.
4. Repeat.

---