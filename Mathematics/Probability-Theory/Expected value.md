The **expected value** of a [[random variable]]

For a discrete random variable $X$ with $k$ values $x_1, \dots, x_k$ and $k$ respective probabilities $p_1, \dots, p_k$, the expectation is

\begin{equation}
\mathbb{E}[X] = \sum_{i=1}^k x_i p_i
\end{equation}

# Tail Sum Formula

If $X$ takes on values in $\mathbb{N}_{\geq 0}$, then we have

\begin{align*}
\mathbb{E}[X] &= \sum_{j=1}^\infty j \times \mathbb{P}[X=j] \\\\\
&= \sum_{j=1}^\infty \sum_{i=1}^j \mathbb{P}[X=j]
\end{align*}