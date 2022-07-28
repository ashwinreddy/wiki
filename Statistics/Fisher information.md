**Fisher information** quantifies how much information samples from a distribution give us about the parameters. When the Fisher information is high, it should be easier to estimate the parameters. Mathematically, Fisher information is the [[variance]] of the [[score function]].

$$
\mathcal{I}(\theta) = \mathbb{V}_\theta \left[ \frac{\partial}{\partial \theta} \ell(\theta ; x) \right]
$$

Fisher information answers the question _how much would the gradient of the log-likelihood change under a different consideration of parameters_? If it changes a lot, then more samples give you lots of information. If it changes little, you learn not much.

The Fisher information does not depend on a particular observation $x$; $X$ is taken in expectation.

## Properties

$$
\mathcal{I}(\theta) \geqslant 0
$$