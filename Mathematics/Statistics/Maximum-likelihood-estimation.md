**Maximum likelihood estimation** is a technique for finding the parameters of a statistical model given some data. We construct a likelihood function $L$ for parameters $\theta$ and i.i.d observations $y_i$ that come from a distribution $f$

\\[
L(\theta; y) = \prod_{i=1}^n f(y_i; \theta)
\\]

We then try to compute

\\[
\theta^\star = \arg\max_\theta L(\theta; y)
\\]