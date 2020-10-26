A **limit** gives the value of a quantity that may be undefined by considering what the values around it imply it to be.

$$
\lim_{x \to c} f(x) = L
$$

Consider a function $f: S \to \RR$. We will write

$$
\lim_{x \to a^S} f(x) = L \iff \left( \lim s_n = a \implies \lim_{n \to \infty} f(s_n) = L \right)
$$

for every $(s_n)$ in $S$.

We might also want an $\epsilon-\delta$ definition

$$
\lim_{x\to a^S} f(x) = L \iff \forall \epsilon > 0, \exists \delta > 0 \text{ s.t. } x\in S, | x - a | < \delta \implies |f(x) - L| < \epsilon
$$

For $f: \mathsf{dom}(f) \to \RR$ with $(a - c, a+c) \setminus \{ a \}$