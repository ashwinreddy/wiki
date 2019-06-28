**Expectation-maximization** is an iterative method to find [[maximum likelihood estimation]]s of parameters when there are unobserved latent variables. 

As an example, let's say we have a training set $\\{x^{(1)}, \dots, x^{(n)} \\}$. We posit that each example has a latent variable $z^{(i)}$ attached to it that determines one of $k$ Gaussian models to use to model $x^{(i)}$. In formal terms,

\\[
z^{(i)} \sim \text{Multinomial}(\phi)
\\]

$\phi$ is a distribution over the $k$ Gaussians (i.e. $\phi_j \geq 0$ and $\sum_{j=1}^k \phi_j = 1$ )