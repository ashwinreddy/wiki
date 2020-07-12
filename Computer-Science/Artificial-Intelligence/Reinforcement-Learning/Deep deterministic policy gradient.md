---
bibliography: 'Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib'
---

**Deep deterministic policy gradient (DDPG)** [@lillicrap2015continuous] is an [[actor-critic]] algorithm with a deterministic policy $\mu$. The Q-learning is done by mean squared Bellman error. The policy update/learning is simple gradient ascent with the Q-function.

$$
\arg\max_\theta \mathop{\mathbb{E}}_{s \sim \mathcal{D}}\left[ Q_\phi(s, \mu_\theta(s)) \right]
$$


---
