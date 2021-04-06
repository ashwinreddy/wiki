**Uniformization** creates a [[discrete-time markov chain]] that has the same [[stationary distribution]] $\pi$ as the [[continuous-time markov chain]].

For the CTMC, we know that $\pi$ satisfies 

$$
\pi Q = 0.
$$

We need a fixed rate $\gamma \geqslant \max_i |q_{ii}|$.

\begin{equation}
P \equiv I + \frac{1}{\gamma}Q
\end{equation}

This transition matrix forces that

$$
\pi P = \pi.
$$