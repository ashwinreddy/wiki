**Principal component analysis (PCA)** is a [[dimensionality reduction]] technique. Intuitively, we're trying to find structure in our data. But how do we find a good, representative basis? 

First, we'll project onto a vector $\vec{w}$:

\begin{equation}
\vec{p}_i = \langle\vec{x}_i, \vec{w}\rangle\vec{w}, \qquad \lVert \vec{w} \rVert =1
\end{equation}

Let's define an error

\begin{equation}
\operatorname{MSE}(\vec{w}) = \frac{1}{n}\sum_{i=1}^n e_i^2 = \sum_{i=1}^n \lVert \vec{x}_i - \vec{p}_i \rVert^2
\end{equation}