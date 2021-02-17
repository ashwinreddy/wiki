The **law of the unconscious statistician (LOTUS)** says that an [[expected value]] for a [[function]] $g$ of a [[random variable]] $X$ can be computed using the distribution for the random variable $X$ rather than $g(X)$.

$$
\mathbb{E}\left[g(X)\right] = \begin{cases} \sum_x g(x) f_X(x) & X \text{ discrete} \\\\ \int_\RR g(x) f_X(x)\\, \dd{x} & X \text{ continuous} \end{cases}
$$
