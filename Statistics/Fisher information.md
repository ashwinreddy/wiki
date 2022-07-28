**Fisher information** quantifies how much information samples from a distribution give us about the parameters. When the Fisher information is high, it should be easier to estimate the parameters. Mathematically, Fisher information is the [[variance]] of the [[score function]].

$$
\mathcal{I}\_X(\theta) = \mathbb{V}_\theta \left[ \frac{\partial}{\partial \theta} \ell(\theta ; x) \right]
$$

Fisher information answers the question _how sensitive is the model to changes in parameters_? If it changes a lot, then more samples give you lots of information. If it changes little, you learn not much.

The Fisher information does not depend on a particular observation $x$; $X$ is taken in expectation.

## Properties

$$
\mathcal{I}_X(\theta) \geqslant 0
$$

If we have a random vector $X^n$ of n [[iid]] trials of $X$, then

$$
\mathcal{I}\_{X^n}(\theta) = n \mathcal{I}_{X}(\theta)
$$

A statistic $T$ cannot give us more information than the raw data, i.e. $\mathcal{I}\_{X^n}(\theta) \geqslant \mathcal{I}\_{T}(\theta)$, but it can maintain information if it is a [[sufficient statistic]]. 