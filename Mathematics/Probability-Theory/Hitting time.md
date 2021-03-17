**Hitting time** for [[Markov chain]] $X_n$ with states $S$ for some subset $A \subset S$ is [[random variable]]

\begin{equation}
T_A = \min \\{ n \geqslant 0 : X_n \in A\\}, \label{eq:hitting-time}
\end{equation}

which is the first time I hit a state in $A$.

$$
\Pr \\{ T_A < T_B  \mid X_0 = i\\} = \sum_j p_{ij} \Pr \\{ T_A < T_B \mid X_0 = j\\} \forall i \not\in A \cup B.
$$

# First Step Equations

The distribution in Equation \ref{eq:hitting-time} is hard to compute. We can try to find the [[expected value]].

\begin{align}
t_i &= \mathbb{E}(T_A \mid X_0 = i) \\\\
&= \begin{cases} 1 + \sum_{j \in S} p_{ij}\mathbb{E}(T_A \mid X_0 = j) & i \not\in A \\\\   0 & i \in A\end{cases} \\\\
&= \begin{cases} 1 + \sum_{j \in S} p_{ij}t_j & i \not\in A \\\\ 0 & i \in A\end{cases}
\end{align}