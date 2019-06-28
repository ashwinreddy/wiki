**Expectation-maximization** is an iterative method to find [[maximum likelihood estimation]]s of parameters when there are unobserved latent variables. 

Let's say we have a training set $\\{x^{(1)}, \dots, x^{(n)} \\}$. 

\begin{align}
\ell(\theta) &= \sum_{i=1}^m \log p(x^{(i)}; \theta) \\\
&= \sum_{i=1}^n \log \left[\sum_{z} p(x^{(i)}, z^{(i)}; \theta)\right]
\end{align}

Here, we are basically acting under the assumption that there is a valid underlying joint distribution $p(x,z)$, so we recognize that $p(x)$ is the marginal distribution which results when we sum and bind over the $z$.


We posit that each example has a latent variable $z^{(i)}$ attached to it that determines one of $k$ Gaussian models to use to model $x^{(i)}$. In formal terms,

\\[
z^{(i)} \sim \text{Multinomial}(\phi)
\\]

$\phi$ is a distribution over the $k$ Gaussians (i.e. $\phi_j \geq 0$ and $\sum_{j=1}^k \phi_j = 1$ and $\phi_j = \Pr(z^{(i)} = j $). 

\\[
x^{(i)} | z^{(i)} \sim \mathcal{N}(\mu_j, \Sigma_j)
\\]

The likelihood model is

\\[
\ell(\phi, \mu, \Sigma) = \sum_{i=1}^n \log p(x^{(i)}; \phi, \mu, \Sigma)
\\]

We can now link the latent variable in by saying

\\[
\ell(\phi, \mu, \Sigma) = \sum_{i=1}^n \log \left[\sum_{z^{(i)}=1}^k p(x^{(i)} | z^{(i)}; \mu, \Sigma)p(z^{(i)};\phi)\right]
\\]

Imagine we had acess to the latent variable $z^{(i)}$, then it would be possible to compute the likelihood by

\begin{align}
\ell(\theta) &= \sum_{i=1}^m \log p(x^{(i)} | z^{(i)}; \theta) p(z^{(i)}; \phi) \\\
&= \sum_{i=1}^m \log p(x^{(i)} | z^{(i)}; \theta) + \log p(z^{(i)}; \phi)
\end{align}

# Algorithm

Repeat until convergence:

\begin{gather}
w_{j}^{(i)} \leftarrow p(z^{(i)} = j | x^{(i)}; \phi, \mu, \Sigma) \\\
\phi_j \leftarrow \frac{1}{n} \sum_{i=1}^n w^{(i)}_j \\\
\mu_j \leftarrow \frac{\sum_{i=1}^n }{\sum_{i=1}^n}
\end{gather}

