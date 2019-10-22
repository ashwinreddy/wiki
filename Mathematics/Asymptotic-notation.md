Asymptotic notion is useful for putting bounds on functions, especially for approximations and algorithm analysis.

# Big O notation

Big O places an upper bound on a function. Specifically, we define the set $\order{g(n)}$ by the following:


\begin{equation}
f(n) \in \order{g(n)} \Longleftrightarrow \lim\limits_{n \to \infty} \frac{f(n)}{g(n)} < \infty
\end{equation}

Intuitively, $f$ belonging to $\order{g(n)}$ means $g$ is an upper bound on $f$.

\\[f(n) \in \Omega(g(n)) \Longleftrightarrow g(n) \in \order{f(n)} \Longleftrightarrow \lim\limits_{n \to \infty} \frac{f(n)}{g(n)} > 0\\]


\\[f(n) \in \Theta(g(n)) \iff \lim_{n \to \infty} \frac{f(n)}{g(n)} \in \mathbb{R}^+ \\]

If a function has different tight bounds for $\mathcal{O}$ and $\Omega$, then $\Theta$ doesn't exist.