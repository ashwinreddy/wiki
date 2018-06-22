The sum of all the possible probabilities should be unity.

\begin{equation}
\sum_{i} p_X(x_i) = 1
\end{equation}

## Probability Density Function
\begin{equation}
p(a \leq X \leq B) = \defint{a}{b}{f_X(x)}{x}
\end{equation}

### Gaussian Distibution

Let's say we want a probability density function from $\exp\left(-\frac{x^2}{2}\right)$

## Expectation

The expectation of a random variable $X$ is the sum of the possible outcomes $x_i$ multiplied by their respective probabilities $p(x_i)$

\begin{equation}
\mathbb{E}[X] = \sum_i{x_i \, p(x_i)}
\end{equation}

If $x$ can take on values along the continuous real number line and $f$ is a probability density function,

\begin{equation}
\mathbb{E}[X] = \defint{-\infty}{\infty}{x\,f(x)}{x}
\end{equation}


# References

[Stanford Intro to Info Theory](https://web.stanford.edu/~montanar/RESEARCH/BOOK/partA.pdf)