**Independence** in probability theory refers to either [[event]] or [[random variable]].

\begin{equation}
\Pr(X=x, Y=y) = \Pr(X=x)\Pr(Y=y) \tag{Indepdence for RVs}
\end{equation}

For [[event]] $A$ and $B$, independent means they have no bearing on each other. We write $A \perp B$.

$$
\mathbb{P}(A \cap B) = \mathbb{P}(A)\mathbb{P}(B)
$$

<<Warn("This does not mean the events are disjoint: $A \cap B = \emptyset$.")>>

If $\mathbb{P}(B) > 0$, then $A$ and $B$ are independent iff $\mathbb{P}(A \mid B) = \mathbb{P}(A)$, which means knowing $B$ gives no information about $B$.

In general, events $A_1, A_2, \dots$ are independent if for all finite subsets of indices $S$,

$$
\mathbb{P}\left( \bigcap_{i \in S} A_i \right) = \prod_{i \in S} \mathbb{P}(A_i).
$$

Say $A_1, A_2, \dots$ are independent. Then, $B_1, B_2, \dots$ are independent where $B_i$ is $A_i$ or $A_i^C$.