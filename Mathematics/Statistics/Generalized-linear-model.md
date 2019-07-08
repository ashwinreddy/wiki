# Assumptions

1. $y \vert x; \theta \sim \href{./Exponential-family}{\text{ExponentialFamily}}(\eta)$ [[Exponential Family]]
2. Our goal is to predict $\mathbb{E}[T(y)\vert x; \theta]$.
3. The natural parameter relates to inputs by $\eta = {\theta}^\mathsf{T}x$.

In GLM terminology, $y$ is called the response variable. Ordinary least squares is an example of a GLM where $y \vert x \sim \mathcal{N}(\mu, \sigma^2)$. $g(\eta) = \mathbb{E}[T(y) ; \eta]$ is called the canonical response function and its inverse $g^{-1}$ is called the canonical link function.