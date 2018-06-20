# Introduction

The **integral** is a [linear operator](../../../Linear Algebra/) that gives the area under a curve, at least under the [Riemann sum](./Riemann Sums) interpretation.

\begin{equation}
\defint{a}{b}{f(x)}{g(x)} = \defint{a}{b}{f(x)\,g\prime (x)}{x}
\end{equation}

## Properties
There are a couple basic, defining properties of integrals.

\begin{equation}
\defint{b}{a}{f(x)}{x} = -\defint{a}{b}{f(x)}{x}
\end{equation}

\begin{equation}
\defint{a}{b}{f(x)}{x} + \defint{b}{c}{f(x)}{c} = \defint{a}{c}{f(x)}{x}
\end{equation}

\begin{equation}
\defint{a}{a}{f(x)}{x} = 0
\end{equation}

# Computation

## Integration By Parts (IBP)
IBP is a method to computing certain types of integrals. The fundamental principle for IBP comes from the integral form of the product rule

\begin{equation}
\int{u\,\mathrm{d}v} + \int{v\,\mathrm{d}u} = uv
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

## Arc Length in $\mathbb{R}^2$

\begin{gather}
\diff{s}^2 = \diff{x}^2 + \diff{y}^2 \\\
\diff{s} = \sqrt{\diff{x}^2 + \diff{y}^2} = \diff{x}\sqrt{1+\frac{\diff{y}^2}{\diff{x}^2}}
\end{gather}

Notice the use of the [Stieltjes integral](#introduction_stieltjes-integral).

\begin{equation}
\ell = \defint{a}{b}{f(x)}{s} = \defint{a}{b}{f(x)\sqrt{1+f'(x)^2}}{x}
\end{equation}

# References

[Wikipedia Article on Stieltjes Integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral)