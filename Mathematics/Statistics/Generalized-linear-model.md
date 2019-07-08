# Assumptions

1. $y \vert x; \theta \sim \text{ExponentialFamily}(\eta)$
2. Our goal is to predict $\mathbb{E}[T(y)\vert x; \theta]$.
3. The natural parameter relates to inputs by $\eta = {\theta}^\mathsf{T}x$.

In GLM terminology, $y$ is called the response variable. Ordinary least squares is an example of a GLM where $y \vert x \sim \mathcal{N}(\mu, \sigma^2)$.