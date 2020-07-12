A **generative model** tries to learn $p(x \mid y)$ and $p(y)$. Then it uses [[Bayes' theorem]] to compute

$$
p(y \mid x) = \frac{p(x \mid y) p(y)}{p(x)}
$$