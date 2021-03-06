**Maximum entropy (MaxEnt) reinforcement learning (RL)** is [[reinforcement learning]] with the additional objective of maximizing [[policy]] [[entropy]]. Our goal is to find the policy $\pi$ that

$$
\arg\max J(\pi), \quad J(\pi) = \mathbb{E}\left[ \sum_t r(s_t, a_t) + \alpha \mathcal{H}\left( \pi(\cdot \mid s_t) \right) \right]
$$
