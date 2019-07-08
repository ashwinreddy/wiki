# Feature Maps

Let's imagine we want a richer representation of $x \in \mathbb{R}^d$ for our model. We could write a function $\phi: \mathbb{R}^d \to \mathbb{R}^p$ (where presumably $p>d$). For example, $\phi(x) = \langle 1, x, x^2, x^3 \rangle$. Now, we make the replacement $x \to \phi(x)$. In the end, stochastic gradient descent looks the same if we make the replacement:

\\[
\theta \leftarrow \theta + \alpha \left(y^{(i)} - {\theta}^{\mathsf{T}}\phi(x^{(i)})\right)\phi(x^{(i)})
\\]


What if $\phi(x)$ is high-dimensional? If we note that $\theta$ can be written as a linear combination of the vectors $\phi({x}^{(1)}), \dots, \phi({x}^{(n)})$, the update to the coefficients of the linear combination is

\\[
\beta_i \leftarrow \beta_i + \alpha\left(y^{(i)} - {\theta}^{\mathsf{T}}\phi(x^{(i)})\right)
\\]

If we eliminate $\theta$ completely, we can write

\begin{align}
\beta_i &\leftarrow \beta_i + \alpha\left( y^{(i)} - \sum_{j=1}^n \beta_j \phi({x}^{(j)})^\mathsf{T} \phi(x^{(i)})\right) \\\
&\leftarrow \beta_i + \alpha\left( y^{(i)} - \sum_{j=1}^n \beta_j \left\langle\phi\left({x}^{(j)}\right) , \phi\left(x^{(i)}\right)\right\rangle\right) 
\end{align}

But now notice that we never need to compute $\phi$ explicitly, only the inner product. If we define the kernel as $K: \mathcal{X} \times \mathcal{X} \to \mathbb{R}$ with $K(x, z) = \langle \phi(x), \phi(z) \rangle$, we only have to worry if there exists some $\phi$ such that $K$ can be constructed. $K$ serves roughly as a similarity metric.


> For $K$ to be a valid kernel, it is neccessary and sufficient that it is symmetric PSD.




The functional margin ${\hat{\gamma}}^{(i)}$ is defined by

\\[
\hat{\gamma}^{(i)} = {y}^{(i)}\left({w}^\mathsf{T}{x}^{(i)}+b\right)
\\]

The geometric margin is

\\[
\gamma = \min_i {\hat\gamma}^{(i)}
\\]