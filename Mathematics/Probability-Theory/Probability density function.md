A **probability density function (PDF/pdf)** or **density** is a [[function]] $f_X$ that assigns probability densities to a continuous [[random variable]] $X$. 

# Density vs. Mass

Since the probability of any given value is 0, we need a function that assigns densities as opposed to [[mass|probability mass function]]:

$$
\text{Density} = \frac{\text{Mass}}{\text{Measure}}
$$

We know that the total probability mass is 1 by the Kolmogorov axioms, which puts a restriction:

\begin{equation}
\label{eq:kol-req}
\int \text{Density}\cdot\dd{\text{Measure}} = 1.
\end{equation}


# Technical details

Adapting equation \ref{eq:kol-req},

\begin{gather}
\int_{\RR} f_X(x) \dd{x} = 1. \\\\
f_X(x) \geqslant 0.
\end{gather}