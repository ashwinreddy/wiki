The **Kolmogorov axioms** constrain a [[probability space]].

# First axiom

The first axiom says that probabilities are non-negative.

$$
\forall A \in \mathcal{F}: P(A) \geqslant 0.
$$

# Second axiom

The second axiom says that the probabilities sum to unity.

$$
P(\Omega) = 1.
$$

# Third axiom

Suppose you have events $A_1, A_2, \dots \in \mathcal{F}$ and they are mutually exclusive, i.e. $A_i \cap A_j = \emptyset$ for $i \neq j$. Then,

$$
P\left(\bigcup_{i \geqslant 1} A_i \right) = \sum_{i \geqslant 1} P(A_i).
$$

