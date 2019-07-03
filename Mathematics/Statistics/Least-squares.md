
\\[
J(\theta) = \frac{1}{2}\sum_{i=1}^n \left( h_\theta\left(  x^{(i)} \right) - y^{(i)}  \right)^2
\\]


The gradient descent algorithm makes incremental simultaneous updates to each $\theta_j$ that make $J(\theta)$ smaller:

\begin{equation} \label{eq:lms-grad-descent}
\theta_j \leftarrow \theta_j - \alpha \partialderivative{J(\theta)}{\theta_j}
\end{equation}

The learning rate $\alpha$ is a hyperparameter. Note that Equation \ref{eq:lms-grad-descent} requires the evaluation of the derivative of cost w.r.t. the weights. We can determine that by hand. Let's first assume there's only one example $(x, y)$:

\begin{align*}
\partialderivative{J(\theta)}{\theta_j} &= \partialderivative{}{\theta_j} \frac{1}{2}\left( h_\theta(x) - y \right)^2 \\
&= 2 \cdot \frac{1}{2}\left(h_\theta(x) - y \right)^2\cdot \partialderivative{}{\theta_j}\left(h_\theta(x) - y\right) \\
&= \left( h_\theta(x) - y \right)\cdot\partialderivative{}{\theta_j}\left( \transpose{\theta}x -y \right) \\
&= \left( h_\theta(x) - y \right)x_j
\end{align*}