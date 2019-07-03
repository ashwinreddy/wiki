\\[ J(\theta) = \frac{1}{2}\sum_{i=1}^n \left( h_\theta\left( x^{(i)} \right) - y^{(i)} \right)^2 \\]


The gradient descent algorithm makes incremental simultaneous updates to each $\theta_j$ that make $J(\theta)$ smaller:

\begin{equation}
\theta_j \leftarrow \theta_j - \alpha \partial_{\theta_j}{J(\theta)}
\end{equation}

The learning rate $\alpha$ is a hyperparameter. Note the evaluation of the derivative of cost w.r.t. the weights. We can determine that by hand. Let's first assume there's only one example $(x, y)$:

\begin{align}
\partial_{\theta_j}{J(\theta)} &= \partial_{\theta_j} \frac{1}{2}\left( h_\theta(x) - y \right)^2 \\\
&= 2 \cdot \frac{1}{2}\left(h_\theta(x) - y \right)^2\cdot \partial_{\theta_j}\left(h_\theta(x) - y\right) \\\
&= \left( h_\theta(x) - y \right)\cdot\partial_{\theta_j}\left( {\theta}^\mathsf{T}x -y \right) \\\
&= \left( h_\theta(x) - y \right)x_j
\end{align}

So for a specific training example $(x^{(i)}, y^{(i)})$, the rule is

\begin{equation} \label{eq:lms-grad-descent-rule}
\theta_j \leftarrow \theta_j + \alpha \left( {y}^{(i)} - h_\theta\left( {x}^{(i)}\right) \right)x_{j}^{(i)}
\end{equation}

This is called the Widrow-Hoff rule.[^1] What do we do with multiple examples?

If we just follow the gradient descent rule, we would repeat the following until convergence for every $j$:

\begin{equation}
\theta_j \leftarrow \theta_j + \alpha \sum_{i=1}^n \left( y^{(i)} - h_\theta(x^{(i)}) \right)x_{j}^{(i)}
\end{equation}



This is called batch gradient descent. For linear regression with least-squares, this is only one optimum, the global one because $J$ is a convex quadratic function. 

The alternative to batch gradient descent is stochastic gradient descent, where we run the gradient descent rule for each training example. This eliminates the need to scan through the entire training set for each step.

[^1]: Notice that the update is proportional to the error (the difference between $y$ and $h(x)$).

## Analytic solution / normal equations

We can also analytically derive the optimal $\theta$ since we know there's a global optimum. Let $X$ be a $n \times (d+1)$ matrix of input examples. That is, each of the $n$ examples gets its own row with $(d+1)$ columns. 

First, note that it is totally valid to write

\begin{equation}
h_\theta(x^{(i)}) = {(\idx{x}{i})}^\mathsf{T}\theta
\end{equation}

Then, we can just run them all through with $X\theta$. This enables us to say

\begin{equation}
J(\theta) = \frac{1}{2}{\left(X\theta - \vec{y}\right)}^\mathsf{T}\left(X\theta - \vec{y}\right)
\end{equation}

Through some matrix calculus, we find that

\begin{equation}
\nabla_\theta J(\theta) = {X}^\mathsf{T}X\theta - {X}^\mathsf{T}\vec{y}
\end{equation}

Setting this equal to nil, we find

\begin{equation}
{X}^\mathsf{T}X\theta  = {X}^\mathsf{T}\vec{y}
\end{equation}

We read off the value of $\theta$ that minimizes $J(\theta)$ as

\begin{equation}
\theta = \left( {X}^\mathsf{T}X\right)^{-1}{X}^\mathsf{T}\vec{y}
\end{equation}
