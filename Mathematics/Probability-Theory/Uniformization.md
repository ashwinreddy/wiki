**Uniformization** creates a [[discrete-time markov chain]] that has the same [[stationary distribution]] $\pi$ as the [[continuous-time markov chain]].

For the CTMC, we know that $\pi$ satisfies 

$$
\pi Q = 0.
$$

We need a fixed rate $\gamma \geqslant \max_i |q_{ii}|$ (i.e. the largest sum of outgoing rates of any state in the CTMC or larger).

\begin{equation}
P \equiv I + \frac{1}{\gamma}Q
\end{equation}

This transition matrix forces that

$$
\pi P = \pi.
$$