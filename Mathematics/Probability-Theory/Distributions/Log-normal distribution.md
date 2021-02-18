A **log-normal distribution** is a [[probability distribution]] for a [[random variable]] whose [[logarithm]] is [[normally distributed|normal distribution]].

$$
\log(X) \sim \mathcal{N}\left(\mu, \sigma^2\right)
$$

Let $Z \sim \mathcal{N}(0, 1)$. Then $\log(X) = \mu + \sigma Z$, so that

$$
X = e^{\mu + \sigma Z}
$$

# Density

Let $Y = \exp X \iff X = \ln Y$. Work with the [[cumulative distribution function]] $F_Y$.

$$
F_Y(x) = \Pr(Y \leqslant x) = \Pr(\exp X \leqslant x) = \Pr( X \leqslant \ln x ) = F_X(\ln x)
$$

Then, we differentiate to yield

$$
f_{Y}(x) = \dv{F_X(\ln x)}{x} = f_X(\ln x) \cancelto{\frac{1}{x}}{\ln'(x)}
$$