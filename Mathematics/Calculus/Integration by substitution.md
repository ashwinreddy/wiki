**Integration by substitution** is a technique for computing integrals by running the chain rule in reverse. In one dimension,

\begin{equation}
\int_a^b \left[ f\left(\phi\left(x\right)\right)\dv{\phi}{x}\right] \dd{x} = \int_{\phi(a)}^{\phi(b)} f(u)\\, \dd{u}
\end{equation}

As an easy example, imagine $\phi(x) = \alpha x$. Then the rule says

\begin{equation}
\int_a^b \alpha f\left(\phi\left(x\right)\right) \dd{x} = \int_{\phi(a)}^{\phi(b)} f(u)\\, \dd{u}
\end{equation}


In multiple dimensions we need to use the [[Jacobian]] to measure stretching.

\begin{equation}
\int_U f(\phi(\vec{u})) \left\vert \det \mathcal{J}_\phi(\vec{u}) \right\vert \dd{\vec{u}} = \int\_{\phi(U)} f(\vec{v})\, \dd{\vec{v}}
\end{equation}