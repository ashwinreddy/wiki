Newton's method is a root finding algorithm based on a first-order approximation. Start with an arbitrary $x_0$ and iteratively perform the following update to convergence:

$$
x_{n+1} = x_{n} - \frac{f(x_n)}{f'(x_n)}
$$



$$
f(x) \approx f'(x_0)(x-x_0) + f(x_0)
$$

Take the RHS and see what $x$ is the root for it.

$$
x = x_0 -\frac{f(x_0)}{f'(x_0)} 
$$