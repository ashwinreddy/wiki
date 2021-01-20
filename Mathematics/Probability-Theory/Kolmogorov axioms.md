The **Kolmogorov axioms** constrain a [[probability space]].

# Axioms


1. Probabilities are non-negative.

$$
\forall A \in \mathcal{F}: \mathbb{P}(A) \geqslant 0.
$$

2. Probabilities sum to unity.

$$
\mathbb{P}(\Omega) = 1.
$$

3. Suppose you have events $A_1, A_2, \dots \in \mathcal{F}$ and they are mutually exclusive, i.e. $A_i \cap A_j = \emptyset$ for $i \neq j$. Then,

$$
\mathbb{P}\left(\bigcup_{i \geqslant 1} A_i \right) = \sum_{i \geqslant 1} \mathbb{P}(A_i).
$$

# Consequences

* If $\Omega$ is countable with each $\omega \in \Omega$ being an event,

$$
\sum_{\omega \in \Omega} \mathbb{P}(\omega) = 1.
$$

* $$\mathbb{P}(A^c) = 1 - \mathbb{P}(A)$$
 
$$
1 = \mathbb{P}(\Omega) = \mathbb{P}(A \cup A^c) = \mathbb{P}(A) + \mathbb{P}(A^c)
$$

\begin{displaymath}
  T=\sum_{
    \mathclap{\substack{i_1,\ldots,i_n=1 \ j_1,\ldots,j_m=1}}}^d
    T_{j_1,\ldots,j_m}^{i_1,\ldots,i_n}
    E_{i_1,\ldots,i_n}^{j_1,\ldots,j_m}
\end{displaymath}