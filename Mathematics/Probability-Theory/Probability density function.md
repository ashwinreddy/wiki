A **probability density function (PDF/pdf)** is a [[function]] captures the probability of a continuous [[random variable]] with the [[unit interval]].

$$
\varphi : \Omega \to [0, 1]
$$

\begin{equation}
\int_\Omega \varphi(x) \\, \dd{x} = 1
\end{equation}

\begin{equation}
\Pr(a \leq X \leq b) = \int_a^b \varphi(x) \\, \dd{x}
\end{equation}

If $X$ and $Y$ are independent [[random variables|random variable]] with distributions $f$ and $g$, then the distribution of $Z=X+Y$ is like [[convolution]].

\begin{equation}
h(z) = (f * g)(z)
\end{equation}