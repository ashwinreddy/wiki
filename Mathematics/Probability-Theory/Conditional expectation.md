**Conditional expectation** is a [[random variable]]

$$
\mathbb{E}\left( X \mid Y = y \right) = \begin{cases} \sum_{x \in \mathcal{X}} xp_{X\mid Y}(x \mid y) \\\\ \int_{\mathcal{X}} xf_{X\mid Y}(x \mid y)\dd{x} \end{cases}
$$

$$
\mathbb{E}\left(X \mid Y = y\right) = \frac{\int_\RR x f_{X,Y}(x,y) \dd{x} }{ \int_\RR f_{X,Y}(x,y)\dd{x} }
$$