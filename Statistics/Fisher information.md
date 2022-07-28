**Fisher information** quantifies how much information samples from a distribution give us about the parameters. When the Fisher information is high, it should be easier to estimate the parameters. The Fisher information is defined by

$$
\mathcal{I}_X(\theta) = \mathbb{E}\left[s(\theta)^2 \mid \theta \right]
$$

for [[score]] $s$.

# Properties

* $\mathcal{I}(\theta) \geqslant 0$
* Suppose $X^n$ consists of $n$ [[iid]] trials of $X$. Then $\mathcal{I}_{X^n}(\theta) = n \mathcal{I}_X(\theta)$
* For a [[statistic]] $T$, $\mathcal{I}_{X^n}(\theta) \geqslant \mathcal{I}_T(\theta)$ with equality if and only if $T$ is sufficient.