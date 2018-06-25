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

### Example: Eigenfunction of Derivative
The **eigenfunction** of an operator $\mathcal{O}$ follows the property that

\begin{equation}
\mathcal{O} \, f = \lambda \, f
\end{equation}

Let $\mathcal{O}$ be the derivative operator; we can then find the eigenfunction of the derivative operator using a separable differential equation.

\begin{gather}
\frac{\mathrm{d}f}{\mathrm{d}x} = \lambda \, f \\\
\frac{\mathrm{d}f}{f} = \lambda\, \mathrm{d}x \\\
\ln f = \lambda x \implies f = e^{\lambda x}
\end{gather}


## Autonomous DEs
Autonomous differential equations are strictly a function of the dependent variable.

\begin{equation}
\frac{\mathrm{d}y}{\mathrm{d}x} = f(y)
\end{equation}

## First-Order Linear DEs

Equation \eqref{eq:folde} is the general form of a first-order linear differential equation.

\begin{equation}
\deriv{y}{x} + p(x)y = q(x)
\label{eq:folde}
\end{equation}

\begin{equation}
y(x) = \frac{\integral{\exp\left(P(x)\right)}{Q(x)}}{\exp\left(P(x)\right)}
\end{equation}

## Second-Order Linear DEs with Constant Coefficients

\begin{equation}
ay\prime\prime + by\prime+cy=g(t)
\end{equation}

First, solve for the general case (i.e. $g(t)=0$). We use the eigenfunction of the derivative here.

\begin{gather}
a\lambda^2e^{\lambda t} + b\lambda e^{\lambda t} + ce^{\lambda t} = 0 \\\
e^{\lambda t}(a\lambda^2 + b\lambda + c) = 0
\end{gather}

Since $\exp$ can never return $0$, the root must come from the quadratic, which is known as the **characteristic equation**. It is useful to look at the three cases then.

### Two Real Roots

If there are two real roots $r_1$ and $r_2$, the solution to the equation follows, where $c_1$ and $c_2$ are arbitrary constants determined by initial values.

\begin{equation}
y(t) = c_1 \exp({r_1t}) + c_2\exp({r_2t})
\end{equation}

### One Double Root

### Two Complex Roots

\begin{equation}
y(t) = c_1\exp(rt)+c_2t\exp(rt)
\end{equation}

# References

[Paul's Online Math Notes](http://tutorial.math.lamar.edu/Classes/DE/Linear.aspx)

[UC Davis Lecture Slides](https://www.math.ucdavis.edu/~thomases/W11_16C1_lec_1_7_11.pdf)