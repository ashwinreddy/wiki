The **chain rule** equates a joint probability distribution with a factorization that uses no joint distributions. In two variables,

\begin{equation}
\Pr(X, Y) = \Pr(X \mid Y) \cdot \Pr(Y)
\end{equation}

\begin{equation}
\Pr(X, Y, Z) = \Pr(X \mid Y, Z) \cdot \Pr(Y \mid Z) \Pr(Z)
\end{equation}



In many,

\begin{equation}
\Pr\left( \bigcap_{k=1}^n X_k \right) = \prod_{k=1}^n \Pr\left( X_k \Bigg\vert \bigcup_{j=1}^{k-1}X_j \right)
\end{equation}
