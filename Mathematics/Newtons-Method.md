**Newton's method** is an iterative algorithm for finding a root of a function. In the simplest example, we have a differentiable function $f(x)$. Then with an initial guess $x_0$ for the root, we perform the following update

\\[
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
\\]

# Derivation

Why does this work? Let's first begin with a linear approximation at $x_0$:

\\[
y = f'(x_0)(x-x_0)+f(x_0)
\\]

The idea is to pick out the root from this line and consider that to be the next guess. So we set $y=0$ and solve for $x$:

\begin{align*}
y
\end{align*}