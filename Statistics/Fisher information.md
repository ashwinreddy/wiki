The **Fisher information** of a [[random variable]] $X$ about a parameter $\theta$ for its distribution is defined as

$$
\mathcal{I}_X(\theta) = \mathop{E}_{x \sim p(x \mid \theta) }\left[\left( \frac{\mathrm{d}}{\mathrm{d}\theta} \log p(x \mid \theta) \right)^2 \right]
$$

Fisher information intuitively quantifies the information given by samples of $X$ about $\theta$. When it's high, it should be easier to estimate the parameters. Fisher information does not depend on particular observations but outcomes in expectation.

Since the [[expected value]] of the [[score function]] is 0, Fisher information is a [[variance]].

## Examples

Suppose $X$ is a coin flip from a [[Bernoulli distribution]] with parameter $\theta$. 

$$
p(x = 1 \mid \theta) = \theta \implies \left(\frac{\mathrm{d}}{\mathrm{d}\theta} \log p(x = 1 \mid \theta)\right)^2 = \frac{1}{\theta^2}
$$

$$
\mathcal{I}\_X(\theta) = \theta \frac{1}{\theta^2} + (1-\theta)\frac{1}{(1-\theta)^2} = \frac{1}{\theta(1-\theta)}
$$

![](https://awni.github.io/images/intro_fisher_information/fisher_bernoulli.svg)

## Properties

$$
\mathcal{I}_X(\theta) \geqslant 0
$$

If we have a random vector $X^n$ of n [[iid]] trials of $X$, then

$$
\mathcal{I}\_{X^n}(\theta) = n \mathcal{I}_{X}(\theta)
$$

A statistic $T$ cannot give us more information than the raw data, i.e. $\mathcal{I}\_{X^n}(\theta) \geqslant \mathcal{I}\_{T}(\theta)$, but it can maintain information if it is a [[sufficient statistic]]. 