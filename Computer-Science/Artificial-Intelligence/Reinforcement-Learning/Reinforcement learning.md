In **reinforcement learning**, we have an agent in an environment looking to maximize reward.

[[https://spinningup.openai.com/en/latest/_images/rl_diagram_transparent_bg.png|align=center]]

$$
J(\pi) = \mathbb{E}\_{\tau \sim p_\pi(\tau)}\left[ \sum_{t=0}^H \gamma^t r(s_t, a_t) \right]
$$