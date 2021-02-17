A **normal distribution** or **Gaussian distribution** is a very common [[probability distribution]]. 


\begin{equation}
X \sim \mathcal{N}(\mu, \sigma^2) \iff \varphi(x; \mu, \sigma) = {\exp\left( - \frac{1}{2\sigma^2}(x- \mu)^2 \right) \over \sigma \sqrt{2\pi}}   
\end{equation}


The standard normal $Z \sim \mathcal{N}(0,1)$ has [[cumulative distribution function]]

$$
\Phi(x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^x \exp(-u^2/2) \dd{u}
$$



The general form is a little more involved, with a [[normalizing constant]] of $1/\sqrt{2\pi}$. It is a [[Gaussian function]]









Possibly the simplest normal distribution to write down is the one with 0 mean and variance $(2\pi)^{-1}$.

\begin{equation}
\varphi(x) = e^{-\pi x^2}
\end{equation}


However, we can write $X$ using the standard normal $Z \sim \mathcal{N}(0, 1)$.

$$
\varphi_Z(z) = {\exp\left( - x^2 / 2 \right) \over \sqrt{2\pi}}   
$$

\begin{equation}
X = \mu + \sigma Z \iff Z = { X - \mu \over \sigma}
\end{equation}

Roughly 68% of the probability mass falls within 1 standard deviation of the mean.

# Properties

|Property|Value|
|--------|-----|
|[[Expected value]]|$\mu$|
|[[Variance]]|$\sigma^2$|

# Characteristics

The normal distribution has the highest [[entropy]] of all continuous probability distributions with given variance $\sigma^2$.