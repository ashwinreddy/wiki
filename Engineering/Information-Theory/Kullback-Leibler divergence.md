The **Kullback-Leibler (KL) divergence** is a measure of relative entropy, the inefficiency in using a distribution $Q$ to model distribution $P$. It operates in a manner similiar to a metric but it is not symmetric. 

\begin{equation}
D_{KL}(P \parallel Q) \doteq \mathbb{E}_{x \sim P}\left[\log \frac{P(X)}{Q(X)}\right]
\end{equation}

Suppose $P$ and $Q$ are distributions from the same parameterized family and differ only slightly in those parameters. For example, say $P$ is the true model for a phenomenon and has parameter $\theta_0$ and $Q$ is our current best guess with $\theta$. Our goal is to determine the value for

$$
f_{\theta_0}(\theta) = D_{KL}\left(P(\theta_0) \parallel Q(\theta)\right)
$$


Since the KL divergence has a minimum at zero, the [[Taylor series]] approximation for the divergence kicks in with the quadratic.


$$
f_{\theta_0}(\theta) =  \frac{1}{2} \sum_{jk} \Delta \theta^j \Delta\theta^k f_{\theta_0}''(\theta_0) + \order{\Delta \theta ^ 3}
$$

# Properties

* [[Gibbs' inequality]]


