Reinforcement learning tries to get computers to find their own behaviors through the use of rewards. A simple formulation of the goal of reinforcement learning is to find the policy $\pi$ which maximizes

$$
J(\pi) = \mathbb{E}\_{\tau \sim p_\pi(\tau)} \left[ \sum_{t=1}^T \gamma^t r(s_t, a_t) \right]
$$

# Algorithms

[[https://spinningup.openai.com/en/latest/_images/rl_algorithms_9_15.svg|height=200px,align=center]]