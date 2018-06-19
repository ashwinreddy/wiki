Riemann integrals are basically a specification with concrete implementation details of the [integral](./Home).

A formal definition of the **Riemann integral** follows. Fundamentally, the Riemann sum tries to compute
\begin{equation}
\int\limits_a^b{f(x)\,\mathrm{d}x} \approx \lim_{\Delta x \to 0}\sum_i{f(x_i)\Delta x}.
\end{equation}

The more formal definition uses $n$ for a number of approximating rectangles that approaches infinity rather than a $\Delta x$ that approaches 0. For the formula below, let $\Delta x = \frac{b-a}{n}$.

\begin{equation}
\int\limits_a^b{f(x)\,\mathrm{d}x} = \lim_{n\to\infty}\sum_{j=1}^n{f \left(a+j\Delta x\right)\Delta x}
\end{equation}

### Average Value

The intuition behind the formula for average value using integrals becomes much more apparent when using the Riemann Sum formulation.

\begin{equation}
\text{average of $f$ on } [a,b] = \frac{1}{b-a}\int\limits_a^b{f(x)\,\mathrm{d}x} = \lim_{n\to\infty}\frac{\sum_{j=1}^n{f \left(a+j\Delta x\right)}{n}}
\end{equation}