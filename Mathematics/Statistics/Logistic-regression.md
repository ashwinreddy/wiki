
Now, we call $y^{(i)}$ the label, with negative class and positive class, a binary classification problem. We can adjust our hypothesis to force it to output values between 0 and 1, inclusive.

\begin{equation}
h_\theta(x) = g(\theta^\mathsf{T}x), \qquad g(z) = \frac{1}{1+e^{-z}}
\end{equation}

$g(z)$ is called the logistic or [[sigmoid function]].

Let's run [[maximum likelihood estimation]] again. We want our hypothesis to tell us the probability that the example belongs to the positive class. That is,

\begin{align}
\Pr(\left. y = 1 \right| x; \theta) &amp;= h_\theta(x) \\\
\Pr(\left. y = 0 \right| x; \theta) &amp;= 1 - h_\theta(x)
\end{align}

We're now going to take advantage of the fact that we're using 0 and 1 as our labels for $y$ to pull off a bit of a hacky trick:

\\[
\Pr(\left. y \right| x; \theta) = \left(h_\theta(x)\right)^y\left(1-h_\theta(x)\right)^{1-y}
\\]

Therefore the likelihood of getting the data that we did is the product of the probability of getting each individual training example:



\begin{align}
L(\theta) &amp;= \Pr(\left. \vec{y} \right| X;\theta) \\\
&amp;= \prod_{i=1}^n \Pr(\left. y^{(i)} \right| x^{(i)}; \theta) \\\
&amp;= \prod_{i=1}^n \left(h_\theta({x}^{(i)})\right)^{{y}^{(i)}}\left(1-h_\theta({x}^{(i)})\right)^{1-{y}^{(i)}}
\end{align}

\begin{align}
\ell(\theta) &amp;= \log L(\theta) \\\
&amp;= \sum_{i=1}^n y^{(i)}\log h_\theta({x}^{(i)}) + \left(1- y^{(i)}\right)\log\left(1- h\left({x}^{(i)}\right)\right) 
\end{align}
