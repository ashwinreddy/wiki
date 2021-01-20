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

3. Suppose you have countable events $A_1, A_2, \dots \in \mathcal{F}$ and they are mutually exclusive, i.e. $A_i \cap A_j = \emptyset$ for $i \neq j$. Then,

$$
\mathbb{P}\left(\bigcup_{i \geqslant 1} A_i \right) = \sum_{i \geqslant 1} \mathbb{P}(A_i).
$$

We say countable because you can imagine sampling a [[real number]] on the interval $[0, 1]$. The real numbers are an uncountable set, but distinct numbers, as samples, are mutually exclusive events. However, sampling any given number has probability 0. So,

$$
1 = \mathbb{P}\big ( [0, 1] \big ) \neq \sum_{x \in [0,1 ]} \mathbb{P}\big( \\{x\\} \big) = 0
$$

# Consequences

* If $\Omega$ is countable with each $\omega \in \Omega$ being an event,

$$
\sum_{\omega \in \Omega} \mathbb{P}(\omega) = 1.
$$

* $1 \overset{\text{Axiom 2}}{=} \mathbb{P}(\Omega) = \mathbb{P}(A \cup A^c) \overset{\text{Axiom 3}}{=} \mathbb{P}(A) + \mathbb{P}(A^c) \implies \boxed{\mathbb{P}(A^c) = 1 - \mathbb{P}(A)}$

*  $P(A \cup B) = P(A) + P(B) - P(A \cap B)$

The proof goes

\begin{align\*}
P(A \cup B) &\overset{\text{Axiom 3}}{=} P \big(A \setminus (A \cap B) \big ) + P(B) \\\\
&\overset{\text{Axiom 3}}{=} P(A) - P(A \cap B) + P(B)
\end{align\*}