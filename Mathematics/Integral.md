An **integral** represents a number of different ideas. The simplest of these is the definite integral, the sum of a continuous quantity. It is typically represented by the notation

\begin{equation}
\int_a^b f(x)\,\dd{x}
\end{equation}

One question that comes up is the importance of the $\dd{x}$. In the language of differential forms, this notation is given more concrete meaning.

# Riemann sum

The Riemann sum is one formulation for an integral

\begin{equation}
\int_a^b f(x)\,\dd{x} = \lim_{n\to\infty}\frac{b-a}{n}\sum_{k=1}^n f(x + \frac{b-a}{n}k)
\end{equation}