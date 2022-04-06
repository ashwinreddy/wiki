The **Bellman equation** in a reinforcement learning context, which gives a [[recursion]] relationship for [[Q function]] and [[value function]] $V$ for [[policy]] $\pi$:

\begin{equation}
V^\pi(s) = \mathbb{E}\left[ r(s, a) + \gamma V^\pi(s') \right]
\end{equation}

\begin{equation}
Q^\pi(s, a) = \mathbb{E}_{s' \sim \Pr(s' \mid s, a) }\left[ r(s,a) + \gamma V^\pi\left(s'\right) \right]
\end{equation}

# Bellman operator

We can define the Bellman operator $\mathcal{B}$ on Q-functions.

$$
\left[\mathcal{B}^\pi Q\right] (s, a) = \mathbb{E}_{s' \sim \Pr(s' \mid s, a) }\left[ r_0 + \gamma V^\pi\left(s'\right) \right]
$$

If we repeatedly apply $\mathcal{B}$ to an initial $Q$, the result will converge to $Q^\pi$.
