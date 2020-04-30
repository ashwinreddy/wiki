The **expected value** of a [[random variable]]

|Discrete|Continuous|
|\begin{equation}\mathbb{E}[X] = \sum_{i=1}^k x_i p_i\end{equation}|\begin{equation}\mathbb{E}[X] = \int_\RR x f(x) \dd{x}\end{equation}|

# Properties


# Tail Sum Formula

If $X$ takes on values in $\mathbb{N}_{\geq 0}$, then we have

\begin{align\*}
\mathbb{E}[X] &= \sum_{j=1}^\infty j \cdot \mathbb{P}[X=j] \\\\\
&= \sum_{j=1}^\infty \sum_{i=1}^j \mathbb{P}[X=j] \\\\\
&= \sum_{i=1}^j \sum_{j=1}^\infty \mathbb{P}[X=j] \\\\\
&= \sum_{i=1}^j \mathbb{P}[X\geq i]
\end{align\*}