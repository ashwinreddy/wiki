A **log-normal distribution** is a [[probability distribution]] for a [[random variable]] whose [[logarithm]] is [[normally distributed|normal distribution]].

$$
\log(X) \sim \mathcal{N}\left(\mu, \sigma^2\right)
$$

Let $Z \sim \mathcal{N}(0, 1)$. Then $\log(X) = \mu + \sigma Z$, so that

$$
X = e^{\mu + \sigma Z}
$$

# Density

Work with the [[cumulative density function]] $F_X$.

$$
\Pr(\exp X \leqslant x) = \Pr( X \leqslant \ln x ) = F_X(\ln x)
$$

Then, we differentiate to yield

$$
f_X(x) = \dv{F_X(x)}{x} = f_X(\ln x) \cancelto{\ln'(x)}{} \frac{1}{x}
$$