A **Bayesian network** (**Bayes net**)

# Motivation

Given a [[joint probability distribution]], one can compute any desired probability distribution $P(Q_1 \dots Q_k \mid e_1 \dots e_k)$ off of it.

- **Query variables** $Q_i$
- **Evidence variables** $e_i$
- **Hidden variables**, which are in the joint but not the desired

1. Collect rows consistent with evidence
2. Sum out hidden variables
3. Normalize

But this needs a table of size $d^n$ for $d$ possible values of $n$ variables.

# Formalization

A Bayes net is a [[directed acyclic graph]]