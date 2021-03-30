A **continuous-time Markov chain (CTMC)** is a random process where transitions occur according to an [[exponential distribution]]. It obeys [[Markov property]].

# Technical Construction

1. Set of states $\mathcal{X}$ with an initial distribution over $\mathcal{X}$
2. A **rate matrix** $Q \in \mathbb{R}^{ |\mathcal{X}| \times |\mathcal{X}| }$ such that $Q(i,j) \geqslant 0$ for $i \neq j$ (?) and $\sum_j Q(i, j) = 0$.