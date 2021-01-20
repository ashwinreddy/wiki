The **Kolmogorov axioms** constrain a [[probability space]].

# Axioms


1. Probabilities are non-negative.

$$
\forall A \in \mathcal{F}: P(A) \geqslant 0.
$$

2. Probabilities sum to unity.

$$
P(\Omega) = 1.
$$

3. Suppose you have events $A_1, A_2, \dots \in \mathcal{F}$ and they are mutually exclusive, i.e. $A_i \cap A_j = \emptyset$ for $i \neq j$. Then,

$$
P\left(\bigcup_{i \geqslant 1} A_i \right) = \sum_{i \geqslant 1} P(A_i).
$$

