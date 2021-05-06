**Multivariate normal distribution** generalizes the [[normal distribution]] to higher dimensions. We might also call this a **Gaussian vector** or **jointly Gaussian** [[random variable]]. We would denote

\begin{equation}
\mathbf{X} \sim \mathcal{N}(\mathbf{\mu}, \mathbf{\Sigma})
\end{equation}

for mean vector $\mathbf{\mu}$ and [[covariance matrix]] $\mathbf{\Sigma}$. Then we can write


\begin{equation}
\mathbf{X} = \mathbf{\mu_x} + \mathbf{AZ}
\end{equation}

where $A$ is an [[invertible matrix]] and $\mathbf{Z}$ is a column vector of [[iid]] [[standard normal|normal distribution#standard normal distribution]].

# Properties

* If $X$ and $Y$ are jointly Gaussian, the [[MMSE|minimum mean square error]] is the [[LLSE|Linear least squares estimation]]
* Also we can write

$$
X = \mu_X + \Sigma_{XY}\Sigma_Y^{-1}(Y - \mu_Y) + V
$$

where $V\sim \mathcal{N}(0, \Sigma_x - \Sigma_{xy}\Sigma_Y^{-1}\Sigma_{yx})$