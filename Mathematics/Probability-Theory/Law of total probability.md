The **law of total probability**

> Suppose disjoint events $A_1, A_2, \dots$ partition $\Omega$. Then, for any event B, $$\mathbb{P}(B) = \sum_{i \geqslant 1} \mathbb{P}(B \cap A_i).$$

# Proof

\begin{align\*}
\mathbb{P}(B) &= \mathbb{P}(B \cap \Omega) \\\\
&= \mathbb{P}\left(B \cap \bigcup_{i \geqslant 1} A_i \right) \\\\
&= \mathbb{P}\left(\bigcup_{i \geqslant 1} B \cap A_i \right)
\end{align\*}