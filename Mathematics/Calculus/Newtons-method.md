**Newton's method**

Recall that the best linear approximation for $f(x)$ at $x_0$ is

\begin{equation}
y = f'(x_0)(x-x_0)+f(x_0)
\end{equation}

Well, if we're looking for roots of $f(x)$, we could imagine looking to our linear model to see where the root is (what $x$ value corresponds to the 0):

\begin{gather}
0 = f'(x_0)(x-x_0)+f(x_0) \\\
x = x_0 - \frac{f(x_0)}{f'(x_0)}
\end{gather}

But, again this came from a linear model so $x$ gives us only an approximation the root. If we want a better approximation, we try again. The iterative rule then becomes

\begin{equation}
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
\end{equation}