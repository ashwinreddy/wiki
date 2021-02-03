The **action-value function** or **state-action value function** or **Q-function** for a [[Markov decision process]] is the expected return as [[function]] of following policy $\pi$ after taking action $a$ in state $s$. 

$$
Q^\pi: \mathcal{S} \times \mathcal{A} \to \mathbb{R}
$$

\begin{equation}
Q^\pi(s, a) = \mathop{\mathbb{E}}_{\tau \sim \pi}\left[R(\tau) \mid s_0 = s, a_0 = a\right]
\end{equation}


The [[Bellman equation]] gives us a recursive relationship for the Q-function.


If you have the optimal $Q^\star$, then optimal actions $a^\star(s)$ are given by

$$
a^\star(s) = \arg\max_a Q^\star(s, a)
$$