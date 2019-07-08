# Feature Maps


Let's imagine we want a richer representation of $x \in \mathbb{R}^d$ for our model. We could write a function $\phi: \mathbb{R}^d \to \mathbb{R}^p$. For example, $\phi(x) = \langle 1, x, x^2, x^3 \rangle$. Now, we make the replacement $x \to \phi(x)$. In the end, stochastic gradient descent looks the same if we make the replacement:

\[
\theta \leftarrow \theta + \alpha \left(\idx{y}{i} - \transpose{\theta}\phi(\idx{x}{i})\right)\phi(\idx{x}{i})
\]


What if $\phi(x)$ is high-dimensional? If we note that $\theta$ can be written as a linear combination of the vectors $\phi(\idx{x}{1}), \dots, \phi(\idx{x}{n})$, the update to the coefficients of the linear combination is

\[
\beta_i \leftarrow \beta_i + \alpha\left(\idx{y}{i} - \transpose{\theta}\phi(\idx{x}{i})\right)
\]

If we eliminate $\theta$ completely, we can write

\begin{align*}
\beta_i &\leftarrow \beta_i + \alpha\left( \idx{y}{i} - \sum_{j=1}^n \beta_j \transpose\phi(\idx{x}{j}) \phi(\idx{x}{i})\right) \\
&\leftarrow \beta_i + \alpha\left( \idx{y}{i} - \sum_{j=1}^n \beta_j \left\langle\phi\left(\idx{x}{j}\right) , \phi\left(\idx{x}{i}\right)\right\rangle\right) 
\end{align*}

But now notice that we never need to compute $\phi$ explicitly, only the inner product. If we define the kernel as $K: \mathcal{X} \times \mathcal{X} \to \mathbb{R}$ with $K(x, z) = \langle \phi(x), \phi(z) \rangle$, we only have to worry if there exists some $\phi$ such that $K$ can be constructed. $K$ serves roughly as a similarity metric.