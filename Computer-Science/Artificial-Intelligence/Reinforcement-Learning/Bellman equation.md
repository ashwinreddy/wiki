The **Bellman equation** in a reinforcement learning context, which gives a recursive relationship for [[action-value function]] $Q$ and [[value function]] $V$:

\begin{equation}
V^\pi(s) = \mathbb{E}\left[ r(s, a) + \gamma V^\pi(s') \right]
\end{equation}

\begin{equation}
Q^\pi(s, a) = \mathbb{E}_{s' \sim \Pr(s' \mid s, a) }\left[ r_0 + \gamma V^\pi\left(s'\right) \right]
\end{equation}

We can define the Bellman operator $\mathcal{B}$ on Q-functions.

$$
\left[\mathcal{B}^\pi Q\right] (s, a)
$$