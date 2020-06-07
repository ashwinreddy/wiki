**Automatic differentiation** is a method of computing numerical [[derivatives|derivative]] exactly without using symbolic differentiation.

# Forward mode

# Dual numbers

For an analytic function $f$, 

\begin{equation}
f(a + b \epsilon) = \sum_{n=0}^\infty \frac{f^{(n)}(a)b^n\epsilon^n}{n!} = f(a) + b f'(a) \epsilon
\end{equation}
