**Convergence of random variables** refers to different conceptions of [[convergence]] of a [[limit]] for a [[random variable]]. Where a sequence of real numbers has only one sense of convergence, there are a few for probability.



[[_TOC_]]

# Almost sure convergence

[[include:Almost sure convergence]]

# Convergence in probability

$X_n \to X$ in probability if for every $\epsilon > 0$,

$$
\lim_{n \to \infty} \Pr( |X_n - X| > \epsilon) = 0.
$$

e.g. [[law of large numbers]]

# Convergence in distribution

$X_n \to X$ in distribution if for all $x$,

$$
\lim_{n \to\infty} F_{X_n}(x) = F_X(x)
$$