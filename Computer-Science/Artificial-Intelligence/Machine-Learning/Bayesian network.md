A **Bayesian network** (**Bayes net**) is a [[directed acyclic graph]] of nodes, one per variable $X$ and a conditional distribution $P(X\mid A_1, \dots A_n)$ where $A_i$ is the $i$th parent of $X$, stored as a **conditional probability table** (CPT). Then,

$$
P(X_1, \dots X_n) = \prod_{i=1}^n P(X_i \mid \operatorname{\mathsf{parents}}\left(X_i\right))
$$

# Inference By Enumeration

Given a [[joint probability distribution]], one can compute any desired probability distribution $P(Q_1 \dots Q_k \mid e_1 \dots e_k)$ off of it.

- **Query variables** $Q_i$
- **Evidence variables** $e_i$
- **Hidden variables**, which are in the joint but not the desired

1. Collect rows consistent with evidence
2. Sum out hidden variables
3. Normalize

But this needs a table of size $d^n$ for $d$ possible values of $n$ variables.
