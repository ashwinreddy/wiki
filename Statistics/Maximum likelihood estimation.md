**Maximum likelihood estimation (MLE)** estimates the parameters of a [[statistical model]] by picking the value that maximizes the [[likelihood function]] $L(\theta ; x)$.

$$
\hat\theta_{\mathsf{MLE}} = \arg\max_{\theta \in \Theta} L(\theta ; x)
$$

Notice that the data $x$ is fixed when we compute the MLE. 

Typically, it is easier to work with the log-likelihood function $\ell(\theta; x) = \log L(\theta; x)$. If we know that $\ell$ is differentiable, we might solve

\begin{equation}
\frac{\partial \ell(\theta; x)}{\partial \theta} = 0
\end{equation}
