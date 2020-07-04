**Maximum likelihood estimation (MLE)** is a method for finding the parameters to a [[statistical model]] by evaluating how likely they are to be right with the data $y$ on hand.

$$
\hat\theta = \arg\max_{\theta \in \Theta} \hat{L}(\theta ; y)
$$

It can be convenient to use a log likelihood replacement $\ell(\theta) = \log L(\theta)$ and use the derivative to find the extremal.

\begin{equation}
\pdv{\ell}{\theta_i} = 0 \tag{Likelihood Equation}
\end{equation}

We should also check that the second derivative is negative.
