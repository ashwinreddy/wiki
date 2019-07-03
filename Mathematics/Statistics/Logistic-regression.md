
Now, we call $y^{(i)}$ the label, with negative class and positive class, a binary classification problem. We can adjust our hypothesis to force it to output values between 0 and 1, inclusive.

\begin{equation}
h_\theta(x) = g(\theta^\mathsf{T}x), \qquad g(z) = \frac{1}{1+e^{-z}}
\end{equation}

$g(z)$ is called the logistic or [[sigmoid function]].

Let's run [[maximum likelihood estimation]] again. We want our hypothesis to tell us the probability that the example belongs to the positive class. That is,

\begin{align}
\Pr(\left. y = 1 \right| x; \theta) &= h_\theta(x) \\
\Pr(\left. y = 0 \right| x; \theta) &= 1 - h_\theta(x) \\
\end{align}

We're now going to take advantage of the fact that we're using 0 and 1 as our labels for $y$ to pull off a bit of a hacky trick:

\[
\Pr(\left. y \right| x; \theta) = \left(h_\theta(x)\right)^y\left(1-h_\theta(x)\right)^{1-y}
\]

Therefore the likelihood of getting the data that we did is the product of the probability of getting each individual training example: