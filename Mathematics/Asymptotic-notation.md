Asymptotic notion is useful for putting bounds on functions, especially for approximations and algorithm analysis.

# Big O notation

Big O places an upper bound on a function. Specifically, we define the set $\order{g(n)}$ by the following:


\begin{equation}
f(n) \in \order{g(n)} \Longleftrightarrow \lim\limits_{n \to \infty} \frac{f(n)}{g(n)} &lt; \infty
\end{equation}

# Omega

\\[f(n) \in \Omega(g(n)) \Longleftrightarrow g(n) \in \order{f(n)} \Longleftrightarrow \lim\limits_{n \to \infty} \frac{f(n)}{g(n)} &gt; 0\\]

# Theta

\\[f(n) \in \Theta(g(n)) \iff 0 &lt; \lim_{n \to \infty} \frac{f(n)}{g(n)}  &lt; \infty \\]

If a function has different tight bounds for $\mathcal{O}$ and $\Omega$, then $\Theta$ doesn't exist.