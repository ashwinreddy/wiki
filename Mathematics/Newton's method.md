**Newton's method** is a technique for finding the root of a function $f: \RR\to \RR$. We start with a guess $x_0$ and draw the tangent line.

$$
y = f'(x_0)(x-x_0) + f(x_0)
$$

The root for a line can be computed by setting $y=0$ and solving for $x$.

$$
x = x_0-\frac{f(x_0)}{f'(x_0)}
$$

Now, we simply iteratively apply this rule, which more generally looks like

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$

# Optimization

A common use case for root-finding is in looking for the extremum of a function where we want to find $f'(x)=0$. We can use Newton's method to minimize a function by iteratively converging onto the stationary points.

$$
x_{n+1} = x_n - \left[f''(x_n)\right]^{-1}f'(x_n)
$$

The equation readily generalizes to higher dimensions if we let $f''$ represent the [[Hessian]]. Computationally, this requires us to compute the [[inverse matrix|invertible matrix]] to Hessian. You'll notice that standard [[gradient descent]] corresponds here under the assumption that the Hessian is identity.