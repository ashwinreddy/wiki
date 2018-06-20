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

## Tricks

### Integration By Parts (IBP)
IBP is a method to computing certain types of integrals. The fundamental principle for IBP comes from the integral form of the product rule

\begin{equation}
\int{u\,\mathrm{d}v} + \int{v\,\mathrm{d}u} = uv
\end{equation}