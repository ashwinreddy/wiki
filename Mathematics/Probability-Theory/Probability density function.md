A **probability density function (PDF/pdf)** is a [[function]] $f_X$ that assigns probability densities to a continuous [[random variable]] $X$ so that

$$
\Pr(a < x < b) = \int_a^b f_X(x) \dd{x}.
$$


\begin{gather\*}
\int\limits_{\RR} f_X(x) \dd{x} = 1. \\\\
f_X(x) \geqslant 0.
\end{gather\*}

# Density vs. Mass

Since the probability of any given value is 0, we need a function that assigns densities as opposed to [[mass|probability mass function]]:

$$
\text{Density} = \frac{\text{Mass}}{\text{Measure}}
$$

We know that the total probability mass is 1 by the Kolmogorov axioms, which puts a restriction:

$$
\int \text{Density}\cdot\dd{\text{Measure}} = 1.
$$


