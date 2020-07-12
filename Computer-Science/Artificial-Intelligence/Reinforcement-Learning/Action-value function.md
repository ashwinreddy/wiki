The **action-value function** or **Q-function** $Q(s, a)$ for a [[Markov decision process]] is the expected return after taking action $a$ in state $s$. It is related to the [[value function]].

\begin{equation}
Q^\pi(s, a) = \mathbb{E}_{\tau \sim \pi}\left[R(\tau) \mid s_0 = s, a_0 = a\right]
\end{equation}

If you have the optimal $Q^\star$, then optimal actions $a^\star(s)$ are given by

$$
a^\star(s) = \arg\max_a Q^\star(s, a)
$$