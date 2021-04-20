**Ordinary least squares (OLS)** finds the optimal parameters $\beta$ to a linear model $y = X\beta$ for [[design matrix]] $X$ by solving

$$
\hat\beta = \arg\min_\beta \lVert y - X\beta \rVert^2
$$

The closed form solution is

$$
\beta = (X\^\mathsf{T}X)\^{-1}X^\mathsf{T}y
$$

To see it, hit both sides with $X^\mathsf{T}$:

$$
X^\mathsf{T}y = X^\mathsf{T}X \beta \implies (X\^\mathsf{T}X)^{-1} X^\mathsf{T}y =  \beta
$$

# MLE

We can also consider a [[maximum likelihood estimation]] of the form

$$
y = mx + b + \epsilon, \quad \epsilon \sim \mathsf{Normal}(0, \sigma^2)
$$

Then, our likelihood function is

$$
L(\theta) = \prod_{i=1}^n \frac{1}{\sqrt{2\pi}} e\^{-\frac{1}{2\sigma\^2}\sum_{i=1}^n (\hat{y}_i - y_i)^2}
$$

\begin{align}
\theta^* &= \arg\max_{\theta} \log L(\theta)  \\\\
&= \arg\max_{\theta} \log \left( \prod_{i=1}^n \frac{1}{\sqrt{2\pi}} e\^{-\frac{1}{2\sigma\^2}\sum_{i=1}^n (\hat{y}\_i - y_i)^2} \right) \\\\
&= \arg\max\_{\theta} \sum_{i=1}^n \log \left( \frac{1}{\sqrt{2\pi}} e\^{-\frac{1}{2\sigma\^2}\sum_{i=1}^n (\hat{y}_i - y_i)^2} \right)
&= \arg\max_{\theta} \sum_{i=1}^n \log \left( \frac{1}{\sqrt{2\pi}}\right) -\frac{1}{2\sigma\^2}\sum_{i=1}^n (\hat{y}_i - y_i)^2}
\end{align}