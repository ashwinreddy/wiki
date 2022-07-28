**Maximum likelihood estimation (MLE)** estimates the parameters of a [[statistical model]] by picking the value that maximizes the [[likelihood function]] $L(\theta ; x)$.

$$
\hat\theta_{\mathsf{MLE}} = \arg\max_{\theta \in \Theta} L(\theta ; x)
$$

Notice that the data $x$ is fixed when we compute the MLE. 

Suppose we know that $L(\theta ; x)$ is differentiable. Then we might solve for

\begin{equation}
\frac{\partial L(\theta)}{\partial \theta} = 0
\end{equation}

We call the derivative of the likelihood function the [[score function]].