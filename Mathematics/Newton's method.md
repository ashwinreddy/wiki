**Newton's method** is a technique for finding the root of a function $f: \RR\to \RR$. We start with a guess $x_0$ and draw the tangent line.

$$
y = f'(x_0)(x-x_0) + f(x_0)
$$

The root for a line can be computed by setting $y=0$.

$$
x_0-\frac{f(x_0)}{f'(x_0)} = x
$$


The update rule is

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$