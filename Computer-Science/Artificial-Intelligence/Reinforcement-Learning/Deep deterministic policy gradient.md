---
bibliography: 'Computer-Science/Artificial-Intelligence/Reinforcement-Learning/papers.bib'
---

**Deep deterministic policy gradient (DDPG)** [@lillicrap2015continuous] is an [[actor-critic]] [[algorithm]] with a deterministic policy $\mu$. The $Q$-function in this deterministic case is given by

$$
Q^\mu(s_t, a_t) = \mathbb{E}\_{r_t, s_{t+1} \sim E}\left[ r(s_t, a_t) + \gamma Q^\mu\big(s_{t+1}, \mu(s_{t+1})\big) \right]
$$


The Q-learning is done by mean squared Bellman error. The policy update/learning is simple gradient ascent with the Q-function.

$$
\arg\max_\theta \mathop{\mathbb{E}}_{s \sim \mathcal{D}}\left[ Q_\phi \left( s, \mu_\theta(s) \right) \right]
$$

# Algorithm

1. Initialize actor and critic.


---
