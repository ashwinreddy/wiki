# Introduction

**Ordinary Differential Equations** (ODEs) are equations involving derivatives of a function.

## Separable DEs
Separable differential equations have a closed-form solution.

\begin{gather}
\frac{\mathrm{d}y}{\mathrm{d}x} = \frac{f(x)}{g(y)} \\\
g(y)\,\mathrm{d}y = f(x)\,\mathrm{d}x \\\
G(y)  = F(x) + C \\\
y(x) = G^{-1}(F(x)+C)
\end{gather}

## Autonomous DEs
Autonomous differential equations are strictly a function of the dependent variable.

\begin{equation}
\frac{\mathrm{d}y}{\mathrm{d}x} = f(y)
\end{equation}

## First-Order Linear DEs
\begin{equation}
\deriv{y}{x} + p(x)y = q(x)
\label{eq:folde}
\end{equation}

\begin{gather}
\mu(x) = \exp\left(\integral{p(x)}{x}\right) \\\
y(x) = \frac{\integral{\mu(x)q(x)}{x}}{\mu(x)}
\end{gather}

# References

[Paul's Online Math Notes](http://tutorial.math.lamar.edu/Classes/DE/Linear.aspx)

[UC Davis Lecture Slides](https://www.math.ucdavis.edu/~thomases/W11_16C1_lec_1_7_11.pdf)