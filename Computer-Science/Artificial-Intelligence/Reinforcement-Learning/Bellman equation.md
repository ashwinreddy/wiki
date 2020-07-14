The **Bellman equation** in a reinforcement learning context, which gives a recursive relationship for [[action-value function]] $Q$ and [[value function]] $V$:

\begin{equation}
V^\pi(s) = \mathbb{E}\left[ r(s, a) + \gamma V^\pi(s') \right]
\end{equation}

\begin{equation}
Q^\pi(s, a) = \mathbb{E}_{s_1 \sim \Pr(s_1 \mid s_0, a_0) }\left[ r_0 + \gamma V^\pi(s_1) \right]
\end{equation}