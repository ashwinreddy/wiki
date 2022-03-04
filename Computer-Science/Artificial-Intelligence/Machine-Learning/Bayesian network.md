A **Bayesian network** (**Bayes net**) is a [[directed acyclic graph]] of nodes, one per variable $X$ and a conditional distribution $P(X\mid A_1, \dots A_n)$ where $A_i$ is the $i$th parent of $X$, stored as a **conditional probability table** (CPT). Then,

\begin{equation}
P(X_1, \dots X_n) = \prod_{i=1}^n P(X_i \mid \operatorname{\mathsf{parents}}\left(X_i\right))
\end{equation}

1. Each node is [[conditionally independent|conditional independence]] of all its ancestor nodes in the graph, given all of its parents.
2. Each node is conditionally independent of all other variables given its Markov blanket (i.e. parents, children, children's other parents)


Inference
: Computing a desired probability distribution $P(Q_1 \dots Q_k \mid e_1 \dots e_k)$.

[[_TOC_]]

# Inference

## Inference By Enumeration

This is exact. Form the [[joint probability distribution]].

- **Query variables** $Q_i$
- **Evidence variables** $e_i$
- **Hidden variables**, which are in the joint but not the desired

1. Collect rows consistent with evidence
2. Sum out hidden variables
3. Normalize

But this needs a table of size $d^n$ for $d$ possible values of $n$ variables.

## Variable Elimination

This is exact. Eliminate hidden variables $X_i$ one by one

1. Join (multiply) all factors involving $X$
2. Sum over $X$

## Prior Sampling

This is approximate. Basically do a Monte Carlo run.

* For $i \in \\{1, \dots, n\\}$
    * Sample $X_i$ from $P(X_i \mid \mathsf{parents}(X_i))$
* Return $(x_1, \dots, x_n)$

## Rejection Sampling

Just do prior sampling but reject samples inconsistent with the evidence.

* Input: evidence $e_1, \dots, e_k$
* For $i \in \\{1, \dots, n\\}$
    * If $x_i$ is not consistent with evidence
        * Reject: Return and no sample is generated in this cycle
* Return $(x_1, \dots, x_n)$