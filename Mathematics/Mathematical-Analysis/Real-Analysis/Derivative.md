The **derivative** of a single-variable function $f: \mathbb{R} \to \mathbb{R}$ is a function denoted $f'$ or $\dv{f}{x}$ that measures the sensitivity of the output to the input at a point.

\begin{equation}
\dv{f}{x} \triangleq \lim_{\epsilon \to 0} \frac{f(x + \epsilon) - f(x)}{\epsilon}
\end{equation}

Since the output is a real number, there are only three options:

|Sign|Interpretation|
|----|--------------|
|Positive|Locally increasing|
|Zero|Locally stationary|
|Negative|Locally decreasing|

# Properties

The derivative is a linear operator, so 

$$
\dv{}{x}\big[af(x) + b g(x)\big] = a \dv{f}{x} + b \dv{g}{x}
$$