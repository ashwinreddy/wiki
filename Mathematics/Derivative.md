# Types of Derivatives

## Univariate Derivative

$$
y'(x) = \lim_{h\to 0}\frac{y(x+h)-y(x)}{h}
$$

## Partial Derivative

$$
\frac{\partial f}{\partial x_i} = \lim_{h \to 0}\frac{f(x_1,\dots,x_i+h,\dots,x_n)-f(x_1,\dots,x_i,\dots,x_n)}{h}
$$


## Covariant Derivative

$$
\nabla_\mu V^\nu = \partial_\mu V^\nu + \Gamma^\nu_{\mu\lambda}V^\lambda
$$

$\Gamma$ is called the Christoffel symbol or the connection coefficients. The covariant derivative is defined like this in order to ensure that it transforms like a tensor.