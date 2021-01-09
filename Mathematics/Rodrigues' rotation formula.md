**Rodrigues' formula** tells you how to compute the rotation of a vector $\vec{v}$ about $\vec{k}$ through angle $\theta$.

\begin{equation}
\vec{v}' = \vec{v}\_\parallel + \vec{v}\_\perp\cos\theta + (\vec{k} \times \vec{v}\_\perp)\sin\theta
\end{equation}

First, consider a decomposition of the vector to parallel and perpendicular components to axis $\vec{k}$

$$
\vec{v} = \vec{v}\_\parallel + \vec{v}_\perp
$$

\begin{gather}
\vec{v}' = \vec{v}\_\parallel + \vec{v}\_\perp\cos\theta + (\vec{u} \times \vec{v}\_\perp)\sin\theta \\\\\
\vec{v}\_\parallel = \vec{u}(\vec{u}\cdot\vec{v}) \\\\\
\vec{v}\_\perp + \vec{v}_\parallel = \vec{v} 
\end{gather}

<<Warn("fix")>>