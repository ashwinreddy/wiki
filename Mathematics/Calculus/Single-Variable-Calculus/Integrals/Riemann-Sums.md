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

The Stieltjes integral allows Riemann sum integrals to integrate w.r.t. something other than a $\diff{x}$. First, we start with the  [chain rule](../derivatives/chain rule) for a function $\alpha(x)$.

\begin{gather}
\deriv{\alpha(x)}{x} = \alpha\prime(x) \\\
\diff{\alpha(x)} = \alpha\prime(x)\, \diff{x} \\\
\integral{f(x)}{\alpha(x)} = \integral{f(x)\alpha\prime(x)}{x}
\end{gather}


# Use Cases

## Average Value

The intuition behind the formula for average value using integrals becomes much more apparent when using the Riemann Sum formulation.

\begin{equation}
\text{average of $f$ on } [a,b] = \frac{1}{b-a}\int\limits_a^b{f(x)\,\mathrm{d}x} = \lim_{n\to\infty}\frac{\sum_{j=1}^n{f(a+j\Delta x)}}{n}
\end{equation}

## Arc Length

\begin{gather}
\diff{s}^2 = \diff{x}^2 + \diff{y}^2 \\\
\diff{s} = \sqrt{\diff{x}^2 + \diff{y}^2} = \diff{x}\sqrt{1+\frac{\diff{y}^2}{\diff{x}^2}}
\end{gather}

# References

[Wikipedia Article on Stieltjes Integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral)