**Expectation-maximization** is an iterative method to find [[maximum likelihood estimation]]s of parameters when there are unobserved latent variables. 

As an example, let's say we have a training set $\\{x^{(1)}, \dots, x^{(n)} \\}$. We posit that each example has a latent variable $z^{(i)}$ attached to it that determines one of $k$ Gaussian models to use to model $x^{(i)}$. In formal terms,

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