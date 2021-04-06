A **continuous-time Markov chain (CTMC)** is a [[Markov chain]] where transitions occur according to an [[exponential distribution]]. 

[[_TOC_]]

# Technical Construction

It is made up of

1. Set of states $\mathcal{X}$ with an initial distribution over $\mathcal{X}$
2. A **rate matrix** $Q \in \mathbb{R}^{ |\mathcal{X}| \times |\mathcal{X}| }$ such that $Q(i,j) \geqslant 0$ for $i \neq j$ and $\sum_j Q(i, j) = 0$. This implies $Q(i,i) = -\sum_{j \neq i}Q(i, j)$.

The CTMC evolves by 

* Drawing proposed jump times $\tau_1 \sim \mathsf{Exp}(\lambda), \tau_2 \sim \mathsf{Exp}(\lambda_2), \dots, \tau_n \sim \mathsf{Exp}(\lambda_n)$ and jump to the state that comes up first. 
* Draw a jump time $\tau \sim \mathsf{Exp}\left(\sum_{i=1}^n \lambda_i\right)$ and then jump to distribution $\Pr(X_j = k) = { \lambda_k \over \sum_{i=1}^n \lambda_i}$.

# Stationary Distribution

A probability vector $\pi$ is a [[stationary distribution]] for a CTMC with rate matrix $Q$ if 

\begin{align}
\pi Q = \vec{0} \iff \forall j: \sum_{k} \pi_k Q_{kj} = 0 \tag{Rate Conservation Principle} \\\\
\sum_i \pi_i = 1
\end{align}

$$
\pi_j q_{j} = \sum_{i \in \mathcal{X}} \pi_i q_{ij}
$$

# Detailed Balance

\begin{equation}
\pi_i q_{ij} = \pi_j q_{ji} \tag{Detailed Balance Equations}
\end{equation}

# Jump Chain

The jump chain captures the sequence if we ignore holding time. It is a [[discrete-time markov chain]] with no self-loops whose transition probabilities are given as

\begin{gather}
P(i, i) = 0 \tag{No self-loops} \\\\
P(i, j) = \frac{Q(i, j)}{q_i}.
\end{gather}

$$
q_i = -Q(i, i)
$$

We can convert the jump chain stationary distribution to CTMC stationary distribution. If you include the appropriate normalization constant,

\begin{equation}
\pi_{\mathsf{CTMC}}(x) \propto \frac{1}{Q(x)} \pi_{\mathsf{jump}}(x) \tag{Jump to CTMC Stationary}
\end{equation}

where $Q(x)$ is the sum of rates leaving state $x$.

# Classifications

We write $i \leftrightarrow j$ if they're connected in the jump chain.

# Big Theorem

For an irreducible CTMC, exactly one of the following is true:

1. All states transient or null-recurrent. No stationary distribution exists, and $$\lim_{t\to\infty}P_{ij}^t = 0$$ and $\forall i, j \in S$.
2. All states positive recurrent. Unique stationary distribution exists and satisfies $\forall i, j \in S$: $$\pi_j = \frac{1}{m_j q_j} = \lim_{t\to\infty}P_{ij}^t$$