\\[f(n) \in O(g(n)) \Longleftrightarrow \lim\limits_{n \to \infty} \frac{f(n)}{g(n)} < \infty\\]

Intuitively, $f$ belonging to $O(g(n))$ means $g$ is an upper bound on $f$.

\\[f(n) \in \Omega(g(n)) \Longleftrightarrow g(n) \in O(f(n)) \Longleftrightarrow \lim\limits_{n \to \infty} \frac{f(n)}{g(n)} > 0\\]


\\[f(n) \in \Theta(g(n)) \iff \lim_{n \to \infty} \frac{f(n)}{g(n)} \in \mathbb{R}^+ \\]