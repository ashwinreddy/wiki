The **value function** for a [[Markov decision process]] is a [[function]] measures the value of a state by how much expected reward it will give under policy $\pi$.

$$
V: \mathcal{S} \to \RR
$$

\begin{equation}
V^\pi(s) = \mathbb{E}_{\tau \sim \pi}\left[R(\tau) \mid s_0 = s\right]
\end{equation}

It is the [[expected value]] of the [[Q function]].

\begin{equation}
V^\pi(s) = \mathbb{E}_{a \sim \pi}\left[ Q^\pi(s,a) \right]
\end{equation}