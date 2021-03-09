A **normal distribution** or **Gaussian distribution** is a very common [[probability distribution]] with [[probability density function]] a [[Gaussian function]].  The standard normal distribution is defined by

\begin{equation}
Z \sim \mathcal{N}(0, 1) \iff \varphi_Z(z) = {\exp\left( - z^2 / 2 \right) \over \sqrt{2\pi}}   
\end{equation}


\begin{equation}
X \sim \mathcal{N}(\mu, \sigma^2) \iff \varphi(x; \mu, \sigma) = {\exp\left( - \frac{1}{2\sigma^2}(x- \mu)^2 \right) \over \sigma \sqrt{2\pi}}   
\end{equation}


However, we can write $X$ using the standard normal $Z \sim \mathcal{N}(0, 1)$.

$$

$$

It turns out that $X \sim \mathcal{N}(\mu, \sigma^2)$ means

\begin{equation}
X = \mu + \sigma Z
\end{equation}



# Standard Normal Distribution


The standard normal $Z \sim \mathcal{N}(0,1)$ has [[cumulative distribution function]]

$$
\Phi(x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^x \exp(-u^2/2) \dd{u}
$$


# Properties

|Property|Value|
|--------|-----|
|[[Expected value]]|$\mu$|
|[[Variance]]|$\sigma^2$|

* $X \sim \mathcal{N}(\mu_x, \sigma_x^2)$, $Y \sim \mathcal{N}(\mu_y, \sigma_y^2)$ then $X+Y \sim \mathcal{N}(\mu_x + \mu_y, \sigma_x\^2+\sigma_y^2)$.
* If the sum of independent r.v.s is Gaussian, the r.v.s are Gaussian

* Roughly 68% of the probability mass falls within 1 standard deviation of the mean.

Possibly the simplest normal distribution to write down is the one with 0 mean and variance $(2\pi)^{-1}$.

\begin{equation}
\varphi(x) = e^{-\pi x^2}
\end{equation}


# Characteristics

The normal distribution has the highest [[entropy]] of all continuous probability distributions with given variance $\sigma^2$.