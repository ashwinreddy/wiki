# Introduction

The **fundamental theorem of calculus** connects [derivatives](./Derivatives/) and [integrals](./Integrals/).

## Part One

\begin{equation}
f(x)=\frac{\mathrm{d}}{\mathrm{d}x}\,\int\limits_c^{x}{f(\alpha)\,\mathrm{d}\alpha}
\end{equation}

### Proof
Using the [definition of the derivative](./Derivatives/Home#definition), we can simplify the problem to just having to prove that 

\begin{equation}
f(x)=\lim_{h\to{0}}\left[\frac{\int\limits_c^{x+h}{f(\alpha)\,\mathrm{d}\alpha}-\int\limits_c^{x}{f(\alpha)\,\mathrm{d}\alpha}}{h}\right] = \lim_{h\to{0}}\left[\frac{\int\limits_x^{x+h}{f(\alpha)\,\mathrm{d}\alpha}}{h}\right]
\end{equation}
With that, 
\begin{align}
0&=\lim_{h\to{0}}\left[\frac{\int\limits_x^{x+h}{f(\alpha)\,\mathrm{d}\alpha}}{h}- f(x)\right] 
=\lim_{h\to{0}}\left[\frac{\int\limits_x^{x+h}{f(\alpha)\,\mathrm{d}\alpha}}{h}-\frac{f(x)\int_{x}^{x+h}{1\mathrm{d}\alpha}}{h}\right] \\\
&=\lim_{h\to{0}}\left[\frac{\int\limits_x^{x+h}{f(\alpha)\,\mathrm{d}\alpha}}{h}-\frac{\int_{x}^{x+h}{f(x)\mathrm{d}\alpha}}{h} \right] = \lim_{h\to{0}}\left[\frac{\int\limits_x^{x+h}{f(\alpha)-f(x)\,\mathrm{d}\alpha}}{h}\right] \\\
\end{align}

Intuitively, as $h$ closes in, the value of the integral becomes 0.

## Part Two
For a function $f \in C^1$,

\begin{equation}
\int\limits_a^b{f'(x)\,\mathrm{d}x} = f(b) - f(a)
\end{equation}

There's a sense in which $f$ is oriented towards $b$, contributing the term $f(b)$, and away from $a$, contributing $-f(a)$.

# Antiderivative

\begin{equation}
\integral{f'(x)}{x} = f(x) + C
\end{equation}

It is common to see the antiderivative of $f(x)$ written as $F(x)$

# References

[Video of Proof](https://youtu.be/4DrCKhCECHo)