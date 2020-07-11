The **Bellman equation** in a reinforcement learning context, which gives a recursive relationship for [[action-value function]] $Q$ and [[value function]] $V$:

\begin{equation}
V^\pi(s) = \mathbb{E}\left[ r(s, a) + \gamma V^\pi(s') \right]
\end{equation}