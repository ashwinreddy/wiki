---
bibliography: './Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib'
---

**Advantage-weighted regression** [@peng2019advantageweighted] is an [[off-policy reinforcement learning]] algorithm.

$$
\pi_{k+1} \leftarrow \arg\max_\pi \mathbb{E}_{s, a\sim \mathcal{D}}\left[ \log \pi(a \mid s) \exp\left(\frac{1}{\lambda}A^\mathcal{D}(s, a)\right) \right]
$$

---