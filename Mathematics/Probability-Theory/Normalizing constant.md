A **normalizing constant** is used to make a [[function]] $f$ a [[probability density function]] or a [[probability mass function]]. 

$$
C = \int_\RR f(x) \dd{x}
$$

$$
C = \sum_{x \in \mathcal{X}} f(x)
$$


For example if we want to turn $e\^{-x^2/2}$ into a pdf, we need to divide it by its total mass,

$$
\int_\RR e\^{-x\^2/2} \dd{x} = \sqrt{2\pi}
$$

Thus, the normalizing constant is $(2\pi)^{-1/2}$.