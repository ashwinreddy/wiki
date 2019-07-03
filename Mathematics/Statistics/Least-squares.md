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

If we just follow what Equation \ref{eq:lms-grad-descent} says, we would repeat the following until convergence for every $j$:

\begin{equation}
\theta_j \leftarrow \theta_j + \alpha \sum_{i=1}^n \left( y^{(i)} - h_\theta(x^{(i)}) \right)x_{j}^{(i)}
\end{equation}

[^1]: Notice that the update is proportional to the error (the difference between $y$ and $h(x)$).