A **stationary distribution** for a [[Markov chain]] is a row vector $\pi$ where

\begin{equation}
\forall y \in \mathcal{X}: \pi(y) = \sum_{x \in \mathcal{X}} \pi(x) P(x,y) \tag{General Stationarity}
\end{equation}

Succinctly, we can write $\pi = \pi P$.

$$
\Pr \\{ X_1 = j \\} = \sum \Pr \\{ X_1 = j \mid X_0 = i \\} \Pr \\{ X_0 = i \\}.
$$


# Existence and Uniqueness of Stationary Distributions

Let $X_n$ be an irreducible Markov chain. Exactly one of the following is true:

1. Either all states are transient or all are null-recurrent. A stationary distribution does not exist. $\lim_{n\to \infty} P_{ij}^n = 0.$
2. All states are positive recurrent. A unique stationary distribution $\pi$ exists with $$\pi_j = \lim_{n\to\infty} \frac{1}{n}\sum_{k=1}^n P_{ij}^k = \frac{1}{\mathbb{E}(T_j \mid X_0 = j)}.$$ Moreover, if it is aperiodic, then $\forall i, j \in S: \lim_{n \to\infty} P_{ij}^n = \pi_j.$

If finite state MC, only #2 is possible.