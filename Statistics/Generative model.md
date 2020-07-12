A **generative model** tries to learn $p(x \mid y)$ and $p(y)$. Then it uses [[Bayes' theorem]] to find the most likely class

$$
\arg\max_y p(y \mid x) = \arg\max_y p(x \mid y)p(y)
$$