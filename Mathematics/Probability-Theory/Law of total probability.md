The **law of total probability** provides a way to compute the probability of an event when a set of mutually disjoint, collectively exhaustive set of events is available.

> Suppose disjoint events $A_1, A_2, \dots$ partition $\Omega$. Then, for any event B, $$\mathbb{P}(B) = \sum_{i \geqslant 1} \mathbb{P}(B \cap A_i).$$

The events must satisfy

$$
\bigcup_{i \geqslant 1} A_i = \Omega
$$



# Proof

\begin{align\*}
\mathbb{P}(B) &= \mathbb{P}(B \cap \Omega) \\\\
&= \mathbb{P}\left(B \cap \bigcup_{i \geqslant 1} A_i \right) \\\\
&= \mathbb{P}\left(\bigcup_{i \geqslant 1} B \cap A_i \right) \\\\
&\overset{\text{Axiom 3}}{=} \sum_{i \geqslant 1} \mathbb{P}(B \cap A_i)
\end{align\*}

The last step uses [[axiom 3|Kolmogorov axioms#axiom-3]].