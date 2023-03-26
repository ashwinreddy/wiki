<<<<<<< HEAD:Mathematics/Probability-Theory/expected value.md
---
aliases: expectation
---

the expected value (ev) or expectation of a [[random variable]] $X$ is defined as
=======
The **expected value (EV)** of a [[Random variable]] $X$ is defined as
>>>>>>> 5e3f42f9e824893f2f7a2bb648727e24a827b130:Mathematics/Probability-Theory/Expected value.md

$$
\operatorname{\mathbb{E}}\left[X\right] = \int_\Omega X(\omega) \\, \dd{\mu}
$$

## Properties

Expectation is linear.

$$
\mathbb{E}[\alpha X + \beta Y] = \alpha \mathbb{E}[X] + \beta \mathbb{E}[Y]
$$

$$
X \in \mathbf{N} \implies \mathbb{E}\left[X\right] = \sum_{k \in \mathbf{N}} \Pr(X \geqslant k)
$$