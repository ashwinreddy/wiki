**Multivariate normal distribution** generalizes the [[normal distribution]] to higher dimensions. We might also call this a **Gaussian vector** or **jointly Gaussian** [[random variable]]. We would denote

\begin{equation}
\mathbf{X} \sim \mathcal{N}(\mathbf{\mu}, \mathbf{\Sigma})
\end{equation}

for mean vector $\mathbf{\mu}$ and [[covariance matrix]] $\mathbf{\Sigma}$. Then we can write

$$
\mathbf{Z} = \mathbf{AW}
$$

\begin{equation}
\mathbf{X} = \mathbf{\mu}_x + \mathbf{Z} 
\end{equation}

where $A$ is an [[invertible matrix]] and $\mathbf{W}$ is a column vector of [[iid]] [[standard normal|normal distribution#standard normal distribution]].



The joint density is given by

\begin{equation}
f(\mathbf{x}) = \frac{1}{\sqrt{(2\pi)^n \det \Sigma}}\exp\left(-\frac{1}{2}(\mathbf{x}-\mu)\^\mathsf{T}\Sigma^{-1}(\mathbf{x}-\mu)\right)
\end{equation}

# Properties

* The linear combination of jointly Gaussian random variables $v^\mathsf{T}X$ is distributed [[normally|normal distribution]] as a single-variate. It has mean $v^\mathsf{T}\mathbf{\mu}$ and the variance is $v\^\mathsf{T}\Sigma\mathsf{v}$.

The [[covariance matrix]] is given by

$$
\Sigma = \mathbf{A}\mathbf{A}^\mathsf{T}
$$

* If $X$ and $Y$ are jointly Gaussian, the [[MMSE|minimum mean square error]] is the [[LLSE|Linear least squares estimation]] and we have

$$
\mathbb{E}[Y|X] = \mu_Y + \Sigma_{Y,X}\Sigma^{-1}_X X
$$

* Also we can write

$$
X = \mu_X + \Sigma_{XY}\Sigma_Y^{-1}(Y - \mu_Y) + V
$$

where $V\sim \mathcal{N}(0, \Sigma_x - \Sigma_{xy}\Sigma_Y^{-1}\Sigma_{yx})$