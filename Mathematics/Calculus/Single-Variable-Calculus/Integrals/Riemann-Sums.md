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

## Stieltjes Integral

The Stieltjes integral generalizes the Riemann sum even more. Namely, it adds on
\begin{equation}
\int\limits_a^b{f(x)\,\mathrm{d}\alpha(x)} = \int\limits_a^b{f(x)\alpha\prime(x)\,\mathrm{d}x}
\end{equation}

This statement seems to imply that

\begin{equation}
\mathrm{d}\alpha(x) = \alpha\prime(x)\, \mathrm{d}x
\end{equation}

From the [chain rule](../derivatives/chain rule), however, we know this is true.

# Use Cases

## Average Value

The intuition behind the formula for average value using integrals becomes much more apparent when using the Riemann Sum formulation.

\begin{equation}
\text{average of $f$ on } [a,b] = \frac{1}{b-a}\int\limits_a^b{f(x)\,\mathrm{d}x} = \lim_{n\to\infty}\frac{\sum_{j=1}^n{f(a+j\Delta x)}}{n}
\end{equation}

# References

[Wikipedia Article on Stieltjes Integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral)