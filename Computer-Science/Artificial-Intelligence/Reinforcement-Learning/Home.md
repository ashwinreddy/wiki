Reinforcement learning tries to get computers to find their own behaviors through the use of rewards. A simple formulation of the goal of reinforcement learning is to find the policy $\pi$ which has

$$
\arg\max_\pi \mathbb{E}_\pi \left[ \sum_{t=1}^T r(s_t, a_t) \right]
$$