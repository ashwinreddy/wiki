The **derivative** of a single-variable function $f: \mathbb{R} \to \mathbb{R}$ is a function denoted $f'$ or $\dv{f}{x}$ that measures the sensitivity of the output to the input at a point. 

\begin{equation}
\dv{f}{x} \triangleq \lim_{\epsilon \to 0} \frac{f(x + \epsilon) - f(x)}{\epsilon}.
\end{equation}

The derivative can be numerically approximated by picking small $\epsilon$ such as 0.01 .



# Derivative Rules

In practice, we use a number of rules about how to take derivatives of functions built up from simpler ones.

|Expression|Derivative|Notes|
|:--------:|:--------:|-----|
| $c$      |  $0$     |     |
| $x^n$    | $nx^{n-1}$|    |
| $cf(x)$     | $cf'(x)$      |     |
| $f(x)+g(x)$|$f'(x)+g'(x)$|With above, gives linearity|
|$f(x)g(x)$|$f'(x)g(x) + g'(x)f(x)$||
| $f(g(x))$  | $f'(g(x))g'(x)$|Chain rule|

# Interpretation 

Since the output is a real number, there are only three options:

|Sign|Interpretation|
|----|--------------|
|Positive|Locally increasing|
|Zero|Locally stationary|
|Negative|Locally decreasing|
