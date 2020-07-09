A **trajectory** is a sequence of states and actions. A trajectory has an associated probability:

\begin{equation}
p(\tau) = p(\mathbf{s}_1, \mathbf{a}_1, \ldots, \mathbf{s}_T, \mathbf{a}_T) = p(\mathbf{s}\_1) \prod\_{t=1}^T p(\mathbf{a}_t \mid \mathbf{s}\_t , \theta)p(\mathbf{s}\_{t+1} \mid \mathbf{s}_t, \mathbf{a}_t)
\end{equation}