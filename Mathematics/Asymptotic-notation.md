Big O notation is useful for putting bounds on functions.



\\[f(n) \in \order{g(n)} \Longleftrightarrow \lim\limits_{n \to \infty} \frac{f(n)}{g(n)} < \infty\\]

Intuitively, $f$ belonging to $\order{g(n)}$ means $g$ is an upper bound on $f$.

\\[f(n) \in \Omega(g(n)) \Longleftrightarrow g(n) \in \order{f(n)} \Longleftrightarrow \lim\limits_{n \to \infty} \frac{f(n)}{g(n)} > 0\\]


\\[f(n) \in \Theta(g(n)) \iff \lim_{n \to \infty} \frac{f(n)}{g(n)} \in \mathbb{R}^+ \\]

If a function has different tight bounds for $\mathcal{O}$ and $\Omega$, then $\Theta$ doesn't exist.