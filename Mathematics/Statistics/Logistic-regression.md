
Now, we call $y^{(i)}$ the label, with negative class and positive class, a binary classification problem. We can adjust our hypothesis to force it to output values between 0 and 1, inclusive.

\begin{equation}
h_\theta(x) = g(\theta^\mathsf{T}x), \qquad g(z) = \frac{1}{1+e^{-z}}
\end{equation}

$g(z)$ is called the logistic or sigmoid function.


Note that when $z \to \infty$, $g(z)$ tends to 1 and tends to 0 when $z \to -\infty$.
