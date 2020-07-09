A **probability density function (PDF/pdf)** captures the probability of a continuous [[random variable]].

\begin{equation}
\int_\mathbb{R} \varphi(x)\\,\dd{x} = 1
\end{equation}

\begin{equation}
\Pr(a \leq X \leq b) = \int_a^b \varphi(x) \\, \dd{x}
\end{equation}

If $X$ and $Y$ are independent [[random variables|random variable]], then the distribution of $Z=X+Y$ looks like. [[convolution]]

\begin{equation}
h(z) = \int_\RR f(x)g(z-x)\\,\dd{x}
\end{equation}