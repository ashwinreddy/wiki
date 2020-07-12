**Maximum entropy reinforcement learning** is reinforcement learning with the additional objective of maximizing policy [[entropy]].

$$
J(\pi) = \mathbb{E}\left[ \sum_t r(s_t, a_t) + \alpha \mathcal{H}\left( \pi(\cdot \mid s_t) \right) \right]
$$