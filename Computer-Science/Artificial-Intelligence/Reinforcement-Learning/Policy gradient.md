A **policy gradient** method tries to directly optimize a parameterized policy $\pi_\theta$. In other words, the goal is to find the best $\theta$ for the objective $J$

\begin{equation}
\theta^\star = \arg\max_\theta J(\theta)
\end{equation}

The obvious approach is to use [[gradient descent]].