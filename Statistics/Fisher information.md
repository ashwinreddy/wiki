**Fisher information** quantifies how much information samples from a distribution give us about the parameters. When the Fisher information is high, it should be easier to estimate the parameters. Mathematically, Fisher information is the [[variance]] of the [[score function]].

$$
\mathcal{I}(\theta) = \mathbb{V}\left[ \frac{\partial}{\partial \theta} \ell(\theta ; x) \right]
$$

The Fisher information does not depend on a particular observation $x$, this is taken in expectation.

## Properties

$$
\mathcal{I}(\theta) \geqslant 0
$$