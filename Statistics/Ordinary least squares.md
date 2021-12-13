**Ordinary least squares (OLS)** finds the optimal parameters $\beta$ to a linear model $y = X\beta$ for [[design matrix]] $X$ by solving

\begin{gather\*}
\hat\beta = \arg\min_\beta J(\beta) \\\\
J(\beta) = \lVert y - X\beta \rVert^2
\end{gather\*}

The closed form solution is

$$
\beta = (X\^\mathsf{T}X)\^{-1}X^\mathsf{T}y
$$

To see it, hit both sides with $X^\mathsf{T}$:

$$
X^\mathsf{T}y = X^\mathsf{T}X \beta \implies (X\^\mathsf{T}X)^{-1} X^\mathsf{T}y =  \beta
$$

# Motivation

To motivate this formulation, consider the [[maximum likelihood estimation]] on

$$
y = mx + b + \epsilon, \quad \epsilon \sim \mathsf{Normal}(0, \sigma^2)
$$

Then,

$$
\ell(\theta) = \log L(\theta) \propto \sum_{i=1}^n\left[ \log \left( \frac{1}{\sqrt{2\pi}}\right) - \frac{1}{2}\sigma^2 \sum_{i=1}^n \left(\hat{y}\_i - y_i \right)^2 \right]
$$

\begin{align}
\theta^* &= \arg\max_{\theta} \log L(\theta)  \\\\
&= \arg\max_{\theta} \sum_{i=1}^n \log \left( \frac{1}{\sqrt{2\pi}} e\^{-\frac{1}{2\sigma\^2}\sum_{i=1}^n (\hat{y}\_i - y_i)^2} \right) \\\\
&= \arg\max_{\theta} \sum_{i=1}^n \log \left( \frac{1}{\sqrt{2\pi}}\right) - \frac{1}{2}\sigma^2 \sum_{i=1}^n \left(\hat{y}\_i - y_i \right)^2 \\\\
&= \arg\min_\theta \sum_{i=1}^n \left(\hat{y}_i - y_i \right)^2  
\end{align}