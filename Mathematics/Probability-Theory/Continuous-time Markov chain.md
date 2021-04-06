A **continuous-time Markov chain (CTMC)** is a [[Markov chain]] where transitions occur according to an [[exponential distribution]]. It is made up of

1. Set of states $\mathcal{X}$ with an initial distribution over $\mathcal{X}$
2. A **rate matrix** $Q \in \mathbb{R}^{ |\mathcal{X}| \times |\mathcal{X}| }$ such that $Q(i,j) \geqslant 0$ for $i \neq j$ and $\sum_j Q(i, j) = 0$. This implies $Q(i,i) = -\sum_{j \neq i}Q(i, j)$.

The CTMC evolves by 

* Drawing proposed jump times $\tau_1 \sim \mathsf{Exp}(\lambda), \tau_2 \sim \mathsf{Exp}(\lambda_2), \dots, \tau_n \sim \mathsf{Exp}(\lambda_n)$ and jump to the state that comes up first. 
* Draw a jump time $\tau \sim \mathsf{Exp}\left(\sum_{i=1}^n \lambda_i\right)$ and then jump to distribution $\Pr(X_j = k) = { \lambda_k \over \sum_{i=1}^n \lambda_i}$.

# Stationary Distribution

A probability vector $\pi$ is a [[stationary distribution]] for a CTMC with rate matrix $Q$ if 

$$
\pi Q = 0. \tag{Rate Conservation Principle}
$$

# Jump Chain

The jump chain captures the sequence if we ignore holding time.

Transition probabilities

\begin{gather}
P(i, i) = 0. \\\\
P(i, j) = \frac{Q(i, j)}{q_i}.
\end{gather}

# Classifications

We write $i \leftrightarrow j$ if they're connected in the jump chain.

# Big Theorem

For an irreducible CTMC, exactly one of the following is true:

1. All states transient or null-recurrent. No stationary distribution exists, and $$\lim_{t\to\infty}P_{ij}^t = 0$$ and $\forall i, j \in S$.
2. All states positive recurrent. Unique stationary distribution exists and satisfies $\forall i, j \in S$: $$\pi_j = \frac{1}{m_j q_j} = \lim_{t\to\infty}P_{ij}^t$$