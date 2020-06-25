**Newton's method** is a technique for finding the root of a function $f: \RR\to \RR$. We start with a guess $x_0$ and iteratively update it by seeing where the zero would be using a tangent line at the given point. The update rule is

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$