Riemann integrals are basically a specification with concrete implementation details of the [integral](./Home).

A formal definition of the **Riemann integral** follows. First, let $\Delta x = \frac{b-a}{n}$

\begin{equation}
\int\limits_a^b{f(x)\,\mathrm{d}x} = \lim_{n\to\infty}\Delta x\sum_{j=1}^n{f \left(a+j\Delta x\right)}
\end{equation}

### Average Value

The intuition behind the formula for average value using integrals becomes much more apparent when using the Riemann Sum formulation.

\begin{equation}
\text{average of $f$ on } [a,b] = \frac{1}{b-a}\int\limits_a^b{f(x)\,\mathrm{d}x} = \lim_{n\to\infty}\frac{1}{n}\sum_{j=1}^n{f \left(a+\frac{b-a}{n}j\right)}
\end{equation}