**Fisher information** quantifies how much information samples from a distribution give us about the parameters of that distribution. When the Fisher information is high, it should be easier to estimate the parameters. Mathematically, the Fisher information of a [[random variable]] $X$ about $\theta$ is the [[variance]] of the [[score function]] under $X$. Thus, the Fisher information does not depend on particular observations, but the outcomes in expectation.

$$
\mathcal{I}\_X(\theta) = \mathbb{V}_X \left[ s(\theta) \right]
$$

## Properties

$$
\mathcal{I}_X(\theta) \geqslant 0
$$

If we have a random vector $X^n$ of n [[iid]] trials of $X$, then

$$
\mathcal{I}\_{X^n}(\theta) = n \mathcal{I}_{X}(\theta)
$$

A statistic $T$ cannot give us more information than the raw data, i.e. $\mathcal{I}\_{X^n}(\theta) \geqslant \mathcal{I}\_{T}(\theta)$, but it can maintain information if it is a [[sufficient statistic]]. 