**Gradient descent** is an algorithm that tries to find the an input $\theta$ that minimizes a function $F$. The idea is to make updates

$$
\Delta \theta \approx \alpha \pdv{F}{\theta}
$$

The vanilla algorithm consists of computing the [[gradient]] and taking a step in that direction, scaled by a factor $\alpha$.

\begin{equation}
\theta_{n+1} = \theta_n - \alpha \nabla F(\theta_n) \tag{Update Rule}
\end{equation}