A **geometric distribution** represents the number of flips of a biased coin with probability $p$ before a heads shows up.

$$
X \sim \operatorname{Geometric}(p) \iff \Pr(X = k) = (1-p)^{k-1} p
$$

We can use the [[tail sum formula|expected value#tail Sum Formula]] to find

$$
\mathbb{E}[X] = \sum_{i=1}^\infty \mathbb{P}[X \geq i] = \sum_{i=1}^\infty (1-p)^{i-1} = \frac{1}{1-(1-p)} = \frac{1}{p}
$$