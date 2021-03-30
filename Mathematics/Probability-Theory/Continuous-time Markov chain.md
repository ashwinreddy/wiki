A **continuous-time Markov chain (CTMC)** is a random process where transitions occur according to an [[exponential distribution]]. It obeys [[Markov property]].

# Technical Construction

1. Set of states $\mathcal{X}$ with an initial distribution over $\mathcal{X}$
2. A **rate matrix** $Q \in \mathbb{R}^{ |\mathcal{X}| \times |\mathcal{X}| }$ such that $Q(i,j) \geqslant 0$ for $i \neq j$ (why?) and $\sum_j Q(i, j) = 0$. This implies $Q(i,i) = -\sum_{j \neq i}Q(i, j)$.

# Action

The CTMC evolves by 

* Draw proposed jump times $\tau_1 \sim \mathsf{Exp}(\lambda), \tau_2 \sim \mathsf{Exp}(\lambda_2), \dots, \tau_n \sim \mathsf{Exp}(\lambda)$ and jump to the state that comes up first. 

# Stationary Distribution

A probability vector $\pi$ is a [[stationary distribution]] for a CTMC with rate matrix $Q$ if 

$$
\pi Q = 0. \tag{Rate Conservation Principle}
$$

# Jump Chain

The jump chain captures the sequence if we ignore holding time.