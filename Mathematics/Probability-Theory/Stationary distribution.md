A **stationary distribution** for a [[Markov chain]] is a row vector $\pi$ where

\begin{equation}
\label{eq:be}
\pi_j = \sum_{i \in \mathcal{X}} \pi_i P_{ij}. \tag{Balance Equations}
\end{equation}

\begin{equation}
\label{eq:dbe}
\pi_i P_{ij} = \pi_j P_{ji}. \tag{Detailed Balance Equations}
\end{equation}

Succinctly, we can write $\pi = \pi P$. Intuitively, here is what it means:

> Imagine a total mass of $\pi_j$ sits at state $j$, and when the Markov chain undergoes a transition, the total mass of $\pi_j$ leaves state $j$ and is divided among the neighbors of $j$ according to the transition probabilities. \ref{eq:be} express the _global_ condition that the total mass leaving state $j$ equals the sum of the mass entering $j$. On the other hand, \ref{eq:dbe} reflect a _local_ condition that the mass exchanged along eache edge $(i, j)$ is balanced; this is a _stronger_ condition than global balance.


# Existence and Uniqueness of Stationary Distributions

Let $X_n$ be an irreducible Markov chain. Exactly one of the following is true:

1. Either all states are transient or all are null-recurrent. A stationary distribution does not exist. $\lim_{n\to \infty} P_{ij}^n = 0.$
2. All states are positive recurrent. A unique stationary distribution $\pi$ exists with $$\pi_j = \lim_{n\to\infty} \frac{1}{n}\sum_{k=1}^n P_{ij}^k = \frac{1}{\mathbb{E}(T_j \mid X_0 = j)}.$$ Moreover, if it is aperiodic, then $\forall i, j \in S: \lim_{n \to\infty} P_{ij}^n = \pi_j.$

If finite state MC, only #2 is possible.