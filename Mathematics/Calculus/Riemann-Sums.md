# Introduction

**Riemann sums** are basically a specification with concrete implementation details of the [integral](./Home).

## Formal Definition

Fundamentally, the Riemann sum tries to compute
\begin{equation}
\int\limits_a^b{f(x)\,\mathrm{d}x} \approx \lim_{\Delta x \to 0}\sum_i{f(x_i)\Delta x}.
\end{equation}

The more formal definition uses $n$ for a number of approximating rectangles that approaches infinity rather than a $\Delta x$ that approaches 0. For the formula below, let $\Delta x = \frac{b-a}{n}$.

\begin{equation}
\int\limits_a^b{f(x)\,\mathrm{d}x} = \lim_{n\to\infty}\sum_{j=1}^n{f \left(a+j\Delta x\right)\Delta x}
\end{equation}
